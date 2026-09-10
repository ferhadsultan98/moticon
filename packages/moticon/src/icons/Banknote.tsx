"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Banknote({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "count"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.rect
          width="20"
          height="12"
          x="2"
          y="6"
          rx="2"
          style={{ transformOrigin: "12px 12px" }}
          variants={{
            rest: { scaleX: 1 },
            count: {
              scaleX: [1, 1.012, 0.996, 1],
              transition: { duration: 0.46, ease: "easeInOut", times: [0, 0.35, 0.7, 1] },
            },
          }}
        />

        <motion.circle
          cx="12"
          cy="12"
          r="2"
          style={{ transformOrigin: "12px 12px" }}
          variants={{
            rest: { scale: 1 },
            count: {
              scale: [1, 1.3, 0.95, 1.08, 1],
              transition: { duration: 0.5, ease: "easeInOut", times: [0, 0.3, 0.55, 0.78, 1] },
            },
          }}
        />
        <path d="M6 12h.01M18 12h.01" />
      </motion.g>
    </svg>
  );
}
