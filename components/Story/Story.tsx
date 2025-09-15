import React from "react";
import SVGCard from "../ui/SVGCard";
import { cn } from "@/lib/utils";

// Minimal bento frame in the exact *style* you shared: dark grid tiles with a central circular hub
// that visually cuts into the surrounding cards (inverted radius look). This is a clean skeleton
// you can drop content into later.

const Card: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    inverted?: boolean;
    width?: number;
    height?: number;
    direction?: "left" | "right";
  }
> = ({ className = "", inverted = false, direction, children, ...props }) => (
  <div
    className={
      cn(
        "rounded-3xl",
        !inverted &&
          "border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]"
      ) + className
    }
    {...props}
  >
    {inverted ? <SVGCard direction={direction} /> : children}
  </div>
);

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
          <Card className="h-48 md:col-span-3 md:row-span-2 md:h-full" />

          {/* Top center wide */}
          <Card
            inverted
            className="h-48 md:col-span-6 md:row-span-2 md:h-full"
          />

          {/* Top-right small */}
          <Card className="h-48 md:col-span-3 md:row-span-1 md:h-full" />

          {/* Mid-right small */}
          <Card className="h-48 md:col-start-10 md:col-end-13 md:block md:row-start-2 md:row-end-3 md:h-full" />

          {/* Bottom left wide */}
          <Card
            inverted
            direction="right"
            className="h-48  md:col-start-1 md:col-end-7 md:row-start-3 md:row-end-4 md:h-full"
          />

          {/* Bottom right wide */}
          <Card
            inverted
            direction="left"
            className="h-48 md:col-start-7 md:col-end-13 md:row-start-3 md:row-end-4 md:h-full"
          />

          {/* CENTRAL HUB (creates the inverted-radius illusion by sitting above the cards) */}
        </div>
      </div>
    </div>
  );
};

export default Story;
