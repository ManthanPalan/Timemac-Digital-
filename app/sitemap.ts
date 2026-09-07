import type { MetadataRoute } from 'next';
import { services, industries, locations, articles } from '@/lib/content';
import { siteOrigin } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/healthcare',
    '/industries',
    '/locations',
    '/about',
    '/approach',
    '/insights',
    '/contact',
    '/privacy',
    '/terms',
    ...services.map((x) => '/services/' + x.slug),
    ...industries.map((x) => '/industries/' + x.slug),
    ...locations.map((x) => '/locations/' + x.slug),
    ...articles.map((x) => '/insights/' + x.slug),
  ];
  return routes.map((path) => ({
    url: siteOrigin + path,
    changeFrequency: 'monthly',
    priority:
      path === ''
        ? 1
        : path.includes('/services/') || path === '/healthcare'
          ? 0.9
          : 0.7,
  }));
}
