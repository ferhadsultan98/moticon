import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Palette({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "paint"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            paint: { scale: [1, 1.4, 1], transition: { duration: 0.35, ease: "easeOut" } },
          }}
          cx="13.5"
          cy="6.5"
          r=".5"
          fill="currentColor"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            paint: { scale: [1, 1.4, 1], transition: { duration: 0.35, ease: "easeOut", delay: 0.08 } },
          }}
          cx="17.5"
          cy="10.5"
          r=".5"
          fill="currentColor"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            paint: { scale: [1, 1.4, 1], transition: { duration: 0.35, ease: "easeOut", delay: 0.16 } },
          }}
          cx="6.5"
          cy="12.5"
          r=".5"
          fill="currentColor"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            paint: { scale: [1, 1.4, 1], transition: { duration: 0.35, ease: "easeOut", delay: 0.24 } },
          }}
          cx="8.5"
          cy="7.5"
          r=".5"
          fill="currentColor"
        />
      </motion.g>
    </svg>
  );
}
