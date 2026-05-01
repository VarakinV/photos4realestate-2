import {
  Clock3,
  Receipt,
  BadgeCheck,
  Tag,
  MapPin,
  Settings2,
  type LucideIcon,
} from "lucide-react";

type Reason = {
  title: string;
  copy: string;
  Icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    title: "Next-Day Delivery",
    copy:
      "We understand the urgency of active listings. All photos, floor plans, and media are delivered within 24 hours of your shoot — ready for MLS upload the next morning.",
    Icon: Clock3,
  },
  {
    title: "8 Services, One Visit",
    copy:
      "Photos, video, drone, 3D tour, RMS measurements, virtual staging, and twilight — all from one team in one booking. No coordination headaches.",
    Icon: Receipt,
  },
  {
    title: "RECA-compliant RMS",
    copy:
      "Every floor plan follows Alberta’s Residential Measurement Standard — no surprises at closing. We measure carefully, format consistently, and deliver files that are ready to share with clients and broker review.",
    Icon: BadgeCheck,
  },
  {
    title: "Transparent Pricing",
    copy:
      "Clear, upfront package pricing with no hidden fees. Compare our rates against any Calgary competitor — we're confident you'll see the value.",
    Icon: Tag,
  },
  {
    title: "Built for Calgary",
    copy:
      "Local-owned and operated. We know Calgary, Airdrie, Okotoks and every neighbourhood in between. From downtown infills to suburban family homes, we know how to highlight the context buyers care about most.",
    Icon: MapPin,
  },
  {
    title: "Customization & Flexibility",
    copy:
      "Special requests, unique properties, branding requirements — we work closely with each client to tailor deliverables to your exact needs.",
    Icon: Settings2,
  },
];

export function WhyUs() {
  return (
    <section className="why-us" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 id="why-heading">Why Calgary Realtors Choose Us</h2>
          <p>
            We built a photography service around the real needs of working realtors
            — speed, quality, and tools that make your job easier.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map(({ title, copy, Icon }, index) => (
            <div className="why-card" key={`${title}-${index}`}>
              <div className="why-icon">
                <Icon aria-hidden="true" strokeWidth={2} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
