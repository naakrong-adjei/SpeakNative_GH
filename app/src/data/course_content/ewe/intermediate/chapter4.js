// data/course_content/ewe/intermediate/chapter4.js
export default {
  id: 4,
  title: "Describing People & Things",
  description: "Learn adjectives and phrases to describe people and things in Ewe",
  icon: "color-palette-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "4-1",
      type: "vocabulary",
      title: "Common Adjectives",
      icon: "options-outline",
      description: "Learn common Ewe adjectives to describe things",
      words: ["Nyo", "Vɔ̃", "Gagbe", "Kpuiɖe", "Didi", "Kpui", "Veve", "Ʋedzɛ"],
      vocabulary: [
        {
          id: 1,
          english: "Good",
          native: "Nyo",
          pronunciation: "nyoh"
          // audioUrl: "/audio/ewe/nyo.mp3"
        },
        {
          id: 2,
          english: "Bad",
          native: "Vɔ̃",
          pronunciation: "voh"
          // audioUrl: "/audio/ewe/vɔ̃.mp3"
        },
        {
          id: 3,
          english: "Big / Large",
          native: "Gagbe",
          pronunciation: "gah-gbeh"
          // audioUrl: "/audio/ewe/gagbe.mp3"
        },
        {
          id: 4,
          english: "Small",
          native: "Kpuiɖe",
          pronunciation: "kpoo-ee-deh"
          // audioUrl: "/audio/ewe/kpuiɖe.mp3"
        },
        {
          id: 5,
          english: "Tall / Long",
          native: "Didi",
          pronunciation: "dee-dee"
          // audioUrl: "/audio/ewe/didi.mp3"
        },
        {
          id: 6,
          english: "Short",
          native: "Kpui",
          pronunciation: "kpoo-ee"
          // audioUrl: "/audio/ewe/kpui.mp3"
        },
        {
          id: 7,
          english: "Sweet / Tasty",
          native: "Veve",
          pronunciation: "veh-veh"
          // audioUrl: "/audio/ewe/veve.mp3"
        },
        {
          id: 8,
          english: "Colourful / Bright",
          native: "Ʋedzɛ",
          pronunciation: "veh-jeh"
          // audioUrl: "/audio/ewe/ʋedzɛ.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe adjective.",
          question: "How do you say 'Good' in Ewe?",
          options: [
            { id: 1, text: "Nyo" },
            { id: 2, text: "Vɔ̃" },
            { id: 3, text: "Gagbe" },
            { id: 4, text: "Kpuiɖe" }
          ],
          correctOptionId: 1,
          hints: ["Opposite of bad", "Short word"],
          explanation: "'Nyo' means 'Good' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe adjective.",
          question: "How do you say 'Big / Large' in Ewe?",
          options: [
            { id: 1, text: "Gagbe" },
            { id: 2, text: "Kpuiɖe" },
            { id: 3, text: "Didi" },
            { id: 4, text: "Kpui" }
          ],
          correctOptionId: 1,
          hints: ["Opposite of small", "Starts with 'Ga'"],
          explanation: "'Gagbe' means 'Big / Large' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe adjective.",
          question: "How do you say 'Sweet / Tasty' in Ewe?",
          options: [
            { id: 1, text: "Veve" },
            { id: 2, text: "Ʋedzɛ" },
            { id: 3, text: "Nyo" },
            { id: 4, text: "Kpui" }
          ],
          correctOptionId: 1,
          hints: ["Tastes good", "Repeated sound"],
          explanation: "'Veve' means 'Sweet / Tasty' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe adjective to its English meaning.",
          pairs: [
            { id: 1, left: "Nyo", right: "Good" },
            { id: 2, left: "Vɔ̃", right: "Bad" },
            { id: 3, left: "Gagbe", right: "Big / Large" },
            { id: 4, left: "Kpuiɖe", right: "Small" }
          ],
          hints: ["Nyo = good", "Vɔ̃ = bad", "Gagbe = big"],
          explanation: "These are common adjectives in Ewe."
        }
      ]
    },

    {
      id: "4-2",
      type: "useful_phrases",
      title: "Describing People",
      icon: "happy-outline",
      description: "Learn Ewe words to describe people's appearance and character",
      words: ["Gagbe", "Kpuiɖe", "Dzidzɔtɔ", "Dzi kpekple", "Bɔbɔ", "Fefe", "Kplɔ", "Nufiala"],
      vocabulary: [
        {
          id: 9,
          english: "Tall",
          native: "Didi",
          pronunciation: "dee-dee"
          // audioUrl: "/audio/ewe/didi.mp3"
        },
        {
          id: 10,
          english: "Beautiful / Handsome",
          native: "Dzidzɔtɔ",
          pronunciation: "jee-joh-toh"
          // audioUrl: "/audio/ewe/dzidzɔtɔ.mp3"
        },
        {
          id: 11,
          english: "Kind / Gentle",
          native: "Dzi kpekple",
          pronunciation: "jee kpeh-kpleh"
          // audioUrl: "/audio/ewe/dzi_kpekple.mp3"
        },
        {
          id: 12,
          english: "Humble",
          native: "Bɔbɔ",
          pronunciation: "boh-boh"
          // audioUrl: "/audio/ewe/bɔbɔ.mp3"
        },
        {
          id: 13,
          english: "Funny / Playful",
          native: "Fefe",
          pronunciation: "feh-feh"
          // audioUrl: "/audio/ewe/fefe.mp3"
        },
        {
          id: 14,
          english: "Smart / Intelligent",
          native: "Kplɔ",
          pronunciation: "kploh"
          // audioUrl: "/audio/ewe/kplɔ.mp3"
        },
        {
          id: 15,
          english: "Teacher",
          native: "Nufiala",
          pronunciation: "noo-fee-ah-lah"
          // audioUrl: "/audio/ewe/nufiala.mp3"
        },
        {
          id: 16,
          english: "Child",
          native: "Ɖevi",
          pronunciation: "deh-vee"
          // audioUrl: "/audio/ewe/ɉevi.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Beautiful / Handsome' in Ewe?",
          options: [
            { id: 1, text: "Dzidzɔtɔ" },
            { id: 2, text: "Dzi kpekple" },
            { id: 3, text: "Bɔbɔ" },
            { id: 4, text: "Fefe" }
          ],
          correctOptionId: 1,
          hints: ["Used to praise appearance", "Starts with 'Dzi'"],
          explanation: "'Dzidzɔtɔ' means 'Beautiful / Handsome' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Kind / Gentle' in Ewe?",
          options: [
            { id: 1, text: "Dzi kpekple" },
            { id: 2, text: "Dzidzɔtɔ" },
            { id: 3, text: "Bɔbɔ" },
            { id: 4, text: "Kplɔ" }
          ],
          correctOptionId: 1,
          hints: ["Warm-hearted", "Contains 'dzi' (heart)"],
          explanation: "'Dzi kpekple' means 'Kind / Gentle' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Smart / Intelligent' in Ewe?",
          options: [
            { id: 1, text: "Kplɔ" },
            { id: 2, text: "Fefe" },
            { id: 3, text: "Bɔbɔ" },
            { id: 4, text: "Dzidzɔtɔ" }
          ],
          correctOptionId: 1,
          hints: ["Clever person", "Starts with 'Kpl'"],
          explanation: "'Kplɔ' means 'Smart / Intelligent' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Dzidzɔtɔ", right: "Beautiful / Handsome" },
            { id: 2, left: "Dzi kpekple", right: "Kind / Gentle" },
            { id: 3, left: "Bɔbɔ", right: "Humble" },
            { id: 4, left: "Kplɔ", right: "Smart / Intelligent" }
          ],
          hints: ["Dzidzɔtɔ = beautiful", "Dzi kpekple = kind", "Kplɔ = smart"],
          explanation: "These are words to describe people in Ewe."
        }
      ]
    },

    {
      id: "4-3",
      type: "complete_sentences",
      title: "Making Comparisons",
      icon: "git-compare-outline",
      description: "Learn how to make comparisons in Ewe",
      words: ["Wú kplɔ", "Wú dzidzɔ", "Gadĩ", "Vɔ̃", "Kpɔ wu", "Nu yeye", "Nu tsitsri", "Lolo wú"],
      vocabulary: [
        {
          id: 17,
          english: "Bigger than",
          native: "Lolo wú",
          pronunciation: "loh-loh woo"
          // audioUrl: "/audio/ewe/lolo_wú.mp3"
        },
        {
          id: 18,
          english: "Taller than",
          native: "Didi wú",
          pronunciation: "dee-dee woo"
          // audioUrl: "/audio/ewe/didi_wú.mp3"
        },
        {
          id: 19,
          english: "Better than",
          native: "Nyo wú",
          pronunciation: "nyoh woo"
          // audioUrl: "/audio/ewe/nyo_wú.mp3"
        },
        {
          id: 20,
          english: "Smaller than",
          native: "Kpuiɖe wú",
          pronunciation: "kpoo-ee-deh woo"
          // audioUrl: "/audio/ewe/kpuiɖe_wú.mp3"
        },
        {
          id: 21,
          english: "The best",
          native: "Enu nyui",
          pronunciation: "eh-noo nyoo-ee"
          // audioUrl: "/audio/ewe/enu_nyui.mp3"
        },
        {
          id: 22,
          english: "New",
          native: "Yeye",
          pronunciation: "yeh-yeh"
          // audioUrl: "/audio/ewe/yeye.mp3"
        },
        {
          id: 23,
          english: "Old",
          native: "Tsitsri",
          pronunciation: "tsee-tsee-ree"
          // audioUrl: "/audio/ewe/tsitsri.mp3"
        },
        {
          id: 24,
          english: "Equal / Same",
          native: "Esi ke",
          pronunciation: "eh-see keh"
          // audioUrl: "/audio/ewe/esi_ke.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Bigger than' in Ewe?",
          options: [
            { id: 1, text: "Lolo wú" },
            { id: 2, text: "Didi wú" },
            { id: 3, text: "Nyo wú" },
            { id: 4, text: "Kpuiɖe wú" }
          ],
          correctOptionId: 1,
          hints: ["lolo = big", "wú = than"],
          explanation: "'Lolo wú' means 'Bigger than'. 'lolo' means 'big' and 'wú' means 'than'."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Better than' in Ewe?",
          options: [
            { id: 1, text: "Nyo wú" },
            { id: 2, text: "Didi wú" },
            { id: 3, text: "Kpuiɖe wú" },
            { id: 4, text: "Lolo wú" }
          ],
          correctOptionId: 1,
          hints: ["nyo = good", "wú = than"],
          explanation: "'Nyo wú' means 'Better than'. 'nyo' means 'good' and 'wú' means 'than'."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'New' in Ewe?",
          options: [
            { id: 1, text: "Yeye" },
            { id: 2, text: "Tsitsri" },
            { id: 3, text: "Esi ke" },
            { id: 4, text: "Nyo" }
          ],
          correctOptionId: 1,
          hints: ["Opposite of old", "Repeated sound"],
          explanation: "'Yeye' means 'New' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Lolo wú", right: "Bigger than" },
            { id: 2, left: "Nyo wú", right: "Better than" },
            { id: 3, left: "Yeye", right: "New" },
            { id: 4, left: "Tsitsri", right: "Old" }
          ],
          hints: ["Lolo wú = bigger than", "Nyo wú = better than", "Yeye = new"],
          explanation: "These are useful for making comparisons in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-int-4",
    title: "Review: Describing People & Things",
    icon: "refresh-outline",
    description: "Review the adjectives and descriptive vocabulary you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ewe adjective.",
        question: "How do you say 'Good' in Ewe?",
        options: [
          { id: 1, text: "Nyo" },
          { id: 2, text: "Vɔ̃" },
          { id: 3, text: "Gagbe" },
          { id: 4, text: "Kpuiɖe" }
        ],
        correctOptionId: 1,
        hints: ["Opposite of bad"],
        explanation: "'Nyo' means 'Good' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Beautiful / Handsome' in Ewe?",
        options: [
          { id: 1, text: "Dzidzɔtɔ" },
          { id: 2, text: "Dzi kpekple" },
          { id: 3, text: "Bɔbɔ" },
          { id: 4, text: "Fefe" }
        ],
        correctOptionId: 1,
        hints: ["Praise of appearance"],
        explanation: "'Dzidzɔtɔ' means 'Beautiful / Handsome' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Bigger than' in Ewe?",
        options: [
          { id: 1, text: "Lolo wú" },
          { id: 2, text: "Didi wú" },
          { id: 3, text: "Nyo wú" },
          { id: 4, text: "Kpuiɖe wú" }
        ],
        correctOptionId: 1,
        hints: ["lolo = big", "wú = than"],
        explanation: "'Lolo wú' means 'Bigger than' in Ewe."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'New' in Ewe?",
        options: [
          { id: 1, text: "Yeye" },
          { id: 2, text: "Tsitsri" },
          { id: 3, text: "Esi ke" },
          { id: 4, text: "Nyo" }
        ],
        correctOptionId: 1,
        hints: ["Opposite of old"],
        explanation: "'Yeye' means 'New' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Nyo", right: "Good" },
          { id: 2, left: "Gagbe", right: "Big" },
          { id: 3, left: "Kpuiɖe", right: "Small" },
          { id: 4, left: "Dzidzɔtɔ", right: "Beautiful" },
          { id: 5, left: "Yeye", right: "New" }
        ],
        hints: ["Nyo = good", "Gagbe = big", "Yeye = new"],
        explanation: "These are key descriptive words from this chapter."
      }
    ]
  }
};
