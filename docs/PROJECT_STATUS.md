# ShiftReady Project Status

## Current phase

Application foundation.

## Completed

- Project named ShiftReady
- React and Vite scaffold
- Git repository created
- GitHub repository connected
- Initial scaffold pushed
- Visual mockups prepared for:
  - Login
  - Dashboard
  - Take 5
  - JHA
  - Timesheet
  - Desktop administration
- Agent governance and engineering safeguards
- Mobile-first application shell
- Dashboard foundation
- Route navigation for:
  - Dashboard
  - Forms
  - Prestarts
  - Take 5
  - JHA
  - Timesheets
  - Handovers
  - Completed Forms
  - Activity
  - Profile
- Not-found route

## Current app-shell scope

The current pages establish navigation, layout, responsive styling, and route placeholders only.

They do not yet include:

- Supabase
- Authentication
- Real data
- Functional safety forms
- Administration
- Final dashboard content

## Next recommended task

Add Supabase authentication and protected routes.

Suggested task contract:

```text
Goal:
Add ShiftReady authentication and protect the application shell.

In scope:
- Supabase browser client
- Session provider
- Login page
- Sign in and sign out
- Protected app routes
- Loading and authentication error states
- Safe environment validation

Out of scope:
- Invitations
- User administration
- Role-based permissions
- Database schema beyond what authentication requires
- Password reset flow

Acceptance criteria:
- Signed-out users see the login page
- Valid users can sign in
- Authenticated users can access the app shell
- Users can sign out
- Sessions survive a refresh
- Missing configuration fails clearly
- Lint and production build pass
```
