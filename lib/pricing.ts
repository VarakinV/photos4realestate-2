export type PricingTier = {
  label: string;
  short: string;
  essential: number;
  skyline: number;
  social: number;
};

export const pricingTiers: ReadonlyArray<PricingTier> = [
  { label: "Up to 1,000 sq ft", short: "≤ 1,000", essential: 245, skyline: 345, social: 485 },
  { label: "1,001–1,500 sq ft", short: "1,001–1,500", essential: 265, skyline: 365, social: 515 },
  { label: "1,501–3,000 sq ft", short: "1,501–3,000", essential: 345, skyline: 445, social: 605 },
  { label: "3,001–4,000 sq ft", short: "3,001–4,000", essential: 395, skyline: 495, social: 665 },
  { label: "4,001–5,000 sq ft", short: "4,001–5,000", essential: 475, skyline: 575, social: 755 },
  { label: "5,001–6,000 sq ft", short: "5,001–6,000", essential: 545, skyline: 645, social: 845 },
];

export type PricingPackage = {
  id: "essential" | "skyline" | "social";
  name: string;
  tagline: string;
  bookCta: string;
  ctaVariant: "primary" | "ghost";
  featured?: boolean;
};

export const pricingPackages: ReadonlyArray<PricingPackage> = [
  {
    id: "essential",
    name: "Essential",
    tagline:
      "Photos + iGUIDE 3D Tour + RMS Floor Plans. Everything you need for a strong MLS listing.",
    bookCta: "Book Essential",
    ctaVariant: "ghost",
  },
  {
    id: "skyline",
    name: "Skyline",
    tagline:
      "Everything in Essential + Drone Photos. Aerial perspective that makes listings stand out.",
    bookCta: "Book Skyline",
    ctaVariant: "primary",
    featured: true,
  },
  {
    id: "social",
    name: "Social Boost",
    tagline:
      "Everything in Skyline + a 60-90 sec social media reel with drone video. Maximum online impact.",
    bookCta: "Book Social Boost",
    ctaVariant: "ghost",
  },
];
