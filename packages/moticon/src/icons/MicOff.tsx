import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function MicOff({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "mute"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 19v3" />
        <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
        <path d="M16.95 16.95A7 7 0 0 1 5 12v-2" />
        <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" />
        <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            mute: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="m2 2 20 20"
        />
      </motion.g>
    </svg>
  );
}
