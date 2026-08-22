import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Terminal({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "run"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0 },
            run: { x: [0, 2, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          d="m4 17 6-6-6-6"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            run: { opacity: [1, 0.2, 1], transition: { duration: 0.6, repeat: Infinity } },
          }}
          d="M12 19h8"
        />
      </motion.g>
    </svg>
  );
}
