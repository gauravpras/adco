import { BlogCard } from "@/components/BlogCard";
import { BlogMarkdown } from "@/components/BlogMarkdown";
import { BloomHeroObserver } from "@/components/home/HomeHeroObserver";
import { BloomSurface } from "@/components/BloomSurface";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { ServiceAlacarteVisual } from "@/components/ServiceAlacarteVisual";
import {
  blogPosts,
  bookingUrl,
  findBlogPostBySlug,
  formatBlogDate,
  relatedBlogPosts,
  siteMeta,
  type BlogPost,
} from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adcogroup.com";
const socialImage = "/images/adco-logo.png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = findBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }
  const title = post.metaTitle;
  const description = post.metaDescription;
  const url = `/blog/${post.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${title} | ${siteMeta.name}`,
      description,
      url,
      images: [{ url: socialImage, alt: siteMeta.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteMeta.name}`,
      description,
      images: [socialImage],
    },
  };
}

function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.metaDescription,
    image: `${siteUrl}${socialImage}`,
    author: { "@type": "Organization", name: "AdCo Group" },
    publisher: { "@type": "Organization", name: "AdCo Group" },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };
}

function faqJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = findBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  const related = relatedBlogPosts(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(post)) }}
      />
      <BloomHeroObserver heroId="page-hero" />
      <section
        id="page-hero"
        className="relative overflow-hidden pt-28 text-white md:pt-32"
      >
        <BloomSurface />
        <div className="relative z-10 mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
          <FadeIn>
            <Link
              href="/blog"
              className="text-sm font-semibold text-white/75 transition-colors hover:text-white"
            >
              ← Back to blog
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-white/70">
              {formatBlogDate(post.date)} · {post.readTime} · {post.author}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <article className="mx-auto max-w-3xl rounded-3xl border border-ink/10 bg-white/75 px-5 py-12 backdrop-blur-sm md:px-8 md:py-14">
            <div
              className="relative mb-8 h-44 overflow-hidden rounded-2xl md:h-56"
              role="img"
              aria-label={post.coverAlt}
            >
              <ServiceAlacarteVisual slug={post.visualSlug} />
            </div>
            <BlogMarkdown markdown={post.body} />
            <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Common questions
            </h2>
            <dl className="mt-4 space-y-6">
              {post.faq.map((item) => (
                <div key={item.question}>
                  <dt className="font-display text-lg font-semibold text-ink">
                    {item.question}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed text-ink/75">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-12 rounded-2xl border border-ink/10 bg-white p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                {post.cta.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">{post.cta.text}</p>
              <div className="mt-6">
                <Button href={bookingUrl}>{post.cta.buttonLabel}</Button>
              </div>
            </div>
          </article>

          {related.length > 0 ? (
            <div className="mx-auto mt-16 max-w-3xl">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                Related reading
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                {related.map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
