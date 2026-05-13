import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesJumpNav } from "@/components/services/ServicesJumpNav";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ServiceBlocks } from "@/components/services/ServiceBlocks";
import { ServicesAddons } from "@/components/services/ServicesAddons";
import { servicesJumpNavItems } from "@/components/services/jumpNavItems";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig, services, serviceAreas } from "@/lib/site";
import { servicesFaqs } from "@/lib/faqs";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/services`;
const ogImageUrl = `${pageUrl}/opengraph-image`;

const title =
  "Real Estate Photography Services Calgary | Photos 4 Real Estate";
const description =
  "Real estate photography, video, drone, iGUIDE 3D tours, RMS floor plans, and hotel photography in Calgary and Alberta. Book online today.";

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Property photography and media services in Calgary and Alberta — Photos 4 Real Estate",
};

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
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

const serviceDescriptions: Record<(typeof services)[number]["slug"], string> = {
  "real-estate-photography-in-calgary":
    "Professional MLS-ready real estate photography for Calgary realtors and homeowners with HDR editing, blue-sky replacement and next-day delivery.",
  "style-shots":
    "Magazine-style close-up detail photos for Calgary listings, highlighting finishes, décor, textures, staging, and design details as a photography add-on.",
  "real-estate-videos-in-calgary":
    "Cinematic property video walkthroughs for Calgary listings, edited and optimized for MLS, YouTube, Instagram Reels, Facebook and TikTok.",
  "rms-measurements-and-floor-plans-in-calgary":
    "RECA-compliant RMS measurements and 2D floor plans for Calgary properties, laser-measured and delivered as PDF and PNG.",
  "iguide-virtual-tours-in-calgary":
    "Immersive iGUIDE 3D virtual tours with integrated floor plans and accurate measurements for Calgary real estate listings.",
  "real-estate-aerial-drone-photography-in-calgary":
    "Aerial drone photography and videography for Calgary acreages, lakefront and large-lot listings — captured in the same visit as ground photos.",
  "virtual-staging":
    "Photo-realistic virtual staging for vacant Calgary listings — multiple style options, virtual decluttering and disclosure-compliant before/after files.",
  "twilight-photography-for-real-estate-in-calgary":
    "Twilight exterior photography for Calgary listings — warm interior lighting, sky enhancement and dramatic MLS hero images.",
  "marketing-kit-for-realtors":
    "Free marketing kit for Calgary realtors — 9 social reels, 2 slideshows, 3 property flyers and 3 branded single-property websites with every shoot.",
  "hotel-photography":
    "Professional hotel photography for rooms, lobbies, amenities, exterior images, and drone aerials across Calgary and Alberta.",
};

const businessId = `${siteConfig.url}/#business`;
const businessRef = { "@id": businessId };

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${pageUrl}#itemlist`,
  name: "Property Photography and Media Services in Calgary and Alberta",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${siteConfig.url}/services/${s.slug}`,
    item: {
      "@type": "Service",
      "@id": `${siteConfig.url}/services/${s.slug}#service`,
      name: s.schemaName,
      url: `${siteConfig.url}/services/${s.slug}`,
      description: serviceDescriptions[s.slug],
      provider: businessRef,
      areaServed: [...serviceAreas],
      serviceType: s.schemaName,
    },
  })),
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#collection`,
  url: pageUrl,
  name: "Property Photography and Media Services in Calgary and Alberta",
  description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: businessRef,
  inLanguage: "en-CA",
  primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl },
  mainEntity: { "@id": `${pageUrl}#itemlist` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(servicesFaqs),
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
    itemReviewed: {
      "@id": businessId,
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

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        jsonLdId="ld-breadcrumb-services"
      />
      <ServicesHero />
      <ServicesJumpNav items={servicesJumpNavItems} />
      <ServicesIntro />
      <ServiceBlocks />
      <ServicesAddons />
      <Faq
        heading="Services FAQ"
        faqs={servicesFaqs}
        allFaqsLabelSuffix="all Calgary real estate media services"
      />
      <Cta
        eyebrow="One Team, One Visit"
        title="Book Every Service You Need in a Single Shoot."
        description={
          <>
            Photography, video, drone, 3D tour and floor plans &mdash; all
            captured in one visit and delivered the next business day across
            Calgary and surrounding areas.
          </>
        }
      />
      <JsonLd id="ld-collection-services" data={collectionPageSchema} />
      <JsonLd id="ld-itemlist-services" data={itemListSchema} />
      <JsonLd id="ld-faq-services" data={faqSchema} />
      <JsonLd id="ld-reviews-services" data={reviewSchema} />
      <JsonLd id="ld-speakable-services" data={speakableSchema} />
    </>
  );
}
