"use client";

// Auto-generated enhanced copy. src/icons/Guitar.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalGuitar({
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
      <motion.g initial="rest" animate={force && !reduced ? "strum" : "rest"} whileHover={reduced ? undefined : "strum"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        {/* Lucide `guitar` */}
        <motion.path
          d="m11.9 12.1 4.514-4.514"
          variants={{
            rest: { x: 0, y: 0 },
            strum: {
              x: [0, 0.7, -0.5, 0.3, 0],
              y: [0, -0.7, 0.5, -0.3, 0],
              transition: { duration: 0.45, ease: "easeInOut" },
            },
          }}
        />
        <path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" />
        <path d="m6 16 2 2" />
        <motion.path
          d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"
          fill="transparent"
          style={{ originX: "9px", originY: "15px" }}
          variants={{
            rest: { rotate: 0 },
            strum: {
              rotate: [0, 2.5, -2, 1, 0],
              transition: { duration: 0.45, ease: "easeInOut" },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}

export const Guitar = createEnhancedIcon(OriginalGuitar, {"name":"Guitar","mechanic":"strum","profile":"sway","director":{"accent":"spark","anchor":[9,15],"vector":[0.7,-0.7],"duration":0.626,"intensity":0.989,"complexity":3.0451}});
