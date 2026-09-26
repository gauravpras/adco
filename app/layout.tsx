import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLdLocalBusiness } from "@/components/JsonLd";
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
        className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen font-body antialiased`}
      >
        <JsonLdLocalBusiness />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
