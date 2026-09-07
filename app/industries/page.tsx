import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  HeartPulse,
  Building2,
  GraduationCap,
  Utensils,
  House,
  Store,
} from 'lucide-react';
import { industries } from '@/lib/content';
import { PageHero, CTA, CheckList } from '@/components/site/shared';
export const metadata: Metadata = {
  title: 'Industries we serve',
  description:
    'Healthcare-first digital marketing, with tailored strategies for education, hospitality, real estate and local businesses in coastal Karnataka.',
};
const icons = [HeartPulse, Building2, GraduationCap, Utensils, House, Store];
export default function Industries() {
  return (
    <main id="main">
      <PageHero
        eyebrow="YOUR WORLD. OUR FULL ATTENTION."
        title="Know the business."
        accent="Then build the strategy."
        description="Every industry has its own language, expectations and decision-making journey. We start by understanding yours."
      />
      <section className="wrap industry-cards">
        {industries.map((x, i) => {
          const Icon = icons[i];
          return (
            <Link
              href={'/industries/' + x.slug}
              key={x.slug}
              className="industry-detail-card"
            >
              <div className="service-top">
                <Icon strokeWidth={1.4} />
                <span>{x.label}</span>
              </div>
              <h2>{x.name}</h2>
              <p>{x.description}</p>
              <CheckList items={x.needs.slice(0, 2)} />
              <span className="card-link">
                Explore your industry <ArrowUpRight size={20} />
              </span>
            </Link>
          );
        })}
      </section>
      <CTA />
    </main>
  );
}
