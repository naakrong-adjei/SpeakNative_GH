// data/course_content/ewe/beginner/chapter5.js
export default {
  id: 5,
  title: "Food & Drinks",
  description: "Learn words and phrases for food and drinks in Ewe",
  icon: "restaurant-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "5-1",
      type: "words",
      title: "Common Foods",
      icon: "restaurant-outline",
      description: "Learn the names of common foods in Ewe",
      words: ["Nuɖuɖu", "Ablɔ", "Fufu", "Banku", "Koklo", "Gbe", "Lã"],
      vocabulary: [
        {
          id: 1,
          english: "Food",
          native: "Nuɖuɖu",
          pronunciation: "nu-du-du"
          // audioUrl: "/audio/ewe/nuɖuɖu.mp3"
        },
        {
          id: 2,
          english: "Bread",
          native: "Ablɔ",
          pronunciation: "ah-bloh"
          // audioUrl: "/audio/ewe/ablɔ.mp3"
        },
        {
          id: 3,
          english: "Fufu",
          native: "Fufu",
          pronunciation: "foo-foo"
          // audioUrl: "/audio/ewe/fufu.mp3"
        },
        {
          id: 4,
          english: "Banku",
          native: "Banku",
          pronunciation: "bahn-koo"
          // audioUrl: "/audio/ewe/banku.mp3"
        },
        {
          id: 5,
          english: "Chicken",
          native: "Koklo",
          pronunciation: "koh-kloh"
          // audioUrl: "/audio/ewe/koklo.mp3"
        },
        {
          id: 6,
          english: "Vegetables",
          native: "Gbe",
          pronunciation: "gbeh"
          // audioUrl: "/audio/ewe/gbe.mp3"
        },
        {
          id: 7,
          english: "Meat",
          native: "Lã",
          pronunciation: "lah"
          // audioUrl: "/audio/ewe/lã.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Food' in Ewe?",
          options: [
            { id: 1, text: "Nuɖuɖu" },
            { id: 2, text: "Ablɔ" },
            { id: 3, text: "Koklo" },
            { id: 4, text: "Lã" }
          ],
          correctOptionId: 1,
          hints: ["What you eat"],
          explanation: "'Nuɖuɖu' means 'Food' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Chicken' in Ewe?",
          options: [
            { id: 1, text: "Ablɔ" },
            { id: 2, text: "Koklo" },
            { id: 3, text: "Lã" },
            { id: 4, text: "Gbe" }
          ],
          correctOptionId: 2,
          hints: ["A bird people eat"],
          explanation: "'Koklo' means 'Chicken' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Meat' in Ewe?",
          options: [
            { id: 1, text: "Ablɔ" },
            { id: 2, text: "Koklo" },
            { id: 3, text: "Lã" },
            { id: 4, text: "Gbe" }
          ],
          correctOptionId: 3,
          hints: ["Animal products to eat"],
          explanation: "'Lã' means 'Meat' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Nuɖuɖu", right: "Food" },
            { id: 2, left: "Ablɔ", right: "Bread" },
            { id: 3, left: "Koklo", right: "Chicken" },
            { id: 4, left: "Lã", right: "Meat" }
          ],
          hints: ["Nuɖuɖu = food", "Ablɔ = bread", "Lã = meat"],
          explanation: "These are common food words in Ewe."
        }
      ]
    },

    {
      id: "5-2",
      type: "phrases",
      title: "Fruits & Ingredients",
      icon: "nutrition-outline",
      description: "Learn the names of fruits and ingredients in Ewe",
      words: ["Atikutsetse", "Akɔdzu", "Agbe", "Detsi", "Kapa", "Suka"],
      vocabulary: [
        {
          id: 8,
          english: "Fruit",
          native: "Atikutsetse",
          pronunciation: "ah-tee-koo-tseh-tseh"
          // audioUrl: "/audio/ewe/atikutsetse.mp3"
        },
        {
          id: 9,
          english: "Orange",
          native: "Akɔdzu",
          pronunciation: "ah-koh-dzu"
          // audioUrl: "/audio/ewe/akɔdzu.mp3"
        },
        {
          id: 10,
          english: "Leaf / Vegetable",
          native: "Agbe",
          pronunciation: "ah-gbeh"
          // audioUrl: "/audio/ewe/agbe.mp3"
        },
        {
          id: 11,
          english: "Salt",
          native: "Detsi",
          pronunciation: "deh-chee"
          // audioUrl: "/audio/ewe/detsi.mp3"
        },
        {
          id: 12,
          english: "Pepper",
          native: "Kapa",
          pronunciation: "kah-pah"
          // audioUrl: "/audio/ewe/kapa.mp3"
        },
        {
          id: 13,
          english: "Sugar",
          native: "Suka",
          pronunciation: "soo-kah"
          // audioUrl: "/audio/ewe/suka.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Fruit' in Ewe?",
          options: [
            { id: 1, text: "Atikutsetse" },
            { id: 2, text: "Akɔdzu" },
            { id: 3, text: "Agbe" },
            { id: 4, text: "Detsi" }
          ],
          correctOptionId: 1,
          hints: ["Sweet food from plants"],
          explanation: "'Atikutsetse' means 'Fruit' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Salt' in Ewe?",
          options: [
            { id: 1, text: "Suka" },
            { id: 2, text: "Kapa" },
            { id: 3, text: "Detsi" },
            { id: 4, text: "Atikutsetse" }
          ],
          correctOptionId: 3,
          hints: ["Seasoning, white crystals"],
          explanation: "'Detsi' means 'Salt' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Sugar' in Ewe?",
          options: [
            { id: 1, text: "Suka" },
            { id: 2, text: "Kapa" },
            { id: 3, text: "Detsi" },
            { id: 4, text: "Agbe" }
          ],
          correctOptionId: 1,
          hints: ["Sweetener"],
          explanation: "'Suka' means 'Sugar' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Atikutsetse", right: "Fruit" },
            { id: 2, left: "Akɔdzu", right: "Orange" },
            { id: 3, left: "Detsi", right: "Salt" },
            { id: 4, left: "Suka", right: "Sugar" }
          ],
          hints: ["Atikutsetse = fruit", "Akɔdzu = orange", "Suka = sugar"],
          explanation: "These are fruit and ingredient words in Ewe."
        }
      ]
    },

    {
      id: "5-3",
      type: "simple_sentences",
      title: "Drinks",
      icon: "cafe-outline",
      description: "Learn the names of drinks in Ewe",
      words: ["Tsi", "Noɖuɖu", "Fesi", "Keke", "Alɔ", "Aha"],
      vocabulary: [
        {
          id: 14,
          english: "Water",
          native: "Tsi",
          pronunciation: "chee"
          // audioUrl: "/audio/ewe/tsi.mp3"
        },
        {
          id: 15,
          english: "Drink",
          native: "Noɖuɖu",
          pronunciation: "noh-du-du"
          // audioUrl: "/audio/ewe/noɖuɖu.mp3"
        },
        {
          id: 16,
          english: "Tee (local drink)",
          native: "Fesi",
          pronunciation: "feh-see"
          // audioUrl: "/audio/ewe/fesi.mp3"
        },
        {
          id: 17,
          english: "Milk",
          native: "Keke",
          pronunciation: "keh-keh"
          // audioUrl: "/audio/ewe/keke.mp3"
        },
        {
          id: 18,
          english: "Palm wine",
          native: "Alɔ",
          pronunciation: "ah-loh"
          // audioUrl: "/audio/ewe/alɔ.mp3"
        },
        {
          id: 19,
          english: "Alcohol",
          native: "Aha",
          pronunciation: "ah-hah"
          // audioUrl: "/audio/ewe/aha.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Water' in Ewe?",
          options: [
            { id: 1, text: "Tsi" },
            { id: 2, text: "Noɖuɖu" },
            { id: 3, text: "Keke" },
            { id: 4, text: "Alɔ" }
          ],
          correctOptionId: 1,
          hints: ["You drink it every day"],
          explanation: "'Tsi' means 'Water' in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Drink' in Ewe?",
          options: [
            { id: 1, text: "Tsi" },
            { id: 2, text: "Noɖuɖu" },
            { id: 3, text: "Keke" },
            { id: 4, text: "Alɔ" }
          ],
          correctOptionId: 2,
          hints: ["Something you drink"],
          explanation: "'Noɖuɖu' means 'Drink' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Milk' in Ewe?",
          options: [
            { id: 1, text: "Tsi" },
            { id: 2, text: "Noɖuɖu" },
            { id: 3, text: "Keke" },
            { id: 4, text: "Alɔ" }
          ],
          correctOptionId: 3,
          hints: ["White drink from animals"],
          explanation: "'Keke' means 'Milk' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Tsi", right: "Water" },
            { id: 2, left: "Noɖuɖu", right: "Drink" },
            { id: 3, left: "Keke", right: "Milk" },
            { id: 4, left: "Alɔ", right: "Palm wine" }
          ],
          hints: ["Tsi = water", "Noɖuɖu = drink", "Keke = milk"],
          explanation: "These are drink words in Ewe."
        }
      ]
    },

    {
      id: "5-4",
      type: "basic_conversations",
      title: "At the Restaurant",
      icon: "restaurant-outline",
      description: "Learn phrases for ordering food and drinks in Ewe",
      words: ["Mele nuɖuɖu ƒe dzudzɔ", "Mele tsi fo", "Nuɖuɖu nyui", "Akpe"],
      vocabulary: [
        {
          id: 20,
          english: "I am hungry",
          native: "Mele nuɖuɖu ƒe dzudzɔ",
          pronunciation: "meh-leh nu-du-du feh dzu-dzoh"
          // audioUrl: "/audio/ewe/mele_nuɖuɖu_ƒe_dzudzɔ.mp3"
        },
        {
          id: 21,
          english: "I am thirsty",
          native: "Mele tsi fo",
          pronunciation: "meh-leh chee foh"
          // audioUrl: "/audio/ewe/mele_tsi_fo.mp3"
        },
        {
          id: 22,
          english: "Delicious food",
          native: "Nuɖuɖu nyui",
          pronunciation: "nu-du-du nyoo-ee"
          // audioUrl: "/audio/ewe/nuɖuɖu_nyui.mp3"
        },
        {
          id: 23,
          english: "Thank you",
          native: "Akpe",
          pronunciation: "ah-kpeh"
          // audioUrl: "/audio/ewe/akpe.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am hungry' in Ewe?",
          options: [
            { id: 1, text: "Mele nuɖuɖu ƒe dzudzɔ" },
            { id: 2, text: "Mele tsi fo" },
            { id: 3, text: "Nuɖuɖu nyui" },
            { id: 4, text: "Akpe" }
          ],
          correctOptionId: 1,
          hints: ["Means you want to eat"],
          explanation: "'Mele nuɖuɖu ƒe dzudzɔ' means 'I am hungry' in Ewe."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am thirsty' in Ewe?",
          options: [
            { id: 1, text: "Mele nuɖuɖu ƒe dzudzɔ" },
            { id: 2, text: "Mele tsi fo" },
            { id: 3, text: "Nuɖuɖu nyui" },
            { id: 4, text: "Akpe" }
          ],
          correctOptionId: 2,
          hints: ["Means you want a drink", "Contains 'tsi' (water)"],
          explanation: "'Mele tsi fo' means 'I am thirsty' in Ewe."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Delicious food' in Ewe?",
          options: [
            { id: 1, text: "Mele nuɖuɖu ƒe dzudzɔ" },
            { id: 2, text: "Mele tsi fo" },
            { id: 3, text: "Nuɖuɖu nyui" },
            { id: 4, text: "Akpe" }
          ],
          correctOptionId: 3,
          hints: ["nyui = good/tasty", "nuɖuɖu = food"],
          explanation: "'Nuɖuɖu nyui' means 'Delicious food' in Ewe."
        },
        {
          id: 404,
          type: "matching",
          instruction: "Match each Ewe phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Mele nuɖuɖu ƒe dzudzɔ", right: "I am hungry" },
            { id: 2, left: "Mele tsi fo", right: "I am thirsty" },
            { id: 3, left: "Nuɖuɖu nyui", right: "Delicious food" },
            { id: 4, left: "Akpe", right: "Thank you" }
          ],
          hints: ["dzudzɔ = hungry", "tsi = water", "nyui = good"],
          explanation: "These are useful phrases at the restaurant in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-5",
    title: "Review: Food & Drinks",
    icon: "refresh-outline",
    description: "Review all the food and drink words you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Food' in Ewe?",
        options: [
          { id: 1, text: "Nuɖuɖu" },
          { id: 2, text: "Ablɔ" },
          { id: 3, text: "Koklo" },
          { id: 4, text: "Lã" }
        ],
        correctOptionId: 1,
        hints: ["What you eat"],
        explanation: "Nuɖuɖu = Food."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Water' in Ewe?",
        options: [
          { id: 1, text: "Tsi" },
          { id: 2, text: "Noɖuɖu" },
          { id: 3, text: "Keke" },
          { id: 4, text: "Alɔ" }
        ],
        correctOptionId: 1,
        hints: ["You drink it every day"],
        explanation: "Tsi = Water."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Chicken' in Ewe?",
        options: [
          { id: 1, text: "Ablɔ" },
          { id: 2, text: "Koklo" },
          { id: 3, text: "Lã" },
          { id: 4, text: "Gbe" }
        ],
        correctOptionId: 2,
        hints: ["A bird people eat"],
        explanation: "Koklo = Chicken."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Sugar' in Ewe?",
        options: [
          { id: 1, text: "Suka" },
          { id: 2, text: "Kapa" },
          { id: 3, text: "Detsi" },
          { id: 4, text: "Agbe" }
        ],
        correctOptionId: 1,
        hints: ["Sweetener"],
        explanation: "Suka = Sugar."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am hungry' in Ewe?",
        options: [
          { id: 1, text: "Mele nuɖuɖu ƒe dzudzɔ" },
          { id: 2, text: "Mele tsi fo" },
          { id: 3, text: "Nuɖuɖu nyui" },
          { id: 4, text: "Akpe" }
        ],
        correctOptionId: 1,
        hints: ["You want to eat"],
        explanation: "Mele nuɖuɖu ƒe dzudzɔ = I am hungry."
      },
      {
        id: 506,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Nuɖuɖu", right: "Food" },
          { id: 2, left: "Tsi", right: "Water" },
          { id: 3, left: "Koklo", right: "Chicken" },
          { id: 4, left: "Lã", right: "Meat" },
          { id: 5, left: "Suka", right: "Sugar" }
        ],
        hints: ["Nuɖuɖu = food", "Tsi = water", "Lã = meat"],
        explanation: "These are key food and drink words from this chapter."
      }
    ]
  }
};
