import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Camera, Drone, Film, Globe, MapPin, Moon, Ruler, Sofa } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { Reviews } from "@/components/home/Reviews";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { getPortfolioCategories, portfolioFaqs } from "@/lib/portfolio";
import { photographyImages } from "@/lib/images";
import { localBusinessSchema } from "@/components/seo/schemas";
import { AVERAGE_RATING, REVIEW_COUNT, reviews as reviewItems, toIsoDate } from "@/lib/reviews";
import { serviceAreas, siteConfig } from "@/lib/site";

export const revalidate = 3600;

const pageUrl = `${siteConfig.url}/portfolio`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const title = "Real Estate Portfolio Calgary | Photos 4 Real Estate";
const description = "Browse Calgary real estate photography portfolio examples: interiors, drone, twilight and virtual staging. See the work and book online today.";
const businessId = `${siteConfig.url}/#business`;
const businessRef = { "@type": "LocalBusiness", "@id": businessId, name: siteConfig.name };

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.name,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    locale: "en_CA",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImageUrl] },
};

const services = [
  { icon: Camera, title: "Real Estate Photography", copy: "HDR interior and exterior photos with blue-sky replacement. MLS-ready next day.", href: "/services/real-estate-photography-in-calgary" },
  { icon: Drone, title: "Drone Aerial", copy: "Transport Canada licensed aerial photos and 4K video showing lot, location and surroundings.", href: "/services/real-estate-aerial-drone-photography-in-calgary" },
  { icon: Moon, title: "Twilight Photography", copy: "Dramatic blue-hour exterior shots that make premium listings stop the scroll.", href: "/services/twilight-photography-for-real-estate-in-calgary" },
  { icon: Sofa, title: "Virtual Staging", copy: "Photorealistic digital furniture for vacant rooms with fast 24–48 hour delivery.", href: "/services/virtual-staging" },
  { icon: Box, title: "iGUIDE 3D Tours", copy: "Interactive tours with RMS measurements and floor plans bundled into every core package.", href: "/services/iguide-virtual-tours-in-calgary" },
  { icon: Film, title: "Videography & Reels", copy: "Cinematic walkthroughs and vertical social reels with optional drone footage.", href: "/services/real-estate-videos-in-calgary" },
  { icon: Ruler, title: "RMS Floor Plans", copy: "RECA-compliant RMS measurements and clean 2D floor plans for Calgary MLS listings.", href: "/services/rms-measurements-and-floor-plans-in-calgary" },
  { icon: Globe, title: "Free Marketing Kit", copy: "Reels, property websites, flyers and slideshows included with every package.", href: "/services/marketing-kit-for-realtors" },
];

export default async function PortfolioPage() {
  const categories = await getPortfolioCategories();
  const allImages = categories[0]?.images ?? [];

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Real Estate Photography Portfolio Calgary — Photos 4 Real Estate",
    description,
    url: pageUrl,
    author: businessRef,
    hasPart: allImages.slice(0, 20).map((image) => ({
      "@type": "ImageObject",
      contentUrl: image.src.startsWith("/") ? `${siteConfig.url}${image.src}` : image.src,
      description: image.alt,
      author: businessRef,
    })),
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItemsToSchemaMainEntity(portfolioFaqs) };
  const reviewSchema = {
    ...localBusinessSchema,
    aggregateRating: { "@type": "AggregateRating", ratingValue: AVERAGE_RATING, reviewCount: REVIEW_COUNT, bestRating: 5, worstRating: 1 },
    review: reviewItems.slice(0, 5).map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      datePublished: toIsoDate(review.date),
      reviewBody: review.text,
      reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5, worstRating: 1 },
    })),
  };
  const speakableSchema = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable-intro", ".speakable-faq"] } };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} jsonLdId="ld-breadcrumb-portfolio" />

      <section className="services-page-hero portfolio-hero" aria-labelledby="portfolio-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Our Work &middot; Calgary &amp; Surrounding Areas</div>
              <h1 id="portfolio-title">Calgary Real Estate Photography <em>Portfolio</em></h1>
              <p className="services-page-hero-sub speakable-intro">
                Browse our work — <strong>interior photography, exterior shots, drone aerials, twilight, and virtual staging</strong> — all captured for Calgary realtors and homeowners across the city and surrounding communities.
              </p>
            </div>
            <ul className="services-page-hero-stats" aria-label="Portfolio stats">
              <li className="services-page-hero-stat"><span className="num">9</span><span className="lbl">Photo categories</span></li>
              <li className="services-page-hero-stat"><span className="num">8+</span><span className="lbl">Services offered</span></li>
              <li className="services-page-hero-stat"><span className="num">5★</span><span className="lbl">Google rating</span></li>
            </ul>
          </div>
        </div>
      </section>

      <PortfolioGallery categories={categories} />
      <OurServices />
      <ServiceAreas />
      <Reviews variant="dark" eyebrow="Portfolio Reviews" heading={<><em>Portfolio-quality media</em> trusted by Calgary agents.</>} />
      <Faq heading="Portfolio Questions" faqs={portfolioFaqs} allFaqsLabelSuffix="Calgary real estate photography portfolio" />
      <Cta eyebrow="Ready to List?" title="Ready to Add Your Listing to This Portfolio?" description={<>Book online in minutes. One visit covers photos, iGUIDE, RMS, drone, and twilight &mdash; with your complete marketing kit delivered next day.</>} />

      <JsonLd id="ld-portfolio-gallery" data={gallerySchema} />
      <JsonLd id="ld-portfolio-faq" data={faqSchema} />
      <JsonLd id="ld-portfolio-reviews" data={reviewSchema} />
      <JsonLd id="ld-portfolio-speakable" data={speakableSchema} />
    </>
  );
}

