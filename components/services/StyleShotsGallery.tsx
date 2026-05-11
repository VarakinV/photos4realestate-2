"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type StyleShotImage = {
  src: string;
  alt: string;
  label: string;
};

type StyleShotsGalleryProps = {
  images: readonly StyleShotImage[];
};

export function StyleShotsGallery({ images }: StyleShotsGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeImage = lightboxIndex === null ? null : images[lightboxIndex];

  const showPrevious = () => {
    setLightboxIndex((index) => {
      if (index === null || images.length === 0) return index;
      return (index - 1 + images.length) % images.length;
    });
  };

  const showNext = () => {
    setLightboxIndex((index) => {
      if (index === null || images.length === 0) return index;
      return (index + 1) % images.length;
    });
  };

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
  }, [lightboxIndex, images.length]);

  return (
    <>
      <div className="style-shots-gallery-grid">
        {images.map((image, index) => (
          <button
            type="button"
            className={`style-shots-gallery-card${index === 0 || index === images.length - 1 ? " is-featured" : ""}`}
            key={image.src}
            onClick={() => setLightboxIndex(index)}
            aria-label={`Open Style Shots gallery image: ${image.label}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={675}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
            <span className="style-shots-gallery-caption">{image.label}</span>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="style-shots-lightbox-title"
          aria-describedby="style-shots-lightbox-caption"
        >
          <button
            type="button"
            className="portfolio-lightbox-backdrop"
            tabIndex={-1}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Style Shots photo viewer"
          />
          <div className="portfolio-lightbox-stage">
            <h2 id="style-shots-lightbox-title" className="sr-only">
              Style Shots photo viewer
            </h2>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="portfolio-lightbox-img"
              priority
            />
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="portfolio-lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close photo viewer"
          >
            <X size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="portfolio-lightbox-nav portfolio-lightbox-prev"
            onClick={showPrevious}
            aria-label="Previous Style Shots photo"
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="portfolio-lightbox-nav portfolio-lightbox-next"
            onClick={showNext}
            aria-label="Next Style Shots photo"
          >
            <ChevronRight size={26} aria-hidden="true" />
          </button>
          <div id="style-shots-lightbox-caption" className="portfolio-lightbox-caption">
            <div>{activeImage.label}</div>
            <span>{(lightboxIndex ?? 0) + 1} / {images.length}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}