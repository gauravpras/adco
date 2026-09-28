"use client";

import { LinkArrow } from "@/components/LinkArrow";
import { AbstractVisual } from "@/components/AbstractVisual";
import type { Service } from "@/lib/content";
import { bookingUrl, servicePriceDisclaimer } from "@/lib/content";
import { getServiceIcon } from "@/lib/icons";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

type ServiceDetailModalProps = {
  service: Service | null;
  onClose: () => void;
};

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  if (!service) return null;

  const Icon = getServiceIcon(service.icon);
  const visualVariant = service.slug.length % 2 === 0 ? "mesh" : "motif";

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl shadow-ink/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hero-grain pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <AbstractVisual
          alt=""
          variant={visualVariant}
          className="relative h-24 w-full md:h-32"
        />
        <button
          ref={closeRef}
          type="button"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-ink/40 text-white backdrop-blur-sm transition hover:bg-ink/60"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="relative px-6 pb-6 pt-5 md:px-8 md:pb-8">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-adco-blue/10 text-adco-blue">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <h2
            id="service-modal-title"
            className="mt-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl"
          >
            {service.name}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70 md:text-base">
            {service.longDescription}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink/45">
            Best for
          </p>
          <p className="mt-1 text-sm text-ink/75">{service.bestFor}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink/45">
            Indicative range
          </p>
          <p className="mt-1 whitespace-pre-line text-sm font-semibold text-ink">
            {service.priceRange}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-ink/50">
            {servicePriceDisclaimer}
          </p>
          <div
            className={
              service.slug === "website-design"
                ? "mt-5 flex flex-col items-start gap-3 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
                : "mt-5 border-t border-ink/10 pt-5"
            }
          >
            <LinkArrow
              href={bookingUrl}
              label="Discuss this service"
              accent="blue"
            />
            {service.slug === "website-design" ? (
              <Link
                href="/fast-track-quote"
                target="_blank"
                rel="noopener noreferrer"
                className="fast-track-quote relative inline-flex items-center justify-center gap-2 self-end overflow-hidden rounded-full border border-transparent px-5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-adco-blue"
              >
                <svg
                  viewBox="0 0 24 22"
                  className="relative z-10 h-5 w-4"
                  aria-hidden
                >
                  <g fill="currentColor">
                    <path d="M12 1.4 16.4 8.2v7.8c0 1.5-2 2.7-4.4 2.7s-4.4-1.2-4.4-2.7V8.2L12 1.4z" />
                    <path d="M7.6 14.2 4.6 17.6c.3 1.4 1.3 2.3 2.6 2.4l.4-5.8z" />
                    <path d="M16.4 14.2 19.4 17.6c-.3 1.4-1.3 2.3-2.6 2.4l-.4-5.8z" />
                    <circle cx="12" cy="11" r="1.35" fill="#272727" fillOpacity="0.35" />
                  </g>
                </svg>
                <span className="relative z-10">Get a Fast-Track Quote</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
