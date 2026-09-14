export default {
  id: 4,
  title: "Opinions & Emotions",
  description: "Learn how to express opinions and emotions in Ga",
  icon: "happy-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "4-1",
      type: "words",
      title: "Feelings & Emotions",
      icon: "smile-outline",
      description: "Learn how to express personal emotional states in Ga",
      words: ["Miyɛ miishɛɛ", "Miyɛ awerɛho mli", "Mimli efu", "Miishe gbeyei", "Efe mi naakpɛɛ"],
      vocabulary: [
        {
          id: 184,
          english: "I am happy",
          native: "Miyɛ miishɛɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/miyɛ_miishɛɛ.m4a")
        },
        {
          id: 185,
          english: "I am sad",
          native: "Miyɛ awerɛho mli",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/miyɛ_awerɛho_mli.m4a")
        },
        {
          id: 188,
          english: "I am angry",
          native: "Mimli efu",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/mimli_efu.m4a")
        },
        {
          id: 189,
          english: "I am afraid",
          native: "Miishe gbeyei",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/miishe_gbeyei.m4a")
        },
        {
          id: 190,
          english: "I am surprised",
          native: "Efe mi naakpɛɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/efe_mi_naakpɛɛ.m4a")
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am happy' in Ga?",
          options: [
            { id: 1, text: "Miyɛ miishɛɛ" },
            { id: 2, text: "Miyɛ awerɛho mli" },
            { id: 3, text: "Mimli efu" },
            { id: 4, text: "Miishe gbeyei" }
          ],
          correctOptionId: 1,
          hints: ["miishɛɛ = happiness"],
          explanation: "Miyɛ miishɛɛ = I am happy in Ga."
        },
        {
          id: 402,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/miyɛ_awerɛho_mli.m4a"),
          options: [
            { id: 1, text: "I am happy" },
            { id: 2, text: "I am sad" },
            { id: 3, text: "I am angry" },
            { id: 4, text: "I am afraid" }
          ],
          correctOptionId: 2,
          hints: ["awerɛho = sadness"],
          explanation: "You heard 'Miyɛ awerɛho mli' which means 'I am sad' in Ga."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am angry' in Ga?",
          options: [
            { id: 1, text: "Miyɛ miishɛɛ" },
            { id: 2, text: "Miyɛ awerɛho mli" },
            { id: 3, text: "Mimli efu" },
            { id: 4, text: "Efe mi naakpɛɛ" }
          ],
          correctOptionId: 3,
          hints: ["efu = anger"],
          explanation: "Mimli efu = I am angry in Ga."
        },
        {
          id: 404,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/miishe_gbeyei.m4a"),
          options: [
            { id: 1, text: "I am angry" },
            { id: 2, text: "I am afraid" },
            { id: 3, text: "I am surprised" },
            { id: 4, text: "I am happy" }
          ],
          correctOptionId: 2,
          hints: ["gbeyei = fear"],
          explanation: "You heard 'Miishe gbeyei' which means 'I am afraid' in Ga."
        },
        {
          id: 405,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am surprised' in Ga?",
          options: [
            { id: 1, text: "Mimli efu" },
            { id: 2, text: "Miishe gbeyei" },
            { id: 3, text: "Efe mi naakpɛɛ" },
            { id: 4, text: "Miyɛ awerɛho mli" }
          ],
          correctOptionId: 3,
          hints: ["naakpɛɛ = surprise"],
          explanation: "Efe mi naakpɛɛ = I am surprised in Ga."
        },
        {
          id: 406,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/mimli_efu.m4a"),
          options: [
            { id: 1, text: "I am angry" },
            { id: 2, text: "I am afraid" },
            { id: 3, text: "I am surprised" },
            { id: 4, text: "I am sad" }
          ],
          correctOptionId: 1,
          hints: ["efu = anger"],
          explanation: "You heard 'Mimli efu' which means 'I am angry' in Ga."
        }
      ]
    },

    {
      id: "4-2",
      type: "phrases",
      title: "Opinions & Agreement",
      icon: "chatbubble-ellipses-outline",
      description: "Learn how to express what you think and whether you agree in Ga",
      words: ["Misusuɔ nakai", "Mikpɛlɛɛɛ nɔ", "Yɛ misusumɔ naa", "No ji anɔkwale"],
      vocabulary: [
        {
          id: 186,
          english: "I think so",
          native: "Misusuɔ nakai",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/misusuɔ_nakai.m4a")
        },
        {
          id: 187,
          english: "I don't agree",
          native: "Mikpɛlɛɛɛ nɔ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/mikpɛlɛɛɛ_nɔ.m4a")
        },
        {
          id: 191,
          english: "In my opinion",
          native: "Yɛ misusumɔ naa",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/yɛ_misusumɔ_naa.m4a")
        },
        {
          id: 192,
          english: "That is true",
          native: "No ji anɔkwale",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/no_ji_anɔkwale.m4a")
        }
      ],
      questions: [
        {
          id: 407,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I think so' in Ga?",
          options: [
            { id: 1, text: "Misusuɔ nakai" },
            { id: 2, text: "Mikpɛlɛɛɛ nɔ" },
            { id: 3, text: "Yɛ misusumɔ naa" },
            { id: 4, text: "No ji anɔkwale" }
          ],
          correctOptionId: 1,
          hints: ["Misusuɔ = I think"],
          explanation: "Misusuɔ nakai = I think so in Ga."
        },
        {
          id: 408,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/mikpɛlɛɛɛ_nɔ.m4a"),
          options: [
            { id: 1, text: "I think so" },
            { id: 2, text: "I don't agree" },
            { id: 3, text: "In my opinion" },
            { id: 4, text: "That is true" }
          ],
          correctOptionId: 2,
          hints: ["Mikpɛlɛɛɛ nɔ = I don't agree"],
          explanation: "You heard 'Mikpɛlɛɛɛ nɔ' which means 'I don't agree' in Ga."
        },
        {
          id: 409,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'In my opinion' in Ga?",
          options: [
            { id: 1, text: "Misusuɔ nakai" },
            { id: 2, text: "Mikpɛlɛɛɛ nɔ" },
            { id: 3, text: "Yɛ misusumɔ naa" },
            { id: 4, text: "No ji anɔkwale" }
          ],
          correctOptionId: 3,
          hints: ["misusumɔ = my opinion"],
          explanation: "Yɛ misusumɔ naa = In my opinion in Ga."
        },
        {
          id: 410,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/no_ji_anɔkwale.m4a"),
          options: [
            { id: 1, text: "I think so" },
            { id: 2, text: "I don't agree" },
            { id: 3, text: "In my opinion" },
            { id: 4, text: "That is true" }
          ],
          correctOptionId: 4,
          hints: ["anɔkwale = truth"],
          explanation: "You heard 'No ji anɔkwale' which means 'That is true' in Ga."
        },
        {
          id: 411,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'That is true' in Ga?",
          options: [
            { id: 1, text: "Misusuɔ nakai" },
            { id: 2, text: "Mikpɛlɛɛɛ nɔ" },
            { id: 3, text: "Yɛ misusumɔ naa" },
            { id: 4, text: "No ji anɔkwale" }
          ],
          correctOptionId: 4,
          hints: ["anɔkwale = truth"],
          explanation: "No ji anɔkwale = That is true in Ga."
        }
      ]
    },

    {
      id: "4-3",
      type: "phrases",
      title: "Reassurance & Well-being",
      icon: "heart-outline",
      description: "Learn how to respond to someone's situation in Ga",
      words: ["Kaagba ohe na", "Etɔ mi"],
      vocabulary: [
        {
          id: 194,
          english: "Don't worry",
          native: "Kaagba ohe na",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/kaagba_ohe_na.m4a")
        },
        {
          id: 100,
          english: "I am tired",
          native: "Etɔ mi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/etɔ_mi.m4a")
        }
      ],
      questions: [
        {
          id: 412,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Don't worry' in Ga?",
          options: [
            { id: 1, text: "Kaagba ohe na" },
            { id: 2, text: "Etɔ mi" },
            { id: 3, text: "Miyɛ miishɛɛ" },
            { id: 4, text: "Mimli efu" }
          ],
          correctOptionId: 1,
          hints: ["kaagba = don't", "ohe = yourself"],
          explanation: "Kaagba ohe na = Don't worry in Ga."
        },
        {
          id: 413,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/etɔ_mi.m4a"),
          options: [
            { id: 1, text: "I am happy" },
            { id: 2, text: "I am sad" },
            { id: 3, text: "I am tired" },
            { id: 4, text: "Don't worry" }
          ],
          correctOptionId: 3,
          hints: ["Etɔ mi = I am tired"],
          explanation: "You heard 'Etɔ mi' which means 'I am tired' in Ga."
        },
        {
          id: 414,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am tired' in Ga?",
          options: [
            { id: 1, text: "Kaagba ohe na" },
            { id: 2, text: "Etɔ mi" },
            { id: 3, text: "Miyɛ awerɛho mli" },
            { id: 4, text: "Miishe gbeyei" }
          ],
          correctOptionId: 2,
          hints: ["Expression of being tired"],
          explanation: "Etɔ mi = I am tired in Ga."
        },
        {
          id: 415,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/kaagba_ohe_na.m4a"),
          options: [
            { id: 1, text: "I am happy" },
            { id: 2, text: "I am sad" },
            { id: 3, text: "I am tired" },
            { id: 4, text: "Don't worry" }
          ],
          correctOptionId: 4,
          hints: ["kaagba = don't"],
          explanation: "You heard 'Kaagba ohe na' which means 'Don't worry' in Ga."
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
        id: 416,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am happy' in Ga?",
        options: [
          { id: 1, text: "Miyɛ miishɛɛ" },
          { id: 2, text: "Miyɛ awerɛho mli" },
          { id: 3, text: "Mimli efu" },
          { id: 4, text: "Kaagba ohe na" }
        ],
        correctOptionId: 1,
        hints: ["miishɛɛ = happiness"],
        explanation: "Miyɛ miishɛɛ = I am happy."
      },
      {
        id: 417,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/etɔ_mi.m4a"),
        options: [
          { id: 1, text: "I am happy" },
          { id: 2, text: "I am sad" },
          { id: 3, text: "I am tired" },
          { id: 4, text: "Don't worry" }
        ],
        correctOptionId: 3,
        hints: ["Etɔ mi = I am tired"],
        explanation: "You heard 'Etɔ mi' which means 'I am tired'."
      },
      {
        id: 418,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am sad' in Ga?",
        options: [
          { id: 1, text: "Miyɛ miishɛɛ" },
          { id: 2, text: "Miyɛ awerɛho mli" },
          { id: 3, text: "Mimli efu" },
          { id: 4, text: "Kaagba ohe na" }
        ],
        correctOptionId: 2,
        hints: ["awerɛho = sadness"],
        explanation: "Miyɛ awerɛho mli = I am sad."
      },
      {
        id: 419,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/miyɛ_miishɛɛ.m4a"),
        options: [
          { id: 1, text: "I am happy" },
          { id: 2, text: "I am sad" },
          { id: 3, text: "I am tired" },
          { id: 4, text: "I am angry" }
        ],
        correctOptionId: 1,
        hints: ["miishɛɛ = happiness"],
        explanation: "You heard 'Miyɛ miishɛɛ' which means 'I am happy'."
      },
      {
        id: 420,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am angry' in Ga?",
        options: [
          { id: 1, text: "Mimli efu" },
          { id: 2, text: "Miishe gbeyei" },
          { id: 3, text: "Efe mi naakpɛɛ" },
          { id: 4, text: "Miyɛ miishɛɛ" }
        ],
        correctOptionId: 1,
        hints: ["efu = anger"],
        explanation: "Mimli efu = I am angry."
      },
      {
        id: 421,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/efe_mi_naakpɛɛ.m4a"),
        options: [
          { id: 1, text: "I am angry" },
          { id: 2, text: "I am afraid" },
          { id: 3, text: "I am surprised" },
          { id: 4, text: "I am sad" }
        ],
        correctOptionId: 3,
        hints: ["naakpɛɛ = surprise"],
        explanation: "You heard 'Efe mi naakpɛɛ' which means 'I am surprised'."
      },
      {
        id: 422,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I think so' in Ga?",
        options: [
          { id: 1, text: "Misusuɔ nakai" },
          { id: 2, text: "Mikpɛlɛɛɛ nɔ" },
          { id: 3, text: "Yɛ misusumɔ naa" },
          { id: 4, text: "No ji anɔkwale" }
        ],
        correctOptionId: 1,
        hints: ["Misusuɔ = I think"],
        explanation: "Misusuɔ nakai = I think so."
      },
      {
        id: 423,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter4/yɛ_misusumɔ_naa.m4a"),
        options: [
          { id: 1, text: "I think so" },
          { id: 2, text: "I don't agree" },
          { id: 3, text: "In my opinion" },
          { id: 4, text: "That is true" }
        ],
        correctOptionId: 3,
        hints: ["misusumɔ = my opinion"],
        explanation: "You heard 'Yɛ misusumɔ naa' which means 'In my opinion'."
      },
      {
        id: 424,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I don't agree' in Ga?",
        options: [
          { id: 1, text: "Misusuɔ nakai" },
          { id: 2, text: "Mikpɛlɛɛɛ nɔ" },
          { id: 3, text: "Yɛ misusumɔ naa" },
          { id: 4, text: "No ji anɔkwale" }
        ],
        correctOptionId: 2,
        hints: ["Mikpɛlɛɛɛ nɔ = I don't agree"],
        explanation: "Mikpɛlɛɛɛ nɔ = I don't agree."
      },
      {
        id: 425,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'That is true' in Ga?",
        options: [
          { id: 1, text: "Misusuɔ nakai" },
          { id: 2, text: "Mikpɛlɛɛɛ nɔ" },
          { id: 3, text: "Yɛ misusumɔ naa" },
          { id: 4, text: "No ji anɔkwale" }
        ],
        correctOptionId: 4,
        hints: ["anɔkwale = truth"],
        explanation: "No ji anɔkwale = That is true."
      },
      {
        id: 426,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Don't worry' in Ga?",
        options: [
          { id: 1, text: "Kaagba ohe na" },
          { id: 2, text: "Miyɛ miishɛɛ" },
          { id: 3, text: "Mimli efu" },
          { id: 4, text: "Etɔ mi" }
        ],
        correctOptionId: 1,
        hints: ["kaagba = don't"],
        explanation: "Kaagba ohe na = Don't worry."
      },
      {
        id: 427,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am afraid' in Ga?",
        options: [
          { id: 1, text: "Miishe gbeyei" },
          { id: 2, text: "Mimli efu" },
          { id: 3, text: "Efe mi naakpɛɛ" },
          { id: 4, text: "Miyɛ awerɛho mli" }
        ],
        correctOptionId: 1,
        hints: ["gbeyei = fear"],
        explanation: "Miishe gbeyei = I am afraid."
      }
    ]
  }
};