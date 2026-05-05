import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Check,
  Clock,
  FileText,
  Images,
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
import { siteConfig } from "@/lib/site";
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
  areaServed: "Calgary and surrounding areas",
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
  "9 social media video reels — automatically generated from your listing photos",
  "3 branded property websites — shareable links, no setup required",
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
      "Delivered as MP4 files — no editing required",
      "Separate from the full 45–60 second Social Boost reel",
    ],
    note: (
      <p className="marketing-tool-note">
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
    title: "3 Branded Property Websites — Share a Link, Impress Every Buyer",
    icon: <Box size={22} aria-hidden="true" />,
    paragraphs: [
      "Every listing gets three dedicated single-property websites — professional, mobile-responsive pages that showcase the listing photos, property details, and your contact information with a single shareable link. No web design skills required. No hosting setup. Just a clean, professional URL you can paste anywhere.",
      "Each of the three websites uses a different layout or design template, giving you options for different marketing contexts. Share in your email campaigns, paste in the MLS listing notes, include in your social media bio, or send directly to interested buyers via text or WhatsApp.",
    ],
    bullets: [
      "Three different design templates per listing",
      "Your logo, name, and contact info displayed prominently",
      "All listing photos displayed in a professional gallery",
      "Mobile-responsive — looks great on phones and tablets",
      "iGUIDE 3D tour embedded when included in your package",
      "Shareable link — no login required for buyers to view",
    ],
  },
  {
    id: "flyers",
    num: "03",
    label: "Property Flyers",
    title: "3 Print-Ready PDF Property Flyers — For Open Houses & Email",
    icon: <FileText size={22} aria-hidden="true" />,
    paragraphs: [
      "Every listing generates three professionally designed PDF property flyers featuring your listing photos and property details. These are not generic templates — they are properly designed marketing documents that look polished when printed for open houses or attached to email campaigns.",
      "Each of the three flyers uses a different layout — a feature sheet, a comparative layout, and a social-style design — giving you options for different marketing contexts. Print them for open houses, email them to buyer prospects, or attach them to your digital listing presentation.",
    ],
    bullets: [
      "Three different flyer designs per listing",
      "Print-ready PDF — 300dpi, suitable for professional printing",
      "Your branding, contact info, and listing details",
      "Ideal for open houses, email, and digital listing presentations",
      "Customize any time via the free flyer generator tool",
    ],
    note: (
      <p className="marketing-tool-note">
        Need to refresh copy or layout later? Use our{" "}
        <Link href="/free-tools" className="body-link">
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
      "Delivered as MP4 — works in email, social, and presentations",
      "Horizontal 16:9 format — ideal for desktop and email viewing",
      "Customize and regenerate via the free slideshow generator",
    ],
    note: (
      <p className="marketing-tool-note">
        Want a fresh version later? Open the{" "}
        <Link href="/free-tools" className="body-link">
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
    title: "Kit Generates Automatically",
    desc: "Your marketing kit is generated overnight from your listing photos — reels, websites, flyers, and slideshows all formatted and ready to use.",
  },
  {
    num: "04",
    title: "Download & Share Next Morning",
    desc: "You receive one delivery link with your photos, floor plans, tour link, and your complete marketing kit by the next morning.",
  },
] as const;

