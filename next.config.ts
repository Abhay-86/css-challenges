import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use export output for production build
  ...(process.env.NODE_ENV === 'production' && {
    output: "export",
    basePath: "/css-challenges",
    assetPrefix: "/css-challenges/",
  }),

  images: {
    unoptimized: true,
  },

  // Turbopack configuration (empty config to silence warning)
  turbopack: {},

  // Optimize development performance only for webpack (not Turbopack)
  webpack: (config, { dev, webpack }) => {
    if (dev) {
      // Only apply webpack optimizations when not using Turbopack
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
      
      // Enable webpack's built-in optimizations
      config.optimization.usedExports = false;
      config.optimization.sideEffects = false;
    }
    return config;
  },
};

export default nextConfig;
