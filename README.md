# AdCo Group — Marketing Website

Production-ready Next.js 14 marketing site for **AdCo Group** (Bangkok). Three pages: Home, Solutions, Contact.

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion, lucide-react
- Copy centralized in [`lib/content.ts`](lib/content.ts)
- Contact form via [Resend](https://resend.com)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` from the template below:

```env
# Resend — https://resend.com/api-keys
RESEND_API_KEY=

# Verified sender in Resend (onboarding@resend.dev for testing only)
RESEND_FROM="AdCo Group <onboarding@resend.dev>"

# Inbox for contact submissions
CONTACT_TO_EMAIL=hello@adcogroup.com

# Production canonical URL (sitemap / Open Graph)
NEXT_PUBLIC_SITE_URL=https://adcogroup.com
```

Production requires a **verified domain** in Resend for `RESEND_FROM`.

## Deploy

Optimized for [Vercel](https://vercel.com). Set the same environment variables in the project settings.

```bash
npm run build
npm start
```

## Client open items before launch

- Real logo (SVG/PNG) and confirmed brand hex codes
- Business email, phone, and address (placeholders in `lib/content.ts`)
- Final package pricing (`// TODO: client to confirm final pricing`)
- Testimonial client name: TopWoods vs Techflix
- Thai-language version toggle (site is English-only today)
- Real photography / brand illustrations
- Service area beyond Bangkok
- Newsletter provider (footer stub → MailerLite or Resend Audiences)
- Privacy Policy and Terms of Service (stub pages linked from footer)

## Project structure

```
app/           Routes and API (contact, newsletter)
components/    UI sections and chrome
lib/content.ts Editable copy and data
public/images/ Brand assets
```
