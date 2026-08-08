export default {
  id: 3,
  title: "Family & Everyday Life",
  description: "Learn words and phrases to talk about your family and daily routines in Ewe",
  icon: "people-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "3-1",
      type: "words",
      title: "Family Members",
      icon: "people-outline",
      description: "Learn to name core family members in Ewe",
      words: ["Ɖɔme", "Dada", "Tɔgbuie", "Fofɔ", "Nɔvinyɔnu", "Nɔviŋutsu", "Vi"],
      vocabulary: [
        {
          id: 1,
          english: "Family",
          native: "Ɖɔme",
          pronunciation: "doh-meh"
          // audioUrl: "/audio/ewe/ɖɔme.mp3"
        },
        {
          id: 2,
          english: "Mother",
          native: "Dada",
          pronunciation: "dah-dah"
          // audioUrl: "/audio/ewe/dada.mp3"
        },
        {
          id: 3,
          english: "Father",
          native: "Fofɔ",
          pronunciation: "foh-foh"
          // audioUrl: "/audio/ewe/fofɔ.mp3"
        },
        {
          id: 4,
          english: "Brother",
          native: "Nɔviŋutsu",
          pronunciation: "noh-vee-ngoo-tsu"
          // audioUrl: "/audio/ewe/nɔviŋutsu.mp3"
        },
        {
          id: 5,
          english: "Sister",
          native: "Nɔvinyɔnu",
          pronunciation: "noh-vee-nyoh-nu"
          // audioUrl: "/audio/ewe/nɔvinyɔnu.mp3"
        },
        {
          id: 6,
          english: "Child",
          native: "Vi",
          pronunciation: "vee"
          // audioUrl: "/audio/ewe/vi.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Mother'.",
          question: "How do you say 'Mother' in Ewe?",
          options: [
            { id: 1, text: "Dada" },
            { id: 2, text: "Fofɔ" },
            { id: 3, text: "Vi" },
            { id: 4, text: "Nɔvi" }
          ],
          correctOptionId: 1,
          hints: ["Female parent"],
          explanation: "'Dada' means 'Mother' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Father'.",
          question: "How do you say 'Father' in Ewe?",
          options: [
            { id: 1, text: "Dada" },
            { id: 2, text: "Fofɔ" },
            { id: 3, text: "Vi" },
            { id: 4, text: "Nɔvi" }
          ],
          correctOptionId: 2,
          hints: ["Male parent"],
          explanation: "'Fofɔ' means 'Father' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Child'.",
          question: "How do you say 'Child' in Ewe?",
          options: [
            { id: 1, text: "Dada" },
            { id: 2, text: "Fofɔ" },
            { id: 3, text: "Vi" },
            { id: 4, text: "Nɔvi" }
          ],
          correctOptionId: 3,
          hints: ["A young person"],
          explanation: "'Vi' means 'Child' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Ɖɔme", right: "Family" },
            { id: 2, left: "Dada", right: "Mother" },
            { id: 3, left: "Fofɔ", right: "Father" },
            { id: 4, left: "Vi", right: "Child" }
          ],
          hints: ["Ɖɔme = family", "Dada = mother", "Fofɔ = father"],
          explanation: "These are key family terms in Ewe."
        }
      ]
    },

    {
      id: "3-2",
      type: "phrases",
      title: "Extended Family",
      icon: "people-outline",
      description: "Learn to name grandparents, uncle, and aunt in Ewe",
      words: ["Tɔgbuie", "Mamaga", "Tɔɖe", "Nɔgbe"],
      vocabulary: [
        {
          id: 7,
          english: "Grandmother",
          native: "Mamaga",
          pronunciation: "mah-mah-gah"
          // audioUrl: "/audio/ewe/mamaga.mp3"
        },
        {
          id: 8,
          english: "Grandfather",
          native: "Tɔgbuie",
          pronunciation: "toh-gboo-ee-eh"
          // audioUrl: "/audio/ewe/tɔgbuie.mp3"
        },
        {
          id: 9,
          english: "Uncle",
          native: "Tɔɖe",
          pronunciation: "toh-deh"
          // audioUrl: "/audio/ewe/tɔɖe.mp3"
        },
        {
          id: 10,
          english: "Aunt",
          native: "Nɔgbe",
          pronunciation: "noh-gbeh"
          // audioUrl: "/audio/ewe/nɔgbe.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Grandmother'.",
          question: "How do you say 'Grandmother' in Ewe?",
          options: [
            { id: 1, text: "Mamaga" },
            { id: 2, text: "Tɔgbuie" },
            { id: 3, text: "Tɔɖe" },
            { id: 4, text: "Nɔgbe" }
          ],
          correctOptionId: 1,
          hints: ["Female grandparent"],
          explanation: "'Mamaga' means 'Grandmother' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Grandfather'.",
          question: "How do you say 'Grandfather' in Ewe?",
          options: [
            { id: 1, text: "Mamaga" },
            { id: 2, text: "Tɔgbuie" },
            { id: 3, text: "Tɔɖe" },
            { id: 4, text: "Nɔgbe" }
          ],
          correctOptionId: 2,
          hints: ["Male grandparent"],
          explanation: "'Tɔgbuie' means 'Grandfather' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Uncle'.",
          question: "How do you say 'Uncle' in Ewe?",
          options: [
            { id: 1, text: "Mamaga" },
            { id: 2, text: "Tɔgbuie" },
            { id: 3, text: "Tɔɖe" },
            { id: 4, text: "Nɔgbe" }
          ],
          correctOptionId: 3,
          hints: ["Male relative"],
          explanation: "'Tɔɖe' means 'Uncle' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Mamaga", right: "Grandmother" },
            { id: 2, left: "Tɔgbuie", right: "Grandfather" },
            { id: 3, left: "Tɔɖe", right: "Uncle" },
            { id: 4, left: "Nɔgbe", right: "Aunt" }
          ],
          hints: ["Mamaga = grandmother", "Tɔgbuie = grandfather"],
          explanation: "These are extended family terms in Ewe."
        }
      ]
    },

    {
      id: "3-3",
      type: "simple_sentences",
      title: "Everyday Life",
      icon: "home-outline",
      description: "Learn everyday words like home, food, water, and work",
      words: ["Aƒe", "Nuɖuɖu", "Tsi", "Dɔwɔwɔ"],
      vocabulary: [
        {
          id: 11,
          english: "Home",
          native: "Aƒe",
          pronunciation: "ah-feh"
          // audioUrl: "/audio/ewe/aƒe.mp3"
        },
        {
          id: 12,
          english: "Food",
          native: "Nuɖuɖu",
          pronunciation: "nu-du-du"
          // audioUrl: "/audio/ewe/nuɖuɖu.mp3"
        },
        {
          id: 13,
          english: "Water",
          native: "Tsi",
          pronunciation: "chee"
          // audioUrl: "/audio/ewe/tsi.mp3"
        },
        {
          id: 14,
          english: "Work",
          native: "Dɔwɔwɔ",
          pronunciation: "doh-woh-woh"
          // audioUrl: "/audio/ewe/dɔwɔwɔ.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Home'.",
          question: "How do you say 'Home' in Ewe?",
          options: [
            { id: 1, text: "Aƒe" },
            { id: 2, text: "Nuɖuɖu" },
            { id: 3, text: "Tsi" },
            { id: 4, text: "Dɔwɔwɔ" }
          ],
          correctOptionId: 1,
          hints: ["Where you live"],
          explanation: "'Aƒe' means 'Home' in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Food'.",
          question: "How do you say 'Food' in Ewe?",
          options: [
            { id: 1, text: "Aƒe" },
            { id: 2, text: "Nuɖuɖu" },
            { id: 3, text: "Tsi" },
            { id: 4, text: "Dɔwɔwɔ" }
          ],
          correctOptionId: 2,
          hints: ["What you eat"],
          explanation: "'Nuɖuɖu' means 'Food' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Water'.",
          question: "How do you say 'Water' in Ewe?",
          options: [
            { id: 1, text: "Aƒe" },
            { id: 2, text: "Nuɖuɖu" },
            { id: 3, text: "Tsi" },
            { id: 4, text: "Dɔwɔwɔ" }
          ],
          correctOptionId: 3,
          hints: ["You drink it"],
          explanation: "'Tsi' means 'Water' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Aƒe", right: "Home" },
            { id: 2, left: "Nuɖuɖu", right: "Food" },
            { id: 3, left: "Tsi", right: "Water" },
            { id: 4, left: "Dɔwɔwɔ", right: "Work" }
          ],
          hints: ["Aƒe = home", "Nuɖuɖu = food", "Tsi = water"],
          explanation: "These are common everyday words in Ewe."
        }
      ]
    },

    {
      id: "3-4",
      type: "basic_conversations",
      title: "Family & Life Review",
      icon: "refresh-outline",
      description: "Review the family and everyday life vocabulary",
      words: ["Ɖɔme", "Nɔvinyɔnu", "Nɔviŋutsu", "Aƒe", "Dɔwɔwɔ"],
      vocabulary: [
        {
          id: 15,
          english: "Family",
          native: "Ɖɔme",
          pronunciation: "doh-meh"
          // audioUrl: "/audio/ewe/ɖɔme.mp3"
        },
        {
          id: 16,
          english: "Sister",
          native: "Nɔvinyɔnu",
          pronunciation: "noh-vee-nyoh-nu"
          // audioUrl: "/audio/ewe/nɔvinyɔnu.mp3"
        },
        {
          id: 17,
          english: "Brother",
          native: "Nɔviŋutsu",
          pronunciation: "noh-vee-ngoo-tsu"
          // audioUrl: "/audio/ewe/nɔviŋutsu.mp3"
        },
        {
          id: 18,
          english: "Home",
          native: "Aƒe",
          pronunciation: "ah-feh"
          // audioUrl: "/audio/ewe/aƒe.mp3"
        },
        {
          id: 19,
          english: "Work",
          native: "Dɔwɔwɔ",
          pronunciation: "doh-woh-woh"
          // audioUrl: "/audio/ewe/dɔwɔwɔ.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Family'.",
          question: "How do you say 'Family' in Ewe?",
          options: [
            { id: 1, text: "Ɖɔme" },
            { id: 2, text: "Dada" },
            { id: 3, text: "Fofɔ" },
            { id: 4, text: "Vi" }
          ],
          correctOptionId: 1,
          hints: ["Whole group of relatives"],
          explanation: "'Ɖɔme' means 'Family' in Ewe."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word for 'Work'.",
          question: "How do you say 'Work' in Ewe?",
          options: [
            { id: 1, text: "Tsi" },
            { id: 2, text: "Nuɖuɖu" },
            { id: 3, text: "Dɔwɔwɔ" },
            { id: 4, text: "Aƒe" }
          ],
          correctOptionId: 3,
          hints: ["What you do for a job"],
          explanation: "'Dɔwɔwɔ' means 'Work' in Ewe."
        },
        {
          id: 403,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Nɔviŋutsu", right: "Brother" },
            { id: 2, left: "Nɔvinyɔnu", right: "Sister" },
            { id: 3, left: "Tsi", right: "Water" },
            { id: 4, left: "Dɔwɔwɔ", right: "Work" }
          ],
          hints: ["Nɔvi = sibling", "Tsi = water", "Dɔwɔwɔ = work"],
          explanation: "These are useful family and everyday words in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-3",
    title: "Review: Family & Everyday Life",
    icon: "refresh-outline",
    description: "Review the family and everyday life vocabulary you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Mother' in Ewe?",
        options: [
          { id: 1, text: "Dada" },
          { id: 2, text: "Fofɔ" },
          { id: 3, text: "Vi" },
          { id: 4, text: "Nɔvi" }
        ],
        correctOptionId: 1,
        hints: ["Female parent"],
        explanation: "Dada = Mother."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Father' in Ewe?",
        options: [
          { id: 1, text: "Dada" },
          { id: 2, text: "Fofɔ" },
          { id: 3, text: "Vi" },
          { id: 4, text: "Nɔvi" }
        ],
        correctOptionId: 2,
        hints: ["Male parent"],
        explanation: "Fofɔ = Father."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Family' in Ewe?",
        options: [
          { id: 1, text: "Ɖɔme" },
          { id: 2, text: "Dada" },
          { id: 3, text: "Fofɔ" },
          { id: 4, text: "Vi" }
        ],
        correctOptionId: 1,
        hints: ["Whole group of relatives"],
        explanation: "Ɖɔme = Family."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Water' in Ewe?",
        options: [
          { id: 1, text: "Aƒe" },
          { id: 2, text: "Nuɖuɖu" },
          { id: 3, text: "Tsi" },
          { id: 4, text: "Dɔwɔwɔ" }
        ],
        correctOptionId: 3,
        hints: ["You drink it"],
        explanation: "Tsi = Water."
      },
      {
        id: 505,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Dada", right: "Mother" },
          { id: 2, left: "Fofɔ", right: "Father" },
          { id: 3, left: "Nɔviŋutsu", right: "Brother" },
          { id: 4, left: "Nɔvinyɔnu", right: "Sister" },
          { id: 5, left: "Vi", right: "Child" },
          { id: 6, left: "Aƒe", right: "Home" }
        ],
        hints: ["Dada = mother", "Fofɔ = father", "Nɔvi = sibling"],
        explanation: "These are key family words from this chapter."
      }
    ]
  }
};
