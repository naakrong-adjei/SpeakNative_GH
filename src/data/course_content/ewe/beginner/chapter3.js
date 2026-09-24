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
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Father' in Ewe?",
          options: [
            { id: 1, text: "Nɔviŋutsu" },
            { id: 2, text: "Fofo" },
            { id: 3, text: "Dada" },
            { id: 4, text: "Vi" }
          ],
          correctOptionId: 2,
          hints: ["Male parent"],
          explanation: "Fofo = Father in Ewe."
        },
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Mother' in Ewe?",
          options: [
            { id: 1, text: "Vi" },
            { id: 2, text: "Dada" },
            { id: 3, text: "Fofo" },
            { id: 4, text: "Nɔvinyɔnu" }
          ],
          correctOptionId: 2,
          hints: ["Female parent"],
          explanation: "Dada = Mother in Ewe."
        },
        {
          id: 305,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Sister' in Ewe?",
          options: [
            { id: 1, text: "Nɔviŋutsu" },
            { id: 2, text: "Dada" },
            { id: 3, text: "Nɔvinyɔnu" },
            { id: 4, text: "Vi" }
          ],
          correctOptionId: 3,
          hints: ["Female sibling"],
          explanation: "Nɔvinyɔnu = Sister in Ewe."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Child' in Ewe?",
          options: [
            { id: 1, text: "Fofo" },
            { id: 2, text: "Nɔvinyɔnu" },
            { id: 3, text: "Vi" },
            { id: 4, text: "Nɔviŋutsu" }
          ],
          correctOptionId: 3,
          hints: ["A young son or daughter"],
          explanation: "Vi = Child in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Brother' in Ewe?",
          options: [
            { id: 1, text: "Vi" },
            { id: 2, text: "Nɔviŋutsu" },
            { id: 3, text: "Dada" },
            { id: 4, text: "Nɔvinyɔnu" }
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
          id: 306,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Uncle (younger - father's side)' in Ewe?",
          options: [
            { id: 1, text: "Tɔgã" },
            { id: 2, text: "Enyurie" },
            { id: 3, text: "Tɔdia" },
            { id: 4, text: "Dagã" }
          ],
          correctOptionId: 3,
          hints: ["Younger uncle on father's side"],
          explanation: "Tɔdia = Uncle (younger) on your father's side."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Aunt (father's side)' in Ewe?",
          options: [
            { id: 1, text: "Dadia" },
            { id: 2, text: "Ɛte" },
            { id: 3, text: "Dagã" },
            { id: 4, text: "Enyurie" }
          ],
          correctOptionId: 2,
          hints: ["Aunt on father's side"],
          explanation: "Ɛte = Aunt on your father's side."
        },
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Aunt (older - mother's side)' in Ewe?",
          options: [
            { id: 1, text: "Dagã" },
            { id: 2, text: "Tɔdia" },
            { id: 3, text: "Ɛte" },
            { id: 4, text: "Dadia" }
          ],
          correctOptionId: 1,
          hints: ["Older aunt on mother's side"],
          explanation: "Dagã = Aunt (older) on your mother's side."
        },
        {
          id: 308,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Uncle (mother's side)' in Ewe?",
          options: [
            { id: 1, text: "Enyurie" },
            { id: 2, text: "Tɔgã" },
            { id: 3, text: "Dadia" },
            { id: 4, text: "Tɔdia" }
          ],
          correctOptionId: 1,
          hints: ["Male relative on mother's side"],
          explanation: "Enyurie = Uncle on your mother's side."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Uncle (older - father's side)' in Ewe?",
          options: [
            { id: 1, text: "Tɔdia" },
            { id: 2, text: "Ɛte" },
            { id: 3, text: "Tɔgã" },
            { id: 4, text: "Enyurie" }
          ],
          correctOptionId: 3,
          hints: ["Older uncle on father's side"],
          explanation: "Tɔgã = Uncle (older) on your father's side."
        },
        {
          id: 309,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Aunt (younger - mother's side)' in Ewe?",
          options: [
            { id: 1, text: "Dadia" },
            { id: 2, text: "Dagã" },
            { id: 3, text: "Ɛte" },
            { id: 4, text: "Tɔdia" }
          ],
          correctOptionId: 1,
          hints: ["Younger aunt on mother's side"],
          explanation: "Dadia = Aunt (younger) on your mother's side."
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
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Wife' in Ewe?",
          options: [
            { id: 1, text: "Srɔ̃nyɔnu" },
            { id: 2, text: "Mama" },
            { id: 3, text: "Tɔgbui" },
            { id: 4, text: "Srɔ̃ŋutsu" }
          ],
          correctOptionId: 1,
          hints: ["Female spouse"],
          explanation: "Srɔ̃nyɔnu = Wife in Ewe."
        },
        {
          id: 305,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Grandmother' in Ewe?",
          options: [
            { id: 1, text: "Tɔgbui" },
            { id: 2, text: "Srɔ̃ŋutsu" },
            { id: 3, text: "Mama" },
            { id: 4, text: "Srɔ̃nyɔnu" }
          ],
          correctOptionId: 3,
          hints: ["Female elder", "Mother of your parent"],
          explanation: "Mama = Grandmother in Ewe."
        },
        {
          id: 308,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Grandfather' in Ewe?",
          options: [
            { id: 1, text: "Mama" },
            { id: 2, text: "Srɔ̃nyɔnu" },
            { id: 3, text: "Tɔgbui" },
            { id: 4, text: "Srɔ̃ŋutsu" }
          ],
          correctOptionId: 3,
          hints: ["Male elder", "Father of your parent"],
          explanation: "Tɔgbui = Grandfather in Ewe."
        },
        {
          id: 306,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Husband' in Ewe?",
          options: [
            { id: 1, text: "Tɔgbui" },
            { id: 2, text: "Srɔ̃ŋutsu" },
            { id: 3, text: "Mama" },
            { id: 4, text: "Srɔ̃nyɔnu" }
          ],
          correctOptionId: 2,
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
      words: [
        "Esiae nye nye ƒomea",
        "Vi eve le asinye",
        "Nye ƒomea lolo",
        "Nɔvi nenie le asiwò?"
      ],
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
          id: 309,
          type: "multiple_choice",
          instruction: "Select the correct Ewe sentence.",
          question: "How do you say 'My family is big' in Ewe?",
          options: [
            { id: 1, text: "Vi eve le asinye" },
            { id: 2, text: "Nɔvi nenie le asiwò?" },
            { id: 3, text: "Nye ƒomea lolo" },
            { id: 4, text: "Esiae nye nye ƒomea" }
          ],
          correctOptionId: 3,
          hints: ["Describes the size of your family"],
          explanation: "Nye ƒomea lolo = My family is big."
        },
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Ewe sentence.",
          question: "How do you say 'This is my family' in Ewe?",
          options: [
            { id: 1, text: "Nye ƒomea lolo" },
            { id: 2, text: "Esiae nye nye ƒomea" },
            { id: 3, text: "Vi eve le asinye" },
            { id: 4, text: "Nɔvi nenie le asiwò?" }
          ],
          correctOptionId: 2,
          hints: ["Introducing your family"],
          explanation: "Esiae nye nye ƒomea = This is my family."
        },
        {
          id: 310,
          type: "multiple_choice",
          instruction: "Select the correct Ewe sentence.",
          question: "How do you say 'I have two children' in Ewe?",
          options: [
            { id: 1, text: "Nɔvi nenie le asiwò?" },
            { id: 2, text: "Nye ƒomea lolo" },
            { id: 3, text: "Esiae nye nye ƒomea" },
            { id: 4, text: "Vi eve le asinye" }
          ],
          correctOptionId: 4,
          hints: ["Vi = child", "eve = two"],
          explanation: "Vi eve le asinye = I have two children."
        },
        {
          id: 308,
          type: "multiple_choice",
          instruction: "Select the correct Ewe sentence.",
          question: "How do you ask 'How many siblings do you have?' in Ewe?",
          options: [
            { id: 1, text: "Vi eve le asinye" },
            { id: 2, text: "Esiae nye nye ƒomea" },
            { id: 3, text: "Nɔvi nenie le asiwò?" },
            { id: 4, text: "Nye ƒomea lolo" }
          ],
          correctOptionId: 3,
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
    description: "Review the family words and phrases you've learned",
    questions: [
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Grandmother' in Ewe?",
        options: [
          { id: 1, text: "Srɔ̃nyɔnu" },
          { id: 2, text: "Mama" },
          { id: 3, text: "Tɔgbui" },
          { id: 4, text: "Srɔ̃ŋutsu" }
        ],
        correctOptionId: 2,
        hints: ["Female elder"],
        explanation: "Mama = Grandmother."
      },
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Mother' in Ewe?",
        options: [
          { id: 1, text: "Fofo" },
          { id: 2, text: "Mama" },
          { id: 3, text: "Dada" },
          { id: 4, text: "Vi" }
        ],
        correctOptionId: 3,
        hints: ["Female parent"],
        explanation: "Dada = Mother."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Uncle (older - father's side)' in Ewe?",
        options: [
          { id: 1, text: "Enyurie" },
          { id: 2, text: "Tɔdia" },
          { id: 3, text: "Tɔgã" },
          { id: 4, text: "Ɛte" }
        ],
        correctOptionId: 3,
        hints: ["Older uncle on father's side"],
        explanation: "Tɔgã = Uncle (older) on father's side."
      },
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Sister' in Ewe?",
        options: [
          { id: 1, text: "Vi" },
          { id: 2, text: "Nɔviŋutsu" },
          { id: 3, text: "Nɔvinyɔnu" },
          { id: 4, text: "Dada" }
        ],
        correctOptionId: 3,
        hints: ["Female sibling"],
        explanation: "Nɔvinyɔnu = Sister."
      },
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Grandfather' in Ewe?",
        options: [
          { id: 1, text: "Mama" },
          { id: 2, text: "Tɔgbui" },
          { id: 3, text: "Srɔ̃ŋutsu" },
          { id: 4, text: "Srɔ̃nyɔnu" }
        ],
        correctOptionId: 2,
        hints: ["Male elder"],
        explanation: "Tɔgbui = Grandfather."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Aunt (father's side)' in Ewe?",
        options: [
          { id: 1, text: "Dadia" },
          { id: 2, text: "Ɛte" },
          { id: 3, text: "Dagã" },
          { id: 4, text: "Enyurie" }
        ],
        correctOptionId: 2,
        hints: ["Aunt on father's side"],
        explanation: "Ɛte = Aunt on father's side."
      },
      {
        id: 511,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Uncle (mother's side)' in Ewe?",
        options: [
          { id: 1, text: "Enyurie" },
          { id: 2, text: "Tɔgã" },
          { id: 3, text: "Dadia" },
          { id: 4, text: "Tɔdia" }
        ],
        correctOptionId: 1,
        hints: ["Male relative on mother's side"],
        explanation: "Enyurie = Uncle on mother's side."
      },
      {
        id: 506,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Husband' in Ewe?",
        options: [
          { id: 1, text: "Srɔ̃nyɔnu" },
          { id: 2, text: "Tɔgbui" },
          { id: 3, text: "Mama" },
          { id: 4, text: "Srɔ̃ŋutsu" }
        ],
        correctOptionId: 4,
        hints: ["Male spouse"],
        explanation: "Srɔ̃ŋutsu = Husband."
      },
      {
        id: 512,
        type: "multiple_choice",
        instruction: "Select the correct Ewe sentence.",
        question: "How do you say 'I have two children' in Ewe?",
        options: [
          { id: 1, text: "Nye ƒomea lolo" },
          { id: 2, text: "Vi eve le asinye" },
          { id: 3, text: "Esiae nye nye ƒomea" },
          { id: 4, text: "Nɔvi nenie le asiwò?" }
        ],
        correctOptionId: 2,
        hints: ["Vi = child", "eve = two"],
        explanation: "Vi eve le asinye = I have two children."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Brother' in Ewe?",
        options: [
          { id: 1, text: "Fofo" },
          { id: 2, text: "Nɔvinyɔnu" },
          { id: 3, text: "Nɔviŋutsu" },
          { id: 4, text: "Vi" }
        ],
        correctOptionId: 3,
        hints: ["Male sibling"],
        explanation: "Nɔviŋutsu = Brother."
      },
      {
        id: 513,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Aunt (younger - mother's side)' in Ewe?",
        options: [
          { id: 1, text: "Dagã" },
          { id: 2, text: "Tɔdia" },
          { id: 3, text: "Dadia" },
          { id: 4, text: "Ɛte" }
        ],
        correctOptionId: 3,
        hints: ["Younger aunt on mother's side"],
        explanation: "Dadia = Aunt (younger) on mother's side."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Ewe sentence.",
        question: "How do you say 'This is my family' in Ewe?",
        options: [
          { id: 1, text: "Nɔvi nenie le asiwò?" },
          { id: 2, text: "Esiae nye nye ƒomea" },
          { id: 3, text: "Vi eve le asinye" },
          { id: 4, text: "Nye ƒomea lolo" }
        ],
        correctOptionId: 2,
        hints: ["Introducing your family"],
        explanation: "Esiae nye nye ƒomea = This is my family."
      },
      {
        id: 514,
        type: "multiple_choice",
        instruction: "Select the correct Ewe sentence.",
        question: "How do you say 'My family is big' in Ewe?",
        options: [
          { id: 1, text: "Esiae nye nye ƒomea" },
          { id: 2, text: "Nɔvi nenie le asiwò?" },
          { id: 3, text: "Vi eve le asinye" },
          { id: 4, text: "Nye ƒomea lolo" }
        ],
        correctOptionId: 4,
        hints: ["Describes the size of your family"],
        explanation: "Nye ƒomea lolo = My family is big."
      },
      {
        id: 508,
        type: "multiple_choice",
        instruction: "Select the correct Ewe sentence.",
        question: "How do you ask 'How many siblings do you have?' in Ewe?",
        options: [
          { id: 1, text: "Vi eve le asinye" },
          { id: 2, text: "Nye ƒomea lolo" },
          { id: 3, text: "Nɔvi nenie le asiwò?" },
          { id: 4, text: "Esiae nye nye ƒomea" }
        ],
        correctOptionId: 3,
        hints: ["About siblings"],
        explanation: "Nɔvi nenie le asiwò? = How many siblings do you have?"
      }
    ]
  }
};