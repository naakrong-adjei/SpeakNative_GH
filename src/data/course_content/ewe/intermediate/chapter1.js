export default {
  id: 1,
  title: "Travel & Transport",
  description: "Learn useful Ewe phrases for travel, transport, fares, and common travel situations",
  icon: "bus-outline",
  totalXp: 10,
  difficulty: "Intermediate",

  sections: [
    {
      id: "1-1",
      type: "words",
      title: "Planning a Trip",
      icon: "map-outline",
      description: "Learn useful Ewe phrases for planning trips and asking for transport information",
      words: [
        "Medzi be mazɔ mɔ ayi Agbozume",
        "Afika ʋudzeƒea le?",
        "Ɣeyiɣi kae wòxɔna?",
        "Mehiã taksi"
      ],
      vocabulary: [
        {
          id: 134,
          english: "I want to travel to Agbozume",
          native: "Medzi be mazɔ mɔ ayi Agbozume",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/medzi_be_mazɔ_mɔ_ayi_agbozume.m4a")
        },
        {
          id: 135,
          english: "Where is the bus station?",
          native: "Afika ʋudzeƒea le?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/afika_ʋudzeƒea_le.m4a")
        },
        {
          id: 136,
          english: "How long does it take?",
          native: "Ɣeyiɣi kae wòxɔna?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/ɣeyiɣi_kae_wòxɔna.m4a")
        },
        {
          id: 142,
          english: "I need a taxi",
          native: "Mehiã taksi",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/mehiã_taksi.m4a")
        }
      ],
      questions: [
        {
          id: 103,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Ɣeyiɣi kae wò[_____]? (How long does it take?)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "dzo" },
            { id: "opt2", text: "xɔna" },
            { id: "opt3", text: "le" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt2" },
          hints: ["xɔna = takes"],
          explanation: "Ɣeyiɣi kae wòxɔna? = How long does it take? in Ewe."
        },
        {
          id: 102,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/afika_ʋudzeƒea_le.m4a"),
          options: [
            { id: 1, text: "I need a taxi" },
            { id: 2, text: "How long does it take?" },
            { id: 3, text: "Where is the bus station?" },
            { id: 4, text: "I want to travel to Agbozume" }
          ],
          correctOptionId: 3,
          hints: ["Afika = where", "ʋudzeƒe = bus station"],
          explanation: "You heard 'Afika ʋudzeƒea le?' which means 'Where is the bus station?' in Ewe."
        },
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I want to travel to Agbozume' in Ewe?",
          options: [
            { id: 1, text: "Mehiã taksi" },
            { id: 2, text: "Medzi be mazɔ mɔ ayi Agbozume" },
            { id: 3, text: "Afika ʋudzeƒea le?" },
            { id: 4, text: "Ɣeyiɣi kae wòxɔna?" }
          ],
          correctOptionId: 2,
          hints: ["Medzi be = I want to", "mazɔ mɔ = travel"],
          explanation: "Medzi be mazɔ mɔ ayi Agbozume = I want to travel to Agbozume in Ewe."
        }
      ]
    },

    {
      id: "1-2",
      type: "words",
      title: "On Board",
      icon: "bus-outline",
      description: "Learn useful Ewe phrases for traveling on buses and taxis",
      words: [
        "Meɖe kuku tɔ de afi",
        "Ame aɖe le zikpui hia dzia?",
        "Afika maɖi le?"
      ],
      vocabulary: [
        {
          id: 137,
          english: "Stop here please",
          native: "Meɖe kuku tɔ de afi",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/meɖe_kuku_tɔ_de_afi.m4a")
        },
        {
          id: 140,
          english: "Is this seat taken?",
          native: "Ame aɖe le zikpui hia dzia?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/ame_aɖe_le_zikpui_hia_dzia.m4a")
        },
        {
          id: 143,
          english: "Where do I get down?",
          native: "Afika maɖi le?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/afika_maɖi_le.m4a")
        }
      ],
      questions: [
        {
          id: 105,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/ame_aɖe_le_zikpui_hia_dzia.m4a"),
          options: [
            { id: 1, text: "Where do I get down?" },
            { id: 2, text: "I need a taxi" },
            { id: 3, text: "Is this seat taken?" },
            { id: 4, text: "Stop here please" }
          ],
          correctOptionId: 3,
          hints: ["zikpui = seat", "hia = this", "dzia = on"],
          explanation: "You heard 'Ame aɖe le zikpui hia dzia?' which means 'Is this seat taken?' in Ewe."
        },
        {
          id: 106,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Afika maɖi [_____]? (Where do I get down?)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "me" },
            { id: "opt2", text: "le" },
            { id: "opt3", text: "dzia" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt2" },
          hints: ["le = at/in"],
          explanation: "Afika maɖi le? = Where do I get down? in Ewe."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Stop here please' in Ewe?",
          options: [
            { id: 1, text: "Afika maɖi le?" },
            { id: 2, text: "Meɖe kuku tɔ de afi" },
            { id: 3, text: "Mehiã taksi" },
            { id: 4, text: "Ame aɖe le zikpui hia dzia?" }
          ],
          correctOptionId: 2,
          hints: ["Meɖe kuku = please", "tɔ = stop"],
          explanation: "Meɖe kuku tɔ de afi = Stop here please in Ewe."
        }
      ]
    },

    {
      id: "1-3",
      type: "words",
      title: "Fares & Problems",
      icon: "ticket-outline",
      description: "Learn useful Ewe phrases for fares, driving, and common travel problems",
      words: [
        "Ʋu la dzo le gbɔnye",
        "Nenie nye ʋu dzɔ",
        "Ku ʋua nyuie",
        "Mɔ la gblẽ"
      ],
      vocabulary: [
        {
          id: 138,
          english: "I missed the bus",
          native: "Ʋu la dzo le gbɔnye",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/ʋu_la_dzo_le_gbɔnye.m4a")
        },
        {
          id: 139,
          english: "How much is the fare?",
          native: "Nenie nye ʋu dzɔ",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/nenie_nye_ʋu_dzɔ.m4a")
        },
        {
          id: 141,
          english: "Drive carefully",
          native: "Ku ʋua nyuie",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/ku_ʋua_nyuie.m4a")
        },
        {
          id: 144,
          english: "The road is bad",
          native: "Mɔ la gblẽ",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/mɔ_la_gblẽ.m4a")
        }
      ],
      questions: [
        {
          id: 108,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/nenie_nye_ʋu_dzɔ.m4a"),
          options: [
            { id: 1, text: "Drive carefully" },
            { id: 2, text: "The road is bad" },
            { id: 3, text: "I missed the bus" },
            { id: 4, text: "How much is the fare?" }
          ],
          correctOptionId: 4,
          hints: ["nenie = how much", "ʋu dzɔ = fare"],
          explanation: "You heard 'Nenie nye ʋu dzɔ?' which means 'How much is the fare?' in Ewe."
        },
        {
          id: 109,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Ku ʋua [_____] (Drive carefully)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "gblẽ" },
            { id: "opt2", text: "le" },
            { id: "opt3", text: "nyuie" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt3" },
          hints: ["nyuie = well/carefully"],
          explanation: "Ku ʋua nyuie = Drive carefully in Ewe."
        },
        {
          id: 107,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I missed the bus' in Ewe?",
          options: [
            { id: 1, text: "Mɔ la gblẽ" },
            { id: 2, text: "Ʋu la dzo le gbɔnye" },
            { id: 3, text: "Ku ʋua nyuie" },
            { id: 4, text: "Nenie nye ʋu dzɔ" }
          ],
          correctOptionId: 2,
          hints: ["ʋu = bus", "dzo = left", "gbɔnye = from me"],
          explanation: "Ʋu la dzo le gbɔnye = I missed the bus in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-1",
    title: "Review: Travel & Transport",
    icon: "refresh-outline",
    description: "Review the Ewe phrases you've learned for trip planning, transport, fares, and travel problems",
    questions: [
      {
        id: 115,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'How much is the fare?' in Ewe?",
        options: [
          { id: 1, text: "Ku ʋua nyuie" },
          { id: 2, text: "Mɔ la gblẽ" },
          { id: 3, text: "Nenie nye ʋu dzɔ" },
          { id: 4, text: "Ʋu la dzo le gbɔnye" }
        ],
        correctOptionId: 3,
        hints: ["nenie = how much", "ʋu dzɔ = fare"],
        explanation: "Nenie nye ʋu dzɔ = How much is the fare?"
      },
      {
        id: 119,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Afika ʋudzeƒea [_____]? (Where is the bus station?)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "dzia" },
          { id: "opt2", text: "le" },
          { id: "opt3", text: "me" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt2" },
        hints: ["le = is at"],
        explanation: "Afika ʋudzeƒea le? = Where is the bus station?"
      },
      {
        id: 113,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/afika_maɖi_le.m4a"),
        options: [
          { id: 1, text: "I missed the bus" },
          { id: 2, text: "Where do I get down?" },
          { id: 3, text: "Stop here please" },
          { id: 4, text: "Is this seat taken?" }
        ],
        correctOptionId: 2,
        hints: ["maɖi = I get down"],
        explanation: "You heard 'Afika maɖi le?' which means 'Where do I get down?'."
      },
      {
        id: 110,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I want to travel to Agbozume' in Ewe?",
        options: [
          { id: 1, text: "Mehiã taksi" },
          { id: 2, text: "Ɣeyiɣi kae wòxɔna?" },
          { id: 3, text: "Medzi be mazɔ mɔ ayi Agbozume" },
          { id: 4, text: "Afika ʋudzeƒea le?" }
        ],
        correctOptionId: 3,
        hints: ["Medzi be = I want to"],
        explanation: "Medzi be mazɔ mɔ ayi Agbozume = I want to travel to Agbozume."
      },
      {
        id: 117,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Ame aɖe le zikpui hia [_____]? (Is this seat taken?)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "me" },
          { id: "opt2", text: "dzia" },
          { id: "opt3", text: "le" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt2" },
        hints: ["dzia = on"],
        explanation: "Ame aɖe le zikpui hia dzia? = Is this seat taken?"
      },
      {
        id: 116,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/mɔ_la_gblẽ.m4a"),
        options: [
          { id: 1, text: "The road is bad" },
          { id: 2, text: "How much is the fare?" },
          { id: 3, text: "Drive carefully" },
          { id: 4, text: "I missed the bus" }
        ],
        correctOptionId: 1,
        hints: ["mɔ = road", "gblẽ = bad"],
        explanation: "You heard 'Mɔ la gblẽ' which means 'The road is bad'."
      },
      {
        id: 114,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I missed the bus' in Ewe?",
        options: [
          { id: 1, text: "Ku ʋua nyuie" },
          { id: 2, text: "Nenie nye ʋu dzɔ" },
          { id: 3, text: "Ʋu la dzo le gbɔnye" },
          { id: 4, text: "Mɔ la gblẽ" }
        ],
        correctOptionId: 3,
        hints: ["ʋu = bus", "dzo = left"],
        explanation: "Ʋu la dzo le gbɔnye = I missed the bus."
      },
      {
        id: 118,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Ku ʋua [_____] (Drive carefully)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "dzia" },
          { id: "opt2", text: "nyuie" },
          { id: "opt3", text: "gblẽ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt2" },
        hints: ["nyuie = well/carefully"],
        explanation: "Ku ʋua nyuie = Drive carefully."
      },
      {
        id: 112,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Stop here please' in Ewe?",
        options: [
          { id: 1, text: "Afika maɖi le?" },
          { id: 2, text: "Ku ʋua nyuie" },
          { id: 3, text: "Meɖe kuku tɔ de afi" },
          { id: 4, text: "Ame aɖe le zikpui hia dzia?" }
        ],
        correctOptionId: 3,
        hints: ["tɔ = stop"],
        explanation: "Meɖe kuku tɔ de afi = Stop here please."
      },
      {
        id: 11,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter1/mehiã_taksi.m4a"),
        options: [
          { id: 1, text: "I need a taxi" },
          { id: 2, text: "Where is the bus station?" },
          { id: 3, text: "I want to travel to Agbozume" },
          { id: 4, text: "How long does it take?" }
        ],
        correctOptionId: 1,
        hints: ["mehiã = I need"],
        explanation: "You heard 'Mehiã taksi' which means 'I need a taxi'."
      }
    ]
  }
};