"use client";

// Auto-generated enhanced copy. src/icons/Bitcoin.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBitcoin({
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
        initial="rest" animate={force && !reduced ? "mine" : "rest"}
        whileHover={reduced ? undefined : "mine"}
        style={{ transformOrigin: "12px 12px" }}
        variants={{
          rest: { pathLength: 1, scale: 1 },
          mine: {
            pathLength: [0, 1],
            scale: [1, 1.05, 1],
            transition: { duration: 0.6, ease: "easeInOut", times: [0, 0.5, 1] },
          },
        }}
        d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
      />
    </svg>
  );
}

export const Bitcoin = createEnhancedIcon(OriginalBitcoin, {"name":"Bitcoin","mechanic":"mine","profile":"energy","director":{"accent":"glow","anchor":[5.31,8.84],"vector":[3,3],"duration":0.764,"intensity":1.052,"complexity":1.0152}});
