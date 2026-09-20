import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PolicyLayout,
  BusinessContact,
  type PolicySection,
} from '@/components/site/policy-layout';
import { smsPolicyUpdated } from '@/lib/policies';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for Timemac Digital services and SMS messaging, including consent, message frequency, rates, STOP, HELP and support.',
  alternates: { canonical: '/terms' },
};
const sections: PolicySection[] = [
  {
    id: 'timemac-digital-services',
    title: 'Timemac Digital Services',
    content: (
      <>
        <p>
          Timemac Digital provides digital marketing and related business
          services. Information presented on our website is provided for general
          informational and commercial purposes.
        </p>
        <p>
          Specific services, pricing, deliverables, and contractual obligations
          may be governed by separate agreements between Timemac Digital and its
          clients.
        </p>
      </>
    ),
  },
  {
    id: 'sms-messaging-program',
    title: 'SMS Messaging Program',
    content: (
      <>
        <p>
          By voluntarily opting in to the Timemac Digital SMS messaging program,
          you agree to receive text messages from{' '}
          <strong>Timemac Digital</strong> at the mobile telephone number you
          provide.
        </p>
        <p>Messages may include:</p>
        <ul>
          <li>Responses to inquiries</li>
          <li>Appointment and consultation reminders</li>
          <li>Service-related notifications</li>
          <li>Follow-up communications</li>
          <li>Customer support communications</li>
          <li>Marketing messages</li>
          <li>Promotional offers</li>
          <li>Information about Timemac Digital products or services</li>
        </ul>
        <p>
          Consent to receive SMS messages is optional and is not a condition of
          purchasing any goods or services.
        </p>
      </>
    ),
  },
  {
    id: 'message-frequency',
    title: 'Message Frequency',
    content: (
      <>
        <p>
          Message frequency varies depending on your interactions with Timemac
          Digital, the services you request, and the types of communications to
          which you have consented.
        </p>
      </>
    ),
  },
  {
    id: 'message-and-data-rates',
    title: 'Message and Data Rates',
    content: (
      <>
        <p>
          <strong>Message and data rates may apply</strong> to messages sent to
          you by Timemac Digital and messages you send to us.
        </p>
        <p>
          Your mobile carrier&#x27;s standard messaging and data rates may
          apply. Contact your wireless carrier if you have questions regarding
          your text messaging or data plan.
        </p>
      </>
    ),
  },
  {
    id: 'how-to-opt-out',
    title: 'How to Opt Out',
    content: (
      <>
        <p>
          You may cancel the SMS service at any time by replying{' '}
          <strong>STOP</strong> to a Timemac Digital text message.
        </p>
        <p>
          After you send STOP, you may receive a confirmation message
          acknowledging your unsubscribe request. After your opt-out has been
          processed, you will no longer receive SMS messages from the applicable
          Timemac Digital messaging program unless you opt in again.
        </p>
        <p>
          Other commonly recognized opt-out keywords may also be processed where
          supported by our messaging provider.
        </p>
      </>
    ),
  },
  {
    id: 'rejoining-the-sms-program',
    title: 'Rejoining the SMS Program',
    content: (
      <>
        <p>
          If you previously opted out and want to receive SMS messages again,
          you may rejoin by completing the applicable SMS opt-in process again
          and providing your consent.
        </p>
      </>
    ),
  },
  {
    id: 'help-and-support',
    title: 'Help and Support',
    content: (
      <>
        <p>
          For assistance with the Timemac Digital SMS program, reply{' '}
          <strong>HELP</strong> to a message.
        </p>
        <p>You may also contact:</p>
        <BusinessContact />
      </>
    ),
  },
  {
    id: 'carrier-disclaimer',
    title: 'Carrier Disclaimer',
    content: (
      <>
        <p>
          Wireless carriers are{' '}
          <strong>not liable for delayed or undelivered messages</strong>.
        </p>
        <p>
          Message delivery may be affected by your wireless service, network
          availability, device functionality, or other circumstances outside
          Timemac Digital&#x27;s control.
        </p>
      </>
    ),
  },
  {
    id: 'supported-carriers',
    title: 'Supported Carriers',
    content: (
      <>
        <p>
          SMS availability may depend on your mobile carrier and service plan.
          Participation in the messaging program is subject to the terms and
          conditions of your wireless provider.
        </p>
      </>
    ),
  },
  {
    id: 'sms-privacy',
    title: 'SMS Privacy',
    content: (
      <>
        <p>Your privacy is important to us.</p>
        <p>
          Mobile phone numbers, SMS opt-in information, and SMS consent
          information will{' '}
          <strong>
            not be sold, rented, or shared with third parties or affiliates for
            their own marketing or promotional purposes
          </strong>
          .
        </p>
        <p>
          For more information regarding how Timemac Digital collects, uses, and
          protects personal information, please review our{' '}
          <strong>
            <Link href="/privacy">Privacy Policy</Link>
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    id: 'age-requirement',
    title: 'Age Requirement',
    content: (
      <>
        <p>
          <strong>
            You must be 18 years of age or older to use the Timemac Digital SMS
            service.
          </strong>
        </p>
        <p>
          By opting in to receive SMS messages, you confirm that you are at
          least 18 years old and are authorized to provide the mobile number
          submitted.
        </p>
      </>
    ),
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    content: (
      <>
        <p>
          You agree to provide accurate and current information when submitting
          forms or using our services.
        </p>
        <p>
          You may not use our website or communications systems for unlawful,
          fraudulent, abusive, or unauthorized purposes.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: (
      <>
        <p>
          Unless otherwise stated, website content, branding, graphics, text,
          designs, and other materials made available by Timemac Digital are
          owned by or licensed to Timemac Digital and may not be copied,
          reproduced, or distributed without authorization.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    content: (
      <>
        <p>
          Timemac Digital may use third-party service providers in connection
          with website hosting, analytics, customer relationship management,
          communications, payment processing, and other business functions.
        </p>
        <p>
          Your use of third-party platforms may also be subject to those
          providers&#x27; respective terms and policies.
        </p>
      </>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: (
      <>
        <p>
          Timemac Digital makes reasonable efforts to provide accurate
          information and reliable services but does not guarantee that the
          website or services will always be uninterrupted, error-free, or
          available.
        </p>
      </>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Timemac Digital will not be
          responsible for indirect, incidental, special, consequential, or
          similar damages resulting from use of the website, communications
          services, or other services.
        </p>
      </>
    ),
  },
  {
    id: 'changes-to-these-terms',
    title: 'Changes to These Terms',
    content: (
      <>
        <p>
          Timemac Digital may update these Terms &amp; Conditions periodically.
          Updated Terms will be posted on this page along with a revised
          effective date.
        </p>
      </>
    ),
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    content: (
      <>
        <p>
          Your use of Timemac Digital services is also subject to our{' '}
          <strong>
            <Link href="/privacy">Privacy Policy</Link>
          </strong>
          , which explains how personal information, including SMS consent
          information, is collected and handled.
        </p>
      </>
    ),
  },
  {
    id: 'contact-information',
    title: 'Contact Information',
    content: (
      <>
        <p>
          For questions regarding these Terms &amp; Conditions or the Timemac
          Digital SMS program, contact:
        </p>
        <BusinessContact />
      </>
    ),
  },
];
export default function Terms() {
  return (
    <PolicyLayout
      path="/terms"
      title="Terms & Conditions."
      description="The terms for our website, services and SMS messaging program."
      summary="These Terms & Conditions govern your use of the Timemac Digital website, services, and SMS messaging program. By using our website or services, you agree to these Terms & Conditions."
      updated={smsPolicyUpdated}
      showDraftNotice={false}
      sections={sections}
    />
  );
}
