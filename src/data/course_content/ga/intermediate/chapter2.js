export default {
  id: 10,
  title: "Health & Emergencies",
  description: "Learn health and emergency vocabulary in Ga",
  icon: "medkit-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "10-1",
      type: "words",
      title: "Feeling Unwell",
      icon: "thermometer-outline",
      description: "Learn how to describe symptoms and how you feel in Ga",
      words: ["Mibɛ hewalɛ", "Miyitso miigba mi", "Fɛi miiye mi", "Mimusu miiwa mihe"],
      vocabulary: [
        {
          id: 145,
          english: "I am sick",
          native: "Mibɛ hewalɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter10/mibɛ_hewalɛ.m4a")
        },
        {
          id: 147,
          english: "My head hurts",
          native: "Miyitso miigba mi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter10/miyitso_miigba_mi.m4a")
        },
        {
          id: 150,
          english: "I am feeling cold",
          native: "Fɛi miiye mi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter10/fɛi_miiye_mi.m4a")
        },
        {
          id: 154,
          english: "My stomach hurts",
          native: "Mimusu miiwa mihe",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter10/mimusu_miiwa_mihe.m4a")
        }
      ],
      questions: [
        {
          id: 1001,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am sick' in Ga?",
          options: [
            { id: 1, text: "Mibɛ hewalɛ" },
            { id: 2, text: "Miyitso miigba mi" },
            { id: 3, text: "Fɛi miiye mi" },
            { id: 4, text: "Mimusu miiwa mihe" }
          ],
          correctOptionId: 1,
          hints: ["Mibɛ hewalɛ = I am sick"],
          explanation: "Mibɛ hewalɛ = I am sick in Ga."
        },
        {
          id: 1002,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'My head hurts' in Ga?",
          options: [
            { id: 1, text: "Mibɛ hewalɛ" },
            { id: 2, text: "Miyitso miigba mi" },
            { id: 3, text: "Fɛi miiye mi" },
            { id: 4, text: "Mimusu miiwa mihe" }
          ],
          correctOptionId: 2,
          hints: ["Miyitso = my head", "miigba mi = hurts me"],
          explanation: "Miyitso miigba mi = My head hurts in Ga."
        },
        {
          id: 1003,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am feeling cold' in Ga?",
          options: [
            { id: 1, text: "Mibɛ hewalɛ" },
            { id: 2, text: "Miyitso miigba mi" },
            { id: 3, text: "Fɛi miiye mi" },
            { id: 4, text: "Mimusu miiwa mihe" }
          ],
          correctOptionId: 3,
          hints: ["Fɛi = cold", "miiye mi = is affecting me"],
          explanation: "Fɛi miiye mi = I am feeling cold in Ga."
        },
        {
          id: 1004,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'My stomach hurts' in Ga?",
          options: [
            { id: 1, text: "Mibɛ hewalɛ" },
            { id: 2, text: "Miyitso miigba mi" },
            { id: 3, text: "Fɛi miiye mi" },
            { id: 4, text: "Mimusu miiwa mihe" }
          ],
          correctOptionId: 4,
          hints: ["Mimusu = my stomach", "miiwa mihe = hurts me"],
          explanation: "Mimusu miiwa mihe = My stomach hurts in Ga."
        }
      ]
    },

    {
      id: "10-2",
      type: "words",
      title: "Getting Medical Help",
      icon: "siren-outline",
      description: "Learn how to seek medical assistance in Ga",
      words: ["Tsɛ datrɛfonyo", "Nɛgbɛ helatsamɔhe lɛ yɔɔ?", "Mitao tsofa"],
      vocabulary: [
        {
          id: 146,
          english: "Call a doctor",
          native: "Tsɛ datrɛfonyo",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter10/tsɛ_datrɛfonyo.m4a")
        },
        {
          id: 149,
          english: "Where is the hospital?",
          native: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter10/nɛgbɛ_helatsamɔhe_lɛ_yɔɔ.m4a")
        },
        {
          id: 151,
          english: "I want medicine",
          native: "Mitao tsofa",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter10/mitao_tsofa.m4a")
        }
      ],
      questions: [
        {
          id: 1005,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Call a doctor' in Ga?",
          options: [
            { id: 1, text: "Tsɛ datrɛfonyo" },
            { id: 2, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
            { id: 3, text: "Mitao tsofa" },
            { id: 4, text: "Kwɛmɔ ohenɔ jogbaŋŋ" }
          ],
          correctOptionId: 1,
          hints: ["Tsɛ = call", "datrɛfonyo = doctor"],
          explanation: "Tsɛ datrɛfonyo = Call a doctor in Ga."
        },
        {
          id: 1006,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Where is the hospital?' in Ga?",
          options: [
            { id: 1, text: "Tsɛ datrɛfonyo" },
            { id: 2, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
            { id: 3, text: "Mitao tsofa" },
            { id: 4, text: "Nu tsofa nɛɛ shii etɛ gbi kome" }
          ],
          correctOptionId: 2,
          hints: ["Nɛgbɛ = where", "helatsamɔhe = hospital"],
          explanation: "Nɛgbɛ helatsamɔhe lɛ yɔɔ? = Where is the hospital? in Ga."
        },
        {
          id: 1007,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I want medicine' in Ga?",
          options: [
            { id: 1, text: "Tsɛ datrɛfonyo" },
            { id: 2, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
            { id: 3, text: "Mitao tsofa" },
            { id: 4, text: "Mibɛ hewalɛ" }
          ],
          correctOptionId: 3,
          hints: ["Mitao = I want", "tsofa = medicine"],
          explanation: "Mitao tsofa = I want medicine in Ga."
        }
      ]
    },

    {
      id: "10-3",
      type: "words",
      title: "Medicine & Safety",
      icon: "shield-checkmark-outline",
      description: "Learn how to talk about medicine and staying safe in Ga",
      words: ["Nu tsofa nɛɛ shii etɛ gbi kome", "Kwɛmɔ ohenɔ jogbaŋŋ"],
      vocabulary: [
        {
          id: 152,
          english: "Take this drug three times a day",
          native: "Nu tsofa nɛɛ shii etɛ gbi kome",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter10/nu_tsofa_nɛɛ_shii_etɛ_gbi_kome.m4a")
        },
        {
          id: 155,
          english: "Be careful",
          native: "Kwɛmɔ ohenɔ jogbaŋŋ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter10/kwɛmɔ_ohenɔ_jogbaŋŋ.m4a")
        }
      ],
      questions: [
        {
          id: 1008,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Take this drug three times a day' in Ga?",
          options: [
            { id: 1, text: "Nu tsofa nɛɛ shii etɛ gbi kome" },
            { id: 2, text: "Kwɛmɔ ohenɔ jogbaŋŋ" },
            { id: 3, text: "Mitao tsofa" },
            { id: 4, text: "Tsɛ datrɛfonyo" }
          ],
          correctOptionId: 1,
          hints: ["Nu = take/drink", "shii etɛ = three times"],
          explanation: "Nu tsofa nɛɛ shii etɛ gbi kome = Take this drug three times a day in Ga."
        },
        {
          id: 1009,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Be careful' in Ga?",
          options: [
            { id: 1, text: "Nu tsofa nɛɛ shii etɛ gbi kome" },
            { id: 2, text: "Kwɛmɔ ohenɔ jogbaŋŋ" },
            { id: 3, text: "Mitao tsofa" },
            { id: 4, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" }
          ],
          correctOptionId: 2,
          hints: ["Kwɛmɔ = watch/look", "jogbaŋŋ = well"],
          explanation: "Kwɛmɔ ohenɔ jogbaŋŋ = Be careful in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-10",
    title: "Review: Health & Emergencies",
    icon: "refresh-outline",
    description: "Review all the health and emergency vocabulary you've learned",
    questions: [
      {
        id: 1010,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am sick' in Ga?",
        options: [
          { id: 1, text: "Mibɛ hewalɛ" },
          { id: 2, text: "Miyitso miigba mi" },
          { id: 3, text: "Fɛi miiye mi" },
          { id: 4, text: "Mimusu miiwa mihe" }
        ],
        correctOptionId: 1,
        hints: ["Mibɛ hewalɛ = I am sick"],
        explanation: "Mibɛ hewalɛ = I am sick."
      },
      {
        id: 1011,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'My head hurts' in Ga?",
        options: [
          { id: 1, text: "Mibɛ hewalɛ" },
          { id: 2, text: "Miyitso miigba mi" },
          { id: 3, text: "Fɛi miiye mi" },
          { id: 4, text: "Mimusu miiwa mihe" }
        ],
        correctOptionId: 2,
        hints: ["Miyitso = my head"],
        explanation: "Miyitso miigba mi = My head hurts."
      },
      {
        id: 1012,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am feeling cold' in Ga?",
        options: [
          { id: 1, text: "Mibɛ hewalɛ" },
          { id: 2, text: "Miyitso miigba mi" },
          { id: 3, text: "Fɛi miiye mi" },
          { id: 4, text: "Mimusu miiwa mihe" }
        ],
        correctOptionId: 3,
        hints: ["Fɛi = cold"],
        explanation: "Fɛi miiye mi = I am feeling cold."
      },
      {
        id: 1013,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'My stomach hurts' in Ga?",
        options: [
          { id: 1, text: "Mibɛ hewalɛ" },
          { id: 2, text: "Miyitso miigba mi" },
          { id: 3, text: "Fɛi miiye mi" },
          { id: 4, text: "Mimusu miiwa mihe" }
        ],
        correctOptionId: 4,
        hints: ["Mimusu = my stomach"],
        explanation: "Mimusu miiwa mihe = My stomach hurts."
      },
      {
        id: 1014,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Call a doctor' in Ga?",
        options: [
          { id: 1, text: "Tsɛ datrɛfonyo" },
          { id: 2, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
          { id: 3, text: "Mitao tsofa" },
          { id: 4, text: "Kwɛmɔ ohenɔ jogbaŋŋ" }
        ],
        correctOptionId: 1,
        hints: ["datrɛfonyo = doctor"],
        explanation: "Tsɛ datrɛfonyo = Call a doctor."
      },
      {
        id: 1015,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Where is the hospital?' in Ga?",
        options: [
          { id: 1, text: "Tsɛ datrɛfonyo" },
          { id: 2, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
          { id: 3, text: "Mitao tsofa" },
          { id: 4, text: "Nu tsofa nɛɛ shii etɛ gbi kome" }
        ],
        correctOptionId: 2,
        hints: ["helatsamɔhe = hospital"],
        explanation: "Nɛgbɛ helatsamɔhe lɛ yɔɔ? = Where is the hospital?"
      },
      {
        id: 1016,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I want medicine' in Ga?",
        options: [
          { id: 1, text: "Tsɛ datrɛfonyo" },
          { id: 2, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" },
          { id: 3, text: "Mitao tsofa" },
          { id: 4, text: "Mibɛ hewalɛ" }
        ],
        correctOptionId: 3,
        hints: ["tsofa = medicine"],
        explanation: "Mitao tsofa = I want medicine."
      },
      {
        id: 1017,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Take this drug three times a day' in Ga?",
        options: [
          { id: 1, text: "Nu tsofa nɛɛ shii etɛ gbi kome" },
          { id: 2, text: "Kwɛmɔ ohenɔ jogbaŋŋ" },
          { id: 3, text: "Mitao tsofa" },
          { id: 4, text: "Tsɛ datrɛfonyo" }
        ],
        correctOptionId: 1,
        hints: ["shii etɛ = three times"],
        explanation: "Nu tsofa nɛɛ shii etɛ gbi kome = Take this drug three times a day."
      },
      {
        id: 1018,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Be careful' in Ga?",
        options: [
          { id: 1, text: "Nu tsofa nɛɛ shii etɛ gbi kome" },
          { id: 2, text: "Kwɛmɔ ohenɔ jogbaŋŋ" },
          { id: 3, text: "Mitao tsofa" },
          { id: 4, text: "Nɛgbɛ helatsamɔhe lɛ yɔɔ?" }
        ],
        correctOptionId: 2,
        hints: ["Kwɛmɔ = watch/look"],
        explanation: "Kwɛmɔ ohenɔ jogbaŋŋ = Be careful."
      }
    ]
  }
};