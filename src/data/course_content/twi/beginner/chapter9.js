// data/course_content/twi/beginner/chapter9.js
export default {
  id: 9,
  title: "School & Work",
  description: "Learn words and phrases for school subjects and work in Twi",
  icon: "school-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "9-1",
      type: "vocabulary",
      title: "School Subjects",
      icon: "book-outline",
      description: "Learn the Twi names for school subjects",
      words: ["ɔbenem", "akontaabuo", "abakɔsɛm", "nyansahu", "adwenkyerɛ", "nsɛmkyerɛw", "ɔyarehwɛ", "sini"],
      vocabulary: [
        {
          id: 1,
          english: "Teacher",
          native: "ɔkyerɛkyerɛni",
          pronunciation: "oh-cheh-reh-cheh-reh-nee"
          // audioUrl: "/audio/twi/okyerеkyereni.mp3"
        },
        {
          id: 2,
          english: "Student",
          native: "ɔsukuuni",
          pronunciation: "oh-soo-koo-nee"
          // audioUrl: "/audio/twi/osukuuni.mp3"
        },
        {
          id: 3,
          english: "Mathematics",
          native: "akontaabuo",
          pronunciation: "ah-kon-tah-ah-boo-oh"
          // audioUrl: "/audio/twi/akontaabuo.mp3"
        },
        {
          id: 4,
          english: "History",
          native: "abakɔsɛm",
          pronunciation: "ah-bah-koh-sehm"
          // audioUrl: "/audio/twi/abakosem.mp3"
        },
        {
          id: 5,
          english: "Science",
          native: "nyansahu",
          pronunciation: "nyahn-sah-hoo"
          // audioUrl: "/audio/twi/nyansahu.mp3"
        },
        {
          id: 6,
          english: "Art / Design",
          native: "adwenkyerɛ",
          pronunciation: "ah-dwen-cheh-reh"
          // audioUrl: "/audio/twi/adwenkyere.mp3"
        },
        {
          id: 7,
          english: "Writing / Essay",
          native: "nsɛmkyerɛw",
          pronunciation: "en-sem-cheh-reh-yeu"
          // audioUrl: "/audio/twi/nsemkyerew.mp3"
        },
        {
          id: 8,
          english: "Reading",
          native: "kenkan",
          pronunciation: "ken-kahn"
          // audioUrl: "/audio/twi/kenkan.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Teacher' in Twi?",
          options: [
            { id: 1, text: "ɔkyerɛkyerɛni" },
            { id: 2, text: "ɔsukuuni" },
            { id: 3, text: "akontaabuo" },
            { id: 4, text: "abakɔsɛm" }
          ],
          correctOptionId: 1,
          hints: ["A person who teaches", "Starts with 'ɔk'"],
          explanation: "'ɔkyerɛkyerɛni' means 'Teacher' in Twi."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Student' in Twi?",
          options: [
            { id: 1, text: "ɔkyerɛkyerɛni" },
            { id: 2, text: "ɔsukuuni" },
            { id: 3, text: "akontaabuo" },
            { id: 4, text: "abakɔsɛm" }
          ],
          correctOptionId: 2,
          hints: ["A person who learns", "Starts with 'ɔs'"],
          explanation: "'ɔsukuuni' means 'Student' in Twi."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Mathematics' in Twi?",
          options: [
            { id: 1, text: "akontaabuo" },
            { id: 2, text: "abakɔsɛm" },
            { id: 3, text: "nyansahu" },
            { id: 4, text: "kenkan" }
          ],
          correctOptionId: 1,
          hints: ["Subject about numbers", "Starts with 'ak'"],
          explanation: "'akontaabuo' means 'Mathematics' in Twi."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Twi word to its English meaning.",
          pairs: [
            { id: 1, left: "ɔkyerɛkyerɛni", right: "Teacher" },
            { id: 2, left: "ɔsukuuni", right: "Student" },
            { id: 3, left: "akontaabuo", right: "Mathematics" },
            { id: 4, left: "abakɔsɛm", right: "History" },
            { id: 5, left: "nyansahu", right: "Science" }
          ],
          hints: ["ɔkyerɛkyerɛni = teacher", "ɔsukuuni = student", "akontaabuo = math"],
          explanation: "These are common school words in Twi."
        }
      ]
    },

    {
      id: "9-2",
      type: "vocabulary",
      title: "Education Phrases",
      icon: "create-outline",
      description: "Learn useful phrases to talk about learning in Twi",
      words: ["Merekenkan", "Mereyɛ adwuma", "Mete ase", "Mente ase", "Bisa", "Gyina so", "daakye", "nnɛ"],
      vocabulary: [
        {
          id: 9,
          english: "I am reading",
          native: "Merekenkan",
          pronunciation: "meh-reh-ken-kahn"
          // audioUrl: "/audio/twi/merekenkan.mp3"
        },
        {
          id: 10,
          english: "I am working",
          native: "Mereyɛ adwuma",
          pronunciation: "meh-reh-yeh ah-joo-mah"
          // audioUrl: "/audio/twi/mereye_adwuma.mp3"
        },
        {
          id: 11,
          english: "I understand",
          native: "Mete ase",
          pronunciation: "meh-teh ah-seh"
          // audioUrl: "/audio/twi/mete_ase.mp3"
        },
        {
          id: 12,
          english: "I don't understand",
          native: "Mente ase",
          pronunciation: "men-teh ah-seh"
          // audioUrl: "/audio/twi/mente_ase.mp3"
        },
        {
          id: 13,
          english: "To ask",
          native: "bisa",
          pronunciation: "bee-sah"
          // audioUrl: "/audio/twi/bisa.mp3"
        },
        {
          id: 14,
          english: "To repeat / answer",
          native: "gyina so",
          pronunciation: "jee-nah soh"
          // audioUrl: "/audio/twi/gyina_so.mp3"
        },
        {
          id: 15,
          english: "Tomorrow / future",
          native: "daakye",
          pronunciation: "dah-cheh"
          // audioUrl: "/audio/twi/daakye.mp3"
        },
        {
          id: 16,
          english: "Today",
          native: "nnɛ",
          pronunciation: "n-neh"
          // audioUrl: "/audio/twi/nne.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I understand' in Twi?",
          options: [
            { id: 1, text: "Mete ase" },
            { id: 2, text: "Mente ase" },
            { id: 3, text: "Merekenkan" },
            { id: 4, text: "Mereyɛ adwuma" }
          ],
          correctOptionId: 1,
          hints: ["Me = I", "te ase = understand"],
          explanation: "'Mete ase' means 'I understand'. 'te ase' means 'understand'."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I don't understand' in Twi?",
          options: [
            { id: 1, text: "Mete ase" },
            { id: 2, text: "Mente ase" },
            { id: 3, text: "Merekenkan" },
            { id: 4, text: "Mereyɛ adwuma" }
          ],
          correctOptionId: 2,
          hints: ["Negative form of 'Mete ase'", "Adds 'n' after Me"],
          explanation: "'Mente ase' means 'I don't understand'. The 'n' makes it negative."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am reading' in Twi?",
          options: [
            { id: 1, text: "Mete ase" },
            { id: 2, text: "Mente ase" },
            { id: 3, text: "Merekenkan" },
            { id: 4, text: "Mereyɛ adwuma" }
          ],
          correctOptionId: 3,
          hints: ["kenkan = read", "Mere = I am (in progress)"],
          explanation: "'Merekenkan' means 'I am reading'. 'kenkan' means 'read'."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Twi phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Mete ase", right: "I understand" },
            { id: 2, left: "Mente ase", right: "I don't understand" },
            { id: 3, left: "Merekenkan", right: "I am reading" },
            { id: 4, left: "Mereyɛ adwuma", right: "I am working" }
          ],
          hints: ["Mete ase = I understand", "Mente ase = I don't understand", "Merekenkan = I am reading"],
          explanation: "These are useful phrases for learning in Twi."
        }
      ]
    },

    {
      id: "9-3",
      type: "vocabulary",
      title: "Work & Occupations",
      icon: "briefcase-outline",
      description: "Learn the Twi names for common occupations",
      words: ["ɔdɔkita", "ɔkyerɛkyerɛni", "ɔsomfo", "ɔfumfuo", "ɔkwankyerɛfoɔ", "ɔtrafoɔ", "ɔsɛmfo", "ɔtɔfoɔ"],
      vocabulary: [
        {
          id: 17,
          english: "Doctor",
          native: "ɔdɔkita",
          pronunciation: "oh-doh-kee-tah"
          // audioUrl: "/audio/twi/odokita.mp3"
        },
        {
          id: 18,
          english: "Teacher",
          native: "ɔkyerɛkyerɛni",
          pronunciation: "oh-cheh-reh-cheh-reh-nee"
          // audioUrl: "/audio/twi/okyerеkyereni.mp3"
        },
        {
          id: 19,
          english: "Pastor / Priest",
          native: "ɔsomfo",
          pronunciation: "oh-sohm-foh"
          // audioUrl: "/audio/twi/osomfo.mp3"
        },
        {
          id: 20,
          english: "Farmer",
          native: "ɔfumfuo",
          pronunciation: "oh-foom-foo-oh"
          // audioUrl: "/audio/twi/ofumfuo.mp3"
        },
        {
          id: 21,
          english: "Driver / Guide",
          native: "ɔkwankyerɛfoɔ",
          pronunciation: "oh-kwan-cheh-reh-foh"
          // audioUrl: "/audio/twi/okwankyerefo.mp3"
        },
        {
          id: 22,
          english: "Trader / Seller",
          native: "ɔtrafoɔ",
          pronunciation: "oh-trah-foh"
          // audioUrl: "/audio/twi/otrafo.mp3"
        },
        {
          id: 23,
          english: "Judge / Lawyer",
          native: "ɔsɛmfo",
          pronunciation: "oh-sehm-foh"
          // audioUrl: "/audio/twi/osemfo.mp3"
        },
        {
          id: 24,
          english: "Buyer / Customer",
          native: "ɔtɔfoɔ",
          pronunciation: "oh-toh-foh"
          // audioUrl: "/audio/twi/otofoo.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Doctor' in Twi?",
          options: [
            { id: 1, text: "ɔdɔkita" },
            { id: 2, text: "ɔsomfo" },
            { id: 3, text: "ɔfumfuo" },
            { id: 4, text: "ɔsɛmfo" }
          ],
          correctOptionId: 1,
          hints: ["Treats sick people", "Starts with 'ɔd'"],
          explanation: "'ɔdɔkita' means 'Doctor' in Twi."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Farmer' in Twi?",
          options: [
            { id: 1, text: "ɔdɔkita" },
            { id: 2, text: "ɔsomfo" },
            { id: 3, text: "ɔfumfuo" },
            { id: 4, text: "ɔsɛmfo" }
          ],
          correctOptionId: 3,
          hints: ["Works on a farm", "Starts with 'ɔf'"],
          explanation: "'ɔfumfuo' means 'Farmer' in Twi."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Trader / Seller' in Twi?",
          options: [
            { id: 1, text: "ɔtrafoɔ" },
            { id: 2, text: "ɔkwankyerɛfoɔ" },
            { id: 3, text: "ɔsɛmfo" },
            { id: 4, text: "ɔtɔfoɔ" }
          ],
          correctOptionId: 1,
          hints: ["Sells goods", "Starts with 'ɔtr'"],
          explanation: "'ɔtrafoɔ' means 'Trader / Seller' in Twi."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Twi occupation to its English meaning.",
          pairs: [
            { id: 1, left: "ɔdɔkita", right: "Doctor" },
            { id: 2, left: "ɔkyerɛkyerɛni", right: "Teacher" },
            { id: 3, left: "ɔfumfuo", right: "Farmer" },
            { id: 4, left: "ɔtrafoɔ", right: "Trader / Seller" }
          ],
          hints: ["ɔdɔkita = doctor", "ɔkyerɛkyerɛni = teacher", "ɔfumfuo = farmer"],
          explanation: "These are common occupations in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-9",
    title: "Review: School & Work",
    icon: "refresh-outline",
    description: "Review the school, education, and occupation words you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'Teacher' in Twi?",
        options: [
          { id: 1, text: "ɔkyerɛkyerɛni" },
          { id: 2, text: "ɔsukuuni" },
          { id: 3, text: "akontaabuo" },
          { id: 4, text: "abakɔsɛm" }
        ],
        correctOptionId: 1,
        hints: ["A person who teaches"],
        explanation: "'ɔkyerɛkyerɛni' means 'Teacher' in Twi."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I understand' in Twi?",
        options: [
          { id: 1, text: "Mete ase" },
          { id: 2, text: "Mente ase" },
          { id: 3, text: "Merekenkan" },
          { id: 4, text: "Mereyɛ adwuma" }
        ],
        correctOptionId: 1,
        hints: ["te ase = understand"],
        explanation: "'Mete ase' means 'I understand' in Twi."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'Doctor' in Twi?",
        options: [
          { id: 1, text: "ɔdɔkita" },
          { id: 2, text: "ɔsomfo" },
          { id: 3, text: "ɔfumfuo" },
          { id: 4, text: "ɔsɛmfo" }
        ],
        correctOptionId: 1,
        hints: ["Treats sick people"],
        explanation: "'ɔdɔkita' means 'Doctor' in Twi."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am working' in Twi?",
        options: [
          { id: 1, text: "Merekenkan" },
          { id: 2, text: "Mereyɛ adwuma" },
          { id: 3, text: "Mete ase" },
          { id: 4, text: "Mente ase" }
        ],
        correctOptionId: 2,
        hints: ["adwuma = work", "Mere = I am"],
        explanation: "'Mereyɛ adwuma' means 'I am working' in Twi."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Twi word to its English meaning.",
        pairs: [
          { id: 1, left: "ɔsukuuni", right: "Student" },
          { id: 2, left: "akontaabuo", right: "Mathematics" },
          { id: 3, left: "ɔdɔkita", right: "Doctor" },
          { id: 4, left: "ɔfumfuo", right: "Farmer" },
          { id: 5, left: "Mente ase", right: "I don't understand" }
        ],
        hints: ["ɔsukuuni = student", "ɔdɔkita = doctor", "ɔfumfuo = farmer"],
        explanation: "These are key school and work words from this chapter."
      }
    ]
  }
};
