import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  HeartPulse,
  Check,
} from 'lucide-react';
import {
  ServiceGrid,
  CTA,
  ArticleCards,
  LocalStrip,
  Process,
  Eyebrow,
  CheckList,
} from '@/components/site/shared';
import { FAQ, IndustrySelector } from '@/components/site/interactive';

export default function Home() {
  return (
    <>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-line" /> YOUR NEIGHBOURHOOD. OUR NEXT BIG
              THING.
            </span>
            <h1>
              Local roots.
              <br />
              Remarkable
              <br />
              <span className="highlight">
                growth.
                <ArrowUpRight aria-hidden="true" />
              </span>
            </h1>
            <p>
              Big ambition deserves a better digital partner. We help healthcare
              brands and local businesses turn online attention into real-world
              growth.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-dark">
                Find your growth potential <ArrowUpRight size={18} />
              </Link>
              <Link href="/services" className="text-link">
                Explore services <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-footnote">
              <span>
                <Check size={15} /> Strategy before spend
              </span>
              <span>
                <Check size={15} /> Built around your business
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              unoptimized
              className="hero-photo"
              src="/images/healthcare.jpg"
              alt="An Indian healthcare professional listening to a patient in a bright, welcoming clinic"
              width={1024}
              height={1536}
              fetchPriority="high"
            />
            <div className="image-shade" />
            <span className="photo-label">
              <span className="status-dot" /> HEALTHCARE AT HEART
            </span>
            <div className="photo-copy">
              <span>
                Good care deserves
                <br />
                to be found.
              </span>
              <Link
                href="/healthcare"
                className="circle-link"
                aria-label="Explore healthcare marketing"
              >
                <ArrowUpRight />
              </Link>
            </div>
            <div className="floating-note">
              <div className="note-icon">
                <HeartPulse size={22} />
              </div>
              <div>
                <strong>Your expertise. A wider reach.</strong>
                <span>Connecting care with community.</span>
              </div>
              <Sparkles size={19} />
            </div>
          </div>
        </section>
        <LocalStrip />
        <section className="section wrap">
          <div className="section-heading">
            <div>
              <Eyebrow>01 / WHAT WE DO</Eyebrow>
              <h2>
                Good businesses.
                <br />
                <span className="muted-text">Meet great marketing.</span>
              </h2>
            </div>
            <p>
              From that first Google search to your next loyal customer, we
              connect every part of your digital journey.
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
              <Eyebrow>02 / HEALTHCARE IS CLOSE TO OUR HEART</Eyebrow>
              <h2>
                You care for people.
                <br />
                <span>
                  We help them
                  <br />
                  find you.
                </span>
              </h2>
              <p>
                Choosing care is personal. Your marketing should understand
                that. We help clinics, hospitals and healthcare professionals
                build a trusted digital presence that puts people first.
              </p>
              <CheckList
                items={[
                  'Clear, helpful healthcare content',
                  'Local visibility where your patients search',
                  'A connected enquiry-to-appointment journey',
                ]}
              />
              <Link href="/healthcare" className="button button-lime">
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
              <Eyebrow>03 / YOUR WORLD. OUR FOCUS.</Eyebrow>
              <h2>
                Different industries.
                <br />
                <span className="muted-text">The same ambition.</span>
              </h2>
            </div>
            <p>
              A healthcare-first studio, with room for every business ready for
              its next chapter.
            </p>
          </div>
          <IndustrySelector />
        </section>
        <section className="process-section section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <Eyebrow>04 / SIMPLE PROCESS. SERIOUS INTENT.</Eyebrow>
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
            <p>
              Udupi’s community. Manipal’s energy. Mangalore’s ambition. Your
              location is more than a campaign setting. It is the context that
              makes your marketing matter.
            </p>
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
              <Eyebrow>05 / A LITTLE PERSPECTIVE</Eyebrow>
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
