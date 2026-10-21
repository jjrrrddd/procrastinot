create table if not exists public.study_buddy_profiles (
    user_id uuid primary key references auth.users (id) on delete cascade,
    friend_code text not null unique check (friend_code ~ '^[A-F0-9]{16}$'),
    display_name text not null,
    points integer not null default 0 check (points >= 0),
    current_level integer not null default 1 check (current_level >= 1),
    current_streak integer not null default 0 check (current_streak >= 0),
    updated_at timestamptz not null default now()
);

create table if not exists public.study_buddy_connections (
    user_id uuid not null references auth.users (id) on delete cascade,
    buddy_id uuid not null references auth.users (id) on delete cascade,
    created_at timestamptz not null default now(),
    primary key (user_id, buddy_id),
    check (user_id <> buddy_id)
);

create table if not exists public.study_buddy_requests (
    id uuid primary key default gen_random_uuid(),
    sender_id uuid not null references auth.users (id) on delete cascade,
    receiver_id uuid not null references auth.users (id) on delete cascade,
    status text not null default 'pending'
        check (status in ('pending', 'accepted', 'declined', 'cancelled')),
    created_at timestamptz not null default now(),
    check (sender_id <> receiver_id)
);

create table if not exists public.study_buddy_shares (
    user_id uuid not null references auth.users (id) on delete cascade,
    buddy_id uuid not null references auth.users (id) on delete cascade,
    share_profile boolean not null default false,
    share_subject boolean not null default false,
    share_tasks boolean not null default false,
    share_garden boolean not null default false,
    updated_at timestamptz not null default now(),
    primary key (user_id, buddy_id),
    check (user_id <> buddy_id)
);

alter table public.study_buddy_shares
    add column if not exists share_subject boolean not null default false;

create unique index if not exists study_buddy_requests_one_pending_pair
    on public.study_buddy_requests (
        least(sender_id, receiver_id),
        greatest(sender_id, receiver_id)
    )
    where status = 'pending';

create index if not exists study_buddy_requests_receiver_pending
    on public.study_buddy_requests (receiver_id, created_at desc)
    where status = 'pending';

alter table public.study_buddy_profiles enable row level security;
alter table public.study_buddy_connections enable row level security;
alter table public.study_buddy_requests enable row level security;

drop policy if exists "Users can view their own and buddies' stats" on public.study_buddy_profiles;
create policy "Users can view their own and buddies' stats"
    on public.study_buddy_profiles for select
    to authenticated
    using (
        user_id = (select auth.uid())
        or exists (
            select 1
            from public.study_buddy_connections connection
            where connection.user_id = (select auth.uid())
              and connection.buddy_id = study_buddy_profiles.user_id
        )
    );

drop policy if exists "Users can view their own buddy connections" on public.study_buddy_connections;
create policy "Users can view their own buddy connections"
    on public.study_buddy_connections for select
    to authenticated
    using (user_id = (select auth.uid()));

drop policy if exists "Users can view their own buddy requests" on public.study_buddy_requests;
create policy "Users can view their own buddy requests"
    on public.study_buddy_requests for select
    to authenticated
    using (
        sender_id = (select auth.uid())
        or receiver_id = (select auth.uid())
    );

revoke all on public.study_buddy_profiles from anon, authenticated;
revoke all on public.study_buddy_connections from anon, authenticated;
revoke all on public.study_buddy_requests from anon, authenticated;
grant select (user_id, display_name, points, current_level, current_streak, updated_at)
    on public.study_buddy_profiles to authenticated;
revoke select (user_id, display_name, points, current_level, current_streak, updated_at)
    on public.study_buddy_profiles from authenticated;
grant select on public.study_buddy_connections to authenticated;
grant select on public.study_buddy_requests to authenticated;

