import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Orbit({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "revolve"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
        <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
        <circle cx="12" cy="12" r="3" />
        <motion.circle
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            revolve: { rotate: 180, transition: { duration: 0.7, ease: "easeInOut" } },
          }}
          cx="19"
          cy="5"
          r="2"
        />
        <motion.circle
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            revolve: { rotate: 180, transition: { duration: 0.7, ease: "easeInOut" } },
          }}
          cx="5"
          cy="19"
          r="2"
        />
      </motion.g>
    </svg>
  );
}
