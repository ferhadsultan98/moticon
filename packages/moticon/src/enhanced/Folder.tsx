"use client";

// Auto-generated enhanced copy. src/icons/Folder.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalFolder({
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
      <motion.path
        fill="transparent"
        style={{ originX: "12px", originY: "20px" }}
        initial="rest" animate={force && !reduced ? "open" : "rest"}
        whileHover={reduced ? undefined : "open"}
        variants={{
          rest: { scaleY: 1, y: 0 },
          open: { scaleY: 1.08, y: -1, transition: { duration: 0.3, ease: "easeOut" } },
        }}
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  );
}

export const Folder = createEnhancedIcon(OriginalFolder, {"name":"Folder","mechanic":"open","profile":"reveal","director":{"accent":"hinge","anchor":[12,20],"vector":[3,3],"duration":0.464,"intensity":1.043,"complexity":1.0167}});
