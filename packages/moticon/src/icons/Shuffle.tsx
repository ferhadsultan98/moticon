import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Shuffle({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "mix"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            mix: { pathLength: [0.4, 1], opacity: [0.4, 1], transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
        />
        <path d="m18 2 4 4-4 4" />
        <motion.path
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            mix: {
              pathLength: [0.4, 1],
              opacity: [0.4, 1],
              transition: { duration: 0.35, ease: "easeOut", delay: 0.1 },
            },
          }}
          d="M2 6h1.972a4 4 0 0 1 3.6 2.2"
        />
        <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
        <path d="m18 14 4 4-4 4" />
      </motion.g>
    </svg>
  );
}
