export default {
  id: 1,
  title: "Greetings & Basics",
  description: "Learn essential Ga greetings and basic phrases for daily conversations",
  icon: "chatbubbles-outline",
  totalXp: 20,
  difficulty: "Beginner",

  sections: [
    {
      id: "1-1",
      type: "words",
      title: "Saying Hello",
      icon: "chatbubble-outline",
      description:
        "Learn how to greet people at different times of the day and welcome them in Ga",
      words: ["Ojekoo", "Minaokoo", "Oshwiee", "Oobakɛ"],
      vocabulary: [
        {
          id: 1,
          english: "Good morning",
          native: "Ojekoo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/ojekoo.m4a")
        },
        {
          id: 2,
          english: "Good afternoon",
          native: "Minaokoo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/minaokoo.m4a")
        },
        {
          id: 3,
          english: "Good evening",
          native: "Oshwiee",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/oshwiee.m4a")
        },
        {
          id: 4,
          english: "Welcome",
          native: "Oobakɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/oobakɛ.m4a")
        },
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
            { id: 4, text: "Oobakɛ" },
          ],
          correctOptionId: 1,
          hints: ["Used before noon", "Morning greeting"],
          explanation: "Ojekoo = Good morning in Ga. Response = Ojemra",
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga greeting.",
          question: "What is 'Good afternoon' in Ga?",
          options: [
            { id: 1, text: "Oobakɛ" },
            { id: 2, text: "Oshwiee" },
            { id: 3, text: "Minaokoo" },
            { id: 4, text: "Ojekoo" },
          ],
          correctOptionId: 3,
          hints: ["Used from 12 PM to 4 PM", "Afternoon greeting"],
          explanation: "Minaokoo = Good afternoon in Ga. Response = Naejɔ",
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
            { id: 4, text: "Oobakɛ" },
          ],
          correctOptionId: 3,
          hints: ["Used after 6 PM", "Evening greeting"],
          explanation: "Oshwiee = Good evening in Ga. Response = Oshwiemra",
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ga greeting.",
          question: "What is 'Welcome' in Ga?",
          options: [
            { id: 1, text: "Ojekoo" },
            { id: 2, text: "Minaokoo" },
            { id: 3, text: "Oshwiee" },
            { id: 4, text: "Oobakɛ" },
          ],
          correctOptionId: 4,
          hints: ["Used to greet someone arriving", "Hospitality greeting"],
          explanation: "Oobakɛ = Welcome in Ga.",
        },
      ],
    },

    {
      id: "1-2",
      type: "phrases",
      title: "How Are You?",
      icon: "happy-outline",
      description:
        "Learn how to ask about someone's well-being and family in Ga",
      words: [
        "Te oyɔɔ tɛŋŋ?",
        "Miyɛ ojogbaŋŋ",
        "Te oweku lɛ yɔɔ tɛŋŋ?",
      ],
      vocabulary: [
        {
          id: 5,
          english: "How are you?",
          native: "Te oyɔɔ tɛŋŋ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/te_oyɔɔ_tɛŋŋ.m4a")
        },
        {
          id: 6,
          english: "I am fine",
          native: "Miyɛ ojogbaŋŋ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/miyɛ_ojogbaŋŋ.m4a")
        },
        {
          id: 7,
          english: "How is your family?",
          native: "Te oweku lɛ yɔɔ tɛŋŋ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/te_oweku_lɛ_yɔɔ_tɛŋŋ.m4a")
        },
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'How are you?' in Ga?",
          options: [
            { id: 1, text: "Oobakɛ" },
            { id: 2, text: "Miyɛ ojogbaŋŋ" },
            { id: 3, text: "Te oyɔɔ tɛŋŋ?" },
            { id: 4, text: "Te oweku lɛ yɔɔ tɛŋŋ?" },
          ],
          correctOptionId: 3,
          hints: ["Starts with 'Te'", "A question about well-being"],
          explanation:
            "'Te oyɔɔ tɛŋŋ?' is the standard way to ask 'How are you?' in Ga.",
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question:
            "What is the correct response to 'Te oyɔɔ tɛŋŋ?' (How are you?)",
          options: [
            { id: 1, text: "Oobakɛ" },
            { id: 2, text: "Miyɛ ojogbaŋŋ" },
            { id: 3, text: "Oyiwaladɔŋŋ" },
            { id: 4, text: "Ojekoo" },
          ],
          correctOptionId: 2,
          hints: ["Miyɛ = I am"],
          explanation:
            "Miyɛ ojogbaŋŋ = I am fine. This is the standard response to 'How are you?'",
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'How is your family?' in Ga?",
          options: [
            { id: 1, text: "Miyɛ ojogbaŋŋ" },
            { id: 2, text: "Te oyɔɔ tɛŋŋ?" },
            { id: 3, text: "Te oweku lɛ yɔɔ tɛŋŋ?" },
            { id: 4, text: "Oobakɛ" },
          ],
          correctOptionId: 3,
          hints: ["About someone's family", "Extended greeting"],
          explanation:
            "'Te oweku lɛ yɔɔ tɛŋŋ?' means 'How is your family?' in Ga.",
        },
        {
          id: 204,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question:
            "How would you respond to 'Te oweku lɛ yɔɔ tɛŋŋ?' (How is your family?)",
          options: [
            { id: 1, text: "Miyɛ ojogbaŋŋ" },
            { id: 2, text: "Ojekoo" },
            { id: 3, text: "Amɛ yɛ ojogbaŋŋ" },
            { id: 4, text: "Te oyɔɔ tɛŋŋ?" },
          ],
          correctOptionId: 3,
          hints: ["'Amɛ yɛ ojogbaŋŋ' means 'They are fine'"],
          explanation:
            "Amɛ yɛ ojogbaŋŋ = They are fine. This is a common response to asking about someone's family.",
        },
      ],
    },

    {
      id: "1-3",
      type: "simple_sentences",
      title: "Polite Expressions",
      icon: "heart-outline",
      description:
        "Learn essential polite expressions for daily conversations in Ga",
      words: ["Oyiwaladɔŋŋ", "Ofainɛ"],
      vocabulary: [
        {
          id: 8,
          english: "Thank you",
          native: "Oyiwaladɔŋŋ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/oyiwaladɔŋŋ.m4a")
        },
        {
          id: 9,
          english: "Please",
          native: "Ofainɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/ofainɛ.m4a")
        },
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Thank you' in Ga?",
          options: [
            { id: 1, text: "Miyɛ ojogbaŋŋ" },
            { id: 2, text: "Oyiwaladɔŋŋ" },
            { id: 3, text: "Ofainɛ" },
            { id: 4, text: "Te oyɔɔ tɛŋŋ?" },
          ],
          correctOptionId: 2,
          hints: ["Shows gratitude"],
          explanation: "'Oyiwaladɔŋŋ' means 'Thank you' in Ga.",
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Please' in Ga?",
          options: [
            { id: 1, text: "Ofainɛ" },
            { id: 2, text: "Oobakɛ" },
            { id: 3, text: "Oyiwaladɔŋŋ" },
            { id: 4, text: "Miyɛ ojogbaŋŋ" },
          ],
          correctOptionId: 1,
          hints: ["Polite request"],
          explanation: "'Ofainɛ' means 'Please' in Ga.",
        },
      ],
    },

    {
      id: "1-4",
      type: "basic_conversations",
      title: "Saying Goodbye",
      icon: "hand-right-outline",
      description:
        "Learn common farewell expressions and good wishes in Ga",
      words: ["Nyɔɔŋ kpakpa", "Mana bo wɔ", "Gbɛfaa kpakpa"],
      vocabulary: [
        {
          id: 12,
          english: "Good night",
          native: "Nyɔɔŋ kpakpa",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/nyɔɔŋ_kpakpa.m4a")
        },
        {
          id: 14,
          english: "See you tomorrow",
          native: "Mana bo wɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/mana_bo_wɔ.m4a")
        },
        {
          id: 15,
          english: "Safe journey",
          native: "Gbɛfaa kpakpa",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/gbɛfaa_kpakpa.m4a")
        },
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Good night' in Ga?",
          options: [
            { id: 1, text: "Gbɛfaa kpakpa" },
            { id: 2, text: "Mana bo wɔ" },
            { id: 3, text: "Nyɔɔŋ kpakpa" },
            { id: 4, text: "Mɛ fioo" },
          ],
          correctOptionId: 3,
          hints: ["Used at night", "Before sleeping"],
          explanation: "'Nyɔɔŋ kpakpa' means 'Good night' in Ga.",
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'See you tomorrow' in Ga?",
          options: [
            { id: 1, text: "Gbɛfaa kpakpa" },
            { id: 2, text: "Nyɔɔŋ kpakpa" },
            { id: 3, text: "Mɛ fioo" },
            { id: 4, text: "Mana bo wɔ" },
          ],
          correctOptionId: 4,
          hints: ["Tomorrow = wɔ"],
          explanation: "'Mana bo wɔ' means 'See you tomorrow' in Ga.",
        },
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Safe journey' in Ga?",
          options: [
            { id: 1, text: "Nyɔɔŋ kpakpa" },
            { id: 2, text: "Gbɛfaa kpakpa" },
            { id: 3, text: "Mana bo wɔ" },
            { id: 4, text: "Mɛ fioo" },
          ],
          correctOptionId: 2,
          hints: ["Used when someone is traveling"],
          explanation: "'Gbɛfaa kpakpa' means 'Safe journey' in Ga.",
        },
      ],
    },

    {
      id: "1-5",
      type: "phrases",
      title: "Basic Questions & Responses",
      icon: "chatbubbles-outline",
      description:
        "Learn common questions and everyday responses in Ga",
      words: [ "Hɛɛ", "Daabi", "Misumɔɔ enɛ", "Meni nɛ?","Meni ofeɔ?", ],
      vocabulary: [
        {
          id: 17,
          english: "Yes",
          native: "Hɛɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/hɛɛ.m4a")
        },
        {
          id: 18,
          english: "No",
          native: "Daabi",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/daabi.m4a")
        },
        {
          id: 19,
          english: "I like this",
          native: "Misumɔɔ enɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/misumɔɔ_enɛ.m4a")
        },
        {
          id: 21,
          english: "What is this?",
          native: "Meni nɛ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/meni_nɛ.m4a")
        },
        {
          id: 22,
          english: "What are you doing?",
          native: "Meni ofeɔ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/meni_ofeɔ.m4a")
        },
      ],
      questions: [
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Yes' in Ga?",
          options: [
            { id: 1, text: "Hɛɛ" },
            { id: 2, text: "Daabi" },
            { id: 3, text: "Misumɔɔ enɛ" },
            { id: 4, text: "Mɛ fioo" },
          ],
          correctOptionId: 1,
          hints: ["Affirmative response"],
          explanation: "'Hɛɛ' means 'Yes' in Ga.",
        },
        {
          id: 502,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'No' in Ga?",
          options: [
            { id: 1, text: "Hɛɛ" },
            { id: 2, text: "Daabi" },
            { id: 3, text: "Misumɔɔ enɛ" },
            { id: 4, text: "Mɛ fioo" },
          ],
          correctOptionId: 2,
          hints: ["Negative response"],
          explanation: "'Daabi' means 'No' in Ga.",
        },
        {
          id: 504,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'What is this?' in Ga?",
          options: [
            { id: 1, text: "Meni nɛ?" },
            { id: 2, text: "Meni ofeɔ?" },
            { id: 3, text: "Obaanyɛ ni owa mi?" },
            { id: 4, text: "Ofainɛ ti mli ekoŋŋ" },
          ],
          correctOptionId: 1,
          hints: ["Pointing to something", "Question about an object"],
          explanation: "'Meni nɛ?' means 'What is this?' in Ga.",
        },
        {
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'What are you doing?' in Ga?",
          options: [
            { id: 1, text: "Meni nɛ?" },
            { id: 2, text: "Meni ofeɔ?" },
            { id: 3, text: "Obaanyɛ ni owa mi?" },
            { id: 4, text: "Ofainɛ wiemɔ blɛoo" },
          ],
          correctOptionId: 2,
          hints: ["Question about an action"],
          explanation: "'Meni ofeɔ?' means 'What are you doing?' in Ga.",
        },
        {
          id: 509,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I like this' in Ga?",
          options: [
            { id: 1, text: "Misumɔɔ enɛ" },
            { id: 2, text: "Minuuu shishi" },
            { id: 3, text: "Meni nɛ?" },
            { id: 4, text: "Daabi" },
          ],
          correctOptionId: 1,
          hints: ["Expressing liking"],
          explanation: "'Misumɔɔ enɛ' means 'I like this' in Ga.",
        },
      ],
    },

    {
      id: "1-6",
      type: "basic_conversations",
      title: "Everyday Conversation",
      icon: "chatbubble-ellipses-outline",
      description:
        "Learn useful expressions for keeping a conversation going in Ga",
      words: [
        "Mina bo etsɛ",
        "Mɛ fioo",
        "Minuuu shishi",
        "Obaanyɛ ni owa mi?",
        "Ofainɛ wiemɔ blɛoo",
        "Ofainɛ ti mli ekoŋŋ",
      ],
      vocabulary: [
        {
          id: 13,
          english: "Long time no see",
          native: "Mina bo etsɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/mina_bo_etsɛ.m4a")
        },
        {
          id: 16,
          english: "Wait a moment",
          native: "Mɛ fioo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/mɛ_fioo.m4a")
        },
        {
          id: 20,
          english: "I don't understand",
          native: "Minuuu shishi",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/minuuu_shishi.m4a")
        },
        {
          id: 23,
          english: "Can you help me?",
          native: "Obaanyɛ ni owa mi?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/obaanyɛ_ni_owa_mi.m4a")
        },
        {
          id: 24,
          english: "Speak slowly please",
          native: "Ofainɛ wiemɔ blɛoo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/ofainɛ_wiemɔ_blɛoo.m4a")
        },
        {
          id: 25,
          english: "Say it again please",
          native: "Ofainɛ ti mli ekoŋŋ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter1/ofainɛ_ti_mli_ekoŋŋ.m4a")
        },
      ],
      questions: [
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Long time no see' in Ga?",
          options: [
            { id: 1, text: "Mina bo etsɛ" },
            { id: 2, text: "Nyɔɔŋ kpakpa" },
            { id: 3, text: "Gbɛfaa kpakpa" },
            { id: 4, text: "Mana bo wɔ" },
          ],
          correctOptionId: 1,
          hints: ["Used when you haven't seen someone in a while"],
          explanation: "'Mina bo etsɛ' means 'Long time no see' in Ga.",
        },
        {
          id: 405,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Wait a moment' in Ga?",
          options: [
            { id: 1, text: "Mɛ fioo" },
            { id: 2, text: "Mana bo wɔ" },
            { id: 3, text: "Nyɔɔŋ kpakpa" },
            { id: 4, text: "Gbɛfaa kpakpa" },
          ],
          correctOptionId: 1,
          hints: ["Used to ask someone to wait briefly"],
          explanation: "'Mɛ fioo' means 'Wait a moment' in Ga.",
        },
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I don't understand' in Ga?",
          options: [
            { id: 1, text: "Minuuu shishi" },
            { id: 2, text: "Meni nɛ?" },
            { id: 3, text: "Meni ofeɔ?" },
            { id: 4, text: "Ofainɛ wiemɔ blɛoo" },
          ],
          correctOptionId: 1,
          hints: ["Used when you don't understand"],
          explanation: "'Minuuu shishi' means 'I don't understand' in Ga.",
        },
        {
          id: 506,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Can you help me?' in Ga?",
          options: [
            { id: 1, text: "Obaanyɛ ni owa mi?" },
            { id: 2, text: "Ofainɛ wiemɔ blɛoo" },
            { id: 3, text: "Ofainɛ ti mli ekoŋŋ" },
            { id: 4, text: "Minuuu shishi" },
          ],
          correctOptionId: 1,
          hints: ["Asking for assistance"],
          explanation:
            "'Obaanyɛ ni owa mi?' means 'Can you help me?' in Ga.",
        },
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Speak slowly please' in Ga?",
          options: [
            { id: 1, text: "Ofainɛ wiemɔ blɛoo" },
            { id: 2, text: "Ofainɛ ti mli ekoŋŋ" },
            { id: 3, text: "Obaanyɛ ni owa mi?" },
            { id: 4, text: "Minuuu shishi" },
          ],
          correctOptionId: 1,
          hints: ["Asking someone to slow down while speaking"],
          explanation:
            "'Ofainɛ wiemɔ blɛoo' means 'Speak slowly please' in Ga.",
        },
        {
          id: 508,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Say it again please' in Ga?",
          options: [
            { id: 1, text: "Ofainɛ wiemɔ blɛoo" },
            { id: 2, text: "Ofainɛ ti mli ekoŋŋ" },
            { id: 3, text: "Obaanyɛ ni owa mi?" },
            { id: 4, text: "Minuuu shishi" },
          ],
          correctOptionId: 2,
          hints: ["Asking someone to repeat"],
          explanation:
            "'Ofainɛ ti mli ekoŋŋ' means 'Say it again please' in Ga.",
        },
      ],
    },
  ],

  review: {
    id: "review-1",
    title: "Review: Greetings & Basics",
    icon: "refresh-outline",
    description:
      "Review all the greetings, phrases, and expressions you've learned",
    questions: [
      {
        id: 601,
        type: "multiple_choice",
        instruction: "Select the correct Ga greeting.",
        question: "What is 'Good morning' in Ga?",
        options: [
          { id: 1, text: "Oobakɛ" },
          { id: 2, text: "Minaokoo" },
          { id: 3, text: "Ojekoo" },
          { id: 4, text: "Oshwiee" },
        ],
        correctOptionId: 3,
        hints: ["Used before noon"],
        explanation: "Ojekoo = Good morning.",
      },
      {
        id: 602,
        type: "multiple_choice",
        instruction: "Select the correct Ga greeting.",
        question: "What is 'Welcome' in Ga?",
        options: [
          { id: 1, text: "Oshwiee" },
          { id: 2, text: "Ojekoo" },
          { id: 3, text: "Oobakɛ" },
          { id: 4, text: "Minaokoo" },
        ],
        correctOptionId: 3,
        hints: ["Used to greet someone arriving"],
        explanation: "Oobakɛ = Welcome.",
      },
      {
        id: 603,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'How are you?' in Ga?",
        options: [
          { id: 1, text: "Miyɛ ojogbaŋŋ" },
          { id: 2, text: "Ojekoo" },
          { id: 3, text: "Te oyɔɔ tɛŋŋ?" },
          { id: 4, text: "Te oweku lɛ yɔɔ tɛŋŋ?" },
        ],
        correctOptionId: 3,
        hints: ["Question about well-being"],
        explanation: "'Te oyɔɔ tɛŋŋ?' means 'How are you?' in Ga.",
      },
      {
        id: 604,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question:
          "What is the correct response to 'Te oyɔɔ tɛŋŋ?' (How are you?)",
        options: [
          { id: 1, text: "Ojekoo" },
          { id: 2, text: "Oyiwaladɔŋŋ" },
          { id: 3, text: "Miyɛ ojogbaŋŋ" },
          { id: 4, text: "Nyɔɔŋ kpakpa" },
        ],
        correctOptionId: 3,
        hints: ["Means 'I am fine'"],
        explanation: "Miyɛ ojogbaŋŋ = I am fine.",
      },
      {
        id: 605,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "What is 'Thank you' in Ga?",
        options: [
          { id: 1, text: "Miyɛ ojogbaŋŋ" },
          { id: 2, text: "Oyiwaladɔŋŋ" },
          { id: 3, text: "Ofainɛ" },
          { id: 4, text: "Te oyɔɔ tɛŋŋ?" },
        ],
        correctOptionId: 2,
        hints: ["Shows gratitude"],
        explanation: "Oyiwaladɔŋŋ = Thank you.",
      },
      {
        id: 606,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "What is 'Please' in Ga?",
        options: [
          { id: 1, text: "Oobakɛ" },
          { id: 2, text: "Oyiwaladɔŋŋ" },
          { id: 3, text: "Ofainɛ" },
          { id: 4, text: "Miyɛ ojogbaŋŋ" },
        ],
        correctOptionId: 3,
        hints: ["Used for polite requests"],
        explanation: "Ofainɛ = Please.",
      },
      {
        id: 607,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Good night' in Ga?",
        options: [
          { id: 1, text: "Nyɔɔŋ kpakpa" },
          { id: 2, text: "Gbɛfaa kpakpa" },
          { id: 3, text: "Mana bo wɔ" },
          { id: 4, text: "Mɛ fioo" },
        ],
        correctOptionId: 1,
        hints: ["Used at night"],
        explanation: "Nyɔɔŋ kpakpa = Good night.",
      },
      {
        id: 608,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Yes' in Ga?",
        options: [
          { id: 1, text: "Daabi" },
          { id: 2, text: "Hɛɛ" },
          { id: 3, text: "Misumɔɔ enɛ" },
          { id: 4, text: "Mɛ fioo" },
        ],
        correctOptionId: 2,
        hints: ["Affirmative response"],
        explanation: "Hɛɛ = Yes.",
      },
      {
        id: 609,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I don't understand' in Ga?",
        options: [
          { id: 1, text: "Minuuu shishi" },
          { id: 2, text: "Meni nɛ?" },
          { id: 3, text: "Meni ofeɔ?" },
          { id: 4, text: "Ofainɛ wiemɔ blɛoo" },
        ],
        correctOptionId: 1,
        hints: ["Used when you don't understand"],
        explanation: "Minuuu shishi = I don't understand.",
      },
      {
        id: 610,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'See you tomorrow' in Ga?",
        options: [
          { id: 1, text: "Mana bo wɔ" },
          { id: 2, text: "Mina bo etsɛ" },
          { id: 3, text: "Gbɛfaa kpakpa" },
          { id: 4, text: "Nyɔɔŋ kpakpa" },
        ],
        correctOptionId: 1,
        hints: ["Tomorrow = wɔ"],
        explanation: "Mana bo wɔ = See you tomorrow.",
      },
    ],
  },
};