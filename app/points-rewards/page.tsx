import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeDollarSign,
  Camera,
  Check,
  CircleCheck,
  Drone,
  ExternalLink,
  FileText,
  Gift,
  HeartHandshake,
  Images,
  KeyRound,
  MessageSquareShare,
  Moon,
  QrCode,
  Share2,
  Sparkles,
  Star,
  TrendingUp,
  UserPlus,
  Video,
} from "lucide-react";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import type { Faq as FaqItem } from "@/lib/faqs";
import { freeTools, serviceAreas, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/points-rewards`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const businessId = `${siteConfig.url}/#business`;
const clientPortalUrl = "https://app.photos4realestate.ca/";

const title = "Points Rewards Program Calgary | Photos 4 Real Estate";
const description =
  "Earn points on Calgary real estate photography orders, reviews, and referrals. Redeem rewards for drone, reels, staging, twilight, and detail shots.";

const earnMethods = [
  {
    icon: <Camera size={24} aria-hidden="true" />,
    title: "Place orders with us",
    points: "Automatic points",
    text: "Earn points for every completed photography, video, floor plan, iGUIDE, drone, staging, or marketing service you book with Photos 4 Real Estate.",
  },
  {
    icon: <MessageSquareShare size={24} aria-hidden="true" />,
    title: "Leave a verified 5-star review",
    points: "3,500 points",
    text: "Receive points when you leave a verified 5-star review on Google, Facebook, or Yelp after working with our Calgary real estate media team.",
  },
  {
    icon: <UserPlus size={24} aria-hidden="true" />,
    title: "Refer our business",
    points: "5,000 points",
    text: "Earn points when you refer another realtor or client who completes an order with Photos 4 Real Estate.",
  },
] as const;

const redemptionOptions = [
  {
    icon: <Drone size={22} aria-hidden="true" />,
    title: "Drone Photography",
    points: "12,500",
    text: "Add aerial property context, lot views, exterior angles, and neighbourhood perspective to your listing.",
    href: "/services/real-estate-aerial-drone-photography-in-calgary",
  },
  {
    icon: <Video size={22} aria-hidden="true" />,
    title: "Social Media Reel Video",
    points: "30,000",
    text: "Redeem points toward a video reel for Instagram, Facebook, TikTok, and listing promotion.",
    href: "/services/real-estate-videos-in-calgary",
  },
  {
    icon: <Sparkles size={22} aria-hidden="true" />,
    title: "Virtual Staging — 1 Photo",
    points: "3,500",
    text: "Redeem points for one virtually staged image to help buyers visualize a vacant room.",
    href: "/services/virtual-staging",
  },
  {
    icon: <Sparkles size={22} aria-hidden="true" />,
    title: "Virtual Staging — 3 Photos",
    points: "10,000",
    text: "Redeem points for three virtually staged images when a listing needs stronger visual transformation across multiple rooms.",
    href: "/services/virtual-staging",
  },
  {
    icon: <Moon size={22} aria-hidden="true" />,
    title: "Virtual Twilight — 1 Photo",
    points: "3,500",
    text: "Create a dramatic twilight-style exterior image when an in-person twilight session is not required.",
    href: "/services/twilight-photography-for-real-estate-in-calgary",
  },
  {
    icon: <Images size={22} aria-hidden="true" />,
    title: "Detailed Interior Shots",
    points: "3,500",
    text: "Redeem points for 3–4 magazine-style close-ups that highlight finishes, décor, and design details.",
    href: "/services/style-shots",
  },
] as const;

const valueReasons = [
  "Rewards long-term relationships with Calgary realtors",
  "Helps reduce listing marketing costs over time",
  "Encourages stronger listing presentation with professional add-ons",
  "Adds measurable value to every completed order",
  "Works alongside included marketing extras and free tools",
] as const;

const freeToolCards = [
  {
    ...freeTools[0],
    icon: <Video size={22} aria-hidden="true" />,
    text: "Create short vertical listing reels from your property photos.",
  },
  {
    ...freeTools[1],
    icon: <Images size={22} aria-hidden="true" />,
    text: "Turn listing photos into an animated slideshow for email and social media.",
  },
  {
    ...freeTools[2],
    icon: <FileText size={22} aria-hidden="true" />,
    text: "Generate print-ready property flyers for open houses and listing promotion.",
  },
  {
    ...freeTools[3],
    icon: <QrCode size={22} aria-hidden="true" />,
    text: "Build branded QR codes for flyers, sign riders, print ads, and websites.",
  },
] as const;

const faqs: FaqItem[] = [
  {
    q: "Do points expire?",
    a: "Points do not expire as long as your Photos 4 Real Estate account remains active.",
  },
  {
    q: "How soon are points added to my account?",
    a: "Points are added automatically after eligible services are completed, or after reviews and referrals are verified by our team.",
  },
  {
    q: "Can I combine points with discounts or promotions?",
    a: "Yes. Points can usually be combined with eligible promotions unless a specific promotion states otherwise.",
  },
  {
    q: "What services can I redeem points for?",
    a: "Points can currently be redeemed for select à la carte real estate marketing services, including drone photography, social media reels, virtual staging, virtual twilight, and detailed interior Style Shots.",
  },
  {
    q: "Is the points program available outside Calgary?",
    a: "The points program is currently available to Photos 4 Real Estate clients in Calgary and surrounding areas, including nearby communities such as Airdrie, Okotoks, Cochrane, Chestermere, and Rocky View County.",
  },
  {
    q: "Do I need to sign up for the rewards program?",
    a: "No separate sign-up is required. Points are tracked for Photos 4 Real Estate clients automatically, and you can contact us if you need access to your client portal.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(faqs),
};

const rewardsProgramSchema = {
  "@context": "https://schema.org",
  "@type": "ProgramMembership",
  "@id": `${pageUrl}#rewards-program`,
  programName: "Photos 4 Real Estate Points & Rewards Program",
  hostingOrganization: { "@id": businessId },
  description,
  memberBenefits: [
    "Earn points on completed real estate photography and marketing orders",
    "Earn 3,500 points for verified 5-star reviews",
    "Earn 5,000 points for referrals that complete an order",
    "Redeem points for select real estate marketing add-on services",
  ],
};

const redemptionSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Points Redemption Options for Calgary Realtors",
  url: pageUrl,
  itemListElement: redemptionOptions.map((option, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: option.title,
    url: `${siteConfig.url}${option.href}`,
    description: `${option.text} Requires ${option.points} points.`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: option.points.replace(/,/g, ""),
      unitText: "points",
    },
  })),
};

const freeToolsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Real Estate Marketing Tools for Rewards Members",
  url: `${siteConfig.url}/free-tools`,
  itemListElement: freeTools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: tool.name,
      url: `${siteConfig.url}${tool.href}`,
      applicationCategory: "BusinessApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    },
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
  alt: "Points and rewards program for Calgary realtors — Photos 4 Real Estate",
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

export default function PointsRewardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Points & Rewards" }]}
        jsonLdId="ld-breadcrumb-points-rewards"
      />

      <section className="services-page-hero points-hero" aria-labelledby="points-hero-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Calgary Realtor Loyalty Program</div>
              <h1 id="points-hero-title">
                Calgary Real Estate Photography <em>Points &amp; Rewards</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                Photos 4 Real Estate rewards Calgary realtors for the activities they already do: booking listing media, sharing their experience, and referring trusted partners. Earn points automatically and redeem them for valuable add-on services that make listings stand out.
              </p>
              <div className="tool-detail-hero-actions">
                <a href={clientPortalUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Check Points Balance
                  <span className="sr-only"> in the Photos 4 Real Estate client portal</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
                <Link href="/free-tools" className="btn btn-outline">
                  Explore Free Tools
                  <span className="sr-only"> for Calgary real estate marketing</span>
                </Link>
              </div>
            </div>
            <ul className="services-page-hero-stats" aria-label="Points and rewards program highlights">
              <li className="services-page-hero-stat"><span className="num">3.5K</span><span className="lbl">Points for verified 5-star reviews</span></li>
              <li className="services-page-hero-stat"><span className="num">5K</span><span className="lbl">Points for qualified referrals</span></li>
              <li className="services-page-hero-stat"><span className="num">$0</span><span className="lbl">No sign-up fee or subscription</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="points-intro-section" aria-labelledby="points-intro-heading">
        <div className="container">
          <div className="tool-detail-intro-grid">
            <div className="tool-detail-copy">
              <span className="section-label">Earn Points. Save on Services.</span>
              <h2 id="points-intro-heading">More Value from Every Calgary Listing</h2>
              <p className="lead speakable-intro">
                The Photos 4 Real Estate Points &amp; Rewards Program is a loyalty system for clients in Calgary and surrounding areas. Points are tracked for you and can be redeemed toward professional real estate marketing services such as drone photography, reels, virtual staging, virtual twilight, and Style Shots.
              </p>
              <p>
                There are no sign-up forms, subscriptions, or manual spreadsheets. Points are added to your account after eligible services are completed, reviews are verified, or qualified referrals place an order.
              </p>
              <p>
                Rewards pair well with our included <Link href="/services/marketing-kit-for-realtors" className="body-link">marketing kit for Calgary realtors<span className="sr-only"> from Photos 4 Real Estate</span></Link>, professional <Link href="/services/real-estate-photography-in-calgary" className="body-link">real estate photography<span className="sr-only"> in Calgary</span></Link>, and the free tools available on this website. If you want a side-by-side breakdown of what is included, review our <Link href="/real-estate-photography-comparison-calgary" className="body-link">real estate photography comparison in Calgary</Link>.
              </p>
            </div>
            <div className="points-summary-card">
              <div className="points-card-icon points-summary-icon" aria-hidden="true">
                <Award size={24} aria-hidden="true" />
              </div>
              <h3>Program at a glance</h3>
              <ul>
                <li><CircleCheck size={16} aria-hidden="true" />Automatic points tracking</li>
                <li><CircleCheck size={16} aria-hidden="true" />No separate sign-up required</li>
                <li><CircleCheck size={16} aria-hidden="true" />Redeem toward select add-ons</li>
                <li><CircleCheck size={16} aria-hidden="true" />Built for Calgary realtors</li>
              </ul>
              <a href={siteConfig.emailHref} className="btn btn-outline-dark" aria-label={`Email Photos 4 Real Estate at ${siteConfig.email} about rewards points`}>
                Ask About My Points
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="points-how-section" aria-labelledby="points-how-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">How It Works</span>
            <h2 id="points-how-heading">How the Points Program Works</h2>
            <p>The program rewards the listing marketing habits you already use: ordering professional media, promoting your listings, and recommending Photos 4 Real Estate to other agents or property owners.</p>
          </div>
          <div className="points-process-grid">
            <article className="points-process-card">
              <span className="points-step">01</span>
              <div className="points-card-icon"><Camera size={24} aria-hidden="true" /></div>
              <h3>Book eligible services</h3>
              <p>Order photography, floor plans, iGUIDE, video, drone, staging, or add-on services through Photos 4 Real Estate.</p>
            </article>
            <article className="points-process-card">
              <span className="points-step">02</span>
              <div className="points-card-icon"><Gift size={24} aria-hidden="true" /></div>
              <h3>Points are added automatically</h3>
              <p>Your points balance is tracked in your client account after orders are completed or reward actions are verified.</p>
            </article>
            <article className="points-process-card">
              <span className="points-step">03</span>
              <div className="points-card-icon"><BadgeDollarSign size={24} aria-hidden="true" /></div>
              <h3>Redeem for add-ons</h3>
              <p>Use points toward select à la carte services that help listings look more polished and perform better online.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="points-earn-section" aria-labelledby="points-earn-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">How to Earn</span>
            <h2 id="points-earn-heading">How Calgary Realtors Earn Points</h2>
            <p>Earning points is simple and automatic. Build your rewards balance through completed orders, verified reviews, and qualified referrals.</p>
          </div>
          <div className="points-earn-grid">
            {earnMethods.map((method) => (
              <article className="points-earn-card" key={method.title}>
                <div className="points-card-icon">{method.icon}</div>
                <span className="points-pill">{method.points}</span>
                <h3>{method.title}</h3>
                <p>{method.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="points-redemption-section" aria-labelledby="points-redemption-heading">
        <div className="container">
          <div className="points-redemption-header">
            <div>
              <span className="section-label">Redeem Points</span>
              <h2 id="points-redemption-heading">Points Redemption Options</h2>
              <p>Exchange earned points for professional add-on services that enhance listing presentation and save marketing budget over time.</p>
            </div>
            <div className="points-redemption-note">
              <Star size={18} aria-hidden="true" />
              Point values can be confirmed when you request redemption.
            </div>
          </div>
          <div className="points-reward-grid">
            {redemptionOptions.map((option) => (
              <article className="points-reward-card" key={option.title}>
                <div className="points-card-icon">{option.icon}</div>
                <div className="points-reward-points"><strong>{option.points}</strong><span>points</span></div>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
                <Link href={option.href} className="points-card-link">
                  Learn more<span className="sr-only"> about {option.title} for Calgary real estate listings</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p className="points-redeem-contact">
            Points can be redeemed by contacting our team directly at <a href={siteConfig.phoneHref} aria-label={`Call Photos 4 Real Estate at ${siteConfig.phone}`}>{siteConfig.phone}</a> or <a href={siteConfig.emailHref} aria-label={`Email Photos 4 Real Estate at ${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>

      <section className="points-value-section" aria-labelledby="points-value-heading">
        <div className="container">
          <div className="points-value-grid">
            <div>
              <span className="section-label">Why We Built It</span>
              <h2 id="points-value-heading">A Rewards Program Made for Real Estate Marketing</h2>
              <p>
                Most real estate photography providers offer similar services at similar prices. We wanted to deliver more long-term value for clients who trust us with every listing.
              </p>
              <p>
                Combined with included marketing extras — such as reels, slideshows, flyers, and property websites — our points program makes Photos 4 Real Estate one of the most value-driven real estate photography providers in Calgary.
              </p>
            </div>
            <ul className="points-value-list">
              {valueReasons.map((reason) => (
                <li key={reason}><Check size={16} aria-hidden="true" />{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="points-portal-section" aria-labelledby="points-portal-heading">
        <div className="container">
          <div className="points-portal-card">
            <div className="points-portal-icon"><KeyRound size={28} aria-hidden="true" /></div>
            <div>
              <span className="section-label">Client Portal</span>
              <h2 id="points-portal-heading">How to Check Your Points Balance</h2>
              <p>Your points are updated automatically in your client account. Log into your portal to view your current balance, or contact us if you do not yet have access.</p>
              <ul>
                <li><CircleCheck size={16} aria-hidden="true" />Points are updated automatically</li>
                <li><CircleCheck size={16} aria-hidden="true" />No manual tracking is required</li>
                <li><CircleCheck size={16} aria-hidden="true" />Portal access can be created for active clients</li>
              </ul>
            </div>
            <div className="points-portal-actions">
              <a href={clientPortalUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Open Client Portal
                <span className="sr-only"> to check Photos 4 Real Estate points balance</span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
              <a href={siteConfig.emailHref} className="btn btn-outline-dark" aria-label={`Email Photos 4 Real Estate at ${siteConfig.email} for client portal access`}>
                Request Access
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="points-tools-section" aria-labelledby="points-tools-heading">
        <div className="container">
          <div className="tool-detail-centered">
            <span className="section-label">Points + Free Marketing Tools</span>
            <h2 id="points-tools-heading">Maximize Marketing Impact Without Extra Software</h2>
            <p>In addition to earning points, Photos 4 Real Estate clients can use our free marketing tools to promote listings faster and more efficiently.</p>
          </div>
          <div className="points-tools-grid">
            {freeToolCards.map((tool) => (
              <Link href={tool.href} className="points-tool-card" key={tool.href}>
                <div className="points-card-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <p>{tool.text}</p>
                <span>Open tool<span className="sr-only">: {tool.name} for Calgary real estate marketing</span><ArrowRight size={14} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="points-areas-section areas-section" aria-labelledby="points-areas-heading">
        <div className="container">
          <div className="areas-inner points-areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="points-areas-heading">Rewards for Calgary &amp; Surrounding Areas</h2>
              <p>The points program is currently available to Photos 4 Real Estate clients in Calgary and nearby communities where we provide real estate photography and media services.</p>
              <ul className="areas-chips" aria-label="Points rewards program service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link href="/service-areas" className="area-chip" aria-label={`Real estate photography rewards in ${area}`}>
                      <Share2 size={12} aria-hidden="true" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="points-areas-panel">
              <TrendingUp size={28} aria-hidden="true" />
              <h3>Book more listings. Build more value.</h3>
              <p>Every eligible order helps grow your points balance while your listings receive professional media, fast delivery, and built-in marketing support.</p>
            </div>
          </div>
        </div>
      </section>

      <Faq
        faqs={faqs}
        heading="Points & Rewards FAQ"
        intro="Answers to common questions about earning points, redeeming rewards, client portal access, promotions, and Calgary availability."
        allFaqsLabelSuffix="Photos 4 Real Estate points and rewards for Calgary realtors"
        sectionClassName="faq-section-points"
      />

      <Cta
        eyebrow="Start Earning Points"
        title="Book Your Next Calgary Listing and Build Rewards"
        description={<>Schedule professional real estate photography, add the services your listing needs, and let your points balance grow automatically with Photos 4 Real Estate.</>}
        secondaryHref="/services/marketing-kit-for-realtors"
        secondaryLabel="View Marketing Kit"
        secondarySrSuffix=" included with Calgary real estate photography packages"
      />

      <JsonLd id="ld-faq-points-rewards" data={faqSchema} />
      <JsonLd id="ld-program-points-rewards" data={rewardsProgramSchema} />
      <JsonLd id="ld-redemptions-points-rewards" data={redemptionSchema} />
      <JsonLd id="ld-free-tools-points-rewards" data={freeToolsSchema} />
      <JsonLd id="ld-webpage-points-rewards" data={webPageSchema} />
    </>
  );
}