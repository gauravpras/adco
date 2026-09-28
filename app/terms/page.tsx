import Link from "next/link";
import { BloomHeroObserver } from "@/components/home/HomeHeroObserver";
import { BloomSurface } from "@/components/BloomSurface";
import { LegalArticle, LegalSection } from "@/components/LegalArticle";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteMeta } from "@/lib/content";
import type { Metadata } from "next";

const CONTACT_EMAIL = "gtechsolbiz@gmail.com";
const LAST_UPDATED = "September 27, 2026";

const termsToc = [
  { id: "about-these-terms", label: "About these terms" },
  { id: "our-services", label: "Our services" },
  { id: "how-an-engagement-starts", label: "How an engagement starts" },
  { id: "what-adco-is-responsible-for", label: "What AdCo is responsible for" },
  { id: "what-you-are-responsible-for", label: "What you are responsible for" },
  { id: "fees-and-payment", label: "Fees and payment" },
  { id: "scope-revisions-and-changes", label: "Scope, revisions and changes" },
  { id: "no-guarantee-of-results", label: "No guarantee of results" },
  {
    id: "third-party-platforms-and-accounts",
    label: "Third-party platforms and accounts",
  },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "personal-data", label: "Personal data" },
  { id: "term-and-termination", label: "Term and termination" },
  { id: "use-of-this-website", label: "Use of this website" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "limitation-of-liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnity" },
  { id: "events-beyond-our-control", label: "Events beyond our control" },
  { id: "changes-to-these-terms", label: "Changes to these terms" },
  { id: "general", label: "General" },
  { id: "contact-us", label: "Contact us" },
] as const;

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to using the AdCo Group website and our digital marketing and onboarding services.",
  openGraph: {
    title: `Terms of Service | ${siteMeta.name}`,
    description:
      "The terms that apply to using the AdCo Group website and our digital marketing and onboarding services.",
    url: "/terms",
  },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
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
              Terms of Service
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
              title="Terms of Service"
              toc={[...termsToc]}
              showPageHeader={false}
            >
              <LegalSection id="about-these-terms" title="1. About these terms">
                <p>
                  These terms apply to your use of the AdCo Group website and to
                  the services provided by AdCo Group, operating as AdCo Group
                  (&quot;AdCo&quot;, &quot;we&quot;, &quot;us&quot;), a digital
                  marketing and digital onboarding business based in Bangkok,
                  Thailand. By using our website or engaging our services, you
                  agree to these terms. If you are agreeing on behalf of a
                  business, you confirm you are authorized to bind that business
                  (&quot;Client&quot;, &quot;you&quot;).
                </p>
                <p>
                  For paid services, the specific scope, deliverables, timeline
                  and fees are set out in a written proposal, quote or service
                  agreement (&quot;Proposal&quot;). If a Proposal conflicts with
                  these terms, the Proposal prevails for that engagement.
                </p>
              </LegalSection>

              <LegalSection id="our-services" title="2. Our services">
                <p>AdCo provides customized digital services, which may include:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Digital Onboarding</li>
                  <li>Website Design &amp; Development</li>
                  <li>SEO</li>
                  <li>Social Media Marketing</li>
                  <li>Paid Advertising</li>
                  <li>Content Marketing</li>
                  <li>Email &amp; CRM Marketing</li>
                  <li>Google Business &amp; Local Presence</li>
                  <li>Analytics &amp; Tracking</li>
                  <li>Digital Audit &amp; Strategy</li>
                </ul>
                <p>
                  Services can be purchased individually or combined. Every
                  engagement is tailored to the client&apos;s business, so the
                  exact deliverables are those stated in the Proposal, not the
                  general descriptions on our website.
                </p>
              </LegalSection>

              <LegalSection
                id="how-an-engagement-starts"
                title="3. How an engagement starts"
              >
                <p>
                  We assess your business, recommend a solution, and send a
                  Proposal. An engagement begins when you accept the Proposal in
                  writing (including by email) and any required initial payment
                  is made. Website content and service descriptions are general
                  information and are not an offer.
                </p>
              </LegalSection>

              <LegalSection
                id="what-adco-is-responsible-for"
                title="4. What AdCo is responsible for"
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Delivering the agreed deliverables with professional care.</li>
                  <li>
                    Managing the project and communicating through the agreed
                    channels.
                  </li>
                  <li>Providing the reporting included in the Proposal.</li>
                  <li>Raising promptly any issue that could affect delivery.</li>
                </ul>
              </LegalSection>

              <LegalSection
                id="what-you-are-responsible-for"
                title="5. What you are responsible for"
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Providing accurate and complete business information.</li>
                  <li>
                    Providing the assets, content and account access we need, on
                    time.
                  </li>
                  <li>
                    Reviewing deliverables and giving approvals and feedback
                    promptly.
                  </li>
                  <li>Paying the agreed fees.</li>
                  <li>
                    Maintaining ownership and good standing of your own
                    third-party accounts (domain, hosting, ad, social, analytics,
                    email and CRM accounts).
                  </li>
                  <li>
                    Making sure the materials you give us, and your products,
                    services and claims, are lawful and that you have the right to
                    use them.
                  </li>
                </ul>
                <p>
                  Delays in providing information, access, approvals or payment may
                  delay the timeline and affect delivery dates.
                </p>
              </LegalSection>

              <LegalSection id="fees-and-payment" title="6. Fees and payment">
                <ul className="list-disc space-y-2 pl-5">
                  <li>AdCo service fees are stated in the Proposal.</li>
                  <li>
                    Fees are exclusive of VAT and other applicable taxes unless
                    stated otherwise.
                  </li>
                  <li>
                    Third-party costs are separate from AdCo&apos;s fees and are
                    the Client&apos;s responsibility. These include advertising
                    spend and media budgets, domain registration, hosting, paid
                    software and plugins, stock assets and other subscriptions. We
                    will disclose expected third-party costs in the Proposal.
                    Advertising budgets are paid to the platforms and are not part
                    of our service fee unless the Proposal expressly says
                    otherwise.
                  </li>
                  <li>
                    Refunds and cancellations of fees: amounts paid for work
                    already completed or third-party costs already incurred are
                    non-refundable. If you cancel before work begins, we may refund
                    amounts not yet committed to deliverables or non-cancellable
                    costs, minus any documented preparation costs. Retainer or
                    monthly fees are non-refundable for the current billing period
                    once that period has started, unless the Proposal states
                    otherwise.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection
                id="scope-revisions-and-changes"
                title="7. Scope, revisions and changes"
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Included revisions are stated in the Proposal.</li>
                  <li>
                    Requests outside the agreed scope, or beyond the included
                    revisions, will be documented and quoted separately before work
                    begins.
                  </li>
                  <li>
                    Website development and ongoing technical maintenance are
                    different services; maintenance is included only if the
                    Proposal says so.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection
                id="no-guarantee-of-results"
                title="8. No guarantee of results"
              >
                <p>
                  Marketing outcomes are influenced by AdCo but depend on many
                  factors outside our control, including competition, market
                  demand, budget, website quality, content, search-engine and
                  platform algorithm changes, and your own operations. We do not
                  guarantee any particular outcome, including search rankings,
                  traffic, leads, sales, revenue, return on ad spend or follower
                  growth. Our commitment is to deliver the agreed work with
                  professional care and to measure and report performance
                  transparently.
                </p>
              </LegalSection>

              <LegalSection
                id="third-party-platforms-and-accounts"
                title="9. Third-party platforms and accounts"
              >
                <p>
                  Our services rely on third-party platforms such as Google, Meta,
                  other social and advertising networks, hosting providers and
                  email or CRM tools. Their rules, pricing, features and
                  availability can change without notice, and we are not
                  responsible for platform decisions such as ad disapprovals,
                  account suspensions or algorithm changes. You must own or hold the
                  appropriate rights to accounts we work in, and you remain
                  responsible for complying with each platform&apos;s terms. Where
                  we need access to your accounts, we will use the minimum access
                  necessary, prefer delegated permissions over shared passwords,
                  and you may revoke our access at the end of the engagement.
                </p>
              </LegalSection>

              <LegalSection
                id="intellectual-property"
                title="10. Intellectual property"
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Your materials (logos, brand assets, content, product
                    information, data) remain yours. You give AdCo a non-exclusive
                    license to use them solely to deliver the services.
                  </li>
                  <li>
                    Once the Client has paid all fees due for a deliverable,
                    ownership of the final, custom deliverables created specifically
                    for the Client transfers to the Client, excluding the items
                    below.
                  </li>
                  <li>
                    AdCo keeps ownership of its pre-existing tools, templates, code
                    libraries, processes and know-how, and grants the Client a
                    non-exclusive license to use them as embedded in the
                    deliverables.
                  </li>
                  <li>
                    Third-party assets (fonts, stock media, plugins, software)
                    remain subject to their own licenses, which the Client must
                    follow.
                  </li>
                  <li>
                    Unless the Client tells us in writing that it does not want
                    this, AdCo may show completed work (excluding confidential
                    information) in its portfolio and marketing.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection id="confidentiality" title="11. Confidentiality">
                <p>
                  Each party will keep the other&apos;s non-public business
                  information confidential, use it only for the engagement, and not
                  disclose it except to people who need it to perform the
                  engagement, or where required by law. This does not apply to
                  information that is public through no fault of the recipient.
                  Obligations continue after the engagement ends.
                </p>
              </LegalSection>

              <LegalSection id="personal-data" title="12. Personal data">
                <p>
                  Our handling of personal data collected through our website and
                  business dealings is described in our{" "}
                  <Link href="/privacy" className="text-adco-blue hover:underline">
                    Privacy Policy
                  </Link>
                  . Where we process personal data of your customers on your
                  behalf, we do so only on your instructions and to deliver the
                  agreed services, and you are responsible for having a lawful
                  basis and any required consents for that data.
                </p>
              </LegalSection>

              <LegalSection id="term-and-termination" title="13. Term and termination">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Ongoing or retainer services continue for the term stated in
                    the Proposal.
                  </li>
                  <li>
                    Either party may terminate for material breach that is not fixed
                    within a reasonable period after written notice.
                  </li>
                  <li>
                    On termination, the Client pays for work completed and
                    non-cancellable costs incurred up to the termination date. We
                    will return or revoke access to Client accounts and hand over
                    agreed deliverables that have been paid for.
                  </li>
                  <li>
                    Sections that by nature should continue (payment, intellectual
                    property, confidentiality, liability, governing law) survive
                    termination.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection id="use-of-this-website" title="14. Use of this website">
                <p>
                  You agree not to misuse the website, including attempting to gain
                  unauthorized access, introducing malicious code, scraping it in a
                  way that disrupts it, or using it unlawfully. The website content,
                  design and branding belong to AdCo or its licensors and may not be
                  copied or reused without permission, except for your normal
                  personal or internal business use.
                </p>
              </LegalSection>

              <LegalSection id="disclaimers" title="15. Disclaimers">
                <p>
                  The website and general information on it are provided &quot;as
                  is&quot;. To the extent permitted by law, we disclaim implied
                  warranties, and we do not warrant that the website will be
                  uninterrupted or error-free.
                </p>
              </LegalSection>

              <LegalSection
                id="limitation-of-liability"
                title="16. Limitation of liability"
              >
                <p>
                  To the extent permitted by law, AdCo is not liable for indirect,
                  incidental or consequential loss, or for loss of profit, revenue,
                  data or goodwill, arising from the services or the website.
                  AdCo&apos;s total liability arising from an engagement is limited
                  to the total fees paid by the Client to AdCo for that engagement
                  in the twelve (12) months before the event giving rise to the
                  claim. Nothing in these terms limits liability that cannot be
                  limited under Thai law, including liability for intentional
                  misconduct or gross negligence.
                </p>
              </LegalSection>

              <LegalSection id="indemnity" title="17. Indemnity">
                <p>
                  The Client will be responsible for, and compensate AdCo for,
                  claims and losses arising from materials the Client supplied, the
                  Client&apos;s products, services or marketing claims, or the
                  Client&apos;s breach of these terms or of platform rules or the
                  law.
                </p>
              </LegalSection>

              <LegalSection
                id="events-beyond-our-control"
                title="18. Events beyond our control"
              >
                <p>
                  Neither party is liable for delay or failure caused by events
                  beyond its reasonable control, such as natural disasters, power or
                  internet outages, platform outages, government action or
                  pandemics. Payment obligations for work already performed are not
                  excused.
                </p>
              </LegalSection>

              <LegalSection
                id="changes-to-these-terms"
                title="19. Changes to these terms"
              >
                <p>
                  We may update these terms from time to time. The updated version
                  applies to the website from the &quot;Last updated&quot; date and
                  to new engagements. For an existing engagement, changes apply only
                  if agreed in writing.
                </p>
              </LegalSection>

              <LegalSection id="general" title="20. General">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Governing law: these terms are governed by the laws of Thailand.
                    Disputes are subject to the courts of Bangkok, Thailand, unless
                    the parties agree otherwise in writing.
                  </li>
                  <li>
                    Entire agreement: these terms and the Proposal are the whole
                    agreement for the engagement.
                  </li>
                  <li>
                    Severability: if part of these terms is unenforceable, the rest
                    continues to apply.
                  </li>
                  <li>
                    No waiver: not enforcing a right is not a waiver of it.
                  </li>
                  <li>
                    Language: these terms are written in English. If a Thai
                    translation is provided, the English version prevails if there is
                    any inconsistency with a Thai translation.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection id="contact-us" title="21. Contact us">
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
