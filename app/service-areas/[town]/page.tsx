import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Box,
  Building2,
  Camera,
  Car,
  Check,
  Clock,
  Drone,
  House,
  Images,
  MapPin,
  Megaphone,
  Moon,
  Ruler,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Reviews } from "@/components/home/Reviews";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import type { Faq as FaqItem } from "@/lib/faqs";
import { siteConfig } from "@/lib/site";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";

export const dynamic = "force-static";
export const dynamicParams = false;

type ServiceCard = {
  title: string;
  href: string;
  icon: typeof Camera;
  copy: string;
};

type ReasonCard = {
  title: string;
  icon: typeof Camera;
  copy: string;
};

type TravelCard = {
  variant: "free" | "flat" | "km";
  area: string;
  price: string;
  icon: typeof MapPin;
};

type TownPage = {
  city: string;
  province: string;
  placeType?: "City" | "AdministrativeArea";
  seoTitle: string;
  seoDescription: string;
  ogAlt: string;
  heroEyebrow: string;
  heroIntro: string;
  introHeading: string;
  introLead: string;
  introParagraphs: [string, string];
  introStats: [string, string, string];
  communities: readonly string[];
  propertyTypes: readonly string[];
  localMarketTitle: string;
  localMarketParagraph: string;
  localMarketParagraphTwo: string;
  servicesHeading: string;
  servicesIntro: string;
  reasonsHeading: string;
  reasonsIntro: string;
  whyChoose: readonly ReasonCard[];
  services: readonly ServiceCard[];
  travelCards: readonly TravelCard[];
  travelIntro: string;
  travelNote: string;
  travelOfferDescription?: string;
  faqs: readonly FaqItem[];
  images: {
    hero: string;
    interior: string;
    drone: string;
  };
  imageAlts: {
    hero: string;
    interior: string;
    drone: string;
  };
};

