import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Lamp({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "switch"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 12v6" />
        <path
          fill="transparent"
          d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"
        />
        <path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
        <motion.path
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            switch: { pathLength: [0, 1], opacity: [0, 1, 0], transition: { duration: 0.5, ease: "easeOut" } },
          }}
          d="M4 15l16 0"
        />
      </motion.g>
    </svg>
  );
}
