import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Calculator,
  CalendarCheck,
  Check,
  Globe,
  Home as HomeIcon,
  Mail,
  MonitorSmartphone,
  MousePointerClick,
  Send,
  Shield,
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

const slug = "single-property-websites";
const pageUrl = `${siteConfig.url}/${slug}`;
const ogImageUrl = `${pageUrl}/opengraph-image`;

const seoTitle =
  "Free Single Property Websites for Realtors | Photos 4 Real Estate";
const seoDescription =
  "6 RECA-compliant single property website designs, free with any package. Built-in lead gen tools: mortgage calc, showing booker & more. Book now.";
const ogAlt =
  "Free Single Property Website Designs for Calgary Realtors by Photos 4 Real Estate";

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
  name: "Single Property Websites for Realtors",
  serviceType: "Single Property Websites",
  description: seoDescription,
  url: pageUrl,
  provider: businessRef,
  areaServed: [...serviceAreas],
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "0",
    description:
      "Included free with every Photos4RealEstate photography package.",
  },
};

const faqs: readonly FaqType[] = [
  {
    q: "Do single property websites cost extra with Photos 4 Real Estate?",
    a: "No. A single property website is included free with every Photos 4 Real Estate photography package &mdash; there is no upcharge and no separate subscription. Realtors choose from 6 designs at no additional cost.",
  },
  {
    q: "What lead generation tools are built into the website?",
    a: "Every single property website includes four built-in lead capture tools: a mortgage calculator with a &ldquo;Send Me This&rdquo; lead form, a Book a Private Showing scheduler for in-person or virtual showings, an exit-intent &ldquo;similar homes under your budget&rdquo; popup, and a Free Home Value Report form for potential sellers &mdash; plus a standard contact form.",
  },
  {
    q: "Are the websites RECA compliant?",
    a: "Yes. Every single property website we build follows Alberta&rsquo;s RECA marketing and disclosure requirements, so realtors can use them with confidence on active listings.",
  },
  {
    q: "Can I choose which website design I get?",
    a: "Yes. Realtors can choose any of our 6 single property website designs for each listing, at no extra cost, and can preview live examples of each design before deciding.",
  },
  {
    q: "Where do the leads go when a buyer fills out a form?",
    a: "Leads are sent directly to the listing realtor by email in real time, with the visitor&rsquo;s contact details and the specific information they submitted &mdash; such as their mortgage calculation, preferred showing time, or home value request. The visitor also receives an automatic confirmation email.",
  },
  {
    q: "Is a marketing kit included with the website?",
    a: "Yes. Every single property website is bundled with our full <a href=\"/services/marketing-kit-for-realtors\">Marketing Kit for Realtors</a> at no extra cost, including social media reels, property flyers, and listing slideshows.",
  },
  {
    q: "How is this different from a typical real estate listing website?",
    a: "Most real estate listing websites are static &mdash; a photo gallery and an address. Ours are built to actively capture leads through four dedicated tools, turning casual visitors into mortgage-qualified buyer leads, booked showings, and seller leads automatically.",
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
    icon: <Calculator size={22} aria-hidden="true" />,
    title: "Mortgage Calculator",
    desc: 'A sticky "Can I Afford This?" sidebar button opens an advanced mortgage calculator. The visitor\'s calculation and contact info are emailed to both the visitor and the realtor instantly.',
    tag: "Buyer Lead",
  },
  {
    icon: <CalendarCheck size={22} aria-hidden="true" />,
    title: "Book a Private Showing",
    desc: "A main-menu CTA lets buyers choose in-person or virtual, pick a preferred day and time, and submit instantly. The realtor gets the contact info; the buyer gets a confirmation.",
    tag: "Booked Showing",
  },
  {
    icon: <MousePointerClick size={22} aria-hidden="true" />,
    title: '"Similar Homes Under $X" Exit Popup',
    desc: "Triggers the moment a visitor is about to leave, offering similar listings under their budget in that city — recovering leads that would otherwise just bounce.",
    tag: "Recovered Lead",
  },
  {
    icon: <HomeIcon size={22} aria-hidden="true" />,
    title: "Free Home Value Report",
    desc: 'A sidebar sticky button asks "Curious what YOUR home is worth?" — capturing property details, selling intent, and contact info, turning buyer-side traffic into seller leads too.',
    tag: "Seller Lead",
  },
  {
    icon: <Mail size={22} aria-hidden="true" />,
    title: "Standard Contact Form",
    desc: 'Every site still includes the classic "Contact Me" form at the bottom of the page — for the buyers who just want to reach out directly, no extra step needed.',
    tag: "Direct Inquiry",
  },
  {
    icon: <Globe size={22} aria-hidden="true" />,
    title: "One Setup, Every Listing",
    desc: "Pick one of 6 designs, and all 4 lead tools plus the contact form are wired up automatically — leads route straight to your inbox with zero configuration on your end.",
    tag: "Zero Setup",
  },
] as const;

