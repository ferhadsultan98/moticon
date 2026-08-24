<p align="center">
  <img src="github-readme.png" alt="moticon — 328 icons that move with intent" width="100%" />
</p>

<h1 align="center">moticon</h1>

<p align="center">
  328 animated React icons, each modeling a real physical mechanic —
  <br />
  swing, drip, unfurl, snap — instead of a generic scale/opacity tween.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@moticon/react"><img src="https://img.shields.io/npm/v/@moticon/react?color=3dff9e&label=%40moticon%2Freact" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@moticon/mcp"><img src="https://img.shields.io/npm/v/@moticon/mcp?color=3dff9e&label=%40moticon%2Fmcp" alt="npm version" /></a>
  <a href="https://github.com/ferhadsultan98/moticon/blob/main/packages/moticon/LICENSE"><img src="https://img.shields.io/badge/license-MIT-3dff9e" alt="MIT License" /></a>
  <a href="https://github.com/ferhadsultan98/moticon"><img src="https://img.shields.io/github/stars/ferhadsultan98/moticon?color=3dff9e" alt="GitHub stars" /></a>
</p>

<p align="center">
  <a href="#install">Install</a> ·
  <a href="#usage">Usage</a> ·
  <a href="#mcp-server">MCP server</a> ·
  <a href="#repo-layout">Repo layout</a> ·
  <a href="#contributing">Contributing</a>
</p>

---

## Why moticon

Most icon animation libraries apply the same scale/fade/rotate tween to every
icon regardless of what it actually depicts. moticon doesn't — every icon's
motion is hand-built to match how the real object behaves:

- 🔔 a bell **rings**
- ❤️ a heart **beats**
- ⭐ a star **sparkles**
- 📥 an inbox **receives**
- 🔋 a battery **charges**

328 icons, each with its own motion spec. Built on
[motion](https://motion.dev) (Framer Motion), fully typed, tree-shakeable,
zero runtime CSS.

## Install

```bash
npm install @moticon/react motion
```

`motion` is a peer dependency.

## Usage

```tsx
import { Bell } from "@moticon/react";

export function Notification() {
  return <Bell size={24} />;
}
```

Every icon ships its own `"use client"` directive, so it works as-is inside
Next.js App Router server components — no extra client boundary needed.

Each icon also carries structured metadata — category, tags, aliases, and its
animation spec — importable separately so it stays safe in server components:

```ts
import { iconRegistry } from "@moticon/react/registry";

iconRegistry.find((icon) => icon.name === "Bell");
// { name: "Bell", category: "Communication", mechanic: "ring", trigger: "hover", ... }
```

## MCP server

[`@moticon/mcp`](packages/mcp) lets AI coding agents — Claude Code, Cursor,
and anything else that speaks [MCP](https://modelcontextprotocol.io) — search
the icon catalog and drop icons straight into your project.

```bash
claude mcp add moticon -- npx -y @moticon/mcp
```

Four tools: `search_icons`, `get_icon`, `add_icon`, `list_libraries`. See
[`packages/mcp/README.md`](packages/mcp/README.md) for manual setup (Cursor,
or any other MCP client).

## Repo layout

This is an npm workspaces monorepo — one source of truth, three consumers.

```
packages/moticon    @moticon/react on npm. 328 icon components, each paired
                     with a per-icon JSON metadata file
                     (src/icons/Bell.tsx + src/icons/Bell.json)

packages/mcp         @moticon/mcp on npm. The MCP server above.

apps/site            The showcase site. Imports icons AND metadata directly
                     from @moticon/react — no local copy.
```

### Single source of truth

Metadata (category, tags, aliases, contributors, motion spec) lives **only**
in `packages/moticon/src/icons/<Name>.json`. Nothing else should be
hand-edited — `src/index.ts` (the component barrel) and `src/registry.ts`
(the metadata array, exported as its own `@moticon/react/registry` entry
point) are both generated from it on every build, and the build **fails**
if:

- a `.tsx` is missing its matching `.json`, or vice versa
- a `.json` is missing a field required by `icon.schema.json`
- an icon name isn't PascalCase
- a `.tsx` is missing its leading `"use client";` directive

`apps/site` and `packages/mcp` both read straight from `@moticon/react` and
`@moticon/react/registry` — nothing is duplicated or hand-synced between
them.

### Commands (run from repo root)

```bash
npm install            # installs and links every workspace

npm run dev             # start the site (regenerates metadata first)
npm run dev:pkg         # watch-build @moticon/react (tsup --watch)

npm run build           # build the package, the MCP server, then the site
npm run build:pkg       # build only packages/moticon
npm run build:mcp       # build only packages/mcp
npm run build:site      # build only apps/site

npm run typecheck       # typecheck packages/moticon
npm run lint            # lint apps/site
```

When actively developing icons, run `npm run dev:pkg` in one terminal and
`npm run dev` in another.

## Contributing

Adding an icon means adding both `src/icons/<Name>.tsx` and
`src/icons/<Name>.json` in `packages/moticon`. Run
`npm run fix:use-client --workspace=@moticon/react` afterward to patch in the
`"use client"` directive automatically, then `npm run build:pkg` to
regenerate the barrel and registry and confirm everything validates.

## License

MIT — see [LICENSE](packages/moticon/LICENSE).

## Author

[Farhad Sultanov](https://github.com/ferhadsultan98)
