import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, MapPin, ArrowRight, Camera, Video, Sunset, Ruler, Trees, Building2, ShieldCheck, Plane } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig, serviceAreas } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";

export const dynamic = "force-static";

const slug = "real-estate-aerial-drone-photography-in-calgary";
const content = servicesContent[slug];
const pageUrl = `${siteConfig.url}/services/${slug}`;
const ogImageUrl =
  "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp";

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
        { url: ogImageUrl, width: 1024, height: 768, alt: content.ogAlt },
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
  name: "Real Estate Drone Photography and Videography Calgary",
  serviceType: "Real Estate Photography",
  description: content.seoDescription,
  url: pageUrl,
  provider: businessRef,
  areaServed: [...serviceAreas],
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "125",
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

const droneIntroImages = {
  main: ogImageUrl,
  secondary:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-Downtown-Bow-River-Photos-4-Real-Estate.webp",
  tertiary:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-Mahogany-Lake-03.webp",
} as const;

const introMainSizes = "(max-width: 960px) 100vw, 44vw";
const introThumbSizes = "(max-width: 960px) 50vw, 22vw";
const halfSectionSizes = "(max-width: 960px) 100vw, 44vw";
const propertyCardSizes =
  "(max-width: 600px) 100vw, (max-width: 960px) 50vw, 30vw";
const whyMainSizes = "(max-width: 960px) 100vw, 38vw";
const whyThumbSizes = "(max-width: 600px) 100vw, (max-width: 960px) 50vw, 19vw";

const droneCaptureImages = {
  topDown:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Straight-Down-View-From-Drone-With-Lot-Boundaries-Photos-4-Rel-Estate.jpg",
  oblique:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Angled-drone-shot-perspective-house-in-Cranbrook-View-SE-Calgary-Photos-4-Real-Estate.jpg",
  context:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-Photo-NW-Calgary-Photos-4-Real-Estate.jpg",
  video:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-photo-showing-a-house-near-downtown-Calgary-Photos-4-Real-Estate.jpg",
} as const;

const dronePropertyTypeImages = {
  lakefront:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-Mahogany-Lake-Photos-4-Real-Estate02.webp",
  largeLot:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-photo-showing-a-large-lot-Photos-4-Real-Estate.webp",
  premiumNeighbourhood:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-Bridgeland-Photo-Photos-4-Real-Estate.webp",
  cornerLot:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Aerial-photo-of-a-house-with-corner-lot-Photos-4-Real-Estate.webp",
  developments:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-photo-showing-acreages-near-Calgary-Photos-4-Real-Estate.webp",
  commercial:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-photo-of-YMCA-Downtown-Calgary-Photos-4-Real-Estate.jpg",
} as const;

const droneWhyImages = {
  main:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-Photo-Acreges-Near-Calgary.webp",
  secondary:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-Mahogany-Lake-01.webp",
  tertiary:
    "https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-photo-Downtown-Calgary-Photos-4-Real-Estate-03.jpg",
} as const;

export default function DronePhotographyCalgaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Drone Photography & Videography" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      <section
        className="services-page-hero"
        aria-labelledby="drone-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                Drone Photography &amp; Videography &middot; Calgary, AB
              </div>
              <h1 id="drone-hero-title">
                Real Estate Drone Photography
                <br />
                &amp; <em>Aerial Videography</em> in Calgary
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Photos 4 Real Estate provides <strong>Transport Canada licensed drone photography and 4K aerial videography </strong>for Calgary real estate listings. Showcase your property&apos;s location, lot size, and surroundings from perspectives no ground camera can match.
              </p>
            </div>

            <ul
              className="services-page-hero-stats photo-hero-stats"
              aria-label="Drone photography key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">4K</span>
                <span className="lbl">Video resolution</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">TC</span>
                <span className="lbl">Licensed pilots</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">24h</span>
                <span className="lbl">Delivery turnaround</span>
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

