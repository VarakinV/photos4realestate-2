import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Building2,
  Camera,
  Car,
  Check,
  ClipboardList,
  CloudSun,
  Film,
  Globe,
  Home,
  Image as ImageIcon,
  LayoutDashboard,
  MapPin,
  Drone,
  Sofa,
  Sparkles,
  Sunset,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { PricingPackages } from "@/components/prices/PricingPackages";
import { PromoCode } from "@/components/prices/PromoCode";
import { siteConfig } from "@/lib/site";
import { pricingFaqs } from "@/lib/faqs";
import { pricingTiers } from "@/lib/pricing";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/prices`;
const ogImageUrl = `${pageUrl}/opengraph-image`;

const title =
  "Real Estate Photography Prices Calgary | Photos 4 Real Estate";
const description =
  "Calgary real estate photography pricing: Essential $245, Skyline $345, Social Boost $485. iGUIDE 3D tour, RMS floor plans & next-day delivery. Book online today.";

export const metadata: Metadata = {
  title: "Real Estate Photography Prices Calgary",
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.shortName,
    locale: "en_CA",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Real Estate Photography Prices in Calgary — Photos 4 Real Estate",
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

const businessRef = { "@id": `${siteConfig.url}/#business` };

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${pageUrl}#product`,
  name: "Real Estate Photography Packages in Calgary",
  description,
  brand: businessRef,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "CAD",
    lowPrice: pricingTiers[0].essential,
    highPrice: pricingTiers[pricingTiers.length - 1].social,
    offerCount: 3,
    availability: "https://schema.org/InStock",
    url: pageUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: pageUrl,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-intro", ".speakable-faq"],
  },
};

const marketingKitItems = [
  {
    icon: Film,
    name: "9 Social Media Reels",
    desc: "Teaser video clips ready to post on Instagram, Facebook & TikTok",
  },
  {
    icon: Globe,
    name: "3 Property Websites",
    desc: "Branded single-property websites with your logo and contact info",
  },
  {
    icon: ClipboardList,
    name: "3 Property Flyers",
    desc: "Print-ready spec sheets for open houses and feature sheets",
  },
  {
    icon: ImageIcon,
    name: "2 Slideshows",
    desc: "Animated photo slideshows for email campaigns and social media",
  },
  {
    icon: CloudSun,
    name: "Blue-Sky Replacement",
    desc: "Grey skies replaced with bright blue on every exterior photo",
  },
  {
    icon: Award,
    name: "Rewards Points",
    desc: "Earn points on every order and redeem for discounts on future bookings",
  },
];

type CompareCell = "yes" | "no" | "addon";
type CompareRow =
  | { kind: "section"; label: string }
  | {
      kind: "feature";
      label: string;
      values: [CompareCell, CompareCell, CompareCell];
      labelHref?: string;
    };

const compareRows: CompareRow[] = [
  { kind: "section", label: "Photography" },
  { kind: "feature", label: "Interior & exterior photos", values: ["yes", "yes", "yes"] },
  { kind: "feature", label: "Blue-sky replacement", values: ["yes", "yes", "yes"] },
  { kind: "feature", label: "MLS, print & web formats", values: ["yes", "yes", "yes"] },
  { kind: "section", label: "iGUIDE & Floor Plans" },
  { kind: "feature", label: "iGUIDE 3D Virtual Tour", values: ["yes", "yes", "yes"] },
  { kind: "feature", label: "RMS Measurements", values: ["yes", "yes", "yes"] },
  { kind: "feature", label: "Standard 2D Floor Plan", values: ["yes", "yes", "yes"] },
  { kind: "feature", label: "iGUIDE analytics report", values: ["yes", "yes", "yes"] },
  {
    kind: "feature",
    label: "Premium 2D Floor Plan",
    values: ["addon", "addon", "addon"],
    labelHref: "/iguide-floor-plans-standard-vs-premium",
  },
  { kind: "section", label: "Aerial" },
  { kind: "feature", label: "Drone photos (5–10 images)", values: ["no", "yes", "yes"] },
  { kind: "feature", label: "Drone video footage", values: ["no", "no", "yes"] },
  { kind: "section", label: "Video" },
  { kind: "feature", label: "60-90 sec social media reel", values: ["addon", "addon", "yes"] },
  { kind: "section", label: "Free Marketing Kit" },
  { kind: "feature", label: "9 social media reels (teaser)", values: ["yes", "yes", "yes"] },
  { kind: "feature", label: "3 property websites", values: ["yes", "yes", "yes"] },
  { kind: "feature", label: "3 property flyers", values: ["yes", "yes", "yes"] },
  { kind: "feature", label: "2 slideshows", values: ["yes", "yes", "yes"] },
  { kind: "feature", label: "Rewards points", values: ["yes", "yes", "yes"] },
  { kind: "section", label: "Delivery" },
  { kind: "feature", label: "Next-day delivery", values: ["yes", "yes", "yes"] },
];

