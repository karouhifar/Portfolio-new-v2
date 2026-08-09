import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time by next/og so the social card always matches the
 * site's dark palette without shipping a hand-made static image.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #04041b 0%, #0b0d31 55%, #1d062e 100%)",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#cbacf9",
          }}
        >
          {siteConfig.location.city}, {siteConfig.location.country}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 40,
            color: "#bec1dd",
          }}
        >
          {siteConfig.jobTitle}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            height: 6,
            width: 220,
            borderRadius: 999,
            background: "linear-gradient(90deg, #6366f1, #cbacf9)",
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 28,
            color: "#8e8ab8",
          }}
        >
          Next.js · TypeScript · AWS · Azure
        </div>
      </div>
    ),
    size,
  );
}
