export default {
  id: 2,
  title: "Health & Emergencies",
  description: "Learn health and emergency phrases in Ga",
  icon: "medkit-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "2-1",
      type: "words",
      title: "Feeling Unwell",
      icon: "thermometer-outline",
      description: "Learn how to describe symptoms and how you feel in Ga",
      words: ["Mibɛ hewalɛ", "Miyitso miigba mi", "Fɛi miiye mi", "Mimusu miiwa mihe"],
      phrases: [
        {
          id: 145,
          english: "I am sick",
          native: "Mibɛ hewalɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter2/mibɛ_hewalɛ.m4a")
        },
        {
          id: 147,
          english: "My head hurts",
          native: "Miyitso miigba mi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter2/miyitso_miigba_mi.m4a")
        },
        {
          id: 150,
          english: "I am feeling cold",
          native: "Fɛi miiye mi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter2/fɛi_miiye_mi.m4a")
        },
        {
          id: 154,
          english: "My stomach hurts",
          native: "Mimusu miiwa mihe",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter2/mimusu_miiwa_mihe.m4a")
        }
      ],
      questions: [
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am feeling cold' in Ga?",
          options: [
            { id: 1, text: "Mimusu miiwa mihe" },
            { id: 2, text: "Fɛi miiye mi" },
            { id: 3, text: "Mibɛ hewalɛ" },
            { id: 4, text: "Miyitso miigba mi" }
          ],
          correctOptionId: 2,
          hints: ["Fɛi = cold", "miiye mi = is affecting me"],
          explanation: "Fɛi miiye mi = I am feeling cold in Ga."
        },
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am sick' in Ga?",
          options: [
            { id: 1, text: "Miyitso miigba mi" },
            { id: 2, text: "Mimusu miiwa mihe" },
            { id: 3, text: "Mibɛ hewalɛ" },
            { id: 4, text: "Fɛi miiye mi" }
          ],
          correctOptionId: 3,
          hints: ["Mibɛ hewalɛ = I am sick"],
          explanation: "Mibɛ hewalɛ = I am sick in Ga."
        },
        {
          id: 204,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'My stomach hurts' in Ga?",
          options: [
            { id: 1, text: "Fɛi miiye mi" },
            { id: 2, text: "Mimusu miiwa mihe" },
            { id: 3, text: "Miyitso miigba mi" },
            { id: 4, text: "Mibɛ hewalɛ" }
          ],
          correctOptionId: 2,
          hints: ["Mimusu = my stomach", "miiwa mihe = hurts me"],
          explanation: "Mimusu miiwa mihe = My stomach hurts in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'My head hurts' in Ga?",
          options: [
            { id: 1, text: "Mibɛ hewalɛ" },
            { id: 2, text: "Fɛi miiye mi" },
            { id: 3, text: "Miyitso miigba mi" },
            { id: 4, text: "Mimusu miiwa mihe" }
          ],
          correctOptionId: 3,
          hints: ["Miyitso = my head", "miigba mi = hurts me"],
          explanation: "Miyitso miigba mi = My head hurts in Ga."
        }
      ]
    },

    {
      id: "2-2",
      type: "words",
      title: "Getting Medical Help",
      icon: "alert-circle-outline",
      description: "Learn how to seek medical assistance in Ga",
      words: ["Tsɛ datrɛfonyo", "Nɛgbɛ helatsamɔhe lɛ yɔɔ?", "Mitao tsofa"],
      phrases: [
        {
          id: 146,
          english: "Call a doctor",
          native: "Tsɛ datrɛfonyo",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter2/tsɛ_datrɛfonyo.m4a")
        },
        {
          id: 149,
          english: "Where is the hospital?",
          native: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter2/nɛgbɛ_helatsamɔhe_lɛ_yɔɔ.m4a")
        },
        {
          id: 151,
          english: "I want medicine",
          native: "Mitao tsofa",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter2/mitao_tsofa.m4a")
        }
      ],
      questions: [
        {
          id: 207,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I want medicine' in Ga?",
          options: [
            { id: 1, text: "Mibɛ hewalɛ" },
            { id: 2, text: "Mitao tsofa" },
            { id: 3, text: "Tsɛ datrɛfonyo" },
            { id: 4, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" }
          ],
          correctOptionId: 2,
          hints: ["Mitao = I want", "tsofa = medicine"],
          explanation: "Mitao tsofa = I want medicine in Ga."
        },
        {
          id: 205,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Call a doctor' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
            { id: 2, text: "Kwɛmɔ ohenɔ jogbaŋŋ" },
            { id: 3, text: "Tsɛ datrɛfonyo" },
            { id: 4, text: "Mitao tsofa" }
          ],
          correctOptionId: 3,
          hints: ["Tsɛ = call", "datrɛfonyo = doctor"],
          explanation: "Tsɛ datrɛfonyo = Call a doctor in Ga."
        },
        {
          id: 206,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Where is the hospital?' in Ga?",
          options: [
            { id: 1, text: "Mitao tsofa" },
            { id: 2, text: "Nu tsofa nɛɛ shii etɛ gbi kome" },
            { id: 3, text: "Tsɛ datrɛfonyo" },
            { id: 4, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" }
          ],
          correctOptionId: 4,
          hints: ["Nɛgbɛ = where", "helatsamɔhe = hospital"],
          explanation: "Nɛgbɛ helatsamɔhe lɛ yɔɔ? = Where is the hospital? in Ga."
        }
      ]
    },

    {
      id: "2-3",
      type: "words",
      title: "Medicine & Safety",
      icon: "medkit-outline",
      description: "Learn how to talk about medicine and staying safe in Ga",
      words: ["Nu tsofa nɛɛ shii etɛ gbi kome", "Kwɛmɔ ohenɔ jogbaŋŋ"],
      phrases: [
        {
          id: 152,
          english: "Take this drug three times a day",
          native: "Nu tsofa nɛɛ shii etɛ gbi kome",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter2/nu_tsofa_nɛɛ_shii_etɛ_gbi_kome.m4a")
        },
        {
          id: 155,
          english: "Be careful",
          native: "Kwɛmɔ ohenɔ jogbaŋŋ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter2/kwɛmɔ_ohenɔ_jogbaŋŋ.m4a")
        }
      ],
      questions: [
        {
          id: 209,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Be careful' in Ga?",
          options: [
            { id: 1, text: "Mitao tsofa" },
            { id: 2, text: "Kwɛmɔ ohenɔ jogbaŋŋ" },
            { id: 3, text: "Nu tsofa nɛɛ shii etɛ gbi kome" },
            { id: 4, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" }
          ],
          correctOptionId: 2,
          hints: ["Kwɛmɔ = watch/look", "jogbaŋŋ = well"],
          explanation: "Kwɛmɔ ohenɔ jogbaŋŋ = Be careful in Ga."
        },
        {
          id: 208,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Take this drug three times a day' in Ga?",
          options: [
            { id: 1, text: "Tsɛ datrɛfonyo" },
            { id: 2, text: "Mitao tsofa" },
            { id: 3, text: "Nu tsofa nɛɛ shii etɛ gbi kome" },
            { id: 4, text: "Kwɛmɔ ohenɔ jogbaŋŋ" }
          ],
          correctOptionId: 3,
          hints: ["Nu = take/drink", "shii etɛ = three times"],
          explanation: "Nu tsofa nɛɛ shii etɛ gbi kome = Take this drug three times a day in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-2",
    title: "Review: Health & Emergencies",
    icon: "refresh-outline",
    description: "Review all the health and emergency phrases you've learned",
    questions: [
      {
        id: 216,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I want medicine' in Ga?",
        options: [
          { id: 1, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
          { id: 2, text: "Mibɛ hewalɛ" },
          { id: 3, text: "Mitao tsofa" },
          { id: 4, text: "Tsɛ datrɛfonyo" }
        ],
        correctOptionId: 3,
        hints: ["tsofa = medicine"],
        explanation: "Mitao tsofa = I want medicine."
      },
      {
        id: 212,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am feeling cold' in Ga?",
        options: [
          { id: 1, text: "Mimusu miiwa mihe" },
          { id: 2, text: "Mibɛ hewalɛ" },
          { id: 3, text: "Fɛi miiye mi" },
          { id: 4, text: "Miyitso miigba mi" }
        ],
        correctOptionId: 3,
        hints: ["Fɛi = cold"],
        explanation: "Fɛi miiye mi = I am feeling cold."
      },
      {
        id: 217,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Take this drug three times a day' in Ga?",
        options: [
          { id: 1, text: "Mitao tsofa" },
          { id: 2, text: "Tsɛ datrɛfonyo" },
          { id: 3, text: "Kwɛmɔ ohenɔ jogbaŋŋ" },
          { id: 4, text: "Nu tsofa nɛɛ shii etɛ gbi kome" }
        ],
        correctOptionId: 4,
        hints: ["shii etɛ = three times"],
        explanation: "Nu tsofa nɛɛ shii etɛ gbi kome = Take this drug three times a day."
      },
      {
        id: 211,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'My head hurts' in Ga?",
        options: [
          { id: 1, text: "Miyitso miigba mi" },
          { id: 2, text: "Mibɛ hewalɛ" },
          { id: 3, text: "Mimusu miiwa mihe" },
          { id: 4, text: "Fɛi miiye mi" }
        ],
        correctOptionId: 1,
        hints: ["Miyitso = my head"],
        explanation: "Miyitso miigba mi = My head hurts."
      },
      {
        id: 214,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Call a doctor' in Ga?",
        options: [
          { id: 1, text: "Mitao tsofa" },
          { id: 2, text: "Kwɛmɔ ohenɔ jogbaŋŋ" },
          { id: 3, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
          { id: 4, text: "Tsɛ datrɛfonyo" }
        ],
        correctOptionId: 4,
        hints: ["datrɛfonyo = doctor"],
        explanation: "Tsɛ datrɛfonyo = Call a doctor."
      },
      {
        id: 218,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Be careful' in Ga?",
        options: [
          { id: 1, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
          { id: 2, text: "Mitao tsofa" },
          { id: 3, text: "Kwɛmɔ ohenɔ jogbaŋŋ" },
          { id: 4, text: "Nu tsofa nɛɛ shii etɛ gbi kome" }
        ],
        correctOptionId: 3,
        hints: ["Kwɛmɔ = watch/look"],
        explanation: "Kwɛmɔ ohenɔ jogbaŋŋ = Be careful."
      },
      {
        id: 213,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'My stomach hurts' in Ga?",
        options: [
          { id: 1, text: "Miyitso miigba mi" },
          { id: 2, text: "Fɛi miiye mi" },
          { id: 3, text: "Mimusu miiwa mihe" },
          { id: 4, text: "Mibɛ hewalɛ" }
        ],
        correctOptionId: 3,
        hints: ["Mimusu = my stomach"],
        explanation: "Mimusu miiwa mihe = My stomach hurts."
      },
      {
        id: 215,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Where is the hospital?' in Ga?",
        options: [
          { id: 1, text: "Mitao tsofa" },
          { id: 2, text: "Nu tsofa nɛɛ shii etɛ gbi kome" },
          { id: 3, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
          { id: 4, text: "Tsɛ datrɛfonyo" }
        ],
        correctOptionId: 3,
        hints: ["helatsamɔhe = hospital"],
        explanation: "Nɛgbɛ helatsamɔhe lɛ yɔɔ? = Where is the hospital?"
      },
      {
        id: 22,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am sick' in Ga?",
        options: [
          { id: 1, text: "Fɛi miiye mi" },
          { id: 2, text: "Mibɛ hewalɛ" },
          { id: 3, text: "Mimusu miiwa mihe" },
          { id: 4, text: "Miyitso miigba mi" }
        ],
        correctOptionId: 2,
        hints: ["Mibɛ hewalɛ = I am sick"],
        explanation: "Mibɛ hewalɛ = I am sick."
      }
    ]
  }
};
