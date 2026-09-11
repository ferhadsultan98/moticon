"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };
const ridges = [
  "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
  "M14 13.12c0 2.38 0 6.38-1 8.88",
  "M17.29 21.02c.12-.6.43-2.3.5-3.02",
  "M2 12a10 10 0 0 1 18-6",
  "M2 16h.01",
  "M21.8 16c.2-2 .131-5.354 0-6",
  "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
  "M8.65 22c.21-.66.45-1.32.57-2",
  "M9 6.8a6 6 0 0 1 9 5.2v2",
];
const order = [0, 1, 6, 8, 3, 2, 5, 7, 4];

export function Fingerprint({ size = 24, color = "currentColor", strokeWidth = 2, force = false, ...props }: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "scan";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }} {...props}>
      <motion.g initial="rest" animate={force && active ? active : "rest"} whileHover={active} whileTap={active}>
        <rect width="24" height="24" fill="transparent" stroke="none" />
        {ridges.map((d, index) => (
          <motion.path key={d} d={d} variants={{ rest: { pathLength: 1, opacity: 1 }, scan: { pathLength: [0, 1, 1], opacity: [.12, 1, 1], transition: { duration: .48, delay: order[index] * .045, ease: "easeOut" } } }} />
        ))}
        <motion.path d="M3 6h18" variants={{ rest: { opacity: 0, y: -2, pathLength: 0 }, scan: { opacity: [0, .72, .72, 0], y: [-2, 3, 10, 15], pathLength: [0, 1, 1, 0], transition: { duration: .82, ease: "easeInOut" } } }} />
        <motion.circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" variants={{ rest: { opacity: 0, scale: .5 }, scan: { opacity: [0, .12, 0], scale: [.5, 1.3, 1.8], transition: { duration: .58, delay: .2, ease: "easeOut" } } }} style={{ originX: "12px", originY: "12px" }} />
      </motion.g>
    </svg>
  );
}
