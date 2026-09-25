export default {
  id: 1,
  title: "Travel & Transport",
  description: "Learn travel and transport phrases in Ga",
  icon: "bus-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "1-1",
      type: "words",
      title: "Planning a Trip",
      icon: "map-outline",
      description: "Learn how to plan a trip and ask for transport information in Ga",
      words: ["Mitaoɔ ni mafã gbɛ kɛya Ga", "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ?", "Bei enyiɛ eyeɔ?"],
      vocabulary: [
        {
          id: 134,
          english: "I want to travel to Accra",
          native: "Mitaoɔ ni mafã gbɛ kɛya Ga",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/mitaoɔ_ni_mafã_gbɛ_kɛya_ga.m4a")
        },
        {
          id: 135,
          english: "Where is the bus station?",
          native: "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/nɛgbɛ_tsɔne_daamɔhe_lɛ_yɔɔ.m4a")
        },
        {
          id: 136,
          english: "How long does it take?",
          native: "Bei enyiɛ eyeɔ?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/bei_enyiɛ_eyeɔ.m4a")
        }
      ],
      questions: [
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Where is the bus station?' in Ga?",
          options: [
            { id: 1, text: "Bei enyiɛ eyeɔ?" },
            { id: 2, text: "Mihiaa taksi" },
            { id: 3, text: "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ?" },
            { id: 4, text: "Mitaoɔ ni mafã gbɛ kɛya Ga" }
          ],
          correctOptionId: 3,
          hints: ["Nɛgbɛ = where", "tsɔne daamɔhe = bus station"],
          explanation: "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ? = Where is the bus station? in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'How long does it take?' in Ga?",
          options: [
            { id: 1, text: "Gbɛ lɛ ehiii" },
            { id: 2, text: "Bei enyiɛ eyeɔ?" },
            { id: 3, text: "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ?" },
            { id: 4, text: "Mitaoɔ ni mafã gbɛ kɛya Ga" }
          ],
          correctOptionId: 2,
          hints: ["Bei enyiɛ = how long", "eyeɔ = it takes"],
          explanation: "Bei enyiɛ eyeɔ? = How long does it take? in Ga."
        },
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I want to travel to Accra' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ?" },
            { id: 2, text: "Mitaoɔ ni mafã gbɛ kɛya Ga" },
            { id: 3, text: "Mihiaa taksi" },
            { id: 4, text: "Bei enyiɛ eyeɔ?" }
          ],
          correctOptionId: 2,
          hints: ["Mitaoɔ ni = I want to", "mafã gbɛ = travel"],
          explanation: "Mitaoɔ ni mafã gbɛ kɛya Ga = I want to travel to Accra in Ga."
        }
      ]
    },

    {
      id: "1-2",
      type: "words",
      title: "On Board",
      icon: "bus-outline",
      description: "Learn phrases for traveling on buses and taxis in Ga",
      words: ["Ofainɛ damɔ biɛ", "Mɔ ko ta sɛi nɛɛ nɔ lo?", "Nɛgbɛ mayi shi yɛ?"],
      vocabulary: [
        {
          id: 137,
          english: "Stop here please",
          native: "Ofainɛ damɔ biɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/ofainɛ_damɔ_biɛ.m4a")
        },
        {
          id: 140,
          english: "Is this seat taken?",
          native: "Mɔ ko ta sɛi nɛɛ nɔ lo?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/mɔ_ko_ta_sɛi_nɛɛ_nɔ_lo.m4a")
        },
        {
          id: 143,
          english: "Where do I get down?",
          native: "Nɛgbɛ mayi shi yɛ?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/nɛgbɛ_mayi_shi_yɛ.m4a")
        }
      ],
      questions: [
        {
          id: 106,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Where do I get down?' in Ga?",
          options: [
            { id: 1, text: "Bei enyiɛ eyeɔ?" },
            { id: 2, text: "Nɛgbɛ mayi shi yɛ?" },
            { id: 3, text: "Ofainɛ damɔ biɛ" },
            { id: 4, text: "Mɔ ko ta sɛi nɛɛ nɔ lo?" }
          ],
          correctOptionId: 2,
          hints: ["mayi shi = I get down"],
          explanation: "Nɛgbɛ mayi shi yɛ? = Where do I get down? in Ga."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Stop here please' in Ga?",
          options: [
            { id: 1, text: "Mihiaa taksi" },
            { id: 2, text: "Mɔ ko ta sɛi nɛɛ nɔ lo?" },
            { id: 3, text: "Ofainɛ damɔ biɛ" },
            { id: 4, text: "Nɛgbɛ mayi shi yɛ?" }
          ],
          correctOptionId: 3,
          hints: ["Ofainɛ = please", "damɔ = stop"],
          explanation: "Ofainɛ damɔ biɛ = Stop here please in Ga."
        },
        {
          id: 105,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Is this seat taken?' in Ga?",
          options: [
            { id: 1, text: "Tsɔne lɛ shi mi" },
            { id: 2, text: "Nɛgbɛ mayi shi yɛ?" },
            { id: 3, text: "Mɔ ko ta sɛi nɛɛ nɔ lo?" },
            { id: 4, text: "Ofainɛ damɔ biɛ" }
          ],
          correctOptionId: 3,
          hints: ["sɛi = seat", "nɔ = on"],
          explanation: "Mɔ ko ta sɛi nɛɛ nɔ lo? = Is this seat taken? in Ga."
        }
      ]
    },

    {
      id: "1-3",
      type: "words",
      title: "Fares & Problems",
      icon: "ticket-outline",
      description: "Learn phrases for dealing with fares and travel problems in Ga",
      words: ["Tsɔne lɛ shi mi", "Shika enyiɛ aheɔ?", "Kudɔmɔ ojogbaŋŋ", "Gbɛ lɛ ehiii"],
      vocabulary: [
        {
          id: 138,
          english: "I missed the bus",
          native: "Tsɔne lɛ shi mi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/tsɔne_lɛ_shi_mi.m4a")
        },
        {
          id: 139,
          english: "How much is the fare?",
          native: "Shika enyiɛ aheɔ?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/shika_enyiɛ_aheɔ.m4a")
        },
        {
          id: 141,
          english: "Drive carefully",
          native: "Kudɔmɔ ojogbaŋŋ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/kudɔmɔ_ojogbaŋŋ.m4a")
        },
        {
          id: 144,
          english: "The road is bad",
          native: "Gbɛ lɛ ehiii",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/gbɛ_lɛ_ehiii.m4a")
        }
      ],
      questions: [
        {
          id: 109,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Drive carefully' in Ga?",
          options: [
            { id: 1, text: "Gbɛ lɛ ehiii" },
            { id: 2, text: "Kudɔmɔ ojogbaŋŋ" },
            { id: 3, text: "Tsɔne lɛ shi mi" },
            { id: 4, text: "Shika enyiɛ aheɔ?" }
          ],
          correctOptionId: 2,
          hints: ["Kudɔmɔ = drive", "ojogbaŋŋ = carefully"],
          explanation: "Kudɔmɔ ojogbaŋŋ = Drive carefully in Ga."
        },
        {
          id: 107,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I missed the bus' in Ga?",
          options: [
            { id: 1, text: "Shika enyiɛ aheɔ?" },
            { id: 2, text: "Gbɛ lɛ ehiii" },
            { id: 3, text: "Tsɔne lɛ shi mi" },
            { id: 4, text: "Kudɔmɔ ojogbaŋŋ" }
          ],
          correctOptionId: 3,
          hints: ["tsɔne = bus", "shi mi = left me"],
          explanation: "Tsɔne lɛ shi mi = I missed the bus in Ga."
        },
        {
          id: 110,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The road is bad' in Ga?",
          options: [
            { id: 1, text: "Kudɔmɔ ojogbaŋŋ" },
            { id: 2, text: "Tsɔne lɛ shi mi" },
            { id: 3, text: "Gbɛ lɛ ehiii" },
            { id: 4, text: "Shika enyiɛ aheɔ?" }
          ],
          correctOptionId: 3,
          hints: ["gbɛ = road", "ehiii = bad"],
          explanation: "Gbɛ lɛ ehiii = The road is bad in Ga."
        },
        {
          id: 108,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'How much is the fare?' in Ga?",
          options: [
            { id: 1, text: "Shika enyiɛ aheɔ?" },
            { id: 2, text: "Kudɔmɔ ojogbaŋŋ" },
            { id: 3, text: "Gbɛ lɛ ehiii" },
            { id: 4, text: "Tsɔne lɛ shi mi" }
          ],
          correctOptionId: 1,
          hints: ["shika = money", "aheɔ = it costs"],
          explanation: "Shika enyiɛ aheɔ? = How much is the fare? in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-1",
    title: "Review: Travel & Transport",
    icon: "refresh-outline",
    description: "Review all the travel and transport phrases you've learned",
    questions: [
      {
        id: 118,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'How much is the fare?' in Ga?",
        options: [
          { id: 1, text: "Gbɛ lɛ ehiii" },
          { id: 2, text: "Tsɔne lɛ shi mi" },
          { id: 3, text: "Shika enyiɛ aheɔ?" },
          { id: 4, text: "Kudɔmɔ ojogbaŋŋ" }
        ],
        correctOptionId: 3,
        hints: ["shika = money"],
        explanation: "Shika enyiɛ aheɔ? = How much is the fare?"
      },
      {
        id: 113,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'How long does it take?' in Ga?",
        options: [
          { id: 1, text: "Gbɛ lɛ ehiii" },
          { id: 2, text: "Mitaoɔ ni mafã gbɛ kɛya Ga" },
          { id: 3, text: "Bei enyiɛ eyeɔ?" },
          { id: 4, text: "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ?" }
        ],
        correctOptionId: 3,
        hints: ["Bei enyiɛ = how long"],
        explanation: "Bei enyiɛ eyeɔ? = How long does it take?"
      },
      {
        id: 120,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The road is bad' in Ga?",
        options: [
          { id: 1, text: "Shika enyiɛ aheɔ?" },
          { id: 2, text: "Gbɛ lɛ ehiii" },
          { id: 3, text: "Kudɔmɔ ojogbaŋŋ" },
          { id: 4, text: "Tsɔne lɛ shi mi" }
        ],
        correctOptionId: 2,
        hints: ["gbɛ = road", "ehiii = bad"],
        explanation: "Gbɛ lɛ ehiii = The road is bad."
      },
      {
        id: 114,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Stop here please' in Ga?",
        options: [
          { id: 1, text: "Nɛgbɛ mayi shi yɛ?" },
          { id: 2, text: "Ofainɛ damɔ biɛ" },
          { id: 3, text: "Kudɔmɔ ojogbaŋŋ" },
          { id: 4, text: "Mɔ ko ta sɛi nɛɛ nɔ lo?" }
        ],
        correctOptionId: 2,
        hints: ["damɔ = stop"],
        explanation: "Ofainɛ damɔ biɛ = Stop here please."
      },
      {
        id: 117,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I missed the bus' in Ga?",
        options: [
          { id: 1, text: "Kudɔmɔ ojogbaŋŋ" },
          { id: 2, text: "Tsɔne lɛ shi mi" },
          { id: 3, text: "Shika enyiɛ aheɔ?" },
          { id: 4, text: "Gbɛ lɛ ehiii" }
        ],
        correctOptionId: 2,
        hints: ["tsɔne = bus"],
        explanation: "Tsɔne lɛ shi mi = I missed the bus."
      },
      {
        id: 112,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Where is the bus station?' in Ga?",
        options: [
          { id: 1, text: "Shika enyiɛ aheɔ?" },
          { id: 2, text: "Mitaoɔ ni mafã gbɛ kɛya Ga" },
          { id: 3, text: "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ?" },
          { id: 4, text: "Bei enyiɛ eyeɔ?" }
        ],
        correctOptionId: 3,
        hints: ["tsɔne daamɔhe = bus station"],
        explanation: "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ? = Where is the bus station?"
      },
      {
        id: 119,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Drive carefully' in Ga?",
        options: [
          { id: 1, text: "Kudɔmɔ ojogbaŋŋ" },
          { id: 2, text: "Gbɛ lɛ ehiii" },
          { id: 3, text: "Tsɔne lɛ shi mi" },
          { id: 4, text: "Shika enyiɛ aheɔ?" }
        ],
        correctOptionId: 1,
        hints: ["ojogbaŋŋ = carefully"],
        explanation: "Kudɔmɔ ojogbaŋŋ = Drive carefully."
      },
      {
        id: 115,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Is this seat taken?' in Ga?",
        options: [
          { id: 1, text: "Tsɔne lɛ shi mi" },
          { id: 2, text: "Nɛgbɛ mayi shi yɛ?" },
          { id: 3, text: "Mɔ ko ta sɛi nɛɛ nɔ lo?" },
          { id: 4, text: "Ofainɛ damɔ biɛ" }
        ],
        correctOptionId: 3,
        hints: ["sɛi = seat"],
        explanation: "Mɔ ko ta sɛi nɛɛ nɔ lo? = Is this seat taken?"
      },
      {
        id: 11,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I want to travel to Accra' in Ga?",
        options: [
          { id: 1, text: "Mihiaa taksi" },
          { id: 2, text: "Bei enyiɛ eyeɔ?" },
          { id: 3, text: "Mitaoɔ ni mafã gbɛ kɛya Ga" },
          { id: 4, text: "Nɛgbɛ tsɔne daamɔhe lɛ yɔɔ?" }
        ],
        correctOptionId: 3,
        hints: ["Mitaoɔ ni = I want to"],
        explanation: "Mitaoɔ ni mafã gbɛ kɛya Ga = I want to travel to Accra."
      },
      {
        id: 116,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Where do I get down?' in Ga?",
        options: [
          { id: 1, text: "Ofainɛ damɔ biɛ" },
          { id: 2, text: "Bei enyiɛ eyeɔ?" },
          { id: 3, text: "Nɛgbɛ mayi shi yɛ?" },
          { id: 4, text: "Mɔ ko ta sɛi nɛɛ nɔ lo?" }
        ],
        correctOptionId: 3,
        hints: ["mayi shi = I get down"],
        explanation: "Nɛgbɛ mayi shi yɛ? = Where do I get down?"
      }
    ]
  }
};