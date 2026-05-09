import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  ArrowRight,
  Box,
  Camera,
  Check,
  Clock,
  CloudSun,
  FileText,
  Images,
  MapPin,
  Moon,
  Drone,
  Ruler,
  Sparkles,
  Video,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { BeforeAfter } from "@/components/bits/BeforeAfter";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig, serviceAreas } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";
import { photographyImages } from "@/lib/images";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";

export const dynamic = "force-static";

const slug = "real-estate-photography-in-calgary";
const content = servicesContent[slug];
const pageUrl = `${siteConfig.url}/services/${slug}`;
const ogImageUrl = `${pageUrl}/opengraph-image`;

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
      images: [
        { url: ogImageUrl, width: 1200, height: 630, alt: content.ogAlt },
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

const businessId = `${siteConfig.url}/#business`;
const businessRef = { "@id": `${siteConfig.url}/#business` };

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Real Estate Photography",
  serviceType: "Real Estate Photography",
  description: content.seoDescription,
  url: pageUrl,
  provider: businessRef,
  areaServed: [...serviceAreas],
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "140",
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
    author: {
      "@type": "Person",
      name: review.name,
    },
    itemReviewed: {
      "@id": businessId,
    },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: toIsoDate(review.date),
    publisher: {
      "@type": "Organization",
      name: "Google",
    },
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

const checklist = [
  "Clear countertops of personal items",
  "Turn on all interior lights",
  "Open all blinds and curtains",
  "Remove vehicles from driveway",
  "Make all beds neatly",
  "Put away pet bowls, toys & beds",
  "Clean windows if possible",
  "Tidy the front entryway",
  "Mow lawn & tidy yard",
  "Replace burnt-out bulbs",
] as const;

const deliverables = [
  {
    icon: <Camera size={22} aria-hidden="true" />,
    title: "High-Resolution HDR Photos",
    desc: "Interior and exterior images shot using HDR bracketing and natural light for maximum detail, balanced exposure and accurate colour.",
    tag: "Core Deliverable",
  },
  {
    icon: <CloudSun size={22} aria-hidden="true" />,
    title: "Blue-Sky Replacement",
    desc: "Overcast or grey skies in exterior photos are replaced with bright blue Calgary skies — included on every exterior image at no extra charge.",
    tag: "Always Included Free",
  },
  {
    icon: <FileText size={22} aria-hidden="true" />,
    title: "MLS-Ready File Formats",
    desc: "High-resolution JPEG files for print and MLS upload, plus web-optimised versions for your website, social media and email campaigns — all delivered in one labelled folder.",
    tag: "Core Deliverable",
  },
  {
    icon: <Clock size={22} aria-hidden="true" />,
    title: "24-Hour Turnaround",
    desc: "All edited photos are delivered via download link by the next morning after your shoot — regardless of property size or number of images.",
    tag: "Guaranteed",
  },
  {
    icon: <Images size={22} aria-hidden="true" />,
    title: "Usage Licence",
    desc: "Every photo includes a commercial licence for use in your marketing, valid until the property is sold. Share on MLS, social media, your website and print materials without restriction.",
    tag: "Included",
  },
  {
    icon: <Sparkles size={22} aria-hidden="true" />,
    title: "Free Marketing Kit",
    desc: "Every package also includes 9 social media reels, 3 property websites, 3 property flyers and 2 slideshows — all at no extra cost.",
    tag: "Bonus — No Extra Charge",
  },
] as const;

const relatedCards = [
  {
    href: "/services/rms-measurements-and-floor-plans-in-calgary",
    icon: <Ruler size={22} aria-hidden="true" />,
    title: "RMS Measurements & Floor Plans",
    desc: "RMS-compliant measurements and detailed 2D floor plans \u2014 required for every Calgary MLS listing. Completed at the same visit as photography.",
    srSuffix: "RMS Measurements and Floor Plans in Calgary",
  },
  {
    href: "/services/iguide-virtual-tours-in-calgary",
    icon: <Box size={22} aria-hidden="true" />,
    title: "iGUIDE 3D Virtual Tours",
    desc: "Interactive 360\u00b0 virtual tours with embedded floor plans and measurements \u2014 give buyers the ability to explore the property remotely before booking a showing.",
    srSuffix: "iGUIDE 3D Virtual Tours in Calgary",
  },
  {
    href: "/services/real-estate-aerial-drone-photography-in-calgary",
    icon: <Drone size={22} aria-hidden="true" />,
    title: "Drone Photography & Videography",
    desc: "Aerial photos and video that show the property's lot, location, and neighbourhood from above \u2014 Transport Canada licensed and included in Skyline and Social Boost packages.",
    srSuffix: "Aerial Drone Photography in Calgary",
  },
  {
    href: "/services/real-estate-videos-in-calgary",
    icon: <Video size={22} aria-hidden="true" />,
    title: "Real Estate Videography",
    desc: "Cinematic walkthrough videos and 60\u201390 second social media reels that bring listings to life and perform strongly on Instagram and Facebook.",
    srSuffix: "Real Estate Videography in Calgary",
  },
  {
    href: "/services/virtual-staging",
    icon: <Armchair size={22} aria-hidden="true" />,
    title: "Virtual Staging",
    desc: "Digitally furnished vacant rooms help buyers visualize a property's potential. Photorealistic results at a fraction of the cost of physical staging.",
    srSuffix: "Virtual Staging in Calgary",
  },
  {
    href: "/services/twilight-photography-for-real-estate-in-calgary",
    icon: <Moon size={22} aria-hidden="true" />,
    title: "Twilight Photography",
    desc: "Dramatic dusk exterior photos that consistently outperform standard exterior shots for online engagement and social media reach \u2014 $125 add-on.",
    srSuffix: "Twilight Photography in Calgary",
  },
] as const;

export default function RealEstatePhotographyCalgaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Real Estate Photography" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      {/* HERO — reuses services-page-hero pattern, no buttons, 3 stats */}
      <section
        className="services-page-hero"
        aria-labelledby="photo-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                Real Estate Photography &middot; Calgary, AB
              </div>
              <h1 id="photo-hero-title">
                Real Estate Photography
                <br />
                in <em>Calgary</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>Photos 4 Real Estate</strong> provides professional{" "}
                <strong>real estate photography</strong> for Calgary realtors
                and homeowners — HDR-edited interior and exterior photos,
                blue-sky replacement and <strong>next-day delivery</strong> on
                every shoot.
              </p>
            </div>

            <ul
              className="services-page-hero-stats photo-hero-stats"
              aria-label="Real estate photography key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">24h</span>
                <span className="lbl">Next-day delivery</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">5&#9733;</span>
                <span className="lbl">Google rating</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">$140</span>
                <span className="lbl">Starting price</span>
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
      {/* INTRO */}
      <section
        className="photo-intro-section"
        aria-labelledby="photo-intro-heading"
      >
        <div className="container">
          <div className="photo-intro-grid">
            <div className="photo-intro-content">
              <span className="section-label">What We Do</span>
              <h2 id="photo-intro-heading">
                Professional Real Estate Photography in Calgary
              </h2>
              <p className="lead speakable-intro">
                Real estate photography is the single most impactful marketing
                tool available to Calgary realtors. Listings with professional
                photos sell faster, generate more showing requests and
                consistently achieve stronger sale prices than listings with
                phone photos.
              </p>
              <p>
                At <strong>Photos 4 Real Estate</strong> we shoot interior and
                exterior photography using professional HDR techniques,
                wide-angle lenses and natural light to present every room in
                the most attractive, accurate way possible. Every photo is
                edited the same day and delivered to you by the next morning —
                ready for MLS upload without any additional processing on your
                end.
              </p>
              <p>
                We serve{" "}
                <a href="#service-areas" className="body-link">
                  Calgary
                </a>{" "}
                and surrounding communities including{" "}
                <a href="#service-areas" className="body-link">
                  Okotoks
                </a>
                ,{" "}
                <a href="#service-areas" className="body-link">
                  Airdrie
                </a>
                ,{" "}
                <a href="#service-areas" className="body-link">
                  Cochrane
                </a>
                ,{" "}
                <a href="#service-areas" className="body-link">
                  Chestermere
                </a>
                ,{" "}
                <a href="#service-areas" className="body-link">
                  High River
                </a>{" "}
                and{" "}
                <a href="#service-areas" className="body-link">
                  Banff
                </a>
                . See our{" "}
                <Link href="/services" className="body-link">
                  full service list
                  <span className="sr-only">
                    {" "}for Calgary real estate marketing
                  </span>
                </Link>{" "}
                for everything we capture in a single visit.
              </p>
              <ul
                className="photo-stat-row"
                aria-label="Why professional real estate photography matters"
              >
                <li className="photo-stat-cell">
                  <span className="num">95%</span>
                  <span className="lbl">
                    of buyers start their search online
                  </span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">32%</span>
                  <span className="lbl">
                    faster sales with professional photos
                  </span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">24h</span>
                  <span className="lbl">delivery on every shoot</span>
                </li>
              </ul>
            </div>
            <div className="photo-intro-visual">
              <div className="photo-intro-pill">
                <div className="photo-intro-pill-dot" aria-hidden="true"></div>
                Calgary&rsquo;s top-rated photography team
              </div>
              <div className="photo-intro-img">
                <Image
                  src={photographyImages.introMain}
                  alt="Exterior photo of a house in Calgary by Photos 4 Real Estate"
                  width={1200}
                  height={1500}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
              <div className="photo-intro-img-secondary">
                <Image
                  src={photographyImages.introSecondary}
                  alt="Living room photo example in Calgary by Photos 4 Real Estate"
                  width={900}
                  height={675}
                  sizes="(max-width: 1024px) 55vw, 28vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE — deliverables */}
      <section
        className="deliverables-section photo-deliverables-section"
        aria-labelledby="photo-deliv-heading"
      >
        <div className="container">
          <div className="deliverables-header">
            <span className="section-label">What You Receive</span>
            <h2 id="photo-deliv-heading">
              Everything Included in Every Photo Shoot
            </h2>
            <p>
              Every booking — regardless of package — includes this complete
              set of deliverables. No extras required for MLS upload.
            </p>
          </div>
          <div className="deliverables-grid">
            {deliverables.map((d) => (
              <article key={d.title} className="deliv-card">
                <div className="deliv-icon" aria-hidden="true">
                  {d.icon}
                </div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <span className="deliv-tag">{d.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOT TYPES */}
      <section
        className="shot-types-section photo-shot-types-section"
        aria-labelledby="photo-shots-heading"
      >
        <div className="container">
          <div className="shot-types-header">
            <span className="section-label">Types of Photography</span>
            <h2 id="photo-shots-heading">What We Photograph</h2>
            <p>
              Every property is different. Here&rsquo;s how we approach each
              type of shot to produce images that attract buyers and drive
              showings.
            </p>
          </div>

          {/* 01 Interior */}
          <div className="shot-block">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">01</div>
              <h3>Interior Photography</h3>
              <p>
                Interior photos are the heart of every listing. We use
                wide-angle lenses, HDR techniques and natural light to make rooms feel spacious, bright and welcoming —
                without distorting proportions or misrepresenting the space.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Living rooms, kitchens, bedrooms, bathrooms
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Home offices, basements, bonus rooms
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  HDR blending for balanced window exposure
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Professional post-processing &amp; colour grading
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <Image
                src={photographyImages.interior}
                alt="Kitchen photo example in Calgary by Photos 4 Real Estate"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* 02 Exterior */}
          <div className="shot-block reverse">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">02</div>
              <h3>Exterior &amp; Curb Appeal Photography</h3>
              <p>
                The exterior photo is the first image most buyers see — it
                determines whether they click through to the listing or
                scroll past. We shoot at the optimal time of day for each
                property&rsquo;s orientation to maximise natural light and
                minimise harsh shadows.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Front and rear exterior images
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Garage, driveway and landscaping
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Blue-sky replacement included on every shot
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Optimal time-of-day scheduling for best light
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <Image
                src={photographyImages.exterior}
                alt="Exterior photo of a Calgary house by Photos 4 Real Estate"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* 03 Blue Sky — BeforeAfter slider */}
          <div className="shot-block">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">03</div>
              <h3>Blue-Sky Replacement</h3>
              <p>
                Calgary weather is unpredictable. A grey or overcast sky on
                shoot day shouldn&rsquo;t affect how your listing looks
                online. Our blue-sky replacement digitally replaces flat or
                cloudy skies with bright, realistic Calgary blue — included
                at <strong>no extra charge</strong> on every exterior image.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Applied to every exterior image automatically
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Photorealistic — not obviously edited
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  No extra charge on any package
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <BeforeAfter
                beforeSrc={photographyImages.skyBefore}
                afterSrc={photographyImages.skyAfter}
                beforeAlt="Pool exterior photo before editing with a grey sky and empty pool by Photos 4 Real Estate"
                afterAlt="Pool exterior photo after sky and water replacement by Photos 4 Real Estate"
              />
            </div>
          </div>

          {/* 04 Twilight */}
          <div className="shot-block reverse">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">04</div>
              <h3>Twilight Photography</h3>
              <p>
                Twilight exteriors are the highest-clicked hero images on MLS.
                Captured in the 30-minute window after sunset with warm
                interior lights glowing, twilight photos make a property feel
                premium, inviting and memorable.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Available as add-on or in luxury packages
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Perfect MLS hero shot for premium listings
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  See our{" "}
                  <Link
                    href="/services/twilight-photography-for-real-estate-in-calgary"
                    className="body-link"
                  >
                    Calgary twilight photography page
                    <span className="sr-only">
                      {" "}for full details and examples
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <Image
                src={photographyImages.twilight}
                alt="Twilight photo of a house near Calgary by Photos 4 Real Estate"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / PROCESS */}
      <section
        className="process-section photo-process-section"
        aria-labelledby="photo-process-heading"
      >
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="photo-process-heading">
              From Booking to Delivered Photos &mdash; in 4 Steps
            </h2>
            <p>
              We keep the process simple so you can focus on your clients, not
              coordination.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                01
              </div>
              <h3>Book Online</h3>
              <p>
                Select your package, choose a date, and provide the property
                address. Booking takes under 3 minutes. You&apos;ll receive a
                confirmation immediately.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                02
              </div>
              <h3>We Arrive On-Site</h3>
              <p>
                Our photographer arrives at the scheduled time. A standard photo
                shoot takes 45&ndash;90 minutes. We ask that all lights be on
                and the property be ready when we arrive.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                03
              </div>
              <h3>Professional Editing</h3>
              <p>
                Every image is colour-corrected, exposure-balanced, and reviewed
                before delivery. Blue-sky replacement is applied to all exterior
                shots automatically.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                04
              </div>
              <h3>Next-Day Delivery</h3>
              <p>
                You receive a download link by the next morning with all files
                in MLS-ready and web-optimized formats, clearly organized and
                ready to upload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREP CHECKLIST */}
      <section className="prep-section photo-prep-section" aria-labelledby="photo-prep-heading">
        <div className="container">
          <div className="prep-grid">
            <div className="prep-content">
              <span className="section-label">Get Ready</span>
              <h2 id="photo-prep-heading">
                How to Prepare Your Calgary Home for Photo Day
              </h2>
              <p>
                A quick prep walk-through the night before your shoot makes a
                huge difference in the final images. Use this checklist to
                make sure every room is ready before our photographer arrives.
              </p>
              <ul className="checklist" aria-label="Photography prep checklist">
                {checklist.map((item) => (
                  <li key={item} className="checklist-item">
                    <Check size={14} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="prep-note">
                <h3>📋 Full Photoshoot Checklist</h3>
                <p>
                  We&apos;ve put together a comprehensive checklist you can share
                  directly with your sellers. It covers every room, the
                  exterior, and day-of timing tips.{" "}
                  <Link href="/photoshoot-checklist">
                    Read the full checklist
                    <span className="sr-only"> for preparing your Calgary home</span> &rarr;
                  </Link>
                </p>
              </div>
            </div>
            <div className="prep-visual">
              <div className="prep-img">
                <Image
                  src={photographyImages.prepLiving}
                  alt="Dining area photo for a Calgary listing by Photos 4 Real Estate"
                  width={1200}
                  height={675}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="prep-img-row">
                <div>
                  <Image
                    src={photographyImages.prepKitchen}
                    alt="Living room with fireplace photo for a Calgary listing by Photos 4 Real Estate"
                    width={800}
                    height={600}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={photographyImages.prepBedroom}
                    alt="Living room with stairs photo for real estate photography in Calgary by Photos 4 Real Estate"
                    width={800}
                    height={600}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CALLOUT */}
      <section className="pricing-section photo-pricing-section" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="pricing-callout">
            <div className="pc-left">
              <span className="pc-label">Pricing</span>
              <h2 id="pricing-heading" className="pc-heading">
                Transparent Pricing.<br /><em>No Hidden Fees.</em>
              </h2>
              <p className="pc-body">
                Real estate photography in Calgary starts from $140 for photos only, or from $245 when bundled with our iGUIDE 3D virtual tour and RMS measurements. Pricing scales by square footage &mdash; select your home size on the pricing page to see your exact quote.
              </p>
              <div className="pc-includes" aria-label="What's always included">
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Blue-sky replacement</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>MLS-ready files</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Next-day delivery</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Usage licence included</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Free marketing kit</div>
              </div>
            </div>

            <div className="pc-right">
              <span className="pc-from">Photography starting from</span>
              <span className="pc-price"><sup>$</sup>140</span>
              <span className="pc-gst">+ GST &nbsp;&middot;&nbsp; photos only</span>
              <div className="pc-actions">
                <Link href="/prices" className="btn btn-primary">
                  See Full Pricing
                  <span className="sr-only"> for Calgary real estate photography</span>
                </Link>
                <a href={siteConfig.bookingUrl} className="btn btn-outline">
                  Book Online
                  <span className="sr-only"> &mdash; Calgary real estate photography</span>
                </a>
              </div>
              <p className="pc-sqft-note">
                Prices vary by square footage.<br />
                Packages from $245 include iGUIDE&nbsp;+&nbsp;RMS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section
        id="service-areas"
        className="areas-section"
        aria-labelledby="photo-areas-heading"
      >
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="photo-areas-heading">
                Calgary Real Estate Photography &amp; Surrounding Areas
              </h2>
              <p>
                Photos 4 Real Estate covers all of Calgary plus the
                surrounding communities, towns and acreages within our
                standard service radius. Same all-inclusive pricing, same
                next-day delivery on every shoot.
              </p>
              <ul className="areas-chips" aria-label="Calgary service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href="/service-areas"
                      className="area-chip"
                      aria-label={`Real estate photography in ${area}`}
                    >
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

      {/* REVIEWS — dark variant */}
      <Reviews
        variant="dark"
        eyebrow="Calgary Realtor Reviews"
        heading={
          <>
            Calgary&rsquo;s top agents trust{" "}
            <em>Photos 4 Real Estate</em> for every listing.
          </>
        }
      />

      {/* FAQ */}
      <Faq
        heading="Real Estate Photography FAQ"
        faqs={content.faqs}
        allFaqsLabelSuffix="real estate photography in Calgary"
      />

      {/* RELATED SERVICES — Also Available */}
      <section
        className="related-section"
        aria-labelledby="photo-related-heading"
      >
        <div className="container">
          <div className="related-header">
            <span className="section-label">Also Available</span>
            <h2 id="photo-related-heading">Services That Pair With Photography</h2>
          </div>
          <div className="related-grid">
            {relatedCards.map((card) => (
              <article key={card.href} className="related-card">
                <div className="related-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link href={card.href} className="related-link">
                  Learn more
                  <ArrowRight size={14} aria-hidden="true" />
                  <span className="sr-only"> about {card.srSuffix}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — services-page style with photography copy */}
      <Cta
        eyebrow="Ready To List?"
        title="Book Calgary Real Estate Photography In Under A Minute."
        description={
          <>
            Pick your date, choose your package, and we&rsquo;ll handle the
            rest &mdash; HDR photos, blue-sky replacement and next-day
            delivery on every Calgary shoot.
          </>
        }
      />
    </>
  );
}
