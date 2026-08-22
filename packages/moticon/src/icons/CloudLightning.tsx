import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function CloudLightning({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "strike"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            strike: { opacity: [1, 0.15, 1, 0.15, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="m13 12-3 5h4l-3 5"
        />
      </motion.g>
    </svg>
  );
}
