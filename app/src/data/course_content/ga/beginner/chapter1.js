export default {
  id: 1,
  title: "Greetings & Basics",
  description: "Learn essential Ga greetings for daily conversations in Ghana",
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
      words: [],
      vocabulary: [
        {
          id: 1,
          english: "Good morning",
          native: "Ojekoo",
          pronunciation: "oh-JEH-koh"
          // audioUrl: "/audio/ga/good_morning.mp3"
        },
        {
          id: 2,
          english: "Good afternoon",
          native: "Minaokoo",
          pronunciation: "mee-NAH-oh-koh"
          // audioUrl: "/audio/ga/good_afternoon.mp3"
        },
        {
          id: 3,
          english: "Good evening",
          native: "Oshwiee",
          pronunciation: "oh-SHWEE-eh"
          // audioUrl: "/audio/ga/good_evening.mp3"
        },
        {
          id: 4,
          english: "Good night",
          native: "Oshwiee jogbaŋŋ",
          pronunciation: "oh-SHWEE-eh joh-BAHNG"
          // audioUrl: "/audio/ga/good_night.mp3"
        },
        {
          id: 5,
          english: "Welcome",
          native: "Miiŋa bo!",
          pronunciation: "mee-NG-gah boh"
          // audioUrl: "/audio/ga/welcome.mp3"
        },
        {
          id: 6,
          english: "Hello / Hi",
          native: "Miiŋa bo!",
          pronunciation: "mee-NG-gah boh"
          // audioUrl: "/audio/ga/hello.mp3"
        },
        {
          id: 7,
          english: "How are you?",
          native: "Te oyɔɔ tɛŋŋ?",
          pronunciation: "tay oh-YOR teng"
          // audioUrl: "/audio/ga/how_are_you.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga greeting.",
          question: "What is 'Good morning' in Ga?",
          options: [
            { id: 1, text: "Ojekoo" },
            { id: 2, text: "Minaokoo" },
            { id: 3, text: "Oshwiee" },
            { id: 4, text: "Te oyɔɔ tɛŋŋ?" }
          ],
          correctOptionId: 1,
          hints: ["Used before noon", "Morning greeting"],
          explanation: "Ojekoo is the correct Ga phrase for 'Good morning'."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga greeting.",
          question: "What is 'Good afternoon' in Ga?",
          options: [
            { id: 1, text: "Oshwiee" },
            { id: 2, text: "Minaokoo" },
            { id: 3, text: "Ojekoo" },
            { id: 4, text: "Miiŋa bo!" }
          ],
          correctOptionId: 2,
          hints: ["Used from 12 PM to 4 PM", "Afternoon greeting"],
          explanation: "Minaokoo is the correct Ga phrase for 'Good afternoon'."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga greeting.",
          question: "What is 'Good evening' in Ga?",
          options: [
            { id: 1, text: "Ojekoo" },
            { id: 2, text: "Minaokoo" },
            { id: 3, text: "Oshwiee" },
            { id: 4, text: "Yaaba jogbaŋŋ" }
          ],
          correctOptionId: 3,
          hints: ["Used after 6 PM", "Evening greeting"],
          explanation: "Oshwiee is the correct Ga phrase for 'Good evening'."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ga greeting.",
          question: "What is 'Good night' in Ga?",
          options: [
            { id: 1, text: "Ojekoo" },
            { id: 2, text: "Minaokoo" },
            { id: 3, text: "Oshwiee" },
            { id: 4, text: "Oshwiee jogbaŋŋ" }
          ],
          correctOptionId: 4,
          hints: ["Used when going to bed", "Night greeting"],
          explanation: "Oshwiee jogbaŋŋ is the correct Ga phrase for 'Good night'."
        },
        {
          id: 105,
          type: "listening_multiple_choice",
          instruction: "Listen to the Ga audio and select the correct English translation.",
          question: "What does this Ga greeting mean in English?",
          audioUrl: "/audio/ga/good_evening.mp3",
          options: [
            { id: 1, text: "Good afternoon" },
            { id: 2, text: "Good morning" },
            { id: 3, text: "Good evening" },
            { id: 4, text: "Good night" }
          ],
          correctOptionId: 3,
          hints: ["This greeting is used after 6 PM"],
          explanation: "You heard the Ga phrase 'Oshwiee' which means 'Good evening'."
        },
        {
          id: 106,
          type: "multiple_choice",
          instruction: "Select the correct greeting for the time of day.",
          question: "It's 8 AM. Which greeting should you use?",
          options: [
            { id: 1, text: "Ojekoo" },
            { id: 2, text: "Minaokoo" },
            { id: 3, text: "Oshwiee" },
            { id: 4, text: "Oshwiee jogbaŋŋ" }
          ],
          correctOptionId: 1,
          hints: ["Morning time", "8 AM is early"],
          explanation: "Use 'Ojekoo' (Good morning) before noon."
        }
      ]
    },

    {
      id: "1-2",
      type: "phrases",
      title: "Useful Phrases",
      icon: "happy-outline",
      description: "Ask and respond to 'How are you?' in Ga",
      words: [],
      vocabulary: [
        {
          id: 8,
          english: "How are you?",
          native: "Te oyɔɔ tɛŋŋ?",
          pronunciation: "tay oh-YOR teng"
          // audioUrl: "/audio/ga/how_are_you.mp3"
        },
        {
          id: 9,
          english: "I'm fine",
          native: "Mi yɛ ojogbaŋŋ",
          pronunciation: "mee yeh oh-JOHG-bahng"
          // audioUrl: "/audio/ga/im_fine.mp3"
        },
        {
          id: 10,
          english: "Nice to meet you",
          native: "Miishɛɛ ni mina bo",
          pronunciation: "mee-SHAY nee mee-nah boh"
          // audioUrl: "/audio/ga/nice_to_meet_you.mp3"
        },
        {
          id: 11,
          english: "Welcome",
          native: "Miiŋa bo!",
          pronunciation: "mee-NG-gah boh"
          // audioUrl: "/audio/ga/welcome.mp3"
        },
        {
          id: 12,
          english: "See you (later)",
          native: "Yaaba jogbaŋŋ",
          pronunciation: "YAH-bah joh-BAHNG"
          // audioUrl: "/audio/ga/see_you.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'How are you?' in Ga?",
          options: [
            { id: 1, text: "Te oyɔɔ tɛŋŋ?" },
            { id: 2, text: "Mi yɛ ojogbaŋŋ" },
            { id: 3, text: "Miiŋa bo!" },
            { id: 4, text: "Yaaba jogbaŋŋ" }
          ],
          correctOptionId: 1,
          hints: ["A question about well-being"],
          explanation: "'Te oyɔɔ tɛŋŋ?' is the standard way to ask 'How are you?' in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "What is the correct response to 'How are you?'",
          options: [
            { id: 1, text: "Mi yɛ ojogbaŋŋ" },
            { id: 2, text: "Te oyɔɔ tɛŋŋ?" },
            { id: 3, text: "Miiŋa bo!" },
            { id: 4, text: "Yaaba jogbaŋŋ" }
          ],
          correctOptionId: 1,
          hints: ["Means 'I am fine'"],
          explanation: "'Mi yɛ ojogbaŋŋ' is the standard positive response to 'How are you?'"
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Nice to meet you' in Ga?",
          options: [
            { id: 1, text: "Miishɛɛ ni mina bo" },
            { id: 2, text: "Te oyɔɔ tɛŋŋ?" },
            { id: 3, text: "Miiŋa bo!" },
            { id: 4, text: "Yaaba jogbaŋŋ" }
          ],
          correctOptionId: 1,
          hints: ["Used when meeting someone"],
          explanation: "'Miishɛɛ ni mina bo' is the correct Ga phrase for 'Nice to meet you'."
        },
        {
          id: 204,
          type: "listening_multiple_choice",
          instruction: "Listen to the Ga audio and select the correct English translation.",
          question: "What does this person say in English?",
          audioUrl: "/audio/ga/how_are_you.mp3",
          options: [
            { id: 1, text: "I am fine" },
            { id: 2, text: "Thank you" },
            { id: 3, text: "How are you?" },
            { id: 4, text: "Good morning" }
          ],
          correctOptionId: 3,
          hints: ["This is a question"],
          explanation: "You heard 'Te oyɔɔ tɛŋŋ?' which means 'How are you?'."
        },
        {
          id: 205,
          type: "drag_drop",
          instruction: "Complete the response 'I am fine' by dragging the correct word.",
          sentence: "[Mi yɛ ojogbaŋŋ] (I'm fine)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Mi yɛ ojogbaŋŋ", meaning: "I am fine" },
            { id: "opt2", text: "Miiŋa bo!", meaning: "welcome" },
            { id: "opt3", text: "Ojekoo", meaning: "good morning" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Means 'I am fine'", "Response to 'How are you?'"],
          explanation: "'Mi yɛ ojogbaŋŋ' is the standard response to 'How are you?'"
        }
      ]
    },

    {
      id: "1-3",
      type: "simple_sentences",
      title: "Simple Sentences",
      icon: "chatbox-ellipses-outline",
      description: "Essential polite sentences for daily conversations",
      words: [],
      vocabulary: [
        {
          id: 13,
          english: "Thank you",
          native: "Oyiwala dɔŋŋ",
          pronunciation: "oh-YEE-wah-lah dong"
          // audioUrl: "/audio/ga/thank_you.mp3"
        },
        {
          id: 14,
          english: "You're welcome",
          native: "Mɛ niɛ",
          pronunciation: "meh nee-eh"
          // audioUrl: "/audio/ga/youre_welcome.mp3"
        },
        {
          id: 15,
          english: "Please",
          native: "Ofainɛ",
          pronunciation: "keh-KEH"
          // audioUrl: "/audio/ga/please.mp3"
        },
        {
          id: 16,
          english: "Sorry / Excuse me",
          native: "Kpo",
          pronunciation: "DOO-ah-boh"
          // audioUrl: "/audio/ga/sorry.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Thank you' in Ga?",
          options: [
            { id: 1, text: "Oyiwala dɔŋŋ" },
            { id: 2, text: "Ofainɛ" },
            { id: 3, text: "Kpo" },
            { id: 4, text: "Mɛ niɛ" }
          ],
          correctOptionId: 1,
          hints: ["Shows gratitude"],
          explanation: "'Oyiwala dɔŋŋ' is one of the most important polite expressions in Ga."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Please' in Ga?",
          options: [
            { id: 1, text: "Oyiwala dɔŋŋ" },
            { id: 2, text: "Ofainɛ" },
            { id: 3, text: "Kpo" },
            { id: 4, text: "Mɛ niɛ" }
          ],
          correctOptionId: 2,
          hints: ["Polite request"],
          explanation: "'Ofainɛ' is the correct Ga phrase for 'Please'."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Sorry' in Ga?",
          options: [
            { id: 1, text: "Oyiwala dɔŋŋ" },
            { id: 2, text: "Ofainɛ" },
            { id: 3, text: "Kpo" },
            { id: 4, text: "Mɛ niɛ" }
          ],
          correctOptionId: 3,
          hints: ["Used for apologies"],
          explanation: "'Kpo' is the correct Ga phrase for 'Sorry'."
        },
        {
          id: 304,
          type: "listening_multiple_choice",
          instruction: "Listen to the Ga audio and select the correct English translation.",
          question: "What does this person say in English?",
          audioUrl: "/audio/ga/thank_you.mp3",
          options: [
            { id: 1, text: "Please" },
            { id: 2, text: "Sorry" },
            { id: 3, text: "Thank you" },
            { id: 4, text: "Goodbye" }
          ],
          correctOptionId: 3,
          hints: ["Shows gratitude"],
          explanation: "You heard 'Oyiwala dɔŋŋ' which means 'Thank you'."
        },
        {
          id: 305,
          type: "drag_drop",
          instruction: "Complete the polite request by dragging the correct word.",
          sentence: "[Ofainɛ] (Please)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Ofainɛ", meaning: "please" },
            { id: "opt2", text: "Oyiwala dɔŋŋ", meaning: "thank you" },
            { id: "opt3", text: "Kpo", meaning: "sorry" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Polite request word"],
          explanation: "'Ofainɛ' is the Ga word for 'Please'."
        }
      ]
    },

    {
      id: "1-4",
      type: "basic_conversations",
      title: "Basic Conversations",
      icon: "checkmark-circle-outline",
      description: "Basic affirmatives and negatives in Ga",
      words: [],
      vocabulary: [
        {
          id: 17,
          english: "Yes",
          native: "Haa",
          pronunciation: "hah"
          // audioUrl: "/audio/ga/yes.mp3"
        },
        {
          id: 18,
          english: "No",
          native: "Dabi",
          pronunciation: "DAH-bee"
          // audioUrl: "/audio/ga/no.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Yes' in Ga?",
          options: [
            { id: 1, text: "Haa" },
            { id: 2, text: "Dabi" },
            { id: 3, text: "Ofainɛ" },
            { id: 4, text: "Kpo" }
          ],
          correctOptionId: 1,
          hints: ["Affirmative response"],
          explanation: "'Haa' is the Ga word for 'Yes'."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'No' in Ga?",
          options: [
            { id: 1, text: "Haa" },
            { id: 2, text: "Dabi" },
            { id: 3, text: "Ofainɛ" },
            { id: 4, text: "Kpo" }
          ],
          correctOptionId: 2,
          hints: ["Negative response"],
          explanation: "'Dabi' is the Ga word for 'No'."
        },
        {
          id: 403,
          type: "listening_matching",
          instruction: "Listen to each Ga phrase and match it to its English meaning.",
          question: "Match each phrase you hear to its meaning.",
          pairs: [
            { id: "p1", native: "Haa", audioUrl: "/audio/ga/yes.mp3", correctOptionId: "opt1" },
            { id: "p2", native: "Dabi", audioUrl: "/audio/ga/no.mp3", correctOptionId: "opt2" },
            { id: "p3", native: "Ojekoo", audioUrl: "/audio/ga/good_morning.mp3", correctOptionId: "opt3" }
          ],
          options: [
            { id: "opt1", text: "Yes" },
            { id: "opt2", text: "No" },
            { id: "opt3", text: "Good morning" }
          ],
          correctDrops: [
            { pairId: "p1", optionId: "opt1" },
            { pairId: "p2", optionId: "opt2" },
            { pairId: "p3", optionId: "opt3" }
          ],
          hints: ["Yes", "No", "Good morning"],
          explanation: "These are basic affirmatives and negatives in Ga."
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
        instruction: "Select the correct Ga greeting.",
        question: "What is 'Good morning' in Ga?",
        options: [
          { id: 1, text: "Ojekoo" },
          { id: 2, text: "Minaokoo" },
          { id: 3, text: "Oshwiee" },
          { id: 4, text: "Te oyɔɔ tɛŋŋ?" }
        ],
        correctOptionId: 1,
        hints: ["Used before noon"],
        explanation: "'Ojekoo' is the Ga phrase for 'Good morning'."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ga greeting.",
        question: "What is 'Good evening' in Ga?",
        options: [
          { id: 1, text: "Ojekoo" },
          { id: 2, text: "Minaokoo" },
          { id: 3, text: "Oshwiee" },
          { id: 4, text: "Oshwiee jogbaŋŋ" }
        ],
        correctOptionId: 3,
        hints: ["Used after 6 PM"],
        explanation: "'Oshwiee' is the Ga phrase for 'Good evening'."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ga greeting.",
        question: "What is 'Good night' in Ga?",
        options: [
          { id: 1, text: "Ojekoo" },
          { id: 2, text: "Minaokoo" },
          { id: 3, text: "Oshwiee" },
          { id: 4, text: "Oshwiee jogbaŋŋ" }
        ],
        correctOptionId: 4,
        hints: ["Used when going to bed"],
        explanation: "'Oshwiee jogbaŋŋ' is the Ga phrase for 'Good night'."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'How are you?' in Ga?",
        options: [
          { id: 1, text: "Te oyɔɔ tɛŋŋ?" },
          { id: 2, text: "Mi yɛ ojogbaŋŋ" },
          { id: 3, text: "Miiŋa bo!" },
          { id: 4, text: "Yaaba jogbaŋŋ" }
        ],
        correctOptionId: 1,
        hints: ["Question about well-being"],
        explanation: "'Te oyɔɔ tɛŋŋ?' is the Ga phrase for 'How are you?'."
      },
      {
        id: 505,
        type: "matching",
        instruction: "Match each Ga phrase to its correct English meaning.",
        pairs: [
          { id: 1, left: "Oyiwala dɔŋŋ", right: "Thank you" },
          { id: 2, left: "Ofainɛ", right: "Please" },
          { id: 3, left: "Kpo", right: "Sorry" },
          { id: 4, left: "Haa", right: "Yes" },
          { id: 5, left: "Dabi", right: "No" }
        ],
        hints: ["Thank you", "Please", "Yes"],
        explanation: "These are the key phrases from this chapter."
      }
    ]
  }
};