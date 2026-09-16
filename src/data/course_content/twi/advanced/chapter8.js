export default {
  id: 8,
  title: "Native Fluency",
  description: "Learn native fluency expressions in Twi",
  icon: "chatbubble-ellipses-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "8-1",
      type: "phrases",
      title: "Natural & Everyday Expressions",
      icon: "chatbubble-outline",
      description: "Learn natural and everyday expressions in Twi",
      words: ["Ɔkasa sɛ ɔmanni", "Saa ara na ɛteɛ", "Ɛnyɛ asɛm kɛseɛ", "Fa no bɔkɔɔ", "Meredi agorɔ kwa"],
      vocabulary: [
        {
          id: 283,
          english: "He speaks like a native",
          native: "Ɔkasa sɛ ɔmanni",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/ɔkasa_sɛ_ɔmanni.m4a")
        },
        {
          id: 286,
          english: "That's just how it is",
          native: "Saa ara na ɛteɛ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/saa_ara_na_ɛteɛ.m4a")
        },
        {
          id: 289,
          english: "It's not a big deal",
          native: "Ɛnyɛ asɛm kɛseɛ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/ɛnyɛ_asɛm_kɛseɛ.m4a")
        },
        {
          id: 288,
          english: "Take it easy",
          native: "Fa no bɔkɔɔ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/fa_no_bɔkɔɔ.m4a")
        },
        {
          id: 290,
          english: "I'm just joking",
          native: "Meredi agorɔ kwa",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/meredi_agorɔ_kwa.m4a")
        }
      ],
      questions: [
        {
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'He speaks like a native' in Twi?",
          options: [
            { id: 1, text: "Ɔkasa sɛ ɔmanni" },
            { id: 2, text: "Saa ara na ɛteɛ" },
            { id: 3, text: "Ɛnyɛ asɛm kɛseɛ" },
            { id: 4, text: "Fa no bɔkɔɔ" }
          ],
          correctOptionId: 1,
          hints: ["ɔmanni = native"],
          explanation: "Ɔkasa sɛ ɔmanni = He speaks like a native in Twi."
        },
        {
          id: 802,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/saa_ara_na_ɛteɛ.m4a"),
          options: [
            { id: 1, text: "He speaks like a native" },
            { id: 2, text: "That's just how it is" },
            { id: 3, text: "It's not a big deal" },
            { id: 4, text: "I'm just joking" }
          ],
          correctOptionId: 2,
          hints: ["saa ara na ɛteɛ = that's just how it is"],
          explanation: "You heard 'Saa ara na ɛteɛ' which means 'That's just how it is' in Twi."
        },
        {
          id: 803,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'It's not a big deal' in Twi?",
          options: [
            { id: 1, text: "Ɔkasa sɛ ɔmanni" },
            { id: 2, text: "Saa ara na ɛteɛ" },
            { id: 3, text: "Ɛnyɛ asɛm kɛseɛ" },
            { id: 4, text: "Meredi agorɔ kwa" }
          ],
          correctOptionId: 3,
          hints: ["asɛm kɛseɛ = big deal"],
          explanation: "Ɛnyɛ asɛm kɛseɛ = It's not a big deal in Twi."
        },
        {
          id: 804,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/fa_no_bɔkɔɔ.m4a"),
          options: [
            { id: 1, text: "He speaks like a native" },
            { id: 2, text: "That's just how it is" },
            { id: 3, text: "It's not a big deal" },
            { id: 4, text: "Take it easy" }
          ],
          correctOptionId: 4,
          hints: ["bɔkɔɔ = easy"],
          explanation: "You heard 'Fa no bɔkɔɔ' which means 'Take it easy' in Twi."
        },
        {
          id: 805,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I'm just joking' in Twi?",
          options: [
            { id: 1, text: "Meredi agorɔ kwa" },
            { id: 2, text: "Saa ara na ɛteɛ" },
            { id: 3, text: "Ɛnyɛ asɛm kɛseɛ" },
            { id: 4, text: "Fa no bɔkɔɔ" }
          ],
          correctOptionId: 1,
          hints: ["agorɔ = joke"],
          explanation: "Meredi agorɔ kwa = I'm just joking in Twi."
        },
        {
          id: 806,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/ɛnyɛ_asɛm_kɛseɛ.m4a"),
          options: [
            { id: 1, text: "He speaks like a native" },
            { id: 2, text: "It's not a big deal" },
            { id: 3, text: "Take it easy" },
            { id: 4, text: "I'm just joking" }
          ],
          correctOptionId: 2,
          hints: ["asɛm kɛseɛ = big deal"],
          explanation: "You heard 'Ɛnyɛ asɛm kɛseɛ' which means 'It's not a big deal' in Twi."
        }
      ]
    },

    {
      id: "8-2",
      type: "phrases",
      title: "Idioms & Figurative Expressions",
      icon: "bulb-outline",
      description: "Learn idioms and figurative expressions in Twi",
      words: ["Woaka no pɛpɛɛpɛ", "Mfa nhyɛ w'akoma mu", "Ma nkraman a wada no nna"],
      vocabulary: [
        {
          id: 284,
          english: "You've hit the nail on the head",
          native: "Woaka no pɛpɛɛpɛ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/woaka_no_pɛpɛɛpɛ.m4a")
        },
        {
          id: 285,
          english: "Don't take it to heart",
          native: "Mfa nhyɛ w'akoma mu",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/mfa_nhyɛ_w_akoma_mu.m4a")
        },
        {
          id: 287,
          english: "Let sleeping dogs lie",
          native: "Ma nkraman a wada no nna",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/ma_nkraman_a_wada_no_nna.m4a")
        }
      ],
      questions: [
        {
          id: 807,
          type: "multiple_choice",
          instruction: "Select the correct Twi idiom.",
          question: "How do you say 'You've hit the nail on the head' in Twi?",
          options: [
            { id: 1, text: "Woaka no pɛpɛɛpɛ" },
            { id: 2, text: "Mfa nhyɛ w'akoma mu" },
            { id: 3, text: "Ma nkraman a wada no nna" },
            { id: 4, text: "Ɔkasa sɛ ɔmanni" }
          ],
          correctOptionId: 1,
          hints: ["pɛpɛɛpɛ = exactly"],
          explanation: "Woaka no pɛpɛɛpɛ = You've hit the nail on the head in Twi."
        },
        {
          id: 808,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/mfa_nhyɛ_w_akoma_mu.m4a"),
          options: [
            { id: 1, text: "You've hit the nail on the head" },
            { id: 2, text: "Don't take it to heart" },
            { id: 3, text: "Let sleeping dogs lie" },
            { id: 4, text: "Take it easy" }
          ],
          correctOptionId: 2,
          hints: ["akoma = heart"],
          explanation: "You heard 'Mfa nhyɛ w'akoma mu' which means 'Don't take it to heart' in Twi."
        },
        {
          id: 809,
          type: "multiple_choice",
          instruction: "Select the correct Twi idiom.",
          question: "How do you say 'Let sleeping dogs lie' in Twi?",
          options: [
            { id: 1, text: "Woaka no pɛpɛɛpɛ" },
            { id: 2, text: "Mfa nhyɛ w'akoma mu" },
            { id: 3, text: "Ma nkraman a wada no nna" },
            { id: 4, text: "Ɛnyɛ asɛm kɛseɛ" }
          ],
          correctOptionId: 3,
          hints: ["nkraman = dogs"],
          explanation: "Ma nkraman a wada no nna = Let sleeping dogs lie in Twi."
        },
        {
          id: 810,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/woaka_no_pɛpɛɛpɛ.m4a"),
          options: [
            { id: 1, text: "You've hit the nail on the head" },
            { id: 2, text: "Don't take it to heart" },
            { id: 3, text: "Let sleeping dogs lie" },
            { id: 4, text: "I'm just joking" }
          ],
          correctOptionId: 1,
          hints: ["pɛpɛɛpɛ = exactly"],
          explanation: "You heard 'Woaka no pɛpɛɛpɛ' which means 'You've hit the nail on the head' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Native Fluency",
    icon: "refresh-outline",
    description: "Review all the native fluency expressions you've learned",
    questions: [
      {
        id: 811,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'He speaks like a native' in Twi?",
        options: [
          { id: 1, text: "Ɔkasa sɛ ɔmanni" },
          { id: 2, text: "Saa ara na ɛteɛ" },
          { id: 3, text: "Ɛnyɛ asɛm kɛseɛ" },
          { id: 4, text: "Fa no bɔkɔɔ" }
        ],
        correctOptionId: 1,
        hints: ["ɔmanni = native"],
        explanation: "Ɔkasa sɛ ɔmanni = He speaks like a native."
      },
      {
        id: 812,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/ma_nkraman_a_wada_no_nna.m4a"),
        options: [
          { id: 1, text: "You've hit the nail on the head" },
          { id: 2, text: "Don't take it to heart" },
          { id: 3, text: "Let sleeping dogs lie" },
          { id: 4, text: "Take it easy" }
        ],
        correctOptionId: 3,
        hints: ["nkraman = dogs"],
        explanation: "You heard 'Ma nkraman a wada no nna' which means 'Let sleeping dogs lie'."
      },
      {
        id: 813,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'That's just how it is' in Twi?",
        options: [
          { id: 1, text: "Ɔkasa sɛ ɔmanni" },
          { id: 2, text: "Saa ara na ɛteɛ" },
          { id: 3, text: "Ɛnyɛ asɛm kɛseɛ" },
          { id: 4, text: "Meredi agorɔ kwa" }
        ],
        correctOptionId: 2,
        hints: ["saa ara na ɛteɛ = that's how it is"],
        explanation: "Saa ara na ɛteɛ = That's just how it is."
      },
      {
        id: 814,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/mfa_nhyɛ_w_akoma_mu.m4a"),
        options: [
          { id: 1, text: "You've hit the nail on the head" },
          { id: 2, text: "Don't take it to heart" },
          { id: 3, text: "Let sleeping dogs lie" },
          { id: 4, text: "I'm just joking" }
        ],
        correctOptionId: 2,
        hints: ["akoma = heart"],
        explanation: "You heard 'Mfa nhyɛ w'akoma mu' which means 'Don't take it to heart'."
      },
      {
        id: 815,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'It's not a big deal' in Twi?",
        options: [
          { id: 1, text: "Ɔkasa sɛ ɔmanni" },
          { id: 2, text: "Saa ara na ɛteɛ" },
          { id: 3, text: "Ɛnyɛ asɛm kɛseɛ" },
          { id: 4, text: "Fa no bɔkɔɔ" }
        ],
        correctOptionId: 3,
        hints: ["asɛm kɛseɛ = big deal"],
        explanation: "Ɛnyɛ asɛm kɛseɛ = It's not a big deal."
      },
      {
        id: 816,
        type: "multiple_choice",
        instruction: "Select the correct Twi idiom.",
        question: "How do you say 'You've hit the nail on the head' in Twi?",
        options: [
          { id: 1, text: "Woaka no pɛpɛɛpɛ" },
          { id: 2, text: "Mfa nhyɛ w'akoma mu" },
          { id: 3, text: "Ma nkraman a wada no nna" },
          { id: 4, text: "Ɛnyɛ asɛm kɛseɛ" }
        ],
        correctOptionId: 1,
        hints: ["pɛpɛɛpɛ = exactly"],
        explanation: "Woaka no pɛpɛɛpɛ = You've hit the nail on the head."
      },
      {
        id: 817,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Take it easy' in Twi?",
        options: [
          { id: 1, text: "Ɔkasa sɛ ɔmanni" },
          { id: 2, text: "Saa ara na ɛteɛ" },
          { id: 3, text: "Ɛnyɛ asɛm kɛseɛ" },
          { id: 4, text: "Fa no bɔkɔɔ" }
        ],
        correctOptionId: 4,
        hints: ["bɔkɔɔ = easy"],
        explanation: "Fa no bɔkɔɔ = Take it easy."
      },
      {
        id: 818,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I'm just joking' in Twi?",
        options: [
          { id: 1, text: "Meredi agorɔ kwa" },
          { id: 2, text: "Saa ara na ɛteɛ" },
          { id: 3, text: "Ɛnyɛ asɛm kɛseɛ" },
          { id: 4, text: "Woaka no pɛpɛɛpɛ" }
        ],
        correctOptionId: 1,
        hints: ["agorɔ = joke"],
        explanation: "Meredi agorɔ kwa = I'm just joking."
      },
      {
        id: 819,
        type: "multiple_choice",
        instruction: "Select the correct Twi idiom.",
        question: "How do you say 'Let sleeping dogs lie' in Twi?",
        options: [
          { id: 1, text: "Woaka no pɛpɛɛpɛ" },
          { id: 2, text: "Mfa nhyɛ w'akoma mu" },
          { id: 3, text: "Ma nkraman a wada no nna" },
          { id: 4, text: "Meredi agorɔ kwa" }
        ],
        correctOptionId: 3,
        hints: ["nkraman = dogs"],
        explanation: "Ma nkraman a wada no nna = Let sleeping dogs lie."
      },
      {
        id: 820,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter8/ɔkasa_sɛ_ɔmanni.m4a"),
        options: [
          { id: 1, text: "He speaks like a native" },
          { id: 2, text: "That's just how it is" },
          { id: 3, text: "It's not a big deal" },
          { id: 4, text: "Take it easy" }
        ],
        correctOptionId: 1,
        hints: ["ɔmanni = native"],
        explanation: "You heard 'Ɔkasa sɛ ɔmanni' which means 'He speaks like a native'."
      }
    ]
  }
};