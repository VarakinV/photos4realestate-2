import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Box,
  Check,
  FileText,
  MapPin,
  MonitorPlay,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig, serviceAreas } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";
import { marketingKitImages } from "@/lib/images";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";

export const dynamic = "force-static";

const slug = "marketing-kit-for-realtors";
const content = servicesContent[slug];
const pageUrl = `${siteConfig.url}/services/${slug}`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const businessId = `${siteConfig.url}/#business`;

export function generateMetadata(): Metadata {
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
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: content.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.seoDescription,
      images: [ogImageUrl],
    },
  };
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Marketing Kit for Calgary Realtors",
  serviceType: "Real Estate Marketing Kit",
  description: content.seoDescription,
  url: pageUrl,
  provider: { "@id": businessId },
  areaServed: [...serviceAreas],
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "0",
    description:
      "Included free with every Essential, Skyline, and Social Boost photography package.",
    url: `${siteConfig.url}/prices`,
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(content.faqs),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessId,
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phoneE164,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  areaServed: [...serviceAreas],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  priceRange: "$$",
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

const whyIncluded = [
  "9 social media video reels — generated from your listing photos and listing information",
  "6 branded property websites — shareable links, no setup required",
  "3 print-ready PDF flyers — professionally designed with your photos",
  "2 animated slideshows — ready for email campaigns and social media",
] as const;

type ToolVisualKind = "reels" | "websites" | "flyers" | "slideshows";

type ToolSection = {
  id: ToolVisualKind;
  num: string;
  label: string;
  title: string;
  icon: ReactNode;
  paragraphs: readonly string[];
  bullets: readonly string[];
  note?: ReactNode;
};

const toolSections: readonly ToolSection[] = [
  {
    id: "reels",
    num: "01",
    label: "Social Media Reels",
    title: "9 Social Media Reels — Ready to Post Immediately",
    icon: <Smartphone size={22} aria-hidden="true" />,
    paragraphs: [
      "Every package generates 9 short-form vertical video clips automatically from your listing photos. These are 9:16 format reels designed specifically for Instagram Reels, Facebook Reels, TikTok, and YouTube Shorts — the highest-reach organic content format currently available to Calgary realtors.",
      "Each of the 9 reels is a different cut, style, or sequence, giving you variety across your social media posting schedule. You can post one reel per day for over a week from a single listing — keeping your profile active and your listing in front of buyers throughout the entire marketing period.",
    ],
    bullets: [
      "9:16 vertical format — optimized for Instagram, Facebook, TikTok",
      "9 different cuts per listing — post one daily for over a week",
      "Licensed background music included",
      "Provided as MP4 files — no editing required",
      "Separate from the full 45–60 second Social Boost reel",
    ],
    note: (
      <p className="marketing-tool-note marketing-tool-note--card">
        <strong>Note:</strong> These 9 teaser reels are different from the full
        cinematic social media reel available in the{" "}
        <Link href="/services/real-estate-videos-in-calgary" className="body-link">
          Social Boost package
        </Link>
        . The 9 reels are automatically generated; the full reel is
        professionally shot and edited video.
      </p>
    ),
  },
  {
    id: "websites",
    num: "02",
    label: "Property Websites",
    title: "6 Branded Property Websites — Share a Link, Impress Every Buyer",
    icon: <Box size={22} aria-hidden="true" />,
    paragraphs: [
      "Once we have the listing information, every property gets six dedicated single-property website designs — professional, mobile-responsive pages that showcase the listing photos, property details, and your contact information with a single shareable link. No web design skills required. No hosting setup. Just a clean, professional URL you can paste anywhere.",
      "Each of the six website designs uses a different layout or style — giving you options for different marketing contexts. Share in your email campaigns, paste in the MLS listing notes, include in your social media bio, or send directly to interested buyers via text or WhatsApp.",
    ],
    bullets: [
      "Six different design templates per listing",
      "Your logo, name, and contact info displayed prominently",
      "All listing photos displayed in a professional gallery",
      "Mobile-responsive — looks great on phones and tablets",
      "iGUIDE 3D tour embedded when included in your package",
      "Shareable link — no login required for buyers to view",
    ],
    note: (
      <p className="marketing-tool-note marketing-tool-note--card">
        <strong>Note:</strong> See our{" "}
        <Link href="/single-property-websites" className="body-link">
          single property websites page
        </Link>{" "}
        to preview all 6 designs and explore the built-in lead generation tools
        included in every website.
      </p>
    ),
  },
  {
    id: "flyers",
    num: "03",
    label: "Property Flyers",
    title: "3 Print-Ready PDF Property Flyers — For Open Houses & Email",
    icon: <FileText size={22} aria-hidden="true" />,
    paragraphs: [
      "Once we have the listing information, every property generates three professionally designed PDF property flyers featuring your listing photos and property details. These are not generic templates — they are properly designed marketing documents that look polished when printed for open houses or attached to email campaigns.",
      "Each of the three flyers uses a different layout — a feature sheet, a comparative layout, and a social-style design — giving you options for different marketing contexts. Print them for open houses, email them to buyer prospects, or attach them to your digital listing presentation.",
    ],
    bullets: [
      "Three different flyer designs per listing",
      "Print-ready PDF — 300dpi, suitable for professional printing",
      "Your branding, contact info, and listing details",
      "Ideal for open houses, email, and digital listing presentations",
    ],
    note: (
      <p className="marketing-tool-note">
        Try our{" "}
        <Link href="/free-tools/flyer-generator" className="body-link">
          free flyer generator
        </Link>
        .
      </p>
    ),
  },
  {
    id: "slideshows",
    num: "04",
    label: "Photo Slideshows",
    title: "2 Animated Photo Slideshows — Perfect for Email & Social",
    icon: <MonitorPlay size={22} aria-hidden="true" />,
    paragraphs: [
      "Every package generates two animated photo slideshows from your listing photos. These are short video files that sequence through your best listing images with smooth transitions and music — perfect for sharing in email campaigns, pinning to the top of your Facebook page, or attaching to a buyer inquiry response.",
      "Slideshows perform well in contexts where a full reel feels too sales-forward — they are informational and professional, making them ideal for sending directly to buyers who have expressed interest in the property or for showing at an open house on a laptop or tablet.",
    ],
    bullets: [
      "Two different slideshow styles per listing",
      "Animated transitions between all listing photos",
      "Provided as MP4 — works in email, social, and presentations",
      "Horizontal 16:9 format — ideal for desktop and email viewing",
    ],
    note: (
      <p className="marketing-tool-note">
        Try our{" "}
        <Link href="/free-tools/slideshow-generator" className="body-link">
          free slideshow generator
        </Link>
        .
      </p>
    ),
  },
] as const;

