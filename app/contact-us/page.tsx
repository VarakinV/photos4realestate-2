import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/home/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/contact/ContactForm";
import { faqItemsToSchemaMainEntity } from "@/lib/faq-utils";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/contact-us`;
const ogImageUrl = `${pageUrl}/opengraph-image`;
const metadataTitle = "Contact Calgary Real Estate Media";
const fullTitle = `${metadataTitle} | ${siteConfig.name}`;
const description =
  "Contact Photos 4 Real Estate for Calgary real estate media quotes, booking questions, and fast replies by call, text, or email. Book online today.";

const contactFaqs = [
  {
    q: "How far in advance do I need to book?",
    a: 'We recommend booking 1-2 days in advance to secure your preferred date and time, particularly for afternoon slots which fill up fastest. For urgent requests, call or text us at <a href="tel:+18254495001">(825) 449-5001</a> directly — we do our best to accommodate same-day bookings when our schedule allows.',
  },
  {
    q: "How quickly do you respond to enquiries?",
    a: 'We respond to all calls, texts, and emails as soon as we can, typically within a few minutes to an hour. For the fastest response, call or text <a href="tel:+18254495001">(825) 449-5001</a>.',
  },
  {
    q: "Do you serve areas outside Calgary?",
    a: 'Yes. We serve Calgary and surrounding communities including Okotoks, Airdrie, Cochrane, Chestermere, High River, Springbank, Bearspaw, and Rocky View County. Travel within 35 km of Calgary City Centre is always free. A flat $30 fee applies to Chestermere, Airdrie, Okotoks, Cochrane, and Langdon. Beyond 35 km, travel is $0.85/km. <a href="/service-areas">See all service areas &rarr;</a>',
  },
  {
    q: "What should the seller do to prepare before the shoot?",
    a: 'We have a preparation checklist you can share with your sellers. Key items: declutter all surfaces, turn on all lights, move cars from the driveway, open blinds, and have the home clean and ready at least 30 minutes before our arrival. A well-prepared home makes a significant difference in the final photos. <a href="/photoshoot-checklist">Download the full preparation checklist &rarr;</a>',
  },
  {
    q: "Can I get a quote for a specific property before booking?",
    a: `Yes — all our pricing is published transparently on our <a href="/prices">pricing page</a>, and it's based on billable square footage with no hidden fees. If you'd like a specific quote or have questions about which package is right for your property, call us at <a href="tel:+18254495001">(825) 449-5001</a> or fill in the form on this page and we'll respond with a recommendation.`,
  },
] as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_CA",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImageUrl] },
  };
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${pageUrl}#webpage`,
  name: `Contact ${siteConfig.name}`,
  url: pageUrl,
  description,
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      areaServed: "Calgary and surrounding areas",
      availableLanguage: ["English"],
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItemsToSchemaMainEntity(contactFaqs),
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} jsonLdId="ld-breadcrumb-contact" />

      <section className="services-page-hero contact-hero" aria-labelledby="contact-title">
        <div className="container">
          <div className="services-page-hero-inner">
            <div>
              <div className="services-page-hero-eyebrow">Say Hello</div>
              <h1 id="contact-title">Contact <em>Photos 4 Real Estate</em></h1>
              <p className="services-page-hero-sub speakable-intro">
                Ask a question, or get a quick quote. We respond to all calls, texts, and emails.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-book-strip" aria-label="Fast booking options">
        <div className="container">
          <div className="contact-book-strip-inner">
            <div className="contact-book-strip-text">
              <h2>Ready to book? Skip the form.</h2>
              <p>Select your package, choose a date, and you&apos;re done. Confirmation arrives within a few hours.</p>
            </div>
            <div className="contact-book-strip-actions">
              <a href={siteConfig.bookingUrl} className="btn btn-primary">
                Book Online Now →
                <span className="sr-only"> for Calgary real estate photography and media services</span>
              </a>
              <a href="/prices" className="btn btn-outline-dark">
                View Pricing
                <span className="sr-only"> for Calgary real estate photography packages</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-details-heading">
        <div className="container">
          <div className="contact-grid">
            <aside className="contact-info-card">
              <div>
                <h2 id="contact-details-heading">Get in touch</h2>
                <p>Prefer a direct line? Call or email and we&rsquo;ll help you plan the shoot.</p>
              </div>

              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <Phone className="contact-info-icon" aria-hidden="true" />
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <a href={siteConfig.phoneHref} className="contact-info-value">{siteConfig.phone}</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <Mail className="contact-info-icon" aria-hidden="true" />
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a href={siteConfig.emailHref} className="contact-info-value">{siteConfig.email}</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <MapPin className="contact-info-icon" aria-hidden="true" />
                  <div>
                    <div className="contact-info-label">Service Area</div>
                    <div className="contact-info-value">Calgary &amp; surrounding areas</div>
                  </div>
                </li>
                <li className="contact-info-item">
                  <Clock className="contact-info-icon" aria-hidden="true" />
                  <div>
                    <div className="contact-info-label">Hours</div>
                    <div className="contact-info-value">Mon&ndash;Sun, 8:00 AM &ndash; 10:00 PM</div>
                  </div>
                </li>
              </ul>
            </aside>

            <div className="contact-form-card">
              <div className="contact-form-copy">
                <h2 id="contact-form-heading">Send Us a Message</h2>
                <p>For enquiries, quotes, or questions about a specific property. We&apos;ll reply within a few hours during business hours.</p>
              </div>
              <ContactForm recaptchaSiteKey={process.env.RECAPTCHA_SITE_KEY} />
            </div>
          </div>
        </div>
      </section>

      <Faq
        heading="Contact & Booking Questions"
        intro={<>Need a fast answer before you book? These are the most common questions we get about response times, travel, preparation, and quotes.</>}
        faqs={contactFaqs}
        allFaqsLabelSuffix="contacting Photos 4 Real Estate and booking listing media in Calgary"
      />

      <JsonLd id="ld-contact-page" data={contactPageSchema} />
      <JsonLd id="ld-contact-faq" data={faqSchema} />
    </>
  );
}