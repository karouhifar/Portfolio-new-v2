import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d39oted90y97ty.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/emotion-js/emotion/main/emotion.png",
      },
      {
        protocol: "https",
        hostname: "v4.material-ui.com",
        port: "",
        pathname: "/static/logo.png",
      },
      {
        protocol: "https",
        hostname: "hackfest.ca",
        port: "",
        pathname: "/images/partenaires/aws.png",
      },
    ],
  },
};

export default nextConfig;
