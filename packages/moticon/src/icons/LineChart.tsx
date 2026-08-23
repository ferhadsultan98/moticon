"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function LineChart({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "plot"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            plot: { pathLength: [0, 1], transition: { duration: 0.45, ease: "easeOut" } },
          }}
          d="m19 9-5 5-4-4-3 3"
        />
      </motion.g>
    </svg>
  );
}