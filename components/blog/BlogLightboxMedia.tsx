"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type BlogMediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
};

type BlogImageItem = BlogMediaItem & { type: "image" };

function isImageItem(item: BlogMediaItem): item is BlogImageItem {
  return item.type === "image";
}

function BlogImageLightbox({
  images,
  activeIndex,
  setActiveIndex,
}: {
  images: BlogImageItem[];
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}) {
  const titleId = useId();
  const captionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex] ?? null;

  const closeLightbox = useCallback(() => setActiveIndex(null), [setActiveIndex]);
  const showPrevious = useCallback(() => {
    setActiveIndex(activeIndex === null ? null : (activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, setActiveIndex]);
  const showNext = useCallback(() => {
    setActiveIndex(activeIndex === null ? null : (activeIndex + 1) % images.length);
  }, [activeIndex, images.length, setActiveIndex]);

  useEffect(() => {
    if (!activeImage) return;
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus({ preventScroll: true });
      previousFocusRef.current = null;
    };
  }, [activeImage, closeLightbox, showNext, showPrevious]);

  if (!activeImage) return null;

  const visibleIndex = activeIndex ?? 0;

  return (
    <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={captionId}>
      <button type="button" className="portfolio-lightbox-backdrop" tabIndex={-1} onClick={closeLightbox} aria-label="Close blog image viewer" />
      <div className="portfolio-lightbox-stage">
        <h2 id={titleId} className="sr-only">Blog image viewer</h2>
        <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" className="portfolio-lightbox-img" priority />
      </div>
      <button ref={closeButtonRef} type="button" className="portfolio-lightbox-close" onClick={closeLightbox} aria-label="Close image viewer"><X size={22} aria-hidden="true" /></button>
      {images.length > 1 ? <button type="button" className="portfolio-lightbox-nav portfolio-lightbox-prev" onClick={showPrevious} aria-label="Previous image"><ChevronLeft size={26} aria-hidden="true" /></button> : null}
      {images.length > 1 ? <button type="button" className="portfolio-lightbox-nav portfolio-lightbox-next" onClick={showNext} aria-label="Next image"><ChevronRight size={26} aria-hidden="true" /></button> : null}
      <div id={captionId} className="portfolio-lightbox-caption">
        <div>{activeImage.caption ?? activeImage.alt}</div>
        {images.length > 1 ? <span>{visibleIndex + 1} / {images.length}</span> : null}
      </div>
    </div>
  );
}

export function BlogFeaturedImage({ src, alt }: { src: string; alt: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const image: BlogImageItem = { type: "image", src, alt };

  return (
    <div className="blog-post-featured">
      <button type="button" className="blog-image-lightbox-button blog-post-featured-button" onClick={() => setActiveIndex(0)} aria-label={`Open larger view of ${alt}`}>
        <Image src={src} alt={alt} fill priority sizes="(max-width: 1180px) 100vw, 760px" />
      </button>
      <BlogImageLightbox images={[image]} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}

export function BlogMediaGrid({ items, layout }: { items: BlogMediaItem[]; layout?: "grid" | "vertical-videos" }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const imageItems = items.filter(isImageItem);

  return (
    <div className={`blog-media-grid ${layout === "vertical-videos" ? "blog-media-grid--vertical" : ""}`}>
      {items.map((item) => {
        const imageIndex = item.type === "image" ? imageItems.findIndex((image) => image.src === item.src) : -1;
        return (
          <figure key={item.src} className="blog-media-item">
            {item.type === "image" ? (
              <button type="button" className="blog-image-lightbox-button" onClick={() => setActiveIndex(imageIndex)} aria-label={`Open larger view of ${item.caption ?? item.alt}`}>
                <Image src={item.src} alt={item.alt} width={1200} height={800} sizes="(max-width: 1180px) 100vw, 360px" />
              </button>
            ) : (
              <video controls muted playsInline preload="metadata" aria-label={item.alt}><source src={item.src} type="video/mp4" /></video>
            )}
            {item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        );
      })}
      <BlogImageLightbox images={imageItems} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}