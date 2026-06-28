import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { homeImages } from "@/lib/images";

const includes = [
  "Professional interior & exterior photos",
  "RMS measurements & floor plans",
  "iGUIDE 3D virtual tour",
  "Blue-sky replacement",
  "MLS-ready exports",
  "Next-day delivery",
];

const extras = [
  { label: "9 social media reels (teaser videos)" },
  { label: "2 listing slideshows" },
  { label: "3 branded property flyers" },
  { label: "6 branded property websites", href: "/single-property-websites" },
  {
    label: "Free realtor tools: reel, slideshow, flyer & QR code generators",
    href: "/free-tools",
  },
  {
    label: "Rewards points — earn discounts on every order",
    href: "/points-rewards",
  },
];

export function Differentiator() {
  return (
    <section className="differentiator" aria-labelledby="diff-heading">
      <div className="container">
        <div className="diff-grid">
          <div className="diff-content">
            <span className="section-label">What Sets Us Apart</span>
            <h2 id="diff-heading">More Than Photography — A Complete Marketing System</h2>
            <p className="lead">
              At Photos 4 Real Estate, every package includes far more than just photos. We
              give Calgary realtors a complete set of marketing tools at no extra cost —
              because your listing deserves to stand out everywhere, not just on MLS.
            </p>

            <div className="diff-includes-label">Every package includes:</div>
            <ul className="diff-includes">
              {includes.map((item) => (
                <li key={item}>
                  <span className="diff-check" aria-hidden="true">
                    <Check strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="diff-extras">
              <div className="diff-extras-label">Included at no extra cost</div>
              <ul>
                {extras.map((item) => (
                  <li key={item.label}>
                    {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="diff-actions">
              <Link href="/prices" className="btn btn-primary">
                See All Packages
                <span className="sr-only"> for Calgary real estate photography and media services</span>
              </Link>
              <Link
                href="/real-estate-photography-comparison-calgary"
                className="btn btn-outline-dark"
              >
                Compare vs Competitors
                <span className="sr-only"> for Calgary real estate photography services</span>
              </Link>
            </div>
          </div>

          <div className="diff-visual">
            <div className="diff-img-main">
              <Image
                src={homeImages.diffLiving}
                alt="Bright Calgary living room photographed in HDR by Photos 4 Real Estate"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="diff-img-badge">
              <div className="num">24h</div>
              <div className="lbl">Next-day delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
