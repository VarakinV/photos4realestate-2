import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  ArrowRight,
  BarChart3,
  Building2,
  Camera,
  CalendarDays,
  Check,
  Clock,
  CloudSun,
  FileText,
  Gem,
  House,
  Images,
  Lightbulb,
  Leaf,
  MapPin,
  Mountain,
  Snowflake,
  Sparkles,
  Sprout,
  Smartphone,
  Sun,
  Sunset,
  Drone,
  Waves,
} from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BeforeAfter } from "@/components/bits/BeforeAfter";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Reviews } from "@/components/home/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig, serviceAreas } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";
import { twilightImages } from "@/lib/images";
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  reviews as reviewItems,
  toIsoDate,
} from "@/lib/reviews";

export const dynamic = "force-static";

const slug = "twilight-photography-for-real-estate-in-calgary";
const content = servicesContent[slug];
const pageUrl = `${siteConfig.url}/services/${slug}`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const businessId = `${siteConfig.url}/#business`;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: content.seoTitle },
    description: content.seoDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      title: content.seoTitle,
      description: content.seoDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_CA",
      images: [
        { url: ogImageUrl, width: 1200, height: 630, alt: content.ogAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.seoDescription,
      images: [ogImageUrl],
    },
  };
}

const businessRef = { "@id": businessId };

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Twilight Real Estate Photography",
  serviceType: "Twilight Photography",
  description: content.seoDescription,
  url: pageUrl,
  provider: businessRef,
  areaServed: "Calgary and surrounding areas",
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "125",
    url: `${siteConfig.url}/prices`,
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(content.faqs),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessId,
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
    author: {
      "@type": "Person",
      name: review.name,
    },
    itemReviewed: {
      "@id": businessId,
    },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: toIsoDate(review.date),
    publisher: {
      "@type": "Organization",
      name: "Google",
    },
  })),
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

const checklist = [
  {
    title: "Turn on every interior light in the house",
    desc: "Every room, every closet, every bathroom. Interior warmth is the heart of twilight photography — more light equals more impact.",
  },
  {
    title: "Turn on all exterior lights",
    desc: "Landscape lighting, pot lights, pathway lights, garage lights, and any architectural uplighting. All exterior lights should be on.",
  },
  {
    title: "Remove vehicles from driveway and street",
    desc: "Cars in frame distract from the home. Move them off the property entirely if possible.",
  },
  {
    title: "Open blinds and curtains in all front-facing rooms",
    desc: "Visible window treatments are distracting. Open blinds allow interior light to glow through evenly and warmly.",
  },
  {
    title: "Replace any burnt-out bulbs before the shoot",
    desc: "A dark window in a twilight photo is immediately noticeable. Check every visible light fitting the day before.",
  },
  {
    title: "Clear the front of the property",
    desc: "Remove garbage bins, garden hoses, toys, and any items on the driveway or front walkway.",
  },
  {
    title: "If you have a fireplace, light it",
    desc: "A glowing fireplace visible through a front window adds extraordinary warmth to a twilight exterior shot.",
  },
] as const;

const seasonalTiming = [
  {
    season: "Summer",
    time: "9:00–9:45 PM",
    note: "Late bookings — plan accordingly. Long daylight hours mean spectacular sky colour.",
    icon: <Sun size={16} aria-hidden="true" />,
  },
  {
    season: "Fall",
    time: "7:00–7:45 PM",
    note: "Excellent atmospheric colour and manageable shoot times.",
    icon: <Leaf size={16} aria-hidden="true" />,
  },
  {
    season: "Winter",
    time: "4:30–5:15 PM",
    note: "Early sunset makes twilight easy to schedule within business hours. Snow adds reflective foreground.",
    icon: <Snowflake size={16} aria-hidden="true" />,
  },
  {
    season: "Spring",
    time: "8:00–8:45 PM",
    note: "Increasingly popular as days lengthen. Dramatic spring skies produce exceptional results.",
    icon: <Sprout size={16} aria-hidden="true" />,
  },
] as const;

