export default {
  id: 11,
  title: "Travel & Transport",
  description: "Learn travel and transport vocabulary in Ga",
  icon: "bus-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "11-1",
      type: "words",
      title: "Planning a Trip",
      icon: "map-outline",
      description: "Learn how to plan a trip and ask for transport information in Ga",
      words: ["Mitaoɔ ni mafã gbɛ kɛya Ga", "Nɛgbɛ bɔs daamɔhe lɛ yɔɔ?", "Be enyiɛ ekɔɔ?", "Mihiaa taksi"],
      vocabulary: [
        {
          id: 134,
          english: "I want to travel to Accra",
          native: "Mitaoɔ ni mafã gbɛ kɛya Ga",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/mitaoɔ_ni_mafã_gbɛ_kɛya_ga.m4a")
        },
        {
          id: 135,
          english: "Where is the bus station?",
          native: "Nɛgbɛ bɔs daamɔhe lɛ yɔɔ?",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/nɛgbɛ_bɔs_daamɔhe_lɛ_yɔɔ.m4a")
        },
        {
          id: 136,
          english: "How long does it take?",
          native: "Be enyiɛ ekɔɔ?",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/be_enyiɛ_ekɔɔ.m4a")
        },
        {
          id: 142,
          english: "I need a taxi",
          native: "Mihiaa taksi",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/mihiaa_taksi.m4a")
        }
      ],
      questions: [
        {
          id: 1101,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I want to travel to Accra' in Ga?",
          options: [
            { id: 1, text: "Mitaoɔ ni mafã gbɛ kɛya Ga" },
            { id: 2, text: "Nɛgbɛ bɔs daamɔhe lɛ yɔɔ?" },
            { id: 3, text: "Be enyiɛ ekɔɔ?" },
            { id: 4, text: "Mihiaa taksi" }
          ],
          correctOptionId: 1,
          hints: ["Mitaoɔ ni = I want to", "mafã gbɛ = travel"],
          explanation: "Mitaoɔ ni mafã gbɛ kɛya Ga = I want to travel to Accra in Ga."
        },
        /*
        {
          id: 1102,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/nɛgbɛ_bɔs_daamɔhe_lɛ_yɔɔ.m4a"),
          options: [
            { id: 1, text: "I want to travel to Accra" },
            { id: 2, text: "Where is the bus station?" },
            { id: 3, text: "How long does it take?" },
            { id: 4, text: "I need a taxi" }
          ],
          correctOptionId: 2,
          hints: ["Nɛgbɛ = where", "bɔs daamɔhe = bus station"],
          explanation: "You heard 'Nɛgbɛ bɔs daamɔhe lɛ yɔɔ?' which means 'Where is the bus station?' in Ga."
        },

        */
        
        {
          id: 1103,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Mitaoɔ ni mafã gbɛ kɛya [_____] (I want to travel to Accra)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Ga" },
            { id: "opt2", text: "Kumasi" },
            { id: "opt3", text: "Tema" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Ga = Accra"],
          explanation: "Mitaoɔ ni mafã gbɛ kɛya Ga = I want to travel to Accra in Ga."
        }
      ]
    },

    // ==================== SECTION 2: ON BOARD ====================
    {
      id: "11-2",
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
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/ofainɛ_damɔ_biɛ.m4a")
        },
        {
          id: 140,
          english: "Is this seat taken?",
          native: "Mɔ ko ta sɛi nɛɛ nɔ lo?",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/mɔ_ko_ta_sɛi_nɛɛ_nɔ_lo.m4a")
        },
        {
          id: 143,
          english: "Where do I get down?",
          native: "Nɛgbɛ mayi shi yɛ?",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/nɛgbɛ_mayi_shi_yɛ.m4a")
        }
      ],
      questions: [
        {
          id: 1104,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Stop here please' in Ga?",
          options: [
            { id: 1, text: "Ofainɛ damɔ biɛ" },
            { id: 2, text: "Mɔ ko ta sɛi nɛɛ nɔ lo?" },
            { id: 3, text: "Nɛgbɛ mayi shi yɛ?" },
            { id: 4, text: "Mihiaa taksi" }
          ],
          correctOptionId: 1,
          hints: ["Ofainɛ = please", "damɔ = stop"],
          explanation: "Ofainɛ damɔ biɛ = Stop here please in Ga."
        },
        /*
        {
          id: 1105,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/mɔ_ko_ta_sɛi_nɛɛ_nɔ_lo.m4a"),
          options: [
            { id: 1, text: "Stop here please" },
            { id: 2, text: "Is this seat taken?" },
            { id: 3, text: "Where do I get down?" },
            { id: 4, text: "I need a taxi" }
          ],
          correctOptionId: 2,
          hints: ["sɛi = seat", "nɔ = on"],
          explanation: "You heard 'Mɔ ko ta sɛi nɛɛ nɔ lo?' which means 'Is this seat taken?' in Ga."
        },
        */
        {
          id: 1106,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Nɛgbɛ mayi shi [_____]? (Where do I get down?)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "yɛ" },
            { id: "opt2", text: "lo" },
            { id: "opt3", text: "nɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["yɛ = at/in"],
          explanation: "Nɛgbɛ mayi shi yɛ? = Where do I get down? in Ga."
        }
      ]
    },

    {
      id: "11-3",
      type: "words",
      title: "Fares & Problems",
      icon: "ticket-outline",
      description: "Learn phrases for dealing with fares and travel problems in Ga",
      words: ["Bɔs lɛ shi mi", "Shika enyiɛ ni?", "Kudɔmɔ ojogbaŋŋ", "Gbɛ lɛ ehiii"],
      vocabulary: [
        {
          id: 138,
          english: "I missed the bus",
          native: "Bɔs lɛ shi mi",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/bɔs_lɛ_shi_mi.m4a")
        },
        {
          id: 139,
          english: "How much is the fare?",
          native: "Shika enyiɛ ni?",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/shika_enyiɛ_ni.m4a")
        },
        {
          id: 141,
          english: "Drive carefully",
          native: "Kudɔmɔ ojogbaŋŋ",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/kudɔmɔ_ojogbaŋŋ.m4a")
        },
        {
          id: 144,
          english: "The road is bad",
          native: "Gbɛ lɛ ehiii",
          // audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/gbɛ_lɛ_ehiii.m4a")
        }
      ],
      questions: [
        {
          id: 1107,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I missed the bus' in Ga?",
          options: [
            { id: 1, text: "Bɔs lɛ shi mi" },
            { id: 2, text: "Shika enyiɛ ni?" },
            { id: 3, text: "Kudɔmɔ ojogbaŋŋ" },
            { id: 4, text: "Gbɛ lɛ ehiii" }
          ],
          correctOptionId: 1,
          hints: ["bɔs = bus", "shi mi = left me"],
          explanation: "Bɔs lɛ shi mi = I missed the bus in Ga."
        },
        /*
        {
          id: 1108,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/shika_enyiɛ_ni.m4a"),
          options: [
            { id: 1, text: "I missed the bus" },
            { id: 2, text: "How much is the fare?" },
            { id: 3, text: "Drive carefully" },
            { id: 4, text: "The road is bad" }
          ],
          correctOptionId: 2,
          hints: ["shika = money", "enyiɛ = how much"],
          explanation: "You heard 'Shika enyiɛ ni?' which means 'How much is the fare?' in Ga."
        },
        */
        {
          id: 1109,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Kudɔmɔ [_____] (Drive carefully)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "ojogbaŋŋ" },
            { id: "opt2", text: "ehiii" },
            { id: "opt3", text: "biɛ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["ojogbaŋŋ = carefully/well"],
          explanation: "Kudɔmɔ ojogbaŋŋ = Drive carefully in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-11",
    title: "Review: Travel & Transport",
    icon: "refresh-outline",
    description: "Review all the travel and transport vocabulary you've learned",
    questions: [
      {
        id: 1110,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I want to travel to Accra' in Ga?",
        options: [
          { id: 1, text: "Mitaoɔ ni mafã gbɛ kɛya Ga" },
          { id: 2, text: "Nɛgbɛ bɔs daamɔhe lɛ yɔɔ?" },
          { id: 3, text: "Be enyiɛ ekɔɔ?" },
          { id: 4, text: "Mihiaa taksi" }
        ],
        correctOptionId: 1,
        hints: ["Mitaoɔ ni = I want to"],
        explanation: "Mitaoɔ ni mafã gbɛ kɛya Ga = I want to travel to Accra."
      },
      /*
      {
        id: 1111,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/mihiaa_taksi.m4a"),
        options: [
          { id: 1, text: "I want to travel to Accra" },
          { id: 2, text: "Where is the bus station?" },
          { id: 3, text: "How long does it take?" },
          { id: 4, text: "I need a taxi" }
        ],
        correctOptionId: 4,
        hints: ["mihiaa = I need"],
        explanation: "You heard 'Mihiaa taksi' which means 'I need a taxi'."
      },
      */
      {
        id: 1112,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Stop here please' in Ga?",
        options: [
          { id: 1, text: "Ofainɛ damɔ biɛ" },
          { id: 2, text: "Mɔ ko ta sɛi nɛɛ nɔ lo?" },
          { id: 3, text: "Nɛgbɛ mayi shi yɛ?" },
          { id: 4, text: "Kudɔmɔ ojogbaŋŋ" }
        ],
        correctOptionId: 1,
        hints: ["damɔ = stop"],
        explanation: "Ofainɛ damɔ biɛ = Stop here please."
      },
      /*
      {
        id: 1113,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/nɛgbɛ_mayi_shi_yɛ.m4a"),
        options: [
          { id: 1, text: "Stop here please" },
          { id: 2, text: "Is this seat taken?" },
          { id: 3, text: "Where do I get down?" },
          { id: 4, text: "I missed the bus" }
        ],
        correctOptionId: 3,
        hints: ["mayi shi = I get down"],
        explanation: "You heard 'Nɛgbɛ mayi shi yɛ?' which means 'Where do I get down?'."
      },
      */
      {
        id: 1114,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I missed the bus' in Ga?",
        options: [
          { id: 1, text: "Bɔs lɛ shi mi" },
          { id: 2, text: "Shika enyiɛ ni?" },
          { id: 3, text: "Kudɔmɔ ojogbaŋŋ" },
          { id: 4, text: "Gbɛ lɛ ehiii" }
        ],
        correctOptionId: 1,
        hints: ["bɔs = bus"],
        explanation: "Bɔs lɛ shi mi = I missed the bus."
      },
      {
        id: 1115,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'How much is the fare?' in Ga?",
        options: [
          { id: 1, text: "Bɔs lɛ shi mi" },
          { id: 2, text: "Shika enyiɛ ni?" },
          { id: 3, text: "Kudɔmɔ ojogbaŋŋ" },
          { id: 4, text: "Gbɛ lɛ ehiii" }
        ],
        correctOptionId: 2,
        hints: ["shika = money"],
        explanation: "Shika enyiɛ ni? = How much is the fare?"
      },
      /*
      {
        id: 1116,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter1/gbɛ_lɛ_ehiii.m4a"),
        options: [
          { id: 1, text: "I missed the bus" },
          { id: 2, text: "How much is the fare?" },
          { id: 3, text: "Drive carefully" },
          { id: 4, text: "The road is bad" }
        ],
        correctOptionId: 4,
        hints: ["gbɛ = road", "ehiii = bad"],
        explanation: "You heard 'Gbɛ lɛ ehiii' which means 'The road is bad'."
      },
      */
      {
        id: 1117,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Mitaoɔ ni mafã gbɛ kɛya [_____] (I want to travel to Accra)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Ga" },
          { id: "opt2", text: "Kumasi" },
          { id: "opt3", text: "Tema" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["Ga = Accra"],
        explanation: "Mitaoɔ ni mafã gbɛ kɛya Ga = I want to travel to Accra."
      },
      {
        id: 1118,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Nɛgbɛ mayi shi [_____]? (Where do I get down?)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "yɛ" },
          { id: "opt2", text: "lo" },
          { id: "opt3", text: "nɔ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["yɛ = at/in"],
        explanation: "Nɛgbɛ mayi shi yɛ? = Where do I get down?"
      },
      {
        id: 1119,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Kudɔmɔ [_____] (Drive carefully)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "ehiii" },
          { id: "opt2", text: "ojogbaŋŋ" },
          { id: "opt3", text: "biɛ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt2" },
        hints: ["ojogbaŋŋ = carefully"],
        explanation: "Kudɔmɔ ojogbaŋŋ = Drive carefully."
      }
    ]
  }
};