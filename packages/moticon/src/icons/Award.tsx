"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Award({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "swing"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.circle
          cx="12"
          cy="8"
          r="6"
          style={{ transformOrigin: "12px 8px" }}
          variants={{
            rest: { scale: 1 },
            swing: {
              scale: [1, 1.06, 0.985, 1.015, 1],
              transition: { duration: 0.66, ease: "easeInOut", times: [0, 0.22, 0.5, 0.75, 1] },
            },
          }}
        />

        <motion.path
          style={{ transformOrigin: "12px 13px" }}
          variants={{
            rest: { rotate: 0 },
            swing: {
              rotate: [0, 10, -11, 6, -3, 0],
              transition: { duration: 0.72, ease: "easeInOut", times: [0, 0.16, 0.4, 0.62, 0.82, 1] },
            },
          }}
          d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
        />
      </motion.g>
    </svg>
  );
}
