"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Waves({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "ripple"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0 },
            ripple: { x: [0, 2, 0], transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="M2 5q2.5 2 5 0t5 0 5 0 5 0"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            ripple: { x: [0, -2, 0], transition: { duration: 0.6, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M2 12q2.5 2 5 0t5 0 5 0 5 0"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            ripple: { x: [0, 2, 0], transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 } },
          }}
          d="M2 19q2.5 2 5 0t5 0 5 0 5 0"
        />
      </motion.g>
    </svg>
  );
}