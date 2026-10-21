# ProcrastiNOT: Project Defense Guide

## 1. Project overview

**ProcrastiNOT** is a student-focused web app designed to make starting and
organizing schoolwork feel more manageable. It combines a personal focus
dashboard, task list, small-step task guide, focus timer, calendar reminders,
progress rewards, study preferences, and optional study-buddy features.

The app emphasizes gentle support rather than punishment. It encourages a
student to choose one focus, break work into smaller actions, and recognize
progress. It does not claim to diagnose procrastination, replace a teacher, or
teach every subject automatically.

### Short defense introduction

> ProcrastiNOT is a student study-support website that helps users move from
> feeling stuck to taking a manageable next step. It combines task planning,
> optional reminders, a focus timer, progress feedback, and a privacy-conscious
> buddy system. The design aims to encourage progress without using shame or
> harsh penalties.

## 2. Problem and design goals

Students may delay work because an assignment feels too large, they are unsure
how to begin, they are tired or distracted, or they expect the work to take too
long. A conventional checklist can record work, but it may not help with the
first action or make progress feel rewarding.

The project addresses this by providing:

1. **A clear starting point:** save a current focus and add tasks with due
   dates.
2. **Smaller actions:** use the Tiny first step guide to break selected work
   into suggested steps.
3. **Gentle structure:** use a focus timer, screen-break reminders, calendar
   reminders, and optional deadline notifications.
4. **Positive reinforcement:** earn points and XP, build levels and streaks,
   grow a study garden, and see the bear mascot evolve.
5. **Optional social support:** connect to accepted study buddies, choose
   what to share, and chat.
6. **Student choice:** set a favorite subject and study pace, and choose
   notification and chime settings.

These are design intentions, not a claim that the app has been proven to
improve grades or eliminate procrastination. Those outcomes would require
separate user testing and evaluation.

## 3. Intended users and scope

- **Primary user:** a student who wants help organizing and beginning
  schoolwork.
- **Secondary users:** accepted study buddies who choose to connect and share
  selected information.
- **Not currently provided:** separate teacher, parent, administrator, or
  classroom-management dashboards.
- **Not an LMS:** it does not host courses, grade assignments, or integrate
  with a school gradebook.

## 4. Main website areas

### 4.1 Sign-in and profile

Users can create an account or sign in with an email address and password
through **Supabase Auth**. The app does not store account passwords itself.
The associated profile can store a display name, current focus, favorite
subject, and study pace.

The sign-in screen uses a full-viewport photo background that remains in place
when the login content scrolls, so the background continues covering the
screen on shorter or smaller displays.

### 4.2 My space dashboard

The dashboard greets the signed-in student, shows the current focus, and
provides a motivational quote of the day. Quotes are requested from QuoteSlate
and cached in the browser for the day; an offline quote is used if the service
is unavailable.

### 4.3 Task list

A student can add a task with a title, due date, and size (small, medium, or
large), mark it complete, open its Tiny first step guide, or remove it. Tasks
are sorted with unfinished work first and nearer due dates earlier.

Task titles may receive suggested first steps based on simple keywords. For
example, writing tasks receive a different starter sequence from math/problem
tasks or research/project tasks. This is predefined application logic, not
AI-generated tutoring.

### 4.4 Tiny first step guide

The guide shows suggested short actions, lets the student choose a common
barrier (such as feeling tired, worried about mistakes, overwhelmed, bored, or
distracted), and displays a supportive suggestion for that barrier. The
student can mark each step complete. The task's guide progress is saved with
the task.

If a task title clearly indicates a math topic and the student has a
non-math favorite subject, the guide can also show a short favorite-subject
connection. Examples include treating an equation like a small experiment
(Science) or a sentence with a blank (English). This is a familiar framing
alongside the regular math steps; it is not a replacement for accurate math
instruction. Custom favorite subjects get a general connection prompt. This
feature uses fixed rules and text, not machine learning or generative AI.

