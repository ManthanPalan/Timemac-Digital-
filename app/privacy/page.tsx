import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PolicyLayout,
  BusinessContact,
  type PolicySection,
} from '@/components/site/policy-layout';
import { businessDetails } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Timemac Digital handles contact form submissions, website requests and information associated with Razorpay payments.',
  alternates: { canonical: '/privacy' },
};
const sections: PolicySection[] = [
  {
    id: 'who-we-are',
    title: 'Who handles your information',
    content: (
      <>
        <p>
          This policy explains how{' '}
          {businessDetails.legalName || 'Timemac Digital'} handles personal
          information in connection with the Timemac Digital website, enquiries,
          client projects and payments. It does not replace a separate
          data-processing agreement for work we carry out on a client’s behalf.
        </p>
        <BusinessContact />
      </>
    ),
  },
  {
    id: 'contact-form',
    title: 'Contact form submissions',
    content: (
      <>
        <p>
          Our contact page includes a hosted form served from
          links.timemacoriginals.com. When you submit the form, the details you
          provide are sent through that service so our team can respond to your
          enquiry. The enquiry and project practices below apply to information
          shared through the form.
        </p>
        <p>
          Loading the embedded form connects your browser to the form provider,
          which may process technical information needed to display and operate
          it.
        </p>
        <p>
          Use business information only. Please do not enter patient details,
          health records, passwords or payment credentials.
        </p>
      </>
    ),
  },
  {
    id: 'information-and-purposes',
    title: 'Information we receive & why',
    content: (
      <>
        <ul>
          <li>
            <strong>Enquiries and projects:</strong> information you send
            directly, such as contact details, requirements, communications and
            approved project materials, to respond, prepare proposals and
            deliver agreed work.
          </li>
          <li>
            <strong>Billing:</strong> where you become a paying client, your
            invoice details, billing address or country, business tax details
            where relevant, and transaction references, amounts, currency and
            status, to reconcile payments, issue refunds and maintain required
            records.
          </li>
          <li>
            <strong>Website requests:</strong> our hosting provider, Vercel, may
            process IP addresses, browser/device information, requested pages,
            timestamps and diagnostic logs to serve and secure the site.
          </li>
        </ul>
        <p>
          We use personal information only for the stated purposes, related
          support, fraud prevention, legal obligations and resolving disputes.
          Where applicable law requires consent, we seek it separately. Choosing
          to enquire or pay does not automatically subscribe you to marketing
          messages.
        </p>
      </>
    ),
  },
  {
    id: 'razorpay',
    title: 'Payments through Razorpay',
    content: (
      <>
        <p>
          If you use a Razorpay payment link or checkout that we provide,
          Razorpay and its payment partners process the payment information you
          supply. This can include contact and billing details, payment
          instrument information, transaction details and technical information
          needed for authentication, security and fraud checks.
        </p>
        <p>
          We may receive the payment reference, status, amount, currency and
          relevant customer or billing details needed to fulfil and reconcile
          the order or manage a refund. We do not request or store full card
          numbers, CVV/security codes, banking passwords or one-time passwords
          through this website.
        </p>
        <p>
          Razorpay’s own handling of payment data is explained in its{' '}
          <a href="https://razorpay.com/privacy-policy/" rel="noreferrer">
            Privacy Policy
          </a>
          . International payment providers and banks may process data in the
          countries where they operate, subject to their legal obligations.
          Payment availability depends on the options enabled for the
          transaction.
        </p>
      </>
    ),
  },
  {
    id: 'sharing-and-transfers',
    title: 'Sharing & international processing',
    content: (
      <>
        <p>
          We do not sell personal information. Where necessary for the purposes
          described here, information may be handled by our hosting and
          communications and contact form providers, Razorpay and payment
          partners, authorised people delivering your project, and professional
          advisers. We may also disclose information where law requires it or to
          address fraud, security incidents or legal claims.
        </p>
        <p>
          We work from India. Hosting, communications, form and payment services
          may involve processing outside your country. Where applicable law
          requires safeguards for a transfer, those safeguards must be in place;
          use of the site is not a blanket consent to unrestricted transfers.
          Vercel describes its practices in its{' '}
          <a href="https://vercel.com/legal/privacy-notice" rel="noreferrer">
            Privacy Notice
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies, analytics & external links',
    content: (
      <>
        <p>
          This website includes Google Tag Manager and an embedded contact form.
          Its fonts and images are served with the site. Hosting security
          services, the contact form and external payment pages may use cookies
          or similar technologies for their own functions; their notices apply
          when you use those services.
        </p>
        <p>
          You can manage cookies through your browser, although blocking
          necessary form, payment or security cookies may affect those
          functions. We will update this policy and provide any notice or
          consent choice required before adding optional tracking. Following an
          external link takes you to a service with its own privacy practices.
        </p>
      </>
    ),
  },
  {
    id: 'retention-and-security',
    title: 'Keeping information safe & only as needed',
    content: (
      <>
        <p>
          Contact form submissions and other enquiry and project information
          shared with us are retained only for as long as needed to respond,
          perform the agreement, resolve disputes or meet applicable
          record-keeping duties. Billing and transaction records may need to be
          kept longer for accounting, tax or payment obligations.
        </p>
        <p>
          We aim to minimise the data used for each purpose and restrict access
          to authorised people who need it. No online service can guarantee
          absolute security. Please use agreed secure channels for project
          access and avoid emailing passwords or card details.
        </p>
      </>
    ),
  },
  {
    id: 'choices-and-contact',
    title: 'Your choices, requests & complaints',
    content: (
      <>
        <p>
          You can choose not to share information, though some details may be
          needed to respond or provide a paid service. Depending on applicable
          law, you may request access, correction or deletion, withdraw consent,
          or raise a privacy complaint using the business support details above.
          We may ask for proportionate identity verification and explain any
          records we must retain.
        </p>
        <p>
          Withdrawing consent does not affect processing already lawfully
          carried out. Where available, you may also complain to the relevant
          data-protection authority. This website is intended for adults acting
          for businesses; it is not directed to children under 18. Contact us if
          you believe a child has shared information with us.
        </p>
        <p>
          We will update the date on this page when practices change and provide
          additional notice or request consent where required for material
          changes. The <Link href="/terms">Terms of Service</Link> and{' '}
          <Link href="/refunds">Cancellation & Refunds Policy</Link> cover the
          commercial side of working with us.
        </p>
      </>
    ),
  },
];
export default function Privacy() {
  return (
    <PolicyLayout
      path="/privacy"
      title="Privacy Policy."
      description="What you share, how it is used, and the choices that stay yours."
      summary="Details submitted through our hosted contact form are used to respond to your enquiry. Projects and payments involve the information needed for those purposes."
      sections={sections}
    />
  );
}
