/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ← THIS IS REQUIRED
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
