import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zorryxGameHub",
  assetPrefix: "/zorryxGameHub/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
