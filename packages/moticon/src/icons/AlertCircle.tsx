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

        <motion.circle
          cx="12"
          cy="12"
          r="10"
          style={{ transformOrigin: "12px 12px" }}
          variants={{
            rest: { scale: 1 },
            alert: {
              scale: [1, 1.03, 0.99, 1.008, 1],
              transition: { duration: 0.6, ease: "easeInOut", times: [0, 0.24, 0.5, 0.74, 1] },
            },
          }}
        />

        <motion.line
          x1="12"
          x2="12"
          y1="8"
          y2="12"
          style={{ transformOrigin: "12px 8px" }}
          variants={{
            rest: { scaleY: 1, opacity: 1 },
            alert: {
              scaleY: [1, 0.6, 1.05, 1],
              opacity: [1, 0.35, 1, 1],
              transition: { duration: 0.4, ease: "easeOut", times: [0, 0.3, 0.65, 1] },
            },
          }}
        />

        <motion.line
          x1="12"
          x2="12.01"
          y1="16"
          y2="16"
          style={{ transformOrigin: "12px 16px" }}
          variants={{
            rest: { scale: 1, opacity: 1 },
            alert: {
              scale: [1, 1.5, 0.9, 1],
              opacity: [1, 0.3, 1, 1],
              transition: { duration: 0.4, ease: "easeOut", delay: 0.12, times: [0, 0.3, 0.65, 1] },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}
