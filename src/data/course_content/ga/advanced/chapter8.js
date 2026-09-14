export default {
  id: 8,
  title: "Idioms & Expressions",
  description: "Learn idioms and everyday expressions in Ga",
  icon: "chatbubble-ellipses-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "8-1",
      type: "phrases",
      title: "Everyday Expressions",
      icon: "chatbubble-outline",
      description: "Learn common everyday expressions in Ga",
      words: ["Kɛka wo otsui mli", "Nakai eyɛɔ", "Jeee sane ko ni", "Miishwɛ kɛkɛ", "Ŋɔɔ lɛ mlɛo"],
      vocabulary: [
        {
          id: 297,
          english: "Don't take it to heart",
          native: "Kɛka wo otsui mli",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/kɛka_wo_otsui_mli.m4a")
        },
        {
          id: 298,
          english: "That's just how it is",
          native: "Nakai eyɛɔ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/nakai_eyɛɔ.m4a")
        },
        {
          id: 301,
          english: "It's not a big deal",
          native: "Jeee sane ko ni",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/jeee_sane_ko_ni.m4a")
        },
        {
          id: 302,
          english: "I'm just joking",
          native: "Miishwɛ kɛkɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/miishwɛ_kɛkɛ.m4a")
        },
        {
          id: 303,
          english: "Take it easy",
          native: "Ŋɔɔ lɛ mlɛo",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/ŋɔɔ_lɛ_mlɛo.m4a")
        }
      ],
      questions: [
        {
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Ga expression.",
          question: "How do you say 'Don't take it to heart' in Ga?",
          options: [
            { id: 1, text: "Kɛka wo otsui mli" },
            { id: 2, text: "Nakai eyɛɔ" },
            { id: 3, text: "Jeee sane ko ni" },
            { id: 4, text: "Miishwɛ kɛkɛ" }
          ],
          correctOptionId: 1,
          hints: ["otsui = heart"],
          explanation: "Kɛka wo otsui mli = Don't take it to heart in Ga."
        },
        {
          id: 802,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/nakai_eyɛɔ.m4a"),
          options: [
            { id: 1, text: "Don't take it to heart" },
            { id: 2, text: "That's just how it is" },
            { id: 3, text: "It's not a big deal" },
            { id: 4, text: "Take it easy" }
          ],
          correctOptionId: 2,
          hints: ["nakai = that's how", "eyɛɔ = it is"],
          explanation: "You heard 'Nakai eyɛɔ' which means 'That's just how it is' in Ga."
        },
        {
          id: 803,
          type: "multiple_choice",
          instruction: "Select the correct Ga expression.",
          question: "How do you say 'It's not a big deal' in Ga?",
          options: [
            { id: 1, text: "Kɛka wo otsui mli" },
            { id: 2, text: "Nakai eyɛɔ" },
            { id: 3, text: "Jeee sane ko ni" },
            { id: 4, text: "Ŋɔɔ lɛ mlɛo" }
          ],
          correctOptionId: 3,
          hints: ["Jeee sane ko ni = it's not a big deal"],
          explanation: "Jeee sane ko ni = It's not a big deal in Ga."
        },
        {
          id: 804,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/miishwɛ_kɛkɛ.m4a"),
          options: [
            { id: 1, text: "Don't take it to heart" },
            { id: 2, text: "That's just how it is" },
            { id: 3, text: "I'm just joking" },
            { id: 4, text: "Take it easy" }
          ],
          correctOptionId: 3,
          hints: ["Miishwɛ = I'm joking", "kɛkɛ = just"],
          explanation: "You heard 'Miishwɛ kɛkɛ' which means 'I'm just joking' in Ga."
        },
        {
          id: 805,
          type: "multiple_choice",
          instruction: "Select the correct Ga expression.",
          question: "How do you say 'Take it easy' in Ga?",
          options: [
            { id: 1, text: "Kɛka wo otsui mli" },
            { id: 2, text: "Nakai eyɛɔ" },
            { id: 3, text: "Jeee sane ko ni" },
            { id: 4, text: "Ŋɔɔ lɛ mlɛo" }
          ],
          correctOptionId: 4,
          hints: ["mlɛo = easy/soft"],
          explanation: "Ŋɔɔ lɛ mlɛo = Take it easy in Ga."
        }
      ]
    },

    {
      id: "8-2",
      type: "phrases",
      title: "Idioms & Figurative Expressions",
      icon: "bulb-outline",
      description: "Learn idioms and figurative expressions in Ga",
      words: ["Otswa sane lɛ mli pɛpɛɛpɛ", "Kaatsɛ gbei ni ewɔ lɛ teŋ", "Ewieɔ tamɔ maŋnyo"],
      vocabulary: [
        {
          id: 299,
          english: "You've hit the nail on the head",
          native: "Otswa sane lɛ mli pɛpɛɛpɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/otswa_sane_lɛ_mli_pɛpɛɛpɛ.m4a")
        },
        {
          id: 300,
          english: "Let sleeping dogs lie",
          native: "Kaatsɛ gbei ni ewɔ lɛ teŋ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/kaatsɛ_gbei_ni_ewɔ_lɛ_teŋ.m4a")
        },
        {
          id: 296,
          english: "He speaks like a native",
          native: "Ewieɔ tamɔ maŋnyo",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/ewieɔ_tamɔ_maŋnyo.m4a")
        }
      ],
      questions: [
        {
          id: 806,
          type: "multiple_choice",
          instruction: "Select the correct Ga idiom.",
          question: "How do you say 'You've hit the nail on the head' in Ga?",
          options: [
            { id: 1, text: "Otswa sane lɛ mli pɛpɛɛpɛ" },
            { id: 2, text: "Kaatsɛ gbei ni ewɔ lɛ teŋ" },
            { id: 3, text: "Ewieɔ tamɔ maŋnyo" },
            { id: 4, text: "Kɛka wo otsui mli" }
          ],
          correctOptionId: 1,
          hints: ["pɛpɛɛpɛ = exactly"],
          explanation: "Otswa sane lɛ mli pɛpɛɛpɛ = You've hit the nail on the head in Ga."
        },
        {
          id: 807,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/kaatsɛ_gbei_ni_ewɔ_lɛ_teŋ.m4a"),
          options: [
            { id: 1, text: "You've hit the nail on the head" },
            { id: 2, text: "Let sleeping dogs lie" },
            { id: 3, text: "He speaks like a native" },
            { id: 4, text: "Take it easy" }
          ],
          correctOptionId: 2,
          hints: ["gbei = dog", "ewɔ = sleeping"],
          explanation: "You heard 'Kaatsɛ gbei ni ewɔ lɛ teŋ' which means 'Let sleeping dogs lie' in Ga."
        },
        {
          id: 808,
          type: "multiple_choice",
          instruction: "Select the correct Ga idiom.",
          question: "How do you say 'He speaks like a native' in Ga?",
          options: [
            { id: 1, text: "Otswa sane lɛ mli pɛpɛɛpɛ" },
            { id: 2, text: "Kaatsɛ gbei ni ewɔ lɛ teŋ" },
            { id: 3, text: "Ewieɔ tamɔ maŋnyo" },
            { id: 4, text: "Miishwɛ kɛkɛ" }
          ],
          correctOptionId: 3,
          hints: ["maŋnyo = native"],
          explanation: "Ewieɔ tamɔ maŋnyo = He speaks like a native in Ga."
        },
        {
          id: 809,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/otswa_sane_lɛ_mli_pɛpɛɛpɛ.m4a"),
          options: [
            { id: 1, text: "You've hit the nail on the head" },
            { id: 2, text: "Let sleeping dogs lie" },
            { id: 3, text: "He speaks like a native" },
            { id: 4, text: "That's just how it is" }
          ],
          correctOptionId: 1,
          hints: ["pɛpɛɛpɛ = exactly"],
          explanation: "You heard 'Otswa sane lɛ mli pɛpɛɛpɛ' which means 'You've hit the nail on the head'."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Idioms & Expressions",
    icon: "refresh-outline",
    description: "Review all the idioms and expressions you've learned",
    questions: [
      {
        id: 810,
        type: "multiple_choice",
        instruction: "Select the correct Ga expression.",
        question: "How do you say 'Don't take it to heart' in Ga?",
        options: [
          { id: 1, text: "Kɛka wo otsui mli" },
          { id: 2, text: "Nakai eyɛɔ" },
          { id: 3, text: "Jeee sane ko ni" },
          { id: 4, text: "Ŋɔɔ lɛ mlɛo" }
        ],
        correctOptionId: 1,
        hints: ["otsui = heart"],
        explanation: "Kɛka wo otsui mli = Don't take it to heart."
      },
      {
        id: 811,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/ewieɔ_tamɔ_maŋnyo.m4a"),
        options: [
          { id: 1, text: "You've hit the nail on the head" },
          { id: 2, text: "Let sleeping dogs lie" },
          { id: 3, text: "He speaks like a native" },
          { id: 4, text: "I'm just joking" }
        ],
        correctOptionId: 3,
        hints: ["maŋnyo = native"],
        explanation: "You heard 'Ewieɔ tamɔ maŋnyo' which means 'He speaks like a native'."
      },
      {
        id: 812,
        type: "multiple_choice",
        instruction: "Select the correct Ga expression.",
        question: "How do you say 'That's just how it is' in Ga?",
        options: [
          { id: 1, text: "Kɛka wo otsui mli" },
          { id: 2, text: "Nakai eyɛɔ" },
          { id: 3, text: "Jeee sane ko ni" },
          { id: 4, text: "Miishwɛ kɛkɛ" }
        ],
        correctOptionId: 2,
        hints: ["nakai = that's how"],
        explanation: "Nakai eyɛɔ = That's just how it is."
      },
      {
        id: 813,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/ŋɔɔ_lɛ_mlɛo.m4a"),
        options: [
          { id: 1, text: "Don't take it to heart" },
          { id: 2, text: "It's not a big deal" },
          { id: 3, text: "Take it easy" },
          { id: 4, text: "That's just how it is" }
        ],
        correctOptionId: 3,
        hints: ["mlɛo = easy"],
        explanation: "You heard 'Ŋɔɔ lɛ mlɛo' which means 'Take it easy'."
      },
      {
        id: 814,
        type: "multiple_choice",
        instruction: "Select the correct Ga idiom.",
        question: "How do you say 'You've hit the nail on the head' in Ga?",
        options: [
          { id: 1, text: "Otswa sane lɛ mli pɛpɛɛpɛ" },
          { id: 2, text: "Kaatsɛ gbei ni ewɔ lɛ teŋ" },
          { id: 3, text: "Ewieɔ tamɔ maŋnyo" },
          { id: 4, text: "Kɛka wo otsui mli" }
        ],
        correctOptionId: 1,
        hints: ["pɛpɛɛpɛ = exactly"],
        explanation: "Otswa sane lɛ mli pɛpɛɛpɛ = You've hit the nail on the head."
      },
      {
        id: 815,
        type: "multiple_choice",
        instruction: "Select the correct Ga expression.",
        question: "How do you say 'It's not a big deal' in Ga?",
        options: [
          { id: 1, text: "Kɛka wo otsui mli" },
          { id: 2, text: "Nakai eyɛɔ" },
          { id: 3, text: "Jeee sane ko ni" },
          { id: 4, text: "Ŋɔɔ lɛ mlɛo" }
        ],
        correctOptionId: 3,
        hints: ["Jeee sane ko ni = it's not a big deal"],
        explanation: "Jeee sane ko ni = It's not a big deal."
      },
      {
        id: 816,
        type: "multiple_choice",
        instruction: "Select the correct Ga idiom.",
        question: "How do you say 'Let sleeping dogs lie' in Ga?",
        options: [
          { id: 1, text: "Otswa sane lɛ mli pɛpɛɛpɛ" },
          { id: 2, text: "Kaatsɛ gbei ni ewɔ lɛ teŋ" },
          { id: 3, text: "Ewieɔ tamɔ maŋnyo" },
          { id: 4, text: "Miishwɛ kɛkɛ" }
        ],
        correctOptionId: 2,
        hints: ["gbei = dog"],
        explanation: "Kaatsɛ gbei ni ewɔ lɛ teŋ = Let sleeping dogs lie."
      },
      {
        id: 817,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter8/miishwɛ_kɛkɛ.m4a"),
        options: [
          { id: 1, text: "It's not a big deal" },
          { id: 2, text: "I'm just joking" },
          { id: 3, text: "Take it easy" },
          { id: 4, text: "Don't take it to heart" }
        ],
        correctOptionId: 2,
        hints: ["Miishwɛ = I'm joking"],
        explanation: "You heard 'Miishwɛ kɛkɛ' which means 'I'm just joking'."
      }
    ]
  }
};