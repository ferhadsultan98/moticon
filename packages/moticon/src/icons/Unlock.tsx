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
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <motion.path
          style={{ originX: "7px", originY: "11px" }}
          variants={{
            rest: { rotate: 0 },
            lock: { rotate: 22, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="M7 11V7a5 5 0 0 1 9.9-1"
        />
      </motion.g>
    </svg>
  );
}