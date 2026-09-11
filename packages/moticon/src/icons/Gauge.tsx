"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Gauge({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "rev"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.path
          style={{ transformOrigin: "14px 10px" }}
          variants={{
            rest: { rotate: 0 },
            rev: {
              rotate: [0, -42, -32, -37],
              transition: { duration: 0.46, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="m12 14 4-4"
        />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </motion.g>
    </svg>
  );
}
