import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowDown, Search, Compass, ChartNoAxesCombined } from 'lucide-react';
import { Eyebrow, CheckList } from '@/components/site/shared';
import { MarketingReportForm } from '@/components/site/marketing-report-form';

export const metadata: Metadata = {
  title: 'Free Marketing Report',
  description:
    'Get a free marketing report for your business with Timemac Digital. Take a clearer look at your online presence and your next growth opportunities.',
  alternates: { canonical: '/free-marketing-report' },
};

export default function FreeMarketingReport() {
  return (
    <main id="main">
      <section className="report-hero wrap">
        <div>
          <Eyebrow>YOUR NEXT MOVE STARTS WITH CLARITY</Eyebrow>
          <h1>
            Your marketing.
            <br />
            <em>A clearer picture.</em>
          </h1>
          <p>
            See where your business stands online. Start with a free marketing
            report and find a clearer direction for what comes next.
          </p>
          <CheckList
            items={['Free to get started', 'Built around your business']}
          />
          <a href="#get-report" className="button button-accent">
            Get my free report <ArrowDown size={18} />
          </a>
          <span className="report-small-note">
            FOR HEALTHCARE BRANDS & AMBITIOUS LOCAL BUSINESSES
          </span>
        </div>
        <div id="get-report" aria-label="Free marketing report form">
          <MarketingReportForm />
        </div>
      </section>
      <section
        className="report-benefits wrap"
        aria-label="A starting point for better marketing"
      >
        {[
          {
            icon: Search,
            title: 'Look at your presence.',
            text: 'Take a fresh look at how your business appears online.',
          },
          {
            icon: ChartNoAxesCombined,
            title: 'Find room to grow.',
            text: 'Use your report to start asking the right marketing questions.',
          },
          {
            icon: Compass,
            title: 'Choose your next move.',
            text: 'Bring more clarity to the priorities you discuss with your team.',
          },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section
        className="brand-campaign wrap"
        aria-label="A better first impression"
      >
        <Image
          unoptimized
          src="/images/timemac-first-impression.webp"
          alt="Timemac — Your website. A better first impression. Healthcare-first digital marketing."
          width={1733}
          height={908}
        />
      </section>
    </main>
  );
}
