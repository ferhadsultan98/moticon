# Changesets

This folder is managed by [Changesets](https://github.com/changesets/changesets).

## Adding a changeset

When your PR changes a published package (`@moticon/react`, `@moticon/mcp`, or
`moticon`), add a changeset:

```bash
npx changeset
```

Pick the affected package(s), the bump type (`patch` / `minor` / `major`), and
write a one-line summary. This creates a markdown file in `.changeset/` — commit
it with your PR.

- **patch** — bug fix, no API change
- **minor** — new icon, new capability, backwards-compatible addition
- **major** — a breaking change (rare pre-1.0; call it out clearly)

All three packages (`@moticon/react`, `@moticon/mcp`, `moticon`) are versioned
**independently** — a change to one bumps only that one. The exception:
Changesets will add an automatic patch to `@moticon/mcp` / `moticon` if a
breaking `@moticon/react` bump makes their dependency range unsatisfiable.

## Releasing (maintainer only)

Changesets is used **only for versioning and the changelog** in this repo —
`npx changeset version` consumes the pending changesets, bumps versions, updates
each `CHANGELOG.md`, and adjusts internal dependency ranges. Publishing to npm is
done separately by the release workflow via `npm publish`, so npm's trusted
publishing / OIDC flow stays in control.
