import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  CheckCircle2,
  CircleCheck,
  FileImage,
  Home,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { StyleShotsGallery } from "@/components/services/StyleShotsGallery";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { styleShotsImages } from "@/lib/images";
import { serviceAreas, siteConfig } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";
import {
  AVERAGE_RATING,
  GOOGLE_REVIEW_URL,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";

export const dynamic = "force-static";

const slug = "style-shots";
const content = servicesContent[slug];
const pageUrl = `${siteConfig.url}/services/${slug}`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const businessId = `${siteConfig.url}/#business`;

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: content.ogAlt,
};

const gallery = [
  {
    src: styleShotsImages.mirrorLiving,
    alt: "Style Shot of a decorative mirror in a Calgary living room listing",
    label: "Living room mirror detail",
  },
  {
    src: styleShotsImages.bedroomPillows,
    alt: "Design-focused Style Shot of pillows, headboard, and nightstand in a bedroom",
    label: "Bedroom styling",
  },
  {
    src: styleShotsImages.kitchenLights,
    alt: "Detail-focused Style Shot of kitchen fixture lights and finishes",
    label: "Kitchen lighting",
  },
  {
    src: styleShotsImages.bathroomMirrorBedroom,
    alt: "Interior Style Shot through a bathroom mirror toward a bedroom",
    label: "Mirror composition",
  },
  {
    src: styleShotsImages.kitchenIsland,
    alt: "Detailed Style Shot of a kitchen centre island and countertop finish",
    label: "Kitchen island finish",
  },
  {
    src: styleShotsImages.bathroomSinkMirror,
    alt: "Home décor Style Shot of a bathroom sink and mirror",
    label: "Bathroom décor",
  },
  {
    src: styleShotsImages.coffeeTableBooks,
    alt: "Magazine-style real estate photo of books and a flower pot on a coffee table",
    label: "Coffee table styling",
  },
  {
    src: styleShotsImages.diningTable,
    alt: "Magazine-styled Style Shot of a dining table setup",
    label: "Dining table detail",
  },
  {
    src: styleShotsImages.bathroomSinkDetail,
    alt: "Style Shot of a bathroom sink and mirror detail",
    label: "Bathroom fixture detail",
  },
  {
    src: styleShotsImages.bathtubWindow,
    alt: "Style Shot of a bathroom bathtub with a large window in the background",
    label: "Bathtub lifestyle detail",
  },
] as const;

const benefits = [
  {
    icon: <Home size={22} aria-hidden="true" />,
    title: "Create emotional appeal",
    text: "Buyers connect faster when they see the lifestyle, warmth, and design personality behind the rooms.",
  },
  {
    icon: <Sparkles size={22} aria-hidden="true" />,
    title: "Stand out online",
    text: "Listings with thoughtful detail shots feel more polished on MLS, property websites, brochures, and social feeds.",
  },
  {
    icon: <Layers size={22} aria-hidden="true" />,
    title: "Highlight craftsmanship",
    text: "Showcase finishes, materials, lighting, staging, and custom details that wide room photos may not emphasize.",
  },
  {
    icon: <FileImage size={22} aria-hidden="true" />,
    title: "Boost marketing impact",
    text: "Use Style Shots as carousel images, flyer details, social media cutaways, and premium listing presentation visuals.",
  },
] as const;

const perfectFor = [
  "Luxury or designer listings",
  "Professionally staged homes",
  "Interior designers and home stagers",
  "Builders or renovators showcasing materials and finishes",
  "Airbnb and vacation rental listings",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(content.faqs),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Style Shots Photography",
  serviceType: "Real estate detail photography add-on",
  description: content.seoDescription,
  url: pageUrl,
  provider: { "@id": businessId },
  areaServed: [...serviceAreas],
  offers: {
    "@type": "Offer",
    name: "Style Shots Add-On",
    priceCurrency: "CAD",
    price: "35",
    url: `${siteConfig.url}/prices`,
    availability: "https://schema.org/InStock",
    description: "3–4 magazine-style close-up detail photos as an add-on to a real estate photography package.",
  },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessId,
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [GOOGLE_REVIEW_URL],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: AVERAGE_RATING,
    reviewCount: REVIEW_COUNT,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviewItems.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: toIsoDate(review.date),
    publisher: { "@type": "Organization", name: "Google" },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: content.seoTitle,
  description: content.seoDescription,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": businessId },
  primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-intro", ".speakable-faq"],
  },
};

