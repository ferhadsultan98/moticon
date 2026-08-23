"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function CreditCard({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "tap"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <motion.line
          style={{ originX: "12px", originY: "10px" }}
          variants={{
            rest: { scaleX: 1 },
            tap: { scaleX: [1, 0, 1], transition: { duration: 0.9, ease: "easeInOut" } },
          }}
          x1="2"
          x2="22"
          y1="10"
          y2="10"
        />
      </motion.g>
    </svg>
  );
}