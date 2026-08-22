import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function PhoneOutgoing({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "out"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        />
        <motion.g
          variants={{
            rest: { x: 0, y: 0 },
            out: { x: [0, 3], y: [0, -3], transition: { duration: 0.35, ease: "easeOut" } },
          }}
        >
          <path d="m16 8 6-6" />
          <path d="M22 8V2h-6" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
