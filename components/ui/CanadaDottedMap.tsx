"use client";

import DottedMap from "dotted-map";
import { useMemo } from "react";

export default function CanadaDottedMap() {
  // Building the map rasterises the country outline — do it once, not on every
  // parent re-render.
  const { src, coordinate } = useMemo(() => {
    // ISO-3 country code for Canada is 'CAN'
    const map = new DottedMap({
      height: 80, // tweak dot density
      countries: ["CAN"], // restrict to Canada
      grid: "diagonal", // looks nice with circles/hex
    });

    const torontoPoint = map.addPin({ lat: 43.6532, lng: -79.3832 });

    const svg = map.getSVG({
      radius: 0.22, // base dot size
      color: "#94a3b8", // default dot color
      shape: "circle", // "circle" | "hexagon"
      backgroundColor: "transparent",
    });

    return {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
      coordinate: {
        topPercent: (torontoPoint.y / map.image.height + 0.09) * 100,
        leftPercent: (torontoPoint.x / map.image.width) * 100,
      },
    };
  }, []);

  return (
    <div className="relative inline-block w-full">
      {/* Inline SVG data URI — next/image cannot optimise it, so a plain <img>
          is correct here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Dotted map of Canada marking Toronto"
        className="h-auto w-full"
      />
      <div
        className="absolute -translate-x-1/2 -translate-y-full"
        style={{
          top: `${coordinate.topPercent}%`,
          left: `${coordinate.leftPercent}%`,
        }}
      >
        {/* little red dot + label */}
        <div className="flex flex-col items-center gap-2">
          <span className="block h-2 w-2 rounded-full border border-white bg-red-500 shadow" />
          <span className="rounded-3xl bg-white px-2 py-1 text-[10px] leading-none text-black shadow-md ring-1 ring-white/20">
            Toronto
          </span>
        </div>
      </div>
    </div>
  );
}
