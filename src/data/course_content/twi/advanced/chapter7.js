export default {
  id: 7,
  title: "Academic & Research Language",
  description: "Learn academic and research vocabulary in Twi",
  icon: "school-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "7-1",
      type: "phrases",
      title: "Citing Sources",
      icon: "quote-outline",
      description: "Learn phrases for citing sources in Twi",
      words: ["Nhwehwɛmu kyerɛ sɛ", "Sɛdeɛ ɔtwerɛfoɔ no kaeɛ"],
      vocabulary: [
        {
          id: 276,
          english: "Research shows that",
          native: "Nhwehwɛmu kyerɛ sɛ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/nhwehwɛmu_kyerɛ_sɛ.m4a")
        },
        {
          id: 277,
          english: "According to the author",
          native: "Sɛdeɛ ɔtwerɛfoɔ no kaeɛ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/sɛdeɛ_ɔtwerɛfoɔ_no_kaeɛ.m4a")
        }
      ],
      questions: [
        {
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Research shows that' in Twi?",
          options: [
            { id: 1, text: "Nhwehwɛmu kyerɛ sɛ" },
            { id: 2, text: "Sɛdeɛ ɔtwerɛfoɔ no kaeɛ" },
            { id: 3, text: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu" },
            { id: 4, text: "Ntiawa mu no" }
          ],
          correctOptionId: 1,
          hints: ["nhwehwɛmu = research", "kyerɛ sɛ = shows that"],
          explanation: "Nhwehwɛmu kyerɛ sɛ = Research shows that in Twi."
        },
        {
          id: 702,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/sɛdeɛ_ɔtwerɛfoɔ_no_kaeɛ.m4a"),
          options: [
            { id: 1, text: "Research shows that" },
            { id: 2, text: "According to the author" },
            { id: 3, text: "This theory explains the results" },
            { id: 4, text: "In summary" }
          ],
          correctOptionId: 2,
          hints: ["ɔtwerɛfoɔ = author", "kaeɛ = said"],
          explanation: "You heard 'Sɛdeɛ ɔtwerɛfoɔ no kaeɛ' which means 'According to the author' in Twi."
        },
        {
          id: 703,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'According to the author' in Twi?",
          options: [
            { id: 1, text: "Nhwehwɛmu kyerɛ sɛ" },
            { id: 2, text: "Sɛdeɛ ɔtwerɛfoɔ no kaeɛ" },
            { id: 3, text: "Wɔhwehwɛɛ nsɛm no mu yie" },
            { id: 4, text: "Ɛhia nhwehwɛmu foforɔ" }
          ],
          correctOptionId: 2,
          hints: ["ɔtwerɛfoɔ = author"],
          explanation: "Sɛdeɛ ɔtwerɛfoɔ no kaeɛ = According to the author in Twi."
        }
      ]
    },

    {
      id: "7-2",
      type: "phrases",
      title: "Analysis",
      icon: "bar-chart-outline",
      description: "Learn phrases for analysis in Twi",
      words: ["Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu", "Wɔhwehwɛɛ nsɛm no mu yie", "Deɛ wohunuiɛ no ho hia"],
      vocabulary: [
        {
          id: 278,
          english: "This theory explains the results",
          native: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/saa_nsusuiɛ_yi_kyerɛkyerɛ_nsunsuansoɔ_no_mu.m4a")
        },
        {
          id: 279,
          english: "The data was analysed carefully",
          native: "Wɔhwehwɛɛ nsɛm no mu yie",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/wɔhwehwɛɛ_nsɛm_no_mu_yie.m4a")
        },
        {
          id: 280,
          english: "The findings are significant",
          native: "Deɛ wohunuiɛ no ho hia",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/deɛ_wohunuiɛ_no_ho_hia.m4a")
        }
      ],
      questions: [
        {
          id: 704,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'This theory explains the results' in Twi?",
          options: [
            { id: 1, text: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu" },
            { id: 2, text: "Wɔhwehwɛɛ nsɛm no mu yie" },
            { id: 3, text: "Deɛ wohunuiɛ no ho hia" },
            { id: 4, text: "Nhwehwɛmu kyerɛ sɛ" }
          ],
          correctOptionId: 1,
          hints: ["nsusuiɛ = theory", "nsunsuansoɔ = results"],
          explanation: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu = This theory explains the results in Twi."
        },
        {
          id: 705,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/wɔhwehwɛɛ_nsɛm_no_mu_yie.m4a"),
          options: [
            { id: 1, text: "This theory explains the results" },
            { id: 2, text: "The data was analysed carefully" },
            { id: 3, text: "The findings are significant" },
            { id: 4, text: "In summary" }
          ],
          correctOptionId: 2,
          hints: ["wɔhwehwɛɛ = was analysed", "yie = carefully"],
          explanation: "You heard 'Wɔhwehwɛɛ nsɛm no mu yie' which means 'The data was analysed carefully' in Twi."
        },
        {
          id: 706,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The findings are significant' in Twi?",
          options: [
            { id: 1, text: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu" },
            { id: 2, text: "Wɔhwehwɛɛ nsɛm no mu yie" },
            { id: 3, text: "Deɛ wohunuiɛ no ho hia" },
            { id: 4, text: "Ɛhia nhwehwɛmu foforɔ" }
          ],
          correctOptionId: 3,
          hints: ["wohunuiɛ = findings", "ho hia = significant"],
          explanation: "Deɛ wohunuiɛ no ho hia = The findings are significant in Twi."
        },
        {
          id: 707,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/saa_nsusuiɛ_yi_kyerɛkyerɛ_nsunsuansoɔ_no_mu.m4a"),
          options: [
            { id: 1, text: "This theory explains the results" },
            { id: 2, text: "The data was analysed carefully" },
            { id: 3, text: "The findings are significant" },
            { id: 4, text: "According to the author" }
          ],
          correctOptionId: 1,
          hints: ["nsusuiɛ = theory"],
          explanation: "You heard 'Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu' which means 'This theory explains the results' in Twi."
        }
      ]
    },

    {
      id: "7-3",
      type: "phrases",
      title: "Summarising",
      icon: "list-outline",
      description: "Learn phrases for summarising in Twi",
      words: ["Ntiawa mu no", "Ɛhia nhwehwɛmu foforɔ"],
      vocabulary: [
        {
          id: 281,
          english: "In summary",
          native: "Ntiawa mu no",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/ntiawa_mu_no.m4a")
        },
        {
          id: 282,
          english: "Further study is needed",
          native: "Ɛhia nhwehwɛmu foforɔ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/ɛhia_nhwehwɛmu_foforɔ.m4a")
        }
      ],
      questions: [
        {
          id: 708,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'In summary' in Twi?",
          options: [
            { id: 1, text: "Ntiawa mu no" },
            { id: 2, text: "Ɛhia nhwehwɛmu foforɔ" },
            { id: 3, text: "Nhwehwɛmu kyerɛ sɛ" },
            { id: 4, text: "Deɛ wohunuiɛ no ho hia" }
          ],
          correctOptionId: 1,
          hints: ["ntiawa mu = summary"],
          explanation: "Ntiawa mu no = In summary in Twi."
        },
        {
          id: 709,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/ɛhia_nhwehwɛmu_foforɔ.m4a"),
          options: [
            { id: 1, text: "In summary" },
            { id: 2, text: "Further study is needed" },
            { id: 3, text: "Research shows that" },
            { id: 4, text: "The data was analysed carefully" }
          ],
          correctOptionId: 2,
          hints: ["nhwehwɛmu foforɔ = further study"],
          explanation: "You heard 'Ɛhia nhwehwɛmu foforɔ' which means 'Further study is needed' in Twi."
        },
        {
          id: 710,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Further study is needed' in Twi?",
          options: [
            { id: 1, text: "Ntiawa mu no" },
            { id: 2, text: "Ɛhia nhwehwɛmu foforɔ" },
            { id: 3, text: "Nhwehwɛmu kyerɛ sɛ" },
            { id: 4, text: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu" }
          ],
          correctOptionId: 2,
          hints: ["nhwehwɛmu = study"],
          explanation: "Ɛhia nhwehwɛmu foforɔ = Further study is needed in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-7",
    title: "Review: Academic & Research Language",
    icon: "refresh-outline",
    description: "Review all the academic and research vocabulary you've learned",
    questions: [
      {
        id: 711,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Research shows that' in Twi?",
        options: [
          { id: 1, text: "Nhwehwɛmu kyerɛ sɛ" },
          { id: 2, text: "Sɛdeɛ ɔtwerɛfoɔ no kaeɛ" },
          { id: 3, text: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu" },
          { id: 4, text: "Ntiawa mu no" }
        ],
        correctOptionId: 1,
        hints: ["nhwehwɛmu = research"],
        explanation: "Nhwehwɛmu kyerɛ sɛ = Research shows that."
      },
      {
        id: 712,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/deɛ_wohunuiɛ_no_ho_hia.m4a"),
        options: [
          { id: 1, text: "This theory explains the results" },
          { id: 2, text: "The data was analysed carefully" },
          { id: 3, text: "The findings are significant" },
          { id: 4, text: "In summary" }
        ],
        correctOptionId: 3,
        hints: ["wohunuiɛ = findings"],
        explanation: "You heard 'Deɛ wohunuiɛ no ho hia' which means 'The findings are significant'."
      },
      {
        id: 713,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'According to the author' in Twi?",
        options: [
          { id: 1, text: "Nhwehwɛmu kyerɛ sɛ" },
          { id: 2, text: "Sɛdeɛ ɔtwerɛfoɔ no kaeɛ" },
          { id: 3, text: "Wɔhwehwɛɛ nsɛm no mu yie" },
          { id: 4, text: "Ɛhia nhwehwɛmu foforɔ" }
        ],
        correctOptionId: 2,
        hints: ["ɔtwerɛfoɔ = author"],
        explanation: "Sɛdeɛ ɔtwerɛfoɔ no kaeɛ = According to the author."
      },
      {
        id: 714,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter7/ntiawa_mu_no.m4a"),
        options: [
          { id: 1, text: "In summary" },
          { id: 2, text: "Further study is needed" },
          { id: 3, text: "Research shows that" },
          { id: 4, text: "According to the author" }
        ],
        correctOptionId: 1,
        hints: ["ntiawa mu = summary"],
        explanation: "You heard 'Ntiawa mu no' which means 'In summary'."
      },
      {
        id: 715,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'This theory explains the results' in Twi?",
        options: [
          { id: 1, text: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu" },
          { id: 2, text: "Wɔhwehwɛɛ nsɛm no mu yie" },
          { id: 3, text: "Deɛ wohunuiɛ no ho hia" },
          { id: 4, text: "Nhwehwɛmu kyerɛ sɛ" }
        ],
        correctOptionId: 1,
        hints: ["nsusuiɛ = theory"],
        explanation: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu = This theory explains the results."
      },
      {
        id: 716,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The data was analysed carefully' in Twi?",
        options: [
          { id: 1, text: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu" },
          { id: 2, text: "Wɔhwehwɛɛ nsɛm no mu yie" },
          { id: 3, text: "Deɛ wohunuiɛ no ho hia" },
          { id: 4, text: "Ɛhia nhwehwɛmu foforɔ" }
        ],
        correctOptionId: 2,
        hints: ["yie = carefully"],
        explanation: "Wɔhwehwɛɛ nsɛm no mu yie = The data was analysed carefully."
      },
      {
        id: 717,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The findings are significant' in Twi?",
        options: [
          { id: 1, text: "Saa nsusuiɛ yi kyerɛkyerɛ nsunsuansoɔ no mu" },
          { id: 2, text: "Wɔhwehwɛɛ nsɛm no mu yie" },
          { id: 3, text: "Deɛ wohunuiɛ no ho hia" },
          { id: 4, text: "Ntiawa mu no" }
        ],
        correctOptionId: 3,
        hints: ["ho hia = significant"],
        explanation: "Deɛ wohunuiɛ no ho hia = The findings are significant."
      },
      {
        id: 718,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'In summary' in Twi?",
        options: [
          { id: 1, text: "Ntiawa mu no" },
          { id: 2, text: "Ɛhia nhwehwɛmu foforɔ" },
          { id: 3, text: "Nhwehwɛmu kyerɛ sɛ" },
          { id: 4, text: "Sɛdeɛ ɔtwerɛfoɔ no kaeɛ" }
        ],
        correctOptionId: 1,
        hints: ["ntiawa mu = summary"],
        explanation: "Ntiawa mu no = In summary."
      },
      {
        id: 719,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Further study is needed' in Twi?",
        options: [
          { id: 1, text: "Ntiawa mu no" },
          { id: 2, text: "Ɛhia nhwehwɛmu foforɔ" },
          { id: 3, text: "Nhwehwɛmu kyerɛ sɛ" },
          { id: 4, text: "Deɛ wohunuiɛ no ho hia" }
        ],
        correctOptionId: 2,
        hints: ["nhwehwɛmu = study"],
        explanation: "Ɛhia nhwehwɛmu foforɔ = Further study is needed."
      }
    ]
  }
};