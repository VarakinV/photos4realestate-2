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
  FileText,
  Images,
  MapPin,
  Drone,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig, serviceAreas } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";
import { twilightImages, photographyImages } from "@/lib/images";

export const dynamic = "force-static";

const slug = "twilight-photography-for-real-estate-in-calgary";
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
  name: "Twilight Real Estate Photography",
  serviceType: "Twilight Photography",
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
  mainEntity: content.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
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
  "Turn on all interior lights, including lamps and under-cabinet lighting",
  "Turn on all exterior lights (porch, garage, landscape, pool)",
  "Open all blinds and window coverings completely",
  "Remove vehicles from the driveway and front of house",
  "Hide garbage bins and garden hoses",
  "Sweep or shovel walkways and driveways",
  "Ensure pool/hot tub covers are removed and lights are on",
  "Turn off all TVs and computer screens",
] as const;

const deliverables = [
  {
    icon: <Camera size={22} aria-hidden="true" />,
    title: "High-Resolution Twilight Photos",
    desc: "A carefully curated set of 3 to 6 exterior images (front, rear, and key architectural angles) captured at the perfect moment of dusk.",
    tag: "Core Deliverable",
  },
  {
    icon: <CloudSun size={22} aria-hidden="true" />,
    title: "Advanced Sky Replacement",
    desc: "If the natural sunset isn't spectacular, we digitally replace the sky with a vibrant, dramatic sunset or dusk sky for maximum impact.",
    tag: "Always Included Free",
  },
  {
    icon: <FileText size={22} aria-hidden="true" />,
    title: "MLS & Print-Ready Files",
    desc: "Delivered in both high-resolution formats for print marketing and web-optimized sizes for immediate MLS and social media upload.",
    tag: "Core Deliverable",
  },
  {
    icon: <Clock size={22} aria-hidden="true" />,
    title: "Fast Turnaround",
    desc: "Twilight edits require extra care, but we still ensure you receive the final files within 24 to 36 hours of the shoot.",
    tag: "Priority Service",
  },
] as const;


const relatedCards = [
  {
    href: "/services/real-estate-photography-in-calgary",
    icon: <Images size={22} aria-hidden="true" />,
    title: "Real Estate Photography",
    desc: "Professional daytime interior and exterior photos to complement your twilight hero shots. Essential for every listing.",
    srSuffix: "Real Estate Photography in Calgary",
  },
  {
    href: "/services/virtual-staging",
    icon: <Armchair size={22} aria-hidden="true" />,
    title: "Virtual Staging",
    desc: "Digitally furnish vacant homes so they look as warm and inviting on the inside as your twilight photos make them look on the outside.",
    srSuffix: "Virtual Staging in Calgary",
  },
  {
    href: "/services/real-estate-aerial-drone-photography-in-calgary",
    icon: <Drone size={22} aria-hidden="true" />,
    title: "Drone Photography",
    desc: "Capture aerial views of the property. We can even capture twilight aerials to show the illuminated property and neighbourhood context at dusk.",
    srSuffix: "Aerial Drone Photography in Calgary",
  },
] as const;

export default function TwilightPhotographyCalgaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Twilight Photography" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      <section
        className="services-page-hero"
        aria-labelledby="twilight-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                Twilight Photography &middot; Calgary, AB
              </div>
              <h1 id="twilight-hero-title">
                Twilight Photography
                <br />
                for <em>Real Estate</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>Photos 4 Real Estate</strong> provides stunning{" "}
                <strong>twilight exterior photography</strong> for Calgary realtors.
                Stand out on MLS with warm interior glows, dramatic skies, and
                the strongest hero images in the market.
              </p>
            </div>

            <ul
              className="services-page-hero-stats photo-hero-stats"
              aria-label="Twilight photography key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">#1</span>
                <span className="lbl">Highest click-rate</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">24h</span>
                <span className="lbl">Fast delivery</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">$125</span>
                <span className="lbl">Add-on price</span>
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
      <section
        className="photo-intro-section"
        aria-labelledby="photo-intro-heading"
      >
        <div className="container">
          <div className="photo-intro-grid">
            <div className="photo-intro-content">
              <span className="section-label">What We Do</span>
              <h2 id="photo-intro-heading">
                Dramatic Twilight Photography in Calgary
              </h2>
              <p className="lead speakable-intro">
                Twilight photography is proven to be the most clickable hero image
                style on MLS. By capturing a home at the exact moment of dusk, we
                create an inviting, luxurious feel that stops buyers in their tracks.
              </p>
              <p>
                At <strong>Photos 4 Real Estate</strong>, we meticulously time our
                twilight shoots to the &quot;golden&quot; and &quot;blue&quot; hours. With interior
                lights blazing and natural ambient light perfectly balanced, we composite
                multiple exposures to create magazine-grade images that ordinary
                daytime photography simply cannot match.
              </p>
              <ul
                className="photo-stat-row"
                aria-label="Why twilight photography matters"
              >
                <li className="photo-stat-cell">
                  <span className="num">3x</span>
                  <span className="lbl">More online views</span>
                </li>
                <li className="photo-stat-cell">
                  <span className="num">100%</span>
                  <span className="lbl">Guaranteed wow factor</span>
                </li>
              </ul>
            </div>
            <div className="photo-intro-visual">
              <div className="photo-intro-pill">
                The ultimate MLS hero shot
              </div>
              <div className="photo-intro-img">
                <Image
                  src={twilightImages.real5}
                  alt="Dramatic twilight exterior of a Calgary home by Photos 4 Real Estate"
                  width={1200}
                  height={1500}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
              <div className="photo-intro-img-secondary">
                <Image
                  src={twilightImages.real6}
                  alt="Luxury home in Calgary captured at twilight"
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

      <section
        className="deliverables-section"
        aria-labelledby="photo-deliv-heading"
      >
        <div className="container">
          <div className="deliverables-header">
            <span className="section-label">What You Receive</span>
            <h2 id="photo-deliv-heading">
              Everything Included in a Twilight Shoot
            </h2>
            <p>
              Twilight photography comes with everything you need to upgrade your
              listing&apos;s marketing presence overnight.
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

      <section
        className="shot-types-section"
        aria-labelledby="twilight-types-heading"
      >
        <div className="container">
          <div className="shot-types-header">
            <span className="section-label">Options</span>
            <h2 id="twilight-types-heading">Real vs. Virtual Twilight</h2>
            <p>
              We offer two distinct twilight options depending on your budget,
              timeline, and the specific needs of the property.
            </p>
          </div>

          <div className="shot-block">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">01</div>
              <h3>Real Twilight Photography</h3>
              <p>
                Our premium service. We return to the property specifically at sunset to capture authentic evening light, glowing windows, and the natural twilight sky.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Most authentic, luxurious feel
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Captures true landscape &amp; exterior lighting
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Includes 3-6 final exterior compositions
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Best for luxury homes, acreages, and high-end listings
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <Image
                src={twilightImages.real1}
                alt="Real twilight real estate photography in Calgary"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="shot-block reverse">
            <div className="shot-content">
              <div className="shot-num" aria-hidden="true">02</div>
              <h3>Virtual Twilight Photography</h3>
              <p>
                A cost-effective and schedule-friendly alternative. We take a daytime photo from your regular shoot and digitally transform it into a stunning dusk scene.
              </p>
              <ul className="shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  No second appointment needed
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  More affordable than a real twilight shoot
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Weather-independent (works even on cloudy days)
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Great for standard listings needing an extra pop
                </li>
              </ul>
            </div>
            <div className="shot-img">
              <Image
                src={twilightImages.virtual1}
                alt="Virtual twilight photography conversion example"
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
        className="process-section"
        aria-labelledby="twilight-process-heading"
      >
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="twilight-process-heading">
              Our Twilight Photography Process
            </h2>
            <p>
              We handle the timing and the light, so you just have to enjoy the results.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                01
              </div>
              <h3>Schedule The Shoot</h3>
              <p>
                Book your twilight shoot. We&apos;ll automatically determine the optimal time based on sunset for that specific date and property orientation.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                02
              </div>
              <h3>Preparation</h3>
              <p>
                We provide a simple checklist to ensure all interior and exterior lights are functioning and turned on before we arrive.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                03
              </div>
              <h3>The Golden Hour</h3>
              <p>
                We arrive before sunset to set up and shoot continuously as the light changes from golden hour through the peak dusk window.
              </p>
              <div className="step-arrow" aria-hidden="true">
                &rarr;
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                04
              </div>
              <h3>Expert Compositing</h3>
              <p>
                We blend the best exposures to perfectly balance the exterior landscape, twilight sky, and warm interior lighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREP CHECKLIST */}
      <section className="prep-section" aria-labelledby="twilight-prep-heading">
        <div className="container">
          <div className="prep-grid">
            <div className="prep-content">
              <span className="section-label">Get Ready</span>
              <h2 id="twilight-prep-heading">
                How to Prepare for a Twilight Shoot
              </h2>
              <p>
                The secret to an amazing twilight photo is light. Every window should glow, and the exterior must be pristine.
              </p>
              <ul className="checklist" aria-label="Twilight prep checklist">
                {checklist.map((item) => (
                  <li key={item} className="checklist-item">
                    <Check size={14} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="prep-visual">
              <div className="prep-img">
                <Image
                  src={twilightImages.real4}
                  alt="Beautiful twilight real estate exterior"
                  width={1200}
                  height={675}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="prep-img-row">
                <div>
                  <Image
                    src={twilightImages.real3}
                    alt="Twilight split-level home in Calgary"
                    width={800}
                    height={600}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={twilightImages.virtual2}
                    alt="Twilight home in Auburn Bay, Calgary"
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
      <section className="pricing-section" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="pricing-callout">
            <div className="pc-left">
              <span className="pc-label">Pricing</span>
              <h2 id="pricing-heading" className="pc-heading">
                Premium Impact.<br /><em>Affordable Add-on.</em>
              </h2>
              <p className="pc-body">
                Real Twilight photography is available as an add-on to any standard shoot. Virtual Twilight is available for a lower cost. Enhance your listing&apos;s first impression instantly.
              </p>
              <div className="pc-includes" aria-label="What's always included">
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Blue-sky / Sunset replacement</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>MLS-ready files</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Quick turnaround</div>
              </div>
            </div>

            <div className="pc-right">
              <span className="pc-from">Starting from</span>
              <span className="pc-price"><sup>$</sup>125</span>
              <span className="pc-gst">+ GST &nbsp;&middot;&nbsp; Virtual Twilight</span>
              <div className="pc-actions">
                <Link href="/prices" className="btn btn-primary">
                  See Full Pricing
                  <span className="sr-only"> for Calgary twilight photography</span>
                </Link>
                <Link href="/book-online" className="btn btn-outline">
                  Book Online
                  <span className="sr-only"> &mdash; Calgary twilight photography</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section
        id="service-areas"
        className="areas-section"
        aria-labelledby="twilight-areas-heading"
      >
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="twilight-areas-heading">
                Calgary Twilight Photography &amp; Surrounding Areas
              </h2>
              <p>
                Photos 4 Real Estate covers all of Calgary plus the
                surrounding communities, towns and acreages within our
                standard service radius. Same straightforward pricing, same
                fast turnaround.
              </p>
              <ul className="areas-chips" aria-label="Calgary service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href="/service-areas"
                      className="area-chip"
                      aria-label={`Twilight real estate photography in ${area}`}
                    >
                      <MapPin size={12} aria-hidden="true" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="areas-travel-note">
                <strong>Outside our standard radius?</strong> We regularly shoot
                twilights for acreages, foothills and Banff-corridor listings &mdash; a
                small travel fee may apply. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm Calgary twilight photography travel fees`}
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
        heading="Twilight Photography FAQ"
        faqs={content.faqs}
        allFaqsLabelSuffix="twilight photography in Calgary"
      />

      {/* RELATED SERVICES — Also Available */}
      <section
        className="related-section"
        aria-labelledby="twilight-related-heading"
      >
        <div className="container">
          <div className="related-header">
            <span className="section-label">Also Available</span>
            <h2 id="twilight-related-heading">Services That Pair With Twilights</h2>
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
        eyebrow="Ready for the perfect hero shot?"
        title="Book Calgary twilight photography today."
        description={
          <>
            Add a real or virtual twilight to your listing and give buyers a
            reason to stop scrolling. Easy online booking and 24-hour delivery.
          </>
        }
      />
    </>
  );
}