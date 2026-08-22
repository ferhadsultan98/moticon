import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Sandwich({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "squash"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
        <path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
        <path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
        <rect width="20" height="4" x="2" y="11" rx="1" />
        <motion.path
          style={{ originX: "12px", originY: "11px" }}
          variants={{
            rest: { y: 0 },
            squash: { y: [0, 3, 0], transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"
        />
      </motion.g>
    </svg>
  );
}
