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
  Download,
  ExternalLink,
  FileText,
  Mail,
  Palette,
  Printer,
  Send,
  Share2,
  Sparkles,
  Upload,
} from "lucide-react";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/free-tools/flyer-generator`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const generatorUrl = "https://app.photos4realestate.ca/free-flyers";
const marketingKitUrl = "/services/marketing-kit-for-realtors";
const reelGeneratorUrl = "/free-tools/reel-generator";
const slideshowGeneratorUrl = "/free-tools/slideshow-generator";
const qrCodeGeneratorUrl = "/free-tools/qr-code-generator";

const flyerExamples = [
  {
    src: "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/PDF-1.jpg",
    alt: "Generated real estate flyer example with property photo, listing details, and agent branding",
    label: "Flyer Design 1",
  },
  {
    src: "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/PDF-2.jpg",
    alt: "Generated property flyer example with listing photos and printable real estate layout",
    label: "Flyer Design 2",
  },
  {
    src: "https://cdn.photos4realestate.ca/p4re-static-media/free-tools/PDF-3.jpg",
    alt: "Generated real estate PDF flyer example for open houses and digital sharing",
    label: "Flyer Design 3",
  },
] as const;

const title = "Free Property Flyer Generator Calgary | Photos 4 Real Estate";
const description =
  "Create 3 free real estate flyers for Calgary listings. Generate print-ready PDF property flyers for open houses, email, social media, and client presentations. Try it free today.";

const flyerFaqs: FaqItem[] = [
  {
    q: "What is the free property flyer generator?",
    a: "The free property flyer generator is an online tool that lets realtors create professional, print-ready PDF flyers from listing photos and property details without graphic design software.",
  },
  {
    q: "Is the property flyer generator free to use?",
    a: "Yes. The tool is free to use with no credit card, no account requirement, and no obligation to book a Photos 4 Real Estate photography package.",
  },
  {
    q: "How many flyers does the free tool generate?",
    a: "The free tool generates three professionally designed property flyers, each with a different layout and style so you can choose the best fit for the listing.",
  },
  {
    q: "Are the flyers print-ready?",
    a: "Yes. The flyers are designed as high-resolution PDF files suitable for professional printing, open house handouts, email attachments, and digital sharing.",
  },
  {
    q: "Can I use the flyers digitally?",
    a: "Yes. The flyers can be used for email marketing, property websites, social media posts, client presentations, and buyer follow-up materials.",
  },
  {
    q: "Do I need Canva, InDesign, or a designer?",
    a: "No. Upload your photos, enter the property information, and the tool generates the flyer designs automatically. You do not need Canva, Adobe InDesign, Photoshop, or design experience.",
  },
  {
    q: "How long does it take to generate the flyers?",
    a: "Most flyers can be generated within minutes after submitting your listing photos, property information, and contact details.",
  },
  {
    q: "What is the difference between this free tool and the marketing kit?",
    a: `The free tool lets any realtor generate three self-serve property flyers. Every Photos 4 Real Estate photography package includes 3 property flyers plus 9 social media reels, 3 property websites, and 2 slideshows once property information is provided. <a href="${marketingKitUrl}">Learn more about the marketing kit &rarr;</a>`,
  },
  {
    q: "Do you offer other free real estate marketing tools?",
    a: `Yes. You can also use the <a href="${reelGeneratorUrl}">free real estate reel generator</a>, <a href="${slideshowGeneratorUrl}">free slideshow generator</a>, and <a href="${qrCodeGeneratorUrl}">QR code generator</a>. <a href="/free-tools">See all free real estate marketing tools &rarr;</a>`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(flyerFaqs),
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Free Property Flyer Generator",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web browser",
  url: generatorUrl,
  description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  publisher: { "@id": `${siteConfig.url}/#business` },
  featureList: [
    "Generates 3 property flyer designs",
    "Print-ready PDF flyer output",
    "Layouts for open houses, email, social media, and client presentations",
    "No design software required",
  ],
};

