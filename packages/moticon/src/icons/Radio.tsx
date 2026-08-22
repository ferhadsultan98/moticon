import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Radio({
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
        <circle cx="12" cy="12" r="2" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            broadcast: { opacity: [0.3, 1], transition: { duration: 0.25, delay: 0 } },
          }}
          d="M16.247 7.761a6 6 0 0 1 0 8.478"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            broadcast: { opacity: [0.3, 1], transition: { duration: 0.25, delay: 0.1 } },
          }}
          d="M19.075 4.933a10 10 0 0 1 0 14.134"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            broadcast: { opacity: [0.3, 1], transition: { duration: 0.25, delay: 0.1 } },
          }}
          d="M4.925 19.067a10 10 0 0 1 0-14.134"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            broadcast: { opacity: [0.3, 1], transition: { duration: 0.25, delay: 0 } },
          }}
          d="M7.753 16.239a6 6 0 0 1 0-8.478"
        />
      </motion.g>
    </svg>
  );
}
