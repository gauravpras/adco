/**
 * Central copy and structured content for AdCo Group marketing site.
 * Edit strings here — avoid scattering copy in JSX.
 */

import {
  blogPosts,
  findBlogPostBySlug,
  formatBlogDate,
  relatedBlogPosts,
} from "@/lib/blog-posts";

export type { BlogCta, BlogFaq, BlogImageBrief, BlogPost } from "@/lib/blog-posts";
export { blogPosts, findBlogPostBySlug, formatBlogDate, relatedBlogPosts };

export const placeholders = {
  // TODO: client to confirm final pricing
  packagePricing: "฿[PLACEHOLDER]",
  statBusinessesOnboarded: "[X]+",
  statClientSatisfaction: "[X]%",
  statYearsExpertise: "[X]+",
  annualDiscount: "[X]",
  officeHours: "Mon–Fri (9am – 5pm) Bkk time",
  fullAddress: "Bangkok, Thailand",
  // TODO: confirm before launch
  email: "gtechsolbiz@gmail.com",
  phone: "[PLACEHOLDER, phone pending confirmation]",
  serviceAreaNote: "[confirm if service area extends beyond Bangkok]",
  testimonialClientName:
    "TopWoods", // TODO: verify client name — source shows TopWoods logo but quote references Techflix
  trustBadgeMore: "[+ more — PLACEHOLDER logos]",
} as const;

export type ServiceIconKey =
  | "rocket"
  | "globe"
  | "search"
  | "share2"
  | "megaphone"
  | "fileText"
  | "mail"
  | "mapPin"
  | "barChart"
  | "clipboardCheck";

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  bestFor: string;
  priceRange: string;
  icon: ServiceIconKey;
}

export interface Package {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  includes: string[];
  bestFor: string;
  priceLabel: string;
  priceMonthly?: string;
  priceAnnual?: string;
  priceSubline?: string;
  priceSublineMonthly?: string;
  priceSublineAnnual?: string;
  isOneTime?: boolean;
  teaserOneLiner?: string;
  isMostPopular?: boolean;
  isCustom?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  statPlaceholder: string;
  variant: "dark" | "light";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  title: string;
  description: string;
  isPlaceholder?: boolean;
  /** Numeric target for count-up animation; omit for non-numeric stats */
  countTarget?: number;
  suffix?: string;
  /** Client-side description variant (e.g. rolling “as of” date) */
  dynamicDescription?: "satisfactionAsOf";
}

export interface WorkGridItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageAlt: string;
}

export interface ServicesShowcaseTab {
  index: string;
  slug: string;
  label: string;
  serviceId: string;
}

export const siteMeta = {
  name: "AdCo Group",
  shortName: "AdCo",
  tagline: "Your Digital Launchpad for Business.",
  mission:
    "To digitally onboard every business in Bangkok, ensuring their digital presence is as strong as their physical presence.",
  defaultTitle: "AdCo Group | Your Digital Launchpad for Business",
  defaultDescription:
    "Bangkok-based digital marketing and digital onboarding. Websites, SEO, social, ads, and analytics, built around your business.",
  instagram: "@adcosphere",
  instagramUrl: "https://www.instagram.com/adcosphere",
  location: "Bangkok, Thailand",
} as const;

export const bookingUrl =
  "https://calendar.app.google/8SNs3iWK2SYJMwk77" as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerContent = {
  newsletterTitle: "Stay connected",
  newsletterDescription:
    "Digital marketing tips for Bangkok businesses, straight to your inbox.",
  brandStatement:
    "With AdCo, your business gets more than a digital presence, a system that keeps working after launch.",
  columns: [
    {
      title: "Navigate",
      links: navLinks.map((l) => ({ href: l.href, label: l.label })),
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
      ],
    },
    {
      title: "Social",
      links: [
        { href: siteMeta.instagramUrl, label: siteMeta.instagram, external: true },
        { href: "/blog", label: "Blog" },
      ],
    },
  ],
} as const;

export const blogHero = {
  headline: "Insights from AdCoSphere",
  subhead:
    "Digital marketing and onboarding notes for Bangkok businesses.",
} as const;

