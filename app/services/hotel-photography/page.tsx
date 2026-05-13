import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Building2,
  Camera,
  Check,
  ClipboardCheck,
  Clock,
  Download,
  Drone,
  Dumbbell,
  Hotel,
  Image as ImageIcon,
  MapPin,
  Presentation,
  Sparkles,
  TreePine,
  Utensils,
  Video,
  Waves,
  Wine,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { Reviews } from "@/components/home/Reviews";
import { HotelPhotographyGallery } from "@/components/hotel/HotelPhotographyGallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import type { Faq as FaqItem } from "@/lib/faqs";
import { getHotelGalleryCategories, type HotelGalleryCategory } from "@/lib/hotel-portfolio";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";
import { serviceAreas, siteConfig } from "@/lib/site";

export const revalidate = 3600;

const pageUrl = `${siteConfig.url}/services/hotel-photography`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const businessId = `${siteConfig.url}/#business`;
const businessRef = { "@id": businessId };

const title = "Hotel Photography Calgary | Photos 4 Real Estate";
const description =
  "Professional hotel photography in Calgary & Alberta for rooms, amenities, lobbies, pools and drone aerials. Packages from $1,995. Book online today.";

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Hotel photography in Calgary and Alberta by Photos 4 Real Estate",
};

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      title: "Hotel Photography That Fills Rooms | Photos 4 Real Estate",
      description:
        "From boutique inns to full-service hotels, we capture the rooms, amenities, exterior, and drone aerials that drive bookings.",
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_CA",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

const hotelAreas = [
  ...serviceAreas,
  "Edmonton",
  "Canmore",
  "Red Deer",
  "Lethbridge",
  "Medicine Hat",
  "Alberta",
] as const;

const introCards = [
  {
    icon: <ImageIcon size={22} aria-hidden="true" />,
    title: "OTA-Optimized Delivery",
    text: "High-resolution and web-ready JPEGs for Booking.com, Expedia, Google Hotels, brand websites, social media, and print campaigns.",
  },
  {
    icon: <Drone size={22} aria-hidden="true" />,
    title: "Drone Aerials Included",
    text: "Transport Canada licensed aerial photography is included in every hotel package, with flight planning and weather coordination handled for you.",
  },
  {
    icon: <ClipboardCheck size={22} aria-hidden="true" />,
    title: "Prep Guidance for Teams",
    text: "Your housekeeping, maintenance, and operations teams receive clear preparation guidance so each room and amenity is camera-ready.",
  },
] as const;

const spaces = [
  [<BedDouble size={22} aria-hidden="true" key="rooms" />, "Guest Rooms", "Standard rooms, deluxe categories, suites, accessible rooms, and executive floors."],
  [<Building2 size={22} aria-hidden="true" key="lobby" />, "Lobby & Reception", "Entrances, check-in desks, lounges, seating areas, and first-impression moments."],
  [<Utensils size={22} aria-hidden="true" key="dining" />, "Breakfast & Dining", "Restaurants, buffet setups, breakfast areas, private dining, and room-service presentation."],
  [<Waves size={22} aria-hidden="true" key="pool" />, "Pool & Aquatics", "Indoor and outdoor pools, hot tubs, pool decks, lounge areas, and aquatic amenities."],
  [<Dumbbell size={22} aria-hidden="true" key="fitness" />, "Fitness Centre", "Gym equipment, yoga studios, wellness rooms, and guest fitness facilities."],
  [<Presentation size={22} aria-hidden="true" key="events" />, "Conference & Events", "Conference halls, boardrooms, banquet rooms, ballrooms, and event function spaces."],
  [<Wine size={22} aria-hidden="true" key="bar" />, "Bar & Lounge", "Hotel bars, cocktail lounges, rooftop terraces, patios, and social gathering spaces."],
  [<Sparkles size={22} aria-hidden="true" key="spa" />, "Spa & Wellness", "Treatment rooms, relaxation lounges, steam rooms, saunas, and wellness spaces."],
  [<TreePine size={22} aria-hidden="true" key="grounds" />, "Exterior & Grounds", "Facades, entrances, landscaping, parking, signage, outdoor features, and drone views."],
] as const;

