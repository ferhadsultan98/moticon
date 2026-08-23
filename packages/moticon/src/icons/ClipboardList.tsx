"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ClipboardList({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "fill"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            fill: { opacity: [0, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="M8 11h.01"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            fill: { pathLength: [0, 1], transition: { duration: 0.25, delay: 0.05 } },
          }}
          d="M12 11h4"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            fill: { opacity: [0, 1], transition: { duration: 0.2, delay: 0.25 } },
          }}
          d="M8 16h.01"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            fill: { pathLength: [0, 1], transition: { duration: 0.25, delay: 0.3 } },
          }}
          d="M12 16h4"
        />
      </motion.g>
    </svg>
  );
}