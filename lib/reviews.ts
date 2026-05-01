// Real Google reviews for Photos 4 Real Estate. Update manually each month.
// This module is consumed by both the client-side Reviews carousel and the
// server-side JSON-LD builder in app/page.tsx, so keep it framework-agnostic
// (no "use client", no React imports).

export type Review = {
  name: string;
  avatar: string;
  date: string; // Human-readable "Month YYYY" (used in the UI).
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Denis Kirilenko",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocIWsueneAVqYd-ltoKgcgnXwYvkuY91sw_JfM_i4rtjoRBTbw=w80-h80-c-rp-mo-br100",
    date: "April 2026",
    rating: 5,
    text: "Excellent quality photos. Iryna is highly reliable and takes pride in her job. Highly recommend.",
  },
  {
    name: "Cliff Yee",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWCiZpr9up5Qqj49QECm4UFROtD34brI57BF8ARikDRZsWJN7U=w80-h80-c-rp-mo-ba3-br100",
    date: "March 2026",
    rating: 5,
    text: "Iryna and team do amazing work. They were punctual, professional and efficient when they arrived to measure and take photos of my home. The turn around time was amazing too as we got photos and RMS plans back after just one day! Iryna also responded immediately via email whenever I had questions. Highly recommend this company and will be referring all my friends, family and colleagues needing real estate media including professional photos, iGuide virtual 3D tours, RMS measurements, website, reels or fliers. Everything they delivered was excellent!",
  },
  {
    name: "Anh Ta",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLbaGI6Irwqutz7sV2aJdbaNb5pcEsKj-OcSVQUBg9by7wNJA=w80-h80-c-rp-mo-br100",
    date: "March 2026",
    rating: 5,
    text: "It was a pleasure working with Iryna and Vladimir at Photos 4 Real Estate. They were professional, easy to coordinate with, and the photos turned out beautifully. There\u2019s something about their photography that feels warm and inviting, which I really love. I look forward to working with them again.",
  },
  {
    name: "Heather Cleveland",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWJ_42tMShom-jrUvVZA3j2t_3r590oLqoKTfk8w3oYB2WO3_09HQ=w80-h80-c-rp-mo-ba2-br100",
    date: "November 2025",
    rating: 5,
    text: "I had the pleasure of working with Iryna at Photos 4 Real Estate. They were extremely helpful, great communication, and I appreciate the extra value they provide with reels and a property website.",
  },
  {
    name: "Lucas Czarnecki",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXGnv21C8gmBVqiJfAgGvAdl_Mvr18rHlDPGYip93UUasCCjLdr=w80-h80-c-rp-mo-ba2-br100",
    date: "November 2025",
    rating: 5,
    text: "Iryna and Vlad from Photos 4 Real Estate were exceptionally professional. We were delighted with their responsiveness, flexibility, and the quality of their work. The photos, RMS measurements, aerial photographs, floor plans, and the 3D virtual tour all exceeded our expectations. We would not hesitate to use their services again in the future.",
  },
  {
    name: "A K",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLCqban-db1L1rl8-BxsYcjnoTGoMb6yQzHCCuXwbHVTv2RpNyS=w80-h80-c-rp-mo-ba5-br100",
    date: "September 2025",
    rating: 5,
    text: "I\u2019ve worked with more than one real estate photographer in Calgary, and Photos 4 Real Estate has been the best by far. She took her time, captured beautiful shots, and really has an eye for showcasing a home. The photos turned out fantastic and made a huge difference. Highly recommend!",
  },
  {
    name: "Gary Brand",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjV7EnQBXoPA4yK6vHxL1y5IXAg-8NzZFoy6tvSmDHZSS9GLc5i9=w80-h80-c-rp-mo-br100",
    date: "August 2025",
    rating: 5,
    text: "Iryna and Vlad did an outstanding job \u2014 Iryna\u2019s attention to detail in setting up the photos was impressive, and Vlad\u2019s drone shots truly showcased the property beautifully.",
  },
  {
    name: "Kate T",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocIPQBABWkRjVWYgBpRY3CLwwNRDtypl_d4ooPNJsQDcDToYrg=w80-h80-c-rp-mo-br100",
    date: "July 2025",
    rating: 5,
    text: "I had a fantastic experience working with Iryna as real estate photographer! She delivered high-quality house photos and stunning drone shots that really made our listing stand out. Everything was done on time and with great professionalism. Communication was quick, clear, and always positive. Highly recommend her services!",
  },
  {
    name: "Antonio Guzman",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjV2gZSBtGbOE9lpQiX-xjrQ5Om2dHYSpdvp2aSN7qibm9ubHxUl=w80-h80-c-rp-mo-br100",
    date: "July 2025",
    rating: 5,
    text: "I want to give a big thank you to Vlad and Iryna for their outstanding work. The quality of the photos and videos they took of my home truly exceeded my expectations. Their attention to detail, creativity, and professionalism really stood out. They captured the space beautifully and brought out its best features in a way that feels both artistic and authentic. I couldn\u2019t be happier with the results \u2014 highly recommended!",
  },
];

// Overall Google Business profile stats. Keep in sync with Google whenever
// reviews are refreshed (the full count can exceed `reviews.length`).
export const REVIEW_COUNT = 14;
export const AVERAGE_RATING = 5.0;

export const GOOGLE_REVIEW_URL = "https://g.page/r/CfdYTRLO_KYdEBM/review";

// Schema.org expects ISO 8601 dates. The reviews carry "Month YYYY" strings
// for display; this helper lifts them to the first of the month in ISO form.
const MONTH_INDEX: Record<string, string> = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

export function toIsoDate(displayDate: string): string {
  const [month, year] = displayDate.split(" ");
  const m = MONTH_INDEX[month];
  if (!m || !year) return "";
  return `${year}-${m}-01`;
}
