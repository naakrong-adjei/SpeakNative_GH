export default {
  id: 1,
  title: "Greetings & Basics",
  description: "Learn essential Twi greetings and basic phrases for daily conversations",
  icon: "chatbubbles-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "1-1",
      type: "words",
      title: "Greetings",
      icon: "chatbubble-outline",
      description: "Learn how to greet people at different times of the day in Twi",
      words: ["Maakye", "Maaha", "Maadwo", "Akwaaba"],
      vocabulary: [
        {
          id: 1,
          english: "Good morning",
          native: "Maakye",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/maakye.m4a")
        },
        {
          id: 2,
          english: "Good afternoon",
          native: "Maaha",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/maaha.m4a")
        },
        {
          id: 3,
          english: "Good evening",
          native: "Maadwo",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/maadwo.m4a")
        },
        {
          id: 4,
          english: "Welcome",
          native: "Akwaaba",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/akwaaba.m4a")
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi greeting.",
          question: "What is 'Good morning' in Twi?",
          options: [
            { id: 1, text: "Maakye" },
            { id: 2, text: "Maaha" },
            { id: 3, text: "Maadwo" },
            { id: 4, text: "Akwaaba" }
          ],
          correctOptionId: 1,
          hints: ["Used before noon", "Morning greeting"],
          explanation: "Maakye = Good morning in Twi."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi greeting.",
          question: "What is 'Good afternoon' in Twi?",
          options: [
            { id: 1, text: "Maakye" },
            { id: 2, text: "Maaha" },
            { id: 3, text: "Maadwo" },
            { id: 4, text: "Akwaaba" }
          ],
          correctOptionId: 2,
          hints: ["Used from 12 PM to 4 PM", "Afternoon greeting"],
          explanation: "Maaha = Good afternoon in Twi."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi greeting.",
          question: "What is 'Good evening' in Twi?",
          options: [
            { id: 1, text: "Maakye" },
            { id: 2, text: "Maaha" },
            { id: 3, text: "Maadwo" },
            { id: 4, text: "Akwaaba" }
          ],
          correctOptionId: 3,
          hints: ["Used after 6 PM", "Evening greeting"],
          explanation: "Maadwo = Good evening in Twi."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Twi greeting.",
          question: "What is 'Welcome' in Twi?",
          options: [
            { id: 1, text: "Maakye" },
            { id: 2, text: "Maaha" },
            { id: 3, text: "Maadwo" },
            { id: 4, text: "Akwaaba" }
          ],
          correctOptionId: 4,
          hints: ["Used to greet someone arriving", "Hospitality greeting"],
          explanation: "Akwaaba = Welcome in Twi."
        }
      ]
    },

    {
      id: "1-2",
      type: "phrases",
      title: "How Are You?",
      icon: "happy-outline",
      description: "Learn how to ask about someone's well-being and family in Twi",
      words: ["Wo ho te sɛn?", "Me ho yɛ", "W'abusua ho te sɛn?"],
      vocabulary: [
        {
          id: 5,
          english: "How are you?",
          native: "Wo ho te sɛn?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/wo_ho_te_sɛn.m4a")
        },
        {
          id: 6,
          english: "I am fine",
          native: "Me ho yɛ",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/me_ho_yɛ.m4a")
        },
        {
          id: 7,
          english: "How is your family?",
          native: "W'abusua ho te sɛn?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/w_abusua_ho_te_sɛn.m4a")
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'How are you?' in Twi?",
          options: [
            { id: 1, text: "Akwaaba" },
            { id: 2, text: "Me ho yɛ" },
            { id: 3, text: "Wo ho te sɛn?" },
            { id: 4, text: "W'abusua ho te sɛn?" }
          ],
          correctOptionId: 3,
          hints: ["Starts with 'Wo ho'", "A question about well-being"],
          explanation: "'Wo ho te sɛn?' is the standard way to ask 'How are you?' in Twi."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "What is the correct response to 'Wo ho te sɛn?' (How are you?)",
          options: [
            { id: 1, text: "Akwaaba" },
            { id: 2, text: "Me ho yɛ" },
            { id: 3, text: "Medaase" },
            { id: 4, text: "Maakye" }
          ],
          correctOptionId: 2,
          hints: ["Me ho = I am"],
          explanation: "Me ho yɛ = I am fine. This is the standard response to 'How are you?'"
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'How is your family?' in Twi?",
          options: [
            { id: 1, text: "Me ho yɛ" },
            { id: 2, text: "Wo ho te sɛn?" },
            { id: 3, text: "W'abusua ho te sɛn?" },
            { id: 4, text: "Akwaaba" }
          ],
          correctOptionId: 3,
          hints: ["About someone's family", "Extended greeting"],
          explanation: "'W'abusua ho te sɛn?' means 'How is your family?' in Twi."
        }
      ]
    },

    {
      id: "1-3",
      type: "simple_sentences",
      title: "Polite Expressions",
      icon: "heart-outline",
      description: "Learn essential polite expressions for daily conversations in Twi",
      words: ["Medaase", "Mesrɛ wo", "Kafra"],
      vocabulary: [
        {
          id: 8,
          english: "Thank you",
          native: "Medaase",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/medaase.m4a")
        },
        {
          id: 9,
          english: "Please",
          native: "Mesrɛ wo",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/mesrɛ_wo.m4a")
        },
        {
          id: 24,
          english: "I am sorry",
          native: "Kafra",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/kafra.m4a")
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Thank you' in Twi?",
          options: [
            { id: 1, text: "Me ho yɛ" },
            { id: 2, text: "Medaase" },
            { id: 3, text: "Mesrɛ wo" },
            { id: 4, text: "Wo ho te sɛn?" }
          ],
          correctOptionId: 2,
          hints: ["Shows gratitude"],
          explanation: "Medaase = Thank you in Twi."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Please' in Twi?",
          options: [
            { id: 1, text: "Mesrɛ wo" },
            { id: 2, text: "Akwaaba" },
            { id: 3, text: "Medaase" },
            { id: 4, text: "Me ho yɛ" }
          ],
          correctOptionId: 1,
          hints: ["Polite request"],
          explanation: "Mesrɛ wo = Please in Twi."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am sorry' in Twi?",
          options: [
            { id: 1, text: "Kafra" },
            { id: 2, text: "Medaase" },
            { id: 3, text: "Mesrɛ wo" },
            { id: 4, text: "Twɛn kakra" }
          ],
          correctOptionId: 1,
          hints: ["Used for apologies"],
          explanation: "Kafra = I am sorry in Twi."
        }
      ]
    },
    
    {
      id: "1-4",
      type: "basic_conversations",
      title: "Saying Goodbye",
      icon: "hand-right-outline",
      description: "Learn common farewell expressions and good wishes in Twi",
      words: ["Nante yie", "Da yie", "Mehunuu wo akyɛ", "Yɛbɛhyia ɔkyena", "Yɛbɛhyia bio"],
      vocabulary: [
        {
          id: 10,
          english: "Goodbye",
          native: "Nante yie",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/nante_yie.m4a")
        },
        {
          id: 11,
          english: "Good night",
          native: "Da yie",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/da_yie.m4a")
        },
        {
          id: 12,
          english: "Long time no see",
          native: "Mehunuu wo akyɛ",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/mehunuu_wo_akyɛ.m4a")
        },
        {
          id: 13,
          english: "See you tomorrow",
          native: "Yɛbɛhyia ɔkyena",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/yɛbɛhyia_ɔkyena.m4a")
        },
        {
          id: 14,
          english: "Safe journey",
          native: "Nante yie",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/nante_yie.m4a")
        },
        {
          id: 15,
          english: "See you later",
          native: "Yɛbɛhyia bio",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/yɛbɛhyia_bio.m4a")
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Goodbye' in Twi?",
          options: [
            { id: 1, text: "Da yie" },
            { id: 2, text: "Nante yie" },
            { id: 3, text: "Yɛbɛhyia bio" },
            { id: 4, text: "Mehunuu wo akyɛ" }
          ],
          correctOptionId: 2,
          hints: ["Farewell expression"],
          explanation: "Nante yie = Goodbye in Twi."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Good night' in Twi?",
          options: [
            { id: 1, text: "Nante yie" },
            { id: 2, text: "Da yie" },
            { id: 3, text: "Yɛbɛhyia ɔkyena" },
            { id: 4, text: "Mehunuu wo akyɛ" }
          ],
          correctOptionId: 2,
          hints: ["Used at night", "Before sleeping"],
          explanation: "Da yie = Good night in Twi."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Long time no see' in Twi?",
          options: [
            { id: 1, text: "Mehunuu wo akyɛ" },
            { id: 2, text: "Nante yie" },
            { id: 3, text: "Yɛbɛhyia bio" },
            { id: 4, text: "Da yie" }
          ],
          correctOptionId: 1,
          hints: ["Used when you haven't seen someone in a while"],
          explanation: "Mehunuu wo akyɛ = Long time no see in Twi."
        },
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'See you tomorrow' in Twi?",
          options: [
            { id: 1, text: "Nante yie" },
            { id: 2, text: "Da yie" },
            { id: 3, text: "Yɛbɛhyia ɔkyena" },
            { id: 4, text: "Yɛbɛhyia bio" }
          ],
          correctOptionId: 3,
          hints: ["ɔkyena = tomorrow"],
          explanation: "Yɛbɛhyia ɔkyena = See you tomorrow in Twi."
        },
        {
          id: 405,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Safe journey' in Twi?",
          options: [
            { id: 1, text: "Nante yie" },
            { id: 2, text: "Da yie" },
            { id: 3, text: "Yɛbɛhyia bio" },
            { id: 4, text: "Mehunuu wo akyɛ" }
          ],
          correctOptionId: 1,
          hints: ["Used when someone is traveling"],
          explanation: "Nante yie = Safe journey in Twi."
        },
        {
          id: 406,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'See you later' in Twi?",
          options: [
            { id: 1, text: "Yɛbɛhyia ɔkyena" },
            { id: 2, text: "Yɛbɛhyia bio" },
            { id: 3, text: "Nante yie" },
            { id: 4, text: "Da yie" }
          ],
          correctOptionId: 2,
          hints: ["bio = again/later"],
          explanation: "Yɛbɛhyia bio = See you later in Twi."
        }
      ]
    },

    {
      id: "1-5",
      type: "phrases",
      title: "Simple Questions & Responses",
      icon: "chatbubbles-outline",
      description: "Learn common questions and everyday responses in Twi",
      words: ["Aane", "Daabi", "M'ani gye ho", "Wei yɛ dɛn?"],
      vocabulary: [
        {
          id: 16,
          english: "Yes",
          native: "Aane",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/aane.m4a")
        },
        {
          id: 17,
          english: "No",
          native: "Daabi",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/daabi.m4a")
        },
        {
          id: 18,
          english: "I like it",
          native: "M'ani gye ho",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/m_ani_gye_ho.m4a")
        },
        {
          id: 19,
          english: "What is this?",
          native: "Wei yɛ dɛn?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/wei_yɛ_dɛn.m4a")
        }
      ],
      questions: [
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Yes' in Twi?",
          options: [
            { id: 1, text: "Aane" },
            { id: 2, text: "Daabi" },
            { id: 3, text: "M'ani gye ho" },
            { id: 4, text: "Wei yɛ dɛn?" }
          ],
          correctOptionId: 1,
          hints: ["Affirmative response"],
          explanation: "Aane = Yes in Twi."
        },
        {
          id: 502,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'No' in Twi?",
          options: [
            { id: 1, text: "Aane" },
            { id: 2, text: "Daabi" },
            { id: 3, text: "M'ani gye ho" },
            { id: 4, text: "Wei yɛ dɛn?" }
          ],
          correctOptionId: 2,
          hints: ["Negative response"],
          explanation: "Daabi = No in Twi."
        },
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I like it' in Twi?",
          options: [
            { id: 1, text: "M'ani gye ho" },
            { id: 2, text: "Wei yɛ dɛn?" },
            { id: 3, text: "Aane" },
            { id: 4, text: "Daabi" }
          ],
          correctOptionId: 1,
          hints: ["Expressing liking"],
          explanation: "M'ani gye ho = I like it in Twi."
        },
        {
          id: 504,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'What is this?' in Twi?",
          options: [
            { id: 1, text: "M'ani gye ho" },
            { id: 2, text: "Wei yɛ dɛn?" },
            { id: 3, text: "Aane" },
            { id: 4, text: "Daabi" }
          ],
          correctOptionId: 2,
          hints: ["Pointing to something", "Question about an object"],
          explanation: "Wei yɛ dɛn? = What is this? in Twi."
        }
      ]
    },

    {
      id: "1-6",
      type: "basic_conversations",
      title: "Everyday Phrases",
      icon: "chatbubble-ellipses-outline",
      description: "Learn useful everyday expressions for keeping a conversation going in Twi",
      words: ["Mente aseɛ", "Mepa wo kyɛw kasa brɛoo", "Wobɛtumi aboa me?", "Mepa wo kyɛw ka bio", "Twɛn kakra"],
      vocabulary: [
        {
          id: 20,
          english: "I don't understand",
          native: "Mente aseɛ",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/mente_aseɛ.m4a")
        },
        {
          id: 21,
          english: "Speak slowly please",
          native: "Mepa wo kyɛw kasa brɛoo",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/mepa_wo_kyɛw_kasa_brɛoo.m4a")
        },
        {
          id: 22,
          english: "Can you help me?",
          native: "Wobɛtumi aboa me?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/wobɛtumi_aboa_me.m4a")
        },
        {
          id: 23,
          english: "Say it again please",
          native: "Mepa wo kyɛw ka bio",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/mepa_wo_kyɛw_ka_bio.m4a")
        },
        {
          id: 25,
          english: "Wait a moment",
          native: "Twɛn kakra",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter1/twɛn_kakra.m4a")
        }
      ],
      questions: [
        {
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I don't understand' in Twi?",
          options: [
            { id: 1, text: "Mente aseɛ" },
            { id: 2, text: "Mepa wo kyɛw kasa brɛoo" },
            { id: 3, text: "Wobɛtumi aboa me?" },
            { id: 4, text: "Twɛn kakra" }
          ],
          correctOptionId: 1,
          hints: ["Used when you don't understand"],
          explanation: "Mente aseɛ = I don't understand in Twi."
        },
        {
          id: 506,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Speak slowly please' in Twi?",
          options: [
            { id: 1, text: "Mente aseɛ" },
            { id: 2, text: "Mepa wo kyɛw kasa brɛoo" },
            { id: 3, text: "Wobɛtumi aboa me?" },
            { id: 4, text: "Kafra" }
          ],
          correctOptionId: 2,
          hints: ["kasa brɛoo = speak slowly"],
          explanation: "Mepa wo kyɛw kasa brɛoo = Speak slowly please in Twi."
        },
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Can you help me?' in Twi?",
          options: [
            { id: 1, text: "Mente aseɛ" },
            { id: 2, text: "Mepa wo kyɛw kasa brɛoo" },
            { id: 3, text: "Wobɛtumi aboa me?" },
            { id: 4, text: "Twɛn kakra" }
          ],
          correctOptionId: 3,
          hints: ["aboa me = help me"],
          explanation: "Wobɛtumi aboa me? = Can you help me? in Twi."
        },
        {
          id: 508,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Say it again please' in Twi?",
          options: [
            { id: 1, text: "Mepa wo kyɛw ka bio" },
            { id: 2, text: "Mente aseɛ" },
            { id: 3, text: "Kafra" },
            { id: 4, text: "Twɛn kakra" }
          ],
          correctOptionId: 1,
          hints: ["ka bio = say again"],
          explanation: "Mepa wo kyɛw ka bio = Say it again please in Twi."
        },
        {
          id: 509,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Wait a moment' in Twi?",
          options: [
            { id: 1, text: "Kafra" },
            { id: 2, text: "Mente aseɛ" },
            { id: 3, text: "Twɛn kakra" },
            { id: 4, text: "Mepa wo kyɛw ka bio" }
          ],
          correctOptionId: 3,
          hints: ["Twɛn = wait", "kakra = a little"],
          explanation: "Twɛn kakra = Wait a moment in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-1",
    title: "Review: Greetings & Basics",
    icon: "refresh-outline",
    description: "Review all the greetings, phrases, and expressions you've learned",
    questions: [
      {
        id: 601,
        type: "multiple_choice",
        instruction: "Select the correct Twi greeting.",
        question: "What is 'Good morning' in Twi?",
        options: [
          { id: 1, text: "Akwaaba" },
          { id: 2, text: "Maaha" },
          { id: 3, text: "Maakye" },
          { id: 4, text: "Maadwo" }
        ],
        correctOptionId: 3,
        hints: ["Used before noon"],
        explanation: "Maakye = Good morning."
      },
      {
        id: 602,
        type: "multiple_choice",
        instruction: "Select the correct Twi greeting.",
        question: "What is 'Welcome' in Twi?",
        options: [
          { id: 1, text: "Maadwo" },
          { id: 2, text: "Maakye" },
          { id: 3, text: "Akwaaba" },
          { id: 4, text: "Maaha" }
        ],
        correctOptionId: 3,
        hints: ["Used to greet someone arriving"],
        explanation: "Akwaaba = Welcome."
      },
      {
        id: 603,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'How are you?' in Twi?",
        options: [
          { id: 1, text: "Me ho yɛ" },
          { id: 2, text: "Maakye" },
          { id: 3, text: "Wo ho te sɛn?" },
          { id: 4, text: "W'abusua ho te sɛn?" }
        ],
        correctOptionId: 3,
        hints: ["Question about well-being"],
        explanation: "'Wo ho te sɛn?' means 'How are you?' in Twi."
      },
      {
        id: 604,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "What is the correct response to 'Wo ho te sɛn?' (How are you?)",
        options: [
          { id: 1, text: "Maakye" },
          { id: 2, text: "Medaase" },
          { id: 3, text: "Me ho yɛ" },
          { id: 4, text: "Da yie" }
        ],
        correctOptionId: 3,
        hints: ["Means 'I am fine'"],
        explanation: "Me ho yɛ = I am fine."
      },
      {
        id: 605,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "What is 'Thank you' in Twi?",
        options: [
          { id: 1, text: "Me ho yɛ" },
          { id: 2, text: "Medaase" },
          { id: 3, text: "Mesrɛ wo" },
          { id: 4, text: "Wo ho te sɛn?" }
        ],
        correctOptionId: 2,
        hints: ["Shows gratitude"],
        explanation: "Medaase = Thank you."
      },
      {
        id: 606,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "What is 'Please' in Twi?",
        options: [
          { id: 1, text: "Akwaaba" },
          { id: 2, text: "Medaase" },
          { id: 3, text: "Mesrɛ wo" },
          { id: 4, text: "Me ho yɛ" }
        ],
        correctOptionId: 3,
        hints: ["Used for polite requests"],
        explanation: "Mesrɛ wo = Please."
      },
      {
        id: 607,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am sorry' in Twi?",
        options: [
          { id: 1, text: "Kafra" },
          { id: 2, text: "Medaase" },
          { id: 3, text: "Mesrɛ wo" },
          { id: 4, text: "Twɛn kakra" }
        ],
        correctOptionId: 1,
        hints: ["Used for apologies"],
        explanation: "Kafra = I am sorry."
      },
      {
        id: 608,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Good night' in Twi?",
        options: [
          { id: 1, text: "Da yie" },
          { id: 2, text: "Nante yie" },
          { id: 3, text: "Yɛbɛhyia ɔkyena" },
          { id: 4, text: "Yɛbɛhyia bio" }
        ],
        correctOptionId: 1,
        hints: ["Used at night"],
        explanation: "Da yie = Good night."
      },
      {
        id: 609,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Yes' in Twi?",
        options: [
          { id: 1, text: "Daabi" },
          { id: 2, text: "Aane" },
          { id: 3, text: "M'ani gye ho" },
          { id: 4, text: "Wei yɛ dɛn?" }
        ],
        correctOptionId: 2,
        hints: ["Affirmative response"],
        explanation: "Aane = Yes."
      },
      {
        id: 610,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Long time no see' in Twi?",
        options: [
          { id: 1, text: "Mehunuu wo akyɛ" },
          { id: 2, text: "Nante yie" },
          { id: 3, text: "Yɛbɛhyia bio" },
          { id: 4, text: "Da yie" }
        ],
        correctOptionId: 1,
        hints: ["Used when you haven't seen someone in a while"],
        explanation: "Mehunuu wo akyɛ = Long time no see."
      },
      {
        id: 611,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'See you tomorrow' in Twi?",
        options: [
          { id: 1, text: "Yɛbɛhyia ɔkyena" },
          { id: 2, text: "Yɛbɛhyia bio" },
          { id: 3, text: "Nante yie" },
          { id: 4, text: "Da yie" }
        ],
        correctOptionId: 1,
        hints: ["ɔkyena = tomorrow"],
        explanation: "Yɛbɛhyia ɔkyena = See you tomorrow."
      },
      {
        id: 612,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I don't understand' in Twi?",
        options: [
          { id: 1, text: "Mente aseɛ" },
          { id: 2, text: "Kafra" },
          { id: 3, text: "Twɛn kakra" },
          { id: 4, text: "Wei yɛ dɛn?" }
        ],
        correctOptionId: 1,
        hints: ["Used when you don't understand"],
        explanation: "Mente aseɛ = I don't understand."
      },
      {
        id: 613,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Can you help me?' in Twi?",
        options: [
          { id: 1, text: "Wobɛtumi aboa me?" },
          { id: 2, text: "Mepa wo kyɛw ka bio" },
          { id: 3, text: "Kafra" },
          { id: 4, text: "Twɛn kakra" }
        ],
        correctOptionId: 1,
        hints: ["aboa me = help me"],
        explanation: "Wobɛtumi aboa me? = Can you help me?"
      }
    ]
  }
};