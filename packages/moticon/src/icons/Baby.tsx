import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Baby({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "coo"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
        <path d="M15 12h.01" />
        <path d="M9 12h.01" />
        <motion.path
          variants={{
            rest: { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" },
            coo: { d: "M9.5 16.2c.9.7 1.6 1 2.5 1s1.6-.3 2.5-1" },
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"
        />
      </motion.g>
    </svg>
  );
}
