"use client";

import { MotionConfig } from "motion/react";

/**
 * `reducedMotion="user"` makes every Motion animation in the tree honour the
 * OS-level "reduce motion" setting: transform/layout animations are dropped and
 * only opacity is animated. CSS-level animations are handled in globals.css.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
