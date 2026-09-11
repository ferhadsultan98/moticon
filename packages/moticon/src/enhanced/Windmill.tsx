"use client";

// Auto-generated enhanced copy. src/icons/Windmill.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalWindmill({
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
      <motion.g initial="rest" animate={force && !reduced ? "spin" : "rest"} whileHover={reduced ? undefined : "spin"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 11v10" />
        <path d="M9 21h6" />
        <motion.g
          style={{ originX: "12px", originY: "9px" }}
          variants={{
            rest: { rotate: 0 },
            spin: { rotate: 360, transition: { duration: 0.9, ease: "easeOut" } },
          }}
        >
          <path d="M12 9 5 6c-.6 3 .3 5.4 2.4 6.3z" />
          <path d="m12 9 3 7c2.7-1.4 3.6-3.9 2.6-6.9z" />
          <path d="M12 9 16 3c-2.9-1-5.4-.3-6.7 1.9z" />
          <circle cx="12" cy="9" r="1.5" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export const Windmill = createEnhancedIcon(OriginalWindmill, {"name":"Windmill","mechanic":"spin","profile":"orbit","director":{"accent":"orbit","anchor":[12,9],"vector":[3,3],"duration":1.05,"intensity":1.03,"complexity":2.0514}});
