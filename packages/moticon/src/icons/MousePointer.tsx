import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function MousePointer({
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
      <motion.g
        initial="rest"
        whileTap={reduced ? undefined : "click"}
        variants={{
          rest: { x: 0, y: 0 },
          click: { x: 2, y: 2, transition: { duration: 0.15, ease: "easeOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12.586 12.586 19 19" />
        <path
          fill="transparent"
          d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
        />
      </motion.g>
    </svg>
  );
}
