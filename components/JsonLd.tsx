import { contactInfo, siteMeta } from "@/lib/content";

export function JsonLdLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteMeta.name,
    description: siteMeta.defaultDescription,
    url:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://adcogroup.com",
    areaServed: {
      "@type": "City",
      name: "Bangkok",
      containedInPlace: {
        "@type": "Country",
        name: "Thailand",
      },
    },
    sameAs: [siteMeta.instagramUrl, siteMeta.linktreeUrl],
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },
    priceRange: "$$",
    knowsAbout: [
      "Digital marketing",
      "Digital onboarding",
      "Search engine optimization",
      "Web design",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
