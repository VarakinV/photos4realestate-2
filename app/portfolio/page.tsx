import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

const title = "Real Estate Photography Portfolio \u2014 Calgary";
const description =
  "A selection of recent real estate photography, videography, drone and iGUIDE 3D tour work across Calgary, Airdrie, Okotoks, Cochrane and Chestermere.";

export const metadata: Metadata = {
  title: "Portfolio",
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: { title, description, url: `${siteConfig.url}/portfolio` },
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
      name: "Portfolio",
      item: `${siteConfig.url}/portfolio`,
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent Work"
        title={<>Portfolio</>}
        description="A look at recent listings we&rsquo;ve photographed, filmed and scanned across the Calgary region."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/book-online" className="btn btn-primary">
            Book a Shoot
          </Link>
          <Link href="/services" className="btn btn-outline">
            View Services
          </Link>
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-[var(--navy)] mb-4">
              Full portfolio coming soon
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We&rsquo;re curating galleries by property type and service.
              Looking for specific examples? Send us the listing style or
              service you have in mind and we&rsquo;ll share relevant work.
            </p>
          </div>
        </div>
      </section>

      <JsonLd id="ld-breadcrumb-portfolio" data={breadcrumbSchema} />
    </>
  );
}
