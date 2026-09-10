"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Unlock({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "lock"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.rect
          width="18"
          height="11"
          x="3"
          y="11"
          rx="2"
          ry="2"
          style={{ transformOrigin: "12px 22px" }}
          variants={{
            rest: { y: 0, scaleY: 1 },
            lock: {
              y: [0, 0.4, 0.08, 0],
              scaleY: [1, 0.985, 1.006, 1],
              transition: { duration: 0.4, ease: "easeInOut", delay: 0.14, times: [0, 0.4, 0.75, 1] },
            },
          }}
        />

        <motion.path
          style={{ transformOrigin: "7px 11px" }}
          variants={{
            rest: { rotate: 0 },
            lock: {
              rotate: [0, 26, 21, 24],
              transition: { duration: 0.36, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="M7 11V7a5 5 0 0 1 9.9-1"
        />
      </motion.g>
    </svg>
  );
}
