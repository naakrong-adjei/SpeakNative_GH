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
            { id: 4, text: "Mifɔɔ atadei lɛ ahe" }
          ],
          correctOptionId: 1,
          hints: ["Miteɔ = I wake up", "mra = early"],
          explanation: "Miteɔ shi mra = I wake up early in Ga."
        },
        {
          id: 802,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am going to work' in Ga?",
          options: [
            { id: 1, text: "Miteɔ shi mra" },
            { id: 2, text: "Miiya nitsumɔ" },
            { id: 3, text: "Miiju mihe" },
            { id: 4, text: "Miihoo nii" }
          ],
          correctOptionId: 2,
          hints: ["miiya = I am going", "nitsumɔ = work"],
          explanation: "Miiya nitsumɔ = I am going to work in Ga."
        },
        {
          id: 803,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Miiju [_____] (I am bathing)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "mihe" },
            { id: "opt2", text: "nii" },
            { id: "opt3", text: "atadei" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["mihe = myself"],
          explanation: "Miiju mihe = I am bathing in Ga."
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
          id: 804,
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
          id: 805,
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
          hints: ["mifɔɔ = I am washing", "atadei = clothes"],
          explanation: "Mifɔɔ atadei lɛ ahe = I am washing clothes in Ga."
        },
        {
          id: 806,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Miibɛɛ tsu lɛ [_____] (I am sweeping the room)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "mli" },
            { id: "opt2", text: "nɔ" },
            { id: "opt3", text: "sɛɛ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["mli = inside"],
          explanation: "Miibɛɛ tsu lɛ mli = I am sweeping the room in Ga."
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
          id: 807,
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
          id: 808,
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
          hints: ["Action of sleeping"],
          explanation: "Miiwɔ = I am sleeping in Ga."
        },
        {
          id: 809,
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
          id: 810,
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
        },
        {
          id: 811,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Mijɔɔ [_____] (I am resting)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "mihe" },
            { id: "opt2", text: "nii" },
            { id: "opt3", text: "atadei" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["mihe = myself"],
          explanation: "Mijɔɔ mihe = I am resting in Ga."
        },
        {
          id: 812,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Miteɔ shi [_____] (I wake up early)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "mra" },
            { id: "opt2", text: "daa" },
            { id: "opt3", text: "mihe" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["mra = early"],
          explanation: "Miteɔ shi mra = I wake up early in Ga."
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
        id: 813,
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
        id: 814,
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
        hints: ["miiju = I am bathing"],
        explanation: "Miiju mihe = I am bathing."
      },
      {
        id: 815,
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
        explanation: "Miihoo nii = I am cooking."
      },
      {
        id: 816,
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
        explanation: "Miibɛɛ tsu lɛ mli = I am sweeping the room."
      },
      {
        id: 817,
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
        id: 818,
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
        explanation: "Mikaneɔ wolo daa = I read every day."
      },
      {
        id: 819,
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
        hints: ["mifɔɔ = I am washing", "atadei = clothes"],
        explanation: "Mifɔɔ atadei lɛ ahe = I am washing clothes."
      },
      {
        id: 820,
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
        explanation: "Mijɔɔ mihe = I am resting."
      },
      {
        id: 821,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Miiya [_____] (I am going to work)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "nitsumɔ" },
          { id: "opt2", text: "shia" },
          { id: "opt3", text: "mihe" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["nitsumɔ = work"],
        explanation: "Miiya nitsumɔ = I am going to work."
      },
      {
        id: 822,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Miiya [_____] (I am going home)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "shia" },
          { id: "opt2", text: "nitsumɔ" },
          { id: "opt3", text: "mihe" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["shia = home"],
        explanation: "Miiya shia = I am going home."
      }
    ]
  }
};