import type { services } from '@/lib/content';

type ServiceSlug = (typeof services)[number]['slug'];
export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  treatment: 'logo' | 'photo' | 'illustration';
};

const serviceImages: Partial<Record<ServiceSlug, ServiceImage>> = {
  seo: {
    src: '/images/seo-DwwDkx5R.png',
    alt: 'SEO lettering in blue, yellow and red',
    width: 512,
    height: 512,
    treatment: 'logo',
  },
  'google-ads': {
    src: '/images/google-ads.png',
    alt: 'Google Ads logo',
    width: 768,
    height: 768,
    treatment: 'logo',
  },
  'crm-automation': {
    src: '/images/automation-page-optimized-JK8PhvdK.jpg',
    alt: 'A person using a phone for a connected, automated payment',
    width: 1400,
    height: 933,
    treatment: 'photo',
  },
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

const seoDetailImage: ServiceImage = {
  src: '/images/seo-page-optimized-Cr_0KyEd.jpg',
  alt: 'SEO planning diagram connecting keywords, search, optimisation, traffic, backlinks and ranking',
  width: 1400,
  height: 933,
  treatment: 'illustration',
};

export function getServiceImage(slug: ServiceSlug, detail = false) {
  return detail && slug === 'seo' ? seoDetailImage : serviceImages[slug];
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
