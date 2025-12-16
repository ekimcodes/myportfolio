import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/myportfolio', // Required for GitHub Pages project site
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
