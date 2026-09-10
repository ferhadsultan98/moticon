"use client";

// Auto-generated enhanced copy. src/icons/Medal.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMedal({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  force = false,
  ...props
}: MoticonIconProps & { force?: boolean }) {
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
      <motion.g initial="rest" animate={force && !reduced ? "shine" : "rest"} whileHover={reduced ? undefined : "shine"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
        <path d="M11 12 5.12 2.2" />
        <path d="m13 12 5.88-9.8" />
        <path d="M8 7h8" />
        <motion.circle
          style={{ originX: "12px", originY: "17px" }}
          variants={{
            rest: { scale: 1 },
            shine: { scale: [1, 1.15, 1], transition: { duration: 0.35, ease: "easeOut" } },
          }}
          cx="12"
          cy="17"
          r="5"
        />
        <path d="M12 18v-2h-.5" />
      </motion.g>
    </svg>
  );
}

export const Medal = createEnhancedIcon(OriginalMedal, {"name":"Medal","mechanic":"shine","profile":"energy","director":{"accent":"glow","anchor":[12,17],"vector":[3,3],"duration":0.53,"intensity":1.039,"complexity":2.0557}});