const deliverables = [
  {
    icon: <Camera size={22} aria-hidden="true" />,
    title: "High-Resolution Twilight Photos",
    desc: "A carefully curated set of 3 to 6 exterior images (front, rear, and key architectural angles) captured at the perfect moment of dusk.",
    tag: "Core Deliverable",
  },
  {
    icon: <CloudSun size={22} aria-hidden="true" />,
    title: "Advanced Sky Replacement",
    desc: "If the natural sunset isn't spectacular, we digitally replace the sky with a vibrant, dramatic sunset or dusk sky for maximum impact.",
    tag: "Always Included Free",
  },
  {
    icon: <FileText size={22} aria-hidden="true" />,
    title: "MLS & Print-Ready Files",
    desc: "Delivered in both high-resolution formats for print marketing and web-optimized sizes for immediate MLS and social media upload.",
    tag: "Core Deliverable",
  },
  {
    icon: <Clock size={22} aria-hidden="true" />,
    title: "Fast Turnaround",
    desc: "Twilight edits require extra care, but we still ensure you receive the final files within 24 to 36 hours of the shoot.",
    tag: "Priority Service",
  },
] as const;


const relatedCards = [
  {
    href: "/services/real-estate-photography-in-calgary",
    icon: <Images size={22} aria-hidden="true" />,
    title: "Real Estate Photography",
    desc: "Professional daytime interior and exterior photos to complement your twilight hero shots. Essential for every listing.",
    srSuffix: "Real Estate Photography in Calgary",
  },
  {
    href: "/services/virtual-staging",
    icon: <Armchair size={22} aria-hidden="true" />,
    title: "Virtual Staging",
    desc: "Digitally furnish vacant homes so they look as warm and inviting on the inside as your twilight photos make them look on the outside.",
    srSuffix: "Virtual Staging in Calgary",
  },
  {
    href: "/services/real-estate-aerial-drone-photography-in-calgary",
    icon: <Drone size={22} aria-hidden="true" />,
    title: "Drone Photography",
    desc: "Capture aerial views of the property. We can even capture twilight aerials to show the illuminated property and neighbourhood context at dusk.",
    srSuffix: "Aerial Drone Photography in Calgary",
  },
] as const;

const lightTimeline = [
  {
    tone: "morning",
    time: "Morning",
    title: "Flat or Harsh Light",
    desc: "Depending on sun angle, morning light can be flat or produce harsh directional shadows across the façade — inconsistent for exterior photography.",
  },
  {
    tone: "afternoon",
    time: "Afternoon",
    title: "Standard Daylight",
    desc: "Clear blue sky, good detail, accurate colour rendering. The standard for MLS exterior photos — functional but not dramatic. Windows appear dark and empty.",
  },
  {
    tone: "twilight",
    time: "Golden Hour (15–30 min after sunset)",
    title: "The Twilight Sweet Spot",
    desc: "Sky brightness matches interior light level. Deep blue gradient overhead, warm amber glow from windows, soft natural edge lighting on the façade. This is the window we shoot in — every time.",
  },
  {
    tone: "night",
    time: "Night",
    title: "Too Dark",
    desc: "Interior lights are now vastly brighter than the black sky. Images look unnatural and the property loses context. The golden hour window has passed.",
  },
] as const;

const lightElements = [
  {
    icon: <CloudSun size={20} aria-hidden="true" />,
    title: "Deep Blue Sky Gradient",
    desc: "The sky at the golden hour transitions from warm orange at the horizon to deep cobalt blue overhead. This gradient provides a naturally dramatic backdrop that no blue-sky replacement can replicate — it is real, atmospheric, and contextual.",
  },
  {
    icon: <Lightbulb size={20} aria-hidden="true" />,
    title: "Warm Window Glow",
    desc: "Interior lights — with all lights turned on — cast a warm amber glow through windows that creates an immediate impression of warmth, life, and habitation. Buyers subconsciously imagine themselves inside, looking out at the evening. This is the emotional hook that drives engagement.",
  },
  {
    icon: <House size={20} aria-hidden="true" />,
    title: "Soft Exterior Edge Lighting",
    desc: "The residual sky light at the golden hour provides gentle, directional illumination of the exterior façade — revealing architectural texture, roofline detail, and landscaping without the harsh shadows or blown-out highlights of full daylight.",
  },
] as const;

