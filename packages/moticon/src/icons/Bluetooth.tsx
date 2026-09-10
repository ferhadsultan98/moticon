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
        style={{ transformOrigin: "12px 12px" }}
        initial="rest"
        whileHover={reduced ? undefined : "pair"}
        variants={{
          rest: { opacity: 1, scale: 1 },
          pair: {
            opacity: [1, 0.35, 1, 0.6, 1],
            scale: [1, 1.14, 0.98, 1.05, 1],
            transition: { duration: 0.6, ease: "easeInOut", times: [0, 0.26, 0.52, 0.76, 1] },
          },
        }}
        d="m7 7 10 10-5 5V2l5 5L7 17"
      />
    </svg>
  );
}
