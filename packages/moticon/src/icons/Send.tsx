import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Send({
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
      <motion.g
        initial="rest"
        whileTap={reduced ? undefined : "fly"}
        variants={{
          rest: { x: 0, y: 0, opacity: 1 },
          fly: {
            x: [0, 10, 0],
            y: [0, -10, 0],
            opacity: [1, 0, 1],
            transition: { duration: 0.45, ease: "easeIn" },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
        />
        <path d="m21.854 2.147-10.94 10.939" />
      </motion.g>
    </svg>
  );
}
