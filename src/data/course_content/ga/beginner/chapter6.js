export default {
  id: 6,
  title: "Shopping",
  description: "Learn shopping and market vocabulary in Ga",
  icon: "cart-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "6-1",
      type: "words",
      title: "Asking Prices",
      icon: "pricetag-outline",
      description: "Learn how to ask about prices in Ga",
      words: ["Enyiɛ ni?", "Ejara wa tsɔ", "Ejara waaa"],
      vocabulary: [
        {
          id: 74,
          english: "How much is it?",
          native: "Enyiɛ ni?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/enyiɛ_ni.m4a")
        },
        {
          id: 75,
          english: "It is too expensive",
          native: "Ejara wa tsɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/ejara_wa_tsɔ.m4a")
        },
        {
          id: 84,
          english: "It is cheap",
          native: "Ejara waaa",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/ejara_waaa.m4a")
        }
      ],
      questions: [
        {
          id: 601,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'How much is it?' in Ga?",
          options: [
            { id: 1, text: "Enyiɛ ni?" },
            { id: 2, text: "Ejara wa tsɔ" },
            { id: 3, text: "Ejara waaa" },
            { id: 4, text: "Tse nɔ fioo" }
          ],
          correctOptionId: 1,
          hints: ["Question about price"],
          explanation: "Enyiɛ ni? = How much is it? in Ga."
        },
        {
          id: 602,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/ejara_wa_tsɔ.m4a"),
          options: [
            { id: 1, text: "How much is it?" },
            { id: 2, text: "It is too expensive" },
            { id: 3, text: "It is cheap" },
            { id: 4, text: "Reduce it a little" }
          ],
          correctOptionId: 2,
          hints: ["ejara = price", "tsɔ = too much"],
          explanation: "You heard 'Ejara wa tsɔ' which means 'It is too expensive' in Ga."
        },
        {
          id: 603,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'It is cheap' in Ga?",
          options: [
            { id: 1, text: "Enyiɛ ni?" },
            { id: 2, text: "Ejara wa tsɔ" },
            { id: 3, text: "Ejara waaa" },
            { id: 4, text: "Tse nɔ fioo" }
          ],
          correctOptionId: 3,
          hints: ["waaa = very"],
          explanation: "Ejara waaa = It is cheap in Ga."
        },
        {
          id: 604,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/enyiɛ_ni.m4a"),
          options: [
            { id: 1, text: "How much is it?" },
            { id: 2, text: "It is too expensive" },
            { id: 3, text: "It is cheap" },
            { id: 4, text: "Do you have change?" }
          ],
          correctOptionId: 1,
          hints: ["Question about price"],
          explanation: "You heard 'Enyiɛ ni?' which means 'How much is it?' in Ga."
        }
      ]
    },

    {
      id: "6-2",
      type: "words",
      title: "Bargaining",
      icon: "people-outline",
      description: "Learn how to bargain at the market in Ga",
      words: ["Tse nɔ fioo", "Oyɛ shika bibioo lo?", "Tsɔɔmɔ mi ekroko"],
      vocabulary: [
        {
          id: 76,
          english: "Reduce it a little",
          native: "Tse nɔ fioo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/tse_nɔ_fioo.m4a")
        },
        {
          id: 81,
          english: "Do you have change?",
          native: "Oyɛ shika bibioo lo?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/oyɛ_shika_bibioo_lo.m4a")
        },
        {
          id: 83,
          english: "Show me another one",
          native: "Tsɔɔmɔ mi ekroko",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/tsɔɔmɔ_mi_ekroko.m4a")
        }
      ],
      questions: [
        {
          id: 605,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Reduce it a little' in Ga?",
          options: [
            { id: 1, text: "Tse nɔ fioo" },
            { id: 2, text: "Oyɛ shika bibioo lo?" },
            { id: 3, text: "Tsɔɔmɔ mi ekroko" },
            { id: 4, text: "Enyiɛ ni?" }
          ],
          correctOptionId: 1,
          hints: ["Tse = reduce", "fioo = a little"],
          explanation: "Tse nɔ fioo = Reduce it a little in Ga."
        },
        {
          id: 606,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/oyɛ_shika_bibioo_lo.m4a"),
          options: [
            { id: 1, text: "Reduce it a little" },
            { id: 2, text: "Do you have change?" },
            { id: 3, text: "Show me another one" },
            { id: 4, text: "How much is it?" }
          ],
          correctOptionId: 2,
          hints: ["shika = money", "bibioo = change"],
          explanation: "You heard 'Oyɛ shika bibioo lo?' which means 'Do you have change?' in Ga."
        },
        {
          id: 607,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Show me another one' in Ga?",
          options: [
            { id: 1, text: "Tse nɔ fioo" },
            { id: 2, text: "Oyɛ shika bibioo lo?" },
            { id: 3, text: "Tsɔɔmɔ mi ekroko" },
            { id: 4, text: "Enyiɛ ni?" }
          ],
          correctOptionId: 3,
          hints: ["Tsɔɔmɔ mi = show me", "ekroko = another"],
          explanation: "Tsɔɔmɔ mi ekroko = Show me another one in Ga."
        },
        {
          id: 608,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/tse_nɔ_fioo.m4a"),
          options: [
            { id: 1, text: "Reduce it a little" },
            { id: 2, text: "Do you have change?" },
            { id: 3, text: "Show me another one" },
            { id: 4, text: "It is cheap" }
          ],
          correctOptionId: 1,
          hints: ["Tse = reduce"],
          explanation: "You heard 'Tse nɔ fioo' which means 'Reduce it a little' in Ga."
        }
      ]
    },

    {
      id: "6-3",
      type: "words",
      title: "Buying It",
      icon: "bag-outline",
      description: "Learn phrases for completing a purchase in Ga",
      words: ["Mitaoɔ ni mahe enɛ", "Makɔ enɛ"],
      vocabulary: [
        {
          id: 77,
          english: "I want to buy this",
          native: "Mitaoɔ ni mahe enɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/mitaoɔ_ni_mahe_enɛ.m4a")
        },
        {
          id: 82,
          english: "I will take this",
          native: "Makɔ enɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/makɔ_enɛ.m4a")
        }
      ],
      questions: [
        {
          id: 609,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I want to buy this' in Ga?",
          options: [
            { id: 1, text: "Mitaoɔ ni mahe enɛ" },
            { id: 2, text: "Makɔ enɛ" },
            { id: 3, text: "Tse nɔ fioo" },
            { id: 4, text: "Miikwɛ kɛkɛ" }
          ],
          correctOptionId: 1,
          hints: ["Mitaoɔ = I want", "mahe = buy"],
          explanation: "Mitaoɔ ni mahe enɛ = I want to buy this in Ga."
        },
        {
          id: 610,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/makɔ_enɛ.m4a"),
          options: [
            { id: 1, text: "I want to buy this" },
            { id: 2, text: "I will take this" },
            { id: 3, text: "Show me another one" },
            { id: 4, text: "I am just looking" }
          ],
          correctOptionId: 2,
          hints: ["Makɔ = I will take"],
          explanation: "You heard 'Makɔ enɛ' which means 'I will take this' in Ga."
        },
        {
          id: 611,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I will take this' in Ga?",
          options: [
            { id: 1, text: "Mitaoɔ ni mahe enɛ" },
            { id: 2, text: "Makɔ enɛ" },
            { id: 3, text: "Tse nɔ fioo" },
            { id: 4, text: "Miikwɛ kɛkɛ" }
          ],
          correctOptionId: 2,
          hints: ["Makɔ = I will take"],
          explanation: "Makɔ enɛ = I will take this in Ga."
        },
        {
          id: 612,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/mitaoɔ_ni_mahe_enɛ.m4a"),
          options: [
            { id: 1, text: "I want to buy this" },
            { id: 2, text: "I will take this" },
            { id: 3, text: "Reduce it a little" },
            { id: 4, text: "It is too expensive" }
          ],
          correctOptionId: 1,
          hints: ["mahe = buy"],
          explanation: "You heard 'Mitaoɔ ni mahe enɛ' which means 'I want to buy this' in Ga."
        }
      ]
    },

    {
      id: "6-4",
      type: "words",
      title: "Market Words",
      icon: "storefront-outline",
      description: "Learn essential market vocabulary in Ga",
      words: ["Jara", "Shika", "Miikwɛ kɛkɛ"],
      vocabulary: [
        {
          id: 78,
          english: "Market",
          native: "Jara",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/jara.m4a")
        },
        {
          id: 79,
          english: "Money",
          native: "Shika",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/shika.m4a")
        },
        {
          id: 80,
          english: "I am just looking",
          native: "Miikwɛ kɛkɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/miikwɛ_kɛkɛ.m4a")
        }
      ],
      questions: [
        {
          id: 613,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Market' in Ga?",
          options: [
            { id: 1, text: "Jara" },
            { id: 2, text: "Shika" },
            { id: 3, text: "Miikwɛ kɛkɛ" },
            { id: 4, text: "Enyiɛ ni?" }
          ],
          correctOptionId: 1,
          hints: ["Where you buy things"],
          explanation: "Jara = Market in Ga."
        },
        {
          id: 614,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/shika.m4a"),
          options: [
            { id: 1, text: "Market" },
            { id: 2, text: "Money" },
            { id: 3, text: "Change" },
            { id: 4, text: "Price" }
          ],
          correctOptionId: 2,
          hints: ["What you pay with"],
          explanation: "You heard 'Shika' which means Money in Ga."
        },
        {
          id: 615,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Money' in Ga?",
          options: [
            { id: 1, text: "Jara" },
            { id: 2, text: "Shika" },
            { id: 3, text: "Miikwɛ kɛkɛ" },
            { id: 4, text: "Enyiɛ ni?" }
          ],
          correctOptionId: 2,
          hints: ["What you pay with"],
          explanation: "Shika = Money in Ga."
        },
        {
          id: 616,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/miikwɛ_kɛkɛ.m4a"),
          options: [
            { id: 1, text: "Market" },
            { id: 2, text: "Money" },
            { id: 3, text: "I am just looking" },
            { id: 4, text: "How much is it?" }
          ],
          correctOptionId: 3,
          hints: ["kɛkɛ = just"],
          explanation: "You heard 'Miikwɛ kɛkɛ' which means 'I am just looking' in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-6",
    title: "Review: Shopping",
    icon: "refresh-outline",
    description: "Review all the shopping and market vocabulary you've learned",
    questions: [
      {
        id: 617,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you ask 'How much is it?' in Ga?",
        options: [
          { id: 1, text: "Enyiɛ ni?" },
          { id: 2, text: "Ejara wa tsɔ" },
          { id: 3, text: "Ejara waaa" },
          { id: 4, text: "Tse nɔ fioo" }
        ],
        correctOptionId: 1,
        hints: ["Question about price"],
        explanation: "Enyiɛ ni? = How much is it?"
      },
      {
        id: 618,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/ejara_waaa.m4a"),
        options: [
          { id: 1, text: "How much is it?" },
          { id: 2, text: "It is too expensive" },
          { id: 3, text: "It is cheap" },
          { id: 4, text: "Reduce it a little" }
        ],
        correctOptionId: 3,
        hints: ["waaa = very"],
        explanation: "You heard 'Ejara waaa' which means 'It is cheap'."
      },
      {
        id: 619,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'It is too expensive' in Ga?",
        options: [
          { id: 1, text: "Enyiɛ ni?" },
          { id: 2, text: "Ejara wa tsɔ" },
          { id: 3, text: "Ejara waaa" },
          { id: 4, text: "Tse nɔ fioo" }
        ],
        correctOptionId: 2,
        hints: ["tsɔ = too much"],
        explanation: "Ejara wa tsɔ = It is too expensive."
      },
      {
        id: 620,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/tsɔɔmɔ_mi_ekroko.m4a"),
        options: [
          { id: 1, text: "Reduce it a little" },
          { id: 2, text: "Do you have change?" },
          { id: 3, text: "Show me another one" },
          { id: 4, text: "I will take this" }
        ],
        correctOptionId: 3,
        hints: ["ekroko = another"],
        explanation: "You heard 'Tsɔɔmɔ mi ekroko' which means 'Show me another one'."
      },
      {
        id: 621,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Reduce it a little' in Ga?",
        options: [
          { id: 1, text: "Tse nɔ fioo" },
          { id: 2, text: "Oyɛ shika bibioo lo?" },
          { id: 3, text: "Tsɔɔmɔ mi ekroko" },
          { id: 4, text: "Enyiɛ ni?" }
        ],
        correctOptionId: 1,
        hints: ["fioo = a little"],
        explanation: "Tse nɔ fioo = Reduce it a little."
      },
      {
        id: 622,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/makɔ_enɛ.m4a"),
        options: [
          { id: 1, text: "I want to buy this" },
          { id: 2, text: "I will take this" },
          { id: 3, text: "Show me another one" },
          { id: 4, text: "I am just looking" }
        ],
        correctOptionId: 2,
        hints: ["Makɔ = I will take"],
        explanation: "You heard 'Makɔ enɛ' which means 'I will take this'."
      },
      {
        id: 623,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Do you have change?' in Ga?",
        options: [
          { id: 1, text: "Tse nɔ fioo" },
          { id: 2, text: "Oyɛ shika bibioo lo?" },
          { id: 3, text: "Tsɔɔmɔ mi ekroko" },
          { id: 4, text: "Enyiɛ ni?" }
        ],
        correctOptionId: 2,
        hints: ["shika = money"],
        explanation: "Oyɛ shika bibioo lo? = Do you have change?"
      },
      {
        id: 624,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I want to buy this' in Ga?",
        options: [
          { id: 1, text: "Mitaoɔ ni mahe enɛ" },
          { id: 2, text: "Makɔ enɛ" },
          { id: 3, text: "Tse nɔ fioo" },
          { id: 4, text: "Miikwɛ kɛkɛ" }
        ],
        correctOptionId: 1,
        hints: ["mahe = buy"],
        explanation: "Mitaoɔ ni mahe enɛ = I want to buy this."
      },
      {
        id: 625,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What word did you hear?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/jara.m4a"),
        options: [
          { id: 1, text: "Market" },
          { id: 2, text: "Money" },
          { id: 3, text: "Change" },
          { id: 4, text: "Price" }
        ],
        correctOptionId: 1,
        hints: ["Where you buy things"],
        explanation: "You heard 'Jara' which means Market in Ga."
      },
      {
        id: 626,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Market' in Ga?",
        options: [
          { id: 1, text: "Jara" },
          { id: 2, text: "Shika" },
          { id: 3, text: "Miikwɛ kɛkɛ" },
          { id: 4, text: "Enyiɛ ni?" }
        ],
        correctOptionId: 1,
        hints: ["Where you buy things"],
        explanation: "Jara = Market."
      },
      {
        id: 627,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Money' in Ga?",
        options: [
          { id: 1, text: "Jara" },
          { id: 2, text: "Shika" },
          { id: 3, text: "Miikwɛ kɛkɛ" },
          { id: 4, text: "Enyiɛ ni?" }
        ],
        correctOptionId: 2,
        hints: ["What you pay with"],
        explanation: "Shika = Money."
      },
      {
        id: 628,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter6/mitaoɔ_ni_mahe_enɛ.m4a"),
        options: [
          { id: 1, text: "I want to buy this" },
          { id: 2, text: "I will take this" },
          { id: 3, text: "Reduce it a little" },
          { id: 4, text: "It is cheap" }
        ],
        correctOptionId: 1,
        hints: ["mahe = buy"],
        explanation: "You heard 'Mitaoɔ ni mahe enɛ' which means 'I want to buy this'."
      }
    ]
  }
};