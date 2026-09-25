export default {
  id: 4,
  title: "News & Politics",
  description: "Learn news and politics vocabulary in Ga",
  icon: "newspaper-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "4-1",
      type: "phrases",
      title: "Government & Leadership",
      icon: "business-outline",
      description: "Learn phrases about government and leadership in Ga",
      words: ["Amralo lɛ kɛ mla hee eba", "Maŋhiɛnyiɛlɔ lɛ wie etsɔɔ maŋ lɛ", "Maŋkwramɔŋ saneyelihe lɛ wo mla lɛ mli"],
      vocabulary: [
        {
          id: 254,
          english: "The government announced a new policy",
          native: "Amralo lɛ kɛ mla hee eba",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/amralo_lɛ_kɛ_mla_hee_eba.m4a")
        },
        {
          id: 257,
          english: "The president addressed the nation",
          native: "Maŋhiɛnyiɛlɔ lɛ wie etsɔɔ maŋ lɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/maŋhiɛnyiɛlɔ_lɛ_wie_etsɔɔ_maŋ_lɛ.m4a")
        },
        {
          id: 258,
          english: "Parliament passed the bill",
          native: "Maŋkwramɔŋ saneyelihe lɛ wo mla lɛ mli",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/maŋkwramɔŋ_saneyelihe_lɛ_wo_mla_lɛ_mli.m4a")
        }
      ],
      questions: [
        {
          id: 402,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/maŋhiɛnyiɛlɔ_lɛ_wie_etsɔɔ_maŋ_lɛ.m4a"),
          options: [
            { id: 1, text: "Parliament passed the bill" },
            { id: 2, text: "The president addressed the nation" },
            { id: 3, text: "Citizens demand accountability" },
            { id: 4, text: "The government announced a new policy" }
          ],
          correctOptionId: 2,
          hints: ["maŋhiɛnyiɛlɔ = president", "maŋ = nation"],
          explanation: "You heard 'Maŋhiɛnyiɛlɔ lɛ wie etsɔɔ maŋ lɛ' which means 'The president addressed the nation' in Ga."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Parliament passed the bill' in Ga?",
          options: [
            { id: 1, text: "Shika he gbɛjianɔtoo lɛ miiya hiɛ" },
            { id: 2, text: "Maŋkwramɔŋ saneyelihe lɛ wo mla lɛ mli" },
            { id: 3, text: "Amralo lɛ kɛ mla hee eba" },
            { id: 4, text: "Maŋhiɛnyiɛlɔ lɛ wie etsɔɔ maŋ lɛ" }
          ],
          correctOptionId: 2,
          hints: ["Maŋkwramɔŋ saneyelihe = parliament", "mla = bill/law"],
          explanation: "Maŋkwramɔŋ saneyelihe lɛ wo mla lɛ mli = Parliament passed the bill in Ga."
        },
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The government announced a new policy' in Ga?",
          options: [
            { id: 1, text: "Amralo lɛ kɛ mla hee eba" },
            { id: 2, text: "Abaafɔ oshiki afi ni baa lɛ" },
            { id: 3, text: "Maŋhiɛnyiɛlɔ lɛ wie etsɔɔ maŋ lɛ" },
            { id: 4, text: "Maŋkwramɔŋ saneyelihe lɛ wo mla lɛ mli" }
          ],
          correctOptionId: 1,
          hints: ["amralo = government", "mla hee = new policy"],
          explanation: "Amralo lɛ kɛ mla hee eba = The government announced a new policy in Ga."
        }
      ]
    },

    {
      id: "4-2",
      type: "phrases",
      title: "Elections & Citizens",
      icon: "people-outline",
      description: "Learn phrases about elections and citizens in Ga",
      words: ["Abaafɔ oshiki afi ni baa lɛ", "Maŋbii biɔ akɔntabuu"],
      vocabulary: [
        {
          id: 255,
          english: "Elections will be held next year",
          native: "Abaafɔ oshiki afi ni baa lɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/abaafɔ_oshiki_afi_ni_baa_lɛ.m4a")
        },
        {
          id: 260,
          english: "Citizens demand accountability",
          native: "Maŋbii biɔ akɔntabuu",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/maŋbii_biɔ_akɔntabuu.m4a")
        }
      ],
      questions: [
        {
          id: 405,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/maŋbii_biɔ_akɔntabuu.m4a"),
          options: [
            { id: 1, text: "Elections will be held next year" },
            { id: 2, text: "Citizens demand accountability" },
            { id: 3, text: "The economy is improving" },
            { id: 4, text: "The president addressed the nation" }
          ],
          correctOptionId: 2,
          hints: ["maŋbii = citizens", "akɔntabuu = accountability"],
          explanation: "You heard 'Maŋbii biɔ akɔntabuu' which means 'Citizens demand accountability' in Ga."
        },
        {
          id: 406,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Citizens demand accountability' in Ga?",
          options: [
            { id: 1, text: "Maŋbii biɔ akɔntabuu" },
            { id: 2, text: "Amralo lɛ kɛ mla hee eba" },
            { id: 3, text: "Abaafɔ oshiki afi ni baa lɛ" },
            { id: 4, text: "Shika he gbɛjianɔtoo lɛ miiya hiɛ" }
          ],
          correctOptionId: 1,
          hints: ["akɔntabuu = accountability"],
          explanation: "Maŋbii biɔ akɔntabuu = Citizens demand accountability in Ga."
        },
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Elections will be held next year' in Ga?",
          options: [
            { id: 1, text: "Maŋbii biɔ akɔntabuu" },
            { id: 2, text: "Abaafɔ oshiki afi ni baa lɛ" },
            { id: 3, text: "Nibii ajara etee ŋwɛi" },
            { id: 4, text: "Shika he gbɛjianɔtoo lɛ miiya hiɛ" }
          ],
          correctOptionId: 2,
          hints: ["abaafɔ = elections", "afi ni baa lɛ = next year"],
          explanation: "Abaafɔ oshiki afi ni baa lɛ = Elections will be held next year in Ga."
        }
      ]
    },

    {
      id: "4-3",
      type: "phrases",
      title: "Economy & Prices",
      icon: "trending-up-outline",
      description: "Learn phrases about the economy and prices in Ga",
      words: ["Shika he gbɛjianɔtoo lɛ miiya hiɛ", "Nibii ajara etee ŋwɛi"],
      vocabulary: [
        {
          id: 256,
          english: "The economy is improving",
          native: "Shika he gbɛjianɔtoo lɛ miiya hiɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/shika_he_gbɛjianɔtoo_lɛ_miiya_hiɛ.m4a")
        },
        {
          id: 259,
          english: "Prices of goods have risen",
          native: "Nibii ajara etee ŋwɛi",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/nibii_ajara_etee_ŋwɛi.m4a")
        }
      ],
      questions: [
        {
          id: 408,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/nibii_ajara_etee_ŋwɛi.m4a"),
          options: [
            { id: 1, text: "The government announced a new policy" },
            { id: 2, text: "Prices of goods have risen" },
            { id: 3, text: "The economy is improving" },
            { id: 4, text: "Parliament passed the bill" }
          ],
          correctOptionId: 2,
          hints: ["nibii = goods", "ajara = prices"],
          explanation: "You heard 'Nibii ajara etee ŋwɛi' which means 'Prices of goods have risen' in Ga."
        },
        {
          id: 409,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Prices of goods have risen' in Ga?",
          options: [
            { id: 1, text: "Nibii ajara etee ŋwɛi" },
            { id: 2, text: "Maŋhiɛnyiɛlɔ lɛ wie etsɔɔ maŋ lɛ" },
            { id: 3, text: "Shika he gbɛjianɔtoo lɛ miiya hiɛ" },
            { id: 4, text: "Maŋbii biɔ akɔntabuu" }
          ],
          correctOptionId: 1,
          hints: ["etee ŋwɛi = have risen"],
          explanation: "Nibii ajara etee ŋwɛi = Prices of goods have risen in Ga."
        },
        {
          id: 407,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The economy is improving' in Ga?",
          options: [
            { id: 1, text: "Abaafɔ oshiki afi ni baa lɛ" },
            { id: 2, text: "Nibii ajara etee ŋwɛi" },
            { id: 3, text: "Shika he gbɛjianɔtoo lɛ miiya hiɛ" },
            { id: 4, text: "Maŋbii biɔ akɔntabuu" }
          ],
          correctOptionId: 3,
          hints: ["shika he gbɛjianɔtoo = economy", "miiya hiɛ = improving"],
          explanation: "Shika he gbɛjianɔtoo lɛ miiya hiɛ = The economy is improving in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-4",
    title: "Review: News & Politics",
    icon: "refresh-outline",
    description: "Review all the news and politics vocabulary you've learned",
    questions: [
      {
        id: 411,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/maŋkwramɔŋ_saneyelihe_lɛ_wo_mla_lɛ_mli.m4a"),
        options: [
          { id: 1, text: "The president addressed the nation" },
          { id: 2, text: "Citizens demand accountability" },
          { id: 3, text: "Parliament passed the bill" },
          { id: 4, text: "The government announced a new policy" }
        ],
        correctOptionId: 3,
        hints: ["mla = bill/law"],
        explanation: "You heard 'Maŋkwramɔŋ saneyelihe lɛ wo mla lɛ mli' which means 'Parliament passed the bill'."
      },
      {
        id: 413,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/abaafɔ_oshiki_afi_ni_baa_lɛ.m4a"),
        options: [
          { id: 1, text: "Elections will be held next year" },
          { id: 2, text: "The economy is improving" },
          { id: 3, text: "Prices of goods have risen" },
          { id: 4, text: "Citizens demand accountability" }
        ],
        correctOptionId: 1,
        hints: ["abaafɔ = elections"],
        explanation: "You heard 'Abaafɔ oshiki afi ni baa lɛ' which means 'Elections will be held next year'."
      },
      {
        id: 417,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter4/amralo_lɛ_kɛ_mla_hee_eba.m4a"),
        options: [
          { id: 1, text: "The government announced a new policy" },
          { id: 2, text: "The president addressed the nation" },
          { id: 3, text: "Parliament passed the bill" },
          { id: 4, text: "Prices of goods have risen" }
        ],
        correctOptionId: 1,
        hints: ["mla hee = new policy"],
        explanation: "You heard 'Amralo lɛ kɛ mla hee eba' which means 'The government announced a new policy'."
      },
      {
        id: 412,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The president addressed the nation' in Ga?",
        options: [
          { id: 1, text: "Abaafɔ oshiki afi ni baa lɛ" },
          { id: 2, text: "Maŋhiɛnyiɛlɔ lɛ wie etsɔɔ maŋ lɛ" },
          { id: 3, text: "Shika he gbɛjianɔtoo lɛ miiya hiɛ" },
          { id: 4, text: "Maŋkwramɔŋ saneyelihe lɛ wo mla lɛ mli" }
        ],
        correctOptionId: 2,
        hints: ["maŋhiɛnyiɛlɔ = president"],
        explanation: "Maŋhiɛnyiɛlɔ lɛ wie etsɔɔ maŋ lɛ = The president addressed the nation."
      },
      {
        id: 416,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Prices of goods have risen' in Ga?",
        options: [
          { id: 1, text: "Nibii ajara etee ŋwɛi" },
          { id: 2, text: "Maŋbii biɔ akɔntabuu" },
          { id: 3, text: "Amralo lɛ kɛ mla hee eba" },
          { id: 4, text: "Shika he gbɛjianɔtoo lɛ miiya hiɛ" }
        ],
        correctOptionId: 1,
        hints: ["etee ŋwɛi = have risen"],
        explanation: "Nibii ajara etee ŋwɛi = Prices of goods have risen."
      },
      {
        id: 410,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The government announced a new policy' in Ga?",
        options: [
          { id: 1, text: "Abaafɔ oshiki afi ni baa lɛ" },
          { id: 2, text: "Maŋkwramɔŋ saneyelihe lɛ wo mla lɛ mli" },
          { id: 3, text: "Amralo lɛ kɛ mla hee eba" },
          { id: 4, text: "Maŋhiɛnyiɛlɔ lɛ wie etsɔɔ maŋ lɛ" }
        ],
        correctOptionId: 3,
        hints: ["amralo = government"],
        explanation: "Amralo lɛ kɛ mla hee eba = The government announced a new policy."
      },
      {
        id: 415,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The economy is improving' in Ga?",
        options: [
          { id: 1, text: "Shika he gbɛjianɔtoo lɛ miiya hiɛ" },
          { id: 2, text: "Nibii ajara etee ŋwɛi" },
          { id: 3, text: "Maŋbii biɔ akɔntabuu" },
          { id: 4, text: "Abaafɔ oshiki afi ni baa lɛ" }
        ],
        correctOptionId: 1,
        hints: ["miiya hiɛ = improving"],
        explanation: "Shika he gbɛjianɔtoo lɛ miiya hiɛ = The economy is improving."
      },
      {
        id: 414,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Citizens demand accountability' in Ga?",
        options: [
          { id: 1, text: "Shika he gbɛjianɔtoo lɛ miiya hiɛ" },
          { id: 2, text: "Maŋbii biɔ akɔntabuu" },
          { id: 3, text: "Abaafɔ oshiki afi ni baa lɛ" },
          { id: 4, text: "Amralo lɛ kɛ mla hee eba" }
        ],
        correctOptionId: 2,
        hints: ["akɔntabuu = accountability"],
        explanation: "Maŋbii biɔ akɔntabuu = Citizens demand accountability."
      }
    ]
  }
};