The **Start 5 minutes** action starts a five-minute starter using the existing
focus timer. It is not a separate timer mode.

### 4.5 Focus timer and screen-break reminders

The focus timer accepts a session length from 1 to 120 minutes. Its default
duration is configurable in Settings. At the end, the timer displays a
completion message and repeats a soft three-note chime for the selected
duration: Silent, 3, 5, or 10 seconds. Five seconds is the default. If browser
notification permission has already been granted, the timer can also display a
desktop notification. It does not request permission at timer completion.

The separate screen-break feature tracks time while the user is signed in and
the website page is visible. The user can choose a reminder interval from 1 to
120 minutes. When reached, the page suggests a break. Dismissing the message
sets the next reminder interval.

**Important distinction:** a screen-break reminder is not a device screen
limit. It cannot block the website, close other apps, or control device-wide
usage.

### 4.6 Deadline reminders

An existing in-page notice highlights an unfinished task due today or
tomorrow, and offers a button to open its Tiny first step guide.

Separately, a student can opt in to browser desktop deadline notifications in
Settings. If browser notification permission is granted, the app checks for
unfinished tasks due tomorrow and can show one gentle daily summary. It does
not alert about overdue tasks. The check runs while the student is signed in
and the app is open; it is not a server-scheduled notification and cannot
notify while the site is closed.

### 4.7 Calendar

The calendar lets a student add dated reminders with optional time and color.
An alarm with a time is scheduled in the open browser page and can show a
desktop notification if permission is available. These alarms are browser
timers, not background/server alarms; they may not fire if the page is closed
or the browser/device is asleep.

### 4.8 Progress and positive reinforcement

- Completing a task awards points and XP according to its size: small = 5,
  medium = 10, large = 20.
- Completing at least one day before its due date adds a 5-point early bonus.
- A task earns its completion reward once; marking it incomplete later does
  not remove points already earned.
- Every 100 XP advances the level.
- Completing tasks on calendar days contributes to the current and best
  streak.
- Completed tasks appear as blooms in the study garden; overdue unfinished
  tasks are shown as wilted seeds, which can still bloom when completed.
- The bear mascot's visual stage changes as XP/level grows.

These mechanics recognize activity and progress. They do not create a
competitive leaderboard or a material prize system.

### 4.9 Study preferences

Students can select a favorite subject, add a custom subject (up to 24
characters), and select a study pace: **My own pace**, **Quick sessions**, or
**Deep focus**. The favorite subject can inform the optional math-start
connection. Study pace applies a default focus-timer duration when the timer
has not started; the timer's explicit Settings default is also available.

### 4.10 Study Buddies

The buddy feature supports:

- A unique 16-character friend code.
- Looking up a code's display name before sending a request.
- Sending, accepting, declining, or cancelling requests; removing an accepted
  buddy.
- Per-buddy optional sharing for profile/progress, favorite subject, task list,
  and garden. Sharing starts off. Favorite subject can be shared without
  sharing profile/progress.
- Viewing shared buddy details and task/garden snapshots.
- Direct and group text chats.
- Creating a group from the profile/options control in a direct chat.

Group creation accepts two to eight accepted buddies in addition to the
creator. It is intentionally reached from the direct-chat profile/options
dialog rather than presented as a prominent action on the main buddy list.

Chat messages are stored in Supabase. The client reloads messages about every
eight seconds while a chat is open, so chat is **polling-based**, not
instantaneous push messaging. The latest 100 messages are loaded, and a
message is limited to 2,000 characters. There are no typing indicators, read
receipts, attachments, or message editing/deletion features.

Shared task snapshots may include task title, due date, completion state, and
task size. Tiny first step notes and guide-step details are not shared. If only
the garden is shared, task titles are not exposed. Email addresses are not
shown to buddies.

Users may upload a JPG, PNG, or WebP buddy avatar (maximum 5 MB). Images use a
private Supabase Storage bucket and short-lived signed URLs. The owner, people
in a pending request, and accepted buddies may view the image under the
configured policies.

