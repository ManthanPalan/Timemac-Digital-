import type { Metadata } from 'next';
import { PageHero } from '@/components/site/shared';
export const metadata: Metadata = {
  title: 'Privacy & your data',
  description:
    'How this version of the Timemac Digital website handles your information and consultation brief.',
};
export default function Privacy() {
  return (
    <main id="main">
      <PageHero
        eyebrow="CLEAR BY DESIGN"
        title="Privacy & your data."
        description="How this version of the site handles the information you choose to enter."
      />
      <article className="legal-content wrap">
        <section>
          <h2>Your consultation brief</h2>
          <p>
            The consultation form keeps your entries in the current page’s
            memory. It does not submit them to Timemac Digital or save them in
            browser storage. Reloading or closing the page clears the form. If
            you download a brief, your browser saves a text file containing the
            details you entered.
          </p>
        </section>
        <section>
          <h2>What to include</h2>
          <p>
            Use the form for business contact details and marketing goals.
            Please do not include patient names, clinical information or other
            sensitive personal information. You decide whether and how to share
            the downloaded file.
          </p>
        </section>
        <section>
          <h2>Website delivery</h2>
          <p>
            The site’s hosting provider may process technical request
            information to deliver and protect the website. If this site is
            viewed through a private hosting preview, that provider may also
            handle sign-in separately from the website.
          </p>
        </section>
        <section>
          <h2>Analytics and external services</h2>
          <p>
            This version does not include advertising pixels, marketing
            analytics or an enquiry delivery integration. Fonts and site imagery
            are served with the website. Browser and hosting behaviour remains
            subject to the services you use to access it.
          </p>
        </section>
        <section>
          <h2>Future changes</h2>
          <p>
            This page should be updated before enabling enquiry delivery,
            marketing analytics, third-party chat or other services that change
            how information is handled. Direct business contact details have not
            yet been added.
          </p>
        </section>
      </article>
    </main>
  );
}
