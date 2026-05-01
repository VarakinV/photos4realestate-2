import Link from "next/link";
import {
  Camera,
  Video,
  Ruler,
  Box,
  Drone,
  Megaphone,
  Sofa,
  Sunset,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type ServiceCard = {
  slug: string;
  title: string;
  copy: string;
  Icon: LucideIcon;
};

const cards: ServiceCard[] = [
  {
    slug: "real-estate-photography-in-calgary",
    title: "Real Estate Photography",
    copy: "High-quality interior and exterior photos, professionally edited with blue-sky replacement and MLS-ready exports.",
    Icon: Camera,
  },
  {
    slug: "real-estate-videos-in-calgary",
    title: "Real Estate Videos",
    copy: "Cinematic property walkthroughs that capture flow, ambiance, and layout — giving buyers an immersive first impression.",
    Icon: Video,
  },
  {
    slug: "rms-measurements-and-floor-plans-in-calgary",
    title: "RMS Measurements & Floor Plans",
    copy: "Accurate RMS-compliant measurements and detailed floor plans using advanced technology — essential for every MLS listing.",
    Icon: Ruler,
  },
  {
    slug: "iguide-virtual-tours-in-calgary",
    title: "iGUIDE 3D Virtual Tours",
    copy: "Interactive 3D walkthroughs that let buyers explore every room remotely — complete with embedded floor plans and measurements.",
    Icon: Box,
  },
  {
    slug: "real-estate-aerial-drone-photography-in-calgary",
    title: "Drone Photography & Videography",
    copy: "Stunning aerial perspectives showcasing the property's location, lot lines, surroundings, and proximity to Calgary amenities.",
    Icon: Drone,
  },
  {
    slug: "virtual-staging",
    title: "Virtual Staging",
    copy: "Transform empty rooms into buyer magnets with photo-realistic virtual staging.",
    Icon: Sofa,
  },
  {
    slug: "twilight-photography-for-real-estate-in-calgary",
    title: "Twilight Photography",
    copy: "Capture the golden-hour magic of a property — warm exterior light, glowing windows, and the dramatic Calgary sky. Twilight photos consistently earn more attention in listings and social media.",
    Icon: Sunset,
  },
  {
    slug: "marketing-kit-for-realtors",
    title: "Marketing Kit",
    copy: "A complete suite of marketing assets for every property, including social reels, property flyers, branded websites, and slideshows, ready to publish the day after your shoot.",
    Icon: Megaphone,
  },
];

export function Services() {
  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 id="services-heading">
            Everything You Need to Market a Property
          </h2>
          <p>
            Real estate photography, video, drone, iGUIDE and RMS floor plans — booked
            together, delivered together.
          </p>
        </div>

        <div className="services-grid">
          {cards.map(({ slug, title, copy, Icon }) => (
            <article className="service-card" key={slug}>
              <div className="service-icon">
                <Icon aria-hidden="true" strokeWidth={2} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Link className="service-link" href={`/services/${slug}`}>
                Learn more
                <span className="sr-only"> about {title} in Calgary</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
