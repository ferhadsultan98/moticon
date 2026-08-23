"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Truck({
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
        initial="rest"
        whileHover={reduced ? undefined : "drive"}
        variants={{
          rest: { x: 0 },
          drive: { x: [0, 2, 0], transition: { duration: 0.4, ease: "easeInOut", repeat: 1 } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <motion.circle
          style={{ originX: "17px", originY: "18px" }}
          variants={{
            rest: { rotate: 0 },
            drive: { rotate: 360, transition: { duration: 0.5, ease: "linear" } },
          }}
          cx="17"
          cy="18"
          r="2"
        />
        <motion.circle
          style={{ originX: "7px", originY: "18px" }}
          variants={{
            rest: { rotate: 0 },
            drive: { rotate: 360, transition: { duration: 0.5, ease: "linear" } },
          }}
          cx="7"
          cy="18"
          r="2"
        />
      </motion.g>
    </svg>
  );
}