import {
  Zap,
  Receipt,
  BadgeCheck,
  Plane,
  MapPin,
  Tag,
  type LucideIcon,
} from "lucide-react";

type Reason = {
  title: string;
  copy: string;
  Icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    title: "Next-business-day delivery",
    copy: "Shoot today, list tomorrow. Every package ships by end of the next business day.",
    Icon: Zap,
  },
  {
    title: "One team, one invoice",
    copy: "Photo, video, drone, iGUIDE, RMS — all booked together, accounted for in one place.",
    Icon: Receipt,
  },
  {
    title: "RECA-compliant RMS",
    copy: "Every floor plan follows Alberta’s Residential Measurement Standard — no surprises at closing.",
    Icon: BadgeCheck,
  },
  {
    title: "Aerial drone specialist",
    copy: "Professional aerial photo and video for acreages, rural listings and urban rooftop context.",
    Icon: Plane,
  },
  {
    title: "Built for Calgary",
    copy: "Local-owned and operated. We know Calgary, Airdrie, Okotoks and every neighbourhood in between.",
    Icon: MapPin,
  },
  {
    title: "Fair, published pricing",
    copy: "See every package and add-on on our pricing page. No guessing, no upsells on site.",
    Icon: Tag,
  },
];

export function WhyUs() {
  return (
    <section className="why-us" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 id="why-heading">Calgary Realtors keep coming back for a reason.</h2>
          <p>
            Six things we get right on every shoot, every time — so your marketing goes
            out on time and looks its best.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map(({ title, copy, Icon }) => (
            <div className="why-card" key={title}>
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
