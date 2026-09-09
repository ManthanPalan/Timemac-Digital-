import type { services } from '@/lib/content';

type ServiceSlug = (typeof services)[number]['slug'];
export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  treatment: 'logo' | 'photo' | 'illustration';
};

// Each photographic asset has one visual placement across the site.
// Shared recommendations use icons so they never repeat page artwork.
const homeImages: Record<ServiceSlug, ServiceImage> = {
  seo: marketingImage(
    'search-marketing',
    'Search research workspace with a laptop, keyword cards and a magnifying glass',
  ),
  'google-ads': marketingImage(
    'paid-campaigns',
    'An orange target and campaign mockups representing focused advertising',
  ),
  'crm-automation': marketingImage(
    'customer-journey',
    'Customer contact cards connected to an envelope and appointment calendar',
  ),
  'web-design': marketingImage(
    'website-design',
    'Coordinated business website designs on desktop and mobile screens',
  ),
  'social-media': marketingImage(
    'social-content',
    'A smartphone filming a product alongside a social content calendar',
  ),
  'growth-strategy': marketingImage(
    'growth-strategy',
    'A marketing planning notebook, research cards and ascending orange bars',
  ),
};

function marketingImage(name: string, alt: string): ServiceImage {
  return {
    src: '/images/marketing/' + name + '.webp',
    alt,
    width: 1200,
    height: 800,
    treatment: 'photo',
  };
}

const detailImages: Partial<Record<ServiceSlug, ServiceImage>> = {
  seo: {
    src: '/images/seo-page-optimized-Cr_0KyEd.jpg',
    alt: 'SEO planning diagram connecting keywords, search, optimisation, traffic, backlinks and ranking',
    width: 1400,
    height: 933,
    treatment: 'illustration',
  },
  'google-ads': {
    src: '/images/google-ads.png',
    alt: 'Google Ads logo',
    width: 768,
    height: 768,
    treatment: 'logo',
  },
  'crm-automation': marketingImage(
    'crm-workflow',
    'A customer relationship dashboard with contact stages and a follow-up checklist',
  ),
  'web-design': {
    src: '/images/laptop-coding-concept-web-developer-programming-laptop-screen-code-illustration_100456-1752-aUBiO-vq.avif',
    alt: 'Laptop with code on its screen, illustrating web development',
    width: 1480,
    height: 1480,
    treatment: 'illustration',
  },
  'social-media': {
    src: '/images/Instagram%20logo-wHfr8mO9.avif',
    alt: 'Instagram logo',
    width: 740,
    height: 740,
    treatment: 'logo',
  },
};

export function getServiceImage(
  slug: ServiceSlug,
  placement: 'home' | 'detail',
) {
  return placement === 'home' ? homeImages[slug] : detailImages[slug];
}

export const hostingImage: ServiceImage = {
  src: '/images/hosting-DhNapUHl.jpg',
  alt: 'Cloud hosting illustration',
  width: 738,
  height: 740,
  treatment: 'illustration',
};

export const mapsImage: ServiceImage = {
  src: '/images/maps-B-9-Q-xw.png',
  alt: 'Google Maps logo',
  width: 256,
  height: 256,
  treatment: 'logo',
};
