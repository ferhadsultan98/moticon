"use client";

// Auto-generated enhanced copy. src/icons/Smartphone.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSmartphone({
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
      <motion.g initial="rest" animate={force && !reduced ? "buzz" : "rest"} whileTap={reduced ? undefined : "buzz"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          variants={{
            rest: { x: 0 },
            buzz: { x: [0, -1, 1, -1, 0], transition: { duration: 0.3, ease: "easeInOut" } },
          }}
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export const Smartphone = createEnhancedIcon(OriginalSmartphone, {"name":"Smartphone","mechanic":"buzz","profile":"energy","director":{"accent":"burst","anchor":[12,18],"vector":[-1,3],"duration":0.464,"intensity":0.998,"complexity":2.0184}});
