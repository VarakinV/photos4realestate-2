import Link from "next/link";
import type { ReactNode } from "react";

export type ServiceBlockProps = {
  id: string;
  number: string;
  eyebrow: string;
  icon: ReactNode;
  title: string;
  lead: string;
  features: ReadonlyArray<string>;
  learnMoreHref: string;
  learnMoreLabelSuffix: string;
  reverse?: boolean;
  visual: ReactNode;
};

export function ServiceBlock({
  id,
  number,
  eyebrow,
  icon,
  title,
  lead,
  features,
  learnMoreHref,
  learnMoreLabelSuffix,
  reverse = false,
  visual,
}: ServiceBlockProps) {
  const headingId = `${id}-heading`;

  return (
    <section className="service-block" id={id} aria-labelledby={headingId}>
      <div className="container">
        <div
          className={`service-block-inner${reverse ? " reverse" : ""}`}
        >
          <div className="service-content">
            <div className="service-number-row">
              <div className="service-number" aria-hidden="true">
                {number}
              </div>
              <div className="service-icon-row">
                <span className="service-block-icon" aria-hidden="true">
                  {icon}
                </span>
                <span className="section-label service-block-eyebrow">
                  {eyebrow}
                </span>
              </div>
            </div>
            <h2 id={headingId}>{title}</h2>
            <p className="lead">{lead}</p>
            <ul className="service-features">
              {features.map((feature) => (
                <li key={feature}>
                  <span className="feat-dot" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="service-actions">
              <Link href={learnMoreHref} className="btn btn-primary">
                Learn More
                <span className="sr-only"> about {learnMoreLabelSuffix}</span>
              </Link>
            </div>
          </div>

          <div className="service-visual">{visual}</div>
        </div>
      </div>
    </section>
  );
}
