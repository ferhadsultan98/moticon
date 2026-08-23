"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Bluetooth({
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
        style={{ originX: "12px", originY: "12px" }}
        initial="rest"
        whileHover={reduced ? undefined : "pair"}
        variants={{
          rest: { opacity: 1, scale: 1 },
          pair: {
            opacity: [1, 0.3, 1],
            scale: [1, 1.1, 1],
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        d="m7 7 10 10-5 5V2l5 5L7 17"
      />
    </svg>
  );
}