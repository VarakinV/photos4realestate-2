import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig } from "@/lib/site";
import type { Faq as FaqItem } from "@/lib/faqs";
import {
  Check,
  Download,
  ExternalLink,
  Film,
  Mail,
  Monitor,
  Send,
  Share2,
  Sparkles,
  Upload,
} from "lucide-react";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/free-tools/slideshow-generator`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const generatorUrl = "https://app.photos4realestate.ca/free-slideshow/";
const marketingKitUrl = "/services/marketing-kit-for-realtors";
const reelGeneratorUrl = "/free-tools/reel-generator";
const flyerGeneratorUrl = "/free-tools/flyer-generator";
const qrCodeGeneratorUrl = "/free-tools/qr-code-generator";
const slideshowVideo =
  "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/Real-Estate-Property-Slideshow.mp4";

const title = "Free Slideshow Generator Calgary | Photos 4 Real Estate";
const description =
  "Create a free real estate slideshow video for Calgary listings. Upload photos and download a polished horizontal MP4 for email, websites, presentations, and social media. Try it free today.";

const slideshowFaqs: FaqItem[] = [
  {
    q: "What is the free real estate slideshow generator?",
    a: "The free slideshow generator is an online tool that turns listing photos into a professional property slideshow video. It creates a polished MP4 you can share by email, post on social media, embed on a property website, or use in a listing presentation.",
  },
  {
    q: "Is the slideshow generator free to use?",
    a: "Yes. The slideshow generator is free to use with no credit card, no account requirement, and no obligation to book a photography package.",
  },
  {
    q: "How many slideshow videos does the free tool generate?",
    a: "The free tool generates one professional property slideshow video per use. If you need more listing marketing assets, Photos 4 Real Estate photography packages include two slideshows plus a larger marketing kit once property information is provided.",
  },
  {
    q: "Where can I use the slideshow video?",
    a: "You can use the slideshow in email campaigns, property websites, listing presentations, social media posts, open house displays, and buyer follow-ups. The MP4 format is easy to share across common marketing channels.",
  },
  {
    q: "Do I need video editing software?",
    a: "No. Upload your photos and property details, then download the finished video. You do not need Premiere, Canva video templates, CapCut, or technical editing experience.",
  },
  {
    q: "How long does it take to generate the slideshow?",
    a: "Most slideshow videos can be generated within minutes after submitting your property photos and listing details.",
  },
  {
    q: "Can I use the slideshow for paid advertising?",
    a: "Yes. The slideshow video can be used for organic social media content or paid advertising campaigns, as long as your campaign follows the rules of the platform where you publish it.",
  },
  {
    q: "What is the difference between this free tool and the marketing kit?",
    a: `The free tool creates one self-serve slideshow video. Every Photos 4 Real Estate photography package includes 2 slideshows, 9 social media reels, 6 property websites, and 3 flyers once property information is provided. <a href="${marketingKitUrl}">Learn more about the marketing kit &rarr;</a>`,
  },
  {
    q: "Do you offer other free real estate marketing tools?",
    a: `Yes. You can also use the <a href="${reelGeneratorUrl}">free real estate reel generator</a>, <a href="${flyerGeneratorUrl}">property flyer generator</a>, and <a href="${qrCodeGeneratorUrl}">QR code generator</a>. <a href="/free-tools">See all free real estate marketing tools &rarr;</a>`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(slideshowFaqs),
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Free Real Estate Slideshow Generator",
  applicationCategory: "VideoApplication",
  operatingSystem: "Web browser",
  url: generatorUrl,
  description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  publisher: { "@id": `${siteConfig.url}/#business` },
  featureList: [
    "Creates one professional property slideshow video",
    "MP4 output for email, websites, presentations, and social media",
    "Smooth transitions and modern pacing",
    "No video editing software required",
  ],
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Free real estate property slideshow example",
  description:
    "Example horizontal real estate property slideshow video for listing marketing.",
  uploadDate: "2026-01-16T00:00:00-07:00",
  contentUrl: slideshowVideo,
  thumbnailUrl: ogImageUrl,
  isFamilyFriendly: true,
  publisher: { "@id": `${siteConfig.url}/#business` },
  mainEntityOfPage: pageUrl,
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-intro", ".speakable-faq"],
  },
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
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Free slideshow generator Calgary — Photos 4 Real Estate",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function SlideshowGeneratorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Free Tools", href: "/free-tools" },
          { label: "Slideshow Generator" },
        ]}
        jsonLdId="ld-breadcrumb-slideshow-generator"
      />

      <section className="services-page-hero" aria-labelledby="slideshow-generator-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Free Tool · Property Slideshows</div>
              <h1 id="slideshow-generator-hero-title">
                Free Real Estate Slideshow Generator for <em>Calgary Realtors</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Create a <strong>professional property slideshow video from your listing photos</strong> in minutes. The free slideshow generator is built for email marketing, property websites, social media, and buyer presentations — no editing software required.
              </p>
              <div className="tool-detail-hero-actions">
                <a href={generatorUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Generate Your Slideshow Now
                  <span className="sr-only"> for Calgary real estate listing marketing</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
                <Link href="/free-tools" className="btn btn-outline">
                  See All Free Tools<span className="sr-only"> for Calgary real estate marketing</span>
                </Link>
              </div>
            </div>
            <ul className="services-page-hero-stats" aria-label="Slideshow generator highlights">
              <li className="services-page-hero-stat"><span className="num">1</span><span className="lbl">Slideshow video</span></li>
              <li className="services-page-hero-stat"><span className="num">16:9</span><span className="lbl">Horizontal format</span></li>
              <li className="services-page-hero-stat"><span className="num">MP4</span><span className="lbl">Easy to share</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tool-detail-section" aria-labelledby="what-is-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">What It Does</span>
              <h2 id="what-is-heading">What Is the Free Real Estate Slideshow Generator?</h2>
              <p className="lead speakable-intro">
                The free real estate slideshow generator is a browser-based tool that turns listing photos into a clean, polished property video for Calgary real estate marketing.
              </p>
              <p>
                Upload property photos, add listing information, and download a ready-to-share MP4 slideshow. The video uses smooth transitions, modern pacing, and a horizontal format that works well in email, on websites, and in client presentations.
              </p>
              <p>
                Use it when a listing needs quick exposure, when buyers need a simple walkthrough-style overview, or when you want a more engaging asset than static photos alone.
              </p>
            </div>
            <div className="tool-detail-card-list" aria-label="Slideshow generator benefits">
              {[
                [Monitor, "Horizontal 16:9 video", "A desktop-friendly format for email, websites, presentations, and open houses."],
                [Sparkles, "Polished motion", "Smooth transitions and pacing make listing photos feel more dynamic."],
                [Mail, "Easy to share", "Use the MP4 in email campaigns, buyer follow-ups, and listing presentations."],
                [Download, "No editing required", "Generate and download the finished video without video editing software."],
              ].map(([Icon, cardTitle, text]) => (
                <div className="tool-detail-mini-card" key={String(cardTitle)}>
                  <div className="ft-tool-card-header-icon icon-slide"><Icon size={22} aria-hidden="true" /></div>
                  <div><h3>{cardTitle as string}</h3><p>{text as string}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tool-detail-section tool-detail-section-muted" aria-labelledby="example-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Example</span>
            <h2 id="example-heading">What Does the Generated Slideshow Look Like?</h2>
            <p>This demo shows the horizontal property slideshow style: photo sequencing, transitions, and presentation-friendly pacing.</p>
          </div>
          <div className="tool-slideshow-preview">
            <div className="marketing-slideshow-mock">
              <div className="marketing-browser-bar is-compact" aria-hidden="true">
                <span className="marketing-browser-dot is-red" aria-hidden="true" />
                <span className="marketing-browser-dot is-amber" aria-hidden="true" />
                <span className="marketing-browser-dot is-green" aria-hidden="true" />
                <span className="marketing-slideshow-label">Listing Slideshow Example</span>
              </div>
              <video
                className="marketing-slideshow-video"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label="Example horizontal real estate property slideshow video"
              >
                <source src={`${slideshowVideo}#t=0.1`} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="tool-detail-section" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="tool-detail-centered"><span className="section-label">How It Works</span><h2 id="how-it-works-heading">How Does the Slideshow Generator Work?</h2></div>
          <div className="tool-detail-steps">
            {[
              [Upload, "Upload listing photos", "Choose the property images you want to feature in the slideshow."],
              [Film, "Generate the slideshow", "The tool sequences your photos into one polished property video."],
              [Send, "Download and share", "Use the MP4 in email, social media, property websites, and presentations."],
            ].map(([Icon, stepTitle, text], index) => (
              <div className="tool-detail-step" key={String(stepTitle)}>
                <span className="tool-detail-step-num">0{index + 1}</span>
                <Icon size={26} aria-hidden="true" />
                <h3>{stepTitle as string}</h3>
                <p>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tool-detail-section tool-detail-section-muted" aria-labelledby="perfect-for-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Best Uses</span>
            <h2 id="perfect-for-heading">Where Should Realtors Use Slideshow Videos?</h2>
            <p>A slideshow video is a simple way to make listing photos more engaging without creating a full cinematic property video.</p>
          </div>
          <div className="tool-detail-steps">
            {[
              [Share2, "Social media posts", "Create a more engaging listing post than a static photo carousel."],
              [Mail, "Email campaigns", "Send buyers and seller leads a polished property overview."],
              [Monitor, "Websites and presentations", "Embed the slideshow on property pages or present it during listing conversations."],
            ].map(([Icon, useTitle, text]) => (
              <div className="tool-detail-step" key={String(useTitle)}>
                <Icon size={26} aria-hidden="true" />
                <h3>{useTitle as string}</h3>
                <p>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ft-compare-section" aria-labelledby="kit-compare-heading">
        <div className="container">
          <div className="ft-compare-header">
            <span className="section-label">Free Tool vs. Marketing Kit</span>
            <h2 id="kit-compare-heading">What Do You Get Beyond the Free Slideshow Generator?</h2>
            <p>The free generator is ideal for one quick self-serve slideshow. Photography clients receive a larger automated marketing kit.</p>
          </div>
          <div className="ft-compare-grid">
            <div className="ft-compare-card free-card"><span className="ft-compare-card-label">Free Self-Serve Tool</span><h3>1 Slideshow You Generate</h3><p className="sub">Use listing photos to create one polished property slideshow video yourself.</p><ul className="ft-compare-items"><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>No account required</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Horizontal MP4 video</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Use for email, web, social, and presentations</li></ul><a href={generatorUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Open Slideshow Generator<span className="sr-only"> to create a free Calgary real estate slideshow video</span> <ExternalLink size={16} aria-hidden="true" /></a></div>
            <div className="ft-compare-card kit-card"><span className="ft-compare-card-label">With Photography Packages</span><h3>2 Slideshows + Full Marketing Kit</h3><p className="sub">Every Photos 4 Real Estate photography package includes 2 slideshows plus reels, websites, and flyers once property information is provided.</p><ul className="ft-compare-items"><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div><strong>2 animated slideshow videos</strong></li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>9 reels, <Link href="/single-property-websites">6 property websites<span className="sr-only"> — free single property website designs for Calgary realtors</span></Link>, 3 flyers</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Delivered next day once property information is provided</li></ul><Link href={marketingKitUrl} className="btn btn-primary">See the Marketing Kit<span className="sr-only"> for Calgary realtors</span></Link></div>
          </div>
        </div>
      </section>

      <Faq
        heading="Free Slideshow Generator — Frequently Asked Questions"
        faqs={slideshowFaqs}
        intro={<>Common questions about creating free real estate slideshow videos for email, social media, property websites, and presentations.</>}
        allFaqsLabelSuffix="the free real estate slideshow generator"
        sectionClassName="faq-section-white"
      />

      <Cta
        eyebrow="Ready to Create a Slideshow?"
        title="Generate a Real Estate Slideshow Video for Free"
        description={
          <>
            Upload your listing photos and create a polished property slideshow
            video for email, social media, and property websites. No account,
            no subscription, no editing software.
          </>
        }
        primaryHref={generatorUrl}
        primaryLabel="Open Slideshow Generator"
        primarySrSuffix=" to create a Calgary real estate slideshow video"
        primaryTargetBlank
        secondaryHref={marketingKitUrl}
        secondaryLabel="See the Marketing Kit"
        secondarySrSuffix=" included with Calgary real estate photography packages"
      />

      <JsonLd id="ld-faq-slideshow-generator" data={faqSchema} />
      <JsonLd id="ld-software-slideshow-generator" data={softwareSchema} />
      <JsonLd id="ld-video-slideshow-generator" data={videoSchema} />
      <JsonLd id="ld-speakable-slideshow-generator" data={speakableSchema} />
    </>
  );
}