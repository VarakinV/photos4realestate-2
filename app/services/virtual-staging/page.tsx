import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  ArrowRight,
  Camera,
  Check,
  Clock,
  CloudSun,
  Images,
  MapPin,
  Sparkles,
  MonitorPlay,
  Layers,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig, serviceAreas } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";
import { virtualStagingImages } from "@/lib/images";
import { VirtualStagingTabs } from "@/components/services/VirtualStagingTabs";
import { BeforeAfter } from "@/components/bits/BeforeAfter";

export const dynamic = "force-static";

const slug = "virtual-staging";
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
  name: "Virtual Staging Calgary",
  serviceType: "Virtual Staging",
  description: content.seoDescription,
  url: pageUrl,
  provider: businessRef,
  areaServed: [...serviceAreas],
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "35",
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

const tabData = [
  {
    id: "living",
    label: "Living Room",
    beforeSrc: "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Living-Room-Before-02%20(1).webp",
    afterSrc: "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Living-Room-After-02%20(1).webp",
    beforeAlt: "Empty living room before virtual staging Calgary",
    afterAlt: "Living room after virtual staging with modern furniture",
    ariaLabel: "Living room virtual staging before and after comparison"
  },
  {
    id: "kitchen",
    label: "Kitchen",
    beforeSrc: "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Dinning-Room-Before-01.webp",
    afterSrc: "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Dinning-Room-After-01.webp",
    beforeAlt: "Empty kitchen before virtual staging",
    afterAlt: "Virtually staged kitchen Calgary",
    ariaLabel: "Kitchen virtual staging before and after comparison"
  },
  {
    id: "bedroom",
    label: "Bedroom",
    beforeSrc: "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Bedroom-Before-03.webp",
    afterSrc: "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Bedroom-After-03.webp",
    beforeAlt: "Empty bedroom before virtual staging",
    afterAlt: "Virtually staged bedroom with furniture",
    ariaLabel: "Bedroom virtual staging before and after comparison"
  },
  {
    id: "pool",
    label: "Pool / Exterior",
    beforeSrc: "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/pool-before-850.webp",
    afterSrc: "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/pool-after-850.webp",
    beforeAlt: "Pool and exterior before virtual staging",
    afterAlt: "Pool and exterior after virtual enhancement",
    ariaLabel: "Pool and exterior virtual staging before and after comparison"
  }
];


const relatedCards = [
  {
    href: "/services/real-estate-photography-in-calgary",
    icon: <Camera size={22} aria-hidden="true" />,
    title: "Real Estate Photography",
    desc: "Professional daytime interior and exterior photos. The perfect starting point for any virtual staging order.",
    srSuffix: "Real Estate Photography in Calgary",
  },
  {
    href: "/services/twilight-photography-for-real-estate-in-calgary",
    icon: <CloudSun size={22} aria-hidden="true" />,
    title: "Twilight Photography",
    desc: "Make your listings stand out on MLS with warm interior glows, dramatic skies, and the strongest hero images in the market.",
    srSuffix: "Twilight Photography in Calgary",
  },
  {
    href: "/services/real-estate-aerial-drone-photography-in-calgary",
    icon: <Images size={22} aria-hidden="true" />,
    title: "Drone Photography",
    desc: "Capture aerial views of the property to show the neighborhood context and full lot size.",
    srSuffix: "Aerial Drone Photography in Calgary",
  },
] as const;

