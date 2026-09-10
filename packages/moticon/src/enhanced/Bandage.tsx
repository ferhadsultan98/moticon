"use client";

// Auto-generated enhanced copy. src/icons/Bandage.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBandage({
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
      <motion.g initial="rest" animate={force && !reduced ? "peel" : "rest"} whileHover={reduced ? undefined : "peel"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 6v12" />

        <motion.path
          style={{ transformOrigin: "18px 6px" }}
          variants={{
            rest: { rotate: 0, x: 0 },
            peel: {
              rotate: [0, -11, -8],
              x: [0, -0.6, -0.3],
              transition: { duration: 0.44, ease: "easeOut", times: [0, 0.7, 1] },
            },
          }}
          d="M18 6v12"
        />
        <path d="M10 10.01h.01" />
        <path d="M10 14.01h.01" />
        <path d="M14 10.01h.01" />
        <path d="M14 14.01h.01" />
      </motion.g>
    </svg>
  );
}

export const Bandage = createEnhancedIcon(OriginalBandage, {"name":"Bandage","mechanic":"peel","profile":"impact","director":{"accent":"impact","anchor":[12,10.01],"vector":[-0.6,3],"duration":0.584,"intensity":1.039,"complexity":2.0683}});
