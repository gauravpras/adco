"use client";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/content";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Logo className="text-white" />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  active ? "text-white" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            Book a Free Audit
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md p-2 text-sm font-medium text-white md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          Menu
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          className="border-t border-white/10 bg-ink px-5 pb-6 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white/90"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-2 w-full">
              Book a Free Audit
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