export default function VirtualStagingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Virtual Staging" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      <section
        className="services-page-hero"
        aria-labelledby="virtual-staging-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                Virtual Staging &middot; Calgary, AB
              </div>
              <h1 id="virtual-staging-hero-title">
                Virtual Staging for
                <br />
                <em>Calgary Real Estate</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>Photos 4 Real Estate</strong> transforms vacant and unfurnished properties into <strong>photorealistic, fully staged rooms</strong> &mdash; digitally. Help buyers see the full potential of your listing without moving a single piece of furniture.
              </p>
            </div>

            <ul
              className="services-page-hero-stats photo-hero-stats"
              aria-label="Virtual staging key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">$30</span>
                <span className="lbl">Per photo from</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">48h</span>
                <span className="lbl">Standard delivery</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">6+</span>
                <span className="lbl">Design styles</span>
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
      <section className="photo-intro-section" aria-labelledby="vs-intro-heading">
        <div className="container">
          <div className="photo-intro-grid">
            <div className="photo-intro-content">
              <span className="section-label">What Is Virtual Staging</span>
              <h2 id="vs-intro-heading">What Is Virtual Staging in Real Estate?</h2>
              <p className="lead speakable-intro">
                Virtual staging is a digital service where professional designers use advanced 3D software to add photorealistic furniture, decor, lighting, and accessories to photos of empty or unfurnished rooms. The result looks indistinguishable from a traditionally staged photo &mdash; at a fraction of the cost.
              </p>
              <p>
                For Calgary realtors and homeowners, virtual staging solves one of the most common listing challenges: vacant properties are harder to sell because buyers struggle to connect emotionally with empty rooms. A virtually staged photo instantly shows buyers how a space could look and feel when lived in &mdash; without renting furniture, hiring stagers, or coordinating delivery schedules.
              </p>
              <p>
                At Photos 4 Real Estate, you can submit existing photos or have us photograph the property first. We stage your selected rooms in the style of your choice and deliver both the staged and original versions within 24&ndash;48 hours &mdash; ready for MLS, property websites, and social media.
              </p>

              <div className="vs-cost-compare" aria-label="Virtual vs physical staging cost comparison">
                <div className="vs-cost-card vs-physical">
                  <div className="vs-cost-card-label">Physical Staging</div>
                  <div className="vs-cost-card-price">$2,000+</div>
                  <div className="vs-cost-card-note">Per month &middot; Furniture rental, delivery, stager fees, removal</div>
                </div>
                <div className="vs-cost-card vs-virtual">
                  <div className="vs-cost-card-label">Virtual Staging ✓</div>
                  <div className="vs-cost-card-price">$35&ndash;$300</div>
                  <div className="vs-cost-card-note">Per property &middot; Delivered in 24&ndash;48 hrs &middot; No furniture, no logistics</div>
                </div>
              </div>

              <ul className="photo-stat-row" aria-label="Virtual staging statistics">
                <li className="photo-stat-cell">
                  <span className="num">73%</span>
                  <span className="lbl">find staged listings easier to visualize</span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">97%</span>
                  <span className="lbl">cost saving vs physical staging</span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">48h</span>
                  <span className="lbl">standard delivery</span>
                </li>
              </ul>
            </div>
            <div className="photo-intro-visual vs-intro-visual">
              <div style={{ borderRadius: "var(--radius)", overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
                <BeforeAfter
                  beforeSrc="https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Living-Room-Before-01.webp"
                  afterSrc="https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Living-Room-After-01.webp"
                  beforeAlt="Empty living room before virtual staging Calgary"
                  afterAlt="Living room after virtual staging with modern furniture"
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>
              <div style={{ borderRadius: "var(--radius)", overflow: "hidden", position: "relative", aspectRatio: "4/3", marginTop: "12px" }}>
                <BeforeAfter
                  beforeSrc="https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Dinning-Room-Before-01.webp"
                  afterSrc="https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Dinning-Room-After-01.webp"
                  beforeAlt="Empty dining room before virtual staging Calgary"
                  afterAlt="Dining room after virtual staging with furniture and decor"
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE SLIDER ── */}
      <section className="vs-slider-section" aria-labelledby="examples-heading">
        <div className="container">
          <div className="vs-slider-header">
            <span className="section-label" style={{ color: "rgba(255,255,255,0.4)" }}>Before &amp; After Examples</span>
            <h2 id="examples-heading">Drag to Compare &mdash; Real Calgary Virtual Staging Examples</h2>
            <p>Drag the slider to reveal the before and after. Every image below is real work from our Calgary portfolio.</p>
          </div>
          <VirtualStagingTabs tabs={tabData} />
        </div>
      </section>

      {/* ── DESIGN STYLES ── */}
      <section className="vs-styles-section" aria-labelledby="styles-heading">
        <div className="container">
          <div className="vs-styles-header">
            <span className="section-label">Design Styles</span>
            <h2 id="styles-heading">Choose Your Interior Design Style</h2>
            <p>Every virtually staged room is designed in a style that matches your target buyer &mdash; or leave the choice to our designers and we&apos;ll select the best fit for the property.</p>
          </div>
          <div className="vs-styles-grid">
            <div className="vs-style-card">
              <div className="vs-style-img">
                <Image src={virtualStagingImages.livingAfter} alt="Modern virtual staging style Calgary" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="vs-style-body">
                <div className="vs-style-name">Modern</div>
                <p className="vs-style-desc">Clean lines, neutral palettes, and minimal clutter. Appeals to young professionals and contemporary buyers.</p>
                <div className="vs-style-tags">
                  <span className="vs-style-tag">Neutral tones</span>
                  <span className="vs-style-tag">Clean lines</span>
                </div>
              </div>
            </div>

            <div className="vs-style-card">
              <div className="vs-style-img">
                <Image src={virtualStagingImages.bedroomAfter} alt="Scandinavian virtual staging style Calgary" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="vs-style-body">
                <div className="vs-style-name">Scandinavian</div>
                <p className="vs-style-desc">Light wood tones, whites, and natural textures. Warm yet minimal. Broad buyer appeal.</p>
                <div className="vs-style-tags">
                  <span className="vs-style-tag">Light wood</span>
                  <span className="vs-style-tag">Warm whites</span>
                </div>
              </div>
            </div>

            <div className="vs-style-card">
              <div className="vs-style-img">
                <Image src={virtualStagingImages.livingAfterAlt} alt="Transitional virtual staging style Calgary" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="vs-style-body">
                <div className="vs-style-name">Transitional</div>
                <p className="vs-style-desc">A balanced blend of traditional and contemporary elements. The most versatile style.</p>
                <div className="vs-style-tags">
                  <span className="vs-style-tag">Broad appeal</span>
                  <span className="vs-style-tag">Balanced</span>
                </div>
              </div>
            </div>

            <div className="vs-style-card">
              <div className="vs-style-img">
                <Image src={virtualStagingImages.kitchenAfter} alt="Luxury virtual staging style Calgary" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="vs-style-body">
                <div className="vs-style-name">Luxury</div>
                <p className="vs-style-desc">Rich materials, statement pieces, and elevated styling. Designed to match high-end listings.</p>
                <div className="vs-style-tags">
                  <span className="vs-style-tag">Premium finishes</span>
                  <span className="vs-style-tag">Statement pieces</span>
                </div>
              </div>
            </div>

            <div className="vs-style-card">
              <div className="vs-style-img">
                <Image src={virtualStagingImages.livingAfter} alt="Traditional virtual staging style Calgary" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="vs-style-body">
                <div className="vs-style-name">Traditional</div>
                <p className="vs-style-desc">Classic furniture, rich wood tones, and warm colour accents. Well-suited to established neighbourhoods.</p>
                <div className="vs-style-tags">
                  <span className="vs-style-tag">Classic</span>
                  <span className="vs-style-tag">Warm tones</span>
                </div>
              </div>
            </div>

            <div className="vs-style-card">
              <div className="vs-style-img">
                <Image src={virtualStagingImages.bedroomAfter} alt="Farmhouse virtual staging style Calgary" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="vs-style-body">
                <div className="vs-style-name">Farmhouse</div>
                <p className="vs-style-desc">Shiplap textures, rustic wood, and cozy earthy tones. Creates an immediate sense of warmth.</p>
                <div className="vs-style-tags">
                  <span className="vs-style-tag">Rustic</span>
                  <span className="vs-style-tag">Cozy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="process-section" aria-labelledby="process-heading">
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="process-heading">From Empty Room to Staged Photo &mdash; 4 Steps</h2>
            <p>Simple to order, fast to deliver. You can submit existing photos or have us photograph the property first.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">01</div>
              <h3>Submit Photos</h3>
              <p>Send us your high-resolution JPEG photos via Google Drive, Dropbox, or WeTransfer. Include your preferred design style.</p>
              <div className="step-arrow"><ArrowRight size={14} /></div>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <h3>Choose Your Style</h3>
              <p>Select from Modern, Scandinavian, Transitional, Luxury, Traditional, or Farmhouse &mdash; or let our designers choose the best fit.</p>
              <div className="step-arrow"><ArrowRight size={14} /></div>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <h3>We Stage Digitally</h3>
              <p>Our designers add photorealistic furniture, decor, lighting, and accessories using 3D rendering software.</p>
              <div className="step-arrow"><ArrowRight size={14} /></div>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <h3>Delivery in 24&ndash;48 hrs</h3>
              <p>You receive both the staged and original versions of every photo. Both must be available for your listing.</p>
            </div>
          </div>

          <div className="vs-photo-requirements" aria-label="Photo requirements for virtual staging">
            <h3><Camera size={18} style={{ display: "inline", verticalAlign: "middle", marginRight: "8px" }} /> Photo Requirements for Best Results</h3>
            <div className="vs-req-grid">
              <div className="vs-req-item">
                <div className="vs-req-icon"><Layers size={20} /></div>
                <div>
                  <h4>High resolution</h4>
                  <p>Minimum 2,000px wide. Photos taken with a wide-angle lens produce the best staging results.</p>
                </div>
              </div>
              <div className="vs-req-item">
                <div className="vs-req-icon"><Sparkles size={20} /></div>
                <div>
                  <h4>Good natural lighting</h4>
                  <p>Open blinds, turn on all lights. Well-lit rooms produce more convincing and realistic staged results.</p>
                </div>
              </div>
              <div className="vs-req-item">
                <div className="vs-req-icon"><Camera size={20} /></div>
                <div>
                  <h4>JPEG format</h4>
                  <p>Send as high-quality JPEG files. If your photos were taken by us, we&apos;ll supply the originals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="vs-benefits-section" aria-labelledby="benefits-heading">
        <div className="container">
          <div className="vs-benefits-grid">
            <div>
              <span className="section-label">Why Virtual Staging Works</span>
              <h2 id="benefits-heading">Why Calgary Realtors Use Virtual Staging</h2>
              <p className="vs-benefits-content">Virtual staging is not just a cost-saving alternative to physical staging &mdash; it&apos;s often a better marketing tool. Staged photos consistently outperform empty room photos in every measurable metric.</p>
              <div className="vs-benefits-list">
                <div className="vs-benefit-item">
                  <div className="vs-benefit-icon"><MonitorPlay size={20} color="var(--brick)" /></div>
                  <div>
                    <h3>More Clicks, More Showings</h3>
                    <p>Staged listing photos get significantly more clicks on MLS and real estate portals. More clicks translate directly into more showing requests.</p>
                  </div>
                </div>
                <div className="vs-benefit-item">
                  <div className="vs-benefit-icon"><Armchair size={20} color="var(--brick)" /></div>
                  <div>
                    <h3>Helps Buyers Emotionally Connect</h3>
                    <p>Empty rooms feel cold and difficult to visualize. Staged rooms create an emotional response &mdash; buyers begin imagining themselves living there.</p>
                  </div>
                </div>
                <div className="vs-benefit-item">
                  <div className="vs-benefit-icon"><Clock size={20} color="var(--brick)" /></div>
                  <div>
                    <h3>No Logistics, No Wait</h3>
                    <p>No furniture rentals, no delivery trucks, no stager scheduling, no removal at the end of the listing period. Submit photos today, receive staged images tomorrow.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vs-benefits-visual">
              <div className="vs-benefits-img">
                <Image src={virtualStagingImages.livingAfterAlt} alt="Photorealistic virtual staging result" width={600} height={450} sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="vs-benefits-img-pair">
                <div>
                  <Image src={virtualStagingImages.kitchenAfter} alt="Virtually staged kitchen" width={300} height={225} />
                </div>
                <div>
                  <Image src={virtualStagingImages.bedroomAfter} alt="Virtually staged bedroom" width={300} height={225} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN TO USE ── */}
      <section className="vs-when-section" aria-labelledby="when-heading">
        <div className="container">
          <div className="vs-when-header">
            <span className="section-label" style={{ color: "rgba(255,255,255,0.4)" }}>Best Use Cases</span>
            <h2 id="when-heading" className="speakable-faq">When Does Virtual Staging Make the Most Sense?</h2>
            <p>Virtual staging delivers the highest ROI in specific listing situations &mdash; here&apos;s where it makes the biggest difference.</p>
          </div>
          <div className="vs-when-grid">
            <div className="vs-when-card">
              <div className="vs-when-icon"><Armchair size={28} color="var(--white)" /></div>
              <h3>Vacant Properties</h3>
              <p>Empty homes feel cold and echo &mdash; staged photos give buyers the emotional warmth that drives showing requests.</p>
            </div>
            <div className="vs-when-card">
              <div className="vs-when-icon"><MapPin size={28} color="var(--white)" /></div>
              <h3>New Construction &amp; Pre-Sale</h3>
              <p>Developers selling before construction is complete can use virtual staging to show buyers exactly how finished suites will look.</p>
            </div>
            <div className="vs-when-card">
              <div className="vs-when-icon"><Clock size={28} color="var(--white)" /></div>
              <h3>Stale Listings</h3>
              <p>If a listing has been sitting on MLS without showings, new virtually staged photos in a different design style can relaunch the listing.</p>
            </div>
          </div>
          <div className="vs-when-not">
            <div className="vs-when-not-icon"><Sparkles size={22} color="var(--brick)" /></div>
            <div>
              <h3>When virtual staging may not be the best option</h3>
              <p>If the property is already well-furnished and the existing furniture photographs well, professional photography alone will likely be sufficient. Virtual staging adds the most value when rooms are empty or poorly furnished. Not sure? <Link href="/contact-us" style={{ color: "var(--brick)", textDecoration: "underline", textUnderlineOffset: "2px" }}>Ask us before ordering</Link> and we&apos;ll give you an honest recommendation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLOSURE (RECA ETHICS) ── */}
      <section className="vs-disclosure-section" aria-labelledby="disclosure-heading">
        <div className="container">
          <div className="vs-disclosure-inner">
            <div className="vs-disclosure-icon"><Check size={32} color="var(--navy)" /></div>
            <div className="vs-disclosure-content">
              <h2 id="disclosure-heading">Disclosure &amp; RECA Ethics: What You Need to Know</h2>
              <p>
                <strong>RECA requires that Calgary realtors disclose the use of virtual staging in MLS listings.</strong> Buyers must be informed when listing photos have been digitally altered to add furniture or change the appearance of a space.
              </p>
              <p>
                Best practice is to label virtually staged photos clearly &mdash; for example, &quot;Virtually staged for illustration purposes&quot; &mdash; either in the listing description or directly on the photos.
              </p>
              <p>
                <strong>Photos 4 Real Estate delivers both the staged and original (unstaged) versions of every photo</strong> with every virtual staging order. Keep the unstaged versions available for any buyer who requests to see the actual current condition of the property. <a href="https://www.reca.ca" target="_blank" rel="noreferrer">Read RECA&apos;s full guidance on digital alterations &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="vs-pricing-section" id="pricing" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="vs-pricing-header">
            <span className="section-label">Pricing</span>
            <h2 id="pricing-heading">Virtual Staging Pricing in Calgary</h2>
            <p>Simple per-photo pricing with package discounts. All prices before GST.</p>
          </div>
          <div className="vs-pricing-grid">
            <div>
              <div className="vs-pkg-cards">
                <div className="vs-pkg-card">
                  <div className="vs-pkg-card-photos">
                    <div className="vs-pkg-photos-num">1</div>
                    <div className="vs-pkg-photos-label">photo</div>
                  </div>
                  <div className="vs-pkg-divider"></div>
                  <div className="vs-pkg-card-details">
                    <div className="vs-pkg-card-name">Single Photo</div>
                    <div className="vs-pkg-card-desc">One room staged in your chosen style. Ideal for adding a single hero image to an existing listing.</div>
                  </div>
                  <div className="vs-pkg-card-price">
                    <div className="vs-pkg-price-num">$35</div>
                    <span className="vs-pkg-price-gst">+ GST</span>
                  </div>
                </div>

                <div className="vs-pkg-card featured">
                  <div className="vs-pkg-card-photos">
                    <div className="vs-pkg-best">Best value</div>
                    <div className="vs-pkg-photos-num">3</div>
                    <div className="vs-pkg-photos-label">photos</div>
                  </div>
                  <div className="vs-pkg-divider"></div>
                  <div className="vs-pkg-card-details">
                    <div className="vs-pkg-card-name">3-Photo Package</div>
                    <div className="vs-pkg-card-desc">Stage the three most important rooms &mdash; typically living room, master bedroom, and kitchen or dining area.</div>
                  </div>
                  <div className="vs-pkg-card-price">
                    <div className="vs-pkg-price-num">$100</div>
                    <span className="vs-pkg-price-gst">+ GST</span>
                    <span className="vs-pkg-per-photo">$33/photo</span>
                  </div>
                </div>

                <div className="vs-pkg-card">
                  <div className="vs-pkg-card-photos">
                    <div className="vs-pkg-photos-num">6</div>
                    <div className="vs-pkg-photos-label">photos</div>
                  </div>
                  <div className="vs-pkg-divider"></div>
                  <div className="vs-pkg-card-details">
                    <div className="vs-pkg-card-name">6-Photo Package</div>
                    <div className="vs-pkg-card-desc">Full-home staging coverage &mdash; living, dining, kitchen, master bedroom, and secondary rooms.</div>
                  </div>
                  <div className="vs-pkg-card-price">
                    <div className="vs-pkg-price-num">$200</div>
                    <span className="vs-pkg-price-gst">+ GST</span>
                    <span className="vs-pkg-per-photo">$33/photo</span>
                  </div>
                </div>
              </div>
              <p className="vs-pricing-note">
                All packages include both staged and original (unstaged) files. &nbsp;&middot;&nbsp;
                <Link href="/prices">See full pricing &rarr;</Link>
              </p>
            </div>

            <div className="vs-pricing-addons" aria-label="Virtual staging add-ons and extras">
              <h3>Add-Ons &amp; Extras</h3>
              <div className="vs-addon-item">
                <span className="vs-addon-name">Rush delivery (12 hrs)</span>
                <span className="vs-addon-price">+$15/photo</span>
              </div>
              <div className="vs-addon-item">
                <span className="vs-addon-name">Revision / re-style request</span>
                <span className="vs-addon-price">$25 each</span>
              </div>
              <div className="vs-addon-item">
                <span className="vs-addon-name">Custom furniture/style brief</span>
                <span className="vs-addon-price">Free</span>
              </div>
              <div className="vs-addon-item">
                <span className="vs-addon-name">Exterior pool &amp; water enhancement</span>
                <span className="vs-addon-price">$35/photo</span>
              </div>
              <div className="vs-addon-item">
                <span className="vs-addon-name">Sky replacement (exterior)</span>
                <span className="vs-addon-price">Included free</span>
              </div>
              <div className="vs-addon-item">
                <span className="vs-addon-name">Photos shot by Photos 4 Real Estate</span>
                <span className="vs-addon-price">From $140</span>
              </div>

              <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "14px" }}>Virtual staging can be ordered with any photography package, or as a standalone service using photos you already have. <strong style={{ color: "rgba(255,255,255,0.7)" }}>No photography visit required</strong> if you supply your own images.</p>
                <Link href="/book-online" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Order Virtual Staging</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <Faq faqs={content.faqs} />

      {/* ── RELATED ── */}
      <section className="related-section">
        <div className="container">
          <div className="related-header">
            <h2>You Might Also Need</h2>
          </div>
          <div className="related-grid">
            {relatedCards.map((rc, i) => (
              <div className="related-card" key={i}>
                <div className="related-icon">{rc.icon}</div>
                <h3>{rc.title}</h3>
                <p>{rc.desc}</p>
                <div>
                  <Link href={rc.href} className="related-link">
                    <span className="sr-only">Learn more about {rc.srSuffix}</span>
                    <span aria-hidden="true">Learn more</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}