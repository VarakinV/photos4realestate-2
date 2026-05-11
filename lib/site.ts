export const siteConfig = {
  name: "Photos 4 Real Estate",
  shortName: "Photos4RealEstate",
  tagline: "Elevate Your Real Estate Listings",
  url: "https://photos4realestate.ca",
  description:
    "Professional real estate photography, videography, drone, 3D virtual tours & RMS floor plans in Calgary, AB. Next-day delivery. Book online today.",
  phone: "(825) 449-5001",
  phoneHref: "tel:+18254495001",
  phoneE164: "+1-825-449-5001",
  email: "info@photos4realestate.ca",
  emailHref: "mailto:info@photos4realestate.ca",
  address: {
    locality: "Calgary",
    region: "AB",
    country: "CA",
  },
  bookingUrl: "https://app.photos4realestate.ca/book/cmfwsiyl30000jo04z3lcndl3",
  social: {
    instagram: "https://www.instagram.com/photos4re/",
    facebook: "https://www.facebook.com/photos4re",
  },
  mapUrl: "https://maps.app.goo.gl/tsYjPfGMxCZGpHiY7",
} as const;

export const primaryNav = [
  { href: "/prices", label: "Prices" },
  { href: "/services", label: "Services" },
  { href: "/free-tools", label: "Free Tools" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact" },
] as const;

export const freeTools = [
  {
    href: "/free-tools/reel-generator",
    name: "Social Media Reel Generator",
  },
  {
    href: "/free-tools/slideshow-generator",
    name: "Slideshow Generator",
  },
  {
    href: "/free-tools/flyer-generator",
    name: "Property Flyer Generator",
  },
  {
    href: "/free-tools/qr-code-generator",
    name: "QR Code Generator",
  },
] as const;

export const services = [
  {
    slug: "real-estate-photography-in-calgary",
    name: "Real Estate Photography",
    schemaName: "Real Estate Photography",
  },
  {
    slug: "real-estate-videos-in-calgary",
    name: "Real Estate Videography",
    schemaName: "Real Estate Videography",
  },
  {
    slug: "rms-measurements-and-floor-plans-in-calgary",
    name: "RMS Measurements & Floor Plans",
    schemaName: "RMS Measurements and Floor Plans",
  },
  {
    slug: "iguide-virtual-tours-in-calgary",
    name: "iGUIDE 3D Virtual Tours",
    schemaName: "3D Virtual Tours (iGUIDE)",
  },
  {
    slug: "real-estate-aerial-drone-photography-in-calgary",
    name: "Drone Photography & Videography",
    schemaName: "Drone Photography & Videography",
  },
  { slug: "virtual-staging", name: "Virtual Staging", schemaName: "Virtual Staging" },
  {
    slug: "twilight-photography-for-real-estate-in-calgary",
    name: "Twilight Photography",
    schemaName: "Twilight Photography",
  },
  {
    slug: "style-shots",
    name: "Style Shots",
    schemaName: "Signature Detail Shots",
  },
  {
    slug: "marketing-kit-for-realtors",
    name: "Marketing Kit for Realtors",
    schemaName: "Marketing Kit for Realtors",
  },
] as const;

export const serviceAreas = [
  "Calgary",
  "Okotoks",
  "Airdrie",
  "Cochrane",
  "Chestermere",
  "High River",
  "Springbank",
  "Bearspaw",
  "Rocky View County",
  "Banff",
] as const;
