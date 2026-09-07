import type { Metadata } from 'next';
import { PageHero } from '@/components/site/shared';
export const metadata: Metadata = {
  title: 'Website information & terms',
  description:
    'Information about the Timemac Digital website, service scope and consultation brief.',
};
export default function Terms() {
  return (
    <main id="main">
      <PageHero
        eyebrow="A CLEAR STARTING POINT"
        title="Website information."
        description="A few useful details about the site, the content and what happens next."
      />
      <article className="legal-content wrap">
        <section>
          <h2>Service information</h2>
          <p>
            The pages on this website introduce the areas in which Timemac
            Digital can support a business. Deliverables, fees, timelines,
            responsibilities and any third-party costs must be agreed in a
            separate written scope before work begins.
          </p>
        </section>
        <section>
          <h2>Marketing outcomes</h2>
          <p>
            The website does not promise rankings, enquiry volumes, appointment
            bookings or a particular financial outcome. Any proposed measurement
            plan depends on your project and the information available.
          </p>
        </section>
        <section>
          <h2>Consultation briefs</h2>
          <p>
            The form prepares a downloadable planning brief. It does not send an
            enquiry, make an appointment or create a service agreement. Budget
            selections describe your own planning preferences and are not
            service prices.
          </p>
        </section>
        <section>
          <h2>Content and imagery</h2>
          <p>
            Insights provide general marketing perspectives. Healthcare imagery
            is illustrative and does not represent a named client, member of
            staff or endorsement. Service-area pages describe the locations
            served and do not claim office addresses.
          </p>
        </section>
        <section>
          <h2>Before engaging services</h2>
          <p>
            Confirm the business contact details and agree on a written scope.
            Any terms governing a paid engagement belong in that agreement,
            including payment, ownership, access and project responsibilities.
          </p>
        </section>
      </article>
    </main>
  );
}
