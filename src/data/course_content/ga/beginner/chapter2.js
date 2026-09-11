export default {
  id: 2,
  title: "Introductions",
  description: "Learn how to introduce yourself and others in Ga",
  icon: "person-add-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "2-1",
      type: "words",
      title: "Meeting Someone",
      icon: "person-outline",
      description: "Learn how to ask and give your name in Ga",
      words: ["Te atsɛɔ bo tɛŋŋ?", "Atsɛɔ mi Aba", "Eye fɛo akɛ mina bo"],
      vocabulary: [
        {
          id: 16,
          english: "What is your name?",
          native: "Te atsɛɔ bo tɛŋŋ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/te_atsɛɔ_bo_tɛŋŋ.m4a")
        },
        {
          id: 17,
          english: "My name is Aba",
          native: "Atsɛɔ mi Aba",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/atsɛɔ_mi_aba.m4a")
        },
        {
          id: 20,
          english: "Nice to meet you",
          native: "Eye fɛo akɛ mina bo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/eye_fɛo_akɛ_mina_bo.m4a")
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'What is your name?' in Ga?",
          options: [
            { id: 1, text: "Te atsɛɔ bo tɛŋŋ?" },
            { id: 2, text: "Atsɛɔ mi Aba" },
            { id: 3, text: "Eye fɛo akɛ mina bo" },
            { id: 4, text: "Nɛgbɛ ojɛ?" }
          ],
          correctOptionId: 1,
          hints: ["Te...tɛŋŋ = what", "atsɛɔ = name"],
          explanation: "'Te atsɛɔ bo tɛŋŋ?' is the standard way to ask 'What is your name?' in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'My name is Aba' in Ga?",
          options: [
            { id: 1, text: "Te atsɛɔ bo tɛŋŋ?" },
            { id: 2, text: "Atsɛɔ mi Aba" },
            { id: 3, text: "Eye fɛo akɛ mina bo" },
            { id: 4, text: "Miijɛ Ghana" }
          ],
          correctOptionId: 2,
          hints: ["Atsɛɔ mi = My name is"],
          explanation: "'Atsɛɔ mi Aba' means 'My name is Aba' in Ga."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Nice to meet you' in Ga?",
          options: [
            { id: 1, text: "Te atsɛɔ bo tɛŋŋ?" },
            { id: 2, text: "Atsɛɔ mi Aba" },
            { id: 3, text: "Eye fɛo akɛ mina bo" },
            { id: 4, text: "Nɛgbɛ ohiɔ?" }
          ],
          correctOptionId: 3,
          hints: ["Used when meeting someone for the first time"],
          explanation: "'Eye fɛo akɛ mina bo' means 'Nice to meet you' in Ga."
        },
        {
          id: 204,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Atsɛɔ mi [_____] (My name is Aba)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Aba" },
            { id: "opt2", text: "bo" },
            { id: "opt3", text: "tɛŋŋ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Aba = a Ga name"],
          explanation: "Atsɛɔ mi Aba = My name is Aba in Ga."
        }
      ]
    },

    {
      id: "2-2",
      type: "words",
      title: "Where You're From",
      icon: "location-outline",
      description: "Learn how to ask and say where you're from in Ga",
      words: ["Nɛgbɛ ojɛ?", "Miijɛ Ghana", "Nɛgbɛ ohiɔ?", "Mi shia yɛ Ga"],
      vocabulary: [
        {
          id: 18,
          english: "Where are you from?",
          native: "Nɛgbɛ ojɛ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/nɛgbɛ_ojɛ.m4a")
        },
        {
          id: 19,
          english: "I am from Ghana",
          native: "Miijɛ Ghana",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/miijɛ_ghana.m4a")
        },
        {
          id: 24,
          english: "Where do you live?",
          native: "Nɛgbɛ ohiɔ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/nɛgbɛ_ohiɔ.m4a")
        },
        {
          id: 25,
          english: "I live in Accra",
          native: "Mi shia yɛ Ga",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/mi_shia_yɛ_Ga.m4a")
        }
      ],
      questions: [
        {
          id: 205,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'Where are you from?' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ ohiɔ?" },
            { id: 2, text: "Nɛgbɛ ojɛ?" },
            { id: 3, text: "Miijɛ Ghana" },
            { id: 4, text: "Mi shia yɛ Ga" }
          ],
          correctOptionId: 2,
          hints: ["Nɛgbɛ = where", "ojɛ = you are from"],
          explanation: "'Nɛgbɛ ojɛ?' = Where are you from? in Ga."
        },
        {
          id: 206,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am from Ghana' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ ojɛ?" },
            { id: 2, text: "Miijɛ Ghana" },
            { id: 3, text: "Nɛgbɛ ohiɔ?" },
            { id: 4, text: "Mi shia yɛ Ga" }
          ],
          correctOptionId: 2,
          hints: ["Miijɛ = I am from"],
          explanation: "'Miijɛ Ghana' = I am from Ghana in Ga."
        },
        {
          id: 207,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'Where do you live?' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ ohiɔ?" },
            { id: 2, text: "Nɛgbɛ ojɛ?" },
            { id: 3, text: "Miijɛ Ghana" },
            { id: 4, text: "Mi shia yɛ Ga" }
          ],
          correctOptionId: 1,
          hints: ["Nɛgbɛ = where", "ohiɔ = you live"],
          explanation: "'Nɛgbɛ ohiɔ?' = Where do you live? in Ga."
        },
        {
          id: 208,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I live in Accra' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ ojɛ?" },
            { id: 2, text: "Miijɛ Ghana" },
            { id: 3, text: "Nɛgbɛ ohiɔ?" },
            { id: 4, text: "Mi shia yɛ Ga" }
          ],
          correctOptionId: 4,
          hints: ["Mi shia yɛ = I live in", "Ga = Accra"],
          explanation: "'Mi shia yɛ Ga' = I live in Accra in Ga."
        },
        {
          id: 209,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Miijɛ [_____] (I am from Ghana)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Ghana" },
            { id: "opt2", text: "Ga" },
            { id: "opt3", text: "Nɛgbɛ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Ghana = the country"],
          explanation: "Miijɛ Ghana = I am from Ghana in Ga."
        }
      ]
    },

    {
      id: "2-3",
      type: "words",
      title: "Getting to Know You",
      icon: "id-card-outline",
      description: "Learn how to talk about yourself and introduce others in Ga",
      words: ["Afi enyiɛ ni oye?", "Miye afii nyɔŋmai enyɔ kɛ enyɔ", "Mɛni nitsumɔ otsuɔ?", "Enɛ ji minanyo"],
      vocabulary: [
        {
          id: 21,
          english: "How old are you?",
          native: "Afi enyiɛ ni oye?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/afi_enyiɛ_ni_oye.m4a")
        },
        {
          id: 100,
          english: "I am 22 years old",
          native: "Miye afii nyɔŋmai enyɔ kɛ enyɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/miye_afii_nyɔŋmai_enyɔ_kɛ_enyɔ.m4a")
        },
        {
          id: 26,
          english: "What work do you do?",
          native: "Mɛni nitsumɔ otsuɔ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/mɛni_nitsumɔ_otsuɔ.m4a")
        },
        {
          id: 27,
          english: "This is my friend",
          native: "Enɛ ji minanyo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter2/enɛ_ji_minanyo.m4a")
        }
      ],
      questions: [
        {
          id: 210,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'How old are you?' in Ga?",
          options: [
            { id: 1, text: "Mɛni nitsumɔ otsuɔ?" },
            { id: 2, text: "Afi enyiɛ ni oye?" },
            { id: 3, text: "Miye afii nyɔŋmai enyɔ kɛ enyɔ" },
            { id: 4, text: "Mi shia yɛ Ga" }
          ],
          correctOptionId: 2,
          hints: ["afi = year", "enyiɛ = how many"],
          explanation: "'Afi enyiɛ ni oye?' = How old are you? in Ga."
        },
        {
          id: 211,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am 22 years old' in Ga?",
          options: [
            { id: 1, text: "Afi enyiɛ ni oye?" },
            { id: 2, text: "Miye afii nyɔŋmai enyɔ kɛ enyɔ" },
            { id: 3, text: "Mɛni nitsumɔ otsuɔ?" },
            { id: 4, text: "Nɛgbɛ ohiɔ?" }
          ],
          correctOptionId: 2,
          hints: ["nyɔŋmai enyɔ kɛ enyɔ = 22"],
          explanation: "'Miye afii nyɔŋmai enyɔ kɛ enyɔ' = I am 22 years old in Ga."
        },
        {
          id: 212,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'What work do you do?' in Ga?",
          options: [
            { id: 1, text: "Afi enyiɛ ni oye?" },
            { id: 2, text: "Miye afii nyɔŋmai enyɔ kɛ enyɔ" },
            { id: 3, text: "Mɛni nitsumɔ otsuɔ?" },
            { id: 4, text: "Mi shia yɛ Ga" }
          ],
          correctOptionId: 3,
          hints: ["nitsumɔ = work", "otsuɔ = you do"],
          explanation: "'Mɛni nitsumɔ otsuɔ?' = What work do you do? in Ga."
        },
        {
          id: 213,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'This is my friend' in Ga?",
          options: [
            { id: 1, text: "Enɛ ji minanyo" },
            { id: 2, text: "Te atsɛɔ bo tɛŋŋ?" },
            { id: 3, text: "Atsɛɔ mi Aba" },
            { id: 4, text: "Mɛni nitsumɔ otsuɔ?" }
          ],
          correctOptionId: 1,
          hints: ["Enɛ = this", "minanyo = my friend"],
          explanation: "'Enɛ ji minanyo' = This is my friend in Ga."
        },
        {
          id: 214,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Enɛ ji [_____] (This is my friend)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "minanyo" },
            { id: "opt2", text: "Aba" },
            { id: "opt3", text: "Ghana" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["minanyo = my friend"],
          explanation: "Enɛ ji minanyo = This is my friend in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-2",
    title: "Review: Introductions",
    icon: "refresh-outline",
    description: "Review all the introduction vocabulary and phrases you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you ask 'What is your name?' in Ga?",
        options: [
          { id: 1, text: "Te atsɛɔ bo tɛŋŋ?" },
          { id: 2, text: "Atsɛɔ mi Aba" },
          { id: 3, text: "Nɛgbɛ ojɛ?" },
          { id: 4, text: "Nɛgbɛ ohiɔ?" }
        ],
        correctOptionId: 1,
        hints: ["Te...tɛŋŋ = what"],
        explanation: "'Te atsɛɔ bo tɛŋŋ?' = What is your name?"
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'My name is Aba' in Ga?",
        options: [
          { id: 1, text: "Te atsɛɔ bo tɛŋŋ?" },
          { id: 2, text: "Atsɛɔ mi Aba" },
          { id: 3, text: "Miijɛ Ghana" },
          { id: 4, text: "Mi shia yɛ Ga" }
        ],
        correctOptionId: 2,
        hints: ["Atsɛɔ mi = My name is"],
        explanation: "'Atsɛɔ mi Aba' = My name is Aba."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you ask 'Where are you from?' in Ga?",
        options: [
          { id: 1, text: "Nɛgbɛ ohiɔ?" },
          { id: 2, text: "Nɛgbɛ ojɛ?" },
          { id: 3, text: "Miijɛ Ghana" },
          { id: 4, text: "Mi shia yɛ Ga" }
        ],
        correctOptionId: 2,
        hints: ["Nɛgbɛ = where"],
        explanation: "'Nɛgbɛ ojɛ?' = Where are you from?"
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am from Ghana' in Ga?",
        options: [
          { id: 1, text: "Miijɛ Ghana" },
          { id: 2, text: "Mi shia yɛ Ga" },
          { id: 3, text: "Nɛgbɛ ojɛ?" },
          { id: 4, text: "Nɛgbɛ ohiɔ?" }
        ],
        correctOptionId: 1,
        hints: ["Miijɛ = I am from"],
        explanation: "'Miijɛ Ghana' = I am from Ghana."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you ask 'How old are you?' in Ga?",
        options: [
          { id: 1, text: "Mɛni nitsumɔ otsuɔ?" },
          { id: 2, text: "Afi enyiɛ ni oye?" },
          { id: 3, text: "Miye afii nyɔŋmai enyɔ kɛ enyɔ" },
          { id: 4, text: "Mi shia yɛ Ga" }
        ],
        correctOptionId: 2,
        hints: ["afi = year"],
        explanation: "'Afi enyiɛ ni oye?' = How old are you?"
      },
      {
        id: 506,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am 22 years old' in Ga?",
        options: [
          { id: 1, text: "Miye afii nyɔŋmai enyɔ kɛ enyɔ" },
          { id: 2, text: "Mi shia yɛ Ga" },
          { id: 3, text: "Mɛni nitsumɔ otsuɔ?" },
          { id: 4, text: "Miijɛ Ghana" }
        ],
        correctOptionId: 1,
        hints: ["nyɔŋmai enyɔ kɛ enyɔ = 22"],
        explanation: "'Miye afii nyɔŋmai enyɔ kɛ enyɔ' = I am 22 years old."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you ask 'Where do you live?' in Ga?",
        options: [
          { id: 1, text: "Nɛgbɛ ohiɔ?" },
          { id: 2, text: "Nɛgbɛ ojɛ?" },
          { id: 3, text: "Miijɛ Ghana" },
          { id: 4, text: "Mi shia yɛ Ga" }
        ],
        correctOptionId: 1,
        hints: ["ohiɔ = you live"],
        explanation: "'Nɛgbɛ ohiɔ?' = Where do you live?"
      },
      {
        id: 508,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Nice to meet you' in Ga?",
        options: [
          { id: 1, text: "Te atsɛɔ bo tɛŋŋ?" },
          { id: 2, text: "Atsɛɔ mi Aba" },
          { id: 3, text: "Eye fɛo akɛ mina bo" },
          { id: 4, text: "Nɛgbɛ ojɛ?" }
        ],
        correctOptionId: 3,
        hints: ["Used when meeting someone"],
        explanation: "'Eye fɛo akɛ mina bo' = Nice to meet you."
      },
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'This is my friend' in Ga?",
        options: [
          { id: 1, text: "Enɛ ji minanyo" },
          { id: 2, text: "Te atsɛɔ bo tɛŋŋ?" },
          { id: 3, text: "Atsɛɔ mi Aba" },
          { id: 4, text: "Mɛni nitsumɔ otsuɔ?" }
        ],
        correctOptionId: 1,
        hints: ["minanyo = my friend"],
        explanation: "'Enɛ ji minanyo' = This is my friend."
      },
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you ask 'What work do you do?' in Ga?",
        options: [
          { id: 1, text: "Afi enyiɛ ni oye?" },
          { id: 2, text: "Miye afii nyɔŋmai enyɔ kɛ enyɔ" },
          { id: 3, text: "Mɛni nitsumɔ otsuɔ?" },
          { id: 4, text: "Mi shia yɛ Ga" }
        ],
        correctOptionId: 3,
        hints: ["nitsumɔ = work"],
        explanation: "'Mɛni nitsumɔ otsuɔ?' = What work do you do?"
      },
      {
        id: 511,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Mi shia yɛ [_____] (I live in Accra)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Ga" },
          { id: "opt2", text: "Ghana" },
          { id: "opt3", text: "Aba" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["Ga = Accra"],
        explanation: "Mi shia yɛ Ga = I live in Accra."
      }
    ]
  }
};