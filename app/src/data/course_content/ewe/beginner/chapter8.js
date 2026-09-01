export default {
  id: 8,
  title: "Daily Activities",
  description: "Learn how to talk about daily activities in Ewe",
  icon: "time-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "8-1",
      type: "words",
      title: "Morning Routine",
      icon: "sunrise-outline",
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
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I wake up early' in Ewe?",
          options: [
            { id: 1, text: "Mefɔna ŋdi kaba" },
            { id: 2, text: "Meyina dɔ me" },
            { id: 3, text: "Metsi lem" },
            { id: 4, text: "Menu ɖam" }
          ],
          correctOptionId: 1,
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
            { id: 1, text: "I wake up early" },
            { id: 2, text: "I am going to work" },
            { id: 3, text: "I am bathing" },
            { id: 4, text: "I am cooking" }
          ],
          correctOptionId: 2,
          hints: ["meyina = I am going", "dɔ = work"],
          explanation: "You heard 'Meyina dɔ me' which means 'I am going to work' in Ewe."
        },
        {
          id: 803,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "Metsi ___ (I am bathing)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "lem" },
            { id: "opt2", text: "ɖam" },
            { id: "opt3", text: "nyam" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["tsi = water", "lem = bathing"],
          explanation: "Metsi lem = I am bathing in Ewe."
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
          id: 804,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am cooking' in Ewe?",
          options: [
            { id: 1, text: "Menu ɖam" },
            { id: 2, text: "Me avɔ nyam" },
            { id: 3, text: "Mekplɔa xɔa me" },
            { id: 4, text: "Metsi lem" }
          ],
          correctOptionId: 1,
          hints: ["Menu = I am cooking"],
          explanation: "Menu ɖam = I am cooking in Ewe."
        },
        {
          id: 805,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/me_avɔ_nyam.m4a"),
          options: [
            { id: 1, text: "I am cooking" },
            { id: 2, text: "I am washing clothes" },
            { id: 3, text: "I sweep the room" },
            { id: 4, text: "I am bathing" }
          ],
          correctOptionId: 2,
          hints: ["avɔ = clothes", "nyam = washing"],
          explanation: "You heard 'Me avɔ nyam' which means 'I am washing clothes' in Ewe."
        },
        {
          id: 806,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "Mekplɔa xɔa ___ (I sweep the room)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "me" },
            { id: "opt2", text: "ɖam" },
            { id: "opt3", text: "nyam" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["xɔa me = the room"],
          explanation: "Mekplɔa xɔa me = I sweep the room in Ewe."
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
          id: 807,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am tired' in Ewe?",
          options: [
            { id: 1, text: "Ɖeɖi te ŋunye" },
            { id: 2, text: "Meyina aƒe me" },
            { id: 3, text: "Malɔ̃ dɔm" },
            { id: 4, text: "Me ɖiɖim ɖe me" }
          ],
          correctOptionId: 1,
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
            { id: 1, text: "I am tired" },
            { id: 2, text: "I am going home" },
            { id: 3, text: "I am sleeping" },
            { id: 4, text: "I am resting" }
          ],
          correctOptionId: 3,
          hints: ["dɔ alɔ̃ = sleeping"],
          explanation: "You heard 'Malɔ̃ dɔm' which means 'I am sleeping' in Ewe."
        },
        {
          id: 809,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "Meyina ___ me (I am going home)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "aƒe" },
            { id: "opt2", text: "dɔ" },
            { id: "opt3", text: "xɔ" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["aƒe = home"],
          explanation: "Meyina aƒe me = I am going home in Ewe."
        }
      ]
    },

    {
      id: "8-4",
      type: "words",
      title: "Everyday Talk",
      icon: "chatbubble-outline",
      description: "Learn everyday conversation phrases in Ewe",
      words: ["Mexlẽa nu gbe shia gbe", "Nu ka wɔm nèle?"],
      vocabulary: [
        {
          id: 108,
          english: "I read every day",
          native: "Mexlẽa nu gbe shia gbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/mexlẽa_nu_gbe_shia_gbe.m4a")
        },
        {
          id: 109,
          english: "What are you doing?",
          native: "Nu ka wɔm nèle?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/nu_ka_wɔm_nèle.m4a")
        }
      ],
      questions: [
        {
          id: 810,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I read every day' in Ewe?",
          options: [
            { id: 1, text: "Mexlẽa nu gbe shia gbe" },
            { id: 2, text: "Nu ka wɔm nèle?" },
            { id: 3, text: "Meyina dɔ me" },
            { id: 4, text: "Menu ɖam" }
          ],
          correctOptionId: 1,
          hints: ["Mexlẽa = I read", "gbe shia gbe = every day"],
          explanation: "Mexlẽa nu gbe shia gbe = I read every day in Ewe."
        },
        {
          id: 811,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/nu_ka_wɔm_nèle.m4a"),
          options: [
            { id: 1, text: "I read every day" },
            { id: 2, text: "What are you doing?" },
            { id: 3, text: "I am going to work" },
            { id: 4, text: "I am cooking" }
          ],
          correctOptionId: 2,
          hints: ["nu ka = what", "wɔm = doing"],
          explanation: "You heard 'Nu ka wɔm nèle?' which means 'What are you doing?' in Ewe."
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
        id: 812,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am going to work' in Ewe?",
        options: [
          { id: 1, text: "Mefɔna ŋdi kaba" },
          { id: 2, text: "Meyina dɔ me" },
          { id: 3, text: "Metsi lem" },
          { id: 4, text: "Menu ɖam" }
        ],
        correctOptionId: 2,
        hints: ["meyina = I am going", "dɔ = work"],
        explanation: "Meyina dɔ me = I am going to work."
      },
      {
        id: 813,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/metsi_lem.m4a"),
        options: [
          { id: 1, text: "I wake up early" },
          { id: 2, text: "I am going to work" },
          { id: 3, text: "I am bathing" },
          { id: 4, text: "I am cooking" }
        ],
        correctOptionId: 3,
        hints: ["tsi = water"],
        explanation: "You heard 'Metsi lem' which means 'I am bathing'."
      },
      {
        id: 814,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I sweep the room' in Ewe?",
        options: [
          { id: 1, text: "Menu ɖam" },
          { id: 2, text: "Me avɔ nyam" },
          { id: 3, text: "Mekplɔa xɔa me" },
          { id: 4, text: "Metsi lem" }
        ],
        correctOptionId: 3,
        hints: ["kplɔa = sweep", "xɔa me = the room"],
        explanation: "Mekplɔa xɔa me = I sweep the room."
      },
      {
        id: 815,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/menu_ɖam.m4a"),
        options: [
          { id: 1, text: "I am cooking" },
          { id: 2, text: "I am washing clothes" },
          { id: 3, text: "I sweep the room" },
          { id: 4, text: "I am bathing" }
        ],
        correctOptionId: 1,
        hints: ["menu = I am cooking"],
        explanation: "You heard 'Menu ɖam' which means 'I am cooking'."
      },
      {
        id: 816,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am sleeping' in Ewe?",
        options: [
          { id: 1, text: "Ɖeɖi te ŋunye" },
          { id: 2, text: "Meyina aƒe me" },
          { id: 3, text: "Malɔ̃ dɔm" },
          { id: 4, text: "Me ɖiɖim ɖe me" }
        ],
        correctOptionId: 3,
        hints: ["dɔ alɔ̃ = sleeping"],
        explanation: "Malɔ̃ dɔm = I am sleeping."
      },
      {
        id: 817,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter8/dedi_te_ŋunye.m4a"),
        options: [
          { id: 1, text: "I am tired" },
          { id: 2, text: "I am going home" },
          { id: 3, text: "I am sleeping" },
          { id: 4, text: "I am resting" }
        ],
        correctOptionId: 1,
        hints: ["ɖeɖi = tired"],
        explanation: "You heard 'Ɖeɖi te ŋunye' which means 'I am tired'."
      },
      {
        id: 818,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'What are you doing?' in Ewe?",
        options: [
          { id: 1, text: "Mexlẽa nu gbe shia gbe" },
          { id: 2, text: "Nu ka wɔm nèle?" },
          { id: 3, text: "Meyina dɔ me" },
          { id: 4, text: "Menu ɖam" }
        ],
        correctOptionId: 2,
        hints: ["nu ka = what", "wɔm = doing"],
        explanation: "Nu ka wɔm nèle? = What are you doing?"
      },
      {
        id: 819,
        type: "drag_drop",
        instruction: "Complete the Ewe phrase by dragging the correct word.",
        question: "Metsi ___ (I am bathing)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "lem" },
          { id: "opt2", text: "ɖam" },
          { id: "opt3", text: "nyam" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt1"
        },
        hints: ["tsi = water"],
        explanation: "Metsi lem = I am bathing."
      }
    ]
  }
};