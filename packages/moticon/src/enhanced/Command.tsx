"use client";

// Auto-generated enhanced copy. src/icons/Command.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCommand({
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
      <motion.path
        initial="rest" animate={force && !reduced ? "press" : "rest"}
        whileTap={reduced ? undefined : "press"}
        variants={{
          rest: { pathLength: 1, rotate: 0 },
          press: {
            pathLength: [0.6, 1],
            rotate: [0, 90],
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
        d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
      />
    </svg>
  );
}

export const Command = createEnhancedIcon(OriginalCommand, {"name":"Command","mechanic":"press","profile":"impact","director":{"accent":"impact","anchor":[12,12],"vector":[3,3],"duration":0.564,"intensity":1.046,"complexity":1.017}});
