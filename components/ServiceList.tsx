"use client";

import { AbstractVisual } from "@/components/AbstractVisual";
import { LinkArrow } from "@/components/LinkArrow";
import { FadeIn } from "@/components/motion/FadeIn";
import { findServiceById, servicesTeaser } from "@/lib/content";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export function ServiceList() {
  const [activeId, setActiveId] = useState<string>(
    servicesTeaser.items[0].serviceId,
  );
  const activeService = findServiceById(activeId);
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <FadeIn className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            {servicesTeaser.sectionLabel}
          </p>
          <LinkArrow href={servicesTeaser.cta.href} label={servicesTeaser.cta.label} />
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="flex flex-col gap-2" role="tablist" aria-label="Services preview">
            {servicesTeaser.items.map((item) => {
              const active = item.serviceId === activeId;
              return (
                <button
                  key={item.serviceId}
                  type="button"
                  role="tab"
                  id={`service-tab-${item.index}`}
                  aria-selected={active}
                  aria-controls="service-preview-panel"
                  onClick={() => setActiveId(item.serviceId)}
                  className={`flex items-baseline justify-between border-b py-4 text-left transition ${
                    active ? "border-ink" : "border-ink/10 hover:border-ink/30"
                  }`}
                >
                  <span className="font-display text-lg font-semibold md:text-xl">
                    {item.label}
                  </span>
                  <span className="text-xs font-semibold text-signal-red">{`{${item.index}}`}</span>
                </button>
              );
            })}
          </div>

          <div
            id="service-preview-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${servicesTeaser.items.find((i) => i.serviceId === activeId)?.index ?? "01"}`}
            className="relative min-h-[320px] overflow-hidden rounded-2xl bg-ink text-white"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <AbstractVisual
                  alt="Abstract service preview — replace before launch"
                  className="absolute inset-0 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              </motion.div>
            </AnimatePresence>
            {activeService ? (
              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  {activeService.name}
                </h3>
                <p className="mt-3 max-w-lg text-sm text-white/75 md:text-base">
                  {activeService.longDescription}
                </p>
                <p className="mt-4 text-xs text-white/55">
                  Best for: {activeService.bestFor}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
