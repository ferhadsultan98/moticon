"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Moon({
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
        fill="transparent"
        style={{ transformOrigin: "12px 12px" }}
        initial="rest"
        whileHover={reduced ? undefined : "tilt"}
        variants={{
          rest: { rotate: 0, scale: 1 },
          tilt: {
            rotate: [0, -30, -22, -25],
            scale: [1, 1.04, 0.99, 1.01],
            transition: { duration: 0.5, ease: "easeInOut", times: [0, 0.55, 0.8, 1] },
          },
        }}
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      />
    </svg>
  );
}
