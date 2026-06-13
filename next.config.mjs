import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/docs/resources",
        destination: "/docs/resources/overview",
        permanent: false,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
