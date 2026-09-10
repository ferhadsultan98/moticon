"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Bike({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...props
}: MoticonIconProps) {
  const reduced = useReducedMotion();
  const spin = {
    rest: { rotate: 0 },
    ride: { rotate: 360, transition: { duration: 0.75, ease: "linear" } },
  };
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "ride"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g style={{ originX: "18.5px", originY: "17.5px" }} variants={spin}>
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M18.5 14v3.5l2.4 1.6" />
        </motion.g>
        <motion.g style={{ originX: "5.5px", originY: "17.5px" }} variants={spin}>
          <circle cx="5.5" cy="17.5" r="3.5" />
          <path d="M5.5 14v3.5l2.4 1.6" />
        </motion.g>
        <circle cx="15" cy="5" r="1" />
        <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
      </motion.g>
    </svg>
  );
}
