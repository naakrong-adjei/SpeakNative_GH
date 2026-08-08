// data/course_content/ewe/beginner/chapter4.js
export default {
  id: 4,
  title: "Numbers & Time",
  description: "Learn to count and tell time in Ewe",
  icon: "time-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "4-1",
      type: "words",
      title: "Numbers 1-10",
      icon: "keypad-outline",
      description: "Learn to count from one to ten in Ewe",
      words: ["Ɖeka", "Eve", "Etɔ̃", "Ene", "Atɔ̃", "Ade", "Adre", "Enyi", "Asieke", "Ewo"],
      vocabulary: [
        {
          id: 1,
          english: "One",
          native: "Ɖeka",
          pronunciation: "deh-kah"
          // audioUrl: "/audio/ewe/ɖeka.mp3"
        },
        {
          id: 2,
          english: "Two",
          native: "Eve",
          pronunciation: "eh-veh"
          // audioUrl: "/audio/ewe/eve.mp3"
        },
        {
          id: 3,
          english: "Three",
          native: "Etɔ̃",
          pronunciation: "eh-toh"
          // audioUrl: "/audio/ewe/etɔ̃.mp3"
        },
        {
          id: 4,
          english: "Four",
          native: "Ene",
          pronunciation: "eh-neh"
          // audioUrl: "/audio/ewe/ene.mp3"
        },
        {
          id: 5,
          english: "Five",
          native: "Atɔ̃",
          pronunciation: "ah-toh"
          // audioUrl: "/audio/ewe/atɔ̃.mp3"
        },
        {
          id: 6,
          english: "Six",
          native: "Ade",
          pronunciation: "ah-deh"
          // audioUrl: "/audio/ewe/ade.mp3"
        },
        {
          id: 7,
          english: "Seven",
          native: "Adre",
          pronunciation: "ah-dreh"
          // audioUrl: "/audio/ewe/adre.mp3"
        },
        {
          id: 8,
          english: "Eight",
          native: "Enyi",
          pronunciation: "eh-nyee"
          // audioUrl: "/audio/ewe/enyi.mp3"
        },
        {
          id: 9,
          english: "Nine",
          native: "Asieke",
          pronunciation: "ah-see-eh-keh"
          // audioUrl: "/audio/ewe/asieke.mp3"
        },
        {
          id: 10,
          english: "Ten",
          native: "Ewo",
          pronunciation: "eh-woh"
          // audioUrl: "/audio/ewe/ewo.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 'One' in Ewe?",
          options: [
            { id: 1, text: "Ɖeka" },
            { id: 2, text: "Eve" },
            { id: 3, text: "Etɔ̃" },
            { id: 4, text: "Ene" }
          ],
          correctOptionId: 1,
          hints: ["The first number", "Starts with 'Ɖ'"],
          explanation: "'Ɖeka' means 'One' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 'Two' in Ewe?",
          options: [
            { id: 1, text: "Ɖeka" },
            { id: 2, text: "Eve" },
            { id: 3, text: "Etɔ̃" },
            { id: 4, text: "Ene" }
          ],
          correctOptionId: 2,
          hints: ["Comes after one"],
          explanation: "'Eve' means 'Two' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 'Five' in Ewe?",
          options: [
            { id: 1, text: "Ene" },
            { id: 2, text: "Atɔ̃" },
            { id: 3, text: "Ade" },
            { id: 4, text: "Adre" }
          ],
          correctOptionId: 2,
          hints: ["Half of ten", "Starts with 'A'"],
          explanation: "'Atɔ̃' means 'Five' in Ewe."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 'Ten' in Ewe?",
          options: [
            { id: 1, text: "Asieke" },
            { id: 2, text: "Enyi" },
            { id: 3, text: "Ewo" },
            { id: 4, text: "Adre" }
          ],
          correctOptionId: 3,
          hints: ["The last number in this group", "Base for counting"],
          explanation: "'Ewo' means 'Ten' in Ewe."
        },
        {
          id: 105,
          type: "matching",
          instruction: "Match each Ewe number to its English value.",
          pairs: [
            { id: 1, left: "Ɖeka", right: "One" },
            { id: 2, left: "Eve", right: "Two" },
            { id: 3, left: "Etɔ̃", right: "Three" },
            { id: 4, left: "Ene", right: "Four" },
            { id: 5, left: "Atɔ̃", right: "Five" }
          ],
          hints: ["Ɖeka = one", "Eve = two", "Etɔ̃ = three"],
          explanation: "These are the first five numbers in Ewe."
        }
      ]
    },

    {
      id: "4-2",
      type: "phrases",
      title: "Numbers 10-100",
      icon: "keypad-outline",
      description: "Learn to count in tens up to one hundred in Ewe",
      words: ["Ewo", "Blaeve", "Blaeve-vɔ-atɔ̃", "Blaeve", "Blaeve-vɔ-ewi", "Blaeve-vɔ-eve"],
      vocabulary: [
        {
          id: 11,
          english: "Ten",
          native: "Ewo",
          pronunciation: "eh-woh"
          // audioUrl: "/audio/ewe/ewo.mp3"
        },
        {
          id: 12,
          english: "Twenty",
          native: "Blaeve",
          pronunciation: "blah-eh-veh"
          // audioUrl: "/audio/ewe/blaeve.mp3"
        },
        {
          id: 13,
          english: "Thirty",
          native: "Blaeve-vɔ-etɔ̃",
          pronunciation: "blah-eh-veh-voh-etoh"
          // audioUrl: "/audio/ewe/blaeve_vɔ_etɔ̃.mp3"
        },
        {
          id: 14,
          english: "Forty",
          native: "Blaeve-vɔ-ene",
          pronunciation: "blah-eh-veh-voh-eh-neh"
          // audioUrl: "/audio/ewe/blaeve_vɔ_ene.mp3"
        },
        {
          id: 15,
          english: "Fifty",
          native: "Blaeve-vɔ-atɔ̃",
          pronunciation: "blah-eh-veh-voh-ah-toh"
          // audioUrl: "/audio/ewe/blaeve_vɔ_atɔ̃.mp3"
        },
        {
          id: 16,
          english: "One hundred",
          native: "Alafa ɖeka",
          pronunciation: "ah-lah-fah deh-kah"
          // audioUrl: "/audio/ewe/alafa_ɖeka.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 'Twenty' in Ewe?",
          options: [
            { id: 1, text: "Ewo" },
            { id: 2, text: "Blaeve" },
            { id: 3, text: "Blaeve-vɔ-etɔ̃" },
            { id: 4, text: "Alafa ɖeka" }
          ],
          correctOptionId: 2,
          hints: ["Two tens", "Starts with 'Bl'"],
          explanation: "'Blaeve' means 'Twenty' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 'Fifty' in Ewe?",
          options: [
            { id: 1, text: "Blaeve" },
            { id: 2, text: "Blaeve-vɔ-ene" },
            { id: 3, text: "Blaeve-vɔ-atɔ̃" },
            { id: 4, text: "Alafa ɖeka" }
          ],
          correctOptionId: 3,
          hints: ["Half of one hundred", "Contains 'atɔ̃' (five)"],
          explanation: "'Blaeve-vɔ-atɔ̃' means 'Fifty' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 'One hundred' in Ewe?",
          options: [
            { id: 1, text: "Ewo" },
            { id: 2, text: "Blaeve" },
            { id: 3, text: "Blaeve-vɔ-etɔ̃" },
            { id: 4, text: "Alafa ɖeka" }
          ],
          correctOptionId: 4,
          hints: ["Alafa = hundred", "ɖeka = one"],
          explanation: "'Alafa ɖeka' means 'One hundred' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe number to its English value.",
          pairs: [
            { id: 1, left: "Ewo", right: "Ten" },
            { id: 2, left: "Blaeve", right: "Twenty" },
            { id: 3, left: "Blaeve-vɔ-atɔ̃", right: "Fifty" },
            { id: 4, left: "Alafa ɖeka", right: "One hundred" }
          ],
          hints: ["Ewo = ten", "Blaeve = twenty", "Alafa = hundred"],
          explanation: "These are numbers in tens in Ewe."
        }
      ]
    },

    {
      id: "4-3",
      type: "simple_sentences",
      title: "Days of the Week",
      icon: "calendar-outline",
      description: "Learn the days of the week in Ewe",
      words: ["Dzodzɛgbe", "Kɔsiɖagbe", "Brɔɖagbe", "Yawogbe", "Fɔɖagbe", "Memleɖagbe", "Kɔsiɖagbe"],
      vocabulary: [
        {
          id: 17,
          english: "Monday",
          native: "Dzodzɛgbe",
          pronunciation: "joh-jeh-gbeh"
          // audioUrl: "/audio/ewe/dzodzɛgbe.mp3"
        },
        {
          id: 18,
          english: "Tuesday",
          native: "Brɔɖagbe",
          pronunciation: "broh-dah-gbeh"
          // audioUrl: "/audio/ewe/brɔɖagbe.mp3"
        },
        {
          id: 19,
          english: "Wednesday",
          native: "Kɔsiɖagbe",
          pronunciation: "koh-see-dah-gbeh"
          // audioUrl: "/audio/ewe/kɔsiɖagbe.mp3"
        },
        {
          id: 20,
          english: "Thursday",
          native: "Yawogbe",
          pronunciation: "yah-woh-gbeh"
          // audioUrl: "/audio/ewe/yawogbe.mp3"
        },
        {
          id: 21,
          english: "Friday",
          native: "Fɔɖagbe",
          pronunciation: "foh-dah-gbeh"
          // audioUrl: "/audio/ewe/fɔɖagbe.mp3"
        },
        {
          id: 22,
          english: "Saturday",
          native: "Memleɖagbe",
          pronunciation: "meh-mleh-dah-gbeh"
          // audioUrl: "/audio/ewe/memleɖagbe.mp3"
        },
        {
          id: 23,
          english: "Sunday",
          native: "Kɔsiɖagbe",
          pronunciation: "koh-see-dah-gbeh"
          // audioUrl: "/audio/ewe/kɔsiɖagbe.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe day.",
          question: "What is 'Monday' in Ewe?",
          options: [
            { id: 1, text: "Dzodzɛgbe" },
            { id: 2, text: "Brɔɖagbe" },
            { id: 3, text: "Yawogbe" },
            { id: 4, text: "Fɔɖagbe" }
          ],
          correctOptionId: 1,
          hints: ["The first day of the week"],
          explanation: "'Dzodzɛgbe' means 'Monday' in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe day.",
          question: "What is 'Sunday' in Ewe?",
          options: [
            { id: 1, text: "Dzodzɛgbe" },
            { id: 2, text: "Kɔsiɖagbe" },
            { id: 3, text: "Yawogbe" },
            { id: 4, text: "Fɔɖagbe" }
          ],
          correctOptionId: 2,
          hints: ["The day of rest", "Starts with 'K'"],
          explanation: "'Kɔsiɖagbe' means 'Sunday' in Ewe."
        },
        {
          id: 303,
          type: "matching",
          instruction: "Match each Ewe day to its English meaning.",
          pairs: [
            { id: 1, left: "Dzodzɛgbe", right: "Monday" },
            { id: 2, left: "Brɔɖagbe", right: "Tuesday" },
            { id: 3, left: "Yawogbe", right: "Thursday" },
            { id: 4, left: "Memleɖagbe", right: "Saturday" }
          ],
          hints: ["Dzodzɛgbe = Monday", "Brɔɖagbe = Tuesday"],
          explanation: "These are days of the week in Ewe."
        }
      ]
    },

    {
      id: "4-4",
      type: "basic_conversations",
      title: "Telling Time",
      icon: "time-outline",
      description: "Learn time-related words and phrases in Ewe",
      words: ["Ga", "Ga ɖeka", "Ŋdi", "Ŋdɔ", "Fiɛ̃", "Zã"],
      vocabulary: [
        {
          id: 24,
          english: "Time",
          native: "Ga",
          pronunciation: "gah"
          // audioUrl: "/audio/ewe/ga.mp3"
        },
        {
          id: 25,
          english: "One o'clock",
          native: "Ga ɖeka",
          pronunciation: "gah deh-kah"
          // audioUrl: "/audio/ewe/ga_ɖeka.mp3"
        },
        {
          id: 26,
          english: "Morning",
          native: "Ŋdi",
          pronunciation: "ng-dee"
          // audioUrl: "/audio/ewe/ŋdi.mp3"
        },
        {
          id: 27,
          english: "Afternoon",
          native: "Ŋdɔ",
          pronunciation: "ng-doh"
          // audioUrl: "/audio/ewe/ŋdɔ.mp3"
        },
        {
          id: 28,
          english: "Evening",
          native: "Fiɛ̃",
          pronunciation: "fee-en"
          // audioUrl: "/audio/ewe/fiɛ̃.mp3"
        },
        {
          id: 29,
          english: "Night",
          native: "Zã",
          pronunciation: "zah"
          // audioUrl: "/audio/ewe/zã.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Time' in Ewe?",
          options: [
            { id: 1, text: "Ga" },
            { id: 2, text: "Ŋdi" },
            { id: 3, text: "Zã" },
            { id: 4, text: "Fiɛ̃" }
          ],
          correctOptionId: 1,
          hints: ["Used to ask the time"],
          explanation: "'Ga' means 'Time' in Ewe."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Night' in Ewe?",
          options: [
            { id: 1, text: "Ga" },
            { id: 2, text: "Ŋdi" },
            { id: 3, text: "Zã" },
            { id: 4, text: "Fiɛ̃" }
          ],
          correctOptionId: 3,
          hints: ["After evening, before morning"],
          explanation: "'Zã' means 'Night' in Ewe."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Morning' in Ewe?",
          options: [
            { id: 1, text: "Ɖeka" },
            { id: 2, text: "Ŋdi" },
            { id: 3, text: "Zã" },
            { id: 4, text: "Fiɛ̃" }
          ],
          correctOptionId: 2,
          hints: ["The start of the day"],
          explanation: "'Ŋdi' means 'Morning' in Ewe."
        },
        {
          id: 404,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Ga", right: "Time" },
            { id: 2, left: "Ŋdi", right: "Morning" },
            { id: 3, left: "Ŋdɔ", right: "Afternoon" },
            { id: 4, left: "Fiɛ̃", right: "Evening" },
            { id: 5, left: "Zã", right: "Night" }
          ],
          hints: ["Ga = time", "Ŋdi = morning", "Zã = night"],
          explanation: "These are time-related words in Ewe."
        },
        // Listening matching question commented out - requires audio file
        // {
        //   id: 405,
        //   type: "listening_matching",
        //   instruction: "Listen to each time word and match it to its English meaning.",
        //   question: "Match each time word you hear to its meaning.",
        //   pairs: [
        //     { id: 1, audioUrl: "/audio/ewe/ŋdi.mp3", right: "Morning" },
        //     { id: 2, audioUrl: "/audio/ewe/zã.mp3", right: "Night" }
        //   ],
        //   hints: ["Ŋdi = morning", "Zã = night"],
        //   explanation: "These are time words in Ewe."
        // }
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
        instruction: "Select the correct Ewe number.",
        question: "What is 'One' in Ewe?",
        options: [
          { id: 1, text: "Ɖeka" },
          { id: 2, text: "Eve" },
          { id: 3, text: "Etɔ̃" },
          { id: 4, text: "Ene" }
        ],
        correctOptionId: 1,
        hints: ["The first number"],
        explanation: "Ɖeka = One."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ewe number.",
        question: "What is 'Five' in Ewe?",
        options: [
          { id: 1, text: "Ene" },
          { id: 2, text: "Atɔ̃" },
          { id: 3, text: "Ade" },
          { id: 4, text: "Adre" }
        ],
        correctOptionId: 2,
        hints: ["Half of ten"],
        explanation: "Atɔ̃ = Five."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ewe number.",
        question: "What is 'Twenty' in Ewe?",
        options: [
          { id: 1, text: "Ewo" },
          { id: 2, text: "Blaeve" },
          { id: 3, text: "Alafa ɖeka" },
          { id: 4, text: "Blaeve-vɔ-atɔ̃" }
        ],
        correctOptionId: 2,
        hints: ["Two tens"],
        explanation: "Blaeve = Twenty."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ewe day.",
        question: "What is 'Monday' in Ewe?",
        options: [
          { id: 1, text: "Dzodzɛgbe" },
          { id: 2, text: "Brɔɖagbe" },
          { id: 3, text: "Yawogbe" },
          { id: 4, text: "Memleɖagbe" }
        ],
        correctOptionId: 1,
        hints: ["First day of the week"],
        explanation: "Dzodzɛgbe = Monday."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Time' in Ewe?",
        options: [
          { id: 1, text: "Ga" },
          { id: 2, text: "Ŋdi" },
          { id: 3, text: "Zã" },
          { id: 4, text: "Fiɛ̃" }
        ],
        correctOptionId: 1,
        hints: ["Used to ask the time"],
        explanation: "Ga = Time."
      },
      {
        id: 506,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Ɖeka", right: "One" },
          { id: 2, left: "Eve", right: "Two" },
          { id: 3, left: "Atɔ̃", right: "Five" },
          { id: 4, left: "Ewo", right: "Ten" },
          { id: 5, left: "Zã", right: "Night" }
        ],
        hints: ["Ɖeka = one", "Eve = two", "Atɔ̃ = five"],
        explanation: "These are key numbers and time words from this chapter."
      }
    ]
  }
};
