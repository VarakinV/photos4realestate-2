import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "photos4realestate.ca" },
      { protocol: "https", hostname: "cdn.photos4realestate.ca" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/book-online",
        destination:
          "https://app.photos4realestate.ca/book/cmfwsiyl30000jo04z3lcndl3",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
