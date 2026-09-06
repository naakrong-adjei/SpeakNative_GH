export default {
  id: 3,
  title: "Family",
  description: "Learn family members and how to talk about your family in Ewe",
  icon: "people-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "3-1",
      type: "words",
      title: "Close Family",
      icon: "people-outline",
      description: "Learn the Ewe words for your closest family members",
      words: ["Dada", "Fofo", "Vi", "Nɔviŋutsu", "Nɔvinyɔnu"],
      vocabulary: [
        {
          id: 30,
          english: "Mother",
          native: "Dada",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/dada.m4a")
        },
        {
          id: 31,
          english: "Father",
          native: "Fofo",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/fofo.m4a")
        },
        {
          id: 32,
          english: "Child",
          native: "Vi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/vi.m4a")
        },
        {
          id: 33,
          english: "Brother",
          native: "Nɔviŋutsu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/nɔviŋutsu.m4a")
        },
        {
          id: 34,
          english: "Sister",
          native: "Nɔvinyɔnu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/nɔvinyɔnu.m4a")
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Mother' in Ewe?",
          options: [
            { id: 1, text: "Dada" },
            { id: 2, text: "Fofo" },
            { id: 3, text: "Vi" },
            { id: 4, text: "Nɔviŋutsu" }
          ],
          correctOptionId: 1,
          hints: ["Female parent"],
          explanation: "Dada = Mother in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Brother' in Ewe?",
          options: [
            { id: 1, text: "Dada" },
            { id: 2, text: "Nɔviŋutsu" },
            { id: 3, text: "Nɔvinyɔnu" },
            { id: 4, text: "Vi" }
          ],
          correctOptionId: 2,
          hints: ["Male sibling"],
          explanation: "Nɔviŋutsu = Brother in Ewe."
        }
      ]
    },

    {
      id: "3-2",
      type: "words",
      title: "Aunties & Uncles",
      icon: "people-circle-outline",
      description: "Learn the specific Ewe terms for aunties and uncles on both sides of the family",
      words: ["Tɔgã", "Tɔdia", "Ɛte", "Dagã", "Dadia", "Enyurie"],
      vocabulary: [
        {
          id: 35,
          english: "Uncle (older - father's side)",
          native: "Tɔgã",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/tɔga.m4a")
        },
        {
          id: 36,
          english: "Uncle (younger - father's side)",
          native: "Tɔdia",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/tɔdia.m4a")
        },
        {
          id: 37,
          english: "Aunt (father's side)",
          native: "Ɛte",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/ɛte.m4a")
        },
        {
          id: 38,
          english: "Aunt (older - mother's side)",
          native: "Dagã",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/daga.m4a")
        },
        {
          id: 39,
          english: "Aunt (younger - mother's side)",
          native: "Dadia",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/dadia.m4a")
        },
        {
          id: 40,
          english: "Uncle (mother's side)",
          native: "Enyurie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/enyurie.m4a")
        }
      ],
      questions: [
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Uncle (older - father's side)' in Ewe?",
          options: [
            { id: 1, text: "Tɔgã" },
            { id: 2, text: "Tɔdia" },
            { id: 3, text: "Ɛte" },
            { id: 4, text: "Enyurie" }
          ],
          correctOptionId: 1,
          hints: ["Older uncle on father's side"],
          explanation: "Tɔgã = Uncle (older) on your father's side."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Aunt (father's side)' in Ewe?",
          options: [
            { id: 1, text: "Dagã" },
            { id: 2, text: "Dadia" },
            { id: 3, text: "Ɛte" },
            { id: 4, text: "Enyurie" }
          ],
          correctOptionId: 3,
          hints: ["Aunt on father's side"],
          explanation: "Ɛte = Aunt on your father's side."
        }
      ]
    },

    {
      id: "3-3",
      type: "words",
      title: "Grandparents & Spouse",
      icon: "heart-outline",
      description: "Learn Ewe words for grandparents and spouse",
      words: ["Mama", "Tɔgbui", "Srɔ̃ŋutsu", "Srɔ̃nyɔnu"],
      vocabulary: [
        {
          id: 41,
          english: "Grandmother",
          native: "Mama",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/mama.m4a")
        },
        {
          id: 42,
          english: "Grandfather",
          native: "Tɔgbui",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/tɔgbui.m4a")
        },
        {
          id: 43,
          english: "Husband",
          native: "Srɔ̃ŋutsu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/srɔ̃ŋutsu.m4a")
        },
        {
          id: 44,
          english: "Wife",
          native: "Srɔ̃nyɔnu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/srɔ̃nyɔnu.m4a")    
        }
      ],
      questions: [
        {
          id: 305,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Grandmother' in Ewe?",
          options: [
            { id: 1, text: "Mama" },
            { id: 2, text: "Tɔgbui" },
            { id: 3, text: "Srɔ̃ŋutsu" },
            { id: 4, text: "Srɔ̃nyɔnu" }
          ],
          correctOptionId: 1,
          hints: ["Mother of your parent", "Female elder"],
          explanation: "Mama = Grandmother in Ewe."
        },
        {
          id: 306,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Husband' in Ewe?",
          options: [
            { id: 1, text: "Mama" },
            { id: 2, text: "Tɔgbui" },
            { id: 3, text: "Srɔ̃ŋutsu" },
            { id: 4, text: "Srɔ̃nyɔnu" }
          ],
          correctOptionId: 3,
          hints: ["Male spouse"],
          explanation: "Srɔ̃ŋutsu = Husband in Ewe."
        }
      ]
    },

    {
      id: "3-4",
      type: "simple_sentences",
      title: "Talking About Family",
      icon: "home-outline",
      description: "Learn how to talk about your family in Ewe",
      words: ["Esiae nye nye ƒomea", "Vi eve le asinye", "Nye ƒomea lolo", "Nɔvi nenie le asiwò?"],
      vocabulary: [
        {
          id: 45,
          english: "This is my family",
          native: "Esiae nye nye ƒomea",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/esiae_nye_nye_fomea.m4a")
        },
        {
          id: 46,
          english: "I have two children",
          native: "Vi eve le asinye",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/vi_eve_le_asinye.m4a")
        },
        {
          id: 47,
          english: "My family is big",
          native: "Nye ƒomea lolo",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/nye_fomea_lolo.m4a")
        },
        {
          id: 48,
          english: "How many siblings do you have?",
          native: "Nɔvi nenie le asiwò?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter3/nɔvi_nenie_le_asiwo.m4a")
        }
      ],
      questions: [
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Ewe sentence.",
          question: "How do you say 'This is my family' in Ewe?",
          options: [
            { id: 1, text: "Esiae nye nye ƒomea" },
            { id: 2, text: "Vi eve le asinye" },
            { id: 3, text: "Nye ƒomea lolo" },
            { id: 4, text: "Nɔvi nenie le asiwò?" }
          ],
          correctOptionId: 1,
          hints: ["Introducing your family"],
          explanation: "Esiae nye nye ƒomea = This is my family."
        },
        {
          id: 308,
          type: "multiple_choice",
          instruction: "Select the correct Ewe sentence.",
          question: "How do you ask 'How many siblings do you have?' in Ewe?",
          options: [
            { id: 1, text: "Esiae nye nye ƒomea" },
            { id: 2, text: "Vi eve le asinye" },
            { id: 3, text: "Nye ƒomea lolo" },
            { id: 4, text: "Nɔvi nenie le asiwò?" }
          ],
          correctOptionId: 4,
          hints: ["About siblings", "Question"],
          explanation: "Nɔvi nenie le asiwò? = How many siblings do you have?"
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
        instruction: "Select the correct Ewe word.",
        question: "What is 'Mother' in Ewe?",
        options: [
          { id: 1, text: "Dada" },
          { id: 2, text: "Fofo" },
          { id: 3, text: "Vi" },
          { id: 4, text: "Mama" }
        ],
        correctOptionId: 1,
        hints: ["Female parent"],
        explanation: "Dada = Mother."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Brother' in Ewe?",
        options: [
          { id: 1, text: "Nɔvinyɔnu" },
          { id: 2, text: "Nɔviŋutsu" },
          { id: 3, text: "Vi" },
          { id: 4, text: "Fofo" }
        ],
        correctOptionId: 2,
        hints: ["Male sibling"],
        explanation: "Nɔviŋutsu = Brother."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Uncle (older - father's side)' in Ewe?",
        options: [
          { id: 1, text: "Tɔdia" },
          { id: 2, text: "Tɔgã" },
          { id: 3, text: "Enyurie" },
          { id: 4, text: "Ɛte" }
        ],
        correctOptionId: 2,
        hints: ["Older uncle on father's side"],
        explanation: "Tɔgã = Uncle (older) on father's side."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Aunt (father's side)' in Ewe?",
        options: [
          { id: 1, text: "Dagã" },
          { id: 2, text: "Dadia" },
          { id: 3, text: "Ɛte" },
          { id: 4, text: "Enyurie" }
        ],
        correctOptionId: 3,
        hints: ["Aunt on father's side"],
        explanation: "Ɛte = Aunt on father's side."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Grandmother' in Ewe?",
        options: [
          { id: 1, text: "Mama" },
          { id: 2, text: "Tɔgbui" },
          { id: 3, text: "Srɔ̃ŋutsu" },
          { id: 4, text: "Srɔ̃nyɔnu" }
        ],
        correctOptionId: 1,
        hints: ["Female elder"],
        explanation: "Mama = Grandmother."
      },
      {
        id: 506,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Husband' in Ewe?",
        options: [
          { id: 1, text: "Mama" },
          { id: 2, text: "Tɔgbui" },
          { id: 3, text: "Srɔ̃ŋutsu" },
          { id: 4, text: "Srɔ̃nyɔnu" }
        ],
        correctOptionId: 3,
        hints: ["Male spouse"],
        explanation: "Srɔ̃ŋutsu = Husband."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Ewe sentence.",
        question: "How do you say 'This is my family' in Ewe?",
        options: [
          { id: 1, text: "Esiae nye nye ƒomea" },
          { id: 2, text: "Vi eve le asinye" },
          { id: 3, text: "Nye ƒomea lolo" },
          { id: 4, text: "Nɔvi nenie le asiwò?" }
        ],
        correctOptionId: 1,
        hints: ["Introducing your family"],
        explanation: "Esiae nye nye ƒomea = This is my family."
      },
      {
        id: 508,
        type: "multiple_choice",
        instruction: "Select the correct Ewe sentence.",
        question: "How do you ask 'How many siblings do you have?' in Ewe?",
        options: [
          { id: 1, text: "Esiae nye nye ƒomea" },
          { id: 2, text: "Vi eve le asinye" },
          { id: 3, text: "Nye ƒomea lolo" },
          { id: 4, text: "Nɔvi nenie le asiwò?" }
        ],
        correctOptionId: 4,
        hints: ["About siblings"],
        explanation: "Nɔvi nenie le asiwò? = How many siblings do you have?"
      }
    ]
  }
};