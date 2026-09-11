"use client";

// Auto-generated enhanced copy. src/icons/FishSymbol.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalFishSymbol({
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
        initial="rest" animate={force && !reduced ? "swim" : "rest"}
        whileHover={reduced ? undefined : "swim"}
        variants={{
          rest: { pathLength: 1 },
          swim: { pathLength: [0, 1], transition: { duration: 0.6, ease: "easeInOut" } },
        }}
        d="M2 16s9-15 20-4C11 23 2 8 2 8"
      />
    </svg>
  );
}

export const FishSymbol = createEnhancedIcon(OriginalFishSymbol, {"name":"FishSymbol","mechanic":"swim","profile":"travel","director":{"accent":"trail","anchor":[7.67,13.75],"vector":[3,3],"duration":0.764,"intensity":1.047,"complexity":1.0195}});
