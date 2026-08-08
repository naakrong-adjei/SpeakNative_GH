// data/course_content/ewe/beginner/chapter1.js
export default {
  id: 1,
  title: "Greetings & Basics",
  description: "Learn essential Ewe greetings for daily conversations in Ghana",
  icon: "chatbubbles-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
{
      id: "1-1",
      type: "words",
      title: "Core Words",
      icon: "time-outline",
      description: "Core greeting words for different times of the day",
      words: ["Ŋdi", "Ŋdɔ", "Fiɛ̃", "Dɔ agbe nyuie", "Woezɔ", "Helo", "Míado go akpɔ hafi"],
      vocabulary: [
        {
          id: 1,
          english: "Good morning",
          native: "Ŋdi",
          pronunciation: "ng-dee",
          audioUrl: require("../../../../assets/audio/ewe/ngdi.m4a")
        },
        {
          id: 2,
          english: "Good afternoon",
          native: "Ŋdɔ",
          pronunciation: "ng-doh",
          audioUrl: "/audio/ewe/ngdo.mp3"
        },
        {
          id: 3,
          english: "Good evening",
          native: "Fiɛ̃",
          pronunciation: "fee-en"
          // audioUrl: "/audio/ewe/fien.mp3"
        },
        {
          id: 4,
          english: "Good night",
          native: "Dɔ agbe nyuie",
          pronunciation: "doh ah-gbeh nyoo-ee-eh"
          // audioUrl: "/audio/ewe/do_agbe_nyuie.mp3"
        },
        {
          id: 5,
          english: "Welcome",
          native: "Woezɔ",
          pronunciation: "woh-eh-zoh"
          // audioUrl: "/audio/ewe/woezɔ.mp3"
        },
        {
          id: 6,
          english: "Hello",
          native: "Helo",
          pronunciation: "heh-loh"
          // audioUrl: "/audio/ewe/helo.mp3"
        },
        {
          id: 7,
          english: "See you later",
          native: "Míado go akpɔ hafi",
          pronunciation: "mee-ah-doh goh ah-kpoh hah-fee"
          // audioUrl: "/audio/ewe/miado_go_akpo_hafi.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good morning' in Ewe?",
          options: [
            { id: 1, text: "Ŋdi" },
            { id: 2, text: "Ŋdɔ" },
            { id: 3, text: "Fiɛ̃" },
            { id: 4, text: "Dɔ agbe nyuie" }
          ],
          correctOptionId: 1,
          hints: ["Used before noon", "Morning greeting"],
          explanation: "Ŋdi = Good morning. Used when greeting someone in the morning."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good afternoon' in Ewe?",
          options: [
            { id: 1, text: "Ŋdi" },
            { id: 2, text: "Ŋdɔ" },
            { id: 3, text: "Fiɛ̃" },
            { id: 4, text: "Dɔ agbe nyuie" }
          ],
          correctOptionId: 2,
          hints: ["Used from 12 PM to 4 PM", "Afternoon greeting"],
          explanation: "Ŋdɔ = Good afternoon. Used when greeting someone in the afternoon."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good evening' in Ewe?",
          options: [
            { id: 1, text: "Ŋdi" },
            { id: 2, text: "Ŋdɔ" },
            { id: 3, text: "Fiɛ̃" },
            { id: 4, text: "Dɔ agbe nyuie" }
          ],
          correctOptionId: 3,
          hints: ["Used after 6 PM", "Evening greeting"],
          explanation: "Fiɛ̃ = Good evening. Used when greeting someone in the evening."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good night' in Ewe?",
          options: [
            { id: 1, text: "Ŋdi" },
            { id: 2, text: "Ŋdɔ" },
            { id: 3, text: "Fiɛ̃" },
            { id: 4, text: "Dɔ agbe nyuie" }
          ],
          correctOptionId: 4,
          hints: ["Used when going to bed", "Night greeting"],
          explanation: "Dɔ agbe nyuie = Good night. Used when saying goodbye at night or going to sleep."
        },
        // Audio question commented out - requires audio file
        // {
        //   id: 105,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the Ewe audio and select the correct English translation.",
        //   question: "What does this Ewe greeting mean in English?",
        //   audioUrl: "/audio/ewe/ngdi.mp3",
        //   options: [
        //     { id: 1, text: "Good afternoon" },
        //     { id: 2, text: "Good morning" },
        //     { id: 3, text: "Good evening" },
        //     { id: 4, text: "Good night" }
        //   ],
        //   correctOptionId: 2,
        //   hints: ["This greeting is used before noon"],
        //   explanation: "You heard 'Ŋdi' which means 'Good morning' in Ewe."
        // },
        {
          id: 106,
          type: "multiple_choice",
          instruction: "Select the correct greeting for the time of day.",
          question: "It's 8 AM. Which greeting should you use?",
          options: [
            { id: 1, text: "Ŋdi" },
            { id: 2, text: "Ŋdɔ" },
            { id: 3, text: "Fiɛ̃" },
            { id: 4, text: "Dɔ agbe nyuie" }
          ],
          correctOptionId: 1,
          hints: ["Morning time", "8 AM is early"],
          explanation: "Ŋdi = Good morning. Used before noon."
        }
      ]
    },

{
      id: "1-2",
      type: "phrases",
      title: "Useful Phrases",
      icon: "happy-outline",
      description: "Ask and respond to 'How are you?' in Ewe",
      words: ["Efɔa?", "Mele nyuie", "Mɛganyɔa", "Mía kpɔe"],
      vocabulary: [
        {
          id: 8,
          english: "Hi / Hello",
          native: "Efɔa?",
          pronunciation: "eh-foh-ah"
          // audioUrl: "/audio/ewe/efɔa.mp3"
        },
        {
          id: 9,
          english: "How are you?",
          native: "Efɔa?",
          pronunciation: "eh-foh-ah"
          // audioUrl: "/audio/ewe/efɔa.mp3"
        },
        {
          id: 10,
          english: "I'm fine",
          native: "Mele nyuie",
          pronunciation: "meh-leh nyoo-ee-eh"
          // audioUrl: "/audio/ewe/mele_nyuie.mp3"
        },
        {
          id: 11,
          english: "Nice to meet you",
          native: "Mɛganyɔa",
          pronunciation: "meh-gah-nyoh-ah"
          // audioUrl: "/audio/ewe/mɛganyɔa.mp3"
        },
        {
          id: 12,
          english: "See you",
          native: "Mía kpɔe",
          pronunciation: "mee-ah kpoh-eh"
          // audioUrl: "/audio/ewe/mia_kpɔe.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'How are you?' in Ewe?",
          options: [
            { id: 1, text: "Efɔa?" },
            { id: 2, text: "Mele nyuie" },
            { id: 3, text: "Ŋdi" },
            { id: 4, text: "Akpe" }
          ],
          correctOptionId: 1,
          hints: ["Starts with 'E'", "A question about well-being"],
          explanation: "'Efɔa?' is the standard way to ask 'How are you?' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "What is the correct response to 'Efɔa?' (How are you?)",
          options: [
            { id: 1, text: "Mele nyuie" },
            { id: 2, text: "Akpe" },
            { id: 3, text: "Ŋdi" },
            { id: 4, text: "Woezɔ" }
          ],
          correctOptionId: 1,
          hints: ["Mele = I am", "nyuie = good/fine"],
          explanation: "Mele nyuie = I am fine. 'Nyuie' means 'good' or 'fine'."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Nice to meet you' in Ewe?",
          options: [
            { id: 1, text: "Mɛganyɔa" },
            { id: 2, text: "Mele nyuie" },
            { id: 3, text: "Mía kpɔe" },
            { id: 4, text: "Efɔa?" }
          ],
          correctOptionId: 1,
          hints: ["Used when meeting someone"],
          explanation: "'Mɛganyɔa' means 'Nice to meet you' in Ewe."
        },
        // Audio question commented out - requires audio file
        // {
        //   id: 204,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the Ewe audio and select the correct English translation.",
        //   question: "What does this person say in English?",
        //   audioUrl: "/audio/ewe/efɔa.mp3",
        //   options: [
        //     { id: 1, text: "I am fine" },
        //     { id: 2, text: "Thank you" },
        //     { id: 3, text: "How are you?" },
        //     { id: 4, text: "Good morning" }
        //   ],
        //   correctOptionId: 3,
        //   hints: ["This is a question"],
        //   explanation: "You heard 'Efɔa?' which means 'How are you?' in Ewe."
        // },
        {
          id: 205,
          type: "drag_drop",
          instruction: "Complete the response 'I am fine' by dragging the correct word.",
          sentence: "Mele [_____]",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "nyuie", meaning: "good" },
            { id: "opt2", text: "ɔ", meaning: "not" },
            { id: "opt3", text: "ŋutɔ", meaning: "very" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Means 'good' or 'fine'", "Used after 'Mele'"],
          explanation: "Mele nyuie = I am fine. 'Nyuie' means 'good' or 'fine'."
        }
      ]
    },

{
      id: "1-3",
      type: "simple_sentences",
      title: "Simple Sentences",
      icon: "chatbox-ellipses-outline",
      description: "Essential polite sentences for daily conversations",
      words: ["Akpe", "Wòe zɔ", "Taflatse", "Babae"],
      vocabulary: [
        {
          id: 13,
          english: "Thank you",
          native: "Akpe",
          pronunciation: "ah-kpeh"
          // audioUrl: "/audio/ewe/akpe.mp3"
        },
        {
          id: 14,
          english: "You're welcome",
          native: "Wòe zɔ",
          pronunciation: "woh-eh zoh"
          // audioUrl: "/audio/ewe/wòe_zɔ.mp3"
        },
        {
          id: 15,
          english: "Please",
          native: "Taflatse",
          pronunciation: "ta-flat-seh"
          // audioUrl: "/audio/ewe/taflatse.mp3"
        },
        {
          id: 16,
          english: "Sorry",
          native: "Babae",
          pronunciation: "bah-bah-eh"
          // audioUrl: "/audio/ewe/babae.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Thank you' in Ewe?",
          options: [
            { id: 1, text: "Akpe" },
            { id: 2, text: "Taflatse" },
            { id: 3, text: "Babae" },
            { id: 4, text: "Wòe zɔ" }
          ],
          correctOptionId: 1,
          hints: ["Shows gratitude"],
          explanation: "'Akpe' means 'Thank you' in Ewe. It's one of the most important polite expressions."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Please' in Ewe?",
          options: [
            { id: 1, text: "Akpe" },
            { id: 2, text: "Taflatse" },
            { id: 3, text: "Babae" },
            { id: 4, text: "Wòe zɔ" }
          ],
          correctOptionId: 2,
          hints: ["Polite request"],
          explanation: "'Taflatse' means 'Please' in Ewe. It's used when making polite requests."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Sorry' in Ewe?",
          options: [
            { id: 1, text: "Akpe" },
            { id: 2, text: "Taflatse" },
            { id: 3, text: "Babae" },
            { id: 4, text: "Wòe zɔ" }
          ],
          correctOptionId: 3,
          hints: ["Used for apologies"],
          explanation: "'Babae' means 'Sorry' or 'Excuse me' in Ewe. It's used for apologies."
        },
        // Audio question commented out - requires audio file
        // {
        //   id: 304,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the Ewe audio and select the correct English translation.",
        //   question: "What does this person say in English?",
        //   audioUrl: "/audio/ewe/akpe.mp3",
        //   options: [
        //     { id: 1, text: "Please" },
        //     { id: 2, text: "Sorry" },
        //     { id: 3, text: "Thank you" },
        //     { id: 4, text: "Goodbye" }
        //   ],
        //   correctOptionId: 3,
        //   hints: ["Shows gratitude"],
        //   explanation: "You heard 'Akpe' which means 'Thank you' in Ewe."
        // },
        {
          id: 305,
          type: "drag_drop",
          instruction: "Complete the polite request by dragging the correct word.",
          sentence: "[_____] (Please)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Taflatse", meaning: "please" },
            { id: "opt2", text: "Akpe", meaning: "thank you" },
            { id: "opt3", text: "Babae", meaning: "sorry" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Polite request word"],
          explanation: "Taflatse = Please. Used when making polite requests."
        }
      ]
    },

    // SECTION 4: YES & NO
{
      id: "1-4",
      type: "basic_conversations",
      title: "Basic Conversations",
      icon: "checkmark-circle-outline",
      description: "Basic affirmatives and negatives in Ewe",
      words: ["Ɛ̃", "Ao"],
      vocabulary: [
        {
          id: 17,
          english: "Yes",
          native: "Ɛ̃",
          pronunciation: "eh"
          // audioUrl: "/audio/ewe/ɛ̃.mp3"
        },
        {
          id: 18,
          english: "No",
          native: "Ao",
          pronunciation: "ah-oh"
          // audioUrl: "/audio/ewe/ao.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Yes' in Ewe?",
          options: [
            { id: 1, text: "Ɛ̃" },
            { id: 2, text: "Ao" },
            { id: 3, text: "Nye" },
            { id: 4, text: "Ɛ" }
          ],
          correctOptionId: 1,
          hints: ["Affirmative response"],
          explanation: "'Ɛ̃' means 'Yes' in Ewe. It's used to give a positive response."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'No' in Ewe?",
          options: [
            { id: 1, text: "Ɛ̃" },
            { id: 2, text: "Ao" },
            { id: 3, text: "Nye" },
            { id: 4, text: "Ɛ" }
          ],
          correctOptionId: 2,
          hints: ["Negative response"],
          explanation: "'Ao' means 'No' in Ewe. It's used to give a negative response."
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
        instruction: "Select the correct Ewe greeting.",
        question: "What is 'Good morning' in Ewe?",
        options: [
          { id: 1, text: "Ŋdi" },
          { id: 2, text: "Ŋdɔ" },
          { id: 3, text: "Fiɛ̃" },
          { id: 4, text: "Dɔ agbe nyuie" }
        ],
        correctOptionId: 1,
        hints: ["Used before noon"],
        explanation: "Ŋdi = Good morning."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ewe greeting.",
        question: "What is 'Good evening' in Ewe?",
        options: [
          { id: 1, text: "Ŋdi" },
          { id: 2, text: "Ŋdɔ" },
          { id: 3, text: "Fiɛ̃" },
          { id: 4, text: "Dɔ agbe nyuie" }
        ],
        correctOptionId: 3,
        hints: ["Used after 6 PM"],
        explanation: "Fiɛ̃ = Good evening."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ewe greeting.",
        question: "What is 'Good night' in Ewe?",
        options: [
          { id: 1, text: "Ŋdi" },
          { id: 2, text: "Ŋdɔ" },
          { id: 3, text: "Fiɛ̃" },
          { id: 4, text: "Dɔ agbe nyuie" }
        ],
        correctOptionId: 4,
        hints: ["Used when going to bed"],
        explanation: "Dɔ agbe nyuie = Good night."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'How are you?' in Ewe?",
        options: [
          { id: 1, text: "Efɔa?" },
          { id: 2, text: "Mele nyuie" },
          { id: 3, text: "Ŋdi" },
          { id: 4, text: "Dɔ agbe nyuie" }
        ],
        correctOptionId: 1,
        hints: ["Question about well-being"],
        explanation: "'Efɔa?' means 'How are you?' in Ewe."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "What is the correct response to 'Efɔa?' (How are you?)",
        options: [
          { id: 1, text: "Mele nyuie" },
          { id: 2, text: "Ŋdi" },
          { id: 3, text: "Akpe" },
          { id: 4, text: "Dɔ agbe nyuie" }
        ],
        correctOptionId: 1,
        hints: ["Means 'I am fine'"],
        explanation: "Mele nyuie = I am fine. This is the standard response to 'How are you?'"
      },
      {
        id: 506,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Thank you' in Ewe?",
        options: [
          { id: 1, text: "Babae" },
          { id: 2, text: "Akpe" },
          { id: 3, text: "Taflatse" },
          { id: 4, text: "Wòe zɔ" }
        ],
        correctOptionId: 2,
        hints: ["Shows gratitude"],
        explanation: "Akpe = Thank you."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Please' in Ewe?",
        options: [
          { id: 1, text: "Babae" },
          { id: 2, text: "Akpe" },
          { id: 3, text: "Taflatse" },
          { id: 4, text: "Wòe zɔ" }
        ],
        correctOptionId: 3,
        hints: ["Used for polite requests"],
        explanation: "Taflatse = Please."
      },
      {
        id: 508,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Sorry' in Ewe?",
        options: [
          { id: 1, text: "Babae" },
          { id: 2, text: "Akpe" },
          { id: 3, text: "Taflatse" },
          { id: 4, text: "Wòe zɔ" }
        ],
        correctOptionId: 1,
        hints: ["Used for apologies"],
        explanation: "Babae = Sorry."
      },
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Yes' in Ewe?",
        options: [
          { id: 1, text: "Ɛ̃" },
          { id: 2, text: "Ao" },
          { id: 3, text: "Nye" },
          { id: 4, text: "Ɛ" }
        ],
        correctOptionId: 1,
        hints: ["Affirmative response"],
        explanation: "Ɛ̃ = Yes."
      },
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'No' in Ewe?",
        options: [
          { id: 1, text: "Ɛ̃" },
          { id: 2, text: "Ao" },
          { id: 3, text: "Nye" },
          { id: 4, text: "Ɛ" }
        ],
        correctOptionId: 2,
        hints: ["Negative response"],
        explanation: "Ao = No."
      },
      {
        id: 511,
        type: "matching",
        instruction: "Match each Ewe phrase to its correct English meaning.",
        pairs: [
          { id: 1, left: "Ŋdi", right: "Good morning" },
          { id: 2, left: "Akpe", right: "Thank you" },
          { id: 3, left: "Efɔa?", right: "How are you?" },
          { id: 4, left: "Mele nyuie", right: "I am fine" },
          { id: 5, left: "Taflatse", right: "Please" },
          { id: 6, left: "Babae", right: "Sorry" },
          { id: 7, left: "Ɛ̃", right: "Yes" },
          { id: 8, left: "Ao", right: "No" }
        ],
        hints: ["Ŋdi = morning", "Akpe = gratitude", "Efɔa? = question", "Mele nyuie = response"],
        explanation: "These are the key phrases from this chapter."
      }
    ]
  }
};
