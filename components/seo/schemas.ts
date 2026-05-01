import { siteConfig, serviceAreas } from "@/lib/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logos/map-pin-logo.svg`,
  image: `${siteConfig.url}/og/homepage.jpg`,
  description:
    "Professional real estate photography, videography, 3D virtual tours, drone photography, RMS measurements, virtual staging, and twilight photography serving Calgary and surrounding areas.",
  telephone: siteConfig.phoneE164,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  areaServed: [...serviceAreas],
  priceRange: "$$",
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { "@id": `${siteConfig.url}/#business` },
  inLanguage: "en-CA",
} as const;