### 4.11 Tips, feedback, credits, and QR code

- **Tips & support** presents student-friendly suggestions, including trying
  five minutes, splitting work, and asking for help.
- **Feedback** lets signed-in users submit a bug report, feature request,
  praise, or other feedback (up to 500 characters). Entries are stored in
  Supabase; the feature does not send email alerts.
- **Credits** presents the project contributors. The current credits layout
  puts Reese first and includes Jeremy Abanlog; the credit photos do not use
  the previous counter-clockwise tilt effect.
- QR code assets are provided in PNG and SVG formats and point to
  `https://jjrrrddd.github.io/procrastinot/`.
- The interface uses a responsive layout, keyboard focus styling, labeled
  controls, and live status messages for important feedback.

## 5. How a typical workflow works

### Task completion workflow

1. The student signs in.
2. The student enters a task, due date, and size.
3. The browser validates the task and saves it to account-specific
   `localStorage`.
4. The student may open Tiny first steps, choose a barrier, and mark starter
   steps complete.
5. When the student completes the task, the app calculates points/XP, the
   possible early bonus, and the streak date.
6. The task list, progress card, garden, mascot, and any enabled buddy
   snapshots are updated.

### Buddy-sharing workflow

1. Two users exchange friend codes and send/accept a request.
2. The app establishes an accepted connection for each account.
3. Each person chooses sharing independently for each buddy.
4. The frontend requests allowed data through Supabase RPC functions.
5. Database functions verify the authenticated user and accepted connection
   before returning or changing private data.

## 6. Technical architecture

### Frontend

- **HTML:** page structure, forms, task UI, dialogs, calendar, and settings.
- **CSS:** visual design, responsive layout, focus states, and animations.
- **JavaScript:** application behavior, form validation, task and reward
  logic, rendering, browser storage, timer intervals, and Supabase requests.
- The app is a static web frontend; the small Node.js server is for local
  development and file serving, not the primary data backend.

### Backend services

- **Supabase Auth:** email/password account registration and sign-in.
- **Supabase Postgres:** account profiles, buddy data, sharing permissions,
  chat, and feedback.
- **Supabase Storage:** private buddy profile avatars.
- **Supabase RPC:** database functions used for controlled buddy operations.

### Browser storage and data flow

| Data | Main storage | Synchronizes across devices? |
| --- | --- | --- |
| Account credentials | Supabase Auth | Yes, managed by Supabase |
| Display name, favorite subject, study pace, current focus | Supabase `student_profiles` | Yes |
| Tasks, task guide progress, points, XP, streak dates, mascot state | Browser `localStorage`, namespaced by account | No |
| Screen usage, timer/settings, reminder settings | Browser `localStorage` | No |
| Calendar reminders | Browser `localStorage`, namespaced by account | No |
| Buddy connections, share flags, chat, buddy profile stats | Supabase Postgres | Yes |
| Buddy task/garden snapshot | Supabase Postgres, only when corresponding sharing is enabled | Yes |
| Buddy avatars | Private Supabase Storage bucket | Yes |
| Feedback | Supabase `app_feedback` | Yes; user submissions are not readable by users |

**localStorage** is browser storage for small key/value data. It is convenient
for this app's personal task and settings data, but it is local to that
browser/device and is not a secure database for competitive scoring. Points
and XP are calculated client-side and should not be treated as
tamper-proof.

### Database safety terms

- **Row-level security (RLS):** database policies restrict which rows an
  authenticated account can access.
- **RPC (remote procedure call):** a database function invoked by the app to
  carry out a defined operation, such as accepting a buddy request or
  retrieving shared content.
- **`security definer`:** a PostgreSQL function mode used for controlled
  operations that need database privileges beyond direct table access. The
  buddy functions validate the signed-in account and relationship before
  performing the operation.
- **Anon/public key:** the Supabase client key intended to be used in browser
  code. It is not a service-role secret; database RLS and function checks are
  still essential.
