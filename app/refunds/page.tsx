import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PolicyLayout,
  BusinessContact,
  type PolicySection,
} from '@/components/site/policy-layout';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy',
  description:
    'Cancellation rights, unused project advances, refund eligibility and processing timelines for Timemac Digital services.',
  alternates: { canonical: '/refunds' },
};
const sections: PolicySection[] = [
  {
    id: 'request',
    title: 'How to request a cancellation or refund',
    content: (
      <>
        <p>
          Send a written request using our business support email, identifying
          your name, project or invoice reference, payment date, amount and
          reason. Include the Razorpay payment ID if available. You do not need
          to share card numbers, security codes, banking passwords or one-time
          passwords.
        </p>
        <p>
          For cancellation or refund requests, use direct support details or the
          verified contact on your project agreement.
        </p>
        <BusinessContact />
      </>
    ),
  },
  {
    id: 'eligibility',
    title: 'Work cancelled before or after it starts',
    content: (
      <>
        <ul>
          <li>
            <strong>Before work starts:</strong> payments for unstarted work are
            refundable, less only third-party costs that you approved in
            advance, were actually incurred and cannot be recovered.
          </li>
          <li>
            <strong>After work starts:</strong> we calculate the value of
            completed work using the agreed milestone or rate, add any approved
            non-recoverable third-party costs and refund the unused balance. We
            provide the calculation in writing.
          </li>
          <li>
            <strong>Completed services:</strong> a change of mind alone does not
            make completed, agreed work refundable. This does not limit remedies
            for defective work, non-delivery or other rights under applicable
            law.
          </li>
          <li>
            <strong>Our cancellation or non-delivery:</strong> if we cannot
            provide agreed services, we will offer a revised arrangement for
            your acceptance or refund the undelivered portion. Any further
            remedy required by law remains available.
          </li>
        </ul>
        <p>
          No blanket “non-refundable” label removes a right you have under
          applicable law. Any project-specific cancellation terms must be
          disclosed and accepted before payment.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-and-ongoing',
    title: 'Advertising, hosting & ongoing work',
    content: (
      <>
        <p>
          Advertising spend already used by an ad platform and activated domain,
          hosting or software costs may not be recoverable from the supplier.
          Such costs can be deducted only where previously approved and actually
          incurred. Unspent advances held by us are included in the refund
          calculation.
        </p>
        <p>
          For an ongoing engagement, request cancellation before the next agreed
          service period starts. The written agreement specifies any notice
          period and the work due during it. We do not initiate an automatic
          renewal charge without your separate authorisation. If a payment
          mandate is used, request its cancellation as well as cancellation of
          the service.
        </p>
      </>
    ),
  },
  {
    id: 'timing',
    title: 'Review, initiation & bank processing',
    content: (
      <>
        <p>
          We review a complete request and communicate a decision within{' '}
          <strong>5 business days</strong>. If essential information is missing,
          we will explain what is needed. Approved refunds are initiated within{' '}
          <strong>5 business days of approval</strong>, and we provide the
          refund reference when available.
        </p>
        <p>
          Refunds through Razorpay go to the original payment method. After
          initiation, normal refunds generally take another{' '}
          <strong>5–7 working days</strong> to reflect, depending on the bank
          and payment method. This is an estimate, and international card
          issuers may take longer. Contact us with the refund reference if the
          expected period has passed so we can trace it.
        </p>
        <p>
          For our review and initiation timelines, business days mean Monday to
          Friday, excluding public holidays in Karnataka, India. Bank and
          payment-provider calendars may differ. The review, initiation and
          bank-credit stages are separate.
        </p>
      </>
    ),
  },
  {
    id: 'payment-errors',
    title: 'Duplicate, failed & international payments',
    content: (
      <>
        <p>
          Please report an accidental duplicate or incorrect charge promptly. We
          reconcile it against payment records and refund any verified excess
          payment. A debit linked to a failed or pending transaction must first
          be traced with the payment provider; avoid paying again until its
          status is clear.
        </p>
        <p>
          An international refund is for the approved amount in the original
          transaction currency, through the original payment route. Your issuer
          may apply an exchange rate that differs from the original payment
          date. Bank-imposed conversion or cross-border fees are controlled by
          your provider, so the credited amount in your account’s currency may
          differ.
        </p>
        <p>
          We do not ask you to pay a separate “refund release” fee or supply an
          OTP to receive a refund.
        </p>
      </>
    ),
  },
  {
    id: 'disputes',
    title: 'Questions & your statutory rights',
    content: (
      <>
        <p>
          If you disagree with a decision, contact us with the project and
          refund references and explain the issue. We will review the scope,
          delivery and transaction records with you. You retain any rights
          available under consumer law or through your bank or payment provider.
        </p>
        <p>
          Read this policy with the <Link href="/terms">Terms of Service</Link>{' '}
          and your written project agreement. Nothing here prevents a refund or
          other remedy required by applicable law.
        </p>
      </>
    ),
  },
];
export default function Refunds() {
  return (
    <PolicyLayout
      path="/refunds"
      title="Cancellation & Refunds."
      description="Clear rules for changes of plan, unused advances and payment issues."
      summary="Refunds reflect work actually completed and approved costs already incurred. Eligible balances return through the original payment method, with clear review and processing stages."
      sections={sections}
    />
  );
}
