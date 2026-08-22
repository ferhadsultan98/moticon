import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Music({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "bob"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M9 18V5l12-2v13" />
        <motion.circle
          style={{ originX: "6px", originY: "18px" }}
          variants={{
            rest: { y: 0 },
            bob: { y: [0, -2, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          cx="6"
          cy="18"
          r="3"
        />
        <motion.circle
          style={{ originX: "18px", originY: "16px" }}
          variants={{
            rest: { y: 0 },
            bob: { y: [0, -2, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.12 } },
          }}
          cx="18"
          cy="16"
          r="3"
        />
      </motion.g>
    </svg>
  );
}
