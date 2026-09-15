import type { Metadata } from 'next';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Eyebrow, CheckList } from '@/components/site/shared';
import { ContactForm } from '@/components/site/contact-form';
import { BusinessContact } from '@/components/site/policy-layout';
export const metadata: Metadata = {
  title: 'Let’s talk growth',
  description:
    'Start a growth conversation with Timemac Digital. Use our contact form to tell us about your business and goals.',
};
export default function Contact() {
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
              'A direct way to contact our team',
              'No pressure. No commitments.',
            ]}
          />
          <div className="contact-availability" id="business-details">
            <span className="policy-label">BUSINESS CONTACT & SUPPORT</span>
            <BusinessContact />
          </div>
          <div className="contact-region">
            <MapPin size={17} />
            <span>
              Udupi · Manipal · Mangalore<small>COASTAL KARNATAKA, INDIA</small>
            </span>
            <ArrowUpRight size={19} />
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
