import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Signal({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "bars"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2 20h.01" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            bars: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="M7 20v-4"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            bars: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0.08 } },
          }}
          d="M12 20v-8"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            bars: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0.16 } },
          }}
          d="M17 20V8"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            bars: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0.24 } },
          }}
          d="M22 4v16"
        />
      </motion.g>
    </svg>
  );
}
