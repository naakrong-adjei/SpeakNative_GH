export default {
  id: 3,
  title: "Family",
  description: "Learn family vocabulary in Twi",
  icon: "people-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "3-1",
      type: "words",
      title: "Close Family",
      icon: "users-outline",
      description: "Learn words for close family members in Twi",
      words: ["Ɛna", "Agya", "Abofra", "Nua barima", "Nua baa"],
      vocabulary: [
        {
          id: 40,
          english: "Mother",
          native: "Ɛna",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/ɛna.m4a")
        },
        {
          id: 41,
          english: "Father",
          native: "Agya",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/agya.m4a")
        },
        {
          id: 42,
          english: "Child",
          native: "Abofra",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/abofra.m4a")
        },
        {
          id: 43,
          english: "Brother",
          native: "Nua barima",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/nua_barima.m4a")
        },
        {
          id: 44,
          english: "Sister",
          native: "Nua baa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/nua_baa.m4a")
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Mother' in Twi?",
          options: [
            { id: 1, text: "Ɛna" },
            { id: 2, text: "Agya" },
            { id: 3, text: "Abofra" },
            { id: 4, text: "Nua barima" }
          ],
          correctOptionId: 1,
          hints: ["Female parent"],
          explanation: "Ɛna = Mother in Twi."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Father' in Twi?",
          options: [
            { id: 1, text: "Ɛna" },
            { id: 2, text: "Agya" },
            { id: 3, text: "Abofra" },
            { id: 4, text: "Nua baa" }
          ],
          correctOptionId: 2,
          hints: ["Male parent"],
          explanation: "Agya = Father in Twi."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Child' in Twi?",
          options: [
            { id: 1, text: "Ɛna" },
            { id: 2, text: "Agya" },
            { id: 3, text: "Abofra" },
            { id: 4, text: "Nua barima" }
          ],
          correctOptionId: 3,
          hints: ["A young person"],
          explanation: "Abofra = Child in Twi."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Brother' in Twi?",
          options: [
            { id: 1, text: "Ɛna" },
            { id: 2, text: "Agya" },
            { id: 3, text: "Abofra" },
            { id: 4, text: "Nua barima" }
          ],
          correctOptionId: 4,
          hints: ["Male sibling"],
          explanation: "Nua barima = Brother in Twi."
        },
        {
          id: 305,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Sister' in Twi?",
          options: [
            { id: 1, text: "Nua baa" },
            { id: 2, text: "Agya" },
            { id: 3, text: "Abofra" },
            { id: 4, text: "Nua barima" }
          ],
          correctOptionId: 1,
          hints: ["Female sibling"],
          explanation: "Nua baa = Sister in Twi."
        }
      ]
    },

    {
      id: "3-2",
      type: "words",
      title: "Grandparents & Spouse",
      icon: "heart-outline",
      description: "Learn words for grandparents and spouse in Twi",
      words: ["Nana baa", "Nana barima", "Kunu", "Yere"],
      vocabulary: [
        {
          id: 45,
          english: "Grandmother",
          native: "Nana baa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/nana_baa.m4a")
        },
        {
          id: 46,
          english: "Grandfather",
          native: "Nana barima",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/nana_barima.m4a")
        },
        {
          id: 47,
          english: "Husband",
          native: "Kunu",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/kunu.m4a")
        },
        {
          id: 48,
          english: "Wife",
          native: "Yere",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/yere.m4a")
        },
        
      ],
      questions: [
        {
          id: 306,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Grandmother' in Twi?",
          options: [
            { id: 1, text: "Nana baa" },
            { id: 2, text: "Kunu" },
            { id: 3, text: "Yere" },
            { id: 4, text: "Nana barima" }
          ],
          correctOptionId: 1,
          hints: ["Female grandparent"],
          explanation: "Nana baa = Grandmother in Twi."
        },
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Husband' in Twi?",
          options: [
            { id: 1, text: "Nana baa" },
            { id: 2, text: "Kunu" },
            { id: 3, text: "Yere" },
            { id: 4, text: "Nana barima" }
          ],
          correctOptionId: 2,
          hints: ["Male spouse"],
          explanation: "Kunu = Husband in Twi."
        },
        {
          id: 308,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Wife' in Twi?",
          options: [
            { id: 1, text: "Nana baa" },
            { id: 2, text: "Kunu" },
            { id: 3, text: "Yere" },
            { id: 4, text: "Nana barima" }
          ],
          correctOptionId: 3,
          hints: ["Female spouse"],
          explanation: "Yere = Wife in Twi."
        },
        {
          id: 309,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Grandfather' in Twi?",
          options: [
            { id: 1, text: "Nana baa" },
            { id: 2, text: "Kunu" },
            { id: 3, text: "Yere" },
            { id: 4, text: "Nana barima" }
          ],
          correctOptionId: 4,
          hints: ["Male grandparent"],
          explanation: "Nana barima = Grandfather in Twi."
        }
      ]
    },

    {
      id: "3-3",
      type: "phrases",
      title: "Talking About Family",
      icon: "home-outline",
      description: "Learn how to talk about your family in Twi",
      words: ["M'abusua nie", "M'abusua no sõ", "Mewɔ mma mmienu",  "Wowɔ nuanom ahe?"],
      vocabulary: [
        {
          id: 49,
          english: "This is my family",
          native: "M'abusua nie",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/m_abusua_nie.m4a")
        },
        {
          id: 50,
          english: "My family is big",
          native: "M'abusua no sõ",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/m_abusua_no_sõ.m4a")
        },
        {
          id: 51,
          english: "I have two children",
          native: "Mewɔ mma mmienu",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/mewɔ_mma_mmienu.m4a")
        },
        {
          id: 52,
          english: "How many siblings do you have?",
          native: "Wowɔ nuanom ahe?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter3/wowɔ_nuanom_ahe.m4a")
        }
      ],
      questions: [
        {
          id: 310,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'This is my family' in Twi?",
          options: [
            { id: 1, text: "M'abusua nie" },
            { id: 2, text: "Mewɔ mma mmienu" },
            { id: 3, text: "M'abusua no sõ" },
            { id: 4, text: "Wowɔ nuanom ahe?" }
          ],
          correctOptionId: 1,
          hints: ["M'abusua = my family", "nie = this is"],
          explanation: "M'abusua nie = This is my family in Twi."
        },
        {
          id: 311,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I have two children' in Twi?",
          options: [
            { id: 1, text: "M'abusua nie" },
            { id: 2, text: "Mewɔ mma mmienu" },
            { id: 3, text: "M'abusua no sõ" },
            { id: 4, text: "Wowɔ nuanom ahe?" }
          ],
          correctOptionId: 2,
          hints: ["Mewɔ = I have", "mma mmienu = two children"],
          explanation: "Mewɔ mma mmienu = I have two children in Twi."
        },
        {
          id: 312,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'My family is big' in Twi?",
          options: [
            { id: 1, text: "M'abusua nie" },
            { id: 2, text: "Mewɔ mma mmienu" },
            { id: 3, text: "M'abusua no sõ" },
            { id: 4, text: "Wowɔ nuanom ahe?" }
          ],
          correctOptionId: 3,
          hints: ["sõ = big"],
          explanation: "M'abusua no sõ = My family is big in Twi."
        },
        {
          id: 313,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'How many siblings do you have?' in Twi?",
          options: [
            { id: 1, text: "M'abusua nie" },
            { id: 2, text: "Mewɔ mma mmienu" },
            { id: 3, text: "M'abusua no sõ" },
            { id: 4, text: "Wowɔ nuanom ahe?" }
          ],
          correctOptionId: 4,
          hints: ["nuanom = siblings", "ahe = how many"],
          explanation: "Wowɔ nuanom ahe? = How many siblings do you have? in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-3",
    title: "Review: Family",
    icon: "refresh-outline",
    description: "Review all the family vocabulary you've learned",
    questions: [
      {
        id: 601,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Mother' in Twi?",
        options: [
          { id: 1, text: "Ɛna" },
          { id: 2, text: "Agya" },
          { id: 3, text: "Abofra" },
          { id: 4, text: "Nua barima" }
        ],
        correctOptionId: 1,
        hints: ["Female parent"],
        explanation: "Ɛna = Mother."
      },
      {
        id: 602,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Father' in Twi?",
        options: [
          { id: 1, text: "Ɛna" },
          { id: 2, text: "Agya" },
          { id: 3, text: "Abofra" },
          { id: 4, text: "Nua baa" }
        ],
        correctOptionId: 2,
        hints: ["Male parent"],
        explanation: "Agya = Father."
      },
      {
        id: 603,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Brother' in Twi?",
        options: [
          { id: 1, text: "Nua baa" },
          { id: 2, text: "Agya" },
          { id: 3, text: "Nua barima" },
          { id: 4, text: "Abofra" }
        ],
        correctOptionId: 3,
        hints: ["Male sibling"],
        explanation: "Nua barima = Brother."
      },
      {
        id: 604,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Sister' in Twi?",
        options: [
          { id: 1, text: "Nua baa" },
          { id: 2, text: "Nua barima" },
          { id: 3, text: "Ɛna" },
          { id: 4, text: "Yere" }
        ],
        correctOptionId: 1,
        hints: ["Female sibling"],
        explanation: "Nua baa = Sister."
      },
      {
        id: 605,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Grandmother' in Twi?",
        options: [
          { id: 1, text: "Nana barima" },
          { id: 2, text: "Nana baa" },
          { id: 3, text: "Yere" },
          { id: 4, text: "Kunu" }
        ],
        correctOptionId: 2,
        hints: ["Female grandparent"],
        explanation: "Nana baa = Grandmother."
      },
      {
        id: 606,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Husband' in Twi?",
        options: [
          { id: 1, text: "Yere" },
          { id: 2, text: "Kunu" },
          { id: 3, text: "Nana baa" },
          { id: 4, text: "Agya" }
        ],
        correctOptionId: 2,
        hints: ["Male spouse"],
        explanation: "Kunu = Husband."
      },
      {
        id: 607,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Wife' in Twi?",
        options: [
          { id: 1, text: "Yere" },
          { id: 2, text: "Kunu" },
          { id: 3, text: "Ɛna" },
          { id: 4, text: "Nua baa" }
        ],
        correctOptionId: 1,
        hints: ["Female spouse"],
        explanation: "Yere = Wife."
      },
      {
        id: 608,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'This is my family' in Twi?",
        options: [
          { id: 1, text: "M'abusua nie" },
          { id: 2, text: "Mewɔ mma mmienu" },
          { id: 3, text: "M'abusua no sõ" },
          { id: 4, text: "Wowɔ nuanom ahe?" }
        ],
        correctOptionId: 1,
        hints: ["M'abusua = my family"],
        explanation: "M'abusua nie = This is my family."
      },
      {
        id: 609,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I have two children' in Twi?",
        options: [
          { id: 1, text: "M'abusua nie" },
          { id: 2, text: "Mewɔ mma mmienu" },
          { id: 3, text: "M'abusua no sõ" },
          { id: 4, text: "Wowɔ nuanom ahe?" }
        ],
        correctOptionId: 2,
        hints: ["Mewɔ = I have"],
        explanation: "Mewɔ mma mmienu = I have two children."
      },
      {
        id: 610,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'My family is big' in Twi?",
        options: [
          { id: 1, text: "M'abusua nie" },
          { id: 2, text: "Mewɔ mma mmienu" },
          { id: 3, text: "M'abusua no sõ" },
          { id: 4, text: "Wowɔ nuanom ahe?" }
        ],
        correctOptionId: 3,
        hints: ["sõ = big"],
        explanation: "M'abusua no sõ = My family is big."
      },
      {
        id: 611,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you ask 'How many siblings do you have?' in Twi?",
        options: [
          { id: 1, text: "M'abusua nie" },
          { id: 2, text: "Mewɔ mma mmienu" },
          { id: 3, text: "M'abusua no sõ" },
          { id: 4, text: "Wowɔ nuanom ahe?" }
        ],
        correctOptionId: 4,
        hints: ["nuanom = siblings"],
        explanation: "Wowɔ nuanom ahe? = How many siblings do you have?"
      }
    ]
  }
};