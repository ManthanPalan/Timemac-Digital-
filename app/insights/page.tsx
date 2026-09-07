import type { Metadata } from 'next';
import { PageHero, CTA } from '@/components/site/shared';
import { InsightFilter } from '@/components/site/interactive';
export const metadata: Metadata = {
  title: 'Insights & ideas',
  description:
    'Practical perspectives on healthcare marketing, local discovery, Google Ads and CRM from Timemac Digital.',
};
export default function Insights() {
  return (
    <main id="main">
      <PageHero
        eyebrow="THE TIMEMAC PERSPECTIVE"
        title="Fresh thinking."
        accent="Useful takeaways."
        description="A little clarity for your next marketing decision. Practical ideas for businesses building their next chapter."
      />
      <section className="wrap insights-list">
        <InsightFilter />
      </section>
      <CTA />
    </main>
  );
}
