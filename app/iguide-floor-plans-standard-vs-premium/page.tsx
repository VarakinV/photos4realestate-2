import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Box,
  CheckCircle2,
  CircleCheck,
  Clock,
  FileText,
  Layers,
  Ruler,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import type { Faq as FaqItem } from "@/lib/faqs";
import { rmsImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/iguide-floor-plans-standard-vs-premium`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const businessId = `${siteConfig.url}/#business`;

const title = "iGUIDE Floor Plans Calgary | Photos 4 Real Estate";
const description =
  "Compare iGUIDE Standard vs Premium floor plans in Calgary, pricing, detail level, 3D tour features, RMS compliance, and best use cases. Book online today.";

const standardFeatures = [
  "3D virtual tour",
  "Color-coded floor plans",
  "Measurement tools and lead generation features",
  "Downloadable files and Floorplanner export for offline use",
  "ANSI-Z765 / RMS compliant 2D square footage calculations",
  "One-year hosting package",
];

const premiumFeatures = [
  "Everything in the iGUIDE Standard package",
  "Enhanced detailed floor plans with objects, fixtures, and appliances",
  "VR compatible viewing experience",
];

const differences = [
  {
    label: "Detail Level",
    standard: "Clean 2D layouts with room labels, dimensions, and RMS square footage.",
    premium: "Detailed drawings showing objects, fixtures, cabinetry, appliances, and richer room context.",
  },
  {
    label: "Visual Presentation",
    standard: "MLS-ready plan style that is clear, simple, and easy for buyers to understand.",
    premium: "More visually rich plans for luxury listings, client presentations, and complex layouts.",
  },
  {
    label: "Best Use Case",
    standard: "Most residential listings that need compliant measurements and a strong online buyer experience.",
    premium: "High-end homes, commercial spaces, design-focused projects, or listings needing extra detail.",
  },
  {
    label: "Pricing",
    standard: "Included in all photography packages; standalone RMS and floor plans start at $150 + GST.",
    premium: "$0.06 per sq ft add-on with a $70 minimum + GST.",
  },
  {
    label: "Delivery",
    standard: "Roughly the same next-day delivery window for most Photos 4 Real Estate bookings.",
    premium: "Roughly the same next-day delivery window, subject to property complexity and iGUIDE processing.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is the difference between iGUIDE Standard and Premium floor plans?",
    a: "iGUIDE Standard includes an accurate 3D virtual tour, color-coded floor plans, measurements, downloadable files, Floorplanner export, RMS-compliant square footage calculations, and one-year hosting. iGUIDE Premium includes everything in Standard and adds enhanced detailed floor plans with objects, fixtures, appliances, and VR compatibility.",
  },
  {
    q: "Is iGUIDE Standard enough for a Calgary MLS listing?",
    a: "Yes. For most Calgary real estate listings, iGUIDE Standard is the right choice because it provides clear MLS-ready floor plans, RMS-compliant square footage calculations, and a 3D virtual tour buyers can use online.",
  },
  {
    q: "When should I upgrade to iGUIDE Premium?",
    a: "Choose iGUIDE Premium for luxury homes, complex multi-level layouts, commercial properties, high-end seller presentations, or listings where fixtures, appliances, cabinetry, and room detail help tell the story of the property.",
  },
  {
    q: "How much does iGUIDE Premium cost?",
    a: "Premium floor plans are available as an add-on at $0.06 per square foot with a $70 minimum plus GST. Standard floor plans are included in all Photos 4 Real Estate photography packages, and standalone RMS measurements and floor plans start at $150 plus GST.",
  },
  {
    q: "Do Standard and Premium floor plans have the same delivery time?",
    a: "In most cases, both iGUIDE Standard and Premium are delivered in roughly the same next-day window. Very large or complex properties can require additional processing time.",
  },
  {
    q: "Do both options include RMS-compliant measurements?",
    a: "Yes. Both Standard and Premium iGUIDE options support ANSI-Z765 / RMS-compliant 2D square footage calculations for Alberta real estate listings when captured and processed correctly.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(faqs),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "iGUIDE Standard vs Premium Floor Plans",
  description,
  url: pageUrl,
  image: [rmsImages.standardPlanCard, rmsImages.premiumPlanCard, ogImageUrl],
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
  name: "iGUIDE Floor Plans Calgary",
  serviceType: "iGUIDE floor plans and RMS measurements",
  provider: { "@id": businessId },
  areaServed: "Calgary and surrounding areas",
  url: pageUrl,
  description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "iGUIDE Floor Plan Options",
    itemListElement: [
      {
        "@type": "Offer",
        name: "iGUIDE Standard Floor Plan",
        priceCurrency: "CAD",
        price: "150",
        url: `${siteConfig.url}/prices`,
        availability: "https://schema.org/InStock",
        description: "Standalone RMS measurements and Standard iGUIDE floor plans start at $150 + GST.",
      },
      {
        "@type": "Offer",
        name: "iGUIDE Premium Floor Plan Add-on",
        priceCurrency: "CAD",
        price: "0.06",
        unitText: "per square foot",
        url: `${siteConfig.url}/prices`,
        availability: "https://schema.org/InStock",
        description: "Premium iGUIDE floor plans are $0.06 per square foot with a $70 minimum + GST.",
      },
    ],
  },
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

const imageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: rmsImages.standardPlanCard,
    name: "Standard iGUIDE floor plan example",
    description: "Standard iGUIDE floor plan example with room labels, dimensions, and RMS-ready square footage.",
    author: { "@id": businessId },
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: rmsImages.premiumPlanCard,
    name: "Premium iGUIDE floor plan example",
    description: "Premium iGUIDE floor plan example with enhanced detail, fixtures, appliances, and objects.",
    author: { "@id": businessId },
  },
];

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "iGUIDE Standard vs Premium floor plans in Calgary — Photos 4 Real Estate",
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

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="iguide-compare-feature-list">
      {items.map((item) => (
        <li key={item}>
          <CircleCheck size={16} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function IguideFloorPlansComparisonPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "iGUIDE Standard vs Premium" }]}
        jsonLdId="ld-breadcrumb-iguide-standard-premium"
      />

      <section className="services-page-hero" aria-labelledby="iguide-compare-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">iGUIDE Floor Plans · Calgary, AB</div>
              <h1 id="iguide-compare-hero-title">
                iGUIDE Standard vs <em>Premium</em> Floor Plans
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>iGUIDE Standard</strong> is best for most Calgary MLS listings that need RMS-compliant measurements, a clear floor plan, and a 3D virtual tour. <strong>iGUIDE Premium</strong> is best for high-end listings and complex properties that need richer visual detail, fixtures, appliances, and VR-compatible presentation.
              </p>
              <div className="tool-detail-hero-actions">
                <Link href="/prices" className="btn btn-primary">
                  View Pricing
                  <span className="sr-only"> for Calgary iGUIDE floor plans</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/services/rms-measurements-and-floor-plans-in-calgary" className="btn btn-outline">
                  RMS Service
                  <span className="sr-only"> details for Calgary floor plans and measurements</span>
                </Link>
              </div>
            </div>
            <ul className="services-page-hero-stats" aria-label="iGUIDE floor plan comparison highlights">
              <li className="services-page-hero-stat"><span className="num">$150</span><span className="lbl">Standalone Standard from</span></li>
              <li className="services-page-hero-stat"><span className="num">$0.06</span><span className="lbl">Premium add-on per sq ft</span></li>
              <li className="services-page-hero-stat"><span className="num">24h</span><span className="lbl">Typical delivery window</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="iguide-compare-intro" aria-labelledby="iguide-compare-intro-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">Quick Answer</span>
              <h2 id="iguide-compare-intro-heading">Which iGUIDE Floor Plan Should You Choose?</h2>
              <p className="lead speakable-intro">
                Choose iGUIDE Standard if you need accurate, measurement-compliant floor plans and a 3D virtual tour for a typical Calgary real estate listing. Choose iGUIDE Premium when the listing benefits from enhanced detailed drawings with furniture-style objects, fixtures, cabinetry, appliances, and a more polished presentation.
              </p>
              <p>
                Both options support strong real estate marketing, lead generation, downloadable files, and RMS / ANSI-Z765 compliant square footage calculations. The main difference is the visual detail in the floor plan and the level of presentation required for the listing.
              </p>
              <p>
                If you are booking measurement services only, review our <Link href="/services/rms-measurements-and-floor-plans-in-calgary" className="body-link">Calgary RMS measurements and floor plans service<span className="sr-only"> from Photos 4 Real Estate</span></Link>. If you want the interactive tour as part of your listing package, see our <Link href="/services/iguide-virtual-tours-in-calgary" className="body-link">iGUIDE virtual tours in Calgary<span className="sr-only"> service</span></Link>.
              </p>
            </div>
            <div className="iguide-compare-summary-card">
              <BadgeDollarSign size={28} aria-hidden="true" />
              <h3>Pricing summary</h3>
              <p><strong>Standard:</strong> included in all photography packages. Standalone RMS and floor plans start at <strong>$150 + GST</strong>.</p>
              <p><strong>Premium:</strong> add <strong>$0.06 / sq ft</strong> with a <strong>$70 minimum + GST</strong>.</p>
              <Link href="/prices" className="btn btn-primary">
                See Full Pricing
                <span className="sr-only"> for iGUIDE Standard and Premium floor plans in Calgary</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="iguide-compare-visual-section" aria-labelledby="iguide-compare-visual-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Side-by-Side Visuals</span>
            <h2 id="iguide-compare-visual-heading">Standard vs Premium Floor Plan Examples</h2>
            <p>Standard floor plans focus on clear MLS-ready layout and dimensions. Premium floor plans add richer visual information such as objects, fixtures, appliances, and more presentation detail.</p>
          </div>
          <div className="iguide-compare-image-grid">
            <figure className="iguide-compare-image-card">
              <span className="iguide-compare-badge">Standard</span>
              <Image src={rmsImages.standardPlanCard} alt="Standard iGUIDE floor plan example for a Calgary real estate listing" width={1200} height={900} sizes="(max-width: 960px) 100vw, 50vw" priority />
              <figcaption>Clean 2D layout with room labels, dimensions, and RMS-ready square footage.</figcaption>
            </figure>
            <figure className="iguide-compare-image-card featured">
              <span className="iguide-compare-badge">Premium</span>
              <Image src={rmsImages.premiumPlanCard} alt="Premium iGUIDE floor plan with enhanced detail, fixtures, objects, and appliances" width={1200} height={900} sizes="(max-width: 960px) 100vw, 50vw" priority />
              <figcaption>Enhanced plan detail with fixtures, appliances, objects, and richer presentation.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="iguide-compare-options-section" aria-labelledby="iguide-options-heading">
        <div className="container">
          <div className="plans-header">
            <span className="section-label">Floor Plan Options</span>
            <h2 id="iguide-options-heading">What Is Included in Standard and Premium?</h2>
            <p>Both iGUIDE options are designed for professional property marketing. Standard covers the needs of most MLS listings, while Premium adds a more detailed visual floor plan for higher-end presentations.</p>
          </div>
          <div className="iguide-compare-plan-grid">
            <article className="iguide-compare-plan-card">
              <div className="iguide-compare-card-icon"><FileText size={24} aria-hidden="true" /></div>
              <span className="iguide-compare-card-label">Included in every package</span>
              <h3>iGUIDE Standard</h3>
              <p>Best for professionals who need accurate, measurement-compliant floor plans and a 3D virtual tour to market, list, or appraise a property with confidence.</p>
              <FeatureList items={standardFeatures} />
              <div className="iguide-compare-price"><span>Standalone from</span><strong>$150</strong><small>+ GST</small></div>
            </article>
            <article className="iguide-compare-plan-card featured">
              <div className="iguide-compare-card-icon"><Sparkles size={24} aria-hidden="true" /></div>
              <span className="iguide-compare-card-label">Premium upgrade</span>
              <h3>iGUIDE Premium</h3>
              <p>Best for professionals who need detailed, visually rich floor plans with fixtures and appliances, combined with a 3D virtual tour for high-end marketing and client presentations.</p>
              <FeatureList items={premiumFeatures} />
              <div className="iguide-compare-price"><span>Add-on</span><strong>$0.06</strong><small>/ sq ft · $70 minimum + GST</small></div>
            </article>
          </div>
        </div>
      </section>

      <section className="iguide-compare-table-section" aria-labelledby="iguide-differences-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Key Differences</span>
            <h2 id="iguide-differences-heading">How Standard and Premium Compare</h2>
            <p>Use this comparison to decide whether a clean MLS-ready floor plan is enough, or whether the listing needs a more detailed, premium presentation.</p>
          </div>
          <div className="iguide-compare-table speakable-faq">
            {differences.map((row) => (
              <div className="iguide-compare-row" key={row.label}>
                <div className="iguide-compare-row-label">{row.label}</div>
                <div><strong>Standard:</strong> {row.standard}</div>
                <div><strong>Premium:</strong> {row.premium}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="iguide-compare-choice-section" aria-labelledby="iguide-choice-heading">
        <div className="container">
          <div className="plans-header">
            <span className="section-label">Recommendation</span>
            <h2 id="iguide-choice-heading">Which Option Is Best for Your Listing?</h2>
            <p>The right choice depends on the property, seller expectations, and how much visual detail you want buyers to see before they book a showing.</p>
          </div>
          <div className="iguide-compare-choice-grid">
            <div className="iguide-compare-choice-card">
              <div className="iguide-compare-card-icon"><Ruler size={24} aria-hidden="true" /></div>
              <h3>Choose Standard for most MLS listings</h3>
              <p>Standard is the practical choice for condos, townhomes, detached homes, rentals, and appraisal or listing workflows that need accurate measurements, clear buyer navigation, and fast delivery.</p>
            </div>
            <div className="iguide-compare-choice-card">
              <div className="iguide-compare-card-icon"><Layers size={24} aria-hidden="true" /></div>
              <h3>Choose Premium for high-end presentation</h3>
              <p>Premium is ideal for luxury homes, acreage properties, commercial listings, unique layouts, and seller presentations where detailed fixtures and appliances help communicate property value.</p>
            </div>
            <div className="iguide-compare-choice-card">
              <div className="iguide-compare-card-icon"><Clock size={24} aria-hidden="true" /></div>
              <h3>Delivery is usually similar</h3>
              <p>Both options usually follow the same next-day delivery workflow at Photos 4 Real Estate, though complex homes or specialized iGUIDE products can require additional processing time.</p>
            </div>
            <div className="iguide-compare-choice-card">
              <div className="iguide-compare-card-icon"><Box size={24} aria-hidden="true" /></div>
              <h3>Both pair with iGUIDE tours</h3>
              <p>Standard and Premium floor plans can support an interactive iGUIDE experience with a 3D virtual tour, measurement tools, lead generation features, downloadable files, and one-year hosting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section rms-pricing-section" aria-labelledby="iguide-pricing-heading">
        <div className="container">
          <div className="pricing-callout">
            <div className="pc-left">
              <span className="pc-label">Pricing</span>
              <h2 id="iguide-pricing-heading" className="pc-heading">iGUIDE Floor Plan<br /><em>Pricing in Calgary</em></h2>
              <p className="pc-body">
                Standard iGUIDE floor plans are included in every Photos 4 Real Estate photography package and are suitable for most MLS listings. Standalone RMS measurements and floor plans start at $150 for homes up to 1,500 sq ft. Premium floor plans can be added when you need a richer, more detailed plan.
              </p>
              <div className="pc-includes">
                <div className="pc-pill"><div className="pc-pill-dot" />RMS-compliant calculations</div>
                <div className="pc-pill"><div className="pc-pill-dot" />Standard floor plan included</div>
                <div className="pc-pill"><div className="pc-pill-dot" />Premium upgrade available</div>
                <div className="pc-pill"><div className="pc-pill-dot" />PDF + PNG delivery</div>
                <div className="pc-pill"><div className="pc-pill-dot" />Typical next-day delivery</div>
              </div>
            </div>
            <div className="pc-right">
              <span className="pc-from">Standard standalone from</span>
              <span className="pc-price"><sup>$</sup>150</span>
              <span className="pc-gst">+ GST · up to 1,500 sq ft</span>
              <div className="iguide-premium-price-note">
                <CheckCircle2 size={16} aria-hidden="true" /> Premium add-on: $0.06 / sq ft · $70 minimum + GST
              </div>
              <div className="pc-actions">
                <Link href="/prices" className="btn btn-primary">
                  See Full Pricing
                  <span className="sr-only"> for Calgary iGUIDE floor plans</span>
                </Link>
                <a href={siteConfig.bookingUrl} className="btn btn-outline">
                  Book Online
                  <span className="sr-only"> for Calgary iGUIDE floor plans</span>
                </a>
              </div>
              <p className="pc-sqft-note">Included in Essential, Skyline &amp; Social Boost packages from $245. Pricing scales by billable sq ft.</p>
            </div>
          </div>
        </div>
      </section>

      <Faq
        faqs={faqs}
        heading="iGUIDE Standard vs Premium floor plan FAQs."
        intro="Answers to common questions about iGUIDE floor plan detail, pricing, RMS compliance, delivery, and which option is best for Calgary listings."
        allFaqsLabelSuffix="iGUIDE floor plans and Calgary RMS measurements"
        sectionClassName="faq-section-white"
      />

      <Cta
        eyebrow="Ready to Choose?"
        title="Book iGUIDE Floor Plans for Your Calgary Listing"
        description={
          <>Start with Standard for a clean MLS-ready plan, or add Premium for a more detailed floor plan presentation. Photos 4 Real Estate can complete photography, RMS measurements, floor plans, and iGUIDE media in one appointment.</>
        }
        secondaryHref="/services/rms-measurements-and-floor-plans-in-calgary"
        secondaryLabel="View RMS Service"
        secondarySrSuffix=" for Calgary iGUIDE floor plans and measurements"
      />

      <JsonLd id="ld-faq-iguide-standard-premium" data={faqSchema} />
      <JsonLd id="ld-article-iguide-standard-premium" data={articleSchema} />
      <JsonLd id="ld-service-iguide-standard-premium" data={serviceSchema} />
      <JsonLd id="ld-webpage-iguide-standard-premium" data={webPageSchema} />
      {imageSchema.map((schema, index) => (
        <JsonLd key={schema.contentUrl} id={`ld-image-iguide-standard-premium-${index + 1}`} data={schema} />
      ))}
    </>
  );
}