// data/course_content/ga/beginner/chapter4.js
export default {
  id: 4,
  title: "Numbers & Time",
  description: "Learn to count and tell time in Ga",
  icon: "time-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "4-1",
      type: "words",
      title: "Numbers 1-10",
      icon: "keypad-outline",
      description: "Learn to count from one to ten in Ga",
      words: ["Eko", "Enyɔ", "Etɛ", "Ejwɛ", "Enumɔ", "Ekpaa", "Kpawo", "Kpaanyɔ", "Nɛɛhu", "Nyɔŋma"],
      vocabulary: [
        {
          id: 1,
          english: "One",
          native: "Eko",
          pronunciation: "eh-koh"
          // audioUrl: "/audio/ga/eko.mp3"
        },
        {
          id: 2,
          english: "Two",
          native: "Enyɔ",
          pronunciation: "eh-nyoh"
          // audioUrl: "/audio/ga/enyɔ.mp3"
        },
        {
          id: 3,
          english: "Three",
          native: "Etɛ",
          pronunciation: "eh-teh"
          // audioUrl: "/audio/ga/etɛ.mp3"
        },
        {
          id: 4,
          english: "Four",
          native: "Ejwɛ",
          pronunciation: "eh-jweh"
          // audioUrl: "/audio/ga/ejwɛ.mp3"
        },
        {
          id: 5,
          english: "Five",
          native: "Enumɔ",
          pronunciation: "eh-noo-moh"
          // audioUrl: "/audio/ga/enumɔ.mp3"
        },
        {
          id: 6,
          english: "Six",
          native: "Ekpaa",
          pronunciation: "eh-kpah"
          // audioUrl: "/audio/ga/ekpaa.mp3"
        },
        {
          id: 7,
          english: "Seven",
          native: "Kpawo",
          pronunciation: "kpah-woh"
          // audioUrl: "/audio/ga/kpawo.mp3"
        },
        {
          id: 8,
          english: "Eight",
          native: "Kpaanyɔ",
          pronunciation: "kpah-ah-nyoh"
          // audioUrl: "/audio/ga/kpaanyɔ.mp3"
        },
        {
          id: 9,
          english: "Nine",
          native: "Nɛɛhu",
          pronunciation: "neh-eh-hoo"
          // audioUrl: "/audio/ga/nɛɛhu.mp3"
        },
        {
          id: 10,
          english: "Ten",
          native: "Nyɔŋma",
          pronunciation: "nyong-mah"
          // audioUrl: "/audio/ga/nyɔŋma.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 'One' in Ga?",
          options: [
            { id: 1, text: "Eko" },
            { id: 2, text: "Enyɔ" },
            { id: 3, text: "Etɛ" },
            { id: 4, text: "Ejwɛ" }
          ],
          correctOptionId: 1,
          hints: ["The first number", "Starts with 'E'"],
          explanation: "'Eko' means 'One' in Ga."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 'Two' in Ga?",
          options: [
            { id: 1, text: "Eko" },
            { id: 2, text: "Enyɔ" },
            { id: 3, text: "Etɛ" },
            { id: 4, text: "Ejwɛ" }
          ],
          correctOptionId: 2,
          hints: ["Comes after one"],
          explanation: "'Enyɔ' means 'Two' in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 'Five' in Ga?",
          options: [
            { id: 1, text: "Ejwɛ" },
            { id: 2, text: "Enumɔ" },
            { id: 3, text: "Ekpaa" },
            { id: 4, text: "Kpawo" }
          ],
          correctOptionId: 2,
          hints: ["Half of ten"],
          explanation: "'Enumɔ' means 'Five' in Ga."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 'Ten' in Ga?",
          options: [
            { id: 1, text: "Nɛɛhu" },
            { id: 2, text: "Kpaanyɔ" },
            { id: 3, text: "Nyɔŋma" },
            { id: 4, text: "Kpawo" }
          ],
          correctOptionId: 3,
          hints: ["The last number in this group", "Base for counting"],
          explanation: "'Nyɔŋma' means 'Ten' in Ga."
        },
        {
          id: 105,
          type: "matching",
          instruction: "Match each Ga number to its English value.",
          pairs: [
            { id: 1, left: "Eko", right: "One" },
            { id: 2, left: "Enyɔ", right: "Two" },
            { id: 3, left: "Etɛ", right: "Three" },
            { id: 4, left: "Ejwɛ", right: "Four" },
            { id: 5, left: "Enumɔ", right: "Five" }
          ],
          hints: ["Eko = one", "Enyɔ = two", "Etɛ = three"],
          explanation: "These are the first five numbers in Ga."
        }
      ]
    },

    {
      id: "4-2",
      type: "phrases",
      title: "Numbers 10-100",
      icon: "keypad-outline",
      description: "Learn to count in tens up to one hundred in Ga",
      words: ["Nyɔŋma", "Nyɔŋma-enyɔ", "Nyɔŋma-etɛ", "Nyɔŋma-enumɔ", "Lafa"],
      vocabulary: [
        {
          id: 11,
          english: "Ten",
          native: "Nyɔŋma",
          pronunciation: "nyong-mah"
          // audioUrl: "/audio/ga/nyɔŋma.mp3"
        },
        {
          id: 12,
          english: "Twenty",
          native: "Nyɔŋma-enyɔ",
          pronunciation: "nyong-mah-eh-nyoh"
          // audioUrl: "/audio/ga/nyɔŋma_enyɔ.mp3"
        },
        {
          id: 13,
          english: "Thirty",
          native: "Nyɔŋma-etɛ",
          pronunciation: "nyong-mah-eh-teh"
          // audioUrl: "/audio/ga/nyɔŋma_etɛ.mp3"
        },
        {
          id: 14,
          english: "Forty",
          native: "Nyɔŋma-enyɔ-juɔŋ",
          pronunciation: "nyong-mah-eh-nyoh-jue-ong"
          // audioUrl: "/audio/ga/nyɔŋma_enyɔ_juɔŋ.mp3"
        },
        {
          id: 15,
          english: "Fifty",
          native: "Nyɔŋma-enumɔ",
          pronunciation: "nyong-mah-eh-noo-moh"
          // audioUrl: "/audio/ga/nyɔŋma_enumɔ.mp3"
        },
        {
          id: 16,
          english: "One hundred",
          native: "Lafa",
          pronunciation: "lah-fah"
          // audioUrl: "/audio/ga/lafa.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 'Twenty' in Ga?",
          options: [
            { id: 1, text: "Nyɔŋma" },
            { id: 2, text: "Nyɔŋma-enyɔ" },
            { id: 3, text: "Nyɔŋma-etɛ" },
            { id: 4, text: "Lafa" }
          ],
          correctOptionId: 2,
          hints: ["Two tens"],
          explanation: "'Nyɔŋma-enyɔ' means 'Twenty' in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 'Fifty' in Ga?",
          options: [
            { id: 1, text: "Nyɔŋma-enyɔ" },
            { id: 2, text: "Nyɔŋma-enumɔ" },
            { id: 3, text: "Nyɔŋma-etɛ" },
            { id: 4, text: "Lafa" }
          ],
          correctOptionId: 2,
          hints: ["Half of one hundred", "Contains 'enumɔ' (five)"],
          explanation: "'Nyɔŋma-enumɔ' means 'Fifty' in Ga."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 'One hundred' in Ga?",
          options: [
            { id: 1, text: "Nyɔŋma" },
            { id: 2, text: "Nyɔŋma-enyɔ" },
            { id: 3, text: "Nyɔŋma-etɛ" },
            { id: 4, text: "Lafa" }
          ],
          correctOptionId: 4,
          hints: ["Lafa = hundred"],
          explanation: "'Lafa' means 'One hundred' in Ga."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ga number to its English value.",
          pairs: [
            { id: 1, left: "Nyɔŋma", right: "Ten" },
            { id: 2, left: "Nyɔŋma-enyɔ", right: "Twenty" },
            { id: 3, left: "Nyɔŋma-enumɔ", right: "Fifty" },
            { id: 4, left: "Lafa", right: "One hundred" }
          ],
          hints: ["Nyɔŋma = ten", "Nyɔŋma-enyɔ = twenty", "Lafa = hundred"],
          explanation: "These are numbers in tens in Ga."
        }
      ]
    },

    {
      id: "4-3",
      type: "simple_sentences",
      title: "Days of the Week",
      icon: "calendar-outline",
      description: "Learn the days of the week in Ga",
      words: ["Dzuwɔdɛ", "Dzuagbɛ", "Jufɔɔ", "Dzumafɔɔ", "Hwɛkɔ", "Hwɛɛru", "Hwɛdɛ"],
      vocabulary: [
        {
          id: 17,
          english: "Monday",
          native: "Dzuwɔdɛ",
          pronunciation: "joo-woh-deh"
          // audioUrl: "/audio/ga/dzuwɔdɛ.mp3"
        },
        {
          id: 18,
          english: "Tuesday",
          native: "Dzuagbɛ",
          pronunciation: "joo-ah-gbeh"
          // audioUrl: "/audio/ga/dzuagbɛ.mp3"
        },
        {
          id: 19,
          english: "Wednesday",
          native: "Jufɔɔ",
          pronunciation: "joo-foh-oh"
          // audioUrl: "/audio/ga/jufɔɔ.mp3"
        },
        {
          id: 20,
          english: "Thursday",
          native: "Dzumafɔɔ",
          pronunciation: "joo-mah-foh-oh"
          // audioUrl: "/audio/ga/dzumafɔɔ.mp3"
        },
        {
          id: 21,
          english: "Friday",
          native: "Hwɛkɔ",
          pronunciation: "hweh-koh"
          // audioUrl: "/audio/ga/hwɛkɔ.mp3"
        },
        {
          id: 22,
          english: "Saturday",
          native: "Hwɛɛru",
          pronunciation: "hweh-eh-roo"
          // audioUrl: "/audio/ga/hwɛɛru.mp3"
        },
        {
          id: 23,
          english: "Sunday",
          native: "Hwɛdɛ",
          pronunciation: "hweh-deh"
          // audioUrl: "/audio/ga/hwɛdɛ.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga day.",
          question: "What is 'Monday' in Ga?",
          options: [
            { id: 1, text: "Dzuwɔdɛ" },
            { id: 2, text: "Dzuagbɛ" },
            { id: 3, text: "Jufɔɔ" },
            { id: 4, text: "Hwɛdɛ" }
          ],
          correctOptionId: 1,
          hints: ["The first day of the week"],
          explanation: "'Dzuwɔdɛ' means 'Monday' in Ga."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga day.",
          question: "What is 'Sunday' in Ga?",
          options: [
            { id: 1, text: "Dzuwɔdɛ" },
            { id: 2, text: "Hwɛkɔ" },
            { id: 3, text: "Hwɛdɛ" },
            { id: 4, text: "Hwɛɛru" }
          ],
          correctOptionId: 3,
          hints: ["The day of rest", "Starts with 'Hw'"],
          explanation: "'Hwɛdɛ' means 'Sunday' in Ga."
        },
        {
          id: 303,
          type: "matching",
          instruction: "Match each Ga day to its English meaning.",
          pairs: [
            { id: 1, left: "Dzuwɔdɛ", right: "Monday" },
            { id: 2, left: "Dzuagbɛ", right: "Tuesday" },
            { id: 3, left: "Jufɔɔ", right: "Wednesday" },
            { id: 4, left: "Hwɛɛru", right: "Saturday" }
          ],
          hints: ["Dzuwɔdɛ = Monday", "Dzuagbɛ = Tuesday"],
          explanation: "These are days of the week in Ga."
        }
      ]
    },

    {
      id: "4-4",
      type: "basic_conversations",
      title: "Telling Time",
      icon: "time-outline",
      description: "Learn time-related words and phrases in Ga",
      words: ["Be", "Be eko", "Gbɔkɛ", "Jetɛ", "Wofa", "Nitsɛ"],
      vocabulary: [
        {
          id: 24,
          english: "Time",
          native: "Be",
          pronunciation: "beh"
          // audioUrl: "/audio/ga/be.mp3"
        },
        {
          id: 25,
          english: "One o'clock",
          native: "Be eko",
          pronunciation: "beh eh-koh"
          // audioUrl: "/audio/ga/be_eko.mp3"
        },
        {
          id: 26,
          english: "Morning",
          native: "Gbɔkɛ",
          pronunciation: "gbo-keh"
          // audioUrl: "/audio/ga/gbɔkɛ.mp3"
        },
        {
          id: 27,
          english: "Afternoon",
          native: "Jetɛ",
          pronunciation: "jeh-teh"
          // audioUrl: "/audio/ga/jetɛ.mp3"
        },
        {
          id: 28,
          english: "Evening",
          native: "Wofa",
          pronunciation: "woh-fah"
          // audioUrl: "/audio/ga/wofa.mp3"
        },
        {
          id: 29,
          english: "Night",
          native: "Nitsɛ",
          pronunciation: "nee-tseh"
          // audioUrl: "/audio/ga/nitsɛ.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Time' in Ga?",
          options: [
            { id: 1, text: "Be" },
            { id: 2, text: "Gbɔkɛ" },
            { id: 3, text: "Nitsɛ" },
            { id: 4, text: "Wofa" }
          ],
          correctOptionId: 1,
          hints: ["Used to ask the time"],
          explanation: "'Be' means 'Time' in Ga."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Night' in Ga?",
          options: [
            { id: 1, text: "Be" },
            { id: 2, text: "Gbɔkɛ" },
            { id: 3, text: "Nitsɛ" },
            { id: 4, text: "Wofa" }
          ],
          correctOptionId: 3,
          hints: ["After evening, before morning"],
          explanation: "'Nitsɛ' means 'Night' in Ga."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Morning' in Ga?",
          options: [
            { id: 1, text: "Eko" },
            { id: 2, text: "Gbɔkɛ" },
            { id: 3, text: "Nitsɛ" },
            { id: 4, text: "Wofa" }
          ],
          correctOptionId: 2,
          hints: ["The start of the day"],
          explanation: "'Gbɔkɛ' means 'Morning' in Ga."
        },
        {
          id: 404,
          type: "matching",
          instruction: "Match each Ga word to its English meaning.",
          pairs: [
            { id: 1, left: "Be", right: "Time" },
            { id: 2, left: "Gbɔkɛ", right: "Morning" },
            { id: 3, left: "Jetɛ", right: "Afternoon" },
            { id: 4, left: "Wofa", right: "Evening" },
            { id: 5, left: "Nitsɛ", right: "Night" }
          ],
          hints: ["Be = time", "Gbɔkɛ = morning", "Nitsɛ = night"],
          explanation: "These are time-related words in Ga."
        },
        {
          id: 405,
          type: "listening_matching",
          instruction: "Listen to each time word and match it to its English meaning.",
          question: "Match each time word you hear to its meaning.",
          pairs: [
            { id: "p1", native: "Gbɔkɛ", audioUrl: "/audio/ga/gbɔkɛ.mp3", correctOptionId: "opt1" },
            { id: "p2", native: "Nitsɛ", audioUrl: "/audio/ga/nitsɛ.mp3", correctOptionId: "opt2" }
          ],
          options: [
            { id: "opt1", text: "Morning" },
            { id: "opt2", text: "Night" }
          ],
          correctDrops: [
            { pairId: "p1", optionId: "opt1" },
            { pairId: "p2", optionId: "opt2" }
          ],
          hints: ["Gbɔkɛ = morning", "Nitsɛ = night"],
          explanation: "These are time words in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-4",
    title: "Review: Numbers & Time",
    icon: "refresh-outline",
    description: "Review the numbers and time expressions you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Ga number.",
        question: "What is 'One' in Ga?",
        options: [
          { id: 1, text: "Eko" },
          { id: 2, text: "Enyɔ" },
          { id: 3, text: "Etɛ" },
          { id: 4, text: "Ejwɛ" }
        ],
        correctOptionId: 1,
        hints: ["The first number"],
        explanation: "Eko = One."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ga number.",
        question: "What is 'Five' in Ga?",
        options: [
          { id: 1, text: "Ejwɛ" },
          { id: 2, text: "Enumɔ" },
          { id: 3, text: "Ekpaa" },
          { id: 4, text: "Kpawo" }
        ],
        correctOptionId: 2,
        hints: ["Half of ten"],
        explanation: "Enumɔ = Five."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ga number.",
        question: "What is 'Twenty' in Ga?",
        options: [
          { id: 1, text: "Nyɔŋma" },
          { id: 2, text: "Nyɔŋma-enyɔ" },
          { id: 3, text: "Lafa" },
          { id: 4, text: "Nyɔŋma-enumɔ" }
        ],
        correctOptionId: 2,
        hints: ["Two tens"],
        explanation: "Nyɔŋma-enyɔ = Twenty."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ga day.",
        question: "What is 'Monday' in Ga?",
        options: [
          { id: 1, text: "Dzuwɔdɛ" },
          { id: 2, text: "Dzuagbɛ" },
          { id: 3, text: "Jufɔɔ" },
          { id: 4, text: "Hwɛɛru" }
        ],
        correctOptionId: 1,
        hints: ["First day of the week"],
        explanation: "Dzuwɔdɛ = Monday."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Time' in Ga?",
        options: [
          { id: 1, text: "Be" },
          { id: 2, text: "Gbɔkɛ" },
          { id: 3, text: "Nitsɛ" },
          { id: 4, text: "Wofa" }
        ],
        correctOptionId: 1,
        hints: ["Used to ask the time"],
        explanation: "Be = Time."
      },
      {
        id: 506,
        type: "matching",
        instruction: "Match each Ga word to its English meaning.",
        pairs: [
          { id: 1, left: "Eko", right: "One" },
          { id: 2, left: "Enyɔ", right: "Two" },
          { id: 3, left: "Enumɔ", right: "Five" },
          { id: 4, left: "Nyɔŋma", right: "Ten" },
          { id: 5, left: "Nitsɛ", right: "Night" }
        ],
        hints: ["Eko = one", "Enyɔ = two", "Enumɔ = five"],
        explanation: "These are key numbers and time words from this chapter."
      }
    ]
  }
};
