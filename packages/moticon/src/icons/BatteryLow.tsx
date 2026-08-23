"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function BatteryLow({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "warn"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M22 14v-4" />
        <rect x="2" y="6" width="16" height="12" rx="2" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            warn: { opacity: [1, 0.2, 1], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          d="M6 14v-4"
        />
      </motion.g>
    </svg>
  );
}