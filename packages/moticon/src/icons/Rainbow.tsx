"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Rainbow({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "arc"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            arc: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0 } },
          }}
          d="M22 17a10 10 0 0 0-20 0"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            arc: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.12 } },
          }}
          d="M6 17a6 6 0 0 1 12 0"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            arc: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.24 } },
          }}
          d="M10 17a2 2 0 0 1 4 0"
        />
      </motion.g>
    </svg>
  );
}