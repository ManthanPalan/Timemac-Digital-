import type { Metadata } from 'next';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Eyebrow, CheckList } from '@/components/site/shared';
import { ContactForm } from '@/components/site/contact-form';
export const metadata: Metadata = {
  title: 'Let’s talk growth',
  description:
    'Prepare a growth conversation with Timemac Digital. Tell us about your business, location and goals, and download your consultation brief.',
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const q = await searchParams;
  const get = (key: string) => (typeof q[key] === 'string' ? q[key] : '');
  return (
    <main id="main">
      <section className="contact-layout wrap">
        <div className="contact-copy">
          <Eyebrow>GOOD THINGS START WITH A CONVERSATION</Eyebrow>
          <h1>
            Your next chapter
            <br />
            could start <br />
            <span className="muted-text">right here.</span>
          </h1>
          <p>
            Big plans, a specific challenge, or just a feeling that your
            marketing could work harder. Let’s put it into words.
          </p>
          <CheckList
            items={[
              'A simple starting point for your goals',
              'A brief you can review and keep',
              'No pressure. No commitments.',
            ]}
          />
          <div className="contact-availability">
            <span className="eyebrow">LET’S GET THE CONVERSATION READY</span>
            <p>
              Direct contact details are coming soon. For now, prepare and
              download your brief so everything is ready when you reach out.
            </p>
          </div>
          <div className="contact-region">
            <MapPin size={17} />
            <span>
              Udupi · Manipal · Mangalore<small>COASTAL KARNATAKA, INDIA</small>
            </span>
            <ArrowUpRight size={19} />
          </div>
        </div>
        <ContactForm
          initialService={get('service')}
          initialLocation={get('location')}
          initialIndustry={get('industry')}
        />
      </section>
    </main>
  );
}
