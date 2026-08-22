import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ZapOff({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "cut"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10.768 5.111 13.44 2.44a1.5 1.5 0 0 1 2.474 1.561l-1.633 4.625" />
        <path d="m18.889 13.232.672-.672A1.5 1.5 0 0 0 18.5 10h-2.844" />
        <path d="m7.94 7.94-3.5 3.499A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l5.5-5.5" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            cut: { pathLength: [0, 1], transition: { duration: 0.7, ease: "easeOut" } },
          }}
          d="m2 2 20 20"
        />
      </motion.g>
    </svg>
  );
}
