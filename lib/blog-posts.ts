export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogImageBrief {
  role: "cover" | "body";
  alt: string;
  caption: string;
  brief: string;
}

export interface BlogCta {
  heading: string;
  text: string;
  buttonLabel: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  visualSlug: string;
  coverAlt: string;
  imageBrief: BlogImageBrief[];
  body: string;
  faq: BlogFaq[];
  cta: BlogCta;
  relatedSlugs: [string, string];
}

const author = "AdCo Group Team";

const booking =
  "https://calendar.app.google/8SNs3iWK2SYJMwk77";

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-digital-marketing-bangkok-guide",
    title: "AI Digital Marketing in Bangkok: A Practical Guide for Local Businesses",
    metaTitle: "AI Digital Marketing Bangkok: A Practical Guide",
    metaDescription:
      "What AI digital marketing really means for Bangkok businesses: where it helps, where people still matter, and how to start without wasting budget.",
    excerpt:
      "What AI digital marketing actually means for Bangkok businesses, where it helps, where it doesn't, and how to start without wasting budget.",
    date: "2026-06-23",
    category: "AI & Strategy",
    readTime: "7 min",
    author,
    visualSlug: "digital-audit",
    coverAlt: "Storefronts on a busy Bangkok street at dusk",
    imageBrief: [
      {
        role: "cover",
        alt: "Storefronts on a busy Bangkok street at dusk",
        caption: "",
        brief:
          "Bangkok street at dusk with lit storefront signs and pedestrians, modern and energetic mood.",
      },
      {
        role: "body",
        alt: "Business owner reviewing marketing performance on a laptop in a Bangkok café",
        caption: "AI helps turn performance data into clear next steps.",
        brief:
          "Business owner reviewing a marketing dashboard on a laptop in a Bangkok café.",
      },
      {
        role: "body",
        alt: "Five-step path from setting a goal to measuring results",
        caption: "Start with one goal, then measure whether the work moved it.",
        brief: "Simple diagram-style image of a five-step path from goal to measurement.",
      },
    ],
    relatedSlugs: [
      "get-found-google-maps-ai-search-bangkok",
      "where-to-start-digital-marketing-bangkok",
    ],
    cta: {
      heading: "Want a practical starting point?",
      text: "Talk with an AdCo Associate about where AI can help your marketing, and where a person should stay in charge.",
      buttonLabel: "Book a Discovery Call",
    },
    faq: [
      {
        question: "Does AI digital marketing replace a marketing team?",
        answer:
          "No. AI speeds up research, drafts, and reporting. People still decide the strategy, check facts, and approve anything customers will see.",
      },
      {
        question: "Do I need every AI tool to market a Bangkok business?",
        answer:
          "No. Most businesses get more from a clear website, a complete Google Business Profile, and one or two channels than from a stack of unused tools.",
      },
      {
        question: "Can AI guarantee that my business shows up in AI search answers?",
        answer:
          "No. Clear, accurate, consistent information makes you easier to understand. It does not guarantee a place in any AI-generated answer.",
      },
    ],
    body: `AI digital marketing in Bangkok is moving quickly from buzzword to everyday tool. Restaurants, clinics, retailers and service businesses are using AI-assisted tools to plan content, analyze advertising and respond to customers faster. But not every claim you hear is real, and not every business needs every tool. This guide explains what AI digital marketing actually means, where it helps a Bangkok business, where people still matter, and how to start without wasting budget.

## What is AI digital marketing?

AI digital marketing means using AI-assisted tools to make parts of your marketing faster, more accurate or more consistent. It does not mean handing your brand over to a machine. In practice, it usually covers:

- **Research:** understanding search demand, competitors and the questions customers ask.
- **Content:** drafting, planning and repurposing posts, articles and ad copy.
- **Advertising:** testing creative and adjusting audiences and budgets based on performance data.
- **Reporting:** turning analytics into clear findings and recommended actions.
- **Customer response:** faster replies and better follow-up.

![Business owner reviewing marketing performance on a laptop in a Bangkok café](visual:analytics "AI helps turn performance data into clear next steps.")

## Where AI genuinely helps Bangkok businesses

Bangkok is a fast, crowded, mobile-first market. Customers compare options on Google, Google Maps, social platforms and messaging apps such as LINE before they ever call or visit. AI helps most when it removes slow, repetitive work so your team can focus on decisions:

- **Faster planning.** Content calendars, keyword research and campaign outlines take hours instead of days.
- **Smarter use of ad budget.** Performance data can be analyzed quickly to see which audiences and messages are working.
- **Clearer reporting.** Instead of a spreadsheet of numbers, you get a plain-language summary of what happened and what to do next.
- **More consistent publishing.** Regular activity is easier to maintain when the first draft is not a blank page.

## Where AI still needs a human

AI is a strong assistant and a poor decision-maker. Real people are still essential for:

- **Local context.** Thai and English audiences, cultural moments, neighborhoods and seasonal demand all shape what works in Bangkok.
- **Brand voice.** Unedited AI copy tends to sound generic. Your customers should hear your business, not a template.
- **Strategy.** Deciding what to do first, and what to skip, depends on your goals, budget and market.
- **Accuracy and trust.** Prices, claims and facts must be checked by someone accountable.

A good rule: AI drafts and analyzes, people decide and approve.

## AI is also changing how customers find you

Search is no longer only a list of blue links. Google now shows AI-generated summaries for some searches, and many people ask AI assistants for recommendations. Businesses with clear, accurate, consistent information across their website, Google Business Profile and online listings are easier for these systems to understand. Nobody can guarantee a place in AI answers, but the foundations are within your control. We cover them in our guide to [getting found on Google Maps and AI search in Bangkok](/blog/get-found-google-maps-ai-search-bangkok).

## A practical way to start

1. **Set one clear goal.** More calls, bookings, walk-ins or online orders. Pick one to begin with.
2. **Fix the foundation first.** A clear website or landing page, a complete Google Business Profile, working analytics and easy ways to contact you.
3. **Choose one or two channels.** Where do your customers already look for businesses like yours?
4. **Use AI to speed up the work, with a human review.** Faster drafts, faster analysis, but a person checks and approves anything customers will see.
5. **Measure that one goal.** Look at calls, bookings, or orders, not a pile of numbers that do not connect to the business.

![Five-step path from setting a goal to measuring results](visual:digital-onboarding "Start with one goal, then measure whether the work moved it.")

If the foundation is missing, AI will only help you produce more of the wrong thing, faster. A short discovery call is often enough to see whether the next step is a website, local listings, or a single campaign. You can [book a discovery call](${booking}) when you are ready to talk it through.`,
  },
  {
    slug: "get-found-google-maps-ai-search-bangkok",
    title: "Get Found on Google Maps and AI Search in Bangkok",
    metaTitle: "Get Found on Google Maps and AI Search in Bangkok",
    metaDescription:
      "How Bangkok customers find local businesses on Google Maps and in AI answers, and the listings, pages, and facts you can put in place.",
    excerpt:
      "How people in Bangkok find nearby businesses on Google Maps and in AI answers, and what you can make clear before they ever call.",
    date: "2026-06-09",
    category: "Local Search",
    readTime: "8 min",
    author,
    visualSlug: "google-business",
    coverAlt: "A phone showing a map of nearby Bangkok businesses",
    imageBrief: [
      {
        role: "cover",
        alt: "A phone showing a map of nearby Bangkok businesses",
        caption: "",
        brief:
          "Close photo of a phone in a Bangkok street setting, with a map of nearby shops on the screen. No readable private data.",
      },
      {
        role: "body",
        alt: "A storefront with a visible name that matches its online listing",
        caption: "The name on the door and the name on the listing should be the same.",
        brief:
          "Bangkok shopfront photographed straight on, with the business name easy to read and no other brands featured.",
      },
    ],
    relatedSlugs: ["local-seo-bangkok-guide", "ai-digital-marketing-bangkok-guide"],
    cta: {
      heading: "Not sure what your listing says about you?",
      text: "We can look at your Google Business Profile, website, and contact paths together and tell you what to fix first.",
      buttonLabel: "Book a Discovery Call",
    },
    faq: [
      {
        question: "Is a Google Business Profile the same as a website?",
        answer:
          "No. The profile is the listing people see on Google Maps, with your name, hours, photos, and reviews. A website is the page you control, where you explain the offer in more detail. Most local businesses need both.",
      },
      {
        question: "Can I pay to appear in AI-generated answers?",
        answer:
          "There is no reliable way to buy a place in an AI summary. Accurate, consistent public information makes a business easier to understand. It is not a guarantee.",
      },
      {
        question: "What if my business serves customers at their location, not in a shop?",
        answer:
          "You can still have a Google Business Profile as a service-area business, with the areas you cover and a clear way to request a visit. The same rule applies: the facts must match your website.",
      },
    ],
    body: `When someone in Bangkok needs a clinic, a café, a tutor, or a repair, they often start with a map or a question, not with your brand name. Google Maps shows nearby options. Some Google searches now include an AI-written summary. People also ask chat tools which business to try. You cannot control those systems, but you can control how clearly your business is described.

## What “being found” actually means

Being found is not a mystery ranking. It means a customer can answer four questions without calling you first:

- Who are you, in the same words you use on the door and the website?
- Where are you, or which areas do you serve?
- Are you open, and how do they contact you?
- Why should they believe you do this work?

If those answers disagree across Google, your website, and your social profiles, both people and automated systems have less to go on.

![A storefront with a visible name that matches its online listing](visual:google-business "The name on the door and the name on the listing should be the same.")

## Google Maps, in plain language

Google Business Profile is the free listing behind the pin on Google Maps. It holds your name, category, address or service area, hours, phone, website, photos, and reviews. Customers use it to decide whether to visit or message you.

A useful profile is complete and boringly consistent:

- The business name matches the website, with no extra keywords stuffed into the name.
- The category describes what you actually sell.
- Hours are current, including holidays you already know about.
- The phone number and map pin are correct.
- Photos show the real place, the real work, or the real product.
- You reply to reviews in your own voice.

Maps also looks at whether people can reach you. A listing that sends them to a broken form, or a website that does not mention the same neighborhood, is harder to trust.

## How AI search uses the same facts

AI summaries and assistants do not invent a special internet. They draw on public information: your site, your listing, directories, and pages that describe your services in ordinary language. If your site says you are in Thonglor and your listing says you are in a different district, a summary has to guess.

Helpful pages answer specific questions a customer would type. “Do you offer evening appointments?” “Do you deliver in Bangkok?” “Is the first visit a consultation?” Short, accurate answers are more useful than a slogan.

Nobody can promise that an AI answer will name your business. The work is still worth doing because the same clarity helps a person who finds you on Maps. Our [practical guide to AI digital marketing in Bangkok](/blog/ai-digital-marketing-bangkok-guide) explains where tools can help and where a person still has to decide.

## A simple order of work

1. Write one description of the business: name, offer, location, and how to get in touch.
2. Make the Google Business Profile match that description.
3. Put the same facts on the website, including a page that says where you are and what you do.
4. Ask happy customers for a review, and respond when they leave one.
5. Check the listing once a month for wrong hours, old photos, or a phone number that has changed.

If you want a second person to review the listing with you, [book a discovery call](${booking}). For the wider search work beyond Maps, see [local SEO for Bangkok businesses](/blog/local-seo-bangkok-guide).`,
  },
  {
    slug: "bangkok-business-website-guide",
    title: "What a Bangkok Business Website Actually Needs",
    metaTitle: "What a Bangkok Business Website Actually Needs",
    metaDescription:
      "A plain-language list of what a Bangkok business website should do: explain the offer, make contact easy, and support Google and Maps.",
    excerpt:
      "A website is not a brochure you finish and forget. Here is what a Bangkok business site needs so people can understand you and get in touch.",
    date: "2026-05-26",
    category: "Websites",
    readTime: "7 min",
    author,
    visualSlug: "website-design",
    coverAlt: "A laptop showing a simple business website on a café table",
    imageBrief: [
      {
        role: "cover",
        alt: "A laptop showing a simple business website on a café table",
        caption: "",
        brief:
          "Laptop on a Bangkok café table showing a clean business homepage. Screen content should be generic, with no real client brand.",
      },
      {
        role: "body",
        alt: "A phone and a laptop showing the same business page",
        caption: "Most people will open your site on a phone first.",
        brief:
          "Phone in the foreground and laptop behind it, both showing the same simple page layout. No logos of other companies.",
      },
    ],
    relatedSlugs: [
      "where-to-start-digital-marketing-bangkok",
      "local-seo-bangkok-guide",
    ],
    cta: {
      heading: "Need a site that makes the next step obvious?",
      text: "Tell us what the business sells and how customers should reach you. We will outline what the site has to include before any design work starts.",
      buttonLabel: "Book a Discovery Call",
    },
    faq: [
      {
        question: "Do I need a website if I already use Instagram or LINE?",
        answer:
          "Social profiles are useful, but you do not control the layout or the rules. A website is the place you own, where the offer, price range, location, and contact options can stay put.",
      },
      {
        question: "Should the site be in Thai, English, or both?",
        answer:
          "Use the language your customers actually read. If you serve both Thai-speaking and English-speaking customers, plan both from the start so one version is not an afterthought.",
      },
      {
        question: "Is a one-page site enough?",
        answer:
          "Sometimes. A single clear page is enough when you have one offer and one next step. More pages help when people need to compare services, locations, or questions before they contact you.",
      },
    ],
    body: `A website is the page you control. Social apps can change their layout, and a Google listing has limited space. The site is where a Bangkok customer checks that you are real, that you do the thing they need, and that contacting you will not be a chore.

## What the site is for

Before colors and photos, decide the job of the site. For most local businesses it is one of these:

- Help someone call, message, or book.
- Explain a service well enough that the right people enquire and the wrong people do not.
- Support the facts on your Google listing, so Maps and your site tell the same story.

A beautiful page that hides the phone number has not done the job. Our note on [where to start with digital marketing](/blog/where-to-start-digital-marketing-bangkok) is useful if you are still choosing between a site, listings, and ads.

## What to put on the page

A first version does not need dozens of pages. It does need these pieces, written in normal language:

- **What you do,** in the words a customer would use.
- **Who it is for,** and who it is not for, if that saves everyone time.
- **Where you are,** or which parts of Bangkok you cover.
- **How to start,** with a button, a phone number, a LINE link, or a short form. One primary action is better than five equal ones.
- **Proof you can show honestly,** such as photos of the work, a clear process, or reviews you actually received. Do not invent quotes.
- **Practical details,** such as hours, languages, and what happens after someone enquires.

![A phone and a laptop showing the same business page](visual:website-design "Most people will open your site on a phone first.")

## Make it work on a phone

Many people will open the link from Maps, LINE, or Instagram while they are already out. The text should be readable without pinching. Buttons should be easy to tap. The address, if you have a shop, should open in a map. If the site is only comfortable on a large screen, you will lose the visit you already paid to attract.

## Connect it to search

The site and your Google Business Profile should share the same name, phone number, and description of the service. Pages should have a clear title and a sentence that says what the page is about. That is the start of [local SEO](/blog/local-seo-bangkok-guide), not a separate project you bolt on later.

If you are comparing a simple launch site with a larger build, the Website Design ranges on our [solutions](/solutions) page are a starting point. Custom work, shops, and booking systems are quoted after a conversation, not from a guess. [Book a discovery call](${booking}) when you want that conversation.`,
  },
  {
    slug: "local-seo-bangkok-guide",
    title: "Local SEO for Bangkok Businesses",
    metaTitle: "Local SEO for Bangkok Businesses",
    metaDescription:
      "Local SEO explained without jargon: how Bangkok customers search, what to fix on your site and Google listing, and what not to expect.",
    excerpt:
      "Local SEO is the work of showing up when someone nearby searches for what you do. Here is what that means in practice in Bangkok.",
    date: "2026-05-12",
    category: "SEO",
    readTime: "8 min",
    author,
    visualSlug: "seo",
    coverAlt: "A notebook with a simple search checklist beside a coffee cup",
    imageBrief: [
      {
        role: "cover",
        alt: "A notebook with a simple search checklist beside a coffee cup",
        caption: "",
        brief:
          "Overhead photo of a notebook checklist and a coffee cup on a wooden table. No brand names and no fake charts.",
      },
      {
        role: "body",
        alt: "A person comparing two business listings on a phone",
        caption: "People compare names, distance, hours, and reviews before they visit.",
        brief:
          "Hands holding a phone in a Bangkok street, screen angled so any listings are not readable as a real competitor.",
      },
    ],
    relatedSlugs: [
      "get-found-google-maps-ai-search-bangkok",
      "bangkok-business-website-guide",
    ],
    cta: {
      heading: "Want a second look at your search basics?",
      text: "Bring your website and Google listing. We will tell you which gaps matter for your kind of business, and which projects can wait.",
      buttonLabel: "Book a Discovery Call",
    },
    faq: [
      {
        question: "How is local SEO different from general SEO?",
        answer:
          "General SEO is about being understood for a topic. Local SEO adds a place: the neighborhood, the district, or the service area. The Google listing, the address, and pages that mention where you work become part of the job.",
      },
      {
        question: "How long does local SEO take?",
        answer:
          "Fixing wrong hours or a missing page can help a person immediately. Earning a steadier place in search is slower and depends on competition in your category. Anyone who promises a specific position by a specific date is guessing.",
      },
      {
        question: "Do I have to blog to do local SEO?",
        answer:
          "No. A clear service page, a correct listing, and useful answers to real customer questions matter more than publishing for its own sake.",
      },
    ],
    body: `Local SEO means helping your business appear when someone searches for a service in a place. In Bangkok that place might be a district, a transit stop, or “near me” while the person is already on the street. It is not a trick, and it is not a promise of the number-one spot.

## What the customer is doing

They type a service and a place, or they open a map. Then they compare a short list: name, distance, photos, hours, and what other customers said. Your job is to be understandable in that moment. [Getting found on Google Maps and in AI search](/blog/get-found-google-maps-ai-search-bangkok) covers the listing itself. Local SEO is that listing plus the website pages that agree with it.

![A person comparing two business listings on a phone](visual:seo "People compare names, distance, hours, and reviews before they visit.")

## The work, without the jargon

| Piece | What it means | Why it matters |
| --- | --- | --- |
| Google Business Profile | Your pin, hours, category, photos, and reviews | This is what Maps shows first |
| Service pages | A page for each real offer, in customer language | Searchers and your sales conversations need the same words |
| Location details | Address, district, or the areas you travel to | “Bangkok” alone is vague in a city this large |
| Contact path | A phone, form, or message link that works | A visit that cannot become an enquiry is wasted |
| Consistency | The same name and phone everywhere | Conflicting facts make the business harder to trust |

You do not need a page for every soi in the city. A page that pretends you have an office in a district you never serve can confuse customers and conflicts with your real listing.

## What to skip at the start

- Buying links or “guaranteed rankings.”
- Stuffing a district name into every sentence.
- Publishing articles that do not answer a question your customers ask.
- Changing the business name on Google to include keywords. The name should be the real name.

A [website that states the offer clearly](/blog/bangkok-business-website-guide) is the other half of this work. If the site is unfinished, fix that before you spend months writing extra posts.

When you want a person to review the basics with you, [book a discovery call](${booking}).`,
  },
  {
    slug: "where-to-start-digital-marketing-bangkok",
    title: "Where a Bangkok Business Should Start with Digital Marketing",
    metaTitle: "Where to Start with Digital Marketing in Bangkok",
    metaDescription:
      "A simple order for Bangkok businesses: pick one goal, fix how people find and contact you, then choose a channel. No stack of tools required.",
    excerpt:
      "If everything in digital marketing sounds urgent, start with one goal and the path a customer already uses to reach a business like yours.",
    date: "2026-04-28",
    category: "Getting Started",
    readTime: "6 min",
    author,
    visualSlug: "digital-onboarding",
    coverAlt: "A small Bangkok shop preparing to open for the day",
    imageBrief: [
      {
        role: "cover",
        alt: "A small Bangkok shop preparing to open for the day",
        caption: "",
        brief:
          "Morning photo of a small independent shopfront in Bangkok, owner or staff seen only from a distance, no readable third-party brands.",
      },
      {
        role: "body",
        alt: "Three notes labeled goal, foundation, and channel",
        caption: "Goal, then foundation, then one channel.",
        brief:
          "Three plain index cards on a desk, labeled in simple type: goal, foundation, channel. No charts and no logos.",
      },
    ],
    relatedSlugs: [
      "ai-digital-marketing-bangkok-guide",
      "bangkok-business-website-guide",
    ],
    cta: {
      heading: "Not sure which piece you are missing?",
      text: "A discovery call is a conversation about the business, the customer, and the one next step. It is not a commitment to a package.",
      buttonLabel: "Book a Discovery Call",
    },
    faq: [
      {
        question: "Should I start with ads or with a website?",
        answer:
          "If people cannot understand the offer or contact you, ads send them to a dead end. Put a clear page and a working contact path in place first, unless you already have both.",
      },
      {
        question: "What is a digital marketing channel?",
        answer:
          "A channel is a place customers already look, such as Google, Maps, Instagram, or LINE. You do not need to be active in all of them on day one.",
      },
      {
        question: "Can I do this without hiring a full team?",
        answer:
          "Yes. Many businesses start with one goal, one page, and one channel, and add help only for the parts that stall.",
      },
    ],
    body: `Digital marketing is the set of ways people discover a business online and decide to make contact. The list is long: a website, Google, Maps, social posts, email, and paid ads. Doing all of it at once is how small teams get stuck. A better start is a sequence.

## Start with the customer, not the tool

Write down one result that would matter this month. More table bookings. More calls for a clinic. More visits to a shop in a specific district. If the goal is “be more online,” it is not specific enough to choose the work.

Then ask where those customers already look. A restaurant may live or die on Maps and Instagram. A business that sells to offices may need a clear website and a way to follow up by email. The channel follows the customer. It is not a default stack.

![Three notes labeled goal, foundation, and channel](visual:digital-onboarding "Goal, then foundation, then one channel.")

## Put the foundation under the promotion

Foundation means a stranger can tell what you do and can reach you:

- A page or profile that states the offer.
- A correct location or service area.
- A phone number, form, or LINE path that someone actually answers.
- A way to know what happened, even if that is only a note of how many enquiries came in.

Ads, extra posts, and AI drafts sit on top of that. Our guide to [AI digital marketing](/blog/ai-digital-marketing-bangkok-guide) is about speeding up the work after the goal is clear, not instead of it. If you do not yet have a page that explains the business, start with [what a Bangkok business website needs](/blog/bangkok-business-website-guide).

## Pick one channel for the next month

| If customers… | Look first at | Leave for later |
| --- | --- | --- |
| Search when they are nearby | Google Business Profile and a matching page | A large social calendar |
| Already follow you on social | A steady posting rhythm and a link to one clear page | Several ad platforms at once |
| Need explaining before they buy | A website that answers their questions | Boosting posts that skip the explanation |

Paid ads can be useful once the page they land on is ready. They are not a substitute for that page. Social posts can build recognition. They are a weak place to hide your only explanation of the service.

When you want help choosing the first step, [book a discovery call](${booking}). You can also compare single services and packages on the [solutions](/solutions) page.`,
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function formatBlogDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  const monthName = months[Number(month) - 1];
  if (!year || !monthName || !day) return iso;
  return `${Number(day)} ${monthName} ${year}`;
}

export function findBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function relatedBlogPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs.flatMap((slug) => {
    const match = findBlogPostBySlug(slug);
    return match ? [match] : [];
  });
}
