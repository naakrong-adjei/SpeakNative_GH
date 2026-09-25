export default {
  id: 5,
  title: "Food & Dining",
  description: "Learn useful words and phrases related to food and everyday dining situations in Ga",
  icon: "restaurant-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "5-1",
      type: "words",
      title: "Food Words",
      icon: "restaurant-outline",
      description: "Learn basic food and drink words in Ga",
      words: ["Nu", "Niyenii", "Omo", "Loo"],

      vocabulary: [
        {
          id: 60,
          english: "Water",
          native: "Nu",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/nu.m4a")
        },
        {
          id: 61,
          english: "Food",
          native: "Niyenii",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/niyenii.m4a")
        },
        {
          id: 64,
          english: "Rice",
          native: "Omo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/omo.m4a")
        },
        {
          id: 68,
          english: "Meat",
          native: "Loo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/loo.m4a")
        }
      ],

      questions: [
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Rice' in Ga?",
          options: [
            { id: 1, text: "Loo" },
            { id: 2, text: "Omo" },
            { id: 3, text: "Nu" },
            { id: 4, text: "Niyenii" }
          ],
          correctOptionId: 2,
          hints: ["A staple food"],
          explanation: "Omo = Rice in Ga."
        },

        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Water' in Ga?",
          options: [
            { id: 1, text: "Omo" },
            { id: 2, text: "Nu" },
            { id: 3, text: "Loo" },
            { id: 4, text: "Niyenii" }
          ],
          correctOptionId: 2,
          hints: ["Essential for drinking"],
          explanation: "Nu = Water in Ga."
        },

        {
          id: 504,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/loo.m4a"),
          options: [
            { id: 1, text: "Meat" },
            { id: 2, text: "Rice" },
            { id: 3, text: "Water" },
            { id: 4, text: "Food" }
          ],
          correctOptionId: 1,
          hints: ["Loo = Meat"],
          explanation: "You heard 'Loo' which means Meat in Ga."
        },

        {
          id: 502,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/niyenii.m4a"),
          options: [
            { id: 1, text: "Rice" },
            { id: 2, text: "Meat" },
            { id: 3, text: "Food" },
            { id: 4, text: "Water" }
          ],
          correctOptionId: 3,
          hints: ["What you eat"],
          explanation: "You heard 'Niyenii' which means Food in Ga."
        }
      ]
    },

    {
      id: "5-2",
      type: "phrases",
      title: "Hunger & Thirst",
      icon: "cafe-outline",
      description: "Learn how to express hunger and thirst in Ga",
      words: ["Hɔmɔ ye mi", "Mitaoɔ ni maye nii", "Kumai miiye mi"],

      vocabulary: [
        {
          id: 62,
          english: "I am hungry",
          native: "Hɔmɔ ye mi",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/hɔmɔ_ye_mi.m4a")
        },
        {
          id: 63,
          english: "I want to eat",
          native: "Mitaoɔ ni maye nii",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/mitaoɔ_ni_maye_nii.m4a")
        },
        {
          id: 67,
          english: "I am thirsty",
          native: "Kumai miiye mi",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/kumai_miiye_mi.m4a")
        }
      ],

      questions: [
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am thirsty' in Ga?",
          options: [
            { id: 1, text: "Eŋɔɔ" },
            { id: 2, text: "Kumai miiye mi" },
            { id: 3, text: "Hɔmɔ ye mi" },
            { id: 4, text: "Mitaoɔ ni maye nii" }
          ],
          correctOptionId: 2,
          hints: ["Kumai = thirst"],
          explanation: "Kumai miiye mi = I am thirsty in Ga."
        },

        {
          id: 506,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/mitaoɔ_ni_maye_nii.m4a"),
          options: [
            { id: 1, text: "I am thirsty" },
            { id: 2, text: "I am hungry" },
            { id: 3, text: "It is delicious" },
            { id: 4, text: "I want to eat" }
          ],
          correctOptionId: 4,
          hints: ["Mitaoɔ = I want"],
          explanation: "You heard 'Mitaoɔ ni maye nii' which means 'I want to eat' in Ga."
        },

        {
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am hungry' in Ga?",
          options: [
            { id: 1, text: "Mitaoɔ ni maye nii" },
            { id: 2, text: "Kumai miiye mi" },
            { id: 3, text: "Hɔmɔ ye mi" },
            { id: 4, text: "Eŋɔɔ" }
          ],
          correctOptionId: 3,
          hints: ["Hɔmɔ = hunger"],
          explanation: "Hɔmɔ ye mi = I am hungry in Ga."
        },

        {
          id: 508,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/hɔmɔ_ye_mi.m4a"),
          options: [
            { id: 1, text: "The food is hot" },
            { id: 2, text: "I am hungry" },
            { id: 3, text: "I am thirsty" },
            { id: 4, text: "I want to eat" }
          ],
          correctOptionId: 2,
          hints: ["Hɔmɔ = hunger"],
          explanation: "You heard 'Hɔmɔ ye mi' which means 'I am hungry' in Ga."
        }
      ]
    },

    {
      id: "5-3",
      type: "phrases",
      title: "At the Table",
      icon: "restaurant-outline",
      description: "Learn useful phrases for dining in Ga",
      words: ["Eŋɔɔ", "Ofainɛ ni ohã mi nu", "Miyeee loo", "Niyenii lɛ edɔ"],

      vocabulary: [
        {
          id: 65,
          english: "It is delicious",
          native: "Eŋɔɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/eŋɔɔ.m4a")
        },
        {
          id: 66,
          english: "Give me water please",
          native: "Ofainɛ ni ohã mi nu",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/ofainɛ_hã_mi_nu.m4a")
        },
        {
          id: 71,
          english: "I don't eat meat",
          native: "Miyeee loo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/miyeee_loo.m4a")
        },
        {
          id: 72,
          english: "The food is hot",
          native: "Niyenii lɛ edɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/niyenii_lɛ_edɔ.m4a")
        }
      ],

      questions: [
        {
          id: 511,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I don't eat meat' in Ga?",
          options: [
            { id: 1, text: "Niyenii lɛ edɔ" },
            { id: 2, text: "Eŋɔɔ" },
            { id: 3, text: "Miyeee loo" },
            { id: 4, text: "Ofainɛ ni ohã mi nu" }
          ],
          correctOptionId: 3,
          hints: ["Miyeee = I don't eat", "loo = meat"],
          explanation: "Miyeee loo = I don't eat meat in Ga."
        },

        {
          id: 513,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The food is hot' in Ga?",
          options: [
            { id: 1, text: "Miyeee loo" },
            { id: 2, text: "Niyenii lɛ edɔ" },
            { id: 3, text: "Ofainɛ ni ohã mi nu" },
            { id: 4, text: "Eŋɔɔ" }
          ],
          correctOptionId: 2,
          hints: ["edɔ = hot"],
          explanation: "Niyenii lɛ edɔ = The food is hot in Ga."
        },

        {
          id: 510,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/ofainɛ_hã_mi_nu.m4a"),
          options: [
            { id: 1, text: "I don't eat meat" },
            { id: 2, text: "The food is hot" },
            { id: 3, text: "Give me water please" },
            { id: 4, text: "It is delicious" }
          ],
          correctOptionId: 3,
          hints: ["Ofainɛ = please", "nu = water"],
          explanation: "You heard 'Ofainɛ ni ohã mi nu' which means 'Give me water please' in Ga."
        },

        {
          id: 509,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'It is delicious' in Ga?",
          options: [
            { id: 1, text: "Ofainɛ ni ohã mi nu" },
            { id: 2, text: "Niyenii lɛ edɔ" },
            { id: 3, text: "Eŋɔɔ" },
            { id: 4, text: "Miyeee loo" }
          ],
          correctOptionId: 3,
          hints: ["Eŋɔɔ = It is delicious"],
          explanation: "Eŋɔɔ = It is delicious in Ga."
        },

        {
          id: 512,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/niyenii_lɛ_edɔ.m4a"),
          options: [
            { id: 1, text: "The food is hot" },
            { id: 2, text: "It is delicious" },
            { id: 3, text: "I don't eat meat" },
            { id: 4, text: "Give me water please" }
          ],
          correctOptionId: 1,
          hints: ["edɔ = hot"],
          explanation: "You heard 'Niyenii lɛ edɔ' which means 'The food is hot' in Ga."
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
        id: 519,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/miyeee_loo.m4a"),
        options: [
          { id: 1, text: "Give me water please" },
          { id: 2, text: "I don't eat meat" },
          { id: 3, text: "It is delicious" },
          { id: 4, text: "The food is hot" }
        ],
        correctOptionId: 2,
        hints: ["loo = meat"],
        explanation: "You heard 'Miyeee loo' which means 'I don't eat meat'."
      },

      {
        id: 514,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Rice' in Ga?",
        options: [
          { id: 1, text: "Loo" },
          { id: 2, text: "Omo" },
          { id: 3, text: "Niyenii" },
          { id: 4, text: "Nu" }
        ],
        correctOptionId: 2,
        hints: ["A staple food"],
        explanation: "Omo = Rice in Ga."
      },

      {
        id: 521,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I want to eat' in Ga?",
        options: [
          { id: 1, text: "Eŋɔɔ" },
          { id: 2, text: "Kumai miiye mi" },
          { id: 3, text: "Mitaoɔ ni maye nii" },
          { id: 4, text: "Hɔmɔ ye mi" }
        ],
        correctOptionId: 3,
        hints: ["Mitaoɔ = I want"],
        explanation: "Mitaoɔ ni maye nii = I want to eat."
      },

      {
        id: 516,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am hungry' in Ga?",
        options: [
          { id: 1, text: "Kumai miiye mi" },
          { id: 2, text: "Hɔmɔ ye mi" },
          { id: 3, text: "Eŋɔɔ" },
          { id: 4, text: "Mitaoɔ ni maye nii" }
        ],
        correctOptionId: 2,
        hints: ["Hɔmɔ = hunger"],
        explanation: "Hɔmɔ ye mi = I am hungry."
      },

      {
        id: 522,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What word did you hear?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/omo.m4a"),
        options: [
          { id: 1, text: "Meat" },
          { id: 2, text: "Food" },
          { id: 3, text: "Rice" },
          { id: 4, text: "Water" }
        ],
        correctOptionId: 3,
        hints: ["A staple food"],
        explanation: "You heard 'Omo' which means Rice in Ga."
      },

      {
        id: 518,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Give me water please' in Ga?",
        options: [
          { id: 1, text: "Miyeee loo" },
          { id: 2, text: "Eŋɔɔ" },
          { id: 3, text: "Ofainɛ ni ohã mi nu" },
          { id: 4, text: "Niyenii lɛ edɔ" }
        ],
        correctOptionId: 3,
        hints: ["nu = water"],
        explanation: "Ofainɛ ni ohã mi nu = Give me water please."
      },

      {
        id: 523,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Meat' in Ga?",
        options: [
          { id: 1, text: "Niyenii" },
          { id: 2, text: "Loo" },
          { id: 3, text: "Nu" },
          { id: 4, text: "Omo" }
        ],
        correctOptionId: 2,
        hints: ["Loo = Meat"],
        explanation: "Loo = Meat in Ga."
      },

      {
        id: 517,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/kumai_miiye_mi.m4a"),
        options: [
          { id: 1, text: "It is delicious" },
          { id: 2, text: "I am thirsty" },
          { id: 3, text: "I want to eat" },
          { id: 4, text: "I am hungry" }
        ],
        correctOptionId: 2,
        hints: ["Kumai = thirst"],
        explanation: "You heard 'Kumai miiye mi' which means 'I am thirsty'."
      },

      {
        id: 524,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The food is hot' in Ga?",
        options: [
          { id: 1, text: "Niyenii lɛ edɔ" },
          { id: 2, text: "Eŋɔɔ" },
          { id: 3, text: "Ofainɛ ni ohã mi nu" },
          { id: 4, text: "Miyeee loo" }
        ],
        correctOptionId: 1,
        hints: ["edɔ = hot"],
        explanation: "Niyenii lɛ edɔ = The food is hot."
      },

      {
        id: 520,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'It is delicious' in Ga?",
        options: [
          { id: 1, text: "Miyeee loo" },
          { id: 2, text: "Niyenii lɛ edɔ" },
          { id: 3, text: "Ofainɛ ni ohã mi nu" },
          { id: 4, text: "Eŋɔɔ" }
        ],
        correctOptionId: 4,
        hints: ["Eŋɔɔ = It is delicious"],
        explanation: "Eŋɔɔ = It is delicious."
      },

      {
        id: 515,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What word did you hear?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/nu.m4a"),
        options: [
          { id: 1, text: "Food" },
          { id: 2, text: "Meat" },
          { id: 3, text: "Water" },
          { id: 4, text: "Rice" }
        ],
        correctOptionId: 3,
        hints: ["Essential for drinking"],
        explanation: "You heard 'Nu' which means Water in Ga."
      }
    ]
  }
};
