import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Repeat({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "cycle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
        <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        <motion.path
          variants={{
            rest: { x: 0 },
            cycle: { x: [0, 2, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          d="m17 2 4 4-4 4"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            cycle: { x: [0, -2, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.15 } },
          }}
          d="m7 22-4-4 4-4"
        />
      </motion.g>
    </svg>
  );
}
