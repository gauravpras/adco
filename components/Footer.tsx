"use client";

import { Logo } from "@/components/Logo";
import {
  contactInfo,
  footerContent,
  siteMeta,
} from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  async function onNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewsletterStatus("loading");
    setNewsletterMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) {
        setNewsletterStatus("error");
        setNewsletterMessage(data.error ?? "Something went wrong.");
        return;
      }
      setNewsletterStatus("success");
      setNewsletterMessage(data.message ?? "Thanks for subscribing.");
      setEmail("");
    } catch {
      setNewsletterStatus("error");
      setNewsletterMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <footer className="border-t border-ink/10 bg-white text-ink">
      <div className="mx-auto max-w-content px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              {footerContent.newsletterTitle}
            </p>
            <p className="mt-3 max-w-md text-ink/70">
              {footerContent.newsletterDescription}
            </p>
            <form
              className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-end"
              onSubmit={onNewsletterSubmit}
            >
              <label className="flex-1">
                <span className="sr-only">Email for newsletter</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  className="w-full border-b border-ink/20 bg-transparent py-2 text-ink placeholder:text-ink/40 focus:border-adco-blue focus:outline-none"
                />
              </label>
              <button
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal-red text-white transition hover:bg-signal-red/90 disabled:opacity-50"
                aria-label="Subscribe to newsletter"
              >
                <ArrowUpRight className="h-5 w-5" aria-hidden />
              </button>
            </form>
            {newsletterMessage ? (
              <p
                className={`mt-2 text-sm ${
                  newsletterStatus === "error" ? "text-signal-red" : "text-growth-green"
                }`}
                role="status"
              >
                {newsletterMessage}
              </p>
            ) : null}
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerContent.columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          className="text-sm text-ink/80 hover:text-adco-blue"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-ink/80 hover:text-adco-blue"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-ink/10 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo className="text-ink [&_span]:text-ink" />
            <p className="mt-4 text-sm text-ink/70">
              {contactInfo.email} · {contactInfo.phone}
            </p>
            <p className="text-sm text-ink/70">Based in {contactInfo.location}</p>
          </div>
          <p className="font-display text-5xl font-bold tracking-tighter text-ink/10 md:text-7xl">
            {siteMeta.shortName}
          </p>
        </div>

        <p className="mt-8 text-xs text-ink/50">
          © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
