<p align="center">
  <img src="github-readme.png" alt="moticon — animated icons that move with intent" width="100%" />
</p>

<h1 align="center">moticon</h1>

<p align="center">
  <strong>Animated React icons that model how objects actually move</strong> —
  <br />
  a bell rings, a heart beats, a download drops. Not scale, fade or rotate presets.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@moticon/react"><img src="https://img.shields.io/npm/v/@moticon/react?color=3dff9e&label=%40moticon%2Freact" alt="@moticon/react npm version" /></a>
  <a href="https://www.npmjs.com/package/@moticon/mcp"><img src="https://img.shields.io/npm/v/@moticon/mcp?color=3dff9e&label=%40moticon%2Fmcp" alt="@moticon/mcp npm version" /></a>
  <a href="https://github.com/ferhadsultan98/moticon/blob/main/packages/moticon/LICENSE"><img src="https://img.shields.io/badge/license-MIT-3dff9e" alt="MIT License" /></a>
</p>

<p align="center">
  React &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; Motion &nbsp;·&nbsp; tree-shakeable &nbsp;·&nbsp; Next.js App Router compatible &nbsp;·&nbsp; reduced-motion aware &nbsp;·&nbsp; MIT
</p>

<p align="center">
  <a href="https://moticon-web.vercel.app/"><strong>Browse all icons →</strong></a>
  &nbsp;·&nbsp;
  <a href="https://moticon-web.vercel.app/playground">Playground</a>
  &nbsp;·&nbsp;
  <a href="#install">Install</a>
  &nbsp;·&nbsp;
  <a href="#mcp-server">MCP server</a>
</p>

---

## Install

```bash
npm install @moticon/react motion
```

`motion` is a peer dependency — install it alongside so only one copy is bundled.

## Quick start

```tsx
import { Bell } from "@moticon/react";

export function Notification() {
  return <Bell size={24} />;
}
```

Every icon is a named export. The animation runs on hover or tap automatically —
no provider to mount, no stylesheet to import.

## Why moticon

Most animated icon libraries apply one preset — scale up on hover, fade in on
tap, spin on click — to every icon regardless of what it depicts. moticon
doesn't. Each icon has a **hand-built motion spec** matched to the real
behaviour of the object:

| Icon | What it does |
|---|---|
| 🔔 `Bell` | pivots and rings, its clapper trailing a beat behind |
| ❤️ `Heart` | beats |
| ⬇️ `Download` | the arrow drops through the tray |
| ✂️ `Scissors` | the blades snap shut |
| 📥 `Inbox` | receives |
| 🔋 `BatteryCharging` | charges |

Distinct, object-specific motion mechanics across the set, each choreographed
around that icon's own geometry, pivot and physics.

## How moticon motion differs

**A generic library:**

```
hover  →  scale(1.1) + rotate(5deg)   // same for every icon
```

**moticon:**

```
Bell     hover → the shell swings from its top pivot; the clapper follows late
Plane    hover → the fuselage climbs and banks along its flight path
Magnet   hover → the poles pull, then settle back with a small overshoot
```

The mechanic is modelled on the physical action, not stamped on from a shared
preset.

## Core features

- **React 18 / 19** — plain components, `size` / `color` / `strokeWidth` props
- **TypeScript** — every icon shares one typed `MoticonIconProps` shape, types
  shipped in the package
