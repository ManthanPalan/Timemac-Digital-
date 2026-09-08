import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Heart, Compass, ScanEye } from 'lucide-react';
import {
  PageHero,
  Eyebrow,
  CTA,
  LocalStrip,
  CopyBlock,
} from '@/components/site/shared';
export const metadata: Metadata = {
  title: 'About our digital growth studio',
  description:
    'Meet Timemac Digital: a healthcare-first growth studio focused on thoughtful marketing for Udupi, Manipal and Mangalore.',
};
export default function About() {
  return (
    <main id="main">
      <PageHero
        eyebrow="SMALL ENOUGH TO CARE. AMBITIOUS ENOUGH TO BUILD."
        title="Your business has a story."
        accent="Let’s give it a bigger stage."
        description="Timemac Digital is a digital growth studio for healthcare brands and ambitious local businesses across Udupi, Manipal and Mangalore."
      />
      <section className="about-statement wrap">
        <div className="about-brand-panel">
          <span className="about-monogram" aria-hidden="true">
            t.
          </span>
          <span>
            local roots.
            <br />
            remarkable
            <br />
            <em>growth.</em>
          </span>
          <small>THE TIMEMAC WAY</small>
        </div>
        <div>
          <Eyebrow>WHY WE DO THIS</Eyebrow>
          <h2>
            Good work deserves
            <br />
            <span className="muted-text">to be seen.</span>
          </h2>
          <CopyBlock lead="Remarkable businesses. Right here.">
            Practices built on care. Services built on craft. Local brands that
            have spent years showing up for their communities.
          </CopyBlock>
          <CopyBlock lead="Your digital presence should reflect that quality.">
            We connect thoughtful design, useful content and practical marketing
            into a clearer path from discovery to a real conversation.
          </CopyBlock>
          <p className="copy-note">
            <strong>Healthcare is close to our heart.</strong> That same care
            for clarity, trust and human connection shapes our work with every
            business.
          </p>
          <Link className="text-link" href="/approach">
            Get to know our approach <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <LocalStrip />
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>A FEW THINGS WE BELIEVE IN</Eyebrow>
            <h2>
              Clear principles.
              <br />
              <span className="muted-text">Better partnerships.</span>
            </h2>
          </div>
        </div>
        <div className="values-grid">
          {[
            {
              icon: Heart,
              title: 'People before platforms.',
              text: 'A good digital experience starts with the people using it. We think about their questions, their context and their next step.',
            },
            {
              icon: Compass,
              title: 'Clarity before complexity.',
              text: 'Useful work starts with a clear problem. We keep the plan practical and choose tools because they serve your business.',
            },
            {
              icon: ScanEye,
              title: 'Progress you can understand.',
              text: 'Clear deliverables, honest conversations and reporting connected to what is happening in your business.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={29} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
