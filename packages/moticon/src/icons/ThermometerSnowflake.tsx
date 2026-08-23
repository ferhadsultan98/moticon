"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ThermometerSnowflake({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "drop"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
        <motion.g
          style={{ originX: "6px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            drop: { rotate: 45, transition: { duration: 0.6, ease: "easeInOut" } },
          }}
        >
          <path d="m10 20-1.25-2.5L6 18" />
          <path d="M10 4 8.75 6.5 6 6" />
          <path d="M10.585 15H10" />
          <path d="M2 12h6.5L10 9" />
          <path d="m4 10 1.5 2L4 14" />
          <path d="m7 21 3-6-1.5-3" />
          <path d="m7 3 3 6h2" />
        </motion.g>
      </motion.g>
    </svg>
  );
}