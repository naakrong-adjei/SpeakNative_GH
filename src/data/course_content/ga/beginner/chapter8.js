export default {
  id: 8,
  title: "Daily Routine",
  description: "Learn daily routine vocabulary in Ga",
  icon: "time-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "8-1",
      type: "words",
      title: "Morning Routine",
      icon: "sunny-outline",
      description: "Learn morning routine phrases in Ga",
      words: ["Miteɔ shi mra", "Miiya nitsumɔ", "Miiju mihe"],
      vocabulary: [
        {
          id: 98,
          english: "I wake up early",
          native: "Miteɔ shi mra",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miteɔ_shi_mra.m4a")
        },
        {
          id: 99,
          english: "I am going to work",
          native: "Miiya nitsumɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miiya_nitsumɔ.m4a")
        },
        {
          id: 103,
          english: "I am bathing",
          native: "Miiju mihe",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miiju_mihe.m4a")
        }
      ],
      questions: [
        {
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I wake up early' in Ga?",
          options: [
            { id: 1, text: "Miteɔ shi mra" },
            { id: 2, text: "Miiya nitsumɔ" },
            { id: 3, text: "Miiju mihe" },
            { id: 4, text: "Miihoo nii" }
          ],
          correctOptionId: 1,
          hints: ["Miteɔ = I wake up", "mra = early"],
          explanation: "Miteɔ shi mra = I wake up early in Ga."
        },
        {
          id: 802,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miiya_nitsumɔ.m4a"),
          options: [
            { id: 1, text: "I wake up early" },
            { id: 2, text: "I am going to work" },
            { id: 3, text: "I am bathing" },
            { id: 4, text: "I am cooking" }
          ],
          correctOptionId: 2,
          hints: ["miiya = I am going", "nitsumɔ = work"],
          explanation: "You heard 'Miiya nitsumɔ' which means 'I am going to work' in Ga."
        },
        {
          id: 803,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am bathing' in Ga?",
          options: [
            { id: 1, text: "Miteɔ shi mra" },
            { id: 2, text: "Miiya nitsumɔ" },
            { id: 3, text: "Miiju mihe" },
            { id: 4, text: "Miihoo nii" }
          ],
          correctOptionId: 3,
          hints: ["Miiju = I am bathing", "mihe = myself"],
          explanation: "Miiju mihe = I am bathing in Ga."
        },
        {
          id: 804,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miteɔ_shi_mra.m4a"),
          options: [
            { id: 1, text: "I wake up early" },
            { id: 2, text: "I am going to work" },
            { id: 3, text: "I am bathing" },
            { id: 4, text: "I am resting" }
          ],
          correctOptionId: 1,
          hints: ["mra = early"],
          explanation: "You heard 'Miteɔ shi mra' which means 'I wake up early' in Ga."
        }
      ]
    },

    {
      id: "8-2",
      type: "words",
      title: "Household Chores",
      icon: "home-outline",
      description: "Learn household chore phrases in Ga",
      words: ["Miihoo nii", "Mifɔɔ atadei lɛ ahe", "Miibɛɛ tsu lɛ mli"],
      vocabulary: [
        {
          id: 104,
          english: "I am cooking",
          native: "Miihoo nii",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miihoo_nii.m4a")
        },
        {
          id: 105,
          english: "I am washing clothes",
          native: "Mifɔɔ atadei lɛ ahe",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/mifɔɔ_atadei_lɛ_ahe.m4a")
        },
        {
          id: 107,
          english: "I am sweeping the room",
          native: "Miibɛɛ tsu lɛ mli",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miibɛɛ_tsu_lɛ_mli.m4a")
        }
      ],
      questions: [
        {
          id: 805,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am cooking' in Ga?",
          options: [
            { id: 1, text: "Miihoo nii" },
            { id: 2, text: "Mifɔɔ atadei lɛ ahe" },
            { id: 3, text: "Miibɛɛ tsu lɛ mli" },
            { id: 4, text: "Miiju mihe" }
          ],
          correctOptionId: 1,
          hints: ["Miihoo = I am cooking", "nii = food"],
          explanation: "Miihoo nii = I am cooking in Ga."
        },
        {
          id: 806,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/mifɔɔ_atadei_lɛ_ahe.m4a"),
          options: [
            { id: 1, text: "I am cooking" },
            { id: 2, text: "I am washing clothes" },
            { id: 3, text: "I am sweeping the room" },
            { id: 4, text: "I am bathing" }
          ],
          correctOptionId: 2,
          hints: ["mifɔɔ = I am washing", "atadei = clothes"],
          explanation: "You heard 'Mifɔɔ atadei lɛ ahe' which means 'I am washing clothes' in Ga."
        },
        {
          id: 807,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am sweeping the room' in Ga?",
          options: [
            { id: 1, text: "Miihoo nii" },
            { id: 2, text: "Mifɔɔ atadei lɛ ahe" },
            { id: 3, text: "Miibɛɛ tsu lɛ mli" },
            { id: 4, text: "Miiju mihe" }
          ],
          correctOptionId: 3,
          hints: ["Miibɛɛ = I am sweeping", "tsu lɛ mli = the room"],
          explanation: "Miibɛɛ tsu lɛ mli = I am sweeping the room in Ga."
        },
        {
          id: 808,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miihoo_nii.m4a"),
          options: [
            { id: 1, text: "I am cooking" },
            { id: 2, text: "I am washing clothes" },
            { id: 3, text: "I am sweeping the room" },
            { id: 4, text: "I am resting" }
          ],
          correctOptionId: 1,
          hints: ["nii = food"],
          explanation: "You heard 'Miihoo nii' which means 'I am cooking' in Ga."
        }
      ]
    },

    {
      id: "8-3",
      type: "words",
      title: "Evening & Everyday Activities",
      icon: "moon-outline",
      description: "Learn evening and everyday activity phrases in Ga",
      words: ["Miiya shia", "Miiwɔ", "Mijɔɔ mihe", "Mikaneɔ wolo daa"],
      vocabulary: [
        {
          id: 101,
          english: "I am going home",
          native: "Miiya shia",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miiya_shia.m4a")
        },
        {
          id: 102,
          english: "I am sleeping",
          native: "Miiwɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miiwɔ.m4a")
        },
        {
          id: 106,
          english: "I am resting",
          native: "Mijɔɔ mihe",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/mijɔɔ_mihe.m4a")
        },
        {
          id: 108,
          english: "I read every day",
          native: "Mikaneɔ wolo daa",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/mikaneɔ_wolo_daa.m4a")
        }
      ],
      questions: [
        {
          id: 809,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am going home' in Ga?",
          options: [
            { id: 1, text: "Miiya shia" },
            { id: 2, text: "Miiwɔ" },
            { id: 3, text: "Mijɔɔ mihe" },
            { id: 4, text: "Mikaneɔ wolo daa" }
          ],
          correctOptionId: 1,
          hints: ["miiya = I am going", "shia = home"],
          explanation: "Miiya shia = I am going home in Ga."
        },
        {
          id: 810,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miiwɔ.m4a"),
          options: [
            { id: 1, text: "I am going home" },
            { id: 2, text: "I am sleeping" },
            { id: 3, text: "I am resting" },
            { id: 4, text: "I read every day" }
          ],
          correctOptionId: 2,
          hints: ["miiwɔ = I am sleeping"],
          explanation: "You heard 'Miiwɔ' which means 'I am sleeping' in Ga."
        },
        {
          id: 811,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am resting' in Ga?",
          options: [
            { id: 1, text: "Miiya shia" },
            { id: 2, text: "Miiwɔ" },
            { id: 3, text: "Mijɔɔ mihe" },
            { id: 4, text: "Mikaneɔ wolo daa" }
          ],
          correctOptionId: 3,
          hints: ["mijɔɔ = I am resting", "mihe = myself"],
          explanation: "Mijɔɔ mihe = I am resting in Ga."
        },
        {
          id: 812,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/mikaneɔ_wolo_daa.m4a"),
          options: [
            { id: 1, text: "I am going home" },
            { id: 2, text: "I am sleeping" },
            { id: 3, text: "I am resting" },
            { id: 4, text: "I read every day" }
          ],
          correctOptionId: 4,
          hints: ["wolo = book", "daa = every day"],
          explanation: "You heard 'Mikaneɔ wolo daa' which means 'I read every day' in Ga."
        },
        {
          id: 813,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I read every day' in Ga?",
          options: [
            { id: 1, text: "Mikaneɔ wolo daa" },
            { id: 2, text: "Miteɔ shi mra" },
            { id: 3, text: "Miiya nitsumɔ" },
            { id: 4, text: "Miihoo nii" }
          ],
          correctOptionId: 1,
          hints: ["Mikaneɔ = I read", "wolo = book", "daa = every day"],
          explanation: "Mikaneɔ wolo daa = I read every day in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Daily Routine",
    icon: "refresh-outline",
    description: "Review all the daily routine vocabulary you've learned",
    questions: [
      {
        id: 814,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I wake up early' in Ga?",
        options: [
          { id: 1, text: "Miteɔ shi mra" },
          { id: 2, text: "Miiya nitsumɔ" },
          { id: 3, text: "Miiju mihe" },
          { id: 4, text: "Mifɔɔ atadei lɛ ahe" }
        ],
        correctOptionId: 1,
        hints: ["Miteɔ = I wake up", "mra = early"],
        explanation: "Miteɔ shi mra = I wake up early."
      },
      {
        id: 815,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miiju_mihe.m4a"),
        options: [
          { id: 1, text: "I wake up early" },
          { id: 2, text: "I am going to work" },
          { id: 3, text: "I am bathing" },
          { id: 4, text: "I am cooking" }
        ],
        correctOptionId: 3,
        hints: ["miiju = I am bathing"],
        explanation: "You heard 'Miiju mihe' which means 'I am bathing'."
      },
      {
        id: 816,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am going to work' in Ga?",
        options: [
          { id: 1, text: "Miteɔ shi mra" },
          { id: 2, text: "Miiya nitsumɔ" },
          { id: 3, text: "Miiju mihe" },
          { id: 4, text: "Miiya shia" }
        ],
        correctOptionId: 2,
        hints: ["nitsumɔ = work"],
        explanation: "Miiya nitsumɔ = I am going to work."
      },
      {
        id: 817,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miibɛɛ_tsu_lɛ_mli.m4a"),
        options: [
          { id: 1, text: "I am cooking" },
          { id: 2, text: "I am washing clothes" },
          { id: 3, text: "I am sweeping the room" },
          { id: 4, text: "I am bathing" }
        ],
        correctOptionId: 3,
        hints: ["tsu lɛ mli = the room"],
        explanation: "You heard 'Miibɛɛ tsu lɛ mli' which means 'I am sweeping the room'."
      },
      {
        id: 818,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am cooking' in Ga?",
        options: [
          { id: 1, text: "Miihoo nii" },
          { id: 2, text: "Mifɔɔ atadei lɛ ahe" },
          { id: 3, text: "Miibɛɛ tsu lɛ mli" },
          { id: 4, text: "Miiju mihe" }
        ],
        correctOptionId: 1,
        hints: ["nii = food"],
        explanation: "Miihoo nii = I am cooking."
      },
      {
        id: 819,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miiya_shia.m4a"),
        options: [
          { id: 1, text: "I am going home" },
          { id: 2, text: "I am sleeping" },
          { id: 3, text: "I am resting" },
          { id: 4, text: "I read every day" }
        ],
        correctOptionId: 1,
        hints: ["shia = home"],
        explanation: "You heard 'Miiya shia' which means 'I am going home'."
      },
      {
        id: 820,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am washing clothes' in Ga?",
        options: [
          { id: 1, text: "Miihoo nii" },
          { id: 2, text: "Mifɔɔ atadei lɛ ahe" },
          { id: 3, text: "Miibɛɛ tsu lɛ mli" },
          { id: 4, text: "Miiju mihe" }
        ],
        correctOptionId: 2,
        hints: ["atadei = clothes"],
        explanation: "Mifɔɔ atadei lɛ ahe = I am washing clothes."
      },
      {
        id: 821,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/mijɔɔ_mihe.m4a"),
        options: [
          { id: 1, text: "I am going home" },
          { id: 2, text: "I am sleeping" },
          { id: 3, text: "I am resting" },
          { id: 4, text: "I read every day" }
        ],
        correctOptionId: 3,
        hints: ["mijɔɔ = I am resting"],
        explanation: "You heard 'Mijɔɔ mihe' which means 'I am resting'."
      },
      {
        id: 822,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am sleeping' in Ga?",
        options: [
          { id: 1, text: "Miiya shia" },
          { id: 2, text: "Miiwɔ" },
          { id: 3, text: "Mijɔɔ mihe" },
          { id: 4, text: "Mikaneɔ wolo daa" }
        ],
        correctOptionId: 2,
        hints: ["miiwɔ = I am sleeping"],
        explanation: "Miiwɔ = I am sleeping."
      },
      {
        id: 823,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I read every day' in Ga?",
        options: [
          { id: 1, text: "Mikaneɔ wolo daa" },
          { id: 2, text: "Miteɔ shi mra" },
          { id: 3, text: "Miiya nitsumɔ" },
          { id: 4, text: "Miihoo nii" }
        ],
        correctOptionId: 1,
        hints: ["daa = every day"],
        explanation: "Mikaneɔ wolo daa = I read every day."
      },
      {
        id: 824,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am resting' in Ga?",
        options: [
          { id: 1, text: "Miiya shia" },
          { id: 2, text: "Miiwɔ" },
          { id: 3, text: "Mijɔɔ mihe" },
          { id: 4, text: "Mikaneɔ wolo daa" }
        ],
        correctOptionId: 3,
        hints: ["mihe = myself"],
        explanation: "Mijɔɔ mihe = I am resting."
      },
      {
        id: 825,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/beginner/chapter8/miiya_nitsumɔ.m4a"),
        options: [
          { id: 1, text: "I wake up early" },
          { id: 2, text: "I am going to work" },
          { id: 3, text: "I am bathing" },
          { id: 4, text: "I am cooking" }
        ],
        correctOptionId: 2,
        hints: ["nitsumɔ = work"],
        explanation: "You heard 'Miiya nitsumɔ' which means 'I am going to work'."
      }
    ]
  }
};