import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Box,
  Camera,
  Check,
  CircleCheck,
  FileText,
  Gift,
  Globe2,
  Images,
  MapPin,
  QrCode,
  Ruler,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
  Video,
  X,
} from "lucide-react";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import type { Faq as FaqItem } from "@/lib/faqs";
import { photographyImages } from "@/lib/images";
import {
  AVERAGE_RATING,
  GOOGLE_REVIEW_URL,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";
import { freeTools, serviceAreas, siteConfig } from "@/lib/site";
import Image from "next/image";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/real-estate-photography-comparison-calgary`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const businessId = `${siteConfig.url}/#business`;

const title = "Real Estate Photography Calgary 2026 | Photos 4 Real Estate";
const description =
  "Compare Calgary real estate photography companies in 2026. See photos, iGUIDE, RMS, reels, flyers, rewards, and included value. Book online today.";

type ComparisonCell = "yes" | "no" | "partial";

const competitors = [
  "Photos 4 Real Estate",
  "Calgary Real Estate Photos",
  "Sona Visual",
  "List Simple",
  "Calgary Photos",
  "CMC Photo",
] as const;

const comparisonRows: Array<{
  feature: string;
  detail: string;
  values: readonly [ComparisonCell, ComparisonCell, ComparisonCell, ComparisonCell, ComparisonCell, ComparisonCell];
}> = [
  {
    feature: "Professional Interior & Exterior Photos",
    detail: "MLS-ready, web-ready, and print-ready images for property marketing.",
    values: ["yes", "yes", "yes", "yes", "yes", "yes"],
  },
  {
    feature: "Blue Sky Replacement",
    detail: "Exterior photo enhancement to keep listings bright and marketable even when weather is not perfect.",
    values: ["yes", "no", "no", "no", "no", "no"],
  },
  {
    feature: "iGUIDE 3D Virtual Tour",
    detail: "Room-to-room virtual viewing experience that helps buyers understand the property before showings.",
    values: ["yes", "yes", "yes", "no", "no", "yes"],
  },
  {
    feature: "RMS Measurements",
    detail: "Alberta RMS-compliant measurement workflow for reliable listing square footage.",
    values: ["yes", "yes", "yes", "yes", "yes", "yes"],
  },
  {
    feature: "Standard 2D Floor Plan",
    detail: "Clear floor plans included to help buyers understand layout and room relationships.",
    values: ["yes", "yes", "yes", "yes", "yes", "yes"],
  },
  {
    feature: "iGUIDE Report & Analytics",
    detail: "Listing engagement data and tour reporting for client updates and marketing insight.",
    values: ["yes", "yes", "yes", "no", "no", "yes"],
  },
  {
    feature: "9 Social Media Reels",
    detail: "Short teaser videos generated for social platforms such as Instagram, Facebook, and TikTok.",
    values: ["yes", "no", "no", "no", "no", "no"],
  },
  {
    feature: "2 Slideshows",
    detail: "Animated property photo videos suitable for email marketing, websites, and social sharing.",
    values: ["yes", "no", "no", "no", "no", "no"],
  },
  {
    feature: "3 Property Flyers",
    detail: "Print-ready flyer layouts for open houses, feature sheets, email attachments, and listing promotion.",
    values: ["yes", "no", "no", "no", "no", "no"],
  },
  {
    feature: "3 Property Webpages",
    detail: "Shareable single-property webpages for modern listing promotion.",
    values: ["yes", "no", "no", "no", "no", "no"],
  },
  {
    feature: "Free Realtor Marketing Tools",
    detail: "Free reel, slideshow, flyer, and QR code generators available directly through the website.",
    values: ["yes", "no", "no", "no", "no", "no"],
  },
  {
    feature: "Points & Rewards System",
    detail: "Client rewards program that lets realtors earn points from orders, reviews, and referrals.",
    values: ["yes", "no", "no", "no", "no", "no"],
  },
  {
    feature: "Next-Day Delivery",
    detail: "Fast turnaround for photos, tours, floor plans, and included marketing assets in most cases.",
    values: ["yes", "yes", "yes", "yes", "yes", "yes"],
  },
];

const standardFeatures = [
  "Professional interior and exterior photos",
  "iGUIDE 3D virtual tour",
  "Alberta RMS-compliant measurements",
  "Standard 2D floor plan",
  "iGUIDE report and analytics",
  "Blue sky replacement",
  "MLS, web, and print resolution files",
  "Next-day delivery in most cases",
] as const;

const bonusDeliverables = [
  "9 social media reels",
  "2 slideshows",
  "3 property flyers",
  "3 property webpages",
] as const;

const freeToolCards = [
  {
    ...freeTools[0],
    icon: <Video size={22} aria-hidden="true" />,
    description: "Create three social media teaser videos for Instagram, Facebook, and TikTok from listing photos.",
  },
  {
    ...freeTools[1],
    icon: <Images size={22} aria-hidden="true" />,
    description: "Generate an animated property slideshow video for email marketing, property websites, and social posts.",
  },
  {
    ...freeTools[2],
    icon: <FileText size={22} aria-hidden="true" />,
    description: "Create three professionally designed, print-ready property flyers with unique layouts.",
  },
  {
    ...freeTools[3],
    icon: <QrCode size={22} aria-hidden="true" />,
    description: "Produce branded QR codes for flyers, feature sheets, sign riders, and printed marketing materials.",
  },
] as const;

const whoBenefits = [
  "High-volume listing agents who need repeatable marketing support",
  "New realtors who want professional listing assets without hiring extra vendors",
  "Luxury and acreage specialists who need stronger presentation tools",
  "Brokerages that want unified branding across listing campaigns",
  "Real estate teams that want repeat-order savings through points and rewards",
] as const;

const faqs: FaqItem[] = [
  {
    q: "What makes Photos 4 Real Estate different from other Calgary real estate photography companies?",
    a: "Photos 4 Real Estate includes professional photos, iGUIDE 3D tours, RMS measurements, floor plans, blue sky replacement, next-day delivery, marketing assets, free tools, and a points rewards program. Most providers offer some of these services, but not the same all-in-one value package.",
  },
  {
    q: "Are the comparison points based on public information?",
    a: "Yes. The comparison is based on publicly available service information and general package positioning as of 2026. Service offerings can change, so realtors should always confirm current package details with each provider.",
  },
  {
    q: "Do all Photos 4 Real Estate packages include iGUIDE and RMS measurements?",
    a: "Our real estate photography packages are designed around professional photography, iGUIDE 3D virtual tours, RMS measurements, and standard floor plans so Calgary agents can market listings with accurate property data and stronger online presentation.",
  },
  {
    q: "What marketing assets are included with Photos 4 Real Estate packages?",
    a: "When property information is provided, photo packages include 9 social media reels, 2 slideshows, 3 property flyers, and 3 property webpages, giving agents ready-to-use assets for social media, print, email, and online promotion.",
  },
  {
    q: "Does Photos 4 Real Estate offer free marketing tools for realtors?",
    a: "Yes. Photos 4 Real Estate offers free tools including a reel generator, slideshow generator, property flyer generator, and QR code generator so realtors can create marketing materials quickly without extra design software.",
  },
  {
    q: "Who benefits most from an all-in-one real estate media package?",
    a: "High-volume listing agents, new realtors, luxury and acreage specialists, brokerages, and teams benefit most because they need consistent photography, measurements, virtual tours, social media content, print assets, and repeat-order value.",
  },
];

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Calgary real estate photography company comparison for 2026 — Photos 4 Real Estate",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(faqs),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Real Estate Photography Comparison in Calgary 2026",
  description,
  url: pageUrl,
  image: ogImageUrl,
  author: { "@id": businessId },
  publisher: { "@id": businessId },
  datePublished: "2026-05-11",
  dateModified: "2026-05-11",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${pageUrl}#webpage` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Real Estate Photography Calgary",
  serviceType: "Real estate photography and listing media",
  provider: { "@id": businessId },
  areaServed: [...serviceAreas],
  url: `${siteConfig.url}/services/real-estate-photography-in-calgary`,
  description:
    "Professional real estate photography, iGUIDE tours, RMS measurements, floor plans, listing videos, marketing tools, and listing assets for Calgary and surrounding areas.",
};

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Calgary real estate photography company comparison features",
  url: pageUrl,
  itemListElement: comparisonRows.map((row, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: row.feature,
    description: row.detail,
  })),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessId,
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [GOOGLE_REVIEW_URL],
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": businessId },
  primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-intro", ".speakable-faq"],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "article",
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

