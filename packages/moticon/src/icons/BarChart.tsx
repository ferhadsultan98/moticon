"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function BarChart({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "grow"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        {[
          { d: "M5 21v-6", originY: "21px", delay: 0 },
          { d: "M12 21V9", originY: "21px", delay: 0.08 },
          { d: "M19 21V3", originY: "21px", delay: 0.16 },
        ].map(({ d, originY, delay }) => (
          <motion.path
            key={d}
            d={d}
            style={{ transformOrigin: `12px ${originY}` }}
            variants={{
              rest: { scaleY: 1 },
              grow: {
                scaleY: [0.4, 1.06, 1],
                transition: { duration: 0.4, ease: "easeOut", delay, times: [0, 0.72, 1] },
              },
            }}
          />
        ))}
      </motion.g>
    </svg>
  );
}
