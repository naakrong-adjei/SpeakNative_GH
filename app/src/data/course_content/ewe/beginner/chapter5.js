export default {
  id: 5,
  title: "Food & Drinks",
  description: "Learn food and drink vocabulary in Ewe",
  icon: "restaurant-outline",
  totalXp: 10,
  difficulty: "Beginner",

  sections: [
    {
      id: "5-1",
      type: "words",
      title: "Food Words",
      icon: "restaurant-outline",
      description: "Learn basic food and drink words in Ewe",
      words: ["Tsi", "Nuɖuɖu"],
      vocabulary: [
        {
          id: 60,
          english: "Water",
          native: "Tsi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/tsi.m4a")
        },
        {
          id: 61,
          english: "Food",
          native: "Nuɖuɖu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/nududu.m4a")
        }
      ],
      questions: [
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Water' in Ewe?",
          options: [
            { id: 1, text: "Tsi" },
            { id: 2, text: "Nuɖuɖu" },
            { id: 3, text: "Dɔ nye wum" },
            { id: 4, text: "Tsikɔ nye wum" }
          ],
          correctOptionId: 1,
          hints: ["Essential for drinking"],
          explanation: "Tsi = Water in Ewe."
        },
        {
          id: 502,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/nududu.m4a"),
          options: [
            { id: 1, text: "Water" },
            { id: 2, text: "Food" },
            { id: 3, text: "Hunger" },
            { id: 4, text: "Thirst" }
          ],
          correctOptionId: 2,
          hints: ["What you eat"],
          explanation: "You heard 'Nuɖuɖu' which means Food in Ewe."
        }
      ]
    },

    {
      id: "5-2",
      type: "phrases",
      title: "Hunger & Thirst",
      icon: "cafe-outline",
      description: "Learn how to express hunger, thirst, and eating in Ewe",
      words: ["Dɔ nye wum", "Medzi be maɖu nu", "Tsikɔ nye wum", "Maɖu mɔlu"],
      vocabulary: [
        {
          id: 62,
          english: "I am hungry",
          native: "Dɔ nye wum",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/dɔ_nye_wum.m4a")
        },
        {
          id: 63,
          english: "I want to eat",
          native: "Medzi be maɖu nu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/medzi_be_madu_nu.m4a")
        },
        {
          id: 67,
          english: "I am thirsty",
          native: "Tsikɔ nye wum",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/tsikɔ_nye_wum.m4a")
        },
        {
          id: 101,
          english: "I will eat rice",
          native: "Maɖu mɔlu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/madu_mɔlu.m4a")
        }
      ],
      questions: [
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am hungry' in Ewe?",
          options: [
            { id: 1, text: "Tsikɔ nye wum" },
            { id: 2, text: "Dɔ nye wum" },
            { id: 3, text: "Medzi be maɖu nu" },
            { id: 4, text: "Maɖu mɔlu" }
          ],
          correctOptionId: 2,
          hints: ["Dɔ = hunger"],
          explanation: "Dɔ nye wum = I am hungry in Ewe."
        },
        {
          id: 504,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/tsikɔ_nye_wum.m4a"),
          options: [
            { id: 1, text: "I am hungry" },
            { id: 2, text: "I am thirsty" },
            { id: 3, text: "I want to eat" },
            { id: 4, text: "I will eat rice" }
          ],
          correctOptionId: 2,
          hints: ["Tsikɔ = thirst"],
          explanation: "You heard 'Tsikɔ nye wum' which means 'I am thirsty' in Ewe."
        },
        {
          id: 505,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          sentence: "Medzi be [_____] nu (I want to eat)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "maɖu" },
            { id: "opt2", text: "tsi" },
            { id: "opt3", text: "mɔlu" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Medzi be = I want to", "nu = food/eat"],
          explanation: "Medzi be maɖu nu = I want to eat in Ewe."
        }
      ]
    },

    {
      id: "5-3",
      type: "phrases",
      title: "At the Table",
      icon: "restaurant-outline",
      description: "Learn useful phrases for dining in Ewe",
      words: ["Meɖe kuku na tsim", "Nuɖuɖua xo dzo", "Meɖe kuku tsɔ akɔnta ve", "Meɖunu xoxo"],
      vocabulary: [
        {
          id: 66,
          english: "Give me water please",
          native: "Meɖe kuku na tsim",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/mede_kuku_na_tsim.m4a")
        },
        {
          id: 72,
          english: "The food is hot",
          native: "Nuɖuɖua xo dzo",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/nududua_xo_dzo.m4a")
        },
        {
          id: 73,
          english: "Bring the bill please",
          native: "Meɖe kuku tsɔ akɔnta ve",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/mede_kuku_tsɔ_akɔnta_ve.m4a")
        },
        {
          id: 102,
          english: "I have eaten already",
          native: "Meɖunu xoxo",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/medunu_xoxo.m4a")
        }
      ],
      questions: [
        {
          id: 506,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Give me water please' in Ewe?",
          options: [
            { id: 1, text: "Meɖe kuku na tsim" },
            { id: 2, text: "Meɖe kuku tsɔ akɔnta ve" },
            { id: 3, text: "Dɔ nye wum" },
            { id: 4, text: "Tsikɔ nye wum" }
          ],
          correctOptionId: 1,
          hints: ["Meɖe kuku = please", "tsi = water"],
          explanation: "Meɖe kuku na tsim = Give me water please in Ewe."
        },
        {
          id: 507,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/nududua_xo_dzo.m4a"),
          options: [
            { id: 1, text: "Give me water please" },
            { id: 2, text: "The food is hot" },
            { id: 3, text: "Bring the bill please" },
            { id: 4, text: "I have eaten already" }
          ],
          correctOptionId: 2,
          hints: ["Nuɖuɖu = food", "dzo = hot"],
          explanation: "You heard 'Nuɖuɖua xo dzo' which means 'The food is hot' in Ewe."
        },
        {
          id: 508,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I have eaten already' in Ewe?",
          options: [
            { id: 1, text: "Medzi be maɖu nu" },
            { id: 2, text: "Maɖu mɔlu" },
            { id: 3, text: "Meɖunu xoxo" },
            { id: 4, text: "Nuɖuɖua xo dzo" }
          ],
          correctOptionId: 3,
          hints: ["meɖu = I ate", "xoxo = already"],
          explanation: "Meɖunu xoxo = I have eaten already in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-5",
    title: "Review: Food & Drinks",
    icon: "refresh-outline",
    description: "Review all the food and drink vocabulary you've learned",
    questions: [
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Food' in Ewe?",
        options: [
          { id: 1, text: "Tsi" },
          { id: 2, text: "Nuɖuɖu" },
          { id: 3, text: "Dɔ nye wum" },
          { id: 4, text: "Tsikɔ nye wum" }
        ],
        correctOptionId: 2,
        hints: ["What you eat"],
        explanation: "Nuɖuɖu = Food in Ewe."
      },
      {
        id: 510,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What word did you hear?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/tsi.m4a"),
        options: [
          { id: 1, text: "Water" },
          { id: 2, text: "Food" },
          { id: 3, text: "Hunger" },
          { id: 4, text: "Thirst" }
        ],
        correctOptionId: 1,
        hints: ["Essential for drinking"],
        explanation: "You heard 'Tsi' which means Water in Ewe."
      },
      {
        id: 511,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am thirsty' in Ewe?",
        options: [
          { id: 1, text: "Dɔ nye wum" },
          { id: 2, text: "Tsikɔ nye wum" },
          { id: 3, text: "Medzi be maɖu nu" },
          { id: 4, text: "Maɖu mɔlu" }
        ],
        correctOptionId: 2,
        hints: ["Tsikɔ = thirst"],
        explanation: "Tsikɔ nye wum = I am thirsty in Ewe."
      },
      {
        id: 512,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/medzi_be_madu_nu.m4a"),
        options: [
          { id: 1, text: "I am hungry" },
          { id: 2, text: "I want to eat" },
          { id: 3, text: "I am thirsty" },
          { id: 4, text: "I will eat rice" }
        ],
        correctOptionId: 2,
        hints: ["Medzi be = I want to"],
        explanation: "You heard 'Medzi be maɖu nu' which means 'I want to eat' in Ewe."
      },
      {
        id: 513,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I will eat rice' in Ewe?",
        options: [
          { id: 1, text: "Dɔ nye wum" },
          { id: 2, text: "Tsikɔ nye wum" },
          { id: 3, text: "Medzi be maɖu nu" },
          { id: 4, text: "Maɖu mɔlu" }
        ],
        correctOptionId: 4,
        hints: ["maɖu = I will eat", "mɔlu = rice"],
        explanation: "Maɖu mɔlu = I will eat rice in Ewe."
      },
      {
        id: 514,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The food is hot' in Ewe?",
        options: [
          { id: 1, text: "Nuɖuɖua xo dzo" },
          { id: 2, text: "Meɖe kuku na tsim" },
          { id: 3, text: "Meɖe kuku tsɔ akɔnta ve" },
          { id: 4, text: "Meɖunu xoxo" }
        ],
        correctOptionId: 1,
        hints: ["Nuɖuɖu = food", "dzo = hot"],
        explanation: "Nuɖuɖua xo dzo = The food is hot in Ewe."
      },
      {
        id: 515,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter5/medunu_xoxo.m4a"),
        options: [
          { id: 1, text: "I want to eat" },
          { id: 2, text: "I will eat rice" },
          { id: 3, text: "I have eaten already" },
          { id: 4, text: "Give me water please" }
        ],
        correctOptionId: 3,
        hints: ["meɖu = I ate", "xoxo = already"],
        explanation: "You heard 'Meɖunu xoxo' which means 'I have eaten already' in Ewe."
      },
      {
        id: 516,
        type: "drag_drop",
        instruction: "Complete the Ewe phrase by dragging the correct word.",
        sentence: "Meɖe kuku na [_____] (Give me water please)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "tsim" },
          { id: "opt2", text: "nu" },
          { id: "opt3", text: "mɔlu" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["tsi = water", "m = me"],
        explanation: "Meɖe kuku na tsim = Give me water please in Ewe."
      }
    ]
  }
};