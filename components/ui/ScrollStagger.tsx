"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

type ScrollStaggerProps = {
  children: React.ReactNode;
  /** seconds between children */
  stagger?: number;
  /** initial delay before first child animates */
  delayChildren?: number;
  /** once = animate only first time it enters view */
  once?: boolean;
  /** how much of element must be visible to trigger (0–1) */
  amount?: number;
  className?: string;
};

const container = (stagger = 0.08, delayChildren = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  stagger = 0.08,
  delayChildren = 0.1,
  once = true,
  amount = 0.25,
  className,
}) => {
  return (
    <motion.div
      className={className}
      variants={container(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
};
