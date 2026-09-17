import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bolt-motorcycle",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
