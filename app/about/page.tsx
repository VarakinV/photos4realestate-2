import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Award, BadgeCheck, BadgeDollarSign, Box, CalendarCheck, Camera, Clock, DollarSign, Drone, LayoutPanelTop, PackageCheck, Radio, ShieldCheck, Target, Wrench } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reviews } from "@/components/home/Reviews";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/about`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const metadataTitle = "Calgary Real Estate Media Team";
const fullTitle = `${metadataTitle} | ${siteConfig.name}`;
const description = "Meet Iryna and Vlad, Calgary's RECA-certified real estate media team for photos, iGUIDE tours, RMS measurements, drone and next-day delivery. Book online.";
const businessId = `${siteConfig.url}/#business`;

const images = {
  storyMain: "https://cdn.photos4realestate.ca/p4re-static-media/about-page/T-9.webp",
  storyDrone: "https://cdn.photos4realestate.ca/p4re-static-media/about-page/Kitchen-28.webp",
  storyFloorPlan: "https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/Standard%20iGUIDE%20Floor%20Plan.webp",
  iryna: "https://cdn.photos4realestate.ca/p4re-static-media/about-page/Iryna-Korolova-bg-removed.webp",
  vlad: "https://cdn.photos4realestate.ca/p4re-static-media/about-page/Vlad-Varakin-with-camera.webp",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: pageUrl },
    openGraph: { title: fullTitle, description, url: pageUrl, siteName: siteConfig.name, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: fullTitle }], locale: "en_CA", type: "website" },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImageUrl] },
  };
}

const values = [
  { icon: Target, title: "Precision Over Volume", copy: "We're a specialist two-person team, not a high-volume agency with rotating contractors. Every booking is personally managed by Iryna and Vlad — which means consistent quality, communication, and delivery timing." },
  { icon: PackageCheck, title: "Complete, Not Partial", copy: "We built the most complete listing package in Calgary — photography, iGUIDE, RMS, drone, twilight, and a full marketing kit — so realtors have one professional partner instead of six vendors." },
  { icon: Clock, title: "Delivery That Actually Means Something", copy: "Next-day delivery is our commitment, not our marketing language. Photos, floor plans, tour links, and marketing assets are ready before the morning rush." },
  { icon: ShieldCheck, title: "Compliant — Always", copy: "RECA certification for RMS measurements. Transport Canada licensing for drone operations. Full liability insurance. We do not cut corners on compliance." },
  { icon: DollarSign, title: "Transparent Pricing", copy: "Every price is published, every add-on is clearly explained, and every invoice reflects exactly what was agreed at booking. No hidden costs in the fine print." },
  { icon: Wrench, title: "Tools That Actually Help", copy: "We build free marketing tools — reel generators, flyer generators, QR code generators — and make them available to Calgary realtors, not just our clients." },
];

const differences = [
  { icon: LayoutPanelTop, title: "Free Marketing Kit With Every Package", copy: "Every booking automatically includes 9 social media reels, 6 branded property websites, 3 print-ready flyers, and 2 animated slideshows — delivered alongside your photos the next morning." },
  { icon: Box, title: "iGUIDE Always Bundles 3D Tour + RMS + Floor Plans", copy: "Our iGUIDE service is three Calgary MLS deliverables in one scan: the interactive 3D tour, RECA-compliant RMS measurements, and professional 2D floor plans." },
  { icon: BadgeCheck, title: "Both Team Members Hold RECA RMS Certification", copy: "Iryna and Vlad both hold RECA RMS certificates. This gives realtors scheduling flexibility and keeps larger property visits efficient." },
  { icon: Drone, title: "Transport Canada Licensed Drone Operations", copy: "All drone shoots are conducted by a TC Advanced Operations licensed pilot with full liability insurance and pre-flight airspace checks." },
  { icon: CalendarCheck, title: "Next-Day Delivery — On Every Booking", copy: "Photos, floor plans, RMS report, 3D tour link, and complete marketing kit are delivered every morning after the shoot as a commitment built into every booking we accept." },
  { icon: BadgeDollarSign, title: "Loyalty Rewards + First-Booking Discount", copy: "First-time realtor clients receive 25% off their first booking with code 25%OFF. Returning clients earn loyalty points on every order redeemable for future discounts." },
];

const credentials = [
  { icon: Award, title: "RECA RMS Certified", copy: "Both Iryna and Vlad hold current RECA Residential Measurement Standard certificates — approved for Alberta MLS listings." },
  { icon: Drone, title: "TC Advanced Drone Licence", copy: "Vlad holds a Transport Canada Advanced Operations Remote Pilot Certificate for commercial drone work throughout Calgary." },
  { icon: Radio, title: "iGUIDE Certified", copy: "Certified operators of the iGUIDE LiDAR-based 3D tour and measurement system — RECA-approved for RMS data capture." },
  { icon: ShieldCheck, title: "Fully Insured", copy: "Full liability insurance covering photography, drone operations, and on-site services — protecting clients on every booking." },
];

