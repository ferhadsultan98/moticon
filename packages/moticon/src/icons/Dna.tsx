import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Dna({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "twist"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2 15c6.667-6 13.333 0 20-6" />
        <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
        <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="m10 16 1.5 1.5"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.08 } },
          }}
          d="m14 8-1.5-1.5"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.16 } },
          }}
          d="m16.5 10.5 1 1"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="m17 6-2.891-2.891"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.24 } },
          }}
          d="m20 9 .891.891"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.08 } },
          }}
          d="M3.109 14.109 4 15"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.16 } },
          }}
          d="m6.5 12.5 1 1"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.24 } },
          }}
          d="m7 18 2.891 2.891"
        />
      </motion.g>
    </svg>
  );
}
