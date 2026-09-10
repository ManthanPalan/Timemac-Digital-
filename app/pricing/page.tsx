import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PolicyLayout,
  type PolicySection,
} from '@/components/site/policy-layout';
import { services } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Service Pricing Details',
  description:
    'How Timemac Digital quotes digital marketing, website and CRM projects, including service fees, advertising budgets, taxes and payment schedules.',
  alternates: { canonical: '/pricing' },
};
const sections: PolicySection[] = [
  {
    id: 'quote',
    title: 'A price based on your project',
    content: (
      <>
        <p>
          We provide custom proposals rather than fixed-price packages on this
          website. Your deliverables, project size, ongoing support and required
          tools determine the quote. We confirm the complete amount and currency
          in writing before requesting payment.
        </p>
        <ul>
          {services.map((service) => (
            <li key={service.slug}>
              <Link href={'/services/' + service.slug}>{service.title}</Link> —
              quoted for the agreed scope.
            </li>
          ))}
        </ul>
        <p>
          Hosting is quoted within Web Design & Development. Any budget you
          share helps plan a discussion and is not an advertised service rate.
        </p>
      </>
    ),
  },
  {
    id: 'breakdown',
    title: 'What your quote includes',
    content: (
      <>
        <ul>
          <li>
            The services, deliverables, revisions, dates and total service fee.
          </li>
          <li>
            The billing currency and applicable taxes, showing whether they are
            included or additional.
          </li>
          <li>
            Any separate ad spend, domain, hosting, software or other
            third-party costs, and who pays each provider.
          </li>
          <li>
            The advance, milestone or recurring payment schedule and any ongoing
            service term.
          </li>
        </ul>
        <p>
          Extra work requires an agreed change to the scope and price. There is
          no charge for sending an enquiry through this website.
        </p>
      </>
    ),
  },
  {
    id: 'paying',
    title: 'Before you make a payment',
    content: (
      <>
        <p>
          Confirm that your invoice and the payment request show the agreed
          amount and currency. Where we provide Razorpay payment options, only
          the methods available in that transaction can be used. Your bank may
          apply currency-conversion or cross-border charges separately.
        </p>
        <p>
          Read the <Link href="/terms">Terms of Service</Link>,{' '}
          <Link href="/refunds">Cancellation & Refunds Policy</Link> and{' '}
          <Link href="/shipping">Shipping & Delivery Policy</Link> together with
          your proposal before agreeing to proceed.
        </p>
      </>
    ),
  },
  {
    id: 'discuss',
    title: 'Discuss your scope',
    content: (
      <p>
        Use the <Link href="/contact">contact form</Link> to tell us about your
        goals and discuss your scope. Sending an enquiry does not place an
        order.
      </p>
    ),
  },
];
export default function Pricing() {
  return (
    <PolicyLayout
      path="/pricing"
      title="Pricing Details."
      description="The scope comes first. The price is clear before you commit."
      summary="Every engagement starts with an agreed written quote. Service fees, taxes, third-party costs and the payment schedule are disclosed before payment."
      sections={sections}
    />
  );
}
