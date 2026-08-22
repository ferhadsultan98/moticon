import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Mountain({
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
        fill="transparent"
        initial="rest"
        whileHover={reduced ? undefined : "reveal"}
        variants={{
          rest: { pathLength: 1, pathOffset: 0 },
          reveal: {
            pathLength: [0, 1],
            pathOffset: [0, 0],
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        d="m8 3 4 8 5-5 5 15H2L8 3z"
      />
    </svg>
  );
}
