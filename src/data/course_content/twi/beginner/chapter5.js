// data/course_content/twi/beginner/chapter5.js
export default {
  id: 5,
  title: "Food & Drinks",
  description: "Learn words and phrases for food, drinks, and ordering in Ghana",
  icon: "restaurant-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "5-1",
      type: "vocabulary",
      title: "Common Ghanaian Foods",
      icon: "restaurant-outline",
      description: "Learn the names of popular Ghanaian dishes",
      words: ["Fufu", "Banku", "Jollof", "Kenkey", "Waakye", "Ampesi"],
      vocabulary: [
        {
          id: 1,
          english: "Fufu",
          native: "Fufu",
          pronunciation: "foo-foo"
          // audioUrl: "/audio/twi/fufu.mp3"
        },
        {
          id: 2,
          english: "Banku",
          native: "Banku",
          pronunciation: "ban-koo"
          // audioUrl: "/audio/twi/banku.mp3"
        },
        {
          id: 3,
          english: "Jollof rice",
          native: "Jollof",
          pronunciation: "joh-lof"
          // audioUrl: "/audio/twi/jollof.mp3"
        },
        {
          id: 4,
          english: "Kenkey",
          native: "Kenkey",
          pronunciation: "ken-keh"
          // audioUrl: "/audio/twi/kenkey.mp3"
        },
        {
          id: 5,
          english: "Waakye",
          native: "Waakye",
          pronunciation: "wah-cheh"
          // audioUrl: "/audio/twi/waakye.mp3"
        },
        {
          id: 6,
          english: "Rice",
          native: "Ɛmo",
          pronunciation: "eh-moh"
          // audioUrl: "/audio/twi/emo.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi dish.",
          question: "Which of these is a popular dumpling made from cassava and plantain?",
          options: [
            { id: 1, text: "Fufu" },
            { id: 2, text: "Waakye" },
            { id: 3, text: "Jollof" },
            { id: 4, text: "Kenkey" }
          ],
          correctOptionId: 1,
          hints: ["Pounded food", "Often eaten with soup"],
          explanation: "Fufu is a popular Ghanaian dish made from pounded cassava and plantain."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Jollof rice' in Twi?",
          options: [
            { id: 1, text: "Banku" },
            { id: 2, text: "Jollof" },
            { id: 3, text: "Kenkey" },
            { id: 4, text: "Ampesi" }
          ],
          correctOptionId: 2,
          hints: ["Famous spicy rice dish"],
          explanation: "Jollof is a popular spicy rice dish in Ghana and West Africa."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Rice' in Twi?",
          options: [
            { id: 1, text: "Ɛmo" },
            { id: 2, text: "Banku" },
            { id: 3, text: "Fufu" },
            { id: 4, text: "Kenkey" }
          ],
          correctOptionId: 1,
          hints: ["A common grain", "Starts with 'ɛ'"],
          explanation: "Ɛmo = Rice. It is a common staple grain in Ghana."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Twi dish to a brief description.",
          pairs: [
            { id: 1, left: "Fufu", right: "Pounded cassava & plantain" },
            { id: 2, left: "Banku", right: "Fermented corn & cassava dough" },
            { id: 3, left: "Jollof", right: "Spicy rice dish" },
            { id: 4, left: "Kenkey", right: "Fermented corn dumpling" }
          ],
          hints: ["Fufu = pounded", "Banku = dough", "Jollof = rice", "Kenkey = dumpling"],
          explanation: "These are some of the most popular Ghanaian foods."
        }
      ]
    },

    {
      id: "5-2",
      type: "vocabulary",
      title: "Fruits & Ingredients",
      icon: "nutrition-outline",
      description: "Learn common fruits and cooking ingredients in Twi",
      words: ["Abro", "Bɔfre", "Ankaa", "Nkateɛ", "Nkyene", "Mako"],
      vocabulary: [
        {
          id: 7,
          english: "Corn",
          native: "Abro",
          pronunciation: "ab-roh"
          // audioUrl: "/audio/twi/abro.mp3"
        },
        {
          id: 8,
          english: "Banana",
          native: "Bɔfre",
          pronunciation: "bor-freh"
          // audioUrl: "/audio/twi/bofre.mp3"
        },
        {
          id: 9,
          english: "Pineapple",
          native: "Aborɔbɛ",
          pronunciation: "ah-bor-oh-beh"
          // audioUrl: "/audio/twi/aborobe.mp3"
        },
        {
          id: 10,
          english: "Groundnut / Peanut",
          native: "Nkateɛ",
          pronunciation: "un-kah-teh"
          // audioUrl: "/audio/twi/nkatee.mp3"
        },
        {
          id: 11,
          english: "Salt",
          native: "Nkyene",
          pronunciation: "un-chen-eh"
          // audioUrl: "/audio/twi/nkyene.mp3"
        },
        {
          id: 12,
          english: "Pepper",
          native: "Mako",
          pronunciation: "mah-koh"
          // audioUrl: "/audio/twi/mako.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Banana' in Twi?",
          options: [
            { id: 1, text: "Bɔfre" },
            { id: 2, text: "Abro" },
            { id: 3, text: "Mako" },
            { id: 4, text: "Nkateɛ" }
          ],
          correctOptionId: 1,
          hints: ["Yellow fruit", "Starts with 'B'"],
          explanation: "Bɔfre = Banana. It is a popular fruit in Ghana."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Salt' in Twi?",
          options: [
            { id: 1, text: "Mako" },
            { id: 2, text: "Nkyene" },
            { id: 3, text: "Nkateɛ" },
            { id: 4, text: "Abro" }
          ],
          correctOptionId: 2,
          hints: ["Used to season food", "Starts with 'N'"],
          explanation: "Nkyene = Salt. It is used to season food."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Pepper' in Twi?",
          options: [
            { id: 1, text: "Mako" },
            { id: 2, text: "Nkyene" },
            { id: 3, text: "Bɔfre" },
            { id: 4, text: "Aborɔbɛ" }
          ],
          correctOptionId: 1,
          hints: ["Spicy ingredient", "Starts with 'M'"],
          explanation: "Mako = Pepper. It adds spice to Ghanaian dishes."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Twi word to its correct English meaning.",
          pairs: [
            { id: 1, left: "Bɔfre", right: "Banana" },
            { id: 2, left: "Aborɔbɛ", right: "Pineapple" },
            { id: 3, left: "Nkateɛ", right: "Groundnut" },
            { id: 4, left: "Mako", right: "Pepper" }
          ],
          hints: ["Bɔfre = banana", "Aborɔbɛ = pineapple", "Nkateɛ = groundnut", "Mako = pepper"],
          explanation: "These are common fruits and ingredients in Twi."
        }
      ]
    },

    {
      id: "5-3",
      type: "vocabulary",
      title: "Drinks",
      icon: "water-outline",
      description: "Learn the names of common drinks in Twi",
      words: ["Nsu", "Nufosuo", "Tii", "Kɔfe", "Palm wine"],
      vocabulary: [
        {
          id: 13,
          english: "Water",
          native: "Nsu",
          pronunciation: "un-soo"
          // audioUrl: "/audio/twi/nsu.mp3"
        },
        {
          id: 14,
          english: "Milk",
          native: "Nufosuo",
          pronunciation: "nuu-foh-soo-oh"
          // audioUrl: "/audio/twi/nufosuo.mp3"
        },
        {
          id: 15,
          english: "Tea",
          native: "Tii",
          pronunciation: "tee"
          // audioUrl: "/audio/twi/tii.mp3"
        },
        {
          id: 16,
          english: "Coffee",
          native: "Kɔfe",
          pronunciation: "koh-feh"
          // audioUrl: "/audio/twi/kofe.mp3"
        },
        {
          id: 17,
          english: "Juice",
          native: "Aburo nsu",
          pronunciation: "ah-broo-nsoo"
          // audioUrl: "/audio/twi/aburo_nsu.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Water' in Twi?",
          options: [
            { id: 1, text: "Nsu" },
            { id: 2, text: "Tii" },
            { id: 3, text: "Kɔfe" },
            { id: 4, text: "Nufosuo" }
          ],
          correctOptionId: 1,
          hints: ["You drink it daily", "Starts with 'N'"],
          explanation: "Nsu = Water. It is the most essential drink."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Coffee' in Twi?",
          options: [
            { id: 1, text: "Nufosuo" },
            { id: 2, text: "Tii" },
            { id: 3, text: "Kɔfe" },
            { id: 4, text: "Nsu" }
          ],
          correctOptionId: 3,
          hints: ["Hot caffeinated drink", "Starts with 'K'"],
          explanation: "Kɔfe = Coffee. It is a popular hot drink."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Milk' in Twi?",
          options: [
            { id: 1, text: "Tii" },
            { id: 2, text: "Nufosuo" },
            { id: 3, text: "Kɔfe" },
            { id: 4, text: "Nsu" }
          ],
          correctOptionId: 2,
          hints: ["White drink from animals", "Starts with 'N'"],
          explanation: "Nufosuo = Milk. It is a drink produced by animals."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Twi word to its correct English meaning.",
          pairs: [
            { id: 1, left: "Nsu", right: "Water" },
            { id: 2, left: "Nufosuo", right: "Milk" },
            { id: 3, left: "Tii", right: "Tea" },
            { id: 4, left: "Kɔfe", right: "Coffee" }
          ],
          hints: ["Nsu = water", "Nufosuo = milk", "Tii = tea", "Kɔfe = coffee"],
          explanation: "These are common drinks in Twi."
        }
      ]
    },

    {
      id: "5-4",
      type: "vocabulary",
      title: "At the Restaurant",
      icon: "chatbubble-ellipses-outline",
      description: "Learn phrases for ordering food and drinks",
      words: ["Mepɛ...", "Adedie", "Betumi abrɛ me...", "Mepɛ sɛ me tua"],
      vocabulary: [
        {
          id: 18,
          english: "I want / I would like...",
          native: "Mepɛ...",
          pronunciation: "meh-peh"
          // audioUrl: "/audio/twi/mepɛ.mp3"
        },
        {
          id: 19,
          english: "Menu",
          native: "Adedie",
          pronunciation: "ah-deh-dee-eh"
          // audioUrl: "/audio/twi/adedie.mp3"
        },
        {
          id: 20,
          english: "Can you bring me...?",
          native: "Betumi abrɛ me...?",
          pronunciation: "beh-too-mee ab-reh meh"
          // audioUrl: "/audio/twi/betumi_abre_me.mp3"
        },
        {
          id: 21,
          english: "I want to pay",
          native: "Mepɛ sɛ me tua",
          pronunciation: "meh-peh seh meh too-ah"
          // audioUrl: "/audio/twi/mepɛ_se_me_tua.mp3"
        },
        {
          id: 22,
          english: "Delicious",
          native: "Ɛdɛ",
          pronunciation: "eh-deh"
          // audioUrl: "/audio/twi/ede.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I would like...' when ordering in Twi?",
          options: [
            { id: 1, text: "Mepɛ..." },
            { id: 2, text: "Adedie" },
            { id: 3, text: "Ɛdɛ" },
            { id: 4, text: "Mepɛ sɛ me tua" }
          ],
          correctOptionId: 1,
          hints: ["Starts with 'Me'", "Used when ordering food"],
          explanation: "'Mepɛ...' means 'I want / I would like...'. Use it to order food or drinks."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Delicious' in Twi?",
          options: [
            { id: 1, text: "Adedie" },
            { id: 2, text: "Ɛdɛ" },
            { id: 3, text: "Mepɛ" },
            { id: 4, text: "Nsu" }
          ],
          correctOptionId: 2,
          hints: ["Describes tasty food", "Starts with 'Ɛ'"],
          explanation: "Ɛdɛ = Delicious. Use it to describe tasty food."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I want to pay' in Twi?",
          options: [
            { id: 1, text: "Mepɛ sɛ me tua" },
            { id: 2, text: "Mepɛ..." },
            { id: 3, text: "Betumi abrɛ me?" },
            { id: 4, text: "Ɛdɛ" }
          ],
          correctOptionId: 1,
          hints: ["Used at the end of a meal", "Mentions paying"],
          explanation: "'Mepɛ sɛ me tua' = 'I want to pay'. Use it to ask for the bill."
        },
        {
          id: 404,
          type: "matching",
          instruction: "Match each Twi phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "Mepɛ...", right: "I would like..." },
            { id: 2, left: "Adedie", right: "Menu" },
            { id: 3, left: "Ɛdɛ", right: "Delicious" },
            { id: 4, left: "Mepɛ sɛ me tua", right: "I want to pay" }
          ],
          hints: ["Mepɛ = I want", "Adedie = menu", "Ɛdɛ = delicious", "tua = pay"],
          explanation: "These are useful phrases for dining out in Ghana."
        },
        {
          id: 405,
          type: "drag_drop",
          instruction: "Complete the phrase 'I would like...' by dragging the correct word.",
          sentence: "[_____] fufu (I would like fufu)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Mepɛ", meaning: "I want" },
            { id: "opt2", text: "Mene", meaning: "I am" },
            { id: "opt3", text: "Ɛdɛ", meaning: "Delicious" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Means 'I want'", "Used to order"],
          explanation: "'Mepɛ fufu' means 'I would like fufu' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-5",
    title: "Review: Food & Drinks",
    icon: "refresh-outline",
    description: "Review all the food, drink, and ordering phrases you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Twi dish.",
        question: "Which dish is made from pounded cassava and plantain?",
        options: [
          { id: 1, text: "Fufu" },
          { id: 2, text: "Waakye" },
          { id: 3, text: "Jollof" },
          { id: 4, text: "Kenkey" }
        ],
        correctOptionId: 1,
        hints: ["Pounded food"],
        explanation: "Fufu is made from pounded cassava and plantain."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Water' in Twi?",
        options: [
          { id: 1, text: "Tii" },
          { id: 2, text: "Kɔfe" },
          { id: 3, text: "Nsu" },
          { id: 4, text: "Nufosuo" }
        ],
        correctOptionId: 3,
        hints: ["Essential drink"],
        explanation: "Nsu = Water."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Banana' in Twi?",
        options: [
          { id: 1, text: "Bɔfre" },
          { id: 2, text: "Abro" },
          { id: 3, text: "Mako" },
          { id: 4, text: "Nkateɛ" }
        ],
        correctOptionId: 1,
        hints: ["Yellow fruit"],
        explanation: "Bɔfre = Banana."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I would like...' in Twi?",
        options: [
          { id: 1, text: "Mepɛ..." },
          { id: 2, text: "Adedie" },
          { id: 3, text: "Ɛdɛ" },
          { id: 4, text: "Nsu" }
        ],
        correctOptionId: 1,
        hints: ["Used to order"],
        explanation: "Mepɛ... = I would like..."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Salt' in Twi?",
        options: [
          { id: 1, text: "Mako" },
          { id: 2, text: "Nkyene" },
          { id: 3, text: "Nkateɛ" },
          { id: 4, text: "Abro" }
        ],
        correctOptionId: 2,
        hints: ["Seasons food"],
        explanation: "Nkyene = Salt."
      },
      {
        id: 506,
        type: "matching",
        instruction: "Match each Twi word to its correct English meaning.",
        pairs: [
          { id: 1, left: "Fufu", right: "Pounded dish" },
          { id: 2, left: "Nsu", right: "Water" },
          { id: 3, left: "Bɔfre", right: "Banana" },
          { id: 4, left: "Mako", right: "Pepper" },
          { id: 5, left: "Ɛdɛ", right: "Delicious" }
        ],
        hints: ["Several food and drink words"],
        explanation: "These are key food and drink words from this chapter."
      }
    ]
  }
};
