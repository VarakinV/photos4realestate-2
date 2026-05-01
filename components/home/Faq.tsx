import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: string };

type FaqProps = {
  heading?: ReactNode;
  intro?: ReactNode;
  faqs?: ReadonlyArray<FaqItem>;
  allFaqsLabelSuffix?: string;
};

export const homeFaqs: FaqItem[] = [
  {
    q: "How long does a real estate photo shoot take?",
    a: "Most Calgary real estate photo shoots take 45 to 90 minutes depending on property size. Larger homes, acreages, and packages that include video, drone or iGUIDE 3D tours typically run 1.5 to 3 hours.",
  },
  {
    q: "How soon will I receive my photos?",
    a: "Every standard photo package is delivered by the end of the next business day. Rush same-day delivery is available on request for an additional fee, subject to scheduling.",
  },
  {
    q: "Do you serve areas outside of Calgary?",
    a: "Yes. We regularly shoot in Airdrie, Okotoks, Cochrane, Chestermere, High River, Springbank, Bearspaw, Rocky View County and Banff. Travel fees are waived on most packages within 30 km of Calgary.",
  },
  {
    q: "Are your RMS measurements and floor plans RECA-compliant?",
    a: "Yes. Every floor plan we produce follows Alberta's Residential Measurement Standard (RMS) under RECA, so you can list the square footage with confidence.",
  },
  {
    q: "Do I need to be at the property during the shoot?",
    a: "Not usually. Most agents use a lockbox and let us shoot while they handle other business. We simply confirm the address, access details and any special instructions beforehand.",
  },
  {
    q: "Can I use the photos on social media and print materials?",
    a: "Yes — you receive a full marketing license to use the images on MLS, your website, social media, brochures and print materials for the duration of the listing.",
  },
];

export function Faq({
  heading,
  intro,
  faqs,
  allFaqsLabelSuffix,
}: FaqProps = {}) {
  const items = faqs ?? homeFaqs;
  const askLabel = allFaqsLabelSuffix
    ? `Ask a question about ${allFaqsLabelSuffix}`
    : "Ask a question";

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-sidebar">
            <span className="section-label">FAQ</span>
            <h2 id="faq-heading">
              {heading ?? "Straight answers to common questions."}
            </h2>
            <p>
              {intro ?? (
                <>
                  Still not sure? Reach out and we&rsquo;ll walk you through the
                  right package for your listing.
                </>
              )}
            </p>
            <Link
              href="/contact-us/"
              className="btn btn-outline-dark"
              aria-label={askLabel}
            >
              Ask a question
            </Link>
          </div>

          <div className="faq-items speakable-faq">
            {items.map((faq, i) => (
              <details className="faq-item" key={faq.q} open={i === 0}>
                <summary className="faq-q">
                  {faq.q}
                  <span className="faq-chevron" aria-hidden="true">
                    <ChevronDown size={14} strokeWidth={2.5} />
                  </span>
                </summary>
                <div className="faq-a">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
