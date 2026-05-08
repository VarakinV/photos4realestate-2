import { createHash, createHmac } from "node:crypto";
import type { Faq } from "@/lib/faqs";

export type PortfolioImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  ratio?: "landscape" | "portrait" | "square" | "wide";
  featured?: boolean;
};

export type PortfolioCategory = {
  id: string;
  label: string;
  folder?: string;
  heading: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
  images: PortfolioImage[];
};

type CategoryDefinition = Omit<PortfolioCategory, "images">;

const uploads = "https://photos4realestate.ca/wp-content/uploads";
const portfolioCdnBase = "https://cdn.photos4realestate.ca";
const r2PortfolioRoot = "p4re-static-media/portfolio";

export const portfolioCategoryDefinitions: CategoryDefinition[] = [
  {
    id: "all",
    label: "All Work",
    heading: "All Real Estate Photography",
    description: "Our full Calgary portfolio — select a category above to browse by room type or service.",
    ctaHref: "/book-online",
    ctaLabel: "Book a Shoot",
  },
  {
    id: "living",
    label: "Living Rooms",
    folder: "living",
    heading: "Living Room Photography",
    description:
      "Interior living room photography using HDR techniques and wide-angle lenses — showing every space in its best light with balanced exposures, warm tones, and accurate proportions.",
    ctaHref: "/services/real-estate-photography-in-calgary",
    ctaLabel: "About Photography",
  },
  {
    id: "kitchen",
    label: "Kitchen/Dining",
    folder: "kitchen",
    heading: "Kitchen & Dining Photography",
    description:
      "Kitchens sell homes. We capture cabinetry, countertops, lighting, and layout detail buyers look for — with exposures balanced to show both interior and window light correctly.",
    ctaHref: "/services/real-estate-photography-in-calgary",
    ctaLabel: "About Photography",
  },
  {
    id: "bedrooms",
    label: "Bedrooms",
    folder: "bedrooms",
    heading: "Bedroom Photography",
    description:
      "Bedroom shots that convey calm, space, and comfort — showing buyers how the room would feel to live in, not just how it looks empty.",
    ctaHref: "/services/real-estate-photography-in-calgary",
    ctaLabel: "About Photography",
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    folder: "bathrooms",
    heading: "Bathroom Photography",
    description:
      "Bathrooms require precise lighting and composition to show tile, fixtures, and finishes accurately. We handle the challenge of small, reflective spaces every time.",
    ctaHref: "/services/real-estate-photography-in-calgary",
    ctaLabel: "About Photography",
  },
  {
    id: "amenities",
    label: "Amenities",
    folder: "amenities",
    heading: "Amenities & Detail Photography",
    description:
      "Home offices, gyms, garages, built-in features, and premium finishes — the details that justify the price and make a listing memorable to buyers.",
    ctaHref: "/services/real-estate-photography-in-calgary",
    ctaLabel: "About Photography",
  },
  {
    id: "exterior",
    label: "Exterior",
    folder: "exterior",
    heading: "Exterior & Curb Appeal Photography",
    description:
      "The first photo buyers see — front and rear exterior shots at the optimal time of day, with blue-sky replacement included on every exterior image.",
    ctaHref: "/services/real-estate-photography-in-calgary",
    ctaLabel: "About Photography",
  },
  {
    id: "drone",
    label: "Drone",
    folder: "drone",
    heading: "Drone Aerial Photography",
    description:
      "Transport Canada licensed aerial photography — showing lot size, neighbourhood context, lake proximity, and property surroundings from perspectives no ground camera can match.",
    ctaHref: "/services/real-estate-aerial-drone-photography-in-calgary",
    ctaLabel: "About Drone",
  },
  {
    id: "twilight",
    label: "Twilight",
    folder: "twilight",
    heading: "Twilight Photography",
    description:
      "Captured during blue hour just after sunset — warm interior light balanced against the deep Calgary evening sky for scroll-stopping listing images.",
    ctaHref: "/services/twilight-photography-for-real-estate-in-calgary",
    ctaLabel: "About Twilight",
  },
  {
    id: "staging",
    label: "Virtual Staging",
    folder: "staging",
    heading: "Virtual Staging",
    description:
      "Photorealistic furniture and decor added digitally to vacant rooms — helping buyers emotionally connect with empty properties before they book a showing.",
    ctaHref: "/services/virtual-staging",
    ctaLabel: "About Virtual Staging",
  },
];

