# Timemac Digital

A complete React website for a healthcare-first digital marketing studio serving Udupi, Manipal and Mangalore.

## Run locally

Use Node.js 22.

```sh
npm install
npm run dev
```

## Production checks

```sh
npm run build
npm run lint
npx tsc --noEmit
```

The project uses Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn components and Lucide icons. Fonts and imagery are served locally. Run `npm start` after building to preview the production site.

## Deploy to Vercel

1. Push this project to your Git repository and import it into Vercel.
2. Select the **Next.js** framework preset. The root directory must contain this `package.json` (use `Timemac-Digital-` only if you import its parent folder).
3. Use Node.js **22.x**. The checked-in `vercel.json` selects the **Next.js** framework, **`npm run build`** command, and **`.next`** output directory, overriding any previous `dist` setting in the dashboard.
4. Deploy. Vercel supplies the production domain used by the sitemap and social previews automatically. If you need a specific canonical domain, set **`SITE_URL`** to its full HTTPS URL before deploying; see `.env.example`.

Keep Vercel's **Automatically expose System Environment Variables** setting enabled when relying on the automatic domain. See [Next.js deployment on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs) and [Vercel system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables).

If a deployment reports `No Output Directory named "dist" found`, deploy a new commit that includes `vercel.json`. Redeploying an older commit will reuse its configuration. Vercel documents these overrides under [framework](https://vercel.com/docs/project-configuration/vercel-json#framework) and [outputDirectory](https://vercel.com/docs/project-configuration/vercel-json#outputdirectory).

## Content and pages

Content lives in `lib/content.ts`; reusable UI lives in `components/site`. The site includes home, services and six service detail pages, healthcare, industries and six industry detail pages, three local landing pages, about, approach, insights and three articles, contact, privacy, terms and a custom 404.

## Contact details

Public business identity and support details are configured in `lib/business.ts`. The legal business name, full postal address, support email and phone are awaiting the owner's verified details; no contact information has been invented. These values populate the contact page and policy contact blocks.

The contact page embeds the owner-provided Contact Form (`PhEe9M2XrqJ3BzNnPe7S`) from `links.timemacoriginals.com`, with its companion `form_embed.js` script and cookie-consent attributes. Fields, submissions and confirmation behaviour are managed by the hosted form. The iframe reserves at least 690px of height while the embed script manages sizing.

## Payment policy pages

The footer and sitemap include `/terms`, `/privacy`, `/refunds`, `/shipping` and `/pricing`. They cover project scope and quote-based pricing, international payment currencies and bank charges, conditional use of Razorpay, data handling, digital delivery and refunds. No Razorpay checkout, API integration, recurring billing or payment collection has been enabled by these changes.

These are drafts for business and legal review. The draft notice remains visible until all fields in `lib/business.ts` are filled. Confirm the actual refund terms before publishing: the proposed policy refunds unstarted/unused work after completed work and previously approved non-recoverable third-party costs, reviews a complete request within 5 business days, and initiates an approved refund within 5 business days. Provider/bank credit time is a separate estimate. Confirm the privacy statements against actual operations and any external tools used.

Before submitting the public production URL to Razorpay, publish the verified merchant identity and support contacts, accept or revise the proposed commercial terms, and check that all policy pages are accessible without sign-in. The pricing page describes custom proposals; it does not invent fixed service rates. If Razorpay requests published prices, supply approved rates for real offerings. International-payment activation, KYC and any requested business/export documentation must be completed separately in Razorpay; policy pages do not guarantee approval.

Sources reviewed on 9 September 2026: [Razorpay website requirements](https://razorpay.com/docs/payments/dashboard/account-settings/business-website-details/), [international payments for Indian businesses](https://razorpay.com/docs/payments/international-payments/?preferred-country=IN), [normal refunds](https://razorpay.com/docs/payments/refunds/normal/), [Razorpay Privacy Policy](https://razorpay.com/privacy-policy/) and [Vercel Privacy Notice](https://vercel.com/legal/privacy-notice).

## Brand assets

The healthcare photograph and social preview are original generated assets. They do not depict a named client or member of staff. The brand uses an editorial identity: Archivo sans-serif, Bodoni Moda italic, warm paper, ink and vermilion. The favicon uses the typographic “t.” mark. Font licenses are included in `public/fonts`. There are no invented client logos, testimonials or outcome statistics.

Service imagery is supplied by the site owner and mapped in `lib/service-media.ts`. Photography fills its frame; logos and illustrations retain their full composition. Hosting sits within Web Design & Development. The upload `Seo-CrwgpcDN.avif` depicts the Chrome logo and is not used to represent SEO or Google Ads. The Google Ads mark comes from [Google's product branding asset](https://www.gstatic.com/images/branding/productlogos/ads/v5/192px.svg), linked from [Google Ads](https://business.google.com/us/google-ads/), and is stored locally as a PNG.
