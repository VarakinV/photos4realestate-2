"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PortfolioCategory } from "@/lib/portfolio";

type PortfolioGalleryProps = {
  categories: PortfolioCategory[];
};

export function PortfolioGallery({ categories }: PortfolioGalleryProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeId) ?? categories[0],
    [activeId, categories]
  );
  const activeImages = activeCategory?.images ?? [];
  const activeImage = lightboxIndex === null ? null : activeImages[lightboxIndex];
  const activeCtaIsExternal = activeCategory?.ctaHref.startsWith("http") ?? false;

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeId]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, activeImages.length]);

  const onTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = categories.length - 1;
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
    if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;
    if (nextIndex === null) return;

    event.preventDefault();
    const nextCategory = categories[nextIndex];
    setActiveId(nextCategory.id);
    document.getElementById(`portfolio-tab-${nextCategory.id}`)?.focus();
  };

  const showPrevious = () => {
    setLightboxIndex((index) => {
      if (index === null || activeImages.length === 0) return index;
      return (index - 1 + activeImages.length) % activeImages.length;
    });
  };

  const showNext = () => {
    setLightboxIndex((index) => {
      if (index === null || activeImages.length === 0) return index;
      return (index + 1) % activeImages.length;
    });
  };

  return (
    <>
      <div className="portfolio-tabs" role="navigation" aria-label="Portfolio filter by category">
        <div className="container">
          <div className="portfolio-tabs-inner" role="tablist" aria-label="Portfolio categories">
            {categories.map((category, index) => {
              const isActive = activeId === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  id={`portfolio-tab-${category.id}`}
                  className={`portfolio-tab${isActive ? " is-active" : ""}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`portfolio-panel-${category.id}`}
                  tabIndex={isActive ? 0 : -1}
                  aria-label={
                    category.id === "all"
                      ? "Show curated portfolio photos from all categories"
                      : `Show ${category.label} portfolio photos, ${category.images.length} images`
                  }
                  onClick={() => setActiveId(category.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  <span>{category.label}</span>
                  {category.id === "all" ? null : (
                    <span className="portfolio-tab-count" aria-hidden="true">{category.images.length}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="portfolio-gallery-section" aria-labelledby="portfolio-gallery-heading">
        <div className="container">
          <div
            id={`portfolio-panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`portfolio-tab-${activeCategory.id}`}
          >
            <div className="portfolio-gallery-intro">
              <div>
                <span className="section-label">Portfolio Gallery</span>
                <h2 id="portfolio-gallery-heading">{activeCategory.heading}</h2>
                <p>{activeCategory.description}</p>
              </div>
              {activeCtaIsExternal ? (
                <a href={activeCategory.ctaHref} className="btn btn-outline-dark portfolio-category-cta">
                  {activeCategory.ctaLabel}
                  <span className="sr-only"> for Calgary real estate photography portfolio examples</span>
                </a>
              ) : (
                <Link href={activeCategory.ctaHref} className="btn btn-outline-dark portfolio-category-cta">
                  {activeCategory.ctaLabel}
                  <span className="sr-only"> for Calgary real estate photography portfolio examples</span>
                </Link>
              )}
            </div>

            <div className="portfolio-photo-grid">
              {activeImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`portfolio-photo portfolio-photo--${image.ratio ?? "landscape"}${image.featured ? " is-featured" : ""}`}
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Open portfolio photo: ${image.caption}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    className="portfolio-photo-img"
                  />
                  <span className="portfolio-photo-overlay">
                    <span>{image.caption}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-lightbox-title"
          aria-describedby="portfolio-lightbox-caption"
        >
          <button
            type="button"
            className="portfolio-lightbox-backdrop"
            tabIndex={-1}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close portfolio photo viewer"
          />
          <div className="portfolio-lightbox-stage">
            <h2 id="portfolio-lightbox-title" className="sr-only">Portfolio photo viewer</h2>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="portfolio-lightbox-img"
              priority
            />
          </div>
          <button ref={closeButtonRef} type="button" className="portfolio-lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close photo viewer">
            <X size={22} aria-hidden="true" />
          </button>
          <button type="button" className="portfolio-lightbox-nav portfolio-lightbox-prev" onClick={showPrevious} aria-label="Previous photo">
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
          <button type="button" className="portfolio-lightbox-nav portfolio-lightbox-next" onClick={showNext} aria-label="Next photo">
            <ChevronRight size={26} aria-hidden="true" />
          </button>
          <div id="portfolio-lightbox-caption" className="portfolio-lightbox-caption">
            <div>{activeImage.caption}</div>
            <span>{(lightboxIndex ?? 0) + 1} / {activeImages.length}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}