import type { Metadata } from "next";
import Image from "next/image";
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
  ExternalLink,
  Eye,
  ImageIcon,
  Palette,
  Printer,
  QrCode,
  ScanLine,
  Share2,
  Sparkles,
  Upload,
  Wand2,
} from "lucide-react";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/free-tools/qr-code-generator`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const generatorUrl = "https://app.photos4realestate.ca/free-qr";
const marketingKitUrl = "/services/marketing-kit-for-realtors";
const reelGeneratorUrl = "/free-tools/reel-generator";
const slideshowGeneratorUrl = "/free-tools/slideshow-generator";
const flyerGeneratorUrl = "/free-tools/flyer-generator";

const qrExamples = [
  {
    src: "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/qr-professional.png",
    alt: "Professional style QR code example for real estate marketing materials",
    label: "Professional",
  },
  {
    src: "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/qr-social.png",
    alt: "Social style QR code example for real estate social media and listing promotion",
    label: "Social",
  },
  {
    src: "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/qr-modern-1-1018x1024.webp",
    alt: "Modern style QR code example with customized dot styling for real estate branding",
    label: "Modern",
  },
  {
    src: "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/qr-professional-1-1020x1024.webp",
    alt: "Branded QR code example with centered logo treatment for real estate marketing",
    label: "Branded",
  },
] as const;

const title = "Free QR Code Generator Calgary | Photos 4 Real Estate";
const description =
  "Create free branded QR codes for Calgary real estate listings. Generate 3 standard QR codes and 1 custom branded QR code for flyers, sign riders, open houses, and print marketing.";

const qrFaqs: FaqItem[] = [
  {
    q: "What is the free QR code generator for realtors?",
    a: "The free QR code generator is an online tool that helps realtors create professional QR codes for real estate marketing. It generates both standard and branded QR codes that can link to property websites, virtual tours, MLS listings, contact pages, and other digital listing assets.",
  },
  {
    q: "Is the QR code generator free to use?",
    a: "Yes. The tool is completely free to use. No credit card is required, and there is no obligation to book a photography package.",
  },
  {
    q: "How many QR codes does the free tool generate?",
    a: "The free tool generates four QR codes per use: three standard QR codes and one fully customizable branded QR code.",
  },
  {
    q: "What customization options are available?",
    a: "The branded QR code allows you to change foreground and background colours, adjust dot and corner styles, and place a logo or headshot in the center. This helps the QR code match your branding while staying functional.",
  },
  {
    q: "What can I link the QR codes to?",
    a: "QR codes can link to property websites, MLS listings, virtual tours, social media profiles, contact pages, brochures, open house pages, or any other web URL relevant to the listing.",
  },
  {
    q: "Are the QR codes print-ready?",
    a: "Yes. The QR codes are generated in high resolution and are suitable for both print and digital marketing use.",
  },
  {
    q: "Where can I use these QR codes?",
    a: "QR codes work well on property flyers, feature sheets, sign riders, window displays, open house materials, postcards, and other printed or digital marketing pieces.",
  },
  {
    q: "Do QR codes expire?",
    a: "No. The QR codes do not expire as long as the URL you link to remains active.",
  },
  {
    q: "Do I need any special software to use the QR codes?",
    a: "No. The QR codes are ready to use immediately after download and can be added to your marketing materials without additional software.",
  },
  {
    q: "Do you offer other free real estate marketing tools?",
    a: `Yes. You can also use the <a href="${reelGeneratorUrl}">free real estate reel generator</a>, <a href="${slideshowGeneratorUrl}">free slideshow generator</a>, and <a href="${flyerGeneratorUrl}">property flyer generator</a>. <a href="/free-tools">See all free real estate marketing tools &rarr;</a>`,
  },
  {
    q: "How do I get access to more advanced real estate marketing assets?",
    a: `Additional marketing materials — including social media reels, slideshows, flyers, and property websites — are included with Photos 4 Real Estate photography packages once property information is provided. <a href="${marketingKitUrl}">Learn more about the marketing kit &rarr;</a>`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(qrFaqs),
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Free QR Code Generator for Realtors",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web browser",
  url: generatorUrl,
  description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  publisher: { "@id": `${siteConfig.url}/#business` },
  featureList: [
    "3 standard QR codes",
    "1 branded customizable QR code",
    "Custom colours and dot styles",
    "Logo or headshot placement in the center",
  ],
};

