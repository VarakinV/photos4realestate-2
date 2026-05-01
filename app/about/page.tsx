import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

const title = `About ${siteConfig.shortName}`;
const description = `${siteConfig.shortName} is a Calgary-based real estate media studio delivering MLS-ready photography, videography, drone and iGUIDE 3D tours with next-business-day turnaround.`;

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: `${siteConfig.url}/about` },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${siteConfig.url}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Studio"
        title={<>About {siteConfig.shortName}</>}
        description="A Calgary-based real estate media studio helping agents sell listings faster with high-quality visuals and dependable turnaround."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/contact-us" className="btn btn-primary">
            Get in Touch
          </Link>
          <Link href="/services" className="btn btn-outline">
            Our Services
          </Link>
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-[var(--navy)] mb-4">
              Our full story is coming soon
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We&rsquo;re putting together the long version of how we work, who
              we serve and why agents across Calgary trust us with their
              listings. In the meantime, the fastest way to get a feel for
              what we do is to{" "}
              <Link href="/portfolio" className="underline">
                browse the portfolio
              </Link>{" "}
              or{" "}
              <Link href="/contact-us" className="underline">
                say hello
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <JsonLd id="ld-breadcrumb-about" data={breadcrumbSchema} />
    </>
  );
}
