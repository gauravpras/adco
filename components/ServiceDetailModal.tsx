"use client";

import { LinkArrow } from "@/components/LinkArrow";
import { AbstractVisual } from "@/components/AbstractVisual";
import type { Service } from "@/lib/content";
import { contactInterestHref } from "@/lib/content";
import { getServiceIcon } from "@/lib/icons";
import { X } from "lucide-react";
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
        className="relative max-h-[min(90vh,720px)] w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl shadow-ink/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hero-grain pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <AbstractVisual
          alt=""
          variant={visualVariant}
          className="relative h-36 w-full shrink-0 md:h-44"
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

        <div className="relative px-6 pb-8 pt-6 md:px-8 md:pb-10">
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
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-ink/45">
            Best for
          </p>
          <p className="mt-1 text-sm text-ink/75">{service.bestFor}</p>
          <div className="mt-8 border-t border-ink/10 pt-6">
            <LinkArrow
              href={contactInterestHref(service.slug)}
              label="Discuss this service"
              accent="blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
