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
      {
        source: "/services/drone-photography-videography",
        destination: "/services/real-estate-aerial-drone-photography-in-calgary",
        permanent: true,
      },
      {
        source: "/social-media-real-estate-marketing-sell-listings-faster-in-calgary",
        destination: "/blog/social-media-marketing-for-real-estate-listings-calgary",
        permanent: true,
      },
      {
        source: "/why-use-professional-real-estate-photography",
        destination: "/blog/professional-real-estate-photography-calgary",
        permanent: true,
      },
      {
        source: "/calgary-real-estate-photos",
        destination: "/blog/calgary-real-estate-photography",
        permanent: true,
      },
      {
        source: "/professional-real-estate-photos-in-calgary-sell-homes-faster",
        destination: "/blog/professional-real-estate-photos-calgary-buyer-engagement",
        permanent: true,
      },
      {
        source: "/real-estate-photographer-calgary-guide",
        destination: "/blog/compare-real-estate-photography-services-calgary",
        permanent: true,
      },
      {
        source: "/beyond-the-lens-how-photos-4-real-estate-solves-realtors-toughest-marketing-challenges-in-2026",
        destination: "/blog/realtor-marketing-challenges-2026",
        permanent: true,
      },
      {
        source: "/drone-services-real-estate-calgary",
        destination: "/blog/real-estate-drone-photography-calgary",
        permanent: true,
      },
      {
        source: "/blog/drone-photography-real-estate-calgary",
        destination: "/blog/real-estate-drone-photography-calgary",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
