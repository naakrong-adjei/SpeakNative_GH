export default {
  id: 7,
  title: "Directions",
  description: "Learn useful Ewe phrases for asking for directions, giving directions, and describing locations",
  icon: "compass-outline",
  totalXp: 10,
  difficulty: "Beginner",

  sections: [
    {
      id: "7-1",
      type: "words",
      title: "Asking Directions",
      icon: "help-circle-outline",
      description: "Learn how to ask for directions and find places in Ewe",
      words: ["Afikae asia le?", "Afikae nugodoƒe la le?", "Metre mɔ", "Aleke mawɔ aɖo afima?"],
      vocabulary: [
        {
          id: 86,
          english: "Where is the market?",
          native: "Afikae asia le?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/afikae_asia_le.m4a")
        },
        {
          id: 92,
          english: "Where is the toilet?",
          native: "Afikae nugodoƒe la le?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/afikae_nugodoƒe_la_le.m4a")
        },
        {
          id: 96,
          english: "I am lost",
          native: "Metre mɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/metre_mɔ.m4a")
        },
        {
          id: 97,
          english: "How do I get there?",
          native: "Aleke mawɔ aɖo afima?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/aleke_mawɔ_aɖo_afima.m4a")
        }
      ],
      questions: [
        {
          id: 703,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'Where is the toilet?' in Ewe?",
          options: [
            { id: 1, text: "Metre mɔ" },
            { id: 2, text: "Aleke mawɔ aɖo afima?" },
            { id: 3, text: "Afikae asia le?" },
            { id: 4, text: "Afikae nugodoƒe la le?" }
          ],
          correctOptionId: 4,
          hints: ["nugodoƒe = toilet"],
          explanation: "Afikae nugodoƒe la le? = Where is the toilet? in Ewe."
        },
        {
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'Where is the market?' in Ewe?",
          options: [
            { id: 1, text: "Aleke mawɔ aɖo afima?" },
            { id: 2, text: "Afikae asia le?" },
            { id: 3, text: "Afikae nugodoƒe la le?" },
            { id: 4, text: "Metre mɔ" }
          ],
          correctOptionId: 2,
          hints: ["Afikae = where", "asia = market"],
          explanation: "Afikae asia le? = Where is the market? in Ewe."
        },
        {
          id: 702,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/metre_mɔ.m4a"),
          options: [
            { id: 1, text: "How do I get there?" },
            { id: 2, text: "I am lost" },
            { id: 3, text: "Where is the market?" },
            { id: 4, text: "Where is the toilet?" }
          ],
          correctOptionId: 2,
          hints: ["metre = I am lost"],
          explanation: "You heard 'Metre mɔ' which means 'I am lost' in Ewe."
        }
      ]
    },

    {
      id: "7-2",
      type: "words",
      title: "Giving Directions",
      icon: "navigate-outline",
      description: "Learn how to give directions and guide someone in Ewe",
      words: ["Yi tẽ", "Trɔ ɖe ɖusi me", "Trɔ ɖe miã me", "Zɔ mɔ hia dzi"],
      vocabulary: [
        {
          id: 87,
          english: "Go straight",
          native: "Yi tẽ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/yi_tẽ.m4a")
        },
        {
          id: 88,
          english: "Turn right",
          native: "Trɔ ɖe ɖusi me",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/trɔ_ɖe_ɖusi_me.m4a")
        },
        {
          id: 89,
          english: "Turn left",
          native: "Trɔ ɖe miã me",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/trɔ_ɖe_miã_me.m4a")
        },
        {
          id: 95,
          english: "Follow this road",
          native: "Zɔ mɔ hia dzi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/zɔ_mɔ_hia_dzi.m4a")
        }
      ],
      questions: [
        {
          id: 706,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Turn left' in Ewe?",
          options: [
            { id: 1, text: "Zɔ mɔ hia dzi" },
            { id: 2, text: "Trɔ ɖe miã me" },
            { id: 3, text: "Yi tẽ" },
            { id: 4, text: "Trɔ ɖe ɖusi me" }
          ],
          correctOptionId: 2,
          hints: ["miã me = left"],
          explanation: "Trɔ ɖe miã me = Turn left in Ewe."
        },
        {
          id: 704,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Go straight' in Ewe?",
          options: [
            { id: 1, text: "Trɔ ɖe ɖusi me" },
            { id: 2, text: "Zɔ mɔ hia dzi" },
            { id: 3, text: "Yi tẽ" },
            { id: 4, text: "Trɔ ɖe miã me" }
          ],
          correctOptionId: 3,
          hints: ["Yi = go", "tẽ = straight"],
          explanation: "Yi tẽ = Go straight in Ewe."
        },
        {
          id: 705,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/trɔ_ɖe_ɖusi_me.m4a"),
          options: [
            { id: 1, text: "Follow this road" },
            { id: 2, text: "Turn left" },
            { id: 3, text: "Go straight" },
            { id: 4, text: "Turn right" }
          ],
          correctOptionId: 4,
          hints: ["trɔ = turn", "ɖusi me = right"],
          explanation: "You heard 'Trɔ ɖe ɖusi me' which means 'Turn right' in Ewe."
        }
      ]
    },

    {
      id: "7-3",
      type: "words",
      title: "Distance & Position",
      icon: "map-outline",
      description: "Learn how to describe distance and position in Ewe",
      words: ["Edzidzi", "Etsɔ ɖe", "Le xɔa megbe", "Ŋgɔ"],
      vocabulary: [
        {
          id: 90,
          english: "It is far",
          native: "Edzidzi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/edzidzi.m4a")
        },
        {
          id: 91,
          english: "It is near",
          native: "Etsɔ ɖe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/etsɔ_ɖe.m4a")
        },
        {
          id: 93,
          english: "Behind the house",
          native: "Le xɔa megbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/le_xɔa_megbe.m4a")
        },
        {
          id: 94,
          english: "In front",
          native: "Ŋgɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/ŋgɔ.m4a")
        }
      ],
      questions: [
        {
          id: 708,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/etsɔ_ɖe.m4a"),
          options: [
            { id: 1, text: "Behind the house" },
            { id: 2, text: "It is far" },
            { id: 3, text: "In front" },
            { id: 4, text: "It is near" }
          ],
          correctOptionId: 4,
          hints: ["tsɔ = near"],
          explanation: "You heard 'Etsɔ ɖe' which means 'It is near' in Ewe."
        },
        {
          id: 709,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Behind the house' in Ewe?",
          options: [
            { id: 1, text: "Ŋgɔ" },
            { id: 2, text: "Etsɔ ɖe" },
            { id: 3, text: "Le xɔa megbe" },
            { id: 4, text: "Edzidzi" }
          ],
          correctOptionId: 3,
          hints: ["megbe = behind"],
          explanation: "Le xɔa megbe = Behind the house in Ewe."
        },
        {
          id: 707,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'It is far' in Ewe?",
          options: [
            { id: 1, text: "Etsɔ ɖe" },
            { id: 2, text: "Edzidzi" },
            { id: 3, text: "Ŋgɔ" },
            { id: 4, text: "Le xɔa megbe" }
          ],
          correctOptionId: 2,
          hints: ["dzidzi = far"],
          explanation: "Edzidzi = It is far in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-7",
    title: "Review: Directions",
    icon: "refresh-outline",
    description: "Review the Ewe phrases you've learned for asking for directions, giving directions, and describing locations",
    questions: [
      {
        id: 714,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'It is far' in Ewe?",
        options: [
          { id: 1, text: "Ŋgɔ" },
          { id: 2, text: "Edzidzi" },
          { id: 3, text: "Le xɔa megbe" },
          { id: 4, text: "Etsɔ ɖe" }
        ],
        correctOptionId: 2,
        hints: ["dzidzi = far"],
        explanation: "Edzidzi = It is far."
      },
      {
        id: 711,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/aleke_mawɔ_aɖo_afima.m4a"),
        options: [
          { id: 1, text: "I am lost" },
          { id: 2, text: "How do I get there?" },
          { id: 3, text: "Where is the market?" },
          { id: 4, text: "Where is the toilet?" }
        ],
        correctOptionId: 2,
        hints: ["aleke = how", "aɖo = get", "afima = there"],
        explanation: "You heard 'Aleke mawɔ aɖo afima?' which means 'How do I get there?'."
      },
      {
        id: 717,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Turn right' in Ewe?",
        options: [
          { id: 1, text: "Trɔ ɖe miã me" },
          { id: 2, text: "Zɔ mɔ hia dzi" },
          { id: 3, text: "Trɔ ɖe ɖusi me" },
          { id: 4, text: "Yi tẽ" }
        ],
        correctOptionId: 3,
        hints: ["ɖusi me = right"],
        explanation: "Trɔ ɖe ɖusi me = Turn right in Ewe."
      },
      {
        id: 710,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'Where is the toilet?' in Ewe?",
        options: [
          { id: 1, text: "Metre mɔ" },
          { id: 2, text: "Afikae nugodoƒe la le?" },
          { id: 3, text: "Afikae asia le?" },
          { id: 4, text: "Aleke mawɔ aɖo afima?" }
        ],
        correctOptionId: 2,
        hints: ["nugodoƒe = toilet"],
        explanation: "Afikae nugodoƒe la le? = Where is the toilet?"
      },
      {
        id: 715,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/ŋgɔ.m4a"),
        options: [
          { id: 1, text: "In front" },
          { id: 2, text: "It is near" },
          { id: 3, text: "It is far" },
          { id: 4, text: "Behind the house" }
        ],
        correctOptionId: 1,
        hints: ["ŋgɔ = in front"],
        explanation: "You heard 'Ŋgɔ' which means 'In front' in Ewe."
      },
      {
        id: 716,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Where is the market?' in Ewe?",
        options: [
          { id: 1, text: "Afikae nugodoƒe la le?" },
          { id: 2, text: "Metre mɔ" },
          { id: 3, text: "Aleke mawɔ aɖo afima?" },
          { id: 4, text: "Afikae asia le?" }
        ],
        correctOptionId: 4,
        hints: ["asia = market"],
        explanation: "Afikae asia le? = Where is the market?"
      },
      {
        id: 713,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/zɔ_mɔ_hia_dzi.m4a"),
        options: [
          { id: 1, text: "Turn left" },
          { id: 2, text: "Follow this road" },
          { id: 3, text: "Go straight" },
          { id: 4, text: "Turn right" }
        ],
        correctOptionId: 2,
        hints: ["zɔ = follow", "mɔ = road", "hia = this"],
        explanation: "You heard 'Zɔ mɔ hia dzi' which means 'Follow this road'."
      },
      {
        id: 712,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Turn left' in Ewe?",
        options: [
          { id: 1, text: "Yi tẽ" },
          { id: 2, text: "Trɔ ɖe ɖusi me" },
          { id: 3, text: "Zɔ mɔ hia dzi" },
          { id: 4, text: "Trɔ ɖe miã me" }
        ],
        correctOptionId: 4,
        hints: ["miã me = left"],
        explanation: "Trɔ ɖe miã me = Turn left."
      }
    ]
  }
};