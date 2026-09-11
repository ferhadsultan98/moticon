"use client";

// Auto-generated enhanced copy. src/icons/MountainSnow.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMountainSnow({
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
      <motion.g initial="rest" animate={force && !reduced ? "drift" : "rest"} whileHover={reduced ? undefined : "drift"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="m8 3 4 8 5-5 5 15H2L8 3z"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            drift: { y: [0, 2, 0], transition: { duration: 0.7, ease: "easeInOut" } },
          }}
          d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
        />
      </motion.g>
    </svg>
  );
}

export const MountainSnow = createEnhancedIcon(OriginalMountainSnow, {"name":"MountainSnow","mechanic":"drift","profile":"travel","director":{"accent":"trail","anchor":[5.03,9],"vector":[3,2],"duration":0.868,"intensity":1.007,"complexity":2.0239}});
