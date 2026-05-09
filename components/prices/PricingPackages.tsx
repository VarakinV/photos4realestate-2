"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, Plus, Ruler } from "lucide-react";
import { pricingPackages, pricingTiers } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

const essentialIncluded = [
  "Professional interior & exterior photography",
  "RMS Measurements & Floor Plans",
  "iGUIDE 3D Virtual Tour",
  "Blue-sky replacement",
  "MLS, print & web-ready files",
  "iGUIDE analytics & report",
  "Next-day delivery",
];

const skylineIncluded = [
  "Everything in Essential",
  "**Drone Photos (5–10 aerial images)**",
  "RMS Measurements & Floor Plans",
  "iGUIDE 3D Virtual Tour",
  "Blue-sky replacement",
  "MLS, print & web-ready files",
  "Next-day delivery",
];

const socialIncluded = [
  "Everything in Skyline",
  "**60–90 sec social media video reel**",
  "**Drone video footage included**",
  "Drone Photos (5–10 aerial images)",
  "RMS Measurements & Floor Plans",
  "iGUIDE 3D Virtual Tour",
  "Next-day delivery",
];

const essentialAddons = [
  "Virtual staging — from $30/photo",
  "Twilight photography — +$125",
  "Signature Detail Shots — $35/photo",
];
const skylineAddons = [
  "Virtual staging — from $30/photo",
  "Twilight photography — +$125",
  "Signature Detail Shots — $35/photo",
];
const socialAddons = [
  "Virtual staging — from $30/photo",
  "Twilight photography — +$125",
  "Signature Detail Shots — $35/photo",
];

const marketingKitNote = "9 social media reels, 3 websites, 3 flyers, 2 slideshows";
const essentialKit = [
  "9 social media reels (teaser videos)",
  "3 property websites",
  "3 property flyers & 2 slideshows",
];

function renderFeature(text: string) {
  if (text.startsWith("**") && text.endsWith("**")) {
    return <strong>{text.slice(2, -2)}</strong>;
  }
  return text;
}

type PriceKey = "essential" | "skyline" | "social";

