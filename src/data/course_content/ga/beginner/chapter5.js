export default {
  id: 5,
  title: "Food & Drinks",
  description: "Learn food and drink vocabulary in Ga",
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
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Water' in Ga?",
          options: [
            { id: 1, text: "Nu" },
            { id: 2, text: "Niyenii" },
            { id: 3, text: "Omo" },
            { id: 4, text: "Loo" }
          ],
          correctOptionId: 1,
          hints: ["Essential for drinking"],
          explanation: "Nu = Water in Ga."
        },
        {
          id: 502,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/niyenii.m4a"),
          options: [
            { id: 1, text: "Water" },
            { id: 2, text: "Food" },
            { id: 3, text: "Rice" },
            { id: 4, text: "Meat" }
          ],
          correctOptionId: 2,
          hints: ["What you eat"],
          explanation: "You heard 'Niyenii' which means Food in Ga."
        },
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Rice' in Ga?",
          options: [
            { id: 1, text: "Nu" },
            { id: 2, text: "Niyenii" },
            { id: 3, text: "Omo" },
            { id: 4, text: "Loo" }
          ],
          correctOptionId: 3,
          hints: ["A staple food"],
          explanation: "Omo = Rice in Ga."
        },
        {
          id: 504,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/loo.m4a"),
          options: [
            { id: 1, text: "Water" },
            { id: 2, text: "Food" },
            { id: 3, text: "Rice" },
            { id: 4, text: "Meat" }
          ],
          correctOptionId: 4,
          hints: ["Loo = Meat"],
          explanation: "You heard 'Loo' which means Meat in Ga."
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
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am hungry' in Ga?",
          options: [
            { id: 1, text: "Hɔmɔ ye mi" },
            { id: 2, text: "Mitaoɔ ni maye nii" },
            { id: 3, text: "Kumai miiye mi" },
            { id: 4, text: "Eŋɔɔ" }
          ],
          correctOptionId: 1,
          hints: ["Hɔmɔ = hunger"],
          explanation: "Hɔmɔ ye mi = I am hungry in Ga."
        },
        {
          id: 506,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/mitaoɔ_ni_maye_nii.m4a"),
          options: [
            { id: 1, text: "I am hungry" },
            { id: 2, text: "I want to eat" },
            { id: 3, text: "I am thirsty" },
            { id: 4, text: "It is delicious" }
          ],
          correctOptionId: 2,
          hints: ["Mitaoɔ = I want"],
          explanation: "You heard 'Mitaoɔ ni maye nii' which means 'I want to eat' in Ga."
        },
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am thirsty' in Ga?",
          options: [
            { id: 1, text: "Hɔmɔ ye mi" },
            { id: 2, text: "Mitaoɔ ni maye nii" },
            { id: 3, text: "Kumai miiye mi" },
            { id: 4, text: "Eŋɔɔ" }
          ],
          correctOptionId: 3,
          hints: ["Kumai = thirst"],
          explanation: "Kumai miiye mi = I am thirsty in Ga."
        },
        {
          id: 508,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/hɔmɔ_ye_mi.m4a"),
          options: [
            { id: 1, text: "I am hungry" },
            { id: 2, text: "I want to eat" },
            { id: 3, text: "I am thirsty" },
            { id: 4, text: "The food is hot" }
          ],
          correctOptionId: 1,
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
      words: ["Eŋɔɔ", "Ofainɛ hã mi nu", "Miyeee loo", "Niyenii lɛ edɔ"],
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
          native: "Ofainɛ hã mi nu",
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
          id: 509,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'It is delicious' in Ga?",
          options: [
            { id: 1, text: "Eŋɔɔ" },
            { id: 2, text: "Ofainɛ hã mi nu" },
            { id: 3, text: "Miyeee loo" },
            { id: 4, text: "Niyenii lɛ edɔ" }
          ],
          correctOptionId: 1,
          hints: ["Eŋɔɔ = It is delicious"],
          explanation: "Eŋɔɔ = It is delicious in Ga."
        },
        {
          id: 510,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/ofainɛ_hã_mi_nu.m4a"),
          options: [
            { id: 1, text: "It is delicious" },
            { id: 2, text: "Give me water please" },
            { id: 3, text: "I don't eat meat" },
            { id: 4, text: "The food is hot" }
          ],
          correctOptionId: 2,
          hints: ["Ofainɛ = please", "nu = water"],
          explanation: "You heard 'Ofainɛ hã mi nu' which means 'Give me water please' in Ga."
        },
        {
          id: 511,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I don't eat meat' in Ga?",
          options: [
            { id: 1, text: "Eŋɔɔ" },
            { id: 2, text: "Ofainɛ hã mi nu" },
            { id: 3, text: "Miyeee loo" },
            { id: 4, text: "Niyenii lɛ edɔ" }
          ],
          correctOptionId: 3,
          hints: ["Miyeee = I don't eat", "loo = meat"],
          explanation: "Miyeee loo = I don't eat meat in Ga."
        },
        {
          id: 512,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/niyenii_lɛ_edɔ.m4a"),
          options: [
            { id: 1, text: "It is delicious" },
            { id: 2, text: "Give me water please" },
            { id: 3, text: "I don't eat meat" },
            { id: 4, text: "The food is hot" }
          ],
          correctOptionId: 4,
          hints: ["edɔ = hot"],
          explanation: "You heard 'Niyenii lɛ edɔ' which means 'The food is hot' in Ga."
        },
        {
          id: 513,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The food is hot' in Ga?",
          options: [
            { id: 1, text: "Eŋɔɔ" },
            { id: 2, text: "Ofainɛ hã mi nu" },
            { id: 3, text: "Miyeee loo" },
            { id: 4, text: "Niyenii lɛ edɔ" }
          ],
          correctOptionId: 4,
          hints: ["edɔ = hot"],
          explanation: "Niyenii lɛ edɔ = The food is hot in Ga."
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
        id: 514,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Rice' in Ga?",
        options: [
          { id: 1, text: "Nu" },
          { id: 2, text: "Niyenii" },
          { id: 3, text: "Omo" },
          { id: 4, text: "Loo" }
        ],
        correctOptionId: 3,
        hints: ["A staple food"],
        explanation: "Omo = Rice in Ga."
      },
      {
        id: 515,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What word did you hear?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/nu.m4a"),
        options: [
          { id: 1, text: "Water" },
          { id: 2, text: "Food" },
          { id: 3, text: "Rice" },
          { id: 4, text: "Meat" }
        ],
        correctOptionId: 1,
        hints: ["Essential for drinking"],
        explanation: "You heard 'Nu' which means Water in Ga."
      },
      {
        id: 516,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am hungry' in Ga?",
        options: [
          { id: 1, text: "Hɔmɔ ye mi" },
          { id: 2, text: "Mitaoɔ ni maye nii" },
          { id: 3, text: "Kumai miiye mi" },
          { id: 4, text: "Eŋɔɔ" }
        ],
        correctOptionId: 1,
        hints: ["Hɔmɔ = hunger"],
        explanation: "Hɔmɔ ye mi = I am hungry."
      },
      {
        id: 517,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/kumai_miiye_mi.m4a"),
        options: [
          { id: 1, text: "I am hungry" },
          { id: 2, text: "I want to eat" },
          { id: 3, text: "I am thirsty" },
          { id: 4, text: "It is delicious" }
        ],
        correctOptionId: 3,
        hints: ["Kumai = thirst"],
        explanation: "You heard 'Kumai miiye mi' which means 'I am thirsty'."
      },
      {
        id: 518,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Give me water please' in Ga?",
        options: [
          { id: 1, text: "Ofainɛ hã mi nu" },
          { id: 2, text: "Miyeee loo" },
          { id: 3, text: "Niyenii lɛ edɔ" },
          { id: 4, text: "Eŋɔɔ" }
        ],
        correctOptionId: 1,
        hints: ["nu = water"],
        explanation: "Ofainɛ hã mi nu = Give me water please."
      },
      {
        id: 519,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/miyeee_loo.m4a"),
        options: [
          { id: 1, text: "It is delicious" },
          { id: 2, text: "Give me water please" },
          { id: 3, text: "I don't eat meat" },
          { id: 4, text: "The food is hot" }
        ],
        correctOptionId: 3,
        hints: ["loo = meat"],
        explanation: "You heard 'Miyeee loo' which means 'I don't eat meat'."
      },
      {
        id: 520,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'It is delicious' in Ga?",
        options: [
          { id: 1, text: "Eŋɔɔ" },
          { id: 2, text: "Ofainɛ hã mi nu" },
          { id: 3, text: "Miyeee loo" },
          { id: 4, text: "Niyenii lɛ edɔ" }
        ],
        correctOptionId: 1,
        hints: ["Eŋɔɔ = It is delicious"],
        explanation: "Eŋɔɔ = It is delicious."
      },
      {
        id: 521,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I want to eat' in Ga?",
        options: [
          { id: 1, text: "Hɔmɔ ye mi" },
          { id: 2, text: "Mitaoɔ ni maye nii" },
          { id: 3, text: "Kumai miiye mi" },
          { id: 4, text: "Eŋɔɔ" }
        ],
        correctOptionId: 2,
        hints: ["Mitaoɔ = I want"],
        explanation: "Mitaoɔ ni maye nii = I want to eat."
      },
      {
        id: 522,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What word did you hear?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter5/omo.m4a"),
        options: [
          { id: 1, text: "Water" },
          { id: 2, text: "Food" },
          { id: 3, text: "Rice" },
          { id: 4, text: "Meat" }
        ],
        correctOptionId: 3,
        hints: ["A staple food"],
        explanation: "You heard 'Omo' which means Rice in Ga."
      },
      {
        id: 523,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Meat' in Ga?",
        options: [
          { id: 1, text: "Nu" },
          { id: 2, text: "Niyenii" },
          { id: 3, text: "Omo" },
          { id: 4, text: "Loo" }
        ],
        correctOptionId: 4,
        hints: ["Loo = Meat"],
        explanation: "Loo = Meat in Ga."
      },
      {
        id: 524,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The food is hot' in Ga?",
        options: [
          { id: 1, text: "Eŋɔɔ" },
          { id: 2, text: "Niyenii lɛ edɔ" },
          { id: 3, text: "Miyeee loo" },
          { id: 4, text: "Ofainɛ hã mi nu" }
        ],
        correctOptionId: 2,
        hints: ["edɔ = hot"],
        explanation: "Niyenii lɛ edɔ = The food is hot."
      }
    ]
  }
};