const fallbackImages: Record<string, PortfolioImage[]> = {
  living: [
    img("living-fireplace", `${uploads}/2025/05/Living-Room-with-a-Fireplace-Photos-4-Real-Estate.webp`, "Living room with fireplace real estate photography in Calgary", "Living Room · Fireplace Feature", "wide", true),
    img("living-open", `${uploads}/2024/05/L-12-1024x682.webp`, "Open plan living area real estate photography in Calgary", "Open Living · Calgary", "portrait"),
    img("living-staged", `${uploads}/2023/07/virtual-staging-after-image-850.webp`, "Virtually staged living room for Calgary real estate listing", "Virtually Staged Living", "portrait"),
    img("living-modern", `${uploads}/2024/05/virtually-stageg-living-room-1-850.webp`, "Modern virtually staged living room in Calgary", "Virtual Staging · Modern Style", "wide"),
  ],
  kitchen: [
    img("kitchen-modern", `${uploads}/2025/05/Modern-Kitchen-Photos-4-Real-Estate.webp`, "Modern kitchen real estate photography in Calgary", "Modern Kitchen · Calgary", "wide", true),
    img("kitchen-staged", `${uploads}/2024/05/virtually-stageg-kitchen-1-850.webp`, "Virtually staged kitchen for Calgary real estate", "Virtual Staging · Kitchen", "portrait"),
    img("kitchen-before", `${uploads}/2024/05/kitchen-1-850.webp`, "Empty kitchen before virtual staging in Calgary", "Kitchen · Before Staging", "portrait"),
  ],
  bedrooms: [
    img("bed-master", `${uploads}/2025/05/Bedroom-Photos-4-Real-Estate.webp`, "Primary bedroom real estate photography in Calgary", "Master Bedroom · Calgary", "wide", true),
    img("bed-staged", `${uploads}/2024/05/virtually-stageg-bedroom-1-850.webp`, "Virtually staged bedroom Scandinavian style in Calgary", "Virtual Staging · Bedroom", "portrait"),
    img("bed-before", `${uploads}/2024/05/bedroom-1-850.webp`, "Empty bedroom before virtual staging in Calgary", "Bedroom · Before Staging", "portrait"),
  ],
  bathrooms: [
    img("bath-ensuite", "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Photo-of-a-bathroom-in-a-Calgary-house.webp", "Bathroom real estate photography in a Calgary home", "Bathroom · Calgary Home", "wide", true),
    img("bath-rms", "https://cdn.photos4realestate.ca/p4re-static-media/rms-and-floor-plans-service-page/Photo-of-a-Bathroom-Photos-4-Real-Estate-06.webp", "Ensuite bathroom photography for Calgary MLS listing", "Ensuite · Calgary", "landscape"),
  ],
  amenities: [
    img("amenity-office", "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Dinnnig-and-Living-Room-by-Photos-4-Real-Estate.webp", "Amenity and detail photography for a Calgary real estate listing", "Amenities · Feature Space", "wide", true),
    img("amenity-pool-after", `${uploads}/2023/07/pool-after-850.webp`, "Pool photo enhancement after image for Calgary real estate", "Pool Enhancement · After", "landscape"),
    img("amenity-pool-before", `${uploads}/2023/07/pool-before-850.webp`, "Pool before photo enhancement for Calgary real estate", "Pool · Before Enhancement", "landscape"),
  ],
  exterior: [
    img("exterior-front", `${uploads}/2025/05/House-Exterior-Photo-by-Photos-4-Real-Estate-1024x682.webp`, "Front exterior real estate photography in Calgary", "Front Exterior · Calgary", "wide", true),
    img("exterior-sky", `${uploads}/2023/07/pool-after-850.webp`, "Exterior photo with blue sky replacement in Calgary", "Sky Replacement · After", "landscape"),
  ],
  drone: [
    img("drone-downtown", `${uploads}/2025/08/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp`, "Aerial drone view of downtown Calgary real estate", "Downtown Calgary · Aerial", "wide", true),
    img("drone-mahogany", `${uploads}/2025/05/Drone-Photo-Mahogany-Photos-4-Real-Estate-1024x576.webp`, "Mahogany lake community aerial drone photography in Calgary", "Mahogany Lake · Aerial", "portrait"),
    img("drone-sundance", `${uploads}/2025/08/Drone-Photo-property-close-to-Sundance-Lake-Calgary-1024x768.webp`, "Sundance Lake Calgary property aerial drone shot", "Sundance Lake · Aerial", "portrait"),
    img("drone-duplex", "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Drone-Photo-Acreges-Near-Calgary.webp", "Acreage property aerial drone photography near Calgary", "Acreage · Aerial View", "wide"),
  ],
  twilight: [
    img("twilight-auburn", `${uploads}/2025/05/Twilight-Photo-Home-in-Auburn-Bay-Photos-4-Real-Estate.webp`, "Twilight photography of a home in Auburn Bay Calgary", "Auburn Bay · Twilight", "wide", true),
    img("twilight-calgary", "https://cdn.photos4realestate.ca/p4re-static-media/twilight-photography-service-page/Real-Twilight-Photo-of-a-house-with-two-garages-Photos-4-Real-Estate.webp", "Calgary home exterior photographed at twilight", "Calgary Exterior · Twilight", "landscape"),
  ],
  staging: [
    img("staging-living-before", `${uploads}/2024/05/living-room-1-850.webp`, "Empty living room before virtual staging in Calgary", "Living Room · Before", "landscape", true),
    img("staging-living-after", `${uploads}/2024/05/virtually-stageg-living-room-1-850.webp`, "Virtually staged living room after image in Calgary", "Living Room · After", "landscape"),
    img("staging-bedroom-before", `${uploads}/2024/05/bedroom-1-850.webp`, "Empty bedroom before virtual staging in Calgary", "Bedroom · Before", "landscape"),
    img("staging-bedroom-after", `${uploads}/2024/05/virtually-stageg-bedroom-1-850.webp`, "Virtually staged bedroom after image in Calgary", "Bedroom · After", "landscape"),
  ],
};

