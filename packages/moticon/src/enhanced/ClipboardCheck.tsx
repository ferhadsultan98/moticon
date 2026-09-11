"use client";

// Auto-generated enhanced copy. src/icons/ClipboardCheck.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalClipboardCheck({
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
      <motion.g initial="rest" animate={force && !reduced ? "check" : "rest"} whileTap={reduced ? undefined : "check"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <motion.path
          variants={{
            rest: { pathLength: 1, scale: 1 },
            check: { pathLength: [0, 1], scale: [1, 1.15, 1], transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="m9 14 2 2 4-4"
        />
      </motion.g>
    </svg>
  );
}

export const ClipboardCheck = createEnhancedIcon(OriginalClipboardCheck, {"name":"ClipboardCheck","mechanic":"check","profile":"reveal","director":{"accent":"confirm","anchor":[5,5],"vector":[3,3],"duration":0.518,"intensity":1.015,"complexity":2.0201}});
