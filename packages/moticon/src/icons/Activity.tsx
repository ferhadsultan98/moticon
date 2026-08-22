import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Activity({
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
      <motion.path
        initial="rest"
        whileHover={reduced ? undefined : "pulse"}
        variants={{
          rest: { pathLength: 1 },
          pulse: { pathLength: [0, 1], transition: { duration: 0.6, ease: "easeInOut" } },
        }}
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      />
    </svg>
  );
}
