import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-heading"
      className="bg-navy text-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        {eyebrow ? (
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.18em] text-brick-light font-medium mb-4">
            {eyebrow}
          </span>
        ) : null}
        <h1
          id="page-hero-heading"
          className="speakable-intro font-heading font-bold leading-[1.1] text-4xl md:text-5xl lg:text-6xl tracking-tight"
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
