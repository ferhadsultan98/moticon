import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function MailPlus({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "compose"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
        />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        <motion.path
          style={{ originX: "19px", originY: "19px" }}
          variants={{
            rest: { rotate: 0 },
            compose: { rotate: 90, transition: { duration: 0.6, ease: "backOut" } },
          }}
          d="M19 16v6"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            compose: { opacity: 0, transition: { duration: 0.3 } },
          }}
          d="M16 19h6"
        />
      </motion.g>
    </svg>
  );
}
