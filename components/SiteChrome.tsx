"use client";

import { BackgroundLayer } from "@/components/BackgroundLayer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLdLocalBusiness } from "@/components/JsonLd";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const isFastTrack = pathname === "/fast-track-quote";

  if (isFastTrack) {
    return children;
  }

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
