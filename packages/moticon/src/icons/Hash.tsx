import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Hash({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "tag"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.line
          variants={{
            rest: { y1: 9, y2: 9 },
            tag: { y1: [9, 8, 9], y2: [9, 8, 9], transition: { duration: 0.25, ease: "easeOut" } },
          }}
          x1="4"
          x2="20"
          y1="9"
          y2="9"
        />
        <motion.line
          variants={{
            rest: { y1: 15, y2: 15 },
            tag: { y1: [15, 16, 15], y2: [15, 16, 15], transition: { duration: 0.25, ease: "easeOut" } },
          }}
          x1="4"
          x2="20"
          y1="15"
          y2="15"
        />
        <line x1="10" x2="8" y1="3" y2="21" />
        <line x1="16" x2="14" y1="3" y2="21" />
      </motion.g>
    </svg>
  );
}
