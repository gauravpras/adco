"use client";

import type { FaqItem } from "@/lib/content";
import { Plus } from "lucide-react";
import { useState } from "react";

type FAQAccordionProps = {
  items: FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => {
        const open = openIds.has(item.id);
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span className="font-display text-base font-semibold md:text-lg">
                  {item.question}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-signal-red transition-transform ${
                    open ? "rotate-45" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-5 pr-8 text-sm text-ink/70 md:text-base"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
