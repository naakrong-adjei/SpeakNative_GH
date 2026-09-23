export default {
  id: 5,
  title: "Debates & Arguments",
  description: "Learn useful Twi phrases for debates, arguments, agreement, and presenting your case",
  icon: "chatbubbles-outline",
  totalXp: 10,
  difficulty: "Advanced",

  sections: [
    {
      id: "5-1",
      type: "phrases",
      title: "Agreeing & Disagreeing",
      icon: "git-compare-outline",
      description: "Learn how to agree, disagree, and respond to different points in Twi",
      words: [
        "Mempene saa asɛm no so",
        "Mmom deɛ",
        "Woanhunu asɛm no mu",
        "Mepene so kakra"
      ],
      vocabulary: [
        {
          id: 263,
          english: "I disagree with that point",
          native: "Mempene saa asɛm no so",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/mempene_saa_asɛm_no_so.m4a")
        },
        {
          id: 264,
          english: "On the contrary",
          native: "Mmom deɛ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/mmom_deɛ.m4a")
        },
        {
          id: 265,
          english: "He has missed the point",
          native: "Woanhunu asɛm no mu",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/woanhunu_asɛm_no_mu.m4a")
        },
        {
          id: 266,
          english: "I agree to some extent",
          native: "Mepene so kakra",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/mepene_so_kakra.m4a")
        }
      ],
      questions: [
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'He has missed the point' in Twi?",
          options: [
            { id: 1, text: "Mepene so kakra" },
            { id: 2, text: "Woanhunu asɛm no mu" },
            { id: 3, text: "Mmom deɛ" },
            { id: 4, text: "Mempene saa asɛm no so" }
          ],
          correctOptionId: 2,
          hints: ["Woanhunu = he has not understood"],
          explanation: "Woanhunu asɛm no mu = He has missed the point in Twi."
        },
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I disagree with that point' in Twi?",
          options: [
            { id: 1, text: "Mmom deɛ" },
            { id: 2, text: "Mepene so kakra" },
            { id: 3, text: "Mempene saa asɛm no so" },
            { id: 4, text: "Woanhunu asɛm no mu" }
          ],
          correctOptionId: 3,
          hints: ["Mempene = I disagree"],
          explanation: "Mempene saa asɛm no so = I disagree with that point in Twi."
        },
        {
          id: 504,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/mepene_so_kakra.m4a"),
          options: [
            { id: 1, text: "He has missed the point" },
            { id: 2, text: "I agree to some extent" },
            { id: 3, text: "On the contrary" },
            { id: 4, text: "I disagree with that point" }
          ],
          correctOptionId: 2,
          hints: ["kakra = some extent"],
          explanation: "You heard 'Mepene so kakra' which means 'I agree to some extent' in Twi."
        },
        {
          id: 502,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/mmom_deɛ.m4a"),
          options: [
            { id: 1, text: "On the contrary" },
            { id: 2, text: "I disagree with that point" },
            { id: 3, text: "I agree to some extent" },
            { id: 4, text: "He has missed the point" }
          ],
          correctOptionId: 1,
          hints: ["Mmom deɛ = on the contrary"],
          explanation: "You heard 'Mmom deɛ' which means 'On the contrary' in Twi."
        }
      ]
    },

    {
      id: "5-2",
      type: "phrases",
      title: "Making Your Case",
      icon: "megaphone-outline",
      description: "Learn how to present your point, use evidence, and ask for proof in Twi",
      words: [
        "Adanseɛ no foa m'asɛm so",
        "Ma menkyerɛ mensɛm mu pefee",
        "Wo adanseɛ wɔ he?"
      ],
      vocabulary: [
        {
          id: 267,
          english: "The evidence supports my claim",
          native: "Adanseɛ no foa m'asɛm so",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/adanseɛ_no_foa_m_asɛm_so.m4a")
        },
        {
          id: 268,
          english: "Let me make my point clear",
          native: "Ma menkyerɛ mensɛm mu pefee",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/ma_menkyerɛ_m_asɛm_mu_pefee.m4a")
        },
        {
          id: 269,
          english: "Where is your proof?",
          native: "Wo adanseɛ wɔ he?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/wo_adanseɛ_wɔ_he.m4a")
        }
      ],
      questions: [
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Where is your proof?' in Twi?",
          options: [
            { id: 1, text: "Mmom deɛ" },
            { id: 2, text: "Wo adanseɛ wɔ he?" },
            { id: 3, text: "Adanseɛ no foa m'asɛm so" },
            { id: 4, text: "Ma menkyerɛ mensɛm mu pefee" }
          ],
          correctOptionId: 2,
          hints: ["adanseɛ = proof"],
          explanation: "Wo adanseɛ wɔ he? = Where is your proof? in Twi."
        },
        {
          id: 506,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/ma_menkyerɛ_m_asɛm_mu_pefee.m4a"),
          options: [
            { id: 1, text: "Where is your proof?" },
            { id: 2, text: "The evidence supports my claim" },
            { id: 3, text: "I agree to some extent" },
            { id: 4, text: "Let me make my point clear" }
          ],
          correctOptionId: 4,
          hints: ["pefee = clear"],
          explanation: "You heard 'Ma menkyerɛ mensɛm mu pefee' which means 'Let me make my point clear' in Twi."
        },
        {
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The evidence supports my claim' in Twi?",
          options: [
            { id: 1, text: "Wo adanseɛ wɔ he?" },
            { id: 2, text: "Mempene saa asɛm no so" },
            { id: 3, text: "Adanseɛ no foa m'asɛm so" },
            { id: 4, text: "Ma menkyerɛ mensɛm mu pefee" }
          ],
          correctOptionId: 3,
          hints: ["adanseɛ = evidence", "foa = supports"],
          explanation: "Adanseɛ no foa m'asɛm so = The evidence supports my claim in Twi."
        },
        {
          id: 508,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/adanseɛ_no_foa_m_asɛm_so.m4a"),
          options: [
            { id: 1, text: "Let me make my point clear" },
            { id: 2, text: "The evidence supports my claim" },
            { id: 3, text: "I disagree with that point" },
            { id: 4, text: "Where is your proof?" }
          ],
          correctOptionId: 2,
          hints: ["adanseɛ = evidence"],
          explanation: "You heard 'Adanseɛ no foa m'asɛm so' which means 'The evidence supports my claim' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-5",
    title: "Review: Debates & Arguments",
    icon: "refresh-outline",
    description: "Review the debate and argument phrases you've learned for expressing agreement, disagreement, evidence, and proof",
    questions: [
      {
        id: 513,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'He has missed the point' in Twi?",
        options: [
          { id: 1, text: "Adanseɛ no foa m'asɛm so" },
          { id: 2, text: "Mempene saa asɛm no so" },
          { id: 3, text: "Woanhunu asɛm no mu" },
          { id: 4, text: "Mmom deɛ" }
        ],
        correctOptionId: 3,
        hints: ["Woanhunu = he has not understood"],
        explanation: "Woanhunu asɛm no mu = He has missed the point."
      },
      {
        id: 510,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/wo_adanseɛ_wɔ_he.m4a"),
        options: [
          { id: 1, text: "Where is your proof?" },
          { id: 2, text: "On the contrary" },
          { id: 3, text: "The evidence supports my claim" },
          { id: 4, text: "Let me make my point clear" }
        ],
        correctOptionId: 1,
        hints: ["adanseɛ = proof"],
        explanation: "You heard 'Wo adanseɛ wɔ he?' which means 'Where is your proof?'."
      },
      {
        id: 515,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The evidence supports my claim' in Twi?",
        options: [
          { id: 1, text: "Ma menkyerɛ mensɛm mu pefee" },
          { id: 2, text: "Adanseɛ no foa m'asɛm so" },
          { id: 3, text: "Mempene saa asɛm no so" },
          { id: 4, text: "Wo adanseɛ wɔ he?" }
        ],
        correctOptionId: 2,
        hints: ["adanseɛ = evidence"],
        explanation: "Adanseɛ no foa m'asɛm so = The evidence supports my claim."
      },
      {
        id: 511,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'On the contrary' in Twi?",
        options: [
          { id: 1, text: "Woanhunu asɛm no mu" },
          { id: 2, text: "Mepene so kakra" },
          { id: 3, text: "Mmom deɛ" },
          { id: 4, text: "Mempene saa asɛm no so" }
        ],
        correctOptionId: 3,
        hints: ["Mmom deɛ = on the contrary"],
        explanation: "Mmom deɛ = On the contrary."
      },
      {
        id: 516,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Let me make my point clear' in Twi?",
        options: [
          { id: 1, text: "Mepene so kakra" },
          { id: 2, text: "Wo adanseɛ wɔ he?" },
          { id: 3, text: "Adanseɛ no foa m'asɛm so" },
          { id: 4, text: "Ma menkyerɛ mensɛm mu pefee" }
        ],
        correctOptionId: 4,
        hints: ["pefee = clear"],
        explanation: "Ma menkyerɛ mensɛm mu pefee = Let me make my point clear."
      },
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I disagree with that point' in Twi?",
        options: [
          { id: 1, text: "Mempene saa asɛm no so" },
          { id: 2, text: "Mmom deɛ" },
          { id: 3, text: "Mepene so kakra" },
          { id: 4, text: "Woanhunu asɛm no mu" }
        ],
        correctOptionId: 1,
        hints: ["Mempene = I disagree"],
        explanation: "Mempene saa asɛm no so = I disagree with that point."
      },
      {
        id: 514,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I agree to some extent' in Twi?",
        options: [
          { id: 1, text: "Mmom deɛ" },
          { id: 2, text: "Woanhunu asɛm no mu" },
          { id: 3, text: "Mepene so kakra" },
          { id: 4, text: "Mempene saa asɛm no so" }
        ],
        correctOptionId: 3,
        hints: ["kakra = some extent"],
        explanation: "Mepene so kakra = I agree to some extent."
      },
      {
        id: 512,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter5/ma_menkyerɛ_m_asɛm_mu_pefee.m4a"),
        options: [
          { id: 1, text: "I agree to some extent" },
          { id: 2, text: "Let me make my point clear" },
          { id: 3, text: "Where is your proof?" },
          { id: 4, text: "The evidence supports my claim" }
        ],
        correctOptionId: 2,
        hints: ["pefee = clear"],
        explanation: "You heard 'Ma menkyerɛ mensɛm mu pefee' which means 'Let me make my point clear'."
      },
      {
        id: 517,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Where is your proof?' in Twi?",
        options: [
          { id: 1, text: "Ma menkyerɛ mensɛm mu pefee" },
          { id: 2, text: "Wo adanseɛ wɔ he?" },
          { id: 3, text: "Mmom deɛ" },
          { id: 4, text: "Adanseɛ no foa m'asɛm so" }
        ],
        correctOptionId: 2,
        hints: ["adanseɛ = proof"],
        explanation: "Wo adanseɛ wɔ he? = Where is your proof?"
      }
    ]
  }
};