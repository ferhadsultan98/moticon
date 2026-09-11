"use client";

// Auto-generated enhanced copy. src/icons/HardDrive.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalHardDrive({
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
      <motion.g initial="rest" animate={force && !reduced ? "spin" : "rest"} whileHover={reduced ? undefined : "spin"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <path d="M21.946 12.013H2.054" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            spin: { opacity: [1, 0.2, 1], transition: { duration: 0.35, ease: "easeInOut" } },
          }}
          d="M6 16h.01"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            spin: { opacity: [1, 0.2, 1], transition: { duration: 0.35, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M10 16h.01"
        />
      </motion.g>
    </svg>
  );
}

export const HardDrive = createEnhancedIcon(OriginalHardDrive, {"name":"HardDrive","mechanic":"spin","profile":"orbit","director":{"accent":"orbit","anchor":[5,5],"vector":[3,3],"duration":0.526,"intensity":0.979,"complexity":3.0455}});
