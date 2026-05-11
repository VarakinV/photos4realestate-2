import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  Brush,
  CheckCircle2,
  ChevronRight,
  Download,
  Home,
  Lamp,
  Lightbulb,
  Mail,
  PawPrint,
  Phone,
  Snowflake,
  Sofa,
  Sprout,
  Sun,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig } from "@/lib/site";
import type { Faq as FaqItem } from "@/lib/faqs";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/photoshoot-checklist`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const pdfUrl =
  "https://cdn.photos4realestate.ca/p4re-static-media/photoshoot-checklist-page/Photoshoot%20Checklist%20-%202.pdf";

const title = "Photoshoot Checklist Calgary | Photos 4 Real Estate";
const description =
  "Prepare your Calgary listing for professional real estate photography with this room-by-room checklist. Download the free PDF before photo day.";

type ChecklistSection = {
  id: string;
  label: string;
  title: string;
  intro: string;
  icon: LucideIcon;
  groups: Array<{
    title: string;
    icon: LucideIcon;
    items: string[];
  }>;
};

const checklistSections: ChecklistSection[] = [
  {
    id: "interior-preparation",
    label: "Interior Preparation",
    title: "How Should You Prepare the Interior Before a Photoshoot?",
    intro:
      "Interior preparation helps rooms feel clean, bright, spacious, and easy for buyers to understand in photos.",
    icon: Home,
    groups: [
      {
        title: "Declutter and clean",
        icon: Brush,
        items: [
          "Remove personal items, family photos, paperwork, fridge magnets, and excess decor.",
          "Clear countertops, tables, shelves, bathroom vanities, and nightstands.",
          "Clean floors, mirrors, windows, appliances, fixtures, and visible surfaces.",
        ],
      },
      {
        title: "Lighting",
        icon: Lightbulb,
        items: [
          "Replace burnt-out bulbs and make sure every light fixture works.",
          "Use consistent bulb colours where possible, especially in kitchens and bathrooms.",
          "Open curtains and blinds to bring in natural light before the photographer arrives.",
        ],
      },
      {
        title: "Furniture and flow",
        icon: Sofa,
        items: [
          "Arrange furniture to create open walking paths and a welcoming layout.",
          "Remove unnecessary chairs, side tables, storage bins, or bulky items that make rooms look smaller.",
          "Straighten rugs, dining chairs, stools, curtains, and visible cords.",
        ],
      },
      {
        title: "Beds and decor",
        icon: BedDouble,
        items: [
          "Make beds neatly, smooth linens, and fluff pillows.",
          "Use simple, neutral decorations that enhance the room without distracting buyers.",
          "Put away laundry baskets, garbage bins, toiletries, and personal bathroom items.",
        ],
      },
    ],
  },
  {
    id: "exterior-preparation",
    label: "Exterior Preparation",
    title: "How Should You Prepare the Exterior Before Real Estate Photos?",
    intro:
      "Exterior preparation is important because the front photo is often the first image buyers see online.",
    icon: Sprout,
    groups: [
      {
        title: "Yard and garden",
        icon: Sprout,
        items: [
          "Mow the lawn, trim hedges, remove weeds, and clear branches or debris.",
          "Put away hoses, tools, toys, sports equipment, garbage bins, and seasonal clutter.",
          "Add simple planters or fresh exterior touches only if they look clean and intentional.",
        ],
      },
      {
        title: "Driveway and walkways",
        icon: Home,
        items: [
          "Sweep driveways, walkways, patios, decks, porches, and garage entrances.",
          "Move vehicles away from the driveway and front of the property before the shoot.",
          "Keep access clear for exterior, backyard, garage, and community-feature photos.",
        ],
      },
      {
        title: "Exterior fixtures",
        icon: Lamp,
        items: [
          "Check exterior lights and replace burnt-out bulbs.",
          "Clean visible windows, glass doors, outdoor furniture, and entry areas.",
          "Close garage doors, tidy patio furniture, and remove BBQ covers if appropriate.",
        ],
      },
      {
        title: "Seasonal details",
        icon: Snowflake,
        items: [
          "In winter, shovel pathways, steps, driveways, decks, and patios; clear ice where possible.",
          "In summer, water the lawn and garden early enough to avoid puddles during the shoot.",
          "Remove seasonal decorations if they make the listing feel dated or distract from the property.",
        ],
      },
    ],
  },
  {
    id: "final-touches",
    label: "Final Touches",
    title: "What Should You Do Right Before the Photographer Arrives?",
    intro:
      "A final walkthrough prevents small distractions from appearing in MLS photos, floor plans, tours, and marketing materials.",
    icon: CheckCircle2,
    groups: [
      {
        title: "Pets",
        icon: PawPrint,
        items: [
          "Keep pets safely away from the photographed areas during the shoot.",
          "Remove pet beds, bowls, litter boxes, toys, leashes, and scratching posts where possible.",
          "Plan ahead if pets need to leave the property during photography, video, or iGUIDE scanning.",
        ],
      },
      {
        title: "Final sweep",
        icon: CheckCircle2,
        items: [
          "Do one last walkthrough of every room before the appointment starts.",
          "Turn on lights, open interior doors, and make sure important spaces are accessible.",
          "Hide remotes, chargers, cleaning supplies, keys, shoes, jackets, and personal documents.",
        ],
      },
      {
        title: "Shoot readiness",
        icon: Sun,
        items: [
          "Have the home photo-ready before the scheduled start time.",
          "Let the photographer know about special features, views, renovations, or areas to avoid.",
          "If the property is occupied, reduce movement through rooms while photos are being taken.",
        ],
      },
    ],
  },
];

const checklistFaqs: FaqItem[] = [
  {
    q: "How clean should a property be before real estate photos?",
    a: "The property should be as clean and decluttered as possible before the photographer arrives. Clear countertops, remove personal items, clean floors and windows, and make sure the home looks ready for buyers to view online.",
  },
  {
    q: "Should lights be on or off for a real estate photoshoot?",
    a: "Make sure all lights are working and replace burnt-out bulbs before the shoot. The photographer may decide which lights to use based on the room, natural light, and photo style, but working lights give them the best options.",
  },
  {
    q: "Should vehicles be moved before exterior photos?",
    a: "Yes. Move vehicles out of the driveway and away from the front of the property before the appointment. This keeps the exterior photos clean and helps buyers focus on the home.",
  },
  {
    q: "What should I do with pets during the photoshoot?",
    a: "Pets should be kept safely away from the areas being photographed. Remove pet beds, bowls, toys, litter boxes, and other pet items wherever possible.",
  },
  {
    q: "When should the checklist be completed?",
    a: "Ideally, complete the checklist before the photographer arrives. Real estate photography appointments are scheduled for capturing the property, not staging or cleaning, so preparation should happen ahead of time.",
  },
  {
    q: "Can Photos 4 Real Estate help if I have questions before the shoot?",
    a: `Yes. If you are unsure how to prepare a room or exterior area, call ${siteConfig.phone} or email ${siteConfig.email}. We are happy to help you prepare for a smooth real estate photoshoot in Calgary.`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(checklistFaqs),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to prepare a property for real estate photography",
  description,
  image: ogImageUrl,
  totalTime: "P1D",
  supply: [
    "Cleaning supplies",
    "Working light bulbs",
    "Storage bins for personal items",
    "Yard tools for exterior preparation",
  ].map((name) => ({ "@type": "HowToSupply", name })),
  step: checklistSections.flatMap((section) =>
    section.groups.map((group) => ({
      "@type": "HowToStep",
      name: `${section.label}: ${group.title}`,
      text: group.items.join(" "),
      url: `${pageUrl}#${section.id}`,
    }))
  ),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#business` },
  primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-intro", ".speakable-faq"],
  },
};

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Photoshoot checklist for Calgary real estate listings — Photos 4 Real Estate",
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

