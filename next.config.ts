import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',    // Outputs static HTML/CSS/JS to the 'out' directory
  images: {
    unoptimized: true, // Disables the Node.js server-dependent image optimization
  },
};

export default nextConfig;
