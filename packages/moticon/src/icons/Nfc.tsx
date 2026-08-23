"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Nfc({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "pulse"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
        <motion.path
          style={{ originX: "9px", originY: "12px" }}
          variants={{
            rest: { scaleY: 1 },
            pulse: { scaleY: [0.6, 1], transition: { duration: 0.15, delay: 0.05 } },
          }}
          d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"
        />
        <motion.path
          style={{ originX: "13px", originY: "12px" }}
          variants={{
            rest: { scaleY: 1 },
            pulse: { scaleY: [0.6, 1], transition: { duration: 0.15, delay: 0.1 } },
          }}
          d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"
        />
        <motion.path
          style={{ originX: "16px", originY: "12px" }}
          variants={{
            rest: { scaleY: 1 },
            pulse: { scaleY: [0.6, 1], transition: { duration: 0.15, delay: 0.15 } },
          }}
          d="M16.37 2a20.16 20.16 0 0 1 0 20"
        />
      </motion.g>
    </svg>
  );
}