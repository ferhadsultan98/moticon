import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function SunMoon({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "cycle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"
        />
        <path d="M16 12a4 4 0 0 0-4-4" />
        <motion.path
          style={{ originX: "12px", originY: "3px" }}
          variants={{
            rest: { rotate: 0 },
            cycle: { rotate: 90, transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="M12 2v2"
        />
        <motion.path
          style={{ originX: "18.4px", originY: "6.6px" }}
          variants={{
            rest: { rotate: 0 },
            cycle: { rotate: 90, transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="m19 5-1.256 1.256"
        />
        <motion.path
          style={{ originX: "21px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            cycle: { rotate: 90, transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="M20 12h2"
        />
      </motion.g>
    </svg>
  );
}