const townPages = {
  airdrie: {
    city: "Airdrie",
    province: "AB",
    seoTitle: "Real Estate Photography Airdrie | Photos 4 Real Estate",
    seoDescription:
      "Real estate photography in Airdrie with photos, drone, video, RMS floor plans, and 3D tours. Fast turnaround from a Calgary-based team. Book online today.",
    ogAlt: "Real estate photography in Airdrie by Photos 4 Real Estate",
    heroEyebrow: "Airdrie Real Estate Media • Calgary-Based Team",
    heroIntro:
      "Looking for professional real estate photography in Airdrie? Photos 4 Real Estate helps realtors and homeowners market Airdrie properties with bright MLS-ready photos, drone imagery, video tours, RMS measurements, floor plans, and fast next-day delivery.",
    introHeading: "Professional real estate photography for Airdrie listings",
    introLead:
      "Airdrie is one of the most active satellite markets north of Calgary, and listings here often compete on layout, family appeal, curb presence, and value. From modern condos near downtown Airdrie to detached homes in Cooper’s Crossing and canal-side properties in Bayside, strong visuals make a measurable difference.",
    introParagraphs: [
      "At Photos 4 Real Estate, we regularly travel from Calgary to Airdrie to create polished listing media for condos, townhomes, duplexes, single-family homes, and acreages. Our goal is simple: make every listing feel bright, spacious, and easy to understand online before buyers ever step through the door.",
      "Airdrie homes often feature open-concept main floors, attached garages, larger family kitchens, finished basements, and backyard spaces that buyers want to compare quickly online. We photograph those features clearly, and when the property benefits from neighbourhood context — like a canal, green space, corner lot, or edge-of-city setting — drone coverage helps tell the full story.",
    ],
    introStats: ["7 popular communities", "24h next-morning turnaround", "9 services in one visit"],
    communities: [
      "Bayside",
      "Kings Heights",
      "Cooper’s Crossing",
      "Luxstone",
      "Windsong",
      "Hillcrest",
      "Reunion",
    ],
    propertyTypes: [
      "Downtown and central Airdrie condos",
      "Townhomes, duplexes, and starter homes",
      "Move-up family homes with finished basements",
      "Canal-side and premium community listings",
      "Edge-of-city acreages and larger lots",
    ],
    localMarketTitle: "Popular Airdrie communities we serve",
    localMarketParagraph:
      "We cover all of Airdrie, including Bayside, Kings Heights, Cooper’s Crossing, Luxstone, Windsong, Hillcrest, and Reunion. Whether the listing is a first-home condo, a family property in a newer subdivision, or a larger home on the edge of the city, we provide the same consistent quality and attention to detail.",
    localMarketParagraphTwo:
      "Because many Airdrie buyers compare homes online before deciding whether to drive in for a showing, clear photography, accurate floor plans, and location context matter. We tailor the media package to the property, not just the square footage, so the listing feels stronger in MLS, on realtor websites, and across social media.",
    servicesHeading: "Our Airdrie real estate photography services",
    servicesIntro:
      "We provide a full range of listing media tailored to the Airdrie market, with each service linking back to the relevant Calgary service page for details, examples, and deliverables.",
    reasonsHeading: "Why Airdrie realtors and homeowners choose Photos 4 Real Estate",
    reasonsIntro:
      "Airdrie listings move quickly when the presentation is strong. Our Calgary-based team regularly works in Airdrie and delivers media that is reliable, polished, and easy to launch.",
    whyChoose: [
      {
        title: "Regular Airdrie coverage",
        icon: MapPin,
        copy: "We are based in Calgary and regularly schedule shoots in Airdrie, so the process is familiar, efficient, and easy to coordinate.",
      },
      {
        title: "Fast turnaround",
        icon: Clock,
        copy: "Most Airdrie listing media is delivered the next morning, helping agents get their listing live quickly without waiting days for files.",
      },
      {
        title: "All property types",
        icon: House,
        copy: "We work with condos, townhomes, duplexes, detached homes, and acreages — and adapt the shot list to the property and neighbourhood.",
      },
      {
        title: "MLS-ready and compliant",
        icon: ShieldCheck,
        copy: "Photos, floor plans, tours, and marketing assets are prepared for real-world listing use, with RMS measurement options ready to share.",
      },
    ],
    services: [
      {
        title: "Real Estate Photography",
        href: "/services/real-estate-photography-in-calgary",
        icon: Camera,
        copy: "Bright, MLS-ready photos that showcase each room’s best features and help Airdrie listings look polished online.",
      },
      {
        title: "RMS Measurements & Floor Plans",
        href: "/services/rms-measurements-and-floor-plans-in-calgary",
        icon: Ruler,
        copy: "Accurate RMS measurements and floor plans for listings that need clean, compliant square-footage support.",
      },
      {
        title: "Drone Photography",
        href: "/services/real-estate-aerial-drone-photography-in-calgary",
        icon: Drone,
        copy: "Aerial coverage for canal-side homes, larger lots, acreages, corner properties, and neighbourhood context.",
      },
      {
        title: "Real Estate Videography",
        href: "/services/real-estate-videos-in-calgary",
        icon: Video,
        copy: "Smooth walkthrough videos and cinematic listing media for websites, YouTube, Instagram, and Facebook.",
      },
      {
        title: "iGUIDE 3D Virtual Tours",
        href: "/services/iguide-virtual-tours-in-calgary",
        icon: Box,
        copy: "Interactive 3D tours that let buyers explore an Airdrie property online before booking a showing.",
      },
      {
        title: "Virtual Staging",
        href: "/services/virtual-staging",
        icon: Sparkles,
        copy: "Transform vacant rooms into furnished, buyer-friendly visuals without the cost of physical staging.",
      },
      {
        title: "Twilight Photography",
        href: "/services/twilight-photography-for-real-estate-in-calgary",
        icon: Moon,
        copy: "Eye-catching evening exteriors that help premium homes and standout listings grab more attention on MLS.",
      },
      {
        title: "Style Shots",
        href: "/services/style-shots",
        icon: Images,
        copy: "Magazine-style detail photos that highlight finishes, staging, fixtures, and lifestyle details in standout Airdrie listings.",
      },
      {
        title: "Marketing Kit",
        href: "/services/marketing-kit-for-realtors",
        icon: Megaphone,
        copy: "Social media graphics, flyers, reels, and branded listing assets that help promote Airdrie properties faster.",
      },
    ],
    travelCards: [
      {
        variant: "free",
        icon: MapPin,
        area: "Within 35 km of Calgary City Centre",
        price: "Free",
      },
      {
        variant: "flat",
        icon: Building2,
        area: "Chestermere, Airdrie, Okotoks, High River, Cochrane, Langdon",
        price: "$30 flat fee",
      },
      {
        variant: "km",
        icon: Car,
        area: "Beyond 35 km from Calgary City Centre",
        price: "$0.85 / km",
      },
    ],
    travelIntro:
      "Airdrie falls under our nearby-community travel pricing, which makes quotes easy for agents and sellers before the appointment is booked.",
    travelNote:
      "Travel within 35 km of Calgary City Centre is free. Airdrie bookings are covered by our published $30 flat-fee nearby-community rate, and properties beyond that radius use distance-based travel pricing. You can review full details on our pricing page or confirm the fee with us before you book.",
    faqs: [
      {
        q: "Do you travel to Airdrie for real estate photography?",
        a: "Yes. Photos 4 Real Estate is based in Calgary and regularly travels to Airdrie for photography, drone imagery, video tours, RMS measurements, floor plans, virtual tours, and virtual staging.",
      },
      {
        q: "What is the travel fee for Airdrie?",
        a: "Airdrie is covered by our nearby-community travel pricing, which is currently a <strong>$30 flat fee</strong>. Full pricing details are available on our <a href=\"/prices\">pricing page</a>, and we can always confirm the exact fee before your booking is finalized.",
      },
      {
        q: "What types of properties do you photograph in Airdrie?",
        a: "We photograph condos, townhomes, duplexes, detached family homes, estate properties, and acreages in and around Airdrie. We adapt the media package to the property type, community, and marketing goals.",
      },
      {
        q: "Can you do photos, floor plans, drone, and video in one visit?",
        a: "Yes. In most cases we can complete photography, RMS measurements, floor plans, iGUIDE 3D tours, drone, and video during one property visit, which keeps scheduling simple for agents, sellers, and tenants.",
      },
      {
        q: "How fast do you deliver Airdrie listing media?",
        a: "Most photography, floor plans, and 3D tour deliverables are sent the next morning. Video turnaround can vary slightly depending on the package and editing scope, but we keep the process fast and predictable.",
      },
      {
        q: "Which Airdrie communities do you serve?",
        a: "We cover all of Airdrie, including Bayside, Kings Heights, Cooper’s Crossing, Luxstone, Windsong, Hillcrest, Reunion, and surrounding neighbourhoods. If your listing is on the edge of Airdrie or on a nearby acreage, just send us the address and we will confirm coverage.",
      },
    ],
    images: {
      hero: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/airdrie/Service-Areas-Airdrie.webp",
      interior:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/airdrie/House-in-Airdrie-1-1024x683.webp",
      drone:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/airdrie/Drone-View-Airdrie-1024x768.webp",
    },
    imageAlts: {
      hero: "Exterior real estate photo of a home in Airdrie by Photos 4 Real Estate",
      interior:
        "Bright interior real estate photo of an Airdrie home showing an open living space",
      drone:
        "Drone view of an Airdrie home and surrounding neighbourhood captured for a real estate listing",
    },
  },
  okotoks: {
    city: "Okotoks",
    province: "AB",
    seoTitle: "Real Estate Photography Okotoks | Photos 4 Real Estate",
    seoDescription:
      "Real estate photography in Okotoks with photos, drone, video, RMS floor plans, and 3D tours. Fast turnaround for Foothills listings. Book online.",
    ogAlt: "Real estate photography in Okotoks by Photos 4 Real Estate",
    heroEyebrow: "Okotoks Real Estate Media • Foothills Coverage",
    heroIntro:
      "Selling homes in Okotoks means competing in a growing market where buyers expect professional, eye-catching listing media. Photos 4 Real Estate creates real estate photography, drone imagery, video tours, RMS floor plans, and 3D media that help Okotoks properties attract more attention online and sell faster.",
    introHeading: "Professional real estate photography for Okotoks listings",
    introLead:
      "Okotoks combines established neighbourhoods, newer family communities, river-valley settings, lake-community appeal, and acreage-style properties on the edge of town. Whether it is a family home in Cimarron, a townhouse near downtown Okotoks, or an acreage with views toward the Rockies, professional listing media helps buyers understand the lifestyle as well as the home.",
    introParagraphs: [
      "At Photos 4 Real Estate, we regularly travel from Calgary to Okotoks to photograph condos, townhomes, duplexes, move-up family homes, luxury listings, and Foothills-area acreages. We focus on clean interior composition, bright natural-looking edits, strong exterior curb appeal, and practical deliverables that agents can upload to MLS quickly.",
      "Okotoks listings often benefit from context: proximity to the Sheep River, downtown amenities, walking paths, schools, newer subdivisions, or views across open land. Drone photography is especially useful for lake-view homes, larger lots, edge-of-town properties, and listings where the surrounding landscape is part of the value proposition.",
    ],
    introStats: ["7 popular communities", "24h next-morning turnaround", "9 services in one visit"],
    communities: [
      "Cimarron",
      "Crystal Shores",
      "Drake Landing",
      "Sheep River",
      "D’Arcy",
      "Woodhaven",
      "Mountainview",
    ],
    propertyTypes: [
      "Family homes in Cimarron, D’Arcy, and Mountainview",
      "Townhomes and condos near downtown Okotoks",
      "Lake-community listings around Crystal Shores",
      "Established homes near Sheep River and Woodhaven",
      "Edge-of-town acreages and Foothills properties",
    ],
    localMarketTitle: "Popular Okotoks communities we serve",
    localMarketParagraph:
      "We work throughout Okotoks, including Cimarron, Crystal Shores, Drake Landing, Sheep River, D’Arcy, Woodhaven, and Mountainview. Whether your property is near the Sheep River, downtown Okotoks, a lake community, or on the edge of town, we showcase it with professional visuals built for MLS, realtor websites, and social media.",
    localMarketParagraphTwo:
      "Many Okotoks buyers are comparing lifestyle, commute, views, lot size, and neighbourhood feel before they book a showing. That is why we combine bright interior photos with floor plans, drone coverage, video, and detail shots when the property calls for it — giving online buyers enough confidence to take the next step.",
    servicesHeading: "Our Okotoks real estate photography services",
    servicesIntro:
      "We provide a full range of listing media for the Okotoks market, with each service linking back to the relevant service page for more examples, details, and deliverables.",
    reasonsHeading: "Why Okotoks realtors and homeowners choose Photos 4 Real Estate",
    reasonsIntro:
      "Okotoks properties need media that captures both the home and the setting. Our Calgary-based team regularly travels south to Okotoks and delivers polished, MLS-ready assets with predictable turnaround.",
    whyChoose: [
      {
        title: "Regular Okotoks coverage",
        icon: MapPin,
        copy: "We are based in Calgary and regularly schedule shoots in Okotoks, making travel, timing, and access easy to coordinate.",
      },
      {
        title: "Fast turnaround",
        icon: Clock,
        copy: "Most Okotoks photography, floor plan, and 3D tour deliverables are ready the next morning so listings can launch quickly.",
      },
      {
        title: "Foothills property experience",
        icon: House,
        copy: "We photograph townhomes, family houses, lake-community homes, luxury properties, and acreages with media tailored to each listing.",
      },
      {
        title: "MLS-ready and compliant",
        icon: ShieldCheck,
        copy: "Photos, tours, floor plans, RMS measurements, and marketing assets are prepared for practical listing use from day one.",
      },
    ],
    services: [
      {
        title: "Real Estate Photography",
        href: "/services/real-estate-photography-in-calgary",
        icon: Camera,
        copy: "Bright, MLS-ready photos that make Okotoks interiors, exteriors, yards, and neighbourhood features look polished online.",
      },
      {
        title: "RMS Measurements & Floor Plans",
        href: "/services/rms-measurements-and-floor-plans-in-calgary",
        icon: Ruler,
        copy: "Accurate RMS measurements and floor plans that help buyers understand layouts before they book a showing.",
      },
      {
        title: "Drone Photography",
        href: "/services/real-estate-aerial-drone-photography-in-calgary",
        icon: Drone,
        copy: "Aerial coverage for lake-view homes, larger lots, acreages, river-valley settings, and Rocky Mountain view context.",
      },
      {
        title: "Real Estate Videography",
        href: "/services/real-estate-videos-in-calgary",
        icon: Video,
        copy: "Smooth walkthrough videos and cinematic listing edits for MLS links, YouTube, Instagram, Facebook, and agent websites.",
      },
      {
        title: "iGUIDE 3D Virtual Tours",
        href: "/services/iguide-virtual-tours-in-calgary",
        icon: Box,
        copy: "Interactive 3D tours that let buyers explore Okotoks homes online, including floor plan flow and room-to-room context.",
      },
      {
        title: "Virtual Staging",
        href: "/services/virtual-staging",
        icon: Sparkles,
        copy: "Photo-realistic furnishings for vacant or under-staged rooms so buyers can picture how each Okotoks space can live.",
      },
      {
        title: "Twilight Photography",
        href: "/services/twilight-photography-for-real-estate-in-calgary",
        icon: Moon,
        copy: "Evening exterior photos that add curb appeal for premium homes, lake-community listings, and standout Okotoks properties.",
      },
      {
        title: "Style Shots",
        href: "/services/style-shots",
        icon: Images,
        copy: "Detail-focused lifestyle photos for finishes, fixtures, staging, outdoor spaces, and features that help a listing feel memorable.",
      },
      {
        title: "Marketing Kit",
        href: "/services/marketing-kit-for-realtors",
        icon: Megaphone,
        copy: "Social graphics, flyers, reels, and branded assets that help promote Okotoks listings across multiple channels.",
      },
    ],
    travelCards: [
      {
        variant: "free",
        icon: MapPin,
        area: "Within 35 km of Calgary City Centre",
        price: "Free",
      },
      {
        variant: "flat",
        icon: Building2,
        area: "Chestermere, Airdrie, Okotoks, High River, Cochrane, Langdon",
        price: "$30 flat fee",
      },
      {
        variant: "km",
        icon: Car,
        area: "Beyond 35 km from Calgary City Centre",
        price: "$0.85 / km",
      },
    ],
    travelIntro:
      "Okotoks falls under our nearby-community travel pricing, so agents and sellers can confirm costs before the appointment is scheduled.",
    travelNote:
      "Travel within 35 km of Calgary City Centre is free. Okotoks bookings are covered by our published $30 flat-fee nearby-community rate, and properties beyond that radius use distance-based travel pricing. You can review full details on our pricing page or confirm the fee with us before you book.",
    faqs: [
      {
        q: "Do you travel to Okotoks for real estate photography?",
        a: "Yes. Photos 4 Real Estate is based in Calgary and regularly travels to Okotoks for real estate photography, drone imagery, video tours, RMS measurements, floor plans, iGUIDE tours, virtual staging, twilight photos, and Marketing Kit assets.",
      },
      {
        q: "What is the travel fee for Okotoks?",
        a: "Okotoks is covered by our nearby-community travel pricing, which is currently a <strong>$30 flat fee</strong>. Full pricing details are available on our <a href=\"/prices\">pricing page</a>, and we can confirm the exact fee before your booking is finalized.",
      },
      {
        q: "Which Okotoks communities do you serve?",
        a: "We work throughout Okotoks, including Cimarron, Crystal Shores, Drake Landing, Sheep River, D’Arcy, Woodhaven, Mountainview, downtown Okotoks, and surrounding Foothills-area properties.",
      },
      {
        q: "Can you photograph Okotoks acreages and homes with mountain views?",
        a: "Yes. We regularly photograph larger lots, edge-of-town properties, acreages, and homes where views or surrounding land are part of the marketing story. Drone photography is especially helpful for these listings.",
      },
      {
        q: "Can photos, drone, video, and floor plans be captured in one Okotoks visit?",
        a: "In most cases, yes. We can coordinate photography, RMS measurements, floor plans, iGUIDE 3D tours, drone, video, and detail shots during one property visit to keep scheduling simple.",
      },
      {
        q: "How quickly do you deliver Okotoks listing media?",
        a: "Most Okotoks photography, floor plans, and 3D tour deliverables are sent the next morning. Video turnaround may vary depending on the package and editing scope, but we keep timelines clear before the shoot.",
      },
    ],
    images: {
      hero: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/okotoks/Service-Areas-Okotoks.webp",
      interior:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/okotoks/House-in-Okotoks-1024x682.webp",
      drone:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/okotoks/Lake-view-from-drone-in-Okotoks.jpg",
    },
    imageAlts: {
      hero: "Exterior real estate photo of a home in Okotoks by Photos 4 Real Estate",
      interior:
        "Bright interior real estate photo of an Okotoks home prepared for an MLS listing",
      drone:
        "Drone view of an Okotoks lake community and surrounding homes for real estate marketing",
    },
  },
  cochrane: {
    city: "Cochrane",
    province: "AB",
    seoTitle: "Real Estate Photography Cochrane | Photos 4 Real Estate",
    seoDescription:
      "Real estate photography in Cochrane with photos, drone, video, RMS floor plans, and 3D tours. Fast turnaround for family homes, estates, and acreages.",
    ogAlt: "Real estate photography in Cochrane by Photos 4 Real Estate",
    heroEyebrow: "Cochrane Real Estate Media • Calgary-Based Team",
    heroIntro:
      "Cochrane is one of Alberta’s fastest-growing communities, and listings here need professional media to compete. Photos 4 Real Estate provides real estate photography in Cochrane with bright MLS-ready photos, drone imagery, video tours, RMS floor plans, and 3D media that help properties capture more attention online and sell faster.",
    introHeading: "Professional real estate photography for Cochrane listings",
    introLead:
      "Cochrane blends small-town charm with quick access to Calgary, and buyers are often comparing mountain views, hillside settings, family-friendly neighbourhoods, and outdoor lifestyle appeal before they decide to book a showing. From family homes in Riversong to hillside properties in Sunset Ridge and acreages overlooking the Bow River Valley, strong listing media helps buyers immediately understand the home and the setting.",
    introParagraphs: [
      "At Photos 4 Real Estate, we regularly travel west from Calgary to Cochrane to photograph townhomes, duplexes, single-family homes, move-up family properties, estate homes, and nearby acreages. We focus on balanced interior lighting, sharp composition, accurate floor plans, and practical deliverables that make it easy for agents to launch listings quickly.",
      "Cochrane properties often benefit from context-driven visuals: larger lots, elevated views, green spaces, Bow River Valley surroundings, and foothills backdrops. Drone photography is especially useful for hillside homes, estate properties, and newer developments where the location and scenery are a major part of the value proposition.",
    ],
    introStats: ["7 popular communities", "24h next-morning turnaround", "9 services in one visit"],
    communities: [
      "Sunset Ridge",
      "Riversong",
      "Fireside",
      "Heartland",
      "Bow Ridge",
      "Riviera",
      "Heritage Hills",
    ],
    propertyTypes: [
      "Hillside homes in Sunset Ridge and Bow Ridge",
      "Family properties in Riversong, Fireside, and Heartland",
      "Modern homes in newer Cochrane developments",
      "River-valley and view-oriented listings in Riviera",
      "Estate homes and nearby acreages with Rocky Mountain views",
    ],
    localMarketTitle: "Popular Cochrane communities we serve",
    localMarketParagraph:
      "We photograph homes across Cochrane, including Sunset Ridge, Riversong, Fireside, Heartland, Bow Ridge, Riviera, and Heritage Hills. From hillside estates with Rocky Mountain views to modern family homes in newer developments, we capture Cochrane properties in their best light with listing media built for MLS, agent websites, and social campaigns.",
    localMarketParagraphTwo:
      "Because many Cochrane buyers are drawn to lifestyle factors like views, trails, green space, school access, and proximity to Calgary, listing media needs to do more than show rooms. We combine photography, floor plans, drone coverage, video, and detail shots when appropriate so buyers get a clearer sense of both the property and the neighbourhood.",
    servicesHeading: "Our Cochrane real estate photography services",
    servicesIntro:
      "We provide a full range of listing media tailored to the Cochrane market, with every service linking back to the relevant service page for more examples, package details, and deliverables.",
    reasonsHeading: "Why Cochrane realtors and homeowners choose Photos 4 Real Estate",
    reasonsIntro:
      "Cochrane listings often compete on views, lot size, layout, and lifestyle appeal. Our Calgary-based team regularly works in Cochrane and delivers media that is polished, reliable, and easy to launch quickly.",
    whyChoose: [
      {
        title: "Regular Cochrane coverage",
        icon: MapPin,
        copy: "We are based in Calgary and regularly schedule shoots in Cochrane, so travel, timing, and access are familiar and easy to coordinate.",
      },
      {
        title: "Fast turnaround",
        icon: Clock,
        copy: "Most Cochrane photography, floor plans, and 3D tour deliverables are sent the next morning so listings can go live quickly.",
      },
      {
        title: "Views, lots, and lifestyle experience",
        icon: House,
        copy: "We photograph family homes, hillside properties, estate listings, and acreages with media that highlights both the home and the surrounding setting.",
      },
      {
        title: "MLS-ready and compliant",
        icon: ShieldCheck,
        copy: "Photos, floor plans, RMS measurements, tours, and marketing assets are prepared for practical listing use right away.",
      },
    ],
    services: [
      {
        title: "Real Estate Photography",
        href: "/services/real-estate-photography-in-calgary",
        icon: Camera,
        copy: "Bright, MLS-ready photos that showcase Cochrane interiors, curb appeal, views, outdoor spaces, and family-friendly layouts.",
      },
      {
        title: "RMS Measurements & Floor Plans",
        href: "/services/rms-measurements-and-floor-plans-in-calgary",
        icon: Ruler,
        copy: "Accurate RMS measurements and floor plans that help buyers understand layout, flow, and square footage before a showing.",
      },
      {
        title: "Drone Photography",
        href: "/services/real-estate-aerial-drone-photography-in-calgary",
        icon: Drone,
        copy: "Aerial coverage for hillside homes, larger lots, acreages, Bow River Valley context, and Rocky Mountain view properties.",
      },
      {
        title: "Real Estate Videography",
        href: "/services/real-estate-videos-in-calgary",
        icon: Video,
        copy: "Smooth walkthrough videos and cinematic listing edits for websites, YouTube, Instagram, Facebook, and broader marketing use.",
      },
      {
        title: "iGUIDE 3D Virtual Tours",
        href: "/services/iguide-virtual-tours-in-calgary",
        icon: Box,
        copy: "Interactive 3D tours that let buyers explore Cochrane homes remotely and understand room-to-room flow before booking.",
      },
      {
        title: "Virtual Staging",
        href: "/services/virtual-staging",
        icon: Sparkles,
        copy: "Photo-realistic staging for vacant or under-furnished spaces so buyers can better picture how the home can live.",
      },
      {
        title: "Twilight Photography",
        href: "/services/twilight-photography-for-real-estate-in-calgary",
        icon: Moon,
        copy: "Evening exterior images that add impact for premium homes, hillside estates, and standout Cochrane listings with views.",
      },
      {
        title: "Style Shots",
        href: "/services/style-shots",
        icon: Images,
        copy: "Detail-focused images for finishes, staging, fixtures, mountain-view patios, and design features that make listings memorable.",
      },
      {
        title: "Marketing Kit",
        href: "/services/marketing-kit-for-realtors",
        icon: Megaphone,
        copy: "Social graphics, flyers, reels, and branded assets that help Cochrane listings launch across multiple channels quickly.",
      },
    ],
    travelCards: [
      {
        variant: "free",
        icon: MapPin,
        area: "Within 35 km of Calgary City Centre",
        price: "Free",
      },
      {
        variant: "flat",
        icon: Building2,
        area: "Chestermere, Airdrie, Okotoks, High River, Cochrane, Langdon",
        price: "$30 flat fee",
      },
      {
        variant: "km",
        icon: Car,
        area: "Beyond 35 km from Calgary City Centre",
        price: "$0.85 / km",
      },
    ],
    travelIntro:
      "Cochrane falls under our nearby-community travel pricing, so agents and sellers can confirm travel costs before the appointment is booked.",
    travelNote:
      "Travel within 35 km of Calgary City Centre is free. Cochrane bookings are covered by our published $30 flat-fee nearby-community rate, and properties beyond that radius use distance-based travel pricing. You can review full details on our pricing page or confirm the fee with us before you book.",
    faqs: [
      {
        q: "Do you travel to Cochrane for real estate photography?",
        a: "Yes. Photos 4 Real Estate is based in Calgary and regularly travels to Cochrane for photography, drone imagery, video tours, RMS measurements, floor plans, iGUIDE tours, virtual staging, twilight photos, Style Shots, and Marketing Kit assets.",
      },
      {
        q: "What is the travel fee for Cochrane?",
        a: "Cochrane is covered by our nearby-community travel pricing, which is currently a <strong>$30 flat fee</strong>. Full pricing details are available on our <a href=\"/prices\">pricing page</a>, and we can confirm the exact fee before your booking is finalized.",
      },
      {
        q: "Which Cochrane communities do you serve?",
        a: "We photograph homes throughout Cochrane, including Sunset Ridge, Riversong, Fireside, Heartland, Bow Ridge, Riviera, Heritage Hills, and surrounding properties on the edge of town.",
      },
      {
        q: "Can you photograph Cochrane homes with mountain views or Bow River Valley surroundings?",
        a: "Yes. We regularly photograph hillside homes, view properties, and acreages where the surrounding landscape is a major selling feature. Drone coverage is especially useful in Cochrane for showing topography, lot context, and Rocky Mountain or Bow River Valley views.",
      },
      {
        q: "Can photos, drone, video, and floor plans be captured in one Cochrane visit?",
        a: "In most cases, yes. We can coordinate photography, RMS measurements, floor plans, iGUIDE 3D tours, drone, video, and detail shots during one property visit to keep scheduling simple for agents, sellers, and tenants.",
      },
      {
        q: "How quickly do you deliver Cochrane listing media?",
        a: "Most Cochrane photography, floor plans, and 3D tour deliverables are sent the next morning. Video turnaround may vary slightly depending on the package and editing scope, but timelines are always confirmed before the shoot.",
      },
    ],
    images: {
      hero: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/cochrane/Service-Areas-Cochrane.webp",
      interior:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/cochrane/House-in-Cochrane-1024x768.webp",
      drone:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/cochrane/Drone-View-in-Cochrane-1024x768.webp",
    },
    imageAlts: {
      hero: "Exterior real estate photo of a Cochrane home with foothills character by Photos 4 Real Estate",
      interior:
        "Bright interior real estate photo of a Cochrane home prepared for an MLS listing",
      drone:
        "Drone view of a Cochrane property and surrounding hillside neighbourhood for real estate marketing",
    },
  },
  chestermere: {
    city: "Chestermere",
    province: "AB",
    seoTitle: "Real Estate Photography Chestermere | Photos 4 Real Estate",
    seoDescription:
      "Real estate photography in Chestermere with photos, drone, video, RMS floor plans, and 3D tours. Ideal for waterfront, luxury, and family homes near Calgary.",
    ogAlt: "Real estate photography in Chestermere by Photos 4 Real Estate",
    heroEyebrow: "Chestermere Real Estate Media • Lakeside Coverage",
    heroIntro:
      "Chestermere offers a unique lifestyle with lakeside living, family-friendly neighbourhoods, and quick access to Calgary. Photos 4 Real Estate provides real estate photography in Chestermere with bright MLS-ready photos, drone imagery, video tours, RMS floor plans, and 3D media that help listings stand out in this competitive lake-community market.",
    introHeading: "Professional real estate photography for Chestermere listings",
    introLead:
      "Chestermere buyers are often shopping for more than square footage. They are comparing waterfront lifestyle, lake access, canal or pond surroundings, newer construction, and the convenience of being close to Calgary. Whether it is a waterfront home on Chestermere Lake, a modern build in Kinniburgh, or a family home in Rainbow Falls, strong listing media helps buyers understand both the home and the lifestyle it offers.",
    introParagraphs: [
      "At Photos 4 Real Estate, we regularly travel east from Calgary to photograph Chestermere condos, townhomes, duplexes, single-family homes, lakefront properties, luxury listings, and builder inventory. We focus on clean interior composition, bright natural-looking edits, accurate floor plans, and fast delivery so agents can get listings live quickly.",
      "Chestermere homes often benefit from context-driven visuals, especially when the property is near the lake, along canals, beside ponds, or in a newer development where community amenities help sell the story. Drone photography is especially useful for waterfront homes, premium lots, homes with outdoor entertaining space, and properties where location relative to the lake adds clear marketing value.",
    ],
    introStats: ["7 popular communities", "24h next-morning turnaround", "9 services in one visit"],
    communities: [
      "Kinniburgh",
      "Rainbow Falls",
      "Westmere",
      "East Chestermere",
      "Lake Ere Estates",
      "The Cove",
      "Dawson’s Landing",
    ],
    propertyTypes: [
      "Waterfront and lake-view homes near Chestermere Lake",
      "Luxury listings in Kinniburgh and The Cove",
      "Family homes in Rainbow Falls and Westmere",
      "Newer builds and builder inventory in Dawson’s Landing",
      "Canal, pond, and premium-lot properties across Chestermere",
    ],
    localMarketTitle: "Chestermere communities we serve",
    localMarketParagraph:
      "We capture homes across Chestermere, including Kinniburgh, Rainbow Falls, Westmere, East Chestermere, Lake Ere Estates, The Cove, and Dawson’s Landing. From luxury waterfront homes to new developments and family-focused neighbourhoods, we deliver media that brings out the best in every property.",
    localMarketParagraphTwo:
      "Because Chestermere listings often compete on setting, outdoor lifestyle, and curb appeal as much as interior layout, the media package matters. We combine photography, floor plans, drone coverage, video, and detail shots where appropriate so buyers can quickly understand the home, the lot, and the community around it.",
    servicesHeading: "Our Chestermere real estate photography services",
    servicesIntro:
      "We provide a full range of listing media for Chestermere properties, with each service linking back to the relevant service page for examples, package details, and deliverables.",
    reasonsHeading: "Why Chestermere realtors and homeowners choose Photos 4 Real Estate",
    reasonsIntro:
      "Chestermere listings often need media that highlights water, views, outdoor spaces, and premium finishes. Our Calgary-based team regularly works in Chestermere and delivers polished, MLS-ready assets with fast turnaround.",
    whyChoose: [
      {
        title: "Lakefront and luxury experience",
        icon: MapPin,
        copy: "We regularly photograph waterfront, luxury, and family homes in Chestermere and understand how to capture the setting as well as the home itself.",
      },
      {
        title: "Fast turnaround",
        icon: Clock,
        copy: "Most Chestermere photography, floor plans, and 3D tour deliverables are sent the next morning so listings can launch quickly.",
      },
      {
        title: "Strong community knowledge",
        icon: House,
        copy: "We work across Chestermere’s in-demand communities and adapt the shot list for lakefront, builder, family, and premium-lot properties.",
      },
      {
        title: "MLS-ready and flexible",
        icon: ShieldCheck,
        copy: "Our media is prepared for real-world listing use, with flexible packages available for agents, builders, and homeowners.",
      },
    ],
    services: [
      {
        title: "Real Estate Photography",
        href: "/services/real-estate-photography-in-calgary",
        icon: Camera,
        copy: "Bright, MLS-ready photos that showcase Chestermere interiors, curb appeal, lake-adjacent settings, and outdoor entertaining spaces.",
      },
      {
        title: "RMS Measurements & Floor Plans",
        href: "/services/rms-measurements-and-floor-plans-in-calgary",
        icon: Ruler,
        copy: "Accurate RMS measurements and floor plans that help buyers understand layout, flow, and usable space before they visit.",
      },
      {
        title: "Drone Photography",
        href: "/services/real-estate-aerial-drone-photography-in-calgary",
        icon: Drone,
        copy: "Aerial coverage for waterfront homes, canal and pond properties, premium lots, and homes where proximity to Chestermere Lake matters.",
      },
      {
        title: "Real Estate Videography",
        href: "/services/real-estate-videos-in-calgary",
        icon: Video,
        copy: "Smooth walkthrough videos and cinematic listing edits for agent websites, YouTube, Instagram, Facebook, and marketing campaigns.",
      },
      {
        title: "iGUIDE 3D Virtual Tours",
        href: "/services/iguide-virtual-tours-in-calgary",
        icon: Box,
        copy: "Interactive 3D tours that help buyers explore Chestermere homes remotely and understand room-to-room flow before booking.",
      },
      {
        title: "Virtual Staging",
        href: "/services/virtual-staging",
        icon: Sparkles,
        copy: "Photo-realistic staging for vacant rooms so buyers can better visualize how premium or family-focused spaces can live.",
      },
      {
        title: "Twilight Photography",
        href: "/services/twilight-photography-for-real-estate-in-calgary",
        icon: Moon,
        copy: "Evening exterior imagery that works especially well for waterfront homes, luxury listings, and standout Chestermere properties.",
      },
      {
        title: "Style Shots",
        href: "/services/style-shots",
        icon: Images,
        copy: "Detail-focused images for kitchens, finishes, staging, lake-view patios, and design features that help a listing feel memorable.",
      },
      {
        title: "Marketing Kit",
        href: "/services/marketing-kit-for-realtors",
        icon: Megaphone,
        copy: "Social graphics, flyers, reels, and branded assets that help promote Chestermere listings across multiple channels quickly.",
      },
    ],
    travelCards: [
      {
        variant: "free",
        icon: MapPin,
        area: "Within 35 km of Calgary City Centre",
        price: "Free",
      },
      {
        variant: "flat",
        icon: Building2,
        area: "Chestermere, Airdrie, Okotoks, High River, Cochrane, Langdon",
        price: "$30 flat fee",
      },
      {
        variant: "km",
        icon: Car,
        area: "Beyond 35 km from Calgary City Centre",
        price: "$0.85 / km",
      },
    ],
    travelIntro:
      "Chestermere falls under our nearby-community travel pricing, so agents and sellers can confirm travel costs before the appointment is booked.",
    travelNote:
      "Travel within 35 km of Calgary City Centre is free. Chestermere bookings are covered by our published $30 flat-fee nearby-community rate, and properties beyond that radius use distance-based travel pricing. You can review full details on our pricing page or confirm the fee with us before you book.",
    faqs: [
      {
        q: "Do you travel to Chestermere for real estate photography?",
        a: "Yes. Photos 4 Real Estate is based in Calgary and regularly travels to Chestermere for photography, drone imagery, video tours, RMS measurements, floor plans, iGUIDE tours, virtual staging, twilight photos, Style Shots, and Marketing Kit assets.",
      },
      {
        q: "What is the travel fee for Chestermere?",
        a: "Chestermere is covered by our nearby-community travel pricing, which is currently a <strong>$30 flat fee</strong>. Full pricing details are available on our <a href=\"/prices\">pricing page</a>, and we can confirm the exact fee before your booking is finalized.",
      },
      {
        q: "Which Chestermere communities do you serve?",
        a: "We photograph homes throughout Chestermere, including Kinniburgh, Rainbow Falls, Westmere, East Chestermere, Lake Ere Estates, The Cove, Dawson’s Landing, and surrounding lake-area properties.",
      },
      {
        q: "Can you photograph waterfront or lake-view homes in Chestermere?",
        a: "Yes. We regularly photograph lakefront, lake-view, canal, and premium-lot properties where outdoor setting and water proximity are a major part of the marketing story. Drone coverage is especially useful for these listings.",
      },
      {
        q: "Can photos, drone, video, and floor plans be captured in one Chestermere visit?",
        a: "In most cases, yes. We can coordinate photography, RMS measurements, floor plans, iGUIDE 3D tours, drone, video, and detail shots during one property visit to keep scheduling simple for agents, sellers, and homeowners.",
      },
      {
        q: "How quickly do you deliver Chestermere listing media?",
        a: "Most Chestermere photography, floor plans, and 3D tour deliverables are sent the next morning. Video turnaround may vary slightly depending on the package and editing scope, but timelines are always confirmed before the shoot.",
      },
    ],
    images: {
      hero: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/chestermere/Service-Areas-Chestermere.webp",
      interior:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/chestermere/Living-Room-House-in-Chestermere-1024x682.webp",
      drone:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/chestermere/Chestermere-Lake-Drone-View.webp",
    },
    imageAlts: {
      hero: "Exterior real estate photo of a Chestermere home near the lake by Photos 4 Real Estate",
      interior:
        "Bright living room real estate photo of a Chestermere home prepared for an MLS listing",
      drone:
        "Drone view of Chestermere Lake and surrounding homes for real estate marketing",
    },
  },
  "high-river": {
    city: "High River",
    province: "AB",
    seoTitle: "Real Estate Photography High River | Photos 4 Real Estate",
    seoDescription:
      "Real estate photography in High River with photos, drone, video, RMS floor plans, and 3D tours. Fast turnaround for heritage homes, family properties, and acreages.",
    ogAlt: "Real estate photography in High River by Photos 4 Real Estate",
    heroEyebrow: "High River Real Estate Media • South of Calgary",
    heroIntro:
      "High River is a charming town just south of Calgary, known for its welcoming community, scenic landscapes, heritage character, and the Highwood River running through town. Photos 4 Real Estate provides real estate photography in High River with bright MLS-ready photos, drone imagery, video tours, RMS floor plans, and 3D media that help listings stand out in a competitive market.",
    introHeading: "Professional real estate photography for High River listings",
    introLead:
      "High River buyers are often drawn to more than the square footage alone. They are looking at character, mature streetscapes, family-friendly neighbourhoods, quiet residential pockets, access to parks and pathways, and the small-town lifestyle that makes High River different from a suburban Calgary listing. From cozy heritage homes in the downtown core to newer developments on the town’s edges, strong listing media helps communicate both the home and the lifestyle around it.",
    introParagraphs: [
      "At Photos 4 Real Estate, we regularly travel south from Calgary to photograph High River townhomes, duplexes, family homes, heritage properties, newer subdivision homes, and surrounding acreages. We focus on balanced natural-looking interiors, clean composition, practical floor plans, and fast delivery so agents and homeowners can market confidently without delay.",
      "High River properties often benefit from media that captures warmth and setting. Mature trees, larger lots, character architecture, quiet streets, backyard spaces, and proximity to the Highwood River or recreation corridors all help tell the story. Detail photography, video, and drone coverage can be especially valuable for acreage properties, riverside locations, and homes where lot context adds clear marketing value.",
    ],
    introStats: ["7 popular communities", "24h next-morning turnaround", "9 services in one visit"],
    communities: [
      "Downtown High River",
      "Montrose",
      "Sunshine Meadows",
      "Lineham Acres",
      "Vista Mirage",
      "Hampton Hills",
      "Emerson Lake Estates",
    ],
    propertyTypes: [
      "Historic and character homes in Downtown High River",
      "Family homes and newer builds in Montrose",
      "Practical residential properties in Sunshine Meadows",
      "Established homes in Lineham Acres and Vista Mirage",
      "Larger lots and green-space-adjacent homes in Emerson Lake Estates",
    ],
    localMarketTitle: "High River communities we serve",
    localMarketParagraph:
      "We proudly work with real estate agents and homeowners across High River and the surrounding area, including Downtown High River, Montrose, Sunshine Meadows, Lineham Acres, Vista Mirage, Hampton Hills, and Emerson Lake Estates. Whether the listing is a historic character property, a quiet family home, or a newer build on the edge of town, we deliver the professional media needed to help it stand out.",
    localMarketParagraphTwo:
      "High River listings often sell on warmth, livability, and community feel as much as on finishes. That is why we tailor the media package to the property itself — combining bright photography, floor plans, video, drone coverage, and detail shots where appropriate so buyers get a stronger sense of both the home and the neighbourhood around it.",
    servicesHeading: "Our High River real estate photography services",
    servicesIntro:
      "We provide a full range of listing media for High River properties, with each service linking back to the relevant service page for examples, package details, and deliverables.",
    reasonsHeading: "Why High River realtors and homeowners choose Photos 4 Real Estate",
    reasonsIntro:
      "High River homes deserve to be presented in their best light. Our local experience helps us capture not only the home itself, but also the character, warmth, and lifestyle that make this market unique.",
    whyChoose: [
      {
        title: "Character and lifestyle focus",
        icon: MapPin,
        copy: "We know how to photograph High River listings in a way that reflects both the property and the small-town lifestyle buyers are looking for.",
      },
      {
        title: "Fast turnaround",
        icon: Clock,
        copy: "Most High River photography, floor plans, and 3D tour deliverables are sent the next morning so listings can launch quickly.",
      },
      {
        title: "Flexible for all property types",
        icon: House,
        copy: "We work with heritage homes, family houses, newer subdivisions, riverside properties, and acreages on the outskirts of town.",
      },
      {
        title: "MLS-ready media",
        icon: ShieldCheck,
        copy: "Our photos, tours, floor plans, and marketing assets are prepared for real-world listing use and built to help listings stand out online.",
      },
    ],
    services: [
      {
        title: "Real Estate Photography",
        href: "/services/real-estate-photography-in-calgary",
        icon: Camera,
        copy: "Bright, MLS-ready photos that showcase High River interiors, curb appeal, mature streetscapes, and inviting family spaces.",
      },
      {
        title: "RMS Measurements & Floor Plans",
        href: "/services/rms-measurements-and-floor-plans-in-calgary",
        icon: Ruler,
        copy: "Accurate RMS measurements and floor plans that help buyers understand layout, room flow, and usable space before they visit.",
      },
      {
        title: "Drone Photography",
        href: "/services/real-estate-aerial-drone-photography-in-calgary",
        icon: Drone,
        copy: "Aerial coverage for larger lots, acreages, riverside properties, and homes where setting and surrounding land add market value.",
      },
      {
        title: "Real Estate Videography",
        href: "/services/real-estate-videos-in-calgary",
        icon: Video,
        copy: "Smooth walkthrough videos and cinematic listing edits for websites, YouTube, Instagram, Facebook, and broader marketing use.",
      },
      {
        title: "iGUIDE 3D Virtual Tours",
        href: "/services/iguide-virtual-tours-in-calgary",
        icon: Box,
        copy: "Interactive 3D tours that help buyers explore High River homes remotely and understand room-to-room flow before booking.",
      },
      {
        title: "Virtual Staging",
        href: "/services/virtual-staging",
        icon: Sparkles,
        copy: "Photo-realistic staging for vacant or under-furnished rooms so buyers can better imagine how the home can live.",
      },
      {
        title: "Twilight Photography",
        href: "/services/twilight-photography-for-real-estate-in-calgary",
        icon: Moon,
        copy: "Evening exterior imagery for standout homes, character properties, and premium listings that benefit from extra curb appeal.",
      },
      {
        title: "Style Shots",
        href: "/services/style-shots",
        icon: Images,
        copy: "Detail-focused images for kitchens, finishes, heritage features, staging, and design elements that help a listing feel memorable.",
      },
      {
        title: "Marketing Kit",
        href: "/services/marketing-kit-for-realtors",
        icon: Megaphone,
        copy: "Social graphics, flyers, reels, and branded assets that help High River listings launch across multiple channels quickly.",
      },
    ],
    travelCards: [
      {
        variant: "free",
        icon: MapPin,
        area: "Within 35 km of Calgary City Centre",
        price: "Free",
      },
      {
        variant: "flat",
        icon: Building2,
        area: "Chestermere, Airdrie, Okotoks, High River, Cochrane, Langdon",
        price: "$30 flat fee",
      },
      {
        variant: "km",
        icon: Car,
        area: "Beyond 35 km from Calgary City Centre",
        price: "$0.85 / km",
      },
    ],
    travelIntro:
      "High River falls under our nearby-community travel pricing, so agents and sellers can confirm travel costs before the appointment is booked.",
    travelNote:
      "Travel within 35 km of Calgary City Centre is free. High River bookings are covered by our published $30 flat-fee nearby-community rate, and properties beyond that radius use distance-based travel pricing. You can review full details on our pricing page or confirm the fee with us before you book.",
    faqs: [
      {
        q: "Do you travel to High River for real estate photography?",
        a: "Yes. Photos 4 Real Estate is based in Calgary and regularly travels to High River for photography, drone imagery, video tours, RMS measurements, floor plans, iGUIDE tours, virtual staging, twilight photos, Style Shots, and Marketing Kit assets.",
      },
      {
        q: "What is the travel fee for High River?",
        a: "High River is covered by our nearby-community travel pricing, which is currently a <strong>$30 flat fee</strong>. Full pricing details are available on our <a href=\"/prices\">pricing page</a>, and we can confirm the exact fee before your booking is finalized.",
      },
      {
        q: "Which High River communities do you serve?",
        a: "We work throughout High River, including Downtown High River, Montrose, Sunshine Meadows, Lineham Acres, Vista Mirage, Hampton Hills, Emerson Lake Estates, and surrounding acreage properties near town.",
      },
      {
        q: "Can you photograph heritage homes and acreages in High River?",
        a: "Yes. We regularly photograph character homes, family properties, newer subdivisions, riverside listings, and acreages where lot context and surrounding landscape are an important part of the marketing story.",
      },
      {
        q: "Can photos, drone, video, and floor plans be captured in one High River visit?",
        a: "In most cases, yes. We can coordinate photography, RMS measurements, floor plans, iGUIDE 3D tours, drone, video, and detail shots during one property visit to keep scheduling simple for agents, sellers, and homeowners.",
      },
      {
        q: "How quickly do you deliver High River listing media?",
        a: "Most High River photography, floor plans, and 3D tour deliverables are sent the next morning. Video turnaround may vary slightly depending on the package and editing scope, but timelines are always confirmed before the shoot.",
      },
    ],
    images: {
      hero: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/high-river/Service-Areas-High-River.webp",
      interior:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/high-river/House-in-High-River-1024x682.webp",
      drone:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/high-river/Kitchen-Real-Estate-Photography-1024x682.webp",
    },
    imageAlts: {
      hero: "Exterior real estate photo of a High River home with small-town character by Photos 4 Real Estate",
      interior:
        "Bright interior real estate photo of a High River home prepared for an MLS listing",
      drone:
        "Kitchen real estate photo from a High River listing showing bright finishes and open layout",
    },
  },
  springbank: {
    city: "Springbank",
    province: "AB",
    seoTitle: "Real Estate Photography Springbank | Photos 4 Real Estate",
    seoDescription:
      "Real estate photography in Springbank with luxury photos, drone, video, RMS floor plans, and 3D tours for acreages, estates, and mountain-view homes.",
    ogAlt: "Real estate photography in Springbank by Photos 4 Real Estate",
    heroEyebrow: "Springbank Luxury Real Estate Media • Acreage Coverage",
    heroIntro:
      "Springbank is one of the Calgary area’s most prestigious markets, known for luxury estates, acreages, private lots, equestrian properties, and Rocky Mountain views. Photos 4 Real Estate creates real estate photography in Springbank with polished MLS-ready photos, drone imagery, video tours, RMS floor plans, and 3D media designed to capture the scale, privacy, and lifestyle of high-value properties.",
    introHeading: "Professional real estate photography for Springbank luxury listings",
    introLead:
      "Springbank properties are rarely simple point-and-shoot listings. Buyers are evaluating architecture, land, privacy, views, gated entrances, outdoor living spaces, outbuildings, and proximity to Calgary, schools, golf, and mountain recreation. Whether the listing is a custom estate, a luxury acreage, or a property with sweeping Rocky Mountain views, the media needs to communicate scale and exclusivity from the first online impression.",
    introParagraphs: [
      "At Photos 4 Real Estate, we regularly travel west from Calgary to photograph Springbank acreages, estate homes, luxury properties, equestrian facilities, and large-lot residences. We focus on refined interior composition, clean exterior coverage, accurate floor plans, and image sets that give agents enough variety for MLS, brochures, social media, websites, and premium listing presentations.",
      "Springbank listings often benefit from a wider visual strategy than standard suburban homes. Drone photography helps show property boundaries, long driveways, mountain-view orientation, outbuildings, paddocks, and surrounding land. Video tours and Style Shots help highlight custom finishes, architectural details, outdoor entertaining areas, and the lifestyle features that attract qualified luxury buyers.",
    ],
    introStats: ["Luxury acreage market", "24h next-morning turnaround", "9 services in one visit"],
    communities: [
      "Central Springbank",
      "Lower Springbank",
      "Upper Springbank",
      "Elbow Valley Area",
      "Harmony Area",
      "Devonian Ridge Estates",
      "Aventerra Estates",
    ],
    propertyTypes: [
      "Luxury acreages and custom estate homes",
      "Mountain-view properties and large private lots",
      "Equestrian facilities, barns, paddocks, and outbuildings",
      "Gated entrances, long driveways, and premium landscaping",
      "Architectural homes with high-end finishes and outdoor living spaces",
    ],
    localMarketTitle: "Springbank properties and areas we serve",
    localMarketParagraph:
      "We photograph Springbank properties across Central Springbank, Lower Springbank, Upper Springbank, the Elbow Valley area, Harmony-area acreages, Devonian Ridge Estates, Aventerra Estates, and nearby Rocky View County locations. From private gated estates to modern acreage homes with panoramic mountain views, we build media packages that show both the home and the land around it.",
    localMarketParagraphTwo:
      "Because Springbank buyers are often looking for luxury, space, privacy, and lifestyle, every listing needs more context than a standard interior photo set. We combine professional photography, aerial views, video, floor plans, 3D tours, twilight photography, and detail-focused imagery when appropriate so buyers can understand the full value of the property before booking a showing.",
    servicesHeading: "Our Springbank real estate photography services",
    servicesIntro:
      "We provide a full range of luxury real estate media for Springbank properties, with each service linking back to the relevant service page for examples, package details, and deliverables.",
    reasonsHeading: "Why Springbank realtors choose Photos 4 Real Estate",
    reasonsIntro:
      "Springbank listings demand premium presentation. Our team is experienced with estate homes, acreages, aerial media, and luxury-focused marketing that helps attract the right buyers without sacrificing fast, reliable turnaround.",
    whyChoose: [
      {
        title: "Estate and acreage experience",
        icon: MapPin,
        copy: "We understand how to photograph large properties, luxury finishes, views, outbuildings, and outdoor features that matter in Springbank listings.",
      },
      {
        title: "Drone for scale and views",
        icon: Drone,
        copy: "Aerial media helps show lot context, privacy, mountain views, long approaches, equestrian features, and surrounding land clearly.",
      },
      {
        title: "Luxury-focused marketing",
        icon: House,
        copy: "We create media that supports MLS, premium brochures, websites, social campaigns, and high-end listing presentations.",
      },
      {
        title: "Reliable turnaround",
        icon: Clock,
        copy: "Most photo, floor plan, and 3D tour deliverables are sent the next morning, with timelines confirmed before the shoot.",
      },
    ],
    services: [
      {
        title: "Real Estate Photography",
        href: "/services/real-estate-photography-in-calgary",
        icon: Camera,
        copy: "Polished MLS-ready photography for Springbank estates, interiors, exterior elevations, views, grounds, and luxury finishes.",
      },
      {
        title: "RMS Measurements & Floor Plans",
        href: "/services/rms-measurements-and-floor-plans-in-calgary",
        icon: Ruler,
        copy: "Accurate RMS measurements and floor plans for larger homes where layout, wings, suites, and finished areas need clarity.",
      },
      {
        title: "Drone Photography",
        href: "/services/real-estate-aerial-drone-photography-in-calgary",
        icon: Drone,
        copy: "Aerial coverage for acreages, long driveways, mountain views, barns, paddocks, outbuildings, and surrounding land context.",
      },
      {
        title: "Real Estate Videography",
        href: "/services/real-estate-videos-in-calgary",
        icon: Video,
        copy: "Cinematic walkthrough and property videos that communicate flow, scale, lifestyle, and premium features for luxury buyers.",
      },
      {
        title: "iGUIDE 3D Virtual Tours",
        href: "/services/iguide-virtual-tours-in-calgary",
        icon: Box,
        copy: "Interactive 3D tours that let qualified buyers explore large Springbank homes remotely before scheduling a private showing.",
      },
      {
        title: "Virtual Staging",
        href: "/services/virtual-staging",
        icon: Sparkles,
        copy: "Photo-realistic staging for vacant estate rooms, guest suites, lower levels, offices, and large spaces that need visual definition.",
      },
      {
        title: "Twilight Photography",
        href: "/services/twilight-photography-for-real-estate-in-calgary",
        icon: Moon,
        copy: "Evening exterior images that highlight architecture, landscape lighting, outdoor living areas, and luxury curb appeal.",
      },
      {
        title: "Style Shots",
        href: "/services/style-shots",
        icon: Images,
        copy: "Detail-focused images for custom finishes, fireplaces, kitchens, wine rooms, views, patios, and architectural features.",
      },
      {
        title: "Marketing Kit",
        href: "/services/marketing-kit-for-realtors",
        icon: Megaphone,
        copy: "Social graphics, flyers, reels, and branded assets that help promote Springbank luxury listings across multiple channels.",
      },
    ],
    travelCards: [
      {
        variant: "free",
        icon: MapPin,
        area: "Within 35 km of Calgary City Centre",
        price: "Free",
      },
      {
        variant: "km",
        icon: Car,
        area: "Mileage calculated from Calgary City Centre",
        price: "$0.85 / km when applicable",
      },
      {
        variant: "km",
        icon: Building2,
        area: "Springbank acreage and estate properties",
        price: "Confirmed before booking",
      },
    ],
    travelIntro:
      "Springbank travel pricing depends on the property location because acreages and estate homes can vary significantly in distance from Calgary City Centre.",
    travelNote:
      "Mileage is calculated from Calgary City Centre. Some Springbank properties may fall within our free 35 km travel zone, while farther acreages may have distance-based travel pricing. We do not use a fixed Springbank travel fee; the exact travel cost is confirmed before you book.",
    travelOfferDescription:
      "Mileage is calculated from Calgary City Centre. Some Springbank properties may be free within 35 km, while farther acreages may have distance-based travel pricing confirmed before booking.",
    faqs: [
      {
        q: "Do you travel to Springbank for real estate photography?",
        a: "Yes. Photos 4 Real Estate is based in Calgary and regularly travels to Springbank for estate photography, acreage photography, drone imagery, video tours, RMS measurements, floor plans, iGUIDE tours, virtual staging, twilight photos, Style Shots, and Marketing Kit assets.",
      },
      {
        q: "What is the travel fee for Springbank?",
        a: "Springbank travel fees are calculated from Calgary City Centre. Some properties may fall within the free 35 km travel zone, while farther acreages may have distance-based travel pricing. We do not use a fixed Springbank fee, and we confirm the exact travel cost before your booking is finalized.",
      },
      {
        q: "Can you photograph Springbank acreages and luxury estates?",
        a: "Yes. We regularly photograph luxury estates, acreage homes, mountain-view properties, equestrian facilities, large private lots, gated entrances, and architectural homes throughout Springbank and nearby Rocky View County areas.",
      },
      {
        q: "Is drone photography recommended for Springbank listings?",
        a: "Yes. Drone photography is highly recommended for many Springbank listings because it helps show the scale of the land, long driveways, outbuildings, paddocks, mountain views, privacy, and the surrounding landscape.",
      },
      {
        q: "Can photos, drone, video, and floor plans be captured in one Springbank visit?",
        a: "In most cases, yes. We can coordinate photography, RMS measurements, floor plans, iGUIDE 3D tours, drone, video, twilight, and detail shots during one property visit, depending on the package and property size.",
      },
      {
        q: "How quickly do you deliver Springbank listing media?",
        a: "Most Springbank photography, floor plans, and 3D tour deliverables are sent the next morning. Video and larger luxury media packages may require additional editing time, which we confirm before the shoot.",
      },
    ],
    images: {
      hero: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/springbank/Service-Areas-Springbank.webp",
      interior:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/springbank/House-in-Springbank-1024x682.webp",
      drone:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/springbank/Acreages-in-Springbank-1024x768.webp",
    },
    imageAlts: {
      hero: "Exterior real estate photo of a luxury Springbank home with acreage setting by Photos 4 Real Estate",
      interior:
        "Bright interior real estate photo of a Springbank luxury home prepared for an MLS listing",
      drone:
        "Aerial view of Springbank acreages and surrounding land for luxury real estate marketing",
    },
  },
  bearspaw: {
    city: "Bearspaw",
    province: "AB",
    seoTitle: "Real Estate Photography Bearspaw | Photos 4 Real Estate",
    seoDescription:
      "Real estate photography in Bearspaw with luxury photos, drone, video, RMS floor plans, and 3D tours for estates, acreages, and mountain-view homes.",
    ogAlt: "Real estate photography in Bearspaw by Photos 4 Real Estate",
    heroEyebrow: "Bearspaw Luxury Real Estate Media • Acreage Coverage",
    heroIntro:
      "Bearspaw is one of Calgary’s most sought-after rural luxury communities, known for estate homes, sprawling acreages, privacy, and Rocky Mountain views. Photos 4 Real Estate creates real estate photography in Bearspaw with polished MLS-ready photos, drone imagery, cinematic video tours, RMS floor plans, and 3D media that highlight prestige, scale, and setting.",
    introHeading: "Professional real estate photography for Bearspaw estates and acreages",
    introLead:
      "Bearspaw listings need more than standard room-by-room photography. Buyers are evaluating land, architecture, privacy, long driveways, mountain views, mature landscaping, outbuildings, and proximity to Calgary. Whether the property is an executive acreage, a custom estate, or a private retreat surrounded by natural beauty, professional media helps buyers understand the full story before booking a showing.",
    introParagraphs: [
      "At Photos 4 Real Estate, we regularly travel northwest from Calgary to photograph Bearspaw estates, acreage homes, luxury residences, custom builds, and premium lots throughout Rocky View County. We focus on refined interior composition, strong exterior coverage, accurate floor plans, and image sets that support MLS, premium brochures, agent websites, social media, and high-end listing presentations.",
      "Bearspaw properties often benefit from a complete luxury media package. Drone photography helps show lot size, driveway approach, surrounding land, privacy, outbuildings, and Rocky Mountain view orientation. Video tours and Style Shots help capture unique architecture, statement rooms, custom finishes, outdoor living spaces, and the lifestyle features that make Bearspaw listings stand out in Calgary’s luxury market.",
    ],
    introStats: ["Luxury acreage market", "24h next-morning turnaround", "9 services in one visit"],
    communities: [
      "Watermark at Bearspaw",
      "Bearspaw Country Estates",
      "Silverhorn",
      "Church Ranches",
      "Lynx Ridge Area",
      "Lochend Road Acreages",
      "Bearspaw Road Area",
    ],
    propertyTypes: [
      "Luxury acreages and executive estate homes",
      "Mountain-view properties and private retreats",
      "Custom architectural homes with premium finishes",
      "Large lots, gated entrances, and long driveways",
      "Outbuildings, landscaped grounds, and rural-lifestyle features",
    ],
    localMarketTitle: "Bearspaw properties and areas we serve",
    localMarketParagraph:
      "We photograph Bearspaw listings across Watermark at Bearspaw, Bearspaw Country Estates, Silverhorn, Church Ranches, the Lynx Ridge area, Lochend Road acreages, Bearspaw Road properties, and nearby Rocky View County locations. From private retreats to modern luxury estates, we create media packages that show both the home and the acreage setting around it.",
    localMarketParagraphTwo:
      "Because Bearspaw buyers are often searching for space, privacy, views, and exclusivity, the listing media needs to show context. We combine professional photography, aerial views, video, floor plans, 3D tours, twilight photography, and detail-focused imagery when appropriate so qualified buyers can understand the property’s full value online.",
    servicesHeading: "Our Bearspaw real estate photography services",
    servicesIntro:
      "We provide a full range of luxury real estate media for Bearspaw properties, with each service linking back to the relevant service page for examples, package details, and deliverables.",
    reasonsHeading: "Why Bearspaw realtors trust Photos 4 Real Estate",
    reasonsIntro:
      "Bearspaw properties require media that captures architecture, land, privacy, and lifestyle. Our team is experienced with estate home and acreage photography, licensed drone operations, and luxury-focused marketing packages that help listings attract the right buyers.",
    whyChoose: [
      {
        title: "Acreage and estate expertise",
        icon: MapPin,
        copy: "We understand how to photograph large Bearspaw properties, luxury finishes, views, grounds, outbuildings, and outdoor features that matter to buyers.",
      },
      {
        title: "Licensed drone pilots",
        icon: Drone,
        copy: "Aerial media helps show lot context, scale, mountain views, privacy, driveway approach, and surrounding land clearly.",
      },
      {
        title: "Luxury-focused packages",
        icon: House,
        copy: "We create media that supports MLS, premium brochures, websites, reels, social campaigns, and high-end listing presentations.",
      },
      {
        title: "Fast, reliable turnaround",
        icon: Clock,
        copy: "Most photo, floor plan, and 3D tour deliverables are sent the next morning, with timelines confirmed before the shoot.",
      },
    ],
    services: [
      {
        title: "Real Estate Photography",
        href: "/services/real-estate-photography-in-calgary",
        icon: Camera,
        copy: "Polished MLS-ready photography for Bearspaw estates, interiors, exterior elevations, views, grounds, and luxury finishes.",
      },
      {
        title: "RMS Measurements & Floor Plans",
        href: "/services/rms-measurements-and-floor-plans-in-calgary",
        icon: Ruler,
        copy: "Accurate RMS measurements and floor plans for larger homes where layout, wings, suites, and finished areas need clarity.",
      },
      {
        title: "Drone Photography",
        href: "/services/real-estate-aerial-drone-photography-in-calgary",
        icon: Drone,
        copy: "Aerial coverage for acreages, long driveways, mountain views, estate lots, outbuildings, and surrounding land context.",
      },
      {
        title: "Real Estate Videography",
        href: "/services/real-estate-videos-in-calgary",
        icon: Video,
        copy: "Cinematic walkthrough and property videos that communicate flow, scale, lifestyle, and premium features for luxury buyers.",
      },
      {
        title: "iGUIDE 3D Virtual Tours",
        href: "/services/iguide-virtual-tours-in-calgary",
        icon: Box,
        copy: "Interactive 3D tours that let qualified buyers explore large Bearspaw homes remotely before scheduling a private showing.",
      },
      {
        title: "Virtual Staging",
        href: "/services/virtual-staging",
        icon: Sparkles,
        copy: "Photo-realistic staging for vacant estate rooms, guest suites, lower levels, offices, and large spaces that need visual definition.",
      },
      {
        title: "Twilight Photography",
        href: "/services/twilight-photography-for-real-estate-in-calgary",
        icon: Moon,
        copy: "Evening exterior images that highlight architecture, landscape lighting, outdoor living areas, and premium curb appeal.",
      },
      {
        title: "Style Shots",
        href: "/services/style-shots",
        icon: Images,
        copy: "Detail-focused images for custom finishes, dining rooms, staircases, fireplaces, views, patios, and architectural features.",
      },
      {
        title: "Marketing Kit",
        href: "/services/marketing-kit-for-realtors",
        icon: Megaphone,
        copy: "Social graphics, flyers, reels, and branded assets that help promote Bearspaw luxury listings across multiple channels.",
      },
    ],
    travelCards: [
      {
        variant: "free",
        icon: MapPin,
        area: "Within 35 km of Calgary City Centre",
        price: "Free",
      },
      {
        variant: "km",
        icon: Car,
        area: "Mileage calculated from Calgary City Centre",
        price: "$0.85 / km when applicable",
      },
      {
        variant: "km",
        icon: Building2,
        area: "Bearspaw acreage and estate properties",
        price: "Confirmed before booking",
      },
    ],
    travelIntro:
      "Bearspaw travel pricing depends on the property location because estate homes and acreages can vary significantly in distance from Calgary City Centre.",
    travelNote:
      "Mileage is calculated from Calgary City Centre. Some Bearspaw properties may fall within our free 35 km travel zone, while farther acreages may have distance-based travel pricing. We do not use a fixed Bearspaw travel fee; the exact travel cost is confirmed before you book.",
    travelOfferDescription:
      "Mileage is calculated from Calgary City Centre. Some Bearspaw properties may be free within 35 km, while farther acreages may have distance-based travel pricing confirmed before booking.",
    faqs: [
      {
        q: "Do you travel to Bearspaw for real estate photography?",
        a: "Yes. Photos 4 Real Estate is based in Calgary and regularly travels to Bearspaw for estate photography, acreage photography, drone imagery, video tours, RMS measurements, floor plans, iGUIDE tours, virtual staging, twilight photos, Style Shots, and Marketing Kit assets.",
      },
      {
        q: "What is the travel fee for Bearspaw?",
        a: "Bearspaw travel fees are calculated from Calgary City Centre. Some properties may fall within the free 35 km travel zone, while farther acreages may have distance-based travel pricing. We do not use a fixed Bearspaw fee, and we confirm the exact travel cost before your booking is finalized.",
      },
      {
        q: "Can you photograph Bearspaw acreages and luxury estates?",
        a: "Yes. We regularly photograph luxury estates, acreage homes, mountain-view properties, private retreats, large lots, gated entrances, and custom architectural homes throughout Bearspaw and nearby Rocky View County areas.",
      },
      {
        q: "Is drone photography recommended for Bearspaw listings?",
        a: "Yes. Drone photography is highly recommended for many Bearspaw listings because it helps show the scale of the property, long driveways, outbuildings, mountain views, privacy, and surrounding landscape.",
      },
      {
        q: "Can photos, drone, video, and floor plans be captured in one Bearspaw visit?",
        a: "In most cases, yes. We can coordinate photography, RMS measurements, floor plans, iGUIDE 3D tours, drone, video, twilight, and detail shots during one property visit, depending on the package and property size.",
      },
      {
        q: "How quickly do you deliver Bearspaw listing media?",
        a: "Most Bearspaw photography, floor plans, and 3D tour deliverables are sent the next morning. Video and larger luxury media packages may require additional editing time, which we confirm before the shoot.",
      },
    ],
    images: {
      hero: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/bearspaw/Service-Areas-Bearspaw.webp",
      interior:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/bearspaw/Luxury-dining-room-1024x682.webp",
      drone:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/bearspaw/Luxuty-stairs-1024x682.webp",
    },
    imageAlts: {
      hero: "Exterior real estate photo of a luxury Bearspaw acreage home by Photos 4 Real Estate",
      interior:
        "Luxury dining room real estate photo in a Bearspaw estate home prepared for an MLS listing",
      drone:
        "Luxury staircase detail photo in a Bearspaw estate home for high-end real estate marketing",
    },
  },
  "rocky-view-county": {
    city: "Rocky View County",
    province: "AB",
    placeType: "AdministrativeArea",
    seoTitle: "Real Estate Photography Rocky View County | Photos 4 Real Estate",
    seoDescription:
      "Real estate photography in Rocky View County with luxury photos, drone, video, RMS floor plans, and 3D tours for acreages, estates, rural homes, and commercial spaces.",
    ogAlt: "Real estate photography in Rocky View County by Photos 4 Real Estate",
    heroEyebrow: "Rocky View County Real Estate Media • Rural & Luxury Coverage",
    heroIntro:
      "Looking for professional real estate photography in Rocky View County? Photos 4 Real Estate helps realtors and property owners showcase homes, acreages, and select commercial spaces with polished high-impact visuals that attract more buyers and help listings stand out in a competitive market.",
    introHeading: "Professional real estate photography for Rocky View County properties",
    introLead:
      "Rocky View County surrounds Calgary on three sides and includes some of the region’s most desirable luxury, rural, and lifestyle-driven properties. From prestigious country communities and mountain-view acreages to modern townhomes on the county edge and rural properties with scenic surroundings, listing media needs to show both the property and the land, access, and setting that make it valuable.",
    introParagraphs: [
      "At Photos 4 Real Estate, we regularly travel throughout Rocky View County to photograph luxury estates, acreages, executive homes, country residential properties, new builds, and selected commercial spaces. We focus on clean interior composition, strong exterior coverage, accurate floor plans, and practical deliverables that agents and owners can use across MLS, websites, brochures, and social media.",
      "Rocky View County listings often compete on views, land size, privacy, commute access, and lifestyle. A property near Bragg Creek needs different visual emphasis than an acreage in Bearspaw, a home near Harmony, or a county-side listing outside Cochrane or Langdon. Drone photography, video, twilight images, and detail-focused shots help communicate those differences and give buyers a stronger reason to take a closer look.",
    ],
    introStats: ["County-wide coverage", "24h next-morning turnaround", "9 services in one visit"],
    communities: [
      "Springbank",
      "Langdon",
      "East Lake",
      "Cochrane County Side",
      "Bearspaw",
      "Elbow Valley",
      "Harmony",
    ],
    propertyTypes: [
      "Luxury estates and executive acreage homes",
      "Rural properties with foothills or prairie views",
      "County-edge homes near Calgary, Cochrane, and Langdon",
      "Private country residences with outbuildings and land",
      "Selected commercial and mixed-use real estate photography needs",
    ],
    localMarketTitle: "Popular Rocky View County communities we serve",
    localMarketParagraph:
      "We proudly serve properties across Rocky View County, including Springbank, Langdon, East Lake, county-side Cochrane locations, Bearspaw, Elbow Valley, Harmony, and surrounding rural communities. From foothills properties west of Calgary to prairie acreages east of the city, we bring the same level of professionalism, precision, and creative attention to every shoot.",
    localMarketParagraphTwo:
      "Because Rocky View County is so geographically diverse, strong listing media must be tailored to the property itself. Some listings need mountain-view context, some need to show land, shops, barns, or long approaches, and others need polished interiors that make a rural home feel as refined as an in-city luxury listing. We build the media package around those priorities so the property feels distinct and the marketing is stronger.",
    servicesHeading: "Our Rocky View County real estate photography services",
    servicesIntro:
      "We provide a full range of real estate media for Rocky View County properties, with each service linking back to the relevant service page for examples, package details, and deliverables.",
    reasonsHeading: "Why Rocky View County realtors and property owners choose Photos 4 Real Estate",
    reasonsIntro:
      "Rocky View County listings vary widely in size, style, and setting. Our team is experienced with rural homes, acreages, estate properties, aerial media, and luxury-focused marketing that helps each listing present its strongest value online.",
    whyChoose: [
      {
        title: "County and acreage expertise",
        icon: MapPin,
        copy: "We understand how to photograph properties where land, privacy, access, views, and outbuildings are part of the sales story, not just the house itself.",
      },
      {
        title: "Drone for scale and context",
        icon: Drone,
        copy: "Aerial media helps show acreage size, orientation, nearby amenities, mountain or prairie views, long driveways, and surrounding land clearly.",
      },
      {
        title: "Luxury-to-rural flexibility",
        icon: House,
        copy: "We create polished media for luxury estates, country homes, townhomes, and select commercial properties across the county.",
      },
      {
        title: "Fast, reliable turnaround",
        icon: Clock,
        copy: "Most photo, floor plan, and 3D tour deliverables are sent the next morning, with timelines confirmed before the shoot.",
      },
    ],
    services: [
      {
        title: "Real Estate Photography",
        href: "/services/real-estate-photography-in-calgary",
        icon: Camera,
        copy: "Polished MLS-ready photography for Rocky View County estates, acreages, rural homes, exteriors, views, and premium interior finishes.",
      },
      {
        title: "RMS Measurements & Floor Plans",
        href: "/services/rms-measurements-and-floor-plans-in-calgary",
        icon: Ruler,
        copy: "Accurate RMS measurements and floor plans for larger homes and properties where layout clarity helps buyers and agents plan next steps.",
      },
      {
        title: "Drone Photography",
        href: "/services/real-estate-aerial-drone-photography-in-calgary",
        icon: Drone,
        copy: "Aerial coverage for acreages, country roads, long driveways, estate lots, rural commercial spaces, and scenic foothills or prairie settings.",
      },
      {
        title: "Real Estate Videography",
        href: "/services/real-estate-videos-in-calgary",
        icon: Video,
        copy: "Cinematic walkthrough and property videos that help buyers understand scale, flow, lifestyle, and the setting around the property.",
      },
      {
        title: "iGUIDE 3D Virtual Tours",
        href: "/services/iguide-virtual-tours-in-calgary",
        icon: Box,
        copy: "Interactive 3D tours that let buyers and decision-makers explore Rocky View County properties remotely before scheduling a visit.",
      },
      {
        title: "Virtual Staging",
        href: "/services/virtual-staging",
        icon: Sparkles,
        copy: "Photo-realistic staging for vacant rooms, guest suites, offices, and large spaces that need stronger visual definition online.",
      },
      {
        title: "Twilight Photography",
        href: "/services/twilight-photography-for-real-estate-in-calgary",
        icon: Moon,
        copy: "Evening exterior images that highlight architecture, landscape lighting, outdoor living areas, and premium curb appeal for standout listings.",
      },
      {
        title: "Style Shots",
        href: "/services/style-shots",
        icon: Images,
        copy: "Detail-focused images for kitchens, finishes, outdoor entertaining areas, rural-lifestyle features, and architectural elements that help listings stand out.",
      },
      {
        title: "Marketing Kit",
        href: "/services/marketing-kit-for-realtors",
        icon: Megaphone,
        copy: "Social graphics, flyers, reels, and branded assets that help promote Rocky View County listings across multiple channels.",
      },
    ],
    travelCards: [
      {
        variant: "free",
        icon: MapPin,
        area: "Within 35 km of Calgary City Centre",
        price: "Free",
      },
      {
        variant: "km",
        icon: Car,
        area: "Mileage calculated from Calgary City Centre",
        price: "$0.85 / km when applicable",
      },
      {
        variant: "km",
        icon: Building2,
        area: "Rocky View County rural and luxury properties",
        price: "Confirmed before booking",
      },
    ],
    travelIntro:
      "Rocky View County travel pricing depends on the property location because the county covers a large area and listing addresses can vary significantly in distance from Calgary City Centre.",
    travelNote:
      "Mileage is calculated from Calgary City Centre. Some Rocky View County properties may fall within our free 35 km travel zone, while farther acreages, rural homes, and county properties may have distance-based travel pricing. We do not use a fixed Rocky View County travel fee; the exact travel cost is confirmed before you book.",
    travelOfferDescription:
      "Mileage is calculated from Calgary City Centre. Some Rocky View County properties may be free within 35 km, while farther rural and acreage properties may have distance-based travel pricing confirmed before booking.",
    faqs: [
      {
        q: "Do you travel throughout Rocky View County for real estate photography?",
        a: "Yes. Photos 4 Real Estate regularly travels throughout Rocky View County for photography, drone imagery, video tours, RMS measurements, floor plans, iGUIDE tours, virtual staging, twilight photos, Style Shots, and Marketing Kit assets.",
      },
      {
        q: "What is the travel fee for Rocky View County?",
        a: "Rocky View County travel fees are calculated from Calgary City Centre. Some properties may fall within the free 35 km travel zone, while farther rural and acreage locations may have distance-based travel pricing. We do not use a fixed Rocky View County fee, and we confirm the exact travel cost before your booking is finalized.",
      },
      {
        q: "What types of properties do you photograph in Rocky View County?",
        a: "We photograph luxury estates, acreages, rural homes, country residential properties, townhomes on the county edge, and select commercial spaces. We tailor the media package to the property type, land size, and marketing goals.",
      },
      {
        q: "Is drone photography recommended for Rocky View County listings?",
        a: "Yes. Drone photography is especially useful in Rocky View County because many listings benefit from aerial context showing land, outbuildings, driveways, views, nearby amenities, or the relationship between the home and its surroundings.",
      },
      {
        q: "Can photos, drone, video, and floor plans be captured in one Rocky View County visit?",
        a: "In most cases, yes. We can coordinate photography, RMS measurements, floor plans, iGUIDE 3D tours, drone, video, twilight, and detail shots during one property visit, depending on the package and property size.",
      },
      {
        q: "How quickly do you deliver Rocky View County listing media?",
        a: "Most Rocky View County photography, floor plans, and 3D tour deliverables are sent the next morning. Video and larger luxury or rural media packages may require additional editing time, which we confirm before the shoot.",
      },
    ],
    images: {
      hero: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/rocky-view-county/Service-Areas-Rocky-View-Country.webp",
      interior:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/rocky-view-county/House-near-Bragg-Creek-1024x768.webp",
      drone:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/rocky-view-county/Bragg-Creek-Drone-View-Rocky-View-County-1024x598.webp",
    },
    imageAlts: {
      hero: "Exterior real estate photo of a Rocky View County acreage property by Photos 4 Real Estate",
      interior:
        "Exterior real estate photo of a home near Bragg Creek in Rocky View County prepared for listing marketing",
      drone:
        "Drone view of a Bragg Creek area property in Rocky View County showing land and surrounding landscape",
    },
  },
  banff: {
    city: "Banff",
    province: "AB",
    seoTitle: "Real Estate Photography Banff | Photos 4 Real Estate",
    seoDescription:
      "Real estate photography in Banff with photos, drone, video, RMS floor plans, and 3D tours for mountain homes, condos, chalets, and luxury listings.",
    ogAlt: "Real estate photography in Banff by Photos 4 Real Estate",
    heroEyebrow: "Banff Real Estate Media • Mountain Property Coverage",
    heroIntro:
      "Banff listings need more than standard property photos. In a mountain market where buyers notice views, architecture, natural light, and lifestyle immediately, strong real estate media helps a listing stand out. Photos 4 Real Estate provides real estate photography in Banff with polished MLS-ready photos, drone imagery, video tours, RMS floor plans, and 3D media designed for mountain homes, condos, chalets, and luxury properties.",
    introHeading: "Professional real estate photography for Banff mountain listings",
    introLead:
      "Banff is one of Alberta’s most recognizable mountain communities, with a real estate market shaped by alpine views, distinctive architecture, tourism-driven appeal, and homes that often feel more like retreats than standard suburban properties. Whether the listing is a condo near downtown Banff, a chalet-style home near Tunnel Mountain, or a premium property in the Banff Springs area, the media needs to capture both the home and the atmosphere around it.",
    introParagraphs: [
      "At Photos 4 Real Estate, we travel from Calgary to create polished listing media for Banff properties that need more than ordinary coverage. We focus on clean interior composition, balanced window views, warm editorial-style detail images, and exterior photography that reflects the mountain setting without losing the practical clarity buyers need when comparing listings online.",
      "Banff homes often benefit from visuals that highlight fireplaces, vaulted ceilings, timber details, stonework, large windows, mountain-facing patios, and natural surroundings. Drone photography, video, and Style Shots help show the scale of the setting, the design character of the home, and the lifestyle cues that make Banff real estate feel distinct from listings in Calgary or nearby bedroom communities.",
    ],
    introStats: ["Mountain market coverage", "24h next-morning turnaround", "9 services in one visit"],
    communities: [
      "Downtown Banff",
      "Tunnel Mountain",
      "Banff Springs Area",
      "Middle Springs",
      "North Side Residential Areas",
      "Bow River Area",
      "Mountain-Edge Homes & Condos",
    ],
    propertyTypes: [
      "Mountain homes with premium views",
      "Condos and townhomes near downtown Banff",
      "Chalet-style and architectural properties",
      "Luxury homes with fireplaces, sunrooms, and timber details",
      "Listings where setting, trails, and alpine lifestyle help sell the property",
    ],
    localMarketTitle: "Popular Banff areas we serve",
    localMarketParagraph:
      "We photograph properties throughout Banff, including Downtown Banff, Tunnel Mountain, the Banff Springs area, Middle Springs, north-side residential pockets, Bow River-adjacent locations, and mountain-edge homes and condos. From walkable in-town properties to private mountain-view homes, we tailor the media package to the listing’s architecture, setting, and buyer profile.",
    localMarketParagraphTwo:
      "Because Banff properties often sell on atmosphere as much as square footage, the media strategy matters. Some listings need strong architectural photography, some need warm lifestyle details, and others need to showcase views, sunrooms, fireplaces, or the proximity to trails and amenities. We build the shoot around those priorities so the property feels unique instead of generic.",
    servicesHeading: "Our Banff real estate photography services",
    servicesIntro:
      "We provide a full range of real estate media for Banff properties, with each service linking back to the relevant service page for examples, package details, and deliverables.",
    reasonsHeading: "Why Banff realtors and property owners choose Photos 4 Real Estate",
    reasonsIntro:
      "Banff listings compete in a visually demanding market. Our team creates polished media that highlights mountain views, natural materials, luxury finishes, and the unique atmosphere of Banff homes without sacrificing speed or reliability.",
    whyChoose: [
      {
        title: "Mountain property experience",
        icon: MapPin,
        copy: "We understand how to photograph Banff homes where views, setting, natural light, and architecture matter as much as the floor plan itself.",
      },
      {
        title: "Editorial-style detail coverage",
        icon: Camera,
        copy: "Fireplaces, kitchens, timber details, stonework, and sunrooms are photographed in a way that supports both MLS clarity and premium marketing.",
      },
      {
        title: "Drone and video for setting",
        icon: Drone,
        copy: "Aerial and motion coverage help communicate surrounding landscape, mountain context, and the lifestyle appeal that buyers expect in Banff.",
      },
      {
        title: "Reliable turnaround",
        icon: Clock,
        copy: "Most photo, floor plan, and 3D tour deliverables are sent the next morning, with timelines confirmed before the shoot.",
      },
    ],
    services: [
      {
        title: "Real Estate Photography",
        href: "/services/real-estate-photography-in-calgary",
        icon: Camera,
        copy: "Polished MLS-ready photography for Banff homes, condos, exteriors, mountain views, premium interiors, and distinctive architectural details.",
      },
      {
        title: "RMS Measurements & Floor Plans",
        href: "/services/rms-measurements-and-floor-plans-in-calgary",
        icon: Ruler,
        copy: "Accurate RMS measurements and floor plans that help buyers understand layout and livable space before they arrange a viewing.",
      },
      {
        title: "Drone Photography",
        href: "/services/real-estate-aerial-drone-photography-in-calgary",
        icon: Drone,
        copy: "Aerial coverage for Banff properties where the surrounding mountain setting, lot position, or landscape context adds significant marketing value.",
      },
      {
        title: "Real Estate Videography",
        href: "/services/real-estate-videos-in-calgary",
        icon: Video,
        copy: "Cinematic walkthrough and property videos that capture atmosphere, flow, views, and the mountain-lifestyle story of the listing.",
      },
      {
        title: "iGUIDE 3D Virtual Tours",
        href: "/services/iguide-virtual-tours-in-calgary",
        icon: Box,
        copy: "Interactive 3D tours that let remote buyers explore Banff properties online before scheduling a visit or private showing.",
      },
      {
        title: "Virtual Staging",
        href: "/services/virtual-staging",
        icon: Sparkles,
        copy: "Photo-realistic staging for vacant or under-furnished rooms so buyers can better imagine how the property can live.",
      },
      {
        title: "Twilight Photography",
        href: "/services/twilight-photography-for-real-estate-in-calgary",
        icon: Moon,
        copy: "Evening exterior images that highlight warm interior glow, mountain ambience, and architectural presence for standout Banff listings.",
      },
      {
        title: "Style Shots",
        href: "/services/style-shots",
        icon: Images,
        copy: "Detail-focused images for kitchens, fireplaces, sunrooms, timber features, stonework, and curated mountain-home finishes.",
      },
      {
        title: "Marketing Kit",
        href: "/services/marketing-kit-for-realtors",
        icon: Megaphone,
        copy: "Social graphics, flyers, reels, and branded assets that help promote Banff listings across multiple channels.",
      },
    ],
    travelCards: [
      {
        variant: "free",
        icon: MapPin,
        area: "Within 35 km of Calgary City Centre",
        price: "Free",
      },
      {
        variant: "km",
        icon: Car,
        area: "Mileage calculated from Calgary City Centre",
        price: "$0.85 / km when applicable",
      },
      {
        variant: "km",
        icon: Building2,
        area: "Banff and nearby mountain communities",
        price: "Confirmed before booking",
      },
    ],
    travelIntro:
      "Banff travel pricing is based on the distance from Calgary City Centre, and the final travel cost is confirmed before the shoot is booked.",
    travelNote:
      "Mileage is calculated from Calgary City Centre. Banff and nearby mountain-community bookings use distance-based travel pricing depending on the property location, timing, and scope of the shoot. We do not use a fixed Banff travel fee, and the exact travel cost is confirmed before you book.",
    travelOfferDescription:
      "Mileage is calculated from Calgary City Centre. Banff and nearby mountain-community bookings use distance-based travel pricing confirmed before booking.",
    faqs: [
      {
        q: "Do you travel to Banff for real estate photography?",
        a: "Yes. Photos 4 Real Estate travels from Calgary to Banff for photography, drone imagery, video tours, RMS measurements, floor plans, iGUIDE tours, virtual staging, twilight photos, Style Shots, and Marketing Kit assets.",
      },
      {
        q: "What is the travel fee for Banff?",
        a: "Banff travel pricing is based on the distance from Calgary City Centre. We do not use a fixed Banff fee, and the exact travel cost is confirmed before your booking is finalized based on the property location and scope of the shoot.",
      },
      {
        q: "What types of properties do you photograph in Banff?",
        a: "We photograph mountain homes, condos, townhomes, chalet-style properties, luxury residences, and listings where architecture, views, fireplaces, or surrounding natural setting are part of the buyer appeal.",
      },
      {
        q: "Is drone photography useful for Banff listings?",
        a: "Yes. Drone photography can be especially useful when the listing benefits from mountain context, lot orientation, surrounding landscape, or a stronger sense of the property’s setting within Banff.",
      },
      {
        q: "Can photos, video, and floor plans be captured in one Banff visit?",
        a: "In most cases, yes. We can coordinate photography, RMS measurements, floor plans, iGUIDE 3D tours, drone, video, twilight, and detail shots during one property visit, depending on the package and property size.",
      },
      {
        q: "How quickly do you deliver Banff listing media?",
        a: "Most Banff photography, floor plans, and 3D tour deliverables are sent the next morning. Video and larger premium media packages may require additional editing time, which we confirm before the shoot.",
      },
    ],
    images: {
      hero: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/banff/Service-Areas-Banff.webp",
      interior:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/banff/Photo-of-a-kitchen-house-in-Banff.jpg",
      drone:
        "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/banff/Photo-of-a-fireplace-in-sunroom-house-in-Banff.jpg",
    },
    imageAlts: {
      hero: "Exterior real estate photo of a mountain home in Banff by Photos 4 Real Estate",
      interior:
        "Kitchen real estate photo from a Banff home showing clean finishes and mountain-home design details",
      drone:
        "Fireplace in a Banff sunroom photographed for premium mountain real estate marketing",
    },
  },
} satisfies Record<string, TownPage>;

