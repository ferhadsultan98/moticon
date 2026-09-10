"use client";

// Auto-generated enhanced copy. src/icons/MessageCircle.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMessageCircle({
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
        fill="transparent"
        style={{ originX: "12px", originY: "12px" }}
        initial="rest" animate={force && !reduced ? "type" : "rest"}
        whileHover={reduced ? undefined : "type"}
        variants={{
          rest: { scale: 1 },
          type: { scale: [1, 1.06, 0.98, 1.03, 1], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
      />
    </svg>
  );
}

export const MessageCircle = createEnhancedIcon(OriginalMessageCircle, {"name":"MessageCircle","mechanic":"type","profile":"reveal","director":{"accent":"draw","anchor":[12,12],"vector":[3,3],"duration":0.664,"intensity":1.045,"complexity":1.0186}});
