import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Package2({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "unpack"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z"
        />
        <path d="M3.054 9.013h17.893" />
        <motion.path
          style={{ originX: "12px", originY: "3px" }}
          variants={{
            rest: { scaleY: 1 },
            unpack: { scaleY: [1, 0.3, 1], transition: { duration: 0.4, ease: "easeOut" } },
          }}
          d="M12 3v6"
        />
      </motion.g>
    </svg>
  );
}
