"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import {
  AVERAGE_RATING,
  GOOGLE_REVIEW_URL,
  REVIEW_COUNT,
  reviews as reviewItems,
} from "@/lib/reviews";

type ReviewsProps = {
  variant?: "light" | "dark";
  eyebrow?: ReactNode;
  heading?: ReactNode;
};

function Stars({ rating = 5, size = 14 }: { rating?: number; size?: number }) {
  return (
    <>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </>
  );
}

function GoogleMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.4c-.22 1.25-.94 2.31-2.03 3.03l3.28 2.54c1.91-1.76 3.01-4.35 3.01-7.43 0-.72-.06-1.39-.19-2.03H12Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.97-.9 6.63-2.43l-3.28-2.54c-.9.61-2.06.98-3.35.98-2.58 0-4.77-1.74-5.55-4.08H3.08v2.62A9.99 9.99 0 0 0 12 22Z"
      />
      <path
        fill="#4A90E2"
        d="M6.45 13.93A5.94 5.94 0 0 1 6.14 12c0-.67.12-1.31.31-1.93V7.45H3.08A9.99 9.99 0 0 0 2 12c0 1.61.39 3.13 1.08 4.55l3.37-2.62Z"
      />
      <path
        fill="#FBBC05"
        d="M12 5.97c1.47 0 2.8.51 3.84 1.51l2.87-2.87C16.97 2.98 14.7 2 12 2A9.99 9.99 0 0 0 3.08 7.45l3.37 2.62c.78-2.34 2.97-4.1 5.55-4.1Z"
      />
    </svg>
  );
}

export function Reviews({
  variant = "light",
  eyebrow,
  heading,
}: ReviewsProps = {}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(reviewItems.length > 1);
  const sectionClass =
    variant === "dark" ? "reviews reviews--dark" : "reviews reviews--light";

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateControls = () => {
      const firstCard = carousel.querySelector<HTMLElement>(".review-card");
      const gap = parseFloat(getComputedStyle(carousel).gap || "0");
      const amount = firstCard ? firstCard.offsetWidth + gap : carousel.clientWidth;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      setCanScrollPrev(carousel.scrollLeft > 8);
      setCanScrollNext(carousel.scrollLeft < maxScrollLeft - 8);

      if (maxScrollLeft <= 8) {
        setActiveIndex(0);
        return;
      }

      if (carousel.scrollLeft >= maxScrollLeft - 8) {
        setActiveIndex(reviewItems.length - 1);
        return;
      }

      setActiveIndex(
        Math.min(reviewItems.length - 1, Math.max(0, Math.round(carousel.scrollLeft / amount))),
      );
    };

    updateControls();
    carousel.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      carousel.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>(".review-card");
    const gap = parseFloat(getComputedStyle(carousel).gap || "0");
    const amount = firstCard ? firstCard.offsetWidth + gap : carousel.clientWidth * 0.9;

    carousel.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>(".review-card");
    const gap = parseFloat(getComputedStyle(carousel).gap || "0");
    const amount = firstCard ? firstCard.offsetWidth + gap : carousel.clientWidth;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    carousel.scrollTo({
      left: Math.min(amount * index, Math.max(0, maxScrollLeft)),
      behavior: "smooth",
    });
  };

  return (
    <section className={sectionClass} aria-labelledby="reviews-heading">
      <div className="container">
        <div className="reviews-header">
          <div>
            <span className="section-label">{eyebrow ?? "What Clients Say"}</span>
            <h2 id="reviews-heading">
              {heading ?? <>Trusted by Calgary&rsquo;s top-producing agents.</>}
            </h2>
          </div>
          <aside className="reviews-scorecard" aria-label="Google rating summary">
            <div className="reviews-score-label">Excellent</div>
            <div className="reviews-score-stars" aria-hidden="true">
              <Stars size={18} />
            </div>
            <div className="reviews-score-copy">
              <strong>{AVERAGE_RATING.toFixed(1)}</strong> based on {REVIEW_COUNT} reviews
            </div>
            <a
              className="reviews-score-google"
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Read Google reviews for Photos 4 Real Estate"
            >
              <GoogleMark size={18} />
              <span>Google Reviews</span>
            </a>
          </aside>
        </div>

        <div className="reviews-carousel-shell">
          <button
            type="button"
            className="reviews-nav-btn reviews-nav-btn--side"
            onClick={() => scrollByCard(-1)}
            aria-label="Show previous reviews"
            disabled={!canScrollPrev}
          >
            <ChevronLeft size={18} strokeWidth={2.25} />
          </button>

          <div className="reviews-carousel-wrap">
            <div className="reviews-carousel" ref={carouselRef}>
              {reviewItems.map((review) => (
                <article className="review-card" key={`${review.name}-${review.date}`}>
                  <div className="review-card-header">
                    <div className="review-author">
                      <Image
                        src={review.avatar}
                        alt={`${review.name} Google review profile photo`}
                        width={48}
                        height={48}
                        className="review-avatar"
                      />
                      <div className="review-author-copy">
                        <div className="review-name">{review.name}</div>
                        <div className="review-date">{review.date}</div>
                      </div>
                    </div>

                    <a
                      className="review-google-link"
                      href={GOOGLE_REVIEW_URL}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Read more Google reviews from ${review.name}`}
                    >
                      <GoogleMark size={18} />
                    </a>
                  </div>

                  <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                    <Stars rating={review.rating} />
                  </div>

                  <p className="review-text">{review.text}</p>

                  <a
                    className="review-read-more"
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Read ${review.name}'s full Google review for Photos 4 Real Estate`}
                  >
                    Read more
                    <span className="sr-only"> from {review.name} on Google</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="reviews-dots" aria-label="Review carousel pagination">
              {reviewItems.map((review, index) => (
                <button
                  key={`${review.name}-${review.date}-dot`}
                  type="button"
                  className={`reviews-dot ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Show review ${index + 1}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="reviews-nav-btn reviews-nav-btn--side"
            onClick={() => scrollByCard(1)}
            aria-label="Show next reviews"
            disabled={!canScrollNext}
          >
            <ChevronRight size={18} strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </section>
  );
}
