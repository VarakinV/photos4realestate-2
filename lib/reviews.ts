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
    name: "Saphir Binti",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUu0ktXDdLF3L36mSwzD-pKcxUjgJE7we73TrFu65Scf3u_4NA=s36-c-rp-mo-br100",
    date: "June 2026",
    rating: 5,
    text: "I had an amazing experience working with Iryna and her team for my listing. The service exceeded my expectations from start to finish. They provided professional photography, measurements, and a virtual tour, all delivered with great attention to detail and quality. What truly stood out was that Iryna went above and beyond by creating social media reels for my listing at no additional cost. This was an unexpected bonus that added tremendous value and helped showcase the property in a modern and engaging way. Her professionalism, responsiveness, and commitment to delivering exceptional results made the entire process smooth and stress-free. I highly recommend Iryna’s business to any realtor or homeowner looking for top-quality listing media and marketing services. Thank you, Iryna, for your outstanding work! 👏🏽🏡✨",
  },
  {
    name: "VirtualDeskYYC",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUhwuB5yAN5P6BSJZVB1vvAt0gGzeT0KKAQRLSxcGznMYrhfHL9=s36-c-rp-mo-br100",
    date: "June 2026",
    rating: 5,
    text: "I've worked with Irina multiple times, and she consistently delivers exceptional results. She is professional, reliable, and always provides a very quick turnaround time, which I really appreciate. Her photography beautifully showcases each property and helps every listing stand out. She’s a pleasure to work with, and I’ll definitely continue working with her in the future. Highly recommend! - On behalf of Gary Mr. Action Fayerman",
  },
  {
    name: "Rui Torneiro",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLsxsZpTWRWIKL_nu4JRukF3SgEMS0s6FuBD-2LzHxMAwp6sA=s36-c-rp-mo-br100",
    date: "June 2026",
    rating: 5,
    text: "I have used Photos 4 Real Estate for my last few listing and they were very proficient and reliable. Iryna was very professional and invested in made sure to get some great pictures of the home.I would highly recommend using Photos 4 Real Estate!!",
  },
  {
    name: "Al Hamza",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUkdTWLxaXgAv2MKmCsNeULKph96YMst-yPPBg3VnwLo5Y5J9g=s36-c-rp-mo-br100",
    date: "May 2026",
    rating: 5,
    text: "amazing service, super affordable rates, and perfect quality of imagery, They go above and beyond.",
  },
  {
    name: "Christopher Ramage",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXTMYJJeZ1c65cJBL-B1fvv-QlhapbUsgZnNwo0j5V1NvcK35RrKw=s36-c-rp-mo-br100",
    date: "May 2026",
    rating: 5,
    text: "Great photos and experience overall. Would highly recommend!",
  },
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
export const REVIEW_COUNT = 19;
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
