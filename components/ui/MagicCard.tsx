"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const MagicCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };
  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "relative overflow-hidden rounded-3xl border-2 border-white/[0.1] group/bento hover:shadow-xl shadow-input dark:shadow-none justify-between flex flex-col space-y-4 transition-[border-color] duration-300",
        containerClassName
      )}
      initial={false}
      whileHover={{
        borderColor: "rgba(255,255,255,0.35)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.55), 0 8px 24px rgba(255,255,255,0.18)",
        filter: "brightness(1.06)",
      }}
    >
      <div
        className="relative  h-full bg-transparent  sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className={cn("h-full px-4 py-20 sm:px-10", className)}
        >
          <Noise />
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Inlined SVG turbulence. The previous `url(/noise.webp)` asset does not exist
// in /public, so every card fired a 404 and rendered no texture at all.
const NOISE_DATA_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="120" height="120" filter="url(#n)" opacity="0.5"/></svg>`,
  );

const Noise = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-40 h-full w-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: `url("${NOISE_DATA_URI}")`,
        backgroundSize: "120px 120px",
      }}
    ></div>
  );
};
