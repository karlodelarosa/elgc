type BibleBook = {
  title: string;
  testament: 'Old Testament' | 'New Testament';
  category: string;
  lens: string;
  description: string;
  readingExperience: {
    immersion: string;
    question: string;
    readingGuide: {
      mindset: string;
      approach: string;
      focus: string;
    };
    commonMistakes: string[];
  };
};

export const bibleBooks: BibleBook[] = [
  {
    title: 'Genesis',
    testament: 'Old Testament',
    category: 'Law',
    lens: 'Origin Story',
    description:
      'The foundational narrative of the cosmos, charting the movement from cosmic creation to the formation of a specific family chosen to bless a fractured world through a series of divine covenants.',
    readingExperience: {
      immersion:
        'You are standing at the threshold of time, watching order emerge from chaos and a promise take root in the soil of human failure.',
      question: 'Where do I see God bringing order and purpose out of chaos?',
      readingGuide: {
        mindset:
          'Think foundational — everything here explains origins, not isolated moral lessons.',
        approach: 'Read as one continuous narrative from creation to covenant formation.',
        focus: 'God’s character, creation order, human failure, and covenant promise.',
      },
      commonMistakes: [
        'Treating stories as isolated moral lessons',
        'Missing the covenant progression',
        'Focusing on characters instead of God’s overarching plan',
      ],
    },
  },
  {
    title: 'Exodus',
    testament: 'Old Testament',
    category: 'Law',
    lens: 'Freedom Epic',
    description:
      'A dramatic account of liberation from systemic oppression, the establishment of divine law at a mountain, and the construction of a mobile sanctuary where God dwells among His people.',
    readingExperience: {
      immersion:
        'You are walking through parted seas and trembling at the base of a smoking mountain where the Creator speaks in thunder.',
      question: 'How does God’s rescue lead to a new way of living in community?',
      readingGuide: {
        mindset:
          'View this as a journey from slavery to service, where law is the framework for a new identity.',
        approach:
          'Trace the movement from the brickyards of Egypt to the glory filling the Tabernacle.',
        focus: 'The Name of Yahweh, the mechanics of redemption, and the purpose of the Law.',
      },
      commonMistakes: [
        'Viewing the laws as burdens rather than a gift of identity',
        'Skipping the detailed tabernacle instructions',
        'Ignoring the tension between God’s holiness and Israel’s rebellion',
      ],
    },
  },
  {
    title: 'Leviticus',
    testament: 'Old Testament',
    category: 'Law',
    lens: 'Holiness Handbook',
    description:
      'A technical but profound manual for a community living in the direct presence of a holy God, detailing sacrifices, rituals, and purity laws that define sacred space.',
    readingExperience: {
      immersion:
        'You are entering the inner courts of the sanctuary, where every ritual act is a physical parable of atonement and purity.',
      question: 'What does it cost for a flawed person to dwell near a perfect God?',
      readingGuide: {
        mindset:
          'Adopt a cultural anthropologist’s lens to see how physical symbols represent spiritual realities.',
        approach:
          'Look for the logic of the sacrificial system and how it addresses the problem of sin.',
        focus:
          'The concept of "Kadosh" (Holy), the role of the mediator, and the Day of Atonement.',
      },
      commonMistakes: [
        'Getting lost in technical details without seeking the underlying principles',
        'Dismissing the rituals as primitive or irrelevant',
        'Missing the connection between ritual purity and ethical behavior',
      ],
    },
  },
  {
    title: 'Numbers',
    testament: 'Old Testament',
    category: 'Law',
    lens: 'Wilderness Journal',
    description:
      'A gritty narrative of a transitional generation wandering between what was and what will be, marked by counting, complaining, and the persistent faithfulness of God.',
    readingExperience: {
      immersion:
        'You are trekking through a harsh landscape where survival depends entirely on following a pillar of fire and cloud.',
      question: 'Will I trust God’s provision when the promise seems out of reach?',
      readingGuide: {
        mindset:
          'Expect a mix of census data and high-stakes drama that tests the limits of faith.',
        approach: 'Contrast the faithfulness of God with the persistent grumbling of the people.',
        focus: 'The geography of the soul in the wilderness and the consequences of unbelief.',
      },
      commonMistakes: [
        'Skipping the lists and genealogies which track God’s keeping of promises',
        'Overlooking the transition from the old generation to the new',
        'Ignoring the prophetic weight of Balaam’s oracles',
      ],
    },
  },
  {
    title: 'Deuteronomy',
    testament: 'Old Testament',
    category: 'Law',
    lens: 'Covenant Renewal',
    description:
      'A series of passionate farewell speeches by Moses, urging the new generation to choose life by loving God and keeping the heart of the law as they enter the land.',
    readingExperience: {
      immersion:
        'You are standing on the plains of Moab, listening to a dying leader pour his heart out to ensure his people remember their God.',
      question: 'How do I cultivate a heart that loves God rather than just following rules?',
      readingGuide: {
        mindset:
          'Read this as an urgent, affectionate exhortation rather than a dry legal contract.',
        approach: 'Look for the word "Today" and the emphasis on the heart and memory.',
        focus:
          'The Shema, the choice between blessing and curse, and the centralization of worship.',
      },
      commonMistakes: [
        'Reading it as a mere repetition of Exodus',
        'Failing to see the theological depth behind the social laws',
        'Missing the emphasis on internal motivation over external compliance',
      ],
    },
  },
  {
    title: 'Joshua',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Settlement Struggle',
    description:
      'The fast-paced account of Israel’s entrance into the promised land, focusing on military conquest, the distribution of territory, and the challenge of remaining faithful in a new home.',
    readingExperience: {
      immersion:
        'You are crossing a dry riverbed and hearing the walls of a fortified city crumble under the sound of a shout.',
      question: 'How do I maintain courage and obedience when facing formidable obstacles?',
      readingGuide: {
        mindset: 'View the land as a gift that requires active, faithful participation to inhabit.',
        approach:
          'Balance the swift military victories with the detailed boundary descriptions that confirm God’s land-promise.',
        focus: 'The faithfulness of God to His promises and the necessity of total devotion.',
      },
      commonMistakes: [
        'Reducing the book to a series of violent battles',
        'Ignoring the significance of the tribal allotments in the second half',
        'Missing the warnings about cultural compromise',
      ],
    },
  },
  {
    title: 'Judges',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Downward Spiral',
    description:
      'A dark and honest collection of stories about Israel’s repeated descent into chaos, rescued by flawed leaders, highlighting the desperate need for a righteous king.',
    readingExperience: {
      immersion:
        'You are witnessing a society disintegrate as people abandon their core identity for local idols and personal convenience.',
      question: 'What happens to a community when everyone does what is right in their own eyes?',
      readingGuide: {
        mindset:
          'Be prepared for graphic realism and characters who are more "anti-heroes" than role models.',
        approach:
          'Look for the repetitive cycle: sin, oppression, outcry, deliverance, and silence.',
        focus: 'The worsening nature of the cycles and the grace of God in choosing broken people.',
      },
      commonMistakes: [
        'Glorifying the "heroes" without acknowledging their deep moral flaws',
        'Missing the theological point that Israel is becoming like the Canaanites',
        'Treating the ending stories as random rather than the climax of the spiral',
      ],
    },
  },
  {
    title: 'Ruth',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Redemptive Kindness',
    description:
      'A short, beautiful narrative of loyalty and providence, showing how ordinary acts of kindness during a time of national chaos lead to the lineage of royalty.',
    readingExperience: {
      immersion:
        'You are walking through a golden barley field at harvest time, sensing hope bloom in the midst of grief.',
      question:
        'How does God work through "hidden" providence in the ordinary lives of the marginalized?',
      readingGuide: {
        mindset: 'Look for the "chesed" (loyal-kindness) that mirrors God’s own character.',
        approach: 'Observe the movement from emptiness and death to fullness and new life.',
        focus:
          'The concept of the kinsman-redeemer and the inclusion of an outsider in the family of God.',
      },
      commonMistakes: [
        'Seeing it only as a romantic love story',
        'Ignoring the legal and social significance of the threshing floor scene',
        'Missing its vital link between the period of Judges and the rise of David',
      ],
    },
  },
  {
    title: '1 Samuel',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Transition to Monarchy',
    description:
      'The story of Israel’s shift from local judges to a unified kingdom, focusing on the rise of the prophet Samuel, the failure of Saul, and the secret anointing of David.',
    readingExperience: {
      immersion:
        'You are in the king’s court, feeling the tension between human ambition and divine selection.',
      question: 'Does my heart look like the kind of heart God seeks for His service?',
      readingGuide: {
        mindset:
          'Compare and contrast the characters of Saul and David to understand godly leadership.',
        approach: 'Follow the movement of the Ark of the Covenant as a symbol of God’s presence.',
        focus:
          'The heart vs. outward appearance and the danger of demanding a king like the nations.',
      },
      commonMistakes: [
        'Making David a perfect hero instead of a complex, chosen man',
        'Missing the role of Samuel as the bridge between eras',
        'Viewing Saul’s downfall as arbitrary rather than a result of character',
      ],
    },
  },
  {
    title: '2 Samuel',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Davidic Dynasty',
    description:
      'A focused biography of King David’s reign, covering his triumphs in unifying Israel and the devastating personal and political fallout of his moral failures.',
    readingExperience: {
      immersion:
        'You are watching a great king climb to the heights of power only to see his family and kingdom fracture through his own choices.',
      question: 'How does God remain faithful to His covenant even when His chosen leader fails?',
      readingGuide: {
        mindset:
          'Examine the interplay between God’s unconditional promise and the consequences of human actions.',
        approach: 'Focus on the central covenant in chapter 7 as the anchor for the whole book.',
        focus: 'The establishment of Jerusalem, the Davidic Covenant, and the theme of repentance.',
      },
      commonMistakes: [
        'Separating David’s political success from his spiritual condition',
        'Ignoring the heavy price David’s family pays for his sin',
        'Missing the messianic hope established through the promise of an eternal throne',
      ],
    },
  },
  {
    title: '1 Kings',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Fractured Kingdom',
    description:
      'The record of Solomon’s wisdom and the building of the Temple, followed by the tragic division of the nation into two warring kingdoms and the rise of the prophets.',
    readingExperience: {
      immersion:
        'You are watching the gold of the temple give way to the gray of divided loyalties and the fire of Elijah’s confrontation.',
      question: 'What happens when a heart becomes divided between God and the world?',
      readingGuide: {
        mindset: 'Look for the prophetic critique of political power throughout the narrative.',
        approach:
          'Track the spiritual health of the kings based on their adherence to the Law of Moses.',
        focus: 'The Temple, the split into Israel and Judah, and the ministry of Elijah.',
      },
      commonMistakes: [
        'Getting confused by the overlapping timelines of the northern and southern kings',
        'Focusing only on the miracles and missing the political context',
        'Assuming Solomon’s wisdom guaranteed his faithfulness',
      ],
    },
  },
  {
    title: '2 Kings',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Path to Exile',
    description:
      'A somber account of the steady decline of the two kingdoms, the ministry of Elisha, and the eventual fall of both nations to foreign empires due to persistent idolatry.',
    readingExperience: {
      immersion:
        'You are standing on the walls of Jerusalem, watching the horizon for empires that are the instruments of divine judgment.',
      question:
        'How long will God’s patience endure before He allows the consequences of rebellion to strike?',
      readingGuide: {
        mindset: 'Read this as a theological explanation for why the people lost their land.',
        approach:
          'Contrast the occasional reforms of good kings with the steady idolatry of the majority.',
        focus: 'The authority of the prophetic word and the justice of the exile.',
      },
      commonMistakes: [
        'Viewing the fall of Jerusalem as a failure of God rather than a fulfillment of His word',
        'Confusing the various kings without noting their specific spiritual evaluations',
        'Missing the small glimmers of hope in the closing verses',
      ],
    },
  },
  {
    title: '1 Chronicles',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Sacred Heritage',
    description:
      'A priestly retelling of Israel’s history, beginning with genealogies and focusing almost exclusively on David’s preparations for the Temple and the organized worship of God.',
    readingExperience: {
      immersion:
        'You are looking through a massive family scrapbook designed to remind a returning people of their true identity.',
      question: 'Who are we, and how does our history define our future with God?',
      readingGuide: {
        mindset:
          'See the genealogies as a way of saying "you belong" to the post-exilic community.',
        approach: 'Compare this "idealized" version of David to the gritty details in 2 Samuel.',
        focus: 'The continuity of the Davidic line and the central importance of the Temple.',
      },
      commonMistakes: [
        'Skimming the genealogies and missing the "nuggets" of story within them',
        'Dismissing it as a mere repeat of Samuel/Kings',
        'Ignoring the emphasis on the role of the Levites and singers',
      ],
    },
  },
  {
    title: '2 Chronicles',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Focus on Reform',
    description:
      'A history of the southern kingdom of Judah, highlighting the kings who sought reform and the power of prayer and repentance in the life of the nation.',
    readingExperience: {
      immersion:
        'You are witnessing the ebb and flow of spiritual revival as kings struggle to bring the people back to the heart of worship.',
      question:
        'What is the relationship between a leader’s heart and the spiritual health of a nation?',
      readingGuide: {
        mindset:
          'Focus on the "reformers" like Hezekiah and Josiah as blueprints for spiritual renewal.',
        approach: 'Look for the theme of "seeking the Lord" as the key to success or failure.',
        focus:
          'The Temple as the center of national life and the invitation to humble oneself and pray.',
      },
      commonMistakes: [
        'Overlooking the northern kingdom (which the author purposefully excludes)',
        'Treating the accounts as purely political rather than theological',
        'Missing the book’s hopeful ending with the decree of Cyrus',
      ],
    },
  },
  {
    title: 'Ezra',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Rebuilding Identity',
    description:
      'The story of the first waves of exiles returning to Jerusalem to rebuild the Temple and restore the community’s commitment to the Word of God under Persian rule.',
    readingExperience: {
      immersion:
        'You are sorting through rubble and ancient scrolls, trying to piece together a holy life in a ruined city.',
      question: 'How do we rebuild our spiritual lives when everything has been torn down?',
      readingGuide: {
        mindset:
          'Think about the tension between political submission to Persia and spiritual devotion to Yahweh.',
        approach:
          'Note the parallel between the rebuilding of the altar/temple and the rebuilding of the people’s hearts.',
        focus: 'The sovereignty of God over foreign kings and the importance of the Torah.',
      },
      commonMistakes: [
        'Missing the decades-long gap between chapters 6 and 7',
        'Separating the physical building from the spiritual teaching',
        'Judging the harsh ending without understanding the fear of cultural assimilation',
      ],
    },
  },
  {
    title: 'Nehemiah',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Wall of Protection',
    description:
      'A memoir of leadership and prayer following Nehemiah’s quest to rebuild the walls of Jerusalem and establish social justice among the returned exiles.',
    readingExperience: {
      immersion:
        'You are holding a trowel in one hand and a sword in the other, working against opposition to secure your community.',
      question: 'How do I balance practical action with persistent prayer?',
      readingGuide: {
        mindset: 'Study Nehemiah’s leadership—his prayer life, his planning, and his courage.',
        approach:
          'Notice how the wall is a physical boundary that reflects the need for spiritual boundaries.',
        focus: 'The integration of spiritual zeal with administrative excellence.',
      },
      commonMistakes: [
        'Reading it only as a manual for secular leadership',
        'Ignoring the internal social conflicts Nehemiah had to resolve',
        'Missing the joint effort between Nehemiah and Ezra the scribe',
      ],
    },
  },
  {
    title: 'Esther',
    testament: 'Old Testament',
    category: 'History',
    lens: 'Hidden Providence',
    description:
      'A high-stakes political thriller set in the Persian capital where a Jewish queen risks everything to save her people from a genocidal plot.',
    readingExperience: {
      immersion:
        'You are navigating the dangerous luxury of the Persian court, where a single decree can mean life or death.',
      question: 'Where is God working when He seems to be silent or absent?',
      readingGuide: {
        mindset:
          'Look for the "coincidences" that reveal God’s hand, even though His name is never mentioned.',
        approach:
          'Pay attention to the reversals of fortune—the "peripeteia"—where the predator becomes the prey.',
        focus: 'The concept of "for such a time as this" and the origins of the Feast of Purim.',
      },
      commonMistakes: [
        'Waiting for a miracle instead of seeing God in the timing of events',
        'Moralizing Esther or Mordecai into perfect saints',
        'Ignoring the historical reality of the Jewish diaspora',
      ],
    },
  },
  {
    title: 'Job',
    testament: 'Old Testament',
    category: 'Wisdom',
    lens: 'Suffering & Sovereignty',
    description:
      'A profound poetic exploration of human suffering that challenges the simple idea that good things always happen to good people, culminating in a direct encounter with the Creator.',
    readingExperience: {
      immersion:
        'You are sitting in the ashes with a broken man, listening to a high-stakes debate between human logic and divine mystery.',
      question:
        'Can I trust God’s character when my circumstances seem to contradict His goodness?',
      readingGuide: {
        mindset:
          'Prepare for discomfort; this book deconstructs easy answers and demands honesty about pain.',
        approach:
          'Distinguish between the flawed arguments of Job’s friends and God’s final response.',
        focus: 'The limits of human wisdom and the vastness of God’s cosmic perspective.',
      },
      commonMistakes: [
        'Taking the friends’ advice as divine truth',
        'Expecting a logical explanation for why Job suffered',
        'Assuming Job’s anger at God was sinful',
      ],
    },
  },
  {
    title: 'Psalms',
    testament: 'Old Testament',
    category: 'Poetry',
    lens: 'Worship & Emotion',
    description:
      'A vast collection of ancient songs and prayers that give voice to every human emotion—from ecstatic praise to deep despair—directed toward the living God.',
    readingExperience: {
      immersion:
        'You are entering a sanctuary where every heartbeat is translated into a song, and every cry is heard by the King.',
      question: 'How do I bring my rawest emotions into the presence of God?',
      readingGuide: {
        mindset: 'Treat these as prayers to be prayed, not just poems to be analyzed.',
        approach: 'Identify the genre of the psalm—is it lament, thanksgiving, or royal praise?',
        focus: 'The honest relationship between the "I" of the psalmist and the "You" of God.',
      },
      commonMistakes: [
        'Reading them as theological textbooks rather than emotional expressions',
        'Ignoring the historical context of the Davidic kingship',
        'Skipping the difficult "imprecatory" psalms that express anger',
      ],
    },
  },
  {
    title: 'Proverbs',
    testament: 'Old Testament',
    category: 'Wisdom',
    lens: 'Practical Skill',
    description:
      'A collection of pithy observations and instructions designed to cultivate "wisdom"—the practical skill of living well in God’s world according to His created order.',
    readingExperience: {
      immersion:
        'You are sitting at the feet of a sage, learning to navigate the complexities of money, speech, work, and relationships.',
      question: 'What does it look like to align my daily choices with the wisdom of the Creator?',
      readingGuide: {
        mindset:
          'Understand that these are probabilities and general principles, not absolute guarantees or promises.',
        approach: 'Look for the contrast between the "way of wisdom" and the "way of folly."',
        focus: 'The "Fear of the Lord" as the starting point for all true knowledge.',
      },
      commonMistakes: [
        'Treating proverbs as "legal promises" that God must fulfill',
        'Reading them in isolation without the balance of Job and Ecclesiastes',
        'Missing the personification of Wisdom as a lady calling out to the city',
      ],
    },
  },
  {
    title: 'Ecclesiastes',
    testament: 'Old Testament',
    category: 'Wisdom',
    lens: 'Existential Honest',
    description:
      'A hauntingly modern reflection on the fleeting nature of life, the inevitability of death, and the search for meaning in a world that often feels like "smoke."',
    readingExperience: {
      immersion:
        'You are walking through a misty garden with a cynical but wise teacher who is stripping away all your illusions.',
      question: 'How do I find joy in the present moment when I cannot control the future?',
      readingGuide: {
        mindset:
          'Embrace the tension; the author is purposefully pushing you to see the "vanity" of life apart from God.',
        approach:
          'Watch for the recurring phrase "under the sun" to understand the perspective being explored.',
        focus:
          'The repetitive cycles of life and the final conclusion to fear God and keep His commands.',
      },
      commonMistakes: [
        'Viewing the book as purely depressing or nihilistic',
        'Assuming the author doesn’t believe in God’s judgment',
        'Missing the subtle calls to enjoy the simple gifts of food, work, and companionship',
      ],
    },
  },
  {
    title: 'Song of Solomon',
    testament: 'Old Testament',
    category: 'Poetry',
    lens: 'Covenant Desire',
    description:
      'A bold and beautiful celebration of romantic love and physical desire, acting as a poetic testament to the goodness of human intimacy within the covenant.',
    readingExperience: {
      immersion:
        'You are overhearing a private, lyrical conversation between lovers that radiates with the heat of total devotion.',
      question:
        'How does the beauty of human love reflect the intensity of God’s love for His people?',
      readingGuide: {
        mindset:
          'Appreciate the book as a literal celebration of love while acknowledging its place in the greater biblical story.',
        approach: 'Follow the ebb and flow of seeking and finding between the two central figures.',
        focus: 'The power of exclusive, committed love and the metaphorical "garden" imagery.',
      },
      commonMistakes: [
        'Over-allegorizing every detail to avoid the physical reality of the text',
        'Reading it with a sense of embarrassment or shame',
        'Ignoring the structure of the dialogue between the bride, groom, and friends',
      ],
    },
  },
  {
    title: 'Isaiah',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Messianic Vision',
    description:
      'A monumental prophetic work that confronts national sin while offering a stunning vision of a future "Suffering Servant" who will bring peace to the nations.',
    readingExperience: {
      immersion:
        'You are in the throne room of the Holy One, seeing the smoke of judgment clear to reveal a new heaven and a new earth.',
      question: 'How can a holy God deal with human rebellion without destroying the rebel?',
      readingGuide: {
        mindset:
          'Prepare for a grand scale—this book spans the judgment of empires and the renewal of the entire cosmos.',
        approach:
          'Look for the transition from the "Holy One of Israel" as judge to the "Servant" as redeemer.',
        focus: 'The themes of trust, the remnant, and the coming King from the line of Jesse.',
      },
      commonMistakes: [
        'Skipping the judgment oracles to get to the "famous" verses',
        'Ignoring the historical context of the Assyrian and Babylonian threats',
        'Failing to see the unity of the book’s message across its 66 chapters',
      ],
    },
  },
  {
    title: 'Jeremiah',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Broken Heart',
    description:
      'The raw, emotional account of a prophet called to announce the fall of Jerusalem, weeping over his people’s stubbornness while promising a future "New Covenant."',
    readingExperience: {
      immersion:
        'You are standing in a city under siege, feeling the weight of a message that no one wants to hear but must be spoken.',
      question:
        'What does it look like to remain faithful to God when the world around me is falling apart?',
      readingGuide: {
        mindset: 'Expect heavy emotion and personal struggle from the prophet himself.',
        approach: 'Trace the imagery of the "shattered jar" and the "law written on the heart."',
        focus:
          'The inevitability of judgment and the hope of an internal, spiritual transformation.',
      },
      commonMistakes: [
        'Viewing Jeremiah as a "doom-and-gloom" prophet without seeing his hope',
        'Confusing the chronological order of the chapters (which is non-linear)',
        'Missing the significance of the "New Covenant" promise in chapter 31',
      ],
    },
  },
  {
    title: 'Lamentations',
    testament: 'Old Testament',
    category: 'Poetry',
    lens: 'Grief Process',
    description:
      'A carefully structured series of five acrostic poems that provide a liturgical space for expressing the trauma and sorrow of Jerusalem’s destruction.',
    readingExperience: {
      immersion:
        'You are sitting in the silence of a ruined city, letting the tears fall as you look for a single ray of mercy in the darkness.',
      question: 'How do I talk to God when I have lost everything?',
      readingGuide: {
        mindset:
          'Read this as a funeral dirge that honors the reality of pain rather than rushing to a happy ending.',
        approach:
          'Notice how the middle poem (Chapter 3) serves as the theological anchor of hope.',
        focus: 'The tension between God’s righteous anger and His steadfast love (hesed).',
      },
      commonMistakes: [
        'Trying to "fix" the grief before the book is finished',
        'Assuming the author is complaining unfairly against God',
        'Ignoring the meticulous acrostic structure that brings order to the chaos of emotion',
      ],
    },
  },
  {
    title: 'Ezekiel',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'God’s Glory',
    description:
      'A series of bizarre and powerful visions from a priest-prophet in exile, depicting the departure of God’s glory from the temple and its eventual return to a transformed land.',
    readingExperience: {
      immersion:
        'You are by a river in Babylon, seeing wheels of fire and a valley of dry bones coming back to life.',
      question: 'Is any situation too dead or desolate for God’s Spirit to bring new life?',
      readingGuide: {
        mindset:
          'Be ready for symbolic "sign-acts" and apocalyptic imagery that challenge the imagination.',
        approach:
          'Follow the movement of the "Glory of the Lord"—from the Temple, to the exiles, to the new city.',
        focus:
          'God’s holiness, the individual responsibility for sin, and the gift of a "new heart."',
      },
      commonMistakes: [
        'Getting bogged down in the measurements of the final temple vision',
        'Interpreting the bizarre imagery as literal modern technology',
        'Missing the emphasis that all of this happens so that "they will know that I am the Lord"',
      ],
    },
  },
  {
    title: 'Daniel',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Kingdom Conflict',
    description:
      'A blend of court narratives and apocalyptic visions showing that God is the true King over all human empires, even when His people are in exile.',
    readingExperience: {
      immersion:
        'You are in a den of lions and a furnace of fire, seeing the "Son of Man" receiving an eternal kingdom.',
      question: 'How do I live as a citizen of heaven while serving in the kingdoms of men?',
      readingGuide: {
        mindset:
          'Look for the theme of "uncompromising faithfulness" in the first half and "divine sovereignty" in the second.',
        approach:
          'Note the transition from personal stories (Chapters 1-6) to cosmic visions (Chapters 7-12).',
        focus: 'The rise and fall of nations under the ultimate authority of the Most High.',
      },
      commonMistakes: [
        'Treating it only as a book of children’s stories',
        'Over-focusing on identifying specific modern nations in the prophecies',
        'Missing the central figure of the "Son of Man" in chapter 7',
      ],
    },
  },
  {
    title: 'Hosea',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Unfaithful Spouse',
    description:
      'A prophetic drama where the prophet’s own tragic marriage to an unfaithful wife becomes a living metaphor for God’s relationship with Israel.',
    readingExperience: {
      immersion:
        'You are feeling the heartbreak of a betrayed husband who refuses to give up on his wandering wife.',
      question: 'How deep does God’s "pursuing love" go when we turn away from Him?',
      readingGuide: {
        mindset: 'See the "jealousy" of God as a sign of His intense commitment, not pettiness.',
        approach:
          'Compare the marital imagery with the political and religious failures of the northern kingdom.',
        focus: 'The "knowledge of God" vs. mere ritual, and the promise of restoration.',
      },
      commonMistakes: [
        'Judging Hosea’s marriage by modern standards instead of its prophetic purpose',
        'Focusing on the adultery and missing the political "harlotry" with other nations',
        'Ignoring the beautiful poetic passages of God’s fatherly affection in chapter 11',
      ],
    },
  },
  {
    title: 'Joel',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'The Day of the Lord',
    description:
      'A brief, intense warning using a devastating locust plague as a sign of the coming "Day of the Lord," calling the people to corporate repentance.',
    readingExperience: {
      immersion:
        'You are watching the sky darken with insects and realization, hearing the call to "rend your hearts and not your garments."',
      question: 'What does true, heartfelt repentance look like for a community?',
      readingGuide: {
        mindset:
          'Understand the "Day of the Lord" as a concept that includes both judgment and subsequent blessing.',
        approach:
          'Watch the pivot from the current disaster to the future outpouring of the Spirit.',
        focus: 'The urgency of the moment and the promise of God dwelling with His people.',
      },
      commonMistakes: [
        'Reading the locusts only as a past event without seeing the future warning',
        'Missing the connection to the Day of Pentecost in the New Testament',
        'Failing to see the global scope of the final judgment of the nations',
      ],
    },
  },
  {
    title: 'Amos',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Social Justice',
    description:
      'A searing critique from a shepherd-prophet against the wealthy who oppress the poor while maintaining a veneer of religious piety.',
    readingExperience: {
      immersion:
        'You are hearing a lion roar from the desert, stripping away the comfort of those who trample the needy.',
      question: 'Does my worship of God result in justice for the vulnerable?',
      readingGuide: {
        mindset:
          'Be prepared for a "non-professional" prophet who speaks blunt, uncomfortable truths.',
        approach:
          'Observe the "plumb line" imagery used to measure the moral uprightness of Israel.',
        focus: 'The inseparable link between religious devotion and ethical treatment of others.',
      },
      commonMistakes: [
        'Separating the "spiritual" from the "social" messages',
        'Thinking Amos is only talking to "bad" people outside the church',
        'Missing the small but vital promise of the "restoration of David’s tent" at the end',
      ],
    },
  },
  {
    title: 'Obadiah',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Brother’s Keeper',
    description:
      'The shortest book in the Old Testament, delivering a sharp judgment against Edom for their pride and their betrayal of their "brother" Israel.',
    readingExperience: {
      immersion:
        'You are looking up at high mountain fortresses, realizing that no prideful height is out of God’s reach.',
      question: 'How does God view those who stand by and do nothing while others suffer?',
      readingGuide: {
        mindset: 'Understand the ancient rivalry between Jacob (Israel) and Esau (Edom).',
        approach:
          'Look for the theme of "lex talionis"—what you have done to others will be done to you.',
        focus: 'The danger of pride and the eventual triumph of God’s kingdom.',
      },
      commonMistakes: [
        'Dismissing it as irrelevant because of its focus on an extinct nation',
        'Missing the poetic justice in the "reversal of fortunes" described',
        'Ignoring its place in the wider story of Israel’s restoration',
      ],
    },
  },
  {
    title: 'Jonah',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Reluctant Missionary',
    description:
      'A satirical and profound narrative about a prophet who runs from God’s mercy because he wants his enemies to be destroyed rather than forgiven.',
    readingExperience: {
      immersion:
        'You are in the belly of a fish and the shadow of a withered plant, seeing your own prejudices reflected in a grumpy prophet.',
      question: 'Am I more concerned with my own comfort than with God’s compassion for the world?',
      readingGuide: {
        mindset:
          'Focus less on the fish and more on the character of the prophet vs. the character of God.',
        approach:
          'Pay attention to the questions God asks Jonah—they are meant for the reader too.',
        focus: 'The shocking scope of God’s mercy toward even the "worst" of people.',
      },
      commonMistakes: [
        'Treating it only as a "whale story" for kids',
        'Thinking Jonah is a hero to be emulated',
        'Missing the irony that the "pagans" in the story respond to God better than the prophet',
      ],
    },
  },
  {
    title: 'Micah',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Judgment & Hope',
    description:
      'A balanced prophetic message that indicts corrupt leaders and promises a future Ruler from Bethlehem who will shepherd His people in peace.',
    readingExperience: {
      immersion:
        'You are hearing the courtroom case God has against His people, ending in a promise of total forgiveness.',
      question: 'What does the Lord actually require of me?',
      readingGuide: {
        mindset:
          'Look for the oscillation between the "bad news" of judgment and the "good news" of the coming King.',
        approach: 'Memorize the summary of true religion in 6:8 as a guide for the whole book.',
        focus:
          'Social justice, the promise of the Messiah, and the character of a God who pardons sin.',
      },
      commonMistakes: [
        'Isolating Micah 6:8 from the specific historical sins he is addressing',
        'Overlooking the "shepherd-king" imagery that points to Christ',
        'Missing the global vision of the nations streaming to the mountain of the Lord',
      ],
    },
  },
  {
    title: 'Nahum',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Fallen Empire',
    description:
      'A fierce poetic celebration of the fall of Nineveh, the capital of the brutal Assyrian Empire, declaring that God’s justice will eventually reach every oppressor.',
    readingExperience: {
      immersion:
        'You are watching a seemingly invincible empire crumble, feeling the relief of those who have been crushed by its boots.',
      question: 'Is God truly good when He acts in violent judgment against the wicked?',
      readingGuide: {
        mindset:
          'View this as "resistance literature" for a people who have been terrorized by a superpower.',
        approach:
          'Contrast the "bad news" for Nineveh with the "good news" for those who trust in God.',
        focus:
          'The sovereignty of God over the world’s superpowers and His role as a stronghold in trouble.',
      },
      commonMistakes: [
        'Judging the book’s tone as "un-Christian" without understanding Assyria’s extreme cruelty',
        'Confusing this with the book of Jonah (which is the "other half" of Nineveh’s story)',
        'Missing the description of God’s character in the opening chapter',
      ],
    },
  },
  {
    title: 'Habakkuk',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Wrestling with God',
    description:
      'A unique dialogue between a questioning prophet and God, exploring why evil seems to go unpunished and how to live by faith in the meantime.',
    readingExperience: {
      immersion:
        'You are standing on a watchtower, waiting for an answer to the hard questions about justice and suffering.',
      question: 'How do I live faithfully when I don’t understand what God is doing?',
      readingGuide: {
        mindset: 'Read this as a journey from "Why, Lord?" to "I will rejoice in the Lord."',
        approach:
          'Follow the movement from Habakkuk’s complaint to God’s response, ending in a song of trust.',
        focus: 'The famous declaration that "the righteous shall live by his faith."',
      },
      commonMistakes: [
        'Thinking that questioning God is a sign of a lack of faith',
        'Assuming God’s answer will always be what we want to hear',
        'Skipping the final prayer/song which is the necessary climax of the book',
      ],
    },
  },
  {
    title: 'Zephaniah',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'The Great Clearing',
    description:
      'A short, intense vision of a "cosmic de-creation" followed by a tender promise of God singing over a purified remnant of His people.',
    readingExperience: {
      immersion:
        'You are watching the world being swept clean of idolatry, only to find yourself held in the arms of a singing God.',
      question: 'What needs to be cleared out of my life so that I can hear God’s song?',
      readingGuide: {
        mindset:
          'Be prepared for the "Day of the Lord" to be described in its most terrifying and thorough terms.',
        approach:
          'Observe the narrowing focus: from the whole earth, to the nations, to Jerusalem, to the remnant.',
        focus: 'The purification of the people and the joy of God’s presence.',
      },
      commonMistakes: [
        'Focusing so much on the "fire" of judgment that you miss the "singing" of the end',
        'Thinking the "remnant" is based on merit rather than humility',
        'Missing the inclusion of the nations in the final restoration',
      ],
    },
  },
  {
    title: 'Haggai',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Priority Check',
    description:
      'A direct, challenging call to the returned exiles to stop prioritizing their own luxury and finish rebuilding the Temple of the Lord.',
    readingExperience: {
      immersion:
        'You are looking at your paneled house while the house of God lies in ruins, hearing the command to "consider your ways."',
      question: 'Is God at the center of my priorities, or just an addition to my life?',
      readingGuide: {
        mindset: 'Look for the practical connection between spiritual neglect and material "lack."',
        approach:
          'Note the specific dates and the immediate response of the people (unusual for a prophet!).',
        focus: 'The promise that the "greater glory" is still to come.',
      },
      commonMistakes: [
        'Reading this as a guilt-trip rather than an invitation to blessing',
        'Missing the messianic promise to Zerubbabel at the end',
        'Focusing only on the physical building instead of the spiritual presence it represents',
      ],
    },
  },
  {
    title: 'Zechariah',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Symbolic Future',
    description:
      'A complex series of night visions and prophetic oracles that look past the current rubble to a future of a humble King and a fountain opened for sin.',
    readingExperience: {
      immersion:
        'You are in a dreamscape of flying scrolls, colored horses, and a High Priest in filthy clothes being reclothed in glory.',
      question: 'How does God’s long-term plan for the world give me hope in the messy present?',
      readingGuide: {
        mindset:
          'Lean into the symbolic and apocalyptic nature of the writing; it’s meant to stir the imagination.',
        approach:
          'Connect the night visions of the first half to the messianic oracles of the second half.',
        focus: 'The coming of the King on a donkey and the cleansing of the people.',
      },
      commonMistakes: [
        'Trying to decode every symbol with mathematical precision',
        'Missing the famous "Not by might, nor by power, but by my Spirit" principle',
        'Ignoring the strong links between this book and the Book of Revelation',
      ],
    },
  },
  {
    title: 'Malachi',
    testament: 'Old Testament',
    category: 'Prophets',
    lens: 'Final Appeal',
    description:
      'A series of pointed "disputes" between God and a cynical people, closing the Old Testament with a call to faithfulness and the promise of a coming messenger.',
    readingExperience: {
      immersion:
        'You are hearing a courtroom argument where God’s love is questioned, and His holiness is defended against apathy.',
      question: 'Has my relationship with God become a matter of "going through the motions"?',
      readingGuide: {
        mindset: 'Read this as a "wake-up call" to those who have become bored with their faith.',
        approach:
          'Follow the "Question-Answer" structure of the six disputes between the Lord and Israel.',
        focus: 'The "Messenger of the Covenant" and the turning of hearts before the great Day.',
      },
      commonMistakes: [
        'Viewing the talk about tithing (Chapter 3) in isolation from the heart-issues of the book',
        'Missing the focus on the integrity of the family and marriage',
        'Ignoring the 400 years of silence that follow the book’s final word',
      ],
    },
  },
  {
    title: 'Matthew',
    testament: 'New Testament',
    category: 'Gospels',
    lens: 'The Promised King',
    description:
      'A bridge between the old and the new, presenting Jesus as the fulfillment of Israel’s long-awaited expectations and the authoritative teacher of a new kingdom ethics.',
    readingExperience: {
      immersion:
        'You are sitting on a mountainside hearing a new law for the heart, realizing the ancient promises have finally arrived in a person.',
      question: 'How does Jesus redefine what it means to be a citizen of God’s kingdom?',
      readingGuide: {
        mindset:
          'Think like a first-century Jew looking for the successor to Moses and the Son of David.',
        approach:
          'Look for the five major blocks of teaching that mirror the five books of the Torah.',
        focus: 'The concept of "fulfillment" and the commission to make disciples of all nations.',
      },
      commonMistakes: [
        'Missing the subtle Old Testament quotations sprinkled throughout',
        'Viewing the Sermon on the Mount as a new set of impossible rules',
        'Ignoring the Jewish cultural context of the arguments with the Pharisees',
      ],
    },
  },
  {
    title: 'Mark',
    testament: 'New Testament',
    category: 'Gospels',
    lens: 'The Suffering Servant',
    description:
      'A fast-paced, high-action account of Jesus’ ministry that moves urgently toward the cross, highlighting His power over spirits and His radical call to discipleship.',
    readingExperience: {
      immersion:
        'You are running alongside the disciples, breathless as Jesus moves "immediately" from one miracle to the next toward a Roman execution.',
      question: 'Am I willing to follow a King whose throne was a cross?',
      readingGuide: {
        mindset:
          'Expect brevity and intensity; this is a "show, don’t tell" narrative of divine power and human mystery.',
        approach:
          'Pay attention to the "Messianic Secret"—why Jesus often tells people not to speak of Him.',
        focus: 'The humanity of Jesus, His authority, and the cost of following Him.',
      },
      commonMistakes: [
        'Mistaking the simple Greek style for a lack of theological depth',
        'Overlooking the "sandwiched" stories where one event interprets another',
        'Focusing only on the miracles while ignoring the lengthy passion narrative',
      ],
    },
  },
  {
    title: 'Luke',
    testament: 'New Testament',
    category: 'Gospels',
    lens: 'Compassionate Savior',
    description:
      'An orderly and detailed biography written for a global audience, emphasizing Jesus’ concern for the marginalized, the poor, women, and the outsider.',
    readingExperience: {
      immersion:
        'You are at a dinner table where the "wrong" people are invited, listening to parables that turn the social ladder upside down.',
      question: 'Who are the "outsiders" in my world that God is calling me to seek and save?',
      readingGuide: {
        mindset:
          'Read with the eye of an investigator looking for the universal scope of the Gospel.',
        approach: 'Track the "Travel Narrative" as Jesus sets His face toward Jerusalem.',
        focus: 'The role of the Holy Spirit, the power of prayer, and the joy of the found.',
      },
      commonMistakes: [
        'Missing the emphasis on social justice and wealth management',
        'Ignoring the unique parables not found in the other Gospels',
        'Disconnecting this book from its second volume, the Book of Acts',
      ],
    },
  },
  {
    title: 'John',
    testament: 'New Testament',
    category: 'Gospels',
    lens: 'Divine Word',
    description:
      'A deeply spiritual and philosophical Gospel that uses "signs" and "I Am" statements to prove that Jesus is the eternal Son of God made flesh.',
    readingExperience: {
      immersion:
        'You are wading into deep theological waters where light battles darkness and water becomes wine and life.',
      question: 'Do I truly believe that seeing Jesus is the same as seeing the Father?',
      readingGuide: {
        mindset: 'Slow down; every conversation and metaphor is layered with cosmic significance.',
        approach:
          'Identify the seven "signs" and the seven "I Am" statements that structure the book.',
        focus:
          'The theme of "Believing" and the intimate relationship between the Father and the Son.',
      },
      commonMistakes: [
        'Reading it as a literal chronological diary rather than a thematic portrait',
        'Missing the double-meanings in Jesus’ conversations with Nicodemus or the Samaritan woman',
        'Overlooking the "Upper Room Discourse" where Jesus prepares the disciples',
      ],
    },
  },
  {
    title: 'Acts',
    testament: 'New Testament',
    category: 'History',
    lens: 'Unstoppable Mission',
    description:
      'The thrilling story of the early church’s birth and expansion from Jerusalem to the ends of the earth through the power of the Holy Spirit.',
    readingExperience: {
      immersion:
        'You are caught in a whirlwind of shipwrecks, prison breaks, and fiery speeches as a new community reshapes the Roman Empire.',
      question: 'How am I participating in the ongoing mission of the Spirit today?',
      readingGuide: {
        mindset: 'See this as "The Acts of the Holy Spirit" rather than just the acts of men.',
        approach:
          'Follow the geographical spread of the gospel: Jerusalem, Judea, Samaria, and the ends of the earth.',
        focus: 'The transition from a Jewish sect to a multi-ethnic global movement.',
      },
      commonMistakes: [
        'Treating descriptive events (what happened) as prescriptive rules (what must always happen)',
        'Focusing on Peter and Paul while ignoring the Spirit’s direction',
        'Reading the speeches as mere summaries rather than the theological heart of the book',
      ],
    },
  },
  {
    title: 'Romans',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Gospel Logic',
    description:
      'Paul’s magnum opus: a systematic and powerful explanation of how God’s righteousness saves a broken world through faith, unifying Jews and Gentiles.',
    readingExperience: {
      immersion:
        'You are in a grand courtroom where the verdict of "guilty" is transformed into "justified" through an act of pure grace.',
      question: 'How does the reality of being "justified by faith" change my daily identity?',
      readingGuide: {
        mindset:
          'Put on your thinking cap; this is a dense, logical argument that builds layer by layer.',
        approach:
          'Observe the movement from the problem of sin (1-3) to the solution of grace (4-8) to the practical outworking (12-16).',
        focus: 'The righteousness of God, the role of the Law, and the mystery of Israel.',
      },
      commonMistakes: [
        'Treating it as a dry textbook instead of a letter meant to heal a divided church',
        'Getting stuck in the "election" debates of chapter 9 and missing the "mercy" of chapter 11',
        'Separating the theology of the first half from the ethics of the second half',
      ],
    },
  },
  {
    title: '1 Corinthians',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Church Health',
    description:
      'A practical and corrective letter to a gifted but chaotic church, addressing divisions, lawsuits, sexual immorality, and the priority of love.',
    readingExperience: {
      immersion:
        'You are sitting in a messy community meeting, hearing how the "foolishness" of the cross should reorder every aspect of life.',
      question: 'Does my exercise of spiritual freedom build up or tear down those around me?',
      readingGuide: {
        mindset: 'Think of this as a "clinic" for a church that has everything except maturity.',
        approach:
          'Look for the phrase "now concerning" which signals Paul answering the church’s specific questions.',
        focus: 'The centrality of the Resurrection and the "more excellent way" of love.',
      },
      commonMistakes: [
        'Using the "love chapter" (13) for weddings without noting its context as a rebuke to the arrogant',
        'Focusing on spiritual gifts while ignoring the call to order and edification',
        'Missing the cultural background of the city of Corinth',
      ],
    },
  },
  {
    title: '2 Corinthians',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Strength in Weakness',
    description:
      'A deeply personal and emotional letter where Paul defends his ministry by boasting not in his successes, but in his sufferings and weaknesses.',
    readingExperience: {
      immersion:
        'You are reading a tear-stained letter from a leader who is "jars of clay," carrying a treasure that isn’t his own.',
      question: 'How does God’s power manifest in the moments I feel most inadequate?',
      readingGuide: {
        mindset:
          'Prepare for vulnerability; this letter reveals the heart and the "thorns" of an apostle.',
        approach:
          'Contrast the "false apostles" who brag about power with Paul’s model of sacrificial service.',
        focus:
          'The ministry of reconciliation and the paradox of divine strength in human frailty.',
      },
      commonMistakes: [
        'Viewing Paul’s "boasting" as pride rather than a defense of the Gospel',
        'Missing the radical theology of giving in chapters 8 and 9',
        'Overlooking the intense spiritual warfare described in the final chapters',
      ],
    },
  },
  {
    title: 'Galatians',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Gospel Freedom',
    description:
      'A sharp, urgent defense of the Gospel against those who would add religious requirements to the finished work of Christ.',
    readingExperience: {
      immersion:
        'You are witnessing a theological fire-fight where the prize is the absolute freedom of the believer.',
      question: 'Am I trying to finish by my own effort what was started by God’s Spirit?',
      readingGuide: {
        mindset:
          'Read with urgency; Paul skips the usual pleasantries because the truth of the Gospel is at stake.',
        approach:
          'Compare the "works of the flesh" with the "fruit of the Spirit" as evidence of true freedom.',
        focus: 'Justification by faith alone and the identity of the "new creation."',
      },
      commonMistakes: [
        'Confusing "freedom in Christ" with a license to do whatever we want',
        'Misunderstanding Paul’s view of the Law as "bad" rather than "temporary"',
        'Missing the personal appeal Paul makes based on his own transformation',
      ],
    },
  },
  {
    title: 'Ephesians',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Cosmic Unity',
    description:
      'A majestic letter detailing the eternal plan of God to unite all things in Christ and how that cosmic reality creates a new, diverse family.',
    readingExperience: {
      immersion:
        'You are soaring over the heavenly realms, seeing the blueprint of a new humanity where walls of hostility have been demolished.',
      question: 'How does my position "in Christ" change the way I treat my family and my enemies?',
      readingGuide: {
        mindset:
          'Focus on identity before activity; the first three chapters are purely about who we are.',
        approach:
          'Look for the transition from the "sitting" (position) to "walking" (conduct) and "standing" (warfare).',
        focus: 'The mystery of the Church and the spiritual armor required for the battle.',
      },
      commonMistakes: [
        'Applying the "Armor of God" as a solo practice rather than a communal identity',
        'Skipping the "boring" theological foundations to get to the household rules',
        'Missing the emphasis on God’s sovereign initiative in salvation',
      ],
    },
  },
  {
    title: 'Philippians',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Joy in Chains',
    description:
      'A warm "thank you" note written from prison, overflowing with joy and a call to have the same humble mind that was in Christ Jesus.',
    readingExperience: {
      immersion:
        'You are in a dark cell with a man who is singing, realizing that true contentment is independent of circumstances.',
      question: 'Can I find joy in Christ even when my situation is restrictive or painful?',
      readingGuide: {
        mindset: 'Read this as a letter of friendship and partnership in the Gospel.',
        approach:
          'Center the reading on the "Christ Hymn" in chapter 2 as the pattern for Christian living.',
        focus: 'The theme of joy (mentioned 16 times) and the pursuit of knowing Christ.',
      },
      commonMistakes: [
        'Reducing "I can do all things" (4:13) to a sports slogan rather than a statement on contentment',
        'Missing the underlying tension of a conflict between two women in the church (Euodia and Syntyche)',
        'Viewing Paul’s joy as a personality trait rather than a theological conviction',
      ],
    },
  },
  {
    title: 'Colossians',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Christ Supreme',
    description:
      'A direct confrontation with religious "add-ons" and mysticism, asserting that Jesus is the image of the invisible God and is completely sufficient.',
    readingExperience: {
      immersion:
        'You are stripping away shadows and rituals to find the solid substance of Christ, who holds the entire universe together.',
      question: 'Is Jesus merely a part of my spiritual life, or is He the center of everything?',
      readingGuide: {
        mindset:
          'Look for the word "all" or "fullness" to see how Paul argues for Christ’s total adequacy.',
        approach:
          'Connect the high Christology of chapter 1 with the practical "putting off/putting on" of chapter 3.',
        focus: 'The supremacy of Christ over spiritual powers and human traditions.',
      },
      commonMistakes: [
        'Overlooking the specific "Colossian Heresy" that Paul is writing against',
        'Failing to see the cosmic scope of Christ’s reconciliation',
        'Missing the communal nature of "letting the word of Christ dwell in you richly"',
      ],
    },
  },
  {
    title: '1 Thessalonians',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Hopeful Vigilance',
    description:
      'A tender letter to a young, persecuted church, encouraging them to remain holy and hopeful as they wait for the return of Jesus.',
    readingExperience: {
      immersion:
        'You are part of a small, brave community looking at the horizon, living every day as if the King might return by sunset.',
      question: 'How should the promise of Jesus’ return shape my work and my relationships today?',
      readingGuide: {
        mindset:
          'Think of this as "parental" advice—Paul uses the imagery of both a nursing mother and a father.',
        approach:
          'Every chapter ends with a reference to the Second Coming; use that as your anchor.',
        focus: 'Holiness in sexuality, grief in hope, and readiness for the Day of the Lord.',
      },
      commonMistakes: [
        'Getting lost in "rapture" timelines and missing the call to quiet, hard work',
        'Ignoring the deep affection Paul has for this specific church',
        'Failing to see how the return of Christ is meant to be a comfort, not a terror',
      ],
    },
  },
  {
    title: '2 Thessalonians',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Steady Endurance',
    description:
      'A follow-up letter to clear up confusion about the Day of the Lord and to rebuke those who have used "prophecy" as an excuse for idleness.',
    readingExperience: {
      immersion:
        'You are correcting your course, realizing that waiting for the King means being busy with His work, not just watching the clock.',
      question: 'Am I staying disciplined in the "ordinary" while waiting for the "extraordinary"?',
      readingGuide: {
        mindset: 'Adopt a posture of alert patience, avoiding both alarmist panic and lazy apathy.',
        approach:
          'Look for the description of the "man of lawlessness" as a sign of what must precede the end.',
        focus: 'The justice of God at the end of time and the importance of self-support.',
      },
      commonMistakes: [
        'Speculating wildly on the identity of the "restrainer" or the "man of lawlessness"',
        'Ignoring the harsh but necessary warning about "those who are idle"',
        'Missing the prayer for the Lord to direct hearts toward the steadfastness of Christ',
      ],
    },
  },
  {
    title: '1 Timothy',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Orderly Household',
    description:
      'A mentoring letter from an aging Paul to his young protege, providing a blueprint for church leadership and the defense of sound doctrine.',
    readingExperience: {
      immersion:
        'You are receiving the "keys" to a community, learning that how we organize ourselves reveals what we believe about God.',
      question: 'How does the way I conduct myself in the church reflect the truth of the Gospel?',
      readingGuide: {
        mindset:
          'Read this as a handbook for the "household of God" rather than just a list of rules.',
        approach:
          'Identify the qualifications for leaders and the emphasis on "the faith" as a body of truth.',
        focus:
          'The battle against false teachers and the care for different groups within the church.',
      },
      commonMistakes: [
        'Using leadership qualifications as a checklist for perfection rather than character',
        'Missing the cultural context of the specific "Ephesian problem" Timothy was facing',
        'Ignoring the personal encouragement to "not let anyone despise your youth"',
      ],
    },
  },
  {
    title: '2 Timothy',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Passing the Torch',
    description:
      'Paul’s final, moving letter written from a cold Roman dungeon, urging Timothy to suffer for the Gospel and guard the sacred deposit of truth.',
    readingExperience: {
      immersion:
        'You are hearing the final words of a giant, feeling the cold of the prison and the warmth of his unshakeable faith.',
      question: 'What "sacred deposit" has been entrusted to me, and how am I guarding it?',
      readingGuide: {
        mindset:
          'Read this with a sense of gravity and legacy; these are the last instructions of a dying apostle.',
        approach: 'Focus on the metaphors: the soldier, the athlete, the farmer, and the worker.',
        focus:
          'The inspiration of Scripture and the necessity of endurance in the face of desertion.',
      },
      commonMistakes: [
        'Viewing it as a purely "professional" letter rather than a deeply personal one',
        'Missing the list of people who left Paul, which highlights his loneliness',
        'Ignoring the charge to "preach the word" regardless of the cultural "season"',
      ],
    },
  },
  {
    title: 'Titus',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Good Works',
    description:
      'A short, punchy letter about setting a church in order on the island of Crete, emphasizing that sound doctrine must lead to a life of "good works."',
    readingExperience: {
      immersion:
        'You are on a rugged island where the culture is tough, learning that the grace of God trains us to live self-controlled lives.',
      question: 'Does my lifestyle make the "teaching about God our Savior attractive"?',
      readingGuide: {
        mindset: 'Think about the "missional" quality of everyday behavior in a skeptical culture.',
        approach:
          'Look for the three "grace" summaries that provide the theological motivation for the instructions.',
        focus: 'The link between what we believe and how we live, especially in leadership.',
      },
      commonMistakes: [
        'Reading the "Cretians are liars" quote as Paul’s own prejudice rather than a local proverb he is addressing',
        'Thinking that the "good works" are the cause of salvation rather than the result',
        'Missing the emphasis on generational mentoring (older teaching younger)',
      ],
    },
  },
  {
    title: 'Philemon',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Reconciled Brother',
    description:
      'A masterclass in Christian diplomacy, where Paul asks a wealthy slave owner to receive back a runaway slave no longer as a servant, but as a brother.',
    readingExperience: {
      immersion:
        'You are witnessing a social revolution contained in a single private letter that demolishes the hierarchy of the ancient world.',
      question:
        'Whom do I need to receive as a brother or sister despite our social or past differences?',
      readingGuide: {
        mindset:
          'Watch how Paul uses persuasion and love rather than apostolic command to achieve justice.',
        approach: 'Notice the play on the name "Onesimus" (which means "useful").',
        focus: 'The practical application of the Gospel to the most difficult social structures.',
      },
      commonMistakes: [
        'Critiquing Paul for not "abolishing slavery" instantly while missing how he undermines its foundation',
        'Overlooking the personal cost Paul offers to pay for Onesimus’ debt',
        'Thinking this is just a personal note with no theological weight',
      ],
    },
  },
  {
    title: 'Hebrews',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'The Greater King',
    description:
      'A sophisticated sermon-letter arguing that Jesus is superior to every aspect of the Old Covenant—angels, Moses, priests, and sacrifices.',
    readingExperience: {
      immersion:
        'You are walking through an ancient temple, seeing every shadow find its reality in the brilliant light of the Son.',
      question: 'Is my faith anchored in the "better" and final word of God in Christ?',
      readingGuide: {
        mindset:
          'Read this as a warning against drifting away from the Gospel and a call to persevere.',
        approach:
          'Follow the repeated word "Better" (Kreitton) to see how Jesus surpasses the old system.',
        focus: 'The "Hall of Faith" (Chapter 11) and the role of Jesus as our Great High Priest.',
      },
      commonMistakes: [
        'Getting lost in the Melchizedek discussion without seeing its point about an eternal priesthood',
        'Taking the "warning passages" as a reason for despair rather than a call to vigilance',
        'Ignoring the deep Old Testament connections that the author assumes the reader knows',
      ],
    },
  },
  {
    title: 'James',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Living Wisdom',
    description:
      'The "Proverbs of the New Testament," full of blunt, practical wisdom about trials, the tongue, and the necessity of a faith that works.',
    readingExperience: {
      immersion:
        'You are looking into a mirror that shows you exactly who you are, leaving you no room for religious excuses.',
      question: 'If my faith produces no action, is it actually alive?',
      readingGuide: {
        mindset:
          'Prepare for "tough love"; James is interested in the fruit of your life, not just the words of your mouth.',
        approach: 'Read this as a series of short, punchy sermons on Christian character.',
        focus: 'The danger of favoritism, the power of words, and the necessity of patience.',
      },
      commonMistakes: [
        'Pitting James against Paul (they are looking at faith from two different angles)',
        'Treating the book as a "to-do list" rather than the natural result of a new heart',
        'Missing the strong echoes of Jesus’ Sermon on the Mount',
      ],
    },
  },
  {
    title: '1 Peter',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Living Hope',
    description:
      'A letter of encouragement to "elect exiles" suffering for their faith, reminding them of their royal identity and the example of Christ’s suffering.',
    readingExperience: {
      immersion:
        'You are a stranger in a hostile land, finding your true home in a community of "living stones" built on the Chief Cornerstone.',
      question: 'How do I live as a "good citizen" of a world that doesn’t share my values?',
      readingGuide: {
        mindset:
          'View suffering not as a surprise, but as a refining fire that proves the genuineness of faith.',
        approach:
          'Look for the transition from our "identity in Christ" to our "submission in society."',
        focus:
          'The concept of being "holy," the beauty of a quiet spirit, and the return of the Chief Shepherd.',
      },
      commonMistakes: [
        'Missing the "exile" theme and expecting the world to be friendly to the Church',
        'Ignoring the direct commands to submit to authority as a form of witness',
        'Overlooking the hope of the resurrection as the fuel for endurance',
      ],
    },
  },
  {
    title: '2 Peter',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'True Knowledge',
    description:
      'A stern warning against false teachers and scoffers who deny the coming judgment, calling believers to grow in the knowledge of the Lord.',
    readingExperience: {
      immersion:
        'You are being alerted to a dangerous internal threat, hearing a call to hold fast to the "prophetic word" as a lamp in a dark place.',
      question:
        'Am I growing in the grace and knowledge of Jesus, or am I being swept away by cultural trends?',
      readingGuide: {
        mindset:
          'Read this with a sense of protective urgency; Peter is making sure his message outlasts his life.',
        approach:
          'Focus on the "ladder of virtues" in the first chapter and the description of the final fire in the third.',
        focus: 'The reliability of Scripture and the certainty of God’s judgment and new creation.',
      },
      commonMistakes: [
        'Focusing only on the "destruction of the world" while missing the "promise of a new earth"',
        'Ignoring the link between false teaching and immoral living',
        'Assuming God’s "slowness" to act is a sign of indifference rather than patience',
      ],
    },
  },
  {
    title: '1 John',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Assurance of Love',
    description:
      'A warm but firm letter defining the tests of true fellowship: believing in the flesh-and-blood Jesus, obeying His commands, and loving one another.',
    readingExperience: {
      immersion:
        'You are walking in the light with a Father who is love, feeling the confidence that comes from being called a child of God.',
      question: 'Does the love of God flow through me to others in a way that proves I know Him?',
      readingGuide: {
        mindset:
          'Think in contrasts: light vs. dark, love vs. hate, truth vs. lies, life vs. death.',
        approach:
          'Read it in "spirals"—the author returns to the same themes of love and truth multiple times with more depth.',
        focus: 'The certainty of eternal life and the definition of God as "Love."',
      },
      commonMistakes: [
        'Making the "tests of fellowship" a reason for constant doubt rather than assurance',
        'Ignoring the specific "antichrist" context (those who denied Jesus was actually human)',
        'Separating "loving God" from "loving your brother"',
      ],
    },
  },
  {
    title: '2 John',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Walking in Truth',
    description:
      'A very short letter to "the chosen lady" and her children, emphasizing the boundary between Christian hospitality and the protection of sound doctrine.',
    readingExperience: {
      immersion:
        'You are at the front door of a house church, learning that love must always be accompanied by the truth of who Jesus is.',
      question: 'How do I balance being welcoming with being discerning about the truth?',
      readingGuide: {
        mindset: 'Understand that "walking in truth" is an active, daily commitment.',
        approach: 'Notice how "love" and "truth" are joined together throughout the letter.',
        focus:
          'The command to love one another and the warning against those who do not "abide in the teaching."',
      },
      commonMistakes: [
        'Using the warning against false teachers as an excuse to be unloving',
        'Missing the significance of "hospitality" in the first-century mission',
        'Overlooking the brevity as a sign of an intended face-to-face visit',
      ],
    },
  },
  {
    title: '3 John',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Hospitality Check',
    description:
      'A personal note to Gaius, commending him for his hospitality toward traveling missionaries and rebuking a local leader’s prideful territorialism.',
    readingExperience: {
      immersion:
        'You are overhearing a conversation about church politics and the power of simple, sacrificial support for the work of the Gospel.',
      question: 'Am I a "fellow worker for the truth" through how I support others?',
      readingGuide: {
        mindset:
          'Compare the three characters: the faithful Gaius, the arrogant Diotrephes, and the well-spoken Demetrius.',
        approach:
          'Focus on the theme of "imitating what is good" in the context of church leadership.',
        focus:
          'The physical and spiritual health of the community and the joy of children walking in truth.',
      },
      commonMistakes: [
        'Treating this as an "insignificant" private note without universal application',
        'Ignoring the reality of power struggles in the early church',
        'Missing the call to be a person of "good report"',
      ],
    },
  },
  {
    title: 'Jude',
    testament: 'New Testament',
    category: 'Epistles',
    lens: 'Contending for Faith',
    description:
      'A short, fiery appeal to "contend for the faith" against "wolves" who have crept into the church to turn grace into a license for immorality.',
    readingExperience: {
      immersion:
        'You are hearing a trumpet blast calling the faithful to man the battlements against internal corruption.',
      question: 'How am I building myself up in the "most holy faith" to resist spiritual drift?',
      readingGuide: {
        mindset:
          'Be ready for vivid imagery from the Old Testament and extra-biblical traditions used to illustrate judgment.',
        approach: 'Follow the descriptions of the "intruders" and the final, magnificent doxology.',
        focus:
          'God’s ability to "keep you from stumbling" and the duty to show mercy to those who doubt.',
      },
      commonMistakes: [
        'Focusing on the obscure references (like Michael and the body of Moses) and missing the central warning',
        'Reading "contend" as an excuse for being argumentative or mean-spirited',
        'Ignoring the call to "keep yourselves in the love of God"',
      ],
    },
  },
  {
    title: 'Revelation',
    testament: 'New Testament',
    category: 'Apocalyptic',
    lens: 'The Ultimate Triumph',
    description:
      'A breathtaking series of symbolic visions given to John to encourage a suffering church that Jesus is the Lord of history and is coming to make all things new.',
    readingExperience: {
      immersion:
        'You are standing between heaven and earth, watching the Dragon fall and the New Jerusalem descend like a bride.',
      question:
        'Does the promise of Christ’s final victory give me courage to face today’s trials?',
      readingGuide: {
        mindset:
          'Read this as a "resistance manual" that uses poetry and symbol to pull back the curtain on spiritual reality.',
        approach:
          'Don’t get stuck in the "when"; focus on the "who"—the Lamb who was slain is now the King.',
        focus:
          'The sovereignty of God, the perseverance of the saints, and the restoration of all things.',
      },
      commonMistakes: [
        'Treating it like a secret codebook for modern newspapers',
        'Focusing on the monsters and the numbers while missing the worship of the Lamb',
        'Ignoring the letters to the seven churches in the first three chapters',
      ],
    },
  },
];
