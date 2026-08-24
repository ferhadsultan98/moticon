# @moticon/react

[![npm version](https://img.shields.io/npm/v/@moticon/react?color=3dff9e)](https://www.npmjs.com/package/@moticon/react)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@moticon/react?color=3dff9e)](https://bundlephobia.com/package/@moticon/react)
[![license](https://img.shields.io/npm/l/@moticon/react?color=3dff9e)](https://github.com/ferhadsultan98/moticon/blob/main/packages/moticon/LICENSE)

328 animated React icons, each modeling a real physical mechanic — swing,
drip, unfurl, snap — instead of a generic scale/opacity tween applied to
every icon. Built on [motion](https://motion.dev) (Framer Motion).

Full catalog, live previews, and the copy-paste code for every icon:
**[github.com/ferhadsultan98/moticon](https://github.com/ferhadsultan98/moticon)**

## Why

Most icon animation packages give every icon the same tween — scale up on
hover, fade in on tap. moticon doesn't. Each of the 328 icons has its own
hand-built motion spec that matches what the object actually does:

- 🔔 `Bell` **rings**
- ❤️ `Heart` **beats**
- ⭐ `Star` **sparkles**
- 📥 `Inbox` **receives**
- 🔋 `BatteryCharging` **charges**
- ✂️ `Scissors` **snaps**

Fully typed, tree-shakeable, zero runtime CSS, `"use client"` baked into
every icon so it drops straight into a Next.js App Router server component.

## Install

```bash
npm install @moticon/react motion
```

`motion` is a peer dependency — install it alongside `@moticon/react`.

## Usage

```tsx
import { Bell } from "@moticon/react";

export function Notification() {
  return <Bell size={24} />;
}
```

Each icon triggers its animation on either `hover` or `tap`, depending on the icon — check the icon's own file or metadata to see which.

## Props

Every icon accepts the same prop shape:

```ts
interface MoticonIconProps {
  size?: number;        // default: 24
  color?: string;       // default: "currentColor"
  strokeWidth?: number; // default: 2
  className?: string;
}
```

## Next.js

Every icon already ships with its own `"use client"` directive, so they work as-is inside Next.js App Router server components — no extra client boundary needed:

```tsx
import { Bell } from "@moticon/react";

export function Notification() {
  return <Bell size={24} />;
}
```

## Metadata

Each icon has a matching JSON file in `src/icons/` (e.g. `Bell.tsx` + `Bell.json`) describing its categories, tags, aliases, and animation spec — and that metadata is importable at runtime, safely from a React Server Component, via a separate entry point:

```ts
import { iconRegistry } from "@moticon/react/registry";

iconRegistry.find((icon) => icon.name === "Bell");
// {
//   name: "Bell",
//   category: "Communication",
//   tags: ["bell", "ring", "communication"],
//   aliases: [],
//   motion: { trigger: "hover", mechanic: "ring", duration: 0.6, ease: "easeInOut" },
//   ...
// }
```

The raw per-icon JSON looks like this:

```json
{
  "$schema": "../icon.schema.json",
  "contributors": ["ferhadsultan"],
  "tags": ["bell", "ring", "communication"],
  "categories": ["Communication"],
  "aliases": [],
  "deprecated": false,
  "motion": {
    "trigger": "hover",
    "mechanic": "ring",
    "duration": 0.6,
    "ease": "easeInOut",
    "stiffness": null
  }
}
```

## AI agents / MCP

[`@moticon/mcp`](https://www.npmjs.com/package/@moticon/mcp) lets AI coding
agents (Claude Code, Cursor, etc.) search this catalog and drop icons
straight into a project:

```bash
claude mcp add moticon -- npx -y @moticon/mcp
```

## Development

```bash
npm install
npm run build   # regenerates src/index.ts + src/registry.ts, then bundles with tsup
npm run dev     # same, then watches for changes
```

`src/index.ts` (the component barrel) and `src/registry.ts` (the metadata
registry) are both generated, not hand-maintained — running `build` or `dev`
regenerates them from `src/icons/*.tsx` and `src/icons/*.json` first. Adding
a new icon means adding both files; the generator fails the build if:

- either file is missing its counterpart
- a `.json` is missing a required field from `icon.schema.json`
- an icon name isn't PascalCase
- a `.tsx` is missing its leading `"use client";` directive (every icon uses
  `motion/react`, so a missing directive silently breaks any consumer
  importing the package into a React Server Component)

Run `npm run fix:use-client` after adding new icon files to patch in the
missing directive automatically — it only touches files that need it.

`npm run size` checks bundle size against budgets (full bundle, a single
tree-shaken icon, and the registry) via [size-limit](https://github.com/ai/size-limit).
It runs automatically before every `npm publish`.

Icons are generated from [Lucide](https://lucide.dev) SVG paths, then hand-edited to add real per-icon motion.

## Author

[Farhad Sultanov](https://www.linkedin.com/in/farhadsultan/) · [GitHub](https://github.com/ferhadsultan98)

## License

MIT
