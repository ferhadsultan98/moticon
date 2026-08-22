import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function VideoOff({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "stop"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" />
        <path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            stop: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="m2 2 20 20"
        />
      </motion.g>
    </svg>
  );
}
