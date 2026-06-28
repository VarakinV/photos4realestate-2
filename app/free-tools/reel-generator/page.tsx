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
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  Film,
  Music,
  Play,
  Smartphone,
  Sparkles,
  Upload,
  Video,
  Wand2,
} from "lucide-react";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/free-tools/reel-generator`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const generatorUrl = "https://app.photos4realestate.ca/free-reels";
const marketingKitUrl = "/services/marketing-kit-for-realtors";
const slideshowGeneratorUrl = "/free-tools/slideshow-generator";
const flyerGeneratorUrl = "/free-tools/flyer-generator";
const qrCodeGeneratorUrl = "/free-tools/qr-code-generator";

const title = "Free Social Media Reel Generator Calgary | Photos 4 Real Estate";
const description =
  "Create 3 free real estate reels for Calgary listings in minutes. Download vertical 9:16 MP4 videos for Instagram, Facebook, TikTok, and YouTube Shorts. Try it free today.";

const reelVideos = [
  "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/reel-v1-9x16.mp4",
  "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/reel-v3-9x16.mp4",
  "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/reel-v4-9x16.mp4",
] as const;

const reelFaqs: FaqItem[] = [
  {
    q: "What is the free real estate reel generator?",
    a: "The free reel generator is an online tool that turns listing photos into three short vertical real estate videos. The reels are formatted for Instagram Reels, Facebook Reels, TikTok, and YouTube Shorts, with no video editing software required.",
  },
  {
    q: "Is the reel generator really free?",
    a: "Yes. The tool is free to use, with no credit card, account, subscription, or obligation to book a photography package.",
  },
  {
    q: "How many reels does the free tool create?",
    a: "The free tool creates three social media reels per listing. Each reel is a different vertical cut you can post across your social media schedule.",
  },
  {
    q: "What platforms are the reels optimized for?",
    a: "The reels are built in 9:16 vertical format for Instagram Reels, Facebook Reels, TikTok, and YouTube Shorts. They are ready to post without additional editing.",
  },
  {
    q: "Do I need video editing software?",
    a: "No. Upload your photos, enter the listing details, and download ready-to-post MP4 reels. You do not need Premiere, CapCut, Canva templates, or technical video editing experience.",
  },
  {
    q: "Can I use the reels for paid ads?",
    a: "Yes. The downloaded MP4 reels can be used for organic social media posts or paid advertising campaigns, as long as your use follows the rules of the platform where you publish them.",
  },
  {
    q: "What is the difference between this free tool and the marketing kit?",
    a: `The free tool lets any realtor create three reels manually. Every Photos 4 Real Estate photography package includes a larger marketing kit with 9 social media reels, 6 property websites, 3 flyers, and 2 slideshows, generated once property information is provided. <a href="${marketingKitUrl}">Learn more about the marketing kit &rarr;</a>`,
  },
  {
    q: "Do you offer other free real estate marketing tools?",
    a: `Yes. The free tools library also includes a <a href="${slideshowGeneratorUrl}">property slideshow generator</a>, <a href="${flyerGeneratorUrl}">property flyer generator</a>, and <a href="${qrCodeGeneratorUrl}">QR code generator</a>. <a href="/free-tools">See all free real estate marketing tools &rarr;</a>`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(reelFaqs),
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Free Social Media Reel Generator for Realtors",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web browser",
  url: generatorUrl,
  description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  publisher: { "@id": `${siteConfig.url}/#business` },
  featureList: [
    "Generates 3 vertical real estate reels",
    "9:16 format for Instagram, Facebook, TikTok and YouTube Shorts",
    "No video editing software required",
    "MP4 downloads ready for organic posts or paid ads",
  ],
};

