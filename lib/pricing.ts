export type PricingTier = {
  label: string;
  short: string;
  essential: number;
  skyline: number;
  social: number;
};

export const pricingTiers: ReadonlyArray<PricingTier> = [
  { label: "Up to 1,000 sq ft", short: "≤ 1,000", essential: 265, skyline: 365, social: 565 },
  { label: "1,001–1,500 sq ft", short: "1,001–1,500", essential: 285, skyline: 385, social: 585 },
  { label: "1,501–3,000 sq ft", short: "1,501–3,000", essential: 365, skyline: 465, social: 665 },
  { label: "3,001–4,000 sq ft", short: "3,001–4,000", essential: 425, skyline: 525, social: 695 },
  { label: "4,001–5,000 sq ft", short: "4,001–5,000", essential: 500, skyline: 600, social: 800 },
  { label: "5,001–6,000 sq ft", short: "5,001–6,000", essential: 575, skyline: 675, social: 875 },
];

export type ServicePricingTier = {
  label: string;
  price: number;
};

export const photosOnlyTiers: ReadonlyArray<ServicePricingTier> = [
  { label: "Up to 1,500 sq ft", price: 150 },
  { label: "1,501–3,000 sq ft", price: 200 },
  { label: "3,001–4,000 sq ft", price: 250 },
  { label: "4,001–5,000 sq ft", price: 300 },
  { label: "5,001–6,000 sq ft", price: 350 },
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
      "Photos + RMS Floor Plans + iGUIDE 3D Tour. Everything you need for a strong MLS listing.",
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
