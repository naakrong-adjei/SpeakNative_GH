export default {
  id: 10,
  title: "Basic Conversations",
  description: "Learn essential phrases for everyday conversations in Ewe",
  icon: "chatbubbles-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "10-1",
      type: "words",
      title: "Yes & No",
      icon: "checkmark-circle-outline",
      description: "Learn how to say yes, no, and express likes in Ewe",
      words: ["Ɛ̃", "Ao", "Melɔ̃e"],
      vocabulary: [
        {
          id: 122,
          english: "Yes",
          native: "Ɛ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/ɛ̃.m4a")
        },
        {
          id: 123,
          english: "No",
          native: "Ao",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/ao.m4a")
        },
        {
          id: 132,
          english: "I like it",
          native: "Melɔ̃e",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/melɔ̃e.m4a")
        }
      ],
      questions: [
        {
          id: 1001,
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
          id: 1002,
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
          id: 1003,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/melɔ̃e.m4a"),
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
      id: "10-2",
      type: "phrases",
      title: "Asking for Help",
      icon: "help-circle-outline",
      description: "Learn how to ask for help and clarification in Ewe",
      words: ["Nyemese egɔme o", "Meɖe kuku ƒo nu blewuu", "Àte ŋu akpe ɖe ŋunyea?", "Meɖe kuku gblɔe ake"],
      vocabulary: [
        {
          id: 124,
          english: "I don't understand",
          native: "Nyemese egɔme o",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/nyemese_egɔme_o.m4a")
        },
        {
          id: 125,
          english: "Speak slowly please",
          native: "Meɖe kuku ƒo nu blewuu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/meɖe_kuku_ƒo_nu_blewuu.m4a")
        },
        {
          id: 126,
          english: "Can you help me?",
          native: "Àte ŋu akpe ɖe ŋunyea?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/àte_ŋu_akpe_ɖe_ŋunyea.m4a")
        },
        {
          id: 129,
          english: "Say it again please",
          native: "Meɖe kuku gblɔe ake",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/meɖe_kuku_gblɔe_ake.m4a")
        }
      ],
      questions: [
        {
          id: 1004,
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
          id: 1005,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/àte_ŋu_akpe_ɖe_ŋunyea.m4a"),
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
          id: 1006,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "Meɖe kuku ƒo nu ___ (Speak slowly please)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "blewuu" },
            { id: "opt2", text: "ake" },
            { id: "opt3", text: "ŋunye" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["blewuu = slowly"],
          explanation: "Meɖe kuku ƒo nu blewuu = Speak slowly please in Ewe."
        }
      ]
    },

    {
      id: "10-3",
      type: "phrases",
      title: "Being Polite",
      icon: "heart-outline",
      description: "Learn polite expressions for everyday situations in Ewe",
      words: ["Taflatse", "Baba na wò", "Lala vie"],
      vocabulary: [
        {
          id: 127,
          english: "Excuse me",
          native: "Taflatse",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/taflatse.m4a")
        },
        {
          id: 130,
          english: "I am sorry",
          native: "Baba na wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/baba_na_wò.m4a")
        },
        {
          id: 131,
          english: "Wait a moment",
          native: "Lala vie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/lala_vie.m4a")
        }
      ],
      questions: [
        {
          id: 1007,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Excuse me' in Ewe?",
          options: [
            { id: 1, text: "Taflatse" },
            { id: 2, text: "Baba na wò" },
            { id: 3, text: "Lala vie" },
            { id: 4, text: "Meɖe kuku" }
          ],
          correctOptionId: 1,
          hints: ["Used to get someone's attention"],
          explanation: "Taflatse = Excuse me in Ewe."
        },
        {
          id: 1008,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/baba_na_wò.m4a"),
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
          id: 1009,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "Lala ___ (Wait a moment)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "vie" },
            { id: "opt2", text: "wò" },
            { id: "opt3", text: "me" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["vie = a little/moment"],
          explanation: "Lala vie = Wait a moment in Ewe."
        }
      ]
    },

    {
      id: "10-4",
      type: "phrases",
      title: "Small Talk",
      icon: "chatbubble-outline",
      description: "Learn small talk phrases for everyday conversations in Ewe",
      words: ["Míado go emegbe", "Nu kae nye ehia?"],
      vocabulary: [
        {
          id: 133,
          english: "See you later",
          native: "Míado go emegbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/míado_go_emegbe.m4a")
        },
        {
          id: 128,
          english: "What is this?",
          native: "Nu kae nye ehia?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/nu_kae_nye_ehia.m4a")
        }
      ],
      questions: [
        {
          id: 1010,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'See you later' in Ewe?",
          options: [
            { id: 1, text: "Míado go emegbe" },
            { id: 2, text: "Nu kae nye ehia?" },
            { id: 3, text: "Míado go etsɔ" },
            { id: 4, text: "Hede nyuie" }
          ],
          correctOptionId: 1,
          hints: ["emegbe = later"],
          explanation: "Míado go emegbe = See you later in Ewe."
        },
        {
          id: 1011,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/nu_kae_nye_ehia.m4a"),
          options: [
            { id: 1, text: "See you later" },
            { id: 2, text: "What is this?" },
            { id: 3, text: "What is your name?" },
            { id: 4, text: "How are you?" }
          ],
          correctOptionId: 2,
          hints: ["Nu = thing", "kae = what", "ehia = this"],
          explanation: "You heard 'Nu kae nye ehia?' which means 'What is this?' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-10",
    title: "Review: Basic Conversations",
    icon: "refresh-outline",
    description: "Review all the basic conversation phrases you've learned",
    questions: [
      {
        id: 1012,
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
        id: 1013,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/ao.m4a"),
        options: [
          { id: 1, text: "Yes" },
          { id: 2, text: "No" },
          { id: 3, text: "I like it" },
          { id: 4, text: "Excuse me" }
        ],
        correctOptionId: 2,
        hints: ["Negative response"],
        explanation: "You heard 'Ao' which means 'No' in Ewe."
      },
      {
        id: 1014,
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
        explanation: "Nyemese egɔme o = I don't understand."
      },
      {
        id: 1015,
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
        id: 1016,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter10/meɖe_kuku_gblɔe_ake.m4a"),
        options: [
          { id: 1, text: "I don't understand" },
          { id: 2, text: "Speak slowly please" },
          { id: 3, text: "Can you help me?" },
          { id: 4, text: "Say it again please" }
        ],
        correctOptionId: 4,
        hints: ["ake = again"],
        explanation: "You heard 'Meɖe kuku gblɔe ake' which means 'Say it again please'."
      },
      {
        id: 1017,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Excuse me' in Ewe?",
        options: [
          { id: 1, text: "Taflatse" },
          { id: 2, text: "Baba na wò" },
          { id: 3, text: "Lala vie" },
          { id: 4, text: "Meɖe kuku" }
        ],
        correctOptionId: 1,
        hints: ["Used to get someone's attention"],
        explanation: "Taflatse = Excuse me."
      },
      {
        id: 1018,
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
        id: 1019,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'See you later' in Ewe?",
        options: [
          { id: 1, text: "Míado go emegbe" },
          { id: 2, text: "Nu kae nye ehia?" },
          { id: 3, text: "Míado go etsɔ" },
          { id: 4, text: "Hede nyuie" }
        ],
        correctOptionId: 1,
        hints: ["emegbe = later"],
        explanation: "Míado go emegbe = See you later."
      },
      {
        id: 1020,
        type: "drag_drop",
        instruction: "Complete the Ewe phrase by dragging the correct word.",
        question: "Lala ___ (Wait a moment)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "vie" },
          { id: "opt2", text: "wò" },
          { id: "opt3", text: "me" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt1"
        },
        hints: ["vie = a little/moment"],
        explanation: "Lala vie = Wait a moment."
      },
      {
        id: 1021,
        type: "drag_drop",
        instruction: "Complete the Ewe phrase by dragging the correct word.",
        question: "Nu kae nye ___? (What is this?)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "ehia" },
          { id: "opt2", text: "wò" },
          { id: "opt3", text: "me" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt1"
        },
        hints: ["ehia = this"],
        explanation: "Nu kae nye ehia? = What is this?"
      }
    ]
  }
};