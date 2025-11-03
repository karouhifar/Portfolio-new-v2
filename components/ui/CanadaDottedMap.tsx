import DottedMap from "dotted-map";
import { useMemo } from "react";

export default function CanadaDottedMap() {
  // ISO-3 country code for Canada is 'CAN'
  const map = new DottedMap({
    height: 80, // tweak dot density
    countries: ["CAN"], // restrict to Canada
    grid: "diagonal", // looks nice with circles/hex
  });
  const torontoPoint = map.addPin({
    lat: 43.6532,
    lng: -79.3832,
  });

  const svg = map.getSVG({
    radius: 0.22, // base dot size
    color: "#94a3b8", // default dot color
    shape: "circle", // "circle" | "hexagon"
    backgroundColor: "transparent",
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const coordinate = useMemo(() => {
    const svgW = map.image.width;
    const svgH = map.image.height;
    const topPercent = (torontoPoint.y / svgH + 0.09) * 100;
    const leftPercent = (torontoPoint.x / svgW) * 100;
    return { topPercent, leftPercent };
  }, [map.image.width, map.image.height]);

  return (
    <div className="relative inline-block">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
        alt="Dotted map of Canada with city markers"
        className="w-full h-auto"
      />
      <div
        className="absolute -translate-x-1/2 -translate-y-full"
        style={{
          top: `${coordinate.topPercent}%`, // ⬅ adjust to line up with your red pin
          left: `${coordinate.leftPercent}%`, // ⬅ adjust to line up with your red pin
        }}
      >
        {/* little red dot + label */}
        <div className="flex flex-col items-center gap-2">
          <span className="block w-2 h-2 rounded-full bg-red-500 border border-white shadow" />
          <span className="text-[10px] leading-none px-2 py-1 rounded-3xl bg-white text-black shadow-md ring-1 ring-white/20">
            Toronto
          </span>
        </div>
      </div>
    </div>
  );
}
