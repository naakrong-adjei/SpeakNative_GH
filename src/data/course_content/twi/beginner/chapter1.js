export default {
  id: 1,
  title: "Greetings & Basics",
  description: "Learn essential Twi greetings for daily conversations in Ghana",
  icon: "chatbubbles-outline",
  totalXp: 15,
  difficulty: "Beginner",
  
  sections: [
    {
      id: "1-1",
      type: "vocabulary",
      title: "Daily Greetings",
      icon: "time-outline",
      description: "Greetings for different times of the day",
      words: ["Maakye", "Maaha", "Maadwo", "Da yie", "Akwaaba", "Nante yie", "Yɛbɛhyia biom"],
      vocabulary: [
        {
          id: 1,
          english: "Good morning",
          native: "Maakye",
          pronunciation: "mah-chyeh",
          audioUrl: require("../../../../assets/audio/twi/maakye.m4a")
        },
        {
          id: 2,
          english: "Good afternoon",
          native: "Maaha",
          pronunciation: "mah-hah"
          // audioUrl: "/audio/twi/maaha.mp3"
        },
        {
          id: 3,
          english: "Good evening",
          native: "Maadwo",
          pronunciation: "mah-dwo"
          // audioUrl: "/audio/twi/maadwo.mp3"
        },
        {
          id: 4,
          english: "Good night",
          native: "Da yie",
          pronunciation: "dah yee-eh"
          // audioUrl: "/audio/twi/da_yie.mp3"
        },
        {
          id: 5,
          english: "Welcome",
          native: "Akwaaba",
          pronunciation: "ah-kwah-bah"
          // audioUrl: "/audio/twi/akwaaba.mp3"
        },
        {
          id: 6,
          english: "Goodbye",
          native: "Nante yie",
          pronunciation: "nan-teh yee-eh"
          // audioUrl: "/audio/twi/nante_yie.mp3"
        },
        {
          id: 7,
          english: "See you later",
          native: "Yɛbɛhyia biom",
          pronunciation: "yeh-beh-hyee-ah bee-om"
          // audioUrl: "/audio/twi/yebehyia_biom.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi greeting.",
          question: "What is 'Good morning' in Twi?",
          options: [
            { id: 1, text: "Maakye" },
            { id: 2, text: "Maaha" },
            { id: 3, text: "Maadwo" },
            { id: 4, text: "Da yie" }
          ],
          correctOptionId: 1,
          hints: ["Used before noon", "Morning greeting"],
          explanation: "Maakye = Good morning. Used when greeting someone in the morning."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi greeting.",
          question: "What is 'Good afternoon' in Twi?",
          options: [
            { id: 1, text: "Maakye" },
            { id: 2, text: "Maaha" },
            { id: 3, text: "Maadwo" },
            { id: 4, text: "Da yie" }
          ],
          correctOptionId: 2,
          hints: ["Used from 12 PM to 4 PM", "Afternoon greeting"],
          explanation: "Maaha = Good afternoon. Used when greeting someone in the afternoon."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi greeting.",
          question: "What is 'Good evening' in Twi?",
          options: [
            { id: 1, text: "Maakye" },
            { id: 2, text: "Maaha" },
            { id: 3, text: "Maadwo" },
            { id: 4, text: "Da yie" }
          ],
          correctOptionId: 3,
          hints: ["Used after 6 PM", "Evening greeting"],
          explanation: "Maadwo = Good evening. Used when greeting someone in the evening."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Twi greeting.",
          question: "What is 'Good night' in Twi?",
          options: [
            { id: 1, text: "Maakye" },
            { id: 2, text: "Maaha" },
            { id: 3, text: "Maadwo" },
            { id: 4, text: "Da yie" }
          ],
          correctOptionId: 4,
          hints: ["Used when going to bed", "Night greeting"],
          explanation: "Da yie = Good night. Used when saying goodbye at night or going to sleep."
        },
        // Audio question commented out - requires audio file
        // {
        //   id: 105,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the Twi audio and select the correct English translation.",
        //   question: "What does this Twi greeting mean in English?",
        //   audioUrl: "/audio/twi/maakye.mp3",
        //   options: [
        //     { id: 1, text: "Good afternoon" },
        //     { id: 2, text: "Good morning" },
        //     { id: 3, text: "Good evening" },
        //     { id: 4, text: "Good night" }
        //   ],
        //   correctOptionId: 2,
        //   hints: ["This greeting is used before noon"],
        //   explanation: "You heard 'Maakye' which means 'Good morning' in Twi."
        // },
        {
          id: 106,
          type: "multiple_choice",
          instruction: "Select the correct greeting for the time of day.",
          question: "It's 8 AM. Which greeting should you use?",
          options: [
            { id: 1, text: "Maakye" },
            { id: 2, text: "Maaha" },
            { id: 3, text: "Maadwo" },
            { id: 4, text: "Da yie" }
          ],
          correctOptionId: 1,
          hints: ["Morning time", "8 AM is early"],
          explanation: "Maakye = Good morning. Used before noon."
        }
      ]
    },

    {
      id: "1-2",
      type: "vocabulary",
      title: "How Are You?",
      icon: "happy-outline",
      description: "Ask and respond to 'How are you?' in Twi",
      words: ["Wo ho te sɛn?", "Me ho yɛ", "M'ani agye sɛ mahyia wo", "Da no nkɔ yie"],
      vocabulary: [
        {
          id: 8,
          english: "Hi / Hello",
          native: "Ɛte sɛn?",
          pronunciation: "eh-teh sen"
          // audioUrl: "/audio/twi/ete_sen.mp3"
        },
        {
          id: 9,
          english: "How are you?",
          native: "Wo ho te sɛn?",
          pronunciation: "wo-ho-teh-sen"
          // audioUrl: "/audio/twi/wo_ho_te_sen.mp3"
        },
        {
          id: 10,
          english: "I'm fine",
          native: "Me ho yɛ",
          pronunciation: "me-ho-yeh"
          // audioUrl: "/audio/twi/me_ho_ye.mp3"
        },
        {
          id: 11,
          english: "Nice to meet you",
          native: "M'ani agye sɛ mahyia wo",
          pronunciation: "mah-nee ah-jeh seh mah-hee-ah wo"
          // audioUrl: "/audio/twi/mani_agye_se_mahyia_wo.mp3"
        },
        {
          id: 12,
          english: "Have a nice day",
          native: "Da no nkɔ yie",
          pronunciation: "dah no en-koh yee-eh"
          // audioUrl: "/audio/twi/da_no_nko_yie.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'How are you?' in Twi?",
          options: [
            { id: 1, text: "Wo ho te sɛn?" },
            { id: 2, text: "Me ho yɛ" },
            { id: 3, text: "Maakye" },
            { id: 4, text: "Meda wo ase" }
          ],
          correctOptionId: 1,
          hints: ["Starts with 'Wo'", "Literally 'How is your body?'"],
          explanation: "'Wo ho te sɛn?' literally means 'How is your body?' and is the standard way to ask 'How are you?'"
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "What is the correct response to 'Wo ho te sɛn?' (How are you?)",
          options: [
            { id: 1, text: "Me ho yɛ" },
            { id: 2, text: "Meda wo ase" },
            { id: 3, text: "Maakye" },
            { id: 4, text: "Kafra" }
          ],
          correctOptionId: 1,
          hints: ["Me ho = my body", "yɛ = is good"],
          explanation: "Me ho yɛ = I am fine. 'Yɛ' means 'is good' or 'is well'."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Nice to meet you' in Twi?",
          options: [
            { id: 1, text: "M'ani agye sɛ mahyia wo" },
            { id: 2, text: "Me ho yɛ" },
            { id: 3, text: "Da no nkɔ yie" },
            { id: 4, text: "Wo ho te sɛn?" }
          ],
          correctOptionId: 1,
          hints: ["Starts with 'M'ani'", "Used when meeting someone"],
          explanation: "'M'ani agye sɛ mahyia wo' means 'Nice to meet you' in Twi."
        },
        // Audio question commented out - requires audio file
        // {
        //   id: 204,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the Twi audio and select the correct English translation.",
        //   question: "What does this person say in English?",
        //   audioUrl: "/audio/twi/wo_ho_te_sen.mp3",
        //   options: [
        //     { id: 1, text: "I am fine" },
        //     { id: 2, text: "Thank you" },
        //     { id: 3, text: "How are you?" },
        //     { id: 4, text: "Good morning" }
        //   ],
        //   correctOptionId: 3,
        //   hints: ["This is a question", "It starts with 'Wo ho'"],
        //   explanation: "You heard 'Wo ho te sɛn?' which means 'How are you?' in Twi."
        // },
        {
          id: 205,
          type: "drag_drop",
          instruction: "Complete the response 'I am fine' by dragging the correct word.",
          sentence: "Me ho [_____]",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "yɛ", meaning: "is good" },
            { id: "opt2", text: "n", meaning: "not" },
            { id: "opt3", text: "papa", meaning: "very" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Single letter/syllable", "Sounds like 'yeah'", "Means 'is good'"],
          explanation: "Me ho yɛ = I am fine. 'Yɛ' means 'is good' or 'is well'."
        }
      ]
    },

    {
      id: "1-3",
      type: "vocabulary",
      title: "Polite Expressions",
      icon: "chatbox-ellipses-outline",
      description: "Essential polite phrases for daily conversations",
      words: ["Meda wo ase", "Yɛn ara", "Mepa wo kyɛw", "Kafra"],
      vocabulary: [
        {
          id: 13,
          english: "Thank you",
          native: "Meda wo ase",
          pronunciation: "meh-dah wo ah-seh"
          // audioUrl: "/audio/twi/meda_wo_ase.mp3"
        },
        {
          id: 14,
          english: "You're welcome",
          native: "Yɛn ara",
          pronunciation: "yen ah-rah"
          // audioUrl: "/audio/twi/yen_ara.mp3"
        },
        {
          id: 15,
          english: "Please",
          native: "Mepa wo kyɛw",
          pronunciation: "meh-pah wo cheh-oo"
          // audioUrl: "/audio/twi/mepa_wo_kyew.mp3"
        },
        {
          id: 16,
          english: "Sorry",
          native: "Kafra",
          pronunciation: "kah-frah"
          // audioUrl: "/audio/twi/kafra.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Thank you' in Twi?",
          options: [
            { id: 1, text: "Meda wo ase" },
            { id: 2, text: "Mepa wo kyɛw" },
            { id: 3, text: "Kafra" },
            { id: 4, text: "Yɛn ara" }
          ],
          correctOptionId: 1,
          hints: ["Starts with 'M'", "Shows gratitude"],
          explanation: "'Meda wo ase' means 'Thank you' in Twi. It's one of the most important polite expressions."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Please' in Twi?",
          options: [
            { id: 1, text: "Meda wo ase" },
            { id: 2, text: "Mepa wo kyɛw" },
            { id: 3, text: "Kafra" },
            { id: 4, text: "Yɛn ara" }
          ],
          correctOptionId: 2,
          hints: ["Starts with 'M'", "Literally 'I beg you'", "Polite request"],
          explanation: "'Mepa wo kyɛw' means 'Please' in Twi. It's used when making polite requests."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Sorry' in Twi?",
          options: [
            { id: 1, text: "Meda wo ase" },
            { id: 2, text: "Mepa wo kyɛw" },
            { id: 3, text: "Kafra" },
            { id: 4, text: "Yɛn ara" }
          ],
          correctOptionId: 3,
          hints: ["Starts with 'K'", "Used for apologies"],
          explanation: "'Kafra' means 'Sorry' or 'Excuse me' in Twi. It's used for apologies."
        },
        // Audio question commented out - requires audio file
        // {
        //   id: 304,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the Twi audio and select the correct English translation.",
        //   question: "What does this person say in English?",
        //   audioUrl: "/audio/twi/meda_wo_ase.mp3",
        //   options: [
        //     { id: 1, text: "Please" },
        //     { id: 2, text: "Sorry" },
        //     { id: 3, text: "Thank you" },
        //     { id: 4, text: "Goodbye" }
        //   ],
        //   correctOptionId: 3,
        //   hints: ["Shows gratitude", "Common polite phrase"],
        //   explanation: "You heard 'Meda wo ase' which means 'Thank you' in Twi."
        // },
        {
          id: 305,
          type: "drag_drop",
          instruction: "Complete the polite request by dragging the correct word.",
          sentence: "[_____] wo kyɛw (Please)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Mepa", meaning: "I beg" },
            { id: "opt2", text: "Da yie", meaning: "Goodnight" },
            { id: "opt3", text: "Mepɛ", meaning: "I want" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Starts with M", "Literally 'I beg you'", "Polite request"],
          explanation: "Mepa wo kyɛw = Please. Literally 'I beg your pardon' but used as 'please'."
        }
      ]
    },

    // SECTION 4: YES & NO
    {
      id: "1-4",
      type: "vocabulary",
      title: "Yes & No",
      icon: "checkmark-circle-outline",
      description: "Basic affirmatives and negatives in Twi",
      words: ["Aane", "Daabi"],
      vocabulary: [
        {
          id: 17,
          english: "Yes",
          native: "Aane",
          pronunciation: "ah-neh"
          // audioUrl: "/audio/twi/aane.mp3"
        },
        {
          id: 18,
          english: "No",
          native: "Daabi",
          pronunciation: "dah-bee"
          // audioUrl: "/audio/twi/daabi.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Yes' in Twi?",
          options: [
            { id: 1, text: "Aane" },
            { id: 2, text: "Daabi" },
            { id: 3, text: "Yoo" },
            { id: 4, text: "Ɛh" }
          ],
          correctOptionId: 1,
          hints: ["Affirmative response", "Starts with 'A'"],
          explanation: "'Aane' means 'Yes' in Twi. It's used to give a positive response."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'No' in Twi?",
          options: [
            { id: 1, text: "Aane" },
            { id: 2, text: "Daabi" },
            { id: 3, text: "Yoo" },
            { id: 4, text: "Ɛh" }
          ],
          correctOptionId: 2,
          hints: ["Negative response", "Starts with 'D'"],
          explanation: "'Daabi' means 'No' in Twi. It's used to give a negative response."
        }
      ]
    }
  ],

  review: {
    id: "review-1",
    title: "Review: Greetings & Basics",
    icon: "refresh-outline",
    description: "Review all the greetings, phrases, and expressions you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Twi greeting.",
        question: "What is 'Good morning' in Twi?",
        options: [
          { id: 1, text: "Maakye" },
          { id: 2, text: "Maaha" },
          { id: 3, text: "Maadwo" },
          { id: 4, text: "Da yie" }
        ],
        correctOptionId: 1,
        hints: ["Used before noon"],
        explanation: "Maakye = Good morning."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Twi greeting.",
        question: "What is 'Good evening' in Twi?",
        options: [
          { id: 1, text: "Maakye" },
          { id: 2, text: "Maaha" },
          { id: 3, text: "Maadwo" },
          { id: 4, text: "Da yie" }
        ],
        correctOptionId: 3,
        hints: ["Used after 6 PM"],
        explanation: "Maadwo = Good evening."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Twi greeting.",
        question: "What is 'Good night' in Twi?",
        options: [
          { id: 1, text: "Maakye" },
          { id: 2, text: "Maaha" },
          { id: 3, text: "Maadwo" },
          { id: 4, text: "Da yie" }
        ],
        correctOptionId: 4,
        hints: ["Used when going to bed"],
        explanation: "Da yie = Good night."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'How are you?' in Twi?",
        options: [
          { id: 1, text: "Wo ho te sɛn?" },
          { id: 2, text: "Me ho yɛ" },
          { id: 3, text: "Maakye" },
          { id: 4, text: "Da yie" }
        ],
        correctOptionId: 1,
        hints: ["Starts with 'Wo'", "Question asking about someone's well-being"],
        explanation: "'Wo ho te sɛn?' means 'How are you?' in Twi."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "What is the correct response to 'Wo ho te sɛn?' (How are you?)",
        options: [
          { id: 1, text: "Me ho yɛ" },
          { id: 2, text: "Maakye" },
          { id: 3, text: "Meda wo ase" },
          { id: 4, text: "Da yie" }
        ],
        correctOptionId: 1,
        hints: ["Means 'I am fine'"],
        explanation: "Me ho yɛ = I am fine. This is the standard response to 'How are you?'"
      },
      {
        id: 506,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Thank you' in Twi?",
        options: [
          { id: 1, text: "Kafra" },
          { id: 2, text: "Meda wo ase" },
          { id: 3, text: "Mepa wo kyɛw" },
          { id: 4, text: "Yoo" }
        ],
        correctOptionId: 2,
        hints: ["Shows gratitude"],
        explanation: "Meda wo ase = Thank you."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Please' in Twi?",
        options: [
          { id: 1, text: "Kafra" },
          { id: 2, text: "Meda wo ase" },
          { id: 3, text: "Mepa wo kyɛw" },
          { id: 4, text: "Yoo" }
        ],
        correctOptionId: 3,
        hints: ["Used for polite requests"],
        explanation: "Mepa wo kyɛw = Please."
      },
      {
        id: 508,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Sorry' in Twi?",
        options: [
          { id: 1, text: "Kafra" },
          { id: 2, text: "Meda wo ase" },
          { id: 3, text: "Mepa wo kyɛw" },
          { id: 4, text: "Yoo" }
        ],
        correctOptionId: 1,
        hints: ["Used for apologies"],
        explanation: "Kafra = Sorry."
      },
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Yes' in Twi?",
        options: [
          { id: 1, text: "Aane" },
          { id: 2, text: "Daabi" },
          { id: 3, text: "Yoo" },
          { id: 4, text: "Ɛh" }
        ],
        correctOptionId: 1,
        hints: ["Affirmative response"],
        explanation: "Aane = Yes."
      },
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'No' in Twi?",
        options: [
          { id: 1, text: "Aane" },
          { id: 2, text: "Daabi" },
          { id: 3, text: "Yoo" },
          { id: 4, text: "Ɛh" }
        ],
        correctOptionId: 2,
        hints: ["Negative response"],
        explanation: "Daabi = No."
      },
      {
        id: 511,
        type: "matching",
        instruction: "Match each Twi phrase to its correct English meaning.",
        pairs: [
          { id: 1, left: "Maakye", right: "Good morning" },
          { id: 2, left: "Meda wo ase", right: "Thank you" },
          { id: 3, left: "Wo ho te sɛn?", right: "How are you?" },
          { id: 4, left: "Me ho yɛ", right: "I am fine" },
          { id: 5, left: "Mepa wo kyɛw", right: "Please" },
          { id: 6, left: "Kafra", right: "Sorry" },
          { id: 7, left: "Aane", right: "Yes" },
          { id: 8, left: "Daabi", right: "No" }
        ],
        hints: ["Maakye = morning", "Meda wo ase = gratitude", "Wo ho te sɛn? = question", "Me ho yɛ = response"],
        explanation: "These are the key phrases from this chapter."
      }
    ]
  }
};