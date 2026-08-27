// data/course_content/ga/beginner/chapter5.js
export default {
  id: 5,
  title: "Food & Drinks",
  description: "Learn words and phrases for food and drinks in Ga",
  icon: "restaurant-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "5-1",
      type: "words",
      title: "Common Foods",
      icon: "restaurant-outline",
      description: "Learn the names of common foods in Ga",
      words: ["Nii", "Bulu", "Futuo", "Banku", "Akokɔn", "Akadu", "La"],
      vocabulary: [
        {
          id: 1,
          english: "Food",
          native: "Nii",
          pronunciation: "nee"
          // audioUrl: "/audio/ga/nii.mp3"
        },
        {
          id: 2,
          english: "Bread",
          native: "Bulu",
          pronunciation: "boo-loo"
          // audioUrl: "/audio/ga/bulu.mp3"
        },
        {
          id: 3,
          english: "Fufu",
          native: "Futuo",
          pronunciation: "foo-too-oh"
          // audioUrl: "/audio/ga/futuo.mp3"
        },
        {
          id: 4,
          english: "Banku",
          native: "Banku",
          pronunciation: "bahn-koo"
          // audioUrl: "/audio/ga/banku.mp3"
        },
        {
          id: 5,
          english: "Chicken",
          native: "Akokɔn",
          pronunciation: "ah-koh-kohn"
          // audioUrl: "/audio/ga/akokɔn.mp3"
        },
        {
          id: 6,
          english: "Vegetables",
          native: "Akadu",
          pronunciation: "ah-kah-doo"
          // audioUrl: "/audio/ga/akadu.mp3"
        },
        {
          id: 7,
          english: "Meat",
          native: "La",
          pronunciation: "lah"
          // audioUrl: "/audio/ga/la.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Food' in Ga?",
          options: [
            { id: 1, text: "Nii" },
            { id: 2, text: "Bulu" },
            { id: 3, text: "Akokɔn" },
            { id: 4, text: "La" }
          ],
          correctOptionId: 1,
          hints: ["What you eat"],
          explanation: "'Nii' means 'Food' in Ga."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Chicken' in Ga?",
          options: [
            { id: 1, text: "Bulu" },
            { id: 2, text: "Akokɔn" },
            { id: 3, text: "La" },
            { id: 4, text: "Akadu" }
          ],
          correctOptionId: 2,
          hints: ["A bird people eat"],
          explanation: "'Akokɔn' means 'Chicken' in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Meat' in Ga?",
          options: [
            { id: 1, text: "Bulu" },
            { id: 2, text: "Akokɔn" },
            { id: 3, text: "La" },
            { id: 4, text: "Akadu" }
          ],
          correctOptionId: 3,
          hints: ["Animal products to eat"],
          explanation: "'La' means 'Meat' in Ga."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ga word to its English meaning.",
          pairs: [
            { id: 1, left: "Nii", right: "Food" },
            { id: 2, left: "Bulu", right: "Bread" },
            { id: 3, left: "Akokɔn", right: "Chicken" },
            { id: 4, left: "La", right: "Meat" }
          ],
          hints: ["Nii = food", "Bulu = bread", "La = meat"],
          explanation: "These are common food words in Ga."
        }
      ]
    },

    {
      id: "5-2",
      type: "phrases",
      title: "Fruits & Ingredients",
      icon: "nutrition-outline",
      description: "Learn the names of fruits and ingredients in Ga",
      words: ["Futuo-ng", "Akutu", "Akadu", "Nyuublamla", "Kpa", "Sukla"],
      vocabulary: [
        {
          id: 8,
          english: "Fruit",
          native: "Futuo-ng",
          pronunciation: "foo-too-oh-ng"
          // audioUrl: "/audio/ga/futuo_ng.mp3"
        },
        {
          id: 9,
          english: "Orange",
          native: "Akutu",
          pronunciation: "ah-koo-too"
          // audioUrl: "/audio/ga/akutu.mp3"
        },
        {
          id: 10,
          english: "Leaf / Vegetable",
          native: "Akadu",
          pronunciation: "ah-kah-doo"
          // audioUrl: "/audio/ga/akadu.mp3"
        },
        {
          id: 11,
          english: "Salt",
          native: "Nyuublamla",
          pronunciation: "nyoo-blahm-lah"
          // audioUrl: "/audio/ga/nyuublamla.mp3"
        },
        {
          id: 12,
          english: "Pepper",
          native: "Kpa",
          pronunciation: "kpah"
          // audioUrl: "/audio/ga/kpa.mp3"
        },
        {
          id: 13,
          english: "Sugar",
          native: "Sukla",
          pronunciation: "soo-klah"
          // audioUrl: "/audio/ga/sukla.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Fruit' in Ga?",
          options: [
            { id: 1, text: "Futuo-ng" },
            { id: 2, text: "Akutu" },
            { id: 3, text: "Akadu" },
            { id: 4, text: "Nyuublamla" }
          ],
          correctOptionId: 1,
          hints: ["Sweet food from plants"],
          explanation: "'Futuo-ng' means 'Fruit' in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Salt' in Ga?",
          options: [
            { id: 1, text: "Sukla" },
            { id: 2, text: "Kpa" },
            { id: 3, text: "Nyuublamla" },
            { id: 4, text: "Futuo-ng" }
          ],
          correctOptionId: 3,
          hints: ["Seasoning, white crystals"],
          explanation: "'Nyuublamla' means 'Salt' in Ga."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Sugar' in Ga?",
          options: [
            { id: 1, text: "Sukla" },
            { id: 2, text: "Kpa" },
            { id: 3, text: "Nyuublamla" },
            { id: 4, text: "Akadu" }
          ],
          correctOptionId: 1,
          hints: ["Sweetener"],
          explanation: "'Sukla' means 'Sugar' in Ga."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ga word to its English meaning.",
          pairs: [
            { id: 1, left: "Futuo-ng", right: "Fruit" },
            { id: 2, left: "Akutu", right: "Orange" },
            { id: 3, left: "Nyuublamla", right: "Salt" },
            { id: 4, left: "Sukla", right: "Sugar" }
          ],
          hints: ["Futuo-ng = fruit", "Akutu = orange", "Sukla = sugar"],
          explanation: "These are fruit and ingredient words in Ga."
        }
      ]
    },

    {
      id: "5-3",
      type: "simple_sentences",
      title: "Drinks",
      icon: "cafe-outline",
      description: "Learn the names of drinks in Ga",
      words: ["Nuu", "Yitso", "Akpeteshie", "Lɛ", "Nubla"],
      vocabulary: [
        {
          id: 14,
          english: "Water",
          native: "Nuu",
          pronunciation: "noo"
          // audioUrl: "/audio/ga/nuu.mp3"
        },
        {
          id: 15,
          english: "Drink",
          native: "Yitso",
          pronunciation: "yee-tsoh"
          // audioUrl: "/audio/ga/yitso.mp3"
        },
        {
          id: 16,
          english: "Local gin",
          native: "Akpeteshie",
          pronunciation: "ah-kpeh-tseh-sheh"
          // audioUrl: "/audio/ga/akpeteshie.mp3"
        },
        {
          id: 17,
          english: "Milk",
          native: "Lɛ",
          pronunciation: "leh"
          // audioUrl: "/audio/ga/lɛ.mp3"
        },
        {
          id: 18,
          english: "Palm wine",
          native: "Nubla",
          pronunciation: "noo-blah"
          // audioUrl: "/audio/ga/nubla.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Water' in Ga?",
          options: [
            { id: 1, text: "Nuu" },
            { id: 2, text: "Yitso" },
            { id: 3, text: "Lɛ" },
            { id: 4, text: "Nubla" }
          ],
          correctOptionId: 1,
          hints: ["You drink it every day"],
          explanation: "'Nuu' means 'Water' in Ga."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Drink' in Ga?",
          options: [
            { id: 1, text: "Nuu" },
            { id: 2, text: "Yitso" },
            { id: 3, text: "Lɛ" },
            { id: 4, text: "Nubla" }
          ],
          correctOptionId: 2,
          hints: ["Something you drink"],
          explanation: "'Yitso' means 'Drink' in Ga."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Milk' in Ga?",
          options: [
            { id: 1, text: "Nuu" },
            { id: 2, text: "Yitso" },
            { id: 3, text: "Lɛ" },
            { id: 4, text: "Nubla" }
          ],
          correctOptionId: 3,
          hints: ["White drink from animals"],
          explanation: "'Lɛ' means 'Milk' in Ga."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ga word to its English meaning.",
          pairs: [
            { id: 1, left: "Nuu", right: "Water" },
            { id: 2, left: "Yitso", right: "Drink" },
            { id: 3, left: "Lɛ", right: "Milk" },
            { id: 4, left: "Nubla", right: "Palm wine" }
          ],
          hints: ["Nuu = water", "Yitso = drink", "Lɛ = milk"],
          explanation: "These are drink words in Ga."
        }
      ]
    },

    {
      id: "5-4",
      type: "basic_conversations",
      title: "At the Restaurant",
      icon: "restaurant-outline",
      description: "Learn phrases for ordering food and drinks in Ga",
      words: ["Nii domɔɔ minɔ", "Nuu domɔɔ minɔ", "Nii dɔŋ", "Ɛɛftee"],
      vocabulary: [
        {
          id: 19,
          english: "I am hungry",
          native: "Nii domɔɔ minɔ",
          pronunciation: "nee doh-moh-oh mee-noh"
          // audioUrl: "/audio/ga/nii_domɔɔ_minɔ.mp3"
        },
        {
          id: 20,
          english: "I am thirsty",
          native: "Nuu domɔɔ minɔ",
          pronunciation: "noo doh-moh-oh mee-noh"
          // audioUrl: "/audio/ga/nuu_domɔɔ_minɔ.mp3"
        },
        {
          id: 21,
          english: "Delicious food",
          native: "Nii dɔŋ",
          pronunciation: "nee dong"
          // audioUrl: "/audio/ga/nii_dɔŋ.mp3"
        },
        {
          id: 22,
          english: "Thank you",
          native: "Ɛɛftee",
          pronunciation: "eh-eh-fteh"
          // audioUrl: "/audio/ga/ɛɛftee.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am hungry' in Ga?",
          options: [
            { id: 1, text: "Nii domɔɔ minɔ" },
            { id: 2, text: "Nuu domɔɔ minɔ" },
            { id: 3, text: "Nii dɔŋ" },
            { id: 4, text: "Ɛɛftee" }
          ],
          correctOptionId: 1,
          hints: ["Means you want to eat"],
          explanation: "'Nii domɔɔ minɔ' means 'I am hungry' in Ga."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am thirsty' in Ga?",
          options: [
            { id: 1, text: "Nii domɔɔ minɔ" },
            { id: 2, text: "Nuu domɔɔ minɔ" },
            { id: 3, text: "Nii dɔŋ" },
            { id: 4, text: "Ɛɛftee" }
          ],
          correctOptionId: 2,
          hints: ["Means you want a drink", "Contains 'nuu' (water)"],
          explanation: "'Nuu domɔɔ minɔ' means 'I am thirsty' in Ga."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Delicious food' in Ga?",
          options: [
            { id: 1, text: "Nii domɔɔ minɔ" },
            { id: 2, text: "Nuu domɔɔ minɔ" },
            { id: 3, text: "Nii dɔŋ" },
            { id: 4, text: "Ɛɛftee" }
          ],
          correctOptionId: 3,
          hints: ["dɔŋ = good/tasty", "nii = food"],
          explanation: "'Nii dɔŋ' means 'Delicious food' in Ga."
        },
        {
          id: 404,
          type: "matching",
          instruction: "Match each Ga phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Nii domɔɔ minɔ", right: "I am hungry" },
            { id: 2, left: "Nuu domɔɔ minɔ", right: "I am thirsty" },
            { id: 3, left: "Nii dɔŋ", right: "Delicious food" },
            { id: 4, left: "Ɛɛftee", right: "Thank you" }
          ],
          hints: ["domɔɔ = want", "nuu = water", "dɔŋ = good"],
          explanation: "These are useful phrases at the restaurant in Ga."
        },
        {
          id: 405,
          type: "listening_multiple_choice",
          instruction: "Listen to the Ga audio and select the correct English translation.",
          question: "What does this Ga phrase mean in English?",
          audioUrl: "/audio/ga/nii_dɔŋ.mp3",
          options: [
            { id: 1, text: "I am hungry" },
            { id: 2, text: "Delicious food" },
            { id: 3, text: "I am thirsty" },
            { id: 4, text: "Thank you" }
          ],
          correctOptionId: 2,
          hints: ["dɔŋ = good/tasty"],
          explanation: "You heard 'Nii dɔŋ' which means 'Delicious food' in Ga."
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
        instruction: "Select the correct Ga word.",
        question: "What is 'Food' in Ga?",
        options: [
          { id: 1, text: "Nii" },
          { id: 2, text: "Bulu" },
          { id: 3, text: "Akokɔn" },
          { id: 4, text: "La" }
        ],
        correctOptionId: 1,
        hints: ["What you eat"],
        explanation: "Nii = Food."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Water' in Ga?",
        options: [
          { id: 1, text: "Nuu" },
          { id: 2, text: "Yitso" },
          { id: 3, text: "Lɛ" },
          { id: 4, text: "Nubla" }
        ],
        correctOptionId: 1,
        hints: ["You drink it every day"],
        explanation: "Nuu = Water."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "How do you say 'Chicken' in Ga?",
        options: [
          { id: 1, text: "Bulu" },
          { id: 2, text: "Akokɔn" },
          { id: 3, text: "La" },
          { id: 4, text: "Akadu" }
        ],
        correctOptionId: 2,
        hints: ["A bird people eat"],
        explanation: "Akokɔn = Chicken."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "How do you say 'Sugar' in Ga?",
        options: [
          { id: 1, text: "Sukla" },
          { id: 2, text: "Kpa" },
          { id: 3, text: "Nyuublamla" },
          { id: 4, text: "Akadu" }
        ],
        correctOptionId: 1,
        hints: ["Sweetener"],
        explanation: "Sukla = Sugar."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am hungry' in Ga?",
        options: [
          { id: 1, text: "Nii domɔɔ minɔ" },
          { id: 2, text: "Nuu domɔɔ minɔ" },
          { id: 3, text: "Nii dɔŋ" },
          { id: 4, text: "Ɛɛftee" }
        ],
        correctOptionId: 1,
        hints: ["You want to eat"],
        explanation: "Nii domɔɔ minɔ = I am hungry."
      },
      {
        id: 506,
        type: "matching",
        instruction: "Match each Ga word to its English meaning.",
        pairs: [
          { id: 1, left: "Nii", right: "Food" },
          { id: 2, left: "Nuu", right: "Water" },
          { id: 3, left: "Akokɔn", right: "Chicken" },
          { id: 4, left: "La", right: "Meat" },
          { id: 5, left: "Sukla", right: "Sugar" }
        ],
        hints: ["Nii = food", "Nuu = water", "La = meat"],
        explanation: "These are key food and drink words from this chapter."
      }
    ]
  }
};
