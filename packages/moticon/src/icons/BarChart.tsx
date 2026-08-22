import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function BarChart({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "grow"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          style={{ originX: "5px", originY: "21px" }}
          variants={{
            rest: { scaleY: 1 },
            grow: { scaleY: [0.5, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0 } },
          }}
          d="M5 21v-6"
        />
        <motion.path
          style={{ originX: "12px", originY: "21px" }}
          variants={{
            rest: { scaleY: 1 },
            grow: { scaleY: [0.5, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.08 } },
          }}
          d="M12 21V9"
        />
        <motion.path
          style={{ originX: "19px", originY: "21px" }}
          variants={{
            rest: { scaleY: 1 },
            grow: { scaleY: [0.5, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.16 } },
          }}
          d="M19 21V3"
        />
      </motion.g>
    </svg>
  );
}
