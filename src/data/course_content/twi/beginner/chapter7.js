export default {
  id: 7,
  title: "Directions",
  description: "Learn how to ask for and give directions in Twi",
  icon: "navigate-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "7-1",
      type: "phrases",
      title: "Asking Directions",
      icon: "help-circle-outline",
      description: "Learn how to ask for directions in Twi",
      words: ["Adwa no wɔ he?", "Agyananbia no wɔ he?", "Mayera", "Mɛyɛ dɛn adu hɔ?"],
      vocabulary: [
        {
          id: 79,
          english: "Where is the market?",
          native: "Adwa no wɔ he?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/adwa_no_wɔ_he.m4a")
        },
        {
          id: 80,
          english: "Where is the toilet?",
          native: "Agyananbia no wɔ he?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/agyananbia_no_wɔ_he.m4a")
        },
        {
          id: 81,
          english: "I am lost",
          native: "Mayera",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/mayera.m4a")
        },
        {
          id: 82,
          english: "How do I get there?",
          native: "Mɛyɛ dɛn adu hɔ?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/mɛyɛ_dɛn_adu_hɔ.m4a")
        }
      ],
      questions: [
        {
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'Where is the market?' in Twi?",
          options: [
            { id: 2, text: "Agyananbia no wɔ he?" },
            { id: 4, text: "Mɛyɛ dɛn adu hɔ?" },
            { id: 1, text: "Adwa no wɔ he?" },
            { id: 3, text: "Mayera" }
          ],
          correctOptionId: 1,
          hints: ["adwa = market", "wɔ he = where"],
          explanation: "Adwa no wɔ he? = Where is the market? in Twi."
        },
        {
          id: 702,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/agyananbia_no_wɔ_he.m4a"),
          options: [
            { id: 1, text: "Where is the market?" },
            { id: 3, text: "I am lost" },
            { id: 2, text: "Where is the toilet?" },
            { id: 4, text: "How do I get there?" }
          ],
          correctOptionId: 2,
          hints: ["agyananbia = toilet"],
          explanation: "You heard 'Agyananbia no wɔ he?' which means 'Where is the toilet?' in Twi."
        },
        {
          id: 703,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am lost' in Twi?",
          options: [
            { id: 4, text: "Kɔ tee" },
            { id: 2, text: "Agyananbia no wɔ he?" },
            { id: 3, text: "Mayera" },
            { id: 1, text: "Adwa no wɔ he?" }
          ],
          correctOptionId: 3,
          hints: ["Mayera = I am lost"],
          explanation: "Mayera = I am lost in Twi."
        },
        {
          id: 704,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/mɛyɛ_dɛn_adu_hɔ.m4a"),
          options: [
            { id: 3, text: "I am lost" },
            { id: 1, text: "Where is the market?" },
            { id: 4, text: "How do I get there?" },
            { id: 2, text: "Where is the toilet?" }
          ],
          correctOptionId: 4,
          hints: ["adu hɔ = get there"],
          explanation: "You heard 'Mɛyɛ dɛn adu hɔ?' which means 'How do I get there?' in Twi."
        }
      ]
    },

    {
      id: "7-2",
      type: "phrases",
      title: "Giving Directions",
      icon: "map-outline",
      description: "Learn how to give directions in Twi",
      words: ["Kɔ tee", "Dane nifa", "Dane benkum", "Fa saa kwan yi so"],
      vocabulary: [
        {
          id: 83,
          english: "Go straight",
          native: "Kɔ tee",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/kɔ_tee.m4a")
        },
        {
          id: 84,
          english: "Turn right",
          native: "Dane nifa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/dane_nifa.m4a")
        },
        {
          id: 85,
          english: "Turn left",
          native: "Dane benkum",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/dane_benkum.m4a")
        },
        {
          id: 86,
          english: "Follow this road",
          native: "Fa saa kwan yi so",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/fa_saa_kwan_yi_so.m4a")
        }
      ],
      questions: [
        {
          id: 705,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Go straight' in Twi?",
          options: [
            { id: 4, text: "Fa saa kwan yi so" },
            { id: 1, text: "Kɔ tee" },
            { id: 3, text: "Dane benkum" },
            { id: 2, text: "Dane nifa" }
          ],
          correctOptionId: 1,
          hints: ["Kɔ = go", "tee = straight"],
          explanation: "Kɔ tee = Go straight in Twi."
        },
        {
          id: 706,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/dane_nifa.m4a"),
          options: [
            { id: 2, text: "Turn right" },
            { id: 4, text: "Follow this road" },
            { id: 1, text: "Go straight" },
            { id: 3, text: "Turn left" }
          ],
          correctOptionId: 2,
          hints: ["nifa = right"],
          explanation: "You heard 'Dane nifa' which means 'Turn right' in Twi."
        },
        {
          id: 707,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Turn left' in Twi?",
          options: [
            { id: 2, text: "Dane nifa" },
            { id: 1, text: "Kɔ tee" },
            { id: 4, text: "Fa saa kwan yi so" },
            { id: 3, text: "Dane benkum" }
          ],
          correctOptionId: 3,
          hints: ["benkum = left"],
          explanation: "Dane benkum = Turn left in Twi."
        },
        {
          id: 708,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/fa_saa_kwan_yi_so.m4a"),
          options: [
            { id: 3, text: "Turn left" },
            { id: 4, text: "Follow this road" },
            { id: 1, text: "Go straight" },
            { id: 2, text: "Turn right" }
          ],
          correctOptionId: 4,
          hints: ["kwan = road"],
          explanation: "You heard 'Fa saa kwan yi so' which means 'Follow this road' in Twi."
        }
      ]
    },

    {
      id: "7-3",
      type: "phrases",
      title: "Distance & Position",
      icon: "map-outline",
      description: "Learn how to describe distance and position in Twi",
      words: ["Ɛwɔ akyiri", "Ɛbɛn", "Efie no akyi", "Sukuu no anim"],
      vocabulary: [
        {
          id: 87,
          english: "It is far",
          native: "Ɛwɔ akyiri",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/ɛwɔ_akyiri.m4a")
        },
        {
          id: 88,
          english: "It is near",
          native: "Ɛbɛn",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/ɛbɛn.m4a")
        },
        {
          id: 89,
          english: "Behind the house",
          native: "Efie no akyi",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/efie_no_akyi.m4a")
        },
        {
          id: 90,
          english: "In front of the school",
          native: "Sukuu no anim",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/sukuu_no_anim.m4a")
        }
      ],
      questions: [
        {
          id: 709,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'It is far' in Twi?",
          options: [
            { id: 3, text: "Efie no akyi" },
            { id: 1, text: "Ɛwɔ akyiri" },
            { id: 4, text: "Sukuu no anim" },
            { id: 2, text: "Ɛbɛn" }
          ],
          correctOptionId: 1,
          hints: ["akyiri = far"],
          explanation: "Ɛwɔ akyiri = It is far in Twi."
        },
        {
          id: 710,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/ɛbɛn.m4a"),
          options: [
            { id: 4, text: "In front of the school" },
            { id: 2, text: "It is near" },
            { id: 1, text: "It is far" },
            { id: 3, text: "Behind the house" }
          ],
          correctOptionId: 2,
          hints: ["ɛbɛn = near"],
          explanation: "You heard 'Ɛbɛn' which means 'It is near' in Twi."
        },
        {
          id: 711,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Behind the house' in Twi?",
          options: [
            { id: 2, text: "Ɛbɛn" },
            { id: 4, text: "Sukuu no anim" },
            { id: 3, text: "Efie no akyi" },
            { id: 1, text: "Ɛwɔ akyiri" }
          ],
          correctOptionId: 3,
          hints: ["efie = house", "akyi = behind"],
          explanation: "Efie no akyi = Behind the house in Twi."
        },
        {
          id: 712,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/sukuu_no_anim.m4a"),
          options: [
            { id: 1, text: "It is far" },
            { id: 3, text: "Behind the house" },
            { id: 4, text: "In front of the school" },
            { id: 2, text: "It is near" }
          ],
          correctOptionId: 4,
          hints: ["sukuu = school", "anim = front"],
          explanation: "You heard 'Sukuu no anim' which means 'In front of the school' in Twi."
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
        id: 713,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you ask 'Where is the market?' in Twi?",
        options: [
          { id: 4, text: "Mɛyɛ dɛn adu hɔ?" },
          { id: 1, text: "Adwa no wɔ he?" },
          { id: 3, text: "Mayera" },
          { id: 2, text: "Agyananbia no wɔ he?" }
        ],
        correctOptionId: 1,
        hints: ["adwa = market"],
        explanation: "Adwa no wɔ he? = Where is the market?"
      },
      {
        id: 714,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/dane_benkum.m4a"),
        options: [
          { id: 1, text: "Go straight" },
          { id: 3, text: "Turn left" },
          { id: 4, text: "Follow this road" },
          { id: 2, text: "Turn right" }
        ],
        correctOptionId: 3,
        hints: ["benkum = left"],
        explanation: "You heard 'Dane benkum' which means 'Turn left'."
      },
      {
        id: 715,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am lost' in Twi?",
        options: [
          { id: 2, text: "Agyananbia no wɔ he?" },
          { id: 3, text: "Mayera" },
          { id: 1, text: "Adwa no wɔ he?" },
          { id: 4, text: "Kɔ tee" }
        ],
        correctOptionId: 3,
        hints: ["Mayera = I am lost"],
        explanation: "Mayera = I am lost."
      },
      {
        id: 716,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/ɛwɔ_akyiri.m4a"),
        options: [
          { id: 4, text: "In front of the school" },
          { id: 2, text: "It is near" },
          { id: 1, text: "It is far" },
          { id: 3, text: "Behind the house" }
        ],
        correctOptionId: 1,
        hints: ["akyiri = far"],
        explanation: "You heard 'Ɛwɔ akyiri' which means 'It is far'."
      },
      {
        id: 717,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'How do I get there?' in Twi?",
        options: [
          { id: 3, text: "Mayera" },
          { id: 4, text: "Mɛyɛ dɛn adu hɔ?" },
          { id: 1, text: "Adwa no wɔ he?" },
          { id: 2, text: "Agyananbia no wɔ he?" }
        ],
        correctOptionId: 4,
        hints: ["adu hɔ = get there"],
        explanation: "Mɛyɛ dɛn adu hɔ? = How do I get there?"
      },
      {
        id: 718,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Go straight' in Twi?",
        options: [
          { id: 3, text: "Dane benkum" },
          { id: 1, text: "Kɔ tee" },
          { id: 4, text: "Fa saa kwan yi so" },
          { id: 2, text: "Dane nifa" }
        ],
        correctOptionId: 1,
        hints: ["tee = straight"],
        explanation: "Kɔ tee = Go straight."
      },
      {
        id: 719,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Turn right' in Twi?",
        options: [
          { id: 4, text: "Fa saa kwan yi so" },
          { id: 2, text: "Dane nifa" },
          { id: 1, text: "Kɔ tee" },
          { id: 3, text: "Dane benkum" }
        ],
        correctOptionId: 2,
        hints: ["nifa = right"],
        explanation: "Dane nifa = Turn right."
      },
      {
        id: 720,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'It is near' in Twi?",
        options: [
          { id: 1, text: "Ɛwɔ akyiri" },
          { id: 4, text: "Sukuu no anim" },
          { id: 2, text: "Ɛbɛn" },
          { id: 3, text: "Efie no akyi" }
        ],
        correctOptionId: 2,
        hints: ["ɛbɛn = near"],
        explanation: "Ɛbɛn = It is near."
      },
      {
        id: 721,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Follow this road' in Twi?",
        options: [
          { id: 2, text: "Dane nifa" },
          { id: 4, text: "Fa saa kwan yi so" },
          { id: 1, text: "Kɔ tee" },
          { id: 3, text: "Dane benkum" }
        ],
        correctOptionId: 4,
        hints: ["kwan = road"],
        explanation: "Fa saa kwan yi so = Follow this road."
      },
      {
        id: 722,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter7/efie_no_akyi.m4a"),
        options: [
          { id: 3, text: "Behind the house" },
          { id: 1, text: "It is far" },
          { id: 4, text: "In front of the school" },
          { id: 2, text: "It is near" }
        ],
        correctOptionId: 3,
        hints: ["efie = house", "akyi = behind"],
        explanation: "You heard 'Efie no akyi' which means 'Behind the house'."
      }
    ]
  }
};