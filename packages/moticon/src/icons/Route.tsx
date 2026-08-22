import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Route({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "travel"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            travel: { scale: [1, 1.3, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0 } },
          }}
          cx="18"
          cy="5"
          r="3"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            travel: { pathLength: [0, 1], transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            travel: { scale: [1, 1.3, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.5 } },
          }}
          cx="6"
          cy="19"
          r="3"
        />
      </motion.g>
    </svg>
  );
}
