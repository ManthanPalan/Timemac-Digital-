import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '@/lib/content';
import {
  PageHero,
  CTA,
  Eyebrow,
  icons,
  ServiceArtwork,
} from '@/components/site/shared';
import { getServiceImage } from '@/lib/service-media';
import { FAQ } from '@/components/site/interactive';
export const metadata: Metadata = {
  title: 'Digital marketing services',
  description:
    'Explore SEO, Google Ads, React websites, social media, CRM automation and growth strategy for businesses in Udupi, Manipal and Mangalore.',
};
export default function Services() {
  return (
    <main id="main">
      <PageHero
        eyebrow="YOUR DIGITAL GROWTH TOOLKIT"
        title="Built to work better."
        accent="Together."
        description="Six connected capabilities. One clear goal: help the right people discover your business, get in touch and keep coming back."
      />
      <section className="wrap service-rows service-image-rows">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          const asset = getServiceImage(s.slug);
          return (
            <Link
              href={'/services/' + s.slug}
              className="service-row"
              key={s.slug}
            >
              <span className="row-number">0{i + 1}</span>
              <div className="service-row-media">
                {asset ? (
                  <ServiceArtwork asset={asset} decorative />
                ) : (
                  <Icon strokeWidth={1.2} aria-hidden="true" />
                )}
              </div>
              <div className="service-row-copy">
                <h2>{s.title}</h2>
                <p>{s.summary}</p>
                <div className="tag-list">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <span className="row-arrow">
                <ArrowUpRight />
              </span>
            </Link>
          );
        })}
      </section>
      <section className="section wrap two-column statement-section">
        <div>
          <Eyebrow>THE RIGHT MIX. FOR YOUR NEXT MOVE.</Eyebrow>
          <h2>
            Start where
            <br />
            <span className="muted-text">it matters most.</span>
          </h2>
        </div>
        <div>
          <p>
            You don’t need every channel on day one. We start with your current
            setup and the goals you want to achieve, then shape a practical
            scope around them.
          </p>
          <ul className="simple-checks">
            <li>
              <Check />
              Clear deliverables before we begin
            </li>
            <li>
              <Check />
              Ad spend and subscriptions identified separately
            </li>
            <li>
              <Check />A reporting rhythm that makes sense for you
            </li>
          </ul>
          <Link href="/contact" className="text-link">
            Find your starting point <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <FAQ />
      <CTA />
    </main>
  );
}
