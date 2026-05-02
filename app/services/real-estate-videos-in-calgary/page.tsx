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
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig, serviceAreas } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";
import { videographyImages, photographyImages } from "@/lib/images";

export const dynamic = "force-static";

const slug = "real-estate-videos-in-calgary";
const content = servicesContent[slug];
const pageUrl = `${siteConfig.url}/services/${slug}`;
const ogImageUrl = `${pageUrl}/opengraph-image`;

export const metadata: Metadata = {
  title: content.seoTitle,
  description: content.seoDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    title: content.seoTitle,
    description: content.seoDescription,
    url: pageUrl,
    siteName: siteConfig.shortName,
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

const businessRef = { "@id": `${siteConfig.url}/#business` };

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Real Estate Videography",
  serviceType: "Real Estate Videography",
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
  "Turn on every light in the house (closets, range hoods, vanities)",
  "Clear all walking paths and doorways",
  "Remove vehicles from the driveway",
  "Remove or secure pets",
  "Open all blinds and curtains fully",
  "Declutter and stage all visible surfaces",
  "Have the property vacant or quiet during the shoot",
] as const;

const deliverables = [
  {
    icon: <Video size={22} aria-hidden="true" />,
    title: "Cinematic Walkthrough",
    desc: "A 60-90 second video taking buyers on a smooth guided tour to show the full layout, flow, and character of the home.",
    tag: "Core Deliverable",
  },
  {
    icon: <Images size={22} aria-hidden="true" />,
    title: "Multi-Platform Formats",
    desc: "Delivered in vertical (9:16) for Instagram Reels and TikTok, or horizontal (16:9) for MLS and YouTube.",
    tag: "Social-Ready",
  },
  {
    icon: <Drone size={22} aria-hidden="true" />,
    title: "Drone Footage Included",
    desc: "Aerial footage is captured during the same visit and seamlessly integrated into the final edit where weather permits.",
    tag: "Included Free",
  },
  {
    icon: <Sparkles size={22} aria-hidden="true" />,
    title: "Licensed Background Music",
    desc: "We colour-grade, sequence, and score the video with commercially licensed music cleared for all social platforms.",
    tag: "Copyright-Safe",
  },
  {
    icon: <Camera size={22} aria-hidden="true" />,
    title: "Agent Intro & Voiceover",
    desc: "Personalize your listing by adding an on-screen agent introduction and voiceover to guide the tour.",
    tag: "Available Free",
  },
  {
    icon: <Clock size={22} aria-hidden="true" />,
    title: "24-48 Hour Turnaround",
    desc: "You receive your video as an MP4 download link within 1 to 2 days — ready to post directly to your platforms.",
    tag: "Guaranteed",
  },
] as const;

