"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Accessibility({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "roll"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="16" cy="4" r="1" />
        <path d="m5 8 3-3 5.5 3-2.36 3.5" />
        <motion.path
          style={{ originX: "12px", originY: "14.5px" }}
          variants={{
            rest: { rotate: 0 },
            roll: { rotate: [0, 25, 0], transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="M18 19l1-7-6 1"
        />
        <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
      </motion.g>
    </svg>
  );
}