const twilightComparisons = [
  {
    beforeSrc: twilightImages.compareCalgaryDay,
    afterSrc: twilightImages.compareCalgaryTwilight,
    beforeAlt:
      "Daytime exterior photo of a Calgary home before twilight photography by Photos 4 Real Estate",
    afterAlt:
      "Twilight exterior photo of the same Calgary home by Photos 4 Real Estate",
    title: "Exterior — front façade",
    location: "Calgary home comparison",
  },
  {
    beforeSrc: twilightImages.compareCanyonDay,
    afterSrc: twilightImages.compareCanyonTwilight,
    beforeAlt:
      "Luxury Canyon Meadows Calgary home photographed during the day by Photos 4 Real Estate",
    afterAlt:
      "Same luxury Canyon Meadows Calgary home photographed at twilight by Photos 4 Real Estate",
    title: "Luxury exterior curb appeal",
    location: "Canyon Meadows, Calgary",
  },
] as const;

const idealProperties = [
  {
    icon: <Gem size={22} aria-hidden="true" />,
    title: "Luxury & Estate Homes",
    desc: "Premium properties deserve premium imagery. Twilight photos consistently outperform daylight shots for high-end listings — they communicate quality, exclusivity, and attention to detail that matches the price point.",
  },
  {
    icon: <Building2 size={22} aria-hidden="true" />,
    title: "Strong Architectural Features",
    desc: "Properties with distinctive rooflines, stone or brick exteriors, large windows, covered entries, or statement landscaping look exceptional at dusk — the soft light enhances texture and depth in a way daylight cannot.",
  },
  {
    icon: <Lightbulb size={22} aria-hidden="true" />,
    title: "Properties with Exterior Lighting",
    desc: "Homes with landscape lighting, pot lights under soffits, lit pathways, or architectural uplighting are dramatically enhanced at twilight — the designed lighting comes to life and makes the property look professionally landscaped.",
  },
  {
    icon: <Waves size={22} aria-hidden="true" />,
    title: "Lakefront & Backing Green Space",
    desc: "Properties backing onto lakes, ponds, or parks look extraordinary at dusk — the water reflects the evening sky, and the contrast between the illuminated home and the darkening natural backdrop is unmatched in impact.",
  },
  {
    icon: <Mountain size={22} aria-hidden="true" />,
    title: "City Views & Mountain Vistas",
    desc: "If your listing has a view of the Calgary skyline or the Rockies, twilight is the single best time to capture it. The city lights begin to emerge, the mountains take on a purple-blue silhouette — and no buyer forgets that photo.",
  },
  {
    icon: <Smartphone size={22} aria-hidden="true" />,
    title: "Social Media & Marketing-Forward Realtors",
    desc: "Twilight photos generate 2–3× more engagement than standard exterior photos on Instagram and Facebook. If you're active on social media, one twilight shot as your hero post can significantly outperform a full album of daytime images.",
  },
] as const;

export default function TwilightPhotographyCalgaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Twilight Photography" },
        ]}
        jsonLdId={`ld-breadcrumb-${slug}`}
      />

      <section
        className="services-page-hero"
        aria-labelledby="twilight-hero-title"
      >
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">
                Twilight Photography &middot; Calgary, AB
              </div>
              <h1 id="twilight-hero-title">
                Twilight Photography
                <br />
                for <em>Real Estate in Calgary</em>
              </h1>
              <p className="services-page-hero-sub speakable-intro">
                <strong>Photos 4 Real Estate</strong> provides stunning{" "}
                <strong>twilight exterior photography</strong> for Calgary realtors.
                Stand out on MLS with warm interior glows, dramatic skies, and
                the strongest hero images in the market.
              </p>
            </div>

            <ul
              className="services-page-hero-stats photo-hero-stats"
              aria-label="Twilight photography key stats"
            >
              <li className="services-page-hero-stat">
                <span className="num">#1</span>
                <span className="lbl">Highest click-rate</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">24h</span>
                <span className="lbl">Fast delivery</span>
              </li>
              <li className="services-page-hero-stat">
                <span className="num">$125</span>
                <span className="lbl">Add-on price</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <PageBody />

      <JsonLd id={`ld-service-${slug}`} data={serviceSchema} />
      <JsonLd id={`ld-faq-${slug}`} data={faqSchema} />
      <JsonLd id={`ld-reviews-${slug}`} data={reviewSchema} />
      <JsonLd id={`ld-speakable-${slug}`} data={speakableSchema} />
    </>
  );
}

