import React from "react";
import { cn } from "@/lib/utils";

const GlassEffect: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative z-10 flex w-full flex-col justify-between space-y-4 overflow-hidden rounded-3xl border-2 border-white/10 bg-indigo-900/20 p-6 shadow-2xl backdrop-blur-lg transition-[border-color] duration-300 sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassEffect;