const packages = [
  {
    name: "Standard",
    price: "$1,995",
    note: "Best for boutique and mid-size hotels",
    featured: false,
    features: [
      "All major amenities photographed",
      "Up to 10 guest rooms in different styles or layouts",
      "Exterior photography and drone aerials",
      "100–120 professionally edited photos",
      "OTA-ready JPEG delivery and commercial licence",
      "Private online gallery download",
    ],
    href: siteConfig.bookingUrl,
    cta: "Get a Quote",
  },
  {
    name: "Advanced",
    price: "$2,595",
    note: "Most popular for full-service properties",
    featured: true,
    features: [
      "All amenities and guest spaces photographed",
      "Up to 15 guest rooms in different styles or layouts",
      "Exterior photography and drone aerials",
      "Up to 150 professionally edited photos",
      "OTA-ready JPEG delivery and commercial licence",
      "Private online gallery download",
    ],
    href: siteConfig.bookingUrl,
    cta: "Get a Quote",
  },
  {
    name: "Custom",
    price: "Custom",
    note: "For resorts, multi-day shoots, or Western Canada projects",
    featured: false,
    features: [
      "Unlimited room types and property categories",
      "Multi-day coverage for large properties",
      "Drone aerials included",
      "Custom photo count and shot list",
      "Photo and video combinations available",
      "Seasonal refresh or priority scheduling options",
    ],
    href: "/contact-us",
    cta: "Contact Us",
  },
] as const;

const addOns = [
  {
    icon: <Clock size={22} aria-hidden="true" />,
    title: "Twilight Exterior Session",
    price: "+$300",
    text: "Capture the building at dusk with warm interior lights, blue-hour sky, and an inviting hero image for websites and OTA listings.",
  },
  {
    icon: <Video size={22} aria-hidden="true" />,
    title: "Promo Video",
    price: "+$500",
    text: "A 60–90 second cinematic hotel walkthrough delivered in horizontal and vertical formats, with drone footage included.",
  },
] as const;

const processSteps = [
  ["01", "Pre-Shoot Consultation", "We discuss your property, goals, OTA requirements, and create a detailed shot list with your team."],
  ["02", "Shoot Day Coordination", "We work with housekeeping and operations so rooms, amenities, and guest-facing spaces are ready on schedule."],
  ["03", "Editing & Colour Grading", "Images receive HDR blending, colour correction, window pull-through, sky replacement, and professional retouching."],
  ["04", "Delivery & Licensing", "Final files are delivered through a private online gallery with OTA-ready versions and a commercial usage licence."],
] as const;

const whyCards = [
  {
    icon: <ImageIcon size={22} aria-hidden="true" />,
    title: "OTA Platform Expertise",
    text: "We understand the specific image requirements, dimensions, and quality standards for Booking.com, Expedia, Hotels.com, and Google Hotels. Your images are delivered ready to upload.",
  },
  {
    icon: <Drone size={22} aria-hidden="true" />,
    title: "Licensed Drone Operator",
    text: "Transport Canada certified aerial photography included in every package. We handle all flight planning, airspace clearance, and weather contingencies at no extra cost.",
  },
  {
    icon: <ClipboardCheck size={22} aria-hidden="true" />,
    title: "Full Prep Coordination",
    text: "Our detailed Photography Preparation Checklist guides your housekeeping, maintenance, and operations teams so every space is perfectly staged before we arrive.",
  },
  {
    icon: <BadgeCheck size={22} aria-hidden="true" />,
    title: "Professional Post-Processing",
    text: "Every image is professionally edited — HDR enhancement, colour correction, window pull-through, sky replacement, and retouching included as standard.",
  },
  {
    icon: <Clock size={22} aria-hidden="true" />,
    title: "Fast Turnaround",
    text: "Standard turnaround is 2–3 business days. Rush delivery available. We know your team needs to update listings and launch campaigns on schedule.",
  },
  {
    icon: <MapPin size={22} aria-hidden="true" />,
    title: "Alberta-Wide Coverage",
    text: "Based in Calgary, we serve hotels and resorts across all of Alberta — from downtown hotels to mountain resorts in Banff, Canmore, and Jasper.",
  },
] as const;

