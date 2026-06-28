import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig } from "@/lib/site";
import { freeToolsFaqs } from "@/lib/faqs";
import { freeToolsImages } from "@/lib/images";
import {
  Video,
  Images,
  FileText,
  QrCode,
  Check,
  Building2,
  Zap,
  Smartphone,
  Palette,
  Unlock,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Music,
  Download,
  DollarSign,
  Monitor,
  Home,
  Printer,
  Mail,
  Tag,
  ImageIcon,
} from "lucide-react";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/free-tools`;
const ogImageUrl = `${pageUrl}/opengraph-image`;

const title = "Free Real Estate Tools Calgary | Photos 4 Real Estate";
const description =
  "Create free real estate reels, slideshows, flyers and QR codes for Calgary listings. No account or watermarks. Use listing photos and start generating today.";

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Free real estate marketing tools for Calgary listings — Photos 4 Real Estate",
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

const toolApps = {
  reel: "https://app.photos4realestate.ca/free-reels",
  slideshow: "https://app.photos4realestate.ca/free-slideshow/",
  flyer: "https://app.photos4realestate.ca/free-flyers",
  qr: "https://app.photos4realestate.ca/free-qr",
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(freeToolsFaqs),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Marketing Tools for Calgary Realtors",
  description:
    "Free browser-based marketing tools for real estate agents — reel generator, slideshow generator, property flyer generator, and QR code generator.",
  url: pageUrl,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Free Social Media Reel Generator",
        url: toolApps.reel,
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
        description:
          "Create 3 professional property video reels for Instagram, Facebook, and TikTok instantly from your listing photos. No account required.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Free Property Slideshow Generator",
        url: toolApps.slideshow,
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
        description:
          "Turn listing photos into a professional slideshow video for email campaigns, social media, and property websites.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Free Property Flyer Generator",
        url: toolApps.flyer,
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
        description:
          "Generate 3 print-ready PDF property flyers for open houses, email campaigns, and direct mail.",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "Free QR Code Generator for Realtors",
        url: toolApps.qr,
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
        description:
          "Create branded QR codes with your logo, custom colours, and dot styles for sign riders, flyers, and print ads.",
      },
    },
  ],
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

export default function FreeToolsPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Free Tools" }]}
        jsonLdId="ld-breadcrumb-free-tools"
      />

      {/* HERO */}
      <section
        className="services-page-hero"
        aria-labelledby="free-tools-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                Free Marketing Tools
              </div>
              <h1 id="free-tools-hero-title">
                Free Marketing Tools for
                <br /> <em>Calgary Realtors</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Four free, browser-based tools built specifically for real
                estate marketing —{" "}
                <strong>
                  create social media reels, slideshows, property flyers, and
                  branded QR codes
                </strong>{" "}
                from your listing photos in minutes. No design experience
                required.
              </p>
            </div>
            <ul
              className="services-page-hero-stats"
              aria-label="Key free tools stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">100%</span>
                <span className="lbl">Free to use</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">4</span>
                <span className="lbl">Tools available</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">MLS</span>
                <span className="lbl">Ready outputs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="ft-intro-section" aria-labelledby="intro-heading">
        <div className="container">
          <div className="ft-intro-grid">
            <div className="ft-intro-content">
              <span className="section-label">Why These Tools Exist</span>
              <h2 id="intro-heading">
                Real Estate Marketing Tools Built Specifically for Realtors
              </h2>
              <p className="lead speakable-intro">
                Most free design tools are built for everyone — which means
                they&apos;re optimized for no one. Our tools are built exclusively
                for real estate marketing workflows, with outputs sized,
                formatted, and labelled for the exact platforms and contexts
                Calgary realtors use every day.
              </p>
              <p>
                Upload your listing photos, enter your property details, and
                generate professional marketing assets in minutes. No Canva. No
                Premiere. No learning curve. Every tool produces files you can
                use immediately — on social media, in email campaigns, at
                open houses, or on sign riders.
              </p>
              <p>
                The tools are free for everyone — whether or not you&apos;re a
                Photos 4 Real Estate photography client. If you do book
                photography with us, your{" "}
                <Link
                  href="/services/marketing-kit-for-realtors"
                  className="body-link"
                >
                  complete marketing kit
                </Link>{" "}
                (9 reels, 6 websites, 3 flyers, 2 slideshows) is generated
                automatically and delivered with your photos the next day once
                property information is provided — no tool use required.
              </p>
              <div className="ft-client-note">
                <div className="ft-client-note-icon">
                  <FileText size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3>Photos 4 Real Estate photography clients get more</h3>
                  <p>
                    When you book any photography package, your marketing kit
                    is generated automatically from your professional listing
                    photos and delivered the next day alongside your photos once
                    property information is provided — 9 reels, 6 property
                    websites, 3 flyers, and 2 slideshows.{" "}
                    <Link href="/services/marketing-kit-for-realtors">
                      Learn about the full marketing kit →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="ft-intro-visual ft-intro-visual-single">
              <div className="ft-intro-vis-item">
                <Image
                  src={freeToolsImages.introMain}
                  alt="Preview collage of free real estate marketing tools including reels, slideshows, flyers and QR codes"
                  width={900}
                  height={1600}
                  priority
                  sizes="(max-width: 960px) 100vw, 46vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="ft-tools-section" aria-labelledby="tools-heading">
        <div className="container">
          <div className="ft-tools-header">
            <span className="section-label">The Tools</span>
            <h2 id="tools-heading">Four Free Tools — What Each One Does</h2>
          </div>

          {/* REEL GENERATOR */}
          <div className="ft-tool-card" id="reel-generator">
            <div className="ft-tool-card-header">
              <div className="ft-tool-card-header-icon icon-reel">
                <Video size={26} strokeWidth={2} />
              </div>
              <div>
                <div className="ft-tool-num-label">Tool 01</div>
                <h3>Free Social Media Reel Generator</h3>
                <p>
                  Create 3 professional property video reels for Instagram,
                  Facebook &amp; TikTok — instantly from your listing photos
                </p>
              </div>
              <div className="ft-tool-free-tag tag-reel">Free · No account</div>
            </div>
            <div className="ft-tool-card-body">
              <div className="ft-tool-card-info">
                <p>
                  Social media reels are the highest-reach organic content
                  format currently available to Calgary realtors — and they
                  have historically been time-consuming to produce. This tool
                  changes that. Upload your listing photos, and the generator
                  produces three professional vertical video reels ready to post
                  directly on Instagram Reels, Facebook Reels, and TikTok. No
                  editing software. No timeline. No export settings.
                </p>
                <ul className="ft-tool-outputs">
                  <li className="ft-tool-output">
                    <Video size={16} />3 different reel cuts per listing
                    — post one daily for three days
                  </li>
                  <li className="ft-tool-output">
                    <Smartphone size={16} />9:16 vertical format — optimized
                    for Instagram, Facebook &amp; TikTok
                  </li>
                  <li className="ft-tool-output">
                    <Music size={16} />Licensed background music included
                  </li>
                  <li className="ft-tool-output">
                    <Download size={16} />Download as MP4 — post immediately
                    with no further editing
                  </li>
                  <li className="ft-tool-output">
                    <DollarSign size={16} />Works for organic posts and
                    paid social ads
                  </li>
                </ul>
                <div className="ft-tool-specs">
                  <span className="ft-tool-spec">MP4 output</span>
                  <span className="ft-tool-spec">9:16 vertical</span>
                  <span className="ft-tool-spec">Licensed music</span>
                  <span className="ft-tool-spec">3 reels generated</span>
                  <span className="ft-tool-spec">
                    Instagram · Facebook · TikTok
                  </span>
                </div>
                <a
                  href={toolApps.reel}
                  className="btn btn-primary"
                  style={{ background: "#7c3aed" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the free social media reel generator for real estate listings"
                >
                  Open Reel Generator <ExternalLink size={16} />
                </a>
              </div>
              <div className="ft-tool-card-visual">
                <div
                  className="marketing-reel-row"
                  role="group"
                  aria-label="Demo social media reel previews"
                >
                  <div className="marketing-reel-item">
                    <div className="marketing-reel-phone">
                      <video
                        className="marketing-reel-video"
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        aria-label="Demo vertical social media reel preview one"
                      >
                        <source src={`${freeToolsImages.reelVideo1}#t=0.1`} type="video/mp4" />
                      </video>
                    </div>
                    <div className="marketing-reel-tag">Demo Reel 1</div>
                  </div>
                  <div className="marketing-reel-item">
                    <div className="marketing-reel-phone is-secondary">
                      <video
                        className="marketing-reel-video"
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        aria-label="Demo vertical social media reel preview two"
                      >
                        <source src={`${freeToolsImages.reelVideo2}#t=0.1`} type="video/mp4" />
                      </video>
                    </div>
                    <div className="marketing-reel-tag">Demo Reel 2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDESHOW GENERATOR */}
          <div className="ft-tool-card" id="slideshow-generator">
            <div className="ft-tool-card-header">
              <div className="ft-tool-card-header-icon icon-slide">
                <Images size={26} strokeWidth={2} />
              </div>
              <div>
                <div className="ft-tool-num-label">Tool 02</div>
                <h3>Free Slideshow Generator</h3>
                <p>
                  Turn listing photos into a professional animated slideshow
                  video for email, social media, and property websites
                </p>
              </div>
              <div className="ft-tool-free-tag tag-slide">Free · No account</div>
            </div>
            <div className="ft-tool-card-body">
              <div className="ft-tool-card-info">
                <p>
                  A property slideshow is the professional middle ground between
                  a static photo and a full cinematic video — it sequences your
                  listing photos with smooth transitions and background music
                  into a short MP4 video that performs well in email campaigns,
                  as a pinned post on your Facebook page, or embedded on a
                  property website. It also works well on a laptop or tablet at
                  an open house.
                </p>
                <ul className="ft-tool-outputs">
                  <li className="ft-tool-output">
                    <Video size={16} />Animated transitions between all
                    your listing photos
                  </li>
                  <li className="ft-tool-output">
                    <Monitor size={16} />16:9 horizontal format — ideal for
                    email and desktop viewing
                  </li>
                  <li className="ft-tool-output">
                    <Music size={16} />Background music included
                  </li>
                  <li className="ft-tool-output">
                    <Download size={16} />Download as MP4 — embed anywhere or
                    share as a link
                  </li>
                  <li className="ft-tool-output">
                    <Home size={16} />Perfect for open house displays on a
                    laptop or tablet
                  </li>
                </ul>
                <div className="ft-tool-specs">
                  <span className="ft-tool-spec">MP4 output</span>
                  <span className="ft-tool-spec">16:9 horizontal</span>
                  <span className="ft-tool-spec">Animated transitions</span>
                  <span className="ft-tool-spec">Licensed music</span>
                  <span className="ft-tool-spec">Email · Social · Website</span>
                </div>
                <a
                  href={toolApps.slideshow}
                  className="btn btn-primary"
                  style={{ background: "#0284c7" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the free real estate slideshow generator"
                >
                  Open Slideshow Generator <ExternalLink size={16} />
                </a>
              </div>
              <div className="ft-tool-card-visual">
                <div className="marketing-slideshow-mock">
                  <div className="marketing-browser-bar is-compact" aria-hidden="true">
                    <span className="marketing-browser-dot is-red" aria-hidden="true" />
                    <span className="marketing-browser-dot is-amber" aria-hidden="true" />
                    <span className="marketing-browser-dot is-green" aria-hidden="true" />
                    <span className="marketing-slideshow-label">
                      Listing Slideshow — 123 Main St Calgary
                    </span>
                  </div>
                  <video
                    className="marketing-slideshow-video"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    aria-label="Real estate property slideshow video example"
                  >
                    <source src={`${freeToolsImages.slideshowVideo}#t=0.1`} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* FLYER GENERATOR */}
          <div className="ft-tool-card" id="flyer-generator">
            <div className="ft-tool-card-header">
              <div className="ft-tool-card-header-icon icon-flyer">
                <FileText size={26} strokeWidth={2} />
              </div>
              <div>
                <div className="ft-tool-num-label">Tool 03</div>
                <h3>Free Property Flyer Generator</h3>
                <p>
                  Generate 3 print-ready PDF property flyers instantly — for
                  open houses, email campaigns, and direct mail
                </p>
              </div>
              <div className="ft-tool-free-tag tag-flyer">Free · No account</div>
            </div>
            <div className="ft-tool-card-body">
              <div className="ft-tool-card-info">
                <p>
                  A professionally designed property flyer is still one of the
                  most effective tools at an open house — and the most common
                  reason realtors don&apos;t have them is the time required to
                  design one. This tool eliminates that friction. Upload your
                  listing photos, enter your property details and contact info,
                  and generate three different PDF flyer designs in minutes.
                </p>
                <ul className="ft-tool-outputs">
                  <li className="ft-tool-output">
                    <FileText size={16} />3 different flyer designs per listing
                    — choose the best fit
                  </li>
                  <li className="ft-tool-output">
                    <Printer size={16} />300dpi print-ready PDF — suitable for
                    professional printing
                  </li>
                  <li className="ft-tool-output">
                    <Mail size={16} />PDF also works attached to email — no
                    print required
                  </li>
                  <li className="ft-tool-output">
                    <Tag size={16} />Add your logo, name, phone, email,
                    and brokerage
                  </li>
                  <li className="ft-tool-output">
                    <QrCode size={16} />Optionally include a QR code
                    linking to your property website
                  </li>
                </ul>
                <div className="ft-tool-specs">
                  <span className="ft-tool-spec">PDF output</span>
                  <span className="ft-tool-spec">300dpi print-ready</span>
                  <span className="ft-tool-spec">3 designs generated</span>
                  <span className="ft-tool-spec">Your branding included</span>
                  <span className="ft-tool-spec">Open houses · Email · Print</span>
                </div>
                <a
                  href={toolApps.flyer}
                  className="btn btn-primary"
                  style={{ background: "#d97706" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the free property flyer generator for real estate listings"
                >
                  Open Flyer Generator <ExternalLink size={16} />
                </a>
              </div>
              <div className="ft-tool-card-visual">
                <div className="marketing-flyer-single">
                  <Image
                    src={freeToolsImages.flyerPreview}
                    alt="Preview of PDF property flyers generated by the free tool"
                    width={1400}
                    height={1050}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* QR CODE GENERATOR */}
          <div className="ft-tool-card" id="qr-generator">
            <div className="ft-tool-card-header">
              <div className="ft-tool-card-header-icon icon-qr">
                <QrCode size={26} strokeWidth={2} />
              </div>
              <div>
                <div className="ft-tool-num-label">Tool 04</div>
                <h3>Free Fancy QR Code Generator</h3>
                <p>
                  Create branded QR codes with your logo, custom colours, and
                  dot styles for sign riders, flyers, and print ads
                </p>
              </div>
              <div className="ft-tool-free-tag tag-qr">Free · No account</div>
            </div>
            <div className="ft-tool-card-body">
              <div className="ft-tool-card-info">
                <p>
                  Most QR code generators produce plain black-and-white squares.
                  Ours does more — generate 3 standard QR codes and 1 fully
                  customizable branded QR code where you can add your logo or
                  headshot, adjust colours to match your branding, and change the
                  dot style. The result is a QR code that looks like it was
                  designed, not auto-generated — ideal for sign riders,
                  property flyers, and print ads.
                </p>
                <ul className="ft-tool-outputs">
                  <li className="ft-tool-output">
                    <QrCode size={16} />3 standard QR codes + 1 fully
                    branded, customizable QR code
                  </li>
                  <li className="ft-tool-output">
                    <ImageIcon size={16} />Add your logo or headshot to
                    the centre of the QR code
                  </li>
                  <li className="ft-tool-output">
                    <Palette size={16} />Customize colours, dot style,
                    and corner shapes
                  </li>
                  <li className="ft-tool-output">
                    <Download size={16} />Download as high-resolution PNG —
                    print-ready
                  </li>
                  <li className="ft-tool-output">
                    <Tag size={16} />Ideal for sign riders, property
                    flyers, and print ads
                  </li>
                </ul>
                <div className="ft-tool-specs">
                  <span className="ft-tool-spec">PNG output</span>
                  <span className="ft-tool-spec">High-resolution</span>
                  <span className="ft-tool-spec">Logo/headshot support</span>
                  <span className="ft-tool-spec">
                    Custom colours &amp; dot style
                  </span>
                  <span className="ft-tool-spec">Sign riders · Flyers · Print</span>
                </div>
                <a
                  href={toolApps.qr}
                  className="btn btn-primary"
                  style={{ background: "#0d9488" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the free QR code generator for realtors"
                >
                  Open QR Code Generator <ExternalLink size={16} />
                </a>
              </div>
              <div className="ft-tool-card-visual">
                <div
                  className="ft-qr-mock"
                  role="img"
                  aria-label="QR code generator output examples"
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "12px",
                    }}
                  >
                    3 Standard + 1 Branded
                  </div>
                  <div className="ft-qr-grid">
                    <div className="ft-qr-item">
                      <Image
                        src={freeToolsImages.qrProfessional}
                        alt="Professional style QR code preview"
                        width={1020}
                        height={1024}
                        sizes="(max-width: 1024px) 36vw, 152px"
                        className="ft-qr-preview"
                        loading="lazy"
                      />
                      <div className="ft-qr-sublabel">Standard</div>
                    </div>
                    <div className="ft-qr-item">
                      <Image
                        src={freeToolsImages.qrSocial}
                        alt="Social style QR code preview"
                        width={1020}
                        height={1024}
                        sizes="(max-width: 1024px) 36vw, 152px"
                        className="ft-qr-preview"
                        loading="lazy"
                      />
                      <div className="ft-qr-sublabel">Standard</div>
                    </div>
                    <div className="ft-qr-item">
                      <Image
                        src={freeToolsImages.qrModern}
                        alt="Modern style QR code preview"
                        width={1018}
                        height={1024}
                        sizes="(max-width: 1024px) 36vw, 152px"
                        className="ft-qr-preview"
                        loading="lazy"
                      />
                      <div className="ft-qr-sublabel">Standard</div>
                    </div>
                    <div className="ft-qr-item is-branded">
                      <Image
                        src={freeToolsImages.qrBranded}
                        alt="Branded QR code preview with logo treatment"
                        width={1020}
                        height={1024}
                        sizes="(max-width: 1024px) 36vw, 152px"
                        className="ft-qr-preview"
                        loading="lazy"
                      />
                      <div className="ft-qr-sublabel is-branded">
                        Branded ✦
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text-light)",
                      marginTop: "8px",
                      lineHeight: 1.5,
                    }}
                  >
                    Add your logo · Custom colours · Custom dot style
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section
        className="ft-compare-section"
        aria-labelledby="compare-heading"
      >
        <div className="container">
          <div className="ft-compare-header">
            <span className="section-label">Free Tools vs. Marketing Kit</span>
            <h2 id="compare-heading">
              What&apos;s the Difference Between the Free Tools &amp; the
              Marketing Kit?
            </h2>
            <p>
              Two ways to get your marketing materials — use the tools yourself
              any time, or have everything generated automatically when you book
              photography.
            </p>
          </div>
          <div className="ft-compare-grid">
            <div className="ft-compare-card free-card">
              <span className="ft-compare-card-label">
                Free Self-Serve Tools
              </span>
              <h3>Use the Free Tools</h3>
              <p className="sub">
                Generate marketing materials yourself using any photos —
                available to all Calgary realtors, any time, with no booking
                required.
              </p>
              <ul className="ft-compare-items">
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Open to all realtors — no booking required
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Use any photos you already have
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Reel generator — 3 reels per run
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Slideshow generator — 1 slideshow per run
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Flyer generator — 3 flyers per run
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  QR code generator — 3 standard + 1 branded
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Customize and regenerate any time
                </li>
              </ul>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href={toolApps.reel}
                  className="btn btn-primary"
                  style={{
                    fontSize: "13px",
                    padding: "10px 18px",
                    background: "#7c3aed",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the free social media reel generator for Calgary realtors"
                >
                  Reels
                </a>
                <a
                  href={toolApps.slideshow}
                  className="btn btn-primary"
                  style={{
                    fontSize: "13px",
                    padding: "10px 18px",
                    background: "#0284c7",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the free property slideshow generator for Calgary realtors"
                >
                  Slideshow
                </a>
                <a
                  href={toolApps.flyer}
                  className="btn btn-primary"
                  style={{
                    fontSize: "13px",
                    padding: "10px 18px",
                    background: "#d97706",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the free property flyer generator for Calgary realtors"
                >
                  Flyers
                </a>
                <a
                  href={toolApps.qr}
                  className="btn btn-primary"
                  style={{
                    fontSize: "13px",
                    padding: "10px 18px",
                    background: "#0d9488",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the free QR code generator for Calgary realtors"
                >
                  QR Codes
                </a>
              </div>
            </div>

            <div className="ft-compare-card kit-card">
              <span className="ft-compare-card-label">
                Auto-Delivered with Every Package
              </span>
              <h3>The Marketing Kit</h3>
              <p className="sub">
                When you book photography, your full marketing kit is generated
                automatically from your professional listing photos and delivered
                next day once property information is provided — no tool use
                required.
              </p>
              <ul className="ft-compare-items">
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Included free with every photography package
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Uses your professional listing photos automatically
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <strong>9 social media reels</strong> — 9 different cuts
                  per listing
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <Link href="/single-property-websites"><strong>6 branded property websites</strong><span className="sr-only"> — free single property website designs for Calgary realtors</span></Link> — shareable
                  URLs
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <strong>3 property flyers</strong> — print-ready PDFs
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <strong>2 animated slideshows</strong>
                </li>
                <li className="ft-compare-item">
                  <div className="ft-ci-check">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Delivered next day (property information must be provided)
                </li>
              </ul>
              <Link
                href="/services/marketing-kit-for-realtors"
                className="btn btn-primary"
              >
                See the Full Marketing Kit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY USE */}
      <section className="ft-why-section" aria-labelledby="why-heading">
        <div className="container">
          <div className="ft-why-header">
            <span className="section-label">
              Why Realtors Use These Tools
            </span>
            <h2 id="why-heading">
              Built for Real Estate. Not Adapted from Generic Software.
            </h2>
            <p>
              Every output format, every template, and every feature is
              designed around real estate marketing workflows.
            </p>
          </div>
          <div className="ft-why-grid">
            <div className="ft-why-card">
              <div
                className="ft-why-icon"
                style={{ background: "var(--navy-light)" }}
              >
                <Building2
                  size={24}
                  strokeWidth={2}
                  style={{ color: "var(--navy)" }}
                />
              </div>
              <h3>Built for Real Estate Specifically</h3>
              <p>
                Every tool is designed around real estate listing workflows —
                not adapted from general design software. The output
                formats, sizing, and templates are calibrated for MLS
                marketing, social media, email, and print use cases that
                realtors encounter every day.
              </p>
            </div>
            <div className="ft-why-card">
              <div
                className="ft-why-icon"
                style={{ background: "var(--brick-light)" }}
              >
                <Zap
                  size={24}
                  strokeWidth={2}
                  style={{ color: "var(--brick)" }}
                />
              </div>
              <h3>Minutes, Not Hours</h3>
              <p>
                Generating a social media reel in Premiere takes hours of
                learning and editing. Designing a property flyer in Canva takes
                30–45 minutes per listing. Our tools produce the same outputs
                in under 3 minutes — from photo upload to
                downloadable file.
              </p>
            </div>
            <div className="ft-why-card">
              <div
                className="ft-why-icon"
                style={{ background: "var(--green-light)" }}
              >
                <Smartphone
                  size={24}
                  strokeWidth={2}
                  style={{ color: "var(--green)" }}
                />
              </div>
              <h3>Outputs That Actually Perform</h3>
              <p>
                Social media reels are in the correct 9:16 vertical format for
                Instagram and TikTok. Flyers are 300dpi print-ready PDFs. QR
                codes are high-resolution PNGs built for print. Every output is
                correctly sized and formatted for its intended use from day
                one.
              </p>
            </div>
            <div className="ft-why-card">
              <div
                className="ft-why-icon"
                style={{ background: "var(--navy-light)" }}
              >
                <Palette
                  size={24}
                  strokeWidth={2}
                  style={{ color: "var(--navy)" }}
                />
              </div>
              <h3>Professional Quality — No Designer Required</h3>
              <p>
                The tools are designed so realtors with zero design or video
                editing experience get polished, professional-quality outputs.
                No tutorials, no learning curve — upload, customize,
                download.
              </p>
            </div>
            <div className="ft-why-card">
              <div
                className="ft-why-icon"
                style={{ background: "var(--brick-light)" }}
              >
                <Unlock
                  size={24}
                  strokeWidth={2}
                  style={{ color: "var(--brick)" }}
                />
              </div>
              <h3>Genuinely Free — No Catch</h3>
              <p>
                No free trial. No watermarked outputs you have to pay to remove.
                No subscription to unlock &quot;full features.&quot; All four
                tools are completely free, with no account required and no hidden
                costs — because we think free tools should actually be free.
              </p>
            </div>
            <div className="ft-why-card">
              <div
                className="ft-why-icon"
                style={{ background: "var(--green-light)" }}
              >
                <TrendingUp
                  size={24}
                  strokeWidth={2}
                  style={{ color: "var(--green)" }}
                />
              </div>
              <h3>Growing Toolkit — More Coming</h3>
              <p>
                We&apos;re continuously building new tools based on what Calgary
                realtors actually need. Bookmark this page — new tools are
                added regularly. Upcoming tools include a property website
                generator, a virtual tour embed tool, and a listing comparison
                generator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq
        heading="Free Tools — Frequently Asked Questions"
        faqs={freeToolsFaqs}
        intro={
          <>
            Common questions about the free marketing tools. More questions?
            Call us at{" "}
            <a
              href={siteConfig.phoneHref}
              className="faq-phone-link"
              aria-label={`Call Photos 4 Real Estate at ${siteConfig.phone}`}
            >
              {siteConfig.phone}
            </a>
            .
          </>
        }
        allFaqsLabelSuffix="free marketing tools for Calgary realtors"
      />

      {/* CTA */}
      <section className="cta-section" aria-labelledby="ft-cta-heading">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-content">
              <h2 id="ft-cta-heading">
                Jump Into a Tool —{" "}
                <em className="cta-highlight">
                  or Book Photography and Get Your Kit Automatically
                </em>
              </h2>
              <p>
                Use the free tools now with any photos you have. Or book a
                photography package and receive your complete marketing kit — 9
                reels, 3 websites, 3 flyers, and 2 slideshows — delivered next
                day with your listing photos once property information is
                provided, automatically and at no extra cost.
              </p>
              <div
                className="cta-actions"
                style={{ marginTop: "24px" }}
              >
                <a
                  href="https://app.photos4realestate.ca/book/cmfwsiyl30000jo04z3lcndl3"
                  className="btn btn-primary"
                >
                  Book Photography <ArrowRight size={16} />
                </a>
                <Link
                  href="/services/marketing-kit-for-realtors"
                  className="btn btn-outline"
                >
                  See the Marketing Kit <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div
              className="cta-tools"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <a
                href={toolApps.reel}
                className="cta-tool-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="cta-tool-btn-icon"
                  style={{ background: "rgba(124,58,237,0.3)" }}
                >
                  <Video size={18} />
                </div>
                <div>
                  <div
                    style={{ fontSize: "13px", fontWeight: 600 }}
                  >
                    Social Media Reel Generator
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    Create 3 vertical reels — free
                  </div>
                </div>
                <div className="cta-tool-arrow">
                  <ArrowRight size={16} />
                </div>
              </a>
              <a
                href={toolApps.slideshow}
                className="cta-tool-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="cta-tool-btn-icon"
                  style={{ background: "rgba(2,132,199,0.3)" }}
                >
                  <Images size={18} />
                </div>
                <div>
                  <div
                    style={{ fontSize: "13px", fontWeight: 600 }}
                  >
                    Slideshow Generator
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    Animated photo slideshow — free
                  </div>
                </div>
                <div className="cta-tool-arrow">
                  <ArrowRight size={16} />
                </div>
              </a>
              <a
                href={toolApps.flyer}
                className="cta-tool-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="cta-tool-btn-icon"
                  style={{ background: "rgba(217,119,6,0.3)" }}
                >
                  <FileText size={18} />
                </div>
                <div>
                  <div
                    style={{ fontSize: "13px", fontWeight: 600 }}
                  >
                    Property Flyer Generator
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    3 print-ready PDF flyers — free
                  </div>
                </div>
                <div className="cta-tool-arrow">
                  <ArrowRight size={16} />
                </div>
              </a>
              <a
                href={toolApps.qr}
                className="cta-tool-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="cta-tool-btn-icon"
                  style={{ background: "rgba(13,148,136,0.3)" }}
                >
                  <QrCode size={18} />
                </div>
                <div>
                  <div
                    style={{ fontSize: "13px", fontWeight: 600 }}
                  >
                    QR Code Generator
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    Branded QR codes — free
                  </div>
                </div>
                <div className="cta-tool-arrow">
                  <ArrowRight size={16} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <JsonLd id="ld-faq-free-tools" data={faqSchema} />
      <JsonLd id="ld-itemlist-free-tools" data={itemListSchema} />
      <JsonLd id="ld-speakable-free-tools" data={speakableSchema} />
    </>
  );
}
