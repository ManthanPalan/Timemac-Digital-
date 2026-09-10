import Script from 'next/script';

export function ContactForm() {
  return (
    <div style={{ minWidth: 0 }}>
      <iframe
        src="https://go.growcanada.online/widget/form/vOwBESqN6WDm57ISJl1y"
        style={{
          display: 'block',
          width: '100%',
          height: '1169px',
          border: 'none',
          borderRadius: '8px',
        }}
        id="inline-vOwBESqN6WDm57ISJl1y"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Timemac"
        data-height="1169"
        data-layout-iframe-id="inline-vOwBESqN6WDm57ISJl1y"
        data-form-id="vOwBESqN6WDm57ISJl1y"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Timemac"
      />
      <Script
        src="https://go.growcanada.online/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
