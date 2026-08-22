import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Link({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "link"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            link: { x: 0.8, y: 0.8, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            link: { x: -0.8, y: -0.8, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        />
      </motion.g>
    </svg>
  );
}