- **Signed URL:** a time-limited URL that grants access to a private stored
  avatar.

The project SQL files are:

1. `supabase-schema.sql` — profile table and per-user RLS policies.
2. `buddy-system.sql` — friend codes, requests, connections, sharing,
   progress snapshots, chat, avatars, and associated functions/policies.
3. `feedback-system.sql` — feedback table and insert-only user policy.

When a project already has the buddy feature installed, rerun the latest
`buddy-system.sql` after updates so new schema fields and function signatures
are applied.

### Progressive Web App (PWA)

A **PWA** is a website that can be installed from a supported browser and
launched in a standalone window. The web manifest provides the app name,
colors, start URL, and icon. The service worker caches the static app shell to
help it load when offline. This does **not** make sign-in, Supabase data,
buddy chat, or avatar uploads work offline.

The service worker is registered on secure contexts (typically HTTPS or
localhost). Phone installation steps are available in the app.

## 7. Reminders and notification terminology

- **In-page reminder:** a message rendered inside the currently open website.
- **Browser desktop notification:** an operating-system/browser notification
  that requires the user to grant permission.
- **Permission:** the browser's allow/block setting for notifications. The app
  does not request permission when a focus timer completes.
- **Foreground/page-open check:** a feature runs while the app page is open;
  it is not a server/background scheduler.
- **Deduplication:** the deadline notification records that a daily summary
  has already been shown, preventing repeated alerts on every check that day.

Focus timer completion, the optional due-tomorrow reminder, and timed calendar
alarms are distinct features. Their behavior and limitations should not be
described as one always-on alarm service.

## 8. Privacy, safety, and limitations

1. Users must sign in to save tasks and use the Buddy/feedback features.
2. Task lists, task-step notes, game progress, and most settings stay in the
   browser. They do not sync between devices.
3. Buddy sharing is optional and configured separately for each accepted
   buddy. A user may share favorite subject without sharing profile progress.
4. Buddy task snapshots are only maintained when task or garden sharing is
   enabled; shared titles are only included for task sharing.
5. Desktop notifications require browser support and permission. Deadline
   alerts are checked only while the signed-in app is open.
6. Calendar alarms use page timers and are not guaranteed if the page/browser
   closes or the device sleeps.
7. The screen-break reminder suggests a break; it does not enforce a limit.
8. Chat is basic text chat with periodic refresh, not a full Messenger
   replacement.
9. Progress is motivational, client-calculated, and not secure enough for
   prizes or a competitive leaderboard.
10. Quote loading depends on an external service; an offline quote is used if
    loading fails.
11. The deployment is only live after the latest frontend files are published
    and required Supabase SQL has been run in the project.

## 9. Suggested live demonstration

1. Show the sign-in screen and describe Supabase Auth.
2. Sign in to **My space** and save a current focus.
3. Add a sample task with a due date and choose its size.
4. Open **Tiny first step**; show the barrier choice and a relevant math
   favorite-subject connection if a math task and non-math favorite are set.
5. Start the five-minute starter or set a short timer for demonstration.
6. Show Settings: timer default, screen-break interval, chime duration,
   deadline notifications, and notification permission status.
7. Complete a task and show its points/XP, level progress, streak, garden, and
   mascot response.
8. Show the calendar and add a dated reminder.
9. In Study Buddies, show the friend-code flow and per-buddy sharing controls.
   Explain that sharing starts off and that the SQL setup must be installed.
10. Open a direct chat and explain its eight-second polling and text limits.
11. Show the feedback form or credits if time allows.

Use test accounts and non-sensitive sample task titles. Do not expose real
student emails, passwords, access tokens, or private task details during the
presentation.

## 10. Likely panel questions

### What makes this different from a normal to-do list?

It combines planning with a guided first action, gentle reminders, a focus
timer, optional social support, and progress feedback. The goal is to make
starting easier, not just record that a task exists.

### Does the favorite-subject feature teach math using AI?

