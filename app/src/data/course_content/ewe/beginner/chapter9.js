export default {
  id: 9,
  title: "School & Work",
  description: "Learn school and work vocabulary in Ewe",
  icon: "school-outline",
  totalXp: 5,
  difficulty: "Beginner",

  sections: [
    {
      id: "9-1",
      type: "words",
      title: "School Words",
      icon: "school-outline",
      description: "Learn essential school vocabulary in Ewe",
      words: ["Suku", "Nufiala", "Agbalẽ", "Nuŋlɔti", "Sukuxɔ", "Aƒemedɔ"],
      vocabulary: [
        {
          id: 110,
          english: "School",
          native: "Suku",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/suku.m4a")
        },
        {
          id: 111,
          english: "Teacher",
          native: "Nufiala",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/nufiala.m4a")
        },
        {
          id: 112,
          english: "Book",
          native: "Agbalẽ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/agbalẽ.m4a")
        },
        {
          id: 115,
          english: "Pen",
          native: "Nuŋlɔti",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/nuŋlɔti.m4a")
        },
        {
          id: 116,
          english: "Classroom",
          native: "Sukuxɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/sukuxɔ.m4a")
        },
        {
          id: 117,
          english: "Homework",
          native: "Aƒemedɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/aƒemedɔ.m4a")
        }
      ],
      questions: [
        {
          id: 901,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'School' in Ewe?",
          options: [
            { id: 1, text: "Suku" },
            { id: 2, text: "Nufiala" },
            { id: 3, text: "Agbalẽ" },
            { id: 4, text: "Nuŋlɔti" }
          ],
          correctOptionId: 1,
          hints: ["Place of learning"],
          explanation: "Suku = School in Ewe."
        },
        {
          id: 902,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Teacher' in Ewe?",
          options: [
            { id: 1, text: "Suku" },
            { id: 2, text: "Nufiala" },
            { id: 3, text: "Agbalẽ" },
            { id: 4, text: "Sukuxɔ" }
          ],
          correctOptionId: 2,
          hints: ["Person who teaches"],
          explanation: "Nufiala = Teacher in Ewe."
        },
        {
          id: 903,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/agbalẽ.m4a"),
          options: [
            { id: 1, text: "School" },
            { id: 2, text: "Teacher" },
            { id: 3, text: "Book" },
            { id: 4, text: "Pen" }
          ],
          correctOptionId: 3,
          hints: ["What you read"],
          explanation: "You heard 'Agbalẽ' which means Book in Ewe."
        }
      ]
    },

    {
      id: "9-2",
      type: "phrases",
      title: "Studying & Work",
      icon: "book-outline",
      description: "Learn phrases related to studying, language learning, and work in Ewe",
      words: ["Mele ʋegbé srɔ̃m", "Medoa ʋegbé vie", "Dodokpɔ le ashinye etsɔ", "Ŋlɔ wò ŋkɔ", "Mewu nye dɔ nu"],
      vocabulary: [
        {
          id: 113,
          english: "I am learning Ewe",
          native: "Mele ʋegbé srɔ̃m",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/mele_ʋegbé_srɔ̃m.m4a")
        },
        {
          id: 23,
          english: "I speak a little Ewe",
          native: "Medoa ʋegbé vie",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/medoa_ʋegbé_vie.m4a")
        },
        {
          id: 118,
          english: "I have an exam tomorrow",
          native: "Dodokpɔ le ashinye etsɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/dodokpɔ_le_ashinye_etsɔ.m4a")
        },
        {
          id: 119,
          english: "Write your name",
          native: "Ŋlɔ wò ŋkɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/ŋlɔ_wò_ŋkɔ.m4a")
        },
        {
          id: 121,
          english: "I finished my work",
          native: "Mewu nye dɔ nu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/mewu_nye_dɔ_nu.m4a")
        }
      ],
      questions: [
        {
          id: 904,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am learning Ewe' in Ewe?",
          options: [
            { id: 1, text: "Mele ʋegbé srɔ̃m" },
            { id: 2, text: "Medoa ʋegbé vie" },
            { id: 3, text: "Aƒemedɔ" },
            { id: 4, text: "Dodokpɔ le ashinye etsɔ" }
          ],
          correctOptionId: 1,
          hints: ["Mele = I am", "srɔ̃m = learning"],
          explanation: "Mele ʋegbé srɔ̃m = I am learning Ewe in Ewe."
        },
        {
          id: 905,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/mele_ʋegbé_srɔ̃m.m4a"),
          options: [
            { id: 1, text: "I am learning Ewe" },
            { id: 2, text: "I speak a little Ewe" },
            { id: 3, text: "I have an exam tomorrow" },
            { id: 4, text: "Write your name" }
          ],
          correctOptionId: 1,
          hints: ["Mele = I am", "srɔ̃m = learning"],
          explanation: "You heard 'Mele ʋegbé srɔ̃m' which means 'I am learning Ewe' in Ewe."
        },
        {
          id: 906,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "Ŋlɔ wò ___ (Write your name)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "ŋkɔ" },
            { id: "opt2", text: "dɔ" },
            { id: "opt3", text: "me" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["ŋkɔ = name"],
          explanation: "Ŋlɔ wò ŋkɔ = Write your name in Ewe."
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
        id: 907,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Book' in Ewe?",
        options: [
          { id: 1, text: "Suku" },
          { id: 2, text: "Nufiala" },
          { id: 3, text: "Agbalẽ" },
          { id: 4, text: "Nuŋlɔti" }
        ],
        correctOptionId: 3,
        hints: ["What you read"],
        explanation: "Agbalẽ = Book in Ewe."
      },
      {
        id: 908,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What word did you hear?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/suku.m4a"),
        options: [
          { id: 1, text: "School" },
          { id: 2, text: "Teacher" },
          { id: 3, text: "Book" },
          { id: 4, text: "Pen" }
        ],
        correctOptionId: 1,
        hints: ["Place of learning"],
        explanation: "You heard 'Suku' which means School in Ewe."
      },
      {
        id: 909,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Classroom' in Ewe?",
        options: [
          { id: 1, text: "Sukuxɔ" },
          { id: 2, text: "Aƒemedɔ" },
          { id: 3, text: "Nuŋlɔti" },
          { id: 4, text: "Agbalẽ" }
        ],
        correctOptionId: 1,
        hints: ["suku = school", "xɔ = room"],
        explanation: "Sukuxɔ = Classroom in Ewe."
      },
      {
        id: 910,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am learning Ewe' in Ewe?",
        options: [
          { id: 1, text: "Mele ʋegbé srɔ̃m" },
          { id: 2, text: "Medoa ʋegbé vie" },
          { id: 3, text: "Aƒemedɔ" },
          { id: 4, text: "Dodokpɔ le ashinye etsɔ" }
        ],
        correctOptionId: 1,
        hints: ["Mele = I am", "srɔ̃m = learning"],
        explanation: "Mele ʋegbé srɔ̃m = I am learning Ewe."
      },
      {
        id: 911,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter9/ŋlɔ_wò_ŋkɔ.m4a"),
        options: [
          { id: 1, text: "I am learning Ewe" },
          { id: 2, text: "Homework" },
          { id: 3, text: "I have an exam tomorrow" },
          { id: 4, text: "Write your name" }
        ],
        correctOptionId: 4,
        hints: ["ŋlɔ = write", "ŋkɔ = name"],
        explanation: "You heard 'Ŋlɔ wò ŋkɔ' which means 'Write your name' in Ewe."
      },
      {
        id: 912,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I speak a little Ewe' in Ewe?",
        options: [
          { id: 1, text: "Mele ʋegbé srɔ̃m" },
          { id: 2, text: "Medoa ʋegbé vie" },
          { id: 3, text: "Aƒemedɔ" },
          { id: 4, text: "Nufiala menye" }
        ],
        correctOptionId: 2,
        hints: ["Medoa = I speak", "vie = a little"],
        explanation: "Medoa ʋegbé vie = I speak a little Ewe."
      },
      {
        id: 913,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I have an exam tomorrow' in Ewe?",
        options: [
          { id: 1, text: "Mele ʋegbé srɔ̃m" },
          { id: 2, text: "Aƒemedɔ" },
          { id: 3, text: "Dodokpɔ le ashinye etsɔ" },
          { id: 4, text: "Ŋlɔ wò ŋkɔ" }
        ],
        correctOptionId: 3,
        hints: ["dodokpɔ = exam", "etsɔ = tomorrow"],
        explanation: "Dodokpɔ le ashinye etsɔ = I have an exam tomorrow."
      },
      {
        id: 914,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I finished my work' in Ewe?",
        options: [
          { id: 1, text: "Mewu nye dɔ nu" },
          { id: 2, text: "Nufiala gbɔna" },
          { id: 3, text: "Mele ʋegbé srɔ̃m" },
          { id: 4, text: "Dodokpɔ le ashinye etsɔ" }
        ],
        correctOptionId: 1,
        hints: ["mewu = I finished", "dɔ = work"],
        explanation: "Mewu nye dɔ nu = I finished my work."
      },
      {
        id: 915,
        type: "drag_drop",
        instruction: "Complete the Ewe phrase by dragging the correct word.",
        question: "Mewu nye dɔ ___ (I finished my work)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "nu" },
          { id: "opt2", text: "me" },
          { id: "opt3", text: "le" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt1"
        },
        hints: ["nu = finished"],
        explanation: "Mewu nye dɔ nu = I finished my work."
      },
      {
        id: 916,
        type: "drag_drop",
        instruction: "Complete the Ewe phrase by dragging the correct word.",
        question: "Dodokpɔ le ashinye ___ (I have an exam tomorrow)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "etsɔ" },
          { id: "opt2", text: "egbe" },
          { id: "opt3", text: "kaba" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt1"
        },
        hints: ["etsɔ = tomorrow"],
        explanation: "Dodokpɔ le ashinye etsɔ = I have an exam tomorrow."
      }
    ]
  }
};