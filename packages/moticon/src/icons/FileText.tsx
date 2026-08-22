import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function FileText({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "read"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            read: { pathLength: [0, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="M10 9H8"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            read: { pathLength: [0, 1], transition: { duration: 0.25, delay: 0.15 } },
          }}
          d="M16 13H8"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            read: { pathLength: [0, 1], transition: { duration: 0.25, delay: 0.3 } },
          }}
          d="M16 17H8"
        />
      </motion.g>
    </svg>
  );
}
