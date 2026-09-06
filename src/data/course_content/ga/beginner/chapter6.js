// data/course_content/ga/beginner/chapter6.js
export default {
  id: 6,
  title: "Shopping",
  description: "Learn words and phrases for shopping in Ga",
  icon: "cart-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "6-1",
      type: "words",
      title: "Shopping Words",
      icon: "cart-outline",
      description: "Learn common words used when shopping in Ga",
      words: ["Ɛɛfase", "Nɔ", "Lalas", "Dade", "Tɔɔ", "Kɔɔ"],
      vocabulary: [
        {
          id: 1,
          english: "Market",
          native: "Ɛɛfase",
          pronunciation: "eh-eh-fah-seh"
          // audioUrl: "/audio/ga/ɛɛfase.mp3"
        },
        {
          id: 2,
          english: "Shop / Store",
          native: "Nɔ",
          pronunciation: "noh"
          // audioUrl: "/audio/ga/nɔ.mp3"
        },
        {
          id: 3,
          english: "Price",
          native: "Lalas",
          pronunciation: "lah-lahs"
          // audioUrl: "/audio/ga/lalas.mp3"
        },
        {
          id: 4,
          english: "Money",
          native: "Dade",
          pronunciation: "dah-deh"
          // audioUrl: "/audio/ga/dade.mp3"
        },
        {
          id: 5,
          english: "Buy",
          native: "Tɔɔ",
          pronunciation: "toh-oh"
          // audioUrl: "/audio/ga/tɔɔ.mp3"
        },
        {
          id: 6,
          english: "Sell",
          native: "Kɔɔ",
          pronunciation: "koh-oh"
          // audioUrl: "/audio/ga/kɔɔ.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Market' in Ga?",
          options: [
            { id: 1, text: "Ɛɛfase" },
            { id: 2, text: "Nɔ" },
            { id: 3, text: "Lalas" },
            { id: 4, text: "Dade" }
          ],
          correctOptionId: 1,
          hints: ["Where you buy things"],
          explanation: "'Ɛɛfase' means 'Market' in Ga."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Money' in Ga?",
          options: [
            { id: 1, text: "Lalas" },
            { id: 2, text: "Dade" },
            { id: 3, text: "Tɔɔ" },
            { id: 4, text: "Kɔɔ" }
          ],
          correctOptionId: 2,
          hints: ["What you use to pay"],
          explanation: "'Dade' means 'Money' in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Buy' in Ga?",
          options: [
            { id: 1, text: "Lalas" },
            { id: 2, text: "Dade" },
            { id: 3, text: "Tɔɔ" },
            { id: 4, text: "Kɔɔ" }
          ],
          correctOptionId: 3,
          hints: ["You do this with items"],
          explanation: "'Tɔɔ' means 'Buy' in Ga."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ga word to its English meaning.",
          pairs: [
            { id: 1, left: "Ɛɛfase", right: "Market" },
            { id: 2, left: "Dade", right: "Money" },
            { id: 3, left: "Tɔɔ", right: "Buy" },
            { id: 4, left: "Kɔɔ", right: "Sell" }
          ],
          hints: ["Ɛɛfase = market", "Dade = money", "Tɔɔ = buy"],
          explanation: "These are common shopping words in Ga."
        }
      ]
    },

    {
      id: "6-2",
      type: "phrases",
      title: "At the Market",
      icon: "cart-outline",
      description: "Learn phrases for asking prices and buying at the market",
      words: ["Eenɛ lalas?", "Mitao", "Taamoo", "Lalas dɔŋ"],
      vocabulary: [
        {
          id: 7,
          english: "How much is it?",
          native: "Eenɛ lalas?",
          pronunciation: "eh-eh-neh lah-lahs"
          // audioUrl: "/audio/ga/eenɛ_lalas.mp3"
        },
        {
          id: 8,
          english: "I want...",
          native: "Mitao ...",
          pronunciation: "mee-tao"
          // audioUrl: "/audio/ga/mitao.mp3"
        },
        {
          id: 9,
          english: "Come / Please come",
          native: "Taamoo",
          pronunciation: "tah-ah-moh"
          // audioUrl: "/audio/ga/taamoo.mp3"
        },
        {
          id: 10,
          english: "Good price",
          native: "Lalas dɔŋ",
          pronunciation: "lah-lahs dong"
          // audioUrl: "/audio/ga/lalas_dɔŋ.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'How much is it?' in Ga?",
          options: [
            { id: 1, text: "Eenɛ lalas?" },
            { id: 2, text: "Mitao..." },
            { id: 3, text: "Taamoo" },
            { id: 4, text: "Lalas dɔŋ" }
          ],
          correctOptionId: 1,
          hints: ["Asking about price", "lalas = price"],
          explanation: "'Eenɛ lalas?' means 'How much is it?' in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I want...' in Ga?",
          options: [
            { id: 1, text: "Eenɛ lalas?" },
            { id: 2, text: "Mitao..." },
            { id: 3, text: "Taamoo" },
            { id: 4, text: "Lalas dɔŋ" }
          ],
          correctOptionId: 2,
          hints: ["Mi = I", "tao = want"],
          explanation: "'Mitao...' means 'I want...' in Ga."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Good price' in Ga?",
          options: [
            { id: 1, text: "Eenɛ lalas?" },
            { id: 2, text: "Mitao..." },
            { id: 3, text: "Taamoo" },
            { id: 4, text: "Lalas dɔŋ" }
          ],
          correctOptionId: 4,
          hints: ["lalas = price", "dɔŋ = good"],
          explanation: "'Lalas dɔŋ' means 'Good price' in Ga."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ga phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Eenɛ lalas?", right: "How much is it?" },
            { id: 2, left: "Mitao", right: "I want" },
            { id: 3, left: "Lalas dɔŋ", right: "Good price" },
            { id: 4, left: "Taamoo", right: "Please come" }
          ],
          hints: ["lalas = price", "Mitao = I want", "dɔŋ = good"],
          explanation: "These are useful phrases at the market in Ga."
        },
        {
          id: 205,
          type: "listening_multiple_choice",
          instruction: "Listen to the Ga audio and select the correct English translation.",
          question: "What does this Ga phrase mean in English?",
          audioUrl: "/audio/ga/eenɛ_lalas.mp3",
          options: [
            { id: 1, text: "I want" },
            { id: 2, text: "How much is it?" },
            { id: 3, text: "Come here" },
            { id: 4, text: "Good price" }
          ],
          correctOptionId: 2,
          hints: ["Asking about price"],
          explanation: "You heard 'Eenɛ lalas?' which means 'How much is it?' in Ga."
        }
      ]
    },

    {
      id: "6-3",
      type: "simple_sentences",
      title: "Bargaining",
      icon: "chatbox-ellipses-outline",
      description: "Learn phrases for bargaining in Ga",
      words: ["Mitao jaman", "Taafɛ", "Lalas dɔŋ", "Mɔ ni tɔɔ"],
      vocabulary: [
        {
          id: 11,
          english: "I want a discount",
          native: "Mitao jaman",
          pronunciation: "mee-tao jah-mahn"
          // audioUrl: "/audio/ga/mitao_jaman.mp3"
        },
        {
          id: 12,
          english: "Please",
          native: "Taafɛ",
          pronunciation: "tah-ah-feh"
          // audioUrl: "/audio/ga/taafɛ.mp3"
        },
        {
          id: 13,
          english: "That is too expensive",
          native: "Lalas dɔŋ",
          pronunciation: "lah-lahs dong"
          // audioUrl: "/audio/ga/lalas_dɔŋ.mp3"
        },
        {
          id: 14,
          english: "Buyer",
          native: "Mɔ ni tɔɔ",
          pronunciation: "moh nee toh-oh"
          // audioUrl: "/audio/ga/mɔ_ni_tɔɔ.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I want a discount' in Ga?",
          options: [
            { id: 1, text: "Mitao jaman" },
            { id: 2, text: "Taafɛ" },
            { id: 3, text: "Lalas dɔŋ" },
            { id: 4, text: "Mɔ ni tɔɔ" }
          ],
          correctOptionId: 1,
          hints: ["jaman = discount", "Mitao = I want"],
          explanation: "'Mitao jaman' means 'I want a discount' in Ga."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Please' in Ga?",
          options: [
            { id: 1, text: "Mitao jaman" },
            { id: 2, text: "Taafɛ" },
            { id: 3, text: "Lalas dɔŋ" },
            { id: 4, text: "Mɔ ni tɔɔ" }
          ],
          correctOptionId: 2,
          hints: ["Polite request"],
          explanation: "'Taafɛ' means 'Please' in Ga."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'That is too expensive' (in bargaining) in Ga?",
          options: [
            { id: 1, text: "Mitao jaman" },
            { id: 2, text: "Taafɛ" },
            { id: 3, text: "Lalas dɔŋ" },
            { id: 4, text: "Mɔ ni tɔɔ" }
          ],
          correctOptionId: 3,
          hints: ["lalas = price", "dɔŋ = high/expensive"],
          explanation: "'Lalas dɔŋ' means 'That is too expensive' when bargaining in Ga."
        },
        {
          id: 304,
          type: "drag_drop",
          instruction: "Complete the phrase 'I want a discount' by dragging the correct word.",
          sentence: "[_____] jaman",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Mitao", meaning: "I want" },
            { id: "opt2", text: "Taafɛ", meaning: "please" },
            { id: "opt3", text: "Lalas", meaning: "price" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Means 'I want'", "Followed by 'jaman' (discount)"],
          explanation: "Mitao jaman = I want a discount."
        }
      ]
    }
  ],

  review: {
    id: "review-6",
    title: "Review: Shopping",
    icon: "refresh-outline",
    description: "Review the shopping words and phrases you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Market' in Ga?",
        options: [
          { id: 1, text: "Ɛɛfase" },
          { id: 2, text: "Dade" },
          { id: 3, text: "Tɔɔ" },
          { id: 4, text: "Kɔɔ" }
        ],
        correctOptionId: 1,
        hints: ["Where you buy things"],
        explanation: "Ɛɛfase = Market."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "How do you say 'Money' in Ga?",
        options: [
          { id: 1, text: "Lalas" },
          { id: 2, text: "Dade" },
          { id: 3, text: "Tɔɔ" },
          { id: 4, text: "Kɔɔ" }
        ],
        correctOptionId: 2,
        hints: ["What you use to pay"],
        explanation: "Dade = Money."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you ask 'How much is it?' in Ga?",
        options: [
          { id: 1, text: "Eenɛ lalas?" },
          { id: 2, text: "Mitao..." },
          { id: 3, text: "Taamoo" },
          { id: 4, text: "Lalas dɔŋ" }
        ],
        correctOptionId: 1,
        hints: ["Asking about price"],
        explanation: "Eenɛ lalas? = How much is it?"
      },
      {
        id: 404,
        type: "matching",
        instruction: "Match each Ga word to its English meaning.",
        pairs: [
          { id: 1, left: "Ɛɛfase", right: "Market" },
          { id: 2, left: "Dade", right: "Money" },
          { id: 3, left: "Tɔɔ", right: "Buy" },
          { id: 4, left: "Kɔɔ", right: "Sell" }
        ],
        hints: ["Ɛɛfase = market", "Dade = money"],
        explanation: "These are key shopping words from this chapter."
      }
    ]
  }
};
