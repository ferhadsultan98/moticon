"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function AlertCircle({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "alert"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <motion.line
          variants={{
            rest: { opacity: 1 },
            alert: { opacity: [1, 0.2, 1], transition: { duration: 0.35, ease: "easeInOut" } },
          }}
          x1="12"
          x2="12"
          y1="8"
          y2="12"
        />
        <motion.line
          variants={{
            rest: { opacity: 1 },
            alert: { opacity: [1, 0.2, 1], transition: { duration: 0.35, ease: "easeInOut", delay: 0.1 } },
          }}
          x1="12"
          x2="12.01"
          y1="16"
          y2="16"
        />
      </motion.g>
    </svg>
  );
}