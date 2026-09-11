export default {
  id: 22,
  title: "Proverbs & Idioms",
  description: "Learn common Ewe proverbs and idioms",
  icon: "bulb-outline",
  totalXp: 10,
  difficulty: "Advanced",

  sections: [
    {
      id: "22-1",
      type: "words",
      title: "Wisdom Proverbs",
      icon: "bulb-outline",
      description: "Learn wise Ewe proverbs about life and knowledge",
      words: ["Nunya menɔa ame ɖeka ƒe ta me o", "Ta ɖeka meɖoa aɖaŋu o"],
      vocabulary: [
        {
          id: 240,
          english: "Wisdom is not in one person's head",
          native: "Nunya menɔa ame ɖeka ƒe ta me o",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/nunya_menɔa_ame_ɖeka_ƒe_ta_me_o.m4a")
        },
        {
          id: 244,
          english: "One head does not hold council",
          native: "Ta ɖeka meɖoa aɖaŋu o",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ta_ɖeka_meɖoa_aɖaŋu_o.m4a")
        }
      ],
      questions: [
        {
          id: 2201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe proverb.",
          question: "How do you say 'Wisdom is not in one person's head' in Ewe?",
          options: [
            { id: 1, text: "Nunya menɔa ame ɖeka ƒe ta me o" },
            { id: 2, text: "Ta ɖeka meɖoa aɖaŋu o" },
            { id: 3, text: "Blewuu blewuu wolénɛ kese" },
            { id: 4, text: "Nɔnɔme aɖeke menɔa anyi tegbee o" }
          ],
          correctOptionId: 1,
          hints: ["nunya = wisdom", "ame ɖeka = one person"],
          explanation: "Nunya menɔa ame ɖeka ƒe ta me o = Wisdom is not in one person's head in Ewe."
        },
        {
          id: 2202,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What does this Ewe proverb mean in English?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ta_ɖeka_meɖoa_aɖaŋu_o.m4a"),
          options: [
            { id: 1, text: "Wisdom is not in one person's head" },
            { id: 2, text: "One head does not hold council" },
            { id: 3, text: "Slowly slowly catches the monkey" },
            { id: 4, text: "No condition is permanent" }
          ],
          correctOptionId: 2,
          hints: ["ta ɖeka = one head", "meɖoa aɖaŋu = does not hold council"],
          explanation: "You heard 'Ta ɖeka meɖoa aɖaŋu o' which means 'One head does not hold council' in Ewe."
        },
        {
          id: 2203,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What does this Ewe proverb mean in English?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/nunya_menɔa_ame_ɖeka_ƒe_ta_me_o.m4a"),
          options: [
            { id: 1, text: "Wisdom is not in one person's head" },
            { id: 2, text: "One head does not hold council" },
            { id: 3, text: "Slowly slowly catches the monkey" },
            { id: 4, text: "No condition is permanent" }
          ],
          correctOptionId: 1,
          hints: ["nunya = wisdom"],
          explanation: "You heard 'Nunya menɔa ame ɖeka ƒe ta me o' which means 'Wisdom is not in one person's head' in Ewe."
        }
      ]
    },

    {
      id: "22-2",
      type: "words",
      title: "Patience Proverbs",
      icon: "hourglass-outline",
      description: "Learn Ewe proverbs about patience and perseverance",
      words: ["Blewuu blewuu wolénɛ kese", "Nɔnɔme aɖeke menɔa anyi tegbee o"],
      vocabulary: [
        {
          id: 242,
          english: "Slowly slowly catches the monkey",
          native: "Blewuu blewuu wolénɛ kese",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/blewuu_blewuu_wolénɛ_kese.m4a")
        },
        {
          id: 246,
          english: "No condition is permanent",
          native: "Nɔnɔme aɖeke menɔa anyi tegbee o",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/nɔnɔme_aɖeke_menɔa_anyi_tegbee_o.m4a")
        }
      ],
      questions: [
        {
          id: 2204,
          type: "multiple_choice",
          instruction: "Select the correct Ewe proverb.",
          question: "How do you say 'Slowly slowly catches the monkey' in Ewe?",
          options: [
            { id: 1, text: "Blewuu blewuu wolénɛ kese" },
            { id: 2, text: "Nɔnɔme aɖeke menɔa anyi tegbee o" },
            { id: 3, text: "Nunya menɔa ame ɖeka ƒe ta me o" },
            { id: 4, text: "Ta ɖeka meɖoa aɖaŋu o" }
          ],
          correctOptionId: 1,
          hints: ["blewuu blewuu = slowly slowly"],
          explanation: "Blewuu blewuu wolénɛ kese = Slowly slowly catches the monkey in Ewe."
        },
        {
          id: 2205,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What does this Ewe proverb mean in English?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/nɔnɔme_aɖeke_menɔa_anyi_tegbee_o.m4a"),
          options: [
            { id: 1, text: "Slowly slowly catches the monkey" },
            { id: 2, text: "No condition is permanent" },
            { id: 3, text: "Wisdom is not in one person's head" },
            { id: 4, text: "One head does not hold council" }
          ],
          correctOptionId: 2,
          hints: ["nɔnɔme = condition", "tegbee = forever"],
          explanation: "You heard 'Nɔnɔme aɖeke menɔa anyi tegbee o' which means 'No condition is permanent' in Ewe."
        },
        {
          id: 2206,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What does this Ewe proverb mean in English?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/blewuu_blewuu_wolénɛ_kese.m4a"),
          options: [
            { id: 1, text: "Slowly slowly catches the monkey" },
            { id: 2, text: "No condition is permanent" },
            { id: 3, text: "When the drumbeat changes, the dance changes" },
            { id: 4, text: "A child who washes his hands eats with elders" }
          ],
          correctOptionId: 1,
          hints: ["blewuu = slowly"],
          explanation: "You heard 'Blewuu blewuu wolénɛ kese' which means 'Slowly slowly catches the monkey' in Ewe."
        }
      ]
    },

    {
      id: "22-3",
      type: "words",
      title: "Change & Respect",
      icon: "repeat-outline",
      description: "Learn Ewe proverbs about change and respect",
      words: ["Ɖevi si klɔa asi la ɖua nu kple ametsitsiwo", "Ne ʋuƒoƒo trɔ la, ɣeɖuɖu hã trɔna"],
      vocabulary: [
        {
          id: 241,
          english: "A child who washes his hands eats with elders",
          native: "Ɖevi si klɔa asi la ɖua nu kple ametsitsiwo",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ɖevi_si_klɔa_asi_la_ɖua_nu_kple_ametsitsiwo.m4a")
        },
        {
          id: 243,
          english: "When the drumbeat changes, the dance changes",
          native: "Ne ʋuƒoƒo trɔ la, ɣeɖuɖu hã trɔna",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ne_ʋuƒoƒo_trɔ_la_ɣeɖuɖu_hã_trɔna.m4a")
        }
      ],
      questions: [
        {
          id: 2207,
          type: "multiple_choice",
          instruction: "Select the correct Ewe proverb.",
          question: "How do you say 'A child who washes his hands eats with elders' in Ewe?",
          options: [
            { id: 1, text: "Ɖevi si klɔa asi la ɖua nu kple ametsitsiwo" },
            { id: 2, text: "Ne ʋuƒoƒo trɔ la, ɣeɖuɖu hã trɔna" },
            { id: 3, text: "Blewuu blewuu wolénɛ kese" },
            { id: 4, text: "Ta ɖeka meɖoa aɖaŋu o" }
          ],
          correctOptionId: 1,
          hints: ["ɖevi = child", "ametsitsiwo = elders"],
          explanation: "Ɖevi si klɔa asi la ɖua nu kple ametsitsiwo = A child who washes his hands eats with elders in Ewe."
        },
        {
          id: 2208,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What does this Ewe proverb mean in English?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ne_ʋuƒoƒo_trɔ_la_ɣeɖuɖu_hã_trɔna.m4a"),
          options: [
            { id: 1, text: "A child who washes his hands eats with elders" },
            { id: 2, text: "When the drumbeat changes, the dance changes" },
            { id: 3, text: "Slowly slowly catches the monkey" },
            { id: 4, text: "Wisdom is not in one person's head" }
          ],
          correctOptionId: 2,
          hints: ["ʋuƒoƒo = drumbeat", "ɣeɖuɖu = dance"],
          explanation: "You heard 'Ne ʋuƒoƒo trɔ la, ɣeɖuɖu hã trɔna' which means 'When the drumbeat changes, the dance changes' in Ewe."
        },
        {
          id: 2209,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What does this Ewe proverb mean in English?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ɖevi_si_klɔa_asi_la_ɖua_nu_kple_ametsitsiwo.m4a"),
          options: [
            { id: 1, text: "A child who washes his hands eats with elders" },
            { id: 2, text: "When the drumbeat changes, the dance changes" },
            { id: 3, text: "No condition is permanent" },
            { id: 4, text: "One head does not hold council" }
          ],
          correctOptionId: 1,
          hints: ["ɖevi = child", "ametsitsiwo = elders"],
          explanation: "You heard 'Ɖevi si klɔa asi la ɖua nu kple ametsitsiwo' which means 'A child who washes his hands eats with elders' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-22",
    title: "Review: Proverbs & Idioms",
    icon: "refresh-outline",
    description: "Review all the Ewe proverbs and idioms you've learned",
    questions: [
      {
        id: 2210,
        type: "multiple_choice",
        instruction: "Select the correct Ewe proverb.",
        question: "How do you say 'Wisdom is not in one person's head' in Ewe?",
        options: [
          { id: 1, text: "Nunya menɔa ame ɖeka ƒe ta me o" },
          { id: 2, text: "Ta ɖeka meɖoa aɖaŋu o" },
          { id: 3, text: "Blewuu blewuu wolénɛ kese" },
          { id: 4, text: "Nɔnɔme aɖeke menɔa anyi tegbee o" }
        ],
        correctOptionId: 1,
        hints: ["nunya = wisdom"],
        explanation: "Nunya menɔa ame ɖeka ƒe ta me o = Wisdom is not in one person's head."
      },
      {
        id: 2211,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What does this Ewe proverb mean in English?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ta_ɖeka_meɖoa_aɖaŋu_o.m4a"),
        options: [
          { id: 1, text: "Wisdom is not in one person's head" },
          { id: 2, text: "One head does not hold council" },
          { id: 3, text: "Slowly slowly catches the monkey" },
          { id: 4, text: "No condition is permanent" }
        ],
        correctOptionId: 2,
        hints: ["ta ɖeka = one head"],
        explanation: "You heard 'Ta ɖeka meɖoa aɖaŋu o' which means 'One head does not hold council'."
      },
      {
        id: 2212,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What does this Ewe proverb mean in English?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/nunya_menɔa_ame_ɖeka_ƒe_ta_me_o.m4a"),
        options: [
          { id: 1, text: "Wisdom is not in one person's head" },
          { id: 2, text: "One head does not hold council" },
          { id: 3, text: "Slowly slowly catches the monkey" },
          { id: 4, text: "No condition is permanent" }
        ],
        correctOptionId: 1,
        hints: ["nunya = wisdom"],
        explanation: "You heard 'Nunya menɔa ame ɖeka ƒe ta me o' which means 'Wisdom is not in one person's head'."
      },
      {
        id: 2213,
        type: "multiple_choice",
        instruction: "Select the correct Ewe proverb.",
        question: "How do you say 'Slowly slowly catches the monkey' in Ewe?",
        options: [
          { id: 1, text: "Blewuu blewuu wolénɛ kese" },
          { id: 2, text: "Nɔnɔme aɖeke menɔa anyi tegbee o" },
          { id: 3, text: "Nunya menɔa ame ɖeka ƒe ta me o" },
          { id: 4, text: "Ta ɖeka meɖoa aɖaŋu o" }
        ],
        correctOptionId: 1,
        hints: ["blewuu = slowly"],
        explanation: "Blewuu blewuu wolénɛ kese = Slowly slowly catches the monkey."
      },
      {
        id: 2214,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What does this Ewe proverb mean in English?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/nɔnɔme_aɖeke_menɔa_anyi_tegbee_o.m4a"),
        options: [
          { id: 1, text: "Slowly slowly catches the monkey" },
          { id: 2, text: "No condition is permanent" },
          { id: 3, text: "Wisdom is not in one person's head" },
          { id: 4, text: "One head does not hold council" }
        ],
        correctOptionId: 2,
        hints: ["tegbee = forever"],
        explanation: "You heard 'Nɔnɔme aɖeke menɔa anyi tegbee o' which means 'No condition is permanent'."
      },
      {
        id: 2215,
        type: "multiple_choice",
        instruction: "Select the correct Ewe proverb.",
        question: "How do you say 'When the drumbeat changes, the dance changes' in Ewe?",
        options: [
          { id: 1, text: "Ɖevi si klɔa asi la ɖua nu kple ametsitsiwo" },
          { id: 2, text: "Ne ʋuƒoƒo trɔ la, ɣeɖuɖu hã trɔna" },
          { id: 3, text: "Blewuu blewuu wolénɛ kese" },
          { id: 4, text: "Ta ɖeka meɖoa aɖaŋu o" }
        ],
        correctOptionId: 2,
        hints: ["ʋuƒoƒo = drumbeat"],
        explanation: "Ne ʋuƒoƒo trɔ la, ɣeɖuɖu hã trɔna = When the drumbeat changes, the dance changes."
      },
      {
        id: 2216,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What does this Ewe proverb mean in English?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ɖevi_si_klɔa_asi_la_ɖua_nu_kple_ametsitsiwo.m4a"),
        options: [
          { id: 1, text: "A child who washes his hands eats with elders" },
          { id: 2, text: "When the drumbeat changes, the dance changes" },
          { id: 3, text: "No condition is permanent" },
          { id: 4, text: "One head does not hold council" }
        ],
        correctOptionId: 1,
        hints: ["ɖevi = child"],
        explanation: "You heard 'Ɖevi si klɔa asi la ɖua nu kple ametsitsiwo' which means 'A child who washes his hands eats with elders'."
      },
      {
        id: 2217,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What does this Ewe proverb mean in English?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ne_ʋuƒoƒo_trɔ_la_ɣeɖuɖu_hã_trɔna.m4a"),
        options: [
          { id: 1, text: "A child who washes his hands eats with elders" },
          { id: 2, text: "When the drumbeat changes, the dance changes" },
          { id: 3, text: "No condition is permanent" },
          { id: 4, text: "Slowly slowly catches the monkey" }
        ],
        correctOptionId: 2,
        hints: ["ʋuƒoƒo = drumbeat"],
        explanation: "You heard 'Ne ʋuƒoƒo trɔ la, ɣeɖuɖu hã trɔna' which means 'When the drumbeat changes, the dance changes'."
      },
      {
        id: 2218,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What does this Ewe proverb mean in English?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/blewuu_blewuu_wolénɛ_kese.m4a"),
        options: [
          { id: 1, text: "Slowly slowly catches the monkey" },
          { id: 2, text: "No condition is permanent" },
          { id: 3, text: "When the drumbeat changes, the dance changes" },
          { id: 4, text: "A child who washes his hands eats with elders" }
        ],
        correctOptionId: 1,
        hints: ["blewuu = slowly"],
        explanation: "You heard 'Blewuu blewuu wolénɛ kese' which means 'Slowly slowly catches the monkey'."
      },
      {
        id: 2219,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What does this Ewe proverb mean in English?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter2/ta_ɖeka_meɖoa_aɖaŋu_o.m4a"),
        options: [
          { id: 1, text: "Wisdom is not in one person's head" },
          { id: 2, text: "One head does not hold council" },
          { id: 3, text: "Slowly slowly catches the monkey" },
          { id: 4, text: "No condition is permanent" }
        ],
        correctOptionId: 2,
        hints: ["ta ɖeka = one head"],
        explanation: "You heard 'Ta ɖeka meɖoa aɖaŋu o' which means 'One head does not hold council'."
      }
    ]
  }
};