import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { BlogFeaturedImage, BlogMediaGrid } from "@/components/blog/BlogLightboxMedia";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { blogPosts, formatBlogDate, getBlogPost, getPostCategories } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const pageUrl = `${siteConfig.url}/blog/${post.slug}`;
  return { title: { absolute: post.seoTitle }, description: post.seoDescription, alternates: { canonical: pageUrl }, openGraph: { type: "article", title: post.seoTitle, description: post.seoDescription, url: pageUrl, siteName: siteConfig.name, locale: "en_CA", publishedTime: post.date, modifiedTime: post.updated, images: [{ url: post.image.src, width: 1200, height: 630, alt: post.image.alt }] }, twitter: { card: "summary_large_image", title: post.seoTitle, description: post.seoDescription, images: [post.image.src] } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const categories = getPostCategories(post);
  const pageUrl = `${siteConfig.url}/blog/${post.slug}`;
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, author: { "@id": `${siteConfig.url}/#business` }, publisher: { "@id": `${siteConfig.url}/#business` }, datePublished: post.date, dateModified: post.updated, url: pageUrl, image: post.image.src, articleSection: categories.map((category) => category.name), mainEntityOfPage: { "@type": "WebPage", "@id": `${pageUrl}#webpage` } };
  const webPageSchema = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: post.title, description: post.excerpt, isPartOf: { "@id": `${siteConfig.url}/#website` }, primaryImageOfPage: { "@type": "ImageObject", url: post.image.src }, speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable-intro"] } };
  const faqSchema = post.faqs?.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: post.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } : null;

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} jsonLdId={`ld-breadcrumb-blog-${post.slug}`} />
      <section className="services-page-hero contact-hero blog-post-hero" aria-labelledby="blog-post-title">
        <div className="container"><div className="services-page-hero-inner"><div>
          <div className="services-page-hero-eyebrow">Photos 4 Real Estate Blog</div>
          <h1 id="blog-post-title">{post.title}</h1>
          <p className="services-page-hero-sub speakable-intro">{post.excerpt}</p>
          <div className="blog-post-meta"><CalendarDays size={15} aria-hidden="true" /><time dateTime={post.date}>{formatBlogDate(post.date)}</time><span>{post.readingTime}</span></div>
        </div></div></div>
      </section>
      <section className="blog-post-section">
        <div className="container blog-layout">
          <article className="blog-post-article">
            <BlogFeaturedImage src={post.image.src} alt={post.image.alt} />
            <div className="blog-card-badges blog-post-categories">{categories.map((category) => <Link key={category.slug} href={`/blog/category/${category.slug}`} className="blog-badge">{category.name}</Link>)}</div>
            <section className="blog-takeaways" aria-labelledby="takeaways-heading"><h2 id="takeaways-heading">Key takeaways</h2><ul>{post.takeaways.map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}</ul></section>
            {post.sections.map((section) => (<section key={section.heading} className="blog-content-section"><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}{section.media ? <BlogMediaGrid items={section.media.items} layout={section.media.layout} /> : null}</section>))}
            {post.faqs?.length ? <section className="blog-content-section speakable-faq"><h2>Frequently asked questions</h2>{post.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section> : null}
            <section className="blog-related-services" aria-labelledby="related-services-heading"><h2 id="related-services-heading">Related Photos 4 Real Estate services</h2><ul>{post.relatedServices.map((service) => <li key={service.href}><Link href={service.href}>{service.label}</Link></li>)}</ul></section>
          </article>
          <BlogSidebar />
        </div>
      </section>
      <JsonLd id={`ld-article-${post.slug}`} data={articleSchema} />
      <JsonLd id={`ld-webpage-${post.slug}`} data={webPageSchema} />
      {faqSchema ? <JsonLd id={`ld-faq-${post.slug}`} data={faqSchema} /> : null}
    </>
  );
}