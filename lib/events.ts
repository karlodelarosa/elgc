export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;

  content: {
    intro: string;
    theme?: string;
    themeVerse?: string;
    verseReference?: string;
    who?: string;
    where?: string;
    when?: string;
    body?: string;
  };
};

export const events: Event[] = [
  {
    id: 'alab-illuminate',
    title: 'ALAB: Illuminate',
    date: 'April 10, 2026',
    time: '6:30 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Youth event',
    image: '/img/alab-poster.png',

    content: {
      intro:
        'A powerful night of worship, creative arts, and gospel-centered messages designed to ignite and strengthen the next generation.',
      body: 'Join us as we encounter God through worship and creative expression, believing for transformation and revival among the youth.',
    },
  },

  {
    id: 'dvbs',
    title: 'DVBS (Daily Vacation Bible School)',
    date: 'May 6 - May 9, 2026',
    time: '9:00 AM - 12:00 PM',
    location: 'ELGC Barracks',
    category: 'Kids ministry',
    image: '/img/dvbs2026.jpg',

    content: {
      intro:
        'Get ready for an exciting adventure this summer as we explore the greatest treasure of all—the riches of Christ! 🗺️✨',

      theme: 'Treasure Hunt (Seeking the Riches of Christ)',

      themeVerse: 'You will seek Me and find Me when you seek Me with all your heart.',
      verseReference: 'Jeremiah 29:13',

      who: 'Children ages 4–16 years old',
      where: 'ELGC Barracks',
      when: 'May 6, 7, 8, and 9, 2026',

      body: 'A fun-filled experience of Bible stories, games, songs, and activities that help children discover the true treasure found in Jesus. Bring your friends and classmates—everyone is welcome!',
    },
  },

  {
    id: 'prayer-fasting-family-day',
    title: 'Prayer and Fasting for Family Day',
    date: 'May 27, 2026',
    time: '7:00 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Prayer gathering',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'A dedicated evening of prayer and fasting as we seek God together and prepare our hearts for Family Day.',
      body: 'We gather as one church to pray, fast, and align our hearts for what God will do in our upcoming Family Day celebration.',
    },
  },

  {
    id: 'family-day',
    title: 'Family Day',
    date: 'June 13, 2026',
    time: '10:00 AM',
    location: 'Infanta, Quezon',
    category: 'Church-wide',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'A joyful church celebration bringing families together through fellowship, food, worship, and meaningful connection.',
      body: 'A special day designed to strengthen families, build relationships, and celebrate God’s faithfulness as one church family.',
    },
  },

  {
    id: 'teachers-training-2',
    title: "Teacher's Training 2",
    date: 'July 26, 2026',
    time: '9:00 AM',
    location: 'ELGC Training Room',
    category: 'Leaders development',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'An equipping session designed to strengthen teachers and ministry workers in effective teaching and discipleship.',
      body: 'This training focuses on practical tools, spiritual growth, and leadership development for church teachers.',
    },
  },

  {
    id: 'technical-training',
    title: 'Technical Training',
    date: 'August 8, 2026',
    time: '1:00 PM',
    location: 'ELGC Media Booth',
    category: 'Skills training',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'Hands-on training for sound, media, livestream, and production teams to serve excellence in ministry.',
      body: 'We aim to equip our technical team with skills and heart to serve God with excellence in every service.',
    },
  },

  {
    id: 'buwan-ng-wika',
    title: 'Buwan ng Wika',
    date: 'August 29, 2026',
    time: '4:00 PM',
    location: 'ELGC Fellowship Grounds',
    category: 'Church-wide',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'A cultural celebration highlighting Filipino language, creativity, performances, and church fellowship.',
      body: 'A joyful event that celebrates Filipino culture while building unity and fellowship within the church.',
    },
  },

  {
    id: 'youth-anniversary',
    title: 'Youth Anniversary',
    date: 'September 10, 2026',
    time: '6:00 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Youth event',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'A celebration of God’s faithfulness in the youth ministry through worship, testimonies, and thanksgiving.',
      body: 'We celebrate lives transformed and God’s continued work among the youth generation.',
    },
  },

  {
    id: 'march-for-jesus',
    title: 'March for Jesus',
    date: 'September 26, 2026',
    time: '8:00 AM',
    location: 'City Proper Route',
    category: 'Community outreach',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'A united public expression of faith through prayer, worship, and declaration of Jesus over the city.',
      body: 'We take our faith outside the church walls to proclaim Jesus over our community.',
    },
  },

  {
    id: 'crusade',
    title: 'Crusade',
    date: 'October 10, 2026',
    time: '5:30 PM',
    location: 'Open Grounds',
    category: 'Evangelism',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'An evangelistic gathering featuring worship, gospel preaching, and prayer for salvation and breakthrough.',
      body: 'A night dedicated to sharing the gospel and praying for lives to be transformed by Jesus.',
    },
  },

  {
    id: 'workers-fellowship',
    title: 'Workers Fellowship',
    date: 'October 31, 2026',
    time: '2:00 PM',
    location: 'ELGC Fellowship Hall',
    category: 'Church workers',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'A time of encouragement, alignment, and gratitude for all ministry workers serving in the church.',
      body: 'We honor and strengthen our workers through fellowship and appreciation.',
    },
  },

  {
    id: 'christmas-service',
    title: 'Christmas Service',
    date: 'December 20, 2026',
    time: '9:00 AM',
    location: 'ELGC Main Sanctuary',
    category: 'Church-wide',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'A special Christmas celebration centered on worship, gratitude, and the joy of Christ’s birth.',
      body: 'We gather to celebrate Jesus—the true reason for the season.',
    },
  },

  {
    id: 'prayer-night',
    title: 'Prayer and Worship Night',
    date: 'Every last Friday of the month',
    time: '7:00 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Prayer gathering',
    image:
      'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',

    content: {
      intro:
        'An intimate night of prayer, worship, and intercession as the church gathers to seek God together.',
      body: 'We pursue God together in worship, prayer, and surrender.',
    },
  },
];
