import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";

const title = "Contact Photos 4 Real Estate \u2014 Calgary";
const description =
  "Get in touch with Photos 4 Real Estate for MLS photography, videography, drone and iGUIDE 3D tours in Calgary. Same-day quotes, next-business-day delivery.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact-us" },
  openGraph: { title, description, url: `${siteConfig.url}/contact-us` },
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
      name: "Contact",
      item: `${siteConfig.url}/contact-us`,
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${siteConfig.name}`,
  url: `${siteConfig.url}/contact-us`,
  description,
  mainEntity: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    areaServed: "Calgary, AB, Canada",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say Hello"
        title={<>Let&rsquo;s shoot your next listing</>}
        description="Tell us about your property and timeline — we&rsquo;ll reply with a quote and the earliest available slot, usually the same day."
      />

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14 items-start">
            <aside className="grid gap-6">
              <div>
                <h2 className="font-heading text-2xl text-[var(--navy)] mb-2">
                  Get in touch
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Prefer a direct line? Call or email and we&rsquo;ll help you
                  plan the shoot.
                </p>
              </div>

              <ul className="grid gap-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 text-[var(--brick)]" aria-hidden />
                  <div>
                    <div className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      Phone
                    </div>
                    <a
                      href={siteConfig.phoneHref}
                      className="font-medium text-[var(--navy)] hover:text-[var(--brick)]"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 text-[var(--brick)]" aria-hidden />
                  <div>
                    <div className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      Email
                    </div>
                    <a
                      href={siteConfig.emailHref}
                      className="font-medium text-[var(--navy)] hover:text-[var(--brick)]"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-[var(--brick)]" aria-hidden />
                  <div>
                    <div className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      Service Area
                    </div>
                    <div className="font-medium text-[var(--navy)]">
                      Calgary &amp; surrounding areas
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 text-[var(--brick)]" aria-hidden />
                  <div>
                    <div className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      Hours
                    </div>
                    <div className="font-medium text-[var(--navy)]">
                      Mon–Sat, 8:00 AM – 7:00 PM
                    </div>
                  </div>
                </li>
              </ul>
            </aside>

            <div className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 md:p-8 shadow-[0_8px_32px_rgba(19,29,59,0.04)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <JsonLd id="ld-breadcrumb-contact" data={breadcrumbSchema} />
      <JsonLd id="ld-contact-page" data={contactPageSchema} />
    </>
  );
}
