"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Copy({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "stack"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.rect
          width="14"
          height="14"
          rx="2"
          ry="2"
          fill="none"
          variants={{
            rest: { x: 3, y: 3 },
            stack: { x: 4.5, y: 4.5, transition: { duration: 0.3, ease: "easeOut" } },
          }}
        />
        <motion.rect
          width="14"
          height="14"
          rx="2"
          ry="2"
          fill="none"
          variants={{
            rest: { x: 7, y: 7 },
            stack: { x: 5.5, y: 5.5, transition: { duration: 0.3, ease: "easeOut" } },
          }}
        />
      </motion.g>
    </svg>
  );
}