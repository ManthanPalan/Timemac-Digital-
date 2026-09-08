import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PolicyLayout,
  type PolicySection,
} from '@/components/site/policy-layout';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy',
  description:
    'How Timemac Digital delivers digital marketing, website, hosting and CRM services. No physical products are shipped.',
  alternates: { canonical: '/shipping' },
};
const sections: PolicySection[] = [
  {
    id: 'digital-services',
    title: 'Digital services, delivered remotely',
    content: (
      <>
        <p>
          Timemac Digital provides digital marketing, web development, hosting
          support, CRM automation and related professional services. We do not
          sell or ship physical goods through this website. Physical shipping,
          courier tracking and physical-product returns do not apply.
        </p>
        <p>
          Delivery can take the form of project files, reports, website
          releases, agreed account configuration, access invitations or remote
          meetings, as specified in your project agreement.
        </p>
      </>
    ),
  },
  {
    id: 'schedule',
    title: 'When your work starts & arrives',
    content: (
      <>
        <p>
          Your written proposal specifies the start date, milestones and
          estimated or committed delivery dates before you pay. Timing depends
          on the scope; this website does not sell an instant-delivery product.
          Work starts after acceptance of the proposal, receipt of any agreed
          advance and the required information or access.
        </p>
        <p>
          For ongoing services, the proposal specifies the service period,
          reporting frequency and recurring deliverables. For hosting, the
          activation date, term, renewal arrangements, backup responsibilities
          and support scope must be agreed as part of the web project.
        </p>
      </>
    ),
  },
  {
    id: 'handover',
    title: 'Handover, access & acceptance',
    content: (
      <>
        <p>
          We deliver through the email address, project workspace or accounts
          agreed with you. Please keep your delivery contact up to date. Access
          should be provided through account invitations or another agreed
          secure method.
        </p>
        <p>
          Acceptance criteria, revision rounds and any testing or approval
          period are set out in the proposal. Report missing files, broken
          access or work that does not match the agreed scope so we can
          investigate. Delivery of work does not imply a guaranteed marketing
          result.
        </p>
      </>
    ),
  },
  {
    id: 'delays',
    title: 'Dependencies, delays & non-delivery',
    content: (
      <>
        <p>
          Client approvals, assets, platform reviews, account access and
          third-party availability may affect delivery. If a dependency or
          interruption changes the schedule, we will explain the reason and
          propose revised dates. Extra scope and related charges require your
          agreement.
        </p>
        <p>
          If we cannot deliver, we will discuss a revised arrangement or the
          refund due for undelivered work under the{' '}
          <Link href="/refunds">Cancellation & Refunds Policy</Link>. Mandatory
          legal remedies continue to apply.
        </p>
      </>
    ),
  },
  {
    id: 'international-delivery',
    title: 'International delivery & support',
    content: (
      <>
        <p>
          Digital services may be delivered remotely to international clients
          where the engagement and payment can lawfully be supported. We agree
          time zones, meeting times and handover channels in advance. There are
          no courier or customs charges for the digital delivery described here.
        </p>
        <p>
          Contact us through the{' '}
          <Link href="/contact#business-details">business support details</Link>{' '}
          with your project reference for delivery questions. Prices, taxes and
          any third-party charges are described in your quote and our{' '}
          <Link href="/pricing">Pricing Details</Link>.
        </p>
      </>
    ),
  },
];
export default function Shipping() {
  return (
    <PolicyLayout
      path="/shipping"
      title="Shipping & Delivery."
      description="How your project moves from an agreed scope to a clear handover."
      summary="Our services are delivered digitally. Your proposal sets the timeline, milestones and handover method before payment; physical shipping does not apply."
      sections={sections}
    />
  );
}
