import { blogPosts } from "@/lib/content";
import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://adcogroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/solutions",
    "/contact",
    "/fast-track-quote",
    "/privacy",
    "/terms",
    "/blog",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "weekly"
        : route === "/privacy" || route === "/terms"
          ? "yearly"
          : route === "/blog" || route.startsWith("/blog/")
            ? "weekly"
            : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/privacy" || route === "/terms"
          ? 0.3
          : route === "/blog"
            ? 0.6
            : route.startsWith("/blog/")
              ? 0.5
              : 0.8,
  }));
}
