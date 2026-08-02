# ShiftReady Agent Governance

## Mission

Build ShiftReady as a dependable, secure, mobile-first safety and operations platform for real work sites.

Every agent must behave like a disciplined product team, not a code generator. Treat every change as production-bound.

## Authority order

When instructions conflict, follow this order:

1. Explicit user instruction for the current task
2. This `AGENTS.md`
3. Project documentation in `docs/`
4. Existing code conventions
5. General engineering preference

Never silently ignore a conflict. State it before proceeding.

## Core operating rules

- Inspect the repository before editing.
- Restate the task internally as a clear goal, scope, exclusions, and acceptance criteria.
- Make the smallest complete production-quality change.
- Preserve existing behaviour unless the task explicitly changes it.
- Do not invent requirements, database fields, permissions, or business rules.
- Do not rewrite unrelated code.
- Do not begin another task while the current task branch remains open.
- Do not claim success unless the required checks were actually run and passed.
- Never conceal uncertainty, skipped checks, or incomplete work.
- Prefer simple, maintainable solutions over clever abstractions.
- Keep comments useful and current. Do not add comments that merely repeat the code.
- Keep secrets, service-role keys, private credentials, and personal data out of source control.

## Virtual review team

For every meaningful change, apply these viewpoints before completion.

### Product lead
- Confirm the work solves the stated user problem.
- Reject scope creep and speculative features.
- Check that acceptance criteria are measurable.

### UX and field usability
- Follow the approved ShiftReady mockups and design system.
- Design mobile-first for workers using phones on site.
- Use clear language, large touch targets, visible status, and minimal typing.
- Account for gloves, glare, fatigue, weak connectivity, and interrupted workflows.
- Include loading, empty, validation, error, offline, and success states where relevant.

### Frontend engineering
- Keep components focused and readable.
- Avoid duplicated state and business logic.
- Do not create abstractions before there is a real repeated need.
- Keep pages from becoming oversized; extract components when responsibilities become distinct.
- Preserve accessible semantics and predictable navigation.

### Backend and data engineering
- Use Supabase migrations for all schema changes.
- Never make undocumented manual production schema changes.
- Protect data integrity with constraints where appropriate.
- Make migrations ordered, reviewable, and safe.
- Consider rollback or forward-recovery implications.
- Avoid wasteful queries and accidental cross-tenant access.

### Security and privacy
- Apply least privilege.
- Require Row Level Security for exposed Supabase tables.
- Treat all client input as untrusted.
- Never expose service-role keys in frontend code.
- Check authentication, authorization, tenancy, data leakage, file access, and auditability.
- Avoid logging secrets or sensitive personal information.

### QA
- Verify the happy path and realistic failure paths.
- Test validation, empty states, loading, retries, permissions, and invalid input.
- Add tests for meaningful logic, regressions, permissions, and calculations.
- Reproduce bugs before fixing them where practical.
- Verify the fix instead of merely verifying compilation.

### Accessibility
- Use semantic HTML.
- Ensure form controls have labels.
- Ensure keyboard access and visible focus.
- Avoid using colour as the only status indicator.
- Maintain reasonable contrast.
- Prefer touch targets of at least 44 by 44 CSS pixels.

### Performance and reliability
- Avoid unnecessary dependencies, renders, network calls, and oversized assets.
- Handle slow and failed requests.
- Do not fetch entire datasets when a summary or paginated query is sufficient.
- Protect user-entered form data from accidental loss.
- Consider offline or reconnect behaviour for field workflows.

### Final code reviewer
- Review the final diff independently.
- Look for regressions, dead code, duplicated logic, accidental formatting churn, missing states, and hidden scope expansion.
- Reject the change if checks fail or acceptance criteria are not met.

### Documentation and release
- Update documentation when behaviour, architecture, setup, schema, or workflow changes.
- Use a clear conventional commit message.
- Report exactly what changed, what was verified, and what remains.

## Branch lifecycle: one task, one branch

Every task uses one short-lived branch.

### Before starting

```bash
git checkout main
git pull --ff-only origin main
git status
git checkout -b <type>/<short-task-name>
```

The working tree must be clean before creating the branch.

Allowed prefixes:

- `feat/`
- `fix/`
- `chore/`
- `docs/`
- `test/`
- `refactor/`

Examples:

- `feat/app-shell`
- `feat/login-screen`
- `fix/timesheet-total`
- `chore/agent-governance`

