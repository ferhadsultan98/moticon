"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Cable({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "plug"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"
        />
        <path d="M17 21v-2" />
        <path d="M21 21v-2" />
        <path d="M3 5V3" />
        <path
          fill="transparent"
          d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"
        />
        <path d="M7 5V3" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            plug: { pathLength: [0, 1], transition: { duration: 0.8, ease: "easeOut" } },
          }}
          d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"
        />
      </motion.g>
    </svg>
  );
}