"use client";

// Auto-generated enhanced copy. src/icons/Image.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalImage({
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
      <motion.g initial="rest" animate={force && !reduced ? "pan" : "rest"} whileHover={reduced ? undefined : "pan"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            pan: { scale: [1, 1.3, 1], transition: { duration: 0.4, ease: "easeOut" } },
          }}
          cx="9"
          cy="9"
          r="2"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            pan: { y: [0, -1, 0], transition: { duration: 0.4, ease: "easeOut" } },
          }}
          d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
        />
      </motion.g>
    </svg>
  );
}

export const Image = createEnhancedIcon(OriginalImage, {"name":"Image","mechanic":"pan","profile":"precision","director":{"accent":"scan","anchor":[5,5.75],"vector":[3,-1],"duration":0.564,"intensity":0.962,"complexity":3.0123}});
