export default {
  id: 6,
  title: "Meetings & Business",
  description: "Learn meetings and business vocabulary in Ga",
  icon: "briefcase-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "6-1",
      type: "phrases",
      title: "Meetings & Reports",
      icon: "presentation-outline",
      description: "Learn phrases for meetings and reports in Ga",
      words: ["Miyɛ kpee", "Ngɔɔ amaniɛbɔɔ lɛ oha mi", "Nyɛhaa wɔsusua kitã shishitoi lɛ ahe"],
      vocabulary: [
        {
          id: 223,
          english: "I have a meeting",
          native: "Miyɛ kpee",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/miyɛ_kpee.m4a")
        },
        {
          id: 224,
          english: "Send me the report",
          native: "Ngɔɔ amaniɛbɔɔ lɛ oha mi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/ngɔɔ_amaniɛbɔɔ_lɛ_oha_mi.m4a")
        },
        {
          id: 231,
          english: "Let us discuss the terms",
          native: "Nyɛhaa wɔsusua kitã shishitoi lɛ ahe",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/nyɛhaa_wɔsusua_kitã_shishitoi_lɛ_ahe.m4a")
        }
      ],
      questions: [
        {
          id: 601,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I have a meeting' in Ga?",
          options: [
            { id: 1, text: "Miyɛ kpee" },
            { id: 2, text: "Ngɔɔ amaniɛbɔɔ lɛ oha mi" },
            { id: 3, text: "Nyɛhaa wɔsusua kitã shishitoi lɛ ahe" },
            { id: 4, text: "Nitsumɔ lɛ miida" }
          ],
          correctOptionId: 1,
          hints: ["kpee = meeting"],
          explanation: "Miyɛ kpee = I have a meeting in Ga."
        },
        {
          id: 602,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/ngɔɔ_amaniɛbɔɔ_lɛ_oha_mi.m4a"),
          options: [
            { id: 1, text: "I have a meeting" },
            { id: 2, text: "Send me the report" },
            { id: 3, text: "Let us discuss the terms" },
            { id: 4, text: "Sign the contract" }
          ],
          correctOptionId: 2,
          hints: ["amaniɛbɔɔ = report"],
          explanation: "You heard 'Ngɔɔ amaniɛbɔɔ lɛ oha mi' which means 'Send me the report' in Ga."
        },
        {
          id: 603,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Let us discuss the terms' in Ga?",
          options: [
            { id: 1, text: "Miyɛ kpee" },
            { id: 2, text: "Ngɔɔ amaniɛbɔɔ lɛ oha mi" },
            { id: 3, text: "Nyɛhaa wɔsusua kitã shishitoi lɛ ahe" },
            { id: 4, text: "Miji nɔyelɔ" }
          ],
          correctOptionId: 3,
          hints: ["wɔsusua = let us discuss", "kitã = terms"],
          explanation: "Nyɛhaa wɔsusua kitã shishitoi lɛ ahe = Let us discuss the terms in Ga."
        }
      ]
    },

    {
      id: "6-2",
      type: "phrases",
      title: "Growing the Business",
      icon: "trending-up-outline",
      description: "Learn phrases for growing a business in Ga",
      words: ["Nitsumɔ lɛ miida", "Sɛɛnamɔ lɛ efa", "Mɛni ji oshika gbɛjianɔtoo?"],
      vocabulary: [
        {
          id: 225,
          english: "The business is growing",
          native: "Nitsumɔ lɛ miida",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/nitsumɔ_lɛ_miida.m4a")
        },
        {
          id: 230,
          english: "The profit increased",
          native: "Sɛɛnamɔ lɛ efa",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/sɛɛnamɔ_lɛ_efa.m4a")
        },
        {
          id: 227,
          english: "What is your budget?",
          native: "Mɛni ji oshika gbɛjianɔtoo?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/mɛni_ji_oshika_gbɛjianɔtoo.m4a")
        }
      ],
      questions: [
        {
          id: 604,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The business is growing' in Ga?",
          options: [
            { id: 1, text: "Nitsumɔ lɛ miida" },
            { id: 2, text: "Sɛɛnamɔ lɛ efa" },
            { id: 3, text: "Mɛni ji oshika gbɛjianɔtoo?" },
            { id: 4, text: "Wɔkɛ nii yaa daa" }
          ],
          correctOptionId: 1,
          hints: ["nitsumɔ = business", "miida = growing"],
          explanation: "Nitsumɔ lɛ miida = The business is growing in Ga."
        },
        {
          id: 605,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/sɛɛnamɔ_lɛ_efa.m4a"),
          options: [
            { id: 1, text: "The business is growing" },
            { id: 2, text: "The profit increased" },
            { id: 3, text: "What is your budget?" },
            { id: 4, text: "We deliver goods daily" }
          ],
          correctOptionId: 2,
          hints: ["sɛɛnamɔ = profit", "efa = increased"],
          explanation: "You heard 'Sɛɛnamɔ lɛ efa' which means 'The profit increased' in Ga."
        },
        {
          id: 606,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'What is your budget?' in Ga?",
          options: [
            { id: 1, text: "Nitsumɔ lɛ miida" },
            { id: 2, text: "Sɛɛnamɔ lɛ efa" },
            { id: 3, text: "Mɛni ji oshika gbɛjianɔtoo?" },
            { id: 4, text: "Miji nɔyelɔ" }
          ],
          correctOptionId: 3,
          hints: ["oshika = money", "gbɛjianɔtoo = plan/budget"],
          explanation: "Mɛni ji oshika gbɛjianɔtoo? = What is your budget? in Ga."
        }
      ]
    },

    {
      id: "6-3",
      type: "phrases",
      title: "Deals & Roles",
      icon: "document-text-outline",
      description: "Learn phrases for deals and roles in Ga",
      words: ["Wɔkɛ nii yaa daa", "Ŋmaa kitã lɛ shishi", "Miji nɔyelɔ"],
      vocabulary: [
        {
          id: 228,
          english: "We deliver goods daily",
          native: "Wɔkɛ nii yaa daa",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/wɔkɛ_nii_yaa_daa.m4a")
        },
        {
          id: 229,
          english: "Sign the contract",
          native: "Ŋmaa kitã lɛ shishi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/ŋmaa_kitã_lɛ_shishi.m4a")
        },
        {
          id: 232,
          english: "I am the manager",
          native: "Miji nɔyelɔ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/miji_nɔyelɔ.m4a")
        }
      ],
      questions: [
        {
          id: 607,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'We deliver goods daily' in Ga?",
          options: [
            { id: 1, text: "Wɔkɛ nii yaa daa" },
            { id: 2, text: "Ŋmaa kitã lɛ shishi" },
            { id: 3, text: "Miji nɔyelɔ" },
            { id: 4, text: "Miyɛ kpee" }
          ],
          correctOptionId: 1,
          hints: ["nii = goods", "daa = daily"],
          explanation: "Wɔkɛ nii yaa daa = We deliver goods daily in Ga."
        },
        {
          id: 608,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/ŋmaa_kitã_lɛ_shishi.m4a"),
          options: [
            { id: 1, text: "We deliver goods daily" },
            { id: 2, text: "Sign the contract" },
            { id: 3, text: "I am the manager" },
            { id: 4, text: "Send me the report" }
          ],
          correctOptionId: 2,
          hints: ["kitã = contract", "shishi = sign"],
          explanation: "You heard 'Ŋmaa kitã lɛ shishi' which means 'Sign the contract' in Ga."
        },
        {
          id: 609,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am the manager' in Ga?",
          options: [
            { id: 1, text: "Wɔkɛ nii yaa daa" },
            { id: 2, text: "Ŋmaa kitã lɛ shishi" },
            { id: 3, text: "Miji nɔyelɔ" },
            { id: 4, text: "Miyɛ kpee" }
          ],
          correctOptionId: 3,
          hints: ["nɔyelɔ = manager"],
          explanation: "Miji nɔyelɔ = I am the manager in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-6",
    title: "Review: Meetings & Business",
    icon: "refresh-outline",
    description: "Review all the meetings and business vocabulary you've learned",
    questions: [
      {
        id: 610,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I have a meeting' in Ga?",
        options: [
          { id: 1, text: "Miyɛ kpee" },
          { id: 2, text: "Ngɔɔ amaniɛbɔɔ lɛ oha mi" },
          { id: 3, text: "Nitsumɔ lɛ miida" },
          { id: 4, text: "Miji nɔyelɔ" }
        ],
        correctOptionId: 1,
        hints: ["kpee = meeting"],
        explanation: "Miyɛ kpee = I have a meeting."
      },
      {
        id: 611,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/mɛni_ji_oshika_gbɛjianɔtoo.m4a"),
        options: [
          { id: 1, text: "The business is growing" },
          { id: 2, text: "The profit increased" },
          { id: 3, text: "What is your budget?" },
          { id: 4, text: "We deliver goods daily" }
        ],
        correctOptionId: 3,
        hints: ["oshika = money"],
        explanation: "You heard 'Mɛni ji oshika gbɛjianɔtoo?' which means 'What is your budget?'."
      },
      {
        id: 612,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Send me the report' in Ga?",
        options: [
          { id: 1, text: "Miyɛ kpee" },
          { id: 2, text: "Ngɔɔ amaniɛbɔɔ lɛ oha mi" },
          { id: 3, text: "Nyɛhaa wɔsusua kitã shishitoi lɛ ahe" },
          { id: 4, text: "Miji nɔyelɔ" }
        ],
        correctOptionId: 2,
        hints: ["amaniɛbɔɔ = report"],
        explanation: "Ngɔɔ amaniɛbɔɔ lɛ oha mi = Send me the report."
      },
      {
        id: 613,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter6/miji_nɔyelɔ.m4a"),
        options: [
          { id: 1, text: "We deliver goods daily" },
          { id: 2, text: "Sign the contract" },
          { id: 3, text: "I am the manager" },
          { id: 4, text: "I have a meeting" }
        ],
        correctOptionId: 3,
        hints: ["nɔyelɔ = manager"],
        explanation: "You heard 'Miji nɔyelɔ' which means 'I am the manager'."
      },
      {
        id: 614,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The business is growing' in Ga?",
        options: [
          { id: 1, text: "Nitsumɔ lɛ miida" },
          { id: 2, text: "Sɛɛnamɔ lɛ efa" },
          { id: 3, text: "Mɛni ji oshika gbɛjianɔtoo?" },
          { id: 4, text: "Wɔkɛ nii yaa daa" }
        ],
        correctOptionId: 1,
        hints: ["nitsumɔ = business"],
        explanation: "Nitsumɔ lɛ miida = The business is growing."
      },
      {
        id: 615,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Sign the contract' in Ga?",
        options: [
          { id: 1, text: "Wɔkɛ nii yaa daa" },
          { id: 2, text: "Ŋmaa kitã lɛ shishi" },
          { id: 3, text: "Miji nɔyelɔ" },
          { id: 4, text: "Miyɛ kpee" }
        ],
        correctOptionId: 2,
        hints: ["kitã = contract"],
        explanation: "Ŋmaa kitã lɛ shishi = Sign the contract."
      },
      {
        id: 616,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'We deliver goods daily' in Ga?",
        options: [
          { id: 1, text: "Wɔkɛ nii yaa daa" },
          { id: 2, text: "Ŋmaa kitã lɛ shishi" },
          { id: 3, text: "Miji nɔyelɔ" },
          { id: 4, text: "Miyɛ kpee" }
        ],
        correctOptionId: 1,
        hints: ["daa = daily"],
        explanation: "Wɔkɛ nii yaa daa = We deliver goods daily."
      },
      {
        id: 617,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The profit increased' in Ga?",
        options: [
          { id: 1, text: "Nitsumɔ lɛ miida" },
          { id: 2, text: "Sɛɛnamɔ lɛ efa" },
          { id: 3, text: "Mɛni ji oshika gbɛjianɔtoo?" },
          { id: 4, text: "Wɔkɛ nii yaa daa" }
        ],
        correctOptionId: 2,
        hints: ["sɛɛnamɔ = profit"],
        explanation: "Sɛɛnamɔ lɛ efa = The profit increased."
      },
      {
        id: 618,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Let us discuss the terms' in Ga?",
        options: [
          { id: 1, text: "Miyɛ kpee" },
          { id: 2, text: "Ngɔɔ amaniɛbɔɔ lɛ oha mi" },
          { id: 3, text: "Nyɛhaa wɔsusua kitã shishitoi lɛ ahe" },
          { id: 4, text: "Miji nɔyelɔ" }
        ],
        correctOptionId: 3,
        hints: ["wɔsusua = let us discuss"],
        explanation: "Nyɛhaa wɔsusua kitã shishitoi lɛ ahe = Let us discuss the terms."
      }
    ]
  }
};