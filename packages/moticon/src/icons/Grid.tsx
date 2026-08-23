"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Grid({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "tighten"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <motion.path
          variants={{
            rest: { x: 0 },
            tighten: { x: -0.5, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M9 3v18"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            tighten: { x: 0.5, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M15 3v18"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            tighten: { y: -0.5, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M3 9h18"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            tighten: { y: 0.5, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M3 15h18"
        />
      </motion.g>
    </svg>
  );
}