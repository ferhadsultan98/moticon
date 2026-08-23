"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function HardDrive({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "spin"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <path d="M21.946 12.013H2.054" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            spin: { opacity: [1, 0.2, 1], transition: { duration: 0.35, ease: "easeInOut" } },
          }}
          d="M6 16h.01"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            spin: { opacity: [1, 0.2, 1], transition: { duration: 0.35, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M10 16h.01"
        />
      </motion.g>
    </svg>
  );
}