create or replace function public.sync_study_buddy_progress(
    p_points integer,
    p_current_level integer,
    p_current_streak integer
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_display_name text;
    v_friend_code text;
    v_attempt integer := 0;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to sync buddy progress.';
    end if;
    if p_points < 0 or p_points > 10000000
        or p_current_level < 1 or p_current_level > 100000
        or p_current_streak < 0 or p_current_streak > 100000 then
        raise exception 'The progress values are outside the allowed range.';
    end if;

    select profile.display_name
    into v_display_name
    from public.student_profiles profile
    where profile.user_id = v_user_id;

    if v_display_name is null then
        raise exception 'Your student profile was not found.';
    end if;

    loop
        v_attempt := v_attempt + 1;
        v_friend_code := upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 16));
        begin
            insert into public.study_buddy_profiles (
                user_id, friend_code, display_name, points, current_level, current_streak, updated_at
            )
            values (
                v_user_id, v_friend_code, v_display_name, p_points, p_current_level, p_current_streak, now()
            )
            on conflict (user_id) do update
                set display_name = excluded.display_name,
                    points = excluded.points,
                    current_level = excluded.current_level,
                    current_streak = excluded.current_streak,
                    updated_at = now();
            exit;
        exception when unique_violation then
            if v_attempt >= 5 then
                raise exception 'Could not create a unique friend code. Please try again.';
            end if;
        end;
    end loop;
end;
$$;

create or replace function public.lookup_study_buddy_by_code(p_friend_code text)
returns text
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_target_id uuid;
    v_target_name text;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to look up a study buddy.';
    end if;
    if p_friend_code is null or upper(trim(p_friend_code)) !~ '^[A-F0-9]{16}$' then
        raise exception 'Enter a valid 16-character friend code.';
    end if;

    select profile.user_id, profile.display_name
    into v_target_id, v_target_name
    from public.study_buddy_profiles profile
    where profile.friend_code = upper(trim(p_friend_code));

    if v_target_id is null then
        raise exception 'No account was found with that friend code.';
    end if;
    if v_target_id = v_user_id then
        raise exception 'That is your own friend code.';
    end if;

    return v_target_name;
end;
$$;

create or replace function public.send_study_buddy_request(p_friend_code text)
returns text
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_target_id uuid;
    v_target_name text;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to add a study buddy.';
    end if;
    if p_friend_code is null or upper(trim(p_friend_code)) !~ '^[A-F0-9]{16}$' then
        raise exception 'Enter a valid 16-character friend code.';
    end if;

    select profile.user_id, profile.display_name
    into v_target_id, v_target_name
    from public.study_buddy_profiles profile
    where profile.friend_code = upper(trim(p_friend_code));

    if v_target_id is null then
        raise exception 'No account was found with that friend code.';
    end if;
    if v_target_id = v_user_id then
        raise exception 'You cannot add your own account as a buddy.';
    end if;
    if exists (
        select 1 from public.study_buddy_connections connection
        where connection.user_id = v_user_id and connection.buddy_id = v_target_id
    ) then
        raise exception 'You are already study buddies.';
    end if;
    if exists (
        select 1 from public.study_buddy_requests request
        where request.status = 'pending'
          and (
              (request.sender_id = v_user_id and request.receiver_id = v_target_id)
              or (request.sender_id = v_target_id and request.receiver_id = v_user_id)
          )
    ) then
        raise exception 'A buddy request is already pending between these accounts.';
    end if;
    if (
        select count(*) from public.study_buddy_requests request
        where request.sender_id = v_user_id
          and request.created_at > now() - interval '1 day'
    ) >= 20 then
        raise exception 'You have reached the daily buddy request limit. Try again tomorrow.';
    end if;

    insert into public.study_buddy_requests (sender_id, receiver_id)
    values (v_user_id, v_target_id);

    return v_target_name;
end;
$$;

