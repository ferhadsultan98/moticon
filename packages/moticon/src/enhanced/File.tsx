"use client";

// Auto-generated enhanced copy. src/icons/File.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalFile({
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
      <motion.g initial="rest" animate={force && !reduced ? "fold" : "rest"} whileHover={reduced ? undefined : "fold"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <motion.path
          style={{ originX: "19px", originY: "8px" }}
          variants={{
            rest: { x: 0, y: 0 },
            fold: { x: [0, -3, 0], y: [0, 3, 0], transition: { duration: 0.45, ease: "easeInOut" } },
          }}
          d="M14 2v5a1 1 0 0 0 1 1h5"
        />
      </motion.g>
    </svg>
  );
}

export const File = createEnhancedIcon(OriginalFile, {"name":"File","mechanic":"fold","profile":"reveal","director":{"accent":"hinge","anchor":[19,8],"vector":[-3,3],"duration":0.618,"intensity":1.02,"complexity":2.0206}});
