import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  MousePointer2,
  Workflow,
  PanelsTopLeft,
  MessageCircle,
  ChartNoAxesCombined,
  Check,
  MapPin,
  HeartPulse,
} from 'lucide-react';
import { services, articles, locations } from '@/lib/content';
import { getServiceImage, type ServiceImage } from '@/lib/service-media';

export const icons = {
  search: Search,
  pointer: MousePointer2,
  workflow: Workflow,
  layout: PanelsTopLeft,
  message: MessageCircle,
  chart: ChartNoAxesCombined,
};
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-line" />
      {children}
    </span>
  );
}
export function CopyBlock({
  lead,
  children,
}: {
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <div className="copy-block">
      <p className="copy-lead">{lead}</p>
      <p className="copy-detail">{children}</p>
    </div>
  );
}
export function ServiceArtwork({
  asset,
  decorative = false,
  priority = false,
}: {
  asset: ServiceImage;
  decorative?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={'service-artwork service-artwork-' + asset.treatment}>
      <Image
        unoptimized
        src={asset.src}
        alt={decorative ? '' : asset.alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
      />
    </span>
  );
}
export function ServiceGrid({
  slugs,
  showImages = false,
}: {
  slugs?: readonly string[];
  showImages?: boolean;
}) {
  const list = slugs
    ? services.filter((s) => slugs.includes(s.slug))
    : services;
  return (
    <div
      className={
        'service-grid service-image-grid' +
        (showImages ? '' : ' service-link-grid')
      }
    >
      {list.map((s, i) => {
        const Icon = icons[s.icon];
        const asset = showImages ? getServiceImage(s.slug, 'home') : undefined;
        return (
          <Link
            className="service-card"
            href={'/services/' + s.slug}
            key={s.slug}
          >
            <div className="service-card-media">
              {asset ? (
                <ServiceArtwork asset={asset} decorative />
              ) : (
                <span className="service-strategy-art" aria-hidden="true">
                  <Icon strokeWidth={1} />
                </span>
              )}
              <span className="service-image-index">0{i + 1}</span>
            </div>
            <div className="service-card-copy">
              <h3>{s.short}</h3>
              <p>{s.summary}</p>
              <span className="card-link">
                Explore service <ArrowUpRight size={20} />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export function CTA() {
  return (
    <section className="cta-section">
      <div className="wrap cta-inner">
        <div>
          <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
          <h2>
            Let’s make
            <br />
            <span>your next move.</span>
          </h2>
          <p>Tell us where you are. Let’s figure out where you could go.</p>
          <Link href="/contact" className="button button-dark">
            Let’s talk growth <ArrowUpRight size={18} />
          </Link>
        </div>
        <ArrowUpRight
          className="cta-direction-arrow"
          strokeWidth={0.8}
          aria-hidden="true"
        />
        <span className="cta-side-note">
          GOOD THINGS GROW
          <br />
          WHEN WE WORK TOGETHER.
        </span>
      </div>
    </section>
  );
}
export function LocalStrip() {
  return (
    <div className="local-strip wrap">
      <span className="strip-label">
        ROOTED ON THE COAST.
        <br />
        <strong>CONNECTED TO YOUR CUSTOMERS.</strong>
      </span>
      {locations.map((l) => (
        <Link key={l.slug} href={'/locations/' + l.slug}>
          <MapPin />
          {l.name}
        </Link>
      ))}
      <span className="strip-end">
        Local understanding.
        <br />
        Limitless possibilities. <ArrowUpRight size={19} />
      </span>
    </div>
  );
}
export function ArticleCards({
  category = 'All insights',
}: {
  category?: string;
}) {
  return (
    <div className="article-grid">
      {articles
        .filter((a) => category === 'All insights' || a.category === category)
        .map((a) => (
          <Link
            href={'/insights/' + a.slug}
            className={'article-card ' + a.theme}
            key={a.slug}
          >
            <div className="article-art">
              <span className="article-art-label">
                THE TIMEMAC PERSPECTIVE / 0
                {articles.findIndex((item) => item.slug === a.slug) + 1}
              </span>
              {a.theme === 'paper' ? (
                <>
                  <HeartPulse />
                  <span>
                    From search.
                    <br />
                    To <em>care.</em>
                  </span>
                </>
              ) : a.theme === 'rust' ? (
                <>
                  <MousePointer2 />
                  <span>
                    Make every
                    <br />
                    <em>click count.</em>
                  </span>
                </>
              ) : (
                <>
                  <Workflow />
                  <span>
                    Less friction.
                    <br />
                    <em>More follow-up.</em>
                  </span>
                </>
              )}
              <span className="article-art-arrow">
                <ArrowUpRight size={23} />
              </span>
            </div>
            <div className="article-meta">
              <span>{a.category}</span>
              <span>{a.read}</span>
            </div>
            <h3>{a.title}</h3>
            <span className="text-link">
              Read the story <ArrowUpRight size={15} />
            </span>
          </Link>
        ))}
    </div>
  );
}
export function Process({ compact = false }: { compact?: boolean }) {
  const steps = [
    [
      'Listen first.',
      'Your business, your customers, your goals. We ask the right questions before recommending a channel.',
    ],
    [
      'Connect the dots.',
      'A focused plan that connects discovery, your website and the way you handle enquiries.',
    ],
    [
      'Make it happen.',
      'Thoughtful creative, considered implementation and a clear launch plan.',
    ],
    [
      'Learn. Refine. Grow.',
      'Look at meaningful signals, listen to your team and make the next round of work smarter.',
    ],
  ];
  return (
    <div className={'process-grid' + (compact ? ' compact' : '')}>
      {steps.map(([title, desc], i) => (
        <div key={title}>
          <span className="process-number">
            0{i + 1}
            <ArrowRight size={22} />
          </span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
}
export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="check-list">
      {items.map((s) => (
        <li key={s}>
          <span>
            <Check size={14} />
          </span>
          {s}
        </li>
      ))}
    </ul>
  );
}
export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb wrap">
      <Link href="/">Home</Link>
      {items.map((i, n) => (
        <span key={n}>
          <span aria-hidden="true">/</span>
          {i.href ? (
            <Link href={i.href}>{i.label}</Link>
          ) : (
            <span aria-current="page">{i.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero wrap">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="page-hero-line">
        <h1>
          {title}
          {accent && (
            <>
              <br />
              <span className="muted-text">{accent}</span>
            </>
          )}
        </h1>
        {children || (
          <ArrowUpRight className="page-hero-arrow" strokeWidth={1} />
        )}
      </div>
      <p>{description}</p>
    </section>
  );
}
