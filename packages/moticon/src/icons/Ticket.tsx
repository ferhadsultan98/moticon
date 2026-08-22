import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Ticket({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "tear"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            tear: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="M13 5v2"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            tear: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.2, delay: 0.1 } },
          }}
          d="M13 11v2"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            tear: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.2, delay: 0.2 } },
          }}
          d="M13 17v2"
        />
      </motion.g>
    </svg>
  );
}
