"use client";

// Auto-generated enhanced copy. src/icons/Lock.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalLock({
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
      <motion.g initial="rest" animate={force && !reduced ? "unlock" : "rest"} whileHover={reduced ? undefined : "unlock"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <motion.path
          style={{ originX: "7px", originY: "11px" }}
          variants={{
            rest: { rotate: 0, y: 0 },
            unlock: { rotate: -20, y: -1, transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="M7 11V7a5 5 0 0 1 10 0v4"
        />
      </motion.g>
    </svg>
  );
}

export const Lock = createEnhancedIcon(OriginalLock, {"name":"Lock","mechanic":"unlock","profile":"reveal","director":{"accent":"hinge","anchor":[7,11],"vector":[3,3],"duration":0.514,"intensity":1.014,"complexity":2.0137}});
