import Script from 'next/script';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/site/shared';

const reviewWidgetUrl =
  'https://pay.timemacoriginals.com/reputation/widgets/review_widget/kzlo1NUHILsxLko8eYqd?widgetId=6ac171bb5143791f59809033';

export function Reviews() {
  return (
    <section
      id="reviews"
      className="section reviews-section"
      aria-labelledby="reviews-heading"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>04 / CLIENT REVIEWS</Eyebrow>
            <h2 id="reviews-heading">
              The experience.
              <br />
              <span className="muted-text">In their words.</span>
            </h2>
          </div>
          <a
            className="text-link"
            href={reviewWidgetUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read our reviews (opens in a new tab)"
          >
            Read our reviews <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        {/* oxlint-disable typescript/no-deprecated -- Preserve the provider-supplied scrolling setting for this cross-origin iframe. */}
        <iframe
          className="lc_reviews_widget"
          src={reviewWidgetUrl}
          title="Timemac Digital customer reviews"
          loading="lazy"
          scrolling="no"
          style={{
            display: 'block',
            minWidth: '100%',
            width: '100%',
            height: 600,
            border: 0,
          }}
        />
        {/* oxlint-enable typescript/no-deprecated */}
        <Script
          src="https://pay.timemacoriginals.com/reputation/assets/review-widget.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}
