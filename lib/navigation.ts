import { articles, industries, locations, services } from '@/lib/content';
import { policyLinks } from '@/lib/policies';

export type NavigationLink = {
  href: string;
  label: string;
  description?: string;
};

export type NavigationGroup = {
  id: string;
  label: string;
  overview: NavigationLink;
  description: string;
  links: NavigationLink[];
  related?: NavigationLink[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    id: 'services',
    label: 'Services',
    overview: { href: '/services', label: 'Explore all services' },
    description: 'From being found to building lasting relationships.',
    links: services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.title,
      description: service.summary,
    })),
    related: [{ href: '/pricing', label: 'Pricing & project scope' }],
  },
  {
    id: 'industries',
    label: 'Industries',
    overview: { href: '/industries', label: 'Explore all industries' },
    description: 'Healthcare at heart. Ambition everywhere.',
    links: industries.map((industry) => ({
      href: `/industries/${industry.slug}`,
      label: industry.name,
    })),
    related: [{ href: '/healthcare', label: 'Our healthcare specialism' }],
  },
  {
    id: 'locations',
    label: 'Locations',
    overview: { href: '/locations', label: 'Meet your local growth partner' },
    description: 'Three places. One coast. A shared sense of possibility.',
    links: locations.map((location) => ({
      href: `/locations/${location.slug}`,
      label: location.name,
      description: location.note,
    })),
  },
  {
    id: 'studio',
    label: 'Studio',
    overview: { href: '/about', label: 'About Timemac' },
    description: 'Independent thinking, local understanding.',
    links: [
      {
        href: '/approach',
        label: 'Our approach',
        description: 'How we turn your goals into a practical plan.',
      },
      {
        href: '/contact',
        label: 'Start a conversation',
        description: 'Tell us about your business and what comes next.',
      },
    ],
    related: [...policyLinks],
  },
  {
    id: 'insights',
    label: 'Insights',
    overview: { href: '/insights', label: 'All insights & ideas' },
    description: 'Fresh thinking. Useful takeaways.',
    links: articles.map((article) => ({
      href: `/insights/${article.slug}`,
      label: article.title,
      description: `${article.category} · ${article.read}`,
    })),
  },
];

export function activeNavigationGroup(pathname: string) {
  return navigationGroups.find((group) =>
    [group.overview, ...group.links, ...(group.related ?? [])].some(
      (link) => link.href === pathname,
    ),
  )?.id;
}