No. It uses fixed, rule-based text for clearly recognized math-related task
titles. It provides an analogy or familiar framing; it does not solve
problems, generate lessons, or replace a math teacher.

### Can students disable alarms?

Yes. The focus chime has Silent, 3, 5, and 10 second settings. Desktop
notifications require browser permission, and deadline alerts have their own
opt-in setting.

### Does the screen-break reminder limit phone or computer use?

No. It tracks visible time on this website and suggests a break. It cannot
control other apps or enforce a device-wide screen-time limit.

### Are tasks available on another device?

Not currently. Tasks and game progress are saved in browser storage per
account. The buddy feature can show an explicitly shared snapshot, but that is
not a cross-device task-sync system for the owner.

### Is buddy chat real time?

It is stored in Supabase and refreshes about every eight seconds while open.
That is periodic polling, not an instant push connection.

### How is buddy privacy handled?

Display names identify connections. Optional information is controlled per
buddy, database tables use RLS, and sensitive buddy operations go through
functions that check authentication and accepted relationships. Favorite
subject is separately shareable.

### Are points secure?

No. Points and XP are calculated in browser JavaScript and saved in
localStorage. They are intended for personal motivation, not as verified
achievements for prizes or competition.

### What happens if notifications are blocked or the site is closed?

The app still shows in-page reminders when running. Desktop notifications
depend on browser permission. Deadline reminders are checked while signed in
and the app is open; calendar alarms also rely on browser-page timers.

### What should be evaluated next?

Potential future work includes usability testing with students, measuring
whether the Tiny first step guide helps students begin, testing accessibility
and mobile layouts, adding reliable background notifications if needed, and
considering secure server-side progress if competitive rewards are ever
introduced. These are future evaluation or development ideas, not current
features.

## 11. Terms glossary

| Term | Plain-language meaning in this project |
| --- | --- |
| Dashboard | The signed-in student's main **My space** overview. |
| Focus | The one current activity the student chooses to keep in view. |
| Due date | The date a task is expected to be finished. |
| Tiny first step | A guide that suggests smaller actions for a task. |
| Barrier | A reason a student may feel stuck, such as tiredness or overwhelm. |
| XP | Experience points earned from completing tasks; every 100 XP advances a level. |
| Streak | Consecutive calendar-day progress calculated from task-completion dates. |
| Study garden | A visual representation of completed, active, and overdue tasks. |
| Buddy | An accepted study connection between two app accounts. |
| Snapshot | A limited copy of task/garden information synced for permitted buddy viewing. |
| Polling | Repeatedly asking the server for updates at an interval; chat uses about eight seconds. |
| Authentication | Checking who a user is when signing in. |
| Authorization | Checking what that signed-in user is allowed to view or change. |
| RLS | Database rules that limit row access according to the authenticated user. |
| RPC | A named database function called by the frontend for a controlled action. |
| Storage bucket | A named area in Supabase Storage for files such as avatars. |
| PWA | A web app that can be installed from a supported browser. |
| Service worker | Browser code that caches the static app shell and supports PWA behavior. |
| localStorage | Browser-local key/value storage; data does not automatically sync to another device. |
| Responsive design | Layout behavior that adapts to different screen sizes. |
| Accessibility | Design support for keyboard use, labels, readable status messages, and assistive technology. |

## 12. Setup and deployment checklist

- Create/configure the Supabase project and keep only the public anon key in
  `supabase-config.js`; never put a service-role key in frontend code.
- Run the base profile SQL, then the latest buddy SQL and feedback SQL in the
  Supabase SQL Editor.
- Configure Supabase authentication site and redirect URLs for the deployed
  address.
- Publish the latest HTML, CSS, JavaScript, assets, and service worker to the
  HTTPS host.
- Test sign-in, task saving, buddy RPCs, sharing, feedback submission, and
  notification permission using test accounts.
- Confirm phone/PWA installation from the actual HTTPS deployment. The local
  development server is not a public installation URL.