const team = [
  {
    name: "Iryna Korolova",
    role: "Lead Photographer & RMS Specialist",
    image: images.iryna,
    alt: "Iryna Korolova — lead real estate photographer and RECA RMS specialist in Calgary",
    reverse: false,
    badges: [{ icon: Award, title: "RECA Certified", sub: "RMS Measurement Specialist" }, { icon: Camera, title: "Lead Photographer", sub: "Interior & Exterior Specialist" }],
    bio: [
      "Iryna is the creative force and precision behind every listing. With an eye for detail that comes from years of professional real estate photography across Calgary and surrounding communities, she understands exactly how a space needs to be lit, composed, and captured to create images that make buyers stop scrolling.",
      "Beyond photography, Iryna is a RECA-certified RMS measurement specialist — fully qualified to conduct the residential measurements required for Alberta MLS listings. She handles interior photography, exterior shots, sky replacement editing, and RMS measurements with the same standard of care on every booking.",
      "Clients consistently note that Iryna is warm, professional, and efficient — the kind of photographer who arrives fully prepared, works quickly without sacrificing quality, and delivers exactly what she promises the morning after every shoot.",
    ],
    credentials: [["RECA RMS Certificate", "Fully certified to conduct RECA-compliant RMS measurements for Alberta MLS listings"], ["Professional Real Estate Photography", "Interior, exterior, HDR, blue-sky replacement, twilight"], ["iGUIDE Certified Operator", "3D virtual tour capture and RMS floor plan generation"]],
  },
  {
    name: "Vlad Varakin",
    role: "Videographer & Drone Operator",
    image: images.vlad,
    alt: "Vlad Varakin — videographer and Transport Canada licensed drone pilot in Calgary",
    reverse: true,
    badges: [{ icon: Drone, title: "TC Licensed Pilot", sub: "Transport Canada Advanced Cert" }, { icon: Award, title: "RECA Certified", sub: "RMS Measurement Specialist" }],
    bio: [
      "Vlad brings a dynamic visual edge and technical depth to every project. With a background in digital marketing and a deep understanding of what performs on social media and MLS platforms, he knows how to tell each property's story through motion — from cinematic walkthrough videos to aerial drone sequences.",
      "As a Transport Canada licensed drone pilot holding an Advanced Operations certificate, Vlad conducts every aerial shoot in full compliance with RPAS regulations. He performs pre-flight airspace checks for every property and carries full liability insurance on drone operations.",
      "Vlad also holds a RECA RMS certificate, making him fully qualified to conduct residential measurements for Alberta MLS listings — which means on joint shoots, iGUIDE scanning and measurements can proceed efficiently alongside photography.",
    ],
    credentials: [["Transport Canada Advanced Operations Certificate", "Licensed for commercial drone operations throughout Calgary and surrounding areas"], ["RECA RMS Certificate", "Fully certified for RECA-compliant residential measurements"], ["Videography & Social Media Production", "Real estate walkthrough videos, 45-sec social media reels, 4K drone video"]],
  },
];

const aboutPageSchema = { "@context": "https://schema.org", "@type": "AboutPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: fullTitle, description, primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl }, about: { "@id": businessId }, speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable-intro"] } };

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} jsonLdId="ld-breadcrumb-about" />
      <section className="services-page-hero about-hero" aria-labelledby="about-title">
        <div className="container"><div className="services-page-hero-inner"><div><div className="services-page-hero-eyebrow">About Photos 4 Real Estate · Calgary, AB</div><h1 id="about-title">Calgary&rsquo;s Complete <em>Real Estate Media Team</em></h1><p className="services-page-hero-sub speakable-intro">We&rsquo;re <strong>Iryna and Vlad</strong> — a Calgary-based photography and videography team helping realtors market properties with professional photos, iGUIDE 3D tours, RMS measurements, drone footage, and a complete marketing kit. Every listing. Next morning delivery.</p></div><ul className="services-page-hero-stats" aria-label="About Photos 4 Real Estate stats"><li className="services-page-hero-stat"><span className="num">5★</span><span className="lbl">Google rating</span></li><li className="services-page-hero-stat"><span className="num">2</span><span className="lbl">RECA-certified specialists</span></li><li className="services-page-hero-stat"><span className="num">24h</span><span className="lbl">Delivery guaranteed</span></li></ul></div></div>
      </section>
      <StorySection />
      <TeamSection />
      <ValuesSection />
      <CompareSection />
      <CredentialsSection />
      <Reviews variant="light" eyebrow="Client Reviews" heading="What Calgary Realtors Say About Working With Us" />
      <Cta eyebrow="Ready to work together?" title="Book Your Next Calgary Listing Shoot Online." description="Choose your package, pick your time, and our two-person Calgary team will handle photos, iGUIDE, RMS, drone, and marketing assets with next-day delivery." />
      <JsonLd id="ld-about-page" data={aboutPageSchema} />
    </>
  );
}

