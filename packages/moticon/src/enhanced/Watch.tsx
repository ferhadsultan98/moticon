"use client";

// Auto-generated enhanced copy. src/icons/Watch.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalWatch({
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
      <motion.g initial="rest" animate={force && !reduced ? "strap" : "rest"} whileHover={reduced ? undefined : "strap"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          style={{ originX: "12px", originY: "3px" }}
          variants={{
            rest: { rotate: 0 },
            strap: { rotate: [0, -6, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
        />
        <motion.path
          style={{ originX: "12px", originY: "21px" }}
          variants={{
            rest: { rotate: 0 },
            strap: { rotate: [0, 6, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.05 } },
          }}
          d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
        />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 10v2.2l1.6 1" />
      </motion.g>
    </svg>
  );
}

export const Watch = createEnhancedIcon(OriginalWatch, {"name":"Watch","mechanic":"strap","profile":"reveal","director":{"accent":"hinge","anchor":[12,3],"vector":[3,3],"duration":0.572,"intensity":0.984,"complexity":3.0339}});
