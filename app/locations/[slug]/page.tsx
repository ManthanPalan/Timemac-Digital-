import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { locations } from '@/lib/content';
import {
  Breadcrumb,
  Eyebrow,
  CTA,
  ServiceGrid,
  CheckList,
} from '@/components/site/shared';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return locations.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const x = locations.find((x) => x.slug === slug);
  if (!x) return {};
  return {
    title: 'Digital marketing in ' + x.name,
    description: x.description,
    openGraph: {
      title: 'Digital marketing in ' + x.name,
      description: x.description,
      images: [],
    },
    twitter: {
      card: 'summary',
      title: 'Digital marketing in ' + x.name,
      description: x.description,
      images: [],
    },
  };
}
export default async function Location({ params }: Props) {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) notFound();
  return (
    <main id="main">
      <Breadcrumb
        items={[{ label: 'Locations', href: '/locations' }, { label: l.name }]}
      />
      <section className="location-detail-hero wrap">
        <div>
          <Eyebrow>{l.tag}</Eyebrow>
          <h1>{l.headline}</h1>
          <p>{l.description}</p>
          <Link
            className="button button-dark"
            href={'/contact?location=' + l.slug}
          >
            Let’s grow in {l.name} <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="location-type-panel">
          <MapPin strokeWidth={1} />
          <span>
            YOUR NEIGHBOURHOOD.
            <br />
            YOUR NEXT CHAPTER.
          </span>
          <strong>
            {l.name}
            <span>↗</span>
          </strong>
          <small>COASTAL KARNATAKA / INDIA</small>
        </div>
      </section>
      <section className="section wrap two-column">
        <div>
          <Eyebrow>LOCAL CONTEXT. CLEAR DIRECTION.</Eyebrow>
          <h2>
            Built for your business.
            <br />
            <span className="muted-text">Relevant to your area.</span>
          </h2>
        </div>
        <div>
          <p>{l.focus}</p>
          <CheckList items={l.areas} />
          <p className="small-note">
            {l.note} This is a service-area page, not an office listing.
          </p>
        </div>
      </section>
      <section className="section wrap location-services">
        <div className="section-heading">
          <div>
            <Eyebrow>MAKE YOUR PRESENCE COUNT</Eyebrow>
            <h2>Your local growth toolkit.</h2>
          </div>
          <Link href="/services" className="text-link">
            Explore all services <ArrowUpRight size={17} />
          </Link>
        </div>
        <ServiceGrid slugs={['seo', 'google-ads', 'web-design']} />
      </section>
      <CTA />
    </main>
  );
}
