import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const pageUrl = `${siteConfig.url}/cookies-policy`;
const title = "Cookies Policy | Photos 4 Real Estate";
const description =
  "Learn how IKorolova Photos and Marketing Inc. uses cookies, analytics and website preferences on photos4realestate.ca and how to manage them.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function CookiesPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cookies Policy" },
        ]}
        jsonLdId="ld-breadcrumb-cookies-policy"
      />

      <section
        aria-labelledby="page-hero-heading"
        className="legal-policy-hero"
      >
        <div className="container legal-policy-hero-inner">
          <h1
            id="page-hero-heading"
            className="legal-policy-hero-title speakable-intro font-heading font-bold leading-[1.1] text-4xl md:text-5xl lg:text-6xl tracking-tight"
          >
            Cookies Policy
          </h1>
        </div>
      </section>

      <section className="legal-page-section">
        <div className="container">
          <article className="legal-page-card">
            <p className="legal-page-meta">Last updated: May 6, 2026</p>

            <div className="legal-page-content">
              <section aria-labelledby="cookies-introduction-heading">
                <h2 id="cookies-introduction-heading">Introduction</h2>
                <p>
                  This Cookies Policy explains how IKorolova Photos and Marketing Inc.
                  (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) uses cookies and
                  similar technologies to recognize you when you visit our website at{" "}
                  <a href={siteConfig.url}>{siteConfig.url}</a> (&ldquo;Website&rdquo;).
                  It explains what these technologies are, why we use them, and your
                  rights to control our use of them.
                </p>
              </section>

              <section aria-labelledby="cookies-what-are-heading">
                <h2 id="cookies-what-are-heading">What are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your device when you
                  visit a website. Cookies are widely used to make websites work, or
                  work more efficiently, as well as to provide information to the site
                  owners.
                </p>
              </section>

              <section aria-labelledby="cookies-use-heading">
                <h2 id="cookies-use-heading">How We Use Cookies</h2>
                <p>We use cookies for several purposes, including:</p>
                <ul>
                  <li>To enable certain functions of the Website</li>
                  <li>To provide analytics</li>
                  <li>To store your preferences and personalize your experience</li>
                  <li>To improve website performance and functionality</li>
                </ul>
                <p>Cookies used on this Website are either:</p>
                <ul>
                  <li>
                    <strong>Session Cookies:</strong> These are temporary cookies that
                    remain on your device only while you are on the Website and are
                    deleted when you close your browser.
                  </li>
                  <li>
                    <strong>Persistent Cookies:</strong> These cookies remain on your
                    device for a longer period or until you manually delete them.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="cookies-types-heading">
                <h2 id="cookies-types-heading">Types of Cookies We Use</h2>

                <h3>Strictly Necessary Cookies</h3>
                <p>
                  These cookies are essential for the operation of the Website and
                  enable you to use its features.
                </p>

                <h3>Performance and Analytics Cookies</h3>
                <p>
                  These cookies collect information about how you use our Website,
                  such as which pages you visit the most.
                </p>

                <h3>Functional Cookies</h3>
                <p>
                  These cookies allow the Website to remember your choices, such as
                  language preferences, and provide enhanced, more personalized features.
                </p>

                <h3>Advertising and Targeting Cookies</h3>
                <p>
                  These cookies are used to deliver advertisements that are more
                  relevant to you and your interests.
                </p>
              </section>

              <section aria-labelledby="cookies-third-party-heading">
                <h2 id="cookies-third-party-heading">Third-Party Cookies</h2>
                <p>
                  We may also use third-party cookies from services like Google
                  Analytics to help us understand how visitors interact with our Website.
                  These third-party cookies are subject to their own privacy policies,
                  and we encourage you to review their cookie practices.
                </p>
              </section>

              <section aria-labelledby="cookies-manage-heading">
                <h2 id="cookies-manage-heading">How to Manage Cookies</h2>
                <p>
                  You have the right to accept or reject cookies. Most web browsers
                  automatically accept cookies, but you can modify your browser settings
                  to decline cookies if you prefer. Please note that disabling cookies
                  may affect the functionality of the Website.
                </p>
                <p>
                  For more information on how to manage cookies on your browser, visit
                  your browser&rsquo;s help section:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chrome cookie settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Firefox cookie settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-us/HT201265"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Safari cookie settings
                    </a>
                  </li>
                </ul>
              </section>

              <section aria-labelledby="cookies-updates-heading">
                <h2 id="cookies-updates-heading">Updates to This Policy</h2>
                <p>
                  We may update this Cookies Policy from time to time to reflect changes
                  in our use of cookies or for other operational, legal, or regulatory
                  reasons. Please revisit this page regularly to stay informed about our
                  use of cookies.
                </p>
              </section>

              <section aria-labelledby="cookies-contact-heading">
                <h2 id="cookies-contact-heading">Contact Us</h2>
                <p>
                  If you have any questions about this Cookies Policy, you can contact us:
                </p>
                <ul>
                  <li>
                    By email:{" "}
                    <a
                      href={siteConfig.emailHref}
                      aria-label={`Email ${siteConfig.name} at ${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    By visiting our <Link href="/contact-us">Contact Us page</Link>
                  </li>
                  <li>
                    By phone number:{" "}
                    <a
                      href={siteConfig.phoneHref}
                      aria-label={`Call ${siteConfig.name} at ${siteConfig.phone}`}
                    >
                      (825) 449 5001
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}