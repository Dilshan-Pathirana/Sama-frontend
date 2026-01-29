import type { NextConfig } from "next";

const repo = 'Sama-frontend';
const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
