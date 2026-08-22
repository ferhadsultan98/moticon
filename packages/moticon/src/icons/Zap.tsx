import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Zap({
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
        style={{ originX: "12px", originY: "12px" }}
        initial="rest"
        whileHover={reduced ? undefined : "strike"}
        variants={{
          rest: { fill: "rgba(0,0,0,0)", scale: 1 },
          strike: {
            fill: ["rgba(0,0,0,0)", "currentColor", "rgba(0,0,0,0)"],
            scale: [1, 1.15, 1],
            transition: { duration: 0.3, ease: "easeOut" },
          },
        }}
        d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"
      />
    </svg>
  );
}
