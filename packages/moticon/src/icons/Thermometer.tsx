import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Thermometer({
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
      <motion.path
        style={{ originX: "12px", originY: "21px" }}
        initial="rest"
        whileHover={reduced ? undefined : "rise"}
        variants={{
          rest: { scaleY: 1 },
          rise: { scaleY: 1.06, transition: { duration: 0.4, ease: "easeOut" } },
        }}
        d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}
