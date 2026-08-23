"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Usb({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "connect"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="10" cy="7" r="1" />
        <circle cx="4" cy="20" r="1" />
        <path d="m21 3-3 1 2 2Z" />
        <path d="M9.26 7.68 5 12l2 5" />
        <path d="m10 14 5 2 3.5-3.5" />
        <path d="m18 12 1-1 1 1-1 1Z" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            connect: { pathLength: [0, 1], transition: { duration: 0.8, ease: "easeOut" } },
          }}
          d="M4.7 19.3 19 5"
        />
      </motion.g>
    </svg>
  );
}