export const headerContact = {
  phone: placeholders.phone,
  email: placeholders.email,
  auditCta: { label: "Book a Free Audit", href: bookingUrl },
} as const;

export const contactInfo = {
  email: placeholders.email,
  phone: placeholders.phone,
  location: siteMeta.location,
  fullAddress: placeholders.fullAddress,
  officeHours: placeholders.officeHours,
} as const;

export const heroContent = {
  eyebrow: "Est. Bangkok",
  welcomeLine: "Welcome to AdCoSphere",
  headline: siteMeta.tagline,
  headlineLine1: "Your Digital",
  headlineLine2: "Launchpad for Business.",
  subhead:
    "From digital onboarding and websites to SEO, social, advertising, and analytics, we build custom digital systems around the business you envision.",
  primaryCta: { label: "Get Your Free Digital Audit", href: bookingUrl },
  secondaryCta: { label: "See what we do", href: "/solutions" },
} as const;

export const heroTags = [
  "Digital Onboarding",
  "Websites",
  "SEO & Social",
  "Advertising & Analytics",
] as const;

export const statsSection = {
  headline: "Our work speaks through numbers.",
  cta: { label: "Start Your Audit", href: bookingUrl },
  stats: [
    {
      value: "70,000+",
      title: "Organic reach generated",
      description: "Real reach delivered for client campaigns.",
      countTarget: 70000,
      suffix: "+",
    },
    {
      value: "8",
      title: "Businesses successfully delivered",
      description:
        "Full-funnel engagements completed, from launch to sustained growth.",
      countTarget: 8,
    },
    {
      value: "100%",
      title: "Client satisfaction rate",
      description: "",
      dynamicDescription: "satisfactionAsOf",
      countTarget: 100,
      suffix: "%",
    },
    {
      value: "8+",
      title: "Years of expertise",
      description:
        "Strategy, creative, and performance marketing across industries.",
      countTarget: 8,
      suffix: "+",
    },
  ] satisfies StatItem[],
};

export const splitStatement = {
  headline: "From invisible to unmissable.",
  supporting: "Digital systems that grow as fast as your business does.",
  imageAlt: "Abstract AdCo brand visual — replace before launch",
} as const;

export const featureShowcase = {
  headline: "Your goals, our priority.",
  subhead:
    "From first audit to ongoing growth, every recommendation starts with your business, not our package.",
  features: [
    {
      title: "Fast, direct communication",
      description: "Real answers from a real team, not a ticket queue.",
    },
    {
      title: "Reporting that means something",
      description: "Every report answers: what happened, why, and what we do next.",
    },
    {
      title: "Custom to the tea",
      description:
        "No two businesses get the same plan. Yours is built around your goals, budget, and audience.",
    },
  ],
  mockupCaption: "",
} as const;

export const clientWinsSection = {
  eyebrow: "Client wins",
} as const;

export const servicesTeaser = {
  sectionLabel: "Services",
  cta: { label: "See all services & pricing →", href: "/solutions" },
  items: [
    {
      index: "01",
      label: "Digital Onboarding",
      serviceId: "digital-onboarding",
    },
    {
      index: "02",
      label: "Website Design & Development",
      serviceId: "website-design",
    },
    {
      index: "03",
      label: "SEO & Local Presence",
      serviceId: "google-business",
    },
    {
      index: "04",
      label: "Social & Paid Advertising",
      serviceId: "social-media",
    },
  ],
} as const;

export const testimonialSpotlight = {
  spotlightId: "petal-story" as const,
  trustLine:
    "Businesses across Bangkok trust AdCo with their digital presence.",
  badgeNames: ["J Lim", "Petal Story", placeholders.testimonialClientName],
} as const;

export const teamStrip = {
  headline: "A small team, fully invested in your business.",
  line: "Strategists, designers, and marketers working as your digital team, not a rotating account manager.",
} as const;

export const pricingTeaser = {
  cta: { label: "See full pricing & packages →", href: "/solutions" },
  packageSlugs: ["digital-launch", "digital-growth", "digital-scale"] as const,
} as const;

