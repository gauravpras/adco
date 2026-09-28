import { BloomHeroObserver } from "@/components/home/HomeHeroObserver";
import { BloomSurface } from "@/components/BloomSurface";
import { FadeIn } from "@/components/motion/FadeIn";
import { findBlogPostBySlug, siteMeta } from "@/lib/content";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return [{ slug: "sample-post-1" }, { slug: "sample-post-2" }, { slug: "sample-post-3" }];
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = findBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: post.title.replace(/^\[PLACEHOLDER — /, "").replace(/\]$/, "") || "Blog post",
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteMeta.name}`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = findBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <BloomHeroObserver heroId="page-hero" />
      <section
        id="page-hero"
        className="relative overflow-hidden pt-28 text-white md:pt-32"
      >
        <BloomSurface />
        <div className="relative z-10 mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Blog
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-white/70">{post.date}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-ink/10 bg-white/75 px-5 py-12 backdrop-blur-sm md:px-8 md:py-14">
            <p className="text-base leading-relaxed text-ink/75">
              Full article coming soon.
            </p>
            <p className="mt-8">
              <Link
                href="/blog"
                className="text-sm font-semibold text-adco-blue hover:underline"
              >
                ← Back to blog
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
