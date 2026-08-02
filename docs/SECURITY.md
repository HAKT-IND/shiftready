# ShiftReady Security Baseline

## Secrets

- Never commit `.env` files.
- Commit `.env.example` with placeholder names only.
- Browser code may use only public client configuration.
- Supabase service-role keys belong only in trusted server environments.
- Rotate any secret exposed in logs, screenshots, commits, or chat.

## Authentication and authorization

- Authentication proves identity.
- Authorization determines access.
- Hiding a button is not authorization.
- Enforce access through RLS and trusted server logic.
- Use least privilege.
- Review inactive users, invitations, role changes, and site access.

## Multi-tenant data

When companies or contractors share the platform:

- every tenant-owned record needs a reliable tenant boundary
- users must not infer or access another tenant's data
- RLS policies require explicit tenant membership checks
- admin power must be scoped and auditable

## Safety records

Submitted safety records should preserve:

- author
- timestamps
- status
- relevant site and crew
- approval history
- material revisions or audit events

Avoid silently replacing submitted records.

## Files and photos

- Validate file type and size.
- Use private buckets where records are not public.
- Apply storage policies.
- Avoid exposing predictable unrestricted URLs.
- Strip or handle metadata where privacy matters.

## Security review triggers

Perform a focused security review when changing:

- authentication
- roles
- invitations
- tenant access
- RLS policies
- file uploads
- exports
- admin actions
- service functions
- audit records
