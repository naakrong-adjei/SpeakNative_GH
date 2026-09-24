export default {
  id: 8,
  title: "Daily Activities",
  description: "Learn how to talk about daily activities in Ewe",
  icon: "time-outline",
  totalXp: 10,
  difficulty: "Beginner",

  sections: [
    {
      id: "8-1",
      type: "words",
      title: "Morning Routine",
      icon: "sunny-outline",
      description: "Learn how to talk about your morning routine in Ewe",
      words: ["Mefɔna ŋdi kaba", "Meyina dɔ me", "Metsi lem"],
      vocabulary: [
        {
          id: 98,
          english: "I wake up early",
          native: "Mefɔna ŋdi kaba",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/mefɔna_ŋdi_kaba.m4a")
        },
        {
          id: 99,
          english: "I am going to work",
          native: "Meyina dɔ me",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/meyina_dɔ_me.m4a")
        },
        {
          id: 103,
          english: "I am bathing",
          native: "Metsi lem",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/metsi_lem.m4a")
        }
      ],
      questions: [
        {
          id: 803,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am bathing' in Ewe?",
          options: [
            { id: 1, text: "Meyina dɔ me" },
            { id: 2, text: "Menu ɖam" },
            { id: 3, text: "Metsi lem" },
            { id: 4, text: "Mefɔna ŋdi kaba" }
          ],
          correctOptionId: 3,
          hints: ["tsi = water", "lem = bathing"],
          explanation: "Metsi lem = I am bathing in Ewe."
        },
        {
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I wake up early' in Ewe?",
          options: [
            { id: 1, text: "Metsi lem" },
            { id: 2, text: "Mefɔna ŋdi kaba" },
            { id: 3, text: "Meyina dɔ me" },
            { id: 4, text: "Menu ɖam" }
          ],
          correctOptionId: 2,
          hints: ["Mefɔna = I wake up", "ŋdi = morning"],
          explanation: "Mefɔna ŋdi kaba = I wake up early in Ewe."
        },
        {
          id: 802,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/meyina_dɔ_me.m4a"),
          options: [
            { id: 1, text: "I am bathing" },
            { id: 2, text: "I am cooking" },
            { id: 3, text: "I am going to work" },
            { id: 4, text: "I wake up early" }
          ],
          correctOptionId: 3,
          hints: ["meyina = I am going", "dɔ = work"],
          explanation: "You heard 'Meyina dɔ me' which means 'I am going to work' in Ewe."
        }
      ]
    },

    {
      id: "8-2",
      type: "words",
      title: "Household Chores",
      icon: "home-outline",
      description: "Learn how to talk about household chores in Ewe",
      words: ["Menu ɖam", "Me avɔ nyam", "Mekplɔa xɔa me"],
      vocabulary: [
        {
          id: 104,
          english: "I am cooking",
          native: "Menu ɖam",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/menu_ɖam.m4a")
        },
        {
          id: 105,
          english: "I am washing clothes",
          native: "Me avɔ nyam",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/me_avɔ_nyam.m4a")
        },
        {
          id: 107,
          english: "I sweep the room",
          native: "Mekplɔa xɔa me",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/mekplɔa_xɔa_me.m4a")
        }
      ],
      questions: [
        {
          id: 805,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/me_avɔ_nyam.m4a"),
          options: [
            { id: 1, text: "I am bathing" },
            { id: 2, text: "I sweep the room" },
            { id: 3, text: "I am washing clothes" },
            { id: 4, text: "I am cooking" }
          ],
          correctOptionId: 3,
          hints: ["avɔ = clothes", "nyam = washing"],
          explanation: "You heard 'Me avɔ nyam' which means 'I am washing clothes' in Ewe."
        },
        {
          id: 806,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I sweep the room' in Ewe?",
          options: [
            { id: 1, text: "Metsi lem" },
            { id: 2, text: "Mekplɔa xɔa me" },
            { id: 3, text: "Me avɔ nyam" },
            { id: 4, text: "Menu ɖam" }
          ],
          correctOptionId: 2,
          hints: ["kplɔa = sweep", "xɔa me = the room"],
          explanation: "Mekplɔa xɔa me = I sweep the room in Ewe."
        },
        {
          id: 804,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am cooking' in Ewe?",
          options: [
            { id: 1, text: "Me avɔ nyam" },
            { id: 2, text: "Mekplɔa xɔa me" },
            { id: 3, text: "Metsi lem" },
            { id: 4, text: "Menu ɖam" }
          ],
          correctOptionId: 4,
          hints: ["Menu = I am cooking"],
          explanation: "Menu ɖam = I am cooking in Ewe."
        }
      ]
    },

    {
      id: "8-3",
      type: "words",
      title: "Rest & Evening",
      icon: "moon-outline",
      description: "Learn how to talk about resting and evening activities in Ewe",
      words: ["Ɖeɖi te ŋunye", "Meyina aƒe me", "Malɔ̃ dɔm", "Me ɖiɖim ɖe me"],
      vocabulary: [
        {
          id: 100,
          english: "I am tired",
          native: "Ɖeɖi te ŋunye",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/dedi_te_ŋunye.m4a")
        },
        {
          id: 101,
          english: "I am going home",
          native: "Meyina aƒe me",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/meyina_afe_me.m4a")
        },
        {
          id: 102,
          english: "I am sleeping",
          native: "Malɔ̃ dɔm",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/malɔ̃_dɔm.m4a")
        },
        {
          id: 106,
          english: "I am resting",
          native: "Me ɖiɖim ɖe me",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/me_ɖiɖim_ɖe_me.m4a")
        }
      ],
      questions: [
        {
          id: 809,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am going home' in Ewe?",
          options: [
            { id: 1, text: "Malɔ̃ dɔm" },
            { id: 2, text: "Me ɖiɖim ɖe me" },
            { id: 3, text: "Meyina aƒe me" },
            { id: 4, text: "Ɖeɖi te ŋunye" }
          ],
          correctOptionId: 3,
          hints: ["aƒe = home"],
          explanation: "Meyina aƒe me = I am going home in Ewe."
        },
        {
          id: 807,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am tired' in Ewe?",
          options: [
            { id: 1, text: "Me ɖiɖim ɖe me" },
            { id: 2, text: "Ɖeɖi te ŋunye" },
            { id: 3, text: "Meyina aƒe me" },
            { id: 4, text: "Malɔ̃ dɔm" }
          ],
          correctOptionId: 2,
          hints: ["Ɖeɖi = tired"],
          explanation: "Ɖeɖi te ŋunye = I am tired in Ewe."
        },
        {
          id: 808,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/malɔ̃_dɔm.m4a"),
          options: [
            { id: 1, text: "I am resting" },
            { id: 2, text: "I am sleeping" },
            { id: 3, text: "I am tired" },
            { id: 4, text: "I am going home" }
          ],
          correctOptionId: 2,
          hints: ["lɔ̃ dɔm = sleeping"],
          explanation: "You heard 'Malɔ̃ dɔm' which means 'I am sleeping' in Ewe."
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
        id: 815,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/dedi_te_ŋunye.m4a"),
        options: [
          { id: 1, text: "I am resting" },
          { id: 2, text: "I am sleeping" },
          { id: 3, text: "I am tired" },
          { id: 4, text: "I am going home" }
        ],
        correctOptionId: 3,
        hints: ["ɖeɖi = tired"],
        explanation: "You heard 'Ɖeɖi te ŋunye' which means 'I am tired'."
      },
      {
        id: 810,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am going to work' in Ewe?",
        options: [
          { id: 1, text: "Menu ɖam" },
          { id: 2, text: "Metsi lem" },
          { id: 3, text: "Meyina dɔ me" },
          { id: 4, text: "Mefɔna ŋdi kaba" }
        ],
        correctOptionId: 3,
        hints: ["meyina = I am going", "dɔ = work"],
        explanation: "Meyina dɔ me = I am going to work."
      },
      {
        id: 817,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am cooking' in Ewe?",
        options: [
          { id: 1, text: "Mekplɔa xɔa me" },
          { id: 2, text: "Mefɔna ŋdi kaba" },
          { id: 3, text: "Menu ɖam" },
          { id: 4, text: "Me avɔ nyam" }
        ],
        correctOptionId: 3,
        hints: ["menu = I am cooking"],
        explanation: "Menu ɖam = I am cooking in Ewe."
      },
      {
        id: 811,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/metsi_lem.m4a"),
        options: [
          { id: 1, text: "I am cooking" },
          { id: 2, text: "I am bathing" },
          { id: 3, text: "I wake up early" },
          { id: 4, text: "I am going to work" }
        ],
        correctOptionId: 2,
        hints: ["tsi = water"],
        explanation: "You heard 'Metsi lem' which means 'I am bathing'."
      },
      {
        id: 816,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am resting' in Ewe?",
        options: [
          { id: 1, text: "Meyina aƒe me" },
          { id: 2, text: "Me ɖiɖim ɖe me" },
          { id: 3, text: "Ɖeɖi te ŋunye" },
          { id: 4, text: "Malɔ̃ dɔm" }
        ],
        correctOptionId: 2,
        hints: ["ɖiɖim = resting"],
        explanation: "Me ɖiɖim ɖe me = I am resting in Ewe."
      },
      {
        id: 812,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I sweep the room' in Ewe?",
        options: [
          { id: 1, text: "Metsi lem" },
          { id: 2, text: "Menu ɖam" },
          { id: 3, text: "Me avɔ nyam" },
          { id: 4, text: "Mekplɔa xɔa me" }
        ],
        correctOptionId: 4,
        hints: ["kplɔa = sweep", "xɔa me = the room"],
        explanation: "Mekplɔa xɔa me = I sweep the room."
      },
      {
        id: 814,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am sleeping' in Ewe?",
        options: [
          { id: 1, text: "Malɔ̃ dɔm" },
          { id: 2, text: "Meyina aƒe me" },
          { id: 3, text: "Me ɖiɖim ɖe me" },
          { id: 4, text: "Ɖeɖi te ŋunye" }
        ],
        correctOptionId: 1,
        hints: ["lɔ̃ dɔm = sleeping"],
        explanation: "Malɔ̃ dɔm = I am sleeping."
      },
      {
        id: 813,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/menu_ɖam.m4a"),
        options: [
          { id: 1, text: "I am bathing" },
          { id: 2, text: "I am washing clothes" },
          { id: 3, text: "I am cooking" },
          { id: 4, text: "I sweep the room" }
        ],
        correctOptionId: 3,
        hints: ["menu = I am cooking"],
        explanation: "You heard 'Menu ɖam' which means 'I am cooking'."
      }
    ]
  }
};