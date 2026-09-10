"use client";

// Auto-generated enhanced copy. src/icons/ScanLine.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalScanLine({
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
      <motion.g initial="rest" animate={force && !reduced ? "scan" : "rest"} whileHover={reduced ? undefined : "scan"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <motion.path
          variants={{
            rest: { y: 0 },
            scan: { y: [-5, 5, -5], transition: { duration: 1.2, ease: "linear" } },
          }}
          d="M7 12h10"
        />
      </motion.g>
    </svg>
  );
}

export const ScanLine = createEnhancedIcon(OriginalScanLine, {"name":"ScanLine","mechanic":"scan","profile":"reveal","director":{"accent":"scan","anchor":[5,5],"vector":[3,-5],"duration":1.05,"intensity":1.04,"complexity":2.0565}});
