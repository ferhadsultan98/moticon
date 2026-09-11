"use client";

// Auto-generated enhanced copy. src/icons/Presentation.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPresentation({
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
      <motion.g initial="rest" animate={force && !reduced ? "point" : "rest"} whileHover={reduced ? undefined : "point"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <motion.path
          style={{ originX: "12px", originY: "16px" }}
          variants={{
            rest: { scaleY: 1 },
            point: { scaleY: [1, 1.15, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="m7 21 5-5 5 5"
        />
      </motion.g>
    </svg>
  );
}

export const Presentation = createEnhancedIcon(OriginalPresentation, {"name":"Presentation","mechanic":"point","profile":"precision","director":{"accent":"scan","anchor":[12,16],"vector":[3,3],"duration":0.472,"intensity":1.028,"complexity":2.0352}});