function CompareCellRender({ value }: { value: CompareCell }) {
  if (value === "yes") {
    return (
      <span className="check-yes" aria-label="Included">
        <Check size={16} strokeWidth={3} aria-hidden="true" />
      </span>
    );
  }
  if (value === "addon") {
    return <span className="check-addon">Add-on</span>;
  }
  return (
    <span className="check-no" aria-label="Not included">
      —
    </span>
  );
}

const billableYes = [
  "All interior areas of all floors",
  "Basement and below-grade areas",
  "Sunrooms",
  "Crawlspaces",
  "Rooms accessible only from outside",
  "Areas with sloped ceilings under 5 feet in height",
];

const billableNo = [
  "Attached garages (main building only)",
  "Cold rooms",
  "Areas open to below",
  "Balconies, decks, and patios",
  "Outdoor spaces",
];

type AlacarteRow = { label: string; price: string };
type AlacarteCard = {
  icon: typeof Camera;
  name: string;
  price: string;
  desc: string;
  rows?: AlacarteRow[];
  note?: string;
  reelDetails?: string[];
  link?: { href: string; label: string };
  span?: boolean;
};

const alacarteCards: AlacarteCard[] = [
  {
    icon: Camera,
    name: "Photos Only",
    price: "From $140",
    desc: "Interior & exterior photography without iGUIDE or RMS. Ideal if you already have floor plans or just need updated photos.",
    rows: [
      { label: "Up to 1,500 sq ft", price: "$140" },
      { label: "1,501–3,000 sq ft", price: "$160" },
      { label: "3,001–4,000 sq ft", price: "$180" },
      { label: "4,001–5,000 sq ft", price: "$200" },
      { label: "5,001–6,000 sq ft", price: "$220" },
    ],
    link: { href: "/services/real-estate-photography-in-calgary", label: "Learn more" },
  },
  {
    icon: LayoutDashboard,
    name: "iGUIDE Service",
    price: "From $150",
    desc: "RMS Measurements, Standard Floor Plans, and iGUIDE 3D Virtual Tour — without photography. Add to an existing photo package.",
    rows: [
      { label: "Up to 1,500 sq ft", price: "$150" },
      { label: "1,501–3,000 sq ft", price: "$200" },
      { label: "3,001–4,000 sq ft", price: "$250" },
      { label: "4,001–5,000 sq ft", price: "$300" },
      { label: "5,001–6,000 sq ft", price: "$350" },
    ],
    link: { href: "/services/iguide-virtual-tours-in-calgary", label: "Learn more" },
  },
  {
    icon: Drone,
    name: "Aerial Photos",
    price: "$125",
    desc: "5–10 professional drone photos showcasing the property from above.",
    note: "Some areas may not be accessible due to airspace restrictions. Appointments subject to weather conditions.",
    link: { href: "/services/real-estate-aerial-drone-photography-in-calgary", label: "Learn more" },
  },
  {
    icon: Film,
    name: "Cinematic Video",
    price: "$300",
    desc: "Up to 2-minute horizontal cinematic walkthrough video for websites and social media. Delivered within 36–48 hours.",
    reelDetails: [
      "Drone footage — included",
      "Agent voice-over — included",
      "Agent intro segment — included",
      "Revisions / music changes — $40 each",
    ],
    link: { href: "/services/real-estate-videos-in-calgary", label: "See examples" },
  },
  {
    icon: Sunset,
    name: "Twilight Photography",
    price: "$125",
    desc: "Dramatic golden-hour exterior photography at dusk. Add-on to any photo shoot — must be booked at the same visit.",
    rows: [
      { label: "Virtual Twilight", price: "$35 / image" },
    ],
    link: { href: "/services/twilight-photography-for-real-estate-in-calgary", label: "Learn more" },
  },
  {
    icon: Sofa,
    name: "Virtual Staging",
    price: "$35 / photo",
    desc: "Photorealistic digital furniture and décor added to vacant or empty rooms. Multiple style options available.",
    rows: [
      { label: "3 photos", price: "$100" },
      { label: "6 photos", price: "$200" },
      { label: "10 photos", price: "$300" },
    ],
    link: { href: "/services/virtual-staging", label: "See examples" },
  },
  {
    icon: Home,
    name: "Exterior Photos Only",
    price: "$85",
    desc: "5–10 professionally captured exterior photos showcasing curb appeal. Ideal for quick relists or exterior-only updates.",
  },
  {
    icon: Sparkles,
    name: "Signature Detail Shots",
    price: "$35",
    desc: "3–4 magazine-style close-up shots of premium finishes, designer fixtures, and standout details that attract discerning buyers.",
    link: { href: "/services/style-shots", label: "See examples" },
  },
  {
    icon: ClipboardList,
    name: "Premium 2D Floor Plans",
    price: "$0.06 / sq ft",
    desc: "Enhanced iGUIDE floor plans with higher precision, additional labeling, and customization options. $70 minimum charge.",
    link: { href: "/iguide-floor-plans-standard-vs-premium", label: "Standard vs Premium" },
  },
];

