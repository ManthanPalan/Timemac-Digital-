import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowDown, Check, Target, Search } from 'lucide-react';
import { services } from '@/lib/content';
import {
  Breadcrumb,
  Eyebrow,
  CTA,
  ServiceGrid,
  icons,
} from '@/components/site/shared';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    openGraph: {
      title: s.title + ' | Timemac Digital',
      description: s.description,
      images: [],
    },
    twitter: {
      card: 'summary',
      title: s.title,
      description: s.description,
      images: [],
    },
  };
}
export default async function Service({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const Icon = icons[s.icon];
  return (
    <main id="main">
      <Breadcrumb
        items={[{ label: 'Services', href: '/services' }, { label: s.title }]}
      />
      <section className="detail-hero wrap">
        <div>
          <Eyebrow>{s.kicker}</Eyebrow>
          <h1>{s.headline}</h1>
          <p>{s.description}</p>
          <Link
            className="button button-dark"
            href={'/contact?service=' + s.slug}
          >
            Let’s talk {s.slug === 'seo' ? 'SEO' : s.short.toLowerCase()}{' '}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="service-blueprint">
          <div className="blueprint-top">
            <span>THE TIMEMAC APPROACH</span>
            <Icon size={26} />
          </div>
          <span className="blueprint-label">A BETTER JOURNEY, BY DESIGN.</span>
          <div className="blueprint-stages">
            <span>
              <Search size={18} />
              Get discovered
            </span>
            <ArrowDown />
            <span>
              <Target size={18} />
              Make a connection
            </span>
            <ArrowDown />
            <span className="blueprint-last">
              <Check size={18} />
              Give it a next step
            </span>
          </div>
          <div className="blueprint-bottom">
            YOUR BUSINESS. CONNECTED.
            <ArrowUpRight size={20} />
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>THOUGHT THROUGH. FOLLOWED THROUGH.</Eyebrow>
            <h2>
              What this looks like
              <br />
              <span className="muted-text">for your business.</span>
            </h2>
          </div>
          <p>{s.fit}</p>
        </div>
        <div className="deliverable-grid">
          {s.deliverables.map(([title, desc], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="measurement-section">
        <div className="wrap two-column">
          <div>
            <Eyebrow>LOOK PAST THE SURFACE</Eyebrow>
            <h2>
              Measure the things
              <br />
              that move you forward.
            </h2>
            <p>
              We agree on useful signals at the start, then review them
              alongside what your team sees in the real world.
            </p>
          </div>
          <div className="measurement-list">
            {s.measure.map((m) => (
              <span key={m}>
                <Check size={16} />
                {m}
                <ArrowUpRight size={16} />
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>KEEP THE JOURNEY CONNECTED</Eyebrow>
            <h2>
              Better with
              <br />
              <span className="muted-text">the right company.</span>
            </h2>
          </div>
        </div>
        <ServiceGrid
          slugs={services
            .filter((x) => x.slug !== s.slug)
            .slice(0, 3)
            .map((x) => x.slug)}
        />
      </section>
      <CTA />
    </main>
  );
}
