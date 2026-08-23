"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Atom({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "orbit"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="1" />
        <motion.path
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            orbit: { rotate: 25, transition: { duration: 0.7, ease: "easeInOut" } },
          }}
          fill="transparent"
          d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
        />
        <motion.path
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            orbit: { rotate: -25, transition: { duration: 0.7, ease: "easeInOut" } },
          }}
          fill="transparent"
          d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
        />
      </motion.g>
    </svg>
  );
}