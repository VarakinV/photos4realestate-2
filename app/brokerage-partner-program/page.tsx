import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  DollarSign,
  FileDown,
  FileText,
  Globe,
  HeartHandshake,
  QrCode,
  Ruler,
  ShieldCheck,
  Smartphone,
  Tag,
  TrendingUp,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import type { Faq as FaqItem } from "@/lib/faqs";
import { serviceAreas, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const discoveryCallUrl =
  "https://api.leadconnectorhq.com/widget/booking/mywq1CTW4NjUVh54n950";
const whoPhotoSrc =
  "https://cdn.photos4realestate.ca/p4re-static-media/brokerage-partner-program/Vlad-from-Photos-4-Real-Estate-presenting-at-real-estat-agency-office.webp";
const pageUrl = `${siteConfig.url}/brokerage-partner-program`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const businessId = `${siteConfig.url}/#business`;
const businessRef = { "@id": businessId };

const title = "Brokerage Partner Program Calgary | Photos 4 Real Estate";
const description =
  "Join the free Brokerage Partner Program for Calgary — professional listing media, reels, flyers, websites and QR lead capture at no cost. Book a call today.";

const heroStats = [
  { num: "8,600+", label: "Calgary REALTORS® competing for agents" },
  { num: "$15K–$50K", label: "Cost of losing one agent" },
  { num: "$0", label: "Cost to your brokerage" },
] as const;

const includes = [
  {
    icon: <Camera size={22} aria-hidden="true" />,
    title: "Photography, Video & Drone",
    desc: "HDR interior/exterior photos, cinematic walkthroughs and licensed aerial coverage on every listing.",
    tag: "Core Service",
  },
  {
    icon: <Ruler size={22} aria-hidden="true" />,
    title: "RMS Floor Plans & iGUIDE Tours",
    desc: "RECA-compliant measurements and interactive 3D walkthroughs for accurate, buyer-ready listings.",
    tag: "RECA-Compliant",
  },
  {
    icon: <Smartphone size={22} aria-hidden="true" />,
    title: "9 Social Media Reels",
    desc: "Ready-to-post 9:16 clips for Instagram, Facebook and TikTok — a week of content from one shoot.",
    tag: "Included Free",
  },
  {
    icon: <Globe size={22} aria-hidden="true" />,
    title: "6 Branded Property Websites",
    desc: "Mobile-responsive single-property sites with a clean, shareable link — no setup required.",
    tag: "Included Free",
  },
  {
    icon: <FileText size={22} aria-hidden="true" />,
    title: "3 Flyers + 2 Slideshows",
    desc: "Print-ready PDF flyers and animated slideshows for open houses, email and social sharing.",
    tag: "Included Free",
  },
  {
    icon: <QrCode size={22} aria-hidden="true" />,
    title: "7 SmartSign QR Codes",
    desc: "Reusable lead-capture yard sign codes with instant lead alerts and weekly scan analytics.",
    tag: "Lead Alerts",
  },
] as const;

const dataPoints = [
  {
    icon: <DollarSign size={22} aria-hidden="true" />,
    stat: "$15K–$50K",
    text: "Cost of losing one agent, once recruiting, training and lost production are counted.",
  },
  {
    icon: <HeartHandshake size={22} aria-hidden="true" />,
    stat: "Marketing support",
    text: "Ranked above brokerage branding as the top reason agents say they stay, when asked directly.",
  },
  {
    icon: <TrendingUp size={22} aria-hidden="true" />,
    stat: "+25%",
    text: "Rise in external agent moves quarter-over-quarter in early 2026 — mobility is accelerating.",
  },
  {
    icon: <BadgeCheck size={22} aria-hidden="true" />,
    stat: "92% retention",
    text: "For agents who engage with active training and support programs, versus none.",
  },
] as const;

const whyMatters = [
  {
    num: "01",
    title: "Strengthen Your Recruiting Story",
    desc: "Give prospective agents another tangible benefit to consider when comparing brokerages: access to professional listing media and marketing tools.",
  },
  {
    num: "02",
    title: "Support Agents Without More Staff",
    desc: "Your team doesn't have to become a photography studio, design department, video agency and web-development shop.",
  },
  {
    num: "03",
    title: "Help New Agents Get Started",
    desc: "New agents can follow a straightforward listing-marketing workflow instead of learning a dozen separate platforms from scratch.",
  },
  {
    num: "04",
    title: "Promote a Higher Marketing Standard",
    desc: "Professional media and ready-made assets make it easier for agents to present listings consistently and professionally.",
  },
  {
    num: "05",
    title: "Add Technology Without Another Subscription",
    desc: "Property websites, free marketing generators and SmartSign QR add useful capabilities without asking agents to assemble their own stack.",
  },
  {
    num: "06",
    title: "Create a Better Agent Experience",
    desc: "When agents spend less time producing basic marketing materials, they can spend more time prospecting, communicating and serving clients.",
  },
] as const;

const valueStack = [
  {
    num: "01",
    label: "Capture",
    title: "Professional Media",
    desc: "Photos, iGUIDE, RMS, floor plans, drone and video options.",
  },
  {
    num: "02",
    label: "Create",
    title: "Marketing Assets",
    desc: "Reels, websites, flyers and slideshows generated from the listing.",
  },
  {
    num: "03",
    label: "Promote",
    title: "Share Everywhere",
    desc: "Social media, email, open houses, websites, print and direct messages.",
  },
  {
    num: "04",
    label: "Capture",
    title: "Buyer Interest",
    desc: "SmartSign QR and property-page forms help turn attention into measurable inquiries.",
  },
] as const;

const programFeatures = [
  {
    icon: <Tag size={22} aria-hidden="true" />,
    title: "Brokerage Discount Code",
    desc: "A code branded to your office that every agent can use — stacking with our rewards program.",
  },
  {
    icon: <Users size={22} aria-hidden="true" />,
    title: "A Free Session For Your Office",
    desc: "A short, no-cost walkthrough for your agents showing them how to use the free marketing kit.",
  },
  {
    icon: <FileText size={22} aria-hidden="true" />,
    title: "New-Agent Onboarding Kit",
    desc: "A simple one-pager for your onboarding package, so new agents know about this from day one.",
  },
  {
    icon: <ShieldCheck size={22} aria-hidden="true" />,
    title: "Consistent, RECA-Compliant Standards",
    desc: "Every listing under your brokerage meets the same professional standard — every agent, not just your top producers.",
  },
] as const;

const costPills = [
  "No contract",
  "No exclusivity required",
  "Agent-paid, not brokerage-billed",
  "Cancel anytime",
] as const;

const whoFor = [
  "Independent brokerages competing without a big-franchise budget",
  "Boutique offices that need a stronger recruiting story",
  "Growing teams onboarding new agents every quarter",
  "Franchise offices wanting a genuine no-cost member benefit",
  "Brokerages that want every listing to look consistent",
  "Owners tired of inconsistent photos hurting their brand",
] as const;

const processSteps = [
  {
    num: "01",
    title: "Book a 15-Minute Call",
    desc: "Tell us about your office and what would actually help your agents.",
  },
  {
    num: "02",
    title: "We Tailor the Partnership",
    desc: "A discount code, onboarding kit, and/or a short session for your agents.",
  },
  {
    num: "03",
    title: "We Present to Your Office",
    desc: "A quick, practical walkthrough at your next meeting — optional, and no sales pitch.",
  },
  {
    num: "04",
    title: "Your Agents Start Booking",
    desc: "With your brokerage's discount and perks already built in.",
  },
] as const;

const faqs: FaqItem[] = [
  {
    q: "Does this cost our brokerage anything?",
    a: "No. Agents pay individually per shoot, the same way they would with any photographer — the brokerage-level perks are free to offer and never billed to the office.",
  },
  {
    q: "Do you require exclusivity?",
    a: "No. We're happy to be an option your agents can choose — there's no mandate and no exclusivity requirement.",
  },
  {
    q: "Can agents who already use another photographer switch?",
    a: "Yes, anytime — there's no contract or lock-in for individual agents.",
  },
  {
    q: "Do you work with teams as well as full brokerages?",
    a: "Yes — the same partnership works for a 5-agent team or a 150-agent brokerage.",
  },
  {
    q: "Can we customize the discount or onboarding materials?",
    a: "Yes — we'll tailor the code, materials and presentation to your office and your agents.",
  },
  {
    q: "How is this different from just recommending a photographer?",
    a: "It's formalized: a branded code, tracked bookings, onboarding materials, and — if useful — a recurring session for new agents. A real program, not a one-off referral.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(faqs),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Brokerage Partner Program",
  serviceType: "Real Estate Brokerage Partner Program",
  description,
  url: pageUrl,
  provider: businessRef,
  areaServed: [...serviceAreas],
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

export default function BrokeragePartnerProgramPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "For Brokerages" }]}
        jsonLdId="ld-breadcrumb-brokerage-partner-program"
      />

      {/* HERO */}
      <section
        className="services-page-hero broker-hero"
        aria-labelledby="broker-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                For Calgary Brokerage &amp; Team Owners
              </div>
              <h1 id="broker-hero-title">
                The Brokerage Partner Program That Helps You{" "}
                <em>Recruit and Keep</em> Better Agents
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                The Photos 4 Real Estate Brokerage Partner Program is a free
                partnership for Calgary brokerages and team leaders: your agents
                get professional listing photos, reels, websites, flyers and QR
                lead capture &mdash; and your office pays nothing.
              </p>
              <div className="tool-detail-hero-actions">
                <a
                  href={discoveryCallUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book A Discovery Call
                  <span className="sr-only">
                    {" "}with Photos 4 Real Estate — opens in a new tab
                  </span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <Link href="/services/marketing-kit-for-realtors" className="btn btn-outline">
                  See What Your Agents Get
                  <span className="sr-only">
                    {" "}— visit the marketing kit for Calgary realtors
                  </span>
                </Link>
              </div>
            </div>

            <ul className="services-page-hero-stats" aria-label="Brokerage partner program highlights">
              {heroStats.map((stat) => (
                <li className="services-page-hero-stat" key={stat.label}>
                  <span className="num">{stat.num}</span>
                  <span className="lbl">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE BROKERAGE CHALLENGE */}
      <section className="broker-split-section" aria-labelledby="broker-why-heading">
        <div className="container">
          <div className="broker-split">
            <div className="broker-split-copy">
              <span className="section-label">The Brokerage Challenge</span>
              <h2 id="broker-why-heading">
                Your agents need marketing support.<br />
                Your brokerage doesn&rsquo;t need another department.
              </h2>
              <p>
                Agents are expected to market listings across MLS, social media,
                websites, email and print. But many agents don&rsquo;t have
                the time, skills or tools to produce everything themselves.
              </p>
              <p>
                The brokerages winning in 2026 aren&rsquo;t winning with a
                bigger commission split. They&rsquo;re winning by removing
                friction and giving agents tools they actually use &mdash;
                starting with marketing. And with Calgary&rsquo;s market
                shifting toward more balanced conditions this year, a
                listing&rsquo;s presentation matters more directly to how fast
                &mdash; and for how much &mdash; a property sells.
              </p>
              <p>
                <strong>
                  We help solve the marketing-production problem without
                  asking your brokerage to build the solution itself.
                </strong>
              </p>

              <ul className="broker-stat-row" aria-label="Why brokerage support matters">
                <li className="broker-stat-cell">
                  <b>25%</b>
                  <span>Rise in external agent moves, Q1 2026</span>
                </li>
                <li className="broker-stat-cell">
                  <b>92%</b>
                  <span>Retention for agents in active support programs</span>
                </li>
                <li className="broker-stat-cell">
                  <b>55%</b>
                  <span>Calgary&rsquo;s sales-to-new-listings ratio in 2026</span>
                </li>
              </ul>
            </div>

            <div className="broker-media-stack">
              <article className="broker-challenge-card">
                <div className="broker-challenge-num" aria-hidden="true">01</div>
                <h3>Too Much DIY Marketing</h3>
                <p>
                  Agents often spend evenings resizing photos, making flyers,
                  editing videos and building listing pages instead of working
                  with clients.
                </p>
              </article>
              <article className="broker-challenge-card">
                <div className="broker-challenge-num" aria-hidden="true">02</div>
                <h3>Too Many Separate Vendors</h3>
                <p>
                  Photography, measurements, tours, video, design and web tools
                  can become a collection of disconnected services to
                  coordinate.
                </p>
              </article>
              <article className="broker-challenge-card">
                <div className="broker-challenge-num" aria-hidden="true">03</div>
                <h3>Inconsistent Listing Presentation</h3>
                <p>
                  When every agent uses different tools and templates, the
                  quality of listing marketing can vary dramatically from one
                  listing to the next.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section
        id="whats-included"
        className="broker-feature-section"
        aria-labelledby="broker-included-heading"
      >
        <div className="container">
          <div className="broker-feature-header">
            <span className="section-label">What&rsquo;s Included</span>
            <h2 id="broker-included-heading">
              What Every Agent At Your Brokerage Gets
            </h2>
            <p>
              Every shoot includes professional photography, video, drone, RMS
              measurements and iGUIDE 3D tours &mdash; plus a complete
              marketing kit at no extra cost to the agent or your office.
            </p>
          </div>

          <div className="broker-feature-block">
            <div className="broker-feature-grid">
              {includes.map((feature) => (
                <article className="broker-feature-item" key={feature.title}>
                  <div className="broker-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <span className="broker-feature-tag">{feature.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE DATA */}
      <section className="broker-insight-section" aria-labelledby="broker-data-heading">
        <div className="container">
          <div className="broker-insight-header">
            <span className="section-label">The Data</span>
            <h2 id="broker-data-heading">
              Why Agents Actually Leave &mdash; And What Keeps Them
            </h2>
            <p>
              Exit interviews usually blame commission splits. The research
              points somewhere else: operational friction, and whether an agent
              feels supported day to day.
            </p>
          </div>

          <div className="broker-insight-grid">
            {dataPoints.map((point) => (
              <article className="broker-insight-card" key={point.stat}>
                <div className="broker-insight-icon" aria-hidden="true">
                  {point.icon}
                </div>
                <b>{point.stat}</b>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS TO THE BROKERAGE */}
      <section className="broker-matter-section" aria-labelledby="broker-matter-heading">
        <div className="container">
          <div className="broker-matter-header">
            <span className="section-label">
              Why It Matters to the Brokerage
            </span>
            <h2 id="broker-matter-heading">
              Turn listing marketing into an agent-support advantage.
            </h2>
            <p>
              The value isn&rsquo;t only what the photographer delivers.
              It&rsquo;s what your brokerage can offer agents as part of a
              stronger, more practical support system.
            </p>
          </div>

          <div className="broker-matter-grid">
            {whyMatters.map((item) => (
              <article className="broker-matter-card" key={item.num}>
                <div className="broker-matter-num" aria-hidden="true">
                  {item.num}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE VALUE STACK */}
      <section className="broker-value-section" aria-labelledby="broker-value-heading">
        <div className="container">
          <div className="broker-value-header">
            <span className="section-label">The Value Stack</span>
            <h2 id="broker-value-heading">
              One listing shoot can become an entire marketing campaign.
            </h2>
            <p>
              Instead of stopping when the photos are delivered, the workflow
              continues into social content, property pages, print materials and
              lead capture.
            </p>
          </div>

          <div className="broker-value-block">
            <div className="broker-value-grid">
              {valueStack.map((step, idx) => (
                <article className="broker-value-step" key={step.num}>
                  <div className="broker-value-step-label">
                    <span className="broker-value-num" aria-hidden="true">
                      {step.num}
                    </span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{step.label}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  {idx < valueStack.length - 1 && (
                    <span className="broker-value-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE OFFER */}
      <section className="broker-program-section" aria-labelledby="broker-offer-heading">
        <div className="container">
          <div className="broker-program-header">
            <span className="section-label">The Offer</span>
            <h2 id="broker-offer-heading">The Brokerage Partner Program</h2>
            <p>
              A simple partnership for brokerages and teams that want to offer
              this to their whole office &mdash; without adding a vendor to
              manage or a line item to budget for.
            </p>
          </div>

          <div className="broker-program-grid">
            {programFeatures.map((feature) => (
              <article className="broker-program-card" key={feature.title}>
                <div className="broker-program-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS COSTS */}
      <section className="broker-cost-section" aria-labelledby="broker-cost-heading">
        <div className="container">
          <div className="broker-cost-banner">
            <div className="broker-cost-copy">
              <span className="section-label">The Fine Print</span>
              <h2 id="broker-cost-heading">
                What This Costs Your Brokerage. <em>Nothing.</em>
              </h2>
              <p>
                Each agent books and pays for their own shoot, the same way
                they would with any photographer. The brokerage-level benefits
                &mdash; the discount code, onboarding materials, and office
                session &mdash; don&rsquo;t add a cost or a bill.
              </p>
              <div className="broker-cost-pills" aria-label="Brokerage partner program fine print">
                {costPills.map((pill) => (
                  <span className="broker-cost-pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="broker-cost-card">
              <div className="broker-cost-label">Cost to your brokerage</div>
              <div className="broker-cost-amount">
                <sup>$</sup>0
              </div>
              <div className="broker-cost-sub">
                Agents book &amp; pay individually &mdash; always
              </div>
              <div className="broker-cost-actions">
                <a
                  href={discoveryCallUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Consultation
                  <span className="sr-only">
                    {" "}for the Photos 4 Real Estate brokerage partner program
                  </span>
                </a>
                <Link href="/contact-us" className="btn btn-outline">
                  Download the One-Pager
                  <span className="sr-only">
                    {" "}for the Photos 4 Real Estate brokerage partner program
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="broker-who-section" aria-labelledby="broker-who-heading">
        <div className="container">
          <div className="broker-who-grid">
            <div className="broker-who-copy">
              <span className="section-label">Is This You?</span>
              <h2 id="broker-who-heading">Who This Is For</h2>
              <p>
                Our Brokerage Partner Program is built for offices that want a
                genuine recruiting and retention advantage &mdash; without
                adding a marketing budget line.
              </p>

              <ul className="broker-chips" aria-label="Who the brokerage partner program is for">
                {whoFor.map((item) => (
                  <li className="broker-chip" key={item}>
                    <Check size={14} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="broker-callout">
                <span className="broker-callout-icon" aria-hidden="true">
                  <FileDown size={18} />
                </span>
                <div>
                  <h3>Get the Brokerage One-Pager</h3>
                  <p>
                    A short PDF summary you can forward to your leadership
                    team.{" "}
                    <Link href="/contact-us">
                      Download it here{" "}
                      <span className="sr-only">
                        for the Photos 4 Real Estate brokerage partner program
                        one-pager
                      </span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="broker-who-photo">
              <Image
                src={whoPhotoSrc}
                alt="Vlad from Photos 4 Real Estate presenting at a real estate agency office"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="process-section broker-process-section"
        aria-labelledby="broker-process-heading"
      >
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="broker-process-heading">
              From First Call to a Live Partnership
            </h2>
            <p>
              No setup, no extra tools to learn &mdash; just a short
              conversation and a tailored program.
            </p>
          </div>
          <div className="process-steps">
            {processSteps.map((step) => (
              <div className="process-step" key={step.num}>
                <div className="step-num" aria-hidden="true">
                  {step.num}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <span className="step-arrow" aria-hidden="true">
                  <ArrowRight size={12} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS — dark variant */}
      <Reviews
        variant="dark"
        eyebrow="Calgary Reviews"
        heading={
          <>
            What Calgary agents say about{" "}
            <em>Photos 4 Real Estate</em>
          </>
        }
      />

      {/* FAQ */}
      <Faq
        faqs={faqs}
        heading="Brokerage Partnership FAQ"
        intro={
          <>
            Everything owners ask before rolling this out to their office.
            Have a question not covered here? Call or text us at{" "}
            <a
              href={siteConfig.phoneHref}
              className="faq-phone-link"
              aria-label={`Call or text Photos 4 Real Estate at ${siteConfig.phone}`}
            >
              {siteConfig.phone}
            </a>
            .
          </>
        }
        allFaqsLabelSuffix="the Photos 4 Real Estate brokerage partner program for Calgary"
      />

      {/* FINAL CTA */}
      <Cta
        eyebrow="Ready to Talk?"
        title="Give Your Agents a Reason to Stay — and New Agents a Reason to Join"
        description={
          <>
            Book a short, no-obligation conversation and we&rsquo;ll tailor a
            Brokerage Partner Program for your office.
          </>
        }
        primaryLabel="Book a Brokerage Consultation"
        primaryHref={discoveryCallUrl}
        primaryTargetBlank
        primarySrSuffix=" to discuss the Photos 4 Real Estate brokerage partner program — opens in a new tab"
        secondaryLabel="Download the One-Pager"
        secondaryHref="/contact-us"
        secondarySrSuffix=" for the Photos 4 Real Estate brokerage partner program"
      />

      <JsonLd id="ld-service-brokerage-partner-program" data={serviceSchema} />
      <JsonLd id="ld-faq-brokerage-partner-program" data={faqSchema} />
      <JsonLd id="ld-webpage-brokerage-partner-program" data={webPageSchema} />
    </>
  );
}