const kitTotals = [
  {
    num: "9",
    name: "Social Media Reels",
    desc: "9:16 vertical clips for Instagram, Facebook, and TikTok",
  },
  {
    num: "3",
    name: "Property Websites",
    desc: "Branded listing sites with a shareable URL",
  },
  {
    num: "3",
    name: "Property Flyers",
    desc: "Print-ready PDFs for open houses and email",
  },
  {
    num: "2",
    name: "Slideshows",
    desc: "Animated photo presentations for quick sharing",
  },
] as const;

const loyaltyPoints = [
  "Earn points on every photography package",
  "Redeem points for discounts on future orders",
  "Points accumulate — the more listings, the more you save",
  "Points are earned on your 25%-off first order too",
] as const;

const processSteps = [
  {
    num: "01",
    title: "Book Your Package",
    desc: "Select Essential, Skyline, or Social Boost online. The marketing kit is automatically included in every package — no add-ons to select.",
  },
  {
    num: "02",
    title: "We Photograph the Property",
    desc: "Our team arrives on schedule, photographs the property, and captures every service included in your package during the same visit.",
  },
  {
    num: "03",
    title: "Send Listing Information",
    desc: "To generate the marketing kit, we need the required listing information — typically the RMS size, asking price, year built, property description, and key property details.",
  },
  {
    num: "04",
    title: "Download & Share",
    desc: "Once we have the required listing information, we generate the complete marketing kit and send it to you. In most cases, it is delivered the next day.",
  },
] as const;