function OurServices() {
  return (
    <section className="related-section portfolio-services-section" aria-labelledby="portfolio-services-heading">
      <div className="container">
        <div className="related-header portfolio-services-header">
          <span className="section-label">Our Services</span>
          <h2 id="portfolio-services-heading">Everything in Our Portfolio Is Available for Your Next Listing</h2>
          <p>Every service shown above can be added to your booking — all in one visit, delivered next morning.</p>
        </div>
        <div className="related-grid portfolio-services-grid">
          {services.map(({ icon: Icon, title: serviceTitle, copy, href }) => (
            <article className="related-card" key={serviceTitle}>
              <div className="related-icon"><Icon size={22} aria-hidden="true" /></div>
              <h3>{serviceTitle}</h3>
              <p>{copy}</p>
              <Link href={href} className="related-link">Learn more<span className="sr-only"> about {serviceTitle} in Calgary</span><ArrowRight size={14} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="service-areas" className="areas-section portfolio-areas-section" aria-labelledby="portfolio-areas-heading">
      <div className="container">
        <div className="areas-inner">
          <div className="areas-content">
            <span className="section-label">Service Areas</span>
            <h2 id="portfolio-areas-heading">Calgary Real Estate Photography Portfolio &amp; Surrounding Areas</h2>
            <p>Photos 4 Real Estate creates portfolio-quality listing media across Calgary and nearby communities, with the same next-day delivery and bundled marketing kit on every package.</p>
            <ul className="areas-chips" aria-label="Calgary service areas">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link href="/service-areas" className="area-chip" aria-label={`Real estate photography portfolio examples for ${area}`}><MapPin size={12} aria-hidden="true" />{area}</Link>
                </li>
              ))}
            </ul>
            <p className="areas-travel-note"><strong>Have a listing outside Calgary?</strong> We regularly travel for acreages and surrounding communities. Call <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> to confirm availability.</p>
          </div>
          <div className="areas-visual">
            <div className="areas-visual-item"><Image src={photographyImages.areaCalgary} alt="Bedroom portfolio example photo in Calgary by Photos 4 Real Estate" width={1600} height={700} sizes="(max-width: 1024px) 100vw, 50vw" /></div>
            <div className="areas-visual-item"><Image src={photographyImages.areaMahogany} alt="Drone portfolio photo of downtown Calgary by Photos 4 Real Estate" width={800} height={600} sizes="(max-width: 1024px) 50vw, 25vw" /></div>
            <div className="areas-visual-item"><Image src={photographyImages.areaAcreage} alt="Drone portfolio photo of Mahogany Lake in Calgary by Photos 4 Real Estate" width={800} height={600} sizes="(max-width: 1024px) 50vw, 25vw" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}