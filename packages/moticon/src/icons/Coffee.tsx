import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Coffee({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "steam"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            steam: { y: [-1, -4], opacity: [1, 0], transition: { duration: 0.7, ease: "easeOut" } },
          }}
          d="M6 2v2"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            steam: {
              y: [-1, -4],
              opacity: [1, 0],
              transition: { duration: 0.7, ease: "easeOut", delay: 0.15 },
            },
          }}
          d="M10 2v2"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            steam: {
              y: [-1, -4],
              opacity: [1, 0],
              transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
            },
          }}
          d="M14 2v2"
        />
      </motion.g>
    </svg>
  );
}
