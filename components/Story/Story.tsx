import React from "react";
import SVGCard from "../ui/SVGCard";
import { FadeUp } from "../ui/FadeUp";

const Story: React.FC = () => {
  return (
    <div className="w-full py-6 md:h-[57rem]">
      <div className="mx-auto max-w-7xl">
        {/* The grid */}
        <div
          className="relative grid gap-10 md:[grid-template-columns:repeat(12,minmax(0,1fr))] md:[grid-template-rows:repeat(3,200px)]"
          // Control hub size and border thickness with CSS vars for easy tuning
          style={
            {
              // @ts-ignore custom properties
              "--hub-size": "180px",
              "--hub-ring": "14px",
            } as React.CSSProperties
          }
        >
          {/* Left tall (spans two rows) */}
          <FadeUp number={1} className="md:col-span-3 md:row-span-2 ">
            <div className="rounded-3xl h-48 md:h-full border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]" />
          </FadeUp>
          {/* Top center wide */}
          <FadeUp number={2} className="md:col-span-6 md:row-span-2">
            <SVGCard className="h-48  md:h-full" />
          </FadeUp>
          {/* Top-right small */}
          <FadeUp number={3} className="md:col-span-3 md:row-span-1">
            <div className="h-48  md:h-full rounded-3xl border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]" />
          </FadeUp>
          {/* Mid-right small */}
          <FadeUp
            number={4}
            className="md:col-start-10 md:col-end-13 md:row-start-2 md:row-end-3"
          >
            <div className="h-48  md:block  md:h-full rounded-3xl border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]" />
          </FadeUp>
          {/* Bottom left wide */}
          <FadeUp
            number={5}
            className="md:col-start-1 md:col-end-7 md:row-start-3 md:row-end-4 "
          >
            <SVGCard direction="right" className="h-48  md:h-full" />
          </FadeUp>
          {/* Bottom right wide */}
          <FadeUp
            number={6}
            className="md:col-start-7 md:col-end-13 md:row-start-3 md:row-end-4"
          >
            <SVGCard direction="left" className="h-48  md:h-full" />
          </FadeUp>

          {/* CENTRAL HUB (creates the inverted-radius illusion by sitting above the cards) */}
        </div>
      </div>
    </div>
  );
};

export default Story;
