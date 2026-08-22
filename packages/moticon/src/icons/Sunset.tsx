import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Sunset({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "set"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m4.93 10.93 1.41 1.41" />
        <path d="M2 18h2" />
        <path d="M20 18h2" />
        <path d="m19.07 10.93-1.41 1.41" />
        <path d="M22 22H2" />
        <path d="m16 6-4 4-4-4" />
        <path d="M16 18a4 4 0 0 0-8 0" />
        <motion.path
          variants={{
            rest: { y: 0 },
            set: { y: 3, transition: { duration: 0.4, ease: "easeOut" } },
          }}
          d="M12 10V2"
        />
      </motion.g>
    </svg>
  );
}
