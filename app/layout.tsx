import type { Metadata } from 'next';
import { siteOrigin } from '@/lib/site';
import './globals.css';
import { Header, Footer } from '@/components/site/shell';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: 'Timemac Digital — Local roots. Remarkable growth.',
    template: '%s | Timemac Digital',
  },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: 'Timemac Digital',
    title: 'Timemac Digital — Local roots. Remarkable growth.',
    description:
      'Healthcare-first digital marketing for Udupi, Manipal and Mangalore.',
    images: [
      {
        url: '/og.png',
        width: 1536,
        height: 1024,
        alt: 'Timemac Digital — Local roots. Remarkable growth.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timemac Digital — Local roots. Remarkable growth.',
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
        <link
          rel="preload"
          href="/fonts/manrope.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/dm-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
