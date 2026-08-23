"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Building({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "light"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            light: { opacity: [1, 0.2, 1], transition: { duration: 0.35, ease: "easeInOut" } },
          }}
          d="M10 12h4"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            light: { opacity: [1, 0.2, 1], transition: { duration: 0.35, ease: "easeInOut", delay: 0.15 } },
          }}
          d="M10 8h4"
        />
      </motion.g>
    </svg>
  );
}