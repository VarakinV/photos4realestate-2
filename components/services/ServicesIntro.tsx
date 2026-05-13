import Link from "next/link";
import { Check } from "lucide-react";

const packageIncludes = [
  "Professional editing & blue-sky replacement",
  "MLS-Ready Exports (JPEG + web formats)",
  "9 social media reels & 2 slideshows",
  "3 property flyers & 3 branded websites",
  "Rewards points on every order",
];

const badges = [
  "Next-day delivery",
  "MLS-Ready Exports",
  "Licensed & insured",
  "Calgary & area",
];

export function ServicesIntro() {
  return (
    <section className="intro-strip" aria-labelledby="intro-strip-heading">
      <div className="container">
        <div className="intro-strip-inner">
          <div>
            <span className="section-label">All Services</span>
            <h2 id="intro-strip-heading">
              One Team. One Visit. Everything You Need.
            </h2>
            <p className="speakable-intro">
              Photos 4 Real Estate is Calgary&rsquo;s most complete real estate
              media provider. We offer professional services that can all
              be completed in a single property visit — saving you time,
              coordination and cost.
            </p>
            <p>
              Every package includes next-day delivery, MLS-Ready Exports and a
              suite of free marketing tools that no other local provider
              includes as standard. Hotel photography is also available for
              hospitality properties across Calgary and Alberta.
            </p>
            <ul className="intro-badges">
              {badges.map((label) => (
                <li key={label} className="intro-badge">
                  <span className="intro-badge-dot" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="intro-package-card">
            <h3>Every Package Includes</h3>
            <p className="sub">
              Standard across all bookings — no extras, no surprises
            </p>
            <ul className="package-includes">
              {packageIncludes.map((item) => (
                <li key={item}>
                  <span className="pkg-check" aria-hidden="true">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/prices"
              className="btn btn-primary intro-package-cta"
            >
              See Full Pricing
              <span className="sr-only"> for Calgary real estate media</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
