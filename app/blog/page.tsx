import { BloomHeroObserver } from "@/components/home/HomeHeroObserver";
import { BloomSurface } from "@/components/BloomSurface";
import { BlogCard } from "@/components/BlogCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { blogHero, blogPosts, siteMeta } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Digital marketing and onboarding insights for Bangkok businesses from AdCo Group.",
  openGraph: {
    title: `Blog | ${siteMeta.name}`,
    description:
      "Digital marketing and onboarding insights for Bangkok businesses from AdCo Group.",
    url: "/blog",
  },
};

export default function BlogPage() {
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
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-none tracking-tight">
              {blogHero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{blogHero.subhead}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {[...blogPosts]
              .sort((a, b) => b.date.localeCompare(a.date))
              .map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
