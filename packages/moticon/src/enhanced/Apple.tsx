"use client";

// Auto-generated enhanced copy. src/icons/Apple.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalApple({
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
      <motion.g
        style={{ transformOrigin: "12px 3px" }}
        initial="rest" animate={force && !reduced ? "bite" : "rest"}
        whileTap={reduced ? undefined : "bite"}
        variants={{
          rest: { rotate: 0, scale: 1 },
          bite: {
            rotate: [0, -10, 3, 0],
            scale: [1, 0.9, 1.02, 1],
            transition: { duration: 0.42, ease: "easeOut", times: [0, 0.4, 0.72, 1] },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 6.528V3a1 1 0 0 1 1-1h0" />
        <path
          fill="transparent"
          d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"
        />
      </motion.g>
    </svg>
  );
}

export const Apple = createEnhancedIcon(OriginalApple, {"name":"Apple","mechanic":"bite","profile":"impact","director":{"accent":"impact","anchor":[5,5],"vector":[3,3],"duration":0.518,"intensity":1.054,"complexity":1.0285}});
