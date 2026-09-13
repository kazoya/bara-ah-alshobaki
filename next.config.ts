import type { NextConfig } from "next";
import { defaultLocale } from "./app/site-config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { globalNotFound: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [{ source: "/", destination: `/${defaultLocale}`, permanent: false }];
  },
};

export default nextConfig;
