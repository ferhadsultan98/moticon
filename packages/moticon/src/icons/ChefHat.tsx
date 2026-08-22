import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ChefHat({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "puff"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M6 17h12" />
        <motion.path
          style={{ originX: "12px", originY: "17px" }}
          variants={{
            rest: { scaleY: 1 },
            puff: { scaleY: [1, 1.06, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          fill="transparent"
          d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
        />
      </motion.g>
    </svg>
  );
}
