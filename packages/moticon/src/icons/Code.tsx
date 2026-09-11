"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Code({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "apart"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.path
          variants={{
            rest: { x: 0 },
            apart: {
              x: [0, 2.4, 1.9, 2.1],
              transition: { duration: 0.32, ease: "easeOut", times: [0, 0.6, 0.85, 1] },
            },
          }}
          d="m16 18 6-6-6-6"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            apart: {
              x: [0, -2.4, -1.9, -2.1],
              transition: { duration: 0.32, ease: "easeOut", times: [0, 0.6, 0.85, 1] },
            },
          }}
          d="m8 6-6 6 6 6"
        />
      </motion.g>
    </svg>
  );
}
