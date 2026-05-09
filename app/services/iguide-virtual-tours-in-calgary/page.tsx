import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  Box,
  Camera,
  Check,
  Clock,
  MapPin,
  Minus,
  Moon,
  Drone,
  Ruler,
  Video,
  MonitorSmartphone,
  Smartphone,
  Globe,
  Share2,
  FileText,
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
import { iguideTourImages } from "@/lib/images";

export const dynamic = "force-static";

const slug = "iguide-virtual-tours-in-calgary";
const content = servicesContent[slug];
const pageUrl = `${siteConfig.url}/services/${slug}`;
const ogImageUrl = iguideTourImages.areasVirtualTour;

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

const businessRef = { "@id": `${siteConfig.url}/#business` };

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "iGUIDE 3D Virtual Tours Calgary",
  serviceType: "iGUIDE 3D Virtual Tours",
  description: content.seoDescription,
  url: pageUrl,
  provider: businessRef,
  areaServed: [...serviceAreas],
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "150",
    url: `${siteConfig.url}/prices`,
    availability: "https://schema.org/InStock",
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

const relatedCards = [
  {
    href: "/services/real-estate-photography-in-calgary",
    icon: <Camera size={22} aria-hidden="true" />,
    title: "Real Estate Photography",
    desc: "Professional HDR interior and exterior photography with next-day delivery — the foundation of every successful Calgary listing.",
    srSuffix: "Real Estate Photography in Calgary",
  },
  {
    href: "/services/rms-measurements-and-floor-plans-in-calgary",
    icon: <Ruler size={22} aria-hidden="true" />,
    title: "RMS Measurements & Floor Plans",
    desc: "RMS-compliant measurements and detailed 2D floor plans — required for every Calgary MLS listing. Completed at the same visit as photography.",
    srSuffix: "RMS Measurements and Floor Plans in Calgary",
  },
  {
    href: "/services/real-estate-aerial-drone-photography-in-calgary",
    icon: <Drone size={22} aria-hidden="true" />,
    title: "Drone Photography & Videography",
    desc: "Aerial photos and video that show the property's lot, location, and neighbourhood from above — Transport Canada licensed and fully insured.",
    srSuffix: "Aerial Drone Photography in Calgary",
  },
  {
    href: "/services/real-estate-videos-in-calgary",
    icon: <Video size={22} aria-hidden="true" />,
    title: "Real Estate Videography",
    desc: "Cinematic walkthrough videos and 60–90 second social media reels that bring listings to life and perform strongly on Instagram and Facebook.",
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
    desc: "Dramatic dusk exterior photos that consistently outperform standard exterior shots for online engagement and social media reach — $125 add-on.",
    srSuffix: "Twilight Photography in Calgary",
  },
] as const;

export default function IguideVirtualToursCalgaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "iGUIDE 3D Virtual Tours" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      {/* HERO */}
      <section
        className="services-page-hero"
        aria-labelledby="iguide-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                {content.eyebrow} &middot; Calgary, AB
              </div>
              <h1 id="iguide-hero-title">
                iGUIDE 3D Virtual Tours
                <br />
                in <em>Calgary</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>Photos 4 Real Estate</strong> provides <strong>iGUIDE 3D virtual tours</strong> — interactive, buyer-ready property walkthroughs that include RMS measurements and floor plans in every scan. One visit, three deliverables, next-day delivery.
              </p>
            </div>

            <ul
              className="services-page-hero-stats"
              aria-label="iGUIDE service key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">360&deg;</span>
                <span className="lbl">Interactive tour</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">&plusmn;1%</span>
                <span className="lbl">Accuracy</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">24h</span>
                <span className="lbl">Delivery guaranteed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <PageBody />

      <JsonLd id={`ld-service-${slug}`} data={serviceSchema} />
      <JsonLd id={`ld-faq-${slug}`} data={faqSchema} />
      <JsonLd id={`ld-speakable-${slug}`} data={speakableSchema} />
    </>
  );
}

