import type { Metadata } from 'next';
import { siteOrigin } from '@/lib/site';
import './globals.css';
import './editorial.css';
import './content.css';
import './services.css';
import './sections.css';
import './policies.css';
import './navigation.css';
import './typography.css';
import { Header, Footer } from '@/components/site/shell';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: 'Timemac Digital — Your work. A wider world.',
    template: '%s | Timemac Digital',
  },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: 'Timemac Digital',
    title: 'Timemac Digital — Your work. A wider world.',
    description:
      'Healthcare-first digital marketing for Udupi, Manipal and Mangalore.',
    images: [
      {
        url: '/og.png',
        width: 1536,
        height: 1024,
        alt: 'Timemac Digital — Your work. A wider world.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timemac Digital — Your work. A wider world.',
    description:
      'Healthcare-first digital marketing for Udupi, Manipal and Mangalore.',
    images: ['/og.png'],
  },
  description:
    'Healthcare-first digital marketing for Udupi, Manipal and Mangalore. Connect Google Ads, SEO, websites and CRM to build a better path from discovery to enquiry.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        {/* oxlint-disable-next-line nextjs/next-script-for-ga -- Keep GTM in the initial head. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M6ZGZN33');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link
          rel="preload"
          href="/fonts/archivo.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/bodoni-moda-italic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6ZGZN33"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
