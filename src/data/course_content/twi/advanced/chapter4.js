export default {
  id: 4,
  title: "News & Politics",
  description: "Learn news and politics vocabulary in Twi",
  icon: "newspaper-outline",
  totalXp: 10,
  difficulty: "Advanced",

  sections: [
    {
      id: "4-1",
      type: "phrases",
      title: "Government & Elections",
      icon: "business-outline",
      description: "Learn phrases about government and elections in Twi",
      words: ["Aban no de nhyehyɛeɛ foforɔ ato dwa", "Wɔbɛto aba afe a ɛdi yɛn anim no mu", "Ɔmanpanin no kasa kyerɛɛ ɔman no", "Mmarahyɛbadwa no agye mmara no atoom"],
      vocabulary: [
        {
          id: 257,
          english: "The government announced a new policy",
          native: "Aban no de nhyehyɛeɛ foforɔ ato dwa",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/aban_no_de_nhyehyɛeɛ_foforɔ_ato_dwa.m4a")
        },
        {
          id: 258,
          english: "Elections will be held next year",
          native: "Wɔbɛto aba afe a ɛdi yɛn anim no mu",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/wɔbɛto_aba_afe_a_ɛdi_yɛn_anim_no_mu.m4a")
        },
        {
          id: 259,
          english: "The president addressed the nation",
          native: "Ɔmanpanin no kasa kyerɛɛ ɔman no",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/ɔmanpanin_no_kasa_kyerɛɛ_ɔman_no.m4a")
        },
        {
          id: 260,
          english: "Parliament passed the bill",
          native: "Mmarahyɛbadwa no agye mmara no atoom",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/mmarahyɛbadwa_no_agye_mmara_no_atoom.m4a")
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The government announced a new policy' in Twi?",
          options: [
            { id: 1, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
            { id: 2, text: "Wɔbɛto aba afe a ɛdi yɛn anim no mu" },
            { id: 3, text: "Ɔmanpanin no kasa kyerɛɛ ɔman no" },
            { id: 4, text: "Mmarahyɛbadwa no agye mmara no atoom" }
          ],
          correctOptionId: 1,
          hints: ["aban = government", "nhyehyɛeɛ foforɔ = new policy"],
          explanation: "Aban no de nhyehyɛeɛ foforɔ ato dwa = The government announced a new policy in Twi."
        },
        {
          id: 402,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/wɔbɛto_aba_afe_a_ɛdi_yɛn_anim_no_mu.m4a"),
          options: [
            { id: 1, text: "The government announced a new policy" },
            { id: 2, text: "Elections will be held next year" },
            { id: 3, text: "The president addressed the nation" },
            { id: 4, text: "Parliament passed the bill" }
          ],
          correctOptionId: 2,
          hints: ["wɔbɛto aba = elections will be held"],
          explanation: "You heard 'Wɔbɛto aba afe a ɛdi yɛn anim no mu' which means 'Elections will be held next year' in Twi."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The president addressed the nation' in Twi?",
          options: [
            { id: 1, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
            { id: 2, text: "Wɔbɛto aba afe a ɛdi yɛn anim no mu" },
            { id: 3, text: "Ɔmanpanin no kasa kyerɛɛ ɔman no" },
            { id: 4, text: "Ɔman ne sikasɛm no reyɛ yiye" }
          ],
          correctOptionId: 3,
          hints: ["ɔmanpanin = president", "kasa kyerɛɛ = addressed"],
          explanation: "Ɔmanpanin no kasa kyerɛɛ ɔman no = The president addressed the nation in Twi."
        },
        {
          id: 404,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/mmarahyɛbadwa_no_agye_mmara_no_atoom.m4a"),
          options: [
            { id: 1, text: "The government announced a new policy" },
            { id: 2, text: "Elections will be held next year" },
            { id: 3, text: "The president addressed the nation" },
            { id: 4, text: "Parliament passed the bill" }
          ],
          correctOptionId: 4,
          hints: ["mmarahyɛbadwa = parliament", "mmara = bill/law"],
          explanation: "You heard 'Mmarahyɛbadwa no agye mmara no atoom' which means 'Parliament passed the bill' in Twi."
        }
      ]
    },

    {
      id: "4-2",
      type: "phrases",
      title: "Economy & Citizens",
      icon: "trending-up-outline",
      description: "Learn phrases about the economy and citizens in Twi",
      words: ["Ɔman ne sikasɛm no reyɛ yiye", "Ɔmanfoɔ hwehwɛ akontabuo"],
      vocabulary: [
        {
          id: 261,
          english: "The economy is improving",
          native: "Ɔman ne sikasɛm no reyɛ yiye",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/ɔman_ne_sikasɛm_no_reyɛ_yiye.m4a")
        },
        {
          id: 262,
          english: "Citizens demand accountability",
          native: "Ɔmanfoɔ hwehwɛ akontabuo",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/ɔmanfoɔ_hwehwɛ_akontabuo.m4a")
        }
      ],
      questions: [
        {
          id: 405,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The economy is improving' in Twi?",
          options: [
            { id: 1, text: "Ɔman ne sikasɛm no reyɛ yiye" },
            { id: 2, text: "Ɔmanfoɔ hwehwɛ akontabuo" },
            { id: 3, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
            { id: 4, text: "Ɔmanpanin no kasa kyerɛɛ ɔman no" }
          ],
          correctOptionId: 1,
          hints: ["sikasɛm = economy", "reyɛ yiye = improving"],
          explanation: "Ɔman ne sikasɛm no reyɛ yiye = The economy is improving in Twi."
        },
        {
          id: 406,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/ɔmanfoɔ_hwehwɛ_akontabuo.m4a"),
          options: [
            { id: 1, text: "The economy is improving" },
            { id: 2, text: "Citizens demand accountability" },
            { id: 3, text: "The government announced a new policy" },
            { id: 4, text: "Parliament passed the bill" }
          ],
          correctOptionId: 2,
          hints: ["ɔmanfoɔ = citizens", "akontabuo = accountability"],
          explanation: "You heard 'Ɔmanfoɔ hwehwɛ akontabuo' which means 'Citizens demand accountability' in Twi."
        },
        {
          id: 407,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Citizens demand accountability' in Twi?",
          options: [
            { id: 1, text: "Ɔman ne sikasɛm no reyɛ yiye" },
            { id: 2, text: "Ɔmanfoɔ hwehwɛ akontabuo" },
            { id: 3, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
            { id: 4, text: "Wɔbɛto aba afe a ɛdi yɛn anim no mu" }
          ],
          correctOptionId: 2,
          hints: ["hwehwɛ = demand", "akontabuo = accountability"],
          explanation: "Ɔmanfoɔ hwehwɛ akontabuo = Citizens demand accountability in Twi."
        },
        {
          id: 408,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/ɔman_ne_sikasɛm_no_reyɛ_yiye.m4a"),
          options: [
            { id: 1, text: "The economy is improving" },
            { id: 2, text: "Citizens demand accountability" },
            { id: 3, text: "The president addressed the nation" },
            { id: 4, text: "Parliament passed the bill" }
          ],
          correctOptionId: 1,
          hints: ["sikasɛm = economy"],
          explanation: "You heard 'Ɔman ne sikasɛm no reyɛ yiye' which means 'The economy is improving' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-4",
    title: "Review: News & Politics",
    icon: "refresh-outline",
    description: "Review all the news and politics vocabulary you've learned",
    questions: [
      {
        id: 409,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The government announced a new policy' in Twi?",
        options: [
          { id: 1, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
          { id: 2, text: "Wɔbɛto aba afe a ɛdi yɛn anim no mu" },
          { id: 3, text: "Ɔmanpanin no kasa kyerɛɛ ɔman no" },
          { id: 4, text: "Mmarahyɛbadwa no agye mmara no atoom" }
        ],
        correctOptionId: 1,
        hints: ["aban = government"],
        explanation: "Aban no de nhyehyɛeɛ foforɔ ato dwa = The government announced a new policy."
      },
      {
        id: 410,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/ɔmanpanin_no_kasa_kyerɛɛ_ɔman_no.m4a"),
        options: [
          { id: 1, text: "The government announced a new policy" },
          { id: 2, text: "Elections will be held next year" },
          { id: 3, text: "The president addressed the nation" },
          { id: 4, text: "Parliament passed the bill" }
        ],
        correctOptionId: 3,
        hints: ["ɔmanpanin = president"],
        explanation: "You heard 'Ɔmanpanin no kasa kyerɛɛ ɔman no' which means 'The president addressed the nation'."
      },
      {
        id: 411,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Elections will be held next year' in Twi?",
        options: [
          { id: 1, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
          { id: 2, text: "Wɔbɛto aba afe a ɛdi yɛn anim no mu" },
          { id: 3, text: "Ɔmanpanin no kasa kyerɛɛ ɔman no" },
          { id: 4, text: "Ɔmanfoɔ hwehwɛ akontabuo" }
        ],
        correctOptionId: 2,
        hints: ["wɔbɛto aba = elections"],
        explanation: "Wɔbɛto aba afe a ɛdi yɛn anim no mu = Elections will be held next year."
      },
      {
        id: 412,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter4/ɔmanfoɔ_hwehwɛ_akontabuo.m4a"),
        options: [
          { id: 1, text: "The economy is improving" },
          { id: 2, text: "Citizens demand accountability" },
          { id: 3, text: "The government announced a new policy" },
          { id: 4, text: "Parliament passed the bill" }
        ],
        correctOptionId: 2,
        hints: ["akontabuo = accountability"],
        explanation: "You heard 'Ɔmanfoɔ hwehwɛ akontabuo' which means 'Citizens demand accountability'."
      },
      {
        id: 413,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The president addressed the nation' in Twi?",
        options: [
          { id: 1, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
          { id: 2, text: "Wɔbɛto aba afe a ɛdi yɛn anim no mu" },
          { id: 3, text: "Ɔmanpanin no kasa kyerɛɛ ɔman no" },
          { id: 4, text: "Ɔman ne sikasɛm no reyɛ yiye" }
        ],
        correctOptionId: 3,
        hints: ["kasa kyerɛɛ = addressed"],
        explanation: "Ɔmanpanin no kasa kyerɛɛ ɔman no = The president addressed the nation."
      },
      {
        id: 414,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Parliament passed the bill' in Twi?",
        options: [
          { id: 1, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
          { id: 2, text: "Wɔbɛto aba afe a ɛdi yɛn anim no mu" },
          { id: 3, text: "Ɔmanpanin no kasa kyerɛɛ ɔman no" },
          { id: 4, text: "Mmarahyɛbadwa no agye mmara no atoom" }
        ],
        correctOptionId: 4,
        hints: ["mmara = bill"],
        explanation: "Mmarahyɛbadwa no agye mmara no atoom = Parliament passed the bill."
      },
      {
        id: 415,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The economy is improving' in Twi?",
        options: [
          { id: 1, text: "Ɔman ne sikasɛm no reyɛ yiye" },
          { id: 2, text: "Ɔmanfoɔ hwehwɛ akontabuo" },
          { id: 3, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
          { id: 4, text: "Ɔmanpanin no kasa kyerɛɛ ɔman no" }
        ],
        correctOptionId: 1,
        hints: ["sikasɛm = economy"],
        explanation: "Ɔman ne sikasɛm no reyɛ yiye = The economy is improving."
      },
      {
        id: 416,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Citizens demand accountability' in Twi?",
        options: [
          { id: 1, text: "Ɔman ne sikasɛm no reyɛ yiye" },
          { id: 2, text: "Ɔmanfoɔ hwehwɛ akontabuo" },
          { id: 3, text: "Aban no de nhyehyɛeɛ foforɔ ato dwa" },
          { id: 4, text: "Mmarahyɛbadwa no agye mmara no atoom" }
        ],
        correctOptionId: 2,
        hints: ["ɔmanfoɔ = citizens"],
        explanation: "Ɔmanfoɔ hwehwɛ akontabuo = Citizens demand accountability."
      }
    ]
  }
};