import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * The portfolio is a single indexable page; the sections below are in-page
 * anchors, not routes, so they are deliberately not listed as separate URLs.
 * `/api/*` is excluded here and disallowed in robots.ts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
