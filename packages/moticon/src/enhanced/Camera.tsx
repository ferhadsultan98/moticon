"use client";

// Auto-generated enhanced copy. src/icons/Camera.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCamera({
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
      <motion.g initial="rest" animate={force && !reduced ? "shoot" : "rest"} whileTap={reduced ? undefined : "shoot"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
        <motion.circle
          style={{ originX: "12px", originY: "13px" }}
          variants={{
            rest: { scale: 1 },
            shoot: { scale: [1, 0.6, 1], transition: { duration: 0.25, ease: "easeOut" } },
          }}
          cx="12"
          cy="13"
          r="3"
        />
      </motion.g>
    </svg>
  );
}

export const Camera = createEnhancedIcon(OriginalCamera, {"name":"Camera","mechanic":"shoot","profile":"travel","director":{"accent":"burst","anchor":[18,6],"vector":[3,-3],"duration":0.414,"intensity":1.08,"complexity":2.018}});
