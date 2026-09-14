export default {
  id: 7,
  title: "Academic & Research Language",
  description: "Learn academic and research vocabulary in Ga",
  icon: "school-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "7-1",
      type: "phrases",
      title: "Research & Evidence",
      icon: "search-outline",
      description: "Learn phrases about research and evidence in Ga",
      words: ["Nitaomɔ tsɔɔ akɛ", "Akwɛ saji lɛ amli jogbaŋŋ", "Nɔ ni ana lɛ he hiaa"],
      vocabulary: [
        {
          id: 289,
          english: "Research shows that",
          native: "Nitaomɔ tsɔɔ akɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/nitaomɔ_tsɔɔ_akɛ.m4a")
        },
        {
          id: 292,
          english: "The data was analysed carefully",
          native: "Akwɛ saji lɛ amli jogbaŋŋ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/akwɛ_saji_lɛ_amli_jogbaŋŋ.m4a")
        },
        {
          id: 295,
          english: "The findings are significant",
          native: "Nɔ ni ana lɛ he hiaa",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/nɔ_ni_ana_lɛ_he_hiaa.m4a")
        }
      ],
      questions: [
        {
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Research shows that' in Ga?",
          options: [
            { id: 1, text: "Nitaomɔ tsɔɔ akɛ" },
            { id: 2, text: "Akwɛ saji lɛ amli jogbaŋŋ" },
            { id: 3, text: "Nɔ ni ana lɛ he hiaa" },
            { id: 4, text: "Yɛ kukufoo mli" }
          ],
          correctOptionId: 1,
          hints: ["nitaomɔ = research", "tsɔɔ akɛ = shows that"],
          explanation: "Nitaomɔ tsɔɔ akɛ = Research shows that in Ga."
        },
        {
          id: 702,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/akwɛ_saji_lɛ_amli_jogbaŋŋ.m4a"),
          options: [
            { id: 1, text: "Research shows that" },
            { id: 2, text: "The data was analysed carefully" },
            { id: 3, text: "The findings are significant" },
            { id: 4, text: "In summary" }
          ],
          correctOptionId: 2,
          hints: ["saji = data", "jogbaŋŋ = carefully"],
          explanation: "You heard 'Akwɛ saji lɛ amli jogbaŋŋ' which means 'The data was analysed carefully' in Ga."
        },
        {
          id: 703,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The findings are significant' in Ga?",
          options: [
            { id: 1, text: "Nitaomɔ tsɔɔ akɛ" },
            { id: 2, text: "Akwɛ saji lɛ amli jogbaŋŋ" },
            { id: 3, text: "Nɔ ni ana lɛ he hiaa" },
            { id: 4, text: "Nikasemɔ kroko he miihia" }
          ],
          correctOptionId: 3,
          hints: ["nɔ ni ana = findings", "he hiaa = significant"],
          explanation: "Nɔ ni ana lɛ he hiaa = The findings are significant in Ga."
        }
      ]
    },

    {
      id: "7-2",
      type: "phrases",
      title: "Academic Ideas & Sources",
      icon: "library-outline",
      description: "Learn phrases about academic ideas and sources in Ga",
      words: ["Bɔ ni ŋmalɔ lɛ tsɔɔ", "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi"],
      vocabulary: [
        {
          id: 290,
          english: "According to the author",
          native: "Bɔ ni ŋmalɔ lɛ tsɔɔ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/bɔ_ni_ŋmalɔ_lɛ_tsɔɔ.m4a")
        },
        {
          id: 291,
          english: "This theory explains the results",
          native: "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/nɛkɛ_susumɔ_nɛɛ_tsɔɔ_nɔ_ni_jɛ_mli_kɛba_shishi.m4a")
        }
      ],
      questions: [
        {
          id: 704,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'According to the author' in Ga?",
          options: [
            { id: 1, text: "Bɔ ni ŋmalɔ lɛ tsɔɔ" },
            { id: 2, text: "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi" },
            { id: 3, text: "Yɛ kukufoo mli" },
            { id: 4, text: "Nikasemɔ kroko he miihia" }
          ],
          correctOptionId: 1,
          hints: ["ŋmalɔ = author", "tsɔɔ = according to"],
          explanation: "Bɔ ni ŋmalɔ lɛ tsɔɔ = According to the author in Ga."
        },
        {
          id: 705,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/nɛkɛ_susumɔ_nɛɛ_tsɔɔ_nɔ_ni_jɛ_mli_kɛba_shishi.m4a"),
          options: [
            { id: 1, text: "According to the author" },
            { id: 2, text: "This theory explains the results" },
            { id: 3, text: "In summary" },
            { id: 4, text: "Further study is needed" }
          ],
          correctOptionId: 2,
          hints: ["susumɔ = theory", "shishi = meaning/explanation"],
          explanation: "You heard 'Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi' which means 'This theory explains the results' in Ga."
        },
        {
          id: 706,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'This theory explains the results' in Ga?",
          options: [
            { id: 1, text: "Bɔ ni ŋmalɔ lɛ tsɔɔ" },
            { id: 2, text: "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi" },
            { id: 3, text: "Yɛ kukufoo mli" },
            { id: 4, text: "Nɔ ni ana lɛ he hiaa" }
          ],
          correctOptionId: 2,
          hints: ["susumɔ = theory"],
          explanation: "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi = This theory explains the results in Ga."
        }
      ]
    },

    {
      id: "7-3",
      type: "phrases",
      title: "Summarising & Further Study",
      icon: "list-outline",
      description: "Learn phrases for summarising and suggesting further study in Ga",
      words: ["Yɛ kukufoo mli", "Nikasemɔ kroko he miihia"],
      vocabulary: [
        {
          id: 293,
          english: "In summary",
          native: "Yɛ kukufoo mli",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/yɛ_kukufoo_mli.m4a")
        },
        {
          id: 294,
          english: "Further study is needed",
          native: "Nikasemɔ kroko he miihia",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/nikasemɔ_kroko_he_miihia.m4a")
        }
      ],
      questions: [
        {
          id: 707,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'In summary' in Ga?",
          options: [
            { id: 1, text: "Yɛ kukufoo mli" },
            { id: 2, text: "Nikasemɔ kroko he miihia" },
            { id: 3, text: "Bɔ ni ŋmalɔ lɛ tsɔɔ" },
            { id: 4, text: "Nɔ ni ana lɛ he hiaa" }
          ],
          correctOptionId: 1,
          hints: ["kukufoo = summary"],
          explanation: "Yɛ kukufoo mli = In summary in Ga."
        },
        {
          id: 708,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/nikasemɔ_kroko_he_miihia.m4a"),
          options: [
            { id: 1, text: "In summary" },
            { id: 2, text: "Further study is needed" },
            { id: 3, text: "Research shows that" },
            { id: 4, text: "The data was analysed carefully" }
          ],
          correctOptionId: 2,
          hints: ["nikasemɔ = study", "miihia = is needed"],
          explanation: "You heard 'Nikasemɔ kroko he miihia' which means 'Further study is needed' in Ga."
        },
        {
          id: 709,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Further study is needed' in Ga?",
          options: [
            { id: 1, text: "Yɛ kukufoo mli" },
            { id: 2, text: "Nikasemɔ kroko he miihia" },
            { id: 3, text: "Bɔ ni ŋmalɔ lɛ tsɔɔ" },
            { id: 4, text: "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi" }
          ],
          correctOptionId: 2,
          hints: ["nikasemɔ = study"],
          explanation: "Nikasemɔ kroko he miihia = Further study is needed in Ga."
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
        id: 710,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Research shows that' in Ga?",
        options: [
          { id: 1, text: "Nitaomɔ tsɔɔ akɛ" },
          { id: 2, text: "Akwɛ saji lɛ amli jogbaŋŋ" },
          { id: 3, text: "Nɔ ni ana lɛ he hiaa" },
          { id: 4, text: "Yɛ kukufoo mli" }
        ],
        correctOptionId: 1,
        hints: ["nitaomɔ = research"],
        explanation: "Nitaomɔ tsɔɔ akɛ = Research shows that."
      },
      {
        id: 711,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/bɔ_ni_ŋmalɔ_lɛ_tsɔɔ.m4a"),
        options: [
          { id: 1, text: "According to the author" },
          { id: 2, text: "This theory explains the results" },
          { id: 3, text: "In summary" },
          { id: 4, text: "Further study is needed" }
        ],
        correctOptionId: 1,
        hints: ["ŋmalɔ = author"],
        explanation: "You heard 'Bɔ ni ŋmalɔ lɛ tsɔɔ' which means 'According to the author'."
      },
      {
        id: 712,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The data was analysed carefully' in Ga?",
        options: [
          { id: 1, text: "Nitaomɔ tsɔɔ akɛ" },
          { id: 2, text: "Akwɛ saji lɛ amli jogbaŋŋ" },
          { id: 3, text: "Nɔ ni ana lɛ he hiaa" },
          { id: 4, text: "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi" }
        ],
        correctOptionId: 2,
        hints: ["saji = data"],
        explanation: "Akwɛ saji lɛ amli jogbaŋŋ = The data was analysed carefully."
      },
      {
        id: 713,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/nɔ_ni_ana_lɛ_he_hiaa.m4a"),
        options: [
          { id: 1, text: "The findings are significant" },
          { id: 2, text: "In summary" },
          { id: 3, text: "Further study is needed" },
          { id: 4, text: "Research shows that" }
        ],
        correctOptionId: 1,
        hints: ["he hiaa = significant"],
        explanation: "You heard 'Nɔ ni ana lɛ he hiaa' which means 'The findings are significant'."
      },
      {
        id: 714,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'This theory explains the results' in Ga?",
        options: [
          { id: 1, text: "Bɔ ni ŋmalɔ lɛ tsɔɔ" },
          { id: 2, text: "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi" },
          { id: 3, text: "Yɛ kukufoo mli" },
          { id: 4, text: "Nikasemɔ kroko he miihia" }
        ],
        correctOptionId: 2,
        hints: ["susumɔ = theory"],
        explanation: "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi = This theory explains the results."
      },
      {
        id: 715,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'In summary' in Ga?",
        options: [
          { id: 1, text: "Yɛ kukufoo mli" },
          { id: 2, text: "Nikasemɔ kroko he miihia" },
          { id: 3, text: "Bɔ ni ŋmalɔ lɛ tsɔɔ" },
          { id: 4, text: "Nɔ ni ana lɛ he hiaa" }
        ],
        correctOptionId: 1,
        hints: ["kukufoo = summary"],
        explanation: "Yɛ kukufoo mli = In summary."
      },
      {
        id: 716,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Further study is needed' in Ga?",
        options: [
          { id: 1, text: "Yɛ kukufoo mli" },
          { id: 2, text: "Nikasemɔ kroko he miihia" },
          { id: 3, text: "Nɛkɛ susumɔ nɛɛ tsɔɔ nɔ ni jɛ mli kɛba shishi" },
          { id: 4, text: "Akwɛ saji lɛ amli jogbaŋŋ" }
        ],
        correctOptionId: 2,
        hints: ["nikasemɔ = study"],
        explanation: "Nikasemɔ kroko he miihia = Further study is needed."
      },
      {
        id: 717,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter7/yɛ_kukufoo_mli.m4a"),
        options: [
          { id: 1, text: "Research shows that" },
          { id: 2, text: "According to the author" },
          { id: 3, text: "In summary" },
          { id: 4, text: "Further study is needed" }
        ],
        correctOptionId: 3,
        hints: ["kukufoo = summary"],
        explanation: "You heard 'Yɛ kukufoo mli' which means 'In summary'."
      }
    ]
  }
};