const prepColumns = [
  {
    icon: <BedDouble size={22} aria-hidden="true" />,
    title: "Housekeeping",
    items: [
      "Iron or steam sheets and pillowcases so linens appear crisp and crease-free.",
      "Tuck sheets tightly and stage robes, towels, and pillows according to brand standards.",
      "Clean reflective surfaces including mirrors, TVs, shower doors, and windows.",
      "Stage rooms as the average guest will experience them, without visible clutter.",
    ],
  },
  {
    icon: <Hotel size={22} aria-hidden="true" />,
    title: "Maintenance",
    items: [
      "Replace burnt-out bulbs and ensure matching colour temperature where possible.",
      "Level artwork, mirrors, curtains, and furniture before the photographer arrives.",
      "Hide loose cables, maintenance equipment, wet-floor signs, bins, and cleaning carts.",
      "Confirm pools, spas, restaurants, meeting rooms, and exterior signage are guest-ready.",
    ],
  },
  {
    icon: <Camera size={22} aria-hidden="true" />,
    title: "Shoot-Day Staging",
    items: [
      "Reserve photographed rooms and amenities so they remain untouched during the shoot.",
      "Open drapes, turn on all lights, and ensure amenities are accessible at scheduled times.",
      "Face toiletry labels neatly toward camera-ready angles and remove duplicate products.",
      "Coordinate staff and guest access so busy areas can be photographed cleanly and safely.",
    ],
  },
] as const;