function ComparisonMark({ value }: { value: ComparisonCell }) {
  if (value === "partial") {
    return <span className="comparison-mark comparison-mark-partial">Partial</span>;
  }

  return value === "yes" ? (
    <span className="comparison-mark comparison-mark-yes" aria-label="Included">
      <Check size={16} strokeWidth={3} aria-hidden="true" />
    </span>
  ) : (
    <span className="comparison-mark comparison-mark-no" aria-label="Not included">
      <X size={16} strokeWidth={3} aria-hidden="true" />
    </span>
  );
}

export default function RealEstatePhotographyComparisonCalgaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Real Estate Photography Comparison Calgary" }]}
        jsonLdId="ld-breadcrumb-comparison-calgary"
      />

      <section className="services-page-hero comparison-hero" aria-labelledby="comparison-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Calgary Real Estate Media Comparison · 2026</div>
              <h1 id="comparison-hero-title">
                Real Estate Photography <em>Comparison in Calgary</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Photos 4 Real Estate is designed for Calgary realtors who need more than basic listing photos. Compare photography companies by included services, iGUIDE tours, RMS measurements, marketing assets, free tools, and rewards so you can choose the best value for every listing.
              </p>
              <div className="tool-detail-hero-actions">
                <a href={siteConfig.bookingUrl} className="btn btn-primary">
                  Book a Photoshoot
                  <span className="sr-only"> with Photos 4 Real Estate in Calgary</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <Link href="/prices" className="btn btn-outline">
                  View Pricing
                  <span className="sr-only"> for Calgary real estate photography packages</span>
                </Link>
              </div>
            </div>
            <ul className="services-page-hero-stats" aria-label="Comparison page highlights">
              <li className="services-page-hero-stat"><span className="num">9</span><span className="lbl">Reels included</span></li>
              <li className="services-page-hero-stat"><span className="num">3</span><span className="lbl">Property webpages</span></li>
              <li className="services-page-hero-stat"><span className="num">2026</span><span className="lbl">Calgary comparison</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="comparison-intro-section" aria-labelledby="comparison-intro-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">Photos 4 Real Estate vs Others</span>
              <h2 id="comparison-intro-heading">Photos 4 Real Estate vs Other Calgary Real Estate Photography Companies</h2>
              <p className="lead speakable-intro">
                Choosing the right real estate media partner in Calgary can directly influence how quickly and effectively a property attracts attention. Most media companies provide basic photography and optional upgrades, while Photos 4 Real Estate delivers an all-in-one marketing package with listing media, marketing assets, free tools, and an exclusive rewards system.
              </p>
              <p>
                This comparison outlines how our services differ from other real estate photography companies in Calgary and surrounding areas, helping realtors make a confident and value-driven decision.
              </p>
            </div>
            <div className="comparison-highlight-card">
              <div className="comparison-card-icon" aria-hidden="true">
                <Award size={22} aria-hidden="true" />
              </div>
              <h3>Exclusive value stack</h3>
              <p>Photography, iGUIDE, RMS, floor plans, marketing assets, free tools, and rewards are designed to work together so agents do not need separate editors, designers, or software subscriptions.</p>
              <Link href="/points-rewards" className="btn btn-outline-dark">
                See Rewards Program
                <span className="sr-only"> for Calgary real estate photography clients</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-expect-section" aria-labelledby="comparison-expect-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Modern Listing Expectations</span>
            <h2 id="comparison-expect-heading">Why Realtors Need More Than Just Listing Photos</h2>
            <p>Modern buyers expect immersive virtual viewing, accurate measurements, professional presentation, mobile-friendly property pages, and social media content that helps listings get noticed faster.</p>
          </div>
          <div className="comparison-expect-grid">
            {[
              [<Box size={22} aria-hidden="true" key="box" />, "Immersive virtual tours", "Give buyers confidence before they book a showing."],
              [<Ruler size={22} aria-hidden="true" key="ruler" />, "Accurate RMS measurements", "Support listing accuracy with Alberta RMS-compliant measurement workflows."],
              [<Globe2 size={22} aria-hidden="true" key="globe" />, "Mobile property pages", "Share listings on social, email, print, and messaging apps."],
              [<Video size={22} aria-hidden="true" key="video" />, "Social media content", "Promote listings with reels, slideshows, and short-form assets."],
            ].map(([icon, heading, text]) => (
              <article className="comparison-expect-card" key={String(heading)}>
                <span className="comparison-card-icon">{icon}</span>
                <h3>{heading}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="comparison-standard-section" aria-labelledby="comparison-standard-heading">
        <div className="container">
          <div className="comparison-standard-grid">
            <div>
              <span className="section-label">Included Value</span>
              <h2 id="comparison-standard-heading">What Comes Standard With Every Photo Package</h2>
              <p>Photos 4 Real Estate packages are designed to support the full listing workflow automatically — from accurate listing data to social media content and print-ready marketing assets.</p>
              <ul className="comparison-check-list">
                {standardFeatures.map((feature) => (
                  <li key={feature}><CircleCheck size={18} aria-hidden="true" />{feature}</li>
                ))}
              </ul>
            </div>
            <div className="comparison-bonus-card">
              <div className="comparison-card-icon" aria-hidden="true">
                <Sparkles size={22} aria-hidden="true" />
              </div>
              <h3>Plus exclusive marketing deliverables</h3>
              <p>These assets are automatically generated and ready to publish, print, or share once property information is provided.</p>
              <ul>
                {bonusDeliverables.map((item) => (
                  <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <Link href="/services/marketing-kit-for-realtors" className="comparison-inline-link">
                Explore the marketing kit<span className="sr-only"> included with Calgary real estate photography packages</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-rewards-section" aria-labelledby="comparison-rewards-heading">
        <div className="container">
          <div className="comparison-rewards-grid">
            <div className="comparison-rewards-badge"><Gift size={42} aria-hidden="true" /></div>
            <div>
              <span className="section-label">Exclusive Feature</span>
              <h2 id="comparison-rewards-heading">Points &amp; Rewards Program</h2>
              <p>Photos 4 Real Estate is the only real estate media provider in Calgary offering a client rewards system designed to lower ongoing marketing costs for active realtors.</p>
              <p>Realtors can earn points for booking photo packages, leaving verified 5-star reviews, referring other agents, and continued loyalty through repeat listings.</p>
            </div>
            <div className="comparison-rewards-panel">
              <h3>Redeem points for value</h3>
              <ul>
                <li><Check size={15} aria-hidden="true" />discounts on future shoots</li>
                <li><Check size={15} aria-hidden="true" />free upgrades</li>
                <li><Check size={15} aria-hidden="true" />complimentary add-on services</li>
              </ul>
              <Link href="/points-rewards" className="btn btn-primary">
                View Points & Rewards
                <span className="sr-only"> for Calgary real estate photography clients</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-table-section" aria-labelledby="comparison-table-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Feature Comparison</span>
            <h2 id="comparison-table-heading">Photos 4 Real Estate vs Top Calgary Competitors</h2>
            <p>Competitors evaluated: Calgary Real Estate Photos, Sona Visual, List Simple, Calgary Photos, and CMC Photo.</p>
          </div>
          <div className="comparison-table-scroll" role="region" aria-label="Calgary real estate photography company feature comparison" tabIndex={0}>
            <table className="comparison-page-table">
              <caption className="sr-only">Comparison table of included real estate photography services in Calgary</caption>
              <thead>
                <tr>
                  <th scope="col">Feature / Service Included</th>
                  {competitors.map((competitor, index) => (
                    <th scope="col" className={index === 0 ? "is-featured" : undefined} key={competitor}>{competitor}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row">
                      <span>{row.feature}</span>
                      <small>{row.detail}</small>
                    </th>
                    {row.values.map((value, index) => (
                      <td className={index === 0 ? "is-featured" : undefined} data-label={competitors[index]} key={`${row.feature}-${competitors[index]}`}>
                        <ComparisonMark value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="comparison-table-note">*Based on publicly available service information as of 2026. Service offerings, inclusions, and delivery timelines may change.</p>
        </div>
      </section>

      <section className="comparison-free-tools-section" aria-labelledby="comparison-free-tools-heading">
        <div className="container">
          <div className="comparison-free-tools-header">
            <div>
              <span className="section-label">Free Tools Only Available at Photos 4 Real Estate</span>
              <h2 id="comparison-free-tools-heading">Create Listing Marketing Assets Instantly</h2>
              <p>A critical component of modern real estate marketing is the ability to generate high-quality, engaging content quickly. Our free tools help Calgary realtors promote listings without additional software, design work, or subscription fees.</p>
            </div>
            <Link href="/free-tools" className="btn btn-primary">
              See All Free Tools
              <span className="sr-only"> for Calgary real estate marketing</span>
            </Link>
          </div>
          <div className="comparison-tools-grid">
            {freeToolCards.map((tool) => (
              <Link href={tool.href} className="comparison-tool-card" key={tool.href}>
                <div className="comparison-card-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <span>Open details<span className="sr-only"> about {tool.name}</span><ArrowRight size={14} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="comparison-who-section" aria-labelledby="comparison-who-heading">
        <div className="container">
          <div className="comparison-who-grid">
            <div>
              <span className="section-label">Who Benefits Most</span>
              <h2 id="comparison-who-heading">Who Gets the Most Value from Photos 4 Real Estate?</h2>
              <p>Our all-in-one package is especially valuable for agents and teams who need consistent listing media, social content, print assets, and repeat-order savings without coordinating multiple vendors.</p>
            </div>
            <ul className="comparison-who-list">
              {whoBenefits.map((item) => (
                <li key={item}><Users size={16} aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="areas-section" aria-labelledby="comparison-areas-heading">
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Area</span>
              <h2 id="comparison-areas-heading">Real Estate Photography in Calgary &amp; Surrounding Areas</h2>
              <p>
                Photos 4 Real Estate covers all of Calgary plus the surrounding
                communities, towns and acreages within our standard service
                radius. Same all-inclusive pricing, same next-day delivery, and
                the same full marketing support on every shoot.
              </p>
              <ul className="areas-chips" aria-label="Calgary comparison service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link href="/service-areas" className="area-chip" aria-label={`Real estate photography comparison for ${area}`}>
                      <MapPin size={12} aria-hidden="true" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="areas-travel-note">
                <strong>Outside our standard radius?</strong> We still travel
                for acreages, foothills and Banff-corridor listings &mdash; a
                small travel fee may apply. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm Calgary photography travel fees`}
                >
                  {siteConfig.phone}
                </a>{" "}
                to confirm.
              </p>
            </div>
            <div className="areas-visual">
              <div className="areas-visual-item">
                <Image
                  src={photographyImages.areaCalgary}
                  alt="Bedroom example photo in Calgary by Photos 4 Real Estate"
                  width={1600}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={photographyImages.areaMahogany}
                  alt="Drone photo of downtown Calgary by Photos 4 Real Estate"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={photographyImages.areaAcreage}
                  alt="Drone photo of Mahogany Lake in Calgary by Photos 4 Real Estate"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews
        variant="dark"
        eyebrow="Calgary Realtor Reviews"
        heading={
          <>
            Calgary&rsquo;s top agents trust <em>Photos 4 Real Estate</em> for every listing.
          </>
        }
      />

      <Faq
        faqs={faqs}
        heading="Calgary real estate photography comparison FAQ"
        intro="Answers to common questions about comparing real estate photography companies, included marketing assets, iGUIDE tours, RMS measurements, rewards, and free tools."
        allFaqsLabelSuffix="Calgary real estate photography comparison and listing media services"
        sectionClassName="faq-section-white"
      />

      <Cta
        eyebrow="Book a Photoshoot"
        title="Get More Value from Every Calgary Listing"
        description={<>Book real estate photography with Photos 4 Real Estate and receive professional listing media, accurate measurements, virtual tour assets, marketing deliverables, free tools, and rewards support.</>}
        secondaryHref="/prices"
        secondaryLabel="View Pricing"
        secondarySrSuffix=" for Calgary real estate photography packages"
      />

      <JsonLd id="ld-faq-comparison-calgary" data={faqSchema} />
      <JsonLd id="ld-article-comparison-calgary" data={articleSchema} />
      <JsonLd id="ld-service-comparison-calgary" data={serviceSchema} />
      <JsonLd id="ld-itemlist-comparison-calgary" data={comparisonSchema} />
      <JsonLd id="ld-reviews-comparison-calgary" data={reviewSchema} />
      <JsonLd id="ld-webpage-comparison-calgary" data={webPageSchema} />
    </>
  );
}