function renderToolVisual(kind: ToolVisualKind) {
  switch (kind) {
    case "reels":
      return (
        <div
          className="marketing-reel-row"
          role="group"
          aria-label="Social media reel previews from the marketing kit"
        >
          <div className="marketing-reel-item">
            <div className="marketing-reel-phone">
              <video
                className="marketing-reel-video"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label="Vertical social media reel preview one for the marketing kit"
              >
                <source src={`${marketingKitImages.reel1Video}#t=0.1`} type="video/mp4" />
              </video>
            </div>
            <div className="marketing-reel-tag">Reel 1 of 9</div>
          </div>
          <div className="marketing-reel-item">
            <div className="marketing-reel-phone is-secondary">
              <video
                className="marketing-reel-video"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label="Vertical social media reel preview two for the marketing kit"
              >
                <source src={`${marketingKitImages.reel2Video}#t=0.1`} type="video/mp4" />
              </video>
            </div>
            <div className="marketing-reel-tag">Reel 2 of 9</div>
          </div>
        </div>
      );
    case "websites":
      return (
        <div className="marketing-website-mock">
          <div className="marketing-browser-bar" aria-hidden="true">
            <span className="marketing-browser-dot is-red" aria-hidden="true" />
            <span className="marketing-browser-dot is-amber" aria-hidden="true" />
            <span className="marketing-browser-dot is-green" aria-hidden="true" />
            <div className="marketing-website-url" aria-hidden="true">
              listing.photos4realestate.ca/123-main-st
            </div>
          </div>
          <Image
            src={marketingKitImages.websiteHero}
            alt="Responsive preview of a branded single-property website by Photos 4 Real Estate for a Calgary listing"
            width={1400}
            height={900}
            sizes="(max-width: 1024px) 100vw, 42vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      );
    case "flyers":
      return (
        <div className="marketing-flyer-single">
          <Image
            src={marketingKitImages.flyersPreview}
            alt="Preview of branded PDF property flyers by Photos 4 Real Estate for a Calgary listing"
            width={1400}
            height={1050}
            sizes="(max-width: 1024px) 100vw, 42vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      );
    case "slideshows":
      return (
        <div className="marketing-slideshow-mock">
          <div className="marketing-browser-bar is-compact" aria-hidden="true">
            <span className="marketing-browser-dot is-red" aria-hidden="true" />
            <span className="marketing-browser-dot is-amber" aria-hidden="true" />
            <span className="marketing-browser-dot is-green" aria-hidden="true" />
            <span className="marketing-slideshow-label" aria-hidden="true">
              Listing Slideshow — 123 Main St Calgary
            </span>
          </div>
          <video
            className="marketing-slideshow-video"
            controls
            muted
            playsInline
            preload="metadata"
            aria-label="Real estate property slideshow video example"
          >
            <source src={`${marketingKitImages.slideshowVideo}#t=0.1`} type="video/mp4" />
          </video>
        </div>
      );
  }
}

export default function MarketingKitPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Marketing Kit" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      <section className="services-page-hero" aria-labelledby="marketing-kit-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                Marketing Kit &middot; Calgary, AB
              </div>
              <h1 id="marketing-kit-hero-title">
                Marketing Kit
                <br />
                for <em>Calgary Realtors</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>Every Photos 4 Real Estate package includes a complete
                marketing kit</strong> at no extra cost — 9 social media reels,
                6 property websites, 3 property flyers, and 2 slideshows,
                generated once your listing information is ready.
              </p>
            </div>

            <ul
              className="services-page-hero-stats photo-hero-stats"
              aria-label="Marketing kit included assets"
            >
              <li className="services-page-hero-stat">
                <span className="num">20</span>
                <span className="lbl">Marketing assets</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">100%</span>
                <span className="lbl">Free</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">Info</span>
                <span className="lbl">required</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <PageBody />

      <JsonLd id={`ld-service-${slug}`} data={serviceSchema} />
      <JsonLd id={`ld-faq-${slug}`} data={faqSchema} />
      <JsonLd id={`ld-reviews-${slug}`} data={reviewSchema} />
      <JsonLd id={`ld-speakable-${slug}`} data={speakableSchema} />
    </>
  );
}