type TownSlug = keyof typeof townPages;

function getTownContent(town: string): TownPage | undefined {
  return townPages[town as TownSlug] as TownPage | undefined;
}

function getServedPlace(content: TownPage) {
  return {
    "@type": content.placeType ?? "City",
    name: content.city,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: `Alberta, ${content.province}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(townPages).map((town) => ({ town }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town } = await params;
  const content = getTownContent(town);

  if (!content) {
    return {};
  }

  const pageUrl = `${siteConfig.url}/service-areas/${town}`;
  const ogImageUrl = `${pageUrl}/opengraph-image`;

  return {
    title: { absolute: content.seoTitle },
    description: content.seoDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      title: content.seoTitle,
      description: content.seoDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_CA",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: content.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.seoDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function ServiceAreaTownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town } = await params;
  const content = getTownContent(town);

  if (!content) {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/service-areas/${town}`;
  const ogImageUrl = `${pageUrl}/opengraph-image`;
  const businessId = `${pageUrl}#localbusiness`;
  const servedPlace = getServedPlace(content);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: siteConfig.name,
    url: pageUrl,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    image: content.images.hero,
    description: content.seoDescription,
    areaServed: servedPlace,
    serviceArea: servedPlace,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    priceRange: "$$",
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AVERAGE_RATING,
      reviewCount: REVIEW_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviewItems.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: toIsoDate(review.date),
      publisher: { "@type": "Organization", name: "Google" },
    })),
  };

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Real Estate Photography in ${content.city}`,
    serviceType: "Real Estate Photography and Real Estate Media",
    description: content.seoDescription,
    url: pageUrl,
    provider: { "@id": businessId },
    areaServed: servedPlace,
    serviceArea: servedPlace,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${content.city} Real Estate Media Services`,
      itemListElement: content.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.title} ${content.city}`,
          url: `${siteConfig.url}${service.href}`,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      url: `${siteConfig.url}/prices`,
      availability: "https://schema.org/InStock",
      description:
        content.travelOfferDescription ??
        `Travel within 35 km of Calgary City Centre is free. ${content.city} bookings are covered by a $30 flat fee.`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItemsToSchemaMainEntity(content.faqs),
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-intro", ".speakable-faq"],
    },
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: content.city },
        ]}
        jsonLdId={`ld-breadcrumb-${town}`}
      />

      <section className="services-page-hero" aria-labelledby={`${town}-hero-title`}>
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">{content.heroEyebrow}</div>
              <h1 id={`${town}-hero-title`}>
                Real Estate Photography in <em>{content.city}</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">{content.heroIntro}</p>
            </div>

            <ul className="services-page-hero-stats photo-hero-stats" aria-label={`${content.city} service area highlights`}>
              <li className="services-page-hero-stat">
                <span className="num">7</span>
                <span className="lbl">{content.introStats[0]}</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">24h</span>
                <span className="lbl">{content.introStats[1]}</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">9</span>
                <span className="lbl">{content.introStats[2]}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="photo-intro-section" aria-labelledby={`${town}-intro-heading`}>
        <div className="container">
          <div className="photo-intro-grid">
            <div className="photo-intro-content">
              <span className="section-label">{content.city} Listing Media</span>
              <h2 id={`${town}-intro-heading`}>{content.introHeading}</h2>
              <p className="lead speakable-intro">{content.introLead}</p>
              <p>{content.introParagraphs[0]}</p>
              <p>
                {content.introParagraphs[1]} See our{" "}
                <Link href="/services" className="body-link">
                  full service list
                  <span className="sr-only"> for real estate media in {content.city}</span>
                </Link>{" "}
                and{" "}
                <Link href="/service-areas" className="body-link">
                  Calgary service areas hub
                  <span className="sr-only"> for all surrounding communities we serve</span>
                </Link>
                .
              </p>
              <ul className="photo-stat-row" aria-label={`Why ${content.city} listings benefit from professional media`}>
                <li className="photo-stat-cell">
                  <span className="num">MLS</span>
                  <span className="lbl">ready photos and media</span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">Drone</span>
                  <span className="lbl">for context and larger lots</span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">1</span>
                  <span className="lbl">team for the full package</span>
                </li>
              </ul>
            </div>

            <div className="areas-visual" aria-label={`Example real estate photography from ${content.city}`}>
              <div className="areas-visual-item">
                <Image
                  src={content.images.hero}
                  alt={content.imageAlts.hero}
                  width={1600}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={content.images.interior}
                  alt={content.imageAlts.interior}
                  width={1024}
                  height={683}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={content.images.drone}
                  alt={content.imageAlts.drone}
                  width={1024}
                  height={768}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="area-services-section" aria-labelledby={`${town}-services-heading`}>
        <div className="container">
          <div className="area-section-header">
            <span className="section-label">Services in {content.city}</span>
            <h2 id={`${town}-services-heading`}>{content.servicesHeading}</h2>
            <p>{content.servicesIntro}</p>
          </div>

          <div className="area-services-grid">
            {content.services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  href={service.href}
                  className="area-service-card"
                  key={service.href}
                  aria-label={`${service.title} in ${content.city} — ${service.copy}`}
                >
                  <span className="area-service-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2.15} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <span className="area-service-link">
                    View service <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="areas-section" aria-labelledby={`${town}-areas-heading`}>
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Communities & Property Types</span>
              <h2 id={`${town}-areas-heading`}>{content.localMarketTitle}</h2>
              <p>{content.localMarketParagraph}</p>
              <p>{content.localMarketParagraphTwo}</p>
              <ul className="areas-chips" aria-label={`${content.city} communities we serve`}>
                {content.communities.map((community) => (
                  <li key={community}>
                    <span className="area-chip">
                      <MapPin size={12} aria-hidden="true" />
                      {community}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="areas-travel-note">
                <strong>Published travel pricing:</strong>{" "}
                {content.travelOfferDescription ? (
                  <>{content.travelOfferDescription}</>
                ) : (
                  <>
                    {content.city} is part of our nearby-community coverage with a <strong>$30 flat fee</strong>.
                  </>
                )}{" "}
                Review full details on our{" "}
                <Link href="/prices">pricing page</Link> or call{" "}
                <a
                  href={siteConfig.phoneHref}
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm ${content.city} travel fees`}
                >
                  {siteConfig.phone}
                </a>
                .
              </p>
            </div>

            <aside className="area-homebase-card" aria-labelledby={`${town}-property-types-heading`}>
              <span className="area-homebase-icon" aria-hidden="true">
                <House size={26} strokeWidth={2.2} />
              </span>
              <h3 id={`${town}-property-types-heading`}>What we regularly photograph in {content.city}</h3>
              <p>
                {content.city} listings often need media that highlights family-friendly
                layouts, finished basements, attached garages, backyard space,
                and neighbourhood context. We tailor the visual package to the
                property, not just the address.
              </p>
              <ul className="package-includes">
                {content.propertyTypes.map((item) => (
                  <li key={item}>
                    <span className="pkg-check" aria-hidden="true">
                      <Check size={11} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/prices" className="btn btn-primary">
                View Pricing
                <span className="sr-only"> for real estate photography in {content.city}</span>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="travel-section" aria-labelledby={`${town}-travel-heading`}>
        <div className="container">
          <div className="travel-inner">
            <div>
              <span className="section-label">Travel Fees</span>
              <h2 id={`${town}-travel-heading`}>{content.city} travel pricing is clear and published.</h2>
              <p>{content.travelIntro}</p>
              <p>
                {content.travelNote} See our{" "}
                <Link href="/prices" className="travel-call-link">
                  full pricing and package breakdown
                  <span className="sr-only"> for {content.city} real estate photography</span>
                </Link>
                .
              </p>
            </div>

            <div className="travel-cards">
              {content.travelCards.map(({ variant, icon: Icon, area, price }) => (
                <div key={area} className={`travel-card travel-${variant}`}>
                  <div className="travel-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div className="travel-info">
                    <div className="travel-area">{area}</div>
                    <div className="travel-price">{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="area-reasons-section" aria-labelledby={`${town}-why-heading`}>
        <div className="container">
          <div className="area-section-header area-section-header-centered">
            <span className="section-label">Why Choose Us</span>
            <h2 id={`${town}-why-heading`}>{content.reasonsHeading}</h2>
            <p>{content.reasonsIntro}</p>
          </div>

          <div className="area-reasons-grid">
            {content.whyChoose.map((reason) => {
              const Icon = reason.icon;
              return (
                <article className="area-reason-card" key={reason.title}>
                  <span className="area-reason-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2.2} />
                  </span>
                  <h3>{reason.title}</h3>
                  <p>{reason.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Reviews
        variant="light"
        eyebrow={`${content.city} Realtor Reviews`}
        heading={
          <>
            Agents booking <em>Photos 4 Real Estate</em> in {content.city} expect fast delivery and polished listing media.
          </>
        }
      />

      <Faq
        heading={`${content.city} Real Estate Photography FAQ`}
        intro={
          <>
            Common questions about booking real estate photography in {content.city}, including travel fees, turnaround times, and the types of homes we photograph.
          </>
        }
        faqs={content.faqs}
        allFaqsLabelSuffix={`real estate photography in ${content.city}`}
      />

      <Cta
        eyebrow={`Book ${content.city} Listing Media`}
        title={`Schedule Real Estate Photography in ${content.city}.`}
        description={
          <>
            Choose your package, send us the address, and we will confirm access,
            travel, timing, and deliverables before the shoot.
          </>
        }
        secondaryHref="/prices"
        secondaryLabel="View Pricing"
        secondarySrSuffix={` for real estate photography in ${content.city}`}
      />

      <JsonLd id={`ld-localbusiness-${town}`} data={localBusinessSchema} />
      <JsonLd id={`ld-service-area-${town}`} data={serviceAreaSchema} />
      <JsonLd id={`ld-faq-${town}`} data={faqSchema} />
      <JsonLd id={`ld-speakable-${town}`} data={speakableSchema} />
    </>
  );
}