import type { ReactNode } from "react";
import { Star } from "lucide-react";

type ReviewsProps = {
  variant?: "light" | "dark";
  eyebrow?: ReactNode;
  heading?: ReactNode;
};

function Stars({ size = 14 }: { size?: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </>
  );
}

const reviews = [
  {
    text: "Volodymyr is a true professional — on time, easy to work with, and the photos were back the next morning. My listing had 40 showings in the first weekend.",
    name: "Melissa K.",
    role: "Realtor® · Calgary",
    initials: "MK",
  },
  {
    text: "The iGUIDE tour plus floor plan package is a game changer. Buyers show up already qualified and ready to write. Photos 4 Real Estate has become our default vendor.",
    name: "David R.",
    role: "Realtor® · Airdrie",
    initials: "DR",
  },
  {
    text: "Twilight shots are worth every penny. Our acreage listing stood out on MLS and the drone footage made the social ad actually convert.",
    name: "Sarah P.",
    role: "Realtor® · Okotoks",
    initials: "SP",
  },
];

export function Reviews({
  variant = "light",
  eyebrow,
  heading,
}: ReviewsProps = {}) {
  const sectionClass =
    variant === "dark" ? "reviews reviews--dark" : "reviews";

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
          <div className="reviews-score" aria-label="Google rating">
            <span className="big">5.0</span>
            <span>
              <span className="stars" aria-hidden="true">
                <Stars size={16} />
              </span>
              <span className="count">120+ Google reviews</span>
            </span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-stars" aria-label="5 out of 5 stars">
                <Stars />
              </div>
              <p className="review-text">&ldquo;{review.text}&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar" aria-hidden="true">
                  {review.initials}
                </div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-verified">{review.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