function PageBody() {
  return (
    <>
      <section
        className="photo-intro-section marketing-intro-section"
        aria-labelledby="marketing-intro-heading"
      >
        <div className="container">
          <div className="photo-intro-grid marketing-intro-grid">
            <div className="photo-intro-content marketing-intro-content">
              <span className="section-label">Why It Matters</span>
              <h2 id="marketing-intro-heading">
                Not Just Photos — A Complete Listing Marketing Kit
              </h2>
              <p className="lead speakable-intro">
                Most real estate photography companies deliver photos. Photos 4
                Real Estate delivers a complete marketing kit. Every booking
                can include a full set of marketing assets Calgary realtors can
                use across social media, email, print, and the web — once we
                have the required listing information.
              </p>
              <p>
                The marketing kit is not an upgrade or an add-on. It is
                included as standard with every Essential, Skyline, and Social
                Boost package at no additional cost — because a great photo
                deserves great marketing tools to match.
              </p>
              <p>
                Because the kit is built from the actual listing details, we
                need the core property information before we can generate the
                assets — typically the RMS size, asking price, year built,
                property description, and any key features you want included.
                In most cases, once that information is available, the marketing
                kit is delivered the next day.
              </p>
              <p>
                Beyond the delivered kit, we also provide{" "}
                <Link href="/free-tools" className="body-link">
                  free online tools
                </Link>{" "}
                that let you generate reels, flyers, and slideshows at any time using your
                listing photos.
              </p>

              <div className="marketing-why-card">
                <span className="marketing-why-label">
                  What you get that other photographers do not include
                </span>
                <ul className="marketing-why-list">
                  {whyIncluded.map((item) => (
                    <li key={item}>
                      <span className="marketing-why-check" aria-hidden="true">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="marketing-intro-visual">
              <div className="marketing-intro-pill" aria-hidden="true">
                <div className="marketing-intro-pill-dot" aria-hidden="true"></div>
                Included Free
              </div>
              <div className="marketing-intro-visual-item is-single">
                <Image
                  src={marketingKitImages.introMain}
                  alt="Marketing kit preview from Photos 4 Real Estate with reels, websites, flyers, and slideshows for a Calgary listing"
                  width={1600}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-tools-section" aria-label="Marketing kit assets">
        {toolSections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className={`marketing-tool-block ${index % 2 === 1 ? "is-alt" : ""}`}
          >
            <div className="container">
              <div
                className={`marketing-tool-inner ${
                  index % 2 === 1 ? "is-reverse" : ""
                }`}
              >
                <div className="marketing-tool-content">
                  <div className="marketing-tool-num" aria-hidden="true">
                    {section.num}
                  </div>
                  <div className="marketing-tool-icon-row">
                    <div className="marketing-tool-icon" aria-hidden="true">
                      {section.icon}
                    </div>
                    <span className="marketing-tool-label">{section.label}</span>
                  </div>
                  <h2 id={`marketing-tool-${section.id}`}>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ul className="marketing-tool-bullets">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span className="marketing-tool-dot" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {section.note}
                </div>
                <div
                  className="marketing-tool-visual"
                  role="group"
                  aria-labelledby={`marketing-tool-${section.id}`}
                >
                  {renderToolVisual(section.id)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="marketing-count-section" aria-labelledby="marketing-count-heading">
        <div className="container">
          <span className="section-label marketing-count-label">What You Get</span>
          <h2 id="marketing-count-heading">
            Everything Included. Every Time. No Extras.
          </h2>
          <p>
            The complete marketing kit is part of every Essential, Skyline, and
            Social Boost package — included at no extra cost and generated once
            the required listing information has been provided.
          </p>
          <div className="marketing-count-grid" role="list">
            {kitTotals.map((item) => (
              <div className="marketing-count-card" role="listitem" key={item.name}>
                <span className="marketing-count-num">{item.num}</span>
                <div className="marketing-count-name">{item.name}</div>
                <div className="marketing-count-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-promo-section" aria-labelledby="marketing-promo-heading">
        <div className="container">
          <h2 id="marketing-promo-heading">
            First-Time Discount &amp; Loyalty Rewards
          </h2>
          <div className="marketing-promo-grid">
            <article className="marketing-promo-card is-dark">
              <span className="marketing-promo-tag">New Realtor Offer</span>
              <div className="marketing-promo-icon" aria-hidden="true">
                <Sparkles size={22} />
              </div>
              <div className="marketing-promo-pct">25%</div>
              <div className="marketing-promo-off">off your first booking</div>
              <div className="marketing-promo-code-box">
                <span className="marketing-promo-code-label">Use code at checkout</span>
                <span className="marketing-promo-code-val">25%OFF</span>
              </div>
              <p className="marketing-promo-note">
                First-time realtor clients receive 25% off their first
                photography package — including the full marketing kit. Applies
                to all packages.
              </p>
              <a href={siteConfig.bookingUrl} className="btn btn-primary">
                Claim 25% Discount
                <span className="sr-only"> for Calgary real estate media booking</span>
              </a>
            </article>

            <article className="marketing-promo-card is-light">
              <span className="marketing-promo-tag is-brick">Loyalty Program</span>
              <div className="marketing-loyalty-icon" aria-hidden="true">
                <Award size={22} />
              </div>
              <h3>Earn Points on Every Booking</h3>
              <p>
                Every completed Photos 4 Real Estate order earns you loyalty
                points that can be redeemed for discounts on future bookings.
                The more you book, the more you save.
              </p>
              <ul className="marketing-loyalty-points">
                {loyaltyPoints.map((point) => (
                  <li key={point}>
                    <span className="marketing-loyalty-check" aria-hidden="true">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href={siteConfig.bookingUrl} className="btn btn-outline-dark">
                Start Earning Points
                <span className="sr-only"> with Calgary real estate media bookings</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="marketing-process-section" aria-labelledby="marketing-process-heading">
        <div className="container">
          <div className="marketing-process-header">
            <span className="section-label">How It Works</span>
            <h2 id="marketing-process-heading">How You Receive Your Marketing Kit</h2>
            <p>
              Book once, send the listing details, and in most cases receive the
              completed marketing kit the next day.
            </p>
          </div>
          <div className="marketing-process-grid">
            {processSteps.map((step) => (
              <article className="marketing-process-card" key={step.num}>
                <div className="marketing-process-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="service-areas"
        className="areas-section marketing-areas-section"
        aria-labelledby="marketing-areas-heading"
      >
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="marketing-areas-heading">
                Marketing Kit for Calgary &amp; Surrounding Areas
              </h2>
              <p>
                Photos 4 Real Estate includes the marketing kit with listings
                photographed across Calgary and the surrounding communities in
                our standard service radius. Once we have the required listing
                information, we generate the branded assets for your property.
              </p>
              <ul className="areas-chips" aria-label="Marketing kit service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href="/service-areas"
                      className="area-chip"
                      aria-label={`Marketing kit service availability in ${area}`}
                    >
                      <MapPin size={12} aria-hidden="true" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="areas-travel-note">
                <strong>Outside our standard radius?</strong> Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm marketing kit travel coverage`}
                >
                  {siteConfig.phone}
                </a>{" "}
                to confirm travel options and turnaround for your listing.
              </p>
            </div>

            <div className="areas-visual">
              <div className="areas-visual-item">
                <Image
                  src={marketingKitImages.areasPrimary}
                  alt="Drone photo of a house in NW Calgary by Photos 4 Real Estate"
                  width={1600}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={marketingKitImages.areasSecondary}
                  alt="Drone photo of downtown Calgary and the Bow River by Photos 4 Real Estate"
                  width={1400}
                  height={900}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={marketingKitImages.areasTertiary}
                  alt="Virtual staging of a dining and living room by Photos 4 Real Estate for a Calgary listing"
                  width={1400}
                  height={1050}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews variant="dark" eyebrow="Client Reviews" heading={<>What Calgary Realtors Say</>} />

      <Faq
        heading="Marketing Kit — Frequently Asked Questions"
        intro={
          <>
            Common questions about the marketing kit, required listing
            information, delivery, and customization. More questions? Call{" "}
            <a
              href={siteConfig.phoneHref}
              className="faq-phone-link"
              aria-label={`Call Photos 4 Real Estate at ${siteConfig.phone}`}
            >
              {siteConfig.phone}
            </a>
            .
          </>
        }
        faqs={content.faqs}
        allFaqsLabelSuffix="the marketing kit for Calgary realtors"
      />

      <Cta
        eyebrow="Ready to get your kit?"
        title="Book Once. Get Photos, Floor Plans, Tour & Complete Marketing Kit."
        description={
          <>
            Every package. Every listing. Once we have the required listing
            information, the marketing kit is usually delivered the next day —
            at no extra cost.
          </>
        }
        secondaryHref="/prices"
        secondaryLabel="View Pricing"
        secondarySrSuffix=" for Calgary real estate media packages"
      />
    </>
  );
}