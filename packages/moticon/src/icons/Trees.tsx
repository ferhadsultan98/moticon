import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Trees({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "sway"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          style={{ originX: "7px", originY: "16px" }}
          variants={{
            rest: { rotate: 0 },
            sway: { rotate: [0, -5, 0], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
        >
          <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
          <path d="M7 16v6" />
        </motion.g>
        <motion.g
          style={{ originX: "16px", originY: "19px" }}
          variants={{
            rest: { rotate: 0 },
            sway: { rotate: [0, 5, 0], transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 } },
          }}
        >
          <path d="M13 19v3" />
          <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
