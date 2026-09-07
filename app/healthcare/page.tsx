import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  HeartPulse,
  Search,
  ClipboardCheck,
  MessagesSquare,
} from 'lucide-react';
import { Eyebrow, CheckList, ServiceGrid, CTA } from '@/components/site/shared';
import { FAQ } from '@/components/site/interactive';
export const metadata: Metadata = {
  title: 'Healthcare marketing in Udupi, Manipal & Mangalore',
  description:
    'Thoughtful digital marketing for clinics, hospitals, dentists and diagnostic centres. Connect local SEO, useful websites and better enquiry follow-up.',
};
export default function Healthcare() {
  return (
    <main id="main">
      <section className="healthcare-page-hero wrap">
        <div>
          <Eyebrow>HEALTHCARE AT HEART. PEOPLE FIRST.</Eyebrow>
          <h1>
            Your expertise.
            <br />
            Their trust.
            <br />
            <span className="muted-text">A better connection.</span>
          </h1>
          <p>
            You focus on delivering good care. We help people discover your
            practice, understand your services and find a clear path to an
            appointment enquiry.
          </p>
          <Link
            className="button button-dark"
            href="/contact?industry=healthcare"
          >
            Let’s grow your practice <ArrowUpRight size={18} />
          </Link>
          <span className="hero-small-note">
            FOR HEALTHCARE PROVIDERS ACROSS COASTAL KARNATAKA
          </span>
        </div>
        <div className="healthcare-portrait">
          <Image
            unoptimized
            src="/images/healthcare.jpg"
            alt="An Indian physician listening attentively to a patient"
            width={1024}
            height={1536}
          />
          <div>
            <HeartPulse />
            <span>
              Good care deserves
              <br />
              to be found.
            </span>
          </div>
        </div>
      </section>
      <section className="healthcare-manifesto">
        <div className="wrap">
          <Eyebrow>MORE THAN ANOTHER MARKETING CATEGORY</Eyebrow>
          <h2>
            A patient is a person.
            <br />
            <span>Every touchpoint should feel that way.</span>
          </h2>
          <p>
            Healthcare decisions deserve clarity and care. Our approach puts
            useful information, thoughtful design and a respectful enquiry
            experience at the centre of your digital presence.
          </p>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>FROM SEARCH TO A REAL CONVERSATION</Eyebrow>
            <h2>
              A healthier
              <br />
              <span className="muted-text">digital journey.</span>
            </h2>
          </div>
          <p>
            Three connected priorities, shaped around how people find and
            contact your practice.
          </p>
        </div>
        <div className="healthcare-pillars">
          {[
            {
              icon: Search,
              title: 'Be easier to discover.',
              text: 'Service pages, local search and a clear business profile help people find relevant information about your practice.',
            },
            {
              icon: ClipboardCheck,
              title: 'Build understanding.',
              text: 'Explain your services, practitioners and next steps with clear content reviewed by your qualified team.',
            },
            {
              icon: MessagesSquare,
              title: 'Follow through with care.',
              text: 'Give appointment enquiries a clear owner and a practical follow-up process for your front desk.',
            },
          ].map(({ icon: Icon, title, text }, i) => (
            <article key={title}>
              <Icon size={32} strokeWidth={1.3} />
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="care-fit-section section">
        <div className="wrap two-column">
          <div>
            <Eyebrow>BUILT AROUND THE WAY YOU CARE</Eyebrow>
            <h2>
              From an independent
              <br />
              practice to a<br />
              <span className="muted-text">growing care network.</span>
            </h2>
            <p>
              The right approach depends on your services, catchment area and
              the way your team handles new enquiries.
            </p>
          </div>
          <div>
            <Link className="care-type" href="/industries/clinics-dental">
              <span>
                <h3>Clinics & dental practices</h3>
                <p>A clear local presence for your expertise.</p>
              </span>
              <ArrowUpRight />
            </Link>
            <Link
              className="care-type"
              href="/industries/hospitals-diagnostics"
            >
              <span>
                <h3>Hospitals & diagnostics</h3>
                <p>Make a wider service offering easier to navigate.</p>
              </span>
              <ArrowUpRight />
            </Link>
            <CheckList
              items={[
                'Your clinical team reviews medical content',
                'No promised rankings or patient volumes',
                'Clear scope and meaningful reporting',
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>A CONNECTED CARE PRESENCE</Eyebrow>
            <h2>
              The right tools.
              <br />
              <span className="muted-text">A thoughtful approach.</span>
            </h2>
          </div>
        </div>
        <ServiceGrid slugs={['seo', 'web-design', 'crm-automation']} />
      </section>
      <FAQ />
      <CTA />
    </main>
  );
}