const faqs: FaqItem[] = [
  {
    q: "How much does hotel photography cost in Calgary?",
    a: "Hotel photography packages start at $1,995 CAD for the Standard package, which includes all major amenities, up to 10 guest rooms in different styles or layouts, exterior photography, drone aerials, and 100–120 professionally edited photos. The Advanced package is $2,595 and covers all amenities, up to 15 guest rooms, and up to 150 photos. For larger properties, full resorts, or multi-day shoots, we provide a custom quote.",
  },
  {
    q: "Is drone photography included in hotel packages?",
    a: "Yes. Aerial drone photography is included in both Standard and Advanced hotel photography packages at no extra cost. We are a Transport Canada licensed drone operator and handle flight planning, airspace checks, weather contingencies, and safe capture of your property's exterior context.",
  },
  {
    q: "How long does a hotel photography shoot take?",
    a: "A typical hotel photography shoot takes 4 to 8 hours depending on property size, number of spaces, and the package selected. Larger hotels, resorts, or properties with extensive amenities may require two visits. Twilight photography is usually scheduled as a separate dusk session.",
  },
  {
    q: "How do I prepare my hotel for a photography shoot?",
    a: "We provide preparation guidance covering housekeeping, maintenance, and shoot-day staging. This includes ironing linens, straightening drapes, replacing burnt-out bulbs, hiding cables, removing clutter, staging toiletries, reserving rooms, and coordinating access to amenities before we arrive.",
  },
  {
    q: "What formats and resolution are the final photos delivered in?",
    a: "Photos are delivered as high-resolution JPEGs for print and large-format use, plus web-optimized versions for Booking.com, Expedia, Google Hotels, your website, and social media. Files are delivered through a private online gallery with a simple download link.",
  },
  {
    q: "Do you offer hotel photography outside Calgary?",
    a: "Yes. We serve hotels and resorts across Alberta, including Edmonton, Banff, Canmore, Red Deer, Lethbridge, Medicine Hat, and mountain resort communities. Travel fees may apply for properties more than 60 km from Calgary. We also consider Western Canada projects by custom quote.",
  },
  {
    q: "Can I get both photography and a promo video in one shoot?",
    a: "Yes. Our promo video add-on can be combined with any hotel photography package during one coordinated property visit. The video is 60–90 seconds, can include drone footage, and is delivered in horizontal and vertical formats for websites, YouTube, Instagram Reels, TikTok, and Facebook.",
  },
  {
    q: "How many guest rooms should we include in the shoot?",
    a: "The goal is to represent every distinct room type and layout your hotel offers, not necessarily every individual room. The Standard package covers up to 10 room types and the Advanced package covers up to 15. We will review your room inventory during pre-shoot planning and prioritize the most important categories.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Hotel Photography Calgary",
  serviceType: "Hotel and hospitality photography",
  provider: businessRef,
  areaServed: [...hotelAreas],
  url: pageUrl,
  description,
  offers: {
    "@type": "OfferCatalog",
    name: "Hotel Photography Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Standard Hotel Photography Package",
        price: "1995",
        priceCurrency: "CAD",
        url: pageUrl,
        description:
          "All major amenities, up to 10 guest rooms, exterior, drone aerials, and 100–120 photos.",
      },
      {
        "@type": "Offer",
        name: "Advanced Hotel Photography Package",
        price: "2595",
        priceCurrency: "CAD",
        url: pageUrl,
        description:
          "All amenities, up to 15 guest rooms, exterior, drone aerials, and up to 150 photos.",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(faqs),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessId,
  name: siteConfig.name,
  url: siteConfig.url,
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
    itemReviewed: { "@id": businessId },
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: businessRef,
  inLanguage: "en-CA",
  primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-intro", ".speakable-faq"],
  },
};

function hotelGallerySchema(categories: HotelGalleryCategory[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Hotel Photography Gallery Calgary",
    description: "A selection of hotel and hospitality photography work across Calgary and Alberta.",
    url: `${pageUrl}#hotel-gallery`,
    author: businessRef,
    hasPart: categories.flatMap((category) => category.images).slice(0, 24).map((image) => ({
      "@type": "ImageObject",
      contentUrl: image.src,
      description: image.alt,
      name: image.caption,
      author: businessRef,
    })),
  };
}

export default async function HotelPhotographyPage() {
  const hotelGalleryCategories = await getHotelGalleryCategories();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Hotel Photography" },
        ]}
        jsonLdId="ld-breadcrumb-hotel-photography"
      />

      <section className="services-page-hero hotel-hero" aria-labelledby="hotel-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Hospitality Photography · Alberta-Wide</div>
              <h1 id="hotel-hero-title">
                Hotel Photography in Calgary<br></br> That <em>Drives Bookings</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Professional hotel photography for every space that earns a 5-star stay — from guest rooms and lobbies to pools, conference halls, exterior images, and drone aerials. Serving Calgary and all of Alberta.
              </p>
              <div className="tool-detail-hero-actions">
                <a href={siteConfig.bookingUrl} className="btn btn-primary">
                  Get a Free Quote
                  <span className="sr-only"> for hotel photography in Calgary and Alberta</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <Link href="#packages" className="btn btn-outline">
                  View Packages
                  <span className="sr-only"> for hotel photography</span>
                </Link>
              </div>
            </div>

            <ul className="services-page-hero-stats" aria-label="Hotel photography package highlights">
              <li className="services-page-hero-stat"><span className="num">100+</span><span className="lbl">Photos per shoot</span></li>
              <li className="services-page-hero-stat"><span className="num">$1,995</span><span className="lbl">Starting price</span></li>
              <li className="services-page-hero-stat"><span className="num">Drone</span><span className="lbl">Included in all packages</span></li>
            </ul>
          </div>
        </div>
      </section>

      <PageBody hotelGalleryCategories={hotelGalleryCategories} />

      <JsonLd id="ld-service-hotel-photography" data={serviceSchema} />
      <JsonLd id="ld-gallery-hotel-photography" data={hotelGallerySchema(hotelGalleryCategories)} />
      <JsonLd id="ld-faq-hotel-photography" data={faqSchema} />
      <JsonLd id="ld-reviews-hotel-photography" data={reviewSchema} />
      <JsonLd id="ld-webpage-hotel-photography" data={webPageSchema} />
    </>
  );
}

