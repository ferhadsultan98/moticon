import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Gamepad2({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "press"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
        />
        <motion.g
          variants={{
            rest: { scale: 1 },
            press: { scale: [1, 0.7, 1], transition: { duration: 0.2, ease: "easeOut" } },
          }}
        >
          <line x1="6" x2="10" y1="11" y2="11" />
          <line x1="8" x2="8" y1="9" y2="13" />
        </motion.g>
        <motion.line
          variants={{
            rest: { scale: 1 },
            press: { scale: [1, 0.5, 1], transition: { duration: 0.2, ease: "easeOut", delay: 0.08 } },
          }}
          x1="15"
          x2="15.01"
          y1="12"
          y2="12"
        />
        <motion.line
          variants={{
            rest: { scale: 1 },
            press: { scale: [1, 0.5, 1], transition: { duration: 0.2, ease: "easeOut", delay: 0.16 } },
          }}
          x1="18"
          x2="18.01"
          y1="10"
          y2="10"
        />
      </motion.g>
    </svg>
  );
}