function renderToolVisual(kind: ToolVisualKind) {
  switch (kind) {
    case "reels":
      return (
        <div className="marketing-reel-row" aria-label="Social media reel previews">
          <div className="marketing-reel-phone">
            <Image
              src={marketingKitImages.introMain}
              alt="Vertical reel preview generated from a Calgary living room listing photo"
              width={900}
              height={1600}
              sizes="(max-width: 1024px) 45vw, 220px"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="marketing-reel-tag">Reel 1 of 9</div>
          </div>
          <div className="marketing-reel-phone is-secondary">
            <Image
              src={marketingKitImages.introSecondary}
              alt="Second vertical reel preview created from a Calgary kitchen listing photo"
              width={900}
              height={1600}
              sizes="(max-width: 1024px) 45vw, 220px"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="marketing-reel-tag">Reel 2 of 9</div>
          </div>
        </div>
      );
    case "websites":
      return (
        <div className="marketing-website-mock">
          <div className="marketing-browser-bar">
            <span className="marketing-browser-dot is-red" />
            <span className="marketing-browser-dot is-amber" />
            <span className="marketing-browser-dot is-green" />
            <div className="marketing-website-url">
              listing.photos4realestate.ca/123-main-st
            </div>
          </div>
          <Image
            src={marketingKitImages.websiteHero}
            alt="Example branded single-property website hero image for a Calgary listing"
            width={1400}
            height={900}
            sizes="(max-width: 1024px) 100vw, 42vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      );
    case "flyers":
      return (
        <div className="marketing-flyer-row" aria-label="Property flyer previews">
          <div className="marketing-flyer-item">
            <Image
              src={marketingKitImages.introMain}
              alt="Property flyer preview featuring a Calgary living room listing photo"
              width={900}
              height={1200}
              sizes="(max-width: 1024px) 32vw, 180px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="marketing-flyer-item">
            <Image
              src={marketingKitImages.introSecondary}
              alt="Property flyer preview featuring a Calgary kitchen listing photo"
              width={900}
              height={1200}
              sizes="(max-width: 1024px) 32vw, 180px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="marketing-flyer-item">
            <Image
              src={marketingKitImages.introTertiary}
              alt="Property flyer preview featuring a Calgary bedroom listing photo"
              width={900}
              height={1200}
              sizes="(max-width: 1024px) 32vw, 180px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      );
    case "slideshows":
      return (
        <div className="marketing-slideshow-mock">
          <div className="marketing-browser-bar is-compact">
            <span className="marketing-browser-dot is-red" />
            <span className="marketing-browser-dot is-amber" />
            <span className="marketing-browser-dot is-green" />
            <span className="marketing-slideshow-label">
              Listing Slideshow — 123 Main St Calgary
            </span>
          </div>
          <Image
            src={marketingKitImages.slideshowHero}
            alt="Twilight listing image displayed inside a Calgary real estate slideshow preview"
            width={1600}
            height={900}
            sizes="(max-width: 1024px) 100vw, 42vw"
            style={{ width: "100%", height: "auto" }}
          />
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
                3 property websites, 3 property flyers, and 2 slideshows,
                delivered alongside your listing photos.
              </p>
            </div>

            <ul
              className="services-page-hero-stats photo-hero-stats"
              aria-label="Marketing kit included assets"
            >
              <li className="services-page-hero-stat">
                <span className="num">17</span>
                <span className="lbl">Marketing assets</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">100%</span>
                <span className="lbl">Free</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">24h</span>
                <span className="lbl">Delivery</span>
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
                automatically generates a full set of marketing assets Calgary
                realtors can use across social media, email, print, and the web
                the very next morning.
              </p>
              <p>
                The marketing kit is not an upgrade or an add-on. It is
                included as standard with every Essential, Skyline, and Social
                Boost package at no additional cost — because a great photo
                deserves great marketing tools to match.
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
              <div className="marketing-intro-pill">
                <div className="marketing-intro-pill-dot" aria-hidden="true"></div>
                Included Free
              </div>
              <div className="marketing-intro-visual-item is-single">
                <Image
                  src={marketingKitImages.introMain}
                  alt="Marketing Kit from Photos 4 Real Estate showing branded reels, flyers, websites, and listing marketing assets"
                  width={1600}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
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
                <div className="marketing-tool-visual">{renderToolVisual(section.id)}</div>
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
            Social Boost package — automatically, with zero additional steps
            required from you.
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
              <Link href="/book-online" className="btn btn-primary">
                Claim 25% Discount
              </Link>
            </article>

            <article className="marketing-promo-card is-light">
              <span className="marketing-promo-tag is-brick">Loyalty Program</span>
              <div className="marketing-loyalty-icon" aria-hidden="true">
                <Clock size={24} />
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
              <Link href="/book-online" className="btn btn-outline-dark">
                Start Earning Points
              </Link>
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
              Zero extra steps on your end. Book once, receive everything the
              next morning.
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

      <Reviews variant="dark" eyebrow="Client Reviews" heading={<>What Calgary Realtors Say</>} />

      <Faq
        heading="Marketing Kit — Frequently Asked Questions"
        intro={
          <>
            Common questions about the marketing kit, delivery, and
            customization. More questions? Call{" "}
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
        title="Book once. Get photos, floor plans, tour & complete marketing kit."
        description={
          <>
            Every package. Every listing. Next morning. No extra steps, no extra
            cost — just everything you need to market your listing across every
            channel.
          </>
        }
        secondaryHref="/prices"
        secondaryLabel="View Pricing"
        secondarySrSuffix=" for Calgary real estate media packages"
      />
    </>
  );
}