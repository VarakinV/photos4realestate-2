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
import { Faq, homeFaqs } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const homeTitle = `Real Estate Photography Calgary | ${siteConfig.shortName}`;
const homeDescription = siteConfig.description;

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: homeTitle,
    description: homeDescription,
    locale: "en_CA",
    images: [
      {
        url: "/og/homepage.jpg",
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
    images: ["/og/homepage.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
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
      <JsonLd id="ld-faq-home" data={faqSchema} />
      <JsonLd id="ld-speakable-home" data={speakableSchema} />
    </>
  );
}