- **Motion** — built on [motion](https://motion.dev) (Framer Motion); it's a
  peer dependency, not bundled
- **Tree-shakeable** — `sideEffects: false`, every icon its own module;
  importing one icon bundles one icon
- **SSR / Next.js App Router** — each icon carries its own `"use client"`
  directive, so it drops into a Server Component with no extra boundary
- **`prefers-reduced-motion`** — respected automatically; the animation
  short-circuits and the icon renders static
- **Metadata registry** — category, tags, aliases, motion spec and capabilities
  for every icon, importable from a server-safe entry point
- **MIT licensed**

## Props

```ts
interface MoticonIconProps {
  size?: number;        // px — default 24
  color?: string;       // any CSS color — default "currentColor"
  strokeWidth?: number; // default 2
  className?: string;   // forwarded to the root <svg>
}
```

All props are optional. `className` is forwarded to the SVG, so Tailwind
utilities for color, size and transitions all work.

## Triggers

Each icon is authored with the trigger that fits its motion — hover icons replay
on pointer-enter, tap icons play on press. Both remain keyboard-operable inside a
real `<button>`. An icon's exact trigger and mechanic are in its
[detail page](https://moticon-web.vercel.app/icons/Bell) and in the registry.

## Next.js

Icons are interactive Client Components. Add the client boundary to the leaf
component that renders them — not the whole page:

```tsx
// app/components/notification.tsx
"use client";

import { Bell } from "@moticon/react";

export function Notification() {
  return <Bell size={24} />;
}
```

Keep pages and layouts as Server Components. The icon's static SVG renders in
the server HTML; only the animation logic hydrates on the client.

## Accessibility

An icon is decorative until it's the only label on a control.

```tsx
// decorative — hide from assistive tech
<span><Bell aria-hidden="true" /> Notifications</span>

// icon-only control — label the control, hide the icon
<button type="button" aria-label="Open notifications">
  <Bell aria-hidden="true" />
</button>
```

Because the control is a real `<button>`, it's focusable and keyboard-operable.
Every icon checks `prefers-reduced-motion` and renders static when motion is
reduced — no prop, no config.

## Tree shaking

`@moticon/react` is `sideEffects: false` and every icon is its own module.
A named import from the package entry is tree-shaken by every modern bundler:

```tsx
import { Bell } from "@moticon/react"; // one icon in your bundle
```

Run your bundler's analyzer to confirm only the icons you imported ship.

## Metadata registry

Icon metadata is importable separately from a server-safe entry point, so it
stays usable in a React Server Component:

```ts
import { iconRegistry } from "@moticon/react/registry";

iconRegistry.find((icon) => icon.name === "Bell");
// {
//   name: "Bell", category: "Communication", mechanic: "ring", trigger: "hover",
//   capabilities: { stateful: true, states: ["idle", "active"], controllable: true },
//   ...
// }
```

## Roadmap

- **`moticon` CLI** — copy component source into your project (shadcn-style),
  no runtime dependency. Built in [`packages/cli`](packages/cli), publishing to
  npm soon.
- **shadcn registry** — every icon as a
  [shadcn registry item](https://ui.shadcn.com/docs/registry). Generated in
  this repo, deploying with the site soon.
- **Stateful icons** — `state` prop for icons like `Menu` ⇄ `Close`,
  `Play` ⇄ `Pause`. See [Capabilities](#capabilities).

## MCP server

Animated icons for coding agents. [`@moticon/mcp`](packages/mcp) lets
Claude Code, Cursor and other MCP-compatible agents search the catalog and drop
the right icon into your project by intent — *"add an animated download icon"*.

```bash
claude mcp add moticon -- npx -y @moticon/mcp
```

Tools: `search_icons`, `get_icon`, `add_icon`, `list_libraries`. Full setup for
Cursor and other clients in [`packages/mcp/README.md`](packages/mcp/README.md).

## Capabilities

Beyond the default hover/tap animation, some icons can do more. This is tracked
in one file — `packages/moticon/src/capabilities.json` — and merged into the
registry on every build:

```ts
interface MoticonIconCapabilities {
  stateful: boolean;         // accepts a `state` prop driving distinct animations
  states?: string[];         // named states, first is the default
  controllable: boolean;     // can be driven imperatively (roadmap)
  cssCompatible?: boolean;   // has a verified pure-CSS equivalent (roadmap)
  reactNativeCompatible?: boolean; // has a verified Reanimated renderer (roadmap)
}
```

Three states matter: `true` (verified capable), `false` (verified **not**
capable), and **absent** (not yet audited). Fields are never coerced to `false`
to mean "unknown". Every consumer — the site, the MCP server, the CLI — reads
this merged result rather than inventing capability data of its own.

## Repo layout

An npm workspaces monorepo — one source of truth, several consumers.

```
packages/moticon    @moticon/react on npm. Icon components, each paired with a
                     per-icon JSON metadata file (src/icons/Bell.tsx +
                     src/icons/Bell.json), plus src/capabilities.json.

packages/cli         The `moticon` CLI — copies component source into a
                     project. Reads the catalog straight from @moticon/react.
                     (Not yet published to npm.)

packages/mcp         @moticon/mcp on npm. The MCP server above.

apps/site            The showcase site — live at moticon-web.vercel.app.
                     Imports icons and metadata directly from @moticon/react.
                     Also generates the shadcn registry served at /r/*.
```

### Single source of truth

Metadata lives **only** in `packages/moticon/src/icons/<Name>.json`; capability
data **only** in `packages/moticon/src/capabilities.json`. `src/index.ts` (the
component barrel) and `src/registry.ts` (the metadata array, capabilities merged
in, exported as `@moticon/react/registry`) are generated on every build, and the
build **fails** if:

- a `.tsx` is missing its matching `.json`, or vice versa
- a `.json` is missing a field required by `icon.schema.json`
- an icon name isn't PascalCase
- a `.tsx` is missing its leading `"use client";` directive

`apps/site`, `packages/cli` and `packages/mcp` all read straight from
`@moticon/react` — nothing is duplicated or hand-synced.

### Commands (run from repo root)

```bash
npm install            # install and link every workspace

npm run dev            # start the site (regenerates metadata first)
npm run dev:pkg        # watch-build @moticon/react

npm run build          # build the package, MCP server, CLI, then the site
npm run build:pkg      # build only packages/moticon
npm run build:cli      # build only packages/cli
npm run build:mcp      # build only packages/mcp
npm run build:site     # build only apps/site

npm run typecheck      # typecheck packages/moticon + packages/cli
npm run lint           # lint apps/site
```

## Contributing

Adding an icon means adding both `src/icons/<Name>.tsx` and
`src/icons/<Name>.json` in `packages/moticon`. Run
`npm run fix:use-client --workspace=@moticon/react`, then `npm run build:pkg` to
regenerate the barrel and registry and confirm everything validates.

The animation must model the object's real physical motion — not a generic
scale/rotate/fade. A bell pivots and its clapper follows; a plane climbs; a
magnet pulls. If an icon can meaningfully accept a `state` prop (loading,
success, muted, locked…), add an entry to `src/capabilities.json` — only for
capabilities you've actually verified.

## License

MIT — see [LICENSE](packages/moticon/LICENSE).

## Author

[Farhad Sultanov](https://www.linkedin.com/in/farhadsultan/) · [GitHub](https://github.com/ferhadsultan98)
