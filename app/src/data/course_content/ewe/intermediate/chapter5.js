// data/course_content/ewe/intermediate/chapter5.js
export default {
  id: 5,
  title: "Festivals & Culture",
  description: "Learn Ewe words for festivals, cultural traditions, and celebrations",
  icon: "musical-notes-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "5-1",
      type: "vocabulary",
      title: "Festivals",
      icon: "calendar-outline",
      description: "Learn the Ewe names for festivals and celebrations",
      words: ["Ɖutsuƒe", "Aɖutsuƒe", "Asidzraƒe", "Dzawu", "Gbeho", "Senu", "Ketu", "Nunya"],
      vocabulary: [
        {
          id: 1,
          english: "Festival",
          native: "Dzogbese",
          pronunciation: "joh-gbeh-seh"
          // audioUrl: "/audio/ewe/dzogbese.mp3"
        },
        {
          id: 2,
          english: "Celebration",
          native: "Kple",
          pronunciation: "kpleh"
          // audioUrl: "/audio/ewe/kple.mp3"
        },
        {
          id: 3,
          english: "Feast / Big meal",
          native: "Senu",
          pronunciation: "seh-noo"
          // audioUrl: "/audio/ewe/senu.mp3"
        },
        {
          id: 4,
          english: "Dance",
          native: "Aɖuduru",
          pronunciation: "ah-doo-duh-roo"
          // audioUrl: "/audio/ewe/aɖuduru.mp3"
        },
        {
          id: 5,
          english: "Drum",
          native: "Vugo",
          pronunciation: "voo-goh"
          // audioUrl: "/audio/ewe/vugo.mp3"
        },
        {
          id: 6,
          english: "Song",
          native: "Hadzi",
          pronunciation: "hah-jee"
          // audioUrl: "/audio/ewe/hadzi.mp3"
        },
        {
          id: 7,
          english: "Traditional / Custom",
          native: "Keto",
          pronunciation: "keh-toh"
          // audioUrl: "/audio/ewe/keto.mp3"
        },
        {
          id: 8,
          english: "Chief / Leader",
          native: "Fia",
          pronunciation: "fee-ah"
          // audioUrl: "/audio/ewe/fia.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Festival' in Ewe?",
          options: [
            { id: 1, text: "Dzogbese" },
            { id: 2, text: "Kple" },
            { id: 3, text: "Vugo" },
            { id: 4, text: "Hadzi" }
          ],
          correctOptionId: 1,
          hints: ["A cultural celebration", "Starts with 'Dzo'"],
          explanation: "'Dzogbese' means 'Festival' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Drum' in Ewe?",
          options: [
            { id: 1, text: "Vugo" },
            { id: 2, text: "Hadzi" },
            { id: 3, text: "Aɖuduru" },
            { id: 4, text: "Dzogbese" }
          ],
          correctOptionId: 1,
          hints: ["Musical instrument", "Starts with 'V'"],
          explanation: "'Vugo' means 'Drum' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Song' in Ewe?",
          options: [
            { id: 1, text: "Hadzi" },
            { id: 2, text: "Vugo" },
            { id: 3, text: "Kple" },
            { id: 4, text: "Senu" }
          ],
          correctOptionId: 1,
          hints: ["What you sing", "Starts with 'H'"],
          explanation: "'Hadzi' means 'Song' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe festival word to its English meaning.",
          pairs: [
            { id: 1, left: "Dzogbese", right: "Festival" },
            { id: 2, left: "Kple", right: "Celebration" },
            { id: 3, left: "Vugo", right: "Drum" },
            { id: 4, left: "Hadzi", right: "Song" }
          ],
          hints: ["Dzogbese = festival", "Kple = celebration", "Vugo = drum"],
          explanation: "These are common festival words in Ewe."
        }
      ]
    },

    {
      id: "5-2",
      type: "useful_phrases",
      title: "Cultural Traditions",
      icon: "people-outline",
      description: "Learn Ewe words about customs and traditions",
      words: ["Keto", "Fia", "Nufiala", "Agbezuge", "Togbo", "Mama", "Nufiame", "Kunya"],
      vocabulary: [
        {
          id: 9,
          english: "Tradition / Custom",
          native: "Keto",
          pronunciation: "keh-toh"
          // audioUrl: "/audio/ewe/keto.mp3"
        },
        {
          id: 10,
          english: "Chief / Elder",
          native: "Fia",
          pronunciation: "fee-ah"
          // audioUrl: "/audio/ewe/fia.mp3"
        },
        {
          id: 11,
          english: "Elder / Mentor",
          native: "Nufiala",
          pronunciation: "noo-fee-ah-lah"
          // audioUrl: "/audio/ewe/nufiala.mp3"
        },
        {
          id: 12,
          english: "Wisdom",
          native: "Agbezuge",
          pronunciation: "ah-gbeh-zoo-geh"
          // audioUrl: "/audio/ewe/agbezuge.mp3"
        },
        {
          id: 13,
          english: "Grandfather",
          native: "Togbo",
          pronunciation: "toh-gboh"
          // audioUrl: "/audio/ewe/togbo.mp3"
        },
        {
          id: 14,
          english: "Grandmother",
          native: "Mama",
          pronunciation: "mah-mah"
          // audioUrl: "/audio/ewe/mama.mp3"
        },
        {
          id: 15,
          english: "Learning / Knowledge",
          native: "Nufiame",
          pronunciation: "noo-fee-ah-meh"
          // audioUrl: "/audio/ewe/nufiame.mp3"
        },
        {
          id: 16,
          english: "Respect / Honour",
          native: "Bubudede",
          pronunciation: "boo-boo-deh-deh"
          // audioUrl: "/audio/ewe/bubudede.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Tradition / Custom' in Ewe?",
          options: [
            { id: 1, text: "Keto" },
            { id: 2, text: "Fia" },
            { id: 3, text: "Togbo" },
            { id: 4, text: "Mama" }
          ],
          correctOptionId: 1,
          hints: ["Handed-down custom", "Starts with 'K'"],
          explanation: "'Keto' means 'Tradition / Custom' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Grandfather' in Ewe?",
          options: [
            { id: 1, text: "Togbo" },
            { id: 2, text: "Mama" },
            { id: 3, text: "Fia" },
            { id: 4, text: "Keto" }
          ],
          correctOptionId: 1,
          hints: ["Your father's father", "Starts with 'T'"],
          explanation: "'Togbo' means 'Grandfather' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Wisdom' in Ewe?",
          options: [
            { id: 1, text: "Agbezuge" },
            { id: 2, text: "Bubudede" },
            { id: 3, text: "Nufiame" },
            { id: 4, text: "Keto" }
          ],
          correctOptionId: 1,
          hints: ["Valuable knowledge", "Starts with 'Ag'"],
          explanation: "'Agbezuge' means 'Wisdom' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe cultural word to its English meaning.",
          pairs: [
            { id: 1, left: "Keto", right: "Tradition / Custom" },
            { id: 2, left: "Fia", right: "Chief / Elder" },
            { id: 3, left: "Togbo", right: "Grandfather" },
            { id: 4, left: "Mama", right: "Grandmother" }
          ],
          hints: ["Keto = custom", "Fia = chief", "Togbo = grandfather"],
          explanation: "These are important cultural words in Ewe."
        }
      ]
    },

    {
      id: "5-3",
      type: "complete_sentences",
      title: "Celebrating",
      icon: "sparkles-outline",
      description: "Learn Ewe phrases for celebrating and joining in",
      words: ["Dzidzɔkpɔkpɔ", "Míekɔ", "Ɖo", "Veve", "Mía dzidzɔ", "Ɖo sɔ", "Dzidzɔkpe", "Nadaa"],
      vocabulary: [
        {
          id: 17,
          english: "To celebrate",
          native: "Dzidzɔkpɔkpɔ",
          pronunciation: "jee-joh-kpoh-kpoh"
          // audioUrl: "/audio/ewe/dzidzɔkpɔkpɔ.mp3"
        },
        {
          id: 18,
          english: "We are happy",
          native: "Míekɔ dzidzɔ",
          pronunciation: "mee-eh-koh jee-joh"
          // audioUrl: "/audio/ewe/míekɔ_dzidzɔ.mp3"
        },
        {
          id: 19,
          english: "To dance",
          native: "Ɖo",
          pronunciation: "doh"
          // audioUrl: "/audio/ewe/ɉo.mp3"
        },
        {
          id: 20,
          english: "Sweet / Joyful",
          native: "Veve",
          pronunciation: "veh-veh"
          // audioUrl: "/audio/ewe/veve.mp3"
        },
        {
          id: 21,
          english: "Let us rejoice",
          native: "Mía dzidzɔ",
          pronunciation: "mee-ah jee-joh"
          // audioUrl: "/audio/ewe/mía_dzidzɔ.mp3"
        },
        {
          id: 22,
          english: "To gather / assemble",
          native: "Ɖo sɔ",
          pronunciation: "doh soh"
          // audioUrl: "/audio/ewe/ɉo_sɔ.mp3"
        },
        {
          id: 23,
          english: "Joy / Excitement",
          native: "Dzidzɔkpe",
          pronunciation: "jee-joh-kpeh"
          // audioUrl: "/audio/ewe/dzidzɔkpe.mp3"
        },
        {
          id: 24,
          english: "Welcome / Greetings",
          native: "Nadaa",
          pronunciation: "nah-dah-ah"
          // audioUrl: "/audio/ewe/nadaa.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'To celebrate' in Ewe?",
          options: [
            { id: 1, text: "Dzidzɔkpɔkpɔ" },
            { id: 2, text: "Míekɔ dzidzɔ" },
            { id: 3, text: "Ɖo" },
            { id: 4, text: "Veve" }
          ],
          correctOptionId: 1,
          hints: ["To mark a happy occasion", "Contains 'dzidzɔ' (joy)"],
          explanation: "'Dzidzɔkpɔkpɔ' means 'To celebrate' in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'To dance' in Ewe?",
          options: [
            { id: 1, text: "Ɖo" },
            { id: 2, text: "Veve" },
            { id: 3, text: "Nadaa" },
            { id: 4, text: "Dzidzɔkpe" }
          ],
          correctOptionId: 1,
          hints: ["Moving to music", "Short word"],
          explanation: "'Ɖo' means 'To dance' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Let us rejoice' in Ewe?",
          options: [
            { id: 1, text: "Mía dzidzɔ" },
            { id: 2, text: "Míekɔ dzidzɔ" },
            { id: 3, text: "Ɖo sɔ" },
            { id: 4, text: "Nadaa" }
          ],
          correctOptionId: 1,
          hints: ["Encouraging celebration", "Contains 'dzidzɔ' (joy)"],
          explanation: "'Mía dzidzɔ' means 'Let us rejoice' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe celebrating word to its English meaning.",
          pairs: [
            { id: 1, left: "Dzidzɔkpɔkpɔ", right: "To celebrate" },
            { id: 2, left: "Ɖo", right: "To dance" },
            { id: 3, left: "Veve", right: "Sweet / Joyful" },
            { id: 4, left: "Nadaa", right: "Welcome" }
          ],
          hints: ["Dzidzɔkpɔkpɔ = to celebrate", "Ɖo = to dance", "Nadaa = welcome"],
          explanation: "These are useful words for celebrating in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-int-5",
    title: "Review: Festivals & Culture",
    icon: "refresh-outline",
    description: "Review the festival and cultural vocabulary you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Festival' in Ewe?",
        options: [
          { id: 1, text: "Dzogbese" },
          { id: 2, text: "Kple" },
          { id: 3, text: "Vugo" },
          { id: 4, text: "Hadzi" }
        ],
        correctOptionId: 1,
        hints: ["A cultural celebration"],
        explanation: "'Dzogbese' means 'Festival' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Drum' in Ewe?",
        options: [
          { id: 1, text: "Vugo" },
          { id: 2, text: "Hadzi" },
          { id: 3, text: "Aɖuduru" },
          { id: 4, text: "Dzogbese" }
        ],
        correctOptionId: 1,
        hints: ["Musical instrument"],
        explanation: "'Vugo' means 'Drum' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Tradition / Custom' in Ewe?",
        options: [
          { id: 1, text: "Keto" },
          { id: 2, text: "Fia" },
          { id: 3, text: "Togbo" },
          { id: 4, text: "Mama" }
        ],
        correctOptionId: 1,
        hints: ["Handed-down custom"],
        explanation: "'Keto' means 'Tradition / Custom' in Ewe."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Let us rejoice' in Ewe?",
        options: [
          { id: 1, text: "Mía dzidzɔ" },
          { id: 2, text: "Míekɔ dzidzɔ" },
          { id: 3, text: "Ɖo sɔ" },
          { id: 4, text: "Nadaa" }
        ],
        correctOptionId: 1,
        hints: ["Encouraging celebration"],
        explanation: "'Mía dzidzɔ' means 'Let us rejoice' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Dzogbese", right: "Festival" },
          { id: 2, left: "Kple", right: "Celebration" },
          { id: 3, left: "Vugo", right: "Drum" },
          { id: 4, left: "Hadzi", right: "Song" },
          { id: 5, left: "Fia", right: "Chief" }
        ],
        hints: ["Dzogbese = festival", "Kple = celebration", "Vugo = drum"],
        explanation: "These are key festival and culture words from this chapter."
      }
    ]
  }
};
