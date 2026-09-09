import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  PanelsTopLeft,
  Workflow,
  ListChecks,
  Wallet,
  ChartNoAxesCombined,
} from 'lucide-react';
import { services } from '@/lib/content';
import { PageHero, CTA, Eyebrow, icons } from '@/components/site/shared';
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
          return (
            <Link
              href={'/services/' + s.slug}
              className="service-row"
              key={s.slug}
            >
              <span className="row-number">0{i + 1}</span>
              <div className="service-row-media">
                <Icon strokeWidth={1.2} aria-hidden="true" />
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
      <section
        className="section wrap starting-point-section"
        aria-labelledby="starting-point-title"
      >
        <div className="starting-point-panel">
          <div className="starting-point-heading">
            <div>
              <Eyebrow>YOUR NEXT MOVE, MADE CLEARER</Eyebrow>
              <h2 id="starting-point-title">
                Start where
                <br />
                <span className="muted-text">it matters most.</span>
              </h2>
            </div>
            <div className="starting-point-intro">
              <p>
                <strong>One priority. A focused plan.</strong>Choose what needs
                attention first. We’ll shape the right scope around your
                business, your team and your goals.
              </p>
            </div>
          </div>
          <div className="starting-paths">
            {[
              {
                icon: Search,
                title: 'Get discovered.',
                description:
                  'Help the right people find your business when they’re looking for what you do.',
                service: 'SEO & local discovery',
                href: '/services/seo',
              },
              {
                icon: PanelsTopLeft,
                title: 'Make your website work.',
                description:
                  'Give visitors a clear offer, a confident first impression and an easy next step.',
                service: 'Web development & hosting',
                href: '/services/web-design',
              },
              {
                icon: Workflow,
                title: 'Follow through better.',
                description:
                  'Keep enquiries organised and give your team a more consistent way to follow up.',
                service: 'CRM & automation',
                href: '/services/crm-automation',
              },
            ].map(({ icon: Icon, title, description, service, href }, i) => (
              <Link key={href} href={href} className="starting-path">
                <span className="starting-path-top">
                  <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                  <span>0{i + 1}</span>
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="starting-path-link">
                  {service}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <div className="starting-point-bottom">
            <span className="starting-point-note">
              <ArrowRight size={18} aria-hidden="true" />A clear starting point.
              Room to grow.
            </span>
            <Link href="/contact" className="button button-dark">
              Find my starting point <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="starting-promises">
          {[
            {
              icon: ListChecks,
              title: 'Clear scope.',
              text: 'Deliverables agreed before we begin.',
            },
            {
              icon: Wallet,
              title: 'Transparent costs.',
              text: 'Ad spend and subscriptions identified separately.',
            },
            {
              icon: ChartNoAxesCombined,
              title: 'Useful reporting.',
              text: 'A review rhythm that works for your team.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
              <p>
                <strong>{title}</strong>
                <span>{text}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
      <FAQ />
      <CTA />
    </main>
  );
}
