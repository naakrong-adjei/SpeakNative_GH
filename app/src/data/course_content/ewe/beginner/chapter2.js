// data/course_content/ewe/beginner/chapter2.js
export default {
  id: 2,
  title: "Introductions",
  description: "Learn how to introduce yourself, ask about others, and share personal information in Ewe",
  icon: "person-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "2-1",
      type: "words",
      title: "Introducing Yourself",
      icon: "person-outline",
      description: "Learn how to say your name and ask others for theirs",
      words: ["Nye ŋkɔe nye...", "Ŋkɔ wò ɖe?", "Nyee nye...", "Mɛganyɔa"],
      vocabulary: [
        {
          id: 1,
          english: "My name is...",
          native: "Nye ŋkɔe nye...",
          pronunciation: "nyeh ng-koh-eh nyeh"
          // audioUrl: "/audio/ewe/nye_ŋkɔe_nye.mp3"
        },
        {
          id: 2,
          english: "What is your name?",
          native: "Ŋkɔ wò ɖe?",
          pronunciation: "ng-koh woh deh"
          // audioUrl: "/audio/ewe/ŋkɔ_wò_ɖe.mp3"
        },
        {
          id: 3,
          english: "I am...",
          native: "Nye nye...",
          pronunciation: "nyeh nyeh"
          // audioUrl: "/audio/ewe/nye_nye.mp3"
        },
        {
          id: 4,
          english: "Nice to meet you",
          native: "Mɛganyɔa",
          pronunciation: "meh-gah-nyoh-ah"
          // audioUrl: "/audio/ewe/mɛganyɔa.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'My name is...' in Ewe?",
          options: [
            { id: 1, text: "Nye ŋkɔe nye..." },
            { id: 2, text: "Ŋkɔ wò ɖe?" },
            { id: 3, text: "Nye nye..." },
            { id: 4, text: "Nyee tso Ghana" }
          ],
          correctOptionId: 1,
          hints: ["Nye = my", "ŋkɔ = name"],
          explanation: "'Nye ŋkɔe nye...' is the correct way to say 'My name is...' in Ewe. 'Nye' means 'my', 'ŋkɔ' means 'name'."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'What is your name?' in Ewe?",
          options: [
            { id: 1, text: "Nye ŋkɔe nye..." },
            { id: 2, text: "Ŋkɔ wò ɖe?" },
            { id: 3, text: "Nye nye..." },
            { id: 4, text: "Nyee tso he?" }
          ],
          correctOptionId: 2,
          hints: ["Ŋkɔ = name", "wò = your", "ɖe? = what?"],
          explanation: "'Ŋkɔ wò ɖe?' means 'What is your name?' in Ewe. 'Ŋkɔ' means 'name', 'wò' means 'your', and 'ɖe' means 'what'."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am...' when introducing yourself?",
          options: [
            { id: 1, text: "Nye ŋkɔe nye..." },
            { id: 2, text: "Ŋkɔ wò ɖe?" },
            { id: 3, text: "Nye nye..." },
            { id: 4, text: "Nyee tso Ghana" }
          ],
          correctOptionId: 3,
          hints: ["Nye = I", "nye = am/are (linking verb)"],
          explanation: "'Nye nye...' means 'I am...' in Ewe. For example, 'Nye nye Kwame' means 'I am Kwame'."
        },
        {
          id: 104,
          type: "drag_drop",
          instruction: "Complete the question 'What is your name?' by dragging the correct words.",
          sentence: "Ŋkɔ [_____] ɖe?",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "wò", meaning: "your" },
            { id: "opt2", text: "nye", meaning: "my" },
            { id: "opt3", text: "ɖe", meaning: "what" },
            { id: "opt4", text: "he", meaning: "where" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Blank = your"],
          explanation: "'Ŋkɔ wò ɖe?' = 'What is your name?' 'Wò' means 'your'."
        },
        {
          id: 105,
          type: "matching",
          instruction: "Match each Ewe phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "Nye ŋkɔe nye Kwame", right: "My name is Kwame" },
            { id: 2, left: "Ŋkɔ wò ɖe?", right: "What is your name?" },
            { id: 3, left: "Nye nye Kwame", right: "I am Kwame" },
            { id: 4, left: "Mɛganyɔa", right: "Nice to meet you" }
          ],
          hints: ["Nye ŋkɔe nye = My name is", "Ŋkɔ wò ɖe? = What is your name?", "Nye nye = I am"],
          explanation: "These are essential phrases for introducing yourself in Ewe."
        },
        // Listening matching question commented out - requires audio file
        // {
        //   id: 106,
        //   type: "listening_matching",
        //   instruction: "Listen to each Ewe phrase and match it to its English meaning.",
        //   question: "Match each phrase you hear to its meaning.",
        //   audioUrl: "/audio/ewe/intros.mp3",
        //   pairs: [
        //     { id: 1, audioUrl: "/audio/ewe/nye_ŋkɔe_nye.mp3", right: "My name is" },
        //     { id: 2, audioUrl: "/audio/ewe/ŋkɔ_wò_ɖe.mp3", right: "What is your name?" }
        //   ],
        //   hints: ["Ŋkɔ = name"],
        //   explanation: "These are essential introduction phrases in Ewe."
        // }
      ]
    },

    {
      id: "2-2",
      type: "phrases",
      title: "Where Are You From?",
      icon: "globe-outline",
      description: "Learn how to ask and answer questions about where you're from",
      words: ["Nyee tso he?", "Nyee tso...", "Nyee tso Ghana"],
      vocabulary: [
        {
          id: 5,
          english: "Where are you from?",
          native: "Nyee tso he?",
          pronunciation: "nyee-eh tsoh heh"
          // audioUrl: "/audio/ewe/nyee_tso_he.mp3"
        },
        {
          id: 6,
          english: "I am from...",
          native: "Nyee tso...",
          pronunciation: "nyee-eh tsoh"
          // audioUrl: "/audio/ewe/nyee_tso.mp3"
        },
        {
          id: 7,
          english: "Ghana",
          native: "Ghana",
          pronunciation: "gah-nah"
          // audioUrl: "/audio/ewe/ghana.mp3"
        },
        {
          id: 8,
          english: "America",
          native: "America",
          pronunciation: "ah-meh-ree-kah"
          // audioUrl: "/audio/ewe/america.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'Where are you from?' in Ewe?",
          options: [
            { id: 1, text: "Nyee tso he?" },
            { id: 2, text: "Nyee tso Ghana" },
            { id: 3, text: "Ŋkɔ wò ɖe?" },
            { id: 4, text: "Efɔa?" }
          ],
          correctOptionId: 1,
          hints: ["Nyee = you", "tso = from", "he? = where?"],
          explanation: "'Nyee tso he?' means 'Where are you from?' in Ewe. 'Nyee' means 'you', 'tso' means 'from', and 'he' means 'where'."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am from Ghana' in Ewe?",
          options: [
            { id: 1, text: "Nyee tso Ghana" },
            { id: 2, text: "Nyee tso Ghana" },
            { id: 3, text: "Nyee tso America" },
            { id: 4, text: "Nye ŋkɔe nye Ghana" }
          ],
          correctOptionId: 2,
          hints: ["Nyee tso = I am from", "Ghana stays the same"],
          explanation: "'Nyee tso Ghana' means 'I am from Ghana' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "If someone asks 'Nyee tso he?', what should you say if you're from Ghana?",
          options: [
            { id: 1, text: "Nyee tso Ghana" },
            { id: 2, text: "Nyee tso he?" },
            { id: 3, text: "Nye ŋkɔe nye..." },
            { id: 4, text: "Nye nye Ghana" }
          ],
          correctOptionId: 1,
          hints: ["Response should start with 'Nyee tso'", "Tell them your country"],
          explanation: "'Nyee tso Ghana' is the correct response to 'Where are you from?' if you are from Ghana."
        },
        {
          id: 204,
          type: "drag_drop",
          instruction: "Complete the question 'Where are you from?' by dragging the correct words.",
          sentence: "[_____] [_____] he?",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Nyee", meaning: "you" },
            { id: "opt2", text: "Nye", meaning: "I" },
            { id: "opt3", text: "tso", meaning: "from" },
            { id: "opt4", text: "kasa", meaning: "speak" }
          ],
          correctDrops: [
            { blankId: "blank1", itemId: "opt1" },
            { blankId: "blank2", itemId: "opt3" }
          ],
          hints: ["First blank = you", "Second blank = from", "Ending 'he?' is already there"],
          explanation: "'Nyee' + 'tso' + 'he?' = 'Nyee tso he?' which means 'Where are you from?'."
        }
      ]
    },

    {
      id: "2-3",
      type: "simple_sentences",
      title: "Languages & Age",
      icon: "chatbubbles-outline",
      description: "Learn how to talk about which languages you speak and how old you are",
      words: ["Gbe ka nèƒo?", "Meƒoa Eʋegbe", "Ƒi wò ƒe neɖe?", "Ƒi nye ..."],
      vocabulary: [
        {
          id: 9,
          english: "Which language do you speak?",
          native: "Gbe ka nèƒo?",
          pronunciation: "gbeh kah neh-foh"
          // audioUrl: "/audio/ewe/gbe_ka_nèƒo.mp3"
        },
        {
          id: 10,
          english: "I speak...",
          native: "Meƒo...",
          pronunciation: "meh-foh"
          // audioUrl: "/audio/ewe/meƒo.mp3"
        },
        {
          id: 11,
          english: "How old are you?",
          native: "Ƒi wò ƒe neɖe?",
          pronunciation: "fee woh feh neh-deh"
          // audioUrl: "/audio/ewe/ƒi_wò_ƒe_neɖe.mp3"
        },
        {
          id: 12,
          english: "I am ... years old",
          native: "Ƒi nye ...",
          pronunciation: "fee nyeh"
          // audioUrl: "/audio/ewe/ƒi_nye.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'Which language do you speak?' in Ewe?",
          options: [
            { id: 1, text: "Gbe ka nèƒo?" },
            { id: 2, text: "Meƒo Eʋegbe" },
            { id: 3, text: "Ƒi wò ƒe neɖe?" },
            { id: 4, text: "Ƒi nye 25" }
          ],
          correctOptionId: 1,
          hints: ["Gbe = language", "ka = which", "nèƒo = you speak"],
          explanation: "'Gbe ka nèƒo?' means 'Which language do you speak?' in Ewe. 'Gbe' means 'language', 'ka' means 'which'."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I speak...' in Ewe?",
          options: [
            { id: 1, text: "Gbe ka nèƒo?" },
            { id: 2, text: "Meƒo..." },
            { id: 3, text: "Ƒi wò ƒe neɖe?" },
            { id: 4, text: "Ƒi nye..." }
          ],
          correctOptionId: 2,
          hints: ["Me = I", "ƒo = speak", "Add the language name"],
          explanation: "'Meƒo...' means 'I speak...' in Ewe. For example, 'Meƒo Eʋegbe' means 'I speak Ewe'."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'How old are you?' in Ewe?",
          options: [
            { id: 1, text: "Gbe ka nèƒo?" },
            { id: 2, text: "Meƒo..." },
            { id: 3, text: "Ƒi wò ƒe neɖe?" },
            { id: 4, text: "Ƒi nye..." }
          ],
          correctOptionId: 3,
          hints: ["Ƒi = year", "wò = your", "neɖe? = how many?"],
          explanation: "'Ƒi wò ƒe neɖe?' means 'How old are you?' in Ewe. 'Ƒi' means 'year', 'wò' means 'your'."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am 25 years old' in Ewe?",
          options: [
            { id: 1, text: "Gbe ka nèƒo?" },
            { id: 2, text: "Meƒo Eʋegbe" },
            { id: 3, text: "Ƒi wò ƒe neɖe?" },
            { id: 4, text: "Ƒi nye 25" }
          ],
          correctOptionId: 4,
          hints: ["Ƒi = year", "nye = my", "Add the number"],
          explanation: "'Ƒi nye 25' = 'I am 25 years old'. 'Ƒi nye' means 'my years' and you add the number."
        },
        {
          id: 305,
          type: "matching",
          instruction: "Match each Ewe phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "Gbe ka nèƒo?", right: "Which language do you speak?" },
            { id: 2, left: "Meƒo Eʋegbe", right: "I speak Ewe" },
            { id: 3, left: "Ƒi wò ƒe neɖe?", right: "How old are you?" },
            { id: 4, left: "Ƒi nye 20", right: "I am 20 years old" }
          ],
          hints: ["Gbe = language", "Meƒo = I speak", "Ƒi = year"],
          explanation: "These are essential phrases for asking and answering about language and age."
        }
      ]
    },

    {
      id: "2-4",
      type: "basic_conversations",
      title: "Introducing Others & Farewells",
      icon: "people-outline",
      description: "Learn to introduce friends, use pronouns, and say goodbye in Ewe",
      words: ["Esia nye nye xɔ̃", "Enye nye xɔ̃", "Ɖagbe", "Míado go etsɔ"],
      vocabulary: [
        {
          id: 13,
          english: "This is my friend",
          native: "Esia nye nye xɔ̃",
          pronunciation: "eh-see-ah nyeh nyeh khon"
          // audioUrl: "/audio/ewe/esia_nye_nye_xɔ̃.mp3"
        },
        {
          id: 14,
          english: "He is... / She is...",
          native: "Enye...",
          pronunciation: "eh-nyeh"
          // audioUrl: "/audio/ewe/enye.mp3"
        },
        {
          id: 15,
          english: "Goodbye",
          native: "Ɖagbe",
          pronunciation: "dah-gbeh"
          // audioUrl: "/audio/ewe/ɖagbe.mp3"
        },
        {
          id: 16,
          english: "See you tomorrow",
          native: "Míado go etsɔ",
          pronunciation: "mee-ah-doh goh eh-tsoh"
          // audioUrl: "/audio/ewe/miado_go_etsɔ.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'This is my friend' in Ewe?",
          options: [
            { id: 1, text: "Esia nye nye xɔ̃" },
            { id: 2, text: "Enye nye xɔ̃" },
            { id: 3, text: "Ɖagbe" },
            { id: 4, text: "Mɛganyɔa" }
          ],
          correctOptionId: 1,
          hints: ["Esia = this", "nye nye xɔ̃ = my friend"],
          explanation: "'Esia nye nye xɔ̃' means 'This is my friend' in Ewe. 'Esia' means 'this' and 'nye xɔ̃' means 'my friend'."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'He is...' or 'She is...' in Ewe?",
          options: [
            { id: 1, text: "Esia nye..." },
            { id: 2, text: "Enye..." },
            { id: 3, text: "Nye nye..." },
            { id: 4, text: "Míado go etsɔ" }
          ],
          correctOptionId: 2,
          hints: ["E = he/she", "nye = is", "Same for both genders"],
          explanation: "'Enye...' means 'He is...' or 'She is...' in Ewe."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Goodbye' in Ewe?",
          options: [
            { id: 1, text: "Ɖagbe" },
            { id: 2, text: "Míado go etsɔ" },
            { id: 3, text: "Mɛganyɔa" },
            { id: 4, text: "Ƒi nye..." }
          ],
          correctOptionId: 1,
          hints: ["Used when parting ways"],
          explanation: "'Ɖagbe' means 'Goodbye' in Ewe. It's used when you're leaving."
        },
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'See you tomorrow' in Ewe?",
          options: [
            { id: 1, text: "Ɖagbe" },
            { id: 2, text: "Míado go etsɔ" },
            { id: 3, text: "Mɛganyɔa" },
            { id: 4, text: "Nye ŋkɔe nye..." }
          ],
          correctOptionId: 2,
          hints: ["etsɔ = tomorrow", "Míado go = we will meet"],
          explanation: "'Míado go etsɔ' means 'See you tomorrow' in Ewe. 'Etsɔ' means 'tomorrow'."
        },
        {
          id: 405,
          type: "matching",
          instruction: "Match each Ewe phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "Esia nye nye xɔ̃", right: "This is my friend" },
            { id: 2, left: "Enye nye xɔ̃", right: "He/She is my friend" },
            { id: 3, left: "Ɖagbe", right: "Goodbye" },
            { id: 4, left: "Míado go etsɔ", right: "See you tomorrow" }
          ],
          hints: ["xɔ̃ = friend", "Ɖagbe = goodbye", "etsɔ = tomorrow"],
          explanation: "These are essential phrases for introducing others and saying goodbye in Ewe."
        },
        // Listening matching question commented out - requires audio file
        // {
        //   id: 406,
        //   type: "listening_matching",
        //   instruction: "Listen to each Ewe phrase and match it to its English meaning.",
        //   question: "Match each phrase you hear to its meaning.",
        //   pairs: [
        //     { id: 1, audioUrl: "/audio/ewe/ɖagbe.mp3", right: "Goodbye" },
        //     { id: 2, audioUrl: "/audio/ewe/miado_go_etsɔ.mp3", right: "See you tomorrow" }
        //   ],
        //   hints: ["etsɔ = tomorrow"],
        //   explanation: "These are essential farewell phrases in Ewe."
        // }
      ]
    }
  ],

  review: {
    id: "review-2",
    title: "Review: Introductions",
    icon: "refresh-outline",
    description: "Review all the phrases you've learned for introducing yourself and others",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'Ŋkɔ wò ɖe?', what should you say?",
        options: [
          { id: 1, text: "Nye ŋkɔe nye Kwame" },
          { id: 2, text: "Nyee tso Ghana" },
          { id: 3, text: "Ƒi nye 25" },
          { id: 4, text: "Meƒo Eʋegbe" }
        ],
        correctOptionId: 1,
        hints: ["They asked for your name", "Response starts with 'Nye ŋkɔe nye'"],
        explanation: "'Nye ŋkɔe nye Kwame' is the correct response as it gives your name."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'Nyee tso he?', what should you say?",
        options: [
          { id: 1, text: "Nye ŋkɔe nye Kwame" },
          { id: 2, text: "Nyee tso Ghana" },
          { id: 3, text: "Ƒi nye 25" },
          { id: 4, text: "Meƒo Eʋegbe" }
        ],
        correctOptionId: 2,
        hints: ["They asked where you're from", "Response starts with 'Nyee tso'"],
        explanation: "'Nyee tso Ghana' is the correct response as it gives your origin."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'Gbe ka nèƒo?', what should you say?",
        options: [
          { id: 1, text: "Nye ŋkɔe nye Kwame" },
          { id: 2, text: "Nyee tso Ghana" },
          { id: 3, text: "Ƒi nye 25" },
          { id: 4, text: "Meƒo Eʋegbe" }
        ],
        correctOptionId: 4,
        hints: ["They asked about language", "Response starts with 'Meƒo'"],
        explanation: "'Meƒo Eʋegbe' is the correct response as it gives the language you speak."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'Ƒi wò ƒe neɖe?', what should you say?",
        options: [
          { id: 1, text: "Nye ŋkɔe nye Kwame" },
          { id: 2, text: "Nyee tso Ghana" },
          { id: 3, text: "Ƒi nye 25" },
          { id: 4, text: "Meƒo Eʋegbe" }
        ],
        correctOptionId: 3,
        hints: ["They asked about age", "Response starts with 'Ƒi nye'"],
        explanation: "'Ƒi nye 25' is the correct response as it gives your age."
      },
      {
        id: 505,
        type: "matching",
        instruction: "Match each question to its correct response in Ewe.",
        pairs: [
          { id: 1, left: "Ŋkɔ wò ɖe?", right: "Nye ŋkɔe nye Kwame" },
          { id: 2, left: "Nyee tso he?", right: "Nyee tso Ghana" },
          { id: 3, left: "Gbe ka nèƒo?", right: "Meƒo Eʋegbe" },
          { id: 4, left: "Ƒi wò ƒe neɖe?", right: "Ƒi nye 25" }
        ],
        hints: ["Ŋkɔ = name", "tso = from", "Gbe = language", "Ƒi = year"],
        explanation: "These are common Q&A pairs for introductions in Ewe."
      },
      {
        id: 506,
        type: "drag_drop",
        instruction: "Complete this introduction by dragging the correct words to the blanks.",
        sentence: "[_____] nye nye xɔ̃. [_____] Kwame.",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Esia", meaning: "This" },
          { id: "opt2", text: "E", meaning: "He/She" },
          { id: "opt3", text: "Nye", meaning: "My" },
          { id: "opt4", text: "Enye", meaning: "He/She is" }
        ],
        correctDrops: [
          { blankId: "blank1", itemId: "opt1" },
          { blankId: "blank2", itemId: "opt4" }
        ],
        hints: ["First blank = This", "Second blank = He/She is"],
        explanation: "'Esia nye nye xɔ̃. Enye Kwame.' means 'This is my friend. He is Kwame.'"
      }
    ]
  }
};
