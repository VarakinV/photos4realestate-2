import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  FileImage,
  Globe,
  LayoutDashboard,
  QrCode,
  RefreshCw,
  Send,
  Zap,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig, serviceAreas } from "@/lib/site";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";
import type { Faq as FaqType } from "@/lib/faqs";

export const dynamic = "force-static";

const slug = "smartsign-qr";
const pageUrl = `${siteConfig.url}/${slug}`;
const ogImageUrl = `${pageUrl}/opengraph-image`;

const seoTitle =
  "SmartSign QR™ – Free Lead-Capture QR Codes for Realtors | Photos 4 Real Estate";
const seoDescription =
  "Free SmartSign QR codes for every listing sign — instant lead alerts, weekly analytics, and reassign to a new listing anytime, no reprinting. Included free with every package. Book now.";
const ogAlt =
  "Free SmartSign QR Codes for Calgary Realtors by Photos 4 Real Estate";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: seoTitle },
    description: seoDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      title: seoTitle,
      description: seoDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_CA",
      images: [
        { url: ogImageUrl, width: 1200, height: 630, alt: ogAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [ogImageUrl],
    },
  };
}

const businessId = `${siteConfig.url}/#business`;
const businessRef = { "@id": businessId };

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "SmartSign QR",
  serviceType: "QR code lead generation for real estate yard signs",
  description:
    "SmartSign QR generates a set of printable QR code designs for every listing that link buyers to the property's single property website, capture leads instantly, and can be reassigned to a new listing without reprinting.",
  url: pageUrl,
  provider: businessRef,
  areaServed: [...serviceAreas],
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "0",
    description:
      "Included free with every Photos 4 Real Estate photography package as part of the Marketing Kit.",
  },
};

