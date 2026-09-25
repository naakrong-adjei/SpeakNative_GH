export default {
  id: 6,
  title: "Discussion & Opinions",
  description: "Learn discussion and opinion vocabulary in Ga",
  icon: "chatbubbles-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "6-1",
      type: "phrases",
      title: "Agreeing & Disagreeing",
      icon: "git-compare-outline",
      description: "Learn how to agree and disagree in Ga",
      words: ["Mikɛ nakai sane lɛ kpãaa gbee", "Mikpɛlɛɔ nɔ kɛya shi heko", "Nɔ ni tamɔɔɔ nakai"],
      vocabulary: [
        {
          id: 275,
          english: "I disagree with that point",
          native: "Mikɛ nakai sane lɛ kpãaa gbee",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/mikɛ_nakai_sane_lɛ_kpãaa_gbee.m4a")
        },
        {
          id: 280,
          english: "I agree to some extent",
          native: "Mikpɛlɛɔ nɔ kɛya shi heko",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/mikpɛlɛɔ_nɔ_kɛya_shi_heko.m4a")
        },
        {
          id: 276,
          english: "On the contrary",
          native: "Nɔ ni tamɔɔɔ nakai",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/nɔ_ni_tamɔɔɔ_nakai.m4a")
        }
      ],
      questions: [
        {
          id: 602,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/mikpɛlɛɔ_nɔ_kɛya_shi_heko.m4a"),
          options: [
            { id: 1, text: "Where is your proof?" },
            { id: 2, text: "I agree to some extent" },
            { id: 3, text: "I disagree with that point" },
            { id: 4, text: "On the contrary" }
          ],
          correctOptionId: 2,
          hints: ["Mikpɛlɛɔ nɔ = I agree", "heko = some extent"],
          explanation: "You heard 'Mikpɛlɛɔ nɔ kɛya shi heko' which means 'I agree to some extent' in Ga."
        },
        {
          id: 603,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'On the contrary' in Ga?",
          options: [
            { id: 1, text: "Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ" },
            { id: 2, text: "Nɔ ni tamɔɔɔ nakai" },
            { id: 3, text: "Mikpɛlɛɔ nɔ kɛya shi heko" },
            { id: 4, text: "Mikɛ nakai sane lɛ kpãaa gbee" }
          ],
          correctOptionId: 2,
          hints: ["tamɔɔɔ nakai = contrary"],
          explanation: "Nɔ ni tamɔɔɔ nakai = On the contrary in Ga."
        },
        {
          id: 601,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I disagree with that point' in Ga?",
          options: [
            { id: 1, text: "Nɔ ni tamɔɔɔ nakai" },
            { id: 2, text: "Mikpɛlɛɔ nɔ kɛya shi heko" },
            { id: 3, text: "Mikɛ nakai sane lɛ kpãaa gbee" },
            { id: 4, text: "Ha ni matsɔɔ misane lɛ mli faŋŋ" }
          ],
          correctOptionId: 3,
          hints: ["kpãaa gbee = disagree"],
          explanation: "Mikɛ nakai sane lɛ kpãaa gbee = I disagree with that point in Ga."
        }
      ]
    },

    {
      id: "6-2",
      type: "phrases",
      title: "Making Your Point",
      icon: "chatbox-outline",
      description: "Learn how to make your point clear in Ga",
      words: ["Ha ni matsɔɔ misane lɛ mli faŋŋ", "Osane lɛ shishinumɔ ehiii"],
      vocabulary: [
        {
          id: 278,
          english: "Let me make my point clear",
          native: "Ha ni matsɔɔ misane lɛ mli faŋŋ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/ha_ni_matsɔɔ_misane_lɛ_mli_faŋŋ.m4a")
        },
        {
          id: 279,
          english: "You have missed the point",
          native: "Osane lɛ shishinumɔ ehiii",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/osane_lɛ_shishinumɔ_ehiii.m4a")
        }
      ],
      questions: [
        {
          id: 605,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/osane_lɛ_shishinumɔ_ehiii.m4a"),
          options: [
            { id: 1, text: "You have missed the point" },
            { id: 2, text: "Let me make my point clear" },
            { id: 3, text: "The evidence supports my claim" },
            { id: 4, text: "On the contrary" }
          ],
          correctOptionId: 1,
          hints: ["shishinumɔ ehiii = missed the point"],
          explanation: "You heard 'Osane lɛ shishinumɔ ehiii' which means 'You have missed the point' in Ga."
        },
        {
          id: 606,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'You have missed the point' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ odaseyeli yɔɔ?" },
            { id: 2, text: "Osane lɛ shishinumɔ ehiii" },
            { id: 3, text: "Ha ni matsɔɔ misane lɛ mli faŋŋ" },
            { id: 4, text: "Nɔ ni tamɔɔɔ nakai" }
          ],
          correctOptionId: 2,
          hints: ["shishinumɔ ehiii = missed the point"],
          explanation: "Osane lɛ shishinumɔ ehiii = You have missed the point in Ga."
        },
        {
          id: 604,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Let me make my point clear' in Ga?",
          options: [
            { id: 1, text: "Osane lɛ shishinumɔ ehiii" },
            { id: 2, text: "Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ" },
            { id: 3, text: "Ha ni matsɔɔ misane lɛ mli faŋŋ" },
            { id: 4, text: "Mikɛ nakai sane lɛ kpãaa gbee" }
          ],
          correctOptionId: 3,
          hints: ["matsɔɔ = let me show", "faŋŋ = clear"],
          explanation: "Ha ni matsɔɔ misane lɛ mli faŋŋ = Let me make my point clear in Ga."
        }
      ]
    },

    {
      id: "6-3",
      type: "phrases",
      title: "Evidence & Proof",
      icon: "document-text-outline",
      description: "Learn phrases about evidence and proof in Ga",
      words: ["Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ", "Nɛgbɛ odaseyeli yɔɔ?"],
      vocabulary: [
        {
          id: 277,
          english: "The evidence supports my claim",
          native: "Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/odaseyeli_lɛ_fĩɔ_mi_sane_lɛ_sɛɛ.m4a")
        },
        {
          id: 281,
          english: "Where is your proof?",
          native: "Nɛgbɛ odaseyeli yɔɔ?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/nɛgbɛ_odaseyeli_yɔɔ.m4a")
        }
      ],
      questions: [
        {
          id: 608,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/nɛgbɛ_odaseyeli_yɔɔ.m4a"),
          options: [
            { id: 1, text: "The evidence supports my claim" },
            { id: 2, text: "I agree to some extent" },
            { id: 3, text: "Where is your proof?" },
            { id: 4, text: "You have missed the point" }
          ],
          correctOptionId: 3,
          hints: ["nɛgbɛ = where", "odaseyeli = proof"],
          explanation: "You heard 'Nɛgbɛ odaseyeli yɔɔ?' which means 'Where is your proof?' in Ga."
        },
        {
          id: 609,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Where is your proof?' in Ga?",
          options: [
            { id: 1, text: "Mikɛ nakai sane lɛ kpãaa gbee" },
            { id: 2, text: "Nɛgbɛ odaseyeli yɔɔ?" },
            { id: 3, text: "Ha ni matsɔɔ misane lɛ mli faŋŋ" },
            { id: 4, text: "Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ" }
          ],
          correctOptionId: 2,
          hints: ["nɛgbɛ = where"],
          explanation: "Nɛgbɛ odaseyeli yɔɔ? = Where is your proof? in Ga."
        },
        {
          id: 607,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The evidence supports my claim' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ odaseyeli yɔɔ?" },
            { id: 2, text: "Nɔ ni tamɔɔɔ nakai" },
            { id: 3, text: "Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ" },
            { id: 4, text: "Osane lɛ shishinumɔ ehiii" }
          ],
          correctOptionId: 3,
          hints: ["odaseyeli = evidence", "fĩɔ sɛɛ = supports"],
          explanation: "Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ = The evidence supports my claim in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-6",
    title: "Review: Discussion & Opinions",
    icon: "refresh-outline",
    description: "Review all the discussion and opinion vocabulary you've learned",
    questions: [
      {
        id: 611,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/ha_ni_matsɔɔ_misane_lɛ_mli_faŋŋ.m4a"),
        options: [
          { id: 1, text: "Where is your proof?" },
          { id: 2, text: "Let me make my point clear" },
          { id: 3, text: "On the contrary" },
          { id: 4, text: "You have missed the point" }
        ],
        correctOptionId: 2,
        hints: ["faŋŋ = clear"],
        explanation: "You heard 'Ha ni matsɔɔ misane lɛ mli faŋŋ' which means 'Let me make my point clear'."
      },
      {
        id: 613,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/odaseyeli_lɛ_fĩɔ_mi_sane_lɛ_sɛɛ.m4a"),
        options: [
          { id: 1, text: "I disagree with that point" },
          { id: 2, text: "The evidence supports my claim" },
          { id: 3, text: "You have missed the point" },
          { id: 4, text: "Where is your proof?" }
        ],
        correctOptionId: 2,
        hints: ["odaseyeli = evidence"],
        explanation: "You heard 'Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ' which means 'The evidence supports my claim'."
      },
      {
        id: 617,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter6/nɔ_ni_tamɔɔɔ_nakai.m4a"),
        options: [
          { id: 1, text: "On the contrary" },
          { id: 2, text: "I agree to some extent" },
          { id: 3, text: "I disagree with that point" },
          { id: 4, text: "Where is your proof?" }
        ],
        correctOptionId: 1,
        hints: ["tamɔɔɔ nakai = contrary"],
        explanation: "You heard 'Nɔ ni tamɔɔɔ nakai' which means 'On the contrary'."
      },
      {
        id: 615,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'You have missed the point' in Ga?",
        options: [
          { id: 1, text: "Nɔ ni tamɔɔɔ nakai" },
          { id: 2, text: "Osane lɛ shishinumɔ ehiii" },
          { id: 3, text: "Ha ni matsɔɔ misane lɛ mli faŋŋ" },
          { id: 4, text: "Nɛgbɛ odaseyeli yɔɔ?" }
        ],
        correctOptionId: 2,
        hints: ["shishinumɔ ehiii = missed the point"],
        explanation: "Osane lɛ shishinumɔ ehiii = You have missed the point."
      },
      {
        id: 610,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I disagree with that point' in Ga?",
        options: [
          { id: 1, text: "Mikpɛlɛɔ nɔ kɛya shi heko" },
          { id: 2, text: "Nɔ ni tamɔɔɔ nakai" },
          { id: 3, text: "Mikɛ nakai sane lɛ kpãaa gbee" },
          { id: 4, text: "Ha ni matsɔɔ misane lɛ mli faŋŋ" }
        ],
        correctOptionId: 3,
        hints: ["kpãaa gbee = disagree"],
        explanation: "Mikɛ nakai sane lɛ kpãaa gbee = I disagree with that point."
      },
      {
        id: 616,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Where is your proof?' in Ga?",
        options: [
          { id: 1, text: "Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ" },
          { id: 2, text: "Nɛgbɛ odaseyeli yɔɔ?" },
          { id: 3, text: "Mikɛ nakai sane lɛ kpãaa gbee" },
          { id: 4, text: "Osane lɛ shishinumɔ ehiii" }
        ],
        correctOptionId: 2,
        hints: ["nɛgbɛ = where"],
        explanation: "Nɛgbɛ odaseyeli yɔɔ? = Where is your proof?"
      },
      {
        id: 612,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I agree to some extent' in Ga?",
        options: [
          { id: 1, text: "Mikpɛlɛɔ nɔ kɛya shi heko" },
          { id: 2, text: "Nɔ ni tamɔɔɔ nakai" },
          { id: 3, text: "Mikɛ nakai sane lɛ kpãaa gbee" },
          { id: 4, text: "Odaseyeli lɛ fĩɔ mi sane lɛ sɛɛ" }
        ],
        correctOptionId: 1,
        hints: ["heko = some extent"],
        explanation: "Mikpɛlɛɔ nɔ kɛya shi heko = I agree to some extent."
      },
      {
        id: 614,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'On the contrary' in Ga?",
        options: [
          { id: 1, text: "Ha ni matsɔɔ misane lɛ mli faŋŋ" },
          { id: 2, text: "Osane lɛ shishinumɔ ehiii" },
          { id: 3, text: "Nɔ ni tamɔɔɔ nakai" },
          { id: 4, text: "Mikpɛlɛɔ nɔ kɛya shi heko" }
        ],
        correctOptionId: 3,
        hints: ["tamɔɔɔ nakai = contrary"],
        explanation: "Nɔ ni tamɔɔɔ nakai = On the contrary."
      }
    ]
  }
};