export default {
  id: 7,
  title: "Social Life",
  description: "Learn social life vocabulary in Twi",
  icon: "people-outline",
  totalXp: 10,
  difficulty: "Intermediate",

  sections: [
    {
      id: "7-1",
      type: "phrases",
      title: "Making Plans",
      icon: "calendar-outline",
      description: "Learn how to make plans and invite people in Twi",
      words: ["Momma yɛnhyia Memeneda", "Woreba apontoɔ no ase?", "Me nni adagye ɛnnɛ", "Mmere bɛn na ɛfiri aseɛ?"],
      vocabulary: [
        {
          id: 217,
          english: "Let's meet on Saturday",
          native: "Momma yɛnhyia Memeneda",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/momma_yɛnhyia_memeneda.m4a")
        },
        {
          id: 218,
          english: "Are you coming to the party?",
          native: "Woreba apontoɔ no ase?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/woreba_apontoɔ_no_ase.m4a")
        },
        {
          id: 219,
          english: "I am busy today",
          native: "Me nni adagye ɛnnɛ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/me_nni_adagye_ɛnnɛ.m4a")
        },
        {
          id: 220,
          english: "What time does it start?",
          native: "Mmere bɛn na ɛfiri aseɛ?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/mmere_bɛn_na_ɛfiri_aseɛ.m4a")
        }
      ],
      questions: [
        {
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Let's meet on Saturday' in Twi?",
          options: [
            { id: 1, text: "Momma yɛnhyia Memeneda" },
            { id: 2, text: "Woreba apontoɔ no ase?" },
            { id: 3, text: "Me nni adagye ɛnnɛ" },
            { id: 4, text: "Mmere bɛn na ɛfiri aseɛ?" }
          ],
          correctOptionId: 1,
          hints: ["Memeneda = Saturday"],
          explanation: "Momma yɛnhyia Memeneda = Let's meet on Saturday in Twi."
        },
        {
          id: 702,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/woreba_apontoɔ_no_ase.m4a"),
          options: [
            { id: 1, text: "Let's meet on Saturday" },
            { id: 2, text: "Are you coming to the party?" },
            { id: 3, text: "I am busy today" },
            { id: 4, text: "What time does it start?" }
          ],
          correctOptionId: 2,
          hints: ["apontoɔ = party"],
          explanation: "You heard 'Woreba apontoɔ no ase?' which means 'Are you coming to the party?' in Twi."
        },
        {
          id: 703,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am busy today' in Twi?",
          options: [
            { id: 1, text: "Momma yɛnhyia Memeneda" },
            { id: 2, text: "Woreba apontoɔ no ase?" },
            { id: 3, text: "Me nni adagye ɛnnɛ" },
            { id: 4, text: "Momma yɛnkɔ bom" }
          ],
          correctOptionId: 3,
          hints: ["ɛnnɛ = today"],
          explanation: "Me nni adagye ɛnnɛ = I am busy today in Twi."
        },
        {
          id: 704,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/mmere_bɛn_na_ɛfiri_aseɛ.m4a"),
          options: [
            { id: 1, text: "Let's meet on Saturday" },
            { id: 2, text: "Are you coming to the party?" },
            { id: 3, text: "I am busy today" },
            { id: 4, text: "What time does it start?" }
          ],
          correctOptionId: 4,
          hints: ["mmere = time", "ɛfiri aseɛ = it starts"],
          explanation: "You heard 'Mmere bɛn na ɛfiri aseɛ?' which means 'What time does it start?' in Twi."
        }
      ]
    },

    {
      id: "7-2",
      type: "phrases",
      title: "Going Out Together",
      icon: "users-outline",
      description: "Learn phrases for spending time with others in Twi",
      words: ["Momma yɛnkɔ bom", "Momma yɛnbom nnidi", "Mɛba abɛ fa wo"],
      vocabulary: [
        {
          id: 221,
          english: "Let's go together",
          native: "Momma yɛnkɔ bom",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/momma_yɛnkɔ_bom.m4a")
        },
        {
          id: 222,
          english: "Let's eat together",
          native: "Momma yɛnbom nnidi",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/momma_yɛnbom_nnidi.m4a")
        },
        {
          id: 223,
          english: "I will pick you up",
          native: "Mɛba abɛ fa wo",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/mɛba_abɛ_fa_wo.m4a")
        }
      ],
      questions: [
        {
          id: 705,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Let's go together' in Twi?",
          options: [
            { id: 1, text: "Momma yɛnkɔ bom" },
            { id: 2, text: "Momma yɛnbom nnidi" },
            { id: 3, text: "Mɛba abɛ fa wo" },
            { id: 4, text: "Nnwom no yɛ dɛ" }
          ],
          correctOptionId: 1,
          hints: ["bom = together"],
          explanation: "Momma yɛnkɔ bom = Let's go together in Twi."
        },
        {
          id: 706,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/momma_yɛnbom_nnidi.m4a"),
          options: [
            { id: 1, text: "Let's go together" },
            { id: 2, text: "Let's eat together" },
            { id: 3, text: "I will pick you up" },
            { id: 4, text: "The music is nice" }
          ],
          correctOptionId: 2,
          hints: ["nnidi = eat"],
          explanation: "You heard 'Momma yɛnbom nnidi' which means 'Let's eat together' in Twi."
        },
        {
          id: 707,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I will pick you up' in Twi?",
          options: [
            { id: 1, text: "Momma yɛnkɔ bom" },
            { id: 2, text: "Momma yɛnbom nnidi" },
            { id: 3, text: "Mɛba abɛ fa wo" },
            { id: 4, text: "M'ani gyeeɛ" }
          ],
          correctOptionId: 3,
          hints: ["Mɛba = I will come", "fa wo = pick you"],
          explanation: "Mɛba abɛ fa wo = I will pick you up in Twi."
        },
        {
          id: 708,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/momma_yɛnkɔ_bom.m4a"),
          options: [
            { id: 1, text: "Let's go together" },
            { id: 2, text: "Let's eat together" },
            { id: 3, text: "I will pick you up" },
            { id: 4, text: "Invite your friends" }
          ],
          correctOptionId: 1,
          hints: ["bom = together"],
          explanation: "You heard 'Momma yɛnkɔ bom' which means 'Let's go together' in Twi."
        }
      ]
    },

    {
      id: "7-3",
      type: "phrases",
      title: "Enjoying Yourself",
      icon: "musical-notes-outline",
      description: "Learn phrases for enjoying yourself and inviting others in Twi",
      words: ["Nnwom no yɛ dɛ", "M'ani gyeeɛ", "To nsa frɛ wo nnamfonom"],
      vocabulary: [
        {
          id: 224,
          english: "The music is nice",
          native: "Nnwom no yɛ dɛ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/nnwom_no_yɛ_dɛ.m4a")
        },
        {
          id: 225,
          english: "I enjoyed myself",
          native: "M'ani gyeeɛ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/m_ani_gyeeɛ.m4a")
        },
        {
          id: 226,
          english: "Invite your friends",
          native: "To nsa frɛ wo nnamfonom",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/to_nsa_frɛ_wo_nnamfonom.m4a")
        }
      ],
      questions: [
        {
          id: 709,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The music is nice' in Twi?",
          options: [
            { id: 1, text: "Nnwom no yɛ dɛ" },
            { id: 2, text: "M'ani gyeeɛ" },
            { id: 3, text: "To nsa frɛ wo nnamfonom" },
            { id: 4, text: "Momma yɛnkɔ bom" }
          ],
          correctOptionId: 1,
          hints: ["nnwom = music", "yɛ dɛ = is nice"],
          explanation: "Nnwom no yɛ dɛ = The music is nice in Twi."
        },
        {
          id: 710,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/m_ani_gyeeɛ.m4a"),
          options: [
            { id: 1, text: "The music is nice" },
            { id: 2, text: "I enjoyed myself" },
            { id: 3, text: "Invite your friends" },
            { id: 4, text: "Let's go together" }
          ],
          correctOptionId: 2,
          hints: ["M'ani gyeeɛ = I enjoyed myself"],
          explanation: "You heard 'M'ani gyeeɛ' which means 'I enjoyed myself' in Twi."
        },
        {
          id: 711,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Invite your friends' in Twi?",
          options: [
            { id: 1, text: "Nnwom no yɛ dɛ" },
            { id: 2, text: "M'ani gyeeɛ" },
            { id: 3, text: "To nsa frɛ wo nnamfonom" },
            { id: 4, text: "Mɛba abɛ fa wo" }
          ],
          correctOptionId: 3,
          hints: ["frɛ = invite", "nnamfonom = friends"],
          explanation: "To nsa frɛ wo nnamfonom = Invite your friends in Twi."
        },
        {
          id: 712,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/nnwom_no_yɛ_dɛ.m4a"),
          options: [
            { id: 1, text: "The music is nice" },
            { id: 2, text: "I enjoyed myself" },
            { id: 3, text: "Invite your friends" },
            { id: 4, text: "Let's eat together" }
          ],
          correctOptionId: 1,
          hints: ["nnwom = music"],
          explanation: "You heard 'Nnwom no yɛ dɛ' which means 'The music is nice' in Twi."
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
        id: 713,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Let's meet on Saturday' in Twi?",
        options: [
          { id: 1, text: "Momma yɛnhyia Memeneda" },
          { id: 2, text: "Woreba apontoɔ no ase?" },
          { id: 3, text: "Me nni adagye ɛnnɛ" },
          { id: 4, text: "Mmere bɛn na ɛfiri aseɛ?" }
        ],
        correctOptionId: 1,
        hints: ["Memeneda = Saturday"],
        explanation: "Momma yɛnhyia Memeneda = Let's meet on Saturday."
      },
      {
        id: 714,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/to_nsa_frɛ_wo_nnamfonom.m4a"),
        options: [
          { id: 1, text: "The music is nice" },
          { id: 2, text: "I enjoyed myself" },
          { id: 3, text: "Invite your friends" },
          { id: 4, text: "I will pick you up" }
        ],
        correctOptionId: 3,
        hints: ["nnamfonom = friends"],
        explanation: "You heard 'To nsa frɛ wo nnamfonom' which means 'Invite your friends'."
      },
      {
        id: 715,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Are you coming to the party?' in Twi?",
        options: [
          { id: 1, text: "Momma yɛnhyia Memeneda" },
          { id: 2, text: "Woreba apontoɔ no ase?" },
          { id: 3, text: "Me nni adagye ɛnnɛ" },
          { id: 4, text: "Nnwom no yɛ dɛ" }
        ],
        correctOptionId: 2,
        hints: ["apontoɔ = party"],
        explanation: "Woreba apontoɔ no ase? = Are you coming to the party?"
      },
      {
        id: 716,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter7/mɛba_abɛ_fa_wo.m4a"),
        options: [
          { id: 1, text: "Let's go together" },
          { id: 2, text: "Let's eat together" },
          { id: 3, text: "I will pick you up" },
          { id: 4, text: "The music is nice" }
        ],
        correctOptionId: 3,
        hints: ["fa wo = pick you"],
        explanation: "You heard 'Mɛba abɛ fa wo' which means 'I will pick you up'."
      },
      {
        id: 717,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am busy today' in Twi?",
        options: [
          { id: 1, text: "Momma yɛnhyia Memeneda" },
          { id: 2, text: "Woreba apontoɔ no ase?" },
          { id: 3, text: "Me nni adagye ɛnnɛ" },
          { id: 4, text: "Momma yɛnkɔ bom" }
        ],
        correctOptionId: 3,
        hints: ["ɛnnɛ = today"],
        explanation: "Me nni adagye ɛnnɛ = I am busy today."
      },
      {
        id: 718,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'What time does it start?' in Twi?",
        options: [
          { id: 1, text: "Momma yɛnhyia Memeneda" },
          { id: 2, text: "Woreba apontoɔ no ase?" },
          { id: 3, text: "Me nni adagye ɛnnɛ" },
          { id: 4, text: "Mmere bɛn na ɛfiri aseɛ?" }
        ],
        correctOptionId: 4,
        hints: ["mmere = time"],
        explanation: "Mmere bɛn na ɛfiri aseɛ? = What time does it start?"
      },
      {
        id: 719,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Let's go together' in Twi?",
        options: [
          { id: 1, text: "Momma yɛnkɔ bom" },
          { id: 2, text: "Momma yɛnbom nnidi" },
          { id: 3, text: "Mɛba abɛ fa wo" },
          { id: 4, text: "Nnwom no yɛ dɛ" }
        ],
        correctOptionId: 1,
        hints: ["bom = together"],
        explanation: "Momma yɛnkɔ bom = Let's go together."
      },
      {
        id: 720,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Let's eat together' in Twi?",
        options: [
          { id: 1, text: "Momma yɛnkɔ bom" },
          { id: 2, text: "Momma yɛnbom nnidi" },
          { id: 3, text: "Mɛba abɛ fa wo" },
          { id: 4, text: "M'ani gyeeɛ" }
        ],
        correctOptionId: 2,
        hints: ["nnidi = eat"],
        explanation: "Momma yɛnbom nnidi = Let's eat together."
      },
      {
        id: 721,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The music is nice' in Twi?",
        options: [
          { id: 1, text: "Nnwom no yɛ dɛ" },
          { id: 2, text: "M'ani gyeeɛ" },
          { id: 3, text: "To nsa frɛ wo nnamfonom" },
          { id: 4, text: "Momma yɛnkɔ bom" }
        ],
        correctOptionId: 1,
        hints: ["nnwom = music"],
        explanation: "Nnwom no yɛ dɛ = The music is nice."
      },
      {
        id: 722,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I enjoyed myself' in Twi?",
        options: [
          { id: 1, text: "Nnwom no yɛ dɛ" },
          { id: 2, text: "M'ani gyeeɛ" },
          { id: 3, text: "To nsa frɛ wo nnamfonom" },
          { id: 4, text: "Mɛba abɛ fa wo" }
        ],
        correctOptionId: 2,
        hints: ["M'ani gyeeɛ = I enjoyed myself"],
        explanation: "M'ani gyeeɛ = I enjoyed myself."
      }
    ]
  }
};