create or replace function public.respond_to_study_buddy_request(
    p_request_id uuid,
    p_accept boolean
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_request public.study_buddy_requests%rowtype;
begin
    if auth.uid() is null then
        raise exception 'You must be signed in to respond to a buddy request.';
    end if;

    update public.study_buddy_requests request
    set status = case when p_accept then 'accepted' else 'declined' end
    where request.id = p_request_id
      and request.receiver_id = auth.uid()
      and request.status = 'pending'
    returning request.* into v_request;

    if not found then
        raise exception 'That pending buddy request was not found.';
    end if;

    if p_accept then
        insert into public.study_buddy_connections (user_id, buddy_id)
        values
            (v_request.sender_id, v_request.receiver_id),
            (v_request.receiver_id, v_request.sender_id)
        on conflict do nothing;
    end if;
end;
$$;

create or replace function public.cancel_study_buddy_request(p_request_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
    if auth.uid() is null then
        raise exception 'You must be signed in to cancel a buddy request.';
    end if;

    update public.study_buddy_requests request
    set status = 'cancelled'
    where request.id = p_request_id
      and request.sender_id = auth.uid()
      and request.status = 'pending';

    if not found then
        raise exception 'That pending buddy request was not found.';
    end if;
end;
$$;

create or replace function public.remove_study_buddy(p_buddy_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
    if auth.uid() is null or p_buddy_id = auth.uid() then
        raise exception 'Invalid buddy account.';
    end if;

    delete from public.study_buddy_connections connection
    where (connection.user_id = auth.uid() and connection.buddy_id = p_buddy_id)
       or (connection.user_id = p_buddy_id and connection.buddy_id = auth.uid());

    if not found then
        raise exception 'That study buddy was not found.';
    end if;
end;
$$;

create or replace function public.get_study_buddy_dashboard()
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_result jsonb;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to view study buddies.';
    end if;

    select jsonb_build_object(
        'friend_code', own_profile.friend_code,
        'friends', coalesce((
            select jsonb_agg(jsonb_build_object(
                'user_id', buddy_profile.user_id,
                'display_name', buddy_profile.display_name,
                'profile_shared', coalesce(sharing.share_profile, false),
                'points', case when coalesce(sharing.share_profile, false)
                    then buddy_profile.points else null end,
                'current_level', case when coalesce(sharing.share_profile, false)
                    then buddy_profile.current_level else null end,
                'current_streak', case when coalesce(sharing.share_profile, false)
                    then buddy_profile.current_streak else null end
            ) order by buddy_profile.display_name)
            from public.study_buddy_connections connection
            join public.study_buddy_profiles buddy_profile
                on buddy_profile.user_id = connection.buddy_id
            left join public.study_buddy_shares sharing
                on sharing.user_id = connection.buddy_id
               and sharing.buddy_id = v_user_id
            where connection.user_id = v_user_id
        ), '[]'::jsonb),
        'incoming', coalesce((
            select jsonb_agg(jsonb_build_object(
                'request_id', request.id,
                'user_id', request.sender_id,
                'display_name', sender.display_name,
                'created_at', request.created_at
            ) order by request.created_at)
            from public.study_buddy_requests request
            join public.study_buddy_profiles sender
                on sender.user_id = request.sender_id
            where request.receiver_id = v_user_id and request.status = 'pending'
        ), '[]'::jsonb),
        'outgoing', coalesce((
            select jsonb_agg(jsonb_build_object(
                'request_id', request.id,
                'display_name', receiver.display_name,
                'created_at', request.created_at
            ) order by request.created_at)
            from public.study_buddy_requests request
            join public.study_buddy_profiles receiver
                on receiver.user_id = request.receiver_id
            where request.sender_id = v_user_id and request.status = 'pending'
        ), '[]'::jsonb)
    )
    into v_result
    from public.study_buddy_profiles own_profile
    where own_profile.user_id = v_user_id;

    if v_result is null then
        raise exception 'Buddy profile is not ready. Reload and try again.';
    end if;

    return v_result;
end;
$$;

revoke all on function public.sync_study_buddy_progress(integer, integer, integer) from public, anon, authenticated;
revoke all on function public.lookup_study_buddy_by_code(text) from public, anon, authenticated;
revoke all on function public.send_study_buddy_request(text) from public, anon, authenticated;
revoke all on function public.respond_to_study_buddy_request(uuid, boolean) from public, anon, authenticated;
revoke all on function public.cancel_study_buddy_request(uuid) from public, anon, authenticated;
revoke all on function public.remove_study_buddy(uuid) from public, anon, authenticated;
revoke all on function public.get_study_buddy_dashboard() from public, anon, authenticated;

grant execute on function public.sync_study_buddy_progress(integer, integer, integer) to authenticated;
grant execute on function public.lookup_study_buddy_by_code(text) to authenticated;
grant execute on function public.send_study_buddy_request(text) to authenticated;
grant execute on function public.respond_to_study_buddy_request(uuid, boolean) to authenticated;
grant execute on function public.cancel_study_buddy_request(uuid) to authenticated;
grant execute on function public.remove_study_buddy(uuid) to authenticated;
grant execute on function public.get_study_buddy_dashboard() to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
    'profile-avatars',
    'profile-avatars',
    false,
    5242880,
    array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
    set public = false,
        file_size_limit = excluded.file_size_limit,
        allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Users can upload their own buddy avatar" on storage.objects;
create policy "Users can upload their own buddy avatar"
    on storage.objects for insert
    to authenticated
    with check (
        bucket_id = 'profile-avatars'
        and name = ((select auth.uid())::text || '/avatar')
    );

drop policy if exists "Users can update their own buddy avatar" on storage.objects;
create policy "Users can update their own buddy avatar"
    on storage.objects for update
    to authenticated
    using (
        bucket_id = 'profile-avatars'
        and name = ((select auth.uid())::text || '/avatar')
    )
    with check (
        bucket_id = 'profile-avatars'
        and name = ((select auth.uid())::text || '/avatar')
    );

drop policy if exists "Users can remove their own buddy avatar" on storage.objects;
create policy "Users can remove their own buddy avatar"
    on storage.objects for delete
    to authenticated
    using (
        bucket_id = 'profile-avatars'
        and name = ((select auth.uid())::text || '/avatar')
    );

drop policy if exists "Buddy participants can view shared avatars" on storage.objects;
create policy "Buddy participants can view shared avatars"
    on storage.objects for select
    to authenticated
    using (
        bucket_id = 'profile-avatars'
        and (
            name = ((select auth.uid())::text || '/avatar')
            or exists (
                select 1
                from public.study_buddy_requests request
                where request.status = 'pending'
                  and (
                      (
                          request.receiver_id = (select auth.uid())
                          and storage.objects.name = (request.sender_id::text || '/avatar')
                      )
                      or (
                          request.sender_id = (select auth.uid())
                          and storage.objects.name = (request.receiver_id::text || '/avatar')
                      )
                  )
            )
            or exists (
                select 1
                from public.study_buddy_connections connection
                where connection.user_id = (select auth.uid())
                                    and storage.objects.name = (connection.buddy_id::text || '/avatar')
            )
        )
    );

create table if not exists public.study_buddy_task_snapshots (
    user_id uuid primary key references auth.users (id) on delete cascade,
    tasks jsonb not null default '[]'::jsonb,
    garden jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now()
);

create table if not exists public.study_buddy_chats (
    id uuid primary key default gen_random_uuid(),
    chat_type text not null check (chat_type in ('direct', 'group')),
    name text not null default '',
    created_by uuid not null references auth.users (id) on delete cascade,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.study_buddy_chat_members (
    chat_id uuid not null references public.study_buddy_chats (id) on delete cascade,
    user_id uuid not null references auth.users (id) on delete cascade,
    joined_at timestamptz not null default now(),
    primary key (chat_id, user_id)
);

create table if not exists public.study_buddy_chat_messages (
    id bigint generated by default as identity primary key,
    chat_id uuid not null references public.study_buddy_chats (id) on delete cascade,
    sender_id uuid not null references auth.users (id) on delete cascade,
    body text not null check (char_length(body) between 1 and 2000),
    created_at timestamptz not null default now()
);

create index if not exists study_buddy_chat_messages_recent
    on public.study_buddy_chat_messages (chat_id, created_at desc);

alter table public.study_buddy_shares enable row level security;
alter table public.study_buddy_task_snapshots enable row level security;
alter table public.study_buddy_chats enable row level security;
alter table public.study_buddy_chat_members enable row level security;
alter table public.study_buddy_chat_messages enable row level security;

revoke all on public.study_buddy_shares from anon, authenticated;
revoke all on public.study_buddy_task_snapshots from anon, authenticated;
revoke all on public.study_buddy_chats from anon, authenticated;
revoke all on public.study_buddy_chat_members from anon, authenticated;
revoke all on public.study_buddy_chat_messages from anon, authenticated;

drop function if exists public.set_study_buddy_sharing(uuid, boolean, boolean, boolean);

create or replace function public.set_study_buddy_sharing(
    p_buddy_id uuid,
    p_share_profile boolean,
    p_share_subject boolean,
    p_share_tasks boolean,
    p_share_garden boolean
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
begin
    if v_user_id is null or p_buddy_id = v_user_id then
        raise exception 'Invalid buddy account.';
    end if;
    if not exists (
        select 1 from public.study_buddy_connections connection
        where connection.user_id = v_user_id and connection.buddy_id = p_buddy_id
    ) then
        raise exception 'Sharing can only be changed for an accepted study buddy.';
    end if;

    insert into public.study_buddy_shares (
        user_id, buddy_id, share_profile, share_subject, share_tasks, share_garden, updated_at
    )
    values (
        v_user_id, p_buddy_id, p_share_profile, p_share_subject, p_share_tasks, p_share_garden, now()
    )
    on conflict (user_id, buddy_id) do update
        set share_profile = excluded.share_profile,
            share_subject = excluded.share_subject,
            share_tasks = excluded.share_tasks,
            share_garden = excluded.share_garden,
            updated_at = excluded.updated_at;

    if exists (
        select 1 from public.study_buddy_shares sharing
        where sharing.user_id = v_user_id and sharing.share_tasks
    ) then
        return;
    elsif exists (
        select 1 from public.study_buddy_shares sharing
        where sharing.user_id = v_user_id and sharing.share_garden
    ) then
        update public.study_buddy_task_snapshots snapshot
        set tasks = '[]'::jsonb, updated_at = now()
        where snapshot.user_id = v_user_id;
    else
        delete from public.study_buddy_task_snapshots snapshot
        where snapshot.user_id = v_user_id;
    end if;
end;
$$;

create or replace function public.get_study_buddy_shares()
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_result jsonb;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to view sharing settings.';
    end if;

    select coalesce(jsonb_agg(jsonb_build_object(
        'buddy_id', connection.buddy_id,
        'share_profile', coalesce(sharing.share_profile, false),
        'share_subject', coalesce(sharing.share_subject, false),
        'share_tasks', coalesce(sharing.share_tasks, false),
        'share_garden', coalesce(sharing.share_garden, false)
    )), '[]'::jsonb)
    into v_result
    from public.study_buddy_connections connection
    left join public.study_buddy_shares sharing
        on sharing.user_id = v_user_id and sharing.buddy_id = connection.buddy_id
    where connection.user_id = v_user_id;

    return v_result;
end;
$$;

create or replace function public.sync_study_buddy_task_snapshot(
    p_tasks jsonb,
    p_garden jsonb
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_tasks jsonb;
    v_garden jsonb;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to sync task progress.';
    end if;
    if jsonb_typeof(p_tasks) is distinct from 'array' then
        raise exception 'The task snapshot is invalid.';
    end if;
    if jsonb_array_length(p_tasks) > 200
       or jsonb_typeof(p_garden) is distinct from 'object' then
        raise exception 'The task snapshot is invalid.';
    end if;

    if not exists (
        select 1 from public.study_buddy_shares sharing
        where sharing.user_id = v_user_id
          and (sharing.share_tasks or sharing.share_garden)
    ) then
        delete from public.study_buddy_task_snapshots snapshot
        where snapshot.user_id = v_user_id;
        return;
    end if;

    if exists (
        select 1 from public.study_buddy_shares sharing
        where sharing.user_id = v_user_id and sharing.share_tasks
    ) then
        select coalesce(jsonb_agg(jsonb_build_object(
            'title', left(coalesce(task.value ->> 'title', ''), 100),
            'completed', task.value ->> 'completed' = 'true',
            'dueDate', case
                when task.value ->> 'dueDate' ~ '^\d{4}-\d{2}-\d{2}$'
                    then task.value ->> 'dueDate'
                else ''
            end,
            'difficulty', case
                when task.value ->> 'difficulty' in ('small', 'medium', 'large')
                    then task.value ->> 'difficulty'
                else 'medium'
            end
        )), '[]'::jsonb)
        into v_tasks
        from jsonb_array_elements(p_tasks) task;
    else
        v_tasks := '[]'::jsonb;
    end if;

    v_garden := jsonb_build_object(
        'blooms', greatest(0, least(1000, coalesce((p_garden ->> 'blooms')::integer, 0))),
        'growing', greatest(0, least(1000, coalesce((p_garden ->> 'growing')::integer, 0))),
        'wilted', greatest(0, least(1000, coalesce((p_garden ->> 'wilted')::integer, 0)))
    );

    insert into public.study_buddy_task_snapshots (user_id, tasks, garden, updated_at)
    values (v_user_id, v_tasks, v_garden, now())
    on conflict (user_id) do update
        set tasks = excluded.tasks,
            garden = excluded.garden,
            updated_at = excluded.updated_at;
end;
$$;

create or replace function public.get_study_buddy_content(p_buddy_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_sharing public.study_buddy_shares%rowtype;
    v_result jsonb;
begin
    if v_user_id is null or p_buddy_id = v_user_id or not exists (
        select 1 from public.study_buddy_connections connection
        where connection.user_id = v_user_id and connection.buddy_id = p_buddy_id
    ) then
        raise exception 'That account is not an accepted study buddy.';
    end if;

    select * into v_sharing
    from public.study_buddy_shares sharing
    where sharing.user_id = p_buddy_id and sharing.buddy_id = v_user_id;

    select jsonb_build_object(
        'profile_shared', coalesce(v_sharing.share_profile, false),
        'profile', case when coalesce(v_sharing.share_profile, false) then (
            select jsonb_build_object(
                'display_name', buddy.display_name,
                'points', buddy.points,
                'current_level', buddy.current_level,
                'current_streak', buddy.current_streak,
                'study_pace', student.study_pace
            )
            from public.study_buddy_profiles buddy
            left join public.student_profiles student on student.user_id = buddy.user_id
            where buddy.user_id = p_buddy_id
        ) else null end,
        'favorite_subject', case when coalesce(v_sharing.share_subject, false) then (
            select student.favorite_subject
            from public.student_profiles student
            where student.user_id = p_buddy_id
        ) else null end,
        'tasks_shared', coalesce(v_sharing.share_tasks, false),
        'tasks', case when coalesce(v_sharing.share_tasks, false) then (
            select snapshot.tasks
            from public.study_buddy_task_snapshots snapshot
            where snapshot.user_id = p_buddy_id
        ) else null end,
        'garden_shared', coalesce(v_sharing.share_garden, false),
        'garden', case when coalesce(v_sharing.share_garden, false) then (
            select snapshot.garden
            from public.study_buddy_task_snapshots snapshot
            where snapshot.user_id = p_buddy_id
        ) else null end
    )
    into v_result;

    return v_result;
end;
$$;

create or replace function public.study_buddy_chat_is_active(p_chat_id uuid, p_user_id uuid)
returns boolean
language sql
security definer
set search_path = public, pg_temp
as $$
    select exists (
        select 1
        from public.study_buddy_chat_members mine
        join public.study_buddy_chats chat on chat.id = mine.chat_id
        where mine.chat_id = p_chat_id and mine.user_id = p_user_id
          and exists (
              select 1 from public.study_buddy_chat_members other_member
              where other_member.chat_id = p_chat_id and other_member.user_id <> p_user_id
          )
          and (
              p_user_id = chat.created_by
              or exists (
                  select 1 from public.study_buddy_connections connection
                  where connection.user_id = p_user_id
                    and connection.buddy_id = chat.created_by
              )
          )
          and not exists (
              select 1
              from public.study_buddy_chat_members participant
              where participant.chat_id = p_chat_id
                and participant.user_id <> chat.created_by
                and not exists (
                    select 1
                    from public.study_buddy_connections connection
                    where connection.user_id = chat.created_by
                      and connection.buddy_id = participant.user_id
                )
          )
    );
$$;

create or replace function public.open_study_buddy_direct_chat(p_buddy_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_chat_id uuid;
begin
    if v_user_id is null or p_buddy_id = v_user_id or not exists (
        select 1 from public.study_buddy_connections connection
        where connection.user_id = v_user_id and connection.buddy_id = p_buddy_id
    ) then
        raise exception 'Direct chat is only available with an accepted study buddy.';
    end if;

    select chat.id into v_chat_id
    from public.study_buddy_chats chat
    where chat.chat_type = 'direct'
      and (select count(*) from public.study_buddy_chat_members member
           where member.chat_id = chat.id) = 2
      and exists (
          select 1 from public.study_buddy_chat_members member
          where member.chat_id = chat.id and member.user_id = v_user_id
      )
      and exists (
          select 1 from public.study_buddy_chat_members member
          where member.chat_id = chat.id and member.user_id = p_buddy_id
      )
    limit 1;

    if v_chat_id is null then
        insert into public.study_buddy_chats (chat_type, created_by)
        values ('direct', v_user_id)
        returning id into v_chat_id;
        insert into public.study_buddy_chat_members (chat_id, user_id)
        values (v_chat_id, v_user_id), (v_chat_id, p_buddy_id);
    end if;
    return v_chat_id;
end;
$$;

create or replace function public.create_study_buddy_group(
    p_name text,
    p_buddy_ids uuid[]
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_chat_id uuid;
    v_name text := btrim(coalesce(p_name, ''));
begin
    if v_user_id is null then
        raise exception 'You must be signed in to create a group chat.';
    end if;
    if char_length(v_name) < 1 or char_length(v_name) > 60 then
        raise exception 'Group names must be between 1 and 60 characters.';
    end if;
    if coalesce(cardinality(p_buddy_ids), 0) < 2
       or cardinality(p_buddy_ids) > 8
       or (select count(distinct selected.buddy_id)
           from unnest(p_buddy_ids) as selected(buddy_id))
            <> cardinality(p_buddy_ids) then
        raise exception 'Choose between two and eight different accepted buddies.';
    end if;
    if exists (
        select 1 from unnest(p_buddy_ids) as selected(buddy_id)
        where selected.buddy_id is null or selected.buddy_id = v_user_id
           or not exists (
               select 1 from public.study_buddy_connections connection
               where connection.user_id = v_user_id and connection.buddy_id = selected.buddy_id
           )
    ) then
        raise exception 'Group chats can only include your accepted buddies.';
    end if;

    insert into public.study_buddy_chats (chat_type, name, created_by)
    values ('group', v_name, v_user_id)
    returning id into v_chat_id;
    insert into public.study_buddy_chat_members (chat_id, user_id)
    values (v_chat_id, v_user_id);
    insert into public.study_buddy_chat_members (chat_id, user_id)
    select v_chat_id, selected.buddy_id
    from unnest(p_buddy_ids) as selected(buddy_id);
    return v_chat_id;
end;
$$;

create or replace function public.get_study_buddy_chats()
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_result jsonb;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to view chats.';
    end if;

    select coalesce(jsonb_agg(jsonb_build_object(
        'id', chat.id,
        'chat_type', chat.chat_type,
        'name', chat.name,
        'members', (
            select coalesce(jsonb_agg(jsonb_build_object(
                'user_id', member.user_id,
                'display_name', profile.display_name
            ) order by profile.display_name), '[]'::jsonb)
            from public.study_buddy_chat_members member
            join public.study_buddy_profiles profile on profile.user_id = member.user_id
            where member.chat_id = chat.id
        )
    ) order by chat.updated_at desc), '[]'::jsonb)
    into v_result
    from public.study_buddy_chats chat
    where public.study_buddy_chat_is_active(chat.id, v_user_id);

    return v_result;
end;
$$;

create or replace function public.get_study_buddy_chat_messages(p_chat_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_result jsonb;
begin
    if v_user_id is null
       or not public.study_buddy_chat_is_active(p_chat_id, v_user_id) then
        raise exception 'You are not a member of an active buddy chat.';
    end if;

    select coalesce(jsonb_agg(to_jsonb(message_row) order by message_row.created_at), '[]'::jsonb)
    into v_result
    from (
        select message.id, message.sender_id, profile.display_name as sender_name,
               message.body, message.created_at
        from public.study_buddy_chat_messages message
        join public.study_buddy_profiles profile on profile.user_id = message.sender_id
        where message.chat_id = p_chat_id
        order by message.created_at desc
        limit 100
    ) message_row;

    return v_result;
end;
$$;

create or replace function public.send_study_buddy_chat_message(p_chat_id uuid, p_body text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_body text := btrim(coalesce(p_body, ''));
begin
    if v_user_id is null
       or not public.study_buddy_chat_is_active(p_chat_id, v_user_id) then
        raise exception 'You are not a member of an active buddy chat.';
    end if;
    if char_length(v_body) < 1 or char_length(v_body) > 2000 then
        raise exception 'Chat messages must be between 1 and 2000 characters.';
    end if;

    insert into public.study_buddy_chat_messages (chat_id, sender_id, body)
    values (p_chat_id, v_user_id, v_body);
    update public.study_buddy_chats
    set updated_at = now()
    where id = p_chat_id;
end;
$$;

create or replace function public.remove_study_buddy(p_buddy_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
begin
    if v_user_id is null or p_buddy_id = v_user_id then
        raise exception 'Invalid buddy account.';
    end if;

    delete from public.study_buddy_chats chat
    where chat.chat_type = 'direct'
      and exists (
          select 1 from public.study_buddy_chat_members member
          where member.chat_id = chat.id and member.user_id = v_user_id
      )
      and exists (
          select 1 from public.study_buddy_chat_members member
          where member.chat_id = chat.id and member.user_id = p_buddy_id
      );

    delete from public.study_buddy_connections connection
    where (connection.user_id = v_user_id and connection.buddy_id = p_buddy_id)
       or (connection.user_id = p_buddy_id and connection.buddy_id = v_user_id);

    if not found then
        raise exception 'That study buddy was not found.';
    end if;

    delete from public.study_buddy_shares sharing
    where (sharing.user_id = v_user_id and sharing.buddy_id = p_buddy_id)
       or (sharing.user_id = p_buddy_id and sharing.buddy_id = v_user_id);
    update public.study_buddy_task_snapshots snapshot
    set tasks = '[]'::jsonb, updated_at = now()
    where snapshot.user_id in (v_user_id, p_buddy_id)
      and not exists (
          select 1 from public.study_buddy_shares sharing
          where sharing.user_id = snapshot.user_id and sharing.share_tasks
      )
      and exists (
          select 1 from public.study_buddy_shares sharing
          where sharing.user_id = snapshot.user_id and sharing.share_garden
      );
    delete from public.study_buddy_task_snapshots snapshot
    where snapshot.user_id in (v_user_id, p_buddy_id)
      and not exists (
          select 1 from public.study_buddy_shares sharing
          where sharing.user_id = snapshot.user_id
            and (sharing.share_tasks or sharing.share_garden)
      );
end;
$$;

revoke all on function public.set_study_buddy_sharing(uuid, boolean, boolean, boolean, boolean) from public, anon, authenticated;
revoke all on function public.get_study_buddy_shares() from public, anon, authenticated;
revoke all on function public.sync_study_buddy_task_snapshot(jsonb, jsonb) from public, anon, authenticated;
revoke all on function public.get_study_buddy_content(uuid) from public, anon, authenticated;
revoke all on function public.study_buddy_chat_is_active(uuid, uuid) from public, anon, authenticated;
revoke all on function public.open_study_buddy_direct_chat(uuid) from public, anon, authenticated;
revoke all on function public.create_study_buddy_group(text, uuid[]) from public, anon, authenticated;
revoke all on function public.get_study_buddy_chats() from public, anon, authenticated;
revoke all on function public.get_study_buddy_chat_messages(uuid) from public, anon, authenticated;
revoke all on function public.send_study_buddy_chat_message(uuid, text) from public, anon, authenticated;
revoke all on function public.remove_study_buddy(uuid) from public, anon, authenticated;

grant execute on function public.set_study_buddy_sharing(uuid, boolean, boolean, boolean, boolean) to authenticated;
grant execute on function public.get_study_buddy_shares() to authenticated;
grant execute on function public.sync_study_buddy_task_snapshot(jsonb, jsonb) to authenticated;
grant execute on function public.get_study_buddy_content(uuid) to authenticated;
grant execute on function public.open_study_buddy_direct_chat(uuid) to authenticated;
grant execute on function public.create_study_buddy_group(text, uuid[]) to authenticated;
grant execute on function public.get_study_buddy_chats() to authenticated;
grant execute on function public.get_study_buddy_chat_messages(uuid) to authenticated;
grant execute on function public.send_study_buddy_chat_message(uuid, text) to authenticated;
grant execute on function public.remove_study_buddy(uuid) to authenticated;
