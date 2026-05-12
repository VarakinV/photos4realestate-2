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
} satisfies Record<string, TownPage>;

type TownSlug = keyof typeof townPages;

function getTownContent(town: string) {
  return townPages[town as TownSlug];
}

function getServedPlace(content: TownPage) {
  return {
    "@type": "City",
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
      itemReviewed: { "@id": businessId },
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
      description: `Travel within 35 km of Calgary City Centre is free. ${content.city} bookings are covered by a $30 flat fee.`,
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
                <strong>Published travel pricing:</strong> {content.city} is part of our nearby-community coverage with a <strong>$30 flat fee</strong>. Review full details on our{" "}
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