const travelCards = [
  {
    variant: "free" as const,
    icon: MapPin,
    area: "Within 35 km of Calgary City Centre",
    price: "Free",
  },
  {
    variant: "flat" as const,
    icon: Building2,
    area: "Chestermere, Airdrie, Okotoks, High River, Cochrane, Langdon",
    price: "$30 flat fee",
  },
  {
    variant: "km" as const,
    icon: Car,
    area: "Beyond 35 km from Calgary City Centre",
    price: "$0.85 / km",
  },
];



export default function PricesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Prices" },
        ]}
        jsonLdId="ld-breadcrumb-prices"
      />

      <section className="prices-page-hero" aria-labelledby="prices-hero-heading">
        <div className="container">
          <div className="prices-page-hero-inner">
            <div>
              <span className="prices-page-hero-eyebrow">Transparent Pricing</span>
              <h1 id="prices-hero-heading" className="speakable-intro">
                Calgary Real Estate Photography <em>Prices</em>
              </h1>
              <p className="prices-page-hero-sub">
                <strong>Photos 4 Real Estate</strong> offers three Calgary
                packages with one all-inclusive price per square footage tier.
                Every package includes <strong>iGUIDE 3D tour</strong>,{" "}
                <strong>RMS floor plans</strong>, blue-sky replacement and a
                free marketing kit. No hidden fees.
              </p>
              <ul className="hero-trust">
                <li className="hero-trust-item">
                  <span className="hero-trust-dot" aria-hidden="true" /> Next-day delivery
                </li>
                <li className="hero-trust-item">
                  <span className="hero-trust-dot" aria-hidden="true" /> MLS-ready files
                </li>
                <li className="hero-trust-item">
                  <span className="hero-trust-dot" aria-hidden="true" /> 5.0 / 5 on Google
                </li>
              </ul>
            </div>
            <aside className="hero-promo" aria-label="First-time realtor promo">
              <div className="promo-tag">First-Time Realtors</div>
              <div className="promo-pct">25%</div>
              <div className="promo-off">off your first booking</div>
              <PromoCode />
            </aside>
          </div>
        </div>
      </section>

      <PricingPackages />

      <section className="always-included" aria-labelledby="included-heading">
        <div className="container">
          <div className="ai-inner">
            <div className="ai-content">
              <span className="section-label ai-eyebrow">In Every Package</span>
              <h2 id="included-heading">Your Free Marketing Kit</h2>
              <p>
                Every package &mdash; regardless of size or price &mdash;
                includes this complete marketing toolkit at no extra cost. No
                other Calgary photographer includes all of this as standard.
              </p>
            </div>
            <div className="ai-grid">
              {marketingKitItems.map(({ icon: Icon, name, desc }) => (
                <div className="ai-item" key={name}>
                  <div className="ai-item-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <div className="ai-item-name">{name}</div>
                  <div className="ai-item-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="compare-section"
        id="compare"
        aria-labelledby="compare-heading"
      >
        <div className="container">
          <div className="compare-header">
            <span className="section-label">Side-by-Side</span>
            <h2 id="compare-heading">Compare Packages at a Glance</h2>
            <p>
              The full breakdown of what&rsquo;s included in each tier so you
              can pick the right one for your listing.
            </p>
          </div>
          <div className="compare-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Essential</th>
                  <th scope="col" className="featured-col">Skyline</th>
                  <th scope="col">Social Boost</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) =>
                  row.kind === "section" ? (
                    <tr key={`s-${i}`} className="section-row">
                      <td colSpan={4}>{row.label}</td>
                    </tr>
                  ) : (
                    <tr key={`f-${row.label}`}>
                      <td>
                        {row.labelHref ? (
                          <Link href={row.labelHref} className="compare-label-link">
                            {row.label}
                            <span className="sr-only">
                              {" "}&mdash; standard vs premium iGUIDE floor plans
                            </span>
                          </Link>
                        ) : (
                          row.label
                        )}
                      </td>
                      <td><CompareCellRender value={row.values[0]} /></td>
                      <td className="featured-col">
                        <CompareCellRender value={row.values[1]} />
                      </td>
                      <td><CompareCellRender value={row.values[2]} /></td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        className="alacarte-section"
        id="alacarte"
        aria-labelledby="alacarte-heading"
      >
        <div className="container">
          <div className="alacarte-header">
            <span className="section-label">Individual Services</span>
            <h2 id="alacarte-heading">À La Carte Services &amp; Add-Ons</h2>
            <p>
              Need just one service, or want to enhance your package? Add any
              of the following to your booking.
            </p>
          </div>
          <div className="alacarte-grid">
            {alacarteCards.map(({ icon: Icon, name, price, desc, rows, note, reelDetails, link }) => (
              <article key={name} className="alacarte-card">
                <div className="alacarte-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.6} />
                </div>
                <h3 className="alacarte-name">{name}</h3>
                <div className="alacarte-price">{price}</div>
                <p className="alacarte-desc">{desc}</p>
                {rows ? (
                  <table className="alacarte-table">
                    <tbody>
                      {rows.map((r) => (
                        <tr key={r.label}>
                          <td>{r.label}</td>
                          <td>{r.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : null}
                {note ? <p className="alacarte-note">{note}</p> : null}
                {reelDetails ? (
                  <div className="reel-note">
                    <h4>What&rsquo;s included</h4>
                    <ul>
                      {reelDetails.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {link ? (
                  <Link href={link.href} className="alacarte-link">
                    {link.label}{" "}
                    <span aria-hidden="true">→</span>
                    <span className="sr-only">
                      {" "}&mdash; {name} in Calgary
                    </span>
                  </Link>
                ) : null}
              </article>
            ))}

            <article className="alacarte-card alacarte-card-wide">
              <div className="alacarte-icon" aria-hidden="true">
                <Award size={24} strokeWidth={1.6} />
              </div>
              <h3 className="alacarte-name">Marketing Kit</h3>
              <div className="alacarte-price alacarte-price-free">Free</div>
              <p className="alacarte-desc">
                Included with every package at no cost: 3 property websites, 3
                property flyers, 9 social media reels, and 2 slideshows.
              </p>
              <Link href="/services/marketing-kit-for-realtors" className="alacarte-link">
                Explore marketing kit <span aria-hidden="true">→</span>
                <span className="sr-only">
                  {" "}&mdash; marketing kit for realtors
                </span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section
        className="billable-section"
        id="billable-area"
        aria-labelledby="billable-heading"
      >
        <div className="container">
          <div className="billable-inner">
            <h2 id="billable-heading">What Is the iGUIDE Billable Area?</h2>
            <div className="billable-col">
              <h3 className="billable-yes">
                Included in billable area
              </h3>
              <ul className="billable-list billable-yes-list">
                {billableYes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="billable-col">
              <h3 className="billable-no">
                Not included
              </h3>
              <ul className="billable-list billable-no-list">
                {billableNo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="travel-section" aria-labelledby="travel-heading">
        <div className="container">
          <div className="travel-inner">
            <div>
              <span className="section-label">Travel Fees</span>
              <h2 id="travel-heading">Service Area &amp; Travel Fees</h2>
              <p>
                We serve Calgary and surrounding communities. Travel within 35
                km of Calgary City Centre is always free. A small fee applies
                to select surrounding towns, and distance-based pricing applies
                beyond 35 km.
              </p>
              <p>
                Not sure if your property falls within the free zone?{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="travel-call-link"
                  aria-label={`Call Photos 4 Real Estate at ${siteConfig.phone} to confirm Calgary travel fees`}
                >
                  Give us a call
                </a>{" "}
                and we&rsquo;ll confirm before you book.
              </p>
            </div>
            <div className="travel-cards">
              {travelCards.map(({ variant, icon: Icon, area, price }) => (
                <div key={area} className={`travel-card travel-${variant}`}>
                  <div className="travel-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div className="travel-info">
                    <div className="travel-area">{area}</div>
                    <div className="travel-price">{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Faq
        heading="Pricing Questions"
        intro={
          <>
            Common questions about packages, square footage tiers and add-ons.
            Need a quote for a specific listing? Call or text us at{" "}
            <a
              href={siteConfig.phoneHref}
              className="faq-phone-link"
              aria-label={`Call Photos 4 Real Estate at ${siteConfig.phone} for a Calgary real estate photography quote`}
            >
              {siteConfig.phone}
            </a>
            .
          </>
        }
        faqs={pricingFaqs}
        allFaqsLabelSuffix="frequently asked questions about Calgary real estate photography pricing"
      />

      <Cta
        eyebrow="Ready to book?"
        title="Lock in your Calgary shoot at the rate that fits."
        description={
          <>
            Pick your package, choose your date, and we&rsquo;ll handle the
            rest &mdash; photos, drone, iGUIDE and floor plans delivered the
            next business day.
          </>
        }
        secondaryHref="/contact-us"
        secondaryLabel="Ask a Question"
        secondarySrSuffix=" about Calgary real estate photography pricing"
      />

      <JsonLd id="ld-prices-product" data={productSchema} />
      <JsonLd id="ld-prices-faq" data={faqSchema} />
      <JsonLd id="ld-prices-speakable" data={speakableSchema} />
    </>
  );
}

