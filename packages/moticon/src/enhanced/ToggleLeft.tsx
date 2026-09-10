"use client";

// Auto-generated enhanced copy. src/icons/ToggleLeft.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalToggleLeft({
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
      <motion.g initial="rest" animate={force && !reduced ? "switch" : "rest"} whileTap={reduced ? undefined : "switch"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="20" height="14" x="2" y="5" rx="7" />
        <motion.circle
          variants={{
            rest: { cx: 9 },
            switch: { cx: [9, 15, 9], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          cx="9"
          cy="12"
          r="3"
        />
      </motion.g>
    </svg>
  );
}

export const ToggleLeft = createEnhancedIcon(OriginalToggleLeft, {"name":"ToggleLeft","mechanic":"switch","profile":"precision","director":{"accent":"flow","anchor":[12,12],"vector":[-3,3],"duration":0.56,"intensity":1,"complexity":2.0077}});
