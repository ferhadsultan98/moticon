"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Fish({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "swim"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
        <path d="M18 12v.5" />
        <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
        <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
        <motion.path
          style={{ originX: "16px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            swim: { rotate: [0, -16, 12, -8, 0], transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="M16 17.93a9.77 9.77 0 0 1 0-11.86"
        />
        <motion.path
          style={{ originX: "7px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            swim: { rotate: [0, 10, -8, 6, 0], transition: { duration: 0.6, ease: "easeInOut", delay: 0.05 } },
          }}
          d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
        />
      </motion.g>
    </svg>
  );
}