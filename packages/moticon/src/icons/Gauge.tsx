import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Gauge({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "rev"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        <motion.path
          style={{ originX: "14px", originY: "10px" }}
          variants={{
            rest: { rotate: 0 },
            rev: { rotate: -35, transition: { duration: 0.4, ease: "easeOut" } },
          }}
          d="m12 14 4-4"
        />
      </motion.g>
    </svg>
  );
}
