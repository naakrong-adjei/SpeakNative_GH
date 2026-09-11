export default {
  id: 9,
  title: "School & Learning",
  description: "Learn essential school and learning vocabulary in Ga",
  icon: "school-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "9-1",
      type: "words",
      title: "School Basics",
      icon: "school-outline",
      description: "Learn essential school vocabulary in Ga",
      words: ["Sukuu", "Tsɔɔlɔ", "Wolo"],
      vocabulary: [
        {
          id: 110,
          english: "School",
          native: "Sukuu",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/sukuu.m4a")
        },
        {
          id: 111,
          english: "Teacher",
          native: "Tsɔɔlɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/tsɔɔlɔ.m4a")
        },
        {
          id: 112,
          english: "Book",
          native: "Wolo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/wolo.m4a")
        }
      ],
      questions: [
        {
          id: 901,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'School' in Ga?",
          options: [
            { id: 1, text: "Sukuu" },
            { id: 2, text: "Tsɔɔlɔ" },
            { id: 3, text: "Wolo" },
            { id: 4, text: "Shia nitsumɔ" }
          ],
          correctOptionId: 1,
          hints: ["Place of learning"],
          explanation: "Sukuu = School in Ga."
        },
        {
          id: 902,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Teacher' in Ga?",
          options: [
            { id: 1, text: "Sukuu" },
            { id: 2, text: "Tsɔɔlɔ" },
            { id: 3, text: "Wolo" },
            { id: 4, text: "Shia nitsumɔ" }
          ],
          correctOptionId: 2,
          hints: ["Person who teaches"],
          explanation: "Tsɔɔlɔ = Teacher in Ga."
        },
        {
          id: 903,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Book' in Ga?",
          options: [
            { id: 1, text: "Sukuu" },
            { id: 2, text: "Tsɔɔlɔ" },
            { id: 3, text: "Wolo" },
            { id: 4, text: "Shia nitsumɔ" }
          ],
          correctOptionId: 3,
          hints: ["What you read"],
          explanation: "Wolo = Book in Ga."
        }
      ]
    },

    {
      id: "9-2",
      type: "phrases",
      title: "Learning & School Activities",
      icon: "book-outline",
      description: "Learn phrases related to studying and language learning in Ga",
      words: ["Miikase Ga", "Miwieɔ Ga fioo", "Shia nitsumɔ", "Miyɛ kaa wɔ", "Ŋmaa ogbɛi"],
      vocabulary: [
        {
          id: 113,
          english: "I am learning Ga",
          native: "Miikase Ga",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/miikase_ga.m4a")
        },
        {
          id: 23,
          english: "I speak a little Ga",
          native: "Miwieɔ Ga fioo",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/miwieɔ_ga_fioo.m4a")
        },
        {
          id: 117,
          english: "Homework",
          native: "Shia nitsumɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/shia_nitsumɔ.m4a")
        },
        {
          id: 118,
          english: "I have an exam tomorrow",
          native: "Miyɛ kaa wɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/miyɛ_kaa_wɔ.m4a")
        },
        {
          id: 119,
          english: "Write your name",
          native: "Ŋmaa ogbɛi",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/ŋmaa_ogbɛi.m4a")
        }
      ],
      questions: [
        {
          id: 905,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am learning Ga' in Ga?",
          options: [
            { id: 1, text: "Miikase Ga" },
            { id: 2, text: "Miwieɔ Ga fioo" },
            { id: 3, text: "Shia nitsumɔ" },
            { id: 4, text: "Miyɛ kaa wɔ" }
          ],
          correctOptionId: 1,
          hints: ["Miikase = I am learning"],
          explanation: "Miikase Ga = I am learning Ga in Ga."
        },
        {
          id: 906,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I speak a little Ga' in Ga?",
          options: [
            { id: 1, text: "Miikase Ga" },
            { id: 2, text: "Miwieɔ Ga fioo" },
            { id: 3, text: "Shia nitsumɔ" },
            { id: 4, text: "Miyɛ kaa wɔ" }
          ],
          correctOptionId: 2,
          hints: ["Miwieɔ = I speak", "fioo = a little"],
          explanation: "Miwieɔ Ga fioo = I speak a little Ga in Ga."
        },
        {
          id: 907,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Homework' in Ga?",
          options: [
            { id: 1, text: "Miikase Ga" },
            { id: 2, text: "Miwieɔ Ga fioo" },
            { id: 3, text: "Shia nitsumɔ" },
            { id: 4, text: "Ŋmaa ogbɛi" }
          ],
          correctOptionId: 3,
          hints: ["shia = home", "nitsumɔ = work"],
          explanation: "Shia nitsumɔ = Homework in Ga."
        },
        {
          id: 908,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I have an exam tomorrow' in Ga?",
          options: [
            { id: 1, text: "Miikase Ga" },
            { id: 2, text: "Miwieɔ Ga fioo" },
            { id: 3, text: "Shia nitsumɔ" },
            { id: 4, text: "Miyɛ kaa wɔ" }
          ],
          correctOptionId: 4,
          hints: ["kaa = exam", "wɔ = tomorrow"],
          explanation: "Miyɛ kaa wɔ = I have an exam tomorrow in Ga."
        },
        {
          id: 909,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Write your name' in Ga?",
          options: [
            { id: 1, text: "Ŋmaa ogbɛi" },
            { id: 2, text: "Miwieɔ Ga fioo" },
            { id: 3, text: "Shia nitsumɔ" },
            { id: 4, text: "Miyɛ kaa wɔ" }
          ],
          correctOptionId: 1,
          hints: ["ŋmaa = write", "ogbɛi = your name"],
          explanation: "Ŋmaa ogbɛi = Write your name in Ga."
        }
      ]
    },

    {
      id: "9-3",
      type: "phrases",
      title: "School in Action",
      icon: "briefcase-outline",
      description: "Learn phrases related to work and progress in Ga",
      words: ["Tsɔɔlɔ lɛ miiba", "Migbe minitsumɔ lɛ naa"],
      vocabulary: [
        {
          id: 120,
          english: "The teacher is coming",
          native: "Tsɔɔlɔ lɛ miiba",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/tsɔɔlɔ_lɛ_miiba.m4a")
        },
        {
          id: 121,
          english: "I have finished my work",
          native: "Migbe minitsumɔ lɛ naa",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter9/migbe_minitsumɔ_lɛ_naa.m4a")
        }
      ],
      questions: [
        {
          id: 910,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The teacher is coming' in Ga?",
          options: [
            { id: 1, text: "Tsɔɔlɔ lɛ miiba" },
            { id: 2, text: "Migbe minitsumɔ lɛ naa" },
            { id: 3, text: "Miikase Ga" },
            { id: 4, text: "Miwieɔ Ga fioo" }
          ],
          correctOptionId: 1,
          hints: ["tsɔɔlɔ = teacher", "miiba = coming"],
          explanation: "Tsɔɔlɔ lɛ miiba = The teacher is coming in Ga."
        },
        {
          id: 911,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I have finished my work' in Ga?",
          options: [
            { id: 1, text: "Tsɔɔlɔ lɛ miiba" },
            { id: 2, text: "Migbe minitsumɔ lɛ naa" },
            { id: 3, text: "Miikase Ga" },
            { id: 4, text: "Shia nitsumɔ" }
          ],
          correctOptionId: 2,
          hints: ["Migbe = I have finished", "naa = finished"],
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
          { id: 1, text: "Sukuu" },
          { id: 2, text: "Tsɔɔlɔ" },
          { id: 3, text: "Wolo" },
          { id: 4, text: "Shia nitsumɔ" }
        ],
        correctOptionId: 3,
        hints: ["What you read"],
        explanation: "Wolo = Book in Ga."
      },
      {
        id: 914,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'School' in Ga?",
        options: [
          { id: 1, text: "Sukuu" },
          { id: 2, text: "Tsɔɔlɔ" },
          { id: 3, text: "Wolo" },
          { id: 4, text: "Shia nitsumɔ" }
        ],
        correctOptionId: 1,
        hints: ["Place of learning"],
        explanation: "Sukuu = School in Ga."
      },
      {
        id: 915,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am learning Ga' in Ga?",
        options: [
          { id: 1, text: "Miikase Ga" },
          { id: 2, text: "Miwieɔ Ga fioo" },
          { id: 3, text: "Shia nitsumɔ" },
          { id: 4, text: "Miyɛ kaa wɔ" }
        ],
        correctOptionId: 1,
        hints: ["Miikase = I am learning"],
        explanation: "Miikase Ga = I am learning Ga."
      },
      {
        id: 916,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Write your name' in Ga?",
        options: [
          { id: 1, text: "Miikase Ga" },
          { id: 2, text: "Shia nitsumɔ" },
          { id: 3, text: "Miyɛ kaa wɔ" },
          { id: 4, text: "Ŋmaa ogbɛi" }
        ],
        correctOptionId: 4,
        hints: ["ŋmaa = write", "ogbɛi = name"],
        explanation: "Ŋmaa ogbɛi = Write your name."
      },
      {
        id: 917,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I speak a little Ga' in Ga?",
        options: [
          { id: 1, text: "Miikase Ga" },
          { id: 2, text: "Miwieɔ Ga fioo" },
          { id: 3, text: "Shia nitsumɔ" },
          { id: 4, text: "Miyɛ kaa wɔ" }
        ],
        correctOptionId: 2,
        hints: ["Miwieɔ = I speak", "fioo = a little"],
        explanation: "Miwieɔ Ga fioo = I speak a little Ga."
      },
      {
        id: 918,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Homework' in Ga?",
        options: [
          { id: 1, text: "Shia nitsumɔ" },
          { id: 2, text: "Migbe minitsumɔ lɛ naa" },
          { id: 3, text: "Miikase Ga" },
          { id: 4, text: "Miwieɔ Ga fioo" }
        ],
        correctOptionId: 1,
        hints: ["shia = home", "nitsumɔ = work"],
        explanation: "Shia nitsumɔ = Homework."
      },
      {
        id: 919,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I have finished my work' in Ga?",
        options: [
          { id: 1, text: "Tsɔɔlɔ lɛ miiba" },
          { id: 2, text: "Migbe minitsumɔ lɛ naa" },
          { id: 3, text: "Miikase Ga" },
          { id: 4, text: "Miwieɔ Ga fioo" }
        ],
        correctOptionId: 2,
        hints: ["Migbe = I have finished", "naa = finished"],
        explanation: "Migbe minitsumɔ lɛ naa = I have finished my work."
      },
      {
        id: 920,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I have an exam tomorrow' in Ga?",
        options: [
          { id: 1, text: "Miyɛ kaa wɔ" },
          { id: 2, text: "Shia nitsumɔ" },
          { id: 3, text: "Miikase Ga" },
          { id: 4, text: "Tsɔɔlɔ lɛ miiba" }
        ],
        correctOptionId: 1,
        hints: ["kaa = exam", "wɔ = tomorrow"],
        explanation: "Miyɛ kaa wɔ = I have an exam tomorrow."
      },
      {
        id: 921,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The teacher is coming' in Ga?",
        options: [
          { id: 1, text: "Tsɔɔlɔ lɛ miiba" },
          { id: 2, text: "Migbe minitsumɔ lɛ naa" },
          { id: 3, text: "Miikase Ga" },
          { id: 4, text: "Shia nitsumɔ" }
        ],
        correctOptionId: 1,
        hints: ["tsɔɔlɔ = teacher", "miiba = coming"],
        explanation: "Tsɔɔlɔ lɛ miiba = The teacher is coming."
      }
    ]
  }
};