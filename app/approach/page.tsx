import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { PageHero, Eyebrow, CTA } from '@/components/site/shared';
export const metadata: Metadata = {
  title: 'Our approach to digital growth',
  description:
    'Discover how Timemac Digital connects strategy, design, marketing and follow-up into a practical four-step growth process.',
};
const detail = [
  [
    '01',
    'Discovery',
    'A good plan starts with your world.',
    'We look at your services, audiences, current website and enquiry process. Your team’s experience helps us understand what the numbers alone cannot.',
    [
      'Business and audience conversation',
      'Current digital presence review',
      'Clear goals and starting priorities',
    ],
  ],
  [
    '02',
    'Direction',
    'Connect the dots before connecting the tools.',
    'We shape a focused roadmap with agreed deliverables, responsibilities and a measurement plan. The aim is a useful scope that fits your needs and capacity.',
    [
      'Channel and content priorities',
      'Scope, timelines and responsibilities',
      'A shared definition of useful progress',
    ],
  ],
  [
    '03',
    'Delivery',
    'Bring the plan to life, thoughtfully.',
    'Design, build and campaign work happens against the agreed plan. You review the details that need your input before we prepare the launch.',
    [
      'Design and implementation',
      'Content review and approvals',
      'Launch checks and team handover',
    ],
  ],
  [
    '04',
    'Improvement',
    'Use what you learn. Make the next move better.',
    'We review meaningful signals alongside feedback from your team. Then we refine the parts of the journey that need attention.',
    [
      'Agreed reporting cadence',
      'Lead-quality and team feedback',
      'Prioritised next steps',
    ],
  ],
];
export default function Approach() {
  return (
    <main id="main">
      <PageHero
        eyebrow="NO MYSTERY. JUST A THOUGHTFUL WAY OF WORKING."
        title="Less guesswork."
        accent="More forward motion."
        description="A collaborative process that connects your ambition to a practical plan, and the plan to everyday action."
      />
      <section className="wrap approach-steps">
        {detail.map(([n, label, title, desc, checks]) => (
          <article key={String(n)}>
            <div className="approach-number">
              {n}
              <span>{label}</span>
            </div>
            <div>
              <h2>{title}</h2>
              <p>{desc}</p>
              <div className="approach-checks">
                {(checks as string[]).map((c) => (
                  <span key={c}>
                    <Check size={15} />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="expectation-section section">
        <div className="wrap two-column">
          <div>
            <Eyebrow>WHAT YOU CAN EXPECT</Eyebrow>
            <h2>
              A partner in the process.
              <br />
              <span className="muted-text">From the first conversation.</span>
            </h2>
          </div>
          <div>
            <p>
              We agree on how we will work together, what your team needs to
              provide and how decisions will be made. Every project starts with
              a clear scope.
            </p>
            <p>
              Results depend on your market, your starting point and the work
              involved. We focus on useful progress and honest review, without
              promises of fixed rankings or guaranteed lead volumes.
            </p>
            <Link href="/contact" className="text-link">
              Find your next step <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
