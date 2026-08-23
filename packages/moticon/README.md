# moticon

Animated icon components for React, built on [motion](https://motion.dev) (Framer Motion). 328 icons, each with a hand-built animation modeled on how the object actually moves — not a generic scale/opacity toggle applied to every icon.

## Install

```bash
npm install moticon motion
```

`motion` is a peer dependency — install it alongside `moticon`.

## Usage

```tsx
import { Bell } from "moticon";

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
import { Bell } from "moticon";

export function Notification() {
  return <Bell size={24} />;
}
```

## Icon metadata

Each icon has a matching JSON file in `src/icons/` (e.g. `Bell.tsx` + `Bell.json`) describing its categories, tags, aliases, and animation spec:

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

Icons are generated from [Lucide](https://lucide.dev) SVG paths via `scripts/generate-icons.mjs`, then hand-edited to add real per-icon motion.

## Author

[Farhad Sultanov](https://github.com/ferhadsultan98)

## License

MIT
