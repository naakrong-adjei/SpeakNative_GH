export default {
  id: 21,
  title: "Complex Grammar",
  description: "Learn complex grammar structures in Ewe",
  icon: "git-branch-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "21-1",
      type: "words",
      title: "Conditionals",
      icon: "git-branch-outline",
      description: "Learn how to express conditional statements in Ewe",
      words: ["Ne ɖe menya la, nyemayi o", "Ehia ɖe wòanyo wu"],
      vocabulary: [
        {
          id: 233,
          english: "If I had known, I would not have gone",
          native: "Ne ɖe menya la, nyemayi o",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/ne_ɖe_menya_la_nyemayi_o.m4a")
        },
        {
          id: 239,
          english: "It would have been better",
          native: "Ehia ɖe wòanyo wu",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/ehia_ɖe_wòanyo_wu.m4a")
        }
      ],
      questions: [
        {
          id: 2101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'If I had known, I would not have gone' in Ewe?",
          options: [
            { id: 1, text: "Ne ɖe menya la, nyemayi o" },
            { id: 2, text: "Ehia ɖe wòanyo wu" },
            { id: 3, text: "Togbɔ be tsi dza hã, míeyi edzi" },
            { id: 4, text: "Menye ema ɖeɖe ko o, ke ehia hã" }
          ],
          correctOptionId: 1,
          hints: ["Ne ɖe = If", "menya = I knew"],
          explanation: "Ne ɖe menya la, nyemayi o = If I had known, I would not have gone in Ewe."
        },
        {
          id: 2102,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/ehia_ɖe_wòanyo_wu.m4a"),
          options: [
            { id: 1, text: "If I had known, I would not have gone" },
            { id: 2, text: "It would have been better" },
            { id: 3, text: "Although it rained, we continued" },
            { id: 4, text: "Not only that, but also this" }
          ],
          correctOptionId: 2,
          hints: ["Ehia = It would be", "wòanyo = better"],
          explanation: "You heard 'Ehia ɖe wòanyo wu' which means 'It would have been better' in Ewe."
        },
        {
          id: 2103,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/ne_ɖe_menya_la_nyemayi_o.m4a"),
          options: [
            { id: 1, text: "If I had known, I would not have gone" },
            { id: 2, text: "It would have been better" },
            { id: 3, text: "Although it rained, we continued" },
            { id: 4, text: "Not only that, but also this" }
          ],
          correctOptionId: 1,
          hints: ["Ne ɖe = If"],
          explanation: "You heard 'Ne ɖe menya la, nyemayi o' which means 'If I had known, I would not have gone' in Ewe."
        }
      ]
    },

    {
      id: "21-2",
      type: "words",
      title: "Contrast & Linking",
      icon: "link-outline",
      description: "Learn how to express contrast and linking in Ewe",
      words: ["Togbɔ be tsi dza hã, míeyi edzi", "Menye ema ɖeɖe ko o, ke ehia hã"],
      vocabulary: [
        {
          id: 234,
          english: "Although it rained, we continued",
          native: "Togbɔ be tsi dza hã, míeyi edzi",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/togbɔ_be_tsi_dza_hã_míeyi_edzi.m4a")
        },
        {
          id: 238,
          english: "Not only that, but also this",
          native: "Menye ema ɖeɖe ko o, ke ehia hã",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/menye_ema_ɖeɖe_ko_o_ke_ehia_hã.m4a")
        }
      ],
      questions: [
        {
          id: 2104,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Although it rained, we continued' in Ewe?",
          options: [
            { id: 1, text: "Ne ɖe menya la, nyemayi o" },
            { id: 2, text: "Ehia ɖe wòanyo wu" },
            { id: 3, text: "Togbɔ be tsi dza hã, míeyi edzi" },
            { id: 4, text: "Menye ema ɖeɖe ko o, ke ehia hã" }
          ],
          correctOptionId: 3,
          hints: ["Togbɔ be = Although", "tsi dza = rain fell"],
          explanation: "Togbɔ be tsi dza hã, míeyi edzi = Although it rained, we continued in Ewe."
        },
        {
          id: 2105,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/menye_ema_ɖeɖe_ko_o_ke_ehia_hã.m4a"),
          options: [
            { id: 1, text: "If I had known, I would not have gone" },
            { id: 2, text: "It would have been better" },
            { id: 3, text: "Although it rained, we continued" },
            { id: 4, text: "Not only that, but also this" }
          ],
          correctOptionId: 4,
          hints: ["Menye = Not", "ke = but"],
          explanation: "You heard 'Menye ema ɖeɖe ko o, ke ehia hã' which means 'Not only that, but also this' in Ewe."
        },
        {
          id: 2106,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/togbɔ_be_tsi_dza_hã_míeyi_edzi.m4a"),
          options: [
            { id: 1, text: "If I had known, I would not have gone" },
            { id: 2, text: "It would have been better" },
            { id: 3, text: "Although it rained, we continued" },
            { id: 4, text: "Not only that, but also this" }
          ],
          correctOptionId: 3,
          hints: ["Togbɔ be = Although"],
          explanation: "You heard 'Togbɔ be tsi dza hã, míeyi edzi' which means 'Although it rained, we continued' in Ewe."
        }
      ]
    },

    {
      id: "21-3",
      type: "words",
      title: "Relative Clauses",
      icon: "code-slash-outline",
      description: "Learn how to form relative clauses in Ewe",
      words: ["Dɔ hia wowɔ etsɔ", "Ame shia ame si va gbã la woasubɔ", "Xɔ hia metu le ƒe si va yi me"],
      vocabulary: [
        {
          id: 235,
          english: "The work that was done yesterday",
          native: "Dɔ hia wowɔ etsɔ",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/dɔ_hia_wowɔ_etsɔ.m4a")
        },
        {
          id: 236,
          english: "Whoever comes first will be served",
          native: "Ame shia ame si va gbã la woasubɔ",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/ame_shia_ame_si_va_gbã_la_woasubɔ.m4a")
        },
        {
          id: 237,
          english: "The house that I built last year",
          native: "Xɔ hia metu le ƒe si va yi me",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/xɔ_hia_metu_le_ƒe_si_va_yi_me.m4a")
        }
      ],
      questions: [
        {
          id: 2107,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The work that was done yesterday' in Ewe?",
          options: [
            { id: 1, text: "Dɔ hia wowɔ etsɔ" },
            { id: 2, text: "Ame shia ame si va gbã la woasubɔ" },
            { id: 3, text: "Xɔ hia metu le ƒe si va yi me" },
            { id: 4, text: "Ne ɖe menya la, nyemayi o" }
          ],
          correctOptionId: 1,
          hints: ["Dɔ = work", "hia = this/that", "etsɔ = yesterday"],
          explanation: "Dɔ hia wowɔ etsɔ = The work that was done yesterday in Ewe."
        },
        {
          id: 2108,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/ame_shia_ame_si_va_gbã_la_woasubɔ.m4a"),
          options: [
            { id: 1, text: "The work that was done yesterday" },
            { id: 2, text: "Whoever comes first will be served" },
            { id: 3, text: "The house that I built last year" },
            { id: 4, text: "Not only that, but also this" }
          ],
          correctOptionId: 2,
          hints: ["Ame shia ame = whoever"],
          explanation: "You heard 'Ame shia ame si va gbã la woasubɔ' which means 'Whoever comes first will be served' in Ewe."
        },
        {
          id: 2109,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/xɔ_hia_metu_le_ƒe_si_va_yi_me.m4a"),
          options: [
            { id: 1, text: "The work that was done yesterday" },
            { id: 2, text: "Whoever comes first will be served" },
            { id: 3, text: "The house that I built last year" },
            { id: 4, text: "It would have been better" }
          ],
          correctOptionId: 3,
          hints: ["xɔ = house", "ƒe si va yi = last year"],
          explanation: "You heard 'Xɔ hia metu le ƒe si va yi me' which means 'The house that I built last year' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-21",
    title: "Review: Complex Grammar",
    icon: "refresh-outline",
    description: "Review all the complex grammar structures you've learned",
    questions: [
      {
        id: 2110,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'If I had known, I would not have gone' in Ewe?",
        options: [
          { id: 1, text: "Ne ɖe menya la, nyemayi o" },
          { id: 2, text: "Ehia ɖe wòanyo wu" },
          { id: 3, text: "Togbɔ be tsi dza hã, míeyi edzi" },
          { id: 4, text: "Menye ema ɖeɖe ko o, ke ehia hã" }
        ],
        correctOptionId: 1,
        hints: ["Ne ɖe = If"],
        explanation: "Ne ɖe menya la, nyemayi o = If I had known, I would not have gone."
      },
      {
        id: 2111,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/togbɔ_be_tsi_dza_hã_míeyi_edzi.m4a"),
        options: [
          { id: 1, text: "If I had known, I would not have gone" },
          { id: 2, text: "It would have been better" },
          { id: 3, text: "Although it rained, we continued" },
          { id: 4, text: "Not only that, but also this" }
        ],
        correctOptionId: 3,
        hints: ["Togbɔ be = Although"],
        explanation: "You heard 'Togbɔ be tsi dza hã, míeyi edzi' which means 'Although it rained, we continued'."
      },
      {
        id: 2112,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Not only that, but also this' in Ewe?",
        options: [
          { id: 1, text: "Ne ɖe menya la, nyemayi o" },
          { id: 2, text: "Ehia ɖe wòanyo wu" },
          { id: 3, text: "Togbɔ be tsi dza hã, míeyi edzi" },
          { id: 4, text: "Menye ema ɖeɖe ko o, ke ehia hã" }
        ],
        correctOptionId: 4,
        hints: ["Menye = Not", "ke = but"],
        explanation: "Menye ema ɖeɖe ko o, ke ehia hã = Not only that, but also this."
      },
      {
        id: 2113,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/dɔ_hia_wowɔ_etsɔ.m4a"),
        options: [
          { id: 1, text: "The work that was done yesterday" },
          { id: 2, text: "Whoever comes first will be served" },
          { id: 3, text: "The house that I built last year" },
          { id: 4, text: "It would have been better" }
        ],
        correctOptionId: 1,
        hints: ["Dɔ = work", "etsɔ = yesterday"],
        explanation: "You heard 'Dɔ hia wowɔ etsɔ' which means 'The work that was done yesterday'."
      },
      {
        id: 2114,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Whoever comes first will be served' in Ewe?",
        options: [
          { id: 1, text: "Dɔ hia wowɔ etsɔ" },
          { id: 2, text: "Ame shia ame si va gbã la woasubɔ" },
          { id: 3, text: "Xɔ hia metu le ƒe si va yi me" },
          { id: 4, text: "Ne ɖe menya la, nyemayi o" }
        ],
        correctOptionId: 2,
        hints: ["Ame shia ame = whoever"],
        explanation: "Ame shia ame si va gbã la woasubɔ = Whoever comes first will be served."
      },
      {
        id: 2115,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/xɔ_hia_metu_le_ƒe_si_va_yi_me.m4a"),
        options: [
          { id: 1, text: "The work that was done yesterday" },
          { id: 2, text: "Whoever comes first will be served" },
          { id: 3, text: "The house that I built last year" },
          { id: 4, text: "It would have been better" }
        ],
        correctOptionId: 3,
        hints: ["xɔ = house"],
        explanation: "You heard 'Xɔ hia metu le ƒe si va yi me' which means 'The house that I built last year'."
      },
      {
        id: 2116,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'It would have been better' in Ewe?",
        options: [
          { id: 1, text: "Ne ɖe menya la, nyemayi o" },
          { id: 2, text: "Ehia ɖe wòanyo wu" },
          { id: 3, text: "Togbɔ be tsi dza hã, míeyi edzi" },
          { id: 4, text: "Menye ema ɖeɖe ko o, ke ehia hã" }
        ],
        correctOptionId: 2,
        hints: ["Ehia = It would be"],
        explanation: "Ehia ɖe wòanyo wu = It would have been better."
      },
      {
        id: 2117,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/ame_shia_ame_si_va_gbã_la_woasubɔ.m4a"),
        options: [
          { id: 1, text: "The work that was done yesterday" },
          { id: 2, text: "Whoever comes first will be served" },
          { id: 3, text: "The house that I built last year" },
          { id: 4, text: "Not only that, but also this" }
        ],
        correctOptionId: 2,
        hints: ["Ame shia ame = whoever"],
        explanation: "You heard 'Ame shia ame si va gbã la woasubɔ' which means 'Whoever comes first will be served'."
      },
      {
        id: 2118,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/menye_ema_ɖeɖe_ko_o_ke_ehia_hã.m4a"),
        options: [
          { id: 1, text: "If I had known, I would not have gone" },
          { id: 2, text: "It would have been better" },
          { id: 3, text: "Although it rained, we continued" },
          { id: 4, text: "Not only that, but also this" }
        ],
        correctOptionId: 4,
        hints: ["Menye = Not"],
        explanation: "You heard 'Menye ema ɖeɖe ko o, ke ehia hã' which means 'Not only that, but also this'."
      },
      {
        id: 2119,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter1/ehia_ɖe_wòanyo_wu.m4a"),
        options: [
          { id: 1, text: "If I had known, I would not have gone" },
          { id: 2, text: "It would have been better" },
          { id: 3, text: "Although it rained, we continued" },
          { id: 4, text: "Not only that, but also this" }
        ],
        correctOptionId: 2,
        hints: ["Ehia = It would be"],
        explanation: "You heard 'Ehia ɖe wòanyo wu' which means 'It would have been better'."
      }
    ]
  }
};