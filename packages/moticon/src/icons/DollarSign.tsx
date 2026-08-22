import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function DollarSign({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "cash"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <line x1="12" x2="12" y1="2" y2="22" />
        <motion.path
          variants={{
            rest: { scale: 1 },
            cash: { scale: [1, 1.1, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          style={{ originX: "12px", originY: "12px" }}
          d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        />
      </motion.g>
    </svg>
  );
}
