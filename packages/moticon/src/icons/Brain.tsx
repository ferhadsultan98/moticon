import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Brain({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "think"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 18V5" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            think: { opacity: [1, 0.3, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"
        />
        <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
        <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
        <path d="M18 18a4 4 0 0 0 2-7.464" />
        <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
        <path d="M6 18a4 4 0 0 1-2-7.464" />
        <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
      </motion.g>
    </svg>
  );
}
