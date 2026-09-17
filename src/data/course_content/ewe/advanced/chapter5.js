export default {
  id: 5,
  title: "Storytelling",
  description: "Learn how to tell and understand stories in Ewe",
  icon: "book-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "5-1",
      type: "words",
      title: "Starting a Story",
      icon: "book-outline",
      description: "Learn how to begin a story in Ewe",
      words: ["Blema ɣeaɖeɣi", "Ɖo to nye ŋutinya"],
      vocabulary: [
        {
          id: 175,
          english: "Once upon a time",
          native: "Blema ɣeaɖeɣi",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/blema_ɣeaɖeɣi.m4a")
        },
        {
          id: 176,
          english: "Listen to my story",
          native: "Ɖo to nye ŋutinya",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/ɖo_to_nye_ŋutinya.m4a")
        }
      ],
      questions: [
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Once upon a time' in Ewe?",
          options: [
            { id: 1, text: "Blema ɣeaɖeɣi" },
            { id: 2, text: "Ɖo to nye ŋutinya" },
            { id: 3, text: "Emegbe nane dzɔ" },
            { id: 4, text: "Wonɔ agbe dzidzɔtɔe" }
          ],
          correctOptionId: 1,
          hints: ["Blema = long ago", "ɣeaɖeɣi = some time"],
          explanation: "Blema ɣeaɖeɣi = Once upon a time in Ewe."
        },
        {
          id: 502,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/ɖo_to_nye_ŋutinya.m4a"),
          options: [
            { id: 1, text: "Once upon a time" },
            { id: 2, text: "Listen to my story" },
            { id: 3, text: "Then something happened" },
            { id: 4, text: "They lived happily" }
          ],
          correctOptionId: 2,
          hints: ["Ɖo to = listen", "ŋutinya = story"],
          explanation: "You heard 'Ɖo to nye ŋutinya' which means 'Listen to my story' in Ewe."
        },
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Listen to my story' in Ewe?",
          options: [
            { id: 1, text: "Blema ɣeaɖeɣi" },
            { id: 2, text: "Ɖo to nye ŋutinya" },
            { id: 3, text: "Emegbe nane dzɔ" },
            { id: 4, text: "Emae nye mamle" }
          ],
          correctOptionId: 2,
          hints: ["Ɖo to = listen"],
          explanation: "Ɖo to nye ŋutinya = Listen to my story in Ewe."
        },
        {
          id: 504,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/blema_ɣeaɖeɣi.m4a"),
          options: [
            { id: 1, text: "Once upon a time" },
            { id: 2, text: "Listen to my story" },
            { id: 3, text: "The moral of the story" },
            { id: 4, text: "Tell me another story" }
          ],
          correctOptionId: 1,
          hints: ["Blema = long ago"],
          explanation: "You heard 'Blema ɣeaɖeɣi' which means 'Once upon a time' in Ewe."
        }
      ]
    },

    {
      id: "5-2",
      type: "words",
      title: "Telling the Story",
      icon: "chatbubble-outline",
      description: "Learn how to tell a story in Ewe",
      words: ["Emegbe nane dzɔ", "Wonɔ agbe dzidzɔtɔe", "Gblɔ ŋutinya bubu nam"],
      vocabulary: [
        {
          id: 180,
          english: "Then something happened",
          native: "Emegbe nane dzɔ",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/emegbe_nane_dzɔ.m4a")
        },
        {
          id: 182,
          english: "They lived happily",
          native: "Wonɔ agbe dzidzɔtɔe",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/wonɔ_agbe_dzidzɔtɔe.m4a")
        },
        {
          id: 183,
          english: "Tell me another story",
          native: "Gblɔ ŋutinya bubu nam",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/gblɔ_ŋutinya_bubu_nam.m4a")
        }
      ],
      questions: [
        {
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Then something happened' in Ewe?",
          options: [
            { id: 1, text: "Emegbe nane dzɔ" },
            { id: 2, text: "Wonɔ agbe dzidzɔtɔe" },
            { id: 3, text: "Gblɔ ŋutinya bubu nam" },
            { id: 4, text: "Blema ɣeaɖeɣi" }
          ],
          correctOptionId: 1,
          hints: ["emegbe = then", "nane = something", "dzɔ = happened"],
          explanation: "Emegbe nane dzɔ = Then something happened in Ewe."
        },
        {
          id: 506,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/wonɔ_agbe_dzidzɔtɔe.m4a"),
          options: [
            { id: 1, text: "Then something happened" },
            { id: 2, text: "They lived happily" },
            { id: 3, text: "Tell me another story" },
            { id: 4, text: "Once upon a time" }
          ],
          correctOptionId: 2,
          hints: ["wonɔ = they lived", "dzidzɔtɔe = happily"],
          explanation: "You heard 'Wonɔ agbe dzidzɔtɔe' which means 'They lived happily' in Ewe."
        },
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Tell me another story' in Ewe?",
          options: [
            { id: 1, text: "Emegbe nane dzɔ" },
            { id: 2, text: "Wonɔ agbe dzidzɔtɔe" },
            { id: 3, text: "Gblɔ ŋutinya bubu nam" },
            { id: 4, text: "Ŋutinya la ƒe nufiame" }
          ],
          correctOptionId: 3,
          hints: ["bubu = another"],
          explanation: "Gblɔ ŋutinya bubu nam = Tell me another story in Ewe."
        },
        {
          id: 508,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/emegbe_nane_dzɔ.m4a"),
          options: [
            { id: 1, text: "Then something happened" },
            { id: 2, text: "They lived happily" },
            { id: 3, text: "Tell me another story" },
            { id: 4, text: "The story teaches us wisdom" }
          ],
          correctOptionId: 1,
          hints: ["dzɔ = happened"],
          explanation: "You heard 'Emegbe nane dzɔ' which means 'Then something happened' in Ewe."
        }
      ]
    },

    {
      id: "5-3",
      type: "words",
      title: "Lessons & Endings",
      icon: "sparkles-outline",
      description: "Learn how to conclude a story and share its moral in Ewe",
      words: ["Ŋutinya fiaa nunya mí", "Emae nye mamle", "Ŋutinya la ƒe nufiame"],
      vocabulary: [
        {
          id: 177,
          english: "The story teaches us wisdom",
          native: "Ŋutinya fiaa nunya mí",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/ŋutinya_fiaa_nunya_mí.m4a")
        },
        {
          id: 178,
          english: "That is the end",
          native: "Emae nye mamle",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/emae_nye_ma_mle.m4a")
        },
        {
          id: 181,
          english: "The moral of the story",
          native: "Ŋutinya la ƒe nufiame",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/ŋutinya_la_ƒe_nufiame.m4a")
        }
      ],
      questions: [
        {
          id: 509,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The story teaches us wisdom' in Ewe?",
          options: [
            { id: 1, text: "Ŋutinya fiaa nunya mí" },
            { id: 2, text: "Emae nye mamle" },
            { id: 3, text: "Ŋutinya la ƒe nufiame" },
            { id: 4, text: "Blema ɣeaɖeɣi" }
          ],
          correctOptionId: 1,
          hints: ["fiaa = teaches", "nunya = wisdom"],
          explanation: "Ŋutinya fiaa nunya mí = The story teaches us wisdom in Ewe."
        },
        {
          id: 510,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/emae_nye_ma_mle.m4a"),
          options: [
            { id: 1, text: "The story teaches us wisdom" },
            { id: 2, text: "That is the end" },
            { id: 3, text: "The moral of the story" },
            { id: 4, text: "Once upon a time" }
          ],
          correctOptionId: 2,
          hints: ["mamle = the end"],
          explanation: "You heard 'Emae nye mamle' which means 'That is the end' in Ewe."
        },
        {
          id: 511,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The moral of the story' in Ewe?",
          options: [
            { id: 1, text: "Ŋutinya fiaa nunya mí" },
            { id: 2, text: "Emae nye mamle" },
            { id: 3, text: "Ŋutinya la ƒe nufiame" },
            { id: 4, text: "Ɖo to nye ŋutinya" }
          ],
          correctOptionId: 3,
          hints: ["nufiame = moral/lesson"],
          explanation: "Ŋutinya la ƒe nufiame = The moral of the story in Ewe."
        },
        {
          id: 512,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/ŋutinya_fiaa_nunya_mí.m4a"),
          options: [
            { id: 1, text: "The story teaches us wisdom" },
            { id: 2, text: "That is the end" },
            { id: 3, text: "The moral of the story" },
            { id: 4, text: "Listen to my story" }
          ],
          correctOptionId: 1,
          hints: ["nunya = wisdom"],
          explanation: "You heard 'Ŋutinya fiaa nunya mí' which means 'The story teaches us wisdom' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-5",
    title: "Review: Storytelling",
    icon: "refresh-outline",
    description: "Review all the storytelling vocabulary you've learned",
    questions: [
      {
        id: 513,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Once upon a time' in Ewe?",
        options: [
          { id: 1, text: "Blema ɣeaɖeɣi" },
          { id: 2, text: "Ɖo to nye ŋutinya" },
          { id: 3, text: "Emegbe nane dzɔ" },
          { id: 4, text: "Wonɔ agbe dzidzɔtɔe" }
        ],
        correctOptionId: 1,
        hints: ["Blema = long ago"],
        explanation: "Blema ɣeaɖeɣi = Once upon a time."
      },
      {
        id: 514,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/gblɔ_ŋutinya_bubu_nam.m4a"),
        options: [
          { id: 1, text: "Then something happened" },
          { id: 2, text: "They lived happily" },
          { id: 3, text: "Tell me another story" },
          { id: 4, text: "The story teaches us wisdom" }
        ],
        correctOptionId: 3,
        hints: ["bubu = another"],
        explanation: "You heard 'Gblɔ ŋutinya bubu nam' which means 'Tell me another story'."
      },
      {
        id: 515,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Listen to my story' in Ewe?",
        options: [
          { id: 1, text: "Blema ɣeaɖeɣi" },
          { id: 2, text: "Ɖo to nye ŋutinya" },
          { id: 3, text: "Emegbe nane dzɔ" },
          { id: 4, text: "Emae nye mamle" }
        ],
        correctOptionId: 2,
        hints: ["Ɖo to = listen"],
        explanation: "Ɖo to nye ŋutinya = Listen to my story."
      },
      {
        id: 516,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/emae_nye_ma_mle.m4a"),
        options: [
          { id: 1, text: "The story teaches us wisdom" },
          { id: 2, text: "That is the end" },
          { id: 3, text: "The moral of the story" },
          { id: 4, text: "Once upon a time" }
        ],
        correctOptionId: 2,
        hints: ["mamle = the end"],
        explanation: "You heard 'Emae nye mamle' which means 'That is the end'."
      },
      {
        id: 517,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Then something happened' in Ewe?",
        options: [
          { id: 1, text: "Emegbe nane dzɔ" },
          { id: 2, text: "Wonɔ agbe dzidzɔtɔe" },
          { id: 3, text: "Gblɔ ŋutinya bubu nam" },
          { id: 4, text: "Blema ɣeaɖeɣi" }
        ],
        correctOptionId: 1,
        hints: ["dzɔ = happened"],
        explanation: "Emegbe nane dzɔ = Then something happened."
      },
      {
        id: 518,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'They lived happily' in Ewe?",
        options: [
          { id: 1, text: "Emegbe nane dzɔ" },
          { id: 2, text: "Wonɔ agbe dzidzɔtɔe" },
          { id: 3, text: "Gblɔ ŋutinya bubu nam" },
          { id: 4, text: "Ŋutinya la ƒe nufiame" }
        ],
        correctOptionId: 2,
        hints: ["dzidzɔtɔe = happily"],
        explanation: "Wonɔ agbe dzidzɔtɔe = They lived happily."
      },
      {
        id: 519,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The story teaches us wisdom' in Ewe?",
        options: [
          { id: 1, text: "Ŋutinya fiaa nunya mí" },
          { id: 2, text: "Emae nye mamle" },
          { id: 3, text: "Ŋutinya la ƒe nufiame" },
          { id: 4, text: "Blema ɣeaɖeɣi" }
        ],
        correctOptionId: 1,
        hints: ["nunya = wisdom"],
        explanation: "Ŋutinya fiaa nunya mí = The story teaches us wisdom."
      },
      {
        id: 520,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/ŋutinya_la_ƒe_nufiame.m4a"),
        options: [
          { id: 1, text: "The story teaches us wisdom" },
          { id: 2, text: "That is the end" },
          { id: 3, text: "The moral of the story" },
          { id: 4, text: "Listen to my story" }
        ],
        correctOptionId: 3,
        hints: ["nufiame = moral"],
        explanation: "You heard 'Ŋutinya la ƒe nufiame' which means 'The moral of the story'."
      },
      {
        id: 521,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The moral of the story' in Ewe?",
        options: [
          { id: 1, text: "Ŋutinya fiaa nunya mí" },
          { id: 2, text: "Emae nye mamle" },
          { id: 3, text: "Ŋutinya la ƒe nufiame" },
          { id: 4, text: "Ɖo to nye ŋutinya" }
        ],
        correctOptionId: 3,
        hints: ["nufiame = moral"],
        explanation: "Ŋutinya la ƒe nufiame = The moral of the story."
      },
      {
        id: 522,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/wonɔ_agbe_dzidzɔtɔe.m4a"),
        options: [
          { id: 1, text: "Then something happened" },
          { id: 2, text: "They lived happily" },
          { id: 3, text: "Tell me another story" },
          { id: 4, text: "Once upon a time" }
        ],
        correctOptionId: 2,
        hints: ["dzidzɔtɔe = happily"],
        explanation: "You heard 'Wonɔ agbe dzidzɔtɔe' which means 'They lived happily'."
      }
    ]
  }
};