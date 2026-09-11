"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Bomb({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "fizz"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.circle
          cx="11"
          cy="13"
          r="9"
          fill="transparent"
          style={{ originX: "11px", originY: "13px" }}
          variants={{
            rest: { scale: 1 },
            fizz: {
              scale: [1, 1.04, 0.98, 1.03, 1],
              transition: { duration: 0.6, ease: "easeInOut" },
            },
          }}
        />
        <path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" />
        <motion.path
          d="m22 2-1.5 1.5"
          style={{ originX: "21px", originY: "2px" }}
          variants={{
            rest: { rotate: 0, scale: 1, opacity: 1 },
            fizz: {
              rotate: [0, 20, -20, 15, -10, 0],
              scale: [1, 1.4, 0.8, 1.3, 1],
              transition: { duration: 0.6, ease: "easeInOut", repeat: 1 },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}
