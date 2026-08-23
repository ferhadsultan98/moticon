"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Percent({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "orbit"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <line x1="19" x2="5" y1="5" y2="19" />
        <motion.circle
          style={{ originX: "6.5px", originY: "6.5px" }}
          variants={{
            rest: { scale: 1 },
            orbit: { scale: [1, 1.3, 1], transition: { duration: 0.35, ease: "easeOut" } },
          }}
          cx="6.5"
          cy="6.5"
          r="2.5"
        />
        <motion.circle
          style={{ originX: "17.5px", originY: "17.5px" }}
          variants={{
            rest: { scale: 1 },
            orbit: { scale: [1, 1.3, 1], transition: { duration: 0.35, ease: "easeOut", delay: 0.1 } },
          }}
          cx="17.5"
          cy="17.5"
          r="2.5"
        />
      </motion.g>
    </svg>
  );
}