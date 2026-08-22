import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function TrendingUp({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "climb"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M16 7h6v6" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            climb: { pathLength: [0, 1], transition: { duration: 0.45, ease: "easeOut" } },
          }}
          d="m22 7-8.5 8.5-5-5L2 17"
        />
      </motion.g>
    </svg>
  );
}
