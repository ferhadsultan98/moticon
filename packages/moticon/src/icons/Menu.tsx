import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Menu({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "cross"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          style={{ originX: "12px", originY: "5px" }}
          variants={{
            rest: { rotate: 0, y: 0 },
            cross: { rotate: 45, y: 7, transition: { duration: 0.3, ease: "easeInOut" } },
          }}
          d="M4 5h16"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            cross: { opacity: 0, transition: { duration: 0.15 } },
          }}
          d="M4 12h16"
        />
        <motion.path
          style={{ originX: "12px", originY: "19px" }}
          variants={{
            rest: { rotate: 0, y: 0 },
            cross: { rotate: -45, y: -7, transition: { duration: 0.3, ease: "easeInOut" } },
          }}
          d="M4 19h16"
        />
      </motion.g>
    </svg>
  );
}
