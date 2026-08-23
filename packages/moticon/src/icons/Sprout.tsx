"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Sprout({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...props
}: MoticonIconProps) {
  const reduced = useReducedMotion();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
      {...props}
    >
      <motion.g initial="rest" whileHover={reduced ? undefined : "unfurl"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M5 21h14" />
        <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
        <motion.path
          style={{ originX: "8px", originY: "11px" }}
          variants={{
            rest: { rotate: 0, scaleX: 1 },
            unfurl: { rotate: [-25, 0], scaleX: [0.6, 1], transition: { duration: 0.4, ease: "backOut" } },
          }}
          d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"
        />
      </motion.g>
    </svg>
  );
}