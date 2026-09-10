<!--
Thanks for the PR. Keep it to one thing. Fill in what applies; delete what
doesn't.
-->

## What this changes

<!-- One or two sentences. Link the issue: Closes #123 -->

## Type

- [ ] New icon
- [ ] Animation improvement to an existing icon
- [ ] Bug fix
- [ ] Docs
- [ ] Tooling / build
- [ ] Other:

## Checklist

- [ ] Only source-of-truth files edited (`src/icons/*.tsx`, `src/icons/*.json`,
      `src/capabilities.json`) — no generated files (`index.ts`, `registry.ts`,
      `enhanced/`, `playground-icons/`) hand-edited
- [ ] The animation models the object's real physical motion — not a generic
      scale / rotate / fade preset
- [ ] `useReducedMotion()` handled; the reduced state still communicates the
      icon's meaning
- [ ] For a new icon: both `<Name>.tsx` and `<Name>.json` are present
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Screenshot or short screen recording attached (for any visual change)

## Breaking change?

<!-- If yes, describe what breaks and the migration path. If no, delete this section. -->
