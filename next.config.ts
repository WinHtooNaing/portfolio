import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "https://lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "https://avatars.githubusercontent.com/",
        protocol: "https",
        port: "",
      },
      {
        hostname: "cdn.sanity.io",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
