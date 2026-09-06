// data/course_content/twi/beginner/chapter6.js
export default {
  id: 6,
  title: "Shopping",
  description: "Learn how to shop, bargain, and talk about prices in Twi",
  icon: "cart-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "6-1",
      type: "vocabulary",
      title: "At the Market",
      icon: "storefront-outline",
      description: "Learn common words used at the market in Twi",
      words: ["ɔdɔm", "adetɔn", "sika", "ntama", "sika a ɛwɔ hɔ", "tɔ", "pe", "akraa"],
      vocabulary: [
        {
          id: 1,
          english: "Market",
          native: "ɔdɔm",
          pronunciation: "oh-dohm"
          // audioUrl: "/audio/twi/odom.mp3"
        },
        {
          id: 2,
          english: "Shop / Store",
          native: "adetɔn",
          pronunciation: "ah-deh-tohn"
          // audioUrl: "/audio/twi/adeton.mp3"
        },
        {
          id: 3,
          english: "Money",
          native: "sika",
          pronunciation: "see-kah"
          // audioUrl: "/audio/twi/sika.mp3"
        },
        {
          id: 4,
          english: "Cloth / Clothes",
          native: "ntama",
          pronunciation: "en-tah-mah"
          // audioUrl: "/audio/twi/ntama.mp3"
        },
        {
          id: 5,
          english: "Price",
          native: "bo",
          pronunciation: "boh"
          // audioUrl: "/audio/twi/bo.mp3"
        },
        {
          id: 6,
          english: "To buy",
          native: "tɔ",
          pronunciation: "toh"
          // audioUrl: "/audio/twi/to.mp3"
        },
        {
          id: 7,
          english: "To want / desire",
          native: "pɛ",
          pronunciation: "peh"
          // audioUrl: "/audio/twi/pe.mp3"
        },
        {
          id: 8,
          english: "A little / few",
          native: "akraa",
          pronunciation: "ah-krah-ah"
          // audioUrl: "/audio/twi/akraa.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Market' in Twi?",
          options: [
            { id: 1, text: "ɔdɔm" },
            { id: 2, text: "adetɔn" },
            { id: 3, text: "sika" },
            { id: 4, text: "ntama" }
          ],
          correctOptionId: 1,
          hints: ["Where people buy and sell", "Starts with 'ɔd'"],
          explanation: "'ɔdɔm' means 'Market' in Twi."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Money' in Twi?",
          options: [
            { id: 1, text: "ɔdɔm" },
            { id: 2, text: "adetɔn" },
            { id: 3, text: "sika" },
            { id: 4, text: "ntama" }
          ],
          correctOptionId: 3,
          hints: ["Used to pay for things", "Starts with 's'"],
          explanation: "'sika' means 'Money' in Twi."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Cloth / Clothes' in Twi?",
          options: [
            { id: 1, text: "ɔdɔm" },
            { id: 2, text: "adetɔn" },
            { id: 3, text: "sika" },
            { id: 4, text: "ntama" }
          ],
          correctOptionId: 4,
          hints: ["What you wear", "Starts with 'nt'"],
          explanation: "'ntama' means 'Cloth / Clothes' in Twi."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Twi word to its English meaning.",
          pairs: [
            { id: 1, left: "ɔdɔm", right: "Market" },
            { id: 2, left: "adetɔn", right: "Shop / Store" },
            { id: 3, left: "sika", right: "Money" },
            { id: 4, left: "ntama", right: "Cloth / Clothes" }
          ],
          hints: ["ɔdɔm = market", "sika = money", "ntama = clothes"],
          explanation: "These are common market words in Twi."
        }
      ]
    },

    {
      id: "6-2",
      type: "vocabulary",
      title: "Prices & Bargaining",
      icon: "pricetag-outline",
      description: "Learn how to ask prices and bargain in Twi",
      words: ["ɛbo sen?", "ɛbo yɛ den", "te sika mu", "sika a ɛwɔ hɔ", "tɔ so", "dɔ me bi", "mɛtɔ"],
      vocabulary: [
        {
          id: 9,
          english: "How much is it?",
          native: "ɛbo sen?",
          pronunciation: "eh-boh sen"
          // audioUrl: "/audio/twi/ebo_sen.mp3"
        },
        {
          id: 10,
          english: "It is expensive",
          native: "ɛbo yɛ den",
          pronunciation: "eh-boh yeh den"
          // audioUrl: "/audio/twi/ebo_ye_den.mp3"
        },
        {
          id: 11,
          english: "It is cheap",
          native: "ɛbo yɛ mmerɛw",
          pronunciation: "eh-boh yeh mmeh-reh-yeu"
          // audioUrl: "/audio/twi/ebo_ye_mmerew.mp3"
        },
        {
          id: 12,
          english: "To reduce the price",
          native: "te sika mu",
          pronunciation: "teh see-kah moo"
          // audioUrl: "/audio/twi/te_sika_mu.mp3"
        },
        {
          id: 13,
          english: "I will buy it",
          native: "mɛtɔ",
          pronunciation: "meh-toh"
          // audioUrl: "/audio/twi/meto.mp3"
        },
        {
          id: 14,
          english: "Give me a discount",
          native: "dɔ me bi",
          pronunciation: "doh meh bee"
          // audioUrl: "/audio/twi/do_me_bi.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'How much is it?' in Twi?",
          options: [
            { id: 1, text: "ɛbo sen?" },
            { id: 2, text: "ɛbo yɛ den" },
            { id: 3, text: "dɔ me bi" },
            { id: 4, text: "mɛtɔ" }
          ],
          correctOptionId: 1,
          hints: ["Asking about the price", "Ends with 'sen?'"],
          explanation: "'ɛbo sen?' means 'How much is it?' in Twi. It is used to ask the price."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'It is expensive' in Twi?",
          options: [
            { id: 1, text: "ɛbo yɛ den" },
            { id: 2, text: "ɛbo yɛ mmerɛw" },
            { id: 3, text: "dɔ me bi" },
            { id: 4, text: "mɛtɔ" }
          ],
          correctOptionId: 1,
          hints: ["den = hard/heavy", "Referring to a high price"],
          explanation: "'ɛbo yɛ den' means 'It is expensive'. Literally 'the price is hard'."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Give me a discount' in Twi?",
          options: [
            { id: 1, text: "ɛbo sen?" },
            { id: 2, text: "ɛbo yɛ den" },
            { id: 3, text: "dɔ me bi" },
            { id: 4, text: "mɛtɔ" }
          ],
          correctOptionId: 3,
          hints: ["dɔ me = give me", "bi = some"],
          explanation: "'dɔ me bi' literally means 'give me some' and is used to ask for a discount when bargaining."
        },
        {
          id: 204,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I will buy it' in Twi?",
          options: [
            { id: 1, text: "ɛbo sen?" },
            { id: 2, text: "ɛbo yɛ den" },
            { id: 3, text: "dɔ me bi" },
            { id: 4, text: "mɛtɔ" }
          ],
          correctOptionId: 4,
          hints: ["mɛ = I will", "tɔ = buy"],
          explanation: "'mɛtɔ' means 'I will buy it'. 'mɛ' means 'I will' and 'tɔ' means 'buy'."
        },
        {
          id: 205,
          type: "matching",
          instruction: "Match each Twi phrase to its English meaning.",
          pairs: [
            { id: 1, left: "ɛbo sen?", right: "How much is it?" },
            { id: 2, left: "ɛbo yɛ den", right: "It is expensive" },
            { id: 3, left: "ɛbo yɛ mmerɛw", right: "It is cheap" },
            { id: 4, left: "mɛtɔ", right: "I will buy it" }
          ],
          hints: ["ɛbo sen? = how much", "yɛ den = expensive", "mɛtɔ = I will buy"],
          explanation: "These are essential phrases for bargaining in Twi."
        }
      ]
    },

    {
      id: "6-3",
      type: "vocabulary",
      title: "Shopping Items",
      icon: "bag-handle-outline",
      description: "Learn the Twi names for things you might buy",
      words: ["ntama", "mpaboa", "koto", "nkɔnɔ", "aduru", "sukuu mu nneɛma", "ɔsɛɛfo", "pɔɔtoɔ"],
      vocabulary: [
        {
          id: 15,
          english: "Shoes",
          native: "mpaboa",
          pronunciation: "em-pah-boh-ah"
          // audioUrl: "/audio/twi/mpaboa.mp3"
        },
        {
          id: 16,
          english: "Hat / Cap",
          native: "koto",
          pronunciation: "koh-toh"
          // audioUrl: "/audio/twi/koto.mp3"
        },
        {
          id: 17,
          english: "Necklace / Beads",
          native: "nkɔnɔ",
          pronunciation: "en-koh-noh"
          // audioUrl: "/audio/twi/nkono.mp3"
        },
        {
          id: 18,
          english: "Medicine",
          native: "aduru",
          pronunciation: "ah-doo-roo"
          // audioUrl: "/audio/twi/aduru.mp3"
        },
        {
          id: 19,
          english: "School supplies",
          native: "sukuu mu nneɛma",
          pronunciation: "soo-koo moo n-neh-mah"
          // audioUrl: "/audio/twi/sukuu_mu_nneema.mp3"
        },
        {
          id: 20,
          english: "Basket",
          native: "ɔsɛɛfo",
          pronunciation: "oh-seh-ee-foh"
          // audioUrl: "/audio/twi/oseefo.mp3"
        },
        {
          id: 21,
          english: "Bag",
          native: "pɔɔtoɔ",
          pronunciation: "poh-oh-toh"
          // audioUrl: "/audio/twi/pooto.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Shoes' in Twi?",
          options: [
            { id: 1, text: "mpaboa" },
            { id: 2, text: "koto" },
            { id: 3, text: "nkɔnɔ" },
            { id: 4, text: "aduru" }
          ],
          correctOptionId: 1,
          hints: ["What you wear on your feet", "Starts with 'mp'"],
          explanation: "'mpaboa' means 'Shoes' in Twi."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Bag' in Twi?",
          options: [
            { id: 1, text: "mpaboa" },
            { id: 2, text: "koto" },
            { id: 3, text: "nkɔnɔ" },
            { id: 4, text: "pɔɔtoɔ" }
          ],
          correctOptionId: 4,
          hints: ["You carry things in it", "Starts with 'pɔ'"],
          explanation: "'pɔɔtoɔ' means 'Bag' in Twi."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Medicine' in Twi?",
          options: [
            { id: 1, text: "mpaboa" },
            { id: 2, text: "aduru" },
            { id: 3, text: "nkɔnɔ" },
            { id: 4, text: "pɔɔtoɔ" }
          ],
          correctOptionId: 2,
          hints: ["What you take when sick", "Starts with 'a'"],
          explanation: "'aduru' means 'Medicine' in Twi."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Twi word to its English meaning.",
          pairs: [
            { id: 1, left: "mpaboa", right: "Shoes" },
            { id: 2, left: "koto", right: "Hat / Cap" },
            { id: 3, left: "nkɔnɔ", right: "Necklace / Beads" },
            { id: 4, left: "aduru", right: "Medicine" },
            { id: 5, left: "pɔɔtoɔ", right: "Bag" }
          ],
          hints: ["mpaboa = shoes", "koto = hat", "aduru = medicine"],
          explanation: "These are common shopping items in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-6",
    title: "Review: Shopping",
    icon: "refresh-outline",
    description: "Review the market, price, and shopping vocabulary you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'Market' in Twi?",
        options: [
          { id: 1, text: "ɔdɔm" },
          { id: 2, text: "sika" },
          { id: 3, text: "ntama" },
          { id: 4, text: "aduru" }
        ],
        correctOptionId: 1,
        hints: ["Where people buy and sell"],
        explanation: "'ɔdɔm' means 'Market' in Twi."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'Money' in Twi?",
        options: [
          { id: 1, text: "ɔdɔm" },
          { id: 2, text: "sika" },
          { id: 3, text: "ntama" },
          { id: 4, text: "aduru" }
        ],
        correctOptionId: 2,
        hints: ["Used to pay"],
        explanation: "'sika' means 'Money' in Twi."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you ask 'How much is it?' in Twi?",
        options: [
          { id: 1, text: "ɛbo sen?" },
          { id: 2, text: "ɛbo yɛ den" },
          { id: 3, text: "dɔ me bi" },
          { id: 4, text: "mɛtɔ" }
        ],
        correctOptionId: 1,
        hints: ["Asking about the price"],
        explanation: "'ɛbo sen?' means 'How much is it?' in Twi."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'It is expensive' in Twi?",
        options: [
          { id: 1, text: "ɛbo yɛ den" },
          { id: 2, text: "ɛbo yɛ mmerɛw" },
          { id: 3, text: "dɔ me bi" },
          { id: 4, text: "mɛtɔ" }
        ],
        correctOptionId: 1,
        hints: ["den = hard/heavy"],
        explanation: "'ɛbo yɛ den' means 'It is expensive' in Twi."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Twi word to its English meaning.",
        pairs: [
          { id: 1, left: "ɔdɔm", right: "Market" },
          { id: 2, left: "sika", right: "Money" },
          { id: 3, left: "ntama", right: "Clothes" },
          { id: 4, left: "mpaboa", right: "Shoes" },
          { id: 5, left: "ɛbo sen?", right: "How much is it?" }
        ],
        hints: ["ɔdɔm = market", "sika = money", "mpaboa = shoes"],
        explanation: "These are key shopping words from this chapter."
      }
    ]
  }
};
