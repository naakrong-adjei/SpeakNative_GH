// data/course_content/twi/beginner/chapter2.js
export default {
  id: 2,
  title: "Introductions",
  description: "Learn how to introduce yourself, ask about others, and share personal information in Twi",
  icon: "person-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "2-1",
      type: "vocabulary",
      title: "Introducing Yourself",
      icon: "person-outline",
      description: "Learn how to say your name and ask others for theirs",
      words: ["Me din de...", "Wo din de sɛn?", "Mene...", "M'ani agye sɛ mehyia wo"],
      vocabulary: [
        {
          id: 1,
          english: "My name is...",
          native: "Me din de...",
          pronunciation: "meh din deh"
          // audioUrl: "/audio/twi/me_din_de.mp3"
        },
        {
          id: 2,
          english: "What is your name?",
          native: "Wo din de sɛn?",
          pronunciation: "wo din deh sen"
          // audioUrl: "/audio/twi/wo_din_de_sen.mp3"
        },
        {
          id: 3,
          english: "I am...",
          native: "Mene...",
          pronunciation: "meh-neh"
          // audioUrl: "/audio/twi/mene.mp3"
        },
        {
          id: 4,
          english: "Nice to meet you",
          native: "M'ani agye sɛ mehyia wo",
          pronunciation: "mah-nee ah-jeh seh meh-hee-ah wo"
          // audioUrl: "/audio/twi/mani_agye_se_mehyia_wo.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'My name is...' in Twi?",
          options: [
            { id: 1, text: "Me din de..." },
            { id: 2, text: "Wo din de sɛn?" },
            { id: 3, text: "Mene..." },
            { id: 4, text: "Mefiri Ghana" }
          ],
          correctOptionId: 1,
          hints: ["Me = my", "din = name", "de = is"],
          explanation: "'Me din de...' = 'My name is...'. 'Me' means 'my', 'din' means 'name', and 'de' means 'is'."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'What is your name?' in Twi?",
          options: [
            { id: 1, text: "Me din de..." },
            { id: 2, text: "Wo din de sɛn?" },
            { id: 3, text: "Mene..." },
            { id: 4, text: "Wofiri he?" }
          ],
          correctOptionId: 2,
          hints: ["Wo = your", "din = name", "de sɛn? = is what?"],
          explanation: "'Wo din de sɛn?' = 'What is your name?'. 'Wo' means 'your' and 'de sɛn?' means 'is what?'."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am...' when introducing yourself?",
          options: [
            { id: 1, text: "Me din de..." },
            { id: 2, text: "Wo din de sɛn?" },
            { id: 3, text: "Mene..." },
            { id: 4, text: "Mefiri Ghana" }
          ],
          correctOptionId: 3,
          hints: ["Me = I", "ne = am/are (linking verb)"],
          explanation: "'Mene...' means 'I am...'. For example, 'Mene Kwame' means 'I am Kwame'."
        },
        {
          id: 104,
          type: "drag_drop",
          instruction: "Complete the question 'What is your name?' by dragging the correct words.",
          sentence: "[_____] din de [_____]?",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Wo", meaning: "your" },
            { id: "opt2", text: "Me", meaning: "my" },
            { id: "opt3", text: "sɛn", meaning: "what" },
            { id: "opt4", text: "he", meaning: "where" }
          ],
          correctDrops: [
            { blankId: "blank1", itemId: "opt1" },
            { blankId: "blank2", itemId: "opt3" }
          ],
          hints: ["First blank = your", "Second blank = what (question word)"],
          explanation: "'Wo din de sɛn?' = 'What is your name?'. 'Wo' means 'your' and 'sɛn' means 'what'."
        },
        {
          id: 105,
          type: "matching",
          instruction: "Match each Twi phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "Me din de Kwame", right: "My name is Kwame" },
            { id: 2, left: "Wo din de sɛn?", right: "What is your name?" },
            { id: 3, left: "Mene Kwame", right: "I am Kwame" },
            { id: 4, left: "M'ani agye sɛ mehyia wo", right: "Nice to meet you" }
          ],
          hints: ["Me din de = My name is", "Wo din de sɛn? = What is your name?", "Mene = I am"],
          explanation: "These are essential phrases for introducing yourself in Twi."
        }
      ]
    },

    {
      id: "2-2",
      type: "vocabulary",
      title: "Where Are You From?",
      icon: "globe-outline",
      description: "Learn how to ask and answer questions about where you're from",
      words: ["Wofiri he?", "Mefiri...", "Mefiri Ghana"],
      vocabulary: [
        {
          id: 5,
          english: "Where are you from?",
          native: "Wofiri he?",
          pronunciation: "wo-fee-ree heh"
          // audioUrl: "/audio/twi/wofiri_he.mp3"
        },
        {
          id: 6,
          english: "I am from...",
          native: "Mefiri...",
          pronunciation: "meh-fee-ree"
          // audioUrl: "/audio/twi/mefiri.mp3"
        },
        {
          id: 7,
          english: "Ghana",
          native: "Ghana",
          pronunciation: "gah-nah"
          // audioUrl: "/audio/twi/ghana.mp3"
        },
        {
          id: 8,
          english: "America",
          native: "America",
          pronunciation: "ah-meh-ree-kah"
          // audioUrl: "/audio/twi/america.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'Where are you from?' in Twi?",
          options: [
            { id: 1, text: "Wofiri he?" },
            { id: 2, text: "Mefiri Ghana" },
            { id: 3, text: "Kasa bɛn na wokasa?" },
            { id: 4, text: "Wo mfe ahe?" }
          ],
          correctOptionId: 1,
          hints: ["Wo = you", "firi = from", "he? = where?"],
          explanation: "'Wofiri he?' = 'Where are you from?'. 'Wo' means 'you', 'firi' means 'from', and 'he' means 'where'."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am from Ghana' in Twi?",
          options: [
            { id: 1, text: "Wofiri Ghana" },
            { id: 2, text: "Mefiri Ghana" },
            { id: 3, text: "Mefiri America" },
            { id: 4, text: "Me din de Ghana" }
          ],
          correctOptionId: 2,
          hints: ["Me = I", "firi = from", "Ghana stays the same"],
          explanation: "'Mefiri Ghana' = 'I am from Ghana'. 'Me' means 'I' and 'firi' means 'from'."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "If someone asks 'Wofiri he?', what should you say if you're from Ghana?",
          options: [
            { id: 1, text: "Mefiri Ghana" },
            { id: 2, text: "Wofiri he?" },
            { id: 3, text: "Me din de..." },
            { id: 4, text: "Mene Ghana" }
          ],
          correctOptionId: 1,
          hints: ["Response starts with 'Me'", "Tell them your country"],
          explanation: "'Mefiri Ghana' is the correct response to 'Where are you from?' if you are from Ghana."
        },
        {
          id: 204,
          type: "drag_drop",
          instruction: "Complete the question 'Where are you from?' by dragging the correct words.",
          sentence: "[_____] [_____] he?",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Wo", meaning: "you" },
            { id: "opt2", text: "Me", meaning: "I" },
            { id: "opt3", text: "firi", meaning: "from" },
            { id: "opt4", text: "kasa", meaning: "speak" }
          ],
          correctDrops: [
            { blankId: "blank1", itemId: "opt1" },
            { blankId: "blank2", itemId: "opt3" }
          ],
          hints: ["First blank = you", "Second blank = from", "Ending 'he?' is already there"],
          explanation: "'Wo' + 'firi' + 'he?' = 'Wofiri he?' which means 'Where are you from?'."
        }
      ]
    },

    {
      id: "2-3",
      type: "vocabulary",
      title: "Languages & Age",
      icon: "chatbubbles-outline",
      description: "Learn how to talk about which languages you speak and how old you are",
      words: ["Kasa bɛn na wokasa?", "Mekasa Twi", "Wo mfe ahe?", "Me mfe 25"],
      vocabulary: [
        {
          id: 9,
          english: "Which language do you speak?",
          native: "Kasa bɛn na wokasa?",
          pronunciation: "kah-sah ben nah wo-kah-sah"
          // audioUrl: "/audio/twi/kasa_ben_na_wokasa.mp3"
        },
        {
          id: 10,
          english: "I speak...",
          native: "Mekasa...",
          pronunciation: "meh-kah-sah"
          // audioUrl: "/audio/twi/mekasa.mp3"
        },
        {
          id: 11,
          english: "How old are you?",
          native: "Wo mfe ahe?",
          pronunciation: "wo mfeh ah-heh"
          // audioUrl: "/audio/twi/wo_mfe_ahe.mp3"
        },
        {
          id: 12,
          english: "I am ... years old",
          native: "Me mfe...",
          pronunciation: "meh mfeh"
          // audioUrl: "/audio/twi/me_mfe.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'Which language do you speak?' in Twi?",
          options: [
            { id: 1, text: "Kasa bɛn na wokasa?" },
            { id: 2, text: "Mekasa Twi" },
            { id: 3, text: "Wo mfe ahe?" },
            { id: 4, text: "Me mfe 25" }
          ],
          correctOptionId: 1,
          hints: ["Kasa = language/speak", "bɛn = which", "wo = you"],
          explanation: "'Kasa bɛn na wokasa?' = 'Which language do you speak?'. 'Kasa' means 'language' or 'speak'."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I speak...' in Twi?",
          options: [
            { id: 1, text: "Kasa bɛn na wokasa?" },
            { id: 2, text: "Mekasa..." },
            { id: 3, text: "Wo mfe ahe?" },
            { id: 4, text: "Me mfe..." }
          ],
          correctOptionId: 2,
          hints: ["Me = I", "kasa = speak", "Add the language name"],
          explanation: "'Mekasa...' means 'I speak...'. For example, 'Mekasa Twi' means 'I speak Twi'."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'How old are you?' in Twi?",
          options: [
            { id: 1, text: "Kasa bɛn na wokasa?" },
            { id: 2, text: "Mekasa..." },
            { id: 3, text: "Wo mfe ahe?" },
            { id: 4, text: "Me mfe..." }
          ],
          correctOptionId: 3,
          hints: ["Wo = your", "mfe = years", "ahe? = how many?"],
          explanation: "'Wo mfe ahe?' = 'How old are you?'. 'Wo' means 'your', 'mfe' means 'years', and 'ahe' means 'how many'."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am 25 years old' in Twi?",
          options: [
            { id: 1, text: "Kasa bɛn na wokasa?" },
            { id: 2, text: "Mekasa Twi" },
            { id: 3, text: "Wo mfe ahe?" },
            { id: 4, text: "Me mfe 25" }
          ],
          correctOptionId: 4,
          hints: ["Me = my", "mfe = years", "Add the number"],
          explanation: "'Me mfe 25' = 'I am 25 years old'. 'Me mfe' means 'my years' and you add the number."
        },
        {
          id: 305,
          type: "matching",
          instruction: "Match each Twi phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "Kasa bɛn na wokasa?", right: "Which language do you speak?" },
            { id: 2, left: "Mekasa Twi", right: "I speak Twi" },
            { id: 3, left: "Wo mfe ahe?", right: "How old are you?" },
            { id: 4, left: "Me mfe 20", right: "I am 20 years old" }
          ],
          hints: ["Kasa = language/speak", "mfe = years", "Mekasa = I speak"],
          explanation: "These are essential phrases for asking and answering about language and age."
        }
      ]
    },

    {
      id: "2-4",
      type: "vocabulary",
      title: "Introducing Others & Farewells",
      icon: "people-outline",
      description: "Learn to introduce friends, use pronouns, and say goodbye in Twi",
      words: ["Yi ne me yɔnko", "Ɔyɛ me yɔnko", "Nante yie", "Ɔkyena yɛbɛhyia"],
      vocabulary: [
        {
          id: 13,
          english: "This is my friend",
          native: "Yi ne me yɔnko",
          pronunciation: "yee neh meh yon-koh"
          // audioUrl: "/audio/twi/yi_ne_me_yonko.mp3"
        },
        {
          id: 14,
          english: "He is... / She is...",
          native: "Ɔyɛ...",
          pronunciation: "oh-yeh"
          // audioUrl: "/audio/twi/oye.mp3"
        },
        {
          id: 15,
          english: "Goodbye",
          native: "Nante yie",
          pronunciation: "nan-teh yee-eh"
          // audioUrl: "/audio/twi/nante_yie.mp3"
        },
        {
          id: 16,
          english: "See you tomorrow",
          native: "Ɔkyena yɛbɛhyia",
          pronunciation: "oh-chen-ah yeh-beh-hee-ah"
          // audioUrl: "/audio/twi/okyena_yebehyia.mp3"
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'This is my friend' in Twi?",
          options: [
            { id: 1, text: "Yi ne me yɔnko" },
            { id: 2, text: "Ɔyɛ me yɔnko" },
            { id: 3, text: "Nante yie" },
            { id: 4, text: "M'ani agye wo" }
          ],
          correctOptionId: 1,
          hints: ["Yi = this", "ne = is", "me yɔnko = my friend"],
          explanation: "'Yi ne me yɔnko' = 'This is my friend'. 'Yi' means 'this', 'ne' means 'is', and 'me yɔnko' means 'my friend'."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'He is...' or 'She is...' in Twi?",
          options: [
            { id: 1, text: "Yi ne..." },
            { id: 2, text: "Ɔyɛ..." },
            { id: 3, text: "Mene..." },
            { id: 4, text: "Ɔkyena yɛbɛhyia" }
          ],
          correctOptionId: 2,
          hints: ["Ɔ = he/she", "yɛ = is", "Same for both genders"],
          explanation: "'Ɔyɛ...' means 'He is...' or 'She is...'. The pronoun 'ɔ' is used for both 'he' and 'she'."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Goodbye' in Twi?",
          options: [
            { id: 1, text: "Nante yie" },
            { id: 2, text: "Ɔkyena yɛbɛhyia" },
            { id: 3, text: "M'ani agye wo" },
            { id: 4, text: "Me mfe..." }
          ],
          correctOptionId: 1,
          hints: ["Nante = walk/go", "yie = well", "Wishing someone well on their journey"],
          explanation: "'Nante yie' means 'Goodbye'. Literally it means 'Walk well' or 'Go well'."
        },
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'See you tomorrow' in Twi?",
          options: [
            { id: 1, text: "Nante yie" },
            { id: 2, text: "Ɔkyena yɛbɛhyia" },
            { id: 3, text: "M'ani agye wo" },
            { id: 4, text: "Me din de..." }
          ],
          correctOptionId: 2,
          hints: ["Ɔkyena = tomorrow", "yɛbɛhyia = we will meet"],
          explanation: "'Ɔkyena yɛbɛhyia' = 'See you tomorrow'. 'Ɔkyena' means 'tomorrow' and 'yɛbɛhyia' means 'we will meet'."
        },
        {
          id: 405,
          type: "matching",
          instruction: "Match each Twi phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "Yi ne me yɔnko", right: "This is my friend" },
            { id: 2, left: "Ɔyɛ me yɔnko", right: "He/She is my friend" },
            { id: 3, left: "Nante yie", right: "Goodbye" },
            { id: 4, left: "Ɔkyena yɛbɛhyia", right: "See you tomorrow" }
          ],
          hints: ["Yɔnko = friend", "Nante yie = go well", "Ɔkyena = tomorrow"],
          explanation: "These are essential phrases for introducing others and saying goodbye in Twi."
        }
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
        question: "If someone asks 'Wo din de sɛn?', what should you say?",
        options: [
          { id: 1, text: "Me din de Kwame" },
          { id: 2, text: "Mefiri Ghana" },
          { id: 3, text: "Me mfe 25" },
          { id: 4, text: "Mekasa Twi" }
        ],
        correctOptionId: 1,
        hints: ["They asked for your name", "Response starts with 'Me din de'"],
        explanation: "'Me din de Kwame' is the correct response as it gives your name."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'Wofiri he?', what should you say?",
        options: [
          { id: 1, text: "Me din de Kwame" },
          { id: 2, text: "Mefiri Ghana" },
          { id: 3, text: "Me mfe 25" },
          { id: 4, text: "Mekasa Twi" }
        ],
        correctOptionId: 2,
        hints: ["They asked where you're from", "Response starts with 'Me' + 'firi'"],
        explanation: "'Mefiri Ghana' is the correct response as it gives your origin."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'Kasa bɛn na wokasa?', what should you say?",
        options: [
          { id: 1, text: "Me din de Kwame" },
          { id: 2, text: "Mefiri Ghana" },
          { id: 3, text: "Me mfe 25" },
          { id: 4, text: "Mekasa Twi" }
        ],
        correctOptionId: 4,
        hints: ["They asked about language", "Response starts with 'Me' + 'kasa'"],
        explanation: "'Mekasa Twi' is the correct response as it gives the language you speak."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'Wo mfe ahe?', what should you say?",
        options: [
          { id: 1, text: "Me din de Kwame" },
          { id: 2, text: "Mefiri Ghana" },
          { id: 3, text: "Me mfe 25" },
          { id: 4, text: "Mekasa Twi" }
        ],
        correctOptionId: 3,
        hints: ["They asked about age", "Response starts with 'Me mfe'"],
        explanation: "'Me mfe 25' is the correct response as it gives your age."
      },
      {
        id: 505,
        type: "matching",
        instruction: "Match each question to its correct response in Twi.",
        pairs: [
          { id: 1, left: "Wo din de sɛn?", right: "Me din de Kwame" },
          { id: 2, left: "Wofiri he?", right: "Mefiri Ghana" },
          { id: 3, left: "Kasa bɛn na wokasa?", right: "Mekasa Twi" },
          { id: 4, left: "Wo mfe ahe?", right: "Me mfe 25" }
        ],
        hints: ["din = name", "firi = from", "kasa = language", "mfe = years"],
        explanation: "These are common Q&A pairs for introductions in Twi."
      },
      {
        id: 506,
        type: "drag_drop",
        instruction: "Complete this introduction by dragging the correct words to the blanks.",
        sentence: "[_____] ne me yɔnko. [_____] Kwame.",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Yi", meaning: "This" },
          { id: "opt2", text: "Ɔ", meaning: "He/She" },
          { id: "opt3", text: "Me", meaning: "My" },
          { id: "opt4", text: "Ɔyɛ", meaning: "He/She is" }
        ],
        correctDrops: [
          { blankId: "blank1", itemId: "opt1" },
          { blankId: "blank2", itemId: "opt4" }
        ],
        hints: ["First blank = This", "Second blank = He/She is"],
        explanation: "'Yi ne me yɔnko. Ɔyɛ Kwame.' means 'This is my friend. He is Kwame.'"
      }
    ]
  }
};
