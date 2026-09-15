import Script from 'next/script';

export function ContactForm() {
  return (
    <div style={{ width: '100%', minWidth: 0 }}>
      <iframe
        src="https://links.timemacoriginals.com/widget/form/PhEe9M2XrqJ3BzNnPe7S"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          minHeight: 690,
          border: 'none',
          borderRadius: 8,
        }}
        id="inline-PhEe9M2XrqJ3BzNnPe7S"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Form"
        data-height="690"
        data-layout-iframe-id="inline-PhEe9M2XrqJ3BzNnPe7S"
        data-form-id="PhEe9M2XrqJ3BzNnPe7S"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Contact Form"
      />
      <Script
        src="https://links.timemacoriginals.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