const imageSchema = gallery.map((image) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: image.src,
  name: image.label,
  description: image.alt,
  author: { "@id": businessId },
}));

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
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.seoDescription,
      images: [ogImageUrl],
    },
  };
}

export default function StyleShotsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Style Shots" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      <section className="services-page-hero style-shots-hero" aria-labelledby="style-shots-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Signature Detail Shots · Calgary, AB</div>
              <h1 id="style-shots-hero-title">
                Style Shots for <em>Calgary Real Estate</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>Style Shots</strong> are magazine-style close-ups that capture the textures, finishes, décor, and design details that make a Calgary listing feel unforgettable. Add 3–4 high-end detail photos to your real estate photoshoot for $35.
              </p>
            </div>
            <ul className="services-page-hero-stats photo-hero-stats" aria-label="Style Shots key stats">
              <li className="services-page-hero-stat"><span className="num">$35</span><span className="lbl">Add-on price</span></li>
              <li className="services-page-hero-stat"><span className="num">3–4</span><span className="lbl">Detail photos</span></li>
              <li className="services-page-hero-stat"><span className="num">24h</span><span className="lbl">Delivered with gallery</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="photo-intro-section style-shots-intro-section" aria-labelledby="style-shots-intro-heading">
        <div className="container">
          <div className="photo-intro-grid">
            <div className="photo-intro-content">
              <span className="section-label">Unique Perspective</span>
              <h2 id="style-shots-intro-heading">Capture the Signature Details That Sell the Story</h2>
              <p className="lead speakable-intro">
                Style Shots are detail-focused, editorial-style photographs designed to complement your main real estate photo set. They bring out the design story of a home by focusing on small but powerful visual moments.
              </p>
              <p>
                Whether it is the warmth of a cozy throw blanket, the elegance of a marble countertop, the craftsmanship in a kitchen backsplash, or the glow of soft pendant lighting, these images elevate a property from ordinary to unforgettable.
              </p>
              <p>
                Style Shots work best as an add-on to <Link href="/services/real-estate-photography-in-calgary" className="body-link">real estate photography in Calgary<span className="sr-only"> by Photos 4 Real Estate</span></Link>, and they pair especially well with <Link href="/services/marketing-kit-for-realtors" className="body-link">listing marketing assets<span className="sr-only"> for Calgary realtors</span></Link>.
              </p>
              <ul className="photo-stat-row style-shots-stat-row" aria-label="Style Shots value summary">
                <li className="photo-stat-cell"><span className="num">$35</span><span className="lbl">per add-on</span></li>
                <li className="photo-stat-cell"><span className="num">3–4</span><span className="lbl">close-ups</span></li>
                <li className="photo-stat-cell"><span className="num">MLS</span><span className="lbl">social ready</span></li>
              </ul>
            </div>
            <div className="photo-intro-visual style-shots-intro-visual">
              <div className="photo-intro-pill"><div className="photo-intro-pill-dot" aria-hidden="true" />Magazine-style add-on</div>
              <div className="photo-intro-img">
                <Image src={styleShotsImages.coffeeTableBooks} alt="Magazine-style Style Shot of books and a flower pot on a coffee table" width={1200} height={1500} sizes="(max-width: 1024px) 100vw, 50vw" style={{ width: "100%", height: "auto" }} priority />
              </div>
              <div className="photo-intro-img-secondary">
                <Image src={styleShotsImages.kitchenLights} alt="Detail-focused Style Shot of kitchen fixture lights" width={900} height={675} sizes="(max-width: 1024px) 55vw, 28vw" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="style-shots-benefits-section" aria-labelledby="style-shots-benefits-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Why Add Style Shots?</span>
            <h2 id="style-shots-benefits-heading">Detail Photos Make Listings Feel More Premium</h2>
            <p>These close-ups do not replace wide room coverage. They add an editorial layer that makes the listing more memorable across MLS, print, websites, and social media.</p>
          </div>
          <div className="style-shots-benefits-grid">
            {benefits.map((benefit) => (
              <article className="style-shots-benefit-card" key={benefit.title}>
                <span className="style-shots-card-icon" aria-hidden="true">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="style-shots-gallery-section" aria-labelledby="style-shots-gallery-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Example Gallery</span>
            <h2 id="style-shots-gallery-heading">Magazine-Style Real Estate Detail Photos</h2>
            <p>Examples of the textures, décor, fixtures, lighting, surfaces, and styled moments that can be captured as part of the Style Shots add-on.</p>
          </div>
          <StyleShotsGallery images={gallery} />
        </div>
      </section>

      <section className="photo-deliverables-section style-shots-deliverables-section" aria-labelledby="style-shots-included-heading">
        <div className="container">
          <div className="deliverables-header">
            <span className="section-label">What’s Included</span>
            <h2 id="style-shots-included-heading">What You Receive with the Style Shots Add-On</h2>
            <p>For $35, we add a small set of high-impact detail images to your real estate photo gallery.</p>
          </div>
          <div className="deliverables-grid">
            {content.features.map((feature) => (
              <div className="deliv-card" key={feature}>
                <div className="deliv-icon"><Check size={24} aria-hidden="true" /></div>
                <h3>{feature}</h3>
                <p>Delivered with professional editing and consistent colour so your main gallery and detail shots feel cohesive.</p>
                <div className="deliv-tag">Included</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="style-shots-perfect-section" aria-labelledby="style-shots-perfect-heading">
        <div className="container">
          <div className="style-shots-perfect-grid">
            <div className="style-shots-perfect-copy">
              <span className="section-label">Perfect For</span>
              <h2 id="style-shots-perfect-heading">Who Should Add Signature Detail Shots?</h2>
              <p>{content.whoForBody}</p>
              <ul className="style-shots-perfect-list">
                {perfectFor.map((item) => (
                  <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="style-shots-perfect-images">
              <Image src={styleShotsImages.bedroomPillows} alt="Style Shot of a bedroom bedhead with pillows and night stand" width={900} height={675} sizes="(max-width: 960px) 100vw, 50vw" />
              <Image src={styleShotsImages.bathroomSinkMirror} alt="Style Shot of a bathroom sink and mirror for a listing" width={900} height={675} sizes="(max-width: 960px) 100vw, 25vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section style-shots-pricing-section" aria-labelledby="style-shots-pricing-heading">
        <div className="container">
          <div className="pricing-callout">
            <div className="pc-left">
              <span className="pc-label">Pricing</span>
              <h2 id="style-shots-pricing-heading" className="pc-heading">Style Shots Add-On<br /><em>Only $35</em></h2>
              <p className="pc-body">Add 3–4 magazine-style close-up shots to any real estate photography package. Style Shots are professionally captured and edited with your main gallery, ready for MLS, web, print, and social media marketing.</p>
              <div className="pc-includes">
                <div className="pc-pill"><div className="pc-pill-dot" />3–4 detail photos</div>
                <div className="pc-pill"><div className="pc-pill-dot" />Magazine-style composition</div>
                <div className="pc-pill"><div className="pc-pill-dot" />Edited with gallery</div>
                <div className="pc-pill"><div className="pc-pill-dot" />Web + print ready</div>
                <div className="pc-pill"><div className="pc-pill-dot" />Photography add-on</div>
              </div>
            </div>
            <div className="pc-right">
              <span className="pc-from">Add-on service</span>
              <span className="pc-price"><sup>$</sup>35</span>
              <span className="pc-gst">+ GST · 3–4 close-up shots</span>
              <div className="style-shots-price-note"><CircleCheck size={16} aria-hidden="true" /> Best paired with a full real estate photography package.</div>
              <div className="pc-actions">
                <Link href="/prices" className="btn btn-primary">See Full Pricing<span className="sr-only"> for Calgary real estate photography add-ons</span></Link>
                <a href={siteConfig.bookingUrl} className="btn btn-outline">Book Online<span className="sr-only"> for Style Shots in Calgary</span></a>
              </div>
              <p className="pc-sqft-note">Ask to add Style Shots when booking your photo package.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-areas"
        className="areas-section style-shots-areas-section"
        aria-labelledby="style-shots-areas-heading"
      >
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="style-shots-areas-heading">Style Shots in Calgary &amp; Surrounding Areas</h2>
              <p>
                Photos 4 Real Estate offers Style Shots as a real estate photography add-on throughout Calgary and surrounding communities. Add this service to highlight staging, finishes, décor, and design details in any listing package.
              </p>
              <ul className="areas-chips" aria-label="Calgary Style Shots service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href="/service-areas"
                      className="area-chip"
                      aria-label={`Style Shots real estate photography in ${area}`}
                    >
                      <MapPin size={12} aria-hidden="true" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="areas-travel-note">
                <strong>Outside our standard radius?</strong> We can still travel for designer listings, acreages, vacation rentals, and builder projects &mdash; a small travel fee may apply. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm Style Shots travel fees`}
                >
                  {siteConfig.phone}
                </a>{" "}
                to confirm.
              </p>
            </div>
            <div className="areas-visual">
              <div className="areas-visual-item">
                <Image
                  src={styleShotsImages.bathtubWindow}
                  alt="Style Shot of a bathtub and large window for a Calgary real estate listing"
                  width={1200}
                  height={675}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={styleShotsImages.diningTable}
                  alt="Style Shot of a dining table detail for a Calgary listing"
                  width={900}
                  height={675}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={styleShotsImages.bathroomSinkDetail}
                  alt="Style Shot of a bathroom sink and mirror detail in Calgary"
                  width={900}
                  height={675}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews
        variant="dark"
        eyebrow="Calgary Realtor Reviews"
        heading={<>Clients trust <em>Photos 4 Real Estate</em> for listing media that feels polished and professional.</>}
      />

      <Faq
        faqs={content.faqs}
        heading="Style Shots FAQ"
        intro="Answers to common questions about magazine-style detail photos, pricing, requests, editing, and standalone availability."
        allFaqsLabelSuffix="Style Shots and Calgary real estate photography add-ons"
      />

      <Cta
        eyebrow="Ready to Add Style?"
        title="Book Style Shots with Your Next Calgary Photoshoot"
        description={<>Add magazine-style detail photos to your real estate photography package and give your listing more texture, personality, and premium marketing appeal.</>}
        secondaryHref="/services/real-estate-photography-in-calgary"
        secondaryLabel="View Photography"
        secondarySrSuffix=" services for Calgary real estate listings"
      />

      <JsonLd id={`ld-service-${slug}`} data={serviceSchema} />
      <JsonLd id={`ld-faq-${slug}`} data={faqSchema} />
      <JsonLd id={`ld-reviews-${slug}`} data={reviewSchema} />
      <JsonLd id={`ld-webpage-${slug}`} data={webPageSchema} />
      {imageSchema.map((schema, index) => (
        <JsonLd key={schema.contentUrl} id={`ld-image-${slug}-${index + 1}`} data={schema} />
      ))}
    </>
  );
}