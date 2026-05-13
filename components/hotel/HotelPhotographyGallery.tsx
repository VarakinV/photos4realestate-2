"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { HotelGalleryCategory } from "@/lib/hotel-portfolio";

type HotelPhotographyGalleryProps = {
  categories: HotelGalleryCategory[];
};

export function HotelPhotographyGallery({ categories }: HotelPhotographyGalleryProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "rooms");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeId) ?? categories[0],
    [activeId, categories],
  );
  const activeImages = activeCategory?.images ?? [];
  const lightboxImage = lightboxIndex === null ? null : activeImages[lightboxIndex] ?? null;
  const lightboxCaptionId = lightboxImage ? `hotel-gallery-lightbox-caption-${lightboxIndex}` : undefined;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPreviousImage = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null || activeImages.length === 0) return current;
      return current === 0 ? activeImages.length - 1 : current - 1;
    });
  }, [activeImages.length]);
  const showNextImage = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null || activeImages.length === 0) return current;
      return current === activeImages.length - 1 ? 0 : current + 1;
    });
  }, [activeImages.length]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeId]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [closeLightbox, lightboxIndex, showNextImage, showPreviousImage]);

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
    document.getElementById(`hotel-gallery-tab-${nextCategory.id}`)?.focus();
  };

  if (categories.length === 0) return null;

  return (
    <>
      <div className="room-tabs" role="tablist" aria-label="Hotel photography gallery categories">
        {categories.map((category, index) => {
          const isActive = activeId === category.id;
          return (
            <button
              key={category.id}
              type="button"
              id={`hotel-gallery-tab-${category.id}`}
              className={`room-tab ${isActive ? "active" : ""}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`hotel-gallery-panel-${category.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(category.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        id={`hotel-gallery-panel-${activeCategory.id}`}
        className="hotel-gallery-panel"
        role="tabpanel"
        aria-labelledby={`hotel-gallery-tab-${activeCategory.id}`}
      >
        <div className="hotel-gallery-panel-copy">
          <h3>{activeCategory.heading}</h3>
          <p>{activeCategory.description}</p>
        </div>

        {activeImages.length > 0 ? (
          <div className="hotel-gallery-grid">
            {activeImages.map((image, index) => (
              <figure
                className={`hotel-gallery-photo hotel-gallery-photo--${image.ratio ?? "landscape"}${image.featured ? " is-featured" : ""}`}
                key={image.id}
              >
                <button
                  type="button"
                  className="hotel-gallery-button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Open larger view of ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="hotel-gallery-img"
                    priority={index === 0}
                  />
                </button>
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="hotel-gallery-empty">
            Gallery images for {activeCategory.label.toLowerCase()} will appear here once files are added to the R2 folder.
          </p>
        )}
      </div>

      {lightboxImage ? (
        <div
          className="hotel-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Hotel photography image preview"
          aria-describedby={lightboxCaptionId}
          onClick={closeLightbox}
        >
          <button type="button" className="hotel-gallery-lightbox-close" onClick={closeLightbox} aria-label="Close image preview" ref={closeButtonRef}>
            <X size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hotel-gallery-lightbox-nav hotel-gallery-lightbox-nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Show previous hotel photography image"
            disabled={activeImages.length < 2}
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>
          <figure className="hotel-gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <div className="hotel-gallery-lightbox-frame">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1296px) calc(100vw - 176px), 1120px"
                className="hotel-gallery-lightbox-img"
              />
            </div>
            <figcaption id={lightboxCaptionId}>{lightboxImage.caption}</figcaption>
          </figure>
          <button
            type="button"
            className="hotel-gallery-lightbox-nav hotel-gallery-lightbox-nav--next"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Show next hotel photography image"
            disabled={activeImages.length < 2}
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </>
  );
}