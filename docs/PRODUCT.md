# ShiftReady Product

## Purpose

ShiftReady is a mobile-first safety and operations platform for workers, supervisors, administrators, and contractors.

The initial product areas are:

- Prestarts
- Take 5 risk assessments
- Job Hazard Analyses
- Timesheets
- Handovers
- Completed forms and records
- Administration

## Product principles

1. Field use comes first.
2. Safety records must be clear, traceable, and difficult to lose accidentally.
3. Common tasks should require minimal typing and minimal navigation.
4. Status and responsibility should be obvious.
5. Permissions must be enforced in the data layer, not only hidden in the interface.
6. Draft work should survive interruption where practical.
7. Administrative power must remain understandable and auditable.
8. The app should grow module by module rather than becoming a giant unfinished platform.

## Primary users

### Worker
Completes forms, records work, submits timesheets, receives handovers, and views their own records.

### Supervisor
Reviews team activity, approvals, defects, risks, handovers, and timesheets.

### Safety or HSE
Reviews risk documents, hazards, trends, compliance, and corrective actions.

### Administrator
Manages users, companies, sites, crews, roles, templates, access, and configuration.

## Current delivery strategy

Build foundations first, then one complete workflow at a time.

Suggested order:

1. Application shell and routing
2. Authentication and protected routes
3. Company, site, crew, and role model
4. Dashboard
5. Prestart workflow
6. Completed forms
7. Take 5
8. JHA
9. Timesheets
10. Administration
11. Handovers and broader operations modules

This order may change only through an explicit product decision.

## Definition of done

A feature is done only when:

- the user can complete the intended workflow
- permissions are enforced
- validation and failure states exist
- the UI works at mobile widths
- relevant tests pass
- lint and production build pass
- documentation is current
- no placeholder control pretends to work
