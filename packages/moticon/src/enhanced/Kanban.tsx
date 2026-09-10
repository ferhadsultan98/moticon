"use client";

// Auto-generated enhanced copy. src/icons/Kanban.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalKanban({
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
      <motion.g initial="rest" animate={force && !reduced ? "progress" : "rest"} whileHover={reduced ? undefined : "progress"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M5 3v14" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            progress: { pathLength: [0.3, 1], transition: { duration: 0.4, ease: "easeOut" } },
          }}
          d="M12 3v8"
        />
        <path d="M19 3v18" />
      </motion.g>
    </svg>
  );
}

export const Kanban = createEnhancedIcon(OriginalKanban, {"name":"Kanban","mechanic":"progress","profile":"flow","director":{"accent":"draw","anchor":[12,5],"vector":[3,3],"duration":0.572,"intensity":1.024,"complexity":2.036}});
