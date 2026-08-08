// data/course_content/twi/beginner/chapter3.js
export default {
  id: 3,
  title: "Family & Everyday Life",
  description: "Learn words and phrases to talk about your family and daily routines in Twi",
  icon: "people-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "3-1",
      type: "vocabulary",
      title: "Family Members",
      icon: "people-outline",
      description: "Learn to name the members of your family in Twi",
      words: ["Abusua", "Ɛna", "Agya", "Ɔba", "Nua barima", "Nua ba"],
      vocabulary: [
        {
          id: 1,
          english: "Family",
          native: "Abusua",
          pronunciation: "ah-boo-soo-ah"
          // audioUrl: "/audio/twi/abusua.mp3"
        },
        {
          id: 2,
          english: "Mother",
          native: "Ɛna",
          pronunciation: "eh-nah"
          // audioUrl: "/audio/twi/ena.mp3"
        },
        {
          id: 3,
          english: "Father",
          native: "Agya",
          pronunciation: "ah-jah"
          // audioUrl: "/audio/twi/agya.mp3"
        },
        {
          id: 4,
          english: "Child",
          native: "Ɔba",
          pronunciation: "oh-bah"
          // audioUrl: "/audio/twi/oba.mp3"
        },
        {
          id: 5,
          english: "Brother",
          native: "Nua barima",
          pronunciation: "nuu-ah bah-ree-mah"
          // audioUrl: "/audio/twi/nua_barima.mp3"
        },
        {
          id: 6,
          english: "Sister",
          native: "Nua ba",
          pronunciation: "nuu-ah bah"
          // audioUrl: "/audio/twi/nua_ba.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Mother' in Twi?",
          options: [
            { id: 1, text: "Ɛna" },
            { id: 2, text: "Agya" },
            { id: 3, text: "Ɔba" },
            { id: 4, text: "Nua" }
          ],
          correctOptionId: 1,
          hints: ["Starts with 'Ɛ'", "Female parent"],
          explanation: "Ɛna = Mother. Use it to refer to your female parent."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Father' in Twi?",
          options: [
            { id: 1, text: "Ɛna" },
            { id: 2, text: "Agya" },
            { id: 3, text: "Ɔba" },
            { id: 4, text: "Nua" }
          ],
          correctOptionId: 2,
          hints: ["Starts with 'A'", "Male parent"],
          explanation: "Agya = Father. Use it to refer to your male parent."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Child' in Twi?",
          options: [
            { id: 1, text: "Ɛna" },
            { id: 2, text: "Agya" },
            { id: 3, text: "Ɔba" },
            { id: 4, text: "Abusua" }
          ],
          correctOptionId: 3,
          hints: ["A young person", "Starts with 'Ɔ'"],
          explanation: "Ɔba = Child. It refers to a young person or offspring."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Twi word to its correct English meaning.",
          pairs: [
            { id: 1, left: "Abusua", right: "Family" },
            { id: 2, left: "Ɛna", right: "Mother" },
            { id: 3, left: "Agya", right: "Father" },
            { id: 4, left: "Ɔba", right: "Child" }
          ],
          hints: ["Abusua = family", "Ɛna = mother", "Agya = father", "Ɔba = child"],
          explanation: "These are key family terms in Twi."
        },
        {
          id: 105,
          type: "drag_drop",
          instruction: "Complete the word for 'Brother' by dragging the correct words.",
          sentence: "[_____] [_____] (Brother)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Nua", meaning: "Sibling" },
            { id: "opt2", text: "barima", meaning: "Male" },
            { id: "opt3", text: "Ɔba", meaning: "Child" }
          ],
          correctDrops: [
            { blankId: "blank1", itemId: "opt1" },
            { blankId: "blank2", itemId: "opt2" }
          ],
          hints: ["First word = sibling", "Second word = male"],
          explanation: "'Nua barima' = Brother. 'Nua' means 'sibling' and 'barima' means 'male'."
        }
      ]
    },

    {
      id: "3-2",
      type: "vocabulary",
      title: "Extended Family",
      icon: "people-circle-outline",
      description: "Learn words for your extended family in Twi",
      words: ["Nana", "Seɛ", "Wɔfa", "Ɔbaa", "Ɔbarima"],
      vocabulary: [
        {
          id: 7,
          english: "Grandparent / Grandchild",
          native: "Nana",
          pronunciation: "nah-nah"
          // audioUrl: "/audio/twi/nana.mp3"
        },
        {
          id: 8,
          english: "Aunt",
          native: "Seɛ",
          pronunciation: "seh"
          // audioUrl: "/audio/twi/see.mp3"
        },
        {
          id: 9,
          english: "Uncle",
          native: "Wɔfa",
          pronunciation: "woh-fah"
          // audioUrl: "/audio/twi/wofa.mp3"
        },
        {
          id: 10,
          english: "Woman",
          native: "Ɔbaa",
          pronunciation: "oh-bah-ah"
          // audioUrl: "/audio/twi/obaa.mp3"
        },
        {
          id: 11,
          english: "Man",
          native: "Ɔbarima",
          pronunciation: "oh-bah-ree-mah"
          // audioUrl: "/audio/twi/obarima.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Grandparent' in Twi?",
          options: [
            { id: 1, text: "Nana" },
            { id: 2, text: "Seɛ" },
            { id: 3, text: "Wɔfa" },
            { id: 4, text: "Ɔbaa" }
          ],
          correctOptionId: 1,
          hints: ["Starts with 'N'", "Older family member"],
          explanation: "Nana = Grandparent. It can also mean grandchild."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Uncle' in Twi?",
          options: [
            { id: 1, text: "Nana" },
            { id: 2, text: "Seɛ" },
            { id: 3, text: "Wɔfa" },
            { id: 4, text: "Ɔbaa" }
          ],
          correctOptionId: 3,
          hints: ["Starts with 'W'", "Male relative of parents"],
          explanation: "Wɔfa = Uncle. It refers to the brother of your parent."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Woman' in Twi?",
          options: [
            { id: 1, text: "Ɔbarima" },
            { id: 2, text: "Ɔbaa" },
            { id: 3, text: "Nana" },
            { id: 4, text: "Wɔfa" }
          ],
          correctOptionId: 2,
          hints: ["Starts with 'Ɔ'", "Female adult"],
          explanation: "Ɔbaa = Woman. It refers to an adult female."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Twi word to its correct English meaning.",
          pairs: [
            { id: 1, left: "Nana", right: "Grandparent" },
            { id: 2, left: "Seɛ", right: "Aunt" },
            { id: 3, left: "Wɔfa", right: "Uncle" },
            { id: 4, left: "Ɔbarima", right: "Man" }
          ],
          hints: ["Nana = grandparent", "Seɛ = aunt", "Wɔfa = uncle", "Ɔbarima = man"],
          explanation: "These are extended family terms in Twi."
        }
      ]
    },

    {
      id: "3-3",
      type: "vocabulary",
      title: "Everyday Items & Life",
      icon: "home-outline",
      description: "Learn everyday words like home, food, water, and work",
      words: ["Ɛfi", "Aduane", "Nsu", "Adwuma", "Sukuu"],
      vocabulary: [
        {
          id: 12,
          english: "Home",
          native: "Ɛfi",
          pronunciation: "eh-fee"
          // audioUrl: "/audio/twi/efi.mp3"
        },
        {
          id: 13,
          english: "Food",
          native: "Aduane",
          pronunciation: "ah-doo-ahn-eh"
          // audioUrl: "/audio/twi/aduane.mp3"
        },
        {
          id: 14,
          english: "Water",
          native: "Nsu",
          pronunciation: "un-soo"
          // audioUrl: "/audio/twi/nsu.mp3"
        },
        {
          id: 15,
          english: "Work",
          native: "Adwuma",
          pronunciation: "ah-juu-mah"
          // audioUrl: "/audio/twi/adwuma.mp3"
        },
        {
          id: 16,
          english: "School",
          native: "Sukuu",
          pronunciation: "soo-koo"
          // audioUrl: "/audio/twi/sukuu.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Home' in Twi?",
          options: [
            { id: 1, text: "Ɛfi" },
            { id: 2, text: "Aduane" },
            { id: 3, text: "Nsu" },
            { id: 4, text: "Adwuma" }
          ],
          correctOptionId: 1,
          hints: ["Where you live", "Starts with 'Ɛ'"],
          explanation: "Ɛfi = Home. It is where you live."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Food' in Twi?",
          options: [
            { id: 1, text: "Ɛfi" },
            { id: 2, text: "Aduane" },
            { id: 3, text: "Nsu" },
            { id: 4, text: "Adwuma" }
          ],
          correctOptionId: 2,
          hints: ["What you eat", "Starts with 'A'"],
          explanation: "Aduane = Food. It is what you eat."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Work' in Twi?",
          options: [
            { id: 1, text: "Nsu" },
            { id: 2, text: "Aduane" },
            { id: 3, text: "Adwuma" },
            { id: 4, text: "Ɛfi" }
          ],
          correctOptionId: 3,
          hints: ["What you do for a job", "Starts with 'A'"],
          explanation: "Adwuma = Work. It refers to a job or daily tasks."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Twi word to its correct English meaning.",
          pairs: [
            { id: 1, left: "Ɛfi", right: "Home" },
            { id: 2, left: "Aduane", right: "Food" },
            { id: 3, left: "Nsu", right: "Water" },
            { id: 4, left: "Adwuma", right: "Work" },
            { id: 5, left: "Sukuu", right: "School" }
          ],
          hints: ["Ɛfi = home", "Aduane = food", "Nsu = water", "Adwuma = work", "Sukuu = school"],
          explanation: "These are common everyday words in Twi."
        },
        {
          id: 305,
          type: "drag_drop",
          instruction: "Complete the word for 'School' by dragging the correct word.",
          sentence: "[_____] (School)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Sukuu", meaning: "School" },
            { id: "opt2", text: "Adwuma", meaning: "Work" },
            { id: "opt3", text: "Ɛfi", meaning: "Home" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Where you learn", "Starts with 'S'"],
          explanation: "Sukuu = School. It is where you go to learn."
        }
      ]
    }
  ],

  review: {
    id: "review-3",
    title: "Review: Family & Everyday Life",
    icon: "refresh-outline",
    description: "Review the family and everyday life vocabulary",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Family' in Twi?",
        options: [
          { id: 1, text: "Abusua" },
          { id: 2, text: "Ɛna" },
          { id: 3, text: "Agya" },
          { id: 4, text: "Ɔba" }
        ],
        correctOptionId: 1,
        hints: ["Whole group of relatives"],
        explanation: "Abusua = Family."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Mother' in Twi?",
        options: [
          { id: 1, text: "Agya" },
          { id: 2, text: "Ɛna" },
          { id: 3, text: "Ɔba" },
          { id: 4, text: "Nana" }
        ],
        correctOptionId: 2,
        hints: ["Female parent"],
        explanation: "Ɛna = Mother."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Work' in Twi?",
        options: [
          { id: 1, text: "Nsu" },
          { id: 2, text: "Aduane" },
          { id: 3, text: "Adwuma" },
          { id: 4, text: "Sukuu" }
        ],
        correctOptionId: 3,
        hints: ["A job or task"],
        explanation: "Adwuma = Work."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Uncle' in Twi?",
        options: [
          { id: 1, text: "Seɛ" },
          { id: 2, text: "Nana" },
          { id: 3, text: "Wɔfa" },
          { id: 4, text: "Ɔbaa" }
        ],
        correctOptionId: 3,
        hints: ["Brother of a parent"],
        explanation: "Wɔfa = Uncle."
      },
      {
        id: 405,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Brother' in Twi?",
        options: [
          { id: 1, text: "Nua ba" },
          { id: 2, text: "Nua barima" },
          { id: 3, text: "Ɔbaa" },
          { id: 4, text: "Ɛfi" }
        ],
        correctOptionId: 2,
        hints: ["Sibling + male"],
        explanation: "Nua barima = Brother."
      },
      {
        id: 406,
        type: "matching",
        instruction: "Match each Twi word to its correct English meaning.",
        pairs: [
          { id: 1, left: "Abusua", right: "Family" },
          { id: 2, left: "Ɛna", right: "Mother" },
          { id: 3, left: "Nana", right: "Grandparent" },
          { id: 4, left: "Aduane", right: "Food" },
          { id: 5, left: "Sukuu", right: "School" }
        ],
        hints: ["Family and everyday words"],
        explanation: "These are key family and everyday words in Twi."
      }
    ]
  }
};

