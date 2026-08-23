"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Volume2({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "play"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        />
        <motion.path
          d="M16 9a5 5 0 0 1 0 6"
          variants={{
            rest: { opacity: 1 },
            play: {
              opacity: [1, 0.3, 1],
              transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
            },
          }}
        />
        <motion.path
          d="M19.364 18.364a9 9 0 0 0 0-12.728"
          variants={{
            rest: { opacity: 1 },
            play: {
              opacity: [1, 0.3, 1],
              transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}