"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Soup({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "steam"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
        />
        <path d="M7 21h10" />
        <path d="M19.5 12 22 6" />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            steam: { y: [-1, -4], opacity: [1, 0], transition: { duration: 0.7, ease: "easeOut" } },
          }}
          d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            steam: {
              y: [-1, -4],
              opacity: [1, 0],
              transition: { duration: 0.7, ease: "easeOut", delay: 0.15 },
            },
          }}
          d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            steam: {
              y: [-1, -4],
              opacity: [1, 0],
              transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
            },
          }}
          d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
        />
      </motion.g>
    </svg>
  );
}