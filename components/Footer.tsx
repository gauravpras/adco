"use client";

import { BloomSurface } from "@/components/BloomSurface";
import {
  contactInfo,
  footerContent,
  siteMeta,
} from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type FooterProps = {
  /** Rendered inside home snap scroll; layout footer skips `/` */
  embedded?: boolean;
};

export function Footer({ embedded = false }: FooterProps) {
  const pathname = usePathname();

  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  if (pathname === "/" && !embedded) {
    return null;
  }

  const darkFooter =
    embedded || pathname === "/solutions" || pathname === "/contact";

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
    <footer
      className={`relative overflow-hidden ${
        darkFooter
          ? "border-t border-white/10 bg-transparent text-white"
          : "border-t border-ink/10 bg-white/90 text-ink backdrop-blur-md"
      }`}
    >
      {darkFooter ? <BloomSurface /> : null}
      <p
        className={`pointer-events-none absolute -bottom-8 left-5 select-none font-display text-[clamp(4rem,18vw,12rem)] font-bold leading-none tracking-tighter md:left-8 ${
          darkFooter ? "text-white/[0.04]" : "text-ink/[0.04]"
        }`}
        aria-hidden
      >
        {siteMeta.shortName.toUpperCase()}
      </p>

      <div className="relative z-10 mx-auto w-full max-w-content px-5 py-16 md:px-8 md:py-20">
        <div
          className={`grid gap-12 lg:grid-cols-[1.2fr_1fr] ${
            darkFooter ? "pb-12" : "border-b border-ink/10 pb-12"
          }`}
        >
          <div>
            <p
              className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${
                darkFooter ? "text-white" : ""
              }`}
            >
              {footerContent.newsletterTitle}
            </p>
            <p className={`mt-3 max-w-md ${darkFooter ? "text-white/70" : "text-ink/65"}`}>
              {footerContent.newsletterDescription}
            </p>
            <form
              className={`mt-8 flex max-w-md items-end gap-3 border-b pb-1 ${
                darkFooter ? "border-white/25" : "border-ink/20"
              }`}
              onSubmit={onNewsletterSubmit}
            >
              <label className="flex-1">
                <span className="sr-only">Email for newsletter</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className={`w-full bg-transparent py-2 focus:outline-none ${
                    darkFooter
                      ? "text-white placeholder:text-white/40"
                      : "text-ink placeholder:text-ink/40"
                  }`}
                />
              </label>
              <button
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-red text-white transition hover:bg-signal-red/90 disabled:opacity-50"
                aria-label="Subscribe to newsletter"
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </form>
            {newsletterMessage ? (
              <p
                className={`mt-2 text-sm ${
                  newsletterStatus === "error"
                    ? "text-signal-red"
                    : darkFooter
                      ? "text-growth-green"
                      : "inline-block rounded-md border border-growth-green/40 bg-growth-green/10 px-3 py-1.5 text-ink"
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
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    darkFooter ? "text-white/45" : "text-ink/45"
                  }`}
                >
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          className={`text-sm hover:text-adco-blue ${
                            darkFooter ? "text-white/75" : "text-ink/75"
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className={`text-sm hover:text-adco-blue ${
                            darkFooter ? "text-white/75" : "text-ink/75"
                          }`}
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

        {darkFooter ? (
          <div className="flex flex-col items-end gap-4 pt-10 text-right">
            <p className="max-w-md text-sm leading-relaxed text-white/75">
              {footerContent.brandStatement}
            </p>
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
            </p>
          </div>
        ) : (
          <>
            <p className="max-w-2xl pt-10 text-sm leading-relaxed text-ink/70">
              {footerContent.brandStatement}
            </p>

            <div className="mt-auto flex flex-col gap-4 pt-10 md:flex-row md:items-end md:justify-between">
              <p className="text-sm text-ink/60">
                {contactInfo.email} · {contactInfo.phone} · {contactInfo.location}
              </p>
              <p className="text-right text-xs text-ink/45">
                © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
              </p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