const imageSchema = flyerExamples.map((flyer, index) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: `Generated real estate property flyer example ${index + 1}`,
  description: flyer.alt,
  contentUrl: flyer.src,
  thumbnailUrl: flyer.src,
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
          alt: "Free property flyer generator Calgary — Photos 4 Real Estate",
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

export default function FlyerGeneratorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Free Tools", href: "/free-tools" },
          { label: "Flyer Generator" },
        ]}
        jsonLdId="ld-breadcrumb-flyer-generator"
      />

      <section className="services-page-hero" aria-labelledby="flyer-generator-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Free Tool · Property Flyers</div>
              <h1 id="flyer-generator-hero-title">
                Free Property Flyer Generator for <em>Calgary Realtors</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Create <strong>three professional, print-ready real estate flyers</strong> from your listing photos and property details in minutes. Use them for open houses, email marketing, social media, and client presentations.
              </p>
              <div className="tool-detail-hero-actions">
                <a href={generatorUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Generate Your Flyers Now
                  <span className="sr-only"> for Calgary real estate listing marketing</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
                <Link href="/free-tools" className="btn btn-outline">
                  See All Free Tools<span className="sr-only"> for Calgary real estate marketing</span>
                </Link>
              </div>
            </div>
            <ul className="services-page-hero-stats" aria-label="Flyer generator highlights">
              <li className="services-page-hero-stat"><span className="num">3</span><span className="lbl">Flyer designs</span></li>
              <li className="services-page-hero-stat"><span className="num">PDF</span><span className="lbl">Print-ready output</span></li>
              <li className="services-page-hero-stat"><span className="num">0</span><span className="lbl">Design software</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tool-detail-section" aria-labelledby="what-is-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">What It Does</span>
              <h2 id="what-is-heading">What Is the Free Property Flyer Generator?</h2>
              <p className="lead speakable-intro">
                The free property flyer generator is a browser-based tool that turns listing photos, property details, and agent contact information into polished real estate flyer PDFs.
              </p>
              <p>
                Instead of starting from a blank Canva file or waiting on a designer, you can generate three flyer layouts automatically. Each design is built for real estate listing marketing and can be printed or shared digitally.
              </p>
              <p>
                Use the flyers at open houses, in buyer follow-ups, in listing presentations, in email campaigns, or as a quick downloadable handout for interested buyers.
              </p>
            </div>
            <div className="tool-detail-card-list" aria-label="Flyer generator benefits">
              {[
                [FileText, "3 flyer layouts", "Generate three different designs for the same listing."],
                [Printer, "Print-ready PDFs", "Use flyers for open houses, feature sheets, and professional printing."],
                [Mail, "Digital sharing", "Attach PDFs to emails or use them in buyer follow-up campaigns."],
                [Palette, "No design software", "No Canva, InDesign, Photoshop, or layout experience required."],
              ].map(([Icon, cardTitle, text]) => (
                <div className="tool-detail-mini-card" key={String(cardTitle)}>
                  <div className="ft-tool-card-header-icon icon-flyer"><Icon size={22} aria-hidden="true" /></div>
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
            <h2 id="examples-heading">What Do the Generated Flyers Look Like?</h2>
            <p>These examples show the three PDF flyer styles the generator is designed to create for real estate listings.</p>
          </div>
          <div className="tool-flyer-grid" aria-label="Generated property flyer examples">
            {flyerExamples.map((flyer) => (
              <figure className="tool-flyer-card" key={flyer.src}>
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  width={900}
                  height={1200}
                  sizes="(max-width: 960px) 86vw, 30vw"
                  loading="lazy"
                />
                <figcaption>{flyer.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="tool-detail-section" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="tool-detail-centered"><span className="section-label">How It Works</span><h2 id="how-it-works-heading">How Does the Flyer Generator Work?</h2></div>
          <div className="tool-detail-steps">
            {[
              [Upload, "Enter property info", "Add listing details, photos, price, address, features, and contact information."],
              [Sparkles, "Generate 3 flyer designs", "The tool creates three PDF layouts automatically from your listing content."],
              [Download, "Download and share", "Print the flyers, email them to leads, or use them in presentations."],
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
            <h2 id="perfect-for-heading">Where Should Realtors Use Property Flyers?</h2>
            <p>Property flyers are still useful wherever buyers need a quick, portable summary of the listing.</p>
          </div>
          <div className="tool-detail-steps">
            {[
              [Printer, "Open house handouts", "Give visitors a polished feature sheet they can take with them."],
              [Mail, "Email campaigns", "Attach a professional PDF flyer to buyer and agent outreach."],
              [Share2, "Digital promotion", "Use the flyer in social posts, property websites, and listing presentations."],
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
            <h2 id="kit-compare-heading">What Do You Get Beyond the Free Flyer Generator?</h2>
            <p>The free generator is ideal for creating your own flyer set. Photography clients receive flyers as part of a larger automated marketing kit.</p>
          </div>
          <div className="ft-compare-grid">
            <div className="ft-compare-card free-card"><span className="ft-compare-card-label">Free Self-Serve Tool</span><h3>3 Flyers You Generate</h3><p className="sub">Use listing photos and details to create three property flyer designs yourself.</p><ul className="ft-compare-items"><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>No account required</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Print-ready PDF files</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Use for print, email, web, and social media</li></ul><a href={generatorUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Open Flyer Generator<span className="sr-only"> to create three free Calgary real estate flyers</span> <ExternalLink size={16} aria-hidden="true" /></a></div>
            <div className="ft-compare-card kit-card"><span className="ft-compare-card-label">With Photography Packages</span><h3>3 Flyers + Full Marketing Kit</h3><p className="sub">Every Photos 4 Real Estate photography package includes 3 flyers plus reels, websites, and slideshows once property information is provided.</p><ul className="ft-compare-items"><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div><strong>3 professional property flyers</strong></li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>9 reels, 3 property websites, 2 slideshows</li><li className="ft-compare-item"><div className="ft-ci-check"><Check size={12} strokeWidth={3} aria-hidden="true" /></div>Delivered next day once property information is provided</li></ul><Link href={marketingKitUrl} className="btn btn-primary">See the Marketing Kit<span className="sr-only"> for Calgary realtors</span></Link></div>
          </div>
        </div>
      </section>

      <Faq
        heading="Free Property Flyer Generator — Frequently Asked Questions"
        faqs={flyerFaqs}
        intro={<>Common questions about creating free print-ready property flyers for open houses, email marketing, social media, and client presentations.</>}
        allFaqsLabelSuffix="the free real estate flyer generator"
        sectionClassName="faq-section-white"
      />

      <Cta
        eyebrow="Ready to Create Property Flyers?"
        title="Generate Three Real Estate Flyers for Free"
        description={
          <>
            Upload your listing photos and property details to create polished,
            print-ready flyer PDFs for open houses, email, social media, and
            buyer follow-up. No account, no subscription, no design software.
          </>
        }
        primaryHref={generatorUrl}
        primaryLabel="Open Flyer Generator"
        primarySrSuffix=" to create Calgary real estate property flyers"
        primaryTargetBlank
        secondaryHref={marketingKitUrl}
        secondaryLabel="See the Marketing Kit"
        secondarySrSuffix=" included with Calgary real estate photography packages"
      />

      <JsonLd id="ld-faq-flyer-generator" data={faqSchema} />
      <JsonLd id="ld-software-flyer-generator" data={softwareSchema} />
      {imageSchema.map((schema, index) => <JsonLd key={schema.contentUrl} id={`ld-image-flyer-${index + 1}`} data={schema} />)}
      <JsonLd id="ld-speakable-flyer-generator" data={speakableSchema} />
    </>
  );
}