function img(id: string, src: string, alt: string, caption: string, ratio: PortfolioImage["ratio"] = "landscape", featured = false): PortfolioImage {
  return { id, src, alt, caption, ratio, featured };
}

export const portfolioFaqs: Faq[] = [
  { q: "Can I browse the portfolio by room type or service?", a: "Yes. Use the portfolio tabs to view all work or filter by living rooms, kitchens, bedrooms, bathrooms, amenities, exterior, drone, twilight, and virtual staging." },
  { q: "Are these portfolio examples from Calgary listings?", a: "Yes. The portfolio represents the style of real estate photography and media Photos 4 Real Estate provides for Calgary and surrounding areas." },
  { q: "Can I request a similar style for my listing?", a: "Absolutely. When booking online, add any style notes or examples you like. We will use them to guide the shot list, composition, and service mix for your property." },
  { q: "Do you provide all portfolio services in one visit?", a: "Yes. Photos, iGUIDE 3D tours, RMS measurements, drone, video, twilight, and marketing kit assets can be completed in one coordinated visit when access and weather allow." },
  { q: "How quickly are portfolio-quality photos delivered?", a: "Standard delivery is next day for real estate photography and most media assets. Virtual staging is typically delivered within 24 to 48 hours depending on image count and style." },
  { q: "Can drone or twilight photos be added to any package?", a: "Drone and twilight can be added to most Calgary real estate photography bookings. Drone flights depend on weather and airspace, while twilight timing depends on sunset and property readiness." },
  { q: "Can you photograph vacant homes and make them look furnished?", a: "Yes. We photograph the vacant room first, then create photorealistic virtual staging so buyers can understand scale, layout, and lifestyle potential." },
  { q: "Do I receive marketing rights to use the photos?", a: "Yes. You receive listing marketing usage for MLS, social media, property websites, flyers, slideshows, and related promotional materials for the property." },
];

export async function getPortfolioCategories(): Promise<PortfolioCategory[]> {
  const categories = await Promise.all(
    portfolioCategoryDefinitions.filter((category) => category.id !== "all").map(async (category) => ({
      ...category,
      images: (await listR2CategoryImages(category)) ?? fallbackImages[category.id] ?? [],
    }))
  );
  const allImages = categories.flatMap((category) => category.images.slice(0, 5));
  const allDefinition = portfolioCategoryDefinitions[0];
  return [{ ...allDefinition, images: allImages }, ...categories];
}

