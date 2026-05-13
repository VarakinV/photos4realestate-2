import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "photos4realestate.ca" },
      { protocol: "https", hostname: "cdn.photos4realestate.ca" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
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
      {
        source: "/favicon.ico",
        destination: "/logos/map-pin-1000.png",
        permanent: false,
      },
      {
        source: "/real-estate-photography-near-me",
        destination: "/services/real-estate-photography-in-calgary",
        permanent: true,
      },
      {
        source: "/hotel-photography",
        destination: "/services/hotel-photography",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
