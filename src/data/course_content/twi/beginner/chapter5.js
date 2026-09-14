export default {
  id: 5,
  title: "Food & Drinks",
  description: "Learn food and drink vocabulary in Twi",
  icon: "restaurant-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "5-1",
      type: "words",
      title: "Food Words",
      icon: "restaurant-outline",
      description: "Learn basic food and drink words in Twi",
      words: ["Nsuo", "Aduane", "Ɛmo", "Nammono", "Nsuomnam", "Mako"],
      vocabulary: [
        {
          id: 53,
          english: "Water",
          native: "Nsuo",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/nsuo.m4a")
        },
        {
          id: 54,
          english: "Food",
          native: "Aduane",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/aduane.m4a")
        },
        {
          id: 55,
          english: "Rice",
          native: "Ɛmo",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/ɛmo.m4a")
        },
        {
          id: 56,
          english: "Meat",
          native: "Nammono",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/nammono.m4a")
        },
        {
          id: 57,
          english: "Fish",
          native: "Nsuomnam",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/nsuomnam.m4a")
        },
        {
          id: 58,
          english: "Pepper",
          native: "Mako",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/mako.m4a")
        }
      ],
      questions: [
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Water' in Twi?",
          options: [
            { id: 1, text: "Nsuo" },
            { id: 2, text: "Aduane" },
            { id: 3, text: "Ɛmo" },
            { id: 4, text: "Nammono" }
          ],
          correctOptionId: 1,
          hints: ["Essential for drinking"],
          explanation: "Nsuo = Water in Twi."
        },
        {
          id: 502,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Food' in Twi?",
          options: [
            { id: 1, text: "Nsuo" },
            { id: 2, text: "Aduane" },
            { id: 3, text: "Ɛmo" },
            { id: 4, text: "Mako" }
          ],
          correctOptionId: 2,
          hints: ["What you eat"],
          explanation: "Aduane = Food in Twi."
        },
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Rice' in Twi?",
          options: [
            { id: 1, text: "Nsuo" },
            { id: 2, text: "Aduane" },
            { id: 3, text: "Ɛmo" },
            { id: 4, text: "Nsuomnam" }
          ],
          correctOptionId: 3,
          hints: ["A staple food"],
          explanation: "Ɛmo = Rice in Twi."
        },
        {
          id: 504,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Meat' in Twi?",
          options: [
            { id: 1, text: "Nsuo" },
            { id: 2, text: "Aduane" },
            { id: 3, text: "Ɛmo" },
            { id: 4, text: "Nammono" }
          ],
          correctOptionId: 4,
          hints: ["From animals"],
          explanation: "Nammono = Meat in Twi."
        },
        {
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Fish' in Twi?",
          options: [
            { id: 1, text: "Nsuomnam" },
            { id: 2, text: "Aduane" },
            { id: 3, text: "Ɛmo" },
            { id: 4, text: "Mako" }
          ],
          correctOptionId: 1,
          hints: ["From the water"],
          explanation: "Nsuomnam = Fish in Twi."
        },
        {
          id: 506,
          type: "drag_drop",
          instruction: "Complete the Twi word by dragging the correct word.",
          sentence: "[_____] (Pepper)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Mako" },
            { id: "opt2", text: "Nsuo" },
            { id: "opt3", text: "Ɛmo" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Spicy ingredient"],
          explanation: "Mako = Pepper in Twi."
        }
      ]
    },

    {
      id: "5-2",
      type: "phrases",
      title: "Hunger & Thirst",
      icon: "cafe-outline",
      description: "Learn how to express hunger and thirst in Twi",
      words: ["Ɛkɔm de me", "Mepɛ sɛ mididi", "Sukɔm de me"],
      vocabulary: [
        {
          id: 59,
          english: "I am hungry",
          native: "Ɛkɔm de me",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/ɛkɔm_de_me.m4a")
        },
        {
          id: 60,
          english: "I want to eat",
          native: "Mepɛ sɛ mididi",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/mepɛ_sɛ_mididi.m4a")
        },
        {
          id: 61,
          english: "I am thirsty",
          native: "Sukɔm de me",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/sukɔm_de_me.m4a")
        }
      ],
      questions: [
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am hungry' in Twi?",
          options: [
            { id: 1, text: "Ɛkɔm de me" },
            { id: 2, text: "Mepɛ sɛ mididi" },
            { id: 3, text: "Sukɔm de me" },
            { id: 4, text: "Ɛyɛ dɛ" }
          ],
          correctOptionId: 1,
          hints: ["Ɛkɔm = hunger"],
          explanation: "Ɛkɔm de me = I am hungry in Twi."
        },
        {
          id: 508,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I want to eat' in Twi?",
          options: [
            { id: 1, text: "Ɛkɔm de me" },
            { id: 2, text: "Mepɛ sɛ mididi" },
            { id: 3, text: "Sukɔm de me" },
            { id: 4, text: "Mepa wo kyɛw ma me nsuo" }
          ],
          correctOptionId: 2,
          hints: ["Mepɛ sɛ = I want to"],
          explanation: "Mepɛ sɛ mididi = I want to eat in Twi."
        },
        {
          id: 509,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am thirsty' in Twi?",
          options: [
            { id: 1, text: "Ɛkɔm de me" },
            { id: 2, text: "Mepɛ sɛ mididi" },
            { id: 3, text: "Sukɔm de me" },
            { id: 4, text: "Ɛyɛ dɛ" }
          ],
          correctOptionId: 3,
          hints: ["Sukɔm = thirst"],
          explanation: "Sukɔm de me = I am thirsty in Twi."
        },
        {
          id: 510,
          type: "drag_drop",
          instruction: "Complete the Twi phrase by dragging the correct word.",
          sentence: "Mepɛ sɛ [_____] (I want to eat)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "mididi" },
            { id: "opt2", text: "nsuo" },
            { id: "opt3", text: "mako" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["mididi = I eat"],
          explanation: "Mepɛ sɛ mididi = I want to eat in Twi."
        }
      ]
    },

    {
      id: "5-3",
      type: "phrases",
      title: "At the Table",
      icon: "restaurant-outline",
      description: "Learn useful phrases for dining in Twi",
      words: ["Ɛyɛ dɛ", "Mepa wo kyɛw ma me nsuo", "Menni nammono", "Aduane no yɛ hye", "Mepa wo kyɛw fa ka no brɛ me"],
      vocabulary: [
        {
          id: 62,
          english: "It is delicious",
          native: "Ɛyɛ dɛ",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/ɛyɛ_dɛ.m4a")
        },
        {
          id: 63,
          english: "Give me water please",
          native: "Mepa wo kyɛw ma me nsuo",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/mepa_wo_kyɛw_ma_me_nsuo.m4a")
        },
        {
          id: 64,
          english: "I don't eat meat",
          native: "Menni nammono",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/menni_nammono.m4a")
        },
        {
          id: 65,
          english: "The food is hot",
          native: "Aduane no yɛ hye",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/aduane_no_yɛ_hye.m4a")
        },
        {
          id: 66,
          english: "Bring the bill please",
          native: "Mepa wo kyɛw fa ka no brɛ me",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter5/mepa_wo_kyɛw_fa_ka_no_brɛ_me.m4a")
        }
      ],
      questions: [
        {
          id: 511,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'It is delicious' in Twi?",
          options: [
            { id: 1, text: "Ɛyɛ dɛ" },
            { id: 2, text: "Mepa wo kyɛw ma me nsuo" },
            { id: 3, text: "Menni nammono" },
            { id: 4, text: "Aduane no yɛ hye" }
          ],
          correctOptionId: 1,
          hints: ["Ɛyɛ dɛ = it is sweet/delicious"],
          explanation: "Ɛyɛ dɛ = It is delicious in Twi."
        },
        {
          id: 512,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Give me water please' in Twi?",
          options: [
            { id: 1, text: "Ɛyɛ dɛ" },
            { id: 2, text: "Mepa wo kyɛw ma me nsuo" },
            { id: 3, text: "Menni nammono" },
            { id: 4, text: "Mepa wo kyɛw fa ka no brɛ me" }
          ],
          correctOptionId: 2,
          hints: ["nsuo = water"],
          explanation: "Mepa wo kyɛw ma me nsuo = Give me water please in Twi."
        },
        {
          id: 513,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I don't eat meat' in Twi?",
          options: [
            { id: 1, text: "Ɛyɛ dɛ" },
            { id: 2, text: "Mepa wo kyɛw ma me nsuo" },
            { id: 3, text: "Menni nammono" },
            { id: 4, text: "Aduane no yɛ hye" }
          ],
          correctOptionId: 3,
          hints: ["Menni = I don't eat", "nammono = meat"],
          explanation: "Menni nammono = I don't eat meat in Twi."
        },
        {
          id: 514,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The food is hot' in Twi?",
          options: [
            { id: 1, text: "Ɛyɛ dɛ" },
            { id: 2, text: "Mepa wo kyɛw ma me nsuo" },
            { id: 3, text: "Menni nammono" },
            { id: 4, text: "Aduane no yɛ hye" }
          ],
          correctOptionId: 4,
          hints: ["hye = hot"],
          explanation: "Aduane no yɛ hye = The food is hot in Twi."
        },
        {
          id: 515,
          type: "drag_drop",
          instruction: "Complete the Twi phrase by dragging the correct word.",
          sentence: "Mepa wo kyɛw fa ka no [_____] (Bring the bill please)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "brɛ me" },
            { id: "opt2", text: "nsuo" },
            { id: "opt3", text: "nammono" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["brɛ me = bring to me"],
          explanation: "Mepa wo kyɛw fa ka no brɛ me = Bring the bill please in Twi."
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
        id: 601,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Water' in Twi?",
        options: [
          { id: 1, text: "Nsuo" },
          { id: 2, text: "Aduane" },
          { id: 3, text: "Ɛmo" },
          { id: 4, text: "Nammono" }
        ],
        correctOptionId: 1,
        hints: ["Essential for drinking"],
        explanation: "Nsuo = Water."
      },
      {
        id: 602,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Rice' in Twi?",
        options: [
          { id: 1, text: "Nsuo" },
          { id: 2, text: "Aduane" },
          { id: 3, text: "Ɛmo" },
          { id: 4, text: "Mako" }
        ],
        correctOptionId: 3,
        hints: ["A staple food"],
        explanation: "Ɛmo = Rice."
      },
      {
        id: 603,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Fish' in Twi?",
        options: [
          { id: 1, text: "Nsuomnam" },
          { id: 2, text: "Nammono" },
          { id: 3, text: "Ɛmo" },
          { id: 4, text: "Mako" }
        ],
        correctOptionId: 1,
        hints: ["From the water"],
        explanation: "Nsuomnam = Fish."
      },
      {
        id: 604,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Pepper' in Twi?",
        options: [
          { id: 1, text: "Nsuo" },
          { id: 2, text: "Mako" },
          { id: 3, text: "Ɛmo" },
          { id: 4, text: "Nsuomnam" }
        ],
        correctOptionId: 2,
        hints: ["Spicy ingredient"],
        explanation: "Mako = Pepper."
      },
      {
        id: 605,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am hungry' in Twi?",
        options: [
          { id: 1, text: "Ɛkɔm de me" },
          { id: 2, text: "Mepɛ sɛ mididi" },
          { id: 3, text: "Sukɔm de me" },
          { id: 4, text: "Ɛyɛ dɛ" }
        ],
        correctOptionId: 1,
        hints: ["Ɛkɔm = hunger"],
        explanation: "Ɛkɔm de me = I am hungry."
      },
      {
        id: 606,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I want to eat' in Twi?",
        options: [
          { id: 1, text: "Ɛkɔm de me" },
          { id: 2, text: "Mepɛ sɛ mididi" },
          { id: 3, text: "Sukɔm de me" },
          { id: 4, text: "Mepa wo kyɛw ma me nsuo" }
        ],
        correctOptionId: 2,
        hints: ["Mepɛ sɛ = I want to"],
        explanation: "Mepɛ sɛ mididi = I want to eat."
      },
      {
        id: 607,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am thirsty' in Twi?",
        options: [
          { id: 1, text: "Ɛkɔm de me" },
          { id: 2, text: "Mepɛ sɛ mididi" },
          { id: 3, text: "Sukɔm de me" },
          { id: 4, text: "Ɛyɛ dɛ" }
        ],
        correctOptionId: 3,
        hints: ["Sukɔm = thirst"],
        explanation: "Sukɔm de me = I am thirsty."
      },
      {
        id: 608,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'It is delicious' in Twi?",
        options: [
          { id: 1, text: "Ɛyɛ dɛ" },
          { id: 2, text: "Mepa wo kyɛw ma me nsuo" },
          { id: 3, text: "Menni nammono" },
          { id: 4, text: "Aduane no yɛ hye" }
        ],
        correctOptionId: 1,
        hints: ["Ɛyɛ dɛ = it is sweet/delicious"],
        explanation: "Ɛyɛ dɛ = It is delicious."
      },
      {
        id: 609,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Give me water please' in Twi?",
        options: [
          { id: 1, text: "Ɛyɛ dɛ" },
          { id: 2, text: "Mepa wo kyɛw ma me nsuo" },
          { id: 3, text: "Menni nammono" },
          { id: 4, text: "Mepa wo kyɛw fa ka no brɛ me" }
        ],
        correctOptionId: 2,
        hints: ["nsuo = water"],
        explanation: "Mepa wo kyɛw ma me nsuo = Give me water please."
      },
      {
        id: 610,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I don't eat meat' in Twi?",
        options: [
          { id: 1, text: "Ɛyɛ dɛ" },
          { id: 2, text: "Mepa wo kyɛw ma me nsuo" },
          { id: 3, text: "Menni nammono" },
          { id: 4, text: "Aduane no yɛ hye" }
        ],
        correctOptionId: 3,
        hints: ["nammono = meat"],
        explanation: "Menni nammono = I don't eat meat."
      },
      {
        id: 611,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The food is hot' in Twi?",
        options: [
          { id: 1, text: "Ɛyɛ dɛ" },
          { id: 2, text: "Mepa wo kyɛw ma me nsuo" },
          { id: 3, text: "Menni nammono" },
          { id: 4, text: "Aduane no yɛ hye" }
        ],
        correctOptionId: 4,
        hints: ["hye = hot"],
        explanation: "Aduane no yɛ hye = The food is hot."
      },
      {
        id: 612,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Bring the bill please' in Twi?",
        options: [
          { id: 1, text: "Mepa wo kyɛw fa ka no brɛ me" },
          { id: 2, text: "Mepa wo kyɛw ma me nsuo" },
          { id: 3, text: "Menni nammono" },
          { id: 4, text: "Aduane no yɛ hye" }
        ],
        correctOptionId: 1,
        hints: ["ka = bill"],
        explanation: "Mepa wo kyɛw fa ka no brɛ me = Bring the bill please."
      }
    ]
  }
};