import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function PhoneIncoming({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "in"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        />
        <motion.g
          variants={{
            rest: { x: 0, y: 0 },
            in: { x: [8, 0], y: [-8, 0], transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <path d="M16 2v6h6" />
          <path d="m22 2-6 6" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
