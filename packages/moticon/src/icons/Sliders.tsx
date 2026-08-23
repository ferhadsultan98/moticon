"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Sliders({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "adjust"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10 5H3" />
        <path d="M12 19H3" />
        <path d="M21 12h-9" />
        <path d="M21 19h-5" />
        <path d="M21 5h-7" />
        <path d="M8 12H3" />
        <motion.path
          variants={{
            rest: { y: 0 },
            adjust: { y: [0, -4, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          d="M14 3v4"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            adjust: { y: [0, 4, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M16 17v4"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            adjust: { y: [0, -3, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.2 } },
          }}
          d="M8 10v4"
        />
      </motion.g>
    </svg>
  );
}