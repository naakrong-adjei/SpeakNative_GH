export default {
  id: 3,
  title: "Market Negotiation",
  description: "Learn how to negotiate at the market in Ewe",
  icon: "cash-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "3-1",
      type: "words",
      title: "Opening the Bargain",
      icon: "pricetag-outline",
      description: "Learn how to start a negotiation in Ewe",
      words: ["Kae nye wasi mamlɛtɔ?", "Àte ŋu atsɔ vie de akpee?", "Ɖe asi le dzi nam"],
      vocabulary: [
        {
          id: 156,
          english: "What is your last price?",
          native: "Kae nye wasi mamlɛtɔ?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/kae_nye_wasi_mamlɛtɔ.m4a")
        },
        {
          id: 158,
          english: "Can you add a little?",
          native: "Àte ŋu atsɔ vie de akpee?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/àte_ŋu_atsɔ_vie_de_akpee.m4a")
        },
        {
          id: 160,
          english: "Give me a discount",
          native: "Ɖe asi le dzi nam",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/ɖe_asi_le_dzi_nam.m4a")
        }
      ],
      questions: [
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Give me a discount' in Ewe?",
          options: [
            { id: 1, text: "Emae nye nye nya mamlɛtɔ" },
            { id: 2, text: "Ɖe asi le dzi nam" },
            { id: 3, text: "Kae nye wasi mamlɛtɔ?" },
            { id: 4, text: "Àte ŋu atsɔ vie de akpee?" }
          ],
          correctOptionId: 2,
          hints: ["Ɖe = reduce", "asi = price", "dzi = on"],
          explanation: "Ɖe asi le dzi nam = Give me a discount in Ewe."
        },
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'What is your last price?' in Ewe?",
          options: [
            { id: 1, text: "Maƒle ɔmeve" },
            { id: 2, text: "Ɖe asi le dzi nam" },
            { id: 3, text: "Àte ŋu atsɔ vie de akpee?" },
            { id: 4, text: "Kae nye wasi mamlɛtɔ?" }
          ],
          correctOptionId: 4,
          hints: ["wasi = price", "mamlɛtɔ = last"],
          explanation: "Kae nye wasi mamlɛtɔ? = What is your last price? in Ewe."
        },
        {
          id: 302,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/àte_ŋu_atsɔ_vie_de_akpee.m4a"),
          options: [
            { id: 1, text: "Give me a discount" },
            { id: 2, text: "I will buy two" },
            { id: 3, text: "Can you add a little?" },
            { id: 4, text: "What is your last price?" }
          ],
          correctOptionId: 3,
          hints: ["Àte ŋu = Can you", "vie = a little"],
          explanation: "You heard 'Àte ŋu atsɔ vie de akpee?' which means 'Can you add a little?' in Ewe."
        }
      ]
    },

    {
      id: "3-2",
      type: "words",
      title: "Making Offers",
      icon: "scale-outline",
      description: "Learn how to make offers during negotiation in Ewe",
      words: ["Maƒle ɔmeve", "Emae nye nye nya mamlɛtɔ", "Meƒlee bɔbɔe le afima"],
      vocabulary: [
        {
          id: 157,
          english: "I will buy two",
          native: "Maƒle ɔmeve",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/maƒle_ɔmeve.m4a")
        },
        {
          id: 159,
          english: "That is my final offer",
          native: "Emae nye nye nya mamlɛtɔ",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/emae_nye_nye_nya_mamlɛtɔ.m4a")
        },
        {
          id: 163,
          english: "I bought it cheaper there",
          native: "Meƒlee bɔbɔe le afima",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/meƒlee_bɔbɔe_le_afima.m4a")
        }
      ],
      questions: [
        {
          id: 305,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/emae_nye_nye_nya_mamlɛtɔ.m4a"),
          options: [
            { id: 1, text: "Give me a discount" },
            { id: 2, text: "I bought it cheaper there" },
            { id: 3, text: "That is my final offer" },
            { id: 4, text: "I will buy two" }
          ],
          correctOptionId: 3,
          hints: ["nya = offer", "mamlɛtɔ = final"],
          explanation: "You heard 'Emae nye nye nya mamlɛtɔ' which means 'That is my final offer' in Ewe."
        },
        {
          id: 306,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I bought it cheaper there' in Ewe?",
          options: [
            { id: 1, text: "Kae nye wasi mamlɛtɔ?" },
            { id: 2, text: "Meƒlee bɔbɔe le afima" },
            { id: 3, text: "Maƒle ɔmeve" },
            { id: 4, text: "Emae nye nye nya mamlɛtɔ" }
          ],
          correctOptionId: 2,
          hints: ["meƒlee = I bought", "bɔbɔe = cheaper"],
          explanation: "Meƒlee bɔbɔe le afima = I bought it cheaper there in Ewe."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I will buy two' in Ewe?",
          options: [
            { id: 1, text: "Meƒlee bɔbɔe le afima" },
            { id: 2, text: "Maƒle ɔmeve" },
            { id: 3, text: "Kae nye wasi mamlɛtɔ?" },
            { id: 4, text: "Emae nye nye nya mamlɛtɔ" }
          ],
          correctOptionId: 2,
          hints: ["maƒle = I will buy", "ɔmeve = two"],
          explanation: "Maƒle ɔmeve = I will buy two in Ewe."
        }
      ]
    },

    {
      id: "3-3",
      type: "words",
      title: "Closing the Deal",
      icon: "cash-outline",
      description: "Learn how to close a deal and handle money in Ewe",
      words: ["Ga su gbɔ mele ashinye o", "Ele yeyee?", "Xlẽ ga", "Tsɔ ga gbagba"],
      vocabulary: [
        {
          id: 161,
          english: "I don't have enough money",
          native: "Ga su gbɔ mele ashinye o",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/ga_su_gbɔ_mele_ashinye_o.m4a")
        },
        {
          id: 162,
          english: "Is it fresh?",
          native: "Ele yeyee?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/ele_yeyee.m4a")
        },
        {
          id: 164,
          english: "Count the money",
          native: "Xlẽ ga",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/xlẽ_ga.m4a")
        },
        {
          id: 165,
          english: "Keep the change",
          native: "Tsɔ ga gbagba",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/tsɔ_ga_gbagba.m4a")
        }
      ],
      questions: [
        {
          id: 309,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Keep the change' in Ewe?",
          options: [
            { id: 1, text: "Ga su gbɔ mele ashinye o" },
            { id: 2, text: "Tsɔ ga gbagba" },
            { id: 3, text: "Ele yeyee?" },
            { id: 4, text: "Xlẽ ga" }
          ],
          correctOptionId: 2,
          hints: ["tsɔ = take/keep", "ga = money", "gbagba = change"],
          explanation: "Tsɔ ga gbagba = Keep the change in Ewe."
        },
        {
          id: 308,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/ele_yeyee.m4a"),
          options: [
            { id: 1, text: "Count the money" },
            { id: 2, text: "I don't have enough money" },
            { id: 3, text: "Keep the change" },
            { id: 4, text: "Is it fresh?" }
          ],
          correctOptionId: 4,
          hints: ["yeyee = fresh"],
          explanation: "You heard 'Ele yeyee?' which means 'Is it fresh?' in Ewe."
        },
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I don't have enough money' in Ewe?",
          options: [
            { id: 1, text: "Xlẽ ga" },
            { id: 2, text: "Ga su gbɔ mele ashinye o" },
            { id: 3, text: "Tsɔ ga gbagba" },
            { id: 4, text: "Ele yeyee?" }
          ],
          correctOptionId: 2,
          hints: ["ga = money", "su gbɔ = not enough"],
          explanation: "Ga su gbɔ mele ashinye o = I don't have enough money in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-3",
    title: "Review: Market Negotiation",
    icon: "refresh-outline",
    description: "Review all the market negotiation vocabulary you've learned",
    questions: [
      {
        id: 315,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/xlẽ_ga.m4a"),
        options: [
          { id: 1, text: "Keep the change" },
          { id: 2, text: "I don't have enough money" },
          { id: 3, text: "Count the money" },
          { id: 4, text: "Is it fresh?" }
        ],
        correctOptionId: 3,
        hints: ["xlẽ = count"],
        explanation: "You heard 'Xlẽ ga' which means 'Count the money' in Ewe."
      },
      {
        id: 318,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Can you add a little?' in Ewe?",
        options: [
          { id: 1, text: "Maƒle ɔmeve" },
          { id: 2, text: "Ɖe asi le dzi nam" },
          { id: 3, text: "Kae nye wasi mamlɛtɔ?" },
          { id: 4, text: "Àte ŋu atsɔ vie de akpee?" }
        ],
        correctOptionId: 4,
        hints: ["Àte ŋu = Can you", "vie = a little"],
        explanation: "Àte ŋu atsɔ vie de akpee? = Can you add a little?"
      },
      {
        id: 311,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/ɖe_asi_le_dzi_nam.m4a"),
        options: [
          { id: 1, text: "I will buy two" },
          { id: 2, text: "Give me a discount" },
          { id: 3, text: "What is your last price?" },
          { id: 4, text: "Can you add a little?" }
        ],
        correctOptionId: 2,
        hints: ["Ɖe = reduce", "asi = price"],
        explanation: "You heard 'Ɖe asi le dzi nam' which means 'Give me a discount'."
      },
      {
        id: 317,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I don't have enough money' in Ewe?",
        options: [
          { id: 1, text: "Tsɔ ga gbagba" },
          { id: 2, text: "Ele yeyee?" },
          { id: 3, text: "Ga su gbɔ mele ashinye o" },
          { id: 4, text: "Xlẽ ga" }
        ],
        correctOptionId: 3,
        hints: ["ga = money", "su gbɔ = not enough"],
        explanation: "Ga su gbɔ mele ashinye o = I don't have enough money."
      },
      {
        id: 312,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'That is my final offer' in Ewe?",
        options: [
          { id: 1, text: "Emae nye nye nya mamlɛtɔ" },
          { id: 2, text: "Kae nye wasi mamlɛtɔ?" },
          { id: 3, text: "Meƒlee bɔbɔe le afima" },
          { id: 4, text: "Maƒle ɔmeve" }
        ],
        correctOptionId: 1,
        hints: ["nya = offer", "mamlɛtɔ = final"],
        explanation: "Emae nye nye nya mamlɛtɔ = That is my final offer."
      },
      {
        id: 319,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/tsɔ_ga_gbagba.m4a"),
        options: [
          { id: 1, text: "I don't have enough money" },
          { id: 2, text: "Keep the change" },
          { id: 3, text: "Is it fresh?" },
          { id: 4, text: "Count the money" }
        ],
        correctOptionId: 2,
        hints: ["tsɔ = take", "gbagba = change"],
        explanation: "You heard 'Tsɔ ga gbagba' which means 'Keep the change'."
      },
      {
        id: 314,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Is it fresh?' in Ewe?",
        options: [
          { id: 1, text: "Tsɔ ga gbagba" },
          { id: 2, text: "Ele yeyee?" },
          { id: 3, text: "Ga su gbɔ mele ashinye o" },
          { id: 4, text: "Xlẽ ga" }
        ],
        correctOptionId: 2,
        hints: ["yeyee = fresh"],
        explanation: "Ele yeyee? = Is it fresh?"
      },
      {
        id: 310,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'What is your last price?' in Ewe?",
        options: [
          { id: 1, text: "Ɖe asi le dzi nam" },
          { id: 2, text: "Maƒle ɔmeve" },
          { id: 3, text: "Kae nye wasi mamlɛtɔ?" },
          { id: 4, text: "Àte ŋu atsɔ vie de akpee?" }
        ],
        correctOptionId: 3,
        hints: ["wasi = price"],
        explanation: "Kae nye wasi mamlɛtɔ? = What is your last price?"
      },
      {
        id: 33,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter3/meƒlee_bɔbɔe_le_afima.m4a"),
        options: [
          { id: 1, text: "Give me a discount" },
          { id: 2, text: "I will buy two" },
          { id: 3, text: "I bought it cheaper there" },
          { id: 4, text: "That is my final offer" }
        ],
        correctOptionId: 3,
        hints: ["bɔbɔe = cheaper"],
        explanation: "You heard 'Meƒlee bɔbɔe le afima' which means 'I bought it cheaper there'."
      },
      {
        id: 316,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Keep the change' in Ewe?",
        options: [
          { id: 1, text: "Xlẽ ga" },
          { id: 2, text: "Ga su gbɔ mele ashinye o" },
          { id: 3, text: "Ele yeyee?" },
          { id: 4, text: "Tsɔ ga gbagba" }
        ],
        correctOptionId: 4,
        hints: ["gbagba = change"],
        explanation: "Tsɔ ga gbagba = Keep the change."
      }
    ]
  }
};