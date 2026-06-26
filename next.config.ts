import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false, // Turned off for light development compilations and to prevent system hanging
};

export default nextConfig;
