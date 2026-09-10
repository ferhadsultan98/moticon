"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Backpack({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "strap"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.path
          d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
          style={{ transformOrigin: "12px 22px" }}
          variants={{
            rest: { y: 0, scaleY: 1 },
            strap: {
              y: [0, 0.4, 0.08, 0],
              scaleY: [1, 0.985, 1.005, 1],
              transition: { duration: 0.5, ease: "easeInOut", times: [0, 0.3, 0.65, 1] },
            },
          }}
        />
        <path d="M8 10h8" />
        <path d="M8 18h8" />
        <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />

        <motion.path
          style={{ transformOrigin: "12px 6px" }}
          variants={{
            rest: { y: 0, scaleY: 1 },
            strap: {
              y: [0, -1.5, -1, -1.15],
              scaleY: [1, 1.08, 1.02, 1.05],
              transition: { duration: 0.4, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
        />
      </motion.g>
    </svg>
  );
}
