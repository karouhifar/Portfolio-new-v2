import { sameAs, siteConfig, siteUrl } from "@/lib/site";

/**
 * JSON-LD describing the site owner and the site itself. Rendered on the server
 * so crawlers see it in the initial HTML.
 */
export function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteConfig.name,
    url: siteUrl,
    image: `${siteUrl}/images/hero-profile.png`,
    jobTitle: siteConfig.jobTitle,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Microsoft Azure",
      "Databricks",
      "Cloud Architecture",
      "DevOps",
    ],
    sameAs,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en-CA",
    publisher: { "@id": `${siteUrl}/#person` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website],
  };

  return (
    <script
      type="application/ld+json"
      // Serialised server-side from static config — no user input reaches this.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