const galleryDesigns = [
  {
    num: 1,
    title: "Nivo",
    desc: "Trend-forward design with warm earth-tone palette, Ken Burns hero effects, and mobile-first sticky CTAs built for 2026.",
    img: "https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Nivo-Screenshot.jpg",
    alt: "Nivo single property website template for Calgary realtors",
    link: "https://app.photos4realestate.ca/property/cmqx4c4160001jx04ik9mlj55/v6",
  },
  {
    num: 2,
    title: "Lin",
    desc: "High-end luxury aesthetic with deep slate tones, brushed gold accents, and elegant typography for premium listings.",
    img: "https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Lin-Screenshot.jpg",
    alt: "Lin single property website template for Calgary realtors",
    link: "https://app.photos4realestate.ca/property/cmqx4c4160001jx04ik9mlj55/v5",
  },
  {
    num: 3,
    title: "Juno",
    desc: "Full luxury editorial design with warm cream, deep ink, and aged-gold tones for sophisticated property marketing.",
    img: "https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Juno-Screenshot.jpg",
    alt: "Juno single property website template for Calgary realtors",
    link: "https://app.photos4realestate.ca/property/cmqx4c4160001jx04ik9mlj55/v4",
  },
  {
    num: 4,
    title: "Axis",
    desc: "Clean lines with visible realtor information card, property details, and standard photo gallery grid layout.",
    img: "https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Axis-Screenshot.jpg",
    alt: "Axis single property website template for Calgary realtors",
    link: "https://app.photos4realestate.ca/property/cmqx4c4160001jx04ik9mlj55/v3",
  },
  {
    num: 5,
    title: "Nox",
    desc: "Bold property address hero slideshow with realtor card centered and property info cards in the hero section.",
    img: "https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Nox-Screenshot.jpg",
    alt: "Nox single property website template for Calgary realtors",
    link: "https://app.photos4realestate.ca/property/cmqx4c4160001jx04ik9mlj55/v2",
  },
  {
    num: 6,
    title: "Sera",
    desc: "Minimalistic property template with hero slideshow, bold address, clean lines, and generous white space.",
    img: "https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Sera-Screenshot.jpg",
    alt: "Sera single property website template for Calgary realtors",
    link: "https://app.photos4realestate.ca/property/cmqx4c4160001jx04ik9mlj55/v1",
  },
] as const;

const relatedCards = [
  {
    href: "/services/real-estate-photography-in-calgary",
    icon: <MonitorSmartphone size={22} aria-hidden="true" />,
    title: "Real Estate Photography",
    desc: "Professional HDR interior and exterior photography — the foundation every single property website is built around.",
    srSuffix: "Real Estate Photography in Calgary",
  },
  {
    href: "/services/iguide-virtual-tours-in-calgary",
    icon: <Box size={22} aria-hidden="true" />,
    title: "iGUIDE 3D Virtual Tours",
    desc: "Embed an interactive 3D walkthrough directly into your single property website so buyers can explore remotely before booking a showing.",
    srSuffix: "iGUIDE 3D Virtual Tours in Calgary",
  },
  {
    href: "/services/marketing-kit-for-realtors",
    icon: <Send size={22} aria-hidden="true" />,
    title: "Marketing Kit for Realtors",
    desc: "Social reels, branded flyers, and listing slideshows — bundled free alongside every single property website.",
    srSuffix: "Marketing Kit for Realtors",
  },
] as const;

