// data/course_content/ewe/beginner/chapter6.js
export default {
  id: 6,
  title: "Shopping",
  description: "Learn how to shop, bargain, and talk about prices in Ewe",
  icon: "cart-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "6-1",
      type: "words",
      title: "At the Market",
      icon: "storefront-outline",
      description: "Learn common words used at the market in Ewe",
      words: ["Asitsatsa", "Asitsala", "Ga", "Aʋuƒuti", "Aɖuɖu", "Fle", "Di", "Ɖe aaɖo"],
      vocabulary: [
        {
          id: 1,
          english: "Market",
          native: "Asitsatsa",
          pronunciation: "ah-see-tsah-tsah"
          // audioUrl: "/audio/ewe/asitsatsa.mp3"
        },
        {
          id: 2,
          english: "Shop / Store",
          native: "Asidzraƒe",
          pronunciation: "ah-see-jrah-feh"
          // audioUrl: "/audio/ewe/asidzrafe.mp3"
        },
        {
          id: 3,
          english: "Money",
          native: "Ga",
          pronunciation: "gah"
          // audioUrl: "/audio/ewe/ga.mp3"
        },
        {
          id: 4,
          english: "Cloth / Clothes",
          native: "Aʋuƒuti",
          pronunciation: "ah-voo-foo-tee"
          // audioUrl: "/audio/ewe/aʋuƒuti.mp3"
        },
        {
          id: 5,
          english: "Food",
          native: "Aɖuɖu",
          pronunciation: "ah-doo-doo"
          // audioUrl: "/audio/ewe/aɖuɖu.mp3"
        },
        {
          id: 6,
          english: "To buy",
          native: "Fle",
          pronunciation: "fleh"
          // audioUrl: "/audio/ewe/fle.mp3"
        },
        {
          id: 7,
          english: "To want / desire",
          native: "Di be",
          pronunciation: "dee beh"
          // audioUrl: "/audio/ewe/di_be.mp3"
        },
        {
          id: 8,
          english: "A little / few",
          native: "Ɖe aaɖo",
          pronunciation: "deh ah-doh"
          // audioUrl: "/audio/ewe/ɖe_aaɖo.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Market' in Ewe?",
          options: [
            { id: 1, text: "Asitsatsa" },
            { id: 2, text: "Asidzraƒe" },
            { id: 3, text: "Ga" },
            { id: 4, text: "Aɖuɖu" }
          ],
          correctOptionId: 1,
          hints: ["Where people buy and sell", "Starts with 'Asit'"],
          explanation: "'Asitsatsa' means 'Market' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Money' in Ewe?",
          options: [
            { id: 1, text: "Asitsatsa" },
            { id: 2, text: "Asidzraƒe" },
            { id: 3, text: "Ga" },
            { id: 4, text: "Aɖuɖu" }
          ],
          correctOptionId: 3,
          hints: ["Used to pay for things", "Short word"],
          explanation: "'Ga' means 'Money' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Cloth / Clothes' in Ewe?",
          options: [
            { id: 1, text: "Asitsatsa" },
            { id: 2, text: "Aʋuƒuti" },
            { id: 3, text: "Aɖuɖu" },
            { id: 4, text: "Ga" }
          ],
          correctOptionId: 2,
          hints: ["What you wear", "Contains 'Aʋu'"],
          explanation: "'Aʋuƒuti' means 'Cloth / Clothes' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Asitsatsa", right: "Market" },
            { id: 2, left: "Asidzraƒe", right: "Shop / Store" },
            { id: 3, left: "Ga", right: "Money" },
            { id: 4, left: "Aʋuƒuti", right: "Cloth / Clothes" }
          ],
          hints: ["Asitsatsa = market", "Ga = money", "Aʋuƒuti = clothes"],
          explanation: "These are common market words in Ewe."
        }
      ]
    },

    {
      id: "6-2",
      type: "phrases",
      title: "Prices & Bargaining",
      icon: "pricetag-outline",
      description: "Learn how to ask prices and bargain in Ewe",
      words: ["Ga nyae?", "Ewɔ xɔ", "Eye olɔ̃", "Te ga ɖeɖi", "Mafle", "Na mèwui", "Ga ɖeka"],
      vocabulary: [
        {
          id: 9,
          english: "How much is it?",
          native: "Ga nyae?",
          pronunciation: "gah nyah-eh"
          // audioUrl: "/audio/ewe/ga_nyae.mp3"
        },
        {
          id: 10,
          english: "It is expensive",
          native: "Ewɔ xɔ",
          pronunciation: "eh-woh hoh"
          // audioUrl: "/audio/ewe/ewɔ_xɔ.mp3"
        },
        {
          id: 11,
          english: "It is cheap",
          native: "Eye olɔ̃",
          pronunciation: "eh-yeh oh-loh"
          // audioUrl: "/audio/ewe/eye_olɔ̃.mp3"
        },
        {
          id: 12,
          english: "To reduce the price",
          native: "Te ga ɖeɖi",
          pronunciation: "teh gah deh-dee"
          // audioUrl: "/audio/ewe/te_ga_deɖi.mp3"
        },
        {
          id: 13,
          english: "I will buy it",
          native: "Mafle",
          pronunciation: "mah-fleh"
          // audioUrl: "/audio/ewe/mafle.mp3"
        },
        {
          id: 14,
          english: "Give me a discount",
          native: "Na mèwui",
          pronunciation: "nah meh-oo-ee"
          // audioUrl: "/audio/ewe/na_mèwui.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'How much is it?' in Ewe?",
          options: [
            { id: 1, text: "Ga nyae?" },
            { id: 2, text: "Ewɔ xɔ" },
            { id: 3, text: "Na mèwui" },
            { id: 4, text: "Mafle" }
          ],
          correctOptionId: 1,
          hints: ["Asking about the price", "Ends with 'nyae?'"],
          explanation: "'Ga nyae?' means 'How much is it?' in Ewe. It is used to ask the price."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'It is expensive' in Ewe?",
          options: [
            { id: 1, text: "Ewɔ xɔ" },
            { id: 2, text: "Eye olɔ̃" },
            { id: 3, text: "Na mèwui" },
            { id: 4, text: "Mafle" }
          ],
          correctOptionId: 1,
          hints: ["Refer to a high price"],
          explanation: "'Ewɔ xɔ' means 'It is expensive' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Give me a discount' in Ewe?",
          options: [
            { id: 1, text: "Ga nyae?" },
            { id: 2, text: "Ewɔ xɔ" },
            { id: 3, text: "Na mèwui" },
            { id: 4, text: "Mafle" }
          ],
          correctOptionId: 3,
          hints: ["Na = give", "mèwui = me some"],
          explanation: "'Na mèwui' means 'Give me a discount' when bargaining."
        },
        {
          id: 204,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I will buy it' in Ewe?",
          options: [
            { id: 1, text: "Ga nyae?" },
            { id: 2, text: "Ewɔ xɔ" },
            { id: 3, text: "Na mèwui" },
            { id: 4, text: "Mafle" }
          ],
          correctOptionId: 4,
          hints: ["Ma = I will", "fle = buy"],
          explanation: "'Mafle' means 'I will buy it'. 'Ma' means 'I will' and 'fle' means 'buy'."
        },
        {
          id: 205,
          type: "matching",
          instruction: "Match each Ewe phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Ga nyae?", right: "How much is it?" },
            { id: 2, left: "Ewɔ xɔ", right: "It is expensive" },
            { id: 3, left: "Eye olɔ̃", right: "It is cheap" },
            { id: 4, left: "Mafle", right: "I will buy it" }
          ],
          hints: ["Ga nyae? = how much", "Ewɔ xɔ = expensive", "Mafle = I will buy"],
          explanation: "These are essential phrases for bargaining in Ewe."
        }
      ]
    },

    {
      id: "6-3",
      type: "simple_sentences",
      title: "Shopping Items",
      icon: "bag-handle-outline",
      description: "Learn the Ewe names for things you might buy",
      words: ["Afɔkpa", "Tsotso", "Kɔfi", "Ɖoɖo", "Suku guluegbe nane", "Kusi", "Aku"],
      vocabulary: [
        {
          id: 15,
          english: "Shoes",
          native: "Afɔkpa",
          pronunciation: "ah-foh-kpah"
          // audioUrl: "/audio/ewe/afɔkpa.mp3"
        },
        {
          id: 16,
          english: "Hat / Cap",
          native: "Tsotso",
          pronunciation: "tsoh-tsoh"
          // audioUrl: "/audio/ewe/tsotso.mp3"
        },
        {
          id: 17,
          english: "Necklace / Beads",
          native: "Kɔfi",
          pronunciation: "koh-fee"
          // audioUrl: "/audio/ewe/kɔfi.mp3"
        },
        {
          id: 18,
          english: "Medicine",
          native: "Ɖoɖo",
          pronunciation: "doh-doh"
          // audioUrl: "/audio/ewe/ɉoɖo.mp3"
        },
        {
          id: 19,
          english: "School supplies",
          native: "Suku guluegbe nane",
          pronunciation: "soo-koo goo-loo-eh-gbeh nah-neh"
          // audioUrl: "/audio/ewe/suku_guluegbe_nane.mp3"
        },
        {
          id: 20,
          english: "Basket",
          native: "Kusi",
          pronunciation: "koo-see"
          // audioUrl: "/audio/ewe/kusi.mp3"
        },
        {
          id: 21,
          english: "Bag",
          native: "Aku",
          pronunciation: "ah-koo"
          // audioUrl: "/audio/ewe/aku.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Shoes' in Ewe?",
          options: [
            { id: 1, text: "Afɔkpa" },
            { id: 2, text: "Tsotso" },
            { id: 3, text: "Kɔfi" },
            { id: 4, text: "Ɖoɖo" }
          ],
          correctOptionId: 1,
          hints: ["What you wear on your feet", "Starts with 'Afɔ'"],
          explanation: "'Afɔkpa' means 'Shoes' in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Bag' in Ewe?",
          options: [
            { id: 1, text: "Afɔkpa" },
            { id: 2, text: "Tsotso" },
            { id: 3, text: "Kɔfi" },
            { id: 4, text: "Aku" }
          ],
          correctOptionId: 4,
          hints: ["You carry things in it"],
          explanation: "'Aku' means 'Bag' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Medicine' in Ewe?",
          options: [
            { id: 1, text: "Afɔkpa" },
            { id: 2, text: "Ɖoɖo" },
            { id: 3, text: "Kɔfi" },
            { id: 4, text: "Aku" }
          ],
          correctOptionId: 2,
          hints: ["What you take when sick"],
          explanation: "'Ɖoɖo' means 'Medicine' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Afɔkpa", right: "Shoes" },
            { id: 2, left: "Tsotso", right: "Hat / Cap" },
            { id: 3, left: "Kɔfi", right: "Necklace / Beads" },
            { id: 4, left: "Ɖoɖo", right: "Medicine" },
            { id: 5, left: "Aku", right: "Bag" }
          ],
          hints: ["Afɔkpa = shoes", "Tsotso = hat", "Ɖoɖo = medicine"],
          explanation: "These are common shopping items in Ewe."
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
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Market' in Ewe?",
        options: [
          { id: 1, text: "Asitsatsa" },
          { id: 2, text: "Ga" },
          { id: 3, text: "Aʋuƒuti" },
          { id: 4, text: "Ɖoɖo" }
        ],
        correctOptionId: 1,
        hints: ["Where people buy and sell"],
        explanation: "'Asitsatsa' means 'Market' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Money' in Ewe?",
        options: [
          { id: 1, text: "Asitsatsa" },
          { id: 2, text: "Ga" },
          { id: 3, text: "Aʋuƒuti" },
          { id: 4, text: "Ɖoɖo" }
        ],
        correctOptionId: 2,
        hints: ["Used to pay"],
        explanation: "'Ga' means 'Money' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'How much is it?' in Ewe?",
        options: [
          { id: 1, text: "Ga nyae?" },
          { id: 2, text: "Ewɔ xɔ" },
          { id: 3, text: "Na mèwui" },
          { id: 4, text: "Mafle" }
        ],
        correctOptionId: 1,
        hints: ["Asking about the price"],
        explanation: "'Ga nyae?' means 'How much is it?' in Ewe."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'It is expensive' in Ewe?",
        options: [
          { id: 1, text: "Ewɔ xɔ" },
          { id: 2, text: "Eye olɔ̃" },
          { id: 3, text: "Na mèwui" },
          { id: 4, text: "Mafle" }
        ],
        correctOptionId: 1,
        hints: ["High price"],
        explanation: "'Ewɔ xɔ' means 'It is expensive' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Asitsatsa", right: "Market" },
          { id: 2, left: "Ga", right: "Money" },
          { id: 3, left: "Aʋuƒuti", right: "Clothes" },
          { id: 4, left: "Afɔkpa", right: "Shoes" },
          { id: 5, left: "Ga nyae?", right: "How much is it?" }
        ],
        hints: ["Asitsatsa = market", "Ga = money", "Afɔkpa = shoes"],
        explanation: "These are key shopping words from this chapter."
      }
    ]
  }
};

