# moticon (monorepo)

npm workspaces monorepo for the moticon icon library and its showcase site.

```
packages/moticon   the published npm package — 328 animated icon components,
                    each with a matching per-icon JSON metadata file
                    (src/icons/Bell.tsx + src/icons/Bell.json)

apps/site           Next.js showcase site — imports icons directly from the
                    "moticon" package (via workspace symlink), and generates
                    its own searchable metadata list at build/dev time by
                    reading packages/moticon/src/icons/*.json
```

## How the site gets its icon metadata

The site does **not** keep its own copy of icon metadata. On `predev`/`prebuild`,
`apps/site/scripts/build-icon-metadata.mjs` reads every `packages/moticon/src/icons/*.json`
file and writes a single combined list to `apps/site/src/generated/icon-metadata.json`
(gitignored — always regenerated, never hand-edited). This is what the site's
search, category filter, and icon detail pages read from (`src/lib/icons.ts`).

Add or edit an icon's category/tags/motion spec in `packages/moticon/src/icons/<Name>.json`
— the site picks it up automatically next time it builds or starts.

## Commands (run from repo root)

```bash
npm install          # installs and links both workspaces

npm run dev           # start the site (regenerates metadata first)
npm run dev:pkg       # watch-build the moticon package (tsup --watch)

npm run build         # build the package, then the site
npm run build:pkg     # build only packages/moticon (tsup)
npm run build:site    # build only apps/site (next build)

npm run typecheck     # typecheck packages/moticon
npm run lint          # lint apps/site
```

When actively developing icons, run `npm run dev:pkg` in one terminal and
`npm run dev` in another — the site imports the package's build output, so
the package needs to be built (or watching) for changes to show up.
