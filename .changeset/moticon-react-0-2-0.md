---
"@moticon/react": minor
---

Enhanced motion architecture and 15 new icons.

- **Motion layer**: every icon component is now the "enhanced" layer — the
  generator-produced icons compose `createEnhancedIcon` with a per-icon motion
  director, and the hand-written ones stay self-contained. The static geometry
  moves to `src/icons` (metadata source of truth) and the published component
  is `src/enhanced/<Name>.tsx`. Existing icons animate with the same mechanic
  but a refined, geometry-aware motion — visible behaviour changes for all 328
  previously published icons.
- **New icons** (15): Balloon, Bike, Bomb, Candle, Drum, Dumbbell, Guitar,
  Kite, Magnet, Metronome, Plane, Ship, Swing, Trumpet, Windmill — 343 total.
- **Peer dependencies tightened**: `react` is `^18.0.0 || ^19.0.0` and `motion`
  is `>=11 <14` (11–13 verified; 14 untested). `engines.node` is `>=18`.
- **Tarball**: `src/enhanced/*.tsx` is not shipped (the built `dist` is the
  public API); `src/icons/*.{tsx,json}` and the metadata registry still are.
- `@moticon/react/registry` gains `capabilities` per icon (stateful / states /
  controllable) merged from `src/capabilities.json`.
