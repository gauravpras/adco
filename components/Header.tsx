"use client";

import { LinkArrow } from "@/components/LinkArrow";
import { Logo } from "@/components/Logo";
import { contactInfo, headerContact, heroContent, navLinks, bookingUrl } from "@/lib/content";
import { subscribeHomeHeroVisible } from "@/lib/homeScrollState";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

type HeaderProps = {
  overlay?: boolean;
};

export function Header({ overlay }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBloomChrome =
    isHome ||
    pathname === "/solutions" ||
    pathname === "/contact" ||
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/blog" ||
    pathname.startsWith("/blog/");
  const useOverlay = overlay ?? isBloomChrome;

  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isBloomChrome) return;
    setHeroVisible(true);
    return subscribeHomeHeroVisible(setHeroVisible);
  }, [isBloomChrome, pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const bloomHeaderHidden = isBloomChrome && !heroVisible;
  const showBloomHeroChrome = isBloomChrome && !bloomHeaderHidden;
  const lightChrome = !isBloomChrome;
  const textClass = lightChrome ? "text-ink" : "text-white";
  const navMuted = lightChrome
    ? "text-ink/60 hover:text-ink"
    : "text-white/70 hover:text-white";

  const logoOnDark = isBloomChrome ? showBloomHeroChrome : !lightChrome;

  const headerSurfaceClass =
    isBloomChrome || (useOverlay && !lightChrome)
      ? "bg-transparent"
      : useOverlay
        ? "bg-white/95 shadow-sm backdrop-blur-md"
        : "border-b border-ink/10 bg-white/95 backdrop-blur-md";

  const topBarBorderClass =
    showBloomHeroChrome || !lightChrome
      ? "border-white/10 text-white/70"
      : "border-ink/10 text-ink/60";

  return (
    <>
      <header
        className={`z-50 transition-[transform,opacity] duration-300 ${
          useOverlay ? "fixed inset-x-0 top-0" : "sticky top-0"
        } ${
          bloomHeaderHidden
            ? "pointer-events-none -translate-y-full opacity-0"
            : ""
        } ${headerSurfaceClass}`}
      >
        {!isBloomChrome ? (
          <div
            className={`hidden border-b px-5 py-2 md:block md:px-8 ${topBarBorderClass}`}
          >
            <div className="mx-auto flex max-w-content items-center justify-end gap-6 text-xs">
              <a
                href={`tel:${headerContact.phone.replace(/\s/g, "")}`}
                className="transition hover:opacity-100"
              >
                {headerContact.phone}
              </a>
              <a
                href={`mailto:${headerContact.email}`}
                className="transition hover:opacity-100"
              >
                {headerContact.email}
              </a>
            </div>
          </div>
        ) : null}
        <div className="relative mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Logo className={`${textClass} shrink-0`} onDark={logoOnDark} />
            {isBloomChrome ? (
              <p
                className={`text-[10px] font-medium uppercase leading-tight tracking-[0.22em] md:text-[11px] md:tracking-[0.28em] ${textClass}`}
              >
                {heroContent.eyebrow}
              </p>
            ) : null}
          </div>

          <nav
            className="hidden items-center justify-center gap-8 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                    active
                      ? lightChrome
                        ? "text-ink"
                        : "text-white"
                      : navMuted
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <div className="hidden lg:block">
              <LinkArrow
                href={headerContact.auditCta.href}
                label={headerContact.auditCta.label}
                variant={lightChrome ? "dark" : "light"}
                accent="blue"
                className="!text-xs uppercase tracking-[0.12em]"
              />
            </div>
            {!isBloomChrome ? (
              <button
                type="button"
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${textClass}`}
                aria-expanded={menuOpen}
                aria-controls={menuId}
                onClick={() => setMenuOpen(true)}
              >
                Menu
              </button>
            ) : null}
          </div>
        </div>
      </header>

      {!isBloomChrome && menuOpen ? (
        <div
          id={menuId}
          ref={panelRef}
          className="fixed inset-0 z-[60] bg-ink text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
            <Logo className="text-white" onDark />
            <button
              type="button"
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
          </div>
          <div className="mx-auto grid max-w-content gap-12 px-5 py-12 md:grid-cols-2 md:px-8">
            <nav className="flex flex-col gap-4" aria-label="Mobile primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-4xl font-bold tracking-tight md:text-5xl"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-4 text-white/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Contact
              </p>
              <a
                href={`tel:${headerContact.phone.replace(/\s/g, "")}`}
                className="block text-lg text-white"
              >
                {headerContact.phone}
              </a>
              <a
                href={`mailto:${headerContact.email}`}
                className="block text-lg text-white"
              >
                {headerContact.email}
              </a>
              <p>{contactInfo.location}</p>
              <div className="pt-6">
                <LinkArrow href={bookingUrl} label="Let's talk" variant="light" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
