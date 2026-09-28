"use client";

import { PackagesGrid } from "@/components/PackagesGrid";
import { ServiceAlacarteVisual } from "@/components/ServiceAlacarteVisual";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import { FadeIn } from "@/components/motion/FadeIn";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";
import {
  findServiceBySlug,
  services,
  type Service,
} from "@/lib/content";
import { getServiceIcon } from "@/lib/icons";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const catalogViews = [
  { id: "alacarte", label: "À la carte" },
  { id: "packages", label: "Packages" },
] as const;

type CatalogView = (typeof catalogViews)[number]["id"];

function viewFromHash(hash: string): CatalogView | null {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return null;
  if (id === "packages-heading" || id === "packages-title") return "packages";
  if (findServiceBySlug(id)) return "alacarte";
  return null;
}

function scrollTargetFromHash(hash: string): string | null {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return null;
  if (id === "packages-heading" || id === "packages-title") return "packages-heading";
  if (findServiceBySlug(id)) return id;
  return null;
}

export function SolutionsCatalog() {
  const [view, setView] = useState<CatalogView>("alacarte");
  const [scrollToken, setScrollToken] = useState(0);
  const pendingScroll = useRef<string | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    function syncFromHash() {
      const next = viewFromHash(window.location.hash);
      const target = scrollTargetFromHash(window.location.hash);
      if (next) setView(next);
      if (target) {
        pendingScroll.current = target;
        setScrollToken((token) => token + 1);
      }
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    const id = pendingScroll.current;
    if (!id) return;

    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      pendingScroll.current = null;
      scrollTo(el, { immediate: !!reduceMotion });
    });

    return () => cancelAnimationFrame(frame);
  }, [view, scrollToken, reduceMotion, scrollTo]);

  return (
    <section id="packages-heading" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn className="flex justify-start">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 p-1 backdrop-blur-sm"
            role="tablist"
            aria-label="Solutions"
          >
            {catalogViews.map((item) => {
              const selected = view === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`${item.id}-tab`}
                  aria-selected={selected}
                  aria-controls={`${item.id}-panel`}
                  onClick={() => setView(item.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selected ? "text-white" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {selected ? (
                    <motion.span
                      layoutId={reduceMotion ? undefined : "catalog-toggle-pill"}
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        <CatalogPanel view={view} />
      </div>
    </section>
  );
}

function CatalogPanel({ view }: { view: CatalogView }) {
  switch (view) {
    case "alacarte":
      return <AlacartePanel />;
    case "packages":
      return <PackagesPanel />;
    default: {
      const exhaustive: never = view;
      return exhaustive;
    }
  }
}

function AlacartePanel() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <div
        id="alacarte-panel"
        role="tabpanel"
        aria-labelledby="alacarte-tab"
        className="mt-10"
      >
        <h2
          id="alacarte-heading"
          className="font-display text-3xl font-bold tracking-tight md:text-4xl"
        >
          À la carte
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <li key={service.id} className="min-w-0">
                <button
                  type="button"
                  id={service.slug}
                  className="group flex h-full w-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-adco-blue/40 hover:shadow-xl hover:shadow-adco-blue/10"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative min-h-[7.5rem] w-full md:min-h-[9rem]">
                    <ServiceAlacarteVisual slug={service.slug} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white backdrop-blur-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="px-4 py-4 font-display text-base font-semibold tracking-tight text-ink group-hover:text-adco-blue md:px-5 md:text-lg">
                    {service.name}
                  </h3>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}

function PackagesPanel() {
  return (
    <div
      id="packages-panel"
      role="tabpanel"
      aria-labelledby="packages-tab"
      className="mt-10"
    >
      <h2
        id="packages-title"
        className="scroll-mt-28 font-display text-3xl font-bold tracking-tight md:text-4xl"
      >
        Packages
      </h2>
      <p className="mt-3 max-w-2xl text-ink/65">
        Starting frameworks, customized to your business. Ad spend billed
        separately where applicable.
      </p>
      <PackagesGrid />
    </div>
  );
}
