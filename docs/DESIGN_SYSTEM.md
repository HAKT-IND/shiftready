# ShiftReady Design System

## Visual direction

The approved mockups under `docs/mockups/` define the current product direction.

ShiftReady should feel:

- dependable
- industrial
- modern
- uncluttered
- quick to scan
- suitable for field use

## Layout

- Mobile-first for worker workflows.
- Desktop-first only for administration where density is useful.
- Use clear page titles and visible progress for multi-step forms.
- Keep primary actions easy to reach.
- Use sticky actions carefully for long forms.
- Avoid dense desktop tables on narrow screens.

## Colour roles

Use semantic roles rather than arbitrary colour.

- Dark slate or charcoal: navigation and strong framing
- White or near-white: primary content surfaces
- Blue: primary actions and information
- Green: success, approved, safe, complete
- Amber: warning, medium risk, pending attention
- Red: critical risk, destructive action, failure, overdue

Colour must never be the only signal. Pair it with text, icon, or shape.

## Components

Common components may include:

- App shell
- Page header
- Status badge
- Risk badge
- Summary card
- Empty state
- Loading state
- Error state
- Form field
- Confirmation dialog
- Sticky action bar
- Data table
- Mobile list row

Do not build all components upfront. Introduce them when actual screens need them.

## Forms

- Labels remain visible.
- Required fields are obvious.
- Errors appear near the affected control.
- Avoid placeholder text as the only instruction.
- Preserve draft input where practical.
- Confirm destructive or irreversible actions.
- Make submit state unmistakable.
- Disable duplicate submission while a request is in flight.

## Accessibility and field use

- Target at least 44 by 44 CSS pixels for primary touch controls.
- Provide visible keyboard focus.
- Use semantic controls.
- Maintain readable contrast.
- Avoid tiny secondary text.
- Keep critical actions separated from destructive actions.
- Do not rely on hover.
- Design for glare, tired users, and intermittent connectivity.
