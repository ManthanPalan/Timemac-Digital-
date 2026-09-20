import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PolicyLayout,
  BusinessContact,
  type PolicySection,
} from '@/components/site/policy-layout';
import { businessDetails } from '@/lib/business';
import { smsPolicyUpdated } from '@/lib/policies';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Timemac Digital collects, uses and protects personal information, including SMS consent, messaging preferences and our SMS no-sharing policy.',
  alternates: { canonical: '/privacy' },
};
const sections: PolicySection[] = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p>
          We may collect information that you voluntarily provide to us,
          including:
        </p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company or business name</li>
          <li>Information submitted through contact forms</li>
          <li>Appointment or consultation information</li>
          <li>Communications you send to us</li>
          <li>SMS consent and messaging preferences</li>
        </ul>
        <p>
          We may also automatically collect certain technical information when
          you use our website, including:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>Referring website</li>
          <li>Date and time of visits</li>
          <li>Cookie and analytics information</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    content: (
      <>
        <p>We may use your information to:</p>
        <ul>
          <li>Respond to inquiries and requests</li>
          <li>Provide our digital marketing and related services</li>
          <li>Schedule and manage consultations or appointments</li>
          <li>Send requested service information</li>
          <li>Provide customer support</li>
          <li>
            Send appointment reminders and account or service notifications
          </li>
          <li>
            Send marketing or promotional communications when you have provided
            appropriate consent
          </li>
          <li>Improve our website, services, and customer experience</li>
          <li>Analyze website usage and performance</li>
          <li>Prevent fraud, misuse, or security incidents</li>
          <li>Comply with applicable legal and regulatory requirements</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sms-communications-and-consent',
    title: 'SMS Communications and Consent',
    content: (
      <>
        <p>
          When you provide your phone number and separately consent to receive
          text messages from Timemac Digital, we may send you marketing and
          informational SMS messages, including service updates, appointment
          reminders, follow-ups, offers, and promotional communications.
        </p>
        <p>Message frequency varies. Message and data rates may apply.</p>
        <p>
          You may opt out of SMS communications at any time by replying{' '}
          <strong>STOP</strong> to any message. After opting out, you may
          receive a confirmation message indicating that you have been
          unsubscribed.
        </p>
        <p>
          For assistance, reply <strong>HELP</strong> or contact us at{' '}
          <strong>
            <a href={`mailto:${businessDetails.email}`}>
              {businessDetails.email}
            </a>
          </strong>{' '}
          or{' '}
          <strong>
            <a href={`tel:${businessDetails.phone.replace(/[^+\d]/g, '')}`}>
              {businessDetails.phone}
            </a>
          </strong>
          .
        </p>
        <p>
          Providing SMS consent is optional and is not a condition of purchasing
          any goods or services.
        </p>
      </>
    ),
  },
  {
    id: 'sms-privacy-and-no-sharing-policy',
    title: 'SMS Privacy and No-Sharing Policy',
    content: (
      <>
        <p>
          <strong>
            Timemac Digital does not sell, rent, share, or disclose mobile phone
            numbers, SMS opt-in data, or SMS consent information to third
            parties or affiliates for their own marketing or promotional
            purposes.
          </strong>
        </p>
        <p>
          Information obtained as part of the SMS consent process will be used
          only for the purposes described in this{' '}
          <Link href="/privacy">Privacy Policy</Link> and for providing the
          messaging services to which you have consented.
        </p>
        <p>
          We may disclose information to service providers that assist us in
          operating our communications infrastructure solely as necessary to
          provide services on our behalf. Such service providers are not
          permitted to use SMS opt-in information for their own marketing
          purposes.
        </p>
        <p>
          <strong>
            SMS consent and mobile information will not be shared with third
            parties or affiliates for marketing or promotional purposes.
          </strong>
        </p>
      </>
    ),
  },
  {
    id: 'cookies-and-tracking-technologies',
    title: 'Cookies and Tracking Technologies',
    content: (
      <>
        <p>
          Our website may use cookies, pixels, analytics technologies, and
          similar tools to understand website usage, improve functionality,
          measure marketing performance, and enhance the user experience.
        </p>
        <p>
          Cookies may collect information such as browser type, device
          information, IP address, pages viewed, and interactions with our
          website.
        </p>
        <p>
          You may control or disable cookies through your browser settings.
          Disabling certain cookies may affect some website functionality.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-share-information',
    title: 'How We Share Information',
    content: (
      <>
        <p>
          We may share personal information with service providers that perform
          services on our behalf, such as website hosting, analytics, customer
          relationship management, communications, and other operational
          services.
        </p>
        <p>
          We may also disclose information when required by law, legal process,
          court order, or governmental request, or where reasonably necessary to
          protect our rights, property, users, or others.
        </p>
        <p>
          <strong>
            Mobile phone numbers, SMS opt-in information, and SMS consent are
            excluded from any sharing for third-party or affiliate marketing
            purposes.
          </strong>
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: (
      <>
        <p>
          We use reasonable administrative, technical, and organizational
          safeguards designed to protect personal information against
          unauthorized access, alteration, disclosure, loss, or misuse.
        </p>
        <p>
          However, no method of internet transmission or electronic storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary to provide our services, fulfill the purposes described in
          this <Link href="/privacy">Privacy Policy</Link>, comply with legal
          obligations, resolve disputes, and enforce agreements.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights-and-choices',
    title: 'Your Rights and Choices',
    content: (
      <>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul>
          <li>Request access to personal information we maintain about you</li>
          <li>Request correction or updating of inaccurate information</li>
          <li>Request deletion of certain personal information</li>
          <li>Withdraw marketing consent</li>
          <li>Unsubscribe from email communications</li>
          <li>Opt out of SMS communications by replying STOP</li>
        </ul>
        <p>
          To submit a privacy-related request, contact us at{' '}
          <strong>
            <a href={`mailto:${businessDetails.email}`}>
              {businessDetails.email}
            </a>
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    content: (
      <>
        <p>
          Our website may contain links to third-party websites or services.
          Timemac Digital is not responsible for the privacy practices, content,
          or security of third-party websites.
        </p>
      </>
    ),
  },
  {
    id: 'children-s-privacy',
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Our services are intended for individuals who are at least 18 years
          old. We do not knowingly collect personal information from children
          under the age of 18 through our SMS program.
        </p>
      </>
    ),
  },
  {
    id: 'changes-to-this-privacy-policy',
    title: 'Changes to This Privacy Policy',
    content: (
      <>
        <p>
          We may update this <Link href="/privacy">Privacy Policy</Link>{' '}
          periodically. Any changes will be posted on this page with an updated
          effective or revision date.
        </p>
        <p>
          Continued use of our website or services after changes are posted
          constitutes acknowledgment of the updated policy where permitted by
          law.
        </p>
      </>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <>
        <p>
          If you have questions about this{' '}
          <Link href="/privacy">Privacy Policy</Link> or our privacy practices,
          contact:
        </p>
        <BusinessContact />
      </>
    ),
  },
];
export default function Privacy() {
  return (
    <PolicyLayout
      path="/privacy"
      title="Privacy Policy."
      description="What we collect, how we use it, and your privacy and messaging choices."
      summary="Timemac Digital respects your privacy and is committed to protecting the personal information you provide to us. This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices available to you."
      updated={smsPolicyUpdated}
      showDraftNotice={false}
      sections={sections}
    />
  );
}
