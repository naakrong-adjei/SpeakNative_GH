export default {
  id: 7,
  title: "Social Life",
  description: "Learn social life vocabulary in Ga",
  icon: "people-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "7-1",
      type: "phrases",
      title: "Plans & Invitations",
      icon: "calendar-outline",
      description: "Learn how to make plans and invite people in Ga",
      words: ["Nyɛhaa wɔkpea Hɔɔ", "Oobaa gbijurɔ lɛ shishi lo?", "Tsɛmɔ onanemɛi"],
      vocabulary: [
        {
          id: 204,
          english: "Let's meet on Saturday",
          native: "Nyɛhaa wɔkpea Hɔɔ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/nyɛhaa_wɔkpea_hɔɔ.m4a")
        },
        {
          id: 205,
          english: "Are you coming to the party?",
          native: "Oobaa gbijurɔ lɛ shishi lo?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/oobaa_gbijurɔ_lɛ_shishi_lo.m4a")
        },
        {
          id: 213,
          english: "Invite your friends",
          native: "Tsɛmɔ onanemɛi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/tsɛmɔ_onanemɛi.m4a")
        }
      ],
      questions: [
        {
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Let's meet on Saturday' in Ga?",
          options: [
            { id: 1, text: "Nyɛhaa wɔkpea Hɔɔ" },
            { id: 2, text: "Oobaa gbijurɔ lɛ shishi lo?" },
            { id: 3, text: "Tsɛmɔ onanemɛi" },
            { id: 4, text: "Nyɛhaa wɔyaa shi kome" }
          ],
          correctOptionId: 1,
          hints: ["Hɔɔ = Saturday"],
          explanation: "Nyɛhaa wɔkpea Hɔɔ = Let's meet on Saturday in Ga."
        },
        {
          id: 702,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/oobaa_gbijurɔ_lɛ_shishi_lo.m4a"),
          options: [
            { id: 1, text: "Let's meet on Saturday" },
            { id: 2, text: "Are you coming to the party?" },
            { id: 3, text: "Invite your friends" },
            { id: 4, text: "I will pick you up" }
          ],
          correctOptionId: 2,
          hints: ["gbijurɔ = party", "shishi = under"],
          explanation: "You heard 'Oobaa gbijurɔ lɛ shishi lo?' which means 'Are you coming to the party?' in Ga."
        },
        {
          id: 703,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Invite your friends' in Ga?",
          options: [
            { id: 1, text: "Nyɛhaa wɔkpea Hɔɔ" },
            { id: 2, text: "Oobaa gbijurɔ lɛ shishi lo?" },
            { id: 3, text: "Tsɛmɔ onanemɛi" },
            { id: 4, text: "Lala lɛ ŋɔɔ" }
          ],
          correctOptionId: 3,
          hints: ["Tsɛmɔ = invite", "onanemɛi = your friends"],
          explanation: "Tsɛmɔ onanemɛi = Invite your friends in Ga."
        }
      ]
    },

    {
      id: "7-2",
      type: "phrases",
      title: "Spending Time Together",
      icon: "users-outline",
      description: "Learn phrases for spending time with others in Ga",
      words: ["Nyɛhaa wɔyaa shi kome", "Nyɛhaa wɔfɛɛ wɔyea nii", "Maawo bo"],
      vocabulary: [
        {
          id: 207,
          english: "Let's go together",
          native: "Nyɛhaa wɔyaa shi kome",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/nyɛhaa_wɔyaa_shi_kome.m4a")
        },
        {
          id: 208,
          english: "Let's eat together",
          native: "Nyɛhaa wɔfɛɛ wɔyea nii",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/nyɛhaa_wɔfɛɛ_wɔyea_nii.m4a")
        },
        {
          id: 209,
          english: "I will pick you up",
          native: "Maawo bo",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/maawo_bo.m4a")
        }
      ],
      questions: [
        {
          id: 704,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Let's go together' in Ga?",
          options: [
            { id: 1, text: "Nyɛhaa wɔyaa shi kome" },
            { id: 2, text: "Nyɛhaa wɔfɛɛ wɔyea nii" },
            { id: 3, text: "Maawo bo" },
            { id: 4, text: "Minaaa be ŋmɛnɛ" }
          ],
          correctOptionId: 1,
          hints: ["wɔyaa = let's go", "shi kome = together"],
          explanation: "Nyɛhaa wɔyaa shi kome = Let's go together in Ga."
        },
        {
          id: 705,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/nyɛhaa_wɔfɛɛ_wɔyea_nii.m4a"),
          options: [
            { id: 1, text: "Let's go together" },
            { id: 2, text: "Let's eat together" },
            { id: 3, text: "I will pick you up" },
            { id: 4, text: "The music is nice" }
          ],
          correctOptionId: 2,
          hints: ["wɔyea nii = let's eat"],
          explanation: "You heard 'Nyɛhaa wɔfɛɛ wɔyea nii' which means 'Let's eat together' in Ga."
        },
        {
          id: 706,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I will pick you up' in Ga?",
          options: [
            { id: 1, text: "Nyɛhaa wɔyaa shi kome" },
            { id: 2, text: "Nyɛhaa wɔfɛɛ wɔyea nii" },
            { id: 3, text: "Maawo bo" },
            { id: 4, text: "Tsɛmɔ onanemɛi" }
          ],
          correctOptionId: 3,
          hints: ["Maawo = I will pick"],
          explanation: "Maawo bo = I will pick you up in Ga."
        }
      ]
    },

    {
      id: "7-3",
      type: "phrases",
      title: "Social Events & Activities",
      icon: "musical-notes-outline",
      description: "Learn phrases for social events and activities in Ga",
      words: ["Minaaa be ŋmɛnɛ", "Lala lɛ ŋɔɔ"],
      vocabulary: [
        {
          id: 206,
          english: "I am busy today",
          native: "Minaaa be ŋmɛnɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/minaaa_be_ŋmɛnɛ.m4a")
        },
        {
          id: 210,
          english: "The music is nice",
          native: "Lala lɛ ŋɔɔ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/lala_lɛ_ŋɔɔ.m4a")
        }
      ],
      questions: [
        {
          id: 707,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am busy today' in Ga?",
          options: [
            { id: 1, text: "Minaaa be ŋmɛnɛ" },
            { id: 2, text: "Lala lɛ ŋɔɔ" },
            { id: 3, text: "Maawo bo" },
            { id: 4, text: "Nyɛhaa wɔyaa shi kome" }
          ],
          correctOptionId: 1,
          hints: ["ŋmɛnɛ = today", "minaaa be = I don't have time"],
          explanation: "Minaaa be ŋmɛnɛ = I am busy today in Ga."
        },
        {
          id: 708,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/lala_lɛ_ŋɔɔ.m4a"),
          options: [
            { id: 1, text: "I am busy today" },
            { id: 2, text: "The music is nice" },
            { id: 3, text: "Let's go together" },
            { id: 4, text: "Invite your friends" }
          ],
          correctOptionId: 2,
          hints: ["lala = music", "ŋɔɔ = nice"],
          explanation: "You heard 'Lala lɛ ŋɔɔ' which means 'The music is nice' in Ga."
        },
        {
          id: 709,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The music is nice' in Ga?",
          options: [
            { id: 1, text: "Minaaa be ŋmɛnɛ" },
            { id: 2, text: "Lala lɛ ŋɔɔ" },
            { id: 3, text: "Maawo bo" },
            { id: 4, text: "Nyɛhaa wɔkpea Hɔɔ" }
          ],
          correctOptionId: 2,
          hints: ["lala = music"],
          explanation: "Lala lɛ ŋɔɔ = The music is nice in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-7",
    title: "Review: Social Life",
    icon: "refresh-outline",
    description: "Review all the social life vocabulary you've learned",
    questions: [
      {
        id: 710,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Let's meet on Saturday' in Ga?",
        options: [
          { id: 1, text: "Nyɛhaa wɔkpea Hɔɔ" },
          { id: 2, text: "Oobaa gbijurɔ lɛ shishi lo?" },
          { id: 3, text: "Tsɛmɔ onanemɛi" },
          { id: 4, text: "Nyɛhaa wɔyaa shi kome" }
        ],
        correctOptionId: 1,
        hints: ["Hɔɔ = Saturday"],
        explanation: "Nyɛhaa wɔkpea Hɔɔ = Let's meet on Saturday."
      },
      {
        id: 711,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/maawo_bo.m4a"),
        options: [
          { id: 1, text: "Let's go together" },
          { id: 2, text: "Let's eat together" },
          { id: 3, text: "I will pick you up" },
          { id: 4, text: "Invite your friends" }
        ],
        correctOptionId: 3,
        hints: ["Maawo = I will pick"],
        explanation: "You heard 'Maawo bo' which means 'I will pick you up'."
      },
      {
        id: 712,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Are you coming to the party?' in Ga?",
        options: [
          { id: 1, text: "Nyɛhaa wɔkpea Hɔɔ" },
          { id: 2, text: "Oobaa gbijurɔ lɛ shishi lo?" },
          { id: 3, text: "Tsɛmɔ onanemɛi" },
          { id: 4, text: "Lala lɛ ŋɔɔ" }
        ],
        correctOptionId: 2,
        hints: ["gbijurɔ = party"],
        explanation: "Oobaa gbijurɔ lɛ shishi lo? = Are you coming to the party?"
      },
      {
        id: 713,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter7/minaaa_be_ŋmɛnɛ.m4a"),
        options: [
          { id: 1, text: "I am busy today" },
          { id: 2, text: "The music is nice" },
          { id: 3, text: "Let's eat together" },
          { id: 4, text: "Invite your friends" }
        ],
        correctOptionId: 1,
        hints: ["ŋmɛnɛ = today"],
        explanation: "You heard 'Minaaa be ŋmɛnɛ' which means 'I am busy today'."
      },
      {
        id: 714,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Let's go together' in Ga?",
        options: [
          { id: 1, text: "Nyɛhaa wɔyaa shi kome" },
          { id: 2, text: "Nyɛhaa wɔfɛɛ wɔyea nii" },
          { id: 3, text: "Maawo bo" },
          { id: 4, text: "Minaaa be ŋmɛnɛ" }
        ],
        correctOptionId: 1,
        hints: ["shi kome = together"],
        explanation: "Nyɛhaa wɔyaa shi kome = Let's go together."
      },
      {
        id: 715,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Let's eat together' in Ga?",
        options: [
          { id: 1, text: "Nyɛhaa wɔyaa shi kome" },
          { id: 2, text: "Nyɛhaa wɔfɛɛ wɔyea nii" },
          { id: 3, text: "Maawo bo" },
          { id: 4, text: "Lala lɛ ŋɔɔ" }
        ],
        correctOptionId: 2,
        hints: ["wɔyea nii = let's eat"],
        explanation: "Nyɛhaa wɔfɛɛ wɔyea nii = Let's eat together."
      },
      {
        id: 716,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Invite your friends' in Ga?",
        options: [
          { id: 1, text: "Nyɛhaa wɔkpea Hɔɔ" },
          { id: 2, text: "Oobaa gbijurɔ lɛ shishi lo?" },
          { id: 3, text: "Tsɛmɔ onanemɛi" },
          { id: 4, text: "Lala lɛ ŋɔɔ" }
        ],
        correctOptionId: 3,
        hints: ["onanemɛi = your friends"],
        explanation: "Tsɛmɔ onanemɛi = Invite your friends."
      },
      {
        id: 717,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The music is nice' in Ga?",
        options: [
          { id: 1, text: "Minaaa be ŋmɛnɛ" },
          { id: 2, text: "Lala lɛ ŋɔɔ" },
          { id: 3, text: "Maawo bo" },
          { id: 4, text: "Nyɛhaa wɔkpea Hɔɔ" }
        ],
        correctOptionId: 2,
        hints: ["lala = music"],
        explanation: "Lala lɛ ŋɔɔ = The music is nice."
      }
    ]
  }
};