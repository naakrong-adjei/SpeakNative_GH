export default {
  id: 3,
  title: "Storytelling",
  description: "Learn storytelling vocabulary in Ga",
  icon: "book-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "3-1",
      type: "phrases",
      title: "Starting a Story",
      icon: "book-outline",
      description: "Learn how to begin a story in Ga",
      words: ["Be ko ni eho lɛ", "Bo mi adesa lɛ toi", "Gba mi adesa kroko"],
      vocabulary: [
        {
          id: 175,
          english: "Once upon a time",
          native: "Be ko ni eho lɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/be_ko_ni_eho_lɛ.m4a")
        },
        {
          id: 176,
          english: "Listen to my story",
          native: "Bo mi adesa lɛ toi",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/bo_mi_adesa_lɛ_toi.m4a")
        },
        {
          id: 183,
          english: "Tell me another story",
          native: "Gba mi adesa kroko",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/gba_mi_adesa_kroko.m4a")
        }
      ],
      questions: [
        {
          id: 302,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/bo_mi_adesa_lɛ_toi.m4a"),
          options: [
            { id: 1, text: "That is the end" },
            { id: 2, text: "Listen to my story" },
            { id: 3, text: "Once upon a time" },
            { id: 4, text: "Tell me another story" }
          ],
          correctOptionId: 2,
          hints: ["adesa = story", "toi = listen"],
          explanation: "You heard 'Bo mi adesa lɛ toi' which means 'Listen to my story' in Ga."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Tell me another story' in Ga?",
          options: [
            { id: 1, text: "Bo mi adesa lɛ toi" },
            { id: 2, text: "Gba mi adesa kroko" },
            { id: 3, text: "Be ko ni eho lɛ" },
            { id: 4, text: "Adesa lɛ shishi tsɔɔmɔ" }
          ],
          correctOptionId: 2,
          hints: ["kroko = another"],
          explanation: "Gba mi adesa kroko = Tell me another story in Ga."
        },
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Once upon a time' in Ga?",
          options: [
            { id: 1, text: "Gba mi adesa kroko" },
            { id: 2, text: "Be ko ni eho lɛ" },
            { id: 3, text: "Ni nɔ ko ba" },
            { id: 4, text: "Bo mi adesa lɛ toi" }
          ],
          correctOptionId: 2,
          hints: ["be ko ni eho lɛ = once upon a time"],
          explanation: "Be ko ni eho lɛ = Once upon a time in Ga."
        }
      ]
    },

    {
      id: "3-2",
      type: "phrases",
      title: "The Story",
      icon: "chatbubble-outline",
      description: "Learn phrases used when telling a story in Ga",
      words: ["Ni nɔ ko ba", "Amɛhi shi yɛ miishɛɛ mli", "Adesa lɛ tsɔɔ wɔ nilee"],
      vocabulary: [
        {
          id: 180,
          english: "Then something happened",
          native: "Ni nɔ ko ba",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/ni_nɔ_ko_ba.m4a")
        },
        {
          id: 182,
          english: "They lived happily",
          native: "Amɛhi shi yɛ miishɛɛ mli",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/amɛhi_shi_yɛ_miishɛɛ_mli.m4a")
        },
        {
          id: 177,
          english: "The story teaches us wisdom",
          native: "Adesa lɛ tsɔɔ wɔ nilee",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/adesa_lɛ_tsɔɔ_wɔ_nilee.m4a")
        }
      ],
      questions: [
        {
          id: 305,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/amɛhi_shi_yɛ_miishɛɛ_mli.m4a"),
          options: [
            { id: 1, text: "Then something happened" },
            { id: 2, text: "The story teaches us wisdom" },
            { id: 3, text: "They lived happily" },
            { id: 4, text: "The moral of the story" }
          ],
          correctOptionId: 3,
          hints: ["miishɛɛ = happiness"],
          explanation: "You heard 'Amɛhi shi yɛ miishɛɛ mli' which means 'They lived happily' in Ga."
        },
        {
          id: 306,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The story teaches us wisdom' in Ga?",
          options: [
            { id: 1, text: "Ni nɔ ko ba" },
            { id: 2, text: "Adesa lɛ tsɔɔ wɔ nilee" },
            { id: 3, text: "Amɛhi shi yɛ miishɛɛ mli" },
            { id: 4, text: "Be ko ni eho lɛ" }
          ],
          correctOptionId: 2,
          hints: ["nilee = wisdom"],
          explanation: "Adesa lɛ tsɔɔ wɔ nilee = The story teaches us wisdom in Ga."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Then something happened' in Ga?",
          options: [
            { id: 1, text: "Ni nɔ ko ba" },
            { id: 2, text: "Amɛhi shi yɛ miishɛɛ mli" },
            { id: 3, text: "Adesa lɛ tsɔɔ wɔ nilee" },
            { id: 4, text: "No ji naagbee" }
          ],
          correctOptionId: 1,
          hints: ["nɔ ko = something", "ba = happened"],
          explanation: "Ni nɔ ko ba = Then something happened in Ga."
        }
      ]
    },

    {
      id: "3-3",
      type: "phrases",
      title: "Ending a Story",
      icon: "sparkles-outline",
      description: "Learn how to end a story in Ga",
      words: ["Adesa lɛ shishi tsɔɔmɔ", "No ji naagbee"],
      vocabulary: [
        {
          id: 181,
          english: "The moral of the story",
          native: "Adesa lɛ shishi tsɔɔmɔ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/adesa_lɛ_shishi_tsɔɔmɔ.m4a")
        },
        {
          id: 178,
          english: "That is the end",
          native: "No ji naagbee",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/no_ji_naagbee.m4a")
        }
      ],
      questions: [
        {
          id: 308,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/no_ji_naagbee.m4a"),
          options: [
            { id: 1, text: "The moral of the story" },
            { id: 2, text: "Listen to my story" },
            { id: 3, text: "They lived happily" },
            { id: 4, text: "That is the end" }
          ],
          correctOptionId: 4,
          hints: ["naagbee = the end"],
          explanation: "You heard 'No ji naagbee' which means 'That is the end' in Ga."
        },
        {
          id: 309,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'That is the end' in Ga?",
          options: [
            { id: 1, text: "Adesa lɛ shishi tsɔɔmɔ" },
            { id: 2, text: "No ji naagbee" },
            { id: 3, text: "Be ko ni eho lɛ" },
            { id: 4, text: "Ni nɔ ko ba" }
          ],
          correctOptionId: 2,
          hints: ["naagbee = end"],
          explanation: "No ji naagbee = That is the end in Ga."
        },
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The moral of the story' in Ga?",
          options: [
            { id: 1, text: "No ji naagbee" },
            { id: 2, text: "Gba mi adesa kroko" },
            { id: 3, text: "Adesa lɛ shishi tsɔɔmɔ" },
            { id: 4, text: "Adesa lɛ tsɔɔ wɔ nilee" }
          ],
          correctOptionId: 3,
          hints: ["shishi tsɔɔmɔ = moral/meaning"],
          explanation: "Adesa lɛ shishi tsɔɔmɔ = The moral of the story in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-3",
    title: "Review: Storytelling",
    icon: "refresh-outline",
    description: "Review all the storytelling vocabulary you've learned",
    questions: [
      {
        id: 311,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/adesa_lɛ_tsɔɔ_wɔ_nilee.m4a"),
        options: [
          { id: 1, text: "They lived happily" },
          { id: 2, text: "The story teaches us wisdom" },
          { id: 3, text: "Then something happened" },
          { id: 4, text: "The moral of the story" }
        ],
        correctOptionId: 2,
        hints: ["nilee = wisdom"],
        explanation: "You heard 'Adesa lɛ tsɔɔ wɔ nilee' which means 'The story teaches us wisdom'."
      },
      {
        id: 313,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter3/ni_nɔ_ko_ba.m4a"),
        options: [
          { id: 1, text: "That is the end" },
          { id: 2, text: "Then something happened" },
          { id: 3, text: "They lived happily" },
          { id: 4, text: "The story teaches us wisdom" }
        ],
        correctOptionId: 2,
        hints: ["nɔ ko = something"],
        explanation: "You heard 'Ni nɔ ko ba' which means 'Then something happened'."
      },
      {
        id: 315,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'They lived happily' in Ga?",
        options: [
          { id: 1, text: "Amɛhi shi yɛ miishɛɛ mli" },
          { id: 2, text: "No ji naagbee" },
          { id: 3, text: "Adesa lɛ tsɔɔ wɔ nilee" },
          { id: 4, text: "Ni nɔ ko ba" }
        ],
        correctOptionId: 1,
        hints: ["miishɛɛ = happiness"],
        explanation: "Amɛhi shi yɛ miishɛɛ mli = They lived happily."
      },
      {
        id: 317,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'That is the end' in Ga?",
        options: [
          { id: 1, text: "Be ko ni eho lɛ" },
          { id: 2, text: "Adesa lɛ shishi tsɔɔmɔ" },
          { id: 3, text: "No ji naagbee" },
          { id: 4, text: "Ni nɔ ko ba" }
        ],
        correctOptionId: 3,
        hints: ["naagbee = end"],
        explanation: "No ji naagbee = That is the end."
      },
      {
        id: 312,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Listen to my story' in Ga?",
        options: [
          { id: 1, text: "Gba mi adesa kroko" },
          { id: 2, text: "Bo mi adesa lɛ toi" },
          { id: 3, text: "No ji naagbee" },
          { id: 4, text: "Be ko ni eho lɛ" }
        ],
        correctOptionId: 2,
        hints: ["toi = listen"],
        explanation: "Bo mi adesa lɛ toi = Listen to my story."
      },
      {
        id: 314,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Tell me another story' in Ga?",
        options: [
          { id: 1, text: "Be ko ni eho lɛ" },
          { id: 2, text: "Gba mi adesa kroko" },
          { id: 3, text: "Adesa lɛ shishi tsɔɔmɔ" },
          { id: 4, text: "Bo mi adesa lɛ toi" }
        ],
        correctOptionId: 2,
        hints: ["kroko = another"],
        explanation: "Gba mi adesa kroko = Tell me another story."
      },
      {
        id: 310,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Once upon a time' in Ga?",
        options: [
          { id: 1, text: "Gba mi adesa kroko" },
          { id: 2, text: "Ni nɔ ko ba" },
          { id: 3, text: "Be ko ni eho lɛ" },
          { id: 4, text: "Bo mi adesa lɛ toi" }
        ],
        correctOptionId: 3,
        hints: ["be ko ni eho lɛ = once upon a time"],
        explanation: "Be ko ni eho lɛ = Once upon a time."
      },
      {
        id: 316,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The moral of the story' in Ga?",
        options: [
          { id: 1, text: "Adesa lɛ shishi tsɔɔmɔ" },
          { id: 2, text: "Adesa lɛ tsɔɔ wɔ nilee" },
          { id: 3, text: "No ji naagbee" },
          { id: 4, text: "Gba mi adesa kroko" }
        ],
        correctOptionId: 1,
        hints: ["shishi tsɔɔmɔ = moral"],
        explanation: "Adesa lɛ shishi tsɔɔmɔ = The moral of the story."
      }
    ]
  }
};