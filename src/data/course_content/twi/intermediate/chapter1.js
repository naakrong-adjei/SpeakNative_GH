export default {
  id: 1,
  title: "Travel & Transport",
  description: "Learn travel and transport vocabulary in Twi",
  icon: "bus-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "1-1",
      type: "phrases",
      title: "Planning a Trip",
      icon: "map-outline",
      description: "Learn how to plan a trip and ask for transport information in Twi",
      words: ["Mepɛ sɛ metu kwan kɔ Kumasi", "Bɔs gyinabea wɔ he?", "Ɛgye berɛ sɛn?", "Mehia taksi"],
      vocabulary: [
        {
          id: 157,
          english: "I want to travel to Kumasi",
          native: "Mepɛ sɛ metu kwan kɔ Kumasi",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/mepɛ_sɛ_metu_kwan_kɔ_kumasi.m4a")
        },
        {
          id: 158,
          english: "Where is the bus station?",
          native: "Bɔs gyinabea wɔ he?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/bɔs_gyinabea_wɔ_he.m4a")
        },
        {
          id: 159,
          english: "How long does it take?",
          native: "Ɛgye berɛ sɛn?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/ɛgye_berɛ_sɛn.m4a")
        },
        {
          id: 160,
          english: "I need a taxi",
          native: "Mehia taksi",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/mehia_taksi.m4a")
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I want to travel to Kumasi' in Twi?",
          options: [
            { id: 1, text: "Mepɛ sɛ metu kwan kɔ Kumasi" },
            { id: 2, text: "Bɔs gyinabea wɔ he?" },
            { id: 3, text: "Ɛgye berɛ sɛn?" },
            { id: 4, text: "Mehia taksi" }
          ],
          correctOptionId: 1,
          hints: ["metu kwan = travel"],
          explanation: "Mepɛ sɛ metu kwan kɔ Kumasi = I want to travel to Kumasi in Twi."
        },
        {
          id: 102,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/bɔs_gyinabea_wɔ_he.m4a"),
          options: [
            { id: 1, text: "I want to travel to Kumasi" },
            { id: 2, text: "Where is the bus station?" },
            { id: 3, text: "How long does it take?" },
            { id: 4, text: "I need a taxi" }
          ],
          correctOptionId: 2,
          hints: ["bɔs gyinabea = bus station"],
          explanation: "You heard 'Bɔs gyinabea wɔ he?' which means 'Where is the bus station?' in Twi."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'How long does it take?' in Twi?",
          options: [
            { id: 1, text: "Mepɛ sɛ metu kwan kɔ Kumasi" },
            { id: 2, text: "Bɔs gyinabea wɔ he?" },
            { id: 3, text: "Ɛgye berɛ sɛn?" },
            { id: 4, text: "Mepa wo kyɛw gyina ha" }
          ],
          correctOptionId: 3,
          hints: ["berɛ = time"],
          explanation: "Ɛgye berɛ sɛn? = How long does it take? in Twi."
        },
        {
          id: 104,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/mehia_taksi.m4a"),
          options: [
            { id: 1, text: "I want to travel to Kumasi" },
            { id: 2, text: "Where is the bus station?" },
            { id: 3, text: "How long does it take?" },
            { id: 4, text: "I need a taxi" }
          ],
          correctOptionId: 4,
          hints: ["Mehia = I need", "taksi = taxi"],
          explanation: "You heard 'Mehia taksi' which means 'I need a taxi' in Twi."
        }
      ]
    },

    {
      id: "1-2",
      type: "phrases",
      title: "On Board",
      icon: "bus-outline",
      description: "Learn phrases for traveling on buses and taxis in Twi",
      words: ["Mepa wo kyɛw gyina ha", "Obi te saa akonnwa yi so?", "Mensiane wɔ he?"],
      vocabulary: [
        {
          id: 161,
          english: "Stop here please",
          native: "Mepa wo kyɛw gyina ha",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/mepa_wo_kyɛw_gyina_ha.m4a")
        },
        {
          id: 162,
          english: "Is this seat taken?",
          native: "Obi te saa akonnwa yi so?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/obi_te_saa_akonnwa_yi_so.m4a")
        },
        {
          id: 163,
          english: "Where do I get down?",
          native: "Mensiane wɔ he?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/mensiane_wɔ_he.m4a")
        }
      ],
      questions: [
        {
          id: 105,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Stop here please' in Twi?",
          options: [
            { id: 1, text: "Mepa wo kyɛw gyina ha" },
            { id: 2, text: "Obi te saa akonnwa yi so?" },
            { id: 3, text: "Mensiane wɔ he?" },
            { id: 4, text: "Mehia taksi" }
          ],
          correctOptionId: 1,
          hints: ["gyina ha = stop here"],
          explanation: "Mepa wo kyɛw gyina ha = Stop here please in Twi."
        },
        {
          id: 106,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/obi_te_saa_akonnwa_yi_so.m4a"),
          options: [
            { id: 1, text: "Stop here please" },
            { id: 2, text: "Is this seat taken?" },
            { id: 3, text: "Where do I get down?" },
            { id: 4, text: "I need a taxi" }
          ],
          correctOptionId: 2,
          hints: ["akonnwa = seat"],
          explanation: "You heard 'Obi te saa akonnwa yi so?' which means 'Is this seat taken?' in Twi."
        },
        {
          id: 107,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Where do I get down?' in Twi?",
          options: [
            { id: 1, text: "Mepa wo kyɛw gyina ha" },
            { id: 2, text: "Obi te saa akonnwa yi so?" },
            { id: 3, text: "Mensiane wɔ he?" },
            { id: 4, text: "Ɛkwan no ka yɛ sɛn?" }
          ],
          correctOptionId: 3,
          hints: ["Mensiane = I get down"],
          explanation: "Mensiane wɔ he? = Where do I get down? in Twi."
        },
        {
          id: 108,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/mepa_wo_kyɛw_gyina_ha.m4a"),
          options: [
            { id: 1, text: "Stop here please" },
            { id: 2, text: "Is this seat taken?" },
            { id: 3, text: "Where do I get down?" },
            { id: 4, text: "How much is the fare?" }
          ],
          correctOptionId: 1,
          hints: ["gyina ha = stop here"],
          explanation: "You heard 'Mepa wo kyɛw gyina ha' which means 'Stop here please' in Twi."
        }
      ]
    },

    {
      id: "1-3",
      type: "phrases",
      title: "Fares & Travel Problems",
      icon: "ticket-outline",
      description: "Learn phrases for dealing with fares and travel problems in Twi",
      words: ["Bɔs no gyaa me", "Ɛkwan no ka yɛ sɛn?"],
      vocabulary: [
        {
          id: 164,
          english: "I missed the bus",
          native: "Bɔs no gyaa me",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/bɔs_no_gyaa_me.m4a")
        },
        {
          id: 165,
          english: "How much is the fare?",
          native: "Ɛkwan no ka yɛ sɛn?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/ɛkwan_no_ka_yɛ_sɛn.m4a")
        }
      ],
      questions: [
        {
          id: 109,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I missed the bus' in Twi?",
          options: [
            { id: 1, text: "Bɔs no gyaa me" },
            { id: 2, text: "Ɛkwan no ka yɛ sɛn?" },
            { id: 3, text: "Ka no yie" },
            { id: 4, text: "Ɛkwan no nyɛ" }
          ],
          correctOptionId: 1,
          hints: ["gyaa me = left me"],
          explanation: "Bɔs no gyaa me = I missed the bus in Twi."
        },
        {
          id: 110,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/ɛkwan_no_ka_yɛ_sɛn.m4a"),
          options: [
            { id: 1, text: "I missed the bus" },
            { id: 2, text: "How much is the fare?" },
            { id: 3, text: "Drive carefully" },
            { id: 4, text: "The road is bad" }
          ],
          correctOptionId: 2,
          hints: ["ka = fare/cost"],
          explanation: "You heard 'Ɛkwan no ka yɛ sɛn?' which means 'How much is the fare?' in Twi."
        },
        {
          id: 111,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'How much is the fare?' in Twi?",
          options: [
            { id: 1, text: "Bɔs no gyaa me" },
            { id: 2, text: "Ɛkwan no ka yɛ sɛn?" },
            { id: 3, text: "Ka no yie" },
            { id: 4, text: "Mensiane wɔ he?" }
          ],
          correctOptionId: 2,
          hints: ["ɛkwan = road/fare"],
          explanation: "Ɛkwan no ka yɛ sɛn? = How much is the fare? in Twi."
        },
        {
          id: 112,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/bɔs_no_gyaa_me.m4a"),
          options: [
            { id: 1, text: "I missed the bus" },
            { id: 2, text: "How much is the fare?" },
            { id: 3, text: "Drive carefully" },
            { id: 4, text: "Where do I get down?" }
          ],
          correctOptionId: 1,
          hints: ["gyaa me = left me"],
          explanation: "You heard 'Bɔs no gyaa me' which means 'I missed the bus' in Twi."
        }
      ]
    },

    {
      id: "1-4",
      type: "phrases",
      title: "Road & Safety",
      icon: "warning-outline",
      description: "Learn phrases about road conditions and safety in Twi",
      words: ["Ka no yie", "Ɛkwan no nyɛ"],
      vocabulary: [
        {
          id: 166,
          english: "Drive carefully",
          native: "Ka no yie",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/ka_no_yie.m4a")
        },
        {
          id: 167,
          english: "The road is bad",
          native: "Ɛkwan no nyɛ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/ɛkwan_no_nyɛ.m4a")
        }
      ],
      questions: [
        {
          id: 113,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Drive carefully' in Twi?",
          options: [
            { id: 1, text: "Ka no yie" },
            { id: 2, text: "Ɛkwan no nyɛ" },
            { id: 3, text: "Bɔs no gyaa me" },
            { id: 4, text: "Ɛkwan no ka yɛ sɛn?" }
          ],
          correctOptionId: 1,
          hints: ["yie = carefully/well"],
          explanation: "Ka no yie = Drive carefully in Twi."
        },
        {
          id: 114,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/ɛkwan_no_nyɛ.m4a"),
          options: [
            { id: 1, text: "Drive carefully" },
            { id: 2, text: "The road is bad" },
            { id: 3, text: "I missed the bus" },
            { id: 4, text: "How much is the fare?" }
          ],
          correctOptionId: 2,
          hints: ["nyɛ = bad"],
          explanation: "You heard 'Ɛkwan no nyɛ' which means 'The road is bad' in Twi."
        },
        {
          id: 115,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The road is bad' in Twi?",
          options: [
            { id: 1, text: "Ka no yie" },
            { id: 2, text: "Ɛkwan no nyɛ" },
            { id: 3, text: "Bɔs no gyaa me" },
            { id: 4, text: "Mepa wo kyɛw gyina ha" }
          ],
          correctOptionId: 2,
          hints: ["ɛkwan = road"],
          explanation: "Ɛkwan no nyɛ = The road is bad in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-1",
    title: "Review: Travel & Transport",
    icon: "refresh-outline",
    description: "Review all the travel and transport vocabulary you've learned",
    questions: [
      {
        id: 116,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I want to travel to Kumasi' in Twi?",
        options: [
          { id: 1, text: "Mepɛ sɛ metu kwan kɔ Kumasi" },
          { id: 2, text: "Bɔs gyinabea wɔ he?" },
          { id: 3, text: "Ɛgye berɛ sɛn?" },
          { id: 4, text: "Mehia taksi" }
        ],
        correctOptionId: 1,
        hints: ["metu kwan = travel"],
        explanation: "Mepɛ sɛ metu kwan kɔ Kumasi = I want to travel to Kumasi."
      },
      {
        id: 117,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/mensiane_wɔ_he.m4a"),
        options: [
          { id: 1, text: "Stop here please" },
          { id: 2, text: "Is this seat taken?" },
          { id: 3, text: "Where do I get down?" },
          { id: 4, text: "How much is the fare?" }
        ],
        correctOptionId: 3,
        hints: ["Mensiane = I get down"],
        explanation: "You heard 'Mensiane wɔ he?' which means 'Where do I get down?'."
      },
      {
        id: 118,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Where is the bus station?' in Twi?",
        options: [
          { id: 1, text: "Mepɛ sɛ metu kwan kɔ Kumasi" },
          { id: 2, text: "Bɔs gyinabea wɔ he?" },
          { id: 3, text: "Ɛgye berɛ sɛn?" },
          { id: 4, text: "Mehia taksi" }
        ],
        correctOptionId: 2,
        hints: ["bɔs gyinabea = bus station"],
        explanation: "Bɔs gyinabea wɔ he? = Where is the bus station?"
      },
      {
        id: 119,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/ka_no_yie.m4a"),
        options: [
          { id: 1, text: "Drive carefully" },
          { id: 2, text: "The road is bad" },
          { id: 3, text: "I missed the bus" },
          { id: 4, text: "How much is the fare?" }
        ],
        correctOptionId: 1,
        hints: ["yie = carefully"],
        explanation: "You heard 'Ka no yie' which means 'Drive carefully'."
      },
      {
        id: 120,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I need a taxi' in Twi?",
        options: [
          { id: 1, text: "Mepɛ sɛ metu kwan kɔ Kumasi" },
          { id: 2, text: "Bɔs gyinabea wɔ he?" },
          { id: 3, text: "Ɛgye berɛ sɛn?" },
          { id: 4, text: "Mehia taksi" }
        ],
        correctOptionId: 4,
        hints: ["Mehia = I need"],
        explanation: "Mehia taksi = I need a taxi."
      },
      {
        id: 121,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Is this seat taken?' in Twi?",
        options: [
          { id: 1, text: "Mepa wo kyɛw gyina ha" },
          { id: 2, text: "Obi te saa akonnwa yi so?" },
          { id: 3, text: "Mensiane wɔ he?" },
          { id: 4, text: "Mehia taksi" }
        ],
        correctOptionId: 2,
        hints: ["akonnwa = seat"],
        explanation: "Obi te saa akonnwa yi so? = Is this seat taken?"
      },
      {
        id: 122,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I missed the bus' in Twi?",
        options: [
          { id: 1, text: "Bɔs no gyaa me" },
          { id: 2, text: "Ɛkwan no ka yɛ sɛn?" },
          { id: 3, text: "Ka no yie" },
          { id: 4, text: "Ɛkwan no nyɛ" }
        ],
        correctOptionId: 1,
        hints: ["gyaa me = left me"],
        explanation: "Bɔs no gyaa me = I missed the bus."
      },
      {
        id: 123,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The road is bad' in Twi?",
        options: [
          { id: 1, text: "Ka no yie" },
          { id: 2, text: "Ɛkwan no nyɛ" },
          { id: 3, text: "Bɔs no gyaa me" },
          { id: 4, text: "Mepa wo kyɛw gyina ha" }
        ],
        correctOptionId: 2,
        hints: ["nyɛ = bad"],
        explanation: "Ɛkwan no nyɛ = The road is bad."
      },
      {
        id: 124,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter1/ɛgye_berɛ_sɛn.m4a"),
        options: [
          { id: 1, text: "I want to travel to Kumasi" },
          { id: 2, text: "Where is the bus station?" },
          { id: 3, text: "How long does it take?" },
          { id: 4, text: "I need a taxi" }
        ],
        correctOptionId: 3,
        hints: ["berɛ = time"],
        explanation: "You heard 'Ɛgye berɛ sɛn?' which means 'How long does it take?'."
      },
      {
        id: 125,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Stop here please' in Twi?",
        options: [
          { id: 1, text: "Mepa wo kyɛw gyina ha" },
          { id: 2, text: "Obi te saa akonnwa yi so?" },
          { id: 3, text: "Mensiane wɔ he?" },
          { id: 4, text: "Ɛkwan no ka yɛ sɛn?" }
        ],
        correctOptionId: 1,
        hints: ["gyina ha = stop here"],
        explanation: "Mepa wo kyɛw gyina ha = Stop here please."
      }
    ]
  }
};