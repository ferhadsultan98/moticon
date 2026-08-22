import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function CloudSnow({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "drift"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <motion.path
          variants={{
            rest: { x: 0 },
            drift: { x: [0, 1, -1, 0], transition: { duration: 0.6, ease: "easeInOut", delay: 0 } },
          }}
          d="M8 15h.01"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drift: { x: [0, -1, 1, 0], transition: { duration: 0.6, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M8 19h.01"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drift: { x: [0, 1, -1, 0], transition: { duration: 0.6, ease: "easeInOut", delay: 0.05 } },
          }}
          d="M12 17h.01"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drift: { x: [0, -1, 1, 0], transition: { duration: 0.6, ease: "easeInOut", delay: 0.15 } },
          }}
          d="M12 21h.01"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drift: { x: [0, 1, -1, 0], transition: { duration: 0.6, ease: "easeInOut", delay: 0.02 } },
          }}
          d="M16 15h.01"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drift: { x: [0, -1, 1, 0], transition: { duration: 0.6, ease: "easeInOut", delay: 0.12 } },
          }}
          d="M16 19h.01"
        />
      </motion.g>
    </svg>
  );
}
