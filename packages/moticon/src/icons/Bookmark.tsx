"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Bookmark({
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
      <motion.path
        style={{ originX: "12px", originY: "3px" }}
        initial="rest"
        whileTap={reduced ? undefined : "save"}
        variants={{
          rest: { fill: "rgba(0,0,0,0)", y: 0 },
          save: {
            fill: ["rgba(0,0,0,0)", "currentColor"],
            y: [0, -1, 0],
            transition: { duration: 0.35, ease: "easeOut" },
          },
        }}
        d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
      />
    </svg>
  );
}