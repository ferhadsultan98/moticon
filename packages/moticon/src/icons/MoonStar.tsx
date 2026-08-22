import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function MoonStar({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "twinkle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        />
        <motion.path
          style={{ originX: "20px", originY: "5px" }}
          variants={{
            rest: { scale: 1 },
            twinkle: { scale: [1, 1.4, 1], transition: { duration: 0.5, ease: "easeOut" } },
          }}
          d="M18 5h4"
        />
        <motion.path
          style={{ originX: "20px", originY: "5px" }}
          variants={{
            rest: { scale: 1 },
            twinkle: { scale: [1, 1.4, 1], transition: { duration: 0.5, ease: "easeOut" } },
          }}
          d="M20 3v4"
        />
      </motion.g>
    </svg>
  );
}
