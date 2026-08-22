import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Star({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "lit"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          fill="transparent"
          variants={{
            rest: { fill: "rgba(255,255,255,0)" },
            lit: {
              fill: ["rgba(255,255,255,0)", "currentColor", "rgba(255,255,255,0.15)"],
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        />
      </motion.g>
    </svg>
  );
}
