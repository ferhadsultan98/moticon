"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function FilePlus({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "add"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <motion.path
          style={{ originX: "12px", originY: "15px" }}
          variants={{
            rest: { rotate: 0 },
            add: { rotate: 90, transition: { duration: 0.3, ease: "backOut" } },
          }}
          d="M9 15h6"
        />
        <motion.path
          style={{ originX: "12px", originY: "15px" }}
          variants={{
            rest: { opacity: 1 },
            add: { opacity: 0, transition: { duration: 0.15 } },
          }}
          d="M12 18v-6"
        />
      </motion.g>
    </svg>
  );
}