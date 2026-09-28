import { BloomHeroObserver } from "@/components/home/HomeHeroObserver";
import { BloomSurface } from "@/components/BloomSurface";
import { LegalArticle, LegalSection } from "@/components/LegalArticle";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteMeta } from "@/lib/content";
import type { Metadata } from "next";

const CONTACT_EMAIL = "gtechsolbiz@gmail.com";
const LAST_UPDATED = "September 27, 2026";

const privacyToc = [
  { id: "who-we-are", label: "Who we are" },
  { id: "what-this-policy-covers", label: "What this policy covers" },
  { id: "personal-data-we-collect", label: "Personal data we collect" },
  {
    id: "how-and-why-we-use-personal-data",
    label: "How and why we use personal data",
  },
  {
    id: "personal-data-of-your-customers",
    label: "Personal data of your customers",
  },
  { id: "cookies-and-analytics", label: "Cookies and analytics" },
  {
    id: "who-we-share-personal-data-with",
    label: "Who we share personal data with",
  },
  { id: "international-transfers", label: "International transfers" },
  {
    id: "how-long-we-keep-personal-data",
    label: "How long we keep personal data",
  },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your rights" },
  { id: "marketing-communications", label: "Marketing communications" },
  { id: "children", label: "Children" },
  { id: "third-party-links", label: "Third-party links" },
  { id: "changes-to-this-policy", label: "Changes to this policy" },
  { id: "contact-us", label: "Contact us" },
] as const;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AdCo Group collects, uses, and protects personal data.",
  openGraph: {
    title: `Privacy Policy | ${siteMeta.name}`,
    description: "How AdCo Group collects, uses, and protects personal data.",
    url: "/privacy",
  },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <BloomHeroObserver heroId="page-hero" />
      <section
        id="page-hero"
        className="relative overflow-hidden pt-28 text-white md:pt-32"
      >
        <BloomSurface />
        <div className="relative z-10 mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Legal
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-none tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-sm text-white/70">
              Last updated: {LAST_UPDATED}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <div className="rounded-3xl border border-ink/10 bg-white/75 px-5 py-12 backdrop-blur-sm md:px-8 md:py-14">
            <LegalArticle
              title="Privacy Policy"
              toc={[...privacyToc]}
              showPageHeader={false}
            >
              <LegalSection id="who-we-are" title="1. Who we are">
                <p>
                  Operating as AdCo Group (&quot;AdCo&quot;, &quot;we&quot;,
                  &quot;us&quot;), is a digital marketing and digital onboarding
                  business based in Bangkok, Thailand. For the personal data
                  described in this policy, we act as the data controller under
                  Thailand&apos;s Personal Data Protection Act B.E. 2562 (2019)
                  (&quot;PDPA&quot;). You can contact us about privacy at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-adco-blue hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </LegalSection>

              <LegalSection
                id="what-this-policy-covers"
                title="2. What this policy covers"
              >
                <p>
                  This policy explains how we collect, use, disclose and protect
                  personal data when you visit our website, contact us, or use our
                  services. It does not cover third-party websites or platforms we
                  link to or work with, which have their own policies.
                </p>
              </LegalSection>

              <LegalSection
                id="personal-data-we-collect"
                title="3. Personal data we collect"
              >
                <p>Information you give us:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Contact details: name, email address, phone number, business
                    name and job title.
                  </li>
                  <li>
                    Inquiry and project details: the message you send us, your
                    business description, goals, budget range and any files or links
                    you share.
                  </li>
                  <li>
                    Onboarding information: business information, locations, hours,
                    brand assets (logos, colors, fonts, photography, video) and
                    details of accounts we need to work with.
                  </li>
                  <li>
                    Communications: emails, messages and call notes between you and
                    us.
                  </li>
                  <li>
                    Billing information needed to issue invoices and receive
                    payment.
                  </li>
                </ul>
                <p>Information collected automatically when you use our website:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Device and browser information, IP address, pages viewed, time
                    spent, referring page and approximate location.
                  </li>
                  <li>Cookie and similar technology data (see section 6).</li>
                </ul>
                <p>Information from third parties:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Where you give us access, information available in your Google
                    Business Profile, Google Analytics, Google Search Console,
                    advertising accounts, social media accounts, email marketing
                    platform or CRM, limited to what is needed to deliver the
                    services you engaged us for.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection
                id="how-and-why-we-use-personal-data"
                title="4. How and why we use personal data"
              >
                <p>
                  We use personal data, and rely on the following lawful bases under
                  the PDPA:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    To respond to inquiries and prepare proposals (steps at your
                    request before a contract; legitimate interests).
                  </li>
                  <li>
                    To deliver, manage and report on our services (performance of a
                    contract).
                  </li>
                  <li>
                    To invoice you, keep accounts and meet tax and legal obligations
                    (legal obligation).
                  </li>
                  <li>
                    To improve our website, services and marketing (legitimate
                    interests, or consent where required).
                  </li>
                  <li>
                    To send you news, offers or updates about our services (consent,
                    which you can withdraw at any time).
                  </li>
                  <li>
                    To protect our business, prevent fraud and enforce our terms
                    (legitimate interests; legal claims).
                  </li>
                </ul>
                <p>
                  Where we rely on consent, you may withdraw it at any time without
                  affecting the lawfulness of earlier processing.
                </p>
              </LegalSection>

              <LegalSection
                id="personal-data-of-your-customers"
                title="5. Personal data of your customers"
              >
                <p>
                  When a client gives us access to their accounts (for example
                  analytics, advertising, email lists or a CRM), we may process
                  personal data about that client&apos;s own customers or contacts. In
                  that case the client remains responsible for that data and we
                  process it only on the client&apos;s instructions and only as needed
                  to deliver the agreed services. We follow the principle of least
                  necessary access and do not keep client data we no longer need.
                </p>
              </LegalSection>

              <LegalSection
                id="cookies-and-analytics"
                title="6. Cookies and analytics"
              >
                <p>
                  Our website may use cookies and similar technologies to make the
                  site work, understand how it is used and measure marketing
                  performance. Tools we may use include: Google Analytics (GA4),
                  Google Tag Manager, Google Ads, and other Google advertising and
                  measurement tools. You can control cookies through your browser
                  settings, and you may block or delete them, although some parts of
                  the site may not work as intended.
                </p>
              </LegalSection>

              <LegalSection
                id="who-we-share-personal-data-with"
                title="7. Who we share personal data with"
              >
                <p>We do not sell personal data. We share it only with:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Service providers that help us run our business (for example
                    website hosting, analytics, form handling, email, CRM, scheduling,
                    accounting and project management tools).
                  </li>
                  <li>
                    Advertising, search and social platforms, where needed to run
                    services you have engaged us for.
                  </li>
                  <li>
                    Professional advisers such as lawyers, accountants and auditors.
                  </li>
                  <li>
                    Authorities, courts or other parties where required by law or to
                    protect legal rights.
                  </li>
                  <li>
                    A successor business, if AdCo is involved in a merger,
                    acquisition or sale of assets.
                  </li>
                </ul>
                <p>
                  Where we share data with service providers, we require them to
                  protect it and use it only for the agreed purpose.
                </p>
              </LegalSection>

              <LegalSection
                id="international-transfers"
                title="8. International transfers"
              >
                <p>
                  Some of our service providers and platforms store or process data
                  outside Thailand. Where we transfer personal data abroad, we take
                  steps to ensure it receives appropriate protection in line with the
                  PDPA.
                </p>
              </LegalSection>

              <LegalSection
                id="how-long-we-keep-personal-data"
                title="9. How long we keep personal data"
              >
                <p>
                  We keep personal data only as long as needed for the purposes in
                  this policy. Inquiries that do not lead to a project are kept for
                  24 months. Client and billing records are kept for the duration of
                  the engagement and afterwards for as long as required for tax,
                  accounting and legal purposes. When data is no longer needed we
                  delete or anonymize it, and we return or revoke access to client
                  accounts when an engagement ends.
                </p>
              </LegalSection>

              <LegalSection id="security" title="10. Security">
                <p>
                  We use reasonable technical and organizational measures to protect
                  personal data, including delegated permissions instead of shared
                  passwords where possible, restricted internal access, and revoking
                  access when it is no longer needed.
                </p>
              </LegalSection>

              <LegalSection id="your-rights" title="11. Your rights">
                <p>Under the PDPA you may:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Access your personal data and request a copy.</li>
                  <li>Request correction of inaccurate or incomplete data.</li>
                  <li>Request deletion or anonymization of your data.</li>
                  <li>Request that we restrict or object to certain processing.</li>
                  <li>Withdraw consent at any time.</li>
                  <li>
                    Request that your data be transferred to you or another
                    controller, where applicable.
                  </li>
                </ul>
                <p>
                  To exercise these rights, email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-adco-blue hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  . We may need to verify your identity and will respond within the
                  period required by law. Some requests may be limited where we have a
                  legal obligation or legitimate reason to keep the data. If you
                  believe we have not handled your data properly, you may also
                  complain to Thailand&apos;s Personal Data Protection Committee (Office
                  of the Personal Data Protection Committee).
                </p>
              </LegalSection>

              <LegalSection
                id="marketing-communications"
                title="12. Marketing communications"
              >
                <p>
                  If you receive marketing emails or messages from us, you can
                  unsubscribe at any time using the link in the message or by emailing{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-adco-blue hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </LegalSection>

              <LegalSection id="children" title="13. Children">
                <p>
                  Our website and services are aimed at businesses and are not
                  directed to children. We do not knowingly collect personal data from
                  minors without appropriate consent. If you believe a minor has given
                  us personal data, contact us and we will delete it.
                </p>
              </LegalSection>

              <LegalSection id="third-party-links" title="14. Third-party links">
                <p>
                  Our website may link to third-party websites and platforms. We are
                  not responsible for their content or privacy practices.
                </p>
              </LegalSection>

              <LegalSection
                id="changes-to-this-policy"
                title="15. Changes to this policy"
              >
                <p>
                  We may update this policy from time to time. The &quot;Last
                  updated&quot; date shows the latest version, and material changes
                  will be highlighted on this page.
                </p>
              </LegalSection>

              <LegalSection id="contact-us" title="16. Contact us">
                <p>
                  AdCo Group
                  <br />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-adco-blue hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </LegalSection>
            </LegalArticle>
          </div>
        </div>
      </section>
    </>
  );
}
