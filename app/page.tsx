import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  Sparkles,
  MousePointer2,
} from 'lucide-react';
import {
  ServiceGrid,
  CTA,
  ArticleCards,
  LocalStrip,
  Process,
  Eyebrow,
  CheckList,
  CopyBlock,
} from '@/components/site/shared';
import { FAQ, IndustrySelector } from '@/components/site/interactive';

export default function Home() {
  return (
    <>
      <main id="main">
        <section className="editorial-hero wrap">
          <div className="editorial-hero-top">
            <Eyebrow>DIGITAL MARKETING / COASTAL KARNATAKA</Eyebrow>
            <span>STRATEGY. DESIGN. REAL CONNECTIONS.</span>
          </div>
          <div className="editorial-hero-title">
            <h1>
              Your work.
              <br />
              <em>A wider world.</em>
            </h1>
            <div className="hero-margin-note">
              <span>LOCAL ROOTS.</span>
              <p>
                <span>
                  For the <strong>ambitious.</strong>
                </span>
                <span>
                  For the <strong>independent.</strong>
                </span>
                <span>
                  For <strong>what’s next.</strong>
                </span>
              </p>
              <ArrowUpRight strokeWidth={1} />
            </div>
          </div>
          <div className="editorial-hero-bottom">
            <div className="editorial-intro">
              <span className="editorial-small-label">
                GOOD WORK DESERVES TO BE SEEN.
              </span>
              <p className="hero-audience">
                Healthcare brands.
                <br />
                <strong>Ambitious local businesses.</strong>
              </p>
              <ul
                className="hero-outcomes"
                aria-label="What we help you achieve"
              >
                {[
                  {
                    icon: Search,
                    title: 'Easier to find.',
                    detail: 'Show up in the right searches.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Harder to forget.',
                    detail: 'Make your expertise stand out.',
                  },
                  {
                    icon: MousePointer2,
                    title: 'Simpler to choose.',
                    detail: 'Give every enquiry a next step.',
                  },
                ].map(({ icon: Icon, title, detail }) => (
                  <li key={title}>
                    <span className="outcome-icon">
                      <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <span>{detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="button button-accent">
                Make your next move <ArrowUpRight size={19} />
              </Link>
              <Link href="/services" className="text-link">
                Explore our services <ArrowRight size={17} />
              </Link>
            </div>
            <Link href="/healthcare" className="editorial-photo">
              <Image
                unoptimized
                src="/images/healthcare.jpg"
                alt="A physician in conversation with a patient"
                width={1024}
                height={1536}
                fetchPriority="high"
              />
              <div className="editorial-photo-caption">
                <span>
                  <small>OUR SPECIALIST FOCUS</small>Healthcare. With a human
                  touch.
                </span>
                <ArrowUpRight size={26} />
              </div>
              <span className="photo-index">01 / HEALTHCARE</span>
            </Link>
          </div>
        </section>
        <LocalStrip />
        <section className="section wrap">
          <div className="section-heading">
            <div>
              <Eyebrow>01 / OUR CAPABILITIES</Eyebrow>
              <h2>
                The right tools.
                <br />
                <span className="muted-text">A clear direction.</span>
              </h2>
            </div>
            <p>
              <strong>From first search to loyal customer.</strong>
              We connect every part of your digital journey.
            </p>
          </div>
          <ServiceGrid />
          <div className="section-bottom-link">
            <span>A connected approach. A clearer path forward.</span>
            <Link className="text-link" href="/services">
              Meet your growth toolkit <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
        <section className="healthcare-feature">
          <div className="wrap healthcare-feature-inner">
            <div className="healthcare-feature-image">
              <Image
                unoptimized
                src="/images/healthcare.jpg"
                alt="A thoughtful doctor-patient conversation"
                width={1024}
                height={1536}
                loading="lazy"
              />
              <span className="image-caption">
                HUMAN CONNECTION. AT THE HEART OF IT ALL.
              </span>
            </div>
            <div className="healthcare-feature-copy">
              <Eyebrow>02 / HEALTHCARE SPECIALISTS</Eyebrow>
              <h2>
                You care for people.
                <br />
                <span>
                  We help them <br />
                  find you.
                </span>
              </h2>
              <CopyBlock lead="Choosing care is personal.">
                Your marketing should understand that. We help clinics,
                hospitals and healthcare professionals build a trusted digital
                presence that puts people first.
              </CopyBlock>
              <CheckList
                items={[
                  'Clear, helpful healthcare content',
                  'Local visibility where your patients search',
                  'A connected enquiry-to-appointment journey',
                ]}
              />
              <Link href="/healthcare" className="button button-accent">
                Explore healthcare marketing <ArrowUpRight size={18} />
              </Link>
              <div className="healthcare-specialties">
                CLINICS <span>·</span> HOSPITALS <span>·</span> DENTAL{' '}
                <span>·</span> DIAGNOSTICS
              </div>
            </div>
          </div>
        </section>
        <section className="section wrap">
          <div className="section-heading">
            <div>
              <Eyebrow>03 / SECTORS WE UNDERSTAND</Eyebrow>
              <h2>
                Different industries.
                <br />
                <span className="muted-text">The same ambition.</span>
              </h2>
            </div>
            <p>
              <strong>
                Healthcare is our focus. Ambition is our common ground.
              </strong>
              There’s room for every business ready for its next chapter.
            </p>
          </div>
          <IndustrySelector />
        </section>
        <section className="process-section section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <Eyebrow>04 / HOW WE WORK</Eyebrow>
                <h2>
                  Less guesswork.
                  <br />
                  <span className="muted-text">More forward motion.</span>
                </h2>
              </div>
              <Link href="/approach" className="text-link">
                How we work <ArrowUpRight size={18} />
              </Link>
            </div>
            <Process compact />
          </div>
        </section>
        <section className="local-feature wrap">
          <div>
            <Eyebrow>THIS IS OUR NEIGHBOURHOOD, TOO.</Eyebrow>
            <h2>
              Three places.
              <br />
              One coast.
              <br />
              <span className="muted-text">So much possibility.</span>
            </h2>
            <CopyBlock lead="Local understanding. A real advantage.">
              Your neighbourhood shapes how people search, connect and choose.
              We bring that context to every campaign.
            </CopyBlock>
            <Link href="/locations" className="text-link">
              Meet your local growth partner <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="location-stack">
            {[
              { name: 'Udupi', slug: 'udupi', line: 'Rooted in community.' },
              {
                name: 'Manipal',
                slug: 'manipal',
                line: 'Powered by possibility.',
              },
              {
                name: 'Mangalore',
                slug: 'mangalore',
                line: 'Built for the next chapter.',
              },
            ].map((l, i) => (
              <Link key={l.slug} href={'/locations/' + l.slug}>
                <span className="location-stack-number">0{i + 1}</span>
                <div>
                  <h3>{l.name}</h3>
                  <span>{l.line}</span>
                </div>
                <ArrowUpRight />
              </Link>
            ))}
            <span className="location-stack-note">
              COASTAL KARNATAKA, INDIA · LOCAL BY DESIGN
            </span>
          </div>
        </section>
        <section className="section wrap insights-home">
          <div className="section-heading">
            <div>
              <Eyebrow>05 / NOTES FROM THE STUDIO</Eyebrow>
              <h2>
                Fresh thinking.
                <br />
                <span className="muted-text">Useful takeaways.</span>
              </h2>
            </div>
            <Link className="text-link" href="/insights">
              All insights <ArrowUpRight size={17} />
            </Link>
          </div>
          <ArticleCards />
        </section>
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
