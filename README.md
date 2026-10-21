# ProcrastiNOT student space

For a detailed, defense-ready explanation of the features, workflows,
architecture, privacy model, terminology, limitations, demo outline, and likely
panel questions, see [`DEFENSE-GUIDE.md`](./DEFENSE-GUIDE.md).

The app uses Supabase Auth for email/password accounts and a Supabase table to
save each account's display name, current focus, favorite subject, and study
pace. Saved work is private to the signed-in account through Supabase row-level
security policies.

## Install on a phone

ProcrastiNOT can be installed as a web app from a site hosted over HTTPS. On
iPhone, open the site in Safari and choose **Add to Home Screen** from the
Share menu. On Android, open it in Chrome and choose **Install app** or **Add to
Home screen**. The local development server is for computer testing; it is not
a public HTTPS address that a phone can install from. Sign-in, buddy features,
and avatar uploads require an internet connection.

Saving a current focus displays it as a sticky note below the focus form. A
new note animates in when the focus changes; the note reflects the account's
saved focus and appears again after signing in.

The Study preferences view saves the account's favorite subject and
preferred study pace. Custom subjects become selectable favorites in the
subject list. When a task title clearly identifies a mathematics topic, its
Tiny first step guide can offer an optional connection to the student's
favorite subject. This is a familiar framing alongside the regular math steps,
not a replacement for accurate subject instruction.

The side menu is the main navigation: Home, Task list, Focus timer, Your
journey, Study buddies, and Preferences each open in their own view. The Task
list lets signed-in users add, complete, and remove tasks with due dates. Tasks
are stored in the current browser, separately for each account; they are not
synced between browsers or devices. Upcoming tasks show gentle due-date
reminders, and finishing at least a day early earns a small bonus. Users can
opt in to one desktop reminder the day before a task is due in Settings. The
reminder summarizes tasks due tomorrow, skips overdue tasks, and is checked
while the user is signed in and the app is open; it cannot send alerts while
the site is closed. Each task has a Tiny first step guide with suggested steps
based on the task, optional encouragement for common blockers, and a favorite-
subject connection for clearly identified math tasks. Guide progress is saved
with the task. Its five-minute starter uses the existing focus timer.

Completing each task once earns points and XP based on its size (5, 10, or 20),
plus an early-finish bonus when applicable. Every 100 XP adds a level. Completing
a task on a calendar day counts toward the current and best streak. Completed
tasks bloom in the study garden, while overdue unfinished tasks wilt until
completed. The bear mascot evolves through four visual stages as XP grows. Tasks
and game progress are saved in the current browser per account and are not
synced between devices. A copy of points, level, and current streak is synced
to Supabase for the buddy feature.

The Tips & support page includes student-friendly ways to get started and a
copyable, no-pressure study invitation. The existing focus timer remains the
only timer mode; the Tiny first step guide can start it as a one-off five-minute
session.

## Focus timer and screen-break reminders

The home page includes a daily motivational quote loaded from QuoteSlate and
cached in the browser for the day. If the quote service is unavailable, an
offline quote is shown with a notice. The Settings panel lets users choose and
save a default Focus timer duration (1–120 minutes, initially 25), a focus
chime duration (Silent, 3, 5, or 10 seconds; initially 5), and a screen-break
reminder interval (1–120 minutes, initially 5). Settings are saved
automatically in the current browser, and the timer default is applied to the
Focus timer when it is idle.

While the signed-in site is visible, a separate reminder suggests a screen
break after the chosen amount of use and repeats after the same interval when
dismissed. This is only a browser-page reminder; it cannot limit device-wide
screen time or block other apps. Daily reminder time is stored in the current
browser. Users can enable desktop notifications from Settings; task deadline
alerts also require turning on the separate gentle-reminder option there.
Browser permission may need to be changed in browser settings. When the Focus
timer finishes, it repeats a soft three-note chime for the duration selected
in Settings and shows a desktop notification only if permission was already
granted. Reset local data clears browser-stored tasks, progress, screen-break
usage, and settings without changing the account profile. If buddy sharing is enabled, the shared task and
garden snapshot and the displayed buddy progress are updated to the reset
state.

## Study buddies