function PageBody() {
  return (
    <>
      {/* ── INTRO ── */}
      <section
        className="ig-tour-intro-section"
        aria-labelledby="intro-heading"
      >
        <div className="container">
          <div className="ig-tour-intro-grid">
            <div className="ig-tour-intro-content">
              <span className="section-label">What We Do</span>
              <h2 id="intro-heading">
                iGUIDE 3D Virtual Tours in Calgary — With RMS &amp; Floor Plans
                Included
              </h2>
              <p className="lead speakable-intro">
                iGUIDE is the most complete single-visit solution for Calgary
                MLS listings. A single scan produces three things
                simultaneously: an interactive 3D virtual tour, RECA-compliant
                RMS measurements, and a professional 2D floor plan — all
                delivered the next morning.
              </p>
              <p>
                Unlike photo-only virtual tours, iGUIDE uses a calibrated
                360&deg; camera combined with a LiDAR-based distance sensor to
                build a precise spatial model of the property. Every room
                dimension, every ceiling height, and every wall angle is
                captured automatically — producing measurements accurate to
                within 1% and floor plans that meet all MLS submission
                requirements.
              </p>
              <p>
                iGUIDE can be booked as a{" "}
                <Link href="/prices" className="body-link">
                  standalone service from $150
                </Link>
                , or is included as standard in every{" "}
                <Link href="/prices" className="body-link">
                  Essential, Skyline, and Social Boost package
                </Link>{" "}
                alongside professional photography — all in one property visit.
              </p>

              <div
                className="ig-always-bundled"
                aria-label="iGUIDE bundle details"
              >
                <span className="ig-always-bundled-label">
                  What iGUIDE always includes
                </span>
                <h3>Three Deliverables from One Scan</h3>
                <div className="ig-bundle-items">
                  <div className="ig-bundle-item">
                    <div className="ig-bundle-check"><Check size={12} strokeWidth={3} /></div>
                    Interactive 360&deg; 3D virtual tour with shareable link
                  </div>
                  <div className="ig-bundle-item">
                    <div className="ig-bundle-check"><Check size={12} strokeWidth={3} /></div>
                    RECA-compliant RMS measurement report
                  </div>
                  <div className="ig-bundle-item">
                    <div className="ig-bundle-check"><Check size={12} strokeWidth={3} /></div>
                    Standard 2D floor plan (PDF + PNG, MLS-ready)
                  </div>
                  <div className="ig-bundle-item">
                    <div className="ig-bundle-check"><Check size={12} strokeWidth={3} /></div>
                    iGUIDE analytics report (views, engagement data)
                  </div>
                  <div className="ig-bundle-item">
                    <div className="ig-bundle-check"><Check size={12} strokeWidth={3} /></div>
                    Embed code for property websites and email
                  </div>
                </div>
              </div>

              <div className="ig-tour-stat-row" role="list">
                <div className="ig-tour-stat-cell" role="listitem">
                  <span className="num">&plusmn;1%</span>
                  <span className="lbl">LiDAR measurement accuracy</span>
                </div>
                <div className="ig-tour-stat-cell" role="listitem">
                  <span className="num">3-in-1</span>
                  <span className="lbl">tour + RMS + floor plan</span>
                </div>
                <div className="ig-tour-stat-cell" role="listitem">
                  <span className="num">24h</span>
                  <span className="lbl">delivery guaranteed</span>
                </div>
              </div>
            </div>
            <div className="ig-tour-intro-visual">
              <div className="ig-tour-img-main">
                <div className="ig-tour-img-pill">
                  <div className="ig-pill-dot"></div>
                  iGUIDE &middot; LiDAR + 360&deg; camera
                </div>
                <Image
                  src={iguideTourImages.onlineViewing}
                  alt="Real estate floor plan generated from iGUIDE property scan"
                  width={800}
                  height={600}
                  sizes="(max-width: 900px) 100vw, 38vw"
                />
              </div>
              <div className="ig-tour-img-pair">
                <div>
                  <Image
                    src={iguideTourImages.standardFloorPlan}
                    alt="Standard iGUIDE floor plan with room dimensions for a Calgary listing"
                    width={400}
                    height={300}
                    sizes="(max-width: 900px) 50vw, 19vw"
                  />
                </div>
                <div>
                  <Image
                    src={iguideTourImages.rmsMeasurements}
                    alt="RMS measurement report generated from an iGUIDE scan"
                    width={400}
                    height={300}
                    sizes="(max-width: 900px) 50vw, 19vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUNDLE ── */}
      <section
        className="ig-bundle-section"
        aria-labelledby="bundle-heading"
      >
        <div className="container">
          <div className="ig-bundle-header">
            <span
              className="section-label"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              The iGUIDE Bundle
            </span>
            <h2 id="bundle-heading">Three Deliverables. One Scan. One Visit.</h2>
            <p>
              Every iGUIDE booking automatically produces all three of the
              following — there is no version of iGUIDE that delivers less.
            </p>
          </div>
          <div className="ig-bundle-grid">
            <div className="ig-bundle-card">
              <div className="ig-bundle-card-num" aria-hidden="true">
                01
              </div>
              <div className="ig-bundle-card-icon">
                <Box size={24} />
              </div>
              <h3>Interactive 3D Virtual Tour</h3>
              <p>
                A fully immersive 360&deg; property walkthrough hosted on the
                iGUIDE platform. Buyers can navigate room-to-room, view
                embedded floor plans, see room dimensions in the tour, and
                explore the property from any device at any time — before ever
                booking a showing.
              </p>
              <div className="ig-bundle-card-tag">Always included</div>
            </div>

            <div className="ig-bundle-card">
              <div className="ig-bundle-card-num" aria-hidden="true">
                02
              </div>
              <div className="ig-bundle-card-icon">
                <Check size={24} />
              </div>
              <h3>RECA-Compliant RMS Measurements</h3>
              <p>
                The same scan that produces the virtual tour also captures
                precise spatial data using LiDAR technology. This data
                generates a RECA-approved RMS measurement report — accurate to
                within 1% — that can be submitted directly to MLS without any
                additional measurements.
              </p>
              <div className="ig-bundle-card-tag">
                Always included &middot; RECA-approved
              </div>
            </div>

            <div className="ig-bundle-card">
              <div className="ig-bundle-card-num" aria-hidden="true">
                03
              </div>
              <div className="ig-bundle-card-icon">
                <FileText size={24} />
              </div>
              <h3>Professional 2D Floor Plans</h3>
              <p>
                Accurate floor plans showing every room&apos;s layout, dimensions,
                and total RMS square footage. Delivered as both PDF (for print
                and email) and PNG (for MLS upload and property websites).
                Standard floor plans are included in every scan. Premium floor
                plans are available as an upgrade.
              </p>
              <div className="ig-bundle-card-tag">
                Always included &middot; MLS-ready
              </div>
            </div>
          </div>
          <div className="ig-always-strip">
            <div className="ig-always-strip-icon">
              <Clock size={24} />
            </div>
            <div className="ig-always-strip-text">
              <h3>You cannot get iGUIDE without all three deliverables</h3>
              <p>
                The 3D tour, RMS measurements, and floor plan are produced from
                the same scan simultaneously. This is what makes iGUIDE
                exceptional value — three MLS essentials in one visit, at one
                price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="ig-features-section" aria-labelledby="features-heading">
        <div className="container">
          <div className="ig-features-header">
            <span className="section-label">Key Features</span>
            <h2 id="features-heading">
              What Makes iGUIDE the Best Virtual Tour for Calgary Real Estate
            </h2>
            <p>
              iGUIDE is not just a virtual tour — it&apos;s the most practical,
              compliant, and buyer-friendly way to present a Calgary MLS
              listing digitally.
            </p>
          </div>
          <div className="ig-feature-blocks">
            {/* 360° navigation */}
            <div className="ig-feature-block">
              <div className="ig-feature-content">
                <div className="ig-feature-num" aria-hidden="true">
                  01
                </div>
                <h3>Fully Interactive 360&deg; Navigation</h3>
                <p>
                  Unlike slideshow-style virtual tours, iGUIDE allows buyers
                  to move freely through the property — choosing their own path,
                  zooming into details, and returning to specific rooms. The
                  floor plan is embedded directly into the tour, so buyers can
                  jump to any room with a single click and immediately
                  understand where they are in the property.
                </p>
                <ul className="ig-feature-bullets">
                  <li>
                    <div className="ig-feat-dot"></div>
                    Self-guided navigation — buyers explore at their own pace
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    Embedded floor plan with click-to-navigate rooms
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    Room dimensions visible inside the 3D tour
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    Works on desktop, tablet, and mobile browsers
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    No app download required — shareable via URL
                  </li>
                </ul>
              </div>
              <div className="ig-feature-visual">
                <div style={{ display: 'block', position: 'relative', padding: '0 0 57% 0', overflow: 'hidden', height: 0, width: '100%' }}>
                  <iframe
                    src="//youriguide.com/embed/20729_main_st_se_calgary_ab?unbranded=1&bgcolor=FFFFFF"
                    style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Floor plans */}
            <div className="ig-feature-block reverse">
              <div className="ig-feature-content">
                <div className="ig-feature-num" aria-hidden="true">
                  02
                </div>
                <h3>Standard &amp; Premium Floor Plans</h3>
                <p>
                  Every iGUIDE scan produces a standard 2D floor plan — fully
                  sufficient for all MLS submissions and accurate enough for
                  any residential listing. For luxury properties, complex
                  multi-level homes, or commercial projects requiring enhanced
                  detail, premium floor plans are available as an upgrade at
                  $0.06/sq ft ($70 minimum).
                </p>
                <ul className="ig-feature-bullets">
                  <li>
                    <div className="ig-feat-dot"></div>
                    Standard plan included in every scan — no extra charge
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    All room dimensions and labels clearly shown
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    Total RMS sq ft displayed prominently
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    PDF + PNG formats for all submission types
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    Premium upgrade available for luxury listings
                  </li>
                </ul>
                <Link
                  href="/iguide-floor-plans-standard-vs-premium"
                  className="body-link"
                >
                  Standard vs Premium floor plans — full comparison &rarr;
                </Link>
              </div>
              <div className="ig-feature-visual">
                <BeforeAfter
                  beforeSrc="https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/Standard%20iGUIDE%20Floor%20Plan.webp"
                  afterSrc="https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/Premium%20iGUIDE%20Floor%20Plan.webp"
                  beforeAlt="Standard iGUIDE floor plan example"
                  afterAlt="Premium iGUIDE floor plan example"
                  beforeLabel="Standard"
                  afterLabel="Premium"
                />
              </div>
            </div>

            {/* Analytics */}
            <div className="ig-feature-block">
              <div className="ig-feature-content">
                <div className="ig-feature-num" aria-hidden="true">
                  03
                </div>
                <h3>Listing Analytics &amp; Buyer Engagement Data</h3>
                <p>
                  Every iGUIDE tour comes with a built-in analytics dashboard
                  showing how many buyers viewed the tour, how long they spent
                  in it, and which rooms attracted the most attention. This
                  data is valuable for conversations with your sellers about
                  listing performance — and for demonstrating the reach of
                  your marketing efforts.
                </p>
                <ul className="ig-feature-bullets">
                  <li>
                    <div className="ig-feat-dot"></div>
                    Total tour views and unique visitors
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    Average time spent in the tour
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    Most-visited rooms and hotspots
                  </li>
                  <li>
                    <div className="ig-feat-dot"></div>
                    Useful for seller communication and reporting
                  </li>
                </ul>
              </div>
              <div className="ig-feature-visual" style={{ backgroundColor: "var(--white)", paddingBottom: "12px" }}>
                <Image
                  src="https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/iGUIDE-Analytics-Report-Example.jpg"
                  alt="Sample iGUIDE analytics report showing buyer engagement data"
                  width={800}
                  height={600}
                  sizes="(max-width: 900px) 100vw, 42vw"
                  style={{ borderRadius: "var(--radius-sm)", border: "1px solid var(--border)", objectFit: "contain" }}
                />
                <p style={{ textAlign: "center", fontSize: "14px", color: "var(--text-muted)", marginTop: "12px", fontStyle: "italic" }}>
                  An example of the iGUIDE analytics report
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── iGUIDE vs MATTERPORT ── */}
      <section
        className="ig-compare-section"
        aria-labelledby="compare-heading"
      >
        <div className="container">
          <div className="ig-compare-header">
            <span className="section-label">iGUIDE vs Matterport</span>
            <h2 id="compare-heading">
              Why Calgary Realtors Choose iGUIDE Over Matterport
            </h2>
            <p>
              Both platforms produce 3D virtual tours — but for Calgary MLS
              listings, iGUIDE has a decisive practical advantage.
            </p>
          </div>
          <div className="ig-compare-wrap">
            <table className="ig-compare-table" aria-describedby="ig-compare-caption">
              <caption id="ig-compare-caption" className="sr-only">
                Comparison of iGUIDE and Matterport for Calgary real estate listings, including RMS measurements, floor plans, virtual tour features, and practical differences for realtors.
              </caption>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="hl">iGUIDE <Check size={16} aria-hidden="true" style={{ display: "inline-block", verticalAlign: "middle" }} /></th>
                  <th>Matterport</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ig-section-row-teal">
                  <td colSpan={3}>Measurements &amp; Floor Plans</td>
                </tr>
                <tr>
                  <td>RMS measurements included</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} /></span> Always included
                  </td>
                  <td>
                    <span className="ig-c-no"><Minus size={18} /></span> Requires separate provider
                  </td>
                </tr>
                <tr>
                  <td>RECA-approved measurement method</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} /></span> Yes
                  </td>
                  <td>
                    <span className="ig-c-no"><Minus size={18} /></span> Not applicable
                  </td>
                </tr>
                <tr>
                  <td>2D floor plans for MLS</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} /></span> PDF + PNG included
                  </td>
                  <td>
                    <span className="ig-c-partial">Add-on cost</span>
                  </td>
                </tr>
                <tr>
                  <td>Measurement accuracy</td>
                  <td className="hl">&plusmn;1% (LiDAR)</td>
                  <td>&plusmn;1–2% (Time-of-flight)</td>
                </tr>
                <tr className="ig-section-row-teal">
                  <td colSpan={3}>Virtual Tour</td>
                </tr>
                <tr>
                  <td>Interactive 3D walkthrough</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} aria-hidden="true" /></span>
                    <span className="sr-only">Yes</span>
                  </td>
                  <td>
                    <span className="ig-c-yes"><Check size={18} aria-hidden="true" /></span>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr>
                  <td>Floor plan embedded in tour</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} aria-hidden="true" /></span>
                    <span className="sr-only">Yes</span>
                  </td>
                  <td>
                    <span className="ig-c-yes"><Check size={18} aria-hidden="true" /></span>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr>
                  <td>Room dimensions shown in tour</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} aria-hidden="true" /></span>
                    <span className="sr-only">Yes</span>
                  </td>
                  <td>
                    <span className="ig-c-no"><Minus size={18} aria-hidden="true" /></span>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr>
                  <td>Shareable URL (no app required)</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} aria-hidden="true" /></span>
                    <span className="sr-only">Yes</span>
                  </td>
                  <td>
                    <span className="ig-c-yes"><Check size={18} aria-hidden="true" /></span>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="ig-section-row-teal">
                  <td colSpan={3}>Practicality for Calgary Realtors</td>
                </tr>
                <tr>
                  <td>All-in-one: tour + RMS + floor plan</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} /></span> One scan, one price
                  </td>
                  <td>
                    <span className="ig-c-no"><Minus size={18} /></span> Requires separate
                    measurement visit
                  </td>
                </tr>
                <tr>
                  <td>Analytics &amp; engagement reporting</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} /></span> Included
                  </td>
                  <td>
                    <span className="ig-c-partial">Premium plan only</span>
                  </td>
                </tr>
                <tr>
                  <td>MLS-compatible floor plan format</td>
                  <td className="hl">
                    <span className="ig-c-yes"><Check size={18} aria-hidden="true" /></span>
                    <span className="sr-only">Yes</span>
                  </td>
                  <td>
                    <span className="ig-c-partial">Varies</span>
                  </td>
                </tr>
                <tr>
                  <td>Cost for full Calgary listing suite</td>
                  <td className="hl">From $150 standalone</td>
                  <td>Tour + separate RMS provider</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "13px",
              color: "var(--text-muted)",
            }}
          >
            For Calgary realtors, iGUIDE is the clear choice — it satisfies
            the RECA RMS requirement and delivers the virtual tour in a single
            visit.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section" aria-labelledby="process-heading" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="process-heading">
              From Booking to Live Virtual Tour — 4 Steps
            </h2>
            <p>
              Simple to book, fast to shoot, and delivered with everything you
              need for MLS the next morning.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">01</div>
              <h3>Book Online</h3>
              <p>
                Select the iGUIDE service or any package that includes it.
                Provide the property address and size estimate. Booking takes
                under 3 minutes.
              </p>
              <div className="step-arrow">&rarr;</div>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <h3>On-Site Scan</h3>
              <p>
                Our operator moves through every room, placing the iGUIDE
                camera in each space. Each position captures a 360&deg; panorama
                and full spatial data. Typically 30–60 minutes on site.
              </p>
              <div className="step-arrow">&rarr;</div>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <h3>Processing</h3>
              <p>
                The iGUIDE system processes the spatial data overnight —
                generating the 3D tour, RMS report, and 2D floor plan
                automatically from the captured data.
              </p>
              <div className="step-arrow">&rarr;</div>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <h3>Next-Day Delivery</h3>
              <p>
                You receive the shareable tour URL, RMS measurement report,
                and floor plans (PDF + PNG) the next morning — ready for MLS,
                property websites, and social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO USE YOUR TOUR ── */}
      <section className="ig-embed-section" aria-labelledby="embed-heading">
        <div className="container">
          <div className="ig-embed-grid">
            <div className="ig-embed-content">
              <span className="section-label">How to Use Your iGUIDE Tour</span>
              <h2 id="embed-heading">
                Share Your Tour Everywhere — No Tech Knowledge Required
              </h2>
              <p>
                Every iGUIDE tour comes with a shareable link and an embed
                code. The link can be pasted anywhere — MLS listing notes,
                email campaigns, social media, or WhatsApp. The embed code
                lets you display the full interactive tour inside any property
                website.
              </p>
              <p>
                The tour works on all devices — desktop browsers, tablets, and
                mobile phones — without requiring buyers to download an app or
                create an account.
              </p>
              <div className="ig-embed-uses">
                <div className="ig-embed-use">
                  <div className="ig-embed-icon">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h3>Unbranded MLS Link</h3>
                    <p>
                      Meets all Calgary Real Estate Board requirements for
                      unbranded virtual tours.
                    </p>
                  </div>
                </div>
                <div className="ig-embed-use">
                  <div className="ig-embed-icon">
                    <Box size={20} />
                  </div>
                  <div>
                    <h3>Property Website Embed</h3>
                    <p>
                      Copy and paste the iframe code into WordPress, Webflow,
                      or any custom single-property website.
                    </p>
                  </div>
                </div>
                <div className="ig-embed-use">
                  <div className="ig-embed-icon">
                    <Share2 size={20} />
                  </div>
                  <div>
                    <h3>Social &amp; Email Ready</h3>
                    <p>
                      Pasting the link into iMessage, Facebook, or email
                      automatically generates a rich preview image.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ig-embed-visual">
              <div className="ig-embed-img">
                <Image
                  src="https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/how-to-use-iGUIDE.webp"
                  alt="Guide showing how to open and navigate an iGUIDE virtual tour"
                  width={800}
                  height={450}
                  sizes="(max-width: 900px) 100vw, 42vw"
                  style={{ borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}
                />
              </div>
              <div className="ig-embed-device-row">
                <div className="ig-embed-device">
                  <div className="ig-embed-device-icon">
                    <MonitorSmartphone size={28} />
                  </div>
                  <div className="ig-embed-device-name">Desktop &amp; Laptop</div>
                  <div className="ig-embed-device-note">
                    Full immersion navigation
                  </div>
                </div>
                <div className="ig-embed-device">
                  <div className="ig-embed-device-icon">
                    <Smartphone size={28} />
                  </div>
                  <div className="ig-embed-device-name">Mobile &amp; Tablet</div>
                  <div className="ig-embed-device-note">
                    Touch-optimized panning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING CALLOUT ── */}
      <section className="pricing-section" style={{ backgroundColor: "var(--white)" }} aria-labelledby="pricing-heading">
        <div className="container">
          <div className="pricing-callout">
            <div className="pc-left">
              <span className="pc-label">iGUIDE Pricing</span>
              <h2 id="pricing-heading" className="pc-heading">
                Three deliverables. <em>One transparent price.</em>
              </h2>
              <p className="pc-body">
                The iGUIDE service (3D tour + RMS measurements + floor plans) starts at $150 for homes up to 1,500 sq ft when booked standalone. 
                When bundled with photography in any package, iGUIDE is included starting from $245 — making the package significantly better value than booking each service separately. 
                Pricing scales by billable square footage.
              </p>
              <div className="pc-includes" aria-label="What's always included">
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true"></div>Interactive 3D Tour
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true"></div>RMS Measurements
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true"></div>Standard Floor Plans
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true"></div>Analytics included
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true"></div>Next-Day Delivery
                </div>
              </div>
            </div>
            <div className="pc-right">
              <span className="pc-from">Standalone iGUIDE from</span>
              <span className="pc-price">
                <sup>$</sup>150
              </span>
              <span className="pc-gst">+ GST</span>
              <div className="pc-actions">
                <a href={siteConfig.bookingUrl} className="btn btn-primary">
                  Book iGUIDE Scan
                  <span className="sr-only"> for your Calgary listing</span>
                </a>
                <Link href="/prices" className="btn btn-outline">
                  See Full Pricing Table
                  <span className="sr-only"> for iGUIDE services</span>
                </Link>
              </div>
              <p className="pc-sqft-note">
                Base price covers up to 1,500 billable sq ft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section
        id="service-areas"
        className="areas-section"
        style={{ backgroundColor: "var(--off-white)" }}
        aria-labelledby="iguide-areas-heading"
      >
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="iguide-areas-heading">
                Calgary iGUIDE Virtual Tours &amp; Surrounding Areas
              </h2>
              <p>
                Photos 4 Real Estate covers all of Calgary plus the
                surrounding communities, towns and acreages within our
                standard service radius. Same all-inclusive pricing, same
                next-day delivery on every scan.
              </p>
              <ul className="areas-chips" aria-label="Calgary service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href="/service-areas"
                      className="area-chip"
                      style={{ backgroundColor: "var(--white)" }}
                      aria-label={`iGUIDE virtual tours in ${area}`}
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
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm Calgary iGUIDE travel fees`}
                >
                  {siteConfig.phone}
                </a>{" "}
                to confirm.
              </p>
            </div>
            <div className="areas-visual">
              <div className="areas-visual-item" style={{ gridColumn: "1 / -1" }}>
                <Image
                  src={iguideTourImages.areasSpecialist}
                  alt="iGUIDE specialist taking measurements in a living room"
                  width={1600}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto", aspectRatio: "16/7", objectFit: "cover" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={iguideTourImages.areasFloorPlan}
                  alt="Real estate floor plan generated from iGUIDE property scan"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={iguideTourImages.areasVirtualTour}
                  alt="Example iGUIDE virtual tour interface for a real estate listing"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <Reviews
        variant="dark"
        eyebrow="iGUIDE Virtual Tours Reviews"
      />

      {/* FAQ */}
      <Faq heading="iGUIDE &amp; RMS FAQ" faqs={content.faqs} />

      {/* RELATED SERVICES */}
      <section className="related-section" aria-labelledby="related-heading">
        <div className="container">
          <div className="related-header">
            <h2 id="related-heading">Related Services in Calgary</h2>
          </div>
          <div className="related-grid" role="list">
            {relatedCards.slice(0, 3).map((card) => (
                <div className="related-card" role="listitem" key={card.title}>
                  <div className="related-icon" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <Link
                    href={card.href}
                    className="related-link"
                    aria-label={`Learn more about ${card.srSuffix}`}
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </>
  );
}