const faqs: readonly FaqType[] = [
  {
    q: "Does SmartSign QR cost extra?",
    a: "No. SmartSign QR is included free with every Photos 4 Real Estate photography package as part of the Marketing Kit &mdash; there is no upcharge and no separate subscription.",
  },
  {
    q: "Do you print and ship the physical sign riders or decals?",
    a: "No. SmartSign QR provides digital assets only &mdash; print-ready PDF and PNG files. Photos 4 Real Estate does not produce or ship physical signs, sign riders, or decals. Realtors print the files themselves through their own printer or sign company.",
  },
  {
    q: "Can I reuse the same printed QR code on a new listing?",
    a: "Yes. Every SmartSign QR code can be reassigned to a different listing from your realtor portal at any time, similar to how a lockbox is reused across properties. There is no need to reprint or replace the physical sign rider or decal.",
  },
  {
    q: "How fast do I find out when someone scans and fills out the form?",
    a: "Immediately. As soon as a buyer submits the lead capture form, the realtor receives an instant email with the contact&rsquo;s name and email or phone number. A weekly analytics summary is also sent showing total scans and leads for each active listing.",
  },
  {
    q: "Where can I see my SmartSign QR analytics?",
    a: "All scan and lead data is available anytime in the realtor portal under Manage QR Codes, including a full history for each code even after it has been reassigned between listings.",
  },
  {
    q: "How many QR code designs do I get per listing?",
    a: "Every listing gets 7 SmartSign QR designs: a bare QR code, three 24&times;6 inch sign rider variants, and three 4&times;4 inch decal variants, each with different call-to-action copy.",
  },
  {
    q: "What if a buyer doesn't want to fill out the form?",
    a: "Every SmartSign QR landing page includes a &lsquo;just show me the property&rsquo; link beneath the form, so visitors can skip straight to the listing&rsquo;s single property website without submitting their contact information.",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity([...faqs]),
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

const deliverables = [
  {
    icon: <RefreshCw size={22} aria-hidden="true" />,
    title: "Reassign to a New Listing",
    desc: "Sold this one? Point the same printed code at your next listing from your portal in seconds. No reprinting, no new sign rider.",
    tag: "Reusable",
  },
  {
    icon: <Bell size={22} aria-hidden="true" />,
    title: "Instant Lead Alerts",
    desc: "The moment a buyer submits the form, their name and contact info land in your inbox — not at the end of the week.",
    tag: "Buyer Lead",
  },
  {
    icon: <BarChart3 size={22} aria-hidden="true" />,
    title: "Weekly Analytics Reports",
    desc: "A weekly email shows total scans and leads per listing, so you can see which signs are working — togglable on or off per property.",
    tag: "Performance",
  },
  {
    icon: <LayoutDashboard size={22} aria-hidden="true" />,
    title: "Full Analytics In Your Portal",
    desc: "Every scan and every lead is logged and viewable anytime under Manage QR Codes — including full history after a reassignment.",
    tag: "Transparency",
  },
  {
    icon: <FileImage size={22} aria-hidden="true" />,
    title: "7 Print-Ready Designs",
    desc: "A bare QR code plus three sign rider and three decal variants, each with different catchy call-to-action copy — download and print any of them.",
    tag: "Digital Assets",
  },
  {
    icon: <Zap size={22} aria-hidden="true" />,
    title: "Included, Not Upsold",
    desc: "SmartSign QR is part of your free Marketing Kit — no upgrade, no extra step, generated automatically for every listing.",
    tag: "No Setup",
  },
] as const;

const galleryDesigns = [
  {
    num: 1,
    title: "Bare QR",
    desc: "QR only, no frame",
    img: "https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-bare-qr.png",
    alt: "Bare SmartSign QR code, no frame, generated for a Calgary listing",
  },
  {
    num: 2,
    title: 'Sign Rider — "Scan Me for More Info"',
    desc: '24" × 6" sign rider',
    img: "https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-rider-scan-info.png",
    alt: "SmartSign QR sign rider design, 24 by 6 inches, Scan me for more info",
  },
  {
    num: 3,
    title: 'Sign Rider — "Scan for Photos, Tour & Price"',
    desc: '24" × 6" sign rider',
    img: "https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-rider-scan-tour-price.png",
    alt: "SmartSign QR sign rider design, 24 by 6 inches, Scan for photos, virtual tour and price",
  },
  {
    num: 4,
    title: 'Sign Rider — "See Inside — Scan Me"',
    desc: '24" × 6" sign rider',
    img: "https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-rider-scan-see-inside.png",
    alt: "SmartSign QR sign rider design, 24 by 6 inches, See inside, scan me",
  },
  {
    num: 5,
    title: 'Decal — "Scan Me for More Info"',
    desc: '4" × 4" decal',
    img: "https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-decal-scan-info.png",
    alt: "SmartSign QR decal design, 4 by 4 inches, Scan me for more info",
  },
  {
    num: 6,
    title: 'Decal — "Scan for Photos, Tour & Price"',
    desc: '4" × 4" decal',
    img: "https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-decal-scan-tour-price.png",
    alt: "SmartSign QR decal design, 4 by 4 inches, Scan for photos, virtual tour and price",
  },
  {
    num: 7,
    title: 'Decal — "See Inside — Scan Me"',
    desc: '4" × 4" decal',
    img: "https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-decal-scan-see-inside.png",
    alt: "SmartSign QR decal design, 4 by 4 inches, See inside, scan me",
  },
] as const;

const relatedCards = [
  {
    href: "/single-property-websites",
    icon: <Globe size={22} aria-hidden="true" />,
    title: "Single Property Websites",
    desc: "The destination every SmartSign QR code links to — 6 RECA-compliant designs with built-in lead generation tools.",
    srSuffix: "Single Property Websites",
  },
  {
    href: "/services/marketing-kit-for-realtors",
    icon: <Send size={22} aria-hidden="true" />,
    title: "Marketing Kit for Realtors",
    desc: "SmartSign QR is one part of the complete free Marketing Kit — reels, flyers, slideshows, and websites bundled in.",
    srSuffix: "Marketing Kit for Realtors",
  },
  {
    href: "/free-tools/qr-code-generator",
    icon: <QrCode size={22} aria-hidden="true" />,
    title: "QR Code Generator",
    desc: "Need a quick standalone QR code outside of a listing? Try our free online generator anytime.",
    srSuffix: "Free QR Code Generator",
  },
] as const;

export default function SmartSignQrPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "SmartSign QR" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      <section
        className="services-page-hero"
        aria-labelledby="ssqr-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                SmartSign QR™ &middot; Free with Every Package
              </div>
              <h1 id="ssqr-hero-title">
                Turn Every Yard Sign Into a
                <br />
                <em>Lead-Generating Machine</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Every listing gets <strong>7 ready-to-print SmartSign QR designs</strong> —
                scan-to-lead codes for your sign rider or decal that send you an instant
                email the moment a buyer fills out the form, track every scan automatically,
                and can be <strong>reassigned to a brand-new listing anytime</strong> — no
                reprinting required.
              </p>
            </div>

            <ul
              className="services-page-hero-stats"
              aria-label="SmartSign QR key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">7</span>
                <span className="lbl">QR designs per listing</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">Instant</span>
                <span className="lbl">Lead email alerts</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">$0</span>
                <span className="lbl">Cost with any package</span>
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
      {/* WHY IT MATTERS */}
      <section className="photo-intro-section" aria-labelledby="ssqr-intro-heading">
        <div className="container">
          <div className="photo-intro-grid">
            <div className="photo-intro-content">
              <span className="section-label">Why It Matters</span>
              <h2 id="ssqr-intro-heading">
                A Yard Sign Only Works While Someone Is Standing In Front Of It
              </h2>
              <p className="lead speakable-intro">
                A regular sign rider does one thing: it tells a passerby to call or text.
                If they&rsquo;re not ready to talk to an agent yet — which is most buyers
                walking a neighbourhood on a Sunday — that interest disappears the moment
                they walk away. There&rsquo;s no follow-up, no record they were ever there,
                and no second chance to reach them.
              </p>
              <p>
                SmartSign QR closes that gap. A buyer scans the code on your sign, lands on
                a page with your listing&rsquo;s hero photo, and can either leave their name
                and contact info or tap straight through to the full property website. Either
                way, it&rsquo;s tracked — and if they leave contact info, you know about it
                within seconds.
              </p>
            </div>
            <div className="photo-intro-visual">
              <div className="photo-intro-pill">
                <div className="photo-intro-pill-dot" aria-hidden="true" />
                Scan &rarr; Lead &rarr; Sold
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "340px", margin: "0 auto" }}>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", width: "100%" }}>
                  <video
                    src="https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/SamrtSignQR-explainer-video-V2.mp4"
                    controls
                    style={{ width: "100%", height: "auto", display: "block" }}
                    aria-label="SmartSign QR explainer video showing how lead-capture QR codes work for Calgary realtors"
                  />
                </div>
                <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "13px", marginTop: "12px" }}>
                  SmartSign QR — 45-Second Explainer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 FEATURE CARDS */}
      <section
        className="deliverables-section photo-deliverables-section"
        aria-labelledby="ssqr-deliv-heading"
      >
        <div className="container">
          <div className="deliverables-header">
            <span className="section-label">Built Into Every SmartSign QR Code</span>
            <h2 id="ssqr-deliv-heading">
              Five Things SmartSign QR Does For You — Automatically
            </h2>
            <p>
              Every feature is included, no setup required, and works automatically for
              every listing.
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

      {/* DETAIL SECTIONS */}
      <section
        className="shot-types-section photo-shot-types-section"
        aria-labelledby="ssqr-tools-heading"
        style={{ background: "#f9f8f6" }}
      >
        <div className="container">
          <div className="shot-types-header">
            <span className="section-label">How Each Feature Works</span>
            <h2 id="ssqr-tools-heading">
              Four Ways SmartSign QR Keeps Working Long After the Sign Goes Up
            </h2>
            <p>
              Every SmartSign QR code is a reusable lead-generation tool that keeps
              capturing interest long after the sign goes up.
            </p>
          </div>

          {/* Feature 01 */}
          <div className="shot-block">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">
                01
              </div>
              <h3>One Printed Sign. Every Listing You&rsquo;ll Ever Have.</h3>
              <p>
                Think of your SmartSign QR code the same way you think of a lockbox:
                it&rsquo;s a reusable physical tool, not a single-use consumable. Print it
                once, and when that property sells, simply reassign the same code to your
                next listing from the portal — the physical sign rider or decal never has to
                be reprinted.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Each code shows a visible ID (e.g. <strong>Q-000009</strong>) printed
                  underneath the QR
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Look up that ID in your portal to see exactly which listing it&rsquo;s
                  currently pointed at
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Reassign to a new listing in a couple of clicks — no new print job, no
                  added cost
                </li>
              </ul>
            </div>
            <div className="shot-img" style={{ background: "white", borderRadius: "var(--radius)", padding: "20px" }}>
              <Image
                src="https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-bare-qr.png"
                alt="SmartSign QR code example showing reusable design for Calgary realtors"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
              <span className="shot-img-label">Q-000009 — Same code. New listing.</span>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="shot-block reverse">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">
                02
              </div>
              <h3>Know the Second a Buyer Wants to Connect</h3>
              <p>
                When a visitor fills out the lead capture form on the SmartSign QR landing
                page, you receive an email immediately with their name and contact info —
                not bundled into a weekly digest. Buyers who aren&rsquo;t ready to submit
                their details can still tap &ldquo;just show me the property&rdquo; and go
                straight to the listing&rsquo;s single property website.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Realtor notified by email the moment a form is submitted
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Captures first name and email or phone number
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Visitors can always skip the form and view the listing directly
                </li>
              </ul>
            </div>
            <div className="shot-img" style={{ background: "white", borderRadius: "var(--radius)", padding: "20px" }}>
              <Image
                src="https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-rider-scan-tour-price.png"
                alt="SmartSign QR sign rider with instant lead alerts for Calgary realtors"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
              <span className="shot-img-label">New Lead — Delivered in real time</span>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="shot-block">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">
                03
              </div>
              <h3>See Which Signs Are Actually Working</h3>
              <p>
                Once a week, active listings with reporting turned on receive a summary
                email showing total scans and total form submissions for that period — so
                you can tell whether a high-traffic corner lot is converting foot traffic
                into leads. Reporting can be switched on or off per listing, right from the
                portal.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Weekly scan count and lead count, per listing
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Togglable per property — turn it off anytime
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  No action needed to receive it; it&rsquo;s automatic while enabled
                </li>
              </ul>
            </div>
            <div className="shot-img" style={{ background: "white", borderRadius: "var(--radius)", padding: "20px" }}>
              <Image
                src="https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-rider-scan-see-inside.png"
                alt="SmartSign QR sign rider with weekly analytics reports for Calgary realtors"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
              <span className="shot-img-label">
                Weekly Digest — Scans + leads
              </span>
            </div>
          </div>

          {/* Feature 04 */}
          <div className="shot-block reverse">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">
                04
              </div>
              <h3>Every Code, Every Stat, In One Place</h3>
              <p>
                The Manage QR Codes section of your portal lists every SmartSign QR code
                you&rsquo;ve generated, which listing each is currently pointed at, and full
                analytics history — including the numbers from before a code was reassigned
                to a different property.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Full list of your QR codes and their current listing assignment
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Historical scan/lead stats preserved through reassignment
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Edit, reassign, or download printable files anytime
                </li>
              </ul>
            </div>
            <div className="shot-img" style={{ background: "white", borderRadius: "var(--radius)", padding: "20px" }}>
              <Image
                src="https://cdn.photos4realestate.ca/p4re-static-media/smart-sign-qr/qr-Q-000009-decal-scan-info.png"
                alt="SmartSign QR decal with realtor portal access for Calgary realtors"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
              <span className="shot-img-label">
                Manage QR Codes — Inside your realtor portal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        className="spw-gallery-section"
        id="gallery"
        aria-labelledby="ssqr-gallery-heading"
      >
        <div className="container">
          <div className="spw-gallery-header">
            <span className="section-label">Choose Your Style</span>
            <h2 id="ssqr-gallery-heading">
              7 SmartSign QR Designs — Every Listing, Included Free
            </h2>
            <p>
              Every listing automatically gets all 7 variants below. Download whichever fits
              your sign, send it to your printer, and you&rsquo;re set.
            </p>
          </div>
          <div className="spw-gallery-grid">
            {galleryDesigns.map((d) => (
              <article key={d.num} className="spw-gallery-card">
                <div className="spw-gallery-thumb">
                  <span className="spw-gallery-num" aria-hidden="true">
                    {d.num}
                  </span>
                  <Image
                    src={d.img}
                    alt={d.alt}
                    width={800}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="spw-gallery-body">
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="ssqr-callout">
            <div className="ssqr-callout-icon" aria-hidden="true">
              i
            </div>
            <div>
              <h4>Digital Assets Only — We Don&rsquo;t Print or Ship Signs</h4>
              <p>
                SmartSign QR provides downloadable digital files (PDF and PNG) for the
                sign rider and decal designs above. Photos 4 Real Estate does not produce or
                ship physical signs, sign riders, or decals. Realtors take the digital files
                to their own printer or sign company — or drop them straight into flyers and
                other marketing materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="process-section ssqr-process-section"
        aria-labelledby="ssqr-process-heading"
      >
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="ssqr-process-heading">
              From Booking to a Scannable Sign — In 4 Steps
            </h2>
            <p>No setup, no extra tools to learn. The lead gen runs itself.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                01
              </div>
              <h3>Book Your Package</h3>
              <p>
                Book your photography package online — SmartSign QR is included
                automatically.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>
            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                02
              </div>
              <h3>We Generate 7 Designs</h3>
              <p>
                Once your listing information is ready, we generate all 7 SmartSign QR
                designs for that property.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>
            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                03
              </div>
              <h3>Download &amp; Print</h3>
              <p>
                Grab the sign rider or decal file that fits your sign and send it to your
                printer of choice.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>
            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                04
              </div>
              <h3>Leads Land In Your Inbox</h3>
              <p>
                Every scan is tracked, every lead is emailed instantly, and weekly stats
                keep you posted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING KIT BONUS */}
      <section
        className="pricing-section ssqr-pricing-section"
        aria-labelledby="ssqr-kit-heading"
      >
        <div className="container">
          <div className="pricing-callout">
            <div className="pc-left">
              <span className="pc-label">Free Bonus</span>
              <h2 className="pc-heading" id="ssqr-kit-heading">
                Part of Your Complete <em>Marketing Kit</em> — Also Free
              </h2>
              <p className="pc-body">
                SmartSign QR is one piece of the full Marketing Kit included with every
                Photos 4 Real Estate package — alongside social reels, branded property
                websites, print-ready flyers, and slideshows.
              </p>
              <div className="pc-includes">
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true" />
                  9 Social Reels
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true" />
                  6 Property Websites
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true" />
                  3 Property Flyers
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true" />
                  2 Slideshows
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true" />
                  7 SmartSign QR Designs
                </div>
              </div>
            </div>
            <div className="pc-right">
              <span className="pc-from">Marketing kit value</span>
              <span className="pc-price">Free</span>
              <span className="pc-gst">Included with any package</span>
              <div className="pc-actions">
                <Link
                  href="/services/marketing-kit-for-realtors"
                  className="btn btn-primary"
                >
                  See the Full Marketing Kit
                  <span className="sr-only"> for Calgary realtors</span>
                </Link>
                <a href={siteConfig.bookingUrl} className="btn btn-outline">
                  Book Now
                  <span className="sr-only"> — SmartSign QR included free</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <Reviews
        variant="dark"
        eyebrow="Calgary Realtor Reviews"
        heading={
          <>
            Calgary&rsquo;s top agents trust <em>Photos 4 Real Estate</em> for every
            listing.
          </>
        }
      />

      {/* FAQ */}
      <Faq
        heading="SmartSign QR FAQ"
        faqs={[...faqs]}
        allFaqsLabelSuffix="SmartSign QR for Calgary realtors"
      />

      {/* RELATED SERVICES */}
      <section
        className="related-section"
        aria-labelledby="ssqr-related-heading"
      >
        <div className="container">
          <div className="related-header">
            <span className="section-label">Also Available</span>
            <h2 id="ssqr-related-heading">
              Services That Pair With SmartSign QR
            </h2>
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

      {/* CTA */}
      <Cta
        eyebrow="Ready To List?"
        title="Get SmartSign QR Free With Your Next Listing."
        description={
          <>
            Book your photography package and every listing comes with 7 ready-to-print
            SmartSign QR designs — instant lead alerts, weekly analytics, and reassign
            anytime, at no extra cost.
          </>
        }
      />
    </>
  );
}
