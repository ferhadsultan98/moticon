import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function SendHorizontal({
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
          rest: { x: 0, opacity: 1 },
          fly: { x: [0, 8, 24], opacity: [1, 1, 0], transition: { duration: 0.6, ease: "easeIn" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
        />
        <path d="M6 12h16" />
      </motion.g>
    </svg>
  );
}
