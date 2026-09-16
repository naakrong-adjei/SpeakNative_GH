export default {
  id: 7,
  title: "Life & Wisdom",
  description: "Learn to discuss life's big questions and share wisdom in Ewe",
  icon: "compass-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "7-1",
      type: "words",
      title: "Life & Purpose",
      icon: "compass-outline",
      description: "Learn to express deep thoughts about life and purpose in Ewe",
      words: ["Nu ka nèxɔ se tso agbe ŋu?", "Agbe nye mɔzɔzɔ", "Nu kae naa gɔmesese wò agbe?", "Taɖodzinu le ame shia ame shi"],
      vocabulary: [
        {
          id: 261,
          english: "What do you believe about life?",
          native: "Nu ka nèxɔ se tso agbe ŋu?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/nu_ka_nèxɔ_se_tso_agbe_ŋu.m4a")
        },
        {
          id: 262,
          english: "Life is a journey",
          native: "Agbe nye mɔzɔzɔ",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/agbe_nye_mɔzɔzɔ.m4a")
        },
        {
          id: 264,
          english: "What gives your life meaning?",
          native: "Nu kae naa gɔmesese wò agbe?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/nu_kae_naa_gɔmesese_wò_agbe.m4a")
        },
        {
          id: 265,
          english: "Everyone has a purpose",
          native: "Taɖodzinu le ame shia ame shi",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/taɖodzinu_le_ame_shia_ame_shi.m4a")
        }
      ],
      questions: [
        {
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'What do you believe about life?' in Ewe?",
          options: [
            { id: 1, text: "Nu ka nèxɔ se tso agbe ŋu?" },
            { id: 2, text: "Agbe nye mɔzɔzɔ" },
            { id: 3, text: "Nu kae naa gɔmesese wò agbe?" },
            { id: 4, text: "Taɖodzinu le ame shia ame shi" }
          ],
          correctOptionId: 1,
          hints: ["nu ka = what", "nèxɔ se = you believe", "agbe = life"],
          explanation: "Nu ka nèxɔ se tso agbe ŋu? = What do you believe about life? in Ewe."
        },
        {
          id: 702,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/agbe_nye_mɔzɔzɔ.m4a"),
          options: [
            { id: 1, text: "What do you believe about life?" },
            { id: 2, text: "Life is a journey" },
            { id: 3, text: "What gives your life meaning?" },
            { id: 4, text: "Everyone has a purpose" }
          ],
          correctOptionId: 2,
          hints: ["agbe = life", "mɔzɔzɔ = journey"],
          explanation: "You heard 'Agbe nye mɔzɔzɔ' which means 'Life is a journey' in Ewe."
        },
        {
          id: 703,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'What gives your life meaning?' in Ewe?",
          options: [
            { id: 1, text: "Nu ka nèxɔ se tso agbe ŋu?" },
            { id: 2, text: "Agbe nye mɔzɔzɔ" },
            { id: 3, text: "Nu kae naa gɔmesese wò agbe?" },
            { id: 4, text: "Taɖodzinu le ame shia ame shi" }
          ],
          correctOptionId: 3,
          hints: ["gɔmesese = meaning"],
          explanation: "Nu kae naa gɔmesese wò agbe? = What gives your life meaning? in Ewe."
        },
        {
          id: 704,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/taɖodzinu_le_ame_shia_ame_shi.m4a"),
          options: [
            { id: 1, text: "What do you believe about life?" },
            { id: 2, text: "Life is a journey" },
            { id: 3, text: "What gives your life meaning?" },
            { id: 4, text: "Everyone has a purpose" }
          ],
          correctOptionId: 4,
          hints: ["taɖodzinu = purpose"],
          explanation: "You heard 'Taɖodzinu le ame shia ame shi' which means 'Everyone has a purpose' in Ewe."
        }
      ]
    },

    {
      id: "7-2",
      type: "words",
      title: "Wisdom & Comfort",
      icon: "hourglass-outline",
      description: "Learn to express wisdom and offer comfort in Ewe",
      words: ["Fukpekpe fiaa nu mí", "Ɣeyiɣi daa gbe le ame ŋu", "Mègatsɔe de dzi me"],
      vocabulary: [
        {
          id: 266,
          english: "Suffering teaches us",
          native: "Fukpekpe fiaa nu mí",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/fukpekpe_fiaa_nu_mí.m4a")
        },
        {
          id: 267,
          english: "Time heals",
          native: "Ɣeyiɣi daa gbe le ame ŋu",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/ɣeyiɣi_daa_gbe_le_ame_ŋu.m4a")
        },
        {
          id: 297,
          english: "Don't take it to heart",
          native: "Mègatsɔe de dzi me",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/mègatsɔe_de_dzi_me.m4a")
        }
      ],
      questions: [
        {
          id: 705,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Suffering teaches us' in Ewe?",
          options: [
            { id: 1, text: "Fukpekpe fiaa nu mí" },
            { id: 2, text: "Ɣeyiɣi daa gbe le ame ŋu" },
            { id: 3, text: "Mègatsɔe de dzi me" },
            { id: 4, text: "Taɖodzinu le ame shia ame shi" }
          ],
          correctOptionId: 1,
          hints: ["fukpekpe = suffering", "fiaa = teaches"],
          explanation: "Fukpekpe fiaa nu mí = Suffering teaches us in Ewe."
        },
        {
          id: 706,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/ɣeyiɣi_daa_gbe_le_ame_ŋu.m4a"),
          options: [
            { id: 1, text: "Suffering teaches us" },
            { id: 2, text: "Time heals" },
            { id: 3, text: "Don't take it to heart" },
            { id: 4, text: "Life is a journey" }
          ],
          correctOptionId: 2,
          hints: ["ɣeyiɣi = time", "daa gbe = heals"],
          explanation: "You heard 'Ɣeyiɣi daa gbe le ame ŋu' which means 'Time heals' in Ewe."
        },
        {
          id: 707,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Don't take it to heart' in Ewe?",
          options: [
            { id: 1, text: "Fukpekpe fiaa nu mí" },
            { id: 2, text: "Ɣeyiɣi daa gbe le ame ŋu" },
            { id: 3, text: "Mègatsɔe de dzi me" },
            { id: 4, text: "Agbe nye mɔzɔzɔ" }
          ],
          correctOptionId: 3,
          hints: ["mègatsɔe = don't take", "dzi me = heart"],
          explanation: "Mègatsɔe de dzi me = Don't take it to heart in Ewe."
        },
        {
          id: 708,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/fukpekpe_fiaa_nu_mí.m4a"),
          options: [
            { id: 1, text: "Suffering teaches us" },
            { id: 2, text: "Time heals" },
            { id: 3, text: "Don't take it to heart" },
            { id: 4, text: "What gives your life meaning?" }
          ],
          correctOptionId: 1,
          hints: ["fukpekpe = suffering"],
          explanation: "You heard 'Fukpekpe fiaa nu mí' which means 'Suffering teaches us' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-7",
    title: "Review: Life & Wisdom",
    icon: "refresh-outline",
    description: "Review all the life and wisdom vocabulary you've learned",
    questions: [
      {
        id: 709,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'What do you believe about life?' in Ewe?",
        options: [
          { id: 1, text: "Nu ka nèxɔ se tso agbe ŋu?" },
          { id: 2, text: "Agbe nye mɔzɔzɔ" },
          { id: 3, text: "Nu kae naa gɔmesese wò agbe?" },
          { id: 4, text: "Taɖodzinu le ame shia ame shi" }
        ],
        correctOptionId: 1,
        hints: ["nu ka = what"],
        explanation: "Nu ka nèxɔ se tso agbe ŋu? = What do you believe about life?"
      },
      {
        id: 710,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/mègatsɔe_de_dzi_me.m4a"),
        options: [
          { id: 1, text: "Suffering teaches us" },
          { id: 2, text: "Time heals" },
          { id: 3, text: "Don't take it to heart" },
          { id: 4, text: "Everyone has a purpose" }
        ],
        correctOptionId: 3,
        hints: ["dzi me = heart"],
        explanation: "You heard 'Mègatsɔe de dzi me' which means 'Don't take it to heart'."
      },
      {
        id: 711,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Life is a journey' in Ewe?",
        options: [
          { id: 1, text: "Nu ka nèxɔ se tso agbe ŋu?" },
          { id: 2, text: "Agbe nye mɔzɔzɔ" },
          { id: 3, text: "Nu kae naa gɔmesese wò agbe?" },
          { id: 4, text: "Taɖodzinu le ame shia ame shi" }
        ],
        correctOptionId: 2,
        hints: ["mɔzɔzɔ = journey"],
        explanation: "Agbe nye mɔzɔzɔ = Life is a journey."
      },
      {
        id: 712,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/nu_kae_naa_gɔmesese_wò_agbe.m4a"),
        options: [
          { id: 1, text: "What do you believe about life?" },
          { id: 2, text: "Life is a journey" },
          { id: 3, text: "What gives your life meaning?" },
          { id: 4, text: "Everyone has a purpose" }
        ],
        correctOptionId: 3,
        hints: ["gɔmesese = meaning"],
        explanation: "You heard 'Nu kae naa gɔmesese wò agbe?' which means 'What gives your life meaning?'."
      },
      {
        id: 713,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Suffering teaches us' in Ewe?",
        options: [
          { id: 1, text: "Fukpekpe fiaa nu mí" },
          { id: 2, text: "Ɣeyiɣi daa gbe le ame ŋu" },
          { id: 3, text: "Mègatsɔe de dzi me" },
          { id: 4, text: "Taɖodzinu le ame shia ame shi" }
        ],
        correctOptionId: 1,
        hints: ["fukpekpe = suffering"],
        explanation: "Fukpekpe fiaa nu mí = Suffering teaches us."
      },
      {
        id: 714,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Time heals' in Ewe?",
        options: [
          { id: 1, text: "Fukpekpe fiaa nu mí" },
          { id: 2, text: "Ɣeyiɣi daa gbe le ame ŋu" },
          { id: 3, text: "Mègatsɔe de dzi me" },
          { id: 4, text: "Agbe nye mɔzɔzɔ" }
        ],
        correctOptionId: 2,
        hints: ["ɣeyiɣi = time"],
        explanation: "Ɣeyiɣi daa gbe le ame ŋu = Time heals."
      },
      {
        id: 715,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Don't take it to heart' in Ewe?",
        options: [
          { id: 1, text: "Fukpekpe fiaa nu mí" },
          { id: 2, text: "Ɣeyiɣi daa gbe le ame ŋu" },
          { id: 3, text: "Mègatsɔe de dzi me" },
          { id: 4, text: "Nu ka nèxɔ se tso agbe ŋu?" }
        ],
        correctOptionId: 3,
        hints: ["dzi me = heart"],
        explanation: "Mègatsɔe de dzi me = Don't take it to heart."
      },
      {
        id: 716,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/taɖodzinu_le_ame_shia_ame_shi.m4a"),
        options: [
          { id: 1, text: "What do you believe about life?" },
          { id: 2, text: "Life is a journey" },
          { id: 3, text: "What gives your life meaning?" },
          { id: 4, text: "Everyone has a purpose" }
        ],
        correctOptionId: 4,
        hints: ["taɖodzinu = purpose"],
        explanation: "You heard 'Taɖodzinu le ame shia ame shi' which means 'Everyone has a purpose'."
      },
      {
        id: 717,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter7/ɣeyiɣi_daa_gbe_le_ame_ŋu.m4a"),
        options: [
          { id: 1, text: "Suffering teaches us" },
          { id: 2, text: "Time heals" },
          { id: 3, text: "Don't take it to heart" },
          { id: 4, text: "Life is a journey" }
        ],
        correctOptionId: 2,
        hints: ["ɣeyiɣi = time"],
        explanation: "You heard 'Ɣeyiɣi daa gbe le ame ŋu' which means 'Time heals'."
      },
      {
        id: 718,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Everyone has a purpose' in Ewe?",
        options: [
          { id: 1, text: "Nu ka nèxɔ se tso agbe ŋu?" },
          { id: 2, text: "Agbe nye mɔzɔzɔ" },
          { id: 3, text: "Nu kae naa gɔmesese wò agbe?" },
          { id: 4, text: "Taɖodzinu le ame shia ame shi" }
        ],
        correctOptionId: 4,
        hints: ["taɖodzinu = purpose"],
        explanation: "Taɖodzinu le ame shia ame shi = Everyone has a purpose."
      }
    ]
  }
};