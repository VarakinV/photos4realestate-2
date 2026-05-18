import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Building2,
  Camera,
  Check,
  Clock,
  Drone,
  MapPin,
  Mountain,
  Ruler,
  ShieldCheck,
  Sparkles,
  Trees,
  Video,
} from "lucide-react";
import { Faq } from "@/components/home/Faq";
import { Reviews } from "@/components/home/Reviews";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import type { Faq as FaqItem } from "@/lib/faqs";
import { siteConfig, serviceAreas, services } from "@/lib/site";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/service-areas`;
const ogImageUrl = `${pageUrl}/opengraph-image`;

const title = "Real Estate Service Areas Calgary | Photos 4 Real Estate";
const description =
  "Professional real estate photography service areas across Calgary, Airdrie, Okotoks, Cochrane & nearby communities. See where we travel and book online.";

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Real estate photography service areas in Calgary and surrounding communities",
};

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      title,
      description,
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

const quadrants = [
  {
    name: "South East Calgary",
    icon: Building2,
    intro:
      "Fast-growing lake communities, newer builds, and family neighbourhoods where bright, inviting listing media matters.",
    communities: [
      "Seton",
      "Mahogany",
      "Auburn Bay",
      "Cranston",
      "Legacy",
      "McKenzie Towne",
      "Copperfield",
      "Chaparral",
      "Midnapore",
      "Sundance",
      "Beacon Hill",
      "Acadia",
      "Millrise",
    ],
  },
  {
    name: "South West Calgary",
    icon: Trees,
    intro:
      "Established communities, mountain views, parks, pathways, and spacious homes photographed with clean composition.",
    communities: [
      "Evergreen",
      "Silverado",
      "Bridlewood",
      "Shawnessy",
      "Woodbine",
      "Discovery Ridge",
      "Aspen Woods",
      "Millrise",
      "Willow Park",
      "Palliser",
      "Lake Bonavista",
      "Glamorgan",
      "North Glenmore Park",
    ],
  },
  {
    name: "North East Calgary",
    icon: MapPin,
    intro:
      "A diverse mix of newer developments and established family homes, from townhomes to larger detached properties.",
    communities: [
      "Martindale",
      "Saddle Ridge",
      "Citadel",
      "Taradale",
      "Falconridge",
      "Castleridge",
      "Pineridge",
      "Whitehorn",
      "Temple",
      "Skyview Ranch",
      "Erin Woods",
      "Rundle",
      "Monterey Park",
      "Coral Springs",
    ],
  },
  {
    name: "North West Calgary",
    icon: Mountain,
    intro:
      "Master-planned communities, infills, luxury homes, schools, green spaces, and lifestyle-driven neighbourhoods.",
    communities: [
      "Panorama Hills",
      "Nolan Hill",
      "Coventry Hills",
      "Hidden Valley",
      "Sage Hill",
      "Varsity",
      "University District",
      "Rocky Ridge",
      "Arbour Lake",
      "Hamptons",
      "Scenic Acres",
      "Royal Oak",
      "Crestmont",
      "Evanston",
      "Harvest Hills",
      "Symons Valley",
    ],
  },
] as const;

const townCards = [
  {
    name: "Airdrie",
    slug: "airdrie",
    image: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/Service-Areas-Airdrie.webp",
    alt: "Real estate photography service area card for Airdrie homes near Calgary",
    summary: "Growing north-of-Calgary market with family homes, new communities, and commuter-friendly listings.",
  },
  {
    name: "Banff",
    slug: "banff",
    image: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/Service-Areas-Banff.webp",
    alt: "Real estate photography service area card for Banff mountain properties",
    summary: "Mountain-town listings, vacation properties, and lifestyle-focused real estate media west of Calgary.",
  },
  {
    name: "Bearspaw",
    slug: "bearspaw",
    image: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/Service-Areas-Bearspaw.webp",
    alt: "Real estate photography service area card for Bearspaw luxury acreage listings",
    summary: "Luxury acreages, estate homes, and large lots that benefit from drone and twilight photography.",
  },
  {
    name: "Chestermere",
    slug: "chestermere",
    image: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/Service-Areas-Chestermere.webp",
    alt: "Real estate photography service area card for Chestermere lake community homes",
    summary: "Lake-community homes, newer builds, and waterfront listings just east of Calgary.",
  },
  {
    name: "Cochrane",
    slug: "cochrane",
    image: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/Service-Areas-Cochrane.webp",
    alt: "Real estate photography service area card for Cochrane homes and foothills properties",
    summary: "Foothills views, family neighbourhoods, and properties where surrounding scenery helps sell the story.",
  },
  {
    name: "High River",
    slug: "high-river",
    image: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/Service-Areas-High-River.webp",
    alt: "Real estate photography service area card for High River homes south of Calgary",
    summary: "South-of-Calgary listings with small-town charm, detached homes, and open residential layouts.",
  },
  {
    name: "Okotoks",
    slug: "okotoks",
    image: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/Service-Areas-Okotoks.webp",
    alt: "Real estate photography service area card for Okotoks family homes near Calgary",
    summary: "A busy Foothills market with family homes, newer communities, and polished MLS-ready media needs.",
  },
  {
    name: "Rocky View County",
    slug: "rocky-view-county",
    image: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/Service-Areas-Rocky-View-Country.webp",
    alt: "Real estate photography service area card for Rocky View County acreages",
    summary: "Acreages, estate properties, rural land, and homes where aerial context is especially valuable.",
  },
  {
    name: "Springbank",
    slug: "springbank",
    image: "https://cdn.photos4realestate.ca/p4re-static-media/service-areas/Service-Areas-Springbank.webp",
    alt: "Real estate photography service area card for Springbank luxury homes and acreages",
    summary: "Premium west-Calgary acreages, luxury estates, and mountain-view properties requiring elevated media.",
  },
] as const;

const serviceHighlights = [
  {
    title: "Real Estate Photography",
    href: "/services/real-estate-photography-in-calgary",
    icon: Camera,
    copy: "Bright interior and exterior photography edited for MLS, websites, print, and social media.",
  },
  {
    title: "Drone Imagery",
    href: "/services/real-estate-aerial-drone-photography-in-calgary",
    icon: Drone,
    copy: "Aerial photos and video for acreages, lake communities, large lots, views, and location context.",
  },
  {
    title: "Video Tours",
    href: "/services/real-estate-videos-in-calgary",
    icon: Video,
    copy: "Cinematic property walkthroughs edited for MLS, YouTube, Instagram, Facebook, and TikTok.",
  },
  {
    title: "RMS Floor Plans",
    href: "/services/rms-measurements-and-floor-plans-in-calgary",
    icon: Ruler,
    copy: "RECA-compliant RMS measurements and 2D floor plans delivered with your listing media.",
  },
  {
    title: "iGUIDE 3D Tours",
    href: "/services/iguide-virtual-tours-in-calgary",
    icon: Box,
    copy: "Interactive 3D tours with floor plan integration for buyers who want to explore remotely.",
  },
  {
    title: "Virtual Staging",
    href: "/services/virtual-staging",
    icon: Sparkles,
    copy: "Photo-realistic furnishings, decluttering, and enhancement options for vacant or dated rooms.",
  },
] as const;

const reasons = [
  {
    icon: Camera,
    title: "Professional quality",
    copy: "Images, video, drone shots, and tours that showcase every home at its best.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    copy: "Most listing media is delivered the next morning so you can launch quickly.",
  },
  {
    icon: Check,
    title: "MLS & CREA ready",
    copy: "Files are prepared for listing platforms, agent websites, and social media campaigns.",
  },
  {
    icon: ShieldCheck,
    title: "Insured drone operators",
    copy: "Safe, legal aerial imagery for homes, acreages, communities, and surrounding amenities.",
  },
] as const;

const serviceAreasFaqs: FaqItem[] = [
  {
    q: "What real estate photography service areas do you cover from Calgary?",
    a: "Photos 4 Real Estate is based in Calgary and serves all four city quadrants plus surrounding communities including Airdrie, Okotoks, Cochrane, Chestermere, High River, Bearspaw, Springbank, Rocky View County, and Banff.",
  },
  {
    q: "Is Calgary your home base?",
    a: "Yes. Calgary is our home base, and our photographers are on the ground in the city every day. The surrounding communities listed on this page are areas we regularly travel to for real estate photography, drone imagery, video tours, RMS measurements, floor plans, iGUIDE tours, and virtual staging.",
  },
  {
    q: "Do you charge travel fees outside Calgary?",
    a: "Some properties outside Calgary may have a travel fee depending on distance and scheduling. Nearby communities are commonly served, and we are happy to confirm any travel cost before you book. You can also review package details on our <a href=\"/prices\">real estate photography pricing page</a>.",
  },
  {
    q: "Can you complete photos, drone, video, and floor plans in one visit?",
    a: "Yes. In most Calgary and surrounding-area bookings, photography, RMS measurements, iGUIDE 3D tour, floor plans, drone, and video can be captured in one property visit. This keeps the process simple for agents, sellers, tenants, and homeowners.",
  },
  {
    q: "How quickly do you deliver listing media in surrounding communities?",
    a: "Next-day delivery is our standard for most photography, floor plans, and 3D tour deliverables across Calgary and nearby service areas. Video may require additional editing time depending on the package and scope.",
  },
  {
    q: "Can you help with acreages and luxury properties outside Calgary?",
    a: "Yes. We regularly photograph acreages, estate homes, luxury properties, rural homes, and larger lots in communities such as Bearspaw, Springbank, Rocky View County, Cochrane, and Okotoks. Drone and twilight photography are especially useful for these listings.",
  },
] as const;

const businessId = `${siteConfig.url}/#business`;
const businessRef = { "@id": businessId };

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Real Estate Photography Service Areas Calgary",
  serviceType: "Real Estate Photography and Media",
  provider: businessRef,
  url: pageUrl,
  description,
  areaServed: [...serviceAreas],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Media Services Available by Area",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.schemaName,
        url: `${siteConfig.url}/services/${service.slug}`,
      },
    })),
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${pageUrl}#service-area-list`,
  name: "Real Estate Photography Service Areas Near Calgary",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: townCards.length,
  itemListElement: townCards.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteConfig.url}/service-areas/${area.slug}`,
    item: {
      "@type": area.name === "Rocky View County" ? "AdministrativeArea" : "City",
      name: area.name,
      url: `${siteConfig.url}/service-areas/${area.slug}`,
      image: area.image,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Calgary Region, Alberta",
      },
    },
  })),
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#collection`,
  url: pageUrl,
  name: "Real Estate Photography Service Areas in Calgary & Beyond",
  description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: businessRef,
  inLanguage: "en-CA",
  primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl },
  mainEntity: { "@id": `${pageUrl}#service-area-list` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(serviceAreasFaqs),
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

function ServiceAreasHero() {
  return (
    <section
      className="services-page-hero service-areas-hero"
      aria-labelledby="service-areas-title"
    >
      <div className="container">
        <div className="services-page-hero-inner">
          <div>
            <div className="services-page-hero-eyebrow">
              Calgary Home Base • Regional Coverage
            </div>
            <h1 id="service-areas-title">
              Real Estate Photography Service Areas in Calgary &amp; <em>Beyond</em>
            </h1>
            <p className="services-page-hero-sub speakable-intro">
              Photos 4 Real Estate is based in Calgary and travels to nearby
              communities for professional real estate photography, drone
              imagery, video tours, RMS measurements, floor plans, virtual
              staging, and MLS-ready listing media.
            </p>
          </div>

          <ul
            className="services-page-hero-stats"
            aria-label="Service areas highlights"
          >
            <li className="services-page-hero-stat">
              <span className="num">YYC</span>
              <span className="lbl">Calgary is our home base</span>
            </li>
            <li className="services-page-hero-stat">
              <span className="num">9+</span>
              <span className="lbl">Surrounding communities served</span>
            </li>
            <li className="services-page-hero-stat">
              <span className="num">24h</span>
              <span className="lbl">Next-day delivery on most media</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function AreasIntro() {
  return (
    <section className="intro-strip service-areas-intro" aria-labelledby="areas-intro-heading">
      <div className="container">
        <div className="intro-strip-inner">
          <div>
            <span className="section-label">Your Real Estate Services Hub</span>
            <h2 id="areas-intro-heading">Calgary-Based Listing Media, Ready to Travel.</h2>
            <p className="speakable-intro">
              At Photos 4 Real Estate, we deliver high-quality real estate
              photography, drone imagery, video tours, RMS measurements, floor
              plans, iGUIDE tours, virtual staging, and more across Calgary and
              nearby Alberta communities.
            </p>
            <p>
              Whether you are a realtor marketing multiple properties or a
              homeowner preparing to sell, we provide consistent, professional,
              MLS-ready visuals that help listings stand out and sell faster.
            </p>
            <ul className="intro-badges" aria-label="Service area advantages">
              <li className="intro-badge"><span className="intro-badge-dot" aria-hidden="true" />Calgary-based team</li>
              <li className="intro-badge"><span className="intro-badge-dot" aria-hidden="true" />Nearby towns served</li>
              <li className="intro-badge"><span className="intro-badge-dot" aria-hidden="true" />MLS-ready delivery</li>
              <li className="intro-badge"><span className="intro-badge-dot" aria-hidden="true" />One-visit media packages</li>
            </ul>
          </div>

          <aside className="area-homebase-card" aria-label="Calgary home base summary">
            <span className="area-homebase-icon" aria-hidden="true">
              <MapPin size={26} strokeWidth={2.25} />
            </span>
            <h3>Calgary is our home base.</h3>
            <p>
              We photograph homes across Calgary every week and schedule
              surrounding-area bookings from the city. That means reliable
              timing, familiar local context, and consistent results whether the
              property is downtown, suburban, rural, or in a nearby town.
            </p>
            <Link href="/services" className="btn btn-primary">
              View Services
              <span className="sr-only"> for Calgary real estate photography service areas</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CalgaryCoverage() {
  return (
    <section className="area-coverage-section" aria-labelledby="calgary-coverage-heading">
      <div className="container">
        <div className="area-section-header">
          <span className="section-label">Calgary Real Estate Photography Service Areas</span>
          <h2 id="calgary-coverage-heading">Professional real estate media across every Calgary quadrant.</h2>
          <p>
            Calgary is one of Alberta&rsquo;s fastest-growing real estate markets,
            and our photographers are on the ground every day capturing homes
            across the city. We cover all four quadrants with photography,
            drone imaging, video tours, RMS measurements, floor plans, and
            virtual staging.
          </p>
        </div>

        <div className="quadrant-grid">
          {quadrants.map((quadrant) => {
            const Icon = quadrant.icon;
            return (
              <article className="quadrant-card" key={quadrant.name}>
                <div className="quadrant-card-top">
                  <span className="quadrant-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={2.1} />
                  </span>
                  <div>
                    <h3>{quadrant.name}</h3>
                    <p>{quadrant.intro}</p>
                  </div>
                </div>
                <h4>Popular communities we serve include:</h4>
                <ul className="quadrant-list">
                  {quadrant.communities.map((community) => (
                    <li key={community}>{community}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TownCards() {
  return (
    <section className="towns-section" aria-labelledby="surrounding-communities-heading">
      <div className="container">
        <div className="area-section-header area-section-header-centered">
          <span className="section-label">Surrounding Communities We Serve</span>
          <h2 id="surrounding-communities-heading">Real estate photography around Calgary, not just inside Calgary.</h2>
          <p>
            Calgary&rsquo;s surrounding towns and rural communities are growing
            rapidly, and we regularly provide real estate photography services
            in these areas. Town pages are linked here and will be expanded with
            community-specific details next.
          </p>
        </div>

        <div className="towns-grid">
          {townCards.map((town) => (
            <Link
              key={town.slug}
              href={`/service-areas/${town.slug}`}
              className="town-card"
              aria-label={`${town.name} real estate photography service area — ${town.summary}`}
            >
              <article>
                <div className="town-card-media">
                  <Image
                    src={town.image}
                    alt={town.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="town-card-image"
                  />
                  <span className="town-card-chip">Travel Area</span>
                </div>
                <div className="town-card-body">
                  <h3>{town.name}</h3>
                  <p>{town.summary}</p>
                  <span className="town-card-link">
                    View Area Page <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <p className="towns-note">
          No matter where your property is located, we work to deliver
          consistent quality, quick turnaround, and professional marketing
          materials designed to help homes sell faster.
        </p>
      </div>
    </section>
  );
}

function AreaServices() {
  return (
    <section className="area-services-section" aria-labelledby="area-services-heading">
      <div className="container">
        <div className="area-section-header">
          <span className="section-label">Available Across Our Service Areas</span>
          <h2 id="area-services-heading">One Calgary media team for photos, tours, measurements, and marketing.</h2>
          <p>
            Our goal is to keep listing preparation simple. Book the services
            you need once, and we coordinate the shoot so sellers, tenants, and
            agents do not have to manage multiple vendors.
          </p>
        </div>

        <div className="area-services-grid">
          {serviceHighlights.map((service) => {
            const Icon = service.icon;
            return (
              <Link href={service.href} className="area-service-card" key={service.title}>
                <span className="area-service-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={2.15} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <span className="area-service-link">
                  Learn more<span className="sr-only"> about {service.title} in Calgary and surrounding areas</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseAreas() {
  return (
    <section className="area-reasons-section" aria-labelledby="why-choose-heading">
      <div className="container">
        <div className="area-section-header area-section-header-centered">
          <span className="section-label">Why Realtors Choose Us</span>
          <h2 id="why-choose-heading">Trusted real estate media across Calgary and nearby communities.</h2>
          <p>
            We understand the local market, and our services are designed to
            meet the needs of both agents and sellers. Realtors across Calgary
            and the surrounding region choose Photos 4 Real Estate because the
            process is reliable, polished, and fast.
          </p>
        </div>

        <div className="area-reasons-grid">
          {reasons.map((reason) => {
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

        <div className="areas-final-note">
          <p>
            From inner-city bungalows to sprawling suburban estates and rural
            acreages, Photos 4 Real Estate delivers fast, professional, and
            consistent results. With next-day delivery, CREA-ready media, and a
            deep understanding of local listing needs, we are the trusted choice
            for realtors and homeowners across Calgary and surrounding areas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
        jsonLdId="ld-breadcrumb-service-areas"
      />
      <ServiceAreasHero />
      <AreasIntro />
      <CalgaryCoverage />
      <TownCards />
      <AreaServices />
      <WhyChooseAreas />
      <Reviews
        variant="light"
        eyebrow="Calgary & Area Reviews"
        heading={<>Realtors trust <em>Photos 4 Real Estate</em> across Calgary and nearby communities.</>}
      />
      <Faq
        heading="Service Areas FAQ"
        intro={<>Answers about where we travel, what we can capture in one visit, and how Calgary-area bookings work.</>}
        faqs={serviceAreasFaqs}
        allFaqsLabelSuffix="Photos 4 Real Estate service areas in Calgary and surrounding communities"
      />
      <Cta
        eyebrow="Ready to Book?"
        title="Schedule Real Estate Photography in Calgary or a Nearby Community."
        description={
          <>
            Choose your package, share the address, and we will confirm timing,
            access, deliverables, and any travel details before your shoot.
          </>
        }
        secondaryHref="/services"
        secondaryLabel="View Services"
        secondarySrSuffix=" available across Calgary real estate photography service areas"
      />
      <JsonLd id="ld-service-areas-service" data={serviceSchema} />
      <JsonLd id="ld-service-areas-collection" data={collectionPageSchema} />
      <JsonLd id="ld-service-areas-itemlist" data={itemListSchema} />
      <JsonLd id="ld-service-areas-faq" data={faqSchema} />
      <JsonLd id="ld-service-areas-reviews" data={reviewSchema} />
      <JsonLd id="ld-service-areas-speakable" data={speakableSchema} />
    </>
  );
}