function StorySection() {
  return <section className="about-story-section" aria-labelledby="about-story-heading"><div className="container about-story-grid"><div className="about-copy"><span className="section-label">Our Story</span><h2 id="about-story-heading">We Built Photos 4 Real Estate to Give Calgary Realtors More Than Just Photos</h2><p className="lead speakable-intro">Photos 4 Real Estate was founded on a straightforward observation: Calgary realtors were spending significant time and money pulling together the visual assets needed for a modern listing — photography from one provider, RMS measurements from another, a virtual tour from a third, then hours assembling flyers, reels, and websites manually.</p><p>We built Photos 4 Real Estate to solve that. One booking. One visit. One delivery the next morning — professional photography, RECA-compliant RMS measurements, iGUIDE 3D virtual tour, floor plans, drone footage, and a complete marketing kit with 9 reels, 6 property websites, 3 flyers, and 2 slideshows.</p><p>We are a small, specialist team — Iryna and Vlad — and that is intentional. Every booking is handled personally by us. The consistency of quality, the care in every shot, and the on-time delivery come from a team that takes every listing personally.</p></div><div className="about-story-visual" aria-label="Photos 4 Real Estate work examples"><div className="about-story-img about-story-img-main"><Image src={images.storyMain} alt="Real estate photography by Photos 4 Real Estate in Calgary" fill sizes="(max-width: 960px) 100vw, 50vw" /></div><div className="about-story-img"><Image src={images.storyDrone} alt="Kitchen real estate photography by Photos 4 Real Estate in Calgary" fill sizes="(max-width: 960px) 50vw, 25vw" /></div><div className="about-story-img"><Image src={images.storyFloorPlan} alt="Standard iGUIDE floor plan for a Calgary MLS listing" fill sizes="(max-width: 960px) 50vw, 25vw" /></div></div></div></section>;
}

function TeamSection() {
  return <section className="about-team-section" aria-labelledby="about-team-heading"><div className="container"><div className="about-section-header"><span className="section-label">Our Team</span><h2 id="about-team-heading">Meet Iryna &amp; Vlad</h2><p>Two specialists, one complete team. Every listing is personally handled by both of us — from the first photo to the delivered marketing kit.</p></div>{team.map((member) => <article className={`about-team-member${member.reverse ? " reverse" : ""}`} key={member.name}><div className="about-member-photo-wrap"><div className="about-member-photo"><Image src={member.image} alt={member.alt} fill sizes="(max-width: 960px) 100vw, 45vw" /></div><div className="about-member-badges" aria-label={`${member.name} credentials`}>{member.badges.map(({ icon: Icon, title: badgeTitle, sub }) => <div className="about-cert-badge" key={badgeTitle}><Icon size={18} aria-hidden="true" /><span><strong>{badgeTitle}</strong><small>{sub}</small></span></div>)}</div></div><div className="about-member-content"><h3>{member.name}</h3><span className="about-member-role">{member.role}</span>{member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ul className="about-member-credentials">{member.credentials.map(([credTitle, credCopy]) => <li key={credTitle}><BadgeCheck size={18} aria-hidden="true" /><span><strong>{credTitle}</strong><small>{credCopy}</small></span></li>)}</ul></div></article>)}</div></section>;
}

function ValuesSection() { return <CardGrid sectionClass="about-values-section" label="What We Stand For" heading="How We Work — And What That Means for Your Listings" intro="We operate on a small number of principles that shape every booking, every shoot, and every delivery." cards={values} />; }

function CompareSection() {
  return <CardGrid sectionClass="about-diff-section" label="How We Compare" heading="What Sets Photos 4 Real Estate Apart from Other Calgary Photography Companies" intro="Many companies offer photos. Some offer virtual tours. We built something different — a complete listing system where everything works together." cards={differences} dark><div className="about-diff-link"><Link href="/services/real-estate-photography-in-calgary">Compare our complete Calgary real estate photography service<span className="sr-only"> with standard listing photography companies</span></Link><span aria-hidden="true"> · </span><Link href="/real-estate-photography-comparison-calgary">See why Calgary agents choose us<span className="sr-only"> compared with other real estate photography companies</span></Link></div></CardGrid>;
}

function CredentialsSection() { return <CardGrid sectionClass="about-creds-section" label="Certifications" heading="Certifications & Credentials" cards={credentials} compact />; }

function CardGrid({ sectionClass, label, heading, intro, cards, dark = false, compact = false, children }: { sectionClass: string; label: string; heading: string; intro?: string; cards: typeof values; dark?: boolean; compact?: boolean; children?: ReactNode }) {
  return <section className={sectionClass} aria-labelledby={`${sectionClass}-heading`}><div className="container"><div className="about-section-header"><span className="section-label">{label}</span><h2 id={`${sectionClass}-heading`}>{heading}</h2>{intro ? <p>{intro}</p> : null}</div><div className={`about-card-grid${dark ? " is-dark" : ""}${compact ? " is-compact" : ""}`}>{cards.map(({ icon: Icon, title: cardTitle, copy }) => <article className="about-info-card" key={cardTitle}><div className="about-info-icon"><Icon size={24} aria-hidden="true" /></div><h3>{cardTitle}</h3><p>{copy}</p></article>)}</div>{children}</div></section>;
}
