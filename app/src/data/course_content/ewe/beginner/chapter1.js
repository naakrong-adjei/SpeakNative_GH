export default {
  id: 1,
  title: "Greetings & Basics",
  description: "Learn essential Ewe greetings for daily conversations in Ghana",
  icon: "chatbubbles-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "1-1",
      type: "words",
      title: "Saying Hello",
      icon: "chatbubble-outline",
      description: "Learn how to greet people at different times of the day in Ewe",
      words: ["Ŋdi na wò", "Ŋdɔ na wò", "Fiẽ na wò", "Woezɔ"],
      vocabulary: [
        {
          id: 1,
          english: "Good morning",
          native: "Ŋdi na wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/ngdi_na_wo.m4a")
        },
        {
          id: 2,
          english: "Good afternoon",
          native: "Ŋdɔ na wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/ngdo_na_wo.m4a")
        },
        {
          id: 3,
          english: "Good evening",
          native: "Fiẽ na wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/fie_na_wo.m4a")
        },
        {
          id: 4,
          english: "Welcome",
          native: "Woezɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/woezo.m4a")
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good morning' in Ewe?",
          options: [
            { id: 1, text: "Ŋdi na wò" },
            { id: 2, text: "Ŋdɔ na wò" },
            { id: 3, text: "Fiẽ na wò" },
            { id: 4, text: "Woezɔ" }
          ],
          correctOptionId: 1,
          hints: ["Used before noon", "Morning greeting"],
          explanation: "Ŋdi na wò = Good morning. Used when greeting someone in the morning."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good afternoon' in Ewe?",
          options: [
            { id: 1, text: "Fiẽ na wò" },
            { id: 2, text: "Ŋdi na wò" },
            { id: 3, text: "Woezɔ" },
            { id: 4, text: "Ŋdɔ na wò" }
          ],
          correctOptionId: 4,
          hints: ["Used from 12 PM to 4 PM", "Afternoon greeting"],
          explanation: "Ŋdɔ na wò = Good afternoon. Used when greeting someone in the afternoon."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good evening' in Ewe?",
          options: [
            { id: 1, text: "Woezɔ" },
            { id: 2, text: "Fiẽ na wò" },
            { id: 3, text: "Ŋdɔ na wò" },
            { id: 4, text: "Ŋdi na wò" }
          ],
          correctOptionId: 2,
          hints: ["Used after 6 PM", "Evening greeting"],
          explanation: "Fiẽ na wò = Good evening. Used when greeting someone in the evening."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Welcome' in Ewe?",
          options: [
            { id: 1, text: "Ŋdi na wò" },
            { id: 2, text: "Ŋdɔ na wò" },
            { id: 3, text: "Fiẽ na wò" },
            { id: 4, text: "Woezɔ" }
          ],
          correctOptionId: 4,
          hints: ["Used to greet someone arriving", "Hospitality greeting"],
          explanation: "Woezɔ = Welcome. Used when welcoming someone to a place."
        }
      ]
    },

    {
      id: "1-2",
      type: "phrases",
      title: "How Are You?",
      icon: "happy-outline",
      description: "Learn how to ask and respond to 'How are you?' in Ewe",
      words: ["Èfɔa?", "Mefɔ", "Aleke wò ƒomea le?"],
      vocabulary: [
        {
          id: 5,
          english: "How are you?",
          native: "Èfɔa?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/efɔa.m4a")
        },
        {
          id: 6,
          english: "I am fine",
          native: "Mefɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/mefɔ.m4a")
        },
        {
          id: 11,
          english: "How is your family?",
          native: "Aleke wò ƒomea le?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/aleke_wo_fomea_le.m4a")
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'How are you?' in Ewe?",
          options: [
            { id: 1, text: "Woezɔ" },
            { id: 2, text: "Mefɔ" },
            { id: 3, text: "Èfɔa?" },
            { id: 4, text: "Aleke wò ƒomea le?" }
          ],
          correctOptionId: 3,
          hints: ["Starts with 'È'", "A question about well-being"],
          explanation: "'Èfɔa?' is the standard way to ask 'How are you?' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "What is the correct response to 'Èfɔa?' (How are you?)",
          options: [
            { id: 1, text: "Woezɔ" },
            { id: 2, text: "Mefɔ" },
            { id: 3, text: "Akpe" },
            { id: 4, text: "Ŋdi na wò" }
          ],
          correctOptionId: 2,
          hints: ["Mefɔ = I am fine"],
          explanation: "Mefɔ = I am fine. This is the standard response to 'How are you?'"
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'How is your family?' in Ewe?",
          options: [
            { id: 1, text: "Mefɔ" },
            { id: 2, text: "Èfɔa?" },
            { id: 3, text: "Aleke wò ƒomea le?" },
            { id: 4, text: "Woezɔ" }
          ],
          correctOptionId: 3,
          hints: ["About someone's family", "Extended greeting"],
          explanation: "'Aleke wò ƒomea le?' means 'How is your family?' in Ewe."
        },
        {
          id: 204,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "How would you respond to 'Aleke wò ƒomea le?' (How is your family?)",
          options: [
            { id: 1, text: "Mefɔ" },
            { id: 2, text: "Ŋdi na wò" },
            { id: 3, text: "Nye ƒomea fɔ" },
            { id: 4, text: "Èfɔa?" }
          ],
          correctOptionId: 3,
          hints: ["'Nye ƒomea fɔ' means 'My family is fine'"],
          explanation: "My ƒomea fɔ = My family is fine. This is a common response to asking about someone's family."
        }
      ]
    },

    {
      id: "1-3",
      type: "simple_sentences",
      title: "Polite Expressions",
      icon: "chatbox-outline",
      description: "Essential polite expressions for daily conversations in Ewe",
      words: ["Akpe", "Meɖe kuku"],
      vocabulary: [
        {
          id: 7,
          english: "Thank you",
          native: "Akpe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/akpe.m4a")
        },
        {
          id: 10,
          english: "Please",
          native: "Meɖe kuku",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/mede_kuku.m4a")
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Thank you' in Ewe?",
          options: [
            { id: 1, text: "Mefɔ" },
            { id: 2, text: "Akpe" },
            { id: 3, text: "Meɖe kuku" },
            { id: 4, text: "Èfɔa?" }
          ],
          correctOptionId: 2,
          hints: ["Shows gratitude"],
          explanation: "'Akpe' means 'Thank you' in Ewe. It's one of the most important polite expressions."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Please' in Ewe?",
          options: [
            { id: 1, text: "Meɖe kuku" },
            { id: 2, text: "Woezɔ" },
            { id: 3, text: "Akpe" },
            { id: 4, text: "Mefɔ" }
          ],
          correctOptionId: 1,
          hints: ["Polite request"],
          explanation: "'Meɖe kuku' means 'Please' in Ewe. It's used when making polite requests."
        }
      ]
    },

    {
      id: "1-4",
      type: "basic_conversations",
      title: "Saying Goodbye",
      icon: "hand-right-outline",
      description: "Learn how to say goodbye and related expressions in Ewe",
      words: ["Hede nyuie", "Zã nyuie", "Edzidzi wu esi mekpɔ wò", "Míado go etsɔ", "Mɔzɔzɔ nyuie"],
      vocabulary: [
        {
          id: 8,
          english: "Goodbye",
          native: "Hede nyuie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/hede_nyuie.m4a")
        },
        {
          id: 9,
          english: "Good night",
          native: "Zã nyuie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/za_nyuie.m4a")
        },
        {
          id: 12,
          english: "Long time no see",
          native: "Edzidzi wu esi mekpɔ wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/edzidzi_wu_esi_mekpɔ_wo.m4a")
        },
        {
          id: 13,
          english: "See you tomorrow",
          native: "Míado go etsɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/miado_go_etsɔ.m4a")
        },
        {
          id: 14,
          english: "Safe journey",
          native: "Mɔzɔzɔ nyuie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/mɔzɔzɔ_nyuie.m4a")
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Goodbye' in Ewe?",
          options: [
            { id: 1, text: "Míado go etsɔ" },
            { id: 2, text: "Zã nyuie" },
            { id: 3, text: "Hede nyuie" },
            { id: 4, text: "Mɔzɔzɔ nyuie" }
          ],
          correctOptionId: 3,
          hints: ["Used when leaving"],
          explanation: "'Hede nyuie' means 'Goodbye' in Ewe."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Good night' in Ewe?",
          options: [
            { id: 1, text: "Mɔzɔzɔ nyuie" },
            { id: 2, text: "Míado go etsɔ" },
            { id: 3, text: "Hede nyuie" },
            { id: 4, text: "Zã nyuie" }
          ],
          correctOptionId: 4,
          hints: ["Used at night", "Before sleeping"],
          explanation: "'Zã nyuie' means 'Good night' in Ewe."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Long time no see' in Ewe?",
          options: [
            { id: 1, text: "Hede nyuie" },
            { id: 2, text: "Edzidzi wu esi mekpɔ wò" },
            { id: 3, text: "Zã nyuie" },
            { id: 4, text: "Mɔzɔzɔ nyuie" }
          ],
          correctOptionId: 2,
          hints: ["Used when you haven't seen someone in a while"],
          explanation: "'Edzidzi wu esi mekpɔ wò' means 'Long time no see' in Ewe."
        },
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'See you tomorrow' in Ewe?",
          options: [
            { id: 1, text: "Mɔzɔzɔ nyuie" },
            { id: 2, text: "Hede nyuie" },
            { id: 3, text: "Zã nyuie" },
            { id: 4, text: "Míado go etsɔ" }
          ],
          correctOptionId: 4,
          hints: ["Tomorrow = Etsɔ"],
          explanation: "'Míado go etsɔ' means 'See you tomorrow' in Ewe."
        },
        {
          id: 405,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Safe journey' in Ewe?",
          options: [
            { id: 1, text: "Zã nyuie" },
            { id: 2, text: "Mɔzɔzɔ nyuie" },
            { id: 3, text: "Míado go etsɔ" },
            { id: 4, text: "Hede nyuie" }
          ],
          correctOptionId: 2,
          hints: ["Used when someone is traveling"],
          explanation: "'Mɔzɔzɔ nyuie' means 'Safe journey' in Ewe."
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
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Ewe greeting.",
        question: "What is 'Good morning' in Ewe?",
        options: [
          { id: 1, text: "Woezɔ" },
          { id: 2, text: "Ŋdɔ na wò" },
          { id: 3, text: "Ŋdi na wò" },
          { id: 4, text: "Fiẽ na wò" }
        ],
        correctOptionId: 3,
        hints: ["Used before noon"],
        explanation: "Ŋdi na wò = Good morning."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ewe greeting.",
        question: "What is 'Good evening' in Ewe?",
        options: [
          { id: 1, text: "Woezɔ" },
          { id: 2, text: "Ŋdi na wò" },
          { id: 3, text: "Fiẽ na wò" },
          { id: 4, text: "Ŋdɔ na wò" }
        ],
        correctOptionId: 3,
        hints: ["Used after 6 PM"],
        explanation: "Fiẽ na wò = Good evening."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ewe greeting.",
        question: "What is 'Welcome' in Ewe?",
        options: [
          { id: 1, text: "Fiẽ na wò" },
          { id: 2, text: "Ŋdi na wò" },
          { id: 3, text: "Woezɔ" },
          { id: 4, text: "Ŋdɔ na wò" }
        ],
        correctOptionId: 3,
        hints: ["Used to greet someone arriving"],
        explanation: "Woezɔ = Welcome."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'How are you?' in Ewe?",
        options: [
          { id: 1, text: "Mefɔ" },
          { id: 2, text: "Ŋdi na wò" },
          { id: 3, text: "Èfɔa?" },
          { id: 4, text: "Aleke wò ƒomea le?" }
        ],
        correctOptionId: 3,
        hints: ["Question about well-being"],
        explanation: "'Èfɔa?' means 'How are you?' in Ewe."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "What is the correct response to 'Èfɔa?' (How are you?)",
        options: [
          { id: 1, text: "Ŋdi na wò" },
          { id: 2, text: "Akpe" },
          { id: 3, text: "Mefɔ" },
          { id: 4, text: "Zã nyuie" }
        ],
        correctOptionId: 3,
        hints: ["Means 'I am fine'"],
        explanation: "Mefɔ = I am fine."
      },
      {
        id: 506,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "What is 'Thank you' in Ewe?",
        options: [
          { id: 1, text: "Mefɔ" },
          { id: 2, text: "Akpe" },
          { id: 3, text: "Meɖe kuku" },
          { id: 4, text: "Èfɔa?" }
        ],
        correctOptionId: 2,
        hints: ["Shows gratitude"],
        explanation: "Akpe = Thank you."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "What is 'Please' in Ewe?",
        options: [
          { id: 1, text: "Woezɔ" },
          { id: 2, text: "Akpe" },
          { id: 3, text: "Meɖe kuku" },
          { id: 4, text: "Mefɔ" }
        ],
        correctOptionId: 3,
        hints: ["Used for polite requests"],
        explanation: "Meɖe kuku = Please."
      },
      {
        id: 508,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'How is your family?' in Ewe?",
        options: [
          { id: 1, text: "Èfɔa?" },
          { id: 2, text: "Mefɔ" },
          { id: 3, text: "Aleke wò ƒomea le?" },
          { id: 4, text: "Woezɔ" }
        ],
        correctOptionId: 3,
        hints: ["Asking about someone's family"],
        explanation: "Aleke wò ƒomea le? = How is your family?"
      },
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Goodbye' in Ewe?",
        options: [
          { id: 1, text: "Hede nyuie" },
          { id: 2, text: "Zã nyuie" },
          { id: 3, text: "Mɔzɔzɔ nyuie" },
          { id: 4, text: "Míado go etsɔ" }
        ],
        correctOptionId: 1,
        hints: ["Used when leaving"],
        explanation: "Hede nyuie = Goodbye."
      },
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'See you tomorrow' in Ewe?",
        options: [
          { id: 1, text: "Míado go etsɔ" },
          { id: 2, text: "Mɔzɔzɔ nyuie" },
          { id: 3, text: "Zã nyuie" },
          { id: 4, text: "Hede nyuie" }
        ],
        correctOptionId: 1,
        hints: ["Tomorrow = Etsɔ"],
        explanation: "Míado go etsɔ = See you tomorrow."
      }
    ]
  }
};