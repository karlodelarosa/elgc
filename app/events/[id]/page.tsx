import { EventDetailPage } from '.';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ALAB: Illuminate | ELGC Church',
  description:
    "ALAB: Illuminate is a fundraising event supporting Family Day participants and church renovation at Emmanuel's Living Gospel Church.",

  openGraph: {
    title: 'ALAB: Illuminate',
    description: 'Fundraising event supporting Family Day participants and church renovation.',
    url: 'https://elgchurch.com/events/alab-illuminate',
    siteName: "Emmanuel's Living Gospel Church",
    images: [
      {
        url: 'https://elgchurch.com/img/alab-tix.jpeg',
        width: 1200,
        height: 630,
        alt: 'ALAB: Illuminate Event',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ALAB: Illuminate',
    description: 'Fundraising event supporting Family Day participants and church renovation.',
    images: ['https://elgchurch.com/img/alab-tix.jpeg'],
  },
};

export default function AlabEventPage() {
  return <EventDetailPage />;
}
