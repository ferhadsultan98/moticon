import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Carrot({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "wiggle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3"
        />
        <path d="m8 15-2.58-2.58" />
        <motion.path
          style={{ originX: "15px", originY: "9px" }}
          variants={{
            rest: { rotate: 0 },
            wiggle: { rotate: [0, -5, 5, 0], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7"
        />
      </motion.g>
    </svg>
  );
}