export default function SinglePropertyWebsitesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Single Property Websites" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      <section
        className="services-page-hero"
        aria-labelledby="spw-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                Single Property Websites &middot; Free for Realtors
              </div>
              <h1 id="spw-hero-title">
                Realtor Websites Built
                <br />
                to <em>Generate Leads</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Every Photos 4 Real Estate package includes a{" "}
                <strong>free single property website</strong> — choose from{" "}
                <strong>6 RECA-compliant designs</strong>, each with 4 built-in
                lead generation tools that turn browsers into buyer and seller
                leads automatically.
              </p>
            </div>

            <ul
              className="services-page-hero-stats"
              aria-label="Single property website key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">6</span>
                <span className="lbl">Website designs</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">4</span>
                <span className="lbl">Lead gen tools built in</span>
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
      {/* INTRO — WHAT IS A SINGLE PROPERTY WEBSITE */}
      <section className="photo-intro-section" aria-labelledby="spw-intro-heading">
        <div className="container">
          <div className="photo-intro-grid">
            <div className="photo-intro-content">
              <span className="section-label">Why It Matters</span>
              <h2 id="spw-intro-heading">
                What Is a Single Property Website — And Why Your Listing Needs
                One
              </h2>
              <p className="lead speakable-intro">
                A single property website is a dedicated webpage built for one
                listing, separate from MLS, designed to capture buyer and seller
                leads instead of just displaying photos.
              </p>
              <p>
                Most real estate listing websites are static — a photo gallery,
                a map, and an address. They look fine, but they do nothing once
                a visitor arrives. There&rsquo;s no follow-up mechanism, no way
                to capture interest from someone who isn&rsquo;t ready to call
                yet, and no second chance with a buyer who clicks away.
              </p>
              <p>
                We built our single property websites to close that gap. Every
                one of our{" "}
                <a href="#gallery" className="body-link">
                  6 realtor website designs
                </a>{" "}
                comes with four dedicated lead capture tools running quietly in
                the background — turning casual visitors into
                mortgage-qualified buyer leads, booked showings, and seller
                leads, automatically, while you&rsquo;re out showing other
                homes.
              </p>
              <ul
                className="photo-stat-row"
                aria-label="Key facts about single property websites"
              >
                <li className="photo-stat-cell">
                  <span className="num">6</span>
                  <span className="lbl">Designs to choose from</span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">4</span>
                  <span className="lbl">Lead gen tools, every site</span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">$0</span>
                  <span className="lbl">Added cost to realtors</span>
                </li>
              </ul>
            </div>
            <div className="photo-intro-visual">
              <div className="photo-intro-pill">
                <div className="photo-intro-pill-dot" aria-hidden="true" />
                Live lead capture
              </div>
              <div className="photo-intro-img">
                <Image
                  src="https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/six-premium-design-options-2.webp"
                  alt="Six premium single property website design options for Calgary realtors"
                  width={1200}
                  height={1500}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
              <div className="photo-intro-img-secondary">
                <Image
                  src="https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Responsive%20Preview.jpg"
                  alt="Responsive preview of a single property website on mobile for Calgary realtors"
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

      {/* WHAT'S INCLUDED — 6 DELIVERABLE CARDS */}
      <section
        className="deliverables-section photo-deliverables-section"
        aria-labelledby="spw-deliv-heading"
      >
        <div className="container">
          <div className="deliverables-header">
            <span className="section-label">Built Into Every Site</span>
            <h2 id="spw-deliv-heading">
              5 Ways Every Website Captures Leads For You
            </h2>
            <p>
              Four dedicated lead generation tools, plus the standard contact
              form realtors expect — all included, no setup required.
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

      {/* LEAD GEN TOOLS DEEP DIVE */}
      <section
        className="shot-types-section photo-shot-types-section"
        aria-labelledby="spw-tools-heading"
      >
        <div className="container">
          <div className="shot-types-header">
            <span className="section-label">How Each Tool Works</span>
            <h2 id="spw-tools-heading">
              Four Tools. Four Different Ways to Turn Visitors Into Leads.
            </h2>
            <p>
              Unlike most real estate listing websites, every page on ours is
              built to work for the listing the moment it goes live — not just
              sit there looking pretty.
            </p>
          </div>

          {/* Tool 01 */}
          <div className="shot-block">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">01</div>
              <h3>&ldquo;Can I Afford This?&rdquo; Mortgage Calculator</h3>
              <p>
                A sticky sidebar button follows the visitor down the page,
                inviting them to run the numbers on the home they&rsquo;re
                already looking at. It opens an advanced mortgage calculator
                page with a &ldquo;Send Me This&rdquo; CTA button.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Visitor enters down payment, rate, and term to see real
                  monthly payments
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  &ldquo;Send Me This&rdquo; captures their name and contact
                  info
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Realtor and visitor both receive an email with the calculation
                  attached
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <Image
                src="https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Mortgage-Calculator-lead-gen.webp"
                alt="Mortgage calculator lead generation tool on a single property website for Calgary realtors"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="shot-img-label">Mortgage Calculator</span>
            </div>
          </div>

          {/* Tool 02 */}
          <div className="shot-block reverse">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">02</div>
              <h3>Book a Private Showing</h3>
              <p>
                A CTA button lives right in the main menu, offering In-Person
                and Virtual showing options. Buyers select their preferred day
                and time on the spot — no phone tag required.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  In-person or virtual showing selector
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Preferred day and time captured directly
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Contact info sent to the realtor; confirmation sent to the
                  buyer
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <Image
                src="https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/book-a-showing-lead-gen-form.webp"
                alt="Book a private showing lead gen form on a single property website for Calgary realtors"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="shot-img-label">Showing Booker</span>
            </div>
          </div>

          {/* Tool 03 */}
          <div className="shot-block">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">03</div>
              <h3>
                &ldquo;Similar Homes Under $X&rdquo; Exit-Intent Popup
              </h3>
              <p>
                Just as a visitor moves to leave the page, an exit-intent popup
                offers similar homes under their budget in that city — capturing
                attention and contact info from leads that would otherwise be
                lost entirely.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Triggers automatically on exit intent
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Offers comparable listings under the visitor&rsquo;s price
                  point
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Lead sent to the realtor; confirmation with realtor contact
                  info sent to the visitor
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <Image
                src="https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Exit-lead-gen-pop-up-form.webp"
                alt="Exit-intent pop-up lead gen form offerng similar homes under budget on a single property website for Calgary realtors"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="shot-img-label">Exit-Intent Capture</span>
            </div>
          </div>

          {/* Tool 04 */}
          <div className="shot-block reverse">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">04</div>
              <h3>Free Home Value Report</h3>
              <p>
                A sidebar sticky button asks the question every homeowner wants
                answered: &ldquo;Curious what YOUR home is worth?&rdquo; It
                opens a short form capturing property details, selling intent,
                and contact info.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Captures home details and intent to sell
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Realtor receives the lead with a direct opportunity to follow
                  up
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Visitor receives a confirmation email with the listing
                  realtor&rsquo;s contact info
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <Image
                src="https://cdn.photos4realestate.ca/p4re-static-media/single-property-websites-page/Free-home-value-report-lead-gen-form.webp"
                alt="Free home value report lead gen form on a single property website for Calgary realtors"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="shot-img-label">Home Value Report</span>
            </div>
          </div>
        </div>
      </section>

      {/* RECA COMPLIANCE BAND */}
      <section
        className="spw-compliance-section"
        aria-labelledby="spw-compliance-heading"
      >
        <div className="container">
          <div className="spw-compliance-inner">
            <div className="spw-compliance-badge" aria-hidden="true">
              <Shield size={38} />
            </div>
            <div className="spw-compliance-content">
              <h2 id="spw-compliance-heading">
                Fully RECA Compliant — Every Website, Every Time
              </h2>
              <p>
                All Photos 4 Real Estate single property websites are fully{" "}
                <strong>RECA-compliant</strong>, meeting Alberta&rsquo;s real
                estate marketing and disclosure standards. That means no
                surprises at broker review and no compliance headaches added to
                your workload — just a marketing tool you can use with
                confidence on every active listing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 DESIGNS GALLERY */}
      <section
        className="spw-gallery-section"
        id="gallery"
        aria-labelledby="spw-gallery-heading"
      >
        <div className="container">
          <div className="spw-gallery-header">
            <span className="section-label">Choose Your Style</span>
            <h2 id="spw-gallery-heading">
              6 Single Property Website Designs — All Included Free
            </h2>
            <p>
              Every package includes access to all 6 of our realtor website
              designs. Pick the style that fits the listing — no upcharge, no
              upsell.
            </p>
          </div>
          <div className="spw-gallery-grid">
            {galleryDesigns.map((d) => (
              <article key={d.num} className="spw-gallery-card">
                <Link
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spw-gallery-thumb"
                  title="Live Preview"
                  aria-label={`Preview ${d.title} template in new tab`}
                >
                  <span className="spw-gallery-num" aria-hidden="true">
                    {d.num}
                  </span>
                  <Image
                    src={d.img}
                    alt={d.alt}
                    width={800}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>
                <div className="spw-gallery-body">
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / PROCESS */}
      <section
        className="process-section spw-process-section"
        aria-labelledby="spw-process-heading"
      >
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="spw-process-heading">
              From Booking to Live Leads — In 4 Steps
            </h2>
            <p>No setup, no extra tools to learn. The lead gen runs itself.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num" aria-hidden="true">01</div>
              <h3>Book Your Package</h3>
              <p>
                Book your photography package online — every package includes a
                free single property website.
              </p>
              <div className="step-arrow" aria-hidden="true">&rarr;</div>
            </div>
            <div className="process-step">
              <div className="step-num" aria-hidden="true">02</div>
              <h3>Choose Your Design</h3>
              <p>
                Pick from all 6 single property website designs — whichever fits
                the listing best, at no extra cost.
              </p>
              <div className="step-arrow" aria-hidden="true">&rarr;</div>
            </div>
            <div className="process-step">
              <div className="step-num" aria-hidden="true">03</div>
              <h3>We Build &amp; Connect Everything</h3>
              <p>
                We build the site and wire up all 4 lead-gen tools plus the
                contact form automatically — no setup on your end.
              </p>
              <div className="step-arrow" aria-hidden="true">&rarr;</div>
            </div>
            <div className="process-step">
              <div className="step-num" aria-hidden="true">04</div>
              <h3>Leads Land In Your Inbox</h3>
              <p>
                Buyer and seller leads flow straight to your email in real time,
                with full contact details and submission info.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING KIT BONUS CALLOUT */}
      <section
        className="pricing-section spw-pricing-section"
        aria-labelledby="spw-kit-heading"
      >
        <div className="container">
          <div className="pricing-callout">
            <div className="pc-left">
              <span className="pc-label">Free Bonus</span>
              <h2 className="pc-heading" id="spw-kit-heading">
                Plus a Full <em>Marketing Kit</em> — Also Free
              </h2>
              <p className="pc-body">
                Every single property website is bundled with our complete
                Marketing Kit for Realtors at no extra cost — so your listing
                has everything it needs to perform, not just a website.
              </p>
              <div className="pc-includes">
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true" />
                  Social media reels
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true" />
                  Listing slideshows
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true" />
                  Branded property flyers
                </div>
                <div className="pc-pill">
                  <div className="pc-pill-dot" aria-hidden="true" />
                  QR code generator
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
                  See the Marketing Kit
                  <span className="sr-only">
                    {" "}for Calgary single property websites
                  </span>
                </Link>
                <a
                  href={siteConfig.bookingUrl}
                  className="btn btn-outline"
                >
                  Book Now
                  <span className="sr-only">
                    {" "}— free single property website with any package
                  </span>
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
            Calgary&rsquo;s top agents trust{" "}
            <em>Photos 4 Real Estate</em> for every listing.
          </>
        }
      />

      {/* FAQ */}
      <Faq
        heading="Single Property Website FAQ"
        faqs={[...faqs]}
        allFaqsLabelSuffix="single property websites for Calgary realtors"
      />

      {/* RELATED SERVICES */}
      <section
        className="related-section"
        aria-labelledby="spw-related-heading"
      >
        <div className="container">
          <div className="related-header">
            <span className="section-label">Also Available</span>
            <h2 id="spw-related-heading">
              Services That Pair With Your Single Property Website
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
        title="Get a Free Single Property Website With Your Next Listing."
        description={
          <>
            Book your photography package and your single property website —
            with all 4 lead generation tools built in — comes free.
          </>
        }
      />
    </>
  );
}
