export default {
  id: 1,
  title: "Complex Grammar",
  description: "Learn useful Twi phrases for conditionals, contrast, linking, and relative clauses",
  icon: "git-branch-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "1-1",
      type: "phrases",
      title: "Conditionals & Hypothetical Expressions",
      icon: "git-branch-outline",
      description: "Learn Twi phrases for expressing conditions, consequences, and hypothetical situations",
      words: [
        "Sɛ menim a, anka maankɔ",
        "Anka ɛbɛyɛ papa"
      ],
      vocabulary: [
        {
          id: 236,
          english: "If I had known, I would not have gone",
          native: "Sɛ menim a, anka maankɔ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/sɛ_menim_a_anka_maankɔ.m4a")
        },
        {
          id: 239,
          english: "It would have been better",
          native: "Anka ɛbɛyɛ papa",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/anka_ɛbɛyɛ_papa.m4a")
        }
      ],
      questions: [
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'It would have been better' in Twi?",
          options: [
            { id: 1, text: "Ɛnyɛ ɛno nko, na yei nso" },
            { id: 2, text: "Anka ɛbɛyɛ papa" },
            { id: 3, text: "Sɛ menim a, anka maankɔ" },
            { id: 4, text: "Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no" }
          ],
          correctOptionId: 2,
          hints: ["papa = better"],
          explanation: "Anka ɛbɛyɛ papa = It would have been better in Twi."
        },
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'If I had known, I would not have gone' in Twi?",
          options: [
            { id: 1, text: "Anka ɛbɛyɛ papa" },
            { id: 2, text: "Adwuma a wɔyɛeɛ ɛnora no" },
            { id: 3, text: "Sɛ menim a, anka maankɔ" },
            { id: 4, text: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so" }
          ],
          correctOptionId: 3,
          hints: ["Sɛ menim a = if I had known", "anka = would have"],
          explanation: "Sɛ menim a, anka maankɔ = If I had known, I would not have gone in Twi."
        },
        {
          id: 102,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/anka_ɛbɛyɛ_papa.m4a"),
          options: [
            { id: 1, text: "Although it rained, we continued" },
            { id: 2, text: "The house that I built last year" },
            { id: 3, text: "It would have been better" },
            { id: 4, text: "If I had known, I would not have gone" }
          ],
          correctOptionId: 3,
          hints: ["anka = would have", "papa = better"],
          explanation: "You heard 'Anka ɛbɛyɛ papa' which means 'It would have been better' in Twi."
        }
      ]
    },

    {
      id: "1-2",
      type: "phrases",
      title: "Contrast & Linking",
      icon: "link-outline",
      description: "Learn Twi phrases for expressing contrast, addition, and connected ideas",
      words: [
        "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so",
        "Ɛnyɛ ɛno nko, na yei nso"
      ],
      vocabulary: [
        {
          id: 237,
          english: "Although it rained, we continued",
          native: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/ɛwom_sɛ_osuo_tɔ_deɛ_nanso_yɛtoaa_so.m4a")
        },
        {
          id: 240,
          english: "Not only that, but also this",
          native: "Ɛnyɛ ɛno nko, na yei nso",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/ɛnyɛ_ɛno_nko_na_yei_nso.m4a")
        }
      ],
      questions: [
        {
          id: 105,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/ɛnyɛ_ɛno_nko_na_yei_nso.m4a"),
          options: [
            { id: 1, text: "Not only that, but also this" },
            { id: 2, text: "It would have been better" },
            { id: 3, text: "Although it rained, we continued" },
            { id: 4, text: "Whoever comes first will be served" }
          ],
          correctOptionId: 1,
          hints: ["nko = only", "nso = also"],
          explanation: "You heard 'Ɛnyɛ ɛno nko, na yei nso' which means 'Not only that, but also this' in Twi."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Although it rained, we continued' in Twi?",
          options: [
            { id: 1, text: "Adwuma a wɔyɛeɛ ɛnora no" },
            { id: 2, text: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so" },
            { id: 3, text: "Ɛnyɛ ɛno nko, na yei nso" },
            { id: 4, text: "Sɛ menim a, anka maankɔ" }
          ],
          correctOptionId: 2,
          hints: ["osuo = rain", "nanso = but"],
          explanation: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so = Although it rained, we continued in Twi."
        },
        {
          id: 106,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Not only that, but also this' in Twi?",
          options: [
            { id: 1, text: "Anka ɛbɛyɛ papa" },
            { id: 2, text: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so" },
            { id: 3, text: "Efie a mesii no afe a etwaam no" },
            { id: 4, text: "Ɛnyɛ ɛno nko, na yei nso" }
          ],
          correctOptionId: 4,
          hints: ["nso = also"],
          explanation: "Ɛnyɛ ɛno nko, na yei nso = Not only that, but also this in Twi."
        }
      ]
    },

    {
      id: "1-3",
      type: "phrases",
      title: "Relative Clauses",
      icon: "code-slash-outline",
      description: "Learn Twi phrases that use relative clauses to describe people, places, and things",
      words: [
        "Adwuma a wɔyɛeɛ ɛnora no",
        "Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no",
        "Efie a mesii no afe a etwaam no"
      ],
      vocabulary: [
        {
          id: 238,
          english: "The work that was done yesterday",
          native: "Adwuma a wɔyɛeɛ ɛnora no",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/adwuma_a_wɔyɛeɛ_ɛnora_no.m4a")
        },
        {
          id: 241,
          english: "Whoever comes first will be served",
          native: "Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/obiara_a_ɔbɛdi_kan_aba_no_na_yɛbɛ_hwɛɛ_no.m4a")
        },
        {
          id: 242,
          english: "The house that I built last year",
          native: "Efie a mesii no afe a etwaam no",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/efie_a_mesii_no_afe_a_etwaam_no.m4a")
        }
      ],
      questions: [
        {
          id: 109,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The house that I built last year' in Twi?",
          options: [
            { id: 1, text: "Efie a mesii no afe a etwaam no" },
            { id: 2, text: "Adwuma a wɔyɛeɛ ɛnora no" },
            { id: 3, text: "Ɛnyɛ ɛno nko, na yei nso" },
            { id: 4, text: "Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no" }
          ],
          correctOptionId: 1,
          hints: ["efie = house", "afe a etwaam no = last year"],
          explanation: "Efie a mesii no afe a etwaam no = The house that I built last year in Twi."
        },
        {
          id: 107,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The work that was done yesterday' in Twi?",
          options: [
            { id: 1, text: "Sɛ menim a, anka maankɔ" },
            { id: 2, text: "Adwuma a wɔyɛeɛ ɛnora no" },
            { id: 3, text: "Efie a mesii no afe a etwaam no" },
            { id: 4, text: "Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no" }
          ],
          correctOptionId: 2,
          hints: ["adwuma = work", "ɛnora = yesterday"],
          explanation: "Adwuma a wɔyɛeɛ ɛnora no = The work that was done yesterday in Twi."
        },
        {
          id: 110,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/adwuma_a_wɔyɛeɛ_ɛnora_no.m4a"),
          options: [
            { id: 1, text: "It would have been better" },
            { id: 2, text: "The work that was done yesterday" },
            { id: 3, text: "The house that I built last year" },
            { id: 4, text: "Whoever comes first will be served" }
          ],
          correctOptionId: 2,
          hints: ["adwuma = work"],
          explanation: "You heard 'Adwuma a wɔyɛeɛ ɛnora no' which means 'The work that was done yesterday' in Twi."
        },
        {
          id: 108,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/obiara_a_ɔbɛdi_kan_aba_no_na_yɛbɛ_hwɛɛ_no.m4a"),
          options: [
            { id: 1, text: "Although it rained, we continued" },
            { id: 2, text: "The house that I built last year" },
            { id: 3, text: "Whoever comes first will be served" },
            { id: 4, text: "The work that was done yesterday" }
          ],
          correctOptionId: 3,
          hints: ["ɔbɛdi kan = comes first", "hwɛɛ = serve"],
          explanation: "You heard 'Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no' which means 'Whoever comes first will be served' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-1",
    title: "Review: Complex Grammar",
    icon: "refresh-outline",
    description: "Review the complex grammar phrases you've learned for conditionals, contrast, linking, and relative clauses",
    questions: [
      {
        id: 116,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Whoever comes first will be served' in Twi?",
        options: [
          { id: 1, text: "Efie a mesii no afe a etwaam no" },
          { id: 2, text: "Sɛ menim a, anka maankɔ" },
          { id: 3, text: "Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no" },
          { id: 4, text: "Adwuma a wɔyɛeɛ ɛnora no" }
        ],
        correctOptionId: 3,
        hints: ["ɔbɛdi kan = comes first"],
        explanation: "Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no = Whoever comes first will be served."
      },
      {
        id: 113,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'It would have been better' in Twi?",
        options: [
          { id: 1, text: "Adwuma a wɔyɛeɛ ɛnora no" },
          { id: 2, text: "Sɛ menim a, anka maankɔ" },
          { id: 3, text: "Anka ɛbɛyɛ papa" },
          { id: 4, text: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so" }
        ],
        correctOptionId: 3,
        hints: ["papa = better"],
        explanation: "Anka ɛbɛyɛ papa = It would have been better."
      },
      {
        id: 119,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/ɛnyɛ_ɛno_nko_na_yei_nso.m4a"),
        options: [
          { id: 1, text: "It would have been better" },
          { id: 2, text: "If I had known, I would not have gone" },
          { id: 3, text: "Although it rained, we continued" },
          { id: 4, text: "Not only that, but also this" }
        ],
        correctOptionId: 4,
        hints: ["nso = also"],
        explanation: "You heard 'Ɛnyɛ ɛno nko, na yei nso' which means 'Not only that, but also this'."
      },
      {
        id: 117,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The work that was done yesterday' in Twi?",
        options: [
          { id: 1, text: "Ɛnyɛ ɛno nko, na yei nso" },
          { id: 2, text: "Adwuma a wɔyɛeɛ ɛnora no" },
          { id: 3, text: "Efie a mesii no afe a etwaam no" },
          { id: 4, text: "Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no" }
        ],
        correctOptionId: 2,
        hints: ["adwuma = work"],
        explanation: "Adwuma a wɔyɛeɛ ɛnora no = The work that was done yesterday."
      },
      {
        id: 114,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/ɛwom_sɛ_osuo_tɔ_deɛ_nanso_yɛtoaa_so.m4a"),
        options: [
          { id: 1, text: "Not only that, but also this" },
          { id: 2, text: "The work that was done yesterday" },
          { id: 3, text: "Although it rained, we continued" },
          { id: 4, text: "Whoever comes first will be served" }
        ],
        correctOptionId: 3,
        hints: ["osuo = rain"],
        explanation: "You heard 'Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so' which means 'Although it rained, we continued'."
      },
      {
        id: 111,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'If I had known, I would not have gone' in Twi?",
        options: [
          { id: 1, text: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so" },
          { id: 2, text: "Sɛ menim a, anka maankɔ" },
          { id: 3, text: "Anka ɛbɛyɛ papa" },
          { id: 4, text: "Ɛnyɛ ɛno nko, na yei nso" }
        ],
        correctOptionId: 2,
        hints: ["Sɛ menim a = if I had known"],
        explanation: "Sɛ menim a, anka maankɔ = If I had known, I would not have gone."
      },
      {
        id: 118,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The house that I built last year' in Twi?",
        options: [
          { id: 1, text: "Obiara a ɔbɛdi kan aba no na yɛbɛ hwɛɛ no" },
          { id: 2, text: "Anka ɛbɛyɛ papa" },
          { id: 3, text: "Adwuma a wɔyɛeɛ ɛnora no" },
          { id: 4, text: "Efie a mesii no afe a etwaam no" }
        ],
        correctOptionId: 4,
        hints: ["efie = house"],
        explanation: "Efie a mesii no afe a etwaam no = The house that I built last year."
      },
      {
        id: 115,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Not only that, but also this' in Twi?",
        options: [
          { id: 1, text: "Ɛnyɛ ɛno nko, na yei nso" },
          { id: 2, text: "Efie a mesii no afe a etwaam no" },
          { id: 3, text: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so" },
          { id: 4, text: "Anka ɛbɛyɛ papa" }
        ],
        correctOptionId: 1,
        hints: ["nso = also"],
        explanation: "Ɛnyɛ ɛno nko, na yei nso = Not only that, but also this."
      },
      {
        id: 112,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter1/efie_a_mesii_no_afe_a_etwaam_no.m4a"),
        options: [
          { id: 1, text: "The work that was done yesterday" },
          { id: 2, text: "Not only that, but also this" },
          { id: 3, text: "The house that I built last year" },
          { id: 4, text: "Whoever comes first will be served" }
        ],
        correctOptionId: 3,
        hints: ["efie = house"],
        explanation: "You heard 'Efie a mesii no afe a etwaam no' which means 'The house that I built last year'."
      },
      {
        id: 120,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Although it rained, we continued' in Twi?",
        options: [
          { id: 1, text: "Sɛ menim a, anka maankɔ" },
          { id: 2, text: "Ɛnyɛ ɛno nko, na yei nso" },
          { id: 3, text: "Efie a mesii no afe a etwaam no" },
          { id: 4, text: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so" }
        ],
        correctOptionId: 4,
        hints: ["nanso = but"],
        explanation: "Ɛwom sɛ osuo tɔ deɛ, nanso yɛtoaa so = Although it rained, we continued."
      }
    ]
  }
};