async function listR2CategoryImages(category: CategoryDefinition): Promise<PortfolioImage[] | null> {
  if (!category.folder || !isR2Configured()) return null;
  const prefix = `${r2PortfolioRoot}/${category.folder}/`;
  const response = await signedR2Fetch("GET", `/${env("R2_BUCKET_NAME")}`, { "list-type": "2", prefix, "max-keys": "80" });
  if (!response.ok) return null;
  const xml = await response.text();
  const keys = [...xml.matchAll(/<Contents>[\s\S]*?<Key>([\s\S]*?)<\/Key>[\s\S]*?<\/Contents>/g)]
    .map((match) => decodeXml(match[1]))
    .filter((key) => /\.(avif|gif|jpe?g|png|webp)$/i.test(key))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  if (keys.length === 0) return null;
  return keys.map((key, index) => ({
    id: `${category.id}-${index}-${key}`,
    src: `${portfolioCdnBase}/${encodeKeyPath(key)}`,
    alt: `${category.heading} example by Photos 4 Real Estate in Calgary`,
    caption: titleFromKey(key),
    ratio: index % 5 === 0 ? "wide" : index % 3 === 0 ? "portrait" : "landscape",
    featured: index === 0,
  }));
}

export function isR2Configured() {
  return ["R2_ACCOUNT_ID", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY", "R2_BUCKET_NAME", "R2_S3_ENDPOINT"].every((key) => Boolean(process.env[key]));
}

export async function fetchR2Object(key: string) {
  if (!isR2Configured()) return null;
  return signedR2Fetch("GET", `/${env("R2_BUCKET_NAME")}/${encodeKeyPath(key)}`);
}

async function signedR2Fetch(method: "GET", canonicalPath: string, query: Record<string, string> = {}) {
  const endpoint = env("R2_S3_ENDPOINT").replace(/\/$/, "");
  const url = new URL(`${endpoint}${canonicalPath}`);
  for (const [key, value] of Object.entries(query)) url.searchParams.set(key, value);

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
  const dateStamp = amzDate.slice(0, 8);
  const payloadHash = sha256Hex("");
  const credentialScope = `${dateStamp}/auto/s3/aws4_request`;
  const canonicalQuery = [...url.searchParams.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${encodeRfc3986(key)}=${encodeRfc3986(value)}`)
    .join("&");
  const canonicalHeaders = `host:${url.host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
  const signedHeaders = "host;x-amz-content-sha256;x-amz-date";
  const canonicalRequest = [method, canonicalPath, canonicalQuery, canonicalHeaders, signedHeaders, payloadHash].join("\n");
  const stringToSign = ["AWS4-HMAC-SHA256", amzDate, credentialScope, sha256Hex(canonicalRequest)].join("\n");
  const signature = hmacHex(getSigningKey(dateStamp), stringToSign);

  return fetch(url, {
    method,
    headers: {
      Authorization: `AWS4-HMAC-SHA256 Credential=${env("R2_ACCESS_KEY_ID")}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amzDate,
    },
    next: { revalidate: 3600 },
  });
}

function getSigningKey(dateStamp: string) {
  const kDate = hmac(`AWS4${env("R2_SECRET_ACCESS_KEY")}`, dateStamp);
  const kRegion = hmac(kDate, "auto");
  const kService = hmac(kRegion, "s3");
  return hmac(kService, "aws4_request");
}

function env(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is required for R2 portfolio access`);
  return value;
}

function sha256Hex(value: string) { return createHash("sha256").update(value).digest("hex"); }
function hmac(key: string | Buffer, value: string) { return createHmac("sha256", key).update(value).digest(); }
function hmacHex(key: Buffer, value: string) { return createHmac("sha256", key).update(value).digest("hex"); }
function encodeRfc3986(value: string) { return encodeURIComponent(value).replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`); }
function encodeKeyPath(key: string) { return key.split("/").map(encodeRfc3986).join("/"); }
function decodeXml(value: string) { return value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'"); }
function titleFromKey(key: string) {
  return decodeURIComponent(key.split("/").pop() ?? key).replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}