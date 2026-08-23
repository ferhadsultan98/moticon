"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Share({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "spread"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
        <motion.circle
          variants={{
            rest: { x: 0, y: 0 },
            spread: { x: 1.5, y: -1.5, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          cx="18"
          cy="5"
          r="3"
        />
        <motion.circle
          variants={{
            rest: { x: 0 },
            spread: { x: -2, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          cx="6"
          cy="12"
          r="3"
        />
        <motion.circle
          variants={{
            rest: { x: 0, y: 0 },
            spread: { x: 1.5, y: 1.5, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          cx="18"
          cy="19"
          r="3"
        />
      </motion.g>
    </svg>
  );
}