export const pricingToggle = {
  monthly: "Monthly",
  annual: "Annual",
  annualBadge: "Save 17%",
} as const;

/** @deprecated use statsSection.stats */
export const proofStripStats: StatItem[] = statsSection.stats;

export const splitHeadlineBand = splitStatement;

export const servicesShowcase = {
  sectionLabel: servicesTeaser.sectionLabel,
  seeAllLabel: servicesTeaser.cta.label,
  seeAllHref: servicesTeaser.cta.href,
  seePricingLabel: "See packages",
  seePricingHref: "/solutions#packages-heading",
  tabs: servicesTeaser.items.map((item) => ({
    index: item.index,
    slug: item.serviceId,
    label: item.label.split(" ")[0] ?? item.label,
    serviceId: item.serviceId,
  })) satisfies ServicesShowcaseTab[],
};

export const processSection = {
  headline: "Our process",
  subhead:
    "Four stages keep you informed from first audit through ongoing optimization.",
  cta: { label: "Schedule a Free Audit", href: bookingUrl },
} as const;

export const successStoriesSection = {
  titleLines: ["Success", "stories"],
  subhead: "Our work speaks for itself, but our clients say it even better.",
} as const;

export const localBusinessesSection = {
  title: "Local Businesses we've worked with",
  subhead: "Bangkok brands we are proud to partner with.",
} as const;

export type ClientLogo = {
  id: string;
  label: string;
  logoSrc: string;
  width: number;
  height: number;
  href?: string;
};

export const clientLogos: ClientLogo[] = [
  {
    id: "gxry",
    label: "GXRY",
    logoSrc: "/images/clients/gxry.png",
    width: 999,
    height: 342,
    href: "https://gxry.live/",
  },
  {
    id: "petal-story",
    label: "Petal Story",
    logoSrc: "/images/clients/petal-story.png",
    width: 323,
    height: 185,
  },
  {
    id: "j-lim",
    label: "J Lim",
    logoSrc: "/images/clients/j-lim.png",
    width: 160,
    height: 161,
  },
  {
    id: "topwoods",
    label: "TopWoods",
    logoSrc: "/images/clients/topwoods.png",
    width: 143,
    height: 79,
  },
  {
    id: "steve-pariani",
    label: "Steve Pariani",
    logoSrc: "/images/clients/steve-pariani.png",
    width: 1024,
    height: 403,
    href: "https://stevepariani.com/",
  },
  {
    id: "chef-rashi-kaur",
    label: "Chef Rashi Kaur",
    logoSrc: "/images/clients/chef-rashi-kaur.png",
    width: 290,
    height: 80,
    href: "https://www.chefrashik.com/",
  },
  {
    id: "horizon",
    label: "Horizon",
    logoSrc: "/images/clients/horizon.png",
    width: 96,
    height: 83,
    href: "https://www.horizon1stop.com/",
  },
];

/** @deprecated use clientLogos */
export type ClientLogoPlaceholder = {
  id: string;
  label: string;
  logoSrc?: string;
};

/** @deprecated use clientLogos */
export const clientLogoPlaceholders: ClientLogoPlaceholder[] = clientLogos.map(
  (c) => ({ id: c.id, label: c.label, logoSrc: c.logoSrc }),
);

export const faqSection = {
  subhead:
    "Straight answers before you commit, no jargon, no guaranteed rankings.",
  askCta: { label: "Ask a question", href: "/contact" },
} as const;

export const inlineCta = {
  headline: "Tell us what you're building.",
  supportBlurb:
    "Reach out anytime — we'll recommend a clear next step based on your business, not a fixed package.",
  managerName: "[PLACEHOLDER — Client success name]",
  managerTitle: "Client Success",
  submitLabel: "Get in touch",
} as const;

export const lifecycleSteps = [
  "Assess",
  "Onboard",
  "Build",
  "Launch",
  "Market",
  "Measure",
  "Optimize",
] as const;

export const lifecycleSupportingLine =
  "We help businesses move through the full digital lifecycle — whether you're starting from zero or already online and need it to work harder.";

export const servicesPreviewCta = {
  label: "Tell us what you're trying to build →",
  href: "/solutions",
} as const;