function PageBody({ hotelGalleryCategories }: { hotelGalleryCategories: HotelGalleryCategory[] }) {
  return (
    <>
      <section className="hotel-intro-section" aria-labelledby="hotel-intro-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">Why It Matters</span>
              <h2 id="hotel-intro-heading">First Impressions Live on Your Photos.</h2>
              <p className="lead speakable-intro">
                When travellers compare hotels on Booking.com, Expedia, or Google Hotels, the photography makes the decision before the price, before the reviews, and before they visit your website. Properties with professional photos command higher average daily rates and see significantly better click-through rates on OTA platforms.
              </p>
              <p>
                Photos 4 Real Estate brings the same precision and quality we apply to luxury residential listings to every hospitality shoot. We understand lighting, staging, exterior timing, drone capture, and the technical requirements of OTA platforms.
              </p>
              <p>
                From boutique Calgary hotels to full-service resort properties across Alberta, we cover the complete guest journey with professional post-processing, commercial usage, and a smooth pre-shoot workflow for your team.
              </p>
            </div>
            <div className="hotel-intro-cards">
              {introCards.map((card) => (
                <article className="hotel-mini-card" key={card.title}>
                  <span className="hotel-card-icon">{card.icon}</span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hotel-coverage-section" aria-labelledby="hotel-coverage-heading">
        <div className="container">
          <div className="tool-detail-centered hotel-section-header">
            <span className="section-label">Full Property Coverage</span>
            <h2 id="hotel-coverage-heading">Every Space That Earns a 5-Star Stay.</h2>
            <p>We photograph the complete guest journey — from arrival and check-in to the amenities, room details, and aerial context that help travellers book with confidence.</p>
          </div>
          <div className="hotel-coverage-grid">
            {spaces.map(([icon, heading, text]) => (
              <article className="hotel-card" key={String(heading)}>
                <span className="hotel-card-icon">{icon}</span>
                <h3>{heading}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="hotel-packages-section" aria-labelledby="hotel-packages-heading">
        <div className="container">
          <div className="tool-detail-centered hotel-section-header">
            <span className="section-label">Packages & Pricing</span>
            <h2 id="hotel-packages-heading">Transparent Hotel Photography Packages.</h2>
            <p>Drone aerials are included in every package — no surprises on your invoice and no extra vendor to coordinate.</p>
          </div>
          <div className="hotel-drone-badge">
            <Drone size={18} aria-hidden="true" />
            Drone aerials included in all packages — Transport Canada licensed
          </div>
          <div className="hotel-packages-grid">
            {packages.map((pkg) => (
              <article className={`hotel-price-card${pkg.featured ? " is-featured" : ""}`} key={pkg.name}>
                {pkg.featured ? <div className="hotel-featured-badge">Most Popular</div> : null}
                <div className="hotel-price-header">
                  <h3>{pkg.name}</h3>
                  <span>{pkg.note}</span>
                </div>
                <div className="hotel-price">{pkg.price}</div>
                <ul className="hotel-feature-list">
                  {pkg.features.map((feature) => (
                    <li key={feature}><Check size={15} aria-hidden="true" />{feature}</li>
                  ))}
                </ul>
                {pkg.href.startsWith("http") ? (
                  <a href={pkg.href} className={`btn ${pkg.featured ? "btn-primary" : "btn-outline-dark"}`}>
                    {pkg.cta}
                    <span className="sr-only"> for the {pkg.name} hotel photography package</span>
                  </a>
                ) : (
                  <Link href={pkg.href} className="btn btn-outline-dark">
                    {pkg.cta}
                    <span className="sr-only"> about custom hotel photography</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
          <h3 className="hotel-addons-title">Add-On Services</h3>
          <div className="hotel-addons-grid" aria-label="Hotel photography add-ons">
            {addOns.map((addon) => (
              <article className="hotel-addon-card" key={addon.title}>
                <span className="hotel-card-icon">{addon.icon}</span>
                <div>
                  <h3>{addon.title}</h3>
                  <p>{addon.text}</p>
                </div>
                <strong>{addon.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hotel-gallery" className="vs-slider-section hotel-gallery-section" aria-labelledby="hotel-gallery-heading">
        <div className="container">
          <div className="vs-slider-header">
            <span className="section-label">Portfolio</span>
            <h2 id="hotel-gallery-heading">Hotel Photography Gallery</h2>
            <p>A selection of our hotel and hospitality work across Calgary and Alberta.</p>
          </div>
          <HotelPhotographyGallery categories={hotelGalleryCategories} />
        </div>
      </section>

      <section className="process-section hotel-process-section" aria-labelledby="hotel-process-heading">
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="hotel-process-heading">Our Hotel Photography Process.</h2>
            <p>A smooth, coordinated workflow that respects your team&apos;s time and your guests&apos; experience.</p>
          </div>
          <div className="process-steps">
            {processSteps.map(([num, heading, text]) => (
              <article className="process-step" key={num}>
                <div className="step-num" aria-hidden="true">{num}</div>
                <h3>{heading}</h3>
                <p>{text}</p>
                <div className="step-arrow" aria-hidden="true">→</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hotel-why-section" aria-labelledby="hotel-why-heading">
        <div className="container">
          <div className="tool-detail-centered hotel-section-header">
            <span className="section-label">Why Choose Us</span>
            <h2 id="hotel-why-heading">Why Hotels Choose Photos 4 Real Estate.</h2>
            <p>We bring real estate photography precision to every hospitality project — with the OTA knowledge and operational experience hotels need.</p>
          </div>
          <div className="hotel-why-grid">
            {whyCards.map((card) => (
              <article className="hotel-why-card" key={card.title}>
                <span className="hotel-card-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hotel-prep-section" aria-labelledby="hotel-prep-heading">
        <div className="container">
          <div className="tool-detail-centered hotel-section-header">
            <span className="section-label">Preparation Guide</span>
            <h2 id="hotel-prep-heading">Hotel Photography Preparation Checklist.</h2>
            <p>Every client receives preparation guidance before the shoot. Share these priorities with housekeeping, maintenance, and front-of-house teams so each space is camera-ready.</p>
          </div>
          <div className="hotel-checklist-grid">
            {prepColumns.map((column) => (
              <article className="hotel-checklist-card" key={column.title}>
                <div className="hotel-checklist-title">
                  <span className="hotel-card-icon">{column.icon}</span>
                  <h3>{column.title}</h3>
                </div>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="hotel-prep-download">
            <div>
              <h3>Download the Full Checklist</h3>
              <p>A print-ready PDF version of our complete Hotel Photography Preparation Checklist — ready to share with your team and tick off on shoot day.</p>
            </div>
            <a
              href="https://cdn.photos4realestate.ca/p4re-static-media/hotel-photography/Photography%20Preparation%20Checklist%20for%20Hotels%20-%20Photos%204%20Real%20Estate.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
              aria-label="Download the PDF hotel photography preparation checklist"
            >
              Download PDF Checklist
              <span className="sr-only"> for hotel photography preparation</span>
              <Download size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="areas-section hotel-areas-section" aria-labelledby="hotel-areas-heading">
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="hotel-areas-heading">Hotel Photography Across Alberta.</h2>
              <p>Based in Calgary, we travel to hotels, resorts, inns, and hospitality properties throughout Alberta and Western Canada. Travel fees may apply for properties more than 60 km from Calgary.</p>
              <ul className="areas-chips" aria-label="Hotel photography service areas">
                {hotelAreas.map((area) => (
                  <li key={area}>
                    <Link href="/service-areas" className="area-chip" aria-label={`Hotel photography in ${area}`}>
                      <MapPin size={12} aria-hidden="true" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hotel-areas-panel">
              <Hotel size={40} aria-hidden="true" />
              <h3>Calgary-Based. Alberta-Wide.</h3>
              <p>We regularly coordinate hospitality shoots around active operations, guest access, weather windows, and drone-safe timing.</p>
            </div>
          </div>
        </div>
      </section>

      <Reviews
        variant="dark"
        eyebrow="Client Reviews"
        heading={<>Trusted Photography for Properties That Need to Look Their Best Online.</>}
      />

      <Faq
        heading="Hotel Photography FAQ"
        intro={<>Everything you need to know before booking hotel photography in Calgary or across Alberta. Have a question not covered here? Call or text us at <a href={siteConfig.phoneHref} className="faq-phone-link">{siteConfig.phone}</a>.</>}
        faqs={faqs}
        allFaqsLabelSuffix="hotel photography in Calgary and Alberta"
      />

      <Cta
        eyebrow="Ready To Fill More Rooms?"
        title="Book Hotel Photography That Helps Guests Choose You."
        description={<>Let&rsquo;s discuss your property and build the right hotel photography package — rooms, amenities, exterior, drone aerials, and OTA-ready delivery.</>}
        primaryLabel="Get a Free Quote"
        primarySrSuffix=" for hotel photography in Calgary and Alberta"
        secondaryHref="#packages"
        secondaryLabel="View Packages"
        secondarySrSuffix=" for hotel photography"
      />
    </>
  );
}