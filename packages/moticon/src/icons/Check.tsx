import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Check({
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
        whileTap={reduced ? undefined : "draw"}
        variants={{
          rest: { pathLength: 1, opacity: 1 },
          draw: {
            pathLength: [0, 1],
            opacity: [1, 1],
            transition: { duration: 0.35, ease: "easeOut" },
          },
        }}
        d="M20 6 9 17l-5-5"
      />
    </svg>
  );
}
