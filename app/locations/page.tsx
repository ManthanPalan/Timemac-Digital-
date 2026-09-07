import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { locations } from '@/lib/content';
import { PageHero, CTA } from '@/components/site/shared';
export const metadata: Metadata = {
  title: 'Digital marketing in Udupi, Manipal & Mangalore',
  description:
    'A local digital growth partner for coastal Karnataka. Explore our focus on businesses serving Udupi, Manipal and Mangalore.',
};
export default function Locations() {
  return (
    <main id="main">
      <PageHero
        eyebrow="LOCAL IS MORE THAN A LOCATION SETTING"
        title="One beautiful coast."
        accent="A world of opportunity."
        description="Your customers live here. Your next opportunity might be just around the corner. We build digital strategies with your real service area in mind."
      />
      <section className="wrap location-cards">
        {locations.map((l, i) => (
          <Link
            key={l.slug}
            href={'/locations/' + l.slug}
            className={'location-card location-' + i}
          >
            <div>
              <MapPin size={24} />
              <span>0{i + 1} / COASTAL KARNATAKA</span>
            </div>
            <h2>
              {l.name}
              <ArrowUpRight />
            </h2>
            <p>{l.description}</p>
            <span className="card-link">
              Explore {l.name} <ArrowRightIcon />
            </span>
          </Link>
        ))}
      </section>
      <div className="location-context wrap">
        <span className="eyebrow">SERVICE AREAS, NOT OFFICE ADDRESSES</span>
        <p>
          These pages describe the communities we serve. Meeting arrangements
          and project scope are agreed directly for each engagement.
        </p>
      </div>
      <CTA />
    </main>
  );
}
function ArrowRightIcon() {
  return <ArrowUpRight size={18} />;
}