export const servicePriceDisclaimer =
  "Pricing is indicative and depends on scope and complexity. Final fees are confirmed in a written proposal following a discovery call. Excludes VAT and third-party costs (such as advertising spend, hosting, domains and software).";

export type FastTrackTierId = "starter" | "growth" | "pro";

export type FastTrackTier = {
  id: FastTrackTierId;
  label: string;
  description: string;
  min: number;
  max: number;
};

export const fastTrackTiers: FastTrackTier[] = [
  {
    id: "starter",
    label: "Starter",
    description: "A small site with a few pages.",
    min: 5000,
    max: 30000,
  },
  {
    id: "growth",
    label: "Growth",
    description: "A full business site.",
    min: 30000,
    max: 90000,
  },
  {
    id: "pro",
    label: "Pro",
    description: "A larger custom build.",
    min: 90000,
    max: 150000,
  },
];

export type FastTrackAddon = {
  id: string;
  label: string;
  /** TODO: client to confirm */
  weight: number;
  note?: string;
};

export const fastTrackAddons: FastTrackAddon[] = [
  {
    id: "digital-onboarding",
    label: "Digital Onboarding",
    weight: 12000, // TODO: client to confirm
  },
  {
    id: "seo",
    label: "SEO",
    weight: 10000, // TODO: client to confirm
  },
  {
    id: "social-media",
    label: "Social Media Marketing",
    weight: 8000, // TODO: client to confirm
  },
  {
    id: "content-marketing",
    label: "Content Marketing",
    weight: 7000, // TODO: client to confirm
  },
  {
    id: "paid-ads",
    label: "Paid Advertising",
    weight: 6000, // TODO: client to confirm
    note: "Management fee only. Ad spend is billed separately.",
  },
  {
    id: "email-crm",
    label: "Email and CRM Marketing",
    weight: 9000, // TODO: client to confirm
  },
  {
    id: "digital-audit",
    label: "Digital Audit and Strategy",
    weight: 5000, // TODO: client to confirm
  },
  {
    id: "google-business",
    label: "Google Business and Local Presence",
    weight: 4000, // TODO: client to confirm
  },
  {
    id: "analytics",
    label: "Analytics and Tracking",
    weight: 3000, // TODO: client to confirm
  },
];

export const fastTrackEstimateDisclaimer =
  "This range is indicative. It excludes VAT and third-party costs, and it is confirmed in a written proposal after a discovery call.";