const relatedCards = [
  {
    href: "/services/real-estate-photography-in-calgary",
    icon: <Camera size={22} aria-hidden="true" />,
    title: "Real Estate Photography",
    desc: "Professional HDR photography with blue-sky replacement and next-day delivery — the foundation of every strong listing.",
    srSuffix: "Real Estate Photography in Calgary",
  },
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

export default function RealEstateVideographyCalgaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Real Estate Videography" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      {/* HERO */}
      <section
        className="services-page-hero"
        aria-labelledby="video-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                Real Estate Videography &middot; Calgary, AB
              </div>
              <h1 id="video-hero-title">
                Real Estate Videography
                <br />
                in <em>Calgary</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>Cinematic property video walkthroughs</strong> that give Calgary buyers the feel of being inside the home. Captured with stabilized professional gear and edited with licensed music &mdash; ready to publish on <strong>MLS, YouTube, Instagram Reels, Facebook and TikTok</strong>.
              </p>
            </div>

            <ul
              className="services-page-hero-stats photo-hero-stats"
              aria-label="Real estate videography key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">24h</span>
                <span className="lbl">Turnaround time</span>
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
                Professional Real Estate Videography in Calgary
              </h2>
              <p className="lead speakable-intro">
                Real estate video tours are becoming an essential marketing tool for Calgary listings. A cinematic walkthrough allows buyers to experience the true flow, layout, and character of a home in a way that photos simply cannot convey.
              </p>
              <p>
                At <strong>Photos 4 Real Estate</strong>, we shoot high-quality, stabilized video using professional gimbals and drones. We capture both interior and exterior footage, carefully colour-grade it, and sequence it to licensed background music. We provide formats optimized for both <strong>MLS/YouTube (horizontal)</strong> and <strong>Instagram Reels/TikTok (vertical)</strong>.
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
                aria-label="Why professional real estate videography matters"
              >
                <li className="photo-stat-cell">
                  <span className="num">403%</span>
                  <span className="lbl">
                    more inquiries with video listings
                  </span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">73%</span>
                  <span className="lbl">
                    of buyers like video tours
                  </span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">24h</span>
                  <span className="lbl">editing &amp; delivery turnaround</span>
                </li>
              </ul>
            </div>
            <div className="photo-intro-visual" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="intro-video-wrapper" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", width: "100%", maxWidth: "340px", margin: "0 auto" }}>
                <video
                  src={`${videographyImages.heroVideo}#t=1`}
                  controls
                  style={{ width: "100%", height: "auto", display: "block" }}
                  aria-label="Vertical real estate property video walkthrough in Calgary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE — deliverables */}
      <section
        className="deliverables-section"
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

      {/* SOCIAL MEDIA REELS */}
      <section
        className="photo-intro-section"
        aria-labelledby="video-reels-heading"
      >
        <div className="container">
          <div className="photo-intro-grid">
            <div className="photo-intro-content">
              <span className="section-label">Social Media</span>
              <h2 id="video-reels-heading">
                Why Social Media Reels Are the Most Effective Listing Format Right Now
              </h2>
              <p className="lead">
                Instagram Reels and Facebook Reels are the highest-reach organic format currently available to Calgary realtors. A well-produced property reel regularly reaches 5–20x more people than a static photo post &mdash; without paid promotion.
              </p>
              <p>
                Nine reels are also included in your free marketing kit (9 shorter teaser clips) with every package, but the dedicated 60&ndash;90 second video is a more polished, full-length format that performs better as a hero post.
              </p>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "24px 0", padding: 0, listStyle: "none" }}>
                {["Instagram Reels", "Facebook Reels", "TikTok", "YouTube Shorts"].map((tag) => (
                  <li key={tag} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--off-white)", border: "1px solid var(--border)", padding: "6px 14px", borderRadius: "100px", fontSize: "13px", fontWeight: 500 }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brick)" }} />
                    {tag}
                  </li>
                ))}
              </ul>
              <div>
                <Link href="/book-online" className="btn btn-primary" style={{ marginTop: "8px" }}>
                  Book Now
                  <span className="sr-only"> &mdash; Calgary real estate videography</span>
                </Link>
              </div>
            </div>
            <div className="photo-intro-visual" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="reels-video-wrapper" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", width: "100%", maxWidth: "340px", margin: "0 auto" }}>
                <video
                  src={`${videographyImages.reelsVideo}#t=6`}
                  controls
                  style={{ width: "100%", height: "auto", display: "block" }}
                  aria-label="Example of a social media property reel for a Calgary listing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / PROCESS */}
      <section
        className="process-section"
        aria-labelledby="video-process-heading"
      >
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="video-process-heading">
              From Booking to Delivered Video &mdash; 5 Steps
            </h2>
            <p>
              We keep the process straightforward so your listing gets to market fast.
            </p>
          </div>
          <div className="process-steps steps-5">
            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                01
              </div>
              <h3>Book Online</h3>
              <p>
                Choose a date and provide the property address. Combine with photography to save a visit.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                02
              </div>
              <h3>On-Site Shoot</h3>
              <p>
                Our videographer arrives and captures the property using a planned shot sequence &mdash; gimbal, slider, and static compositions.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                03
              </div>
              <h3>Drone Footage</h3>
              <p>
                The drone is included. Aerial footage is captured at the same visit and integrated into the final edit.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                04
              </div>
              <h3>Professional Edit</h3>
              <p>
                We colour-grade, sequence, and score the video with licensed music. Agent intro and voice-over are added at this stage.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                05
              </div>
              <h3>Delivery</h3>
              <p>
                You receive your video as an MP4 download link within 24&ndash;48 hours &mdash; ready to post directly to your platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREP CHECKLIST */}
      <section className="prep-section" aria-labelledby="video-prep-heading">
        <div className="container">
          <div className="prep-grid">
            <div className="prep-content">
              <span className="section-label">Get Ready</span>
              <h2 id="video-prep-heading">
                How to Prepare for Your Video Shoot
              </h2>
              <p>
                Video is less forgiving than photography &mdash; motion reveals clutter, poor lighting, and distracting backgrounds that static images can hide. Share this checklist with your sellers before every video shoot.
              </p>
              <ul className="checklist" aria-label="Videography prep checklist">
                {checklist.map((item) => (
                  <li key={item} className="checklist-item">
                    <Check size={14} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="prep-note">
                <h3>💡 Agent Introduction Tip</h3>
                <p>
                  If you&apos;ve booked an agent intro segment, wear something professional in a solid colour that contrasts with the property interior. Prepare a 20-second script in advance &mdash; we&apos;ll guide you on delivery. Questions? Contact us before your shoot.
                </p>
              </div>
            </div>
            <div className="prep-visual" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="prep-video-wrapper" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", width: "100%", maxWidth: "340px", margin: "0 auto" }}>
                <video
                  src={`${videographyImages.prepVideo}#t=1`}
                  controls
                  style={{ width: "100%", height: "auto", display: "block" }}
                  aria-label="Real estate video walkthrough preparation example"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CALLOUT */}
      <section className="pricing-section" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="pricing-callout">
            <div className="pc-left">
              <span className="pc-label">Pricing</span>
              <h2 id="pricing-heading" className="pc-heading">
                Transparent Pricing.<br /><em>No Hidden Fees.</em>
              </h2>
              <p className="pc-body">
                Real estate videography in Calgary starts from $140 when bundled with our Social Boost package, or from $300 as a standalone service. Our pricing scales logically with your property&apos;s size so you always know exactly what to expect.
              </p>
              <div className="pc-includes" aria-label="What's always included">
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Licensed background music</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Drone footage included</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>24&ndash;48 hour delivery</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Multi-platform formats</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Agent voiceover option</div>
              </div>
            </div>

            <div className="pc-right">
              <span className="pc-from">Videography starting from</span>
              <span className="pc-price"><sup>$</sup>140</span>
              <span className="pc-gst">+ GST &nbsp;&middot;&nbsp; when booked with social boost package</span>
              <div className="pc-actions">
                <Link href="/prices" className="btn btn-primary">
                  See Full Pricing
                  <span className="sr-only"> for Calgary real estate videography</span>
                </Link>
                <Link href="/book-online" className="btn btn-outline">
                  Book Online
                  <span className="sr-only"> &mdash; Calgary real estate videography</span>
                </Link>
              </div>
              <p className="pc-sqft-note">
                Prices vary by square footage.
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
              <h2 id="video-areas-heading">
                Calgary Real Estate Videography &amp; Surrounding Areas
              </h2>
              <p>
                Photos 4 Real Estate covers all of Calgary plus the
                surrounding communities, towns and acreages within our
                standard service radius. Same all-inclusive pricing, same
                fast turnaround on every shoot.
              </p>
              <ul className="areas-chips" aria-label="Calgary service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href="/service-areas"
                      className="area-chip"
                      aria-label={`Real estate videography in ${area}`}
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
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm Calgary videography travel fees`}
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
                  alt="Aerial view of downtown Calgary by Photos 4 Real Estate"
                  width={1600}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={photographyImages.areaMahogany}
                  alt="Drone photography of Mahogany Lake, Calgary"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={photographyImages.areaAcreage}
                  alt="Acreage photography near Calgary by Photos 4 Real Estate"
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
        heading="Real Estate Videography FAQ"
        faqs={content.faqs}
        allFaqsLabelSuffix="real estate videography in Calgary"
      />

      {/* RELATED SERVICES — Also Available */}
      <section
        className="related-section"
        aria-labelledby="video-related-heading"
      >
        <div className="container">
          <div className="related-header">
            <span className="section-label">Also Available</span>
            <h2 id="video-related-heading">Services That Pair With Videography</h2>
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

      {/* CTA — services-page style with videography copy */}
      <Cta
        eyebrow="Ready to list?"
        title="Book Calgary real estate videography in under a minute."
        description={
          <>
            Pick your date, choose your package, and we&rsquo;ll handle the
            rest &mdash; cinematic walkthroughs, drone footage and 24&ndash;48 hour
            turnaround on every Calgary shoot.
          </>
        }
      />
    </>
  );
}
