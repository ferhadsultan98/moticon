"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Sword({
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
      <motion.g
        style={{ originX: "3px", originY: "21px" }}
        initial="rest"
        whileTap={reduced ? undefined : "slash"}
        variants={{
          rest: { rotate: 0 },
          slash: { rotate: [0, -30, 5, 0], transition: { duration: 0.6, ease: "easeOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m11 19-6-6" />
        <path d="m5 21-2-2" />
        <path d="m8 16-4 4" />
        <path d="M9.5 17.5 21 6V3h-3L6.5 14.5" />
      </motion.g>
    </svg>
  );
}