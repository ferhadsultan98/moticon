# Moticon Motion Design Standard

This document is the quality gate for every new or revised Moticon icon. All 343 public icons pass through the enhanced layer. The fully hand-authored signature set currently contains `Heart`, `Bell`, `Rocket`, `Sparkles`, `Download`, `Eye`, `EyeOff`, `Fingerprint`, `Gift`, `GraduationCap`, `Home`, `Keyboard`, `Lamp`, and `Menu`. Every other icon preserves its own copied inner choreography and receives a source-directed reaction layer derived from its geometry and declared mechanic until it reaches its own manual review batch.

## 1. Motion must explain the object

Choose one physical verb before writing keyframes: ring, launch, pour, scan, fold, connect, cut, or another mechanic users can recognize without a label. If the motion could be pasted onto an unrelated icon unchanged, it is not specific enough.

Avoid generic scale-and-fade animation as the complete idea. Scale and opacity may support the mechanic, but a meaningful part of the icon must perform the primary action.

## 2. Use a four-beat motion arc

Every animation should contain as many of these beats as the mechanic needs:

1. **Anticipation** — a small movement opposite the main action or a brief compression.
2. **Action** — the clearest, fastest statement of the mechanic.
3. **Reaction** — clapper lag, tray impact, recoil, trail, ripple, echo, spark, or another consequence.
4. **Settle** — one or two diminishing corrections that return exactly to rest.

Do not add beats only to make an animation longer. Simple actions may combine anticipation and action.

## 3. Preserve the resting icon

- Resting geometry must match the source icon exactly.
- Supporting effects must be invisible at rest and must not alter the icon's bounding box.
- Use `style={{ overflow: "visible" }}` when trails, echoes, or overshoot leave the 24×24 viewBox.
- Animation must end at the exact initial transform, opacity, and path state.

## 4. Animate parts, not the whole drawing by default

Split the SVG into semantic groups where the object has joints or independent pieces. Examples:

- Bell shell rotates around the hanger; the clapper follows with delayed inertia.
- Download arrow falls; the tray reacts after contact.
- Rocket body launches; exhaust and trails react separately.
- Heart has a primary double beat and a lower-contrast pressure wave.

Whole-icon movement is acceptable for rigid objects, but it should still have a secondary reaction layer.

## 5. Timing and easing

- Micro confirmation: **180–320 ms**.
- Direct action: **320–560 ms**.
- Expressive physical action: **560–900 ms**.
- Avoid exceeding **1,100 ms** unless the mechanic is inherently cyclic.
- Use explicit `times` when choreography depends on contact or follow-through.
- Use `easeOut` for release/travel, `easeInOut` for reversible motion, and a spring/back ease only when the object can plausibly overshoot.
- Secondary reactions normally begin **60–180 ms** after the primary action.

## 6. Transform origins are physical pivots

Set transform origins in viewBox coordinates and place them at the real hinge, axle, base, grip, or center of mass. Never accept the default center when the object visibly pivots elsewhere.

## 7. Visual hierarchy

Each animation has:

- One dominant action.
- At most two supporting effects.
- Supporting effects at lower opacity or shorter duration than the main action.

Particles, glows, and echoes should clarify force, direction, or completion. Decorative noise is a failure.

The enhanced wrapper must not apply a generic whole-icon transform over the icon's own choreography. The copied icon owns the dominant action; the wrapper may only supply a lower-contrast consequence positioned by that icon's motion director. Any exception must be reviewed as an explicit per-icon override.

## 8. Interaction and accessibility

- Support the metadata trigger and make tap usable on touch devices.
- The SVG should include a transparent 24×24 hit area when thin paths make hover unstable.
- Respect `useReducedMotion()`; the resting icon remains fully legible when animation is disabled.
- Never communicate a state only through motion. Stateful icons must also change persistent geometry or another non-motion signal.

## 9. Required metadata

Every icon JSON must declare:

- `motion.trigger`
- `motion.mechanic`
- `motion.duration`
- `motion.ease` or spring stiffness
- searchable tags and category

The mechanic must match the implementation—not merely describe the icon noun.

## 10. Implementation pattern

```tsx
const reduced = useReducedMotion();

<motion.g initial="rest" whileHover={reduced ? undefined : "active"}>
  <rect width="24" height="24" fill="transparent" stroke="none" />
  <motion.g variants={primaryVariants}>{/* semantic moving part */}</motion.g>
  <motion.path variants={reactionVariants}>{/* echo, trail, impact */}</motion.path>
</motion.g>
```

Prefer named variants (`rest`, `active`, or a mechanic name) over scattered inline animation props. Keep the component API compatible with `MoticonIconProps`.

## 11. Review checklist

An icon is ready only when every answer is yes:

- Can a reviewer name the physical verb by watching it once?
- Is there a clear action and a believable reaction or settle?
- Does the animation preserve the original resting geometry?
- Are pivots and transform origins physically correct?
- Does it replay cleanly without a jump?
- Does hover remain stable across the full 24×24 area?
- Does tap work?
- Does reduced-motion mode remain usable?
- Is the animation smooth at 24 px and 64 px?
- Does it add meaning without competing decorative effects?
- Do metadata duration, easing, trigger, and mechanic match the code?
- Are browser console and React warnings clean?

## 12. Playground acceptance

Before merging, add the icon to the GPT Added playground section and compare it with nearby icons from different motion families. Test individual hover/tap, Play All, search filtering, 24 px, and 64 px. A new icon should feel like part of one motion language while retaining its own physical behavior.

Review is not complete after a build-only or automated source audit. Every icon must be replayed visibly at least once, inspected during its action frame, and then replayed alone to confirm that its rendered SVG changes. Record composition corrections in `directorOverrides` with a short reason in the code comment or commit. Only icons that pass both the visual and isolated-runtime checks count toward the reviewed total.

After adding or changing icon metadata, rebuild the package and regenerate the isolated GPT copies:

```bash
npm run build --workspace=@moticon/react
npm run build:gpt-playground --workspace=@moticon/react
```

The generator reads every `src/icons/*.json` and matching TSX file. For each icon it audits the declared mechanic, duration, path complexity, strongest movement vector, and real transform pivot; those values become that icon's explicit motion director. The director selects a semantic reaction (such as ripple, trail, impact, orbit, scan, draw, wave, or confirmation) and positions it around the icon's own action instead of applying an interchangeable decorative effect. The generator then writes the production component to `src/enhanced/*.tsx`, writes an isolated `playground-icons/generated/GPT*.js` preview, and refreshes the lazy-load manifest. It never edits `src/icons/*.tsx`.

`src/index.ts` exports only `src/enhanced` components under the public icon names, so the package, website, examples, and icon detail pages all use the enhanced layer. `src/icons` remains untouched as build-time geometry/reference input; production enhanced files contain their own copied geometry and do not import the old components at runtime.