export function PricingPackages() {
  const [tierIdx, setTierIdx] = useState(0);
  const [changing, setChanging] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const tier = pricingTiers[tierIdx];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChanging(true);
    const t = window.setTimeout(() => setChanging(false), 180);
    return () => window.clearTimeout(t);
  }, [tierIdx]);

  const onKey = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
      if (e.key === "ArrowRight" && idx < pricingTiers.length - 1) {
        e.preventDefault();
        setTierIdx(idx + 1);
        tabRefs.current[idx + 1]?.focus();
      }
      if (e.key === "ArrowLeft" && idx > 0) {
        e.preventDefault();
        setTierIdx(idx - 1);
        tabRefs.current[idx - 1]?.focus();
      }
      if (e.key === "Home") {
        e.preventDefault();
        setTierIdx(0);
        tabRefs.current[0]?.focus();
      }
      if (e.key === "End") {
        e.preventDefault();
        const lastIdx = pricingTiers.length - 1;
        setTierIdx(lastIdx);
        tabRefs.current[lastIdx]?.focus();
      }
    },
    []
  );

  const updateTabScrollState = useCallback(() => {
    const tabs = tabsRef.current;
    if (!tabs) return;

    setCanScrollLeft(tabs.scrollLeft > 4);
    setCanScrollRight(tabs.scrollLeft + tabs.clientWidth < tabs.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const tabs = tabsRef.current;
    if (!tabs) return;

    updateTabScrollState();

    const onResize = () => updateTabScrollState();
    tabs.addEventListener("scroll", updateTabScrollState, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      tabs.removeEventListener("scroll", updateTabScrollState);
      window.removeEventListener("resize", onResize);
    };
  }, [updateTabScrollState]);

  useEffect(() => {
    const activeTab = tabRefs.current[tierIdx];
    if (activeTab && window.matchMedia("(max-width: 768px)").matches) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });

      window.setTimeout(() => updateTabScrollState(), 220);
    }
  }, [tierIdx, updateTabScrollState]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const updateCompactState = () => {
      setIsCompact(media.matches && window.scrollY > 180);
    };

    updateCompactState();
    window.addEventListener("scroll", updateCompactState, { passive: true });
    media.addEventListener?.("change", updateCompactState);

    return () => {
      window.removeEventListener("scroll", updateCompactState);
      media.removeEventListener?.("change", updateCompactState);
    };
  }, []);

  const featureSets: Record<PriceKey, { included: string[]; addons: string[]; kit: string[] | null }> = {
    essential: { included: essentialIncluded, addons: essentialAddons, kit: essentialKit },
    skyline: { included: skylineIncluded, addons: skylineAddons, kit: null },
    social: { included: socialIncluded, addons: socialAddons, kit: null },
  };

  return (
    <>
      <div
        className={`sqft-section${isCompact ? " compact" : ""}`}
        id="sqft-selector"
        role="region"
        aria-label="Select property size"
      >
        <div className="container">
          <div className="sqft-inner">
            <div className="sqft-meta">
              <span className="sqft-eyebrow">Select Property Size</span>
              <div className="sqft-label" aria-live="polite">
                Showing prices for <span>{tier.label}</span>
              </div>
            </div>
            <div
              className={`sqft-tabs-shell${canScrollLeft ? " can-scroll-left" : ""}${canScrollRight ? " can-scroll-right" : ""}`}
            >
              <div
                ref={tabsRef}
                className="sqft-tabs"
                role="tablist"
                aria-label="Square footage ranges"
              >
                {pricingTiers.map((t, i) => (
                  <button
                    key={t.short}
                    id={`sqft-tab-${i}`}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    aria-controls="packages"
                    aria-selected={i === tierIdx}
                    tabIndex={i === tierIdx ? 0 : -1}
                    className={`sqft-tab${i === tierIdx ? " active" : ""}`}
                    onClick={() => setTierIdx(i)}
                    onKeyDown={(e) => onKey(e, i)}
                  >
                    {t.short}
                  </button>
                ))}
              </div>
            </div>
            <div className="sqft-hint">
              <Ruler size={14} aria-hidden="true" />
              <span>
                Based on{" "}
                <Link href="#billable-area">billable area</Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <section
        className="packages-section"
        id="packages"
        aria-label="Pricing package cards"
        role="tabpanel"
        aria-labelledby={`sqft-tab-${tierIdx}`}
      >
        <div className="container">
          <div className="packages-grid">
            {pricingPackages.map((pkg) => {
              const price = tier[pkg.id as PriceKey];
              const set = featureSets[pkg.id as PriceKey];
              return (
                <div
                  key={pkg.id}
                  className={`pkg-card${pkg.featured ? " featured" : ""}`}
                >
                  {pkg.featured ? (
                    <div className="pkg-badge">Most Popular</div>
                  ) : null}
                  <div className="pkg-header">
                    <div className="pkg-name">{pkg.name}</div>
                    <div className="pkg-tagline">{pkg.tagline}</div>
                    <div className="pkg-price-block">
                      <span
                        className={`pkg-price${changing ? " changing" : ""}`}
                      >
                        ${price}
                      </span>
                      <span className="pkg-gst">+ GST</span>
                    </div>
                    <div className="pkg-sqft-note">
                      For {tier.label.toLowerCase()}
                    </div>
                  </div>
                  <hr className="pkg-divider" />
                  <div className="pkg-body">
                    <div className="pkg-includes-label">What&rsquo;s included</div>
                    <ul className="pkg-features">
                      {set.included.map((f) => (
                        <li key={f}>
                          <span className="pkg-check included" aria-hidden="true">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <span>{renderFeature(f)}</span>
                        </li>
                      ))}
                    </ul>

                    <hr className="pkg-section-divider" />
                    <div className="pkg-addons-label">Free marketing kit</div>
                    <ul className="pkg-features">
                      {set.kit ? (
                        set.kit.map((f) => (
                          <li key={f}>
                            <span className="pkg-check included" aria-hidden="true">
                              <Check size={11} strokeWidth={3} />
                            </span>
                            <span>{f}</span>
                          </li>
                        ))
                      ) : (
                        <li>
                          <span className="pkg-check included" aria-hidden="true">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <span>{marketingKitNote}</span>
                        </li>
                      )}
                    </ul>

                    <hr className="pkg-section-divider" />
                    <div className="pkg-addons-label">Available add-ons</div>
                    <ul className="pkg-features">
                      {set.addons.map((f) => (
                        <li key={f}>
                          <span className="pkg-check addon" aria-hidden="true">
                            <Plus size={11} strokeWidth={3} />
                          </span>
                          <span className="addon-text">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pkg-cta">
                      <a
                        href={siteConfig.bookingUrl}
                        className={`btn ${
                          pkg.ctaVariant === "primary"
                            ? "btn-primary"
                            : "btn-ghost"
                        } btn-full`}
                      >
                        {pkg.bookCta}
                        <span className="sr-only">
                          {" "}
                          &mdash; Calgary real estate photography {pkg.name} package
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="packages-footnote">
            For properties over 6,000 sq ft, an additional $100 applies per
            1,000 sq ft for each package. &nbsp;·&nbsp;
            <Link href="#billable-area">What counts as billable area?</Link>
          </p>
        </div>
      </section>
    </>
  );
}
