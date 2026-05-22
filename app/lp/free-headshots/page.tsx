import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  CalendarCheck,
  Camera,
  Check,
  Clock,
  FileText,
  MapPin,
  MonitorPlay,
  Radio,
  Sparkles,
  Target,
  Video,
} from "lucide-react";
import { Faq } from "@/components/home/Faq";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FreeHeadshotsOfferDialog } from "@/components/site/FreeHeadshotsOfferDialog";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import type { Faq as FaqItem } from "@/lib/faqs";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";
import { serviceAreas, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const pagePath = "/lp/free-headshots";
const pageUrl = `${siteConfig.url}${pagePath}`;
const ogImageUrl = `${siteConfig.url}/opengraph-image`;

const title = "Calgary Real Estate Photography + Complimentary Realtor Headshot | Photos 4 Real Estate";
const description =
  "Book your next listing shoot with Photos 4 Real Estate and receive a complimentary professional realtor headshot. No active listing right now? Submit your request and we’ll keep the offer on file until you’re ready.";

const serviceCards: ReadonlyArray<{
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    title: "Real Estate Photography",
    description: "Bright, MLS-ready listing photos captured to help Calgary properties stand out online.",
    href: "/services/real-estate-photography-in-calgary",
    icon: Camera,
  },
  {
    title: "Real Estate Videos",
    description: "Cinematic property walkthroughs and social-first video content for listings and reels.",
    href: "/services/real-estate-videos-in-calgary",
    icon: Video,
  },
  {
    title: "RMS Measurements & Floor Plans",
    description: "RECA-aware RMS measurements and professional floor plans delivered with your listing media.",
    href: "/services/rms-measurements-and-floor-plans-in-calgary",
    icon: FileText,
  },
  {
    title: "iGUIDE 3D Virtual Tours",
    description: "Interactive 3D tours paired with floor plans and accurate property data for serious buyers.",
    href: "/services/iguide-virtual-tours-in-calgary",
    icon: Box,
  },
  {
    title: "Drone Photography & Videography",
    description: "Aerial media that highlights lot size, views, neighbourhood context, and curb appeal.",
    href: "/services/real-estate-aerial-drone-photography-in-calgary",
    icon: Radio,
  },
  {
    title: "Virtual Staging",
    description: "Digitally staged listing images that help buyers visualize empty or under-furnished spaces.",
    href: "/services/virtual-staging",
    icon: Sparkles,
  },
  {
    title: "Twilight Photography",
    description: "Premium dusk photography that gives high-impact listings a polished, luxury-forward look.",
    href: "/services/twilight-photography-for-real-estate-in-calgary",
    icon: Clock,
  },
  {
    title: "Marketing Kit",
    description: "Extra listing assets like reels, flyers, slideshows, and property websites to support your launch.",
    href: "/services/marketing-kit-for-realtors",
    icon: MonitorPlay,
  },
] as const;

