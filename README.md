# moticon (monorepo)

npm workspaces monorepo for the moticon icon library, its MCP server, and its showcase site.

```
packages/moticon    the published npm package — 328 animated icon components,
                     each with a matching per-icon JSON metadata file
                     (src/icons/Bell.tsx + src/icons/Bell.json)

packages/mcp         @moticon/mcp — a Model Context Protocol server that lets AI
                     coding agents (Claude Code, Cursor, etc.) search the icon
                     catalog and drop icons straight into a project

apps/site            Next.js showcase site — imports both the icon components
                     AND the metadata registry directly from the "moticon"
                     package (via workspace symlink). No local copy of either.
```

## Single source of truth: the package, not the site

Metadata (category, tags, aliases, contributors, motion spec) lives **only** as
per-icon JSON files in `packages/moticon/src/icons/<Name>.json`. Nothing else
should be hand-edited.

`packages/moticon`'s own `prebuild`/`predev` runs two generators against
`src/icons/*.tsx` + `src/icons/*.json` before every build:

- `scripts/generate-exports.mjs` — writes `src/index.ts` (the component
  barrel), and fails the build if any `.tsx` is missing its `.json` (or
  vice versa), or if a `.json` is missing a field required by
  `icon.schema.json`.
- `scripts/build-registry.mjs` — writes `src/registry.ts` (the metadata
  array), built as its own **`moticon/registry`** entry point, kept separate
  from the icon components on purpose because the components carry a
  `"use client"` directive and the registry must stay safely importable
  from React Server Components.

Both `src/index.ts` and `src/registry.ts` are gitignored — always generated,
never hand-edited. So **anyone who installs `moticon` from npm**, not just
this site, gets the full metadata alongside the components:

```ts
import { Bell } from "moticon";
import { iconRegistry } from "moticon/registry";
```

`apps/site/src/lib/icons.ts` simply re-exports `iconRegistry` — it does not
generate or duplicate anything itself. `packages/mcp` reads from the same
`moticon/registry` entry point and from `packages/moticon/src/icons/*.tsx`
directly (for `get_icon`/`add_icon` source code) — so all three consumers
(package, MCP server, site) read from one place.

Add or edit an icon's category/tags/motion spec in `packages/moticon/src/icons/<Name>.json`
— rebuild the package and every consumer picks it up.

## Commands (run from repo root)

```bash
npm install          # installs and links every workspace

npm run dev           # start the site (regenerates metadata first)
npm run dev:pkg       # watch-build the moticon package (tsup --watch)

npm run build         # build the package, the MCP server, then the site
npm run build:pkg     # build only packages/moticon (tsup)
npm run build:mcp     # build only packages/mcp (tsup)
npm run build:site    # build only apps/site (next build)

npm run typecheck     # typecheck packages/moticon
npm run lint          # lint apps/site
```

When actively developing icons, run `npm run dev:pkg` in one terminal and
`npm run dev` in another — the site imports the package's build output, so
the package needs to be built (or watching) for changes to show up.

See [`packages/mcp/README.md`](packages/mcp/README.md) for how to wire the
MCP server into Claude Code or Cursor.
