import type { Metadata } from 'next';
import { Anton, Montserrat, Six_Caps } from 'next/font/google';
import { TopMenu } from '@/components/menu/top-menu.component';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton has only one weight (400)
  variable: '--font-anton', // Custom CSS variable
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Load specific weights
  variable: '--font-montserrat',
});

const sixCaps = Six_Caps({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-six-caps',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elgcchurch.org'), // change to your domain

  title: {
    default: "Emmanuel's Living Gospel Church | Caloocan City, Metro Manila",
    template: '%s | ELGC Church',
  },

  description:
    "Emmanuel's Living Gospel Church is a Full Gospel, Bible-believing Christian community in Caloocan City, Metro Manila. Come join our worship services and youth ministries.",

  keywords: [
    'Emmanuel’s Living Gospel Church',
    'ELGC church',
    'church in Caloocan',
    'Christian church Caloocan',
    'Bible believing church Metro Manila',
    'evangelical church Philippines',
    'youth church Caloocan',
  ],

  openGraph: {
    title: "Emmanuel's Living Gospel Church",
    description:
      'Join us for worship, discipleship, and fellowship in Caloocan City, Metro Manila.',
    url: 'https://elgcchurch.org',
    siteName: 'ELGC Church',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/img/elgc.png',
        width: 1200,
        height: 630,
        alt: "Emmanuel's Living Gospel Church",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Emmanuel's Living Gospel Church",
    description: 'A Bible-believing church in Caloocan City, Metro Manila.',
    images: ['/img/elgc.png'],
  },

  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
    other: [
      { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PH">
      <body
        suppressHydrationWarning
        className={`${anton.variable} ${montserrat.variable} ${sixCaps.variable} antialiased`}
      >
        <TopMenu />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Church',
              name: "Emmanuel's Living Gospel Church",
              url: 'https://elgcchurch.org',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Caloocan City',
                addressRegion: 'Metro Manila',
                addressCountry: 'Philippines',
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