const headshotFaqs: FaqItem[] = [
  {
    q: "How does the complimentary realtor headshot offer work?",
    a: "Submit the form to claim the offer, and we’ll keep it on file. When you are ready to book your next listing shoot with Photos 4 Real Estate, we’ll complete your complimentary professional realtor headshot during that booking.",
  },
  {
    q: "Do I need to have an active listing right now?",
    a: "No. If you do not currently have an active listing, you can still claim the offer now. We’ll keep your request on file until you’re ready to schedule your next listing shoot.",
  },
  {
    q: "Who can claim the complimentary headshot?",
    a: "The offer is available to new clients, existing clients, and Calgary realtors planning future listings with Photos 4 Real Estate.",
  },
  {
    q: "What can I use the headshot for?",
    a: "Your complimentary realtor headshot can be used on Realtor.ca profiles, Instagram and other social media, business cards, email signatures, and your website or other personal branding materials.",
  },
  {
    q: "What services can I book with Photos 4 Real Estate?",
    a: 'We provide real estate photography, videos, drone media, RMS measurements, floor plans, iGUIDE virtual tours, virtual staging, twilight photography, and a marketing kit for Calgary realtors. <a href="/services">See all real estate media services &rarr;</a>',
  },
  {
    q: "How quickly do you deliver listing media?",
    a: "Most listing media is delivered the next business day, helping you get listings online quickly while keeping your marketing consistent across every property.",
  },
  {
    q: "Do you serve areas outside Calgary?",
    a: 'Yes. We serve Calgary plus surrounding communities including Okotoks, Airdrie, Cochrane, Chestermere, High River, Springbank, Bearspaw, Rocky View County, and Banff. <a href="/service-areas">View all service areas &rarr;</a>',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(headshotFaqs),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
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
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function FreeHeadshotsLandingPage() {
  const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY;

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Free Headshots Offer" }]}
        jsonLdId="ld-breadcrumb-free-headshots"
      />

      <section className="services-page-hero free-headshots-hero" aria-labelledby="free-headshots-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Complimentary Headshot Offer</div>
              <h1 id="free-headshots-hero-title">
                Calgary Real Estate Photography + <em>Complimentary Realtor Headshot</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Book your next listing shoot with Photos 4 Real Estate and receive a
                complimentary professional realtor headshot. No active listing right now?
                No problem &mdash; we&rsquo;ll keep your request on file until you&rsquo;re ready to book.
              </p>
              <div className="tool-detail-hero-actions">
                <FreeHeadshotsOfferDialog triggerClassName="btn btn-primary" recaptchaSiteKey={recaptchaSiteKey}>
                  Claim Complimentary Headshot
                </FreeHeadshotsOfferDialog>
              </div>
              <ul className="free-headshots-hero-notes" aria-label="Offer highlights">
                <li>
                  <Check size={16} aria-hidden="true" />
                  Professional listing media for Calgary realtors, plus a polished headshot for your personal brand.
                </li>
                <li>
                  <Check size={16} aria-hidden="true" />
                  Ideal for MLS®, Realtor.ca, Instagram, business cards, email signatures, and website bios.
                </li>
                <li>
                  <Check size={16} aria-hidden="true" />
                  If your next listing is still coming soon, you can still claim the offer today.
                </li>
              </ul>
            </div>

            <ul className="services-page-hero-stats" aria-label="Free headshots offer highlights">
              <li className="services-page-hero-stat">
                <span className="num">1</span>
                <span className="lbl">complimentary realtor headshot</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">8</span>
                <span className="lbl">real estate media services available</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">YYC</span>
                <span className="lbl">Calgary and surrounding service areas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tool-detail-section" aria-labelledby="free-headshots-intro-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">Professional Real Estate Media for Calgary Realtors</span>
              <h2 id="free-headshots-intro-heading">Listing media that supports your listings and your personal brand</h2>
              <p className="lead">
                We help Calgary realtors market listings with high-quality photography,
                drone media, reels, floor plans, and fast turnaround times.
              </p>
              <p>
                At the same time, we know your personal brand matters just as much as
                your listings. That&rsquo;s why we&rsquo;re offering a complimentary professional
                realtor headshot with your future listing booking.
              </p>
              <p>
                Whether you need content for MLS®, Instagram, business cards, or your
                website, we&rsquo;ll help you look professional online and in person.
              </p>
            </div>

            <div className="tool-detail-card-list" aria-label="Free headshots landing page benefits">
              {[
                [Camera, "Listing photography", "MLS-ready photography tailored to the way Calgary agents market listings today."],
                [Clock, "Fast turnaround", "Reliable next-business-day delivery to keep your launch timeline moving."],
                [Sparkles, "Brand support", "A complimentary realtor headshot that improves consistency across your marketing."],
                [MonitorPlay, "Full media options", "Book photos, video, drone, floor plans, iGUIDE, and more with one team."],
              ].map(([Icon, heading, text]) => (
                <div className="tool-detail-mini-card" key={String(heading)}>
                  <div className="ft-tool-card-header-icon icon-reel">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{heading as string}</h3>
                    <p>{text as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tool-detail-section tool-detail-section-muted" aria-labelledby="free-headshots-services-heading">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">Services</span>
            <h2 id="free-headshots-services-heading">Everything you need to market the listing professionally</h2>
            <p>
              Book the media package that fits the property. The complimentary headshot offer pairs naturally with the services Calgary realtors already rely on.
            </p>
          </div>

          <div className="about-card-grid is-compact free-headshots-services-grid">
            {serviceCards.map(({ icon: Icon, title: cardTitle, description: cardDescription, href }) => (
              <Link className="about-info-card free-headshots-service-card" href={href} key={href}>
                <div className="about-info-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{cardTitle}</h3>
                <p>{cardDescription}</p>
                <span className="free-headshots-service-link">
                  Learn more
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="free-headshots-offer-section" aria-labelledby="free-headshots-offer-heading">
        <div className="container">
          <div className="free-headshots-offer-grid">
            <div className="free-headshots-offer-copy">
              <span className="section-label">Complimentary Headshot</span>
              <h2 id="free-headshots-offer-heading">Claim Your Complimentary Realtor Headshot</h2>
              <p className="lead">
                When you book a future listing shoot with Photos 4 Real Estate, you&rsquo;ll
                receive a complimentary professional realtor headshot.
              </p>
              <p>
                This offer is available for new clients, existing clients, and realtors
                planning future listings. There is no pressure to book immediately.
              </p>
              <p>
                If you don&rsquo;t currently have an active listing, simply submit your request
                and we&rsquo;ll keep the offer on file until you&rsquo;re ready.
              </p>
              <ul className="free-headshots-checklist" aria-label="Eligible clients for the complimentary headshot offer">
                {[
                  "New clients",
                  "Existing clients",
                  "Realtors planning future listings",
                  "Agents who want a stronger personal brand alongside better listing media",
                ].map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="tool-detail-hero-actions">
                <FreeHeadshotsOfferDialog triggerClassName="btn btn-primary" recaptchaSiteKey={recaptchaSiteKey}>
                  Claim Complimentary Headshot
                </FreeHeadshotsOfferDialog>
              </div>
            </div>

            <div className="free-headshots-usage-card">
              <h3>Your professional headshot can be used for:</h3>
              <ul className="free-headshots-use-list" aria-label="Ways to use your complimentary realtor headshot">
                {[
                  "Realtor.ca profiles",
                  "Social media",
                  "Business cards",
                  "Email signatures",
                  "Personal branding",
                ].map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                The goal is simple: help you present listings professionally while also
                upgrading the way your personal brand appears everywhere potential
                sellers and buyers see you.
              </p>
              <p>
                If you already have a listing booked, great. If not, claim the offer now
                and use it when the next opportunity is ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tool-detail-section tool-detail-section-muted" aria-labelledby="free-headshots-steps-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">How It Works</span>
            <h2 id="free-headshots-steps-heading">How the offer works</h2>
            <p>
              Claim the offer now, then use it when your next Calgary listing is ready to book.
            </p>
          </div>

          <div className="free-headshots-steps">
            {[
              [ArrowRight, "Submit your request", "Open the popup form and send your complimentary headshot request."],
              [Box, "We save the offer", "We keep your complimentary headshot offer on file for a future listing booking."],
              [CalendarCheck, "Book your next shoot", "When you are ready, schedule your next listing shoot online with Photos 4 Real Estate."],
              [Camera, "Headshot completed", "We complete your complimentary realtor headshot during that booking."],
            ].map(([Icon, heading, text], index) => (
              <div className="tool-detail-step" key={String(heading)}>
                <span className="tool-detail-step-num">0{index + 1}</span>
                <Icon size={26} aria-hidden="true" />
                <h3>{heading as string}</h3>
                <p>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-diff-section" aria-labelledby="free-headshots-why-heading">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">Trusted by Calgary Realtors</span>
            <h2 id="free-headshots-why-heading">Why realtors choose us</h2>
            <p>
              We focus specifically on real estate media and understand what agents need to market listings professionally.
            </p>
          </div>

          <div className="about-card-grid is-dark">
            {[
              [Camera, "Professional photography", "Clean, bright images that help listings look polished on MLS and social media."],
              [BadgeCheck, "Reliable communication", "Fast responses, clear expectations, and a dependable booking experience."],
              [Clock, "Fast turnaround times", "Next-business-day delivery helps agents launch listings without delays."],
              [Target, "Consistent image quality", "A repeatable look and process that supports your brand listing after listing."],
              [CalendarCheck, "Easy online booking", "Schedule your shoot quickly when a listing is ready to go live."],
              [Sparkles, "Flexible service options", "Choose only the media services each property needs, from photos to drone to iGUIDE."],
            ].map(([Icon, heading, text]) => (
              <article className="about-info-card" key={String(heading)}>
                <div className="about-info-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{heading as string}</h3>
                <p>{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Reviews variant="light" eyebrow="Client Reviews" heading={<>What Calgary Realtors Say</>} />

      <section className="free-headshots-areas-section areas-section" aria-labelledby="free-headshots-areas-heading">
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="free-headshots-areas-heading">Serving Calgary &amp; surrounding communities</h2>
              <p>
                We provide real estate photography and media services across Calgary and
                nearby communities, so your complimentary headshot offer can be used with
                future listing bookings throughout our standard service area.
              </p>
              <ul className="areas-chips" aria-label="Complimentary headshot service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link href="/service-areas" className="area-chip" aria-label={`Complimentary headshot offer for ${area}`}>
                      <MapPin size={12} aria-hidden="true" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="areas-travel-note">
                <strong>Outside our standard radius?</strong> Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm travel options`}
                >
                  {siteConfig.phone}
                </a>{" "}
                to confirm travel coverage, scheduling, and listing media options.
              </p>
            </div>

            <div className="free-headshots-areas-panel">
              <MapPin size={28} aria-hidden="true" />
              <h3>One media team for listings across the Calgary area</h3>
              <p>
                From central Calgary listings to nearby communities, agents choose Photos 4
                Real Estate for dependable scheduling, professional results, and easy booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Faq
        heading="Complimentary Realtor Headshot FAQ"
        intro={<>Common questions about the offer, booking timing, eligibility, and how Calgary realtors can use the headshot.</>}
        faqs={headshotFaqs}
        allFaqsLabelSuffix="the complimentary Calgary realtor headshot offer"
      />

      <section className="cta-section" aria-labelledby="free-headshots-cta-heading">
        <div className="container">
          <span className="section-label">Ready for Your Next Listing?</span>
          <h2 id="free-headshots-cta-heading">Claim your complimentary realtor headshot today</h2>
          <p>
            Claim your complimentary realtor headshot today and use it whenever you&rsquo;re ready to book your next listing shoot.
          </p>
          <div className="cta-actions">
            <FreeHeadshotsOfferDialog triggerClassName="btn btn-primary" recaptchaSiteKey={recaptchaSiteKey}>
              Claim Complimentary Headshot
            </FreeHeadshotsOfferDialog>
          </div>
          <div className="cta-contact">
            <span className="cta-contact-item">
              Call <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </span>
            <span className="cta-contact-item">
              Email <a href={siteConfig.emailHref}>{siteConfig.email}</a>
            </span>
            <span className="cta-contact-item">
              <Link href="/service-areas">Serving Calgary &amp; surrounding areas</Link>
            </span>
          </div>
        </div>
      </section>

      <JsonLd id="ld-faq-free-headshots" data={faqSchema} />
      <JsonLd id="ld-reviews-free-headshots" data={reviewSchema} />
      <JsonLd id="ld-webpage-free-headshots" data={webPageSchema} />
    </>
  );
}