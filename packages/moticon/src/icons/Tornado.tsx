"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Tornado({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "swirl"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0 },
            swirl: { x: [0, 4, -2, 0], transition: { duration: 0.7, ease: "easeInOut", delay: 0 } },
          }}
          d="M21 4H3"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            swirl: { x: [0, -4, 2, 0], transition: { duration: 0.7, ease: "easeInOut", delay: 0.08 } },
          }}
          d="M18 8H6"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            swirl: { x: [0, 3, -1, 0], transition: { duration: 0.7, ease: "easeInOut", delay: 0.16 } },
          }}
          d="M19 12H9"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            swirl: { x: [0, -3, 1, 0], transition: { duration: 0.7, ease: "easeInOut", delay: 0.24 } },
          }}
          d="M16 16h-6"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            swirl: { x: [0, 2, -1, 0], transition: { duration: 0.7, ease: "easeInOut", delay: 0.32 } },
          }}
          d="M11 20H9"
        />
      </motion.g>
    </svg>
  );
}