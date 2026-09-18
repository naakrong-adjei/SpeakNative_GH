export default {
  id: 6,
  title: "Shopping",
  description: "Learn shopping and market vocabulary in Twi",
  icon: "cart-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "6-1",
      type: "words",
      title: "Asking Prices",
      icon: "pricetag-outline",
      description: "Learn how to ask about prices in Twi",
      words: ["Ɛyɛ sɛn?", "Ne boɔ yɛ den dodo", "Eyɛ fo"],
      vocabulary: [
        {
          id: 67,
          english: "How much is it?",
          native: "Ɛyɛ sɛn?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/ɛyɛ_sɛn.m4a")
        },
        {
          id: 68,
          english: "It is too expensive",
          native: "Ne boɔ yɛ den dodo",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/ne_boɔ_yɛ_den_dodo.m4a")
        },
        {
          id: 69,
          english: "It is cheap",
          native: "Eyɛ fo",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/eyɛ_fo.m4a")
        }
      ],
      questions: [
        {
          id: 601,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'How much is it?' in Twi?",
          options: [
            { id: 3, text: "Eyɛ fo" },
            { id: 1, text: "Ɛyɛ sɛn?" },
            { id: 4, text: "Te me so" },
            { id: 2, text: "Ne boɔ yɛ den dodo" }
          ],
          correctOptionId: 1,
          hints: ["Question about price"],
          explanation: "Ɛyɛ sɛn? = How much is it? in Twi."
        },
        {
          id: 602,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/ne_boɔ_yɛ_den_dodo.m4a"),
          options: [
            { id: 4, text: "Reduce the price" },
            { id: 2, text: "It is too expensive" },
            { id: 1, text: "How much is it?" },
            { id: 3, text: "It is cheap" }
          ],
          correctOptionId: 2,
          hints: ["den dodo = too much"],
          explanation: "You heard 'Ne boɔ yɛ den dodo' which means 'It is too expensive' in Twi."
        },
        {
          id: 603,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'It is cheap' in Twi?",
          options: [
            { id: 4, text: "Wowɔ nsesa?" },
            { id: 2, text: "Ne boɔ yɛ den dodo" },
            { id: 3, text: "Eyɛ fo" },
            { id: 1, text: "Ɛyɛ sɛn?" }
          ],
          correctOptionId: 3,
          hints: ["fo = cheap"],
          explanation: "Eyɛ fo = It is cheap in Twi."
        }
      ]
    },

    {
      id: "6-2",
      type: "phrases",
      title: "Bargaining",
      icon: "people-outline",
      description: "Learn how to bargain at the market in Twi",
      words: ["Te me so", "Wowɔ nsesa?", "Kyerɛ me foforɔ"],
      vocabulary: [
        {
          id: 70,
          english: "Reduce the price",
          native: "Te me so",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/te_me_so.m4a")
        },
        {
          id: 71,
          english: "Do you have change?",
          native: "Wowɔ nsesa?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/wowɔ_nsesa.m4a")
        },
        {
          id: 72,
          english: "Show me another one",
          native: "Kyerɛ me foforɔ",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/kyerɛ_me_foforɔ.m4a")
        }
      ],
      questions: [
        {
          id: 604,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Reduce the price' in Twi?",
          options: [
            { id: 2, text: "Wowɔ nsesa?" },
            { id: 4, text: "Ɛyɛ sɛn?" },
            { id: 1, text: "Te me so" },
            { id: 3, text: "Kyerɛ me foforɔ" }
          ],
          correctOptionId: 1,
          hints: ["Te me so = reduce it for me"],
          explanation: "Te me so = Reduce the price in Twi."
        },
        {
          id: 605,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/wowɔ_nsesa.m4a"),
          options: [
            { id: 3, text: "Show me another one" },
            { id: 1, text: "Reduce the price" },
            { id: 4, text: "I will take it" },
            { id: 2, text: "Do you have change?" }
          ],
          correctOptionId: 2,
          hints: ["nsesa = change"],
          explanation: "You heard 'Wowɔ nsesa?' which means 'Do you have change?' in Twi."
        },
        {
          id: 606,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Show me another one' in Twi?",
          options: [
            { id: 4, text: "Kyekyere ma me" },
            { id: 3, text: "Kyerɛ me foforɔ" },
            { id: 1, text: "Te me so" },
            { id: 2, text: "Wowɔ nsesa?" }
          ],
          correctOptionId: 3,
          hints: ["kyerɛ = show", "foforɔ = another"],
          explanation: "Kyerɛ me foforɔ = Show me another one in Twi."
        }
      ]
    },

    {
      id: "6-3",
      type: "phrases",
      title: "Buying It",
      icon: "bag-outline",
      description: "Learn how to complete a purchase in Twi",
      words: ["Mepɛ sɛ metɔ wei", "Mɛfa", "Kyekyere ma me"],
      vocabulary: [
        {
          id: 73,
          english: "I want to buy this",
          native: "Mepɛ sɛ metɔ wei",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/mepɛ_sɛ_metɔ_wei.m4a")
        },
        {
          id: 74,
          english: "I will take it",
          native: "Mɛfa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/mɛfa.m4a")
        },
        {
          id: 75,
          english: "Wrap it for me",
          native: "Kyekyere ma me",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/kyekyere_ma_me.m4a")
        }
      ],
      questions: [
        {
          id: 607,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I want to buy this' in Twi?",
          options: [
            { id: 3, text: "Kyekyere ma me" },
            { id: 4, text: "Merehwɛ kwa" },
            { id: 1, text: "Mepɛ sɛ metɔ wei" },
            { id: 2, text: "Mɛfa" }
          ],
          correctOptionId: 1,
          hints: ["Mepɛ sɛ = I want to", "metɔ = I buy"],
          explanation: "Mepɛ sɛ metɔ wei = I want to buy this in Twi."
        },
        {
          id: 608,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/mɛfa.m4a"),
          options: [
            { id: 1, text: "I want to buy this" },
            { id: 2, text: "I will take it" },
            { id: 4, text: "I am just looking" },
            { id: 3, text: "Wrap it for me" }
          ],
          correctOptionId: 2,
          hints: ["Mɛfa = I will take it"],
          explanation: "You heard 'Mɛfa' which means 'I will take it' in Twi."
        },
        {
          id: 609,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Wrap it for me' in Twi?",
          options: [
            { id: 4, text: "Te me so" },
            { id: 2, text: "Mɛfa" },
            { id: 3, text: "Kyekyere ma me" },
            { id: 1, text: "Mepɛ sɛ metɔ wei" }
          ],
          correctOptionId: 3,
          hints: ["Kyekyere = wrap", "ma me = for me"],
          explanation: "Kyekyere ma me = Wrap it for me in Twi."
        }
      ]
    },

    {
      id: "6-4",
      type: "words",
      title: "Market Words",
      icon: "storefront-outline",
      description: "Learn essential market vocabulary in Twi",
      words: ["Merehwɛ kwa", "Dwam", "Sika"],
      vocabulary: [
        {
          id: 76,
          english: "I am just looking",
          native: "Merehwɛ kwa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/merehwɛ_kwa.m4a")
        },
        {
          id: 77,
          english: "Market",
          native: "Dwam",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/dwam.m4a")
        },
        {
          id: 78,
          english: "Money",
          native: "Sika",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/sika.m4a")
        }
      ],
      questions: [
        {
          id: 610,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am just looking' in Twi?",
          options: [
            { id: 2, text: "Dwam" },
            { id: 4, text: "Ɛyɛ sɛn?" },
            { id: 1, text: "Merehwɛ kwa" },
            { id: 3, text: "Sika" }
          ],
          correctOptionId: 1,
          hints: ["hwɛ = look", "kwa = just"],
          explanation: "Merehwɛ kwa = I am just looking in Twi."
        },
        {
          id: 611,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/dwam.m4a"),
          options: [
            { id: 3, text: "Change" },
            { id: 1, text: "Market" },
            { id: 4, text: "Price" },
            { id: 2, text: "Money" }
          ],
          correctOptionId: 1,
          hints: ["Where you buy things"],
          explanation: "You heard 'Dwam' which means Market in Twi."
        },
        {
          id: 612,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Money' in Twi?",
          options: [
            { id: 3, text: "Nsesa" },
            { id: 1, text: "Dwam" },
            { id: 2, text: "Sika" },
            { id: 4, text: "Boɔ" }
          ],
          correctOptionId: 2,
          hints: ["What you pay with"],
          explanation: "Sika = Money in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-6",
    title: "Review: Shopping",
    icon: "refresh-outline",
    description: "Review all the shopping and market vocabulary you've learned",
    questions: [
      {
        id: 613,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you ask 'How much is it?' in Twi?",
        options: [
          { id: 4, text: "Te me so" },
          { id: 2, text: "Ne boɔ yɛ den dodo" },
          { id: 1, text: "Ɛyɛ sɛn?" },
          { id: 3, text: "Eyɛ fo" }
        ],
        correctOptionId: 1,
        hints: ["Question about price"],
        explanation: "Ɛyɛ sɛn? = How much is it?"
      },
      {
        id: 614,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/kyerɛ_me_foforɔ.m4a"),
        options: [
          { id: 1, text: "Reduce the price" },
          { id: 3, text: "Show me another one" },
          { id: 4, text: "I will take it" },
          { id: 2, text: "Do you have change?" }
        ],
        correctOptionId: 3,
        hints: ["foforɔ = another"],
        explanation: "You heard 'Kyerɛ me foforɔ' which means 'Show me another one'."
      },
      {
        id: 615,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'It is too expensive' in Twi?",
        options: [
          { id: 3, text: "Eyɛ fo" },
          { id: 2, text: "Ne boɔ yɛ den dodo" },
          { id: 4, text: "Te me so" },
          { id: 1, text: "Ɛyɛ sɛn?" }
        ],
        correctOptionId: 2,
        hints: ["den dodo = too much"],
        explanation: "Ne boɔ yɛ den dodo = It is too expensive."
      },
      {
        id: 616,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter6/kyekyere_ma_me.m4a"),
        options: [
          { id: 4, text: "I am just looking" },
          { id: 3, text: "Wrap it for me" },
          { id: 1, text: "I want to buy this" },
          { id: 2, text: "I will take it" }
        ],
        correctOptionId: 3,
        hints: ["Kyekyere = wrap"],
        explanation: "You heard 'Kyekyere ma me' which means 'Wrap it for me'."
      },
      {
        id: 617,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I want to buy this' in Twi?",
        options: [
          { id: 2, text: "Mɛfa" },
          { id: 4, text: "Merehwɛ kwa" },
          { id: 3, text: "Kyekyere ma me" },
          { id: 1, text: "Mepɛ sɛ metɔ wei" }
        ],
        correctOptionId: 1,
        hints: ["metɔ = I buy"],
        explanation: "Mepɛ sɛ metɔ wei = I want to buy this."
      },
      {
        id: 618,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Market' in Twi?",
        options: [
          { id: 4, text: "Boɔ" },
          { id: 1, text: "Dwam" },
          { id: 3, text: "Nsesa" },
          { id: 2, text: "Sika" }
        ],
        correctOptionId: 1,
        hints: ["Where you buy things"],
        explanation: "Dwam = Market."
      },
      {
        id: 619,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Money' in Twi?",
        options: [
          { id: 3, text: "Nsesa" },
          { id: 2, text: "Sika" },
          { id: 4, text: "Boɔ" },
          { id: 1, text: "Dwam" }
        ],
        correctOptionId: 2,
        hints: ["What you pay with"],
        explanation: "Sika = Money."
      },
      {
        id: 620,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Do you have change?' in Twi?",
        options: [
          { id: 4, text: "Mɛfa" },
          { id: 1, text: "Te me so" },
          { id: 2, text: "Wowɔ nsesa?" },
          { id: 3, text: "Kyerɛ me foforɔ" }
        ],
        correctOptionId: 2,
        hints: ["nsesa = change"],
        explanation: "Wowɔ nsesa? = Do you have change?"
      },
      {
        id: 621,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I will take it' in Twi?",
        options: [
          { id: 3, text: "Kyekyere ma me" },
          { id: 2, text: "Mɛfa" },
          { id: 4, text: "Merehwɛ kwa" },
          { id: 1, text: "Mepɛ sɛ metɔ wei" }
        ],
        correctOptionId: 2,
        hints: ["Mɛfa = I will take it"],
        explanation: "Mɛfa = I will take it."
      },
      {
        id: 622,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Reduce the price' in Twi?",
        options: [
          { id: 2, text: "Wowɔ nsesa?" },
          { id: 1, text: "Te me so" },
          { id: 4, text: "Ɛyɛ sɛn?" },
          { id: 3, text: "Kyerɛ me foforɔ" }
        ],
        correctOptionId: 1,
        hints: ["Te me so = reduce it for me"],
        explanation: "Te me so = Reduce the price."
      }
    ]
  }
};