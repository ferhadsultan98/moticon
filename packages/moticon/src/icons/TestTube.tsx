import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function TestTube({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "fizz"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"
        />
        <path d="M8.5 2h7" />
        <motion.path
          style={{ originX: "12px", originY: "16px" }}
          variants={{
            rest: { scaleX: 1 },
            fizz: { scaleX: [1, 1.15, 0.95, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M14.5 16h-5"
        />
      </motion.g>
    </svg>
  );
}
