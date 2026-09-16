export default {
  id: 8,
  title: "Future & Past Tense",
  description: "Learn how to talk about the past and future in Twi",
  icon: "time-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "8-1",
      type: "phrases",
      title: "Talking About the Past",
      icon: "history-outline",
      description: "Learn how to talk about past events in Twi",
      words: ["Mekɔɔ ɛnora", "Madidi dada", "Na mereyɛ adwuma", "Na yɛte Kumasi"],
      vocabulary: [
        {
          id: 227,
          english: "I went yesterday",
          native: "Mekɔɔ ɛnora",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/mekɔɔ_ɛnora.m4a")
        },
        {
          id: 228,
          english: "I have eaten already",
          native: "Madidi dada",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/madidi_dada.m4a")
        },
        {
          id: 229,
          english: "I was working",
          native: "Na mereyɛ adwuma",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/na_mereyɛ_adwuma.m4a")
        },
        {
          id: 230,
          english: "We were living in Kumasi",
          native: "Na yɛte Kumasi",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/na_yɛte_kumasi.m4a")
        }
      ],
      questions: [
        {
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I went yesterday' in Twi?",
          options: [
            { id: 1, text: "Mekɔɔ ɛnora" },
            { id: 2, text: "Madidi dada" },
            { id: 3, text: "Na mereyɛ adwuma" },
            { id: 4, text: "Na yɛte Kumasi" }
          ],
          correctOptionId: 1,
          hints: ["ɛnora = yesterday"],
          explanation: "Mekɔɔ ɛnora = I went yesterday in Twi."
        },
        {
          id: 802,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/madidi_dada.m4a"),
          options: [
            { id: 1, text: "I went yesterday" },
            { id: 2, text: "I have eaten already" },
            { id: 3, text: "I was working" },
            { id: 4, text: "We were living in Kumasi" }
          ],
          correctOptionId: 2,
          hints: ["dada = already"],
          explanation: "You heard 'Madidi dada' which means 'I have eaten already' in Twi."
        },
        {
          id: 803,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I was working' in Twi?",
          options: [
            { id: 1, text: "Mekɔɔ ɛnora" },
            { id: 2, text: "Madidi dada" },
            { id: 3, text: "Na mereyɛ adwuma" },
            { id: 4, text: "Mɛba ɔkyena" }
          ],
          correctOptionId: 3,
          hints: ["Na = was", "adwuma = work"],
          explanation: "Na mereyɛ adwuma = I was working in Twi."
        },
        {
          id: 804,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/na_yɛte_kumasi.m4a"),
          options: [
            { id: 1, text: "I went yesterday" },
            { id: 2, text: "I have eaten already" },
            { id: 3, text: "I was working" },
            { id: 4, text: "We were living in Kumasi" }
          ],
          correctOptionId: 4,
          hints: ["Na yɛte = we were living"],
          explanation: "You heard 'Na yɛte Kumasi' which means 'We were living in Kumasi' in Twi."
        }
      ]
    },

    {
      id: "8-2",
      type: "phrases",
      title: "Talking About the Future",
      icon: "calendar-outline",
      description: "Learn how to talk about future events in Twi",
      words: ["Mɛba ɔkyena", "Merekɔtɔ kaa", "Wɔbɛwie bosome a ɛdi hɔ"],
      vocabulary: [
        {
          id: 231,
          english: "I will come tomorrow",
          native: "Mɛba ɔkyena",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/mɛba_ɔkyena.m4a")
        },
        {
          id: 232,
          english: "I am going to buy a car",
          native: "Merekɔtɔ kaa",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/merekɔtɔ_kaa.m4a")
        },
        {
          id: 233,
          english: "They will finish next month",
          native: "Wɔbɛwie bosome a ɛdi hɔ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/wɔbɛwie_bosome_a_ɛdi_hɔ.m4a")
        }
      ],
      questions: [
        {
          id: 805,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I will come tomorrow' in Twi?",
          options: [
            { id: 1, text: "Mɛba ɔkyena" },
            { id: 2, text: "Merekɔtɔ kaa" },
            { id: 3, text: "Wɔbɛwie bosome a ɛdi hɔ" },
            { id: 4, text: "Ɔbaa no mmaeɛ" }
          ],
          correctOptionId: 1,
          hints: ["ɔkyena = tomorrow"],
          explanation: "Mɛba ɔkyena = I will come tomorrow in Twi."
        },
        {
          id: 806,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/merekɔtɔ_kaa.m4a"),
          options: [
            { id: 1, text: "I will come tomorrow" },
            { id: 2, text: "I am going to buy a car" },
            { id: 3, text: "They will finish next month" },
            { id: 4, text: "Had I known" }
          ],
          correctOptionId: 2,
          hints: ["kaa = car"],
          explanation: "You heard 'Merekɔtɔ kaa' which means 'I am going to buy a car' in Twi."
        },
        {
          id: 807,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'They will finish next month' in Twi?",
          options: [
            { id: 1, text: "Mɛba ɔkyena" },
            { id: 2, text: "Merekɔtɔ kaa" },
            { id: 3, text: "Wɔbɛwie bosome a ɛdi hɔ" },
            { id: 4, text: "Na yɛte Kumasi" }
          ],
          correctOptionId: 3,
          hints: ["bosome a ɛdi hɔ = next month"],
          explanation: "Wɔbɛwie bosome a ɛdi hɔ = They will finish next month in Twi."
        },
        {
          id: 808,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/mɛba_ɔkyena.m4a"),
          options: [
            { id: 1, text: "I will come tomorrow" },
            { id: 2, text: "I am going to buy a car" },
            { id: 3, text: "They will finish next month" },
            { id: 4, text: "I went yesterday" }
          ],
          correctOptionId: 1,
          hints: ["ɔkyena = tomorrow"],
          explanation: "You heard 'Mɛba ɔkyena' which means 'I will come tomorrow' in Twi."
        }
      ]
    },

    {
      id: "8-3",
      type: "phrases",
      title: "Past Conditions & Regret",
      icon: "hourglass-outline",
      description: "Learn phrases for expressing 'not yet' and regret in Twi",
      words: ["Ɔbaa no mmaeɛ", "Mehuu yɛ anka"],
      vocabulary: [
        {
          id: 234,
          english: "She has not come yet",
          native: "Ɔbaa no mmaeɛ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/ɔbaa_no_mmaeɛ.m4a")
        },
        {
          id: 235,
          english: "Had I known",
          native: "Mehuu yɛ anka",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/mehuu_yɛ_anka.m4a")
        }
      ],
      questions: [
        {
          id: 809,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'She has not come yet' in Twi?",
          options: [
            { id: 1, text: "Ɔbaa no mmaeɛ" },
            { id: 2, text: "Mehuu yɛ anka" },
            { id: 3, text: "Mɛba ɔkyena" },
            { id: 4, text: "Na yɛte Kumasi" }
          ],
          correctOptionId: 1,
          hints: ["mmaeɛ = has not come"],
          explanation: "Ɔbaa no mmaeɛ = She has not come yet in Twi."
        },
        {
          id: 810,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/mehuu_yɛ_anka.m4a"),
          options: [
            { id: 1, text: "She has not come yet" },
            { id: 2, text: "Had I known" },
            { id: 3, text: "I went yesterday" },
            { id: 4, text: "I will come tomorrow" }
          ],
          correctOptionId: 2,
          hints: ["anka = would have"],
          explanation: "You heard 'Mehuu yɛ anka' which means 'Had I known' in Twi."
        },
        {
          id: 811,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Had I known' in Twi?",
          options: [
            { id: 1, text: "Ɔbaa no mmaeɛ" },
            { id: 2, text: "Mehuu yɛ anka" },
            { id: 3, text: "Mekɔɔ ɛnora" },
            { id: 4, text: "Na mereyɛ adwuma" }
          ],
          correctOptionId: 2,
          hints: ["Expression of regret"],
          explanation: "Mehuu yɛ anka = Had I known in Twi."
        },
        {
          id: 812,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/ɔbaa_no_mmaeɛ.m4a"),
          options: [
            { id: 1, text: "She has not come yet" },
            { id: 2, text: "Had I known" },
            { id: 3, text: "I have eaten already" },
            { id: 4, text: "I will come tomorrow" }
          ],
          correctOptionId: 1,
          hints: ["mmaeɛ = has not come"],
          explanation: "You heard 'Ɔbaa no mmaeɛ' which means 'She has not come yet' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Future & Past Tense",
    icon: "refresh-outline",
    description: "Review all the future and past tense vocabulary you've learned",
    questions: [
      {
        id: 813,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I went yesterday' in Twi?",
        options: [
          { id: 1, text: "Mekɔɔ ɛnora" },
          { id: 2, text: "Madidi dada" },
          { id: 3, text: "Na mereyɛ adwuma" },
          { id: 4, text: "Na yɛte Kumasi" }
        ],
        correctOptionId: 1,
        hints: ["ɛnora = yesterday"],
        explanation: "Mekɔɔ ɛnora = I went yesterday."
      },
      {
        id: 814,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/wɔbɛwie_bosome_a_ɛdi_hɔ.m4a"),
        options: [
          { id: 1, text: "I will come tomorrow" },
          { id: 2, text: "I am going to buy a car" },
          { id: 3, text: "They will finish next month" },
          { id: 4, text: "Had I known" }
        ],
        correctOptionId: 3,
        hints: ["bosome a ɛdi hɔ = next month"],
        explanation: "You heard 'Wɔbɛwie bosome a ɛdi hɔ' which means 'They will finish next month'."
      },
      {
        id: 815,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I have eaten already' in Twi?",
        options: [
          { id: 1, text: "Mekɔɔ ɛnora" },
          { id: 2, text: "Madidi dada" },
          { id: 3, text: "Na mereyɛ adwuma" },
          { id: 4, text: "Mɛba ɔkyena" }
        ],
        correctOptionId: 2,
        hints: ["dada = already"],
        explanation: "Madidi dada = I have eaten already."
      },
      {
        id: 816,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/mehuu_yɛ_anka.m4a"),
        options: [
          { id: 1, text: "She has not come yet" },
          { id: 2, text: "Had I known" },
          { id: 3, text: "I went yesterday" },
          { id: 4, text: "I will come tomorrow" }
        ],
        correctOptionId: 2,
        hints: ["Expression of regret"],
        explanation: "You heard 'Mehuu yɛ anka' which means 'Had I known'."
      },
      {
        id: 817,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I was working' in Twi?",
        options: [
          { id: 1, text: "Mekɔɔ ɛnora" },
          { id: 2, text: "Madidi dada" },
          { id: 3, text: "Na mereyɛ adwuma" },
          { id: 4, text: "Merekɔtɔ kaa" }
        ],
        correctOptionId: 3,
        hints: ["Na = was"],
        explanation: "Na mereyɛ adwuma = I was working."
      },
      {
        id: 818,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'We were living in Kumasi' in Twi?",
        options: [
          { id: 1, text: "Mekɔɔ ɛnora" },
          { id: 2, text: "Madidi dada" },
          { id: 3, text: "Na mereyɛ adwuma" },
          { id: 4, text: "Na yɛte Kumasi" }
        ],
        correctOptionId: 4,
        hints: ["Na yɛte = we were living"],
        explanation: "Na yɛte Kumasi = We were living in Kumasi."
      },
      {
        id: 819,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I will come tomorrow' in Twi?",
        options: [
          { id: 1, text: "Mɛba ɔkyena" },
          { id: 2, text: "Merekɔtɔ kaa" },
          { id: 3, text: "Wɔbɛwie bosome a ɛdi hɔ" },
          { id: 4, text: "Ɔbaa no mmaeɛ" }
        ],
        correctOptionId: 1,
        hints: ["ɔkyena = tomorrow"],
        explanation: "Mɛba ɔkyena = I will come tomorrow."
      },
      {
        id: 820,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am going to buy a car' in Twi?",
        options: [
          { id: 1, text: "Mɛba ɔkyena" },
          { id: 2, text: "Merekɔtɔ kaa" },
          { id: 3, text: "Wɔbɛwie bosome a ɛdi hɔ" },
          { id: 4, text: "Mehuu yɛ anka" }
        ],
        correctOptionId: 2,
        hints: ["kaa = car"],
        explanation: "Merekɔtɔ kaa = I am going to buy a car."
      },
      {
        id: 821,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'She has not come yet' in Twi?",
        options: [
          { id: 1, text: "Ɔbaa no mmaeɛ" },
          { id: 2, text: "Mehuu yɛ anka" },
          { id: 3, text: "Mɛba ɔkyena" },
          { id: 4, text: "Na yɛte Kumasi" }
        ],
        correctOptionId: 1,
        hints: ["mmaeɛ = has not come"],
        explanation: "Ɔbaa no mmaeɛ = She has not come yet."
      },
      {
        id: 822,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter8/merekɔtɔ_kaa.m4a"),
        options: [
          { id: 1, text: "I will come tomorrow" },
          { id: 2, text: "I am going to buy a car" },
          { id: 3, text: "They will finish next month" },
          { id: 4, text: "I have eaten already" }
        ],
        correctOptionId: 2,
        hints: ["kaa = car"],
        explanation: "You heard 'Merekɔtɔ kaa' which means 'I am going to buy a car'."
      }
    ]
  }
};