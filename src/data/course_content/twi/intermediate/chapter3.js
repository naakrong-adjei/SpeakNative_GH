export default {
  id: 3,
  title: "Market Negotiation",
  description: "Learn market negotiation vocabulary in Twi",
  icon: "handshake-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "3-1",
      type: "phrases",
      title: "Opening the Bargain",
      icon: "tag-outline",
      description: "Learn how to start bargaining and ask for a better price in Twi",
      words: ["Ne krakra", "Wobɛtumi de kakra aka ho?", "Te so ma me"],
      vocabulary: [
        {
          id: 179,
          english: "Your last price",
          native: "Ne krakra",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/ne_krakra.m4a")
        },
        {
          id: 180,
          english: "Can you add a little?",
          native: "Wobɛtumi de kakra aka ho?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/wobɛtumi_de_kakra_aka_ho.m4a")
        },
        {
          id: 181,
          english: "Give me a discount",
          native: "Te so ma me",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/te_so_ma_me.m4a")
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'Your last price?' in Twi?",
          options: [
            { id: 1, text: "Ne krakra" },
            { id: 2, text: "Wobɛtumi de kakra aka ho?" },
            { id: 3, text: "Te so ma me" },
            { id: 4, text: "Mɛtɔ mmienu" }
          ],
          correctOptionId: 1,
          hints: ["Question about the final price"],
          explanation: "Ne krakra = Your last price? in Twi."
        },
        {
          id: 302,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/wobɛtumi_de_kakra_aka_ho.m4a"),
          options: [
            { id: 1, text: "Your last price?" },
            { id: 2, text: "Can you add a little?" },
            { id: 3, text: "Give me a discount" },
            { id: 4, text: "I will buy two" }
          ],
          correctOptionId: 2,
          hints: ["kakra = a little"],
          explanation: "You heard 'Wobɛtumi de kakra aka ho?' which means 'Can you add a little?' in Twi."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Give me a discount' in Twi?",
          options: [
            { id: 1, text: "Ne krakra" },
            { id: 2, text: "Wobɛtumi de kakra aka ho?" },
            { id: 3, text: "Te so ma me" },
            { id: 4, text: "Kan sika no" }
          ],
          correctOptionId: 3,
          hints: ["Te so = reduce", "ma me = give me"],
          explanation: "Te so ma me = Give me a discount in Twi."
        },
        {
          id: 304,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/te_so_ma_me.m4a"),
          options: [
            { id: 1, text: "Your last price?" },
            { id: 2, text: "Can you add a little?" },
            { id: 3, text: "Give me a discount" },
            { id: 4, text: "Keep the change" }
          ],
          correctOptionId: 3,
          hints: ["Te so = reduce"],
          explanation: "You heard 'Te so ma me' which means 'Give me a discount' in Twi."
        }
      ]
    },

    {
      id: "3-2",
      type: "phrases",
      title: "Making Offers",
      icon: "scale-outline",
      description: "Learn how to make offers while bargaining in Twi",
      words: ["Mɛtɔ mmienu", "Neɛ metumi amaa ne no", "Metɔɔ no fofoofo wɔ hɔ"],
      vocabulary: [
        {
          id: 182,
          english: "I will buy two",
          native: "Mɛtɔ mmienu",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/mɛtɔ_mmienu.m4a")
        },
        {
          id: 183,
          english: "That is my final offer",
          native: "Neɛ metumi amaa ne no",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/neɛ_metumi_amaa_ne_no.m4a")
        },
        {
          id: 184,
          english: "I bought it cheaper there",
          native: "Metɔɔ no fofoofo wɔ hɔ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/metɔɔ_no_fofoofo_wɔ_hɔ.m4a")
        }
      ],
      questions: [
        {
          id: 305,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I will buy two' in Twi?",
          options: [
            { id: 1, text: "Mɛtɔ mmienu" },
            { id: 2, text: "Neɛ metumi amaa ne no" },
            { id: 3, text: "Metɔɔ no fofoofo wɔ hɔ" },
            { id: 4, text: "Me sika sua" }
          ],
          correctOptionId: 1,
          hints: ["Mɛtɔ = I will buy", "mmienu = two"],
          explanation: "Mɛtɔ mmienu = I will buy two in Twi."
        },
        {
          id: 306,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/neɛ_metumi_amaa_ne_no.m4a"),
          options: [
            { id: 1, text: "I will buy two" },
            { id: 2, text: "That is my final offer" },
            { id: 3, text: "I bought it cheaper there" },
            { id: 4, text: "I don't have enough money" }
          ],
          correctOptionId: 2,
          hints: ["metumi = I can", "amaa = offer"],
          explanation: "You heard 'Neɛ metumi amaa ne no' which means 'That is my final offer' in Twi."
        },
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I bought it cheaper there' in Twi?",
          options: [
            { id: 1, text: "Mɛtɔ mmienu" },
            { id: 2, text: "Neɛ metumi amaa ne no" },
            { id: 3, text: "Metɔɔ no fofoofo wɔ hɔ" },
            { id: 4, text: "Te so ma me" }
          ],
          correctOptionId: 3,
          hints: ["fofoofo = cheaper"],
          explanation: "Metɔɔ no fofoofo wɔ hɔ = I bought it cheaper there in Twi."
        },
        {
          id: 308,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/mɛtɔ_mmienu.m4a"),
          options: [
            { id: 1, text: "I will buy two" },
            { id: 2, text: "That is my final offer" },
            { id: 3, text: "I bought it cheaper there" },
            { id: 4, text: "Count the money" }
          ],
          correctOptionId: 1,
          hints: ["mmienu = two"],
          explanation: "You heard 'Mɛtɔ mmienu' which means 'I will buy two' in Twi."
        }
      ]
    },

    {
      id: "3-3",
      type: "phrases",
      title: "Payment & Finishing the Purchase",
      icon: "banknote-outline",
      description: "Learn how to handle payment and finish a purchase in Twi",
      words: ["Me sika sua", "Kan sika no", "Fa nsesa no", "Ɛyɛ mono"],
      vocabulary: [
        {
          id: 185,
          english: "I don't have enough money",
          native: "Me sika sua",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/me_sika_sua.m4a")
        },
        {
          id: 186,
          english: "Count the money",
          native: "Kan sika no",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/kan_sika_no.m4a")
        },
        {
          id: 187,
          english: "Keep the change",
          native: "Fa nsesa no",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/fa_nsesa_no.m4a")
        },
        {
          id: 188,
          english: "It is fresh",
          native: "Ɛyɛ mono",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/ɛyɛ_mono.m4a")
        }
      ],
      questions: [
        {
          id: 309,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I don't have enough money' in Twi?",
          options: [
            { id: 1, text: "Me sika sua" },
            { id: 2, text: "Kan sika no" },
            { id: 3, text: "Fa nsesa no" },
            { id: 4, text: "Ɛyɛ mono" }
          ],
          correctOptionId: 1,
          hints: ["sika = money", "sua = small/little"],
          explanation: "Me sika sua = I don't have enough money in Twi."
        },
        {
          id: 310,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/kan_sika_no.m4a"),
          options: [
            { id: 1, text: "I don't have enough money" },
            { id: 2, text: "Count the money" },
            { id: 3, text: "Keep the change" },
            { id: 4, text: "It is fresh" }
          ],
          correctOptionId: 2,
          hints: ["Kan = count", "sika = money"],
          explanation: "You heard 'Kan sika no' which means 'Count the money' in Twi."
        },
        {
          id: 311,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Keep the change' in Twi?",
          options: [
            { id: 1, text: "Me sika sua" },
            { id: 2, text: "Kan sika no" },
            { id: 3, text: "Fa nsesa no" },
            { id: 4, text: "Mɛtɔ mmienu" }
          ],
          correctOptionId: 3,
          hints: ["nsesa = change"],
          explanation: "Fa nsesa no = Keep the change in Twi."
        },
        {
          id: 312,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/ɛyɛ_mono.m4a"),
          options: [
            { id: 1, text: "I don't have enough money" },
            { id: 2, text: "Count the money" },
            { id: 3, text: "Keep the change" },
            { id: 4, text: "It is fresh" }
          ],
          correctOptionId: 4,
          hints: ["mono = fresh"],
          explanation: "You heard 'Ɛyɛ mono' which means 'It is fresh' in Twi."
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
        id: 313,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you ask 'Your last price?' in Twi?",
        options: [
          { id: 1, text: "Ne krakra" },
          { id: 2, text: "Wobɛtumi de kakra aka ho?" },
          { id: 3, text: "Te so ma me" },
          { id: 4, text: "Mɛtɔ mmienu" }
        ],
        correctOptionId: 1,
        hints: ["Question about final price"],
        explanation: "Ne krakra = Your last price?"
      },
      {
        id: 314,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/metɔɔ_no_fofoofo_wɔ_hɔ.m4a"),
        options: [
          { id: 1, text: "I will buy two" },
          { id: 2, text: "That is my final offer" },
          { id: 3, text: "I bought it cheaper there" },
          { id: 4, text: "Keep the change" }
        ],
        correctOptionId: 3,
        hints: ["fofoofo = cheaper"],
        explanation: "You heard 'Metɔɔ no fofoofo wɔ hɔ' which means 'I bought it cheaper there'."
      },
      {
        id: 315,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Can you add a little?' in Twi?",
        options: [
          { id: 1, text: "Ne krakra" },
          { id: 2, text: "Wobɛtumi de kakra aka ho?" },
          { id: 3, text: "Te so ma me" },
          { id: 4, text: "Kan sika no" }
        ],
        correctOptionId: 2,
        hints: ["kakra = a little"],
        explanation: "Wobɛtumi de kakra aka ho? = Can you add a little?"
      },
      {
        id: 316,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/fa_nsesa_no.m4a"),
        options: [
          { id: 1, text: "I don't have enough money" },
          { id: 2, text: "Count the money" },
          { id: 3, text: "Keep the change" },
          { id: 4, text: "It is fresh" }
        ],
        correctOptionId: 3,
        hints: ["nsesa = change"],
        explanation: "You heard 'Fa nsesa no' which means 'Keep the change'."
      },
      {
        id: 317,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Give me a discount' in Twi?",
        options: [
          { id: 1, text: "Ne krakra" },
          { id: 2, text: "Wobɛtumi de kakra aka ho?" },
          { id: 3, text: "Te so ma me" },
          { id: 4, text: "Me sika sua" }
        ],
        correctOptionId: 3,
        hints: ["Te so = reduce"],
        explanation: "Te so ma me = Give me a discount."
      },
      {
        id: 318,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I will buy two' in Twi?",
        options: [
          { id: 1, text: "Mɛtɔ mmienu" },
          { id: 2, text: "Neɛ metumi amaa ne no" },
          { id: 3, text: "Metɔɔ no fofoofo wɔ hɔ" },
          { id: 4, text: "Me sika sua" }
        ],
        correctOptionId: 1,
        hints: ["mmienu = two"],
        explanation: "Mɛtɔ mmienu = I will buy two."
      },
      {
        id: 319,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'That is my final offer' in Twi?",
        options: [
          { id: 1, text: "Mɛtɔ mmienu" },
          { id: 2, text: "Neɛ metumi amaa ne no" },
          { id: 3, text: "Metɔɔ no fofoofo wɔ hɔ" },
          { id: 4, text: "Ɛyɛ mono" }
        ],
        correctOptionId: 2,
        hints: ["metumi = I can"],
        explanation: "Neɛ metumi amaa ne no = That is my final offer."
      },
      {
        id: 320,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I don't have enough money' in Twi?",
        options: [
          { id: 1, text: "Me sika sua" },
          { id: 2, text: "Kan sika no" },
          { id: 3, text: "Fa nsesa no" },
          { id: 4, text: "Ɛyɛ mono" }
        ],
        correctOptionId: 1,
        hints: ["sika = money"],
        explanation: "Me sika sua = I don't have enough money."
      },
      {
        id: 321,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Count the money' in Twi?",
        options: [
          { id: 1, text: "Me sika sua" },
          { id: 2, text: "Kan sika no" },
          { id: 3, text: "Fa nsesa no" },
          { id: 4, text: "Mɛtɔ mmienu" }
        ],
        correctOptionId: 2,
        hints: ["Kan = count"],
        explanation: "Kan sika no = Count the money."
      },
      {
        id: 322,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter3/ne_krakra.m4a"),
        options: [
          { id: 1, text: "Your last price?" },
          { id: 2, text: "Can you add a little?" },
          { id: 3, text: "Give me a discount" },
          { id: 4, text: "It is fresh" }
        ],
        correctOptionId: 1,
        hints: ["Question about final price"],
        explanation: "You heard 'Ne krakra' which means 'Your last price?'."
      },
      {
        id: 323,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'It is fresh' in Twi?",
        options: [
          { id: 1, text: "Me sika sua" },
          { id: 2, text: "Kan sika no" },
          { id: 3, text: "Fa nsesa no" },
          { id: 4, text: "Ɛyɛ mono" }
        ],
        correctOptionId: 4,
        hints: ["mono = fresh"],
        explanation: "Ɛyɛ mono = It is fresh."
      }
    ]
  }
};