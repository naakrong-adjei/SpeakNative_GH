export default {
  id: 1,
  title: "Greetings & Basics Conversations",
  description: "Learn essential Ewe greetings for daily conversations in Ghana",
  icon: "chatbubbles-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "1-1",
      type: "words",
      title: "Saying Hello",
      icon: "chatbubble-outline",
      description: "Learn how to greet people at different times of the day in Ewe",
      words: ["Ŋdi na wò", "Ŋdɔ na wò", "Fiẽ na wò", "Woezɔ"],
      vocabulary: [
        {
          id: 1,
          english: "Good morning",
          native: "Ŋdi na wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/ngdi_na_wo.m4a")
        },
        {
          id: 2,
          english: "Good afternoon",
          native: "Ŋdɔ na wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/ngdo_na_wo.m4a")
        },
        {
          id: 3,
          english: "Good evening",
          native: "Fiẽ na wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/fie_na_wo.m4a")
        },
        {
          id: 4,
          english: "Welcome",
          native: "Woezɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/woezo.m4a")
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good morning' in Ewe?",
          options: [
            { id: 1, text: "Ŋdi na wò" },
            { id: 2, text: "Ŋdɔ na wò" },
            { id: 3, text: "Fiẽ na wò" },
            { id: 4, text: "Woezɔ" }
          ],
          correctOptionId: 1,
          hints: ["Used before noon", "Morning greeting"],
          explanation: "Ŋdi na wò = Good morning. Used when greeting someone in the morning."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good afternoon' in Ewe?",
          options: [
            { id: 1, text: "Fiẽ na wò" },
            { id: 2, text: "Ŋdi na wò" },
            { id: 3, text: "Woezɔ" },
            { id: 4, text: "Ŋdɔ na wò" }
          ],
          correctOptionId: 4,
          hints: ["Used from 12 PM to 4 PM", "Afternoon greeting"],
          explanation: "Ŋdɔ na wò = Good afternoon. Used when greeting someone in the afternoon."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Good evening' in Ewe?",
          options: [
            { id: 1, text: "Woezɔ" },
            { id: 2, text: "Fiẽ na wò" },
            { id: 3, text: "Ŋdɔ na wò" },
            { id: 4, text: "Ŋdi na wò" }
          ],
          correctOptionId: 2,
          hints: ["Used after 6 PM", "Evening greeting"],
          explanation: "Fiẽ na wò = Good evening. Used when greeting someone in the evening."
        },
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ewe greeting.",
          question: "What is 'Welcome' in Ewe?",
          options: [
            { id: 1, text: "Ŋdi na wò" },
            { id: 2, text: "Ŋdɔ na wò" },
            { id: 3, text: "Fiẽ na wò" },
            { id: 4, text: "Woezɔ" }
          ],
          correctOptionId: 4,
          hints: ["Used to greet someone arriving", "Hospitality greeting"],
          explanation: "Woezɔ = Welcome. Used when welcoming someone to a place."
        }
      ]
    },

    {
      id: "1-2",
      type: "phrases",
      title: "How Are You?",
      icon: "happy-outline",
      description: "Learn how to ask and respond to 'How are you?' in Ewe",
      words: ["Èfɔa?", "Mefɔ", "Aleke wò ƒomea le?"],
      vocabulary: [
        {
          id: 5,
          english: "How are you?",
          native: "Èfɔa?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/efɔa.m4a")
        },
        {
          id: 6,
          english: "I am fine",
          native: "Mefɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/mefɔ.m4a")
        },
        {
          id: 11,
          english: "How is your family?",
          native: "Aleke wò ƒomea le?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/aleke_wo_fomea_le.m4a")
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'How are you?' in Ewe?",
          options: [
            { id: 1, text: "Woezɔ" },
            { id: 2, text: "Mefɔ" },
            { id: 3, text: "Èfɔa?" },
            { id: 4, text: "Aleke wò ƒomea le?" }
          ],
          correctOptionId: 3,
          hints: ["Starts with 'È'", "A question about well-being"],
          explanation: "'Èfɔa?' is the standard way to ask 'How are you?' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "What is the correct response to 'Èfɔa?' (How are you?)",
          options: [
            { id: 1, text: "Woezɔ" },
            { id: 2, text: "Mefɔ" },
            { id: 3, text: "Akpe" },
            { id: 4, text: "Ŋdi na wò" }
          ],
          correctOptionId: 2,
          hints: ["Mefɔ = I am fine"],
          explanation: "Mefɔ = I am fine. This is the standard response to 'How are you?'"
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'How is your family?' in Ewe?",
          options: [
            { id: 1, text: "Mefɔ" },
            { id: 2, text: "Èfɔa?" },
            { id: 3, text: "Aleke wò ƒomea le?" },
            { id: 4, text: "Woezɔ" }
          ],
          correctOptionId: 3,
          hints: ["About someone's family", "Extended greeting"],
          explanation: "'Aleke wò ƒomea le?' means 'How is your family?' in Ewe."
        },
        {
          id: 204,
          type: "multiple_choice",
          instruction: "Select the correct response.",
          question: "How would you respond to 'Aleke wò ƒomea le?' (How is your family?)",
          options: [
            { id: 1, text: "Mefɔ" },
            { id: 2, text: "Ŋdi na wò" },
            { id: 3, text: "Nye ƒomea fɔ" },
            { id: 4, text: "Èfɔa?" }
          ],
          correctOptionId: 3,
          hints: ["'Nye ƒomea fɔ' means 'My family is fine'"],
          explanation: "Nye ƒomea fɔ = My family is fine. This is a common response to asking about someone's family."
        }
      ]
    },

    {
      id: "1-3",
      type: "simple_sentences",
      title: "Polite Expressions",
      icon: "heart-outline",
      description: "Essential polite expressions for daily conversations in Ewe",
      words: ["Akpe", "Meɖe kuku", "Taflatse", "Baba na wò", "Lala vie"],
      vocabulary: [
        {
          id: 7,
          english: "Thank you",
          native: "Akpe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/akpe.m4a")
        },
        {
          id: 10,
          english: "Please",
          native: "Meɖe kuku",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/mede_kuku.m4a")
        },
        {
          id: 127,
          english: "Excuse me",
          native: "Taflatse",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/taflatse.m4a")
        },
        {
          id: 130,
          english: "I am sorry",
          native: "Baba na wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/baba_na_wò.m4a")
        },
        {
          id: 131,
          english: "Wait a moment",
          native: "Lala vie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/lala_vie.m4a")
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Thank you' in Ewe?",
          options: [
            { id: 1, text: "Mefɔ" },
            { id: 2, text: "Akpe" },
            { id: 3, text: "Meɖe kuku" },
            { id: 4, text: "Èfɔa?" }
          ],
          correctOptionId: 2,
          hints: ["Shows gratitude"],
          explanation: "'Akpe' means 'Thank you' in Ewe. It's one of the most important polite expressions."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Please' in Ewe?",
          options: [
            { id: 1, text: "Meɖe kuku" },
            { id: 2, text: "Woezɔ" },
            { id: 3, text: "Akpe" },
            { id: 4, text: "Mefɔ" }
          ],
          correctOptionId: 1,
          hints: ["Polite request"],
          explanation: "'Meɖe kuku' means 'Please' in Ewe. It's used when making polite requests."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Excuse me' in Ewe?",
          options: [
            { id: 1, text: "Taflatse" },
            { id: 2, text: "Baba na wò" },
            { id: 3, text: "Lala vie" },
            { id: 4, text: "Akpe" }
          ],
          correctOptionId: 1,
          hints: ["Used to get someone's attention"],
          explanation: "Taflatse = Excuse me in Ewe."
        },
        {
          id: 304,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/baba_na_wò.m4a"),
          options: [
            { id: 1, text: "Excuse me" },
            { id: 2, text: "I am sorry" },
            { id: 3, text: "Wait a moment" },
            { id: 4, text: "Thank you" }
          ],
          correctOptionId: 2,
          hints: ["Baba = sorry"],
          explanation: "You heard 'Baba na wò' which means 'I am sorry' in Ewe."
        },
        {
          id: 305,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          sentence: "Lala [_____] (Wait a moment)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "vie" },
            { id: "opt2", text: "wò" },
            { id: "opt3", text: "me" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["vie = a little/moment"],
          explanation: "Lala vie = Wait a moment in Ewe."
        }
      ]
    },

    {
      id: "1-4",
      type: "basic_conversations",
      title: "Saying Goodbye",
      icon: "hand-right-outline",
      description: "Learn how to say goodbye and related expressions in Ewe",
      words: ["Hede nyuie", "Zã nyuie", "Edzidzi wu esi mekpɔ wò", "Míado go etsɔ", "Mɔzɔzɔ nyuie", "Míado go emegbe"],
      vocabulary: [
        {
          id: 8,
          english: "Goodbye",
          native: "Hede nyuie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/hede_nyuie.m4a")
        },
        {
          id: 9,
          english: "Good night",
          native: "Zã nyuie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/za_nyuie.m4a")
        },
        {
          id: 12,
          english: "Long time no see",
          native: "Edzidzi wu esi mekpɔ wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/edzidzi_wu_esi_mekpɔ_wo.m4a")
        },
        {
          id: 13,
          english: "See you tomorrow",
          native: "Míado go etsɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/miado_go_etsɔ.m4a")
        },
        {
          id: 14,
          english: "Safe journey",
          native: "Mɔzɔzɔ nyuie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/mɔzɔzɔ_nyuie.m4a")
        },
        {
          id: 133,
          english: "See you later",
          native: "Míado go emegbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/míado_go_emegbe.m4a")
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Goodbye' in Ewe?",
          options: [
            { id: 1, text: "Míado go etsɔ" },
            { id: 2, text: "Zã nyuie" },
            { id: 3, text: "Hede nyuie" },
            { id: 4, text: "Mɔzɔzɔ nyuie" }
          ],
          correctOptionId: 3,
          hints: ["Used when leaving"],
          explanation: "'Hede nyuie' means 'Goodbye' in Ewe."
        },
        {
          id: 402,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Good night' in Ewe?",
          options: [
            { id: 1, text: "Mɔzɔzɔ nyuie" },
            { id: 2, text: "Míado go etsɔ" },
            { id: 3, text: "Hede nyuie" },
            { id: 4, text: "Zã nyuie" }
          ],
          correctOptionId: 4,
          hints: ["Used at night", "Before sleeping"],
          explanation: "'Zã nyuie' means 'Good night' in Ewe."
        },
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Long time no see' in Ewe?",
          options: [
            { id: 1, text: "Hede nyuie" },
            { id: 2, text: "Edzidzi wu esi mekpɔ wò" },
            { id: 3, text: "Zã nyuie" },
            { id: 4, text: "Mɔzɔzɔ nyuie" }
          ],
          correctOptionId: 2,
          hints: ["Used when you haven't seen someone in a while"],
          explanation: "'Edzidzi wu esi mekpɔ wò' means 'Long time no see' in Ewe."
        },
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'See you tomorrow' in Ewe?",
          options: [
            { id: 1, text: "Mɔzɔzɔ nyuie" },
            { id: 2, text: "Hede nyuie" },
            { id: 3, text: "Zã nyuie" },
            { id: 4, text: "Míado go etsɔ" }
          ],
          correctOptionId: 4,
          hints: ["Tomorrow = Etsɔ"],
          explanation: "'Míado go etsɔ' means 'See you tomorrow' in Ewe."
        },
        {
          id: 405,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Safe journey' in Ewe?",
          options: [
            { id: 1, text: "Zã nyuie" },
            { id: 2, text: "Mɔzɔzɔ nyuie" },
            { id: 3, text: "Míado go etsɔ" },
            { id: 4, text: "Hede nyuie" }
          ],
          correctOptionId: 2,
          hints: ["Used when someone is traveling"],
          explanation: "'Mɔzɔzɔ nyuie' means 'Safe journey' in Ewe."
        },
        {
          id: 406,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'See you later' in Ewe?",
          options: [
            { id: 1, text: "Míado go emegbe" },
            { id: 2, text: "Míado go etsɔ" },
            { id: 3, text: "Hede nyuie" },
            { id: 4, text: "Zã nyuie" }
          ],
          correctOptionId: 1,
          hints: ["emegbe = later"],
          explanation: "Míado go emegbe = See you later in Ewe."
        }
      ]
    },

    {
      id: "1-5",
      type: "phrases",
      title: "Simple Responses",
      icon: "checkmark-circle-outline",
      description: "Learn how to say yes, no, and express likes in Ewe",
      words: ["Ɛ̃", "Ao", "Melɔ̃e"],
      vocabulary: [
        {
          id: 122,
          english: "Yes",
          native: "Ɛ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/ɛ̃.m4a")
        },
        {
          id: 123,
          english: "No",
          native: "Ao",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/ao.m4a")
        },
        {
          id: 132,
          english: "I like it",
          native: "Melɔ̃e",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/melɔ̃e.m4a")
        }
      ],
      questions: [
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Yes' in Ewe?",
          options: [
            { id: 1, text: "Ɛ̃" },
            { id: 2, text: "Ao" },
            { id: 3, text: "Melɔ̃e" },
            { id: 4, text: "Taflatse" }
          ],
          correctOptionId: 1,
          hints: ["Affirmative response"],
          explanation: "Ɛ̃ = Yes in Ewe."
        },
        {
          id: 502,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'No' in Ewe?",
          options: [
            { id: 1, text: "Ɛ̃" },
            { id: 2, text: "Ao" },
            { id: 3, text: "Melɔ̃e" },
            { id: 4, text: "Lala vie" }
          ],
          correctOptionId: 2,
          hints: ["Negative response"],
          explanation: "Ao = No in Ewe."
        },
        {
          id: 503,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/melɔ̃e.m4a"),
          options: [
            { id: 1, text: "Yes" },
            { id: 2, text: "No" },
            { id: 3, text: "I like it" },
            { id: 4, text: "Excuse me" }
          ],
          correctOptionId: 3,
          hints: ["Melɔ̃e = I like it"],
          explanation: "You heard 'Melɔ̃e' which means 'I like it' in Ewe."
        }
      ]
    },

    {
      id: "1-6",
      type: "phrases",
      title: "Asking for Help",
      icon: "help-circle-outline",
      description: "Learn how to ask for help, clarification, and small talk phrases in Ewe",
      words: ["Nyemese egɔme o", "Meɖe kuku ƒo nu blewuu", "Àte ŋu akpe ɖe ŋunyea?", "Meɖe kuku gblɔe ake", "Nu kae nye ehia?"],
      vocabulary: [
        {
          id: 124,
          english: "I don't understand",
          native: "Nyemese egɔme o",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/nyemese_egɔme_o.m4a")
        },
        {
          id: 125,
          english: "Speak slowly please",
          native: "Meɖe kuku ƒo nu blewuu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/meɖe_kuku_ƒo_nu_blewuu.m4a")
        },
        {
          id: 126,
          english: "Can you help me?",
          native: "Àte ŋu akpe ɖe ŋunyea?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/àte_ŋu_akpe_ɖe_ŋunyea.m4a")
        },
        {
          id: 129,
          english: "Say it again please",
          native: "Meɖe kuku gblɔe ake",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/meɖe_kuku_gblɔe_ake.m4a")
        },
        {
          id: 128,
          english: "What is this?",
          native: "Nu kae nye ehia?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/nu_kae_nye_ehia.m4a")
        }
      ],
      questions: [
        {
          id: 504,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I don't understand' in Ewe?",
          options: [
            { id: 1, text: "Nyemese egɔme o" },
            { id: 2, text: "Meɖe kuku ƒo nu blewuu" },
            { id: 3, text: "Àte ŋu akpe ɖe ŋunyea?" },
            { id: 4, text: "Meɖe kuku gblɔe ake" }
          ],
          correctOptionId: 1,
          hints: ["Nyemese = I don't understand"],
          explanation: "Nyemese egɔme o = I don't understand in Ewe."
        },
        {
          id: 505,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/àte_ŋu_akpe_ɖe_ŋunyea.m4a"),
          options: [
            { id: 1, text: "I don't understand" },
            { id: 2, text: "Speak slowly please" },
            { id: 3, text: "Can you help me?" },
            { id: 4, text: "Say it again please" }
          ],
          correctOptionId: 3,
          hints: ["Àte ŋu = Can you", "akpe ɖe ŋunye = help me"],
          explanation: "You heard 'Àte ŋu akpe ɖe ŋunyea?' which means 'Can you help me?' in Ewe."
        },
        {
          id: 506,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          sentence: "Meɖe kuku ƒo nu [_____] (Speak slowly please)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "blewuu" },
            { id: "opt2", text: "ake" },
            { id: "opt3", text: "ŋunye" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["blewuu = slowly"],
          explanation: "Meɖe kuku ƒo nu blewuu = Speak slowly please in Ewe."
        },
        {
          id: 507,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/nu_kae_nye_ehia.m4a"),
          options: [
            { id: 1, text: "See you later" },
            { id: 2, text: "What is this?" },
            { id: 3, text: "What is your name?" },
            { id: 4, text: "How are you?" }
          ],
          correctOptionId: 2,
          hints: ["Nu = thing", "kae = what", "ehia = this"],
          explanation: "You heard 'Nu kae nye ehia?' which means 'What is this?' in Ewe."
        },
        {
          id: 508,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'What is this?' in Ewe?",
          options: [
            { id: 1, text: "Nu kae nye ehia?" },
            { id: 2, text: "Míado go emegbe" },
            { id: 3, text: "Míado go etsɔ" },
            { id: 4, text: "Hede nyuie" }
          ],
          correctOptionId: 1,
          hints: ["Nu = thing", "ehia = this"],
          explanation: "Nu kae nye ehia? = What is this? in Ewe."
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
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Ewe greeting.",
        question: "What is 'Good morning' in Ewe?",
        options: [
          { id: 1, text: "Woezɔ" },
          { id: 2, text: "Ŋdɔ na wò" },
          { id: 3, text: "Ŋdi na wò" },
          { id: 4, text: "Fiẽ na wò" }
        ],
        correctOptionId: 3,
        hints: ["Used before noon"],
        explanation: "Ŋdi na wò = Good morning."
      },
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Ewe greeting.",
        question: "What is 'Good evening' in Ewe?",
        options: [
          { id: 1, text: "Woezɔ" },
          { id: 2, text: "Ŋdi na wò" },
          { id: 3, text: "Fiẽ na wò" },
          { id: 4, text: "Ŋdɔ na wò" }
        ],
        correctOptionId: 3,
        hints: ["Used after 6 PM"],
        explanation: "Fiẽ na wò = Good evening."
      },
      {
        id: 511,
        type: "multiple_choice",
        instruction: "Select the correct Ewe greeting.",
        question: "What is 'Welcome' in Ewe?",
        options: [
          { id: 1, text: "Fiẽ na wò" },
          { id: 2, text: "Ŋdi na wò" },
          { id: 3, text: "Woezɔ" },
          { id: 4, text: "Ŋdɔ na wò" }
        ],
        correctOptionId: 3,
        hints: ["Used to greet someone arriving"],
        explanation: "Woezɔ = Welcome."
      },
      {
        id: 512,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'How are you?' in Ewe?",
        options: [
          { id: 1, text: "Mefɔ" },
          { id: 2, text: "Ŋdi na wò" },
          { id: 3, text: "Èfɔa?" },
          { id: 4, text: "Aleke wò ƒomea le?" }
        ],
        correctOptionId: 3,
        hints: ["Question about well-being"],
        explanation: "'Èfɔa?' means 'How are you?' in Ewe."
      },
      {
        id: 513,
        type: "multiple_choice",
        instruction: "Select the correct response.",
        question: "What is the correct response to 'Èfɔa?' (How are you?)",
        options: [
          { id: 1, text: "Ŋdi na wò" },
          { id: 2, text: "Akpe" },
          { id: 3, text: "Mefɔ" },
          { id: 4, text: "Zã nyuie" }
        ],
        correctOptionId: 3,
        hints: ["Means 'I am fine'"],
        explanation: "Mefɔ = I am fine."
      },
      {
        id: 514,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "What is 'Thank you' in Ewe?",
        options: [
          { id: 1, text: "Mefɔ" },
          { id: 2, text: "Akpe" },
          { id: 3, text: "Meɖe kuku" },
          { id: 4, text: "Èfɔa?" }
        ],
        correctOptionId: 2,
        hints: ["Shows gratitude"],
        explanation: "Akpe = Thank you."
      },
      {
        id: 515,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "What is 'Please' in Ewe?",
        options: [
          { id: 1, text: "Woezɔ" },
          { id: 2, text: "Akpe" },
          { id: 3, text: "Meɖe kuku" },
          { id: 4, text: "Mefɔ" }
        ],
        correctOptionId: 3,
        hints: ["Used for polite requests"],
        explanation: "Meɖe kuku = Please."
      },
      {
        id: 516,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Excuse me' in Ewe?",
        options: [
          { id: 1, text: "Taflatse" },
          { id: 2, text: "Baba na wò" },
          { id: 3, text: "Lala vie" },
          { id: 4, text: "Akpe" }
        ],
        correctOptionId: 1,
        hints: ["Used to get someone's attention"],
        explanation: "Taflatse = Excuse me."
      },
      {
        id: 517,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am sorry' in Ewe?",
        options: [
          { id: 1, text: "Taflatse" },
          { id: 2, text: "Baba na wò" },
          { id: 3, text: "Lala vie" },
          { id: 4, text: "Akpe" }
        ],
        correctOptionId: 2,
        hints: ["Baba = sorry"],
        explanation: "Baba na wò = I am sorry."
      },
      {
        id: 518,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Goodbye' in Ewe?",
        options: [
          { id: 1, text: "Hede nyuie" },
          { id: 2, text: "Zã nyuie" },
          { id: 3, text: "Mɔzɔzɔ nyuie" },
          { id: 4, text: "Míado go etsɔ" }
        ],
        correctOptionId: 1,
        hints: ["Used when leaving"],
        explanation: "Hede nyuie = Goodbye."
      },
      {
        id: 519,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'See you later' in Ewe?",
        options: [
          { id: 1, text: "Míado go emegbe" },
          { id: 2, text: "Míado go etsɔ" },
          { id: 3, text: "Hede nyuie" },
          { id: 4, text: "Zã nyuie" }
        ],
        correctOptionId: 1,
        hints: ["emegbe = later"],
        explanation: "Míado go emegbe = See you later."
      },
      {
        id: 520,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Yes' in Ewe?",
        options: [
          { id: 1, text: "Ao" },
          { id: 2, text: "Ɛ̃" },
          { id: 3, text: "Melɔ̃e" },
          { id: 4, text: "Lala vie" }
        ],
        correctOptionId: 2,
        hints: ["Affirmative response"],
        explanation: "Ɛ̃ = Yes in Ewe."
      },
      {
        id: 521,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Can you help me?' in Ewe?",
        options: [
          { id: 1, text: "Nyemese egɔme o" },
          { id: 2, text: "Meɖe kuku ƒo nu blewuu" },
          { id: 3, text: "Àte ŋu akpe ɖe ŋunyea?" },
          { id: 4, text: "Meɖe kuku gblɔe ake" }
        ],
        correctOptionId: 3,
        hints: ["Àte ŋu = Can you"],
        explanation: "Àte ŋu akpe ɖe ŋunyea? = Can you help me?"
      },
      {
        id: 522,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter1/baba_na_wò.m4a"),
        options: [
          { id: 1, text: "Excuse me" },
          { id: 2, text: "I am sorry" },
          { id: 3, text: "Wait a moment" },
          { id: 4, text: "Thank you" }
        ],
        correctOptionId: 2,
        hints: ["Baba = sorry"],
        explanation: "You heard 'Baba na wò' which means 'I am sorry'."
      },
      {
        id: 523,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'What is this?' in Ewe?",
        options: [
          { id: 1, text: "Nu kae nye ehia?" },
          { id: 2, text: "Míado go emegbe" },
          { id: 3, text: "Míado go etsɔ" },
          { id: 4, text: "Hede nyuie" }
        ],
        correctOptionId: 1,
        hints: ["Nu = thing", "ehia = this"],
        explanation: "Nu kae nye ehia? = What is this?"
      }
    ]
  }
};