export const services: Service[] = [
  {
    id: "digital-onboarding",
    slug: "digital-onboarding",
    name: "Digital Onboarding",
    shortDescription:
      "Establish the essential digital infrastructure for a business entering or rebuilding its digital presence.",
    longDescription:
      "Discovery, profiles, listings, analytics, and launch checklist, everything needed to be discoverable and credible online before you scale marketing.",
    bestFor:
      "businesses entering digital channels or rebuilding from scratch.",
    priceRange: "฿29,900 – ฿80,000 · one-time project",
    icon: "rocket",
  },
  {
    id: "website-design",
    slug: "website-design",
    name: "Website Design & Development",
    shortDescription:
      "A professional website that communicates your brand and gets visitors to act.",
    longDescription:
      "A professional website that communicates your brand and helps visitors take action, sitemap, responsive design, landing pages, CTAs, basic SEO, analytics, and launch support included.",
    bestFor:
      "businesses without a site, or with one that's outdated.",
    priceRange:
      "Starter ฿5,000 – ฿30,000\nGrowth ฿30,000 – ฿90,000\nPro ฿90,000 – ฿150,000",
    icon: "globe",
  },
  {
    id: "seo",
    slug: "seo",
    name: "SEO",
    shortDescription:
      "Stronger organic search visibility and a foundation for long-term discovery.",
    longDescription:
      "Technical health, on-page optimization, local signals, and content direction aligned to how your customers search, without overpromising rankings.",
    bestFor: "businesses that want steady organic discovery over time.",
    priceRange: "฿15,000 – ฿60,000 per month",
    icon: "search",
  },
  {
    id: "social-media",
    slug: "social-media",
    name: "Social Media Marketing",
    shortDescription:
      "Consistent presence, brand storytelling, and audience engagement.",
    longDescription:
      "Channel strategy, content calendars, creative direction, and community engagement tuned to your brand voice and Bangkok market.",
    bestFor: "brands building trust and recall on social platforms.",
    priceRange: "฿12,000 – ฿40,000 per month · excludes ad spend",
    icon: "share2",
  },
  {
    id: "paid-ads",
    slug: "paid-ads",
    name: "Paid Advertising",
    shortDescription:
      "Paid media that drives awareness, traffic, and leads.",
    longDescription:
      "Campaign setup and management across search and social. Ad spend is billed separately and disclosed upfront.",
    bestFor: "businesses ready to pay for predictable reach and leads.",
    priceRange:
      "฿10,000 – ฿40,000 per month management fee · ad spend is billed separately",
    icon: "megaphone",
  },
  {
    id: "content-marketing",
    slug: "content-marketing",
    name: "Content Marketing",
    shortDescription:
      "Content connected to a real business objective, not just volume.",
    longDescription:
      "Articles, landing copy, and assets mapped to funnel stages and measurable goals, not content for its own sake.",
    bestFor: "teams that need content tied to conversion or SEO goals.",
    priceRange: "฿10,000 – ฿40,000 per month",
    icon: "fileText",
  },
  {
    id: "email-crm",
    slug: "email-crm",
    name: "Email & CRM Marketing",
    shortDescription:
      "Reach customers beyond social with email, SMS, and CRM systems.",
    longDescription:
      "List setup, automations, CRM integration, and campaigns that keep customers coming back after the first visit.",
    bestFor: "businesses with repeat customers or longer sales cycles.",
    priceRange:
      "฿10,000 – ฿40,000 per month for campaigns · one-time CRM setup ฿15,000 – ฿60,000",
    icon: "mail",
  },
  {
    id: "google-business",
    slug: "google-business",
    name: "Google Business & Local Presence",
    shortDescription: "Show up when local customers search for you.",
    longDescription:
      "Google Business Profile optimization, local listings, reviews strategy, and maps visibility for Bangkok customers.",
    bestFor: "location-based and service-area businesses.",
    priceRange:
      "One-time setup ฿5,000 – ฿20,000 · ongoing management ฿5,000 – ฿15,000 per month",
    icon: "mapPin",
  },
  {
    id: "analytics",
    slug: "analytics",
    name: "Analytics & Tracking",
    shortDescription: "Make your digital activity measurable.",
    longDescription:
      "GA4, pixels, conversion events, and dashboards so you know what's working before you scale spend.",
    bestFor: "any business investing in marketing without clear numbers today.",
    priceRange:
      "One-time setup ฿8,000 – ฿35,000 · ongoing reporting ฿5,000 – ฿20,000 per month",
    icon: "barChart",
  },
  {
    id: "digital-audit",
    slug: "digital-audit",
    name: "Digital Audit & Strategy",
    shortDescription:
      "A diagnostic assessment before committing to bigger work.",
    longDescription:
      "Full review of site, SEO, social, ads, and competitors, with a prioritized roadmap, not a generic deck.",
    bestFor: "owners who want clarity before signing a larger package.",
    priceRange: "฿10,000 – ฿45,000 · one-time",
    icon: "clipboardCheck",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, audience, and goals.",
  },
  {
    number: "02",
    title: "Diagnose",
    description: "Full digital presence and competitor audit.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description: "Website, SEO, social, and ads set up and shipped.",
  },
  {
    number: "04",
    title: "Grow & Optimize",
    description: "Ongoing marketing, monthly reporting, continuous improvement.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "j-lim",
    clientName: "J Lim",
    quote:
      "My YouTube views exploded after using their service. Very neatly done, professionally, and in a timely manner.",
    statPlaceholder: "[+XX%]",
    variant: "dark",
  },
  {
    id: "petal-story",
    clientName: "Petal Story",
    quote:
      "Since signing up for this service, my orders drastically increased from single to double digits per day. Excellent service!",
    statPlaceholder: "[+XX%]",
    variant: "light",
  },
  {
    id: "topwoods",
    clientName: placeholders.testimonialClientName,
    quote:
      "Partnering with AdCo skyrocketed our sales and transformed our brick-and-mortar presence.",
    statPlaceholder: "[+XX%]",
    variant: "dark",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "what-is-adco",
    question: "What is AdCo?",
    answer:
      "A Bangkok-based digital marketing and digital onboarding partner that helps businesses build, launch, and grow their digital presence.",
  },
  {
    id: "digital-onboarding",
    question: "What is digital onboarding?",
    answer:
      "The process of setting up the digital infrastructure a business needs to be discoverable, credible, and ready to acquire customers online, more than just a website.",
  },
  {
    id: "need-package",
    question: "Do I need a package?",
    answer:
      "No, you can start with a single service or a full package. AdCo recommends based on your situation, not the other way around.",
  },
  {
    id: "build-website",
    question: "Can AdCo build my website?",
    answer:
      "Yes, from simple business sites to custom, integration-heavy builds.",
  },
  {
    id: "seo-only",
    question: "Can I purchase SEO without social media?",
    answer: "Yes, every service can be purchased standalone.",
  },
  {
    id: "ad-budgets",
    question: "Does AdCo manage advertising budgets?",
    answer:
      "AdCo manages campaigns; ad spend is billed separately and disclosed upfront.",
  },
  {
    id: "guarantee-rankings",
    question: "Does AdCo guarantee Google rankings?",
    answer:
      "No, results depend on competition, content, technical health, and other factors outside any agency's full control.",
  },
  {
    id: "existing-website",
    question: "Can AdCo work with an existing website?",
    answer:
      "Yes, AdCo can audit, improve, or rebuild what you already have.",
  },
  {
    id: "custom-package",
    question: "Can AdCo customize a package?",
    answer:
      "Yes, packages are starting frameworks, not fixed products.",
  },
  {
    id: "where-operate",
    question: "Where does AdCo operate?",
    answer:
      "Thailand and its provinces. Further expansion is planned for the future.",
  },
];

