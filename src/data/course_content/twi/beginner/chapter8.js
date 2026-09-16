export default {
  id: 8,
  title: "Daily Activities",
  description: "Learn daily activity vocabulary in Twi",
  icon: "time-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "8-1",
      type: "phrases",
      title: "Morning Routine",
      icon: "sunny-outline",
      description: "Learn morning routine phrases in Twi",
      words: ["Mesɔre ntɛm", "Merekɔ adwuma", "Medware"],
      vocabulary: [
        {
          id: 135,
          english: "I wake up early",
          native: "Mesɔre ntɛm",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/mesɔre_ntɛm.m4a")
        },
        {
          id: 136,
          english: "I am going to work",
          native: "Merekɔ adwuma",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/merekɔ_adwuma.m4a")
        },
        {
          id: 137,
          english: "I am bathing",
          native: "Medware",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/medware.m4a")
        }
      ],
      questions: [
        {
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I wake up early' in Twi?",
          options: [
            { id: 1, text: "Mesɔre ntɛm" },
            { id: 2, text: "Merekɔ adwuma" },
            { id: 3, text: "Medware" },
            { id: 4, text: "Merenoa aduane" }
          ],
          correctOptionId: 1,
          hints: ["Mesɔre = I wake up", "ntɛm = early"],
          explanation: "Mesɔre ntɛm = I wake up early in Twi."
        },
        {
          id: 802,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/merekɔ_adwuma.m4a"),
          options: [
            { id: 1, text: "I wake up early" },
            { id: 2, text: "I am going to work" },
            { id: 3, text: "I am bathing" },
            { id: 4, text: "I am cooking" }
          ],
          correctOptionId: 2,
          hints: ["adwuma = work"],
          explanation: "You heard 'Merekɔ adwuma' which means 'I am going to work' in Twi."
        },
        {
          id: 803,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am bathing' in Twi?",
          options: [
            { id: 1, text: "Mesɔre ntɛm" },
            { id: 2, text: "Merekɔ adwuma" },
            { id: 3, text: "Medware" },
            { id: 4, text: "Mepra dan no mu" }
          ],
          correctOptionId: 3,
          hints: ["Medware = I am bathing"],
          explanation: "Medware = I am bathing in Twi."
        }
      ]
    },

    {
      id: "8-2",
      type: "phrases",
      title: "Household Chores",
      icon: "home-outline",
      description: "Learn household chore phrases in Twi",
      words: ["Merenoa aduane", "Mesi nneɛma", "Mepra dan no mu"],
      vocabulary: [
        {
          id: 138,
          english: "I am cooking",
          native: "Merenoa aduane",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/merenoa_aduane.m4a")
        },
        {
          id: 139,
          english: "I am washing clothes",
          native: "Mesi nneɛma",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/mesi_nneɛma.m4a")
        },
        {
          id: 140,
          english: "I swept the room",
          native: "Mepra dan no mu",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/mepra_dan_no_mu.m4a")
        }
      ],
      questions: [
        {
          id: 804,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am cooking' in Twi?",
          options: [
            { id: 1, text: "Merenoa aduane" },
            { id: 2, text: "Mesi nneɛma" },
            { id: 3, text: "Mepra dan no mu" },
            { id: 4, text: "Medware" }
          ],
          correctOptionId: 1,
          hints: ["Merenoa = I am cooking", "adua ne = food"],
          explanation: "Merenoa aduane = I am cooking in Twi."
        },
        {
          id: 805,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/mesi_nneɛma.m4a"),
          options: [
            { id: 1, text: "I am cooking" },
            { id: 2, text: "I am washing clothes" },
            { id: 3, text: "I swept the room" },
            { id: 4, text: "I am bathing" }
          ],
          correctOptionId: 2,
          hints: ["nneɛma = clothes/things"],
          explanation: "You heard 'Mesi nneɛma' which means 'I am washing clothes' in Twi."
        },
        {
          id: 806,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I swept the room' in Twi?",
          options: [
            { id: 1, text: "Merenoa aduane" },
            { id: 2, text: "Mesi nneɛma" },
            { id: 3, text: "Mepra dan no mu" },
            { id: 4, text: "Merehome" }
          ],
          correctOptionId: 3,
          hints: ["Mepra = I swept", "dan no mu = the room"],
          explanation: "Mepra dan no mu = I swept the room in Twi."
        }
      ]
    },

    {
      id: "8-3",
      type: "phrases",
      title: "Evening & Rest",
      icon: "moon-outline",
      description: "Learn evening and rest phrases in Twi",
      words: ["Merekɔ fie", "Merida", "Merehome"],
      vocabulary: [
        {
          id: 141,
          english: "I am going home",
          native: "Merekɔ fie",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/merekɔ_fie.m4a")
        },
        {
          id: 142,
          english: "I am sleeping",
          native: "Merida",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/merida.m4a")
        },
        {
          id: 143,
          english: "I am resting",
          native: "Merehome",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/merehome.m4a")
        }
      ],
      questions: [
        {
          id: 807,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am going home' in Twi?",
          options: [
            { id: 1, text: "Merekɔ fie" },
            { id: 2, text: "Merida" },
            { id: 3, text: "Merehome" },
            { id: 4, text: "Mekenkan daa" }
          ],
          correctOptionId: 1,
          hints: ["fie = home"],
          explanation: "Merekɔ fie = I am going home in Twi."
        },
        {
          id: 808,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/merida.m4a"),
          options: [
            { id: 1, text: "I am going home" },
            { id: 2, text: "I am sleeping" },
            { id: 3, text: "I am resting" },
            { id: 4, text: "I am cooking" }
          ],
          correctOptionId: 2,
          hints: ["Merida = I am sleeping"],
          explanation: "You heard 'Merida' which means 'I am sleeping' in Twi."
        },
        {
          id: 809,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I am resting' in Twi?",
          options: [
            { id: 1, text: "Merekɔ fie" },
            { id: 2, text: "Merida" },
            { id: 3, text: "Merehome" },
            { id: 4, text: "Mepra dan no mu" }
          ],
          correctOptionId: 3,
          hints: ["Merehome = I am resting"],
          explanation: "Merehome = I am resting in Twi."
        }
      ]
    },

    {
      id: "8-4",
      type: "phrases",
      title: "Everyday Activities",
      icon: "calendar-outline",
      description: "Learn everyday activity phrases in Twi",
      words: ["Mekenkan daa", "Ɛdeɛn na woreyɛ?"],
      vocabulary: [
        {
          id: 144,
          english: "I read every day",
          native: "Mekenkan daa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/mekenkan_daa.m4a")
        },
        {
          id: 145,
          english: "What are you doing?",
          native: "Ɛdeɛn na woreyɛ?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/ɛdeɛn_na_woreyɛ.m4a")
        }
      ],
      questions: [
        {
          id: 810,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I read every day' in Twi?",
          options: [
            { id: 1, text: "Mekenkan daa" },
            { id: 2, text: "Ɛdeɛn na woreyɛ?" },
            { id: 3, text: "Merekɔ fie" },
            { id: 4, text: "Merehome" }
          ],
          correctOptionId: 1,
          hints: ["Mekenkan = I read", "daa = every day"],
          explanation: "Mekenkan daa = I read every day in Twi."
        },
        {
          id: 811,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/ɛdeɛn_na_woreyɛ.m4a"),
          options: [
            { id: 1, text: "I read every day" },
            { id: 2, text: "What are you doing?" },
            { id: 3, text: "I am going home" },
            { id: 4, text: "I am resting" }
          ],
          correctOptionId: 2,
          hints: ["Ɛdeɛn = what", "woreyɛ = you are doing"],
          explanation: "You heard 'Ɛdeɛn na woreyɛ?' which means 'What are you doing?' in Twi."
        },
        {
          id: 812,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'What are you doing?' in Twi?",
          options: [
            { id: 1, text: "Mekenkan daa" },
            { id: 2, text: "Ɛdeɛn na woreyɛ?" },
            { id: 3, text: "Merekɔ fie" },
            { id: 4, text: "Merida" }
          ],
          correctOptionId: 2,
          hints: ["Question about an action"],
          explanation: "Ɛdeɛn na woreyɛ? = What are you doing? in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Daily Activities",
    icon: "refresh-outline",
    description: "Review all the daily activity vocabulary you've learned",
    questions: [
      {
        id: 813,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I wake up early' in Twi?",
        options: [
          { id: 1, text: "Mesɔre ntɛm" },
          { id: 2, text: "Merekɔ adwuma" },
          { id: 3, text: "Medware" },
          { id: 4, text: "Merenoa aduane" }
        ],
        correctOptionId: 1,
        hints: ["ntɛm = early"],
        explanation: "Mesɔre ntɛm = I wake up early."
      },
      {
        id: 814,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/mepra_dan_no_mu.m4a"),
        options: [
          { id: 1, text: "I am cooking" },
          { id: 2, text: "I am washing clothes" },
          { id: 3, text: "I swept the room" },
          { id: 4, text: "I am bathing" }
        ],
        correctOptionId: 3,
        hints: ["dan no mu = the room"],
        explanation: "You heard 'Mepra dan no mu' which means 'I swept the room'."
      },
      {
        id: 815,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am going to work' in Twi?",
        options: [
          { id: 1, text: "Mesɔre ntɛm" },
          { id: 2, text: "Merekɔ adwuma" },
          { id: 3, text: "Medware" },
          { id: 4, text: "Merekɔ fie" }
        ],
        correctOptionId: 2,
        hints: ["adwuma = work"],
        explanation: "Merekɔ adwuma = I am going to work."
      },
      {
        id: 816,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/merehome.m4a"),
        options: [
          { id: 1, text: "I am going home" },
          { id: 2, text: "I am sleeping" },
          { id: 3, text: "I am resting" },
          { id: 4, text: "I am reading" }
        ],
        correctOptionId: 3,
        hints: ["Merehome = I am resting"],
        explanation: "You heard 'Merehome' which means 'I am resting'."
      },
      {
        id: 817,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am cooking' in Twi?",
        options: [
          { id: 1, text: "Merenoa aduane" },
          { id: 2, text: "Mesi nneɛma" },
          { id: 3, text: "Mepra dan no mu" },
          { id: 4, text: "Medware" }
        ],
        correctOptionId: 1,
        hints: ["adua ne = food"],
        explanation: "Merenoa aduane = I am cooking."
      },
      {
        id: 818,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am sleeping' in Twi?",
        options: [
          { id: 1, text: "Merekɔ fie" },
          { id: 2, text: "Merida" },
          { id: 3, text: "Merehome" },
          { id: 4, text: "Mekenkan daa" }
        ],
        correctOptionId: 2,
        hints: ["Merida = I am sleeping"],
        explanation: "Merida = I am sleeping."
      },
      {
        id: 819,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am washing clothes' in Twi?",
        options: [
          { id: 1, text: "Merenoa aduane" },
          { id: 2, text: "Mesi nneɛma" },
          { id: 3, text: "Mepra dan no mu" },
          { id: 4, text: "Medware" }
        ],
        correctOptionId: 2,
        hints: ["nneɛma = clothes"],
        explanation: "Mesi nneɛma = I am washing clothes."
      },
      {
        id: 820,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I read every day' in Twi?",
        options: [
          { id: 1, text: "Mekenkan daa" },
          { id: 2, text: "Ɛdeɛn na woreyɛ?" },
          { id: 3, text: "Merekɔ fie" },
          { id: 4, text: "Merehome" }
        ],
        correctOptionId: 1,
        hints: ["daa = every day"],
        explanation: "Mekenkan daa = I read every day."
      },
      {
        id: 821,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am going home' in Twi?",
        options: [
          { id: 1, text: "Merekɔ fie" },
          { id: 2, text: "Merida" },
          { id: 3, text: "Merehome" },
          { id: 4, text: "Mekenkan daa" }
        ],
        correctOptionId: 1,
        hints: ["fie = home"],
        explanation: "Merekɔ fie = I am going home."
      },
      {
        id: 822,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter8/medware.m4a"),
        options: [
          { id: 1, text: "I wake up early" },
          { id: 2, text: "I am going to work" },
          { id: 3, text: "I am bathing" },
          { id: 4, text: "I am cooking" }
        ],
        correctOptionId: 3,
        hints: ["Medware = I am bathing"],
        explanation: "You heard 'Medware' which means 'I am bathing'."
      },
      {
        id: 823,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'What are you doing?' in Twi?",
        options: [
          { id: 1, text: "Mekenkan daa" },
          { id: 2, text: "Ɛdeɛn na woreyɛ?" },
          { id: 3, text: "Merekɔ fie" },
          { id: 4, text: "Merida" }
        ],
        correctOptionId: 2,
        hints: ["Ɛdeɛn = what"],
        explanation: "Ɛdeɛn na woreyɛ? = What are you doing?"
      }
    ]
  }
};