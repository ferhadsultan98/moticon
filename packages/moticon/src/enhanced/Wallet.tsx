"use client";

// Auto-generated enhanced copy. src/icons/Wallet.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalWallet({
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
      <motion.g initial="rest" animate={force && !reduced ? "open" : "rest"} whileTap={reduced ? undefined : "open"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />

        <motion.path
          style={{ transformOrigin: "12px 5px" }}
          variants={{
            rest: { rotate: 0, y: 0 },
            open: {
              rotate: [0, -10, -6, -8],
              y: [0, -1.3, -0.8, -1],
              transition: { duration: 0.4, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
        />
      </motion.g>
    </svg>
  );
}

export const Wallet = createEnhancedIcon(OriginalWallet, {"name":"Wallet","mechanic":"open","profile":"reveal","director":{"accent":"hinge","anchor":[5,5],"vector":[3,-1.3],"duration":0.468,"intensity":1.018,"complexity":2.0226}});
