import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Camera({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "shoot"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
        <motion.circle
          style={{ originX: "12px", originY: "13px" }}
          variants={{
            rest: { scale: 1 },
            shoot: { scale: [1, 0.6, 1], transition: { duration: 0.25, ease: "easeOut" } },
          }}
          cx="12"
          cy="13"
          r="3"
        />
      </motion.g>
    </svg>
  );
}
