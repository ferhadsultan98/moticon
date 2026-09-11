"use client";

// Auto-generated enhanced copy. src/icons/Mars.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMars({
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
      <motion.g initial="rest" animate={force && !reduced ? "fly" : "rest"} whileHover={reduced ? undefined : "fly"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M16 3h5v5" />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            fly: { x: [-4, 0], y: [4, 0], transition: { duration: 0.5, ease: "easeOut" } },
          }}
          d="m21 3-6.75 6.75"
        />
        <circle cx="10" cy="14" r="6" />
      </motion.g>
    </svg>
  );
}

export const Mars = createEnhancedIcon(OriginalMars, {"name":"Mars","mechanic":"fly","profile":"travel","director":{"accent":"trail","anchor":[14,5],"vector":[-4,4],"duration":0.668,"intensity":1.006,"complexity":2.0267}});
