export default {
  id: 7,
  title: "Directions",
  description: "Learn how to ask for and give directions in Ewe",
  icon: "compass-outline",
  totalXp: 10,
  difficulty: "Beginner",

  sections: [
    {
      id: "7-1",
      type: "words",
      title: "Asking Directions",
      icon: "help-circle-outline",
      description: "Learn how to ask for directions in Ewe",
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
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'Where is the market?' in Ewe?",
          options: [
            { id: 1, text: "Afikae asia le?" },
            { id: 2, text: "Afikae nugodoƒe la le?" },
            { id: 3, text: "Metre mɔ" },
            { id: 4, text: "Aleke mawɔ aɖo afima?" }
          ],
          correctOptionId: 1,
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
            { id: 1, text: "Where is the market?" },
            { id: 2, text: "Where is the toilet?" },
            { id: 3, text: "I am lost" },
            { id: 4, text: "How do I get there?" }
          ],
          correctOptionId: 3,
          hints: ["metre = I am lost"],
          explanation: "You heard 'Metre mɔ' which means 'I am lost' in Ewe."
        },
        {
          id: 703,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'Where is the toilet?' in Ewe?",
          options: [
            { id: 1, text: "Afikae asia le?" },
            { id: 2, text: "Afikae nugodoƒe la le?" },
            { id: 3, text: "Metre mɔ" },
            { id: 4, text: "Aleke mawɔ aɖo afima?" }
          ],
          correctOptionId: 2,
          hints: ["nugodoƒe = toilet"],
          explanation: "Afikae nugodoƒe la le? = Where is the toilet? in Ewe."
        }
      ]
    },

    {
      id: "7-2",
      type: "words",
      title: "Giving Directions",
      icon: "navigate-outline",
      description: "Learn how to give directions in Ewe",
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
          id: 704,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Go straight' in Ewe?",
          options: [
            { id: 1, text: "Yi tẽ" },
            { id: 2, text: "Trɔ ɖe ɖusi me" },
            { id: 3, text: "Trɔ ɖe miã me" },
            { id: 4, text: "Zɔ mɔ hia dzi" }
          ],
          correctOptionId: 1,
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
            { id: 1, text: "Go straight" },
            { id: 2, text: "Turn right" },
            { id: 3, text: "Turn left" },
            { id: 4, text: "Follow this road" }
          ],
          correctOptionId: 2,
          hints: ["trɔ = turn", "ɖusi me = right"],
          explanation: "You heard 'Trɔ ɖe ɖusi me' which means 'Turn right' in Ewe."
        },
        {
          id: 706,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Turn left' in Ewe?",
          options: [
            { id: 1, text: "Yi tẽ" },
            { id: 2, text: "Trɔ ɖe ɖusi me" },
            { id: 3, text: "Trɔ ɖe miã me" },
            { id: 4, text: "Zɔ mɔ hia dzi" }
          ],
          correctOptionId: 3,
          hints: ["miã me = left"],
          explanation: "Trɔ ɖe miã me = Turn left in Ewe."
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
          id: 707,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'It is far' in Ewe?",
          options: [
            { id: 1, text: "Edzidzi" },
            { id: 2, text: "Etsɔ ɖe" },
            { id: 3, text: "Le xɔa megbe" },
            { id: 4, text: "Ŋgɔ" }
          ],
          correctOptionId: 1,
          hints: ["dzidzi = far"],
          explanation: "Edzidzi = It is far in Ewe."
        },
        {
          id: 708,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/etsɔ_ɖe.m4a"),
          options: [
            { id: 1, text: "It is far" },
            { id: 2, text: "It is near" },
            { id: 3, text: "Behind the house" },
            { id: 4, text: "In front" }
          ],
          correctOptionId: 2,
          hints: ["tsɔ = near"],
          explanation: "You heard 'Etsɔ ɖe' which means 'It is near' in Ewe."
        },
        {
          id: 709,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Behind the house' in Ewe?",
          options: [
            { id: 1, text: "Edzidzi" },
            { id: 2, text: "Etsɔ ɖe" },
            { id: 3, text: "Le xɔa megbe" },
            { id: 4, text: "Ŋgɔ" }
          ],
          correctOptionId: 3,
          hints: ["megbe = behind"],
          explanation: "Le xɔa megbe = Behind the house in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-7",
    title: "Review: Directions",
    icon: "refresh-outline",
    description: "Review all the direction vocabulary you've learned",
    questions: [
      {
        id: 710,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'Where is the toilet?' in Ewe?",
        options: [
          { id: 1, text: "Afikae asia le?" },
          { id: 2, text: "Afikae nugodoƒe la le?" },
          { id: 3, text: "Metre mɔ" },
          { id: 4, text: "Aleke mawɔ aɖo afima?" }
        ],
        correctOptionId: 2,
        hints: ["nugodoƒe = toilet"],
        explanation: "Afikae nugodoƒe la le? = Where is the toilet?"
      },
      {
        id: 711,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/aleke_mawɔ_aɖo_afima.m4a"),
        options: [
          { id: 1, text: "Where is the market?" },
          { id: 2, text: "Where is the toilet?" },
          { id: 3, text: "I am lost" },
          { id: 4, text: "How do I get there?" }
        ],
        correctOptionId: 4,
        hints: ["aleke = how", "aɖo = get", "afima = there"],
        explanation: "You heard 'Aleke mawɔ aɖo afima?' which means 'How do I get there?'."
      },
      {
        id: 712,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Turn left' in Ewe?",
        options: [
          { id: 1, text: "Yi tẽ" },
          { id: 2, text: "Trɔ ɖe ɖusi me" },
          { id: 3, text: "Trɔ ɖe miã me" },
          { id: 4, text: "Zɔ mɔ hia dzi" }
        ],
        correctOptionId: 3,
        hints: ["miã me = left"],
        explanation: "Trɔ ɖe miã me = Turn left."
      },
      {
        id: 713,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/zɔ_mɔ_hia_dzi.m4a"),
        options: [
          { id: 1, text: "Go straight" },
          { id: 2, text: "Turn right" },
          { id: 3, text: "Turn left" },
          { id: 4, text: "Follow this road" }
        ],
        correctOptionId: 4,
        hints: ["zɔ = follow", "mɔ = road", "hia = this"],
        explanation: "You heard 'Zɔ mɔ hia dzi' which means 'Follow this road'."
      },
      {
        id: 714,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'It is far' in Ewe?",
        options: [
          { id: 1, text: "Edzidzi" },
          { id: 2, text: "Etsɔ ɖe" },
          { id: 3, text: "Le xɔa megbe" },
          { id: 4, text: "Ŋgɔ" }
        ],
        correctOptionId: 1,
        hints: ["dzidzi = far"],
        explanation: "Edzidzi = It is far."
      },
      {
        id: 715,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter7/ŋgɔ.m4a"),
        options: [
          { id: 1, text: "It is far" },
          { id: 2, text: "It is near" },
          { id: 3, text: "Behind the house" },
          { id: 4, text: "In front" }
        ],
        correctOptionId: 4,
        hints: ["ŋgɔ = in front"],
        explanation: "You heard 'Ŋgɔ' which means 'In front' in Ewe."
      },
      {
        id: 716,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Where is the market?' in Ewe?",
        options: [
          { id: 1, text: "Afikae asia le?" },
          { id: 2, text: "Afikae nugodoƒe la le?" },
          { id: 3, text: "Metre mɔ" },
          { id: 4, text: "Aleke mawɔ aɖo afima?" }
        ],
        correctOptionId: 1,
        hints: ["asia = market"],
        explanation: "Afikae asia le? = Where is the market? in Ewe."
      },
      {
        id: 717,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Turn right' in Ewe?",
        options: [
          { id: 1, text: "Yi tẽ" },
          { id: 2, text: "Trɔ ɖe ɖusi me" },
          { id: 3, text: "Trɔ ɖe miã me" },
          { id: 4, text: "Zɔ mɔ hia dzi" }
        ],
        correctOptionId: 2,
        hints: ["ɖusi me = right"],
        explanation: "Trɔ ɖe ɖusi me = Turn right in Ewe."
      }
    ]
  }
};