Run [`buddy-system.sql`](./buddy-system.sql) in the Supabase SQL Editor after
the base schema. If you already set up the buddy feature, rerun this script to
apply the latest buddy sharing changes, add friend-code name previews, and
create the private profile-avatar bucket and its access policies. Signed-in
users can upload or remove a JPG, PNG, or WebP profile picture (up to 5 MB) in
Settings. The owner, people in a pending buddy request, and accepted buddies
can see the picture; other users cannot. Signed-in users can share their friend
code, check which display name a code belongs to before sending a request,
respond to requests, and remove buddies. Accepted buddies can see each other's
display name, but profile progress, favorite subject, task lists, and gardens
are controlled separately for each buddy; email addresses are never shared.
Sharing is off until enabled. Favorite subject can be shared on its own without
sharing profile progress.
Shared task snapshots include task titles, due dates, completion state, and
task size; task-guide notes and step details are not shared. Users can start
direct chats from the buddy list. From a direct chat, open the buddy profile
and choose **Make a group chat**; the popup includes that buddy and lets the
user choose other accepted buddies to invite. Messages are stored in Supabase,
limited to 2,000 characters, and the most recent 100 are shown. Removing a
direct buddy deletes that direct chat; group chats are only
available while their creator's buddy connections remain active. Friend codes
are 16-character codes; pending requests can be cancelled. Avatars are stored
in a private Supabase Storage bucket. Short-lived signed URLs let the owner,
pending buddy request participants, and accepted buddies view an image; other
signed-in users cannot read it. Rerun `buddy-system.sql` in the SQL Editor to
create the sharing and chat tables and apply the policies before using these
features.

Points and tasks are still calculated/stored in browser-local storage. Buddy
progress is synced to Supabase for display only when shared with that buddy.
Task snapshots are uploaded only when task or garden sharing is enabled, and
task titles are stored only when task sharing is enabled. Because awards are
calculated in the browser, they are not tamper-proof and should not be used
for prizes or competitive leaderboards.

## Feedback

Run [`feedback-system.sql`](./feedback-system.sql) in the Supabase SQL Editor.
Signed-in users can then submit bug reports, feature requests, praise, and other
feedback. Submissions are stored in the `app_feedback` table; review them in
Supabase under **Table Editor → app_feedback**. Row-level security allows users
to submit their own feedback but does not let them read submissions. This setup
does not send email notifications.

## Run locally with Node.js

Install Node.js, then run these commands from the project folder:

```powershell
npm start
```

Open [http://localhost:3000](http://localhost:3000). The server uses Node.js built-in modules, so no `npm install` step is needed. To use a different port, set the `PORT` environment variable before starting the server.

## GitHub Pages demo

On `github.io` hosts, the app automatically runs in a local-only demo mode:
there is no account or password form, and Supabase account, buddy, and feedback
requests are disabled. Tasks, progress, and preferences are stored only in the
visitor's browser and do not sync between devices. This mode is intended for
trying the static app; use a host and authentication setup intended for an
account-based service if you need sign-in or shared features.

## Configure Supabase

1. Create a Supabase project.
2. Open the project's SQL Editor, run [`supabase-schema.sql`](./supabase-schema.sql),
   and confirm that the `student_profiles` table has row-level security enabled.
3. Run [`buddy-system.sql`](./buddy-system.sql) in the SQL Editor to enable
   friend codes, buddy requests, and shared progress.
4. Run [`feedback-system.sql`](./feedback-system.sql) in the SQL Editor to enable
   feedback submissions.
5. Copy the project's **Project URL** and **anon/public key** into
   [`supabase-config.js`](./supabase-config.js):

   ```js
   window.SUPABASE_CONFIG = {
       url: 'https://YOUR-PROJECT.supabase.co',
       anonKey: 'YOUR_PUBLIC_ANON_KEY'
   };
   ```

   The anon/public key is intended for browser use. Never put a service-role
   key or other secret in this file.
6. In Supabase Authentication settings, configure the site URL and allowed
   redirect URLs for the address where the app will be hosted. Email
   confirmation can be enabled in the same settings.
7. Serve or deploy this folder over HTTP(S), then create an account in the app.
   The Supabase JavaScript client is loaded from jsDelivr, so the browser needs
   an internet connection.

Without valid Supabase project settings, the sign-in screen explains that
account service is not configured. The app never stores account passwords.
