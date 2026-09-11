"use client";

// Auto-generated enhanced copy. src/icons/Carrot.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCarrot({
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
      <motion.g initial="rest" animate={force && !reduced ? "wiggle" : "rest"} whileHover={reduced ? undefined : "wiggle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3"
        />
        <path d="m8 15-2.58-2.58" />
        <motion.path
          style={{ originX: "15px", originY: "9px" }}
          variants={{
            rest: { rotate: 0 },
            wiggle: { rotate: [0, -5, 5, 0], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7"
        />
      </motion.g>
    </svg>
  );
}

export const Carrot = createEnhancedIcon(OriginalCarrot, {"name":"Carrot","mechanic":"wiggle","profile":"oscillate","director":{"accent":"spark","anchor":[15,9],"vector":[3,3],"duration":0.672,"intensity":1.021,"complexity":2.0367}});
