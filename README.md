# Timemac Digital

A complete React website for a healthcare-first digital marketing studio serving Udupi, Manipal and Mangalore.

## Run locally

```sh
npm install
npm run dev
```

## Production checks

```sh
npx tsc --noEmit
npm run lint
npm run build
```

The project uses React 19, TypeScript, Vinext/Vite, shadcn components and Lucide icons. Fonts and imagery are served locally. The production output is a Cloudflare-compatible worker in `dist/server` with static assets in `dist/client`.

## Content and pages

Content lives in `lib/content.ts`; reusable UI lives in `components/site`. The site includes home, services and six service detail pages, healthcare, industries and six industry detail pages, three local landing pages, about, approach, insights and three articles, contact, privacy, terms and a custom 404.

## Contact details

Business email and phone are intentionally unset, as requested. The contact form builds a downloadable text brief in the visitor’s browser. It does **not** submit an enquiry, store personal data or make a booking. Add the real business contact details and an approved delivery integration before enabling enquiry submission. Update the privacy page when delivery or analytics are added.

## Brand assets

The healthcare photograph and social preview are original generated assets. They do not depict a named client or member of staff. The brand uses an editorial identity: Archivo sans-serif, Bodoni Moda italic, warm paper, ink and vermilion. The favicon uses the typographic “t.” mark. Font licenses are included in `public/fonts`. There are no invented client logos, testimonials or outcome statistics.

Service imagery is supplied by the site owner and mapped in `lib/service-media.ts`. Photography fills its frame; logos and illustrations retain their full composition. Hosting sits within Web Design & Development. The upload `Seo-CrwgpcDN.avif` depicts the Chrome logo and is not used to represent SEO or Google Ads. The Google Ads mark comes from [Google's product branding asset](https://www.gstatic.com/images/branding/productlogos/ads/v5/192px.svg), linked from [Google Ads](https://business.google.com/us/google-ads/), and is stored locally as a PNG.
