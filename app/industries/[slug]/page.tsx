import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { industries } from '@/lib/content';
import {
  Breadcrumb,
  PageHero,
  Eyebrow,
  CTA,
  ServiceGrid,
} from '@/components/site/shared';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return industries.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const x = industries.find((x) => x.slug === slug);
  if (!x) return {};
  return {
    title: x.name + ' marketing',
    description: x.description,
    openGraph: {
      title: x.name + ' marketing',
      description: x.description,
      images: [],
    },
    twitter: {
      card: 'summary',
      title: x.name + ' marketing',
      description: x.description,
      images: [],
    },
  };
}
export default async function Industry({ params }: Props) {
  const { slug } = await params;
  const x = industries.find((x) => x.slug === slug);
  if (!x) notFound();
  return (
    <main id="main">
      <Breadcrumb
        items={[
          { label: 'Industries', href: '/industries' },
          { label: x.name },
        ]}
      />
      <PageHero
        eyebrow={x.name.toUpperCase() + ' / YOUR NEXT CHAPTER'}
        title={x.headline}
        description={x.description}
      />
      <section className="wrap industry-needs">
        <div>
          <Eyebrow>THE RIGHT STARTING POINT</Eyebrow>
          <h2>
            Your business has
            <br />
            <span className="muted-text">its own priorities.</span>
          </h2>
          <p>
            We build the strategy around your actual services, customer journey
            and capacity to respond to new enquiries.
          </p>
          <Link
            href={'/contact?industry=' + x.slug}
            className="button button-dark"
          >
            Let’s talk about your business <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="needs-list">
          {x.needs.map((n, i) => (
            <div key={n}>
              <span>0{i + 1}</span>
              <h3>{n}</h3>
              <Check size={19} />
            </div>
          ))}
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>START WITH THE RIGHT TOOLS</Eyebrow>
            <h2>
              A useful mix.
              <br />
              <span className="muted-text">Built around you.</span>
            </h2>
          </div>
          <p>
            A starting point for the conversation. Your final scope is shaped
            around your specific needs.
          </p>
        </div>
        <ServiceGrid slugs={x.services} />
      </section>
      <CTA />
    </main>
  );
}
