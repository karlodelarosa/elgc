import DevotionalPage from ".";

export const metadata = {
  title: "Daily Devotional",
  description:
    "Start your day with a powerful devotional, scripture, and reflection to grow your faith.",

  openGraph: {
    title: "Daily Devotional",
    description:
      "Start your day with a powerful devotional, scripture, and reflection to grow your faith.",
    images: [
      {
        url: "/img/devotional-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Daily Devotional",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Daily Devotional",
    description:
      "Start your day with a powerful devotional, scripture, and reflection to grow your faith.",
    images: ["/img/devotional-thumbnail.jpg"],
  },
};

export default function Page() {
  return <DevotionalPage />;
}