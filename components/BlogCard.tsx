import { ServiceAlacarteVisual } from "@/components/ServiceAlacarteVisual";
import { formatBlogDate, type BlogPost } from "@/lib/content";
import { FileText } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <li className="min-w-0">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-adco-blue/40 hover:shadow-xl hover:shadow-adco-blue/10"
      >
        <div className="relative min-h-[5.5rem] w-full md:min-h-[7rem]">
          <ServiceAlacarteVisual slug={post.visualSlug} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
          <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/15 text-white backdrop-blur-sm md:left-4 md:top-4 md:h-10 md:w-10 md:rounded-xl">
            <FileText className="h-4 w-4 md:h-5 md:w-5" aria-hidden />
          </span>
        </div>
        <div className="flex flex-1 flex-col px-4 py-4 md:px-5 md:py-5">
          <p className="text-xs font-medium uppercase tracking-wider text-ink/45">
            {formatBlogDate(post.date)}
          </p>
          <h2 className="mt-2 font-display text-base font-semibold leading-snug tracking-tight text-ink group-hover:text-adco-blue md:text-lg">
            {post.title}
          </h2>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/65">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </li>
  );
}
