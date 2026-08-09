/**
 * Single source of truth for site-wide identity used by metadata,
 * structured data, the sitemap and robots.txt.
 */

const FALLBACK_URL = "https://kamyabrouhifar.ca";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel exposes the stable production domain at build and run time.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return FALLBACK_URL;
}

export const siteUrl = resolveSiteUrl();

export const siteConfig = {
  name: "Kamyab Rouhifar",
  shortName: "Kamyab Rouhifar",
  title: "Kamyab Rouhifar — Cloud & Full-Stack Developer",
  jobTitle: "Cloud & Full-Stack Application Developer",
  description:
    "Kamyab Rouhifar is a Cloud and Full-Stack Application Developer in Toronto, Canada, building fast, scalable web products with Next.js, TypeScript, AWS and Azure.",
  url: siteUrl,
  locale: "en_CA",
  email: "karouhifar@gmail.com",
  location: {
    city: "Toronto",
    region: "ON",
    country: "Canada",
  },
  /** Profiles used for `sameAs` structured data and the contact section. */
  socials: {
    linkedin: "https://www.linkedin.com/in/kamyab-rouhifar/",
    github: "https://github.com/karouhifar",
    medium: "https://medium.com/@karouhifar",
    x: "https://x.com/KRouhifar",
  },
  calendly: "https://calendly.com/karouhifar/interviewing-with-kamyab",
} as const;

export const sameAs = Object.values(siteConfig.socials);
