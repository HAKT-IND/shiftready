# ShiftReady Testing Strategy

## Test pyramid

### Unit tests
Use for calculations, validation, risk logic, time totals, permissions helpers, and data transformations.

### Component tests
Use for form behaviour, validation, loading, error states, and important interaction flows.

### Integration tests
Use for authentication, Supabase data operations, RLS expectations, and module boundaries.

### End-to-end smoke tests
Add for critical workflows such as:

- sign in
- complete and submit a prestart
- complete a Take 5
- create and approve a JHA
- submit a timesheet
- administrator invites or manages a user

## Required scenarios

For meaningful workflows test:

- happy path
- missing required input
- invalid input
- failed request
- retry
- slow loading
- duplicate submission prevention
- permission denied
- empty data
- mobile layout
- recovery after interruption where relevant

## Regression rule

When fixing a bug, add a regression test when the behaviour can be tested reliably without disproportionate complexity.

## CI

CI must run using a clean install and must fail on lint or build errors. Tests become mandatory in CI as soon as a test runner is introduced.
