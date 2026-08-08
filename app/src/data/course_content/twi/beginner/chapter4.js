// data/course_content/twi/beginner/chapter4.js
export default {
  id: 4,
  title: "Numbers & Time",
  description: "Learn how to count in Twi and tell time for daily conversations",
  icon: "time-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "4-1",
      type: "vocabulary",
      title: "Numbers 1-10",
      icon: "calculator-outline",
      description: "Learn to count from one to ten in Twi",
      words: ["Baako", "Mmienu", "Mmiɛnsa", "Ɛnan", "Enum", "Nsia", "Nson", "Nwɔtwe", "Nkron", "Du"],
      vocabulary: [
        {
          id: 1,
          english: "One",
          native: "Baako",
          pronunciation: "bah-koh"
          // audioUrl: "/audio/twi/baako.mp3"
        },
        {
          id: 2,
          english: "Two",
          native: "Mmienu",
          pronunciation: "mmee-nu"
          // audioUrl: "/audio/twi/mmienu.mp3"
        },
        {
          id: 3,
          english: "Three",
          native: "Mmiɛnsa",
          pronunciation: "mmee-en-sah"
          // audioUrl: "/audio/twi/mmie_nsa.mp3"
        },
        {
          id: 4,
          english: "Four",
          native: "Ɛnan",
          pronunciation: "eh-nan"
          // audioUrl: "/audio/twi/enan.mp3"
        },
        {
          id: 5,
          english: "Five",
          native: "Enum",
          pronunciation: "eh-num"
          // audioUrl: "/audio/twi/enum.mp3"
        },
        {
          id: 6,
          english: "Six",
          native: "Nsia",
          pronunciation: "un-see-ah"
          // audioUrl: "/audio/twi/nsia.mp3"
        },
        {
          id: 7,
          english: "Seven",
          native: "Nson",
          pronunciation: "un-son"
          // audioUrl: "/audio/twi/nson.mp3"
        },
        {
          id: 8,
          english: "Eight",
          native: "Nwɔtwe",
          pronunciation: "un-wot-weh"
          // audioUrl: "/audio/twi/nwotwe.mp3"
        },
        {
          id: 9,
          english: "Nine",
          native: "Nkron",
          pronunciation: "un-kron"
          // audioUrl: "/audio/twi/nkron.mp3"
        },
        {
          id: 10,
          english: "Ten",
          native: "Du",
          pronunciation: "doo"
          // audioUrl: "/audio/twi/du.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'One' in Twi?",
          options: [
            { id: 1, text: "Baako" },
            { id: 2, text: "Mmienu" },
            { id: 3, text: "Mmiɛnsa" },
            { id: 4, text: "Enum" }
          ],
          correctOptionId: 1,
          hints: ["The smallest number", "Starts with 'B'"],
          explanation: "Baako = One. It is the first number in Twi counting."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Five' in Twi?",
          options: [
            { id: 1, text: "Ɛnan" },
            { id: 2, text: "Enum" },
            { id: 3, text: "Nsia" },
            { id: 4, text: "Nson" }
          ],
          correctOptionId: 2,
          hints: ["Half of ten", "Starts with 'E'"],
          explanation: "Enum = Five. It is the number between four and six."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Ten' in Twi?",
          options: [
            { id: 1, text: "Nkron" },
            { id: 2, text: "Nsia" },
            { id: 3, text: "Du" },
            { id: 4, text: "Nwɔtwe" }
          ],
          correctOptionId: 3,
          hints: ["Two-digit starting number", "Short word"],
          explanation: "Du = Ten. It is the base for building larger Twi numbers."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Twi number to its correct value.",
          pairs: [
            { id: 1, left: "Baako", right: "One" },
            { id: 2, left: "Mmienu", right: "Two" },
            { id: 3, left: "Mmiɛnsa", right: "Three" },
            { id: 4, left: "Ɛnan", right: "Four" },
            { id: 5, left: "Enum", right: "Five" }
          ],
          hints: ["Baako = one", "Mmienu = two", "Mmiɛnsa = three", "Ɛnan = four", "Enum = five"],
          explanation: "These are the first five numbers in Twi."
        },
        {
          id: 105,
          type: "drag_drop",
          instruction: "Complete the number sequence by dragging the correct word.",
          sentence: "Baako, Mmienu, [_____], Ɛnan, Enum",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Mmiɛnsa", meaning: "Three" },
            { id: "opt2", text: "Nsia", meaning: "Six" },
            { id: "opt3", text: "Nson", meaning: "Seven" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Comes after two", "Third number"],
          explanation: "The sequence is Baako (1), Mmienu (2), Mmiɛnsa (3), Ɛnan (4), Enum (5)."
        }
      ]
    },

    {
      id: "4-2",
      type: "vocabulary",
      title: "Numbers 10-100",
      icon: "rainy-outline",
      description: "Learn numbers for counting higher quantities",
      words: ["Dubaako", "Aduonu", "Aduasa", "Ɔha"],
      vocabulary: [
        {
          id: 11,
          english: "Eleven",
          native: "Dubaako",
          pronunciation: "doo-bah-koh"
          // audioUrl: "/audio/twi/dubaako.mp3"
        },
        {
          id: 12,
          english: "Twenty",
          native: "Aduonu",
          pronunciation: "ah-doo-nu"
          // audioUrl: "/audio/twi/aduanu.mp3"
        },
        {
          id: 13,
          english: "Thirty",
          native: "Aduasa",
          pronunciation: "ah-doo-sah"
          // audioUrl: "/audio/twi/adua_sa.mp3"
        },
        {
          id: 14,
          english: "Forty",
          native: "Aduanan",
          pronunciation: "ah-doo-nan"
          // audioUrl: "/audio/twi/adu_nan.mp3"
        },
        {
          id: 15,
          english: "Fifty",
          native: "Aduonum",
          pronunciation: "ah-doo-num"
          // audioUrl: "/audio/twi/adu_onum.mp3"
        },
        {
          id: 16,
          english: "Hundred",
          native: "Ɔha",
          pronunciation: "oh-hah"
          // audioUrl: "/audio/twi/oha.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Twenty' in Twi?",
          options: [
            { id: 1, text: "Aduonu" },
            { id: 2, text: "Aduasa" },
            { id: 3, text: "Ɔha" },
            { id: 4, text: "Dubaako" }
          ],
          correctOptionId: 1,
          hints: ["Two tens", "Starts with 'Adu'"],
          explanation: "Aduonu = Twenty. It is two tens (2 x 10)."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Hundred' in Twi?",
          options: [
            { id: 1, text: "Aduasa" },
            { id: 2, text: "Aduanu" },
            { id: 3, text: "Ɔha" },
            { id: 4, text: "Dubaako" }
          ],
          correctOptionId: 3,
          hints: ["Very large number", "Starts with 'Ɔ'"],
          explanation: "Ɔha = Hundred. It represents 100."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Thirty' in Twi?",
          options: [
            { id: 1, text: "Aduonu" },
            { id: 2, text: "Aduasa" },
            { id: 3, text: "Aduanan" },
            { id: 4, text: "Aduonum" }
          ],
          correctOptionId: 2,
          hints: ["Three tens", "Starts with 'Adu' and ends with 'sa'"],
          explanation: "Aduasa = Thirty. It is three tens (3 x 10)."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Twi number to its correct value.",
          pairs: [
            { id: 1, left: "Dubaako", right: "Eleven" },
            { id: 2, left: "Aduonu", right: "Twenty" },
            { id: 3, left: "Aduasa", right: "Thirty" },
            { id: 4, left: "Ɔha", right: "Hundred" }
          ],
          hints: ["Dubaako = eleven", "Aduonu = twenty", "Aduasa = thirty", "Ɔha = hundred"],
          explanation: "These are common larger numbers in Twi."
        }
      ]
    },

    {
      id: "4-3",
      type: "vocabulary",
      title: "Days of the Week",
      icon: "calendar-outline",
      description: "Learn the days of the week in Twi",
      words: ["Ebene", "Dwoada", "Benada", "Wukuada"],
      vocabulary: [
        {
          id: 17,
          english: "Today",
          native: "Nnɛ",
          pronunciation: "nn-eh"
          // audioUrl: "/audio/twi/nne.mp3"
        },
        {
          id: 18,
          english: "Tomorrow",
          native: "Ɔkyena",
          pronunciation: "oh-chen-ah"
          // audioUrl: "/audio/twi/okyena.mp3"
        },
        {
          id: 19,
          english: "Yesterday",
          native: "Nnɛra",
          pronunciation: "nn-eh-rah"
          // audioUrl: "/audio/twi/nnera.mp3"
        },
        {
          id: 20,
          english: "Monday",
          native: "Dwoada",
          pronunciation: "dwo-ah-dah"
          // audioUrl: "/audio/twi/dwoada.mp3"
        },
        {
          id: 21,
          english: "Tuesday",
          native: "Benada",
          pronunciation: "beh-nah-dah"
          // audioUrl: "/audio/twi/benada.mp3"
        },
        {
          id: 22,
          english: "Wednesday",
          native: "Wukuada",
          pronunciation: "woo-kwah-dah"
          // audioUrl: "/audio/twi/wukuada.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Tomorrow' in Twi?",
          options: [
            { id: 1, text: "Ɔkyena" },
            { id: 2, text: "Nnɛ" },
            { id: 3, text: "Nnɛra" },
            { id: 4, text: "Dwoada" }
          ],
          correctOptionId: 1,
          hints: ["The day after today", "Starts with 'Ɔ'"],
          explanation: "Ɔkyena = Tomorrow. It is the day after today."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Monday' in Twi?",
          options: [
            { id: 1, text: "Benada" },
            { id: 2, text: "Wukuada" },
            { id: 3, text: "Dwoada" },
            { id: 4, text: "Nnɛ" }
          ],
          correctOptionId: 3,
          hints: ["Starts with 'Dwo'", "First day of the work week"],
          explanation: "Dwoada = Monday. 'Dwo' relates to peace in the Akan day-naming tradition."
        },
        {
          id: 303,
          type: "matching",
          instruction: "Match each Twi word to its correct English meaning.",
          pairs: [
            { id: 1, left: "Nnɛ", right: "Today" },
            { id: 2, left: "Ɔkyena", right: "Tomorrow" },
            { id: 3, left: "Nnɛra", right: "Yesterday" },
            { id: 4, left: "Dwoada", right: "Monday" }
          ],
          hints: ["Nnɛ = today", "Ɔkyena = tomorrow", "Nnɛra = yesterday", "Dwoada = Monday"],
          explanation: "These are important words for talking about time in Twi."
        }
      ]
    },

    {
      id: "4-4",
      type: "vocabulary",
      title: "Telling Time",
      icon: "time-outline",
      description: "Learn how to tell the time and use time-related words",
      words: ["Dɔn", "Anɔpa", "Awiei", "Anadwo", "Dɔn bɛn na ɛmberɛ no yɛ?"],
      vocabulary: [
        {
          id: 23,
          english: "Hour / O'clock",
          native: "Dɔn",
          pronunciation: "don"
          // audioUrl: "/audio/twi/don.mp3"
        },
        {
          id: 24,
          english: "Morning",
          native: "Anɔpa",
          pronunciation: "ah-noh-pah"
          // audioUrl: "/audio/twi/anopa.mp3"
        },
        {
          id: 25,
          english: "Afternoon",
          native: "Awiei",
          pronunciation: "ah-wee-eh"
          // audioUrl: "/audio/twi/awiei.mp3"
        },
        {
          id: 26,
          english: "Night",
          native: "Anadwo",
          pronunciation: "ah-nah-dwo"
          // audioUrl: "/audio/twi/anadwo.mp3"
        },
        {
          id: 27,
          english: "What time is it?",
          native: "Dɔn bɛn na ɛmberɛ no yɛ?",
          pronunciation: "don ben nah m-beh-reh noh yeh"
          // audioUrl: "/audio/twi/don_ben_na_embere_no_ye.mp3"
        },
        {
          id: 28,
          english: "Now",
          native: "Seesei",
          pronunciation: "seh-seh"
          // audioUrl: "/audio/twi/seesei.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Morning' in Twi?",
          options: [
            { id: 1, text: "Anɔpa" },
            { id: 2, text: "Awiei" },
            { id: 3, text: "Anadwo" },
            { id: 4, text: "Seesei" }
          ],
          correctOptionId: 1,
          hints: ["Before noon", "Starts with 'A' and ends with 'pa'"],
          explanation: "Anɔpa = Morning. It is the time of day before noon."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Night' in Twi?",
          options: [
            { id: 1, text: "Anɔpa" },
            { id: 2, text: "Awiei" },
            { id: 3, text: "Anadwo" },
            { id: 4, text: "Dɔn" }
          ],
          correctOptionId: 3,
          hints: ["After evening", "Starts with 'A' and ends with 'dwo'"],
          explanation: "Anadwo = Night. It is the time of day when it is dark."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'What time is it?' in Twi?",
          options: [
            { id: 1, text: "Dɔn bɛn na ɛmberɛ no yɛ?" },
            { id: 2, text: "Wo din de sɛn?" },
            { id: 3, text: "Wofiri he?" },
            { id: 4, text: "Seesei" }
          ],
          correctOptionId: 1,
          hints: ["Starts with 'Dɔn' (hour)", "Asks about the current time"],
          explanation: "'Dɔn bɛn na ɛmberɛ no yɛ?' = 'What time is it?' in Twi."
        },
        {
          id: 404,
          type: "matching",
          instruction: "Match each Twi word to its correct English meaning.",
          pairs: [
            { id: 1, left: "Anɔpa", right: "Morning" },
            { id: 2, left: "Awiei", right: "Afternoon" },
            { id: 3, left: "Anadwo", right: "Night" },
            { id: 4, left: "Dɔn", right: "Hour" }
          ],
          hints: ["Anɔpa = morning", "Awiei = afternoon", "Anadwo = night", "Dɔn = hour"],
          explanation: "These are essential words for telling time in Twi."
        },
        {
          id: 405,
          type: "drag_drop",
          instruction: "Complete the question 'What time is it?' by dragging the correct word.",
          sentence: "[_____] bɛn na ɛmberɛ no yɛ?",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Dɔn", meaning: "Hour" },
            { id: "opt2", text: "Sɛn", meaning: "What" },
            { id: "opt3", text: "Nnɛ", meaning: "Today" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Refers to the hour of the day"],
          explanation: "'Dɔn bɛn na ɛmberɛ no yɛ?' = 'What time is it?' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-4",
    title: "Review: Numbers & Time",
    icon: "refresh-outline",
    description: "Review all the numbers and time expressions you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Twi number.",
        question: "What is 'Three' in Twi?",
        options: [
          { id: 1, text: "Baako" },
          { id: 2, text: "Mmiɛnsa" },
          { id: 3, text: "Mmienu" },
          { id: 4, text: "Enum" }
        ],
        correctOptionId: 2,
        hints: ["Comes after two"],
        explanation: "Mmiɛnsa = Three."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Twi number.",
        question: "What is 'Five' in Twi?",
        options: [
          { id: 1, text: "Ɛnan" },
          { id: 2, text: "Nsia" },
          { id: 3, text: "Enum" },
          { id: 4, text: "Nson" }
        ],
        correctOptionId: 3,
        hints: ["Between four and six"],
        explanation: "Enum = Five."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Twi number.",
        question: "What is 'Twenty' in Twi?",
        options: [
          { id: 1, text: "Aduasa" },
          { id: 2, text: "Aduonu" },
          { id: 3, text: "Ɔha" },
          { id: 4, text: "Dubaako" }
        ],
        correctOptionId: 2,
        hints: ["Two tens"],
        explanation: "Aduonu = Twenty."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Tomorrow' in Twi?",
        options: [
          { id: 1, text: "Nnɛ" },
          { id: 2, text: "Nnɛra" },
          { id: 3, text: "Ɔkyena" },
          { id: 4, text: "Dwoada" }
        ],
        correctOptionId: 3,
        hints: ["The day after today"],
        explanation: "Ɔkyena = Tomorrow."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Night' in Twi?",
        options: [
          { id: 1, text: "Anɔpa" },
          { id: 2, text: "Anadwo" },
          { id: 3, text: "Awiei" },
          { id: 4, text: "Dɔn" }
        ],
        correctOptionId: 2,
        hints: ["When it is dark"],
        explanation: "Anadwo = Night."
      },
      {
        id: 506,
        type: "matching",
        instruction: "Match each Twi word to its correct English meaning.",
        pairs: [
          { id: 1, left: "Mmiɛnsa", right: "Three" },
          { id: 2, left: "Enum", right: "Five" },
          { id: 3, left: "Aduonu", right: "Twenty" },
          { id: 4, left: "Ɔkyena", right: "Tomorrow" },
          { id: 5, left: "Seesei", right: "Now" }
        ],
        hints: ["Several numbers and time words"],
        explanation: "These are key numbers and time expressions from this chapter."
      }
    ]
  }
};

