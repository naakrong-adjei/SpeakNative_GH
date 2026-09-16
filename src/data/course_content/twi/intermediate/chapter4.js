export default {
  id: 4,
  title: "Opinions & Emotions",
  description: "Learn how to express opinions and emotions in Twi",
  icon: "happy-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "4-1",
      type: "phrases",
      title: "Feelings & Emotions",
      icon: "smile-outline",
      description: "Learn how to express your feelings and emotions in Twi",
      words: ["M'ani agye", "Me werɛ ahow", "M'ani sɔ wo", "Mabrɛ"],
      vocabulary: [
        {
          id: 189,
          english: "I am happy",
          native: "M'ani agye",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/m_ani_agye.m4a")
        },
        {
          id: 190,
          english: "I am sad",
          native: "Me werɛ ahow",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/me_werɛ_ahow.m4a")
        },
        {
          id: 191,
          english: "I am proud of you",
          native: "M'ani sɔ wo",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/m_ani_sɔ_wo.m4a")
        },
        {
          id: 192,
          english: "I am tired",
          native: "Mabrɛ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/mabrɛ.m4a")
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am happy' in Twi?",
          options: [
            { id: 1, text: "M'ani agye" },
            { id: 2, text: "Me werɛ ahow" },
            { id: 3, text: "M'ani sɔ wo" },
            { id: 4, text: "Mabrɛ" }
          ],
          correctOptionId: 1,
          hints: ["M'ani agye = I am happy"],
          explanation: "M'ani agye = I am happy in Twi."
        },
        {
          id: 402,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/me_werɛ_ahow.m4a"),
          options: [
            { id: 1, text: "I am happy" },
            { id: 2, text: "I am sad" },
            { id: 3, text: "I am proud of you" },
            { id: 4, text: "I am tired" }
          ],
          correctOptionId: 2,
          hints: ["werɛ ahow = sadness"],
          explanation: "You heard 'Me werɛ ahow' which means 'I am sad' in Twi."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am proud of you' in Twi?",
          options: [
            { id: 1, text: "M'ani agye" },
            { id: 2, text: "Me werɛ ahow" },
            { id: 3, text: "M'ani sɔ wo" },
            { id: 4, text: "Me bo afu" }
          ],
          correctOptionId: 3,
          hints: ["M'ani sɔ wo = I am proud of you"],
          explanation: "M'ani sɔ wo = I am proud of you in Twi."
        },
        {
          id: 404,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/mabrɛ.m4a"),
          options: [
            { id: 1, text: "I am happy" },
            { id: 2, text: "I am sad" },
            { id: 3, text: "I am proud of you" },
            { id: 4, text: "I am tired" }
          ],
          correctOptionId: 4,
          hints: ["Mabrɛ = I am tired"],
          explanation: "You heard 'Mabrɛ' which means 'I am tired' in Twi."
        }
      ]
    },

    {
      id: "4-2",
      type: "phrases",
      title: "Strong Feelings & Reassurance",
      icon: "flame-outline",
      description: "Learn how to express strong emotions and reassure others in Twi",
      words: ["Me bo afu", "Mesuro", "Ɛyɛ me nwanwa", "Nhaw wo ho"],
      vocabulary: [
        {
          id: 193,
          english: "I am angry",
          native: "Me bo afu",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/me_bo_afu.m4a")
        },
        {
          id: 194,
          english: "I am afraid",
          native: "Mesuro",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/mesuro.m4a")
        },
        {
          id: 195,
          english: "I am surprised",
          native: "Ɛyɛ me nwanwa",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/ɛyɛ_me_nwanwa.m4a")
        },
        {
          id: 196,
          english: "Don't worry",
          native: "Nhaw wo ho",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/nhaw_wo_ho.m4a")
        }
      ],
      questions: [
        {
          id: 405,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am angry' in Twi?",
          options: [
            { id: 1, text: "Me bo afu" },
            { id: 2, text: "Mesuro" },
            { id: 3, text: "Ɛyɛ me nwanwa" },
            { id: 4, text: "Nhaw wo ho" }
          ],
          correctOptionId: 1,
          hints: ["Me bo afu = I am angry"],
          explanation: "Me bo afu = I am angry in Twi."
        },
        {
          id: 406,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/mesuro.m4a"),
          options: [
            { id: 1, text: "I am angry" },
            { id: 2, text: "I am afraid" },
            { id: 3, text: "I am surprised" },
            { id: 4, text: "Don't worry" }
          ],
          correctOptionId: 2,
          hints: ["Mesuro = I am afraid"],
          explanation: "You heard 'Mesuro' which means 'I am afraid' in Twi."
        },
        {
          id: 407,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am surprised' in Twi?",
          options: [
            { id: 1, text: "Me bo afu" },
            { id: 2, text: "Mesuro" },
            { id: 3, text: "Ɛyɛ me nwanwa" },
            { id: 4, text: "M'ani agye" }
          ],
          correctOptionId: 3,
          hints: ["nwanwa = surprise"],
          explanation: "Ɛyɛ me nwanwa = I am surprised in Twi."
        },
        {
          id: 408,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/nhaw_wo_ho.m4a"),
          options: [
            { id: 1, text: "I am angry" },
            { id: 2, text: "I am afraid" },
            { id: 3, text: "I am surprised" },
            { id: 4, text: "Don't worry" }
          ],
          correctOptionId: 4,
          hints: ["Nhaw wo ho = Don't worry"],
          explanation: "You heard 'Nhaw wo ho' which means 'Don't worry' in Twi."
        }
      ]
    },

    {
      id: "4-3",
      type: "phrases",
      title: "Giving Opinions",
      icon: "chatbubble-ellipses-outline",
      description: "Learn how to express your opinions in Twi",
      words: ["Mesusu saa", "Mempene so", "Ɛyɛ nokorɛ"],
      vocabulary: [
        {
          id: 197,
          english: "I think so",
          native: "Mesusu saa",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/mesusu_saa.m4a")
        },
        {
          id: 198,
          english: "I don't agree",
          native: "Mempene so",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/mempene_so.m4a")
        },
        {
          id: 199,
          english: "That is true",
          native: "Ɛyɛ nokorɛ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/ɛyɛ_nokorɛ.m4a")
        }
      ],
      questions: [
        {
          id: 409,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I think so' in Twi?",
          options: [
            { id: 1, text: "Mesusu saa" },
            { id: 2, text: "Mempene so" },
            { id: 3, text: "Ɛyɛ nokorɛ" },
            { id: 4, text: "Me bo afu" }
          ],
          correctOptionId: 1,
          hints: ["Mesusu = I think"],
          explanation: "Mesusu saa = I think so in Twi."
        },
        {
          id: 410,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/mempene_so.m4a"),
          options: [
            { id: 1, text: "I think so" },
            { id: 2, text: "I don't agree" },
            { id: 3, text: "That is true" },
            { id: 4, text: "I am angry" }
          ],
          correctOptionId: 2,
          hints: ["Mempene so = I don't agree"],
          explanation: "You heard 'Mempene so' which means 'I don't agree' in Twi."
        },
        {
          id: 411,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'That is true' in Twi?",
          options: [
            { id: 1, text: "Mesusu saa" },
            { id: 2, text: "Mempene so" },
            { id: 3, text: "Ɛyɛ nokorɛ" },
            { id: 4, text: "Nhaw wo ho" }
          ],
          correctOptionId: 3,
          hints: ["nokorɛ = truth"],
          explanation: "Ɛyɛ nokorɛ = That is true in Twi."
        },
        {
          id: 412,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/mesusu_saa.m4a"),
          options: [
            { id: 1, text: "I think so" },
            { id: 2, text: "I don't agree" },
            { id: 3, text: "That is true" },
            { id: 4, text: "Don't worry" }
          ],
          correctOptionId: 1,
          hints: ["Mesusu = I think"],
          explanation: "You heard 'Mesusu saa' which means 'I think so' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-4",
    title: "Review: Opinions & Emotions",
    icon: "refresh-outline",
    description: "Review all the opinions and emotions vocabulary you've learned",
    questions: [
      {
        id: 413,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am happy' in Twi?",
        options: [
          { id: 1, text: "M'ani agye" },
          { id: 2, text: "Me werɛ ahow" },
          { id: 3, text: "M'ani sɔ wo" },
          { id: 4, text: "Mabrɛ" }
        ],
        correctOptionId: 1,
        hints: ["M'ani agye = I am happy"],
        explanation: "M'ani agye = I am happy."
      },
      {
        id: 414,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/me_bo_afu.m4a"),
        options: [
          { id: 1, text: "I am angry" },
          { id: 2, text: "I am afraid" },
          { id: 3, text: "I am surprised" },
          { id: 4, text: "I am tired" }
        ],
        correctOptionId: 1,
        hints: ["Me bo afu = I am angry"],
        explanation: "You heard 'Me bo afu' which means 'I am angry'."
      },
      {
        id: 415,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am sad' in Twi?",
        options: [
          { id: 1, text: "M'ani agye" },
          { id: 2, text: "Me werɛ ahow" },
          { id: 3, text: "M'ani sɔ wo" },
          { id: 4, text: "Mabrɛ" }
        ],
        correctOptionId: 2,
        hints: ["werɛ ahow = sadness"],
        explanation: "Me werɛ ahow = I am sad."
      },
      {
        id: 416,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/nhaw_wo_ho.m4a"),
        options: [
          { id: 1, text: "I am angry" },
          { id: 2, text: "I am afraid" },
          { id: 3, text: "I am surprised" },
          { id: 4, text: "Don't worry" }
        ],
        correctOptionId: 4,
        hints: ["Nhaw wo ho = Don't worry"],
        explanation: "You heard 'Nhaw wo ho' which means 'Don't worry'."
      },
      {
        id: 417,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am proud of you' in Twi?",
        options: [
          { id: 1, text: "M'ani agye" },
          { id: 2, text: "Me werɛ ahow" },
          { id: 3, text: "M'ani sɔ wo" },
          { id: 4, text: "Mabrɛ" }
        ],
        correctOptionId: 3,
        hints: ["M'ani sɔ wo = I am proud of you"],
        explanation: "M'ani sɔ wo = I am proud of you."
      },
      {
        id: 418,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am tired' in Twi?",
        options: [
          { id: 1, text: "M'ani agye" },
          { id: 2, text: "Me werɛ ahow" },
          { id: 3, text: "M'ani sɔ wo" },
          { id: 4, text: "Mabrɛ" }
        ],
        correctOptionId: 4,
        hints: ["Mabrɛ = I am tired"],
        explanation: "Mabrɛ = I am tired."
      },
      {
        id: 419,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am afraid' in Twi?",
        options: [
          { id: 1, text: "Me bo afu" },
          { id: 2, text: "Mesuro" },
          { id: 3, text: "Ɛyɛ me nwanwa" },
          { id: 4, text: "Nhaw wo ho" }
        ],
        correctOptionId: 2,
        hints: ["Mesuro = I am afraid"],
        explanation: "Mesuro = I am afraid."
      },
      {
        id: 420,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am surprised' in Twi?",
        options: [
          { id: 1, text: "Me bo afu" },
          { id: 2, text: "Mesuro" },
          { id: 3, text: "Ɛyɛ me nwanwa" },
          { id: 4, text: "Mesusu saa" }
        ],
        correctOptionId: 3,
        hints: ["nwanwa = surprise"],
        explanation: "Ɛyɛ me nwanwa = I am surprised."
      },
      {
        id: 421,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I think so' in Twi?",
        options: [
          { id: 1, text: "Mesusu saa" },
          { id: 2, text: "Mempene so" },
          { id: 3, text: "Ɛyɛ nokorɛ" },
          { id: 4, text: "Me bo afu" }
        ],
        correctOptionId: 1,
        hints: ["Mesusu = I think"],
        explanation: "Mesusu saa = I think so."
      },
      {
        id: 422,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I don't agree' in Twi?",
        options: [
          { id: 1, text: "Mesusu saa" },
          { id: 2, text: "Mempene so" },
          { id: 3, text: "Ɛyɛ nokorɛ" },
          { id: 4, text: "Nhaw wo ho" }
        ],
        correctOptionId: 2,
        hints: ["Mempene so = I don't agree"],
        explanation: "Mempene so = I don't agree."
      },
      {
        id: 423,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'That is true' in Twi?",
        options: [
          { id: 1, text: "Mesusu saa" },
          { id: 2, text: "Mempene so" },
          { id: 3, text: "Ɛyɛ nokorɛ" },
          { id: 4, text: "M'ani sɔ wo" }
        ],
        correctOptionId: 3,
        hints: ["nokorɛ = truth"],
        explanation: "Ɛyɛ nokorɛ = That is true."
      },
      {
        id: 424,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter4/ɛyɛ_me_nwanwa.m4a"),
        options: [
          { id: 1, text: "I am angry" },
          { id: 2, text: "I am afraid" },
          { id: 3, text: "I am surprised" },
          { id: 4, text: "I am happy" }
        ],
        correctOptionId: 3,
        hints: ["nwanwa = surprise"],
        explanation: "You heard 'Ɛyɛ me nwanwa' which means 'I am surprised'."
      }
    ]
  }
};