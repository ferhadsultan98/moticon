import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ListChecks({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "check"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M13 5h8" />
        <path d="M13 12h8" />
        <path d="M13 19h8" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            check: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0 } },
          }}
          d="m3 7 2 2 4-4"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            check: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.15 } },
          }}
          d="m3 17 2 2 4-4"
        />
      </motion.g>
    </svg>
  );
}
