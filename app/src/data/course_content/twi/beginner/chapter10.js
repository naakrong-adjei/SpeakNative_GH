// data/course_content/twi/beginner/chapter10.js
export default {
  id: 10,
  title: "Basic Conversations",
  description: "Learn essential Twi phrases to hold basic everyday conversations",
  icon: "chatbubbles-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "10-1",
      type: "vocabulary",
      title: "Common Questions",
      icon: "help-circle-outline",
      description: "Learn common questions to ask in daily conversation",
      words: ["Ɛyɛ dɛn?", "Ɛyɛ sɛn?", "Dɛn nti?", "Ɛhe na ɛwɔ?", "Wo din de sɛn?", "Wote Twi?", "Wo ho te sɛn?", "Ɛdɛn?"],
      vocabulary: [
        {
          id: 1,
          english: "How? / What?",
          native: "Ɛyɛ dɛn?",
          pronunciation: "eh-yeh den"
          // audioUrl: "/audio/twi/eye_den.mp3"
        },
        {
          id: 2,
          english: "How is it?",
          native: "Ɛyɛ sɛn?",
          pronunciation: "eh-yeh sen"
          // audioUrl: "/audio/twi/eye_sen.mp3"
        },
        {
          id: 3,
          english: "Why?",
          native: "Dɛn nti?",
          pronunciation: "den n-tee"
          // audioUrl: "/audio/twi/den_nti.mp3"
        },
        {
          id: 4,
          english: "Where is it?",
          native: "Ɛhe na ɛwɔ?",
          pronunciation: "eh-heh nah eh-woh"
          // audioUrl: "/audio/twi/ehe_na_ewo.mp3"
        },
        {
          id: 5,
          english: "What is your name?",
          native: "Wo din de sɛn?",
          pronunciation: "wo din deh sen"
          // audioUrl: "/audio/twi/wo_din_de_sen.mp3"
        },
        {
          id: 6,
          english: "Do you speak Twi?",
          native: "Wote Twi?",
          pronunciation: "wo-teh twee"
          // audioUrl: "/audio/twi/wote_twi.mp3"
        },
        {
          id: 7,
          english: "How are you?",
          native: "Wo ho te sɛn?",
          pronunciation: "wo-ho-teh-sen"
          // audioUrl: "/audio/twi/wo_ho_te_sen.mp3"
        },
        {
          id: 8,
          english: "What is this?",
          native: "Ɛdɛn ni?",
          pronunciation: "eh-den nee"
          // audioUrl: "/audio/twi/eden_ni.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'What is your name?' in Twi?",
          options: [
            { id: 1, text: "Wo din de sɛn?" },
            { id: 2, text: "Wo ho te sɛn?" },
            { id: 3, text: "Dɛn nti?" },
            { id: 4, text: "Wote Twi?" }
          ],
          correctOptionId: 1,
          hints: ["din = name", "de sɛn? = is what?"],
          explanation: "'Wo din de sɛn?' means 'What is your name?' in Twi."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi question.",
          question: "How do you ask 'Why?' in Twi?",
          options: [
            { id: 1, text: "Dɛn nti?" },
            { id: 2, text: "Ɛhe na ɛwɔ?" },
            { id: 3, text: "Ɛdɛn ni?" },
            { id: 4, text: "Wo ho te sɛn?" }
          ],
          correctOptionId: 1,
          hints: ["Asking for a reason", "nti = because of"],
          explanation: "'Dɛn nti?' means 'Why?' in Twi."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi question.",
          question: "How do you ask 'Do you speak Twi?' in Twi?",
          options: [
            { id: 1, text: "Wote Twi?" },
            { id: 2, text: "Wo din de sɛn?" },
            { id: 3, text: "Ɛdɛn ni?" },
            { id: 4, text: "Dɛn nti?" }
          ],
          correctOptionId: 1,
          hints: ["Wote = do you understand/speak", "Twi is the language"],
          explanation: "'Wote Twi?' means 'Do you speak Twi?' in Twi."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Twi question to its English meaning.",
          pairs: [
            { id: 1, left: "Wo din de sɛn?", right: "What is your name?" },
            { id: 2, left: "Wo ho te sɛn?", right: "How are you?" },
            { id: 3, left: "Dɛn nti?", right: "Why?" },
            { id: 4, left: "Wote Twi?", right: "Do you speak Twi?" }
          ],
          hints: ["Wo din de sɛn? = what is your name", "Wo ho te sɛn? = how are you", "Dɛn nti? = why"],
          explanation: "These are common questions in Twi."
        }
      ]
    },

    {
      id: "10-2",
      type: "vocabulary",
      title: "Expressing Feelings",
      icon: "heart-outline",
      description: "Learn how to express feelings and emotions in Twi",
      words: ["Mepɛ wo", "M'anigye", "Mete yie", "Miyɛ ahyɛso", "Minta wo ase", "Mɛyɛ", "M'ani", "Meyɛ"],
      vocabulary: [
        {
          id: 9,
          english: "I love you",
          native: "Mepɛ wo",
          pronunciation: "meh-peh wo"
          // audioUrl: "/audio/twi/mepe_wo.mp3"
        },
        {
          id: 10,
          english: "I am happy",
          native: "M'anigye",
          pronunciation: "mah-nee-jeh"
          // audioUrl: "/audio/twi/manigye.mp3"
        },
        {
          id: 11,
          english: "I feel fine",
          native: "Mete yie",
          pronunciation: "meh-teh yee-eh"
          // audioUrl: "/audio/twi/mete_yie.mp3"
        },
        {
          id: 12,
          english: "I am tired",
          native: "Miyɛ ahyɛso",
          pronunciation: "mee-yeh ah-hyeh-ee-soh"
          // audioUrl: "/audio/twi/miye_ahyeso.mp3"
        },
        {
          id: 13,
          english: "I am grateful",
          native: "Minta wo ase",
          pronunciation: "meen-tah wo ah-seh"
          // audioUrl: "/audio/twi/minta_wo_ase.mp3"
        },
        {
          id: 14,
          english: "I will / I can",
          native: "Mɛyɛ",
          pronunciation: "meh-yeh"
          // audioUrl: "/audio/twi/meye.mp3"
        },
        {
          id: 15,
          english: "My eyes / my face",
          native: "M'ani",
          pronunciation: "mah-nee"
          // audioUrl: "/audio/twi/mani.mp3"
        },
        {
          id: 16,
          english: "I am (be)",
          native: "Meyɛ",
          pronunciation: "meh-yeh"
          // audioUrl: "/audio/twi/meye.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I love you' in Twi?",
          options: [
            { id: 1, text: "Mepɛ wo" },
            { id: 2, text: "M'anigye" },
            { id: 3, text: "Mete yie" },
            { id: 4, text: "Miyɛ ahyɛso" }
          ],
          correctOptionId: 1,
          hints: ["Mepɛ = I want/love", "wo = you"],
          explanation: "'Mepɛ wo' means 'I love you'. 'pɛ' means 'want/love'."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am happy' in Twi?",
          options: [
            { id: 1, text: "Mepɛ wo" },
            { id: 2, text: "M'anigye" },
            { id: 3, text: "Mete yie" },
            { id: 4, text: "Miyɛ ahyɛso" }
          ],
          correctOptionId: 2,
          hints: ["anigye = happiness"],
          explanation: "'M'anigye' means 'I am happy'. 'anigye' means 'happiness/joy'."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am tired' in Twi?",
          options: [
            { id: 1, text: "Mepɛ wo" },
            { id: 2, text: "M'anigye" },
            { id: 3, text: "Mete yie" },
            { id: 4, text: "Miyɛ ahyɛso" }
          ],
          correctOptionId: 4,
          hints: ["ahyɛso = tiredness"],
          explanation: "'Miyɛ ahyɛso' means 'I am tired' in Twi."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Twi phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Mepɛ wo", right: "I love you" },
            { id: 2, left: "M'anigye", right: "I am happy" },
            { id: 3, left: "Mete yie", right: "I feel fine" },
            { id: 4, left: "Miyɛ ahyɛso", right: "I am tired" }
          ],
          hints: ["Mepɛ wo = I love you", "M'anigye = I am happy", "Miyɛ ahyɛso = I am tired"],
          explanation: "These are useful phrases for expressing feelings in Twi."
        }
      ]
    },

    {
      id: "10-3",
      type: "vocabulary",
      title: "Putting It Together",
      icon: "chatbox-ellipses-outline",
      description: "Connect phrases to hold a short conversation in Twi",
      words: ["Aane", "Daabi", "Mete ase", "Mente ase", "Mepa wo kyɛw", "Meda wo ase", "Yɛn ara", "Da yie"],
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
        },
        {
          id: 19,
          english: "I understand",
          native: "Mete ase",
          pronunciation: "meh-teh ah-seh"
          // audioUrl: "/audio/twi/mete_ase.mp3"
        },
        {
          id: 20,
          english: "I don't understand",
          native: "Mente ase",
          pronunciation: "men-teh ah-seh"
          // audioUrl: "/audio/twi/mente_ase.mp3"
        },
        {
          id: 21,
          english: "Please",
          native: "Mepa wo kyɛw",
          pronunciation: "meh-pah wo cheh-oo"
          // audioUrl: "/audio/twi/mepa_wo_kyew.mp3"
        },
        {
          id: 22,
          english: "Thank you",
          native: "Meda wo ase",
          pronunciation: "meh-dah wo ah-seh"
          // audioUrl: "/audio/twi/meda_wo_ase.mp3"
        },
        {
          id: 23,
          english: "You're welcome",
          native: "Yɛn ara",
          pronunciation: "yen ah-rah"
          // audioUrl: "/audio/twi/yen_ara.mp3"
        },
        {
          id: 24,
          english: "Good night",
          native: "Da yie",
          pronunciation: "dah yee-eh"
          // audioUrl: "/audio/twi/da_yie.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I don't understand' in Twi?",
          options: [
            { id: 1, text: "Mete ase" },
            { id: 2, text: "Mente ase" },
            { id: 3, text: "Mepa wo kyɛw" },
            { id: 4, text: "Meda wo ase" }
          ],
          correctOptionId: 2,
          hints: ["Negative of 'Mete ase'", "Adds 'n' after Me"],
          explanation: "'Mente ase' means 'I don't understand'. The 'n' makes it negative."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'You're welcome' in Twi?",
          options: [
            { id: 1, text: "Yɛn ara" },
            { id: 2, text: "Meda wo ase" },
            { id: 3, text: "Mepa wo kyɛw" },
            { id: 4, text: "Daabi" }
          ],
          correctOptionId: 1,
          hints: ["Response to 'thank you'", "Short phrase"],
          explanation: "'Yɛn ara' means 'You're welcome' in Twi."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Thank you' in Twi?",
          options: [
            { id: 1, text: "Yɛn ara" },
            { id: 2, text: "Meda wo ase" },
            { id: 3, text: "Mepa wo kyɛw" },
            { id: 4, text: "Daabi" }
          ],
          correctOptionId: 2,
          hints: ["Shows gratitude", "You learned this in chapter 1"],
          explanation: "'Meda wo ase' means 'Thank you' in Twi."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Twi phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Aane", right: "Yes" },
            { id: 2, left: "Daabi", right: "No" },
            { id: 3, left: "Mete ase", right: "I understand" },
            { id: 4, left: "Mente ase", right: "I don't understand" },
            { id: 5, left: "Meda wo ase", right: "Thank you" }
          ],
          hints: ["Aane = yes", "Daabi = no", "Meda wo ase = thank you"],
          explanation: "These are essential phrases for basic conversations in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-10",
    title: "Review: Basic Conversations",
    icon: "refresh-outline",
    description: "Review the questions, feelings, and phrases you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Twi question.",
        question: "How do you ask 'Why?' in Twi?",
        options: [
          { id: 1, text: "Dɛn nti?" },
          { id: 2, text: "Ɛhe na ɛwɔ?" },
          { id: 3, text: "Ɛdɛn ni?" },
          { id: 4, text: "Wo ho te sɛn?" }
        ],
        correctOptionId: 1,
        hints: ["Asking for a reason"],
        explanation: "'Dɛn nti?' means 'Why?' in Twi."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I love you' in Twi?",
        options: [
          { id: 1, text: "Mepɛ wo" },
          { id: 2, text: "M'anigye" },
          { id: 3, text: "Mete yie" },
          { id: 4, text: "Miyɛ ahyɛso" }
        ],
        correctOptionId: 1,
        hints: ["Mepɛ = I want/love"],
        explanation: "'Mepɛ wo' means 'I love you' in Twi."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am happy' in Twi?",
        options: [
          { id: 1, text: "Mepɛ wo" },
          { id: 2, text: "M'anigye" },
          { id: 3, text: "Mete yie" },
          { id: 4, text: "Miyɛ ahyɛso" }
        ],
        correctOptionId: 2,
        hints: ["anigye = happiness"],
        explanation: "'M'anigye' means 'I am happy' in Twi."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I don't understand' in Twi?",
        options: [
          { id: 1, text: "Mete ase" },
          { id: 2, text: "Mente ase" },
          { id: 3, text: "Mepa wo kyɛw" },
          { id: 4, text: "Meda wo ase" }
        ],
        correctOptionId: 2,
        hints: ["Negative form"],
        explanation: "'Mente ase' means 'I don't understand' in Twi."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Twi phrase to its English meaning.",
        pairs: [
          { id: 1, left: "Wo din de sɛn?", right: "What is your name?" },
          { id: 2, left: "Mepɛ wo", right: "I love you" },
          { id: 3, left: "Mete ase", right: "I understand" },
          { id: 4, left: "Meda wo ase", right: "Thank you" },
          { id: 5, left: "Daabi", right: "No" }
        ],
        hints: ["Wo din de sɛn? = what is your name", "Mepɛ wo = I love you", "Meda wo ase = thank you"],
        explanation: "These are key phrases from this chapter."
      }
    ]
  }
};

