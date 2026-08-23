"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Target({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "focus"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <motion.circle
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { scale: 1 },
            focus: { scale: [1, 1.6, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          cx="12"
          cy="12"
          r="2"
        />
      </motion.g>
    </svg>
  );
}