import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/site/shared';
import { businessDetails } from '@/lib/business';
import { policyLinks, policyUpdated, policyUpdatedLabel } from '@/lib/policies';

export type PolicySection = { id: string; title: string; content: ReactNode };

export function BusinessContact() {
  const { tradingName, legalName, address, email, phone } = businessDetails;
  return (
    <div className="business-contact">
      <strong>{tradingName}</strong>
      {legalName && <p>Legal business name: {legalName}</p>}
      {address && <address>{address}</address>}
      {(email || phone) && (
        <dl>
          {email && (
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </div>
          )}
          {phone && (
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a>
              </dd>
            </div>
          )}
        </dl>
      )}
      {!email && (
        <p>
          Direct business support details have not yet been published. This
          website does not currently collect payments. Please verify the
          business contact and written proposal before making any payment.
        </p>
      )}
    </div>
  );
}

export function PolicyLayout({
  path,
  title,
  description,
  summary,
  sections,
}: {
  path: string;
  title: string;
  description: string;
  summary: string;
  sections: PolicySection[];
}) {
  return (
    <main id="main" className="policy-page">
      <PageHero
        eyebrow="CLEAR TERMS. BETTER WORKING RELATIONSHIPS."
        title={title}
        description={description}
      />
      <div className="policy-layout wrap">
        <aside className="policy-sidebar">
          <span className="policy-label">ON THIS PAGE</span>
          <nav aria-label="Page contents">
            {sections.map((section, index) => (
              <a href={`#${section.id}`} key={section.id}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {section.title}
              </a>
            ))}
          </nav>
          <Link
            className="policy-contact-link"
            href="/contact#business-details"
          >
            Contact & support <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </aside>
        <article className="policy-content">
          <div className="policy-summary">
            {(!businessDetails.legalName ||
              !businessDetails.address ||
              !businessDetails.email ||
              !businessDetails.phone) && (
              <p className="policy-draft">
                <strong>Draft for review.</strong> Business identity, support
                details and the proposed commercial terms need confirmation
                before these policies are used for payment collection.
              </p>
            )}
            <span className="policy-label">AT A GLANCE</span>
            <p>{summary}</p>
            <span className="policy-updated">
              Last updated{' '}
              <time dateTime={policyUpdated}>{policyUpdatedLabel}</time>
            </span>
          </div>
          {sections.map((section, index) => (
            <section
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              key={section.id}
            >
              <div className="policy-section-heading">
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
              </div>
              {section.content}
            </section>
          ))}
          <nav
            className="policy-related"
            aria-label="Related policies and pricing"
          >
            <span className="policy-label">THE FULL PICTURE</span>
            {policyLinks
              .filter((link) => link.href !== path)
              .map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ))}
          </nav>
        </article>
      </div>
    </main>
  );
}
