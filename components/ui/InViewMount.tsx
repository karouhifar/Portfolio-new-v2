/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";

interface InViewMountProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  /** Trigger only once (don’t unmount on exit). Default: true */
  once?: boolean;
  /** Intersection amount (0–1). Default: 0.2 */
  amount?: number;
  /** Delay in ms before showing/hiding after inView changes. Default: 0 */
  delay?: number;
}

export function InViewMount({
  children,
  once = true,
  amount = 0.2,
  delay = 0,
  className,
}: InViewMountProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount });
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      if (inView) setHasEntered(true);
      else if (!once) setHasEntered(false);
    }, delay);
    return () => clearTimeout(time);
  }, [inView, once]);

  const shouldShow = once ? hasEntered : inView;

  return (
    <div ref={ref} className={className}>
      <AnimatePresence mode="wait">
        {shouldShow && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
