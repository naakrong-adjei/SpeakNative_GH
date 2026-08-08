// data/course_content/ewe/beginner/chapter8.js
export default {
  id: 8,
  title: "Daily Activities",
  description: "Learn to talk about your daily routine and everyday activities in Ewe",
  icon: "sunny-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "8-1",
      type: "words",
      title: "Waking & Morning",
      icon: "sunny-outline",
      description: "Learn words for your morning routine in Ewe",
      words: ["Fɔ", "Togli", "Ɖoɖo ɖokui", "Ŋdi nuɖuɖu", "Yi dɔwɔƒe", "Yi sukuku", "Yɔ", "Amegbetɔ"],
      vocabulary: [
        {
          id: 1,
          english: "To wake up",
          native: "Fɔ",
          pronunciation: "foh"
          // audioUrl: "/audio/ewe/fɔ.mp3"
        },
        {
          id: 2,
          english: "To wash / bathe",
          native: "Togli",
          pronunciation: "toh-glee"
          // audioUrl: "/audio/ewe/togli.mp3"
        },
        {
          id: 3,
          english: "To get ready / dress",
          native: "Ɖoɖo ɖokui",
          pronunciation: "doh-doh doh-koo-ee"
          // audioUrl: "/audio/ewe/ɉoɖo_ɖokui.mp3"
        },
        {
          id: 4,
          english: "Breakfast",
          native: "Ŋdi nuɖuɖu",
          pronunciation: "ng-dee noo-doo-doo"
          // audioUrl: "/audio/ewe/ŋdi_nuɖuɖu.mp3"
        },
        {
          id: 5,
          english: "To go to work",
          native: "Yi dɔwɔƒe",
          pronunciation: "yee doh-woh-feh"
          // audioUrl: "/audio/ewe/yi_dɔwɔƒe.mp3"
        },
        {
          id: 6,
          english: "To go to school",
          native: "Yi sukuku",
          pronunciation: "yee soo-koo-koo"
          // audioUrl: "/audio/ewe/yi_sukuku.mp3"
        },
        {
          id: 7,
          english: "To call / invite",
          native: "Yɔ",
          pronunciation: "yoh"
          // audioUrl: "/audio/ewe/yɔ.mp3"
        },
        {
          id: 8,
          english: "Person",
          native: "Amegbetɔ",
          pronunciation: "ah-meh-gbeh-toh"
          // audioUrl: "/audio/ewe/amegbetɔ.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'To wake up' in Ewe?",
          options: [
            { id: 1, text: "Fɔ" },
            { id: 2, text: "Togli" },
            { id: 3, text: "Ɖoɖo ɖokui" },
            { id: 4, text: "Ŋdi nuɖuɖu" }
          ],
          correctOptionId: 1,
          hints: ["First thing in the morning", "Short word"],
          explanation: "'Fɔ' means 'To wake up' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'To go to school' in Ewe?",
          options: [
            { id: 1, text: "Yi dɔwɔƒe" },
            { id: 2, text: "Yi sukuku" },
            { id: 3, text: "Yɔ" },
            { id: 4, text: "Togli" }
          ],
          correctOptionId: 2,
          hints: ["sukuku = school", "Yi = go"],
          explanation: "'Yi sukuku' means 'To go to school'. 'sukuku' means 'school'."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'To go to work' in Ewe?",
          options: [
            { id: 1, text: "Yi dɔwɔƒe" },
            { id: 2, text: "Yi sukuku" },
            { id: 3, text: "Yɔ" },
            { id: 4, text: "Togli" }
          ],
          correctOptionId: 1,
          hints: ["dɔwɔƒe = workplace", "Yi = go"],
          explanation: "'Yi dɔwɔƒe' means 'To go to work'. 'dɔwɔƒe' means 'workplace'."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Fɔ", right: "To wake up" },
            { id: 2, left: "Togli", right: "To wash / bathe" },
            { id: 3, left: "Yi dɔwɔƒe", right: "To go to work" },
            { id: 4, left: "Yi sukuku", right: "To go to school" }
          ],
          hints: ["Fɔ = to wake up", "Yi dɔwɔƒe = go to work", "Yi sukuku = go to school"],
          explanation: "These are key morning routine words in Ewe."
        }
      ]
    },

    {
      id: "8-2",
      type: "phrases",
      title: "Daily Chores",
      icon: "home-outline",
      description: "Learn words for household chores and daily tasks in Ewe",
      words: ["Da nuɖuɖu", "Zi", "Wɔ dɔ", "Tsɔ nu le", "Kɔ", "Kpɔ tsi", "Nyala aʋu", "Dɔ alɔ̃"],
      vocabulary: [
        {
          id: 9,
          english: "To cook",
          native: "Da nuɖuɖu",
          pronunciation: "dah noo-doo-doo"
          // audioUrl: "/audio/ewe/da_nuɖuɖu.mp3"
        },
        {
          id: 10,
          english: "To clean / sweep",
          native: "Zi",
          pronunciation: "zee"
          // audioUrl: "/audio/ewe/zi.mp3"
        },
        {
          id: 11,
          english: "To work",
          native: "Wɔ dɔ",
          pronunciation: "woh doh"
          // audioUrl: "/audio/ewe/wɔ_dɔ.mp3"
        },
        {
          id: 12,
          english: "To wash (dishes)",
          native: "Tsɔ nu le",
          pronunciation: "tsuh noo leh"
          // audioUrl: "/audio/ewe/tsɔ_nu_le.mp3"
        },
        {
          id: 13,
          english: "To tidy / keep",
          native: "Kɔ",
          pronunciation: "koh"
          // audioUrl: "/audio/ewe/kɔ.mp3"
        },
        {
          id: 14,
          english: "To fetch water",
          native: "Kpɔ tsi",
          pronunciation: "kpoh tsee"
          // audioUrl: "/audio/ewe/kpɔ_tsi.mp3"
        },
        {
          id: 15,
          english: "To wash clothes",
          native: "Nyala aʋu",
          pronunciation: "nyah-lah ah-voo"
          // audioUrl: "/audio/ewe/nyala_aʋu.mp3"
        },
        {
          id: 16,
          english: "To sleep",
          native: "Dɔ alɔ̃",
          pronunciation: "doh ah-loh"
          // audioUrl: "/audio/ewe/dɔ_alɔ̃.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'To cook' in Ewe?",
          options: [
            { id: 1, text: "Da nuɖuɖu" },
            { id: 2, text: "Zi" },
            { id: 3, text: "Tsɔ nu le" },
            { id: 4, text: "Kɔ" }
          ],
          correctOptionId: 1,
          hints: ["Preparing food", "Contains 'nuɖuɖu' (food)"],
          explanation: "'Da nuɖuɖu' means 'To cook'. 'nuɖuɖu' means 'food'."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'To clean / sweep' in Ewe?",
          options: [
            { id: 1, text: "Da nuɖuɖu" },
            { id: 2, text: "Zi" },
            { id: 3, text: "Tsɔ nu le" },
            { id: 4, text: "Kɔ" }
          ],
          correctOptionId: 2,
          hints: ["Making things tidy", "Short word"],
          explanation: "'Zi' means 'To clean / sweep' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'To sleep' in Ewe?",
          options: [
            { id: 1, text: "Dɔ alɔ̃" },
            { id: 2, text: "Kpɔ tsi" },
            { id: 3, text: "Nyala aʋu" },
            { id: 4, text: "Tsɔ nu le" }
          ],
          correctOptionId: 1,
          hints: ["What you do at night", "Contains 'alɔ̃' (sleep)"],
          explanation: "'Dɔ alɔ̃' means 'To sleep' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Da nuɖuɖu", right: "To cook" },
            { id: 2, left: "Zi", right: "To clean / sweep" },
            { id: 3, left: "Tsɔ nu le", right: "To wash dishes" },
            { id: 4, left: "Dɔ alɔ̃", right: "To sleep" }
          ],
          hints: ["Da nuɖuɖu = to cook", "Zi = to clean", "Dɔ alɔ̃ = to sleep"],
          explanation: "These are common daily chore words in Ewe."
        }
      ]
    },

    {
      id: "8-3",
      type: "simple_sentences",
      title: "Leisure & Activities",
      icon: "game-controller-outline",
      description: "Learn words for leisure and free-time activities in Ewe",
      words: ["Bua", "Xlẽ", "Bɔl", "Ko", "Lala", "Kpe dɔ", "Yi", "Va"],
      vocabulary: [
        {
          id: 17,
          english: "To think / reason",
          native: "Bua",
          pronunciation: "boo-ah"
          // audioUrl: "/audio/ewe/bua.mp3"
        },
        {
          id: 18,
          english: "To read",
          native: "Xlẽ",
          pronunciation: "hl-eh"
          // audioUrl: "/audio/ewe/xlẽ.mp3"
        },
        {
          id: 19,
          english: "Football / Ball",
          native: "Bɔl",
          pronunciation: "bohl"
          // audioUrl: "/audio/ewe/bɔl.mp3"
        },
        {
          id: 20,
          english: "To laugh / smile",
          native: "Ko",
          pronunciation: "koh"
          // audioUrl: "/audio/ewe/ko.mp3"
        },
        {
          id: 21,
          english: "To wait",
          native: "Lala",
          pronunciation: "lah-lah"
          // audioUrl: "/audio/ewe/lala.mp3"
        },
        {
          id: 22,
          english: "To try / make an effort",
          native: "Kpe dɔ",
          pronunciation: "kpeh doh"
          // audioUrl: "/audio/ewe/kpe_dɔ.mp3"
        },
        {
          id: 23,
          english: "To go",
          native: "Yi",
          pronunciation: "yee"
          // audioUrl: "/audio/ewe/yi.mp3"
        },
        {
          id: 24,
          english: "To come",
          native: "Va",
          pronunciation: "vah"
          // audioUrl: "/audio/ewe/va.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'To read' in Ewe?",
          options: [
            { id: 1, text: "Xlẽ" },
            { id: 2, text: "Bua" },
            { id: 3, text: "Ko" },
            { id: 4, text: "Lala" }
          ],
          correctOptionId: 1,
          hints: ["What you do with a book", "Starts with 'X'"],
          explanation: "'Xlẽ' means 'To read' in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'To come' in Ewe?",
          options: [
            { id: 1, text: "Yi" },
            { id: 2, text: "Va" },
            { id: 3, text: "Lala" },
            { id: 4, text: "Ko" }
          ],
          correctOptionId: 2,
          hints: ["Opposite of 'go'", "Starts with 'V'"],
          explanation: "'Va' means 'To come' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Football / Ball' in Ewe?",
          options: [
            { id: 1, text: "Bɔl" },
            { id: 2, text: "Xlẽ" },
            { id: 3, text: "Bua" },
            { id: 4, text: "Ko" }
          ],
          correctOptionId: 1,
          hints: ["Sport played with a ball", "Contains 'B'"],
          explanation: "'Bɔl' means 'Football / Ball' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Xlẽ", right: "To read" },
            { id: 2, left: "Bɔl", right: "Football / Ball" },
            { id: 3, left: "Ko", right: "To laugh / smile" },
            { id: 4, left: "Lala", right: "To wait" }
          ],
          hints: ["Xlẽ = to read", "Bɔl = ball", "Ko = to laugh"],
          explanation: "These are common leisure activity words in Ewe."
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
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'To wake up' in Ewe?",
        options: [
          { id: 1, text: "Fɔ" },
          { id: 2, text: "Togli" },
          { id: 3, text: "Ɖoɖo ɖokui" },
          { id: 4, text: "Ŋdi nuɖuɖu" }
        ],
        correctOptionId: 1,
        hints: ["First thing in the morning"],
        explanation: "'Fɔ' means 'To wake up' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'To cook' in Ewe?",
        options: [
          { id: 1, text: "Da nuɖuɖu" },
          { id: 2, text: "Zi" },
          { id: 3, text: "Tsɔ nu le" },
          { id: 4, text: "Kɔ" }
        ],
        correctOptionId: 1,
        hints: ["Preparing food"],
        explanation: "'Da nuɖuɖu' means 'To cook' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'To go to school' in Ewe?",
        options: [
          { id: 1, text: "Yi dɔwɔƒe" },
          { id: 2, text: "Yi sukuku" },
          { id: 3, text: "Yɔ" },
          { id: 4, text: "Togli" }
        ],
        correctOptionId: 2,
        hints: ["sukuku = school"],
        explanation: "'Yi sukuku' means 'To go to school'."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'To come' in Ewe?",
        options: [
          { id: 1, text: "Yi" },
          { id: 2, text: "Va" },
          { id: 3, text: "Lala" },
          { id: 4, text: "Ko" }
        ],
        correctOptionId: 2,
        hints: ["Opposite of 'go'"],
        explanation: "'Va' means 'To come' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Fɔ", right: "To wake up" },
          { id: 2, left: "Da nuɖuɖu", right: "To cook" },
          { id: 3, left: "Xlẽ", right: "To read" },
          { id: 4, left: "Yi sukuku", right: "To go to school" },
          { id: 5, left: "Dɔ alɔ̃", right: "To sleep" }
        ],
        hints: ["Fɔ = to wake up", "Da nuɖuɖu = to cook", "Xlẽ = to read"],
        explanation: "These are key daily activity words from this chapter."
      }
    ]
  }
};

