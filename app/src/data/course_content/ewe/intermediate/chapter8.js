export default {
  id: 18,
  title: "Future & Past Tense",
  description: "Learn how to talk about the past and future in Ewe",
  icon: "time-outline",
  totalXp: 12,
  difficulty: "Intermediate",

  sections: [
    {
      id: "18-1",
      type: "words",
      title: "Talking About the Past",
      icon: "time-outline",
      description: "Learn how to express past actions and events in Ewe",
      words: ["Meyi etsɔ si va yi", "Meɖu nu xoxo", "Menɔ dɔ wɔm", "Míenɔ Egɛ̃"],
      vocabulary: [
        {
          id: 196,
          english: "I went yesterday",
          native: "Meyi etsɔ si va yi",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/meyi_etsɔ_si_va_yi.m4a")
        },
        {
          id: 197,
          english: "I have eaten already",
          native: "Meɖu nu xoxo",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/meɖu_nu_xoxo.m4a")
        },
        {
          id: 198,
          english: "I was working",
          native: "Menɔ dɔ wɔm",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/menɔ_dɔ_wɔm.m4a")
        },
        {
          id: 201,
          english: "We were living in Accra",
          native: "Míenɔ Egɛ̃",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/míenɔ_egɛ̃.m4a")
        }
      ],
      questions: [
        {
          id: 1801,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I went yesterday' in Ewe?",
          options: [
            { id: 1, text: "Meyi etsɔ si va yi" },
            { id: 2, text: "Meɖu nu xoxo" },
            { id: 3, text: "Menɔ dɔ wɔm" },
            { id: 4, text: "Míenɔ Egɛ̃" }
          ],
          correctOptionId: 1,
          hints: ["meyi = I went", "etsɔ si va yi = yesterday"],
          explanation: "Meyi etsɔ si va yi = I went yesterday in Ewe."
        },
        {
          id: 1802,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/meɖu_nu_xoxo.m4a"),
          options: [
            { id: 1, text: "I went yesterday" },
            { id: 2, text: "I have eaten already" },
            { id: 3, text: "I was working" },
            { id: 4, text: "We were living in Accra" }
          ],
          correctOptionId: 2,
          hints: ["meɖu = I ate", "xoxo = already"],
          explanation: "You heard 'Meɖu nu xoxo' which means 'I have eaten already' in Ewe."
        },
        {
          id: 1803,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Menɔ dɔ [_____] (I was working)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "wɔm" },
            { id: "opt2", text: "me" },
            { id: "opt3", text: "nu" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["wɔm = doing"],
          explanation: "Menɔ dɔ wɔm = I was working in Ewe."
        }
      ]
    },

    {
      id: "18-2",
      type: "words",
      title: "Talking About the Future",
      icon: "calendar-clock-outline",
      description: "Learn how to express future actions and plans in Ewe",
      words: ["Mava etsɔ", "Meyina ʋu ƒle ge", "Woawu enu le ɣleti si gbɔna me"],
      vocabulary: [
        {
          id: 195,
          english: "I will come tomorrow",
          native: "Mava etsɔ",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/mava_etsɔ.m4a")
        },
        {
          id: 199,
          english: "I am going to buy a car",
          native: "Meyina ʋu ƒle ge",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/meyina_ʋu_ƒle_ge.m4a")
        },
        {
          id: 202,
          english: "They will finish next month",
          native: "Woawu enu le ɣleti si gbɔna me",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/woawu_enu_le_ɣleti_si_gbɔna_me.m4a")
        }
      ],
      questions: [
        {
          id: 1804,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I will come tomorrow' in Ewe?",
          options: [
            { id: 1, text: "Mava etsɔ" },
            { id: 2, text: "Meyina ʋu ƒle ge" },
            { id: 3, text: "Woawu enu le ɣleti si gbɔna me" },
            { id: 4, text: "Meyi etsɔ si va yi" }
          ],
          correctOptionId: 1,
          hints: ["mava = I will come", "etsɔ = tomorrow"],
          explanation: "Mava etsɔ = I will come tomorrow in Ewe."
        },
        {
          id: 1805,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/meyina_ʋu_ƒle_ge.m4a"),
          options: [
            { id: 1, text: "I will come tomorrow" },
            { id: 2, text: "I am going to buy a car" },
            { id: 3, text: "They will finish next month" },
            { id: 4, text: "I was working" }
          ],
          correctOptionId: 2,
          hints: ["meyina = I am going", "ʋu = car", "ƒle = buy"],
          explanation: "You heard 'Meyina ʋu ƒle ge' which means 'I am going to buy a car' in Ewe."
        },
        {
          id: 1806,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Meyina ʋu ƒle [_____] (I am going to buy a car)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "ge" },
            { id: "opt2", text: "me" },
            { id: "opt3", text: "nu" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["ge = going to"],
          explanation: "Meyina ʋu ƒle ge = I am going to buy a car in Ewe."
        }
      ]
    },

    {
      id: "18-3",
      type: "words",
      title: "Everyday Situations",
      icon: "bulb-outline",
      description: "Learn how to express things not yet done and regret in Ewe",
      words: ["Meva haɖe o", "Ne ɖe menya"],
      vocabulary: [
        {
          id: 200,
          english: "She has not come yet",
          native: "Meva haɖe o",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/meva_haɖe_o.m4a")
        },
        {
          id: 203,
          english: "Had I known",
          native: "Ne ɖe menya",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/ne_ɖe_menya.m4a")
        }
      ],
      questions: [
        {
          id: 1807,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'She has not come yet' in Ewe?",
          options: [
            { id: 1, text: "Meva haɖe o" },
            { id: 2, text: "Ne ɖe menya" },
            { id: 3, text: "Mava etsɔ" },
            { id: 4, text: "Meyi etsɔ si va yi" }
          ],
          correctOptionId: 1,
          hints: ["meva = she has not come", "haɖe o = yet"],
          explanation: "Meva haɖe o = She has not come yet in Ewe."
        },
        {
          id: 1808,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/ne_ɖe_menya.m4a"),
          options: [
            { id: 1, text: "She has not come yet" },
            { id: 2, text: "Had I known" },
            { id: 3, text: "I will come tomorrow" },
            { id: 4, text: "I went yesterday" }
          ],
          correctOptionId: 2,
          hints: ["ne ɖe = if", "menya = I knew"],
          explanation: "You heard 'Ne ɖe menya' which means 'Had I known' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-18",
    title: "Review: Future & Past Tense",
    icon: "refresh-outline",
    description: "Review all the past and future tense vocabulary you've learned",
    questions: [
      {
        id: 1809,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I went yesterday' in Ewe?",
        options: [
          { id: 1, text: "Meyi etsɔ si va yi" },
          { id: 2, text: "Meɖu nu xoxo" },
          { id: 3, text: "Menɔ dɔ wɔm" },
          { id: 4, text: "Míenɔ Egɛ̃" }
        ],
        correctOptionId: 1,
        hints: ["etsɔ si va yi = yesterday"],
        explanation: "Meyi etsɔ si va yi = I went yesterday."
      },
      {
        id: 1810,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/menɔ_dɔ_wɔm.m4a"),
        options: [
          { id: 1, text: "I went yesterday" },
          { id: 2, text: "I have eaten already" },
          { id: 3, text: "I was working" },
          { id: 4, text: "We were living in Accra" }
        ],
        correctOptionId: 3,
        hints: ["wɔm = doing"],
        explanation: "You heard 'Menɔ dɔ wɔm' which means 'I was working'."
      },
      {
        id: 1811,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'We were living in Accra' in Ewe?",
        options: [
          { id: 1, text: "Meyi etsɔ si va yi" },
          { id: 2, text: "Meɖu nu xoxo" },
          { id: 3, text: "Menɔ dɔ wɔm" },
          { id: 4, text: "Míenɔ Egɛ̃" }
        ],
        correctOptionId: 4,
        hints: ["míenɔ = we were living", "Egɛ̃ = Accra"],
        explanation: "Míenɔ Egɛ̃ = We were living in Accra."
      },
      {
        id: 1812,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/mava_etsɔ.m4a"),
        options: [
          { id: 1, text: "I will come tomorrow" },
          { id: 2, text: "I am going to buy a car" },
          { id: 3, text: "They will finish next month" },
          { id: 4, text: "I was working" }
        ],
        correctOptionId: 1,
        hints: ["etsɔ = tomorrow"],
        explanation: "You heard 'Mava etsɔ' which means 'I will come tomorrow'."
      },
      {
        id: 1813,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'They will finish next month' in Ewe?",
        options: [
          { id: 1, text: "Mava etsɔ" },
          { id: 2, text: "Meyina ʋu ƒle ge" },
          { id: 3, text: "Woawu enu le ɣleti si gbɔna me" },
          { id: 4, text: "Meyi etsɔ si va yi" }
        ],
        correctOptionId: 3,
        hints: ["woawu = they will finish", "ɣleti si gbɔna = next month"],
        explanation: "Woawu enu le ɣleti si gbɔna me = They will finish next month."
      },
      {
        id: 1814,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'She has not come yet' in Ewe?",
        options: [
          { id: 1, text: "Meva haɖe o" },
          { id: 2, text: "Ne ɖe menya" },
          { id: 3, text: "Mava etsɔ" },
          { id: 4, text: "Meyi etsɔ si va yi" }
        ],
        correctOptionId: 1,
        hints: ["haɖe o = yet"],
        explanation: "Meva haɖe o = She has not come yet."
      },
      {
        id: 1815,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Menɔ dɔ [_____] (I was working)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "wɔm" },
          { id: "opt2", text: "me" },
          { id: "opt3", text: "nu" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["wɔm = doing"],
        explanation: "Menɔ dɔ wɔm = I was working."
      },
      {
        id: 1816,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Meyina ʋu ƒle [_____] (I am going to buy a car)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "ge" },
          { id: "opt2", text: "me" },
          { id: "opt3", text: "nu" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["ge = going to"],
        explanation: "Meyina ʋu ƒle ge = I am going to buy a car."
      },
      {
        id: 1817,
        type: "matching",
        instruction: "Match the Ewe tense phrase with its English translation.",
        question: "Match each Ewe phrase to its correct meaning:",
        pairs: [
          { id: "pair1", left: "Meyi etsɔ si va yi", right: "I will come tomorrow" },
          { id: "pair2", left: "Mava etsɔ", right: "I went yesterday" },
          { id: "pair3", left: "Meɖu nu xoxo", right: "I have eaten already" },
          { id: "pair4", left: "Ne ɖe menya", right: "Had I known" }
        ],
        correctMatches: [
          { leftId: "pair1", rightId: "pair2" },
          { leftId: "pair2", rightId: "pair1" },
          { leftId: "pair3", rightId: "pair3" },
          { leftId: "pair4", rightId: "pair4" }
        ],
        hints: ["Match the tense phrase to its meaning"],
        explanation: "These are common past and future tense phrases in Ewe."
      }
    ]
  }
};