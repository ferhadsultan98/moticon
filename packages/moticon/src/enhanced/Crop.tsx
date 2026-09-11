"use client";

// Auto-generated enhanced copy. src/icons/Crop.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCrop({
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
      <motion.g initial="rest" animate={force && !reduced ? "frame" : "rest"} whileHover={reduced ? undefined : "frame"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            frame: { x: 1, y: 1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M6 2v14a2 2 0 0 0 2 2h14"
        />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            frame: { x: -1, y: -1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M18 22V8a2 2 0 0 0-2-2H2"
        />
      </motion.g>
    </svg>
  );
}

export const Crop = createEnhancedIcon(OriginalCrop, {"name":"Crop","mechanic":"frame","profile":"reveal","director":{"accent":"spark","anchor":[5.78,5],"vector":[3,3],"duration":0.418,"intensity":0.965,"complexity":3.023}});