const videoSchema = reelVideos.map((video, index) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: `Free real estate social media reel example ${index + 1}`,
  description:
    "Example vertical real estate reel generated for social media listing marketing.",
  uploadDate: "2026-01-17T00:00:00-07:00",
  contentUrl: video,
  thumbnailUrl: ogImageUrl,
  isFamilyFriendly: true,
  publisher: { "@id": `${siteConfig.url}/#business` },
  mainEntityOfPage: pageUrl,
}));

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
          alt: "Free social media reel generator Calgary — Photos 4 Real Estate",
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

function ReelPreview({ src, label, index }: { src: string; label: string; index: number }) {
  return (
    <div className="marketing-reel-item">
      <div className="marketing-reel-phone">
        <video
          className="marketing-reel-video"
          controls
          muted
          playsInline
          preload="metadata"
          aria-label={`${label} vertical real estate social media reel preview`}
        >
          <source src={`${src}#t=0.1`} type="video/mp4" />
        </video>
      </div>
      <div className="marketing-reel-tag">{label}</div>
    </div>
  );
}

export default function ReelGeneratorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Free Tools", href: "/free-tools" },
          { label: "Reel Generator" },
        ]}
        jsonLdId="ld-breadcrumb-reel-generator"
      />

      <section className="services-page-hero" aria-labelledby="reel-generator-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Free Tool · Social Media Reels</div>
              <h1 id="reel-generator-hero-title">
                Free Social Media Reel Generator for <em>Calgary Realtors</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Create <strong>three vertical real estate reels from your listing photos</strong> in minutes.
                The free reel generator is built for Instagram, Facebook, TikTok, and YouTube Shorts — no editing software or account required.
              </p>
              <div className="tool-detail-hero-actions">
                <a href={generatorUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Generate Your Reels Now
                  <span className="sr-only"> for Calgary real estate social media marketing</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
                <Link href="/free-tools" className="btn btn-outline">
                  See All Free Tools<span className="sr-only"> for Calgary real estate marketing</span>
                </Link>
              </div>
            </div>
            <ul className="services-page-hero-stats" aria-label="Reel generator highlights">
              <li className="services-page-hero-stat"><span className="num">3</span><span className="lbl">Reels per listing</span></li>
              <li className="services-page-hero-stat"><span className="num">9:16</span><span className="lbl">Vertical format</span></li>
              <li className="services-page-hero-stat"><span className="num">MP4</span><span className="lbl">Ready to post</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tool-detail-section" aria-labelledby="what-is-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">What It Does</span>
              <h2 id="what-is-heading">What Is the Free Social Media Reel Generator?</h2>
              <p className="lead speakable-intro">
                The free social media reel generator is a browser-based tool that turns property photos into short, polished listing videos for real estate social media marketing.
              </p>
              <p>
                Upload your listing photos, add property details, and download three professionally styled reels. Each video uses a vertical 1080×1920 layout, smooth transitions, modern typography, and pacing designed for mobile feeds.
              </p>
              <p>
                Use the reels to launch a new listing, keep your feed active, support open-house promotion, or test paid social ads without spending hours in video editing software.
              </p>
            </div>
            <div className="tool-detail-card-list" aria-label="Reel generator benefits">
              {[
                [Smartphone, "Vertical 1080×1920", "Optimized for Instagram, Facebook, TikTok, and YouTube Shorts."],
                [Wand2, "Automated styling", "Transitions, titles, pacing, and formatting are handled for you."],
                [Download, "Instant MP4 download", "Download the reels and post them immediately."],
                [Sparkles, "No account required", "No subscription, no trial, no watermark, and no design experience needed."],
              ].map(([Icon, title, text]) => (
                <div className="tool-detail-mini-card" key={String(title)}>
                  <div className="ft-tool-card-header-icon icon-reel"><Icon size={22} aria-hidden="true" /></div>
                  <div><h3>{title as string}</h3><p>{text as string}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tool-detail-section tool-detail-section-muted" aria-labelledby="examples-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Examples</span>
            <h2 id="examples-heading">What Do the Generated Reels Look Like?</h2>
            <p>These sample vertical reels show the type of short-form listing videos the generator is designed to create.</p>
          </div>
          <div className="marketing-reel-row tool-reel-three-up" role="group" aria-label="Three real estate social media reel examples">
            {reelVideos.map((src, index) => (
              <ReelPreview key={src} src={src} label={`Demo Reel ${index + 1}`} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="tool-detail-section" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="tool-detail-centered"><span className="section-label">How It Works</span><h2 id="how-it-works-heading">How Does the Reel Generator Work?</h2></div>
          <div className="tool-detail-steps">
            {[
              [Upload, "Upload listing photos", "Choose the property images you want to feature in your reels."],
              [Film, "Generate 3 reel cuts", "The tool creates three vertical video versions with social-first pacing."],
              [Play, "Download and post", "Save the MP4 files and publish them on your preferred platforms."],
            ].map(([Icon, title, text], index) => (
              <div className="tool-detail-step" key={String(title)}>
                <span className="tool-detail-step-num">0{index + 1}</span>
                <Icon size={26} aria-hidden="true" />
                <h3>{title as string}</h3>
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
            <h2 id="kit-compare-heading">What Do You Get Beyond the Free Reel Generator?</h2>
            <p>The free generator is perfect for self-serve listing marketing. Photography clients receive a larger automated marketing kit.</p>
          </div>
          <div className="ft-compare-grid">
            <div className="ft-compare-card free-card"><span className="ft-compare-card-label">Free Self-Serve Tool</span><h3>3 Reels You Generate</h3><p className="sub">Use any listing photos and generate three social media reels yourself.</p><ul className="ft-compare-items"><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>No account required</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>9:16 MP4 videos</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Use for organic posts or paid ads</li></ul><a href={generatorUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Open Reel Generator<span className="sr-only"> to create three free Calgary real estate reels</span> <ExternalLink size={16} aria-hidden="true" /></a></div>
            <div className="ft-compare-card kit-card"><span className="ft-compare-card-label">With Photography Packages</span><h3>9 Reels + Full Marketing Kit</h3><p className="sub">Every Photos 4 Real Estate photography package includes 9 reels plus websites, flyers, and slideshows once property information is provided.</p><ul className="ft-compare-items"><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div><strong>9 social media reels</strong></li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div><Link href="/single-property-websites">6 property websites<span className="sr-only"> — free single property website designs for Calgary realtors</span></Link>, 3 flyers, 2 slideshows</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Delivered next day once property information is provided</li></ul><Link href={marketingKitUrl} className="btn btn-primary">See the Marketing Kit<span className="sr-only"> for Calgary realtors</span></Link></div>
          </div>
        </div>
      </section>

      <Faq
        heading="Free Reel Generator — Frequently Asked Questions"
        faqs={reelFaqs}
        intro={<>Common questions about creating free real estate reels for Instagram, Facebook, TikTok, and YouTube Shorts.</>}
        allFaqsLabelSuffix="the free real estate reel generator"
        sectionClassName="faq-section-white"
      />

      <Cta
        eyebrow="Ready to Create Reels?"
        title="Generate Three Real Estate Reels for Free"
        description={
          <>
            Upload your listing photos and create ready-to-post vertical reels
            for social media. No account, no subscription, no watermark.
          </>
        }
        primaryHref={generatorUrl}
        primaryLabel="Open Reel Generator"
        primarySrSuffix=" to create vertical real estate reels"
        primaryTargetBlank
        secondaryHref={marketingKitUrl}
        secondaryLabel="See the Marketing Kit"
        secondarySrSuffix=" included with Calgary real estate photography packages"
      />

      <JsonLd id="ld-faq-reel-generator" data={faqSchema} />
      <JsonLd id="ld-software-reel-generator" data={softwareSchema} />
      {videoSchema.map((schema, index) => <JsonLd key={schema.contentUrl} id={`ld-video-reel-${index + 1}`} data={schema} />)}
      <JsonLd id="ld-speakable-reel-generator" data={speakableSchema} />
    </>
  );
}