export default function PhotoshootChecklistPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Photoshoot Checklist" }]}
        jsonLdId="ld-breadcrumb-photoshoot-checklist"
      />

      <section className="services-page-hero" aria-labelledby="checklist-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Pre-Photography Checklist</div>
              <h1 id="checklist-hero-title">
                Photoshoot Checklist for <em>Calgary Real Estate Listings</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Prepare your property before professional real estate photography so the shoot runs smoothly and the listing looks its best online. This room-by-room checklist helps homeowners and realtors clean, declutter, light, and stage the property before Photos 4 Real Estate arrives.
              </p>
              <div className="tool-detail-hero-actions">
                <a href={pdfUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Download PDF Checklist
                  <span className="sr-only"> for Calgary real estate photoshoot preparation</span>
                  <Download size={16} aria-hidden="true" />
                </a>
                <Link href="/services/real-estate-photography-in-calgary" className="btn btn-outline">
                  View Photography Services
                  <span className="sr-only"> for Calgary real estate listings</span>
                </Link>
              </div>
            </div>
            <ul className="services-page-hero-stats" aria-label="Checklist highlights">
              <li className="services-page-hero-stat"><span className="num">3</span><span className="lbl">Preparation areas</span></li>
              <li className="services-page-hero-stat"><span className="num">PDF</span><span className="lbl">Download included</span></li>
              <li className="services-page-hero-stat"><span className="num">MLS</span><span className="lbl">Photo-ready focus</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="checklist-intro-section" aria-labelledby="why-prep-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">Why Preparation Matters</span>
              <h2 id="why-prep-heading">Why Should You Prepare Before a Real Estate Photoshoot?</h2>
              <p className="lead speakable-intro">
                A prepared property photographs better, feels more spacious, and helps buyers focus on the home instead of distractions.
              </p>
              <p>
                Professional photography can make a listing stand out, but the property still needs to be clean, accessible, and photo-ready before the appointment. Small details like clear counters, working lights, tidy bedding, and moved vehicles can make a significant difference in the final images.
              </p>
              <p>
                Use this checklist before photography, video, drone, RMS measurements, iGUIDE virtual tours, and marketing-kit creation. The same preparation helps all listing media look more polished and consistent.
              </p>
            </div>
            <div className="checklist-download-card">
              <div className="ft-tool-card-header-icon icon-slide"><Download size={24} aria-hidden="true" /></div>
              <h3>Download the printable checklist</h3>
              <p>Keep the PDF handy and share it with sellers, tenants, cleaners, or anyone helping prepare the property before photo day.</p>
              <a href={pdfUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Download Photoshoot Checklist
                <span className="sr-only"> PDF for real estate photo preparation</span>
                <Download size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="checklist-jump-section" aria-label="Checklist sections">
        <div className="container">
          <div className="checklist-jump-list">
            {checklistSections.map((section) => {
              const Icon = section.icon;
              return (
                <a href={`#${section.id}`} className="checklist-jump-card" key={section.id}>
                  <Icon size={20} aria-hidden="true" />
                  <span>{section.label}</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {checklistSections.map((section, index) => {
        const Icon = section.icon;
        return (
          <section
            id={section.id}
            className={`checklist-section${index % 2 === 1 ? " checklist-section-muted" : ""}`}
            aria-labelledby={`${section.id}-heading`}
            key={section.id}
          >
            <div className="container">
              <div className="checklist-section-header">
                <span className="section-label">{section.label}</span>
                <h2 id={`${section.id}-heading`}><Icon size={30} aria-hidden="true" />{section.title}</h2>
                <p>{section.intro}</p>
              </div>
              <div className="checklist-grid">
                {section.groups.map((group) => {
                  const GroupIcon = group.icon;
                  return (
                    <article className="checklist-card" key={group.title}>
                      <div className="checklist-card-title">
                        <div className="checklist-card-icon"><GroupIcon size={20} aria-hidden="true" /></div>
                        <h3>{group.title}</h3>
                      </div>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section className="checklist-help-section" aria-labelledby="need-help-heading">
        <div className="container">
          <div className="checklist-help-card">
            <div>
              <span className="section-label">Need Assistance?</span>
              <h2 id="need-help-heading">Have Questions Before Your Photoshoot?</h2>
              <p>
                If you are unsure how to prepare a room, exterior area, vacant property, tenant-occupied listing, or seasonal exterior, contact Photos 4 Real Estate before your appointment. We are here to help make the experience smooth and successful.
              </p>
            </div>
            <div className="checklist-contact-list">
              <a href={siteConfig.phoneHref} aria-label={`Call Photos 4 Real Estate at ${siteConfig.phone}`}><Phone size={18} aria-hidden="true" />{siteConfig.phone}</a>
              <a href={siteConfig.emailHref} aria-label={`Email Photos 4 Real Estate at ${siteConfig.email}`}><Mail size={18} aria-hidden="true" />{siteConfig.email}</a>
            </div>
          </div>
        </div>
      </section>

      <Faq
        heading="Photoshoot Checklist — Frequently Asked Questions"
        faqs={checklistFaqs}
        intro={<>Common questions about preparing a Calgary property for professional real estate photography.</>}
        allFaqsLabelSuffix="real estate photoshoot preparation in Calgary"
        sectionClassName="faq-section-white"
      />

      <Cta
        eyebrow="Ready for Photo Day?"
        title="Download the Checklist and Prepare With Confidence"
        description={
          <>
            Use the PDF checklist to prepare the property before your real estate photoshoot. When you are ready to schedule photography, video, floor plans, or a full media package, book online with Photos 4 Real Estate.
          </>
        }
        primaryHref={pdfUrl}
        primaryLabel="Download PDF Checklist"
        primarySrSuffix=" for Calgary real estate photoshoot preparation"
        primaryTargetBlank
        secondaryHref="/prices"
        secondaryLabel="View Pricing"
        secondarySrSuffix=" for Calgary real estate photography packages"
      />

      <JsonLd id="ld-faq-photoshoot-checklist" data={faqSchema} />
      <JsonLd id="ld-howto-photoshoot-checklist" data={howToSchema} />
      <JsonLd id="ld-webpage-photoshoot-checklist" data={webPageSchema} />
    </>
  );
}