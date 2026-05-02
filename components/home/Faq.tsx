"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { homeFaqs, type Faq as SharedFaqItem } from "@/lib/faqs";
import { faqAnswerToHtml } from "@/lib/faq-utils";
import { siteConfig } from "@/lib/site";

export type FaqItem = SharedFaqItem;

type FaqProps = {
  heading?: ReactNode;
  intro?: ReactNode;
  faqs?: ReadonlyArray<FaqItem>;
  allFaqsLabelSuffix?: string;
};

export function Faq({
  heading,
  intro,
  faqs,
  allFaqsLabelSuffix,
}: FaqProps = {}) {
  const items = faqs ?? homeFaqs;
  const [openIndex, setOpenIndex] = useState(0);
  const allFaqsLabelSuffixText =
    allFaqsLabelSuffix ?? "Calgary real estate photography services and booking";
  const allFaqsLabel = `View all FAQs about ${allFaqsLabelSuffixText}`;

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
                  Everything you need to know before booking. Have a question not
                  covered here? Call or text us at{" "}
                  <a
                    href={siteConfig.phoneHref}
                    className="faq-phone-link"
                    aria-label={`Call or text Photos 4 Real Estate at ${siteConfig.phone}`}
                  >
                    {siteConfig.phone}
                  </a>
                  .
                </>
              )}
            </p>
            <Link
              href="/faq"
              className="btn btn-outline-dark"
              aria-label={allFaqsLabel}
            >
              All FAQs
              <span className="sr-only"> about {allFaqsLabelSuffixText}</span>
            </Link>
          </div>

          <div className="faq-items speakable-faq">
            {items.map((faq, i) => (
              <div className={`faq-item ${openIndex === i ? "is-open" : ""}`} key={faq.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpenIndex(i)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <ChevronDown size={14} strokeWidth={2.5} />
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`faq-panel ${openIndex === i ? "is-open" : ""}`}
                >
                  <div
                    className="faq-a"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: FAQ answers are trusted local content and must render crawlable links/entities.
                    dangerouslySetInnerHTML={faqAnswerToHtml(faq.a)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
