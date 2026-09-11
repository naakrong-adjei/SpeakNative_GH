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
          hints: ["ejara = price", "tsɔ = too much"],
          explanation: "Ejara wa tsɔ = It is too expensive in Ga."
        },
        {
          id: 603,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Ejara [_____] (It is cheap)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "waaa" },
            { id: "opt2", text: "wa tsɔ" },
            { id: "opt3", text: "shi" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["waaa = very"],
          explanation: "Ejara waaa = It is cheap in Ga."
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
          id: 604,
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
          id: 605,
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
          id: 606,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Oyɛ shika [_____] lo? (Do you have change?)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "bibioo" },
            { id: "opt2", text: "niyenii" },
            { id: "opt3", text: "ekroko" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["bibioo = change"],
          explanation: "Oyɛ shika bibioo lo? = Do you have change? in Ga."
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
          id: 607,
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
          id: 608,
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
          id: 609,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Mitaoɔ ni mahe [_____] (I want to buy this)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "enɛ" },
            { id: "opt2", text: "shi" },
            { id: "opt3", text: "tsɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["enɛ = this"],
          explanation: "Mitaoɔ ni mahe enɛ = I want to buy this in Ga."
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
          id: 610,
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
          id: 611,
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
          id: 612,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Miikwɛ [_____] (I am just looking)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "kɛkɛ" },
            { id: "opt2", text: "tsɔ" },
            { id: "opt3", text: "shi" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["kɛkɛ = just"],
          explanation: "Miikwɛ kɛkɛ = I am just looking in Ga."
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
        id: 613,
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
        id: 614,
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
        explanation: "Ejara waaa = It is cheap."
      },
      {
        id: 615,
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
        explanation: "Tse nɔ fioo = Reduce it a little."
      },
      {
        id: 616,
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
        hints: ["shika = money", "bibioo = change"],
        explanation: "Oyɛ shika bibioo lo? = Do you have change?"
      },
      {
        id: 617,
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
        explanation: "Makɔ enɛ = I will take this."
      },
      {
        id: 618,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I want to buy this' in Ga?",
        options: [
          { id: 1, text: "Makɔ enɛ" },
          { id: 2, text: "Mitaoɔ ni mahe enɛ" },
          { id: 3, text: "Tse nɔ fioo" },
          { id: 4, text: "Miikwɛ kɛkɛ" }
        ],
        correctOptionId: 2,
        hints: ["mahe = buy"],
        explanation: "Mitaoɔ ni mahe enɛ = I want to buy this."
      },
      {
        id: 619,
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
        id: 620,
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
        id: 621,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Ejara wa [_____] (It is too expensive)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "tsɔ" },
          { id: "opt2", text: "waaa" },
          { id: "opt3", text: "shi" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["tsɔ = too much"],
        explanation: "Ejara wa tsɔ = It is too expensive."
      },
      {
        id: 622,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Tsɔɔmɔ mi [_____] (Show me another one)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "ekroko" },
          { id: "opt2", text: "fioo" },
          { id: "opt3", text: "bibioo" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["ekroko = another"],
        explanation: "Tsɔɔmɔ mi ekroko = Show me another one."
      }
    ]
  }
};