function PageBody() {
  return (
    <>
      <section
        className="photo-intro-section twilight-intro-section"
        aria-labelledby="photo-intro-heading"
      >
        <div className="container">
          <div className="photo-intro-grid twilight-intro-grid">
            <div className="photo-intro-content twilight-intro-content">
              <span className="section-label">What We Do</span>
              <h2 id="photo-intro-heading">
                Professional Twilight Photography for Calgary Real Estate
              </h2>
              <p className="lead speakable-intro">
                Twilight photography is a specialty real estate service that
                captures the exterior of a property during the brief window just
                after sunset — when the sky shifts from orange and pink to deep
                blue, and the warm interior lights of the home glow through the
                windows. The result is one of the most visually powerful images
                in real estate marketing.
              </p>
              <p>
                Standard daytime exterior photography shows a property clearly
                and accurately. Twilight photography does something different —
                it creates an emotional impression. The warmth of glowing
                windows against a darkening sky communicates comfort, luxury,
                and desirability in a way that no amount of sunshine and blue
                sky can replicate.
              </p>
              <p>
                Twilight photography is available as a $125 add-on to any
                photography booking. Our photographer schedules the visit to
                complete all interior and daylight exterior photography first,
                then waits on-site through sunset to capture the twilight shots
                — all in one property visit. The{" "}
                <Link
                  href="/services/real-estate-photography-in-calgary"
                  className="body-link"
                >
                  standard photography
                </Link>{" "}
                and twilight images are delivered together the next morning.
              </p>
              <div className="twilight-golden-card" aria-label="The golden hour explained">
                <h3>
                  <Sunset size={18} aria-hidden="true" />
                  <span>What Is the GoldenHour?</span>
                </h3>
                <p>
                  The golden hour is the 15–30 minute period just after sunset
                  when the sun is below the horizon but the sky is still
                  illuminated with a deep golden gradient. At this exact moment,
                  the brightness of the sky closely matches the brightness of
                  interior artificial lighting — creating the perfect balance
                  for twilight photography. Shoot too early and the sky is too
                  bright; too late and it goes completely dark. Our photographers
                  know exactly when to shoot.
                </p>
              </div>
              <ul
                className="photo-stat-row twilight-stat-row"
                aria-label="Golden hour twilight photography stats"
              >
                <li className="photo-stat-cell twilight-stat-cell">
                  <span className="num">3×</span>
                  <span className="lbl">more social media engagement vs day shots</span>
                </li>
                <li className="photo-stat-cell twilight-stat-cell">
                  <span className="num">30 min</span>
                  <span className="lbl">optimal shooting window at dusk</span>
                </li>
                <li className="photo-stat-cell twilight-stat-cell">
                  <span className="num">$125</span>
                  <span className="lbl">same-visit add-on</span>
                </li>
              </ul>
            </div>
            <div className="photo-intro-visual twilight-intro-visual">
              <div className="photo-intro-img twilight-intro-img">
                <div className="photo-intro-pill twilight-intro-pill">
                  <span className="twilight-pill-dot" aria-hidden="true" />
                  The ultimate MLS hero shot
                </div>
                <Image
                  src={twilightImages.calgaryHero}
                  alt="Twilight photo of a Calgary home with warm interior glow captured during golden hour by Photos 4 Real Estate"
                  width={1200}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
              <div className="photo-intro-img-secondary twilight-intro-img-secondary">
                <Image
                  src={twilightImages.frontGarage}
                  alt="Real twilight photo of a front-garage house in Calgary with illuminated windows by Photos 4 Real Estate"
                  width={900}
                  height={675}
                  sizes="(max-width: 1024px) 55vw, 28vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="science-section twilight-science-section"
        aria-labelledby="twilight-science-heading"
      >
        <div className="container">
          <div className="science-header twilight-science-header">
            <span className="section-label">Light &amp; Timing</span>
            <h2 id="twilight-science-heading">
              Why Timing Is <em>Everything</em> in Twilight Photography
            </h2>
            <p>
              There is exactly one brief window each day where exterior real
              estate photography looks like this. Understanding the light is
              what separates twilight specialists from photographers who just
              happen to be outside at sunset.
            </p>
          </div>

          <div
            className="light-timeline twilight-light-timeline"
            aria-label="Time of day light quality for exterior photography"
          >
            {lightTimeline.map((item) => (
              <div
                key={item.time}
                className={`light-block twilight-light-block ${item.tone}`}
              >
                {item.tone === "twilight" ? (
                  <div className="twilight-light-star" aria-hidden="true">
                    <Sparkles size={16} />
                  </div>
                ) : null}
                <div className="light-time">{item.time}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="elements-grid twilight-elements-grid"
            aria-label="Key light elements that make twilight photography effective"
          >
            {lightElements.map((item) => (
              <article key={item.title} className="element-card twilight-element-card">
                <div className="element-icon twilight-element-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ba-section twilight-ba-section" aria-labelledby="twilight-ba-heading">
        <div className="container">
          <div className="ba-header twilight-ba-header">
            <span className="section-label">Day vs. Twilight</span>
            <h2 id="twilight-ba-heading">The Difference Twilight Makes</h2>
            <p>
              The same property, the same day — the daytime shot is
              professional and accurate. The twilight shot is aspirational and
              emotional.
            </p>
          </div>
          <div className="ba-grid twilight-ba-grid">
            {twilightComparisons.map((comparison, index) => (
              <article key={comparison.title} className="ba-pair twilight-ba-pair">
                <p
                  id={`twilight-compare-help-${index}`}
                  className="sr-only"
                >
                  Drag the slider to compare the daytime and twilight versions of
                  this property.
                </p>
                <div className="ba-pair-inner twilight-ba-pair-inner">
                  <div
                    className="twilight-ba-compare"
                    aria-label={`${comparison.title}: compare daytime and twilight real estate photography`}
                    aria-describedby={`twilight-compare-help-${index}`}
                  >
                    <BeforeAfter
                      beforeSrc={comparison.beforeSrc}
                      afterSrc={comparison.afterSrc}
                      beforeAlt={comparison.beforeAlt}
                      afterAlt={comparison.afterAlt}
                      beforeLabel="Day"
                      afterLabel="Twilight"
                    />
                  </div>
                </div>
                <div className="ba-pair-caption twilight-ba-pair-caption">
                  <h3>{comparison.title}</h3>
                  <span>{comparison.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="best-section twilight-best-section"
        aria-labelledby="twilight-best-heading"
      >
        <div className="container">
          <div className="best-header twilight-best-header">
            <span className="section-label">Ideal Properties</span>
            <h2 id="twilight-best-heading">
              Which Calgary Listings Benefit <em>Most</em> from Twilight Photography?
            </h2>
            <p>
              Twilight photography delivers maximum impact when the home has
              strong architectural features, exterior lighting, or surroundings
              that look best after dark.
            </p>
          </div>

          <div className="best-grid twilight-best-grid">
            {idealProperties.map((item) => (
              <article key={item.title} className="best-card twilight-best-card">
                <div className="best-icon twilight-best-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="social-strip twilight-social-strip">
            <div className="social-icon twilight-social-icon" aria-hidden="true">
              <BarChart3 size={24} />
            </div>
            <div className="social-text twilight-social-text">
              <h3>
                Twilight photos generate 2–3× more social engagement than
                standard exterior shots
              </h3>
              <p>
                Real estate marketing data consistently shows that twilight
                exterior images drive significantly higher click-through rates,
                saves, and shares on Instagram, Facebook, and MLS platforms —
                making them one of the highest-ROI upgrades available for any
                listing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="shot-types-section twilight-options-section"
        aria-labelledby="twilight-types-heading"
      >
        <div className="container">
          <div className="shot-types-header twilight-options-header">
            <span className="section-label">Options</span>
            <h2 id="twilight-types-heading">Real vs. Virtual Twilight</h2>
            <p>
              We offer two distinct twilight options depending on your budget,
              timeline, and the specific needs of the property.
            </p>
          </div>

          <div className="shot-block twilight-shot-block">
            <div className="shot-content twilight-shot-content">
              <div className="shot-num twilight-shot-num" aria-hidden="true">01</div>
              <h3>Real Twilight Photography</h3>
              <p>
                Our premium service. We return to the property specifically at sunset to capture authentic evening light, glowing windows, and the natural twilight sky.
              </p>
              <ul className="shot-bullets twilight-shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  Most authentic, luxurious feel
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Captures true landscape &amp; exterior lighting
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Includes 3-6 final exterior compositions
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Best for luxury homes, acreages, and high-end listings
                </li>
              </ul>
            </div>
            <div className="shot-img twilight-shot-img">
              <Image
                src={twilightImages.real1}
                alt="Real twilight photo of a Calgary house with two garages and warm interior lighting by Photos 4 Real Estate"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="shot-block reverse twilight-shot-block">
            <div className="shot-content twilight-shot-content">
              <div className="shot-num twilight-shot-num" aria-hidden="true">02</div>
              <h3>Virtual Twilight Photography</h3>
              <p>
                A cost-effective and schedule-friendly alternative. We take a daytime photo from your regular shoot and digitally transform it into a stunning dusk scene.
              </p>
              <ul className="shot-bullets twilight-shot-bullets">
                <li>
                  <Check size={14} aria-hidden="true" />
                  No second appointment needed
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  More affordable than a real twilight shoot
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Weather-independent (works even on cloudy days)
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Great for standard listings needing an extra pop
                </li>
              </ul>
            </div>
            <div className="shot-img twilight-shot-img">
              <Image
                src={twilightImages.virtual1}
                alt="Virtual twilight conversion of a house near Calgary with an enhanced dusk sky and window glow"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="deliverables-section twilight-deliverables-section"
        aria-labelledby="photo-deliv-heading"
      >
        <div className="container">
          <div className="deliverables-header twilight-deliverables-header">
            <span className="section-label">What You Receive</span>
            <h2 id="photo-deliv-heading">
              Everything Included in a Twilight Shoot
            </h2>
            <p>
              Twilight photography comes with everything you need to upgrade your
              listing&apos;s marketing presence overnight.
            </p>
          </div>
          <div className="deliverables-grid twilight-deliverables-grid">
            {deliverables.map((d) => (
              <article key={d.title} className="deliv-card twilight-deliv-card">
                <div className="deliv-icon twilight-deliv-icon" aria-hidden="true">
                  {d.icon}
                </div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <span className="deliv-tag twilight-deliv-tag">{d.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / PROCESS */}
      <section
        className="process-section"
        aria-labelledby="twilight-process-heading"
      >
        <div className="container">
          <div className="process-header">
            <span className="section-label">How It Works</span>
            <h2 id="twilight-process-heading">
              Our Twilight Photography Process
            </h2>
            <p>
              We handle the timing and the light, so you just have to enjoy the results.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                01
              </div>
              <h3>Schedule The Shoot</h3>
              <p>
                Book your twilight shoot. We&apos;ll automatically determine the optimal time based on sunset for that specific date and property orientation.
              </p>
              <div className="step-arrow" aria-hidden="true">
                <ArrowRight size={12} />
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                02
              </div>
              <h3>Preparation</h3>
              <p>
                We provide a simple checklist to ensure all interior and exterior lights are functioning and turned on before we arrive.
              </p>
              <div className="step-arrow" aria-hidden="true">
                <ArrowRight size={12} />
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                03
              </div>
              <h3>The Golden Hour</h3>
              <p>
                We arrive before sunset to set up and shoot continuously as the light changes from golden hour through the peak dusk window.
              </p>
              <div className="step-arrow" aria-hidden="true">
                <ArrowRight size={12} />
              </div>
            </div>

            <div className="process-step">
              <div className="step-num" aria-hidden="true">
                04
              </div>
              <h3>Expert Compositing</h3>
              <p>
                We blend the best exposures to perfectly balance the exterior landscape, twilight sky, and warm interior lighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREP CHECKLIST */}
      <section className="prep-section twilight-prep-section" aria-labelledby="twilight-prep-heading">
        <div className="container">
          <div className="prep-grid twilight-prep-grid">
            <div className="prep-content twilight-prep-content">
              <span className="section-label">Get Ready</span>
              <h2 id="twilight-prep-heading">
                How to Prepare for a Twilight Shoot
              </h2>
              <p>
                Twilight photography requires specific preparation to maximize the impact of the golden hour window. Because we only have 15–30 minutes at optimal light, the property must be completely ready before our photographer arrives — share this list with your sellers in advance.
              </p>
              <ul className="checklist twilight-checklist" aria-label="Twilight prep checklist">
                {checklist.map((item) => (
                  <li key={item.title} className="checklist-item twilight-checklist-item">
                    <Check size={16} aria-hidden="true" />
                    <div className="twilight-checklist-copy">
                      <span className="twilight-checklist-title">{item.title}</span>
                      <small className="twilight-checklist-desc">{item.desc}</small>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
            <div className="prep-visual twilight-prep-visual">
              <div className="prep-img twilight-prep-img">
                <Image
                  src={twilightImages.prepMain}
                  alt="Twilight photo of a house in Harmony near Calgary ready for a twilight shoot with all lights on"
                  width={1200}
                  height={675}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="prep-img-row twilight-prep-img-row">
                <div>
                  <Image
                    src={twilightImages.prepSecondaryLeft}
                    alt="Real twilight photo of a Calgary bungalow home glowing at dusk by Photos 4 Real Estate"
                    width={800}
                    height={600}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={twilightImages.prepSecondaryRight}
                    alt="Twilight photo of a Calgary house photographed during golden hour by Photos 4 Real Estate"
                    width={800}
                    height={600}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="seasonal-card twilight-seasonal-card" aria-label="Seasonal twilight timing in Calgary">
                <h3>
                  <CalendarDays size={18} aria-hidden="true" />
                  Twilight Timing by Season in Calgary
                </h3>
                <div className="season-grid twilight-season-grid">
                  {seasonalTiming.map((item) => (
                    <div key={item.season} className="season-item twilight-season-item">
                      <div className="twilight-season-row">
                        <div className="twilight-season-icon" aria-hidden="true">
                          {item.icon}
                        </div>
                        <div className="season-name twilight-season-name">{item.season}</div>
                      </div>
                      <div className="season-time twilight-season-time">{item.time}</div>
                      <div className="season-note twilight-season-note">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CALLOUT */}
      <section className="pricing-section twilight-pricing-section" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="pricing-callout twilight-pricing-callout">
            <div className="pc-left twilight-pc-left">
              <span className="pc-label">Pricing</span>
              <h2 id="pricing-heading" className="pc-heading">
                Twilight Photography —<br /><em>$125 Add-On</em>
              </h2>
              <p className="pc-body">
                Twilight photography is available as a $125 + GST add-on to any photography package. It must be booked as part of the same property visit — our photographer completes all interior and daylight exterior photography first, then stays on-site through sunset to capture the twilight shots. Twilight images are delivered the next morning alongside your regular photos.
              </p>
              <div className="pc-includes" aria-label="What's always included">
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Same-visit as photography</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Blue hour capture</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Professionally edited</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>Next-day delivery</div>
                <div className="pc-pill"><div className="pc-pill-dot" aria-hidden="true"></div>MLS-ready files</div>
              </div>
            </div>

            <div className="pc-right">
              <span className="pc-from">Add-on</span>
              <span className="pc-price"><sup>$</sup>125</span>
              <span className="pc-gst">+ GST &nbsp;&middot;&nbsp; same visit</span>
              <div className="pc-actions">
                <Link href="/prices" className="btn btn-primary">
                  See Full Pricing
                  <span className="sr-only"> for Calgary twilight photography</span>
                </Link>
                <Link href="/book-online" className="btn btn-outline-gold">
                  Book Online
                  <span className="sr-only"> &mdash; Calgary twilight photography</span>
                </Link>
              </div>
              <p className="pc-sqft-note">
                Must be added to a photography booking.<br />
                Cannot be booked as a standalone visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section
        id="service-areas"
        className="areas-section twilight-areas-section"
        aria-labelledby="twilight-areas-heading"
      >
        <div className="container">
          <div className="areas-inner">
            <div className="areas-content">
              <span className="section-label">Service Areas</span>
              <h2 id="twilight-areas-heading">
                Calgary Twilight Photography &amp; Surrounding Areas
              </h2>
              <p>
                Photos 4 Real Estate covers all of Calgary plus the
                surrounding communities, towns and acreages within our
                standard service radius. Same straightforward pricing, same
                fast turnaround.
              </p>
              <ul className="areas-chips" aria-label="Calgary service areas">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href="/service-areas"
                      className="area-chip"
                      aria-label={`Twilight real estate photography in ${area}`}
                    >
                      <MapPin size={12} aria-hidden="true" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="areas-travel-note">
                <strong>Outside our standard radius?</strong> We regularly shoot
                twilights for acreages, foothills and Banff-corridor listings &mdash; a
                small travel fee may apply. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  aria-label={`Call ${siteConfig.name} at ${siteConfig.phone} to confirm Calgary twilight photography travel fees`}
                >
                  {siteConfig.phone}
                </a>{" "}
                to confirm.
              </p>
            </div>
            <div className="areas-visual">
              <div className="areas-visual-item">
                <Image
                  src={twilightImages.areaSplitLevel}
                  alt="Real twilight photo of a split-level house in Calgary by Photos 4 Real Estate"
                  width={1600}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={twilightImages.areaNorthwest}
                  alt="Twilight photo of a house in northwest Calgary by Photos 4 Real Estate"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="areas-visual-item">
                <Image
                  src={twilightImages.areaAuburnBayVirtual}
                  alt="Virtual twilight photo of a house in Auburn Bay, Calgary by Photos 4 Real Estate"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS — dark variant */}
      <Reviews
        variant="dark"
        eyebrow="Calgary Realtor Reviews"
        heading={
          <>
            Calgary&rsquo;s top agents trust{" "}
            <em>Photos 4 Real Estate</em> for every listing.
          </>
        }
      />

      {/* FAQ */}
      <Faq
        heading="Twilight Photography FAQ"
        faqs={content.faqs}
        allFaqsLabelSuffix="twilight photography in Calgary"
      />

      {/* RELATED SERVICES — Also Available */}
      <section
        className="related-section"
        aria-labelledby="twilight-related-heading"
      >
        <div className="container">
          <div className="related-header">
            <span className="section-label">Also Available</span>
            <h2 id="twilight-related-heading">Services That Pair With Twilights</h2>
          </div>
          <div className="related-grid">
            {relatedCards.map((card) => (
              <article key={card.href} className="related-card">
                <div className="related-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link href={card.href} className="related-link">
                  Learn more
                  <ArrowRight size={14} aria-hidden="true" />
                  <span className="sr-only"> about {card.srSuffix}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta
        eyebrow="Ready for the perfect hero shot?"
        title="Book Calgary twilight photography today."
        description={
          <>
            Add a real or virtual twilight to your listing and give buyers a
            reason to stop scrolling. Easy online booking and 24-hour delivery.
          </>
        }
      />
    </>
  );
}