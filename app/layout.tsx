import { BackgroundLayer } from "@/components/BackgroundLayer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLdLocalBusiness } from "@/components/JsonLd";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { siteMeta } from "@/lib/content";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://adcogroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMeta.defaultTitle,
    template: `%s | ${siteMeta.shortName} Group`,
  },
  description: siteMeta.defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteMeta.name,
    title: siteMeta.defaultTitle,
    description: siteMeta.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.defaultTitle,
    description: siteMeta.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} flex min-h-svh flex-col font-body antialiased`}
      >
        <SmoothScrollProvider>
          <BackgroundLayer />
          <JsonLdLocalBusiness />
          <Header />
          <main className="relative min-h-0 flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
