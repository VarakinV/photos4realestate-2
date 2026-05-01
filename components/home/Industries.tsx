import Image from "next/image";
import Link from "next/link";
import { homeImages } from "@/lib/images";

const cards = [
  {
    img: homeImages.industryAgents,
    alt: "Real estate agent in Calgary presenting a listing photographed by Photos 4 Real Estate",
    title: "Real Estate Agents",
    copy: "Win more listings with consistent, on-brand visuals, and marketing-ready media that helps impress sellers and attract more qualified buyers in Calgary.",
  },
  {
    img: homeImages.industryHomeowners,
    alt: "AirBnB bedroom and home rental photographed by Photos 4 Real Estate",
    title: "AirBnB & Home Owhers",
    copy: "Showcase your rental in its best light and increase bookings with professional photography that stands out on listing platforms.",
  },
  {
    img: homeImages.industryStagers,
    alt: "Commercial office space photographed for architecture and development marketing",
    title: "Commercial & Development",
    copy: "Architecture, hospitality, retail, and construction — we understand the visual requirements of every sector.",
  },
];

export function Industries() {
  return (
    <section className="industries" aria-labelledby="industries-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 id="industries-heading">Industries We Work With</h2>
          <p>
            From individual realtors to commercial developers — we tailor every shoot to your goals.
          </p>
        </div>

        <div className="industries-grid">
          {cards.map((card) => (
            <Link
              href="/contact-us"
              key={card.title}
              className="industry-card"
              aria-label={`${card.title} — ${card.copy}`}
            >
              <div className="industry-media">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="industry-overlay">
                  <h3>{card.title}</h3>
                </div>
              </div>
              <div className="industry-body">
                <p>{card.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
