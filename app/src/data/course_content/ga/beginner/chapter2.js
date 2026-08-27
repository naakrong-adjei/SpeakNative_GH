// data/course_content/ga/beginner/chapter2.js
// NOTE: Native Ga words left blank for you to fill in.
export default {
  id: 2,
  title: "Introductions",
  description: "Learn how to introduce yourself, ask about others, and share personal information in Ga",
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
      words: [],
      vocabulary: [
        { id: 1, english: "My name is...", native: "", pronunciation: "" },
        { id: 2, english: "What is your name?", native: "", pronunciation: "" },
        { id: 3, english: "I am...", native: "", pronunciation: "" },
        { id: 4, english: "Nice to meet you", native: "", pronunciation: "" }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'My name is...' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 1,
          hints: ["Mi = my", "name = name"],
          explanation: "This is the correct way to say 'My name is...' in Ga."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'What is your name?' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 2,
          hints: ["name = name", "Te...ni? = what?"],
          explanation: "This is how you ask 'What is your name?' in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am...' when introducing yourself?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 3,
          hints: ["Mi = I", "am = am"],
          explanation: "This is how you say 'I am...' in Ga."
        },
        {
          id: 104,
          type: "drag_drop",
          instruction: "Complete the phrase 'My name is...' by dragging the correct words.",
          sentence: "Mi [_____] ji ...",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "", meaning: "name" },
            { id: "opt2", text: "", meaning: "is" },
            { id: "opt3", text: "", meaning: "your name" },
            { id: "opt4", text: "", meaning: "am" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Blank = name"],
          explanation: "'Mi ___ ji...' = 'My name is...'"
        },
        {
          id: 105,
          type: "matching",
          instruction: "Match each Ga phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "", right: "My name is Kwame" },
            { id: 2, left: "", right: "What is your name?" },
            { id: 3, left: "", right: "I am Kwame" },
            { id: 4, left: "", right: "Nice to meet you" }
          ],
          hints: ["My name is", "What is your name?", "I am"],
          explanation: "These are essential phrases for introducing yourself in Ga."
        },
        {
          id: 106,
          type: "listening_matching",
          instruction: "Listen to each Ga phrase and match it to its English meaning.",
          question: "Match each phrase you hear to its meaning.",
          pairs: [
            { id: "p1", native: "", audioUrl: "/audio/ga/my_name_is.mp3", correctOptionId: "opt1" },
            { id: "p2", native: "", audioUrl: "/audio/ga/what_is_your_name.mp3", correctOptionId: "opt2" }
          ],
          options: [
            { id: "opt1", text: "My name is Kwame" },
            { id: "opt2", text: "What is your name?" }
          ],
          correctDrops: [
            { pairId: "p1", optionId: "opt1" },
            { pairId: "p2", optionId: "opt2" }
          ],
          hints: ["name = name"],
          explanation: "These are essential introduction phrases in Ga."
        }
      ]
    },
    {
      id: "2-2",
      type: "phrases",
      title: "Where Are You From?",
      icon: "globe-outline",
      description: "Learn how to ask and answer questions about where you're from",
      words: [],
      vocabulary: [
        { id: 5, english: "Where are you from?", native: "", pronunciation: "" },
        { id: 6, english: "I am from...", native: "", pronunciation: "" },
        { id: 7, english: "Ghana", native: "Ghana", pronunciation: "gah-nah" },
        { id: 8, english: "Accra", native: "Accra", pronunciation: "ah-krah" }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'Where are you from?' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 1,
          hints: ["are = are", "from = from", "te...ni? = where?"],
          explanation: "This is how you ask 'Where are you from?' in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am from Ghana' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 1,
          hints: ["I am from", "Ghana stays the same"],
          explanation: "This is how you say 'I am from Ghana' in Ga."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "If someone asks 'Where are you from?', what should you say if you're from Accra?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 1,
          hints: ["Response should start with 'I am from'", "Accra"],
          explanation: "This is the correct response if you are from Accra."
        },
        {
          id: 204,
          type: "drag_drop",
          instruction: "Complete the question 'Where are you from?' by dragging the correct words.",
          sentence: "[_____] oyɔɔ jɛ [_____]?",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "", meaning: "where" },
            { id: "opt2", text: "", meaning: "I" },
            { id: "opt3", text: "", meaning: "question marker" },
            { id: "opt4", text: "", meaning: "from" }
          ],
          correctDrops: [
            { blankId: "blank1", itemId: "opt1" },
            { blankId: "blank2", itemId: "opt3" }
          ],
          hints: ["First blank = where", "Second blank = question marker"],
          explanation: "This is how you say 'Where are you from?' in Ga."
        }
      ]
    },
    {
      id: "2-3",
      type: "simple_sentences",
      title: "Languages & Age",
      icon: "chatbubbles-outline",
      description: "Learn how to talk about which languages you speak and how old you are",
      words: [],
      vocabulary: [
        { id: 9, english: "Which language do you speak?", native: "", pronunciation: "" },
        { id: 10, english: "I speak...", native: "", pronunciation: "" },
        { id: 11, english: "How old are you?", native: "", pronunciation: "" },
        { id: 12, english: "I am ... years old", native: "", pronunciation: "" }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'Which language do you speak?' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 1,
          hints: ["language = language", "which = which"],
          explanation: "This is how you ask 'Which language do you speak?' in Ga."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I speak...' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 2,
          hints: ["Mi = I", "speak = speak", "Add the language name"],
          explanation: "This is how you say 'I speak...' in Ga."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'How old are you?' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 3,
          hints: ["year = year", "count = count", "how many? = how many?"],
          explanation: "This is how you ask 'How old are you?' in Ga."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am 25 years old' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 4,
          hints: ["year = year", "count = count", "Add the number"],
          explanation: "This is how you say 'I am 25 years old' in Ga."
        },
        {
          id: 305,
          type: "matching",
          instruction: "Match each Ga phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "", right: "Which language do you speak?" },
            { id: 2, left: "", right: "I speak Ga" },
            { id: 3, left: "", right: "How old are you?" },
            { id: 4, left: "", right: "I am 20 years old" }
          ],
          hints: ["language = language", "I speak = I speak", "year = year"],
          explanation: "These are essential phrases for asking and answering about language and age."
        }
      ]
    },
    {
      id: "2-4",
      type: "basic_conversations",
      title: "Introducing Others & Farewells",
      icon: "people-outline",
      description: "Learn to introduce friends, use pronouns, and say goodbye in Ga",
      words: [],
      vocabulary: [
        { id: 13, english: "This is my friend", native: "", pronunciation: "" },
        { id: 14, english: "He is... / She is...", native: "", pronunciation: "" },
        { id: 15, english: "Goodbye", native: "", pronunciation: "" },
        { id: 16, english: "See you tomorrow", native: "", pronunciation: "" }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'This is my friend' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 1,
          hints: ["This = this", "my friend = my friend"],
          explanation: "This is how you say 'This is my friend' in Ga."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'He is...' or 'She is...' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 2,
          hints: ["He/She", "is", "Same for both genders"],
          explanation: "This is how you say 'He is...' or 'She is...' in Ga."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Goodbye' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 1,
          hints: ["Used when parting ways"],
          explanation: "This is how you say 'Goodbye' in Ga."
        },
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'See you tomorrow' in Ga?",
          options: [
            { id: 1, text: "" },
            { id: 2, text: "" },
            { id: 3, text: "" },
            { id: 4, text: "" }
          ],
          correctOptionId: 2,
          hints: ["tomorrow = tomorrow"],
          explanation: "This is how you say 'See you tomorrow' in Ga."
        },
        {
          id: 405,
          type: "matching",
          instruction: "Match each Ga phrase to its correct English meaning.",
          pairs: [
            { id: 1, left: "", right: "This is my friend" },
            { id: 2, left: "", right: "He/She is my friend" },
            { id: 3, left: "", right: "Goodbye" },
            { id: 4, left: "", right: "See you tomorrow" }
          ],
          hints: ["friend = friend", "Goodbye = goodbye", "tomorrow = tomorrow"],
          explanation: "These are essential phrases for introducing others and saying goodbye in Ga."
        },
        {
          id: 406,
          type: "listening_matching",
          instruction: "Listen to each Ga phrase and match it to its English meaning.",
          question: "Match each phrase you hear to its meaning.",
          pairs: [
            { id: "p1", native: "", audioUrl: "/audio/ga/goodbye.mp3", correctOptionId: "opt1" },
            { id: "p2", native: "", audioUrl: "/audio/ga/see_you_tomorrow.mp3", correctOptionId: "opt2" }
          ],
          options: [
            { id: "opt1", text: "Goodbye" },
            { id: "opt2", text: "See you tomorrow" }
          ],
          correctDrops: [
            { pairId: "p1", optionId: "opt1" },
            { pairId: "p2", optionId: "opt2" }
          ],
          hints: ["Goodbye", "tomorrow"],
          explanation: "These are essential farewell phrases in Ga."
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
        question: "If someone asks 'What is your name?', what should you say?",
        options: [
          { id: 1, text: "" },
          { id: 2, text: "" },
          { id: 3, text: "" },
          { id: 4, text: "" }
        ],
        correctOptionId: 1,
        hints: ["They asked for your name", "Response starts with 'My name is'"],
        explanation: "This is the correct response as it gives your name."
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'Where are you from?', what should you say?",
        options: [
          { id: 1, text: "" },
          { id: 2, text: "" },
          { id: 3, text: "" },
          { id: 4, text: "" }
        ],
        correctOptionId: 2,
        hints: ["They asked where you're from", "Response starts with 'I am from'"],
        explanation: "This is the correct response as it gives your origin."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'Which language do you speak?', what should you say?",
        options: [
          { id: 1, text: "" },
          { id: 2, text: "" },
          { id: 3, text: "" },
          { id: 4, text: "" }
        ],
        correctOptionId: 4,
        hints: ["They asked about language", "Response starts with 'I speak'"],
        explanation: "This is the correct response as it gives the language you speak."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "If someone asks 'How old are you?', what should you say?",
        options: [
          { id: 1, text: "" },
          { id: 2, text: "" },
          { id: 3, text: "" },
          { id: 4, text: "" }
        ],
        correctOptionId: 3,
        hints: ["They asked about age", "Gives a number"],
        explanation: "This is the correct response as it gives your age."
      },
      {
        id: 505,
        type: "matching",
        instruction: "Match each question to its correct response in Ga.",
        pairs: [
          { id: 1, left: "", right: "My name is Kwame" },
          { id: 2, left: "", right: "I am from Ghana" },
          { id: 3, left: "", right: "I speak Ga" },
          { id: 4, left: "", right: "I am 25 years old" }
        ],
        hints: ["name = name", "from = from", "language = language", "year = year"],
        explanation: "These are common Q&A pairs for introductions in Ga."
      },
      {
        id: 506,
        type: "drag_drop",
        instruction: "Complete this introduction by dragging the correct words to the blanks.",
        sentence: "[_____] ji minyɛmi. [_____] ji Kwame.",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "", meaning: "This" },
          { id: "opt2", text: "", meaning: "He/She" },
          { id: "opt3", text: "", meaning: "My" },
          { id: "opt4", text: "", meaning: "I am" }
        ],
        correctDrops: [
          { blankId: "blank1", itemId: "opt1" },
          { blankId: "blank2", itemId: "opt2" }
        ],
        hints: ["First blank = This", "Second blank = He/She"],
        explanation: "'This is my friend. He/She is Kwame.'"
      }
    ]
  }
};
