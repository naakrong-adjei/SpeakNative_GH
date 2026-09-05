export default {
  id: 26,
  title: "News & Politics",
  description: "Learn news and politics vocabulary in Ewe",
  icon: "newspaper-outline",
  totalXp: 10,
  difficulty: "Advanced",

  sections: [
    {
      id: "26-1",
      type: "words",
      title: "Government & Elections",
      icon: "landmark-outline",
      description: "Learn about government and elections in Ewe",
      words: ["Dziɖuɖua ɖe gbeƒã ɖoɖo yeye", "Woawɔ akɔdada le ƒe si gbɔna me", "Dukplɔla la ƒo nu na dukɔa", "Sededzraɖoƒea lɔ̃ ɖe sea dzi"],
      vocabulary: [
        {
          id: 254,
          english: "The government announced a new policy",
          native: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/dziɖuɖua_ɖe_gbeƒã_ɖoɖo_yeye.m4a")
        },
        {
          id: 255,
          english: "Elections will be held next year",
          native: "Woawɔ akɔdada le ƒe si gbɔna me",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/woawɔ_akɔdada_le_ƒe_si_gbɔna_me.m4a")
        },
        {
          id: 257,
          english: "The president addressed the nation",
          native: "Dukplɔla la ƒo nu na dukɔa",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/dukplɔla_la_ƒo_nu_na_dukɔa.m4a")
        },
        {
          id: 258,
          english: "Parliament passed the bill",
          native: "Sededzraɖoƒea lɔ̃ ɖe sea dzi",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/sededzraɖoƒea_lɔ̃_ɖe_sea_dzi.m4a")
        }
      ],
      questions: [
        {
          id: 2601,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The government announced a new policy' in Ewe?",
          options: [
            { id: 1, text: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye" },
            { id: 2, text: "Woawɔ akɔdada le ƒe si gbɔna me" },
            { id: 3, text: "Dukplɔla la ƒo nu na dukɔa" },
            { id: 4, text: "Sededzraɖoƒea lɔ̃ ɖe sea dzi" }
          ],
          correctOptionId: 1,
          hints: ["dziɖuɖua = government", "ɖoɖo yeye = new policy"],
          explanation: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye = The government announced a new policy in Ewe."
        },
        {
          id: 2602,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/woawɔ_akɔdada_le_ƒe_si_gbɔna_me.m4a"),
          options: [
            { id: 1, text: "The government announced a new policy" },
            { id: 2, text: "Elections will be held next year" },
            { id: 3, text: "The president addressed the nation" },
            { id: 4, text: "Parliament passed the bill" }
          ],
          correctOptionId: 2,
          hints: ["akɔdada = elections", "ƒe si gbɔna = next year"],
          explanation: "You heard 'Woawɔ akɔdada le ƒe si gbɔna me' which means 'Elections will be held next year' in Ewe."
        },
        {
          id: 2603,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Dukplɔla la ƒo nu na [_____] (The president addressed the nation)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "dukɔa" },
            { id: "opt2", text: "sea" },
            { id: "opt3", text: "gbe" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["dukɔa = the nation"],
          explanation: "Dukplɔla la ƒo nu na dukɔa = The president addressed the nation in Ewe."
        }
      ]
    },

    {
      id: "26-2",
      type: "words",
      title: "Economy & Citizens",
      icon: "trending-up-outline",
      description: "Learn about the economy and citizens in Ewe",
      words: ["Ganyawo ɖeɖem ɖe edzi", "Nuwo ƒe asi dzi ɖe edzi", "Dukɔmeviwo bia akɔntabubu"],
      vocabulary: [
        {
          id: 256,
          english: "The economy is improving",
          native: "Ganyawo ɖeɖem ɖe edzi",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/ganyawo_ɖeɖem_ɖe_edzi.m4a")
        },
        {
          id: 259,
          english: "Prices of goods have risen",
          native: "Nuwo ƒe asi dzi ɖe edzi",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/nuwo_ƒe_asi_dzi_ɖe_edzi.m4a")
        },
        {
          id: 260,
          english: "Citizens demand accountability",
          native: "Dukɔmeviwo bia akɔntabubu",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/dukɔmeviwo_bia_akɔntabubu.m4a")
        }
      ],
      questions: [
        {
          id: 2604,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The economy is improving' in Ewe?",
          options: [
            { id: 1, text: "Ganyawo ɖeɖem ɖe edzi" },
            { id: 2, text: "Nuwo ƒe asi dzi ɖe edzi" },
            { id: 3, text: "Dukɔmeviwo bia akɔntabubu" },
            { id: 4, text: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye" }
          ],
          correctOptionId: 1,
          hints: ["ganyawo = economy", "ɖeɖem = improving"],
          explanation: "Ganyawo ɖeɖem ɖe edzi = The economy is improving in Ewe."
        },
        {
          id: 2605,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/ganyawo_ɖeɖem_ɖe_edzi.m4a"),
          options: [
            { id: 1, text: "The economy is improving" },
            { id: 2, text: "Prices of goods have risen" },
            { id: 3, text: "Citizens demand accountability" },
            { id: 4, text: "The government announced a new policy" }
          ],
          correctOptionId: 1,
          hints: ["ganyawo = economy"],
          explanation: "You heard 'Ganyawo ɖeɖem ɖe edzi' which means 'The economy is improving' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-26",
    title: "Review: News & Politics",
    icon: "refresh-outline",
    description: "Review all the news and politics vocabulary you've learned",
    questions: [
      {
        id: 2606,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The government announced a new policy' in Ewe?",
        options: [
          { id: 1, text: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye" },
          { id: 2, text: "Woawɔ akɔdada le ƒe si gbɔna me" },
          { id: 3, text: "Dukplɔla la ƒo nu na dukɔa" },
          { id: 4, text: "Sededzraɖoƒea lɔ̃ ɖe sea dzi" }
        ],
        correctOptionId: 1,
        hints: ["dziɖuɖua = government"],
        explanation: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye = The government announced a new policy."
      },
      {
        id: 2607,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/dukplɔla_la_ƒo_nu_na_dukɔa.m4a"),
        options: [
          { id: 1, text: "The government announced a new policy" },
          { id: 2, text: "Elections will be held next year" },
          { id: 3, text: "The president addressed the nation" },
          { id: 4, text: "Parliament passed the bill" }
        ],
        correctOptionId: 3,
        hints: ["dukplɔla = president"],
        explanation: "You heard 'Dukplɔla la ƒo nu na dukɔa' which means 'The president addressed the nation'."
      },
      {
        id: 2608,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Elections will be held next year' in Ewe?",
        options: [
          { id: 1, text: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye" },
          { id: 2, text: "Woawɔ akɔdada le ƒe si gbɔna me" },
          { id: 3, text: "Dukplɔla la ƒo nu na dukɔa" },
          { id: 4, text: "Ganyawo ɖeɖem ɖe edzi" }
        ],
        correctOptionId: 2,
        hints: ["akɔdada = elections"],
        explanation: "Woawɔ akɔdada le ƒe si gbɔna me = Elections will be held next year."
      },
      {
        id: 2609,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/dziɖuɖua_ɖe_gbeƒã_ɖoɖo_yeye.m4a"),
        options: [
          { id: 1, text: "The government announced a new policy" },
          { id: 2, text: "Elections will be held next year" },
          { id: 3, text: "The president addressed the nation" },
          { id: 4, text: "The economy is improving" }
        ],
        correctOptionId: 1,
        hints: ["ɖoɖo yeye = new policy"],
        explanation: "You heard 'Dziɖuɖua ɖe gbeƒã ɖoɖo yeye' which means 'The government announced a new policy'."
      },
      {
        id: 2610,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Dukplɔla la ƒo nu na [_____] (The president addressed the nation)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "dukɔa" },
          { id: "opt2", text: "sea" },
          { id: "opt3", text: "gbe" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["dukɔa = the nation"],
        explanation: "Dukplɔla la ƒo nu na dukɔa = The president addressed the nation."
      },
      {
        id: 2611,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The economy is improving' in Ewe?",
        options: [
          { id: 1, text: "Ganyawo ɖeɖem ɖe edzi" },
          { id: 2, text: "Nuwo ƒe asi dzi ɖe edzi" },
          { id: 3, text: "Dukɔmeviwo bia akɔntabubu" },
          { id: 4, text: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye" }
        ],
        correctOptionId: 1,
        hints: ["ganyawo = economy"],
        explanation: "Ganyawo ɖeɖem ɖe edzi = The economy is improving."
      },
      {
        id: 2612,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/ganyawo_ɖeɖem_ɖe_edzi.m4a"),
        options: [
          { id: 1, text: "The economy is improving" },
          { id: 2, text: "Prices of goods have risen" },
          { id: 3, text: "Citizens demand accountability" },
          { id: 4, text: "The government announced a new policy" }
        ],
        correctOptionId: 1,
        hints: ["ɖeɖem = improving"],
        explanation: "You heard 'Ganyawo ɖeɖem ɖe edzi' which means 'The economy is improving'."
      },
      {
        id: 2613,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Dziɖuɖua ɖe gbeƒã ɖoɖo [_____] (The government announced a new policy)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "yeye" },
          { id: "opt2", text: "me" },
          { id: "opt3", text: "nu" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["yeye = new"],
        explanation: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye = The government announced a new policy."
      },
      {
        id: 2614,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The president addressed the nation' in Ewe?",
        options: [
          { id: 1, text: "Dziɖuɖua ɖe gbeƒã ɖoɖo yeye" },
          { id: 2, text: "Woawɔ akɔdada le ƒe si gbɔna me" },
          { id: 3, text: "Dukplɔla la ƒo nu na dukɔa" },
          { id: 4, text: "Sededzraɖoƒea lɔ̃ ɖe sea dzi" }
        ],
        correctOptionId: 3,
        hints: ["dukplɔla = president"],
        explanation: "Dukplɔla la ƒo nu na dukɔa = The president addressed the nation."
      },
      {
        id: 2615,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter6/woawɔ_akɔdada_le_ƒe_si_gbɔna_me.m4a"),
        options: [
          { id: 1, text: "The government announced a new policy" },
          { id: 2, text: "Elections will be held next year" },
          { id: 3, text: "The president addressed the nation" },
          { id: 4, text: "Parliament passed the bill" }
        ],
        correctOptionId: 2,
        hints: ["akɔdada = elections"],
        explanation: "You heard 'Woawɔ akɔdada le ƒe si gbɔna me' which means 'Elections will be held next year'."
      }
    ]
  }
};