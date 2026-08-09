import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400", // only weight available
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start", // optional, for CSS-var usage
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.socials.linkedin }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Kamyab Rouhifar",
    "Full-Stack Developer",
    "Cloud Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "AWS",
    "Azure",
    "Toronto Developer",
    "Portfolio",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@KRouhifar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/images/favicon/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      { url: "/images/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // The site is dark-only; tell the browser so native UI matches.
  colorScheme: "dark",
  themeColor: "#04041b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `dark` is what the `dark:` variant keys off (see app/globals.css) so the
    // OS light-mode preference can never flip this dark-only design.
    <html lang="en" className="dark">
      <head>
        {/* Calendly popup widget, opened from ScheduleButton */}
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
