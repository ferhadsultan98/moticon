"use client";

// Auto-generated enhanced copy. src/icons/Microscope.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMicroscope({
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
      <motion.g initial="rest" animate={force && !reduced ? "adjust" : "rest"} whileTap={reduced ? undefined : "adjust"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" />
        <path
          fill="transparent"
          d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"
        />
        <motion.path
          style={{ originX: "12px", originY: "6px" }}
          variants={{
            rest: { y: 0 },
            adjust: { y: [0, -2, 0], transition: { duration: 0.5, ease: "easeOut" } },
          }}
          d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
        />
      </motion.g>
    </svg>
  );
}

export const Microscope = createEnhancedIcon(OriginalMicroscope, {"name":"Microscope","mechanic":"adjust","profile":"precision","director":{"accent":"spark","anchor":[12,6],"vector":[3,-2],"duration":0.684,"intensity":1.045,"complexity":2.0621}});
