"use client";

// Auto-generated enhanced copy. src/icons/Egg.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalEgg({
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
        style={{ originX: "12px", originY: "20px" }}
        initial="rest" animate={force && !reduced ? "wobble" : "rest"}
        whileHover={reduced ? undefined : "wobble"}
        variants={{
          rest: { rotate: 0 },
          wobble: { rotate: [0, 8, -8, 4, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
        d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"
      />
    </svg>
  );
}

export const Egg = createEnhancedIcon(OriginalEgg, {"name":"Egg","mechanic":"wobble","profile":"oscillate","director":{"accent":"ripple","anchor":[12,20],"vector":[3,3],"duration":0.664,"intensity":1.059,"complexity":1.0195}});
