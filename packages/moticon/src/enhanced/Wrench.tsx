"use client";

// Auto-generated enhanced copy. src/icons/Wrench.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalWrench({
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
        style={{ originX: "17px", originY: "6px" }}
        initial="rest" animate={force && !reduced ? "tighten" : "rest"}
        whileHover={reduced ? undefined : "tighten"}
        variants={{
          rest: { rotate: 0 },
          tighten: { rotate: [0, -20, 5, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
      />
    </svg>
  );
}

export const Wrench = createEnhancedIcon(OriginalWrench, {"name":"Wrench","mechanic":"tighten","profile":"impact","director":{"accent":"impact","anchor":[17,6],"vector":[3,3],"duration":0.664,"intensity":1.054,"complexity":1.0149}});
