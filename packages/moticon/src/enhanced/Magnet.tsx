"use client";

// Auto-generated enhanced copy. src/icons/Magnet.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMagnet({
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
      <motion.g
        style={{ originX: "12px", originY: "12px" }}
        initial="rest" animate={force && !reduced ? "pull" : "rest"}
        whileHover={reduced ? undefined : "pull"}
        variants={{
          rest: { x: 0, rotate: 0 },
          pull: {
            x: [0, -2, 2, -1.5, 1.5, 0],
            rotate: [0, -4, 4, -2, 2, 0],
            transition: { duration: 0.55, ease: "easeInOut" },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" />
        <path d="m5 8 4 4" />
        <path d="m12 15 4 4" />
      </motion.g>
    </svg>
  );
}

export const Magnet = createEnhancedIcon(OriginalMagnet, {"name":"Magnet","mechanic":"pull","profile":"precision","director":{"accent":"stretch","anchor":[12,12],"vector":[-2,3],"duration":0.722,"intensity":1.065,"complexity":1.0308}});
