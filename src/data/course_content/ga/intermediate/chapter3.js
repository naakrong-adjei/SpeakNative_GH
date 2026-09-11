export default {
  id: 12,
  title: "Market Negotiation",
  description: "Learn market negotiation vocabulary in Ga",
  icon: "handshake-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "12-1",
      type: "words",
      title: "Opening Bargaining",
      icon: "tag-outline",
      description: "Learn how to start bargaining and ask for a better price in Ga",
      words: ["Mɛni ji ojara naagbee?", "Obaanyɛ okɛ fioo afata he?", "Ba jara lɛ shi oha mi", "Mihe lɛ shika bibioo yɛ jɛi"],
      vocabulary: [
        {
          id: 156,
          english: "What is your last price?",
          native: "Mɛni ji ojara naagbee?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter12/mɛni_ji_ojara_naagbee.m4a")
        },
        {
          id: 158,
          english: "Can you add a little?",
          native: "Obaanyɛ okɛ fioo afata he?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter12/obaanyɛ_okɛ_fioo_afata_he.m4a")
        },
        {
          id: 160,
          english: "Give me a discount",
          native: "Ba jara lɛ shi oha mi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter12/ba_jara_lɛ_shi_oha_mi.m4a")
        },
        {
          id: 163,
          english: "I bought it cheaper there",
          native: "Mihe lɛ shika bibioo yɛ jɛi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter12/mihe_lɛ_shika_bibioo_yɛ_jɛi.m4a")
        }
      ],
      questions: [
        {
          id: 1201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'What is your last price?' in Ga?",
          options: [
            { id: 1, text: "Mɛni ji ojara naagbee?" },
            { id: 2, text: "Obaanyɛ okɛ fioo afata he?" },
            { id: 3, text: "Ba jara lɛ shi oha mi" },
            { id: 4, text: "Mihe lɛ shika bibioo yɛ jɛi" }
          ],
          correctOptionId: 1,
          hints: ["ojara = your price", "naagbee = last/final"],
          explanation: "Mɛni ji ojara naagbee? = What is your last price? in Ga."
        },
        {
          id: 1202,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Can you add a little?' in Ga?",
          options: [
            { id: 1, text: "Mɛni ji ojara naagbee?" },
            { id: 2, text: "Obaanyɛ okɛ fioo afata he?" },
            { id: 3, text: "Ba jara lɛ shi oha mi" },
            { id: 4, text: "Mibɛ shika pii" }
          ],
          correctOptionId: 2,
          hints: ["fioo = a little", "afata he = add to it"],
          explanation: "Obaanyɛ okɛ fioo afata he? = Can you add a little? in Ga."
        },
        {
          id: 1203,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Give me a discount' in Ga?",
          options: [
            { id: 1, text: "Mɛni ji ojara naagbee?" },
            { id: 2, text: "Obaanyɛ okɛ fioo afata he?" },
            { id: 3, text: "Ba jara lɛ shi oha mi" },
            { id: 4, text: "Hiɛmɔ sɛɛdamɔ" }
          ],
          correctOptionId: 3,
          hints: ["Ba jara lɛ shi = reduce the price", "oha mi = give me"],
          explanation: "Ba jara lɛ shi oha mi = Give me a discount in Ga."
        },
        {
          id: 1204,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I bought it cheaper there' in Ga?",
          options: [
            { id: 1, text: "Mɛni ji ojara naagbee?" },
            { id: 2, text: "Obaanyɛ okɛ fioo afata he?" },
            { id: 3, text: "Ba jara lɛ shi oha mi" },
            { id: 4, text: "Mihe lɛ shika bibioo yɛ jɛi" }
          ],
          correctOptionId: 4,
          hints: ["Mihe lɛ = I bought it", "shika bibioo = cheaper"],
          explanation: "Mihe lɛ shika bibioo yɛ jɛi = I bought it cheaper there in Ga."
        }
      ]
    },

    {
      id: "12-2",
      type: "words",
      title: "Making Offers & Paying",
      icon: "banknote-outline",
      description: "Learn how to make offers and handle payment in Ga",
      words: ["Mahe enyɔ", "Mibɛ shika pii", "Ehe tse lo?", "Kanemɔ shika lɛ", "Hiɛmɔ sɛɛdamɔ"],
      vocabulary: [
        {
          id: 157,
          english: "I will buy two",
          native: "Mahe enyɔ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter12/mahe_enyɔ.m4a")
        },
        {
          id: 161,
          english: "I don't have enough money",
          native: "Mibɛ shika pii",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter12/mibɛ_shika_pii.m4a")
        },
        {
          id: 162,
          english: "Is it fresh?",
          native: "Ehe tse lo?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter12/ehe_tse_lo.m4a")
        },
        {
          id: 164,
          english: "Count the money",
          native: "Kanemɔ shika lɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter12/kanemɔ_shika_lɛ.m4a")
        },
        {
          id: 165,
          english: "Keep the change",
          native: "Hiɛmɔ sɛɛdamɔ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter12/hiɛmɔ_sɛɛdamɔ.m4a")
        }
      ],
      questions: [
        {
          id: 1205,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I will buy two' in Ga?",
          options: [
            { id: 1, text: "Mahe enyɔ" },
            { id: 2, text: "Mibɛ shika pii" },
            { id: 3, text: "Ehe tse lo?" },
            { id: 4, text: "Kanemɔ shika lɛ" }
          ],
          correctOptionId: 1,
          hints: ["Mahe = I will buy", "enyɔ = two"],
          explanation: "Mahe enyɔ = I will buy two in Ga."
        },
        {
          id: 1206,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I don't have enough money' in Ga?",
          options: [
            { id: 1, text: "Mahe enyɔ" },
            { id: 2, text: "Mibɛ shika pii" },
            { id: 3, text: "Ehe tse lo?" },
            { id: 4, text: "Hiɛmɔ sɛɛdamɔ" }
          ],
          correctOptionId: 2,
          hints: ["Mibɛ = I don't have", "shika pii = enough money"],
          explanation: "Mibɛ shika pii = I don't have enough money in Ga."
        },
        {
          id: 1207,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Is it fresh?' in Ga?",
          options: [
            { id: 1, text: "Mahe enyɔ" },
            { id: 2, text: "Mibɛ shika pii" },
            { id: 3, text: "Ehe tse lo?" },
            { id: 4, text: "Kanemɔ shika lɛ" }
          ],
          correctOptionId: 3,
          hints: ["Ehe tse = it is fresh", "lo = question marker"],
          explanation: "Ehe tse lo? = Is it fresh? in Ga."
        },
        {
          id: 1208,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Count the money' in Ga?",
          options: [
            { id: 1, text: "Mahe enyɔ" },
            { id: 2, text: "Mibɛ shika pii" },
            { id: 3, text: "Ehe tse lo?" },
            { id: 4, text: "Kanemɔ shika lɛ" }
          ],
          correctOptionId: 4,
          hints: ["Kanemɔ = count", "shika lɛ = the money"],
          explanation: "Kanemɔ shika lɛ = Count the money in Ga."
        },
        {
          id: 1209,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Keep the change' in Ga?",
          options: [
            { id: 1, text: "Hiɛmɔ sɛɛdamɔ" },
            { id: 2, text: "Mibɛ shika pii" },
            { id: 3, text: "Ehe tse lo?" },
            { id: 4, text: "Kanemɔ shika lɛ" }
          ],
          correctOptionId: 1,
          hints: ["Hiɛmɔ = keep", "sɛɛdamɔ = change"],
          explanation: "Hiɛmɔ sɛɛdamɔ = Keep the change in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-12",
    title: "Review: Market Negotiation",
    icon: "refresh-outline",
    description: "Review all the market negotiation vocabulary you've learned",
    questions: [
      {
        id: 1210,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'What is your last price?' in Ga?",
        options: [
          { id: 1, text: "Mɛni ji ojara naagbee?" },
          { id: 2, text: "Obaanyɛ okɛ fioo afata he?" },
          { id: 3, text: "Ba jara lɛ shi oha mi" },
          { id: 4, text: "Mihe lɛ shika bibioo yɛ jɛi" }
        ],
        correctOptionId: 1,
        hints: ["naagbee = last/final"],
        explanation: "Mɛni ji ojara naagbee? = What is your last price?"
      },
      {
        id: 1211,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Can you add a little?' in Ga?",
        options: [
          { id: 1, text: "Mɛni ji ojara naagbee?" },
          { id: 2, text: "Obaanyɛ okɛ fioo afata he?" },
          { id: 3, text: "Ba jara lɛ shi oha mi" },
          { id: 4, text: "Mibɛ shika pii" }
        ],
        correctOptionId: 2,
        hints: ["fioo = a little"],
        explanation: "Obaanyɛ okɛ fioo afata he? = Can you add a little?"
      },
      {
        id: 1212,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Give me a discount' in Ga?",
        options: [
          { id: 1, text: "Mɛni ji ojara naagbee?" },
          { id: 2, text: "Obaanyɛ okɛ fioo afata he?" },
          { id: 3, text: "Ba jara lɛ shi oha mi" },
          { id: 4, text: "Hiɛmɔ sɛɛdamɔ" }
        ],
        correctOptionId: 3,
        hints: ["Ba jara lɛ shi = reduce the price"],
        explanation: "Ba jara lɛ shi oha mi = Give me a discount."
      },
      {
        id: 1213,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I bought it cheaper there' in Ga?",
        options: [
          { id: 1, text: "Mɛni ji ojara naagbee?" },
          { id: 2, text: "Obaanyɛ okɛ fioo afata he?" },
          { id: 3, text: "Ba jara lɛ shi oha mi" },
          { id: 4, text: "Mihe lɛ shika bibioo yɛ jɛi" }
        ],
        correctOptionId: 4,
        hints: ["Mihe lɛ = I bought it"],
        explanation: "Mihe lɛ shika bibioo yɛ jɛi = I bought it cheaper there."
      },
      {
        id: 1214,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I will buy two' in Ga?",
        options: [
          { id: 1, text: "Mahe enyɔ" },
          { id: 2, text: "Mibɛ shika pii" },
          { id: 3, text: "Ehe tse lo?" },
          { id: 4, text: "Kanemɔ shika lɛ" }
        ],
        correctOptionId: 1,
        hints: ["Mahe = I will buy", "enyɔ = two"],
        explanation: "Mahe enyɔ = I will buy two."
      },
      {
        id: 1215,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I don't have enough money' in Ga?",
        options: [
          { id: 1, text: "Mahe enyɔ" },
          { id: 2, text: "Mibɛ shika pii" },
          { id: 3, text: "Ehe tse lo?" },
          { id: 4, text: "Hiɛmɔ sɛɛdamɔ" }
        ],
        correctOptionId: 2,
        hints: ["Mibɛ = I don't have"],
        explanation: "Mibɛ shika pii = I don't have enough money."
      },
      {
        id: 1216,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Is it fresh?' in Ga?",
        options: [
          { id: 1, text: "Mahe enyɔ" },
          { id: 2, text: "Mibɛ shika pii" },
          { id: 3, text: "Ehe tse lo?" },
          { id: 4, text: "Kanemɔ shika lɛ" }
        ],
        correctOptionId: 3,
        hints: ["Ehe tse = it is fresh"],
        explanation: "Ehe tse lo? = Is it fresh?"
      },
      {
        id: 1217,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Count the money' in Ga?",
        options: [
          { id: 1, text: "Mahe enyɔ" },
          { id: 2, text: "Mibɛ shika pii" },
          { id: 3, text: "Ehe tse lo?" },
          { id: 4, text: "Kanemɔ shika lɛ" }
        ],
        correctOptionId: 4,
        hints: ["Kanemɔ = count"],
        explanation: "Kanemɔ shika lɛ = Count the money."
      },
      {
        id: 1218,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Keep the change' in Ga?",
        options: [
          { id: 1, text: "Hiɛmɔ sɛɛdamɔ" },
          { id: 2, text: "Mibɛ shika pii" },
          { id: 3, text: "Ehe tse lo?" },
          { id: 4, text: "Kanemɔ shika lɛ" }
        ],
        correctOptionId: 1,
        hints: ["sɛɛdamɔ = change"],
        explanation: "Hiɛmɔ sɛɛdamɔ = Keep the change."
      }
    ]
  }
};