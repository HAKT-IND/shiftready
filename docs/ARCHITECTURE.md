# ShiftReady Architecture

## Current foundation

- React
- Vite
- JavaScript
- ESLint
- Supabase planned for authentication, database, storage, and realtime
- GitHub Actions for continuous integration
- Vercel planned for deployment

## Architectural principles

- Keep pages focused on orchestration.
- Put reusable UI in shared components only after real reuse exists.
- Put business rules in testable functions or domain modules.
- Keep Supabase access behind small, purposeful data functions rather than scattering queries through components.
- Keep authentication and authorization separate from presentation.
- Prefer explicit data flow over hidden global state.
- Avoid introducing state libraries until React state and context are genuinely insufficient.
- Keep modules independently understandable.

## Suggested source layout

```text
src/
  app/
  components/
  features/
    auth/
    dashboard/
    prestarts/
    take5/
    jha/
    timesheets/
    handovers/
    admin/
  hooks/
  lib/
  pages/
  routes/
  styles/
  test/
```

This is direction, not permission to create empty folders. Add folders when the implementation needs them.

## Data boundaries

When Supabase is introduced:

- database schema is changed through `supabase/migrations/`
- browser code uses the public anon key only
- service-role operations run only in trusted server environments
- RLS enforces tenant and role boundaries
- storage buckets use explicit access policies
- records carry stable IDs and timestamps
- submitted safety records should not be silently mutated

## Decisions

Record material architectural decisions under:

```text
docs/decisions/
```

Use a short ADR when adding a major dependency, changing data tenancy, introducing offline architecture, or altering authentication.
