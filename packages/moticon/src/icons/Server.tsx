"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Server({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "ping"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <motion.line
          variants={{
            rest: { opacity: 1 },
            ping: { opacity: [1, 0.15, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          x1="6"
          x2="6.01"
          y1="6"
          y2="6"
        />
        <motion.line
          variants={{
            rest: { opacity: 1 },
            ping: {
              opacity: [1, 0.15, 1],
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.15 },
            },
          }}
          x1="6"
          x2="6.01"
          y1="18"
          y2="18"
        />
      </motion.g>
    </svg>
  );
}