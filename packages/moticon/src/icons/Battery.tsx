"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Battery({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "charge"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M 22 14 L 22 10" />
        <rect x="2" y="6" width="16" height="12" rx="2" />
        <motion.rect
          x="4"
          y="8"
          height="8"
          rx="1"
          fill="currentColor"
          stroke="none"
          variants={{
            rest: { width: 4, opacity: 0.5 },
            charge: { width: 12, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        />
      </motion.g>
    </svg>
  );
}