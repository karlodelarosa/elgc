import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { events } from '@/lib/events';
import { EventDetailPage } from '.';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const event = events.find((e) => e.id === id);

  if (!event) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://elgchurch.com';

  const imageUrl = event.image.startsWith('http') ? event.image : `${baseUrl}${event.image}`;

  return {
    title: `${event.title} | ELGC Church`,
    description: event.content.intro,

    openGraph: {
      title: event.title,
      description: event.content.intro,
      url: `${baseUrl}/events/${event.id}`,
      siteName: "Emmanuel's Living Gospel Church",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.content.intro,
      images: [imageUrl],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const event = events.find((e) => e.id === id);

  if (!event) notFound();

  return <EventDetailPage event={event} />;
}
