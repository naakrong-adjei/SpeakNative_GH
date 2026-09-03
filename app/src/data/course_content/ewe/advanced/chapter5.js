export default {
  id: 25,
  title: "Storytelling",
  description: "Learn how to tell and understand stories in Ewe",
  icon: "book-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "25-1",
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
          id: 2501,
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
          id: 2502,
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
          hints: ["ɖo to = listen", "ŋutinya = story"],
          explanation: "You heard 'Ɖo to nye ŋutinya' which means 'Listen to my story' in Ewe."
        }
      ]
    },

    {
      id: "25-2",
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
          id: 2503,
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
          id: 2504,
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
          id: 2505,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Gblɔ ŋutinya bubu [_____] (Tell me another story)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "nam" },
            { id: "opt2", text: "nye" },
            { id: "opt3", text: "mí" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["nam = to me"],
          explanation: "Gblɔ ŋutinya bubu nam = Tell me another story in Ewe."
        }
      ]
    },

    {
      id: "25-3",
      type: "words",
      title: "Lessons & Endings",
      icon: "sparkles-outline",
      description: "Learn how to conclude a story and share its moral in Ewe",
      words: ["Ŋutinya fiaa nunya mí", "Emae nye ma mle", "Ŋutinya la ƒe nufiame"],
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
          native: "Emae nye ma mle",
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
          id: 2506,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The story teaches us wisdom' in Ewe?",
          options: [
            { id: 1, text: "Ŋutinya fiaa nunya mí" },
            { id: 2, text: "Emae nye ma mle" },
            { id: 3, text: "Ŋutinya la ƒe nufiame" },
            { id: 4, text: "Blema ɣeaɖeɣi" }
          ],
          correctOptionId: 1,
          hints: ["fiaa = teaches", "nunya = wisdom"],
          explanation: "Ŋutinya fiaa nunya mí = The story teaches us wisdom in Ewe."
        },
        {
          id: 2507,
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
          hints: ["ma mle = the end"],
          explanation: "You heard 'Emae nye ma mle' which means 'That is the end' in Ewe."
        },
        {
          id: 2508,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Ŋutinya la ƒe [_____] (The moral of the story)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "nufiame" },
            { id: "opt2", text: "nunya" },
            { id: "opt3", text: "mle" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["nufiame = moral/lesson"],
          explanation: "Ŋutinya la ƒe nufiame = The moral of the story in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-25",
    title: "Review: Storytelling",
    icon: "refresh-outline",
    description: "Review all the storytelling vocabulary you've learned",
    questions: [
      {
        id: 2509,
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
        id: 2510,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/emegbe_nane_dzɔ.m4a"),
        options: [
          { id: 1, text: "Once upon a time" },
          { id: 2, text: "Listen to my story" },
          { id: 3, text: "Then something happened" },
          { id: 4, text: "They lived happily" }
        ],
        correctOptionId: 3,
        hints: ["dzɔ = happened"],
        explanation: "You heard 'Emegbe nane dzɔ' which means 'Then something happened'."
      },
      {
        id: 2511,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Tell me another story' in Ewe?",
        options: [
          { id: 1, text: "Emegbe nane dzɔ" },
          { id: 2, text: "Wonɔ agbe dzidzɔtɔe" },
          { id: 3, text: "Gblɔ ŋutinya bubu nam" },
          { id: 4, text: "Blema ɣeaɖeɣi" }
        ],
        correctOptionId: 3,
        hints: ["bubu = another"],
        explanation: "Gblɔ ŋutinya bubu nam = Tell me another story."
      },
      {
        id: 2512,
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
        id: 2513,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'That is the end' in Ewe?",
        options: [
          { id: 1, text: "Ŋutinya fiaa nunya mí" },
          { id: 2, text: "Emae nye ma mle" },
          { id: 3, text: "Ŋutinya la ƒe nufiame" },
          { id: 4, text: "Blema ɣeaɖeɣi" }
        ],
        correctOptionId: 2,
        hints: ["ma mle = the end"],
        explanation: "Emae nye ma mle = That is the end."
      },
      {
        id: 2514,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter5/ŋutinya_fiaa_nunya_mí.m4a"),
        options: [
          { id: 1, text: "The story teaches us wisdom" },
          { id: 2, text: "That is the end" },
          { id: 3, text: "The moral of the story" },
          { id: 4, text: "Once upon a time" }
        ],
        correctOptionId: 1,
        hints: ["nunya = wisdom"],
        explanation: "You heard 'Ŋutinya fiaa nunya mí' which means 'The story teaches us wisdom'."
      },
      {
        id: 2515,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Gblɔ ŋutinya bubu [_____] (Tell me another story)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "nam" },
          { id: "opt2", text: "nye" },
          { id: "opt3", text: "mí" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["nam = to me"],
        explanation: "Gblɔ ŋutinya bubu nam = Tell me another story."
      },
      {
        id: 2516,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Ŋutinya la ƒe [_____] (The moral of the story)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "nufiame" },
          { id: "opt2", text: "nunya" },
          { id: "opt3", text: "mle" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["nufiame = moral"],
        explanation: "Ŋutinya la ƒe nufiame = The moral of the story."
      },
      {
        id: 2517,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'They lived happily' in Ewe?",
        options: [
          { id: 1, text: "Emegbe nane dzɔ" },
          { id: 2, text: "Wonɔ agbe dzidzɔtɔe" },
          { id: 3, text: "Gblɔ ŋutinya bubu nam" },
          { id: 4, text: "Blema ɣeaɖeɣi" }
        ],
        correctOptionId: 2,
        hints: ["dzidzɔtɔe = happily"],
        explanation: "Wonɔ agbe dzidzɔtɔe = They lived happily."
      },
      {
        id: 2518,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The moral of the story' in Ewe?",
        options: [
          { id: 1, text: "Ŋutinya fiaa nunya mí" },
          { id: 2, text: "Emae nye ma mle" },
          { id: 3, text: "Ŋutinya la ƒe nufiame" },
          { id: 4, text: "Blema ɣeaɖeɣi" }
        ],
        correctOptionId: 3,
        hints: ["nufiame = moral"],
        explanation: "Ŋutinya la ƒe nufiame = The moral of the story."
      }
    ]
  }
};