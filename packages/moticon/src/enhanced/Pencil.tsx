"use client";

// Auto-generated enhanced copy. src/icons/Pencil.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPencil({
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
        style={{ originX: "3px", originY: "21px" }}
        initial="rest" animate={force && !reduced ? "write" : "rest"}
        whileHover={reduced ? undefined : "write"}
        variants={{
          rest: { rotate: 0, x: 0, y: 0 },
          write: {
            rotate: [0, -8, 4, -6, 0],
            x: [0, -0.5, 0.5, -0.5, 0],
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <path d="m15 5 4 4" />
      </motion.g>
    </svg>
  );
}

export const Pencil = createEnhancedIcon(OriginalPencil, {"name":"Pencil","mechanic":"write","profile":"reveal","director":{"accent":"draw","anchor":[3,21],"vector":[-0.5,3],"duration":0.668,"intensity":1.059,"complexity":1.0285}});
