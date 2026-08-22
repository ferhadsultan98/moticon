import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function BarChart2({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "compare"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          style={{ originX: "5px", originY: "21px" }}
          variants={{
            rest: { scaleY: 1 },
            compare: { scaleY: [1, 1.15, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="M5 21v-6"
        />
        <path d="M12 21V3" />
        <motion.path
          style={{ originX: "19px", originY: "21px" }}
          variants={{
            rest: { scaleY: 1 },
            compare: { scaleY: [1, 1.15, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } },
          }}
          d="M19 21V9"
        />
      </motion.g>
    </svg>
  );
}
