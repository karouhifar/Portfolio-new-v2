"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 16, filter: "blur(10px)" },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: custom * 0.1,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type FadeUpProps = {
  children: React.ReactNode;
  /**  for custom delay per item when needed */
  number?: number;
  amount?: "some" | "all" | number;
  className?: string;
};

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  number = 1,
  amount = "some",
  className,
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      className={className}
      variants={fadeUp}
      custom={number}
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
};