const relatedCards = [
  {
    title: "Real Estate Photography",
    desc: "Professional interior and exterior photos \u2014 always completed in the same visit as drone. All packages combine both ground and aerial coverage seamlessly.",
    href: "/services/real-estate-photography-in-calgary",
    icon: <Camera size={32} strokeWidth={1.5} />,
    srSuffix: "real estate photography",
  },
  {
    title: "Real Estate Videography",
    desc: "Add drone video footage to your social media reel or walkthrough video for a cinematic result that commands attention in the first seconds of playback.",
    href: "/services/real-estate-videos-in-calgary",
    icon: <Video size={32} strokeWidth={1.5} />,
    srSuffix: "real estate videography",
  },
  {
    title: "Twilight Photography",
    desc: "Combine drone with twilight photography for a dramatic listing package \u2014 aerial views at golden hour are the most striking images in any real estate marketing portfolio.",
    href: "/services/twilight-photography-for-real-estate-in-calgary",
    icon: <Sunset size={32} strokeWidth={1.5} />,
    srSuffix: "twilight photography",
  },
];

function PageBody() {
  return (
    <>
      {/* INTRO */}
      <section className="drone-intro-section" aria-labelledby="intro-heading">
        <div className="container">
          <div className="drone-intro-grid">
            <div className="drone-intro-content">
              <span className="section-label">What We Do</span>
              <h2 id="intro-heading">Professional Drone Photography &amp; Videography for Calgary Real Estate</h2>
              <p className="lead speakable-intro">
                Drone photography gives Calgary real estate listings a perspective that no ground-level camera can provide. From 120 metres above the property, buyers can see the full lot, the neighbourhood layout, proximity to parks, lakes, and amenities — context that drives decision-making in ways interior photos cannot.
              </p>
              <p>
                At <strong>Photos 4 Real Estate</strong>, all drone operations are conducted by Transport Canada licensed pilots holding Advanced Operations certification. We carry full liability insurance, conduct airspace checks before every booking, and follow all RPAS regulations to ensure safe, legal, and high-quality aerial coverage of your listing.
              </p>
              <p>
                Drone photos and video are available as a <Link href="/prices" className="body-link">standalone add-on from $125</Link>, or included as standard in our <Link href="/prices" className="body-link">Skyline and Social Boost packages</Link>. Every aerial image is professionally edited and delivered the next morning alongside your ground photography.
              </p>
              <ul className="drone-stat-row" aria-label="Drone stats">
                <li className="drone-stat-cell">
                  <span className="num">5–10</span>
                  <span className="lbl">aerial images per shoot</span>
                </li>
                <li className="drone-stat-cell">
                  <span className="num">4K</span>
                  <span className="lbl">photo &amp; video resolution</span>
                </li>
                <li className="drone-stat-cell">
                  <span className="num">24h</span>
                  <span className="lbl">delivery guaranteed</span>
                </li>
              </ul>
            </div>
            <div className="drone-intro-visual">
              <div className="drone-intro-img-main">
                <div className="drone-intro-img-pill">
                  <div className="drone-pill-dot"></div>
                  4K &middot; TC Licensed &middot; Colour graded
                </div>
                <Image
                  src={droneIntroImages.main}
                  alt="Aerial drone view toward Downtown Calgary and surrounding neighbourhoods"
                  width={1024} height={768}
                  sizes={introMainSizes}
                  style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="drone-intro-img-row">
                <div>
                  <Image
                    src={droneIntroImages.secondary}
                    alt="Drone view of downtown Calgary and the Bow River"
                    width={1024} height={576}
                    sizes={introThumbSizes}
                    style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <Image
                    src={droneIntroImages.tertiary}
                    alt="Drone photo of Mahogany Lake in Calgary"
                    width={1024} height={768}
                    sizes={introThumbSizes}
                    style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SHOOT */}
      <section className="drone-shots-section" aria-labelledby="shots-heading">
        <div className="container">
          <div className="drone-shots-header">
            <span className="section-label" style={{ color: "rgba(255,255,255,0.4)" }}>Aerial Shot Types</span>
            <h2 id="shots-heading">What Our Drone Captures</h2>
            <p>Each shoot follows a structured shot plan to ensure every angle of the property and its context is covered &mdash; from overhead to eye-level oblique shots.</p>
          </div>

          <div className="drone-shot-blocks">
            {/* 01 */}
            <div className="drone-shot-block">
              <div className="drone-shot-content">
                <div className="drone-shot-num" aria-hidden="true">01</div>
                <h3>Overhead &amp; Top-Down Shots</h3>
                <p>Straight-down aerial views reveal the true footprint of the property &mdash; lot size, roof layout, driveway, landscaping, and the relationship between structures on the lot. These shots are impossible to replicate from the ground and are especially compelling for large lots, acreages, and properties with distinctive layouts.</p>
                <ul className="drone-shot-bullets">
                  <li><div className="drone-shot-dot"></div>Shows full lot size and shape accurately</li>
                  <li><div className="drone-shot-dot"></div>Reveals landscaping, pool, and outdoor features</li>
                  <li><div className="drone-shot-dot"></div>Ideal for corner lots and large properties</li>
                  <li><div className="drone-shot-dot"></div>Excellent for development sites and commercial listings</li>
                </ul>
              </div>
              <div className="drone-shot-visual">
                <Image
                  src={droneCaptureImages.topDown}
                    alt="Straight-down drone view of a Calgary property with lot boundaries"
                  width={1024} height={768}
                  sizes={halfSectionSizes}
                  style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* 02 */}
            <div className="drone-shot-block reverse">
              <div className="drone-shot-content">
                <div className="drone-shot-num" aria-hidden="true">02</div>
                <h3>Oblique &amp; Angled Perspective Shots</h3>
                <p>Angled drone shots at 30&ndash;60 degrees show the property&apos;s exterior fa&ccedil;ade, roofline, and immediate surroundings in a dramatic, three-dimensional way. These are the most visually striking shots &mdash; showing the home in its full architectural context with sky and horizon in frame.</p>
                <ul className="drone-shot-bullets">
                  <li><div className="drone-shot-dot"></div>Full exterior fa&ccedil;ade with sky and horizon</li>
                  <li><div className="drone-shot-dot"></div>Shows roofline, chimneys, and architectural detail</li>
                  <li><div className="drone-shot-dot"></div>Captures relationship to street and neighbours</li>
                  <li><div className="drone-shot-dot"></div>Most visually compelling for listing hero shots</li>
                </ul>
              </div>
              <div className="drone-shot-visual">
                <Image
                  src={droneCaptureImages.oblique}
                    alt="Angled drone view of a house in Cranbrook View SE Calgary"
                  width={1024} height={768}
                  sizes={halfSectionSizes}
                  style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* 03 */}
            <div className="drone-shot-block">
              <div className="drone-shot-content">
                <div className="drone-shot-num" aria-hidden="true">03</div>
                <h3>Neighbourhood &amp; Location Context Shots</h3>
                <p>Wide aerial shots that pull back to show the property&apos;s location within the neighbourhood &mdash; proximity to lakes, parks, golf courses, schools, and key amenities. Location is often a primary purchase driver in Calgary, and aerial shots communicate it instantly in a way that no map screenshot or text description can match.</p>
                <ul className="drone-shot-bullets">
                  <li><div className="drone-shot-dot"></div>Shows proximity to lakes, parks, and green space</li>
                  <li><div className="drone-shot-dot"></div>Highlights desirable neighbourhood features</li>
                  <li><div className="drone-shot-dot"></div>Captures Calgary skyline where visible</li>
                  <li><div className="drone-shot-dot"></div>Communicates location value to out-of-town buyers</li>
                </ul>
              </div>
              <div className="drone-shot-visual">
                <Image
                  src={droneCaptureImages.context}
                    alt="Aerial drone view of northwest Calgary neighbourhood context"
                  width={1024} height={576}
                  sizes={halfSectionSizes}
                  style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* 04 */}
            <div className="drone-shot-block reverse">
              <div className="drone-shot-content">
                <div className="drone-shot-num" aria-hidden="true">04</div>
                <h3>Aerial Video Footage <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", fontWeight: 500, fontFamily: "var(--font-body)" }}>(Add-on &middot; +$125)</span></h3>
                <p>Smooth, cinematic aerial video footage that can be integrated into a social media reel or walkthrough video. Drone video transitions between ground-level and aerial perspectives create a production quality that makes listings look substantially more premium &mdash; particularly effective for the first few seconds of a social media reel where stopping scroll is critical.</p>
                <ul className="drone-shot-bullets">
                  <li><div className="drone-shot-dot"></div>4K aerial video footage, colour graded</li>
                  <li><div className="drone-shot-dot"></div>Smooth reveal and fly-over sequences</li>
                  <li><div className="drone-shot-dot"></div>Integrated into social media reel or walkthrough</li>
                  <li><div className="drone-shot-dot"></div>Included standard in Social Boost package</li>
                </ul>
              </div>
              <div className="drone-shot-visual">
                <Image
                  src={droneCaptureImages.video}
                    alt="Drone photo of a house near Downtown Calgary"
                  width={1024} height={768}
                  sizes={halfSectionSizes}
                  style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="drone-types-section" aria-labelledby="types-heading">
        <div className="container">
          <div className="drone-types-header">
            <span className="section-label">Ideal Properties</span>
            <h2 id="types-heading">Which Properties Benefit Most from Drone Photography?</h2>
            <p>Drone photography adds maximum value when the location, lot, or context of the property is a key part of what buyers are paying for.</p>
          </div>
          <div className="drone-types-grid">
            <div className="drone-type-card">
              <div className="drone-type-img">
                <Image src={dronePropertyTypeImages.lakefront} alt="Drone photo showing Mahogany Lake and nearby homes in Calgary" width={800} height={600} sizes={propertyCardSizes} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <div className="drone-type-img-overlay"></div>
              </div>
              <div className="drone-type-body">
                <h3>Lakefront &amp; Backing Green Space</h3>
                <p>Aerial shots prove the proximity &mdash; buyers immediately see the waterfront view and the relationship of the home to the lake or park.</p>
              </div>
            </div>
            <div className="drone-type-card">
              <div className="drone-type-img">
                <Image src={dronePropertyTypeImages.largeLot} alt="Drone photo showing a large lot in Calgary" width={800} height={600} sizes={propertyCardSizes} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <div className="drone-type-img-overlay"></div>
              </div>
              <div className="drone-type-body">
                <h3>Acreages &amp; Large Lots</h3>
                <p>Ground photos can&apos;t convey a large lot. Aerial views show its full scale, landscaping, outbuildings, and privacy &mdash; features buyers pay a premium for.</p>
              </div>
            </div>
            <div className="drone-type-card">
              <div className="drone-type-img">
                <Image src={dronePropertyTypeImages.premiumNeighbourhood} alt="Drone photo of a home in Bridgeland Calgary" width={800} height={600} sizes={propertyCardSizes} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <div className="drone-type-img-overlay"></div>
              </div>
              <div className="drone-type-body">
                <h3>Luxury &amp; Premium Neighbourhoods</h3>
                <p>Estate homes, architectural landmarks, and premium builds deserve aerial coverage that matches their price point and marketing materials.</p>
              </div>
            </div>
            <div className="drone-type-card">
              <div className="drone-type-img">
                <Image src={dronePropertyTypeImages.cornerLot} alt="Aerial photo of a house on a corner lot in Calgary" width={800} height={600} sizes={propertyCardSizes} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <div className="drone-type-img-overlay"></div>
              </div>
              <div className="drone-type-body">
                <h3>Corner Lots &amp; Infill Properties</h3>
                <p>Corner lots and inner-city infill properties have distinctive footprints and street presence that drone photography communicates better than any ground shot.</p>
              </div>
            </div>
            <div className="drone-type-card">
              <div className="drone-type-img">
                <Image src={dronePropertyTypeImages.developments} alt="Drone photo showing acreages near Calgary" width={800} height={600} sizes={propertyCardSizes} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <div className="drone-type-img-overlay"></div>
              </div>
              <div className="drone-type-body">
                <h3>New Developments &amp; Construction</h3>
                <p>Progress shots from the air document construction milestones, show site context, and help developers sell phases before ground breaks.</p>
              </div>
            </div>
            <div className="drone-type-card">
              <div className="drone-type-img">
                <Image src={dronePropertyTypeImages.commercial} alt="Drone photo of the YMCA in Downtown Calgary" width={800} height={600} sizes={propertyCardSizes} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <div className="drone-type-img-overlay"></div>
              </div>
              <div className="drone-type-body">
                <h3>Commercial &amp; Industrial Properties</h3>
                <p>Aerial shots communicate the scale of commercial buildings, parking capacity, access routes, and proximity to highways &mdash; critical for commercial buyers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TC COMPLIANCE */}
      <section className="drone-tc-section" aria-labelledby="tc-heading">
        <div className="container">
          <div className="drone-tc-grid">
            <div className="drone-tc-content">
              <span className="section-label">Safety &amp; Compliance</span>
              <h2 id="tc-heading">Transport Canada Licensed &amp; Fully Compliant</h2>
              <p>
                In Canada, commercial drone operations require a valid Transport Canada Remote Pilot Certificate. Flying without one &mdash; or hiring someone without certification &mdash; is illegal and voids any insurance coverage. Every Photos4RealEstate drone operation is conducted by pilots holding a current <strong>Advanced Operations certificate</strong> issued by Transport Canada.
              </p>
              <p>
                Before every shoot, we conduct a full airspace check using Transport Canada&apos;s RPAS Portal and NAV CANADA&apos;s DroneAssist application. If your property falls within a controlled zone, we obtain the required authorization before your scheduled shoot date &mdash; so there are no day-of surprises.
              </p>
              <p>
                We carry full liability insurance covering drone operations. This protects your listing, your sellers, and everyone on site during the shoot.
              </p>

              <div className="drone-tc-licence-card" aria-label="Transport Canada compliance details">
                <h3>
                  <span className="drone-tc-green-dot" aria-hidden="true"></span>
                  Our Drone Compliance Checklist
                </h3>
                <div className="drone-tc-licence-items">
                  <div className="drone-tc-item"><div className="drone-tc-check"><Check size={12} strokeWidth={3} /></div>Transport Canada Advanced Operations Certificate</div>
                  <div className="drone-tc-item"><div className="drone-tc-check"><Check size={12} strokeWidth={3} /></div>Full liability insurance for RPAS operations</div>
                  <div className="drone-tc-item"><div className="drone-tc-check"><Check size={12} strokeWidth={3} /></div>Pre-flight airspace check on every property</div>
                  <div className="drone-tc-item"><div className="drone-tc-check"><Check size={12} strokeWidth={3} /></div>Authorization obtained for controlled airspace where required</div>
                  <div className="drone-tc-item"><div className="drone-tc-check"><Check size={12} strokeWidth={3} /></div>Weather assessment before every flight</div>
                  <div className="drone-tc-item"><div className="drone-tc-check"><Check size={12} strokeWidth={3} /></div>Visual line-of-sight maintained at all times</div>
                </div>
              </div>
            </div>

            <div className="drone-tc-visual">
              <div className="drone-airspace-card">
                <div className="drone-airspace-header">
                  <Plane size={18} strokeWidth={2} aria-hidden="true" />
                  <h3>Calgary Airspace &mdash; Common Zones</h3>
                </div>
                <div className="drone-airspace-zones">
                  <div className="drone-airspace-zone">
                    <span className="drone-zone-name">Most Calgary neighbourhoods</span>
                    <span className="drone-zone-status drone-zone-ok">Flyable</span>
                  </div>
                  <div className="drone-airspace-zone">
                    <span className="drone-zone-name">Near YYC (Calgary International)</span>
                    <span className="drone-zone-status drone-zone-check">Authorization required</span>
                  </div>
                  <div className="drone-airspace-zone">
                    <span className="drone-zone-name">Near YBW (Springbank Airport)</span>
                    <span className="drone-zone-status drone-zone-check">Authorization required</span>
                  </div>
                  <div className="drone-airspace-zone">
                    <span className="drone-zone-name">NE Calgary controlled zones</span>
                    <span className="drone-zone-status drone-zone-check">Authorization required</span>
                  </div>
                  <div className="drone-airspace-zone">
                    <span className="drone-zone-name">National Parks (Banff)</span>
                    <span className="drone-zone-status drone-zone-restricted">Special permit required</span>
                  </div>
                </div>
              </div>

              <div className="drone-weather-note">
                <div className="drone-weather-icon">🌤️</div>
                <div>
                  <h3>Weather Policy</h3>
                  <p>Drone flights require a minimum visibility, safe wind speed, and no precipitation. If conditions are unsafe on shoot day, we reschedule the drone portion at no charge. Ground photography can typically proceed as planned in the same visit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="drone-process-section" aria-labelledby="process-heading">
        <div className="container">
          <div className="drone-process-header">
            <span className="section-label">How It Works</span>
            <h2 id="process-heading">From Booking to Aerial Delivery &mdash; 5 Steps</h2>
            <p>We handle airspace checks, weather monitoring, and all compliance paperwork &mdash; you just show up for the shoot.</p>
          </div>
          <div className="drone-process-steps">
            <div className="drone-process-step">
              <div className="drone-step-circle">01</div>
              <h3>Book Online</h3>
              <p>Add drone to your photography or video booking. Provide the property address &mdash; we need this for the airspace check.</p>
            </div>
            <div className="drone-process-step">
              <div className="drone-step-circle">02</div>
              <h3>Airspace Check</h3>
              <p>We verify the property&apos;s airspace status using TC RPAS Portal and DroneAssist. If authorization is needed, we apply for it before your shoot date.</p>
            </div>
            <div className="drone-process-step">
              <div className="drone-step-circle">03</div>
              <h3>Day-of Weather</h3>
              <p>We monitor conditions in the morning. If weather is safe, we fly. If not, we reschedule the drone portion at no charge.</p>
            </div>
            <div className="drone-process-step">
              <div className="drone-step-circle">04</div>
              <h3>Aerial Shoot</h3>
              <p>Our licensed pilot captures 5&ndash;10 aerial photos and optional video footage from multiple altitudes and angles, alongside your ground photography shoot.</p>
            </div>
            <div className="drone-process-step">
              <div className="drone-step-circle">05</div>
              <h3>Edit &amp; Deliver</h3>
              <p>Aerial images are colour graded and delivered with your ground photos the next morning as high-res JPEGs and web-optimized files.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEST FOR */}
      <section className="drone-best-section" aria-labelledby="best-heading">
        <div className="container">
          <div className="drone-best-grid">
            <div>
              <span className="section-label">Why Drone Matters</span>
              <h2 id="best-heading" className="drone-best-heading">What Aerial Photography Communicates That Ground Shots Cannot</h2>
              <p className="drone-best-content p">
                The most common question realtors ask is &quot;does my listing really need drone?&quot; The answer depends on what the buyer is paying for. If it&apos;s the house itself &mdash; a condo, a standard detached in a typical subdivision &mdash; ground photography may be sufficient. If it&apos;s the location, the lot, the lifestyle, or the neighbourhood &mdash; drone photography is worth every dollar.
              </p>
              <div className="drone-best-items">
                <div className="drone-best-item">
                  <div className="drone-best-icon">
                    <Ruler size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>True lot size and shape</h3>
                    <p>A written lot size of &quot;650 sq m&quot; means little. An aerial photo showing the actual yard relative to the home &mdash; and neighbours &mdash; communicates it instantly.</p>
                  </div>
                </div>
                <div className="drone-best-item">
                  <div className="drone-best-icon">
                    <Trees size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>Proximity to lakes, parks, and amenities</h3>
                    <p>Mahogany, Sundance, Auburn Bay &mdash; backing a lake is a primary purchase driver. Drone proves the proximity in a way no map screenshot can match.</p>
                  </div>
                </div>
                <div className="drone-best-item">
                  <div className="drone-best-icon">
                    <Building2 size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>City views and skyline context</h3>
                    <p>Properties with mountain views or Calgary skyline access command a premium. Aerial shots show buyers exactly what they&apos;ll see from the upper floors.</p>
                  </div>
                </div>
                <div className="drone-best-item">
                  <div className="drone-best-icon">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>Privacy and surroundings</h3>
                    <p>How far are the neighbours? What&apos;s behind the property? Aerial shots answer these questions honestly &mdash; and when the answer is &quot;very private,&quot; that sells the listing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="drone-best-visual">
              <div className="drone-best-img">
                <Image src={droneWhyImages.main} alt="Drone photo of acreages near Calgary" width={1024} height={768} sizes={whyMainSizes} style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover" }} />
              </div>
              <div className="drone-best-img-pair">
                <div>
                  <Image src={droneWhyImages.secondary} alt="Drone photo showing Mahogany Lake in Calgary" width={800} height={600} sizes={whyThumbSizes} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                </div>
                <div>
                  <Image src={droneWhyImages.tertiary} alt="Drone photo showing Downtown Calgary skyline" width={800} height={600} sizes={whyThumbSizes} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CALLOUT */}
      <section className="drone-pricing-section" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="drone-pricing-callout">
            <div className="drone-pc-left">
              <span className="drone-pc-label">Pricing</span>
              <h2 id="pricing-heading" className="drone-pc-heading">
                Drone Photography &amp;<br /><em>Videography Pricing</em>
              </h2>
              <p className="drone-pc-body">
                Drone photos are available as a $125 add-on to any photography package, or included as standard in our Skyline and Social Boost packages. Drone video footage is an additional $125 &mdash; or included in Social Boost. All drone pricing is fixed, not based on square footage.
              </p>

              <div className="drone-pkg-table-wrapper">
                <table className="drone-pkg-table" aria-label="Drone included in packages">
                  <thead>
                    <tr>
                      <th>Package</th>
                      <th>Drone Photos</th>
                      <th>Drone Video</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Essential</td>
                      <td><span className="drone-pkg-check-addon">Add-on +$125</span></td>
                      <td><span className="drone-pkg-check-addon">Add-on +$125</span></td>
                    </tr>
                    <tr>
                      <td>Skyline</td>
                      <td><span className="drone-pkg-check-yes">✓ Included</span></td>
                      <td><span className="drone-pkg-check-addon">Add-on +$125</span></td>
                    </tr>
                    <tr>
                      <td>Social Boost</td>
                      <td><span className="drone-pkg-check-yes">✓ Included</span></td>
                      <td><span className="drone-pkg-check-yes">✓ Included</span></td>
                    </tr>
                    <tr>
                      <td>Standalone drone only</td>
                      <td><span className="drone-pkg-check-addon">From $125</span></td>
                      <td><span className="drone-pkg-check-addon">+$125</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="drone-pc-includes" style={{ marginTop: "24px" }}>
                <div className="drone-pc-pill"><div className="drone-pc-pill-dot"></div>5&ndash;10 aerial photos</div>
                <div className="drone-pc-pill"><div className="drone-pc-pill-dot"></div>Colour graded</div>
                <div className="drone-pc-pill"><div className="drone-pc-pill-dot"></div>MLS-ready JPEGs</div>
                <div className="drone-pc-pill"><div className="drone-pc-pill-dot"></div>Next-day delivery</div>
                <div className="drone-pc-pill"><div className="drone-pc-pill-dot"></div>TC licensed pilots</div>
              </div>
            </div>

            <div className="drone-pc-right">
              <span className="drone-pc-from">Add-on from</span>
              <span className="drone-pc-price"><sup>$</sup>125</span>
              <span className="drone-pc-gst">+ GST &nbsp;&middot;&nbsp; drone photos</span>
              <div className="drone-pc-actions">
                <Link href="/prices" className="btn btn-primary sr-only-link-context">See Full Pricing<span className="sr-only"> for all real estate photography and drone services in Calgary</span></Link>
                <a href={siteConfig.bookingUrl} className="btn btn-outline sr-only-link-context">Book Online<span className="sr-only"> drone photography services</span></a>
              </div>
              <p className="drone-pc-sqft-note">
                Drone video +$125 additional.<br />
                Both included in Social Boost package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq
        heading="Drone Photography FAQ"
        faqs={content.faqs}
        allFaqsLabelSuffix="drone photography in Calgary"
      />

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
                Calgary Aerial Drone Photography &amp; Surrounding Areas
              </h2>
              <p>
                Photos 4 Real Estate provides Transport Canada certified drone operations across all of Calgary and the
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
                      aria-label={`Real estate drone photography in ${area}`}
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
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm Calgary drone photography travel fees`}
                >
                  {siteConfig.phone}
                </a>{" "}
                to confirm.
              </p>
            </div>
            <div className="areas-visual">
              <div className="areas-visual-item">
                <Image
                  src="https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-Mahogany-Lake-Photos-4-Real-Estate02.webp"
                  alt="Drone photo showing Mahogany Lake and nearby homes in Calgary"
                  width={1600}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src="https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-photo-showing-proximity-to-the-lake-Photos-4-Real-Estate.webp"
                  alt="Drone photo showing a home's proximity to the lake in Calgary"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src="https://cdn.photos4realestate.ca/p4re-static-media/drone-service-page/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp"
                  alt="Drone view toward Downtown Calgary skyline"
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

      {/* REVIEWS */}
      <Reviews variant="dark" />

      {/* RELATED SERVICES — Also Available */}
      <section
        className="related-section"
        aria-labelledby="drone-related-heading"
      >
        <div className="container">
          <div className="related-header">
            <span className="section-label">Also Available</span>
            <h2 id="drone-related-heading">Services That Pair With Drone Photography</h2>
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
        eyebrow="Ready to list?"
        title="Book Calgary Drone Photography in Under a Minute."
        description={
          <>
            Pick your date, choose your package, and we&rsquo;ll handle the
            rest &mdash; 4K drone photos, video options, and next-day
            delivery on every Calgary shoot.
          </>
        }
      />

    </>
  );
}
