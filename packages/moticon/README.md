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

Icons are interactive client components (they use `motion/react` internally). Add the client boundary to whatever component renders them:

```tsx
"use client";

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
npm run build   # bundles src/index.ts with tsup
npm run dev     # watch mode
```

Icons are generated from [Lucide](https://lucide.dev) SVG paths via `scripts/generate-icons.mjs`, then hand-edited to add real per-icon motion.

## Author

[Farhad Sultanov](https://github.com/ferhadsultan98)

## License

MIT
