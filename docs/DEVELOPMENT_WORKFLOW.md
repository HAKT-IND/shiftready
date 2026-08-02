# ShiftReady Development Workflow

## One-task branch policy

Every task receives one fresh branch from current `main`.

```bash
git checkout main
git pull --ff-only origin main
git status
git checkout -b feat/example-task
```

Only one active development branch is allowed unless explicitly approved.

## Task brief

Before code changes define:

```text
Goal:
In scope:
Out of scope:
Acceptance criteria:
Affected areas:
Risks:
Required verification:
```

## While working

- Keep scope narrow.
- Inspect before editing.
- Do not mix cleanup with feature work.
- Commit only intentional files.
- Review changes before pushing.

## Required verification

```bash
npm run check
git diff --check
git status
```

As the project grows, `npm run check` must include tests.

## Commit style

Use conventional commit messages:

```text
feat(scope): description
fix(scope): description
chore(scope): description
docs(scope): description
test(scope): description
refactor(scope): description
```

Examples:

```text
feat(app): add routing and application shell
feat(auth): add protected routes
fix(timesheets): prevent duplicate submission
chore(project): add agent governance and safeguards
```

## Merge and cleanup

After review and successful checks, merge the branch through GitHub.

Then:

```bash
git checkout main
git pull --ff-only origin main
git branch -d <branch-name>
git push origin --delete <branch-name>
git status
```

Do not start another task until branch cleanup is complete.

## Emergency fixes

Emergency work still uses a short-lived `fix/` branch. Do not bypass verification unless there is a real production incident and the user explicitly accepts the risk. Record skipped checks and complete them immediately afterward.