### During the task

- The branch contains one clearly defined task only.
- Do not reuse a completed or abandoned branch.
- Do not add unrelated cleanup.
- Do not begin a second feature on the branch.
- No more than one active development branch unless the user explicitly approves it.
- Commit logical, reviewable progress only when useful. Avoid noisy checkpoint commits.

### Completion gate

A branch may be merged only when:

- acceptance criteria are met
- lint passes
- tests pass when present
- production build passes
- the final diff is reviewed
- relevant documentation is updated
- no known critical security or data-integrity issue remains

### After merge

```bash
git checkout main
git pull --ff-only origin main
git branch -d <branch-name>
git push origin --delete <branch-name>
git status
```

Do not start the next task until:

- the previous branch is merged
- the local branch is deleted
- the remote branch is deleted
- `main` is current
- the working tree is clean

## Task contract

Before editing, define:

```text
Goal:
In scope:
Out of scope:
Acceptance criteria:
Affected areas:
Risks:
Required verification:
```

If the task is ambiguous enough to change implementation materially, ask before editing.

## Implementation workflow

1. Read `AGENTS.md` and relevant files in `docs/`.
2. Inspect the current code, scripts, dependencies, and repository status.
3. Define the task contract.
4. Identify the smallest safe implementation.
5. Implement only the agreed scope.
6. Add or update tests where valuable.
7. Run required checks.
8. Review the complete diff.
9. Apply product, UX, security, accessibility, QA, and performance reviews.
10. Update documentation.
11. Commit and push the task branch.
12. Merge only after the completion gate passes.
13. Delete the branch locally and remotely.

## Required checks

The standard command is:

```bash
npm run check
```

It must run lint and production build at minimum. As tests are added, include them in `check`.

Also inspect:

```bash
git status
git diff --check
git diff --stat
git diff
```

Do not bypass failing checks by:

- disabling lint rules without a justified project-level decision
- deleting tests
- weakening assertions
- using `npm audit fix --force`
- hiding errors
- adding broad ignores
- casting away type or data-safety problems

## Dependency policy

Before adding a dependency:

- confirm the platform does not already provide the capability
- confirm a small local implementation would not be safer
- explain why the dependency is needed
- check maintenance, bundle impact, licence, and security
- install the smallest appropriate package
- update the lockfile
- verify lint and build

Do not add a library for trivial formatting, small utilities, or one-off UI behaviour.

## Supabase and database rules

- All schema changes must be migrations.
- Migrations must be committed.
- Enable and test RLS for client-accessible tables.
- Policies must reflect real roles and tenancy.
- Never rely on hidden UI controls for authorization.
- Use foreign keys, uniqueness, checks, and not-null constraints where appropriate.
- Do not store derived data unless there is a clear reason.
- Do not delete or rewrite migration history once shared.
- Document environment variables using safe placeholder names only.

## Forms and safety records

ShiftReady handles operational and safety records. Agents must:

- preserve drafts where practical
- prevent accidental duplicate submission
- show clear submission state
- preserve authorship and timestamps
- keep audit-sensitive records traceable
- avoid silently overwriting submitted records
- validate required fields
- show risk levels with text and colour
- treat signatures and approvals as explicit actions
- distinguish draft, submitted, approved, rejected, and archived states

## Design authority

Approved visual references live in:

```text
docs/mockups/
```

Use them as direction, not as an excuse to hard-code fake data or copy generated text blindly.

The product should remain:

- mobile-first for workers
- desktop-capable for administration
- industrial, clear, and professional
- dark slate with white surfaces and restrained blue, green, amber, and red status accents
- consistent across Prestarts, Take 5, JHA, Timesheets, Handovers, Completed Forms, and Admin

See `docs/DESIGN_SYSTEM.md`.

## Prohibited actions

Do not:

- expose secrets
- bypass authorization or RLS
- commit `.env` files
- run destructive database operations without explicit approval and a recovery plan
- force-push shared branches
- rewrite published history
- silently change package managers
- use placeholder buttons that appear functional
- claim a feature is complete when it is only visually mocked
- commit generated build output unless the project explicitly requires it
- mix unrelated formatting churn into a feature
- proceed after discovering a material conflict without raising it

## Completion report

At task completion report:

```text
Branch:
Commit:
Changed:
Verified:
Not verified:
Risks or follow-up:
Merge status:
Branch deletion status:
```

Be exact. Never state that a check passed unless it was run.
