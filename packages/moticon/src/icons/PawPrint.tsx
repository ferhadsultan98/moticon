import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function PawPrint({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "press"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            press: { scale: [1, 0.6, 1], transition: { duration: 0.4, ease: "easeOut", delay: 0 } },
          }}
          cx="11"
          cy="4"
          r="2"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            press: { scale: [1, 0.6, 1], transition: { duration: 0.4, ease: "easeOut", delay: 0.08 } },
          }}
          cx="18"
          cy="8"
          r="2"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            press: { scale: [1, 0.6, 1], transition: { duration: 0.4, ease: "easeOut", delay: 0.16 } },
          }}
          cx="20"
          cy="16"
          r="2"
        />
      </motion.g>
    </svg>
  );
}
