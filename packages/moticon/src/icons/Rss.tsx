import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Rss({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "broadcast"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            broadcast: { scale: [1, 1.4, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          cx="5"
          cy="19"
          r="1"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            broadcast: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0.08 } },
          }}
          d="M4 11a9 9 0 0 1 9 9"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            broadcast: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0.16 } },
          }}
          d="M4 4a16 16 0 0 1 16 16"
        />
      </motion.g>
    </svg>
  );
}
