// data/course_content/twi/beginner/chapter8.js
export default {
  id: 8,
  title: "Daily Activities",
  description: "Learn to talk about your daily routine and everyday activities in Twi",
  icon: "sunny-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "8-1",
      type: "vocabulary",
      title: "Waking & Morning",
      icon: "sunny-outline",
      description: "Learn words for your morning routine in Twi",
      words: ["sɔre", "horo", "wia", "adidie", "kɔ adwuma", "kɔ sukuu", "frefre", "anipa"],
      vocabulary: [
        {
          id: 1,
          english: "To wake up",
          native: "sɔre",
          pronunciation: "soh-reh"
          // audioUrl: "/audio/twi/sore.mp3"
        },
        {
          id: 2,
          english: "To wash / bathe",
          native: "horo",
          pronunciation: "hoh-roh"
          // audioUrl: "/audio/twi/horo.mp3"
        },
        {
          id: 3,
          english: "To get ready / dress",
          native: "wia",
          pronunciation: "wee-ah"
          // audioUrl: "/audio/twi/wia.mp3"
        },
        {
          id: 4,
          english: "Breakfast / eating in the morning",
          native: "adidie",
          pronunciation: "ah-dee-dee-eh"
          // audioUrl: "/audio/twi/adidie.mp3"
        },
        {
          id: 5,
          english: "To go to work",
          native: "kɔ adwuma",
          pronunciation: "koh ah-joo-mah"
          // audioUrl: "/audio/twi/ko_adwuma.mp3"
        },
        {
          id: 6,
          english: "To go to school",
          native: "kɔ sukuu",
          pronunciation: "koh soo-koo"
          // audioUrl: "/audio/twi/ko_sukuu.mp3"
        },
        {
          id: 7,
          english: "To call / invite",
          native: "frefre",
          pronunciation: "freh-freh"
          // audioUrl: "/audio/twi/frefre.mp3"
        },
        {
          id: 8,
          english: "Person",
          native: "onipa",
          pronunciation: "oh-nee-pah"
          // audioUrl: "/audio/twi/onipa.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'To wake up' in Twi?",
          options: [
            { id: 1, text: "sɔre" },
            { id: 2, text: "horo" },
            { id: 3, text: "wia" },
            { id: 4, text: "adidie" }
          ],
          correctOptionId: 1,
          hints: ["First thing in the morning", "Starts with 's'"],
          explanation: "'sɔre' means 'To wake up' in Twi."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'To go to school' in Twi?",
          options: [
            { id: 1, text: "kɔ adwuma" },
            { id: 2, text: "kɔ sukuu" },
            { id: 3, text: "frefre" },
            { id: 4, text: "horo" }
          ],
          correctOptionId: 2,
          hints: ["sukuu = school", "kɔ = go"],
          explanation: "'kɔ sukuu' means 'To go to school'. 'sukuu' means 'school'."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'To go to work' in Twi?",
          options: [
            { id: 1, text: "kɔ adwuma" },
            { id: 2, text: "kɔ sukuu" },
            { id: 3, text: "frefre" },
            { id: 4, text: "horo" }
          ],
          correctOptionId: 1,
          hints: ["adwuma = work", "kɔ = go"],
          explanation: "'kɔ adwuma' means 'To go to work'. 'adwuma' means 'work'."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Twi word to its English meaning.",
          pairs: [
            { id: 1, left: "sɔre", right: "To wake up" },
            { id: 2, left: "horo", right: "To wash / bathe" },
            { id: 3, left: "kɔ adwuma", right: "To go to work" },
            { id: 4, left: "kɔ sukuu", right: "To go to school" }
          ],
          hints: ["sɔre = to wake up", "kɔ adwuma = go to work", "kɔ sukuu = go to school"],
          explanation: "These are key morning routine words in Twi."
        }
      ]
    },

    {
      id: "8-2",
      type: "vocabulary",
      title: "Daily Chores",
      icon: "home-outline",
      description: "Learn words for household chores and daily tasks in Twi",
      words: ["noa", "pepa", "yɛ adwuma", "dwa", "kora", "bo nsu", "tam", "di nna"],
      vocabulary: [
        {
          id: 9,
          english: "To cook",
          native: "noa",
          pronunciation: "noh-ah"
          // audioUrl: "/audio/twi/noa.mp3"
        },
        {
          id: 10,
          english: "To clean / sweep",
          native: "pepa",
          pronunciation: "peh-pah"
          // audioUrl: "/audio/twi/pepa.mp3"
        },
        {
          id: 11,
          english: "To work",
          native: "yɛ adwuma",
          pronunciation: "yeh ah-joo-mah"
          // audioUrl: "/audio/twi/ye_adwuma.mp3"
        },
        {
          id: 12,
          english: "To wash (dishes)",
          native: "dwa",
          pronunciation: "jwah"
          // audioUrl: "/audio/twi/dwa.mp3"
        },
        {
          id: 13,
          english: "To tidy / keep",
          native: "kora",
          pronunciation: "koh-rah"
          // audioUrl: "/audio/twi/kora.mp3"
        },
        {
          id: 14,
          english: "To fetch water",
          native: "bo nsu",
          pronunciation: "boh en-soo"
          // audioUrl: "/audio/twi/bo_nsu.mp3"
        },
        {
          id: 15,
          english: "To wash clothes",
          native: "tam",
          pronunciation: "tahm"
          // audioUrl: "/audio/twi/tam.mp3"
        },
        {
          id: 16,
          english: "To sleep",
          native: "di nna",
          pronunciation: "dee n-nah"
          // audioUrl: "/audio/twi/di_nna.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'To cook' in Twi?",
          options: [
            { id: 1, text: "noa" },
            { id: 2, text: "pepa" },
            { id: 3, text: "dwa" },
            { id: 4, text: "kora" }
          ],
          correctOptionId: 1,
          hints: ["Preparing food", "Starts with 'n'"],
          explanation: "'noa' means 'To cook' in Twi."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'To clean / sweep' in Twi?",
          options: [
            { id: 1, text: "noa" },
            { id: 2, text: "pepa" },
            { id: 3, text: "dwa" },
            { id: 4, text: "kora" }
          ],
          correctOptionId: 2,
          hints: ["Making things tidy", "Starts with 'p'"],
          explanation: "'pepa' means 'To clean / sweep' in Twi."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'To sleep' in Twi?",
          options: [
            { id: 1, text: "di nna" },
            { id: 2, text: "bo nsu" },
            { id: 3, text: "tam" },
            { id: 4, text: "dwa" }
          ],
          correctOptionId: 1,
          hints: ["What you do at night", "Contains 'nna'"],
          explanation: "'di nna' means 'To sleep' in Twi."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Twi word to its English meaning.",
          pairs: [
            { id: 1, left: "noa", right: "To cook" },
            { id: 2, left: "pepa", right: "To clean / sweep" },
            { id: 3, left: "dwa", right: "To wash (dishes)" },
            { id: 4, left: "di nna", right: "To sleep" }
          ],
          hints: ["noa = to cook", "pepa = to clean", "di nna = to sleep"],
          explanation: "These are common daily chore words in Twi."
        }
      ]
    },

    {
      id: "8-3",
      type: "vocabulary",
      title: "Leisure & Activities",
      icon: "game-controller-outline",
      description: "Learn words for leisure and free-time activities in Twi",
      words: ["dwen", "kenkan", "bɔɔl", "sere", "twɛn", "gye mmɔden", "kɔ", "ba"],
      vocabulary: [
        {
          id: 17,
          english: "To think / reason",
          native: "dwen",
          pronunciation: "jwen"
          // audioUrl: "/audio/twi/dwen.mp3"
        },
        {
          id: 18,
          english: "To read",
          native: "kenkan",
          pronunciation: "ken-kahn"
          // audioUrl: "/audio/twi/kenkan.mp3"
        },
        {
          id: 19,
          english: "Football / Ball",
          native: "bɔɔl",
          pronunciation: "boh-ohl"
          // audioUrl: "/audio/twi/bol.mp3"
        },
        {
          id: 20,
          english: "To laugh / smile",
          native: "sere",
          pronunciation: "seh-reh"
          // audioUrl: "/audio/twi/sere.mp3"
        },
        {
          id: 21,
          english: "To wait",
          native: "twɛn",
          pronunciation: "twen"
          // audioUrl: "/audio/twi/twen.mp3"
        },
        {
          id: 22,
          english: "To try / make an effort",
          native: "gye mmɔden",
          pronunciation: "jeh m-moh-den"
          // audioUrl: "/audio/twi/gye_mmoden.mp3"
        },
        {
          id: 23,
          english: "To go",
          native: "kɔ",
          pronunciation: "koh"
          // audioUrl: "/audio/twi/ko.mp3"
        },
        {
          id: 24,
          english: "To come",
          native: "ba",
          pronunciation: "bah"
          // audioUrl: "/audio/twi/ba.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'To read' in Twi?",
          options: [
            { id: 1, text: "kenkan" },
            { id: 2, text: "dwen" },
            { id: 3, text: "sere" },
            { id: 4, text: "twɛn" }
          ],
          correctOptionId: 1,
          hints: ["What you do with a book", "Repeated sound"],
          explanation: "'kenkan' means 'To read' in Twi."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'To come' in Twi?",
          options: [
            { id: 1, text: "kɔ" },
            { id: 2, text: "ba" },
            { id: 3, text: "twɛn" },
            { id: 4, text: "sere" }
          ],
          correctOptionId: 2,
          hints: ["Opposite of 'go'", "Starts with 'b'"],
          explanation: "'ba' means 'To come' in Twi."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Football / Ball' in Twi?",
          options: [
            { id: 1, text: "bɔɔl" },
            { id: 2, text: "kenkan" },
            { id: 3, text: "dwen" },
            { id: 4, text: "sere" }
          ],
          correctOptionId: 1,
          hints: ["Sport played with a ball", "Contains a double 'ɔ'"],
          explanation: "'bɔɔl' means 'Football / Ball' in Twi."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Twi word to its English meaning.",
          pairs: [
            { id: 1, left: "kenkan", right: "To read" },
            { id: 2, left: "bɔɔl", right: "Football / Ball" },
            { id: 3, left: "sere", right: "To laugh / smile" },
            { id: 4, left: "twɛn", right: "To wait" }
          ],
          hints: ["kenkan = to read", "bɔɔl = ball", "sere = to laugh"],
          explanation: "These are common leisure activity words in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Daily Activities",
    icon: "refresh-outline",
    description: "Review the daily routine and activity words you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'To wake up' in Twi?",
        options: [
          { id: 1, text: "sɔre" },
          { id: 2, text: "horo" },
          { id: 3, text: "wia" },
          { id: 4, text: "adidie" }
        ],
        correctOptionId: 1,
        hints: ["First thing in the morning"],
        explanation: "'sɔre' means 'To wake up' in Twi."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'To cook' in Twi?",
        options: [
          { id: 1, text: "noa" },
          { id: 2, text: "pepa" },
          { id: 3, text: "dwa" },
          { id: 4, text: "kora" }
        ],
        correctOptionId: 1,
        hints: ["Preparing food"],
        explanation: "'noa' means 'To cook' in Twi."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'To go to school' in Twi?",
        options: [
          { id: 1, text: "kɔ adwuma" },
          { id: 2, text: "kɔ sukuu" },
          { id: 3, text: "frefre" },
          { id: 4, text: "horo" }
        ],
        correctOptionId: 2,
        hints: ["sukuu = school"],
        explanation: "'kɔ sukuu' means 'To go to school'."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'To come' in Twi?",
        options: [
          { id: 1, text: "kɔ" },
          { id: 2, text: "ba" },
          { id: 3, text: "twɛn" },
          { id: 4, text: "sere" }
        ],
        correctOptionId: 2,
        hints: ["Opposite of 'go'"],
        explanation: "'ba' means 'To come' in Twi."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Twi word to its English meaning.",
        pairs: [
          { id: 1, left: "sɔre", right: "To wake up" },
          { id: 2, left: "noa", right: "To cook" },
          { id: 3, left: "kenkan", right: "To read" },
          { id: 4, left: "kɔ sukuu", right: "To go to school" },
          { id: 5, left: "di nna", right: "To sleep" }
        ],
        hints: ["sɔre = to wake up", "noa = to cook", "kenkan = to read"],
        explanation: "These are key daily activity words from this chapter."
      }
    ]
  }
};
