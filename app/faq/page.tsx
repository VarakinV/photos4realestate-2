import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeDollarSign,
  Box,
  CalendarCheck,
  Camera,
  ChevronRight,
  Clock,
  CloudSun,
  Drone,
  FileImage,
  HelpCircle,
  Home,
  MapPin,
  Ruler,
  ShieldCheck,
  Video,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqAnswerToHtml, faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig } from "@/lib/site";
import type { Faq as FaqItem } from "@/lib/faqs";
import {
  AVERAGE_RATING,
  GOOGLE_REVIEW_URL,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/faq`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const businessId = `${siteConfig.url}/#business`;

const title = "Calgary Real Estate Photography FAQ | Photos 4 Real Estate";
const description =
  "Get clear answers about Calgary real estate photography, drone, iGUIDE tours, RMS floor plans, booking, and next-day delivery. Book online today.";

type FaqCategory = {
  id: string;
  label: string;
  heading: string;
  intro: string;
  icon: typeof HelpCircle;
  items: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    id: "general-services",
    label: "General Services",
    heading: "General Real Estate Media Questions",
    intro:
      "Start here if you are new to Photos 4 Real Estate or want to understand what we provide for Calgary listings.",
    icon: Home,
    items: [
      {
        q: "What services does Photos 4 Real Estate offer?",
        a: "Photos 4 Real Estate provides professional real estate photography, aerial drone photography and video, iGUIDE 3D virtual tours, RECA RMS measurements, floor plans, real estate video, twilight photography, virtual staging, and listing marketing assets for Calgary realtors, homeowners, builders, and property managers.",
      },
      {
        q: "Do you only work with real estate agents?",
        a: "No. Many clients are realtors, but we also work with homeowners, property managers, builders, interior designers, renovators, and businesses that need professional property media.",
      },
      {
        q: "What areas do you serve?",
        a: "We are based in Calgary, Alberta and serve Calgary plus nearby communities including Airdrie, Okotoks, Cochrane, Chestermere, High River, Springbank, Bearspaw, Rocky View County, and other surrounding areas.",
      },
      {
        q: "Do you travel outside Calgary for shoots?",
        a: "Yes. We can travel to nearby cities and towns, and we can also travel farther for larger projects when scheduling allows. Travel fees may apply depending on distance and appointment requirements.",
      },
      {
        q: "Do you photograph both residential and commercial properties?",
        a: "Yes. We photograph residential listings, acreages, condos, rentals, new builds, show homes, offices, retail spaces, and other commercial properties.",
      },
    ],
  },
  {
    id: "photography-drone",
    label: "Photography & Drone",
    heading: "Photography, Drone, and Video Questions",
    intro:
      "Common questions about listing photos, aerial images, video, deliverables, and what is included in a shoot.",
    icon: Camera,
    items: [
      {
        q: "Do you offer drone photography for real estate listings?",
        a: "Yes. We provide aerial drone photography and drone video for real estate listings where flight conditions and airspace rules allow. Drone media can help show the lot, property setting, views, nearby amenities, and surrounding neighbourhood.",
      },
      {
        q: "What is included in a real estate photography package?",
        a: 'Our packages typically include professional interior and exterior photos, blue-sky replacement when needed, MLS-ready and web-ready image exports, RMS measurements, floor plans, and iGUIDE 3D virtual tour. Package details vary by size and tier, so please see the <a href="/prices">pricing page</a> for current inclusions.',
      },
      {
        q: "How many photos do I receive per shoot?",
        a: "The final image count depends on property size, layout, and package, but most residential listings receive approximately 50–70 professionally edited photos.",
      },
      {
        q: "Do you provide both interior and exterior photography?",
        a: "Yes. We photograph both interior and exterior spaces so buyers can understand the full property, including main rooms, bedrooms, bathrooms, exterior elevations, yard, garage, views, and key features.",
      },
      {
        q: "Can you photograph commercial properties?",
        a: "Yes. We work with commercial properties including office buildings, retail spaces, industrial units, showrooms, multifamily buildings, and short-term rental properties.",
      },
      {
        q: "Do you offer real estate video and social media reels?",
        a: 'Yes. We offer walkthrough videos, drone video, and social media reels. Every photography package also includes a marketing kit with 9 social media reels once property information is provided. You can learn more on the <a href="/services/marketing-kit-for-realtors">marketing kit page</a>.',
      },
    ],
  },
  {
    id: "virtual-tours-floor-plans",
    label: "Tours & Floor Plans",
    heading: "Virtual Tours, RMS Measurements, and Floor Plans",
    intro:
      "Answers about iGUIDE virtual tours, RECA RMS-compliant measurements, floor plans, and virtual staging.",
    icon: Ruler,
    items: [
      {
        q: "What type of virtual tours do you offer?",
        a: "We use iGUIDE technology to create immersive 3D virtual tours with 360° room views and integrated floor plans so buyers can explore the property online before booking a showing.",
      },
      {
        q: "Do you create RMS-compliant floor plans?",
        a: "Yes. We provide RECA RMS-compliant measurements and detailed floor plans for Alberta MLS listings. Measurements are completed using iGUIDE technology and prepared according to the Residential Measurement Standard.",
      },
      {
        q: "Why should I include a floor plan with my listing?",
        a: "Floor plans help buyers understand the layout, room relationships, and property flow. They can increase buyer confidence, reduce unnecessary showings, and make online listings more informative.",
      },
      {
        q: "How accurate are your measurements?",
        a: "Our RMS measurements are precise and designed to meet Alberta’s real estate measurement requirements. If a property has unusual spaces or complex layouts, we can explain how they are handled under RMS rules.",
      },
      {
        q: "Do you provide virtual staging services?",
        a: "Yes. We provide virtual staging for vacant spaces to help buyers visualize scale, layout, and room function. Virtual staging works best with clean, well-lit, wide-angle photos.",
      },
    ],
  },
  {
    id: "booking-process",
    label: "Booking & Process",
    heading: "Booking and Photoshoot Process",
    intro:
      "What to expect before, during, and after your Calgary real estate media appointment.",
    icon: CalendarCheck,
    items: [
      {
        q: "How do I book a photo shoot?",
        a: `You can book online, call us at ${siteConfig.phone}, or email ${siteConfig.email}. Online booking is the fastest way to choose your package, date, and property details.`,
      },
      {
        q: "How much notice do you need for booking?",
        a: "Two to three days of notice is ideal, especially during busy listing seasons. We can often accommodate last-minute requests when the schedule allows.",
      },
      {
        q: "What should I do to prepare my home for photography?",
        a: 'Clean, declutter, remove personal items, make beds, clear countertops, open blinds, replace burnt-out bulbs, tidy the exterior, and move vehicles away from the driveway. See our <a href="/photoshoot-checklist">photoshoot checklist</a> for a full preparation guide.',
      },
      {
        q: "Do I need to be present during the shoot?",
        a: "No. Many clients provide lockbox access or access instructions. You are welcome to attend, but it is not required as long as the property is accessible and photo-ready.",
      },
      {
        q: "How long does a real estate photoshoot take?",
        a: "A typical residential photography and RMS appointment takes about 45–90 minutes. Larger homes, acreages, video, drone, or more complex iGUIDE scans can take longer.",
      },
      {
        q: "Can multiple services be completed in one visit?",
        a: "Yes. Photography, drone, video, iGUIDE tour, RMS measurements, and floor plans can usually be completed during the same property visit, which saves time and simplifies scheduling.",
      },
    ],
  },
  {
    id: "delivery-pricing",
    label: "Delivery & Pricing",
    heading: "Delivery, Files, and Pricing",
    intro:
      "Answers about turnaround times, file formats, packages, and what happens after the shoot.",
    icon: Clock,
    items: [
      {
        q: "How quickly will I receive my photos?",
        a: "Most real estate photos, iGUIDE tours, floor plans, and RMS measurements are delivered next day. Video may take longer depending on the package and editing requirements.",
      },
      {
        q: "In what format will I receive the images?",
        a: "You receive high-resolution JPEG images suitable for print and web-optimized versions for MLS, websites, social media, and online listing platforms.",
      },
      {
        q: "What are your pricing packages?",
        a: 'Pricing depends on property size, location, package, and add-ons. Visit our <a href="/prices">pricing page</a> for current Calgary real estate photography packages and included services.',
      },
      {
        q: "Is GST included in the prices shown?",
        a: "No. Prices shown on the website are before GST unless otherwise stated. The applicable GST is added to the invoice.",
      },
      {
        q: "What is included in the free marketing kit?",
        a: 'Photography packages include a marketing kit with 9 social media reels, 3 property websites, 3 property flyers, and 2 slideshows once property information is provided. See the <a href="/services/marketing-kit-for-realtors">marketing kit page</a> for details.',
      },
      {
        q: "Do you offer free real estate marketing tools?",
        a: 'Yes. Our <a href="/free-tools">free tools</a> include a reel generator, slideshow generator, flyer generator, and QR code generator for real estate marketing.',
      },
    ],
  },
  {
    id: "policies",
    label: "Policies",
    heading: "Policies and Additional Information",
    intro:
      "Important details about weather, cancellations, deposits, editing, usage rights, and why clients choose Photos 4 Real Estate.",
    icon: ShieldCheck,
    items: [
      {
        q: "What happens if the weather is bad on shoot day?",
        a: "If weather conditions would significantly affect photo quality or safety, we can reschedule exterior, drone, twilight, or full appointments when appropriate. We will communicate options based on the forecast and service booked.",
      },
      {
        q: "Do you require a deposit?",
        a: "No. We do not require a deposit for standard real estate photography bookings. We send an invoice after the photos are delivered so you can review the work first.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We do not charge a cancellation fee for standard shoots, but we appreciate as much notice as possible so the time can be offered to another client.",
      },
      {
        q: "Can you edit out clutter or make digital changes?",
        a: "Basic editing is included. Advanced retouching, object removal, sky replacement beyond standard workflow, lawn enhancement, or special digital edits may be available for an additional fee depending on the request.",
      },
      {
        q: "Can I use the photos on MLS, social media, and print materials?",
        a: "Yes. You can use delivered listing photos and media for MLS, property websites, social media, brochures, email marketing, and other marketing materials related to the listing.",
      },
      {
        q: "Why should I choose Photos 4 Real Estate?",
        a: 'Photos 4 Real Estate combines professional photography, local Calgary real estate knowledge, fast next-day delivery, RMS-compliant measurements, iGUIDE tours, drone media, and included marketing assets to help listings look polished and attract more buyer attention. You can also review our <a href="/real-estate-photography-comparison-calgary">Why Choose Us comparison page</a> to see how our included services, free tools, and rewards differ from other Calgary providers.',
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((category) => category.items);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(allFaqs),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessId,
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [GOOGLE_REVIEW_URL],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: AVERAGE_RATING,
    reviewCount: REVIEW_COUNT,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviewItems.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: toIsoDate(review.date),
    publisher: { "@type": "Organization", name: "Google" },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": businessId },
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
  alt: "FAQ for Calgary real estate photography services — Photos 4 Real Estate",
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

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        jsonLdId="ld-breadcrumb-faq"
      />

      <section className="services-page-hero" aria-labelledby="faq-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Photos 4 Real Estate FAQ</div>
              <h1 id="faq-hero-title">
                Calgary Real Estate Photography <em>FAQ</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Answers to the most common questions about Calgary real estate photography, drone services, iGUIDE virtual tours, RMS measurements, pricing, booking, delivery, and policies. If you cannot find what you need, contact us — we are happy to help.
              </p>
            </div>
            <ul className="services-page-hero-stats" aria-label="FAQ page highlights">
              <li className="services-page-hero-stat"><span className="num">6</span><span className="lbl">FAQ categories</span></li>
              <li className="services-page-hero-stat"><span className="num">30+</span><span className="lbl">Questions answered</span></li>
              <li className="services-page-hero-stat"><span className="num">5★</span><span className="lbl">Google rating</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="faq-page-intro" aria-labelledby="faq-overview-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">Frequently Asked Questions</span>
              <h2 id="faq-overview-heading">Everything You Need to Know Before Booking</h2>
              <p className="lead speakable-intro">
                This FAQ helps realtors, homeowners, builders, property managers, and businesses understand our real estate media process before scheduling a shoot.
              </p>
              <p>
                You will find answers about photography packages, drone availability, iGUIDE tours, RECA RMS floor plans, virtual staging, property preparation, next-day delivery, pricing, and policies.
              </p>
              <p>
                For package details and current pricing, visit the <Link href="/prices" className="body-link">pricing page</Link>. For preparation steps, use the <Link href="/photoshoot-checklist" className="body-link">photoshoot checklist</Link>.
              </p>
            </div>
            <div className="faq-page-contact-card">
              <HelpCircle size={28} aria-hidden="true" />
              <h3>Still have a question?</h3>
              <p>Call, text, or email us and we will help you choose the right services for your Calgary listing.</p>
              <a href={siteConfig.phoneHref} aria-label={`Call or text Photos 4 Real Estate at ${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} aria-label={`Email Photos 4 Real Estate at ${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-page-jump" aria-label="FAQ categories">
        <div className="container">
          <div className="faq-page-jump-grid">
            {faqCategories.map((category) => {
              const Icon = category.icon;
              return (
                <a href={`#${category.id}`} className="faq-page-jump-card" key={category.id}>
                  <Icon size={20} aria-hidden="true" />
                  <span>{category.label}</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <main className="faq-page-main speakable-faq">
        {faqCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <section
              id={category.id}
              className={`faq-page-category${index % 2 === 1 ? " faq-page-category-muted" : ""}`}
              aria-labelledby={`${category.id}-heading`}
              key={category.id}
            >
              <div className="container">
                <div className="faq-page-category-header">
                  <span className="section-label">{category.label}</span>
                  <h2 id={`${category.id}-heading`}>
                    <span className="faq-page-category-icon" aria-hidden="true">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    {category.heading}
                  </h2>
                  <p>{category.intro}</p>
                </div>
                <div className="faq-page-list">
                  {category.items.map((faq, itemIndex) => (
                    <details
                      className="faq-page-item"
                      key={faq.q}
                      name={`${category.id}-faq-group`}
                      open={itemIndex === 0}
                    >
                      <summary>
                        <span>{faq.q}</span>
                        <span className="faq-page-chevron" aria-hidden="true">
                          <ChevronRight size={14} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <div className="faq-page-answer-wrap">
                        <div
                          className="faq-page-answer"
                          // biome-ignore lint/security/noDangerouslySetInnerHtml: FAQ answers are trusted local content and include crawlable internal links.
                          dangerouslySetInnerHTML={faqAnswerToHtml(faq.a)}
                        />
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Reviews
        variant="light"
        eyebrow="Calgary Realtor Reviews"
        heading={<>Clients trust <em>Photos 4 Real Estate</em> for listing media that looks polished and arrives fast.</>}
      />

      <Cta
        eyebrow="Ready To Book?"
        title="Schedule Calgary Real Estate Photography Online."
        description={
          <>
            Choose your package, add the services you need, and book your real estate photography appointment online. We will handle the media, measurements, delivery, and listing marketing assets.
          </>
        }
        secondaryHref="/prices"
        secondaryLabel="View Pricing"
        secondarySrSuffix=" for Calgary real estate photography packages"
      />

      <JsonLd id="ld-faq-page" data={faqSchema} />
      <JsonLd id="ld-reviews-faq" data={reviewSchema} />
      <JsonLd id="ld-webpage-faq" data={webPageSchema} />
    </>
  );
}