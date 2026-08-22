import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function BellPlus({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "add"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
        <path
          fill="transparent"
          d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"
        />
        <motion.path
          style={{ originX: "18px", originY: "8px" }}
          variants={{
            rest: { rotate: 0, scale: 1 },
            add: { rotate: 90, scale: [1, 1.3, 1], transition: { duration: 0.6, ease: "easeOut" } },
          }}
          d="M15 8h6"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            add: { opacity: 0, transition: { duration: 0.3 } },
          }}
          d="M18 5v6"
        />
      </motion.g>
    </svg>
  );
}
