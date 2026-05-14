import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate, getPostCategories } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  priority?: boolean;
};

export function BlogCard({ post, priority = false }: BlogCardProps) {
  const categories = getPostCategories(post);

  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-card-media" aria-label={`${post.title} — read the full Photos 4 Real Estate blog post`}>
        <Image src={post.image.src} alt={post.image.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 360px" priority={priority} className="blog-card-img" />
      </Link>
      <div className="blog-card-body">
        <div className="blog-card-badges" aria-label="Post categories">
          {categories.slice(0, 2).map((category) => (
            <Link key={category.slug} href={`/blog/category/${category.slug}`} className="blog-badge">
              {category.name}
            </Link>
          ))}
        </div>
        <div className="blog-card-date">
          <CalendarDays size={14} aria-hidden="true" />
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
        </div>
        <h2>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="blog-read-more">
          Read more<span className="sr-only"> about {post.title}</span>
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}