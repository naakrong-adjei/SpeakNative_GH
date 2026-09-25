export default {
  id: 5,
  title: "Life & Meaning",
  description: "Learn how to talk about life and meaning in Ga",
  icon: "compass-outline",
  totalXp: 10,
  difficulty: "Advanced",

  sections: [
    {
      id: "5-1",
      type: "phrases",
      title: "Life & Purpose",
      icon: "compass-outline",
      description: "Learn phrases about life and purpose in Ga",
      words: ["Mɛni oheɔ oyeɔ yɛ wala he?", "Wala ji gbɛfaa", "Mɛni tsɔɔ owala shishi?", "Mɔ fɛɛ mɔ yɛ eyiŋtoo"],
      vocabulary: [
        {
          id: 261,
          english: "What do you believe about life?",
          native: "Mɛni oheɔ oyeɔ yɛ wala he?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/mɛni_oheɔ_oyeɔ_yɛ_wala_he.m4a")
        },
        {
          id: 262,
          english: "Life is a journey",
          native: "Wala ji gbɛfaa",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/wala_ji_gbɛfaa.m4a")
        },
        {
          id: 264,
          english: "What gives your life meaning?",
          native: "Mɛni tsɔɔ owala shishi?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/mɛni_tsɔɔ_owala_shishi.m4a")
        },
        {
          id: 265,
          english: "Everyone has a purpose",
          native: "Mɔ fɛɛ mɔ yɛ eyiŋtoo",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/mɔ_fɛɛ_mɔ_yɛ_eyiŋtoo.m4a")
        }
      ],
      questions: [
        {
          id: 502,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/wala_ji_gbɛfaa.m4a"),
          options: [
            { id: 1, text: "Everyone has a purpose" },
            { id: 2, text: "Life is a journey" },
            { id: 3, text: "What gives your life meaning?" },
            { id: 4, text: "What do you believe about life?" }
          ],
          correctOptionId: 2,
          hints: ["gbɛfaa = journey"],
          explanation: "You heard 'Wala ji gbɛfaa' which means 'Life is a journey' in Ga."
        },
        {
          id: 504,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/mɔ_fɛɛ_mɔ_yɛ_eyiŋtoo.m4a"),
          options: [
            { id: 1, text: "Life is a journey" },
            { id: 2, text: "What do you believe about life?" },
            { id: 3, text: "Everyone has a purpose" },
            { id: 4, text: "What gives your life meaning?" }
          ],
          correctOptionId: 3,
          hints: ["eyiŋtoo = purpose"],
          explanation: "You heard 'Mɔ fɛɛ mɔ yɛ eyiŋtoo' which means 'Everyone has a purpose' in Ga."
        },
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'What gives your life meaning?' in Ga?",
          options: [
            { id: 1, text: "Wala ji gbɛfaa" },
            { id: 2, text: "Mɔ fɛɛ mɔ yɛ eyiŋtoo" },
            { id: 3, text: "Mɛni oheɔ oyeɔ yɛ wala he?" },
            { id: 4, text: "Mɛni tsɔɔ owala shishi?" }
          ],
          correctOptionId: 4,
          hints: ["owala = your life", "shishi = meaning"],
          explanation: "Mɛni tsɔɔ owala shishi? = What gives your life meaning? in Ga."
        },
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'What do you believe about life?' in Ga?",
          options: [
            { id: 1, text: "Mɛni tsɔɔ owala shishi?" },
            { id: 2, text: "Wala ji gbɛfaa" },
            { id: 3, text: "Mɛni oheɔ oyeɔ yɛ wala he?" },
            { id: 4, text: "Mɔ fɛɛ mɔ yɛ eyiŋtoo" }
          ],
          correctOptionId: 3,
          hints: ["wala = life", "oheɔ oyeɔ = you believe"],
          explanation: "Mɛni oheɔ oyeɔ yɛ wala he? = What do you believe about life? in Ga."
        }
      ]
    },

    {
      id: "5-2",
      type: "phrases",
      title: "Lessons About Life",
      icon: "hourglass-outline",
      description: "Learn phrases about life lessons in Ga",
      words: ["Amanehu tsɔɔ wɔ nii", "Be tsaa"],
      vocabulary: [
        {
          id: 266,
          english: "Suffering teaches us",
          native: "Amanehu tsɔɔ wɔ nii",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/amanehu_tsɔɔ_wɔ_nii.m4a")
        },
        {
          id: 267,
          english: "Time heals",
          native: "Be tsaa",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/be_tsaa.m4a")
        }
      ],
      questions: [
        {
          id: 506,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/be_tsaa.m4a"),
          options: [
            { id: 1, text: "Time heals" },
            { id: 2, text: "Suffering teaches us" },
            { id: 3, text: "Life is a journey" },
            { id: 4, text: "Everyone has a purpose" }
          ],
          correctOptionId: 1,
          hints: ["be = time", "tsaa = heals"],
          explanation: "You heard 'Be tsaa' which means 'Time heals' in Ga."
        },
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Time heals' in Ga?",
          options: [
            { id: 1, text: "Mɛni tsɔɔ owala shishi?" },
            { id: 2, text: "Be tsaa" },
            { id: 3, text: "Amanehu tsɔɔ wɔ nii" },
            { id: 4, text: "Mɔ fɛɛ mɔ yɛ eyiŋtoo" }
          ],
          correctOptionId: 2,
          hints: ["be = time"],
          explanation: "Be tsaa = Time heals in Ga."
        },
        {
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Suffering teaches us' in Ga?",
          options: [
            { id: 1, text: "Be tsaa" },
            { id: 2, text: "Wala ji gbɛfaa" },
            { id: 3, text: "Amanehu tsɔɔ wɔ nii" },
            { id: 4, text: "Mɔ fɛɛ mɔ yɛ eyiŋtoo" }
          ],
          correctOptionId: 3,
          hints: ["amanehu = suffering", "tsɔɔ nii = teaches"],
          explanation: "Amanehu tsɔɔ wɔ nii = Suffering teaches us in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-5",
    title: "Review: Life & Meaning",
    icon: "refresh-outline",
    description: "Review all the life and meaning vocabulary you've learned",
    questions: [
      {
        id: 509,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/mɛni_tsɔɔ_owala_shishi.m4a"),
        options: [
          { id: 1, text: "What do you believe about life?" },
          { id: 2, text: "What gives your life meaning?" },
          { id: 3, text: "Life is a journey" },
          { id: 4, text: "Everyone has a purpose" }
        ],
        correctOptionId: 2,
        hints: ["owala shishi = life's meaning"],
        explanation: "You heard 'Mɛni tsɔɔ owala shishi?' which means 'What gives your life meaning?'."
      },
      {
        id: 511,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/amanehu_tsɔɔ_wɔ_nii.m4a"),
        options: [
          { id: 1, text: "Time heals" },
          { id: 2, text: "Suffering teaches us" },
          { id: 3, text: "Life is a journey" },
          { id: 4, text: "What gives your life meaning?" }
        ],
        correctOptionId: 2,
        hints: ["amanehu = suffering"],
        explanation: "You heard 'Amanehu tsɔɔ wɔ nii' which means 'Suffering teaches us'."
      },
      {
        id: 515,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter5/wala_ji_gbɛfaa.m4a"),
        options: [
          { id: 1, text: "Life is a journey" },
          { id: 2, text: "What do you believe about life?" },
          { id: 3, text: "Time heals" },
          { id: 4, text: "What gives your life meaning?" }
        ],
        correctOptionId: 1,
        hints: ["gbɛfaa = journey"],
        explanation: "You heard 'Wala ji gbɛfaa' which means 'Life is a journey'."
      },
      {
        id: 513,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Suffering teaches us' in Ga?",
        options: [
          { id: 1, text: "Mɔ fɛɛ mɔ yɛ eyiŋtoo" },
          { id: 2, text: "Amanehu tsɔɔ wɔ nii" },
          { id: 3, text: "Be tsaa" },
          { id: 4, text: "Wala ji gbɛfaa" }
        ],
        correctOptionId: 2,
        hints: ["amanehu = suffering"],
        explanation: "Amanehu tsɔɔ wɔ nii = Suffering teaches us."
      },
      {
        id: 512,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Everyone has a purpose' in Ga?",
        options: [
          { id: 1, text: "Mɔ fɛɛ mɔ yɛ eyiŋtoo" },
          { id: 2, text: "Mɛni oheɔ oyeɔ yɛ wala he?" },
          { id: 3, text: "Wala ji gbɛfaa" },
          { id: 4, text: "Mɛni tsɔɔ owala shishi?" }
        ],
        correctOptionId: 1,
        hints: ["eyiŋtoo = purpose"],
        explanation: "Mɔ fɛɛ mɔ yɛ eyiŋtoo = Everyone has a purpose."
      },
      {
        id: 514,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Time heals' in Ga?",
        options: [
          { id: 1, text: "Mɛni tsɔɔ owala shishi?" },
          { id: 2, text: "Amanehu tsɔɔ wɔ nii" },
          { id: 3, text: "Be tsaa" },
          { id: 4, text: "Mɔ fɛɛ mɔ yɛ eyiŋtoo" }
        ],
        correctOptionId: 3,
        hints: ["be = time"],
        explanation: "Be tsaa = Time heals."
      },
      {
        id: 508,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'What do you believe about life?' in Ga?",
        options: [
          { id: 1, text: "Mɛni oheɔ oyeɔ yɛ wala he?" },
          { id: 2, text: "Wala ji gbɛfaa" },
          { id: 3, text: "Mɛni tsɔɔ owala shishi?" },
          { id: 4, text: "Mɔ fɛɛ mɔ yɛ eyiŋtoo" }
        ],
        correctOptionId: 1,
        hints: ["wala = life"],
        explanation: "Mɛni oheɔ oyeɔ yɛ wala he? = What do you believe about life?"
      },
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Life is a journey' in Ga?",
        options: [
          { id: 1, text: "Mɛni tsɔɔ owala shishi?" },
          { id: 2, text: "Mɔ fɛɛ mɔ yɛ eyiŋtoo" },
          { id: 3, text: "Wala ji gbɛfaa" },
          { id: 4, text: "Amanehu tsɔɔ wɔ nii" }
        ],
        correctOptionId: 3,
        hints: ["gbɛfaa = journey"],
        explanation: "Wala ji gbɛfaa = Life is a journey."
      }
    ]
  }
};