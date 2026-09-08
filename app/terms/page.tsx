import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PolicyLayout,
  BusinessContact,
  type PolicySection,
} from '@/components/site/policy-layout';
import { businessDetails } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms for Timemac Digital services, project agreements, Razorpay payments, international transactions and client responsibilities.',
  alternates: { canonical: '/terms' },
};
const sections: PolicySection[] = [
  {
    id: 'business-and-scope',
    title: 'Who these terms cover',
    content: (
      <>
        <p>
          These terms apply to the Timemac Digital website and to digital
          services purchased from{' '}
          {businessDetails.legalName || 'Timemac Digital'} (“we”, “us”, “our”).
          Our services include SEO, paid advertising, web design and
          development, hosting as part of web projects, social media, CRM
          automation and strategy.
        </p>
        <p>
          You must be at least 18 and legally able to enter a contract. If you
          act for a business, you must have authority to approve its project and
          payments. Website browsing alone does not place an order.
        </p>
        <BusinessContact />
      </>
    ),
  },
  {
    id: 'project-agreement',
    title: 'Your project agreement',
    content: (
      <>
        <p>
          Before payment, we agree a written proposal, statement of work or
          service order setting out deliverables, fees, currency, taxes,
          milestones, schedule, revisions and each party’s responsibilities. An
          engagement begins when both parties accept that agreement and any
          agreed advance is received.
        </p>
        <p>
          Project-specific terms take priority for the scope they expressly
          address, subject to mandatory law. Additional work or changes require
          written agreement on any extra fees and revised dates. Our{' '}
          <Link href="/shipping">Shipping & Delivery Policy</Link> explains how
          digital work is delivered.
        </p>
        <p>
          The consultation form prepares a file on your device. It does not send
          an enquiry, book a meeting or create a contract. Its budget options
          are planning preferences, not our prices.
        </p>
      </>
    ),
  },
  {
    id: 'fees-and-payments',
    title: 'Prices, invoices & payments',
    content: (
      <>
        <p>
          Services are quoted individually. The amount payable, transaction
          currency, applicable taxes and any approved third-party charges will
          be disclosed in your proposal and invoice before payment. Advertising
          spend, domain registration, hosting and software licences are included
          only when expressly listed. See{' '}
          <Link href="/pricing">Pricing Details</Link>.
        </p>
        <p>
          Where we provide a Razorpay checkout or payment link, Razorpay and its
          payment partners process the transaction. Available payment methods
          depend on that checkout. A payment is confirmed only after successful
          payment confirmation; a bank debit or an incomplete checkout alone
          does not confirm an order.
        </p>
        <p>
          Use your correct name, email, phone number and billing details, and
          pay only with a method you are authorised to use. Never send card
          security codes, banking passwords or one-time passwords to us. We do
          not automatically enrol you in recurring charges; any recurring
          payment requires separately disclosed terms and your authorisation.
        </p>
      </>
    ),
  },
  {
    id: 'international-payments',
    title: 'International customers',
    content: (
      <>
        <p>
          International payment options are available only when enabled for our
          merchant account and supported for the transaction. The currency and
          total shown on your invoice and checkout are the agreed payment
          amount; we do not promise availability of every currency, country or
          payment method.
        </p>
        <p>
          Your bank or card issuer may apply its own exchange rate,
          currency-conversion charges or cross-border fees. Check those charges
          with your provider before paying. Any taxes we collect will be
          identified on the invoice; each party remains responsible for taxes or
          reporting obligations that applicable law places on it.
        </p>
        <p>
          Payments may be subject to identity, billing or fraud checks by the
          payment provider. If a transaction cannot be accepted, contact us to
          resolve it before retrying. Refunds follow our{' '}
          <Link href="/refunds">Cancellation & Refunds Policy</Link>;
          exchange-rate changes can affect the amount credited in your account’s
          currency.
        </p>
      </>
    ),
  },
  {
    id: 'client-responsibilities',
    title: 'Working together',
    content: (
      <>
        <p>
          You are responsible for supplying accurate information, lawful
          content, necessary permissions, account access and timely approvals.
          Access should be shared through authorised invitations or agreed
          secure channels. We may revise a timeline if required material or
          approvals are delayed, and will communicate the change.
        </p>
        <p>
          Healthcare clients remain responsible for clinical accuracy, consent
          and applicable professional advertising rules. Do not submit patient
          records or medical information through the website form. Any project
          involving access to personal data needs an agreed scope and
          appropriate data-handling arrangements.
        </p>
        <p>
          Do not use the website or our services for fraud, unlawful
          advertising, infringement, unauthorised access or interference with
          another person’s systems.
        </p>
      </>
    ),
  },
  {
    id: 'ownership',
    title: 'Ownership & confidentiality',
    content: (
      <>
        <p>
          You retain ownership of materials you provide and grant us permission
          to use them for the agreed work. Ownership or licensing of project
          deliverables, source files and account access will be stated in the
          written agreement. Do not assume a transfer beyond what that agreement
          grants.
        </p>
        <p>
          Third-party tools, fonts, stock media, platforms and open-source
          software remain subject to their respective licences. Each party will
          protect confidential project information and disclose it only as
          needed for the engagement or as legally required.
        </p>
      </>
    ),
  },
  {
    id: 'results-and-cancellations',
    title: 'Results, cancellations & remedies',
    content: (
      <>
        <p>
          We do not guarantee a search ranking, advertising approval, number of
          leads, sales, bookings or financial return. Results depend on
          competition, platforms, budgets, your offer and other factors. This
          does not reduce our responsibility to deliver the services we agree to
          provide.
        </p>
        <p>
          Cancellation, unused advances, duplicate payments, non-delivery and
          eligible refunds are covered by our{' '}
          <Link href="/refunds">Cancellation & Refunds Policy</Link>. Please
          report delivery concerns promptly so we can investigate and discuss a
          correction or refund where appropriate.
        </p>
        <p>
          Nothing in these terms excludes liability or removes a consumer right
          or remedy that cannot lawfully be excluded. A payment dispute does not
          prevent you from using rights available through your bank, payment
          provider or applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'law-and-updates',
    title: 'Applicable law & updates',
    content: (
      <>
        <p>
          These terms are governed by Indian law, subject to any mandatory
          protections that apply to you in your country. Disputes may be brought
          before courts or authorities with jurisdiction under applicable law.
          We encourage you to first contact us with your invoice or project
          reference so we can try to resolve the issue.
        </p>
        <p>
          We may update these website terms and show the revised date on this
          page. Changes do not retrospectively alter an accepted paid engagement
          without agreement, except where required by law. Read our{' '}
          <Link href="/privacy">Privacy Policy</Link> for information about
          personal data.
        </p>
      </>
    ),
  },
];
export default function Terms() {
  return (
    <PolicyLayout
      path="/terms"
      title="Terms of Service."
      description="A clear agreement for the work, the payment and what happens next."
      summary="We agree the scope and price before work begins. Payments follow your invoice, and your rights under applicable law remain protected."
      sections={sections}
    />
  );
}
