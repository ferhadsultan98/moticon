"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Balloon({
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
        style={{ originX: "12px", originY: "22px" }}
        initial="rest"
        whileHover={reduced ? undefined : "float"}
        variants={{
          rest: { rotate: 0, y: 0 },
          float: {
            rotate: [0, 5, -5, 3, -3, 0],
            y: [0, -2, 0, -1, 0],
            transition: { duration: 1.6, ease: "easeInOut", repeat: 1 },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 15c3.6 0 6-3 6-7A6 6 0 0 0 6 8c0 4 2.4 7 6 7Z" fill="transparent" />
        <path d="M12 15v2" />
        <path d="M10.5 19c0-1 1.5-1 1.5-2s-1.5-1-1.5-2" />
      </motion.g>
    </svg>
  );
}
