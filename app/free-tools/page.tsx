import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

const title = "Free Tools for Real Estate Agents in Calgary";
const description =
  "Free resources for Calgary REALTORS\u00AE \u2014 listing checklists, photo-day prep guides and marketing templates.";

export const metadata: Metadata = {
  title: "Free Tools",
  description,
  alternates: { canonical: "/free-tools" },
  openGraph: { title, description, url: `${siteConfig.url}/free-tools` },
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
      name: "Free Tools",
      item: `${siteConfig.url}/free-tools`,
    },
  ],
};

export default function FreeToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Calgary Agents"
        title={<>Free Tools &amp; Resources</>}
        description="Practical resources to help you prep listings and win more sellers — free to download, no strings attached."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/contact-us" className="btn btn-primary">
            Request a Resource
          </Link>
          <a href={siteConfig.bookingUrl} className="btn btn-outline">
            Book a Shoot
          </a>
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-[var(--navy)] mb-4">
              New tools dropping soon
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We&rsquo;re building a small library of checklists, photo-day
              prep guides and listing-marketing templates. Tell us what would
              help you most and we&rsquo;ll prioritise it.
            </p>
          </div>
        </div>
      </section>

      <JsonLd id="ld-breadcrumb-free-tools" data={breadcrumbSchema} />
    </>
  );
}