const imageSchema = qrExamples.map((qr, index) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: `Generated QR code example ${index + 1}`,
  description: qr.alt,
  contentUrl: qr.src,
  thumbnailUrl: qr.src,
  creator: { "@id": `${siteConfig.url}/#business` },
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
          alt: "Free QR code generator Calgary — Photos 4 Real Estate",
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

export default function QrCodeGeneratorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Free Tools", href: "/free-tools" },
          { label: "QR Code Generator" },
        ]}
        jsonLdId="ld-breadcrumb-qr-generator"
      />

      <section className="services-page-hero" aria-labelledby="qr-generator-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Free Tool · QR Codes</div>
              <h1 id="qr-generator-hero-title">
                Free QR Code Generator for <em>Calgary Realtors</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Create <strong>three standard QR codes and one branded QR code</strong> for your real estate marketing in minutes. Use them on flyers, sign riders, open house materials, feature sheets, and digital campaigns.
              </p>
              <div className="tool-detail-hero-actions">
                <a href={generatorUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Generate Your QR Codes Now
                  <span className="sr-only"> for Calgary real estate marketing</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
                <Link href="/free-tools" className="btn btn-outline">
                  See All Free Tools<span className="sr-only"> for Calgary real estate marketing</span>
                </Link>
              </div>
            </div>
            <ul className="services-page-hero-stats" aria-label="QR code generator highlights">
              <li className="services-page-hero-stat"><span className="num">4</span><span className="lbl">QR codes per use</span></li>
              <li className="services-page-hero-stat"><span className="num">1</span><span className="lbl">Branded option</span></li>
              <li className="services-page-hero-stat"><span className="num">PNG</span><span className="lbl">Print-ready files</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tool-detail-section" aria-labelledby="what-is-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">What It Does</span>
              <h2 id="what-is-heading">What Is the Free QR Code Generator?</h2>
              <p className="lead speakable-intro">
                The free QR code generator is a browser-based tool that creates real estate QR codes for listings, marketing materials, and property promotion.
              </p>
              <p>
                You can generate three standard QR codes plus one branded QR code with custom styling. The tool is designed for realtors who want faster, cleaner ways to connect printed marketing with digital property content.
              </p>
              <p>
                Use the generated QR codes to direct buyers to a property website, MLS listing, virtual tour, social profile, contact page, brochure, or open house landing page.
              </p>
            </div>
            <div className="tool-detail-card-list" aria-label="QR code generator benefits">
              {[
                [QrCode, "4 QR codes generated", "Get three standard QR codes plus one branded customized option."],
                [Palette, "Brand customization", "Adjust colours, dot styles, and corners to match your branding."],
                [ImageIcon, "Logo or headshot support", "Place a logo or headshot in the centre of the branded QR code."],
                [Printer, "Print-ready output", "Use the downloaded files on sign riders, flyers, and other printed materials."],
              ].map(([Icon, cardTitle, text]) => (
                <div className="tool-detail-mini-card" key={String(cardTitle)}>
                  <div className="ft-tool-card-header-icon icon-qr"><Icon size={22} aria-hidden="true" /></div>
                  <div><h3>{cardTitle as string}</h3><p>{text as string}</p></div>
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
            <h2 id="examples-heading">What Do the Generated QR Codes Look Like?</h2>
            <p>These examples show the mix of standard and branded QR code styles you can create for real estate marketing.</p>
          </div>
          <div className="tool-qr-preview">
            <div className="ft-qr-grid" aria-label="Generated QR code examples">
              {qrExamples.map((qr) => (
                <figure
                  className={`ft-qr-item${qr.label === "Branded" ? " is-branded" : ""}`}
                  key={qr.src}
                >
                  <Image
                    src={qr.src}
                    alt={qr.alt}
                    width={1020}
                    height={1024}
                    sizes="(max-width: 1024px) 42vw, 220px"
                    className="ft-qr-preview"
                    loading="lazy"
                  />
                  <figcaption className={`ft-qr-sublabel${qr.label === "Branded" ? " is-branded" : ""}`}>
                    {qr.label}
                    {qr.label === "Branded" ? " ✦" : ""}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tool-detail-section" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="tool-detail-centered"><span className="section-label">How It Works</span><h2 id="how-it-works-heading">How Does the QR Code Generator Work?</h2></div>
          <div className="tool-detail-steps">
            {[
              [Upload, "Add your destination URL", "Paste the property website, MLS listing, virtual tour, or landing page you want people to visit."],
              [Wand2, "Customize the branded code", "Adjust colours and styles, and add your logo or headshot if you want a branded version."],
              [ScanLine, "Download and use", "Save the QR codes and place them on your print or digital real estate marketing materials."],
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

      <section className="tool-detail-section tool-detail-section-muted" aria-labelledby="best-uses-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Best Uses</span>
            <h2 id="best-uses-heading">Where Should Realtors Use QR Codes?</h2>
            <p>QR codes work best when they bridge physical marketing materials with the online property information buyers actually want to open.</p>
          </div>
          <div className="tool-detail-steps">
            {[
              [Printer, "Sign riders and flyers", "Send people from a sign or flyer directly to the listing website or virtual tour."],
              [Share2, "Open house materials", "Use QR codes on feature sheets, posters, window displays, and open house signage."],
              [Eye, "Buyer convenience", "Reduce friction by making it easy to scan and view the listing from a phone in seconds."],
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
            <h2 id="kit-compare-heading">What Do You Get Beyond the Free QR Code Generator?</h2>
            <p>The free QR generator helps connect your print marketing to online property content. Photography clients get the digital marketing assets those QR codes can point to.</p>
          </div>
          <div className="ft-compare-grid">
            <div className="ft-compare-card free-card"><span className="ft-compare-card-label">Free Self-Serve Tool</span><h3>4 QR Codes You Generate</h3><p className="sub">Create three standard QR codes and one branded QR code for your real estate marketing materials.</p><ul className="ft-compare-items"><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>No account required</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Custom colours and styling</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Use on signs, flyers, feature sheets, and open house materials</li></ul><a href={generatorUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Open QR Code Generator<span className="sr-only"> to create free Calgary real estate QR codes</span> <ExternalLink size={16} aria-hidden="true" /></a></div>
            <div className="ft-compare-card kit-card"><span className="ft-compare-card-label">With Photography Packages</span><h3>Full Marketing Assets to Link To</h3><p className="sub">Every Photos 4 Real Estate photography package includes digital listing assets your QR codes can promote once property information is provided.</p><ul className="ft-compare-items"><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div><strong>3 property websites</strong> to link from print marketing</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>9 reels, 3 flyers, 2 slideshows</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Delivered next day once property information is provided</li></ul><Link href={marketingKitUrl} className="btn btn-primary">See the Marketing Kit<span className="sr-only"> for Calgary realtors</span></Link></div>
          </div>
        </div>
      </section>

      <Faq
        heading="Free QR Code Generator — Frequently Asked Questions"
        faqs={qrFaqs}
        intro={<>Common questions about creating free QR codes for property flyers, sign riders, open houses, and other real estate marketing materials.</>}
        allFaqsLabelSuffix="the free real estate QR code generator"
        sectionClassName="faq-section-white"
      />

      <Cta
        eyebrow="Ready to Create QR Codes?"
        title="Generate Real Estate QR Codes for Free"
        description={
          <>
            Create standard and branded QR codes for flyers, sign riders,
            feature sheets, open houses, and digital real estate marketing.
            No account, no subscription, no extra software.
          </>
        }
        primaryHref={generatorUrl}
        primaryLabel="Open QR Code Generator"
        primarySrSuffix=" to create Calgary real estate QR codes"
        primaryTargetBlank
        secondaryHref={marketingKitUrl}
        secondaryLabel="See the Marketing Kit"
        secondarySrSuffix=" included with Calgary real estate photography packages"
      />

      <JsonLd id="ld-faq-qr-generator" data={faqSchema} />
      <JsonLd id="ld-software-qr-generator" data={softwareSchema} />
      {imageSchema.map((schema, index) => <JsonLd key={schema.contentUrl} id={`ld-image-qr-${index + 1}`} data={schema} />)}
      <JsonLd id="ld-speakable-qr-generator" data={speakableSchema} />
    </>
  );
}