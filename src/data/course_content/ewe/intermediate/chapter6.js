export default {
  id: 6,
  title: "Work & Business",
  description: "Learn work and business vocabulary in Ewe",
  icon: "briefcase-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "6-1",
      type: "words",
      title: "Meetings & Reports",
      icon: "document-text-outline",
      description: "Learn how to talk about meetings and reports in Ewe",
      words: ["Takpekpe le ashinye", "Ɖo nyatakaka la ɖem", "Mina míadzro ɖoɖoawo me"],
      vocabulary: [
        {
          id: 223,
          english: "I have a meeting",
          native: "Takpekpe le ashinye",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/takpekpe_le_ashinye.m4a")
        },
        {
          id: 224,
          english: "Send me the report",
          native: "Ɖo nyatakaka la ɖem",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/ɖo_nyatakaka_la_ɖem.m4a")
        },
        {
          id: 231,
          english: "Let us discuss the terms",
          native: "Mina míadzro ɖoɖoawo me",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/mina_míadzro_ɖoɖoawo_me.m4a")
        }
      ],
      questions: [
        {
          id: 601,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I have a meeting' in Ewe?",
          options: [
            { id: 1, text: "Takpekpe le ashinye" },
            { id: 2, text: "Ɖo nyatakaka la ɖem" },
            { id: 3, text: "Mina míadzro ɖoɖoawo me" },
            { id: 4, text: "Dɔwɔƒe la le tsitsim" }
          ],
          correctOptionId: 1,
          hints: ["takpekpe = meeting"],
          explanation: "Takpekpe le ashinye = I have a meeting in Ewe."
        },
        {
          id: 602,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/ɖo_nyatakaka_la_ɖem.m4a"),
          options: [
            { id: 1, text: "I have a meeting" },
            { id: 2, text: "Send me the report" },
            { id: 3, text: "Let us discuss the terms" },
            { id: 4, text: "The business is growing" }
          ],
          correctOptionId: 2,
          hints: ["nyatakaka = report", "ɖem = me"],
          explanation: "You heard 'Ɖo nyatakaka la ɖem' which means 'Send me the report' in Ewe."
        },
        {
          id: 603,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Let us discuss the terms' in Ewe?",
          options: [
            { id: 1, text: "Takpekpe le ashinye" },
            { id: 2, text: "Ɖo nyatakaka la ɖem" },
            { id: 3, text: "Mina míadzro ɖoɖoawo me" },
            { id: 4, text: "Wò gaɖoƒe nenie?" }
          ],
          correctOptionId: 3,
          hints: ["ɖoɖoawo = terms"],
          explanation: "Mina míadzro ɖoɖoawo me = Let us discuss the terms in Ewe."
        },
        {
          id: 604,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/mina_míadzro_ɖoɖoawo_me.m4a"),
          options: [
            { id: 1, text: "I have a meeting" },
            { id: 2, text: "Send me the report" },
            { id: 3, text: "Let us discuss the terms" },
            { id: 4, text: "I am the manager" }
          ],
          correctOptionId: 3,
          hints: ["ɖoɖoawo = terms"],
          explanation: "You heard 'Mina míadzro ɖoɖoawo me' which means 'Let us discuss the terms' in Ewe."
        }
      ]
    },

    {
      id: "6-2",
      type: "words",
      title: "Growing the Business",
      icon: "trending-up-outline",
      description: "Learn how to talk about business growth in Ewe",
      words: ["Dɔwɔƒe la le tsitsim", "Míehiã asisi geɖe wu", "Viɖe la dzi ɖe edzi"],
      vocabulary: [
        {
          id: 225,
          english: "The business is growing",
          native: "Dɔwɔƒe la le tsitsim",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/dɔwɔƒe_la_le_tsitsim.m4a")
        },
        {
          id: 226,
          english: "We need more customers",
          native: "Míehiã asisi geɖe wu",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/míehiã_asisi_geɖe_wu.m4a")
        },
        {
          id: 230,
          english: "The profit increased",
          native: "Viɖe la dzi ɖe edzi",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/viɖe_la_dzi_ɖe_edzi.m4a")
        }
      ],
      questions: [
        {
          id: 605,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The business is growing' in Ewe?",
          options: [
            { id: 1, text: "Dɔwɔƒe la le tsitsim" },
            { id: 2, text: "Míehiã asisi geɖe wu" },
            { id: 3, text: "Viɖe la dzi ɖe edzi" },
            { id: 4, text: "Takpekpe le ashinye" }
          ],
          correctOptionId: 1,
          hints: ["dɔwɔƒe = business", "tsitsim = growing"],
          explanation: "Dɔwɔƒe la le tsitsim = The business is growing in Ewe."
        },
        {
          id: 606,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/míehiã_asisi_geɖe_wu.m4a"),
          options: [
            { id: 1, text: "The business is growing" },
            { id: 2, text: "We need more customers" },
            { id: 3, text: "The profit increased" },
            { id: 4, text: "I have a meeting" }
          ],
          correctOptionId: 2,
          hints: ["asisi = customers", "geɖe wu = more"],
          explanation: "You heard 'Míehiã asisi geɖe wu' which means 'We need more customers' in Ewe."
        },
        {
          id: 607,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The profit increased' in Ewe?",
          options: [
            { id: 1, text: "Dɔwɔƒe la le tsitsim" },
            { id: 2, text: "Míehiã asisi geɖe wu" },
            { id: 3, text: "Viɖe la dzi ɖe edzi" },
            { id: 4, text: "De ashi nubablaa te" }
          ],
          correctOptionId: 3,
          hints: ["viɖe = profit"],
          explanation: "Viɖe la dzi ɖe edzi = The profit increased in Ewe."
        },
        {
          id: 608,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/dɔwɔƒe_la_le_tsitsim.m4a"),
          options: [
            { id: 1, text: "The business is growing" },
            { id: 2, text: "We need more customers" },
            { id: 3, text: "The profit increased" },
            { id: 4, text: "Sign the contract" }
          ],
          correctOptionId: 1,
          hints: ["tsitsim = growing"],
          explanation: "You heard 'Dɔwɔƒe la le tsitsim' which means 'The business is growing' in Ewe."
        }
      ]
    },

    {
      id: "6-3",
      type: "words",
      title: "Deals & Roles",
      icon: "file-tray-full-outline",
      description: "Learn how to talk about deals and job roles in Ewe",
      words: ["Wò gaɖoƒe nenie?", "Míetsɔa nuwo yina gbe shia gbe", "De ashi nubablaa te", "Nyee nye dɔdzikpɔla"],
      vocabulary: [
        {
          id: 227,
          english: "What is your budget?",
          native: "Wò gaɖoƒe nenie?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/wò_gaɖoƒe_nenie.m4a")
        },
        {
          id: 228,
          english: "We deliver goods daily",
          native: "Míetsɔa nuwo yina gbe shia gbe",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/míetsɔa_nuwo_yina_gbe_shia_gbe.m4a")
        },
        {
          id: 229,
          english: "Sign the contract",
          native: "De ashi nubablaa te",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/de_ashi_nubablaa_te.m4a")
        },
        {
          id: 232,
          english: "I am the manager",
          native: "Nyee nye dɔdzikpɔla",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/nyee_nye_dɔdzikpɔla.m4a")
        }
      ],
      questions: [
        {
          id: 609,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'What is your budget?' in Ewe?",
          options: [
            { id: 1, text: "Wò gaɖoƒe nenie?" },
            { id: 2, text: "Míetsɔa nuwo yina gbe shia gbe" },
            { id: 3, text: "De ashi nubablaa te" },
            { id: 4, text: "Nyee nye dɔdzikpɔla" }
          ],
          correctOptionId: 1,
          hints: ["gaɖoƒe = budget", "nenie = how much"],
          explanation: "Wò gaɖoƒe nenie? = What is your budget? in Ewe."
        },
        {
          id: 610,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/de_ashi_nubablaa_te.m4a"),
          options: [
            { id: 1, text: "What is your budget?" },
            { id: 2, text: "We deliver goods daily" },
            { id: 3, text: "Sign the contract" },
            { id: 4, text: "I am the manager" }
          ],
          correctOptionId: 3,
          hints: ["nubablaa = contract", "de ashi te = sign"],
          explanation: "You heard 'De ashi nubablaa te' which means 'Sign the contract' in Ewe."
        },
        {
          id: 611,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am the manager' in Ewe?",
          options: [
            { id: 1, text: "Wò gaɖoƒe nenie?" },
            { id: 2, text: "Míetsɔa nuwo yina gbe shia gbe" },
            { id: 3, text: "De ashi nubablaa te" },
            { id: 4, text: "Nyee nye dɔdzikpɔla" }
          ],
          correctOptionId: 4,
          hints: ["dɔdzikpɔla = manager"],
          explanation: "Nyee nye dɔdzikpɔla = I am the manager in Ewe."
        },
        {
          id: 612,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/míetsɔa_nuwo_yina_gbe_shia_gbe.m4a"),
          options: [
            { id: 1, text: "What is your budget?" },
            { id: 2, text: "We deliver goods daily" },
            { id: 3, text: "Sign the contract" },
            { id: 4, text: "I am the manager" }
          ],
          correctOptionId: 2,
          hints: ["nuwo = goods", "gbe shia gbe = daily"],
          explanation: "You heard 'Míetsɔa nuwo yina gbe shia gbe' which means 'We deliver goods daily' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-6",
    title: "Review: Work & Business",
    icon: "refresh-outline",
    description: "Review all the work and business vocabulary you've learned",
    questions: [
      {
        id: 613,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I have a meeting' in Ewe?",
        options: [
          { id: 1, text: "Takpekpe le ashinye" },
          { id: 2, text: "Ɖo nyatakaka la ɖem" },
          { id: 3, text: "Mina míadzro ɖoɖoawo me" },
          { id: 4, text: "Dɔwɔƒe la le tsitsim" }
        ],
        correctOptionId: 1,
        hints: ["takpekpe = meeting"],
        explanation: "Takpekpe le ashinye = I have a meeting."
      },
      {
        id: 614,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/nyee_nye_dɔdzikpɔla.m4a"),
        options: [
          { id: 1, text: "What is your budget?" },
          { id: 2, text: "We deliver goods daily" },
          { id: 3, text: "Sign the contract" },
          { id: 4, text: "I am the manager" }
        ],
        correctOptionId: 4,
        hints: ["dɔdzikpɔla = manager"],
        explanation: "You heard 'Nyee nye dɔdzikpɔla' which means 'I am the manager'."
      },
      {
        id: 615,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Send me the report' in Ewe?",
        options: [
          { id: 1, text: "Takpekpe le ashinye" },
          { id: 2, text: "Ɖo nyatakaka la ɖem" },
          { id: 3, text: "Mina míadzro ɖoɖoawo me" },
          { id: 4, text: "Viɖe la dzi ɖe edzi" }
        ],
        correctOptionId: 2,
        hints: ["nyatakaka = report"],
        explanation: "Ɖo nyatakaka la ɖem = Send me the report."
      },
      {
        id: 616,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/viɖe_la_dzi_ɖe_edzi.m4a"),
        options: [
          { id: 1, text: "The business is growing" },
          { id: 2, text: "We need more customers" },
          { id: 3, text: "The profit increased" },
          { id: 4, text: "I have a meeting" }
        ],
        correctOptionId: 3,
        hints: ["viɖe = profit"],
        explanation: "You heard 'Viɖe la dzi ɖe edzi' which means 'The profit increased'."
      },
      {
        id: 617,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Let us discuss the terms' in Ewe?",
        options: [
          { id: 1, text: "Takpekpe le ashinye" },
          { id: 2, text: "Ɖo nyatakaka la ɖem" },
          { id: 3, text: "Mina míadzro ɖoɖoawo me" },
          { id: 4, text: "Wò gaɖoƒe nenie?" }
        ],
        correctOptionId: 3,
        hints: ["ɖoɖoawo = terms"],
        explanation: "Mina míadzro ɖoɖoawo me = Let us discuss the terms."
      },
      {
        id: 618,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The business is growing' in Ewe?",
        options: [
          { id: 1, text: "Dɔwɔƒe la le tsitsim" },
          { id: 2, text: "Míehiã asisi geɖe wu" },
          { id: 3, text: "Viɖe la dzi ɖe edzi" },
          { id: 4, text: "De ashi nubablaa te" }
        ],
        correctOptionId: 1,
        hints: ["dɔwɔƒe = business"],
        explanation: "Dɔwɔƒe la le tsitsim = The business is growing."
      },
      {
        id: 619,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter6/mina_míadzro_ɖoɖoawo_me.m4a"),
        options: [
          { id: 1, text: "I have a meeting" },
          { id: 2, text: "Send me the report" },
          { id: 3, text: "Let us discuss the terms" },
          { id: 4, text: "We need more customers" }
        ],
        correctOptionId: 3,
        hints: ["ɖoɖoawo = terms"],
        explanation: "You heard 'Mina míadzro ɖoɖoawo me' which means 'Let us discuss the terms'."
      },
      {
        id: 620,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'We need more customers' in Ewe?",
        options: [
          { id: 1, text: "Dɔwɔƒe la le tsitsim" },
          { id: 2, text: "Míehiã asisi geɖe wu" },
          { id: 3, text: "Viɖe la dzi ɖe edzi" },
          { id: 4, text: "Takpekpe le ashinye" }
        ],
        correctOptionId: 2,
        hints: ["asisi = customers"],
        explanation: "Míehiã asisi geɖe wu = We need more customers."
      },
      {
        id: 621,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'What is your budget?' in Ewe?",
        options: [
          { id: 1, text: "Wò gaɖoƒe nenie?" },
          { id: 2, text: "Míetsɔa nuwo yina gbe shia gbe" },
          { id: 3, text: "De ashi nubablaa te" },
          { id: 4, text: "Nyee nye dɔdzikpɔla" }
        ],
        correctOptionId: 1,
        hints: ["gaɖoƒe = budget"],
        explanation: "Wò gaɖoƒe nenie? = What is your budget?"
      },
      {
        id: 622,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Sign the contract' in Ewe?",
        options: [
          { id: 1, text: "Wò gaɖoƒe nenie?" },
          { id: 2, text: "Míetsɔa nuwo yina gbe shia gbe" },
          { id: 3, text: "De ashi nubablaa te" },
          { id: 4, text: "Nyee nye dɔdzikpɔla" }
        ],
        correctOptionId: 3,
        hints: ["nubablaa = contract"],
        explanation: "De ashi nubablaa te = Sign the contract."
      }
    ]
  }
};