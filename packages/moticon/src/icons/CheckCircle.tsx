"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function CheckCircle({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "confirm"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <motion.path
          variants={{
            rest: { pathLength: 1, scale: 1 },
            confirm: {
              pathLength: [0, 1],
              scale: [1, 1.15, 1],
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
          d="m9 11 3 3L22 4"
        />
      </motion.g>
    </svg>
  );
}