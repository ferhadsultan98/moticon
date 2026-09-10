# Contributing to moticon

Thanks for helping. moticon is an npm workspaces monorepo:

| Package | What it is |
|---|---|
| `packages/moticon` | `@moticon/react` — the icon components + metadata |
| `packages/mcp` | `@moticon/mcp` — the MCP server |
| `packages/cli` | the `moticon` CLI (not yet published) |
| `apps/site` | the showcase site |

## The one rule

**A moticon icon's animation models the physical motion of the object it
depicts.** A bell pivots and its clapper follows a beat behind; a plane climbs
and banks along its flight path; a magnet pulls, then settles with a small
overshoot.

A generic `scale`, `rotate`, `opacity` or `fade` preset stamped onto an icon is
**not** a moticon animation and will not be merged. If you can't describe the
mechanic in terms of what the real object does, it isn't ready.

## Setup

Requires Node **>= 18**.

```bash
git clone https://github.com/ferhadsultan98/moticon.git
cd moticon
npm install            # installs and links every workspace
```

Common scripts (run from the repo root):

```bash
npm run dev            # start the site (regenerates metadata first)
npm run dev:pkg        # watch-build @moticon/react

npm run build          # build every workspace
npm run build:pkg      # build only packages/moticon

npm run typecheck      # typecheck packages/moticon + packages/cli
npm run lint           # lint apps/site
```

## Source of truth — do not edit generated files

In `packages/moticon/src`:

| Edit these | Never hand-edit these (generated on build) |
|---|---|
| `icons/<Name>.tsx` — the icon's SVG geometry + reference animation | `index.ts` — the component barrel |
| `icons/<Name>.json` — its metadata (tags, categories, aliases, motion spec) | `registry.ts` — the metadata array |
| `capabilities.json` — per-icon capability flags | `enhanced/` — the published component layer, generated from `icons/` |
| | `playground-icons/` |

`npm run build:pkg` regenerates the generated files and **fails the build** if:

- a `.tsx` has no matching `.json`, or vice versa
- a `.json` is missing a field required by `icon.schema.json`
- an icon name isn't PascalCase
- a `.tsx` is missing its leading `"use client";` directive

If your `.tsx` is missing the directive, run:

```bash
npm run fix:use-client --workspace=@moticon/react
```

## Adding an icon

1. Add `packages/moticon/src/icons/<Name>.tsx` — PascalCase, matching the file
   name. Start from the geometry of an existing similar icon; keep the
   `24×24` viewBox, `size` / `color` / `strokeWidth` props, and the invisible
   hit-area `<rect>`.
2. Build the animation on `motion/react`:
   - use `useReducedMotion()` and skip the animation when it's `true`
   - pick the trigger that fits — `whileHover` or `whileTap`
   - model the real physical motion (see [The one rule](#the-one-rule))
3. Add `packages/moticon/src/icons/<Name>.json` with `tags`, `categories`,
   `aliases`, and the `motion` block (`trigger`, `mechanic`, `duration`,
   `ease`). See `icon.schema.json` and any existing `.json` for the shape.
4. If the icon can meaningfully hold a `state` (loading, success, muted,
   locked, open/close…), add an entry to `capabilities.json` — **only** for
   capabilities you've actually built and verified. Absent means "not audited",
   not "not capable".
5. Run:
   ```bash
   npm run fix:use-client --workspace=@moticon/react
   npm run build:pkg
   ```
   Confirm the build passes and the new icon appears in `src/registry.ts`.

The `enhanced/` layer and the playground are regenerated for you — don't touch
them. If your icon needs hand-written behaviour beyond what the generator
produces (for example a stateful morph), open an issue first so a maintainer
can add it to the generator's `custom` set.

## Improving an existing animation

Edit only `packages/moticon/src/icons/<Name>.tsx`. Re-run `npm run build:pkg`.
In the PR, describe the current behaviour, the problem, and the improved
mechanic — and check that reduced-motion still renders a sensible static state.

## Accessibility

- Icons are decorative by default. In your examples, wrap icon-only controls in
  a real `<button>` with an `aria-label` and give the icon `aria-hidden="true"`.
- Every icon must respect `prefers-reduced-motion` via `useReducedMotion()` —
  the reduced state must still communicate the icon's meaning, just without the
  motion.
- Keep stroke contrast in mind; icons inherit `currentColor`.

## TypeScript, lint, build

Before opening a PR:

```bash
npm run typecheck
npm run lint
npm run build
```

All three must pass.

## Pull request checklist

- [ ] Scope is one thing (one icon, one fix, one doc change)
- [ ] Only source-of-truth files edited; no generated files hand-edited
- [ ] The animation is semantic, not a generic scale/rotate/fade preset
- [ ] `useReducedMotion()` handled; reduced state still communicates meaning
- [ ] `.tsx` + `.json` both present (for a new icon)
- [ ] `npm run typecheck`, `npm run lint`, `npm run build` all pass
- [ ] Screenshot or short screen recording for any visual change
- [ ] Breaking change noted, if any
- [ ] Linked to the related issue

## Reporting bugs and requesting icons

Use the [issue templates](https://github.com/ferhadsultan98/moticon/issues/new/choose).
Icon and animation requests ask you to describe the *physical behaviour* you
expect — that's the part that matters.

## License

By contributing you agree your contributions are licensed under the
[MIT License](packages/moticon/LICENSE).