export const homeCtaBand = {
  headline: "Let's build your digital launchpad.",
  button: { label: "Start with a Free Audit", href: bookingUrl },
} as const;

export const solutionsHero = {
  headline: "Build exactly what your business needs.",
  subhead:
    "Pick a single service, choose a complete package, or mix both, every solution is customized to your business.",
} as const;

const priceStart = `Starting at ${placeholders.packagePricing}`;

export const packages: Package[] = [
  {
    id: "digital-launch",
    slug: "digital-launch",
    name: "Digital Launch",
    tagline: "Establish the essential digital foundation.",
    teaserOneLiner: "Establish the essential digital foundation.",
    includes: [
      "Discovery session",
      "Digital presence audit",
      "Business profile setup",
      "Google Business Profile",
      "Social profile optimization",
      "Basic SEO",
      "Website / landing-page setup",
      "Analytics setup",
      "Conversion / contact setup",
      "Launch checklist",
      "Basic training",
    ],
    bestFor:
      "businesses that need to establish or rebuild their digital presence.",
    priceLabel: priceStart,
    priceMonthly: "฿29,900 one-time",
    priceAnnual: "฿29,900 one-time",
    isOneTime: true,
    priceSubline: "One-time project, same price on monthly or annual",
  },
  {
    id: "digital-growth",
    slug: "digital-growth",
    name: "Digital Growth",
    tagline: "A consistent digital marketing engine once the foundation is in place.",
    teaserOneLiner: "Consistent marketing once your foundation is in place.",
    isMostPopular: true,
    includes: [
      "Everything in Digital Launch where applicable",
      "Social media management",
      "Content planning",
      "SEO",
      "Google Business optimization",
      "Paid advertising management",
      "Analytics",
      "Monthly reporting",
      "Optimization recommendations",
    ],
    bestFor:
      "businesses with the basics in place that need consistent customer acquisition.",
    priceLabel: `${priceStart} / month`,
    priceMonthly: "฿36,000 / month",
    priceAnnual: "฿30,000 / month",
    priceSublineMonthly: "Billed monthly",
    priceSublineAnnual: "Billed annually at ฿360,000 (2 months free)",
  },
  {
    id: "digital-scale",
    slug: "digital-scale",
    name: "Digital Scale",
    tagline: "An integrated digital marketing partnership for ambitious growth.",
    teaserOneLiner: "Integrated partnership for ambitious growth.",
    includes: [
      "Everything in Digital Growth",
      "Digital strategy",
      "Advanced SEO",
      "Content marketing",
      "Social media",
      "Paid advertising",
      "Conversion optimization",
      "Analytics",
      "Retargeting",
      "Email / CRM campaigns",
      "Monthly strategy review",
      "Performance reporting",
      "Continuous optimization",
    ],
    bestFor:
      "established businesses wanting ongoing strategic support.",
    priceLabel: `${priceStart} / month`,
    priceMonthly: "฿75,000 / month",
    priceAnnual: "฿62,500 / month",
    priceSublineMonthly: "Billed monthly",
    priceSublineAnnual: "Billed annually at ฿750,000 (2 months free)",
  },
  {
    id: "custom",
    slug: "custom",
    name: "Custom",
    tagline: "Need a mix of both? We'll build the roadmap with you.",
    includes: [],
    bestFor: "unique combinations of services and packages.",
    priceLabel: "Let's talk",
    isCustom: true,
  },
];

