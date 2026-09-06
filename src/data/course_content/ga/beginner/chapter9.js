export default {
  id: 9,
  title: "School & Work",
  description: "Learn school and work vocabulary in Ga",
  icon: "school-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "9-1",
      type: "words",
      title: "School Words",
      icon: "school-outline",
      description: "Learn essential school vocabulary in Ga",
      words: ["Skul", "Tsɔɔlɔ", "Wolo", "Klas tsu"],
      vocabulary: [
        {
          id: 110,
          english: "School",
          native: "Skul",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/skul.m4a")
        },
        {
          id: 111,
          english: "Teacher",
          native: "Tsɔɔlɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/tsɔɔlɔ.m4a")
        },
        {
          id: 112,
          english: "Book",
          native: "Wolo",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/wolo.m4a")
        },
        {
          id: 116,
          english: "Classroom",
          native: "Klas tsu",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/klas_tsu.m4a")
        }
      ],
      questions: [
        {
          id: 901,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'School' in Ga?",
          options: [
            { id: 1, text: "Skul" },
            { id: 2, text: "Tsɔɔlɔ" },
            { id: 3, text: "Wolo" },
            { id: 4, text: "Klas tsu" }
          ],
          correctOptionId: 1,
          hints: ["Place of learning"],
          explanation: "Skul = School in Ga."
        },
        {
          id: 902,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Teacher' in Ga?",
          options: [
            { id: 1, text: "Skul" },
            { id: 2, text: "Tsɔɔlɔ" },
            { id: 3, text: "Wolo" },
            { id: 4, text: "Klas tsu" }
          ],
          correctOptionId: 2,
          hints: ["Person who teaches"],
          explanation: "Tsɔɔlɔ = Teacher in Ga."
        },
        // {
        //   id: 903,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English translation.",
        //   question: "What word did you hear?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/wolo.m4a"),
        //   options: [
        //     { id: 1, text: "School" },
        //     { id: 2, text: "Teacher" },
        //     { id: 3, text: "Book" },
        //     { id: 4, text: "Classroom" }
        //   ],
        //   correctOptionId: 3,
        //   hints: ["What you read"],
        //   explanation: "You heard 'Wolo' which means Book in Ga."
        // },
        {
          id: 904,
          type: "drag_drop",
          instruction: "Complete the Ga word by dragging the correct ending.",
          sentence: "Klas [_____] (Classroom)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "tsu" },
            { id: "opt2", text: "lɔ" },
            { id: "opt3", text: "lo" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["tsu = room"],
          explanation: "Klas tsu = Classroom in Ga."
        }
      ]
    },

    {
      id: "9-2",
      type: "phrases",
      title: "Studying",
      icon: "book-outline",
      description: "Learn phrases related to studying and language learning in Ga",
      words: ["Mikaseɔ Ga", "Miwieɔ Ga fioo", "Shia nitsumɔ", "Miyɛ kaa wɔ", "Ŋmaa ogbɛi"],
      vocabulary: [
        {
          id: 113,
          english: "I am learning Ga",
          native: "Mikaseɔ Ga",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/mikaseɔ_ga.m4a")
        },
        {
          id: 23,
          english: "I speak a little Ga",
          native: "Miwieɔ Ga fioo",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/miwieɔ_ga_fioo.m4a")
        },
        {
          id: 117,
          english: "Homework",
          native: "Shia nitsumɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/shia_nitsumɔ.m4a")
        },
        {
          id: 118,
          english: "I have an exam tomorrow",
          native: "Miyɛ kaa wɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/miyɛ_kaa_wɔ.m4a")
        },
        {
          id: 119,
          english: "Write your name",
          native: "Ŋmaa ogbɛi",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/ŋmaa_ogbɛi.m4a")
        }
      ],
      questions: [
        {
          id: 905,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am learning Ga' in Ga?",
          options: [
            { id: 1, text: "Mikaseɔ Ga" },
            { id: 2, text: "Miwieɔ Ga fioo" },
            { id: 3, text: "Shia nitsumɔ" },
            { id: 4, text: "Miyɛ kaa wɔ" }
          ],
          correctOptionId: 1,
          hints: ["Mikaseɔ = I am learning"],
          explanation: "Mikaseɔ Ga = I am learning Ga in Ga."
        },
        // {
        //   id: 906,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English translation.",
        //   question: "What did the speaker say?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/miwieɔ_ga_fioo.m4a"),
        //   options: [
        //     { id: 1, text: "I am learning Ga" },
        //     { id: 2, text: "I speak a little Ga" },
        //     { id: 3, text: "I have an exam tomorrow" },
        //     { id: 4, text: "Write your name" }
        //   ],
        //   correctOptionId: 2,
        //   hints: ["Miwieɔ = I speak", "fioo = a little"],
        //   explanation: "You heard 'Miwieɔ Ga fioo' which means 'I speak a little Ga' in Ga."
        // },
        {
          id: 907,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Miyɛ kaa [_____] (I have an exam tomorrow)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "wɔ" },
            { id: "opt2", text: "lɛ" },
            { id: "opt3", text: "yɛ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["wɔ = tomorrow"],
          explanation: "Miyɛ kaa wɔ = I have an exam tomorrow in Ga."
        },
        {
          id: 908,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Homework' in Ga?",
          options: [
            { id: 1, text: "Mikaseɔ Ga" },
            { id: 2, text: "Miwieɔ Ga fioo" },
            { id: 3, text: "Shia nitsumɔ" },
            { id: 4, text: "Ŋmaa ogbɛi" }
          ],
          correctOptionId: 3,
          hints: ["shia = home", "nitsumɔ = work"],
          explanation: "Shia nitsumɔ = Homework in Ga."
        },
        {
          id: 909,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Write your name' in Ga?",
          options: [
            { id: 1, text: "Mikaseɔ Ga" },
            { id: 2, text: "Miwieɔ Ga fioo" },
            { id: 3, text: "Shia nitsumɔ" },
            { id: 4, text: "Ŋmaa ogbɛi" }
          ],
          correctOptionId: 4,
          hints: ["ŋmaa = write", "ogbɛi = your name"],
          explanation: "Ŋmaa ogbɛi = Write your name in Ga."
        }
      ]
    },

    {
      id: "9-3",
      type: "phrases",
      title: "Work & Progress",
      icon: "briefcase-outline",
      description: "Learn phrases related to work and progress in Ga",
      words: ["Mitsuɔ nii yɛ ɔfis", "Tsɔɔlɔ lɛ miiba", "Migbe minitsumɔ lɛ naa"],
      vocabulary: [
        {
          id: 114,
          english: "I work in an office",
          native: "Mitsuɔ nii yɛ ɔfis",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/mitsuɔ_nii_yɛ_ɔfis.m4a")
        },
        {
          id: 120,
          english: "The teacher is coming",
          native: "Tsɔɔlɔ lɛ miiba",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/tsɔɔlɔ_lɛ_miiba.m4a")
        },
        {
          id: 121,
          english: "I have finished my work",
          native: "Migbe minitsumɔ lɛ naa",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/migbe_minitsumɔ_lɛ_naa.m4a")
        }
      ],
      questions: [
        {
          id: 910,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I work in an office' in Ga?",
          options: [
            { id: 1, text: "Mitsuɔ nii yɛ ɔfis" },
            { id: 2, text: "Tsɔɔlɔ lɛ miiba" },
            { id: 3, text: "Migbe minitsumɔ lɛ naa" },
            { id: 4, text: "Mikaseɔ Ga" }
          ],
          correctOptionId: 1,
          hints: ["Mitsuɔ nii = I work", "ɔfis = office"],
          explanation: "Mitsuɔ nii yɛ ɔfis = I work in an office in Ga."
        },
        // {
        //   id: 911,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English translation.",
        //   question: "What did the speaker say?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/tsɔɔlɔ_lɛ_miiba.m4a"),
        //   options: [
        //     { id: 1, text: "I work in an office" },
        //     { id: 2, text: "The teacher is coming" },
        //     { id: 3, text: "I have finished my work" },
        //     { id: 4, text: "I am learning Ga" }
        //   ],
        //   correctOptionId: 2,
        //   hints: ["tsɔɔlɔ = teacher", "miiba = coming"],
        //   explanation: "You heard 'Tsɔɔlɔ lɛ miiba' which means 'The teacher is coming' in Ga."
        // },
        {
          id: 912,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Migbe minitsumɔ lɛ [_____] (I have finished my work)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "naa" },
            { id: "opt2", text: "yɛ" },
            { id: "opt3", text: "lɛ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["naa = finished"],
          explanation: "Migbe minitsumɔ lɛ naa = I have finished my work in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-9",
    title: "Review: School & Work",
    icon: "refresh-outline",
    description: "Review all the school and work vocabulary you've learned",
    questions: [
      {
        id: 913,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Book' in Ga?",
        options: [
          { id: 1, text: "Skul" },
          { id: 2, text: "Tsɔɔlɔ" },
          { id: 3, text: "Wolo" },
          { id: 4, text: "Klas tsu" }
        ],
        correctOptionId: 3,
        hints: ["What you read"],
        explanation: "Wolo = Book in Ga."
      },
      // {
      //   id: 914,
      //   type: "listening_multiple_choice",
      //   instruction: "Listen to the audio and select the correct English translation.",
      //   question: "What word did you hear?",
      //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/skul.m4a"),
      //   options: [
      //     { id: 1, text: "School" },
      //     { id: 2, text: "Teacher" },
      //     { id: 3, text: "Book" },
      //     { id: 4, text: "Classroom" }
      //   ],
      //   correctOptionId: 1,
      //   hints: ["Place of learning"],
      //   explanation: "You heard 'Skul' which means School in Ga."
      // },
      {
        id: 915,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Classroom' in Ga?",
        options: [
          { id: 1, text: "Klas tsu" },
          { id: 2, text: "Shia nitsumɔ" },
          { id: 3, text: "Wolo" },
          { id: 4, text: "Skul" }
        ],
        correctOptionId: 1,
        hints: ["klas = class", "tsu = room"],
        explanation: "Klas tsu = Classroom in Ga."
      },
      {
        id: 916,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am learning Ga' in Ga?",
        options: [
          { id: 1, text: "Mikaseɔ Ga" },
          { id: 2, text: "Miwieɔ Ga fioo" },
          { id: 3, text: "Shia nitsumɔ" },
          { id: 4, text: "Miyɛ kaa wɔ" }
        ],
        correctOptionId: 1,
        hints: ["Mikaseɔ = I am learning"],
        explanation: "Mikaseɔ Ga = I am learning Ga."
      },
      // {
      //   id: 917,
      //   type: "listening_multiple_choice",
      //   instruction: "Listen to the audio and select the correct English translation.",
      //   question: "What did the speaker say?",
      //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/ŋmaa_ogbɛi.m4a"),
      //   options: [
      //     { id: 1, text: "I am learning Ga" },
      //     { id: 2, text: "Homework" },
      //     { id: 3, text: "I have an exam tomorrow" },
      //     { id: 4, text: "Write your name" }
      //   ],
      //   correctOptionId: 4,
      //   hints: ["ŋmaa = write", "ogbɛi = name"],
      //   explanation: "You heard 'Ŋmaa ogbɛi' which means 'Write your name' in Ga."
      // },
      {
        id: 918,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I speak a little Ga' in Ga?",
        options: [
          { id: 1, text: "Mikaseɔ Ga" },
          { id: 2, text: "Miwieɔ Ga fioo" },
          { id: 3, text: "Shia nitsumɔ" },
          { id: 4, text: "Miyɛ kaa wɔ" }
        ],
        correctOptionId: 2,
        hints: ["Miwieɔ = I speak", "fioo = a little"],
        explanation: "Miwieɔ Ga fioo = I speak a little Ga."
      },
      {
        id: 919,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I have finished my work' in Ga?",
        options: [
          { id: 1, text: "Mitsuɔ nii yɛ ɔfis" },
          { id: 2, text: "Tsɔɔlɔ lɛ miiba" },
          { id: 3, text: "Migbe minitsumɔ lɛ naa" },
          { id: 4, text: "Mikaseɔ Ga" }
        ],
        correctOptionId: 3,
        hints: ["Migbe = I have finished", "naa = finished"],
        explanation: "Migbe minitsumɔ lɛ naa = I have finished my work."
      },
      {
        id: 920,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Miyɛ kaa [_____] (I have an exam tomorrow)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "wɔ" },
          { id: "opt2", text: "lɛ" },
          { id: "opt3", text: "yɛ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["wɔ = tomorrow"],
        explanation: "Miyɛ kaa wɔ = I have an exam tomorrow."
      },
      {
        id: 921,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Migbe minitsumɔ lɛ [_____] (I have finished my work)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "naa" },
          { id: "opt2", text: "yɛ" },
          { id: "opt3", text: "lɛ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["naa = finished"],
        explanation: "Migbe minitsumɔ lɛ naa = I have finished my work."
      }
    ]
  }
};