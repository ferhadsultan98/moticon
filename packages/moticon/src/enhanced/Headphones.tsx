"use client";

// Auto-generated enhanced copy. src/icons/Headphones.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalHeadphones({
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
        initial="rest" animate={force && !reduced ? "bob" : "rest"}
        whileHover={reduced ? undefined : "bob"}
        variants={{
          rest: { rotate: 0 },
          bob: { rotate: [0, -4, 4, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
        d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
      />
    </svg>
  );
}

export const Headphones = createEnhancedIcon(OriginalHeadphones, {"name":"Headphones","mechanic":"bob","profile":"travel","director":{"accent":"ripple","anchor":[12,12],"vector":[3,3],"duration":0.664,"intensity":1.048,"complexity":1.0172}});
