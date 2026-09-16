export default {
  id: 9,
  title: "School & Work",
  description: "Learn school and work vocabulary in Twi",
  icon: "school-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "9-1",
      type: "words",
      title: "School Words",
      icon: "school-outline",
      description: "Learn essential school vocabulary in Twi",
      words: ["Sukuu", "Ɔkyerɛkyerɛni", "Nwoma", "Twerɛdua", "Adesuadan"],
      vocabulary: [
        {
          id: 146,
          english: "School",
          native: "Sukuu",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/sukuu.m4a")
        },
        {
          id: 147,
          english: "Teacher",
          native: "Ɔkyerɛkyerɛni",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/ɔkyerɛkyerɛni.m4a")
        },
        {
          id: 148,
          english: "Book",
          native: "Nwoma",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/nwoma.m4a")
        },
        {
          id: 149,
          english: "Pen",
          native: "Twerɛdua",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/twerɛdua.m4a")
        },
        {
          id: 150,
          english: "Classroom",
          native: "Adesuadan",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/adesuadan.m4a")
        }
      ],
      questions: [
        {
          id: 901,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'School' in Twi?",
          options: [
            { id: 1, text: "Sukuu" },
            { id: 2, text: "Ɔkyerɛkyerɛni" },
            { id: 3, text: "Nwoma" },
            { id: 4, text: "Twerɛdua" }
          ],
          correctOptionId: 1,
          hints: ["Place of learning"],
          explanation: "Sukuu = School in Twi."
        },
        {
          id: 902,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/ɔkyerɛkyerɛni.m4a"),
          options: [
            { id: 1, text: "School" },
            { id: 2, text: "Teacher" },
            { id: 3, text: "Book" },
            { id: 4, text: "Pen" }
          ],
          correctOptionId: 2,
          hints: ["Person who teaches"],
          explanation: "You heard 'Ɔkyerɛkyerɛni' which means Teacher in Twi."
        },
        {
          id: 903,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Book' in Twi?",
          options: [
            { id: 1, text: "Sukuu" },
            { id: 2, text: "Ɔkyerɛkyerɛni" },
            { id: 3, text: "Nwoma" },
            { id: 4, text: "Adesuadan" }
          ],
          correctOptionId: 3,
          hints: ["What you read"],
          explanation: "Nwoma = Book in Twi."
        },
        {
          id: 904,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/twerɛdua.m4a"),
          options: [
            { id: 1, text: "School" },
            { id: 2, text: "Book" },
            { id: 3, text: "Pen" },
            { id: 4, text: "Classroom" }
          ],
          correctOptionId: 3,
          hints: ["What you write with"],
          explanation: "You heard 'Twerɛdua' which means Pen in Twi."
        },
        {
          id: 905,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Classroom' in Twi?",
          options: [
            { id: 1, text: "Sukuu" },
            { id: 2, text: "Nwoma" },
            { id: 3, text: "Twerɛdua" },
            { id: 4, text: "Adesuadan" }
          ],
          correctOptionId: 4,
          hints: ["Where lessons happen"],
          explanation: "Adesuadan = Classroom in Twi."
        }
      ]
    },

    {
      id: "9-2",
      type: "phrases",
      title: "Studying & Schoolwork",
      icon: "book-outline",
      description: "Learn phrases about studying and schoolwork in Twi",
      words: ["Fie adwuma", "Meresua Twi", "Mewɔ sɔhwɛ ɔkyena", "Twerɛ wo din"],
      vocabulary: [
        {
          id: 151,
          english: "Homework",
          native: "Fie adwuma",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/fie_adwuma.m4a")
        },
        {
          id: 152,
          english: "I am learning Twi",
          native: "Meresua Twi",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/meresua_twi.m4a")
        },
        {
          id: 153,
          english: "I have an exam tomorrow",
          native: "Mewɔ sɔhwɛ ɔkyena",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/mewɔ_sɔhwɛ_ɔkyena.m4a")
        },
        {
          id: 154,
          english: "Write your name",
          native: "Twerɛ wo din",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/twerɛ_wo_din.m4a")
        }
      ],
      questions: [
        {
          id: 906,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Homework' in Twi?",
          options: [
            { id: 1, text: "Fie adwuma" },
            { id: 2, text: "Meresua Twi" },
            { id: 3, text: "Mewɔ sɔhwɛ ɔkyena" },
            { id: 4, text: "Twerɛ wo din" }
          ],
          correctOptionId: 1,
          hints: ["fie = home", "adwuma = work"],
          explanation: "Fie adwuma = Homework in Twi."
        },
        {
          id: 907,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/meresua_twi.m4a"),
          options: [
            { id: 1, text: "Homework" },
            { id: 2, text: "I am learning Twi" },
            { id: 3, text: "I have an exam tomorrow" },
            { id: 4, text: "Write your name" }
          ],
          correctOptionId: 2,
          hints: ["Meresua = I am learning"],
          explanation: "You heard 'Meresua Twi' which means 'I am learning Twi' in Twi."
        },
        {
          id: 908,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I have an exam tomorrow' in Twi?",
          options: [
            { id: 1, text: "Fie adwuma" },
            { id: 2, text: "Meresua Twi" },
            { id: 3, text: "Mewɔ sɔhwɛ ɔkyena" },
            { id: 4, text: "Twerɛ wo din" }
          ],
          correctOptionId: 3,
          hints: ["sɔhwɛ = exam", "ɔkyena = tomorrow"],
          explanation: "Mewɔ sɔhwɛ ɔkyena = I have an exam tomorrow in Twi."
        },
        {
          id: 909,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/twerɛ_wo_din.m4a"),
          options: [
            { id: 1, text: "Homework" },
            { id: 2, text: "I am learning Twi" },
            { id: 3, text: "I have an exam tomorrow" },
            { id: 4, text: "Write your name" }
          ],
          correctOptionId: 4,
          hints: ["Twerɛ = write", "wo din = your name"],
          explanation: "You heard 'Twerɛ wo din' which means 'Write your name' in Twi."
        }
      ]
    },

    {
      id: "9-3",
      type: "phrases",
      title: "School & Work Activities",
      icon: "briefcase-outline",
      description: "Learn phrases about school and work activities in Twi",
      words: ["Ɔkyerɛkyerɛni no reba", "Mawie m'adwuma"],
      vocabulary: [
        {
          id: 155,
          english: "The teacher is coming",
          native: "Ɔkyerɛkyerɛni no reba",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/ɔkyerɛkyerɛni_no_reba.m4a")
        },
        {
          id: 156,
          english: "I finished my work",
          native: "Mawie m'adwuma",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/mawie_m_adwuma.m4a")
        }
      ],
      questions: [
        {
          id: 910,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The teacher is coming' in Twi?",
          options: [
            { id: 1, text: "Ɔkyerɛkyerɛni no reba" },
            { id: 2, text: "Mawie m'adwuma" },
            { id: 3, text: "Meresua Twi" },
            { id: 4, text: "Fie adwuma" }
          ],
          correctOptionId: 1,
          hints: ["reba = is coming"],
          explanation: "Ɔkyerɛkyerɛni no reba = The teacher is coming in Twi."
        },
        {
          id: 911,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/mawie_m_adwuma.m4a"),
          options: [
            { id: 1, text: "The teacher is coming" },
            { id: 2, text: "I finished my work" },
            { id: 3, text: "I am learning Twi" },
            { id: 4, text: "Write your name" }
          ],
          correctOptionId: 2,
          hints: ["Mawie = I finished", "m'adwuma = my work"],
          explanation: "You heard 'Mawie m'adwuma' which means 'I finished my work' in Twi."
        },
        {
          id: 912,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I finished my work' in Twi?",
          options: [
            { id: 1, text: "Ɔkyerɛkyerɛni no reba" },
            { id: 2, text: "Mawie m'adwuma" },
            { id: 3, text: "Meresua Twi" },
            { id: 4, text: "Twerɛ wo din" }
          ],
          correctOptionId: 2,
          hints: ["Mawie = I finished"],
          explanation: "Mawie m'adwuma = I finished my work in Twi."
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
        instruction: "Select the correct Twi word.",
        question: "What is 'Book' in Twi?",
        options: [
          { id: 1, text: "Sukuu" },
          { id: 2, text: "Ɔkyerɛkyerɛni" },
          { id: 3, text: "Nwoma" },
          { id: 4, text: "Twerɛdua" }
        ],
        correctOptionId: 3,
        hints: ["What you read"],
        explanation: "Nwoma = Book."
      },
      {
        id: 914,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What word did you hear?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/adesuadan.m4a"),
        options: [
          { id: 1, text: "School" },
          { id: 2, text: "Book" },
          { id: 3, text: "Pen" },
          { id: 4, text: "Classroom" }
        ],
        correctOptionId: 4,
        hints: ["Where lessons happen"],
        explanation: "You heard 'Adesuadan' which means Classroom."
      },
      {
        id: 915,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Teacher' in Twi?",
        options: [
          { id: 1, text: "Sukuu" },
          { id: 2, text: "Ɔkyerɛkyerɛni" },
          { id: 3, text: "Nwoma" },
          { id: 4, text: "Twerɛdua" }
        ],
        correctOptionId: 2,
        hints: ["Person who teaches"],
        explanation: "Ɔkyerɛkyerɛni = Teacher."
      },
      {
        id: 916,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/fie_adwuma.m4a"),
        options: [
          { id: 1, text: "Homework" },
          { id: 2, text: "I am learning Twi" },
          { id: 3, text: "I have an exam tomorrow" },
          { id: 4, text: "Write your name" }
        ],
        correctOptionId: 1,
        hints: ["fie = home", "adwuma = work"],
        explanation: "You heard 'Fie adwuma' which means Homework."
      },
      {
        id: 917,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I am learning Twi' in Twi?",
        options: [
          { id: 1, text: "Fie adwuma" },
          { id: 2, text: "Meresua Twi" },
          { id: 3, text: "Mewɔ sɔhwɛ ɔkyena" },
          { id: 4, text: "Twerɛ wo din" }
        ],
        correctOptionId: 2,
        hints: ["Meresua = I am learning"],
        explanation: "Meresua Twi = I am learning Twi."
      },
      {
        id: 918,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I have an exam tomorrow' in Twi?",
        options: [
          { id: 1, text: "Fie adwuma" },
          { id: 2, text: "Meresua Twi" },
          { id: 3, text: "Mewɔ sɔhwɛ ɔkyena" },
          { id: 4, text: "Mawie m'adwuma" }
        ],
        correctOptionId: 3,
        hints: ["sɔhwɛ = exam"],
        explanation: "Mewɔ sɔhwɛ ɔkyena = I have an exam tomorrow."
      },
      {
        id: 919,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Write your name' in Twi?",
        options: [
          { id: 1, text: "Twerɛ wo din" },
          { id: 2, text: "Meresua Twi" },
          { id: 3, text: "Mewɔ sɔhwɛ ɔkyena" },
          { id: 4, text: "Mawie m'adwuma" }
        ],
        correctOptionId: 1,
        hints: ["Twerɛ = write", "wo din = your name"],
        explanation: "Twerɛ wo din = Write your name."
      },
      {
        id: 920,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/meresua_twi.m4a"),
        options: [
          { id: 1, text: "Homework" },
          { id: 2, text: "I am learning Twi" },
          { id: 3, text: "I have an exam tomorrow" },
          { id: 4, text: "Write your name" }
        ],
        correctOptionId: 2,
        hints: ["Meresua = I am learning"],
        explanation: "You heard 'Meresua Twi' which means 'I am learning Twi'."
      },
      {
        id: 921,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The teacher is coming' in Twi?",
        options: [
          { id: 1, text: "Ɔkyerɛkyerɛni no reba" },
          { id: 2, text: "Mawie m'adwuma" },
          { id: 3, text: "Meresua Twi" },
          { id: 4, text: "Fie adwuma" }
        ],
        correctOptionId: 1,
        hints: ["reba = is coming"],
        explanation: "Ɔkyerɛkyerɛni no reba = The teacher is coming."
      },
      {
        id: 922,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Pen' in Twi?",
        options: [
          { id: 1, text: "Sukuu" },
          { id: 2, text: "Nwoma" },
          { id: 3, text: "Twerɛdua" },
          { id: 4, text: "Adesuadan" }
        ],
        correctOptionId: 3,
        hints: ["What you write with"],
        explanation: "Twerɛdua = Pen."
      },
      {
        id: 923,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I finished my work' in Twi?",
        options: [
          { id: 1, text: "Ɔkyerɛkyerɛni no reba" },
          { id: 2, text: "Mawie m'adwuma" },
          { id: 3, text: "Meresua Twi" },
          { id: 4, text: "Twerɛ wo din" }
        ],
        correctOptionId: 2,
        hints: ["Mawie = I finished"],
        explanation: "Mawie m'adwuma = I finished my work."
      },
      {
        id: 924,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What word did you hear?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter9/nwoma.m4a"),
        options: [
          { id: 1, text: "School" },
          { id: 2, text: "Teacher" },
          { id: 3, text: "Book" },
          { id: 4, text: "Pen" }
        ],
        correctOptionId: 3,
        hints: ["What you read"],
        explanation: "You heard 'Nwoma' which means Book."
      }
    ]
  }
};