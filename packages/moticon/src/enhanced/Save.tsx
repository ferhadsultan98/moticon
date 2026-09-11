"use client";

// Auto-generated enhanced copy. src/icons/Save.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSave({
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
      <motion.g initial="rest" animate={force && !reduced ? "save" : "rest"} whileTap={reduced ? undefined : "save"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <motion.path
          style={{ originX: "12px", originY: "21px" }}
          variants={{
            rest: { scaleY: 1, y: 0 },
            save: { scaleY: 0.85, y: 1, transition: { duration: 0.2, ease: "easeOut" } },
          }}
          d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"
        />
        <path d="M7 3v4a1 1 0 0 0 1 1h7" />
      </motion.g>
    </svg>
  );
}

export const Save = createEnhancedIcon(OriginalSave, {"name":"Save","mechanic":"save","profile":"reveal","director":{"accent":"confirm","anchor":[18,6],"vector":[2,-2],"duration":0.38,"intensity":0.8,"complexity":2.0348}});
