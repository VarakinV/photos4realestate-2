import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Camera,
  CircleCheck,
  CircleX,
  Clock,
  Drone,
  FileText,
  Images,
  MapPin,
  Ruler,
  AlertTriangle,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig, serviceAreas } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";
import { rmsImages } from "@/lib/images";

export const dynamic = "force-static";

const slug = "rms-measurements-and-floor-plans-in-calgary";
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

const businessRef = { "@id": `${siteConfig.url}/#business` };

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "RMS Measurements and Floor Plans",
  serviceType: "RMS Measurements",
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

export default function RmsMeasurementsCalgaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "RMS Measurements & Floor Plans" },
        ]}
        jsonLdId={`ld-breadcrumbs-${slug}`}
      />

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
      {/* HERO */}
      <section
        className="services-page-hero"
        aria-labelledby="rms-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                RMS Measurements &amp; Floor Plans &middot; Calgary, AB
              </div>
              <h1 id="rms-hero-title">
                RMS Measurements &amp;
                <br />
                <em>Floor Plans</em>
                <br />
                in Calgary
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>Photos 4 Real Estate</strong> provides RECA-compliant RMS measurements and professional iGUIDE floor plans for every Calgary MLS listing. Laser-accurate, completed at the same visit as photography, and delivered next day.
              </p>
            </div>

            <ul
              className="services-page-hero-stats photo-hero-stats"
              aria-label="RMS measurement key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">&plusmn;1%</span>
                <span className="lbl">Measurement accuracy</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">24h</span>
                <span className="lbl">Delivery turnaround</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">$150</span>
                <span className="lbl">Standalone from</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        className="photo-intro-section rms-intro-section"
        aria-labelledby="rms-intro-heading"
      >
        <div className="container">
          <div className="photo-intro-grid rms-intro-grid">
            <div className="photo-intro-content rms-intro-content">
              <span className="section-label">What We Do</span>
              <h2 id="rms-intro-heading">
                Professional RMS Measurements &amp; Floor Plans in Calgary
              </h2>
              <p className="lead speakable-intro">
                RMS measurements and floor plans are a mandatory requirement for every residential MLS listing in Alberta. At <strong>Photos 4 Real Estate</strong>, we provide RECA-compliant measurements and iGUIDE-generated floor plans that are accurate, professionally formatted, and delivered the next morning.
              </p>
              <p>
                We use iGUIDE technology &mdash; a combination of a 360&deg; camera and a LiDAR-based distance sensor &mdash; to capture precise spatial data throughout the property. This produces measurement reports accurate to within 1% and detailed 2D floor plans that meet all MLS submission requirements.
              </p>
              <p>
                RMS measurements can be booked as a{" "}
                <Link href="/prices" className="body-link">
                  standalone service from $150
                  <span className="sr-only"> for Calgary RMS Measurements</span>
                </Link>
                , or combined with{" "}
                <Link href="/services/real-estate-photography-in-calgary" className="body-link">
                  photography
                  <span className="sr-only"> in Calgary</span>
                </Link>{" "}
                and an{" "}
                <Link href="/services/iguide-virtual-tours-in-calgary" className="body-link">
                  iGUIDE 3D virtual tour
                  <span className="sr-only"> in Calgary</span>
                </Link>{" "}
                in one visit &mdash; which is how most Calgary realtors book it.
              </p>

              <div className="reca-alert" role="note" aria-label="RECA compliance requirement">
                <div className="reca-alert-icon" aria-hidden="true">
                  <AlertTriangle size={22} style={{ color: "var(--amber)" }} />
                </div>
                <div>
                  <h3>Required for Every Calgary MLS Listing</h3>
                  <p>
                    RECA mandates RMS-compliant measurements for all residential listings in Alberta. Inaccurate or missing measurements can result in regulatory penalties for the listing realtor and disputes with buyers after sale. Our reports are fully compliant with the{" "}
                    <a href="https://www.reca.ca" target="_blank" rel="noopener noreferrer">
                      RECA Residential Measurement Standard
                      <span className="sr-only"> for Calgary real estate</span>
                    </a>.
                  </p>
                </div>
              </div>

              <ul
                className="photo-stat-row rms-stat-row"
                aria-label="RMS Measurement accuracy and delivery stats"
              >
                <li className="photo-stat-cell rms-stat-cell">
                  <span className="num">&plusmn;1%</span>
                  <span className="lbl">measurement accuracy</span>
                </li>
                <li className="photo-stat-cell rms-stat-cell">
                  <span className="num">100%</span>
                  <span className="lbl">RECA RMS compliant</span>
                </li>
                <li className="photo-stat-cell rms-stat-cell">
                  <span className="num">24h</span>
                  <span className="lbl">delivery guaranteed</span>
                </li>
              </ul>
            </div>
            <div className="photo-intro-visual rms-intro-visual">
              <div className="photo-intro-img rms-intro-img">
                <div className="photo-intro-pill rms-intro-pill">
                  <span className="rms-intro-pill-dot" aria-hidden="true" />
                  iGUIDE-powered &middot; RECA-compliant
                </div>
                <Image
                  src={rmsImages.standardPlanIntro}
                  alt="Standard iGUIDE floor plan for a Calgary real estate listing"
                  width={1200}
                  height={1500}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
              <div className="photo-intro-img-secondary rms-intro-img-secondary">
                <Image
                  src={rmsImages.rmsMeasurements}
                  alt="RMS measurements report for a Calgary real estate listing"
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

      {/* UNDERSTANDING RMS */}
      <section className="what-section rms-what-section" aria-labelledby="what-heading">
        <div className="container">
          <div className="what-header">
            <span className="section-label">Understanding RMS</span>
            <h2 id="what-heading">What Is RMS Measurement &mdash; and Why Does It Matter?</h2>
            <p>RMS stands for Residential Measurement Standard. It is the legal measurement framework mandated by RECA for all residential property listings in Alberta.</p>
          </div>

          <div className="what-grid">
            <div className="what-card">
              <div className="what-icon" aria-hidden="true">
                <FileText size={24} />
              </div>
              <h3>What RMS Is</h3>
              <p>RMS is a standardized method for measuring residential properties in Alberta, defined by RECA. It specifies exactly which areas count as livable square footage, how to measure rooms with sloped ceilings, and how to handle basements, sunrooms, and other secondary spaces. It ensures that all Calgary MLS listings report square footage in a consistent, comparable way.</p>
            </div>
            <div className="what-card">
              <div className="what-icon" aria-hidden="true">
                <AlertTriangle size={24} />
              </div>
              <h3>Why It Matters for Realtors</h3>
              <p>RECA requires that all residential MLS listings in Alberta include RMS-compliant measurements. A realtor who lists an incorrect square footage &mdash; even by mistake &mdash; is exposed to regulatory action and potential legal liability if a buyer disputes the number post-sale. Accurate, professionally verified measurements protect both the realtor and the seller.</p>
            </div>
            <div className="what-card">
              <div className="what-icon" aria-hidden="true">
                <MapPin size={24} />
              </div>
              <h3>Why It Matters for Buyers</h3>
              <p>RMS measurements give buyers a reliable, standardized way to compare properties. Because every Calgary MLS listing uses the same measurement methodology, a buyer can accurately compare a 1,800 sq ft home in Mahogany against a 1,800 sq ft home in Tuscany Hills &mdash; knowing the numbers mean the same thing.</p>
            </div>
            <div className="what-card">
              <div className="what-icon" aria-hidden="true">
                <Ruler size={24} />
              </div>
              <h3>What RMS Measures</h3>
              <p>RMS measures all interior areas on all floors, including basements and areas with sloped ceilings above 5 feet. It excludes attached garages, outdoor spaces, cold rooms, and areas open to below. The resulting number is the property&apos;s official RMS square footage &mdash; the figure that goes on the MLS listing.</p>
            </div>
          </div>

          <div className="compliance-strip">
            <div className="compliance-check" aria-hidden="true">
              <CircleCheck size={32} color="var(--green)" />
            </div>
            <div className="compliance-text">
              <h3>Our measurements are fully compliant with the RECA Residential Measurement Standard</h3>
              <p>Every measurement report we deliver can be submitted directly to MLS without modification. We follow iGUIDE&apos;s RECA-approved measurement methodology &mdash; the same standard used by professional appraisers across Alberta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FLOOR PLAN TYPES */}
      <section className="plans-section rms-plans-section" aria-labelledby="plans-heading">
        <div className="container">
          <div className="plans-header">
            <span className="section-label">Floor Plan Options</span>
            <h2 id="plans-heading">Standard vs. Premium Floor Plans</h2>
            <p>Every package includes a Standard floor plan &mdash; sufficient for all MLS listings. Premium plans are available for luxury properties, complex layouts, or commercial projects that need enhanced detail.</p>
          </div>

          <div className="plans-grid">
            <div className="plan-card">
              <div className="plan-img">
                <Image src={rmsImages.standardPlanCard} alt="Standard iGUIDE floor plan" width={600} height={450} sizes="(max-width: 960px) 100vw, 50vw" />
                <div className="plan-img-badge popular">Included in every package</div>
              </div>
              <div className="plan-body">
                <div className="plan-name">Standard Floor Plan</div>
                <p className="plan-desc">A clean, professional 2D floor plan generated from iGUIDE data. Includes room labels, dimensions, and total RMS square footage. Meets all MLS submission requirements.</p>
                <ul className="plan-features" aria-label="Standard floor plan features">
                  <li>
                    <div className="plan-check yes" aria-hidden="true"><CircleCheck size={16} /></div>
                    All room dimensions &amp; labels
                  </li>
                  <li>
                    <div className="plan-check yes" aria-hidden="true"><CircleCheck size={16} /></div>
                    Total RMS square footage
                  </li>
                  <li>
                    <div className="plan-check yes" aria-hidden="true"><CircleCheck size={16} /></div>
                    PDF + PNG delivered
                  </li>
                  <li>
                    <div className="plan-check yes" aria-hidden="true"><CircleCheck size={16} /></div>
                    MLS-ready, meets RECA standard
                  </li>
                  <li>
                    <div className="plan-check no" aria-hidden="true"><CircleX size={16} /></div>
                    <span style={{ color: "var(--text-muted)" }}>Enhanced styling</span>
                  </li>
                </ul>
                <div className="plan-price-row">
                  <span className="plan-price-label">Included in all packages &middot; Standalone from</span>
                  <span className="plan-price" style={{ marginLeft: "8px" }}>$150</span>
                  <span className="plan-price-note">+ GST</span>
                </div>
              </div>
            </div>

            <div className="plan-card featured">
              <div className="plan-img">
                <Image src={rmsImages.premiumPlanCard} alt="Premium iGUIDE floor plan with enhanced detail" width={600} height={450} sizes="(max-width: 960px) 100vw, 50vw" />
                <div className="plan-img-badge">Premium upgrade</div>
              </div>
              <div className="plan-body">
                <div className="plan-name">Premium Floor Plan</div>
                <p className="plan-desc">An enhanced version of the standard plan with enhanced detailed floor plans with objects, fixtures, and appliances. Ideal for luxury listings, complex multi-level homes, or commercial properties.</p>
                <ul className="plan-features" aria-label="Premium floor plan features">
                  <li>
                    <div className="plan-check yes" aria-hidden="true"><CircleCheck size={16} /></div>
                    Everything in our iGUIDE Standard package
                  </li>
                  <li>
                    <div className="plan-check yes" aria-hidden="true"><CircleCheck size={16} /></div>
                    Enhanced detailed floor plans with objects, fixtures, and appliances
                  </li>
                  <li>
                    <div className="plan-check yes" aria-hidden="true"><CircleCheck size={16} /></div>
                    VR compatible
                  </li>
                </ul>
                <div className="plan-price-row">
                  <span className="plan-price-label">Add-on:</span>
                  <span className="plan-price" style={{ marginLeft: "8px" }}>$0.06</span>
                  <span className="plan-price-note">/ sq ft &middot; $70 minimum + GST</span>
                </div>
              </div>
            </div>
          </div>

          <p className="plans-compare-link">
            Not sure which floor plan is right for your listing?{" "}
            <Link href="/iguide-floor-plans-standard-vs-premium">
              Read our Standard vs. Premium comparison guide
              <span className="sr-only"> for Calgary floor plans</span>
            </Link>
          </p>
        </div>
      </section>
      {/* THE TECHNOLOGY */}
      <section className="iguide-section rms-tech-section" aria-labelledby="iguide-heading">
        <div className="container">
          <div className="iguide-grid">
            <div className="iguide-content">
              <span className="section-label">The Technology</span>
              <h2 id="iguide-heading">How iGUIDE Produces Your RMS Measurements</h2>
              <p>
                Traditional tape measures and laser distance tools introduce human error &mdash; a misread corner angle, a skipped area, or a miscalculated ceiling height can throw off a measurement report significantly. iGUIDE eliminates this.
              </p>
              <p>
                iGUIDE combines a calibrated 360&deg; panoramic camera with a LiDAR-based distance sensor. As we move through the property, the system builds a precise spatial model of every room &mdash; capturing wall lengths, ceiling heights, and room geometry automatically. The result is a measurement report accurate to within 1% of actual dimensions, with no manual calculation required.
              </p>
              <p>
                The same scan that produces your RMS measurements also generates your <Link href="/services/iguide-virtual-tours-in-calgary" className="body-link">iGUIDE 3D virtual tour</Link> &mdash; which is why combining these services in one visit is the most efficient way to produce a complete Calgary listing package.
              </p>
              <div className="iguide-specs">
                <div className="iguide-spec">
                  <div className="iguide-spec-label">Technology</div>
                  <div className="iguide-spec-value">LiDAR + 360&deg; camera</div>
                </div>
                <div className="iguide-spec">
                  <div className="iguide-spec-label">Accuracy</div>
                  <div className="iguide-spec-value">Within &plusmn;1%</div>
                </div>
                <div className="iguide-spec">
                  <div className="iguide-spec-label">Standard</div>
                  <div className="iguide-spec-value">RECA-approved</div>
                </div>
                <div className="iguide-spec">
                  <div className="iguide-spec-label">Output</div>
                  <div className="iguide-spec-value">Report + Floor Plan</div>
                </div>
              </div>
            </div>
            <div className="iguide-visual">
              <div className="iguide-img-main">
                <Image
                  src={rmsImages.iguideScanning}
                  alt="Real estate floor plan generated from an iGUIDE property scan"
                  width={600}
                  height={600}
                  sizes="(max-width: 960px) 100vw, 50vw"
                />
              </div>
              <div className="iguide-accuracy-badge">
                <div className="num">&plusmn;1%</div>
                <div className="lbl">Measurement accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BILLABLE AREA */}
      <section className="rms-billable-section" id="billable-area" aria-labelledby="billable-heading">
        <div className="container">
          <div className="rms-billable-header">
            <span className="section-label">Billable Area Explained</span>
            <h2 id="billable-heading" className="speakable-faq">What Counts as RMS Billable Area?</h2>
            <p>Understanding billable area helps you select the right package and avoids surprises on the final invoice. Our pricing is based on the RMS billable area of the property.</p>
          </div>

          <div className="rms-billable-grid">
            <div className="rms-billable-col">
              <div className="rms-billable-col-header yes">
                <CircleCheck size={20} aria-hidden="true" />
                <h3>Included in Billable Area</h3>
              </div>
              <ul className="rms-billable-list">
                <li><div className="rms-bl-dot yes" />All interior areas of all floors (including below grade)</li>
                <li><div className="rms-bl-dot yes" />Additional drafted spaces such as:</li>
                <li style={{ paddingLeft: "42px" }}><div className="rms-bl-dot yes" />Sunrooms</li>
                <li style={{ paddingLeft: "42px" }}><div className="rms-bl-dot yes" />Crawlspaces</li>
                <li style={{ paddingLeft: "42px" }}><div className="rms-bl-dot yes" />Rooms only accessible from outside</li>
                <li style={{ paddingLeft: "42px" }}><div className="rms-bl-dot yes" />Areas with sloped ceilings under 5 feet in height</li>
              </ul>
            </div>
            <div className="rms-billable-col">
              <div className="rms-billable-col-header no">
                <CircleX size={20} aria-hidden="true" />
                <h3>Not Included in Billable Area</h3>
              </div>
              <ul className="rms-billable-list">
                <li><div className="rms-bl-dot no" />Attached garages (main building only)</li>
                <li><div className="rms-bl-dot no" />Cold rooms</li>
                <li><div className="rms-bl-dot no" />Areas open to below</li>
                <li><div className="rms-bl-dot no" />Outdoor spaces like balconies, decks, and patios</li>
              </ul>
            </div>
          </div>

          <div className="rms-billable-note">
            <strong>Not sure about your property&apos;s billable area?</strong> An estimate is fine for booking &mdash; our iGUIDE system measures the actual billable area on-site. If your property falls into a different pricing tier than expected, we&apos;ll confirm with you before finalizing the invoice.
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section rms-process-section" aria-labelledby="process-heading">
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="process-heading">From Booking to Delivered Floor Plans &mdash; 4 Steps</h2>
            <p>Efficient, professional, and completed in a single property visit alongside your photography booking.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">01</div>
              <h3>Book Online</h3>
              <p>Select the iGUIDE service &mdash; standalone or bundled with photography. Provide the property address and size estimate. Booking takes under 3 minutes.</p>
              <div className="step-arrow">&rarr;</div>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <h3>On-Site Scan</h3>
              <p>Our iGUIDE operator moves through every room, placing the system in each space. Each scan position takes 30&ndash;60 seconds. Total on-site time is 30&ndash;60 minutes depending on property size.</p>
              <div className="step-arrow">&rarr;</div>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <h3>Data Processing</h3>
              <p>The iGUIDE system processes the spatial data overnight, generating your RMS measurement report and 2D floor plan automatically from the captured data.</p>
              <div className="step-arrow">&rarr;</div>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <h3>Next-Day Delivery</h3>
              <p>You receive your RMS report, standard floor plan (PDF + PNG), and optional 3D virtual tour link the next morning &mdash; ready for direct MLS upload.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="deliverables-section rms-deliverables-section" aria-labelledby="deliv-heading">
        <div className="container">
          <div className="deliverables-header">
            <span className="section-label">What You Receive</span>
            <h2 id="deliv-heading">Everything Included in Your Measurement Package</h2>
            <p>Every iGUIDE measurement booking produces a complete set of files ready for MLS, print, and digital use &mdash; delivered the next morning.</p>
          </div>
          <div className="deliverables-grid">
            <div className="deliv-card">
              <div className="deliv-icon">
                <FileText size={24} />
              </div>
              <h3>RMS Measurement Report</h3>
              <p>A full RECA-compliant measurement report listing every room&apos;s dimensions and the total RMS square footage &mdash; the official document you submit with your MLS listing.</p>
              <div className="deliv-tag">MLS Required</div>
            </div>

            <div className="deliv-card">
              <div className="deliv-icon">
                <MapPin size={24} />
              </div>
              <h3>Standard 2D Floor Plan</h3>
              <p>A clean, professional floor plan showing the layout of every floor with labeled rooms and dimensions. Delivered as PDF and PNG &mdash; ready for MLS upload, property websites, and print materials.</p>
              <div className="deliv-tag">Included in All Packages</div>
            </div>

            <div className="deliv-card">
              <div className="deliv-icon">
                <Box size={24} />
              </div>
              <h3>iGUIDE Analytics Report</h3>
              <p>An iGUIDE listing analytics report showing how many buyers have viewed the floor plan and 3D tour &mdash; useful data for conversations with your sellers about listing performance.</p>
              <div className="deliv-tag">Included</div>
            </div>

            <div className="deliv-card">
              <div className="deliv-icon">
                <Clock size={24} />
              </div>
              <h3>Next-Day Delivery</h3>
              <p>All files are delivered to your email as a download link by the next morning &mdash; regardless of property size. No chasing required.</p>
              <div className="deliv-tag">Guaranteed</div>
            </div>

            <div className="deliv-card">
              <div className="deliv-icon">
                <Images size={24} />
              </div>
              <h3>PDF &amp; PNG File Formats</h3>
              <p>Floor plans are delivered in high-resolution PDF (for print and email) and PNG (for MLS upload and digital use). All files are clearly organized and labeled in your download folder.</p>
              <div className="deliv-tag">Multiple Formats</div>
            </div>

            <div className="deliv-card">
              <div className="deliv-icon">
                <Box size={24} />
              </div>
              <h3>3D Virtual Tour (Optional - Free)</h3>
              <p>The same iGUIDE scan also produces an interactive 3D virtual tour &mdash; available as a free add-on. It is also included in the Essential, Skyline, and Social Boost packages.</p>
              <div className="deliv-tag">Free Add-On</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CALLOUT */}
      <section className="pricing-section rms-pricing-section" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="pricing-callout">
            <div className="pc-left">
              <span className="pc-label">Pricing</span>
              <h2 id="pricing-heading" className="pc-heading">
                RMS Measurements &amp;<br /><em>Floor Plans Pricing</em>
              </h2>
              <p className="pc-body">
                Standalone RMS measurements and floor plans start at $150 for homes up to 1,500 sq ft. When bundled with photography in an Essential, Skyline, or Social Boost package, RMS and floor plans are included from $245 &mdash; making the package significantly better value. Pricing scales by billable square footage.
              </p>
              <div className="pc-includes">
                <div className="pc-pill"><div className="pc-pill-dot" />RECA-compliant report</div>
                <div className="pc-pill"><div className="pc-pill-dot" />Standard 2D floor plan</div>
                <div className="pc-pill"><div className="pc-pill-dot" />PDF + PNG delivery</div>
                <div className="pc-pill"><div className="pc-pill-dot" />iGUIDE analytics</div>
                <div className="pc-pill"><div className="pc-pill-dot" />Next-day delivery</div>
              </div>
            </div>
            <div className="pc-right">
              <span className="pc-from">Standalone service from</span>
              <span className="pc-price"><sup>$</sup>150</span>
              <span className="pc-gst">+ GST &nbsp;&middot;&nbsp; up to 1,500 sq ft</span>
              <div className="pc-actions">
                <Link href="/prices" className="btn btn-primary">
                  See Full Pricing
                  <span className="sr-only"> for Calgary RMS Measurements</span>
                </Link>
                <a href={siteConfig.bookingUrl} className="btn btn-outline">
                  Book Online
                  <span className="sr-only"> for Calgary RMS Measurements</span>
                </a>
              </div>
              <p className="pc-sqft-note">
                Included in Essential, Skyline &amp; Social Boost<br />
                packages from $245. Scales by sq ft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section
        id="service-areas"
        className="areas-section"
        aria-labelledby="areas-heading"
      >
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="areas-heading">RMS Measurements in Calgary &amp; Surrounding Areas</h2>
              <p>We provide professional RMS measurements and floor plans throughout Calgary and surrounding communities. Travel within 35 km of Calgary City Centre is always free.</p>
              <ul className="areas-chips" aria-label="Calgary service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href="/service-areas"
                      className="area-chip"
                      aria-label={`RMS measurements in ${area}`}
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
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm Calgary RMS travel fees`}
                >
                  {siteConfig.phone}
                </a>{" "}
                to confirm.
              </p>
            </div>
            <div className="areas-visual">
              <div className="areas-visual-item">
                <Image
                  src={rmsImages.areaBathroom}
                  alt="Real estate photographer explaining how to use and operate an iGUIDE scanning device"
                  width={1024}
                  height={768}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={rmsImages.areaBedroom}
                  alt="Bedroom photographed by Photos 4 Real Estate for a Calgary real estate listing"
                  width={1024}
                  height={576}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={rmsImages.areaKitchen}
                  alt="Bathroom photographed by Photos 4 Real Estate for a Calgary real estate listing"
                  width={1024}
                  height={682}
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
        heading="RMS Measurements FAQ"
        faqs={content.faqs}
        allFaqsLabelSuffix="RMS measurements in Calgary"
      />

      {/* RELATED SERVICES */}
      <section className="related-section" aria-labelledby="related-heading">
        <div className="container">
          <div className="related-header">
            <span className="section-label">Also Available</span>
            <h2 id="related-heading">Services That Pair With RMS Measurements</h2>
          </div>
          <div className="related-grid">
            <div className="related-card">
              <div className="related-icon">
                <Box size={24} />
              </div>
              <h3>iGUIDE 3D Virtual Tours</h3>
              <p>The same iGUIDE scan that produces your RMS measurements also generates an interactive 3D virtual tour &mdash; combining both services in one visit adds maximum value to your listing at minimal extra cost.</p>
              <Link href="/services/iguide-virtual-tours-in-calgary" className="related-link">
                Learn more
                <span className="sr-only"> about Calgary iGUIDE Virtual Tours</span> &rarr;
              </Link>
            </div>
            <div className="related-card">
              <div className="related-icon">
                <Camera size={24} />
              </div>
              <h3>Real Estate Photography</h3>
              <p>Combine RMS measurements with professional interior and exterior photography in a single visit. All Essential, Skyline, and Social Boost packages include both services by default.</p>
              <Link href="/services/real-estate-photography-in-calgary" className="related-link">
                Learn more
                <span className="sr-only"> about Calgary Real Estate Photography</span> &rarr;
              </Link>
            </div>
            <div className="related-card">
              <div className="related-icon">
                <Drone size={24} />
              </div>
              <h3>Drone Photography</h3>
              <p>Add aerial photos to showcase the property&apos;s lot size, location, and neighbourhood context. Available as an add-on to any package or included in Skyline and Social Boost.</p>
              <Link href="/services/drone-photography-videography" className="related-link">
                Learn more
                <span className="sr-only"> about Calgary Drone Photography</span> &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta
        eyebrow="Ready to Book?"
        title={<>Book Your Calgary RMS Measurement &amp; Floor Plans</>}
        description={
          <>
            RECA-compliant, laser-accurate, delivered next morning. Book standalone or combine with photography for maximum value.
          </>
        }
      />
    </>
  );
}
