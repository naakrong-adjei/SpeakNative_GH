export default {
  id: 3,
  title: "Family",
  description: "Learn family members and how to talk about your family in Ga",
  icon: "people-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "3-1",
      type: "words",
      title: "Close Family",
      icon: "people-outline",
      description: "Learn the Ga words for your closest family members",
      words: ["Nyɛ", "Tsɛ", "Bi", "Nyɛmi nuu", "Nyɛmi yoo"],
      vocabulary: [
        {
          id: 30,
          english: "Mother",
          native: "Nyɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/nyɛ.m4a")
        },
        {
          id: 31,
          english: "Father",
          native: "Tsɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/tsɛ.m4a")
        },
        {
          id: 32,
          english: "Child",
          native: "Bi",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/bi.m4a")
        },
        {
          id: 33,
          english: "Brother",
          native: "Nyɛmi nuu",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/nyɛmi_nuu.m4a")
        },
        {
          id: 34,
          english: "Sister",
          native: "Nyɛmi yoo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/nyɛmi_yoo.m4a")
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Mother' in Ga?",
          options: [
            { id: 1, text: "Nyɛ" },
            { id: 2, text: "Tsɛ" },
            { id: 3, text: "Bi" },
            { id: 4, text: "Nyɛmi nuu" }
          ],
          correctOptionId: 1,
          hints: ["Female parent"],
          explanation: "Nyɛ = Mother in Ga."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Father' in Ga?",
          options: [
            { id: 1, text: "Nyɛ" },
            { id: 2, text: "Tsɛ" },
            { id: 3, text: "Bi" },
            { id: 4, text: "Nyɛmi yoo" }
          ],
          correctOptionId: 2,
          hints: ["Male parent"],
          explanation: "Tsɛ = Father in Ga."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Child' in Ga?",
          options: [
            { id: 1, text: "Nyɛ" },
            { id: 2, text: "Tsɛ" },
            { id: 3, text: "Bi" },
            { id: 4, text: "Nyɛmi nuu" }
          ],
          correctOptionId: 3,
          hints: ["Offspring"],
          explanation: "Bi = Child in Ga."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Brother' in Ga?",
          options: [
            { id: 1, text: "Nyɛ" },
            { id: 2, text: "Nyɛmi nuu" },
            { id: 3, text: "Nyɛmi yoo" },
            { id: 4, text: "Bi" }
          ],
          correctOptionId: 2,
          hints: ["Male sibling"],
          explanation: "Nyɛmi nuu = Brother in Ga. 'Nyɛmi' means sibling and 'nuu' means male."
        },
        {
          id: 305,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Sister' in Ga?",
          options: [
            { id: 1, text: "Nyɛ" },
            { id: 2, text: "Nyɛmi nuu" },
            { id: 3, text: "Nyɛmi yoo" },
            { id: 4, text: "Bi" }
          ],
          correctOptionId: 3,
          hints: ["Female sibling"],
          explanation: "Nyɛmi yoo = Sister in Ga. 'Nyɛmi' means sibling and 'yoo' means female."
        }
      ]
    },

    {
      id: "3-2",
      type: "words",
      title: "Grandparents & Extended Family",
      icon: "people-circle-outline",
      description: "Learn the Ga words for grandparents and extended family",
      words: ["Naa", "Nii", "Tsɛkwɛ", "Nyɛkwɛ", "Wu", "Ŋa"],
      vocabulary: [
        {
          id: 37,
          english: "Grandmother",
          native: "Naa",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/naa.m4a")
        },
        {
          id: 40,
          english: "Grandfather",
          native: "Nii",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/nii.m4a")
        },
        {
          id: 100,
          english: "Uncle",
          native: "Tsɛkwɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/tsɛkwɛ.m4a")
        },
        {
          id: 101,
          english: "Auntie",
          native: "Nyɛkwɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/nyɛkwɛ.m4a")
        },
        {
          id: 38,
          english: "Husband",
          native: "Wu",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/wu.m4a")
        },
        {
          id: 39,
          english: "Wife",
          native: "Ŋa",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/ŋa.m4a")
        }
      ],
      questions: [
        {
          id: 306,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Grandmother' in Ga?",
          options: [
            { id: 1, text: "Naa" },
            { id: 2, text: "Nii" },
            { id: 3, text: "Tsɛkwɛ" },
            { id: 4, text: "Nyɛkwɛ" }
          ],
          correctOptionId: 1,
          hints: ["Mother of your parent", "Female elder"],
          explanation: "Naa = Grandmother in Ga."
        },
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Grandfather' in Ga?",
          options: [
            { id: 1, text: "Naa" },
            { id: 2, text: "Nii" },
            { id: 3, text: "Tsɛkwɛ" },
            { id: 4, text: "Nyɛkwɛ" }
          ],
          correctOptionId: 2,
          hints: ["Father of your parent", "Male elder"],
          explanation: "Nii = Grandfather in Ga."
        },
        {
          id: 308,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Uncle' in Ga?",
          options: [
            { id: 1, text: "Naa" },
            { id: 2, text: "Nii" },
            { id: 3, text: "Tsɛkwɛ" },
            { id: 4, text: "Nyɛkwɛ" }
          ],
          correctOptionId: 3,
          hints: ["Male relative", "Parent's brother"],
          explanation: "Tsɛkwɛ = Uncle in Ga."
        },
        {
          id: 309,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Auntie' in Ga?",
          options: [
            { id: 1, text: "Naa" },
            { id: 2, text: "Nii" },
            { id: 3, text: "Tsɛkwɛ" },
            { id: 4, text: "Nyɛkwɛ" }
          ],
          correctOptionId: 4,
          hints: ["Female relative", "Parent's sister"],
          explanation: "Nyɛkwɛ = Auntie in Ga."
        },
        {
          id: 310,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Husband' in Ga?",
          options: [
            { id: 1, text: "Wu" },
            { id: 2, text: "Ŋa" },
            { id: 3, text: "Naa" },
            { id: 4, text: "Nii" }
          ],
          correctOptionId: 1,
          hints: ["Male spouse"],
          explanation: "Wu = Husband in Ga."
        },
        {
          id: 311,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Wife' in Ga?",
          options: [
            { id: 1, text: "Wu" },
            { id: 2, text: "Ŋa" },
            { id: 3, text: "Naa" },
            { id: 4, text: "Nii" }
          ],
          correctOptionId: 2,
          hints: ["Female spouse"],
          explanation: "Ŋa = Wife in Ga."
        }
      ]
    },

    {
      id: "3-3",
      type: "simple_sentences",
      title: "Talking About Family",
      icon: "home-outline",
      description: "Learn how to talk about your family in Ga",
      words: ["Enɛ ji miweku", "Miyɛ bii enyɔ", "Miweku lɛ da", "Nyɛmimɛi enyiɛ oyɔɔ?"],
      vocabulary: [
        {
          id: 35,
          english: "This is my family",
          native: "Enɛ ji miweku",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/enɛ_ji_miweku.m4a")
        },
        {
          id: 36,
          english: "I have two children",
          native: "Miyɛ bii enyɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/miyɛ_bii_enyɔ.m4a")
        },
        {
          id: 41,
          english: "My family is big",
          native: "Miweku lɛ da",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/miweku_lɛ_da.m4a")
        },
        {
          id: 43,
          english: "How many siblings do you have?",
          native: "Nyɛmimɛi enyiɛ oyɔɔ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter3/nyɛmimɛi_enyiɛ_oyɔɔ.m4a")
        }
      ],
      questions: [
        {
          id: 312,
          type: "multiple_choice",
          instruction: "Select the correct Ga sentence.",
          question: "How do you say 'This is my family' in Ga?",
          options: [
            { id: 1, text: "Enɛ ji miweku" },
            { id: 2, text: "Miyɛ bii enyɔ" },
            { id: 3, text: "Miweku lɛ da" },
            { id: 4, text: "Nyɛmimɛi enyiɛ oyɔɔ?" }
          ],
          correctOptionId: 1,
          hints: ["Introducing your family"],
          explanation: "Enɛ ji miweku = This is my family in Ga."
        },
        {
          id: 313,
          type: "multiple_choice",
          instruction: "Select the correct Ga sentence.",
          question: "How do you say 'I have two children' in Ga?",
          options: [
            { id: 1, text: "Enɛ ji miweku" },
            { id: 2, text: "Miyɛ bii enyɔ" },
            { id: 3, text: "Miweku lɛ da" },
            { id: 4, text: "Nyɛmimɛi enyiɛ oyɔɔ?" }
          ],
          correctOptionId: 2,
          hints: ["Two = enyɔ", "Children = bii"],
          explanation: "Miyɛ bii enyɔ = I have two children in Ga."
        },
        {
          id: 314,
          type: "multiple_choice",
          instruction: "Select the correct Ga sentence.",
          question: "How do you say 'My family is big' in Ga?",
          options: [
            { id: 1, text: "Enɛ ji miweku" },
            { id: 2, text: "Miyɛ bii enyɔ" },
            { id: 3, text: "Miweku lɛ da" },
            { id: 4, text: "Nyɛmimɛi enyiɛ oyɔɔ?" }
          ],
          correctOptionId: 3,
          hints: ["Big = da"],
          explanation: "Miweku lɛ da = My family is big in Ga."
        },
        {
          id: 315,
          type: "multiple_choice",
          instruction: "Select the correct Ga sentence.",
          question: "How do you ask 'How many siblings do you have?' in Ga?",
          options: [
            { id: 1, text: "Enɛ ji miweku" },
            { id: 2, text: "Miyɛ bii enyɔ" },
            { id: 3, text: "Miweku lɛ da" },
            { id: 4, text: "Nyɛmimɛi enyiɛ oyɔɔ?" }
          ],
          correctOptionId: 4,
          hints: ["About siblings", "Question"],
          explanation: "Nyɛmimɛi enyiɛ oyɔɔ? = How many siblings do you have? in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-3",
    title: "Review: Family",
    icon: "refresh-outline",
    description: "Review all the family vocabulary and phrases you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Mother' in Ga?",
        options: [
          { id: 1, text: "Nyɛ" },
          { id: 2, text: "Tsɛ" },
          { id: 3, text: "Bi" },
          { id: 4, text: "Naa" }
        ],
        correctOptionId: 1,
        hints: ["Female parent"],
        explanation: "Nyɛ = Mother."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Brother' in Ga?",
        options: [
          { id: 1, text: "Nyɛmi yoo" },
          { id: 2, text: "Nyɛmi nuu" },
          { id: 3, text: "Bi" },
          { id: 4, text: "Tsɛ" }
        ],
        correctOptionId: 2,
        hints: ["Male sibling"],
        explanation: "Nyɛmi nuu = Brother."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Grandfather' in Ga?",
        options: [
          { id: 1, text: "Naa" },
          { id: 2, text: "Nii" },
          { id: 3, text: "Tsɛkwɛ" },
          { id: 4, text: "Nyɛkwɛ" }
        ],
        correctOptionId: 2,
        hints: ["Male elder"],
        explanation: "Nii = Grandfather."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Uncle' in Ga?",
        options: [
          { id: 1, text: "Naa" },
          { id: 2, text: "Nii" },
          { id: 3, text: "Tsɛkwɛ" },
          { id: 4, text: "Nyɛkwɛ" }
        ],
        correctOptionId: 3,
        hints: ["Parent's brother"],
        explanation: "Tsɛkwɛ = Uncle."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Auntie' in Ga?",
        options: [
          { id: 1, text: "Naa" },
          { id: 2, text: "Nii" },
          { id: 3, text: "Tsɛkwɛ" },
          { id: 4, text: "Nyɛkwɛ" }
        ],
        correctOptionId: 4,
        hints: ["Parent's sister"],
        explanation: "Nyɛkwɛ = Auntie."
      },
      {
        id: 506,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Husband' in Ga?",
        options: [
          { id: 1, text: "Wu" },
          { id: 2, text: "Ŋa" },
          { id: 3, text: "Naa" },
          { id: 4, text: "Nii" }
        ],
        correctOptionId: 1,
        hints: ["Male spouse"],
        explanation: "Wu = Husband."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Wife' in Ga?",
        options: [
          { id: 1, text: "Wu" },
          { id: 2, text: "Ŋa" },
          { id: 3, text: "Naa" },
          { id: 4, text: "Nii" }
        ],
        correctOptionId: 2,
        hints: ["Female spouse"],
        explanation: "Ŋa = Wife."
      },
      {
        id: 508,
        type: "multiple_choice",
        instruction: "Select the correct Ga sentence.",
        question: "How do you say 'This is my family' in Ga?",
        options: [
          { id: 1, text: "Enɛ ji miweku" },
          { id: 2, text: "Miyɛ bii enyɔ" },
          { id: 3, text: "Miweku lɛ da" },
          { id: 4, text: "Nyɛmimɛi enyiɛ oyɔɔ?" }
        ],
        correctOptionId: 1,
        hints: ["Introducing your family"],
        explanation: "Enɛ ji miweku = This is my family."
      },
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Ga sentence.",
        question: "How do you ask 'How many siblings do you have?' in Ga?",
        options: [
          { id: 1, text: "Enɛ ji miweku" },
          { id: 2, text: "Miyɛ bii enyɔ" },
          { id: 3, text: "Miweku lɛ da" },
          { id: 4, text: "Nyɛmimɛi enyiɛ oyɔɔ?" }
        ],
        correctOptionId: 4,
        hints: ["About siblings"],
        explanation: "Nyɛmimɛi enyiɛ oyɔɔ? = How many siblings do you have?"
      },
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Ga sentence.",
        question: "How do you say 'My family is big' in Ga?",
        options: [
          { id: 1, text: "Enɛ ji miweku" },
          { id: 2, text: "Miyɛ bii enyɔ" },
          { id: 3, text: "Miweku lɛ da" },
          { id: 4, text: "Nyɛmimɛi enyiɛ oyɔɔ?" }
        ],
        correctOptionId: 3,
        hints: ["da = big"],
        explanation: "Miweku lɛ da = My family is big."
      }
    ]
  }
};