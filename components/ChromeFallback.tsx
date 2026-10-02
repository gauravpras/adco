"use client";

import { BackgroundLayer } from "@/components/BackgroundLayer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLdLocalBusiness } from "@/components/JsonLd";
import type { ReactNode } from "react";

/** Shown while pathname-dependent chrome resolves (avoids dev compile stalls). */
export function ChromeFallback({ children }: { children: ReactNode }) {
  return (
    <>
      <BackgroundLayer />
      <JsonLdLocalBusiness />
      <Header />
      <main className="relative min-h-0 flex-1">{children}</main>
      <Footer />
    </>
  );
}
