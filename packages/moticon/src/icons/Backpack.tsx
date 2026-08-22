import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Backpack({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "strap"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M8 10h8" />
        <path d="M8 18h8" />
        <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
        <motion.path
          style={{ originX: "12px", originY: "6px" }}
          variants={{
            rest: { y: 0 },
            strap: { y: -1, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
        />
      </motion.g>
    </svg>
  );
}
