"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Grape({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "ripple"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M22 5V2l-5.89 5.89" />
        <motion.circle
          variants={{ rest: { scale: 1 }, ripple: { scale: [1, 1.25, 1], transition: { duration: 0.3, delay: 0 } } }}
          cx="16.6"
          cy="15.89"
          r="3"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ripple: { scale: [1, 1.25, 1], transition: { duration: 0.3, delay: 0.05 } },
          }}
          cx="8.11"
          cy="7.4"
          r="3"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ripple: { scale: [1, 1.25, 1], transition: { duration: 0.3, delay: 0.1 } },
          }}
          cx="12.35"
          cy="11.65"
          r="3"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ripple: { scale: [1, 1.25, 1], transition: { duration: 0.3, delay: 0.15 } },
          }}
          cx="13.91"
          cy="5.85"
          r="3"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ripple: { scale: [1, 1.25, 1], transition: { duration: 0.3, delay: 0.2 } },
          }}
          cx="18.15"
          cy="10.09"
          r="3"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ripple: { scale: [1, 1.25, 1], transition: { duration: 0.3, delay: 0.25 } },
          }}
          cx="6.56"
          cy="13.2"
          r="3"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ripple: { scale: [1, 1.25, 1], transition: { duration: 0.3, delay: 0.3 } },
          }}
          cx="10.8"
          cy="17.44"
          r="3"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ripple: { scale: [1, 1.25, 1], transition: { duration: 0.3, delay: 0.35 } },
          }}
          cx="5"
          cy="19"
          r="3"
        />
      </motion.g>
    </svg>
  );
}