export const solutionsClosingCta = {
  headline: "Not sure what you need? We'll build the roadmap with you.",
  button: { label: "Get in Touch", href: bookingUrl },
} as const;

export const contactHero = {
  headline: "Let's talk.",
  subhead:
    "Whether it's a new project or a quick question, we're here to help.",
} as const;

export const contactFormContent = {
  submitLabel: "Get in Touch",
  interestsNotSure: "not-sure",
  interestsNotSureLabel: "Not sure yet",
} as const;

export const legalStubs = {
  privacy: {
    title: "Privacy Policy",
    body: "This is a placeholder privacy policy. AdCo Group will publish a full policy before launch. For questions, contact us via the contact page.",
  },
  terms: {
    title: "Terms of Service",
    body: "This is a placeholder terms of service. AdCo Group will publish full terms before launch. For questions, contact us via the contact page.",
  },
} as const;

/** Link to service anchor on Solutions page */
export function serviceSolutionsHref(slug: string): string {
  return `/solutions#${slug}`;
}

/** Contact URL with pre-selected interest */
export function contactInterestHref(interestSlug: string): string {
  return `/contact?interest=${encodeURIComponent(interestSlug)}`;
}

export type InterestOption = {
  value: string;
  label: string;
  group: "service" | "package" | "other";
};

export function getContactInterestOptions(): InterestOption[] {
  const serviceOptions: InterestOption[] = services.map((s) => ({
    value: s.slug,
    label: s.name,
    group: "service",
  }));
  const packageOptions: InterestOption[] = packages
    .filter((p) => !p.isCustom)
    .map((p) => ({
      value: p.slug,
      label: `Package: ${p.name}`,
      group: "package",
    }));
  return [
    ...serviceOptions,
    ...packageOptions,
    {
      value: contactFormContent.interestsNotSure,
      label: contactFormContent.interestsNotSureLabel,
      group: "other",
    },
  ];
}

export function findServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function findServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function findTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}

export function getPackagePrice(
  pkg: Package,
  billing: "monthly" | "annual",
): string {
  if (pkg.isCustom) return pkg.priceLabel;
  if (pkg.isOneTime && pkg.priceMonthly) return pkg.priceMonthly;
  if (billing === "annual" && pkg.priceAnnual) return pkg.priceAnnual;
  return pkg.priceMonthly ?? pkg.priceLabel;
}

export function getPackagePriceSubline(
  pkg: Package,
  billing: "monthly" | "annual",
): string | undefined {
  if (pkg.isCustom) return undefined;
  if (pkg.isOneTime) return pkg.priceSubline;
  if (billing === "annual") return pkg.priceSublineAnnual;
  return pkg.priceSublineMonthly;
}
