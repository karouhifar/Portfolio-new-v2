import React from "react";

const GlassEffect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="bg-indigo-900/20 backdrop-blur-lg  p-8  justify-between 
      flex flex-col space-y-4 transition-[border-color] duration-300 
      relative overflow-hidden z-10 w-full rounded-3xl border-2 border-white/10 shadow-2xl"
    >
      {children}
    </div>
  );
};

export default GlassEffect;
