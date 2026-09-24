export default {
  id: 8,
  title: "Future & Past Tense",
  description: "Learn useful Ewe phrases for talking about past and future events",
  icon: "time-outline",
  totalXp: 12,
  difficulty: "Intermediate",

  sections: [
    {
      id: "8-1",
      type: "words",
      title: "Talking About the Past",
      icon: "time-outline",
      description: "Learn how to express past actions and events in Ewe",
      words: ["Meyi etsɔ hi va yi", "Meɖu nu xoxo", "Menɔ dɔ wɔm", "Míenɔ Egɛ̃"],
      vocabulary: [
        {
          id: 196,
          english: "I went yesterday",
          native: "Meyi etsɔ hi va yi",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/meyi_etsɔ_hi_va_yi.m4a")
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
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I went yesterday' in Ewe?",
          options: [
            { id: 1, text: "Meyi etsɔ hi va yi" },
            { id: 2, text: "Meɖu nu xoxo" },
            { id: 3, text: "Menɔ dɔ wɔm" },
            { id: 4, text: "Míenɔ Egɛ̃" }
          ],
          correctOptionId: 1,
          hints: ["meyi = I went", "etsɔ hi va yi = yesterday"],
          explanation: "Meyi etsɔ hi va yi = I went yesterday in Ewe."
        },
        {
          id: 802,
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
          id: 803,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I was working' in Ewe?",
          options: [
            { id: 1, text: "Meyi etsɔ hi va yi" },
            { id: 2, text: "Meɖu nu xoxo" },
            { id: 3, text: "Menɔ dɔ wɔm" },
            { id: 4, text: "Míenɔ Egɛ̃" }
          ],
          correctOptionId: 3,
          hints: ["menɔ = I was", "dɔ wɔm = working"],
          explanation: "Menɔ dɔ wɔm = I was working in Ewe."
        },
        {
          id: 804,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/míenɔ_egɛ̃.m4a"),
          options: [
            { id: 1, text: "I went yesterday" },
            { id: 2, text: "I have eaten already" },
            { id: 3, text: "I was working" },
            { id: 4, text: "We were living in Accra" }
          ],
          correctOptionId: 4,
          hints: ["míenɔ = we were living", "Egɛ̃ = Accra"],
          explanation: "You heard 'Míenɔ Egɛ̃' which means 'We were living in Accra' in Ewe."
        }
      ]
    },

    {
      id: "8-2",
      type: "words",
      title: "Talking About the Future",
      icon: "time-outline",
      description: "Learn how to express future actions and plans in Ewe",
      words: ["Mava etsɔ", "Meyina ʋu ƒle ge", "Woawu enu le ɣleti hi gbɔna me"],
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
          native: "Woawu enu le ɣleti hi gbɔna me",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/woawu_enu_le_vleti_si_gbɔna_me.m4a")
        }
      ],
      questions: [
        {
          id: 805,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I will come tomorrow' in Ewe?",
          options: [
            { id: 1, text: "Mava etsɔ" },
            { id: 2, text: "Meyina ʋu ƒle ge" },
            { id: 3, text: "Woawu enu le ɣleti hi gbɔna me" },
            { id: 4, text: "Meyi etsɔ hi va yi" }
          ],
          correctOptionId: 1,
          hints: ["mava = I will come", "etsɔ = tomorrow"],
          explanation: "Mava etsɔ = I will come tomorrow in Ewe."
        },
        {
          id: 806,
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
          id: 807,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'They will finish next month' in Ewe?",
          options: [
            { id: 1, text: "Mava etsɔ" },
            { id: 2, text: "Meyina ʋu ƒle ge" },
            { id: 3, text: "Woawu enu le ɣleti hi gbɔna me" },
            { id: 4, text: "Míenɔ Egɛ̃" }
          ],
          correctOptionId: 3,
          hints: ["woawu = they will finish", "ɣleti hi gbɔna = next month"],
          explanation: "Woawu enu le ɣleti hi gbɔna me = They will finish next month in Ewe."
        },
        {
          id: 808,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/mava_etsɔ.m4a"),
          options: [
            { id: 1, text: "I will come tomorrow" },
            { id: 2, text: "I am going to buy a car" },
            { id: 3, text: "They will finish next month" },
            { id: 4, text: "I went yesterday" }
          ],
          correctOptionId: 1,
          hints: ["etsɔ = tomorrow"],
          explanation: "You heard 'Mava etsɔ' which means 'I will come tomorrow' in Ewe."
        }
      ]
    },

    {
      id: "8-3",
      type: "words",
      title: "Past Conditions & Regret",
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
          id: 809,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'She has not come yet' in Ewe?",
          options: [
            { id: 1, text: "Meva haɖe o" },
            { id: 2, text: "Ne ɖe menya" },
            { id: 3, text: "Mava etsɔ" },
            { id: 4, text: "Meyi etsɔ hi va yi" }
          ],
          correctOptionId: 1,
          hints: ["meva = she has not come", "haɖe o = yet"],
          explanation: "Meva haɖe o = She has not come yet in Ewe."
        },
        {
          id: 810,
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
        },
        {
          id: 811,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Had I known' in Ewe?",
          options: [
            { id: 1, text: "Meva haɖe o" },
            { id: 2, text: "Ne ɖe menya" },
            { id: 3, text: "Mava etsɔ" },
            { id: 4, text: "Míenɔ Egɛ̃" }
          ],
          correctOptionId: 2,
          hints: ["ne ɖe = if"],
          explanation: "Ne ɖe menya = Had I known in Ewe."
        },
        {
          id: 812,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/meva_haɖe_o.m4a"),
          options: [
            { id: 1, text: "She has not come yet" },
            { id: 2, text: "Had I known" },
            { id: 3, text: "I will come tomorrow" },
            { id: 4, text: "I have eaten already" }
          ],
          correctOptionId: 1,
          hints: ["haɖe o = yet"],
          explanation: "You heard 'Meva haɖe o' which means 'She has not come yet' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Future & Past Tense",
    icon: "refresh-outline",
    description: "Review all the past and future tense vocabulary you've learned",
    questions: [
      {
        id: 813,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I went yesterday' in Ewe?",
        options: [
          { id: 1, text: "Meyi etsɔ hi va yi" },
          { id: 2, text: "Meɖu nu xoxo" },
          { id: 3, text: "Menɔ dɔ wɔm" },
          { id: 4, text: "Míenɔ Egɛ̃" }
        ],
        correctOptionId: 1,
        hints: ["etsɔ hi va yi = yesterday"],
        explanation: "Meyi etsɔ hi va yi = I went yesterday."
      },
      {
        id: 814,
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
        id: 815,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'We were living in Accra' in Ewe?",
        options: [
          { id: 1, text: "Meyi etsɔ hi va yi" },
          { id: 2, text: "Meɖu nu xoxo" },
          { id: 3, text: "Menɔ dɔ wɔm" },
          { id: 4, text: "Míenɔ Egɛ̃" }
        ],
        correctOptionId: 4,
        hints: ["míenɔ = we were living"],
        explanation: "Míenɔ Egɛ̃ = We were living in Accra."
      },
      {
        id: 816,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter8/woawu_enu_le_vleti_si_gbɔna_me.m4a"),
        options: [
          { id: 1, text: "I will come tomorrow" },
          { id: 2, text: "I am going to buy a car" },
          { id: 3, text: "They will finish next month" },
          { id: 4, text: "I was working" }
        ],
        correctOptionId: 3,
        hints: ["ɣleti hi gbɔna = next month"],
        explanation: "You heard 'Woawu enu le ɣleti hi gbɔna me' which means 'They will finish next month'."
      },
      {
        id: 817,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'They will finish next month' in Ewe?",
        options: [
          { id: 1, text: "Mava etsɔ" },
          { id: 2, text: "Meyina ʋu ƒle ge" },
          { id: 3, text: "Woawu enu le ɣleti hi gbɔna me" },
          { id: 4, text: "Meyi etsɔ hi va yi" }
        ],
        correctOptionId: 3,
        hints: ["woawu = they will finish"],
        explanation: "Woawu enu le ɣleti hi gbɔna me = They will finish next month."
      },
      {
        id: 818,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I have eaten already' in Ewe?",
        options: [
          { id: 1, text: "Meyi etsɔ hi va yi" },
          { id: 2, text: "Meɖu nu xoxo" },
          { id: 3, text: "Menɔ dɔ wɔm" },
          { id: 4, text: "Míenɔ Egɛ̃" }
        ],
        correctOptionId: 2,
        hints: ["xoxo = already"],
        explanation: "Meɖu nu xoxo = I have eaten already."
      },
      {
        id: 819,
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
        hints: ["ʋu = car"],
        explanation: "You heard 'Meyina ʋu ƒle ge' which means 'I am going to buy a car'."
      },
      {
        id: 820,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'She has not come yet' in Ewe?",
        options: [
          { id: 1, text: "Meva haɖe o" },
          { id: 2, text: "Ne ɖe menya" },
          { id: 3, text: "Mava etsɔ" },
          { id: 4, text: "Meyi etsɔ hi va yi" }
        ],
        correctOptionId: 1,
        hints: ["haɖe o = yet"],
        explanation: "Meva haɖe o = She has not come yet."
      },
      {
        id: 821,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Had I known' in Ewe?",
        options: [
          { id: 1, text: "Meva haɖe o" },
          { id: 2, text: "Ne ɖe menya" },
          { id: 3, text: "Mava etsɔ" },
          { id: 4, text: "Míenɔ Egɛ̃" }
        ],
        correctOptionId: 2,
        hints: ["ne ɖe = if"],
        explanation: "Ne ɖe menya = Had I known."
      },
      {
        id: 822,
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
        hints: ["menya = I knew"],
        explanation: "You heard 'Ne ɖe menya' which means 'Had I known'."
      }
    ]
  }
};