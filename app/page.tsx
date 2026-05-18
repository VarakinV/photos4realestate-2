import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { Industries } from "@/components/home/Industries";
import { Differentiator } from "@/components/home/Differentiator";
import {
  VirtualStagingFeature,
  DroneFeature,
  TwilightFeature,
} from "@/components/home/Features";
import { WhyUs } from "@/components/home/WhyUs";
import { Reviews } from "@/components/home/Reviews";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeFaqs } from "@/lib/faqs";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const businessId = `${siteConfig.url}/#business`;
const homeTitle = `Real Estate Photography Calgary | ${siteConfig.name}`;
const homeDescription = siteConfig.description;

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: homeTitle,
    description: homeDescription,
    locale: "en_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Real Estate Photography in Calgary`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/opengraph-image"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(homeFaqs),
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
  url: `${siteConfig.url}/`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-intro", ".speakable-faq"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Industries />
      <Differentiator />
      <VirtualStagingFeature />
      <DroneFeature />
      <TwilightFeature />
      <WhyUs />
      <Reviews />
      <Faq />
      <Cta />
      <JsonLd id="ld-reviews-home" data={reviewSchema} />
      <JsonLd id="ld-faq-home" data={faqSchema} />
      <JsonLd id="ld-speakable-home" data={speakableSchema} />
    </>
  );
}
