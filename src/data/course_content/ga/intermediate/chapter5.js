export default {
  id: 5,
  title: "Phone Conversations",
  description: "Learn phone conversation vocabulary in Ga",
  icon: "call-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "5-1",
      type: "words",
      title: "Starting a Call",
      icon: "phone-outline",
      description: "Learn how to start a phone conversation in Ga",
      words: ["Hɛlo, namɔ wieɔ?", "Oonu mi he lo?"],
      vocabulary: [
        {
          id: 214,
          english: "Hello, who is speaking?",
          native: "Hɛlo, namɔ wieɔ?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/hɛlo_namɔ_wieɔ.m4a")
        },
        {
          id: 215,
          english: "Can you hear me?",
          native: "Oonu mi he lo?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/oonu_mi_he_lo.m4a")
        }
      ],
      questions: [
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Hello, who is speaking?' in Ga?",
          options: [
            { id: 1, text: "Hɛlo, namɔ wieɔ?" },
            { id: 2, text: "Oonu mi he lo?" },
            { id: 3, text: "Netwɔk lɛ ehiii" },
            { id: 4, text: "Ofainɛ mɛ" }
          ],
          correctOptionId: 1,
          hints: ["namɔ = who", "wieɔ = speaking"],
          explanation: "Hɛlo, namɔ wieɔ? = Hello, who is speaking? in Ga."
        },
        {
          id: 502,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/oonu_mi_he_lo.m4a"),
          options: [
            { id: 1, text: "Hello, who is speaking?" },
            { id: 2, text: "Can you hear me?" },
            { id: 3, text: "The network is bad" },
            { id: 4, text: "I will call you back" }
          ],
          correctOptionId: 2,
          hints: ["onu = hear", "mi = me"],
          explanation: "You heard 'Oonu mi he lo?' which means 'Can you hear me?' in Ga."
        },
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Can you hear me?' in Ga?",
          options: [
            { id: 1, text: "Hɛlo, namɔ wieɔ?" },
            { id: 2, text: "Oonu mi he lo?" },
            { id: 3, text: "Matswa bo ekoŋŋ" },
            { id: 4, text: "Ofainɛ mɛ" }
          ],
          correctOptionId: 2,
          hints: ["onu = hear"],
          explanation: "Oonu mi he lo? = Can you hear me? in Ga."
        }
      ]
    },

    {
      id: "5-2",
      type: "phrases",
      title: "Call Problems",
      icon: "warning-outline",
      description: "Learn phrases for dealing with phone call problems in Ga",
      words: ["Netwɔk lɛ ehiii", "Ofainɛ mɛ"],
      vocabulary: [
        {
          id: 217,
          english: "The network is bad",
          native: "Netwɔk lɛ ehiii",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/netwɔk_lɛ_ehiii.m4a")
        },
        {
          id: 218,
          english: "Please hold on",
          native: "Ofainɛ mɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/ofainɛ_mɛ.m4a")
        }
      ],
      questions: [
        {
          id: 504,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The network is bad' in Ga?",
          options: [
            { id: 1, text: "Netwɔk lɛ ehiii" },
            { id: 2, text: "Ofainɛ mɛ" },
            { id: 3, text: "Oonu mi he lo?" },
            { id: 4, text: "Matswa bo ekoŋŋ" }
          ],
          correctOptionId: 1,
          hints: ["netwɔk = network", "ehiii = bad"],
          explanation: "Netwɔk lɛ ehiii = The network is bad in Ga."
        },
        {
          id: 505,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/ofainɛ_mɛ.m4a"),
          options: [
            { id: 1, text: "The network is bad" },
            { id: 2, text: "Please hold on" },
            { id: 3, text: "Can you hear me?" },
            { id: 4, text: "Send me a message" }
          ],
          correctOptionId: 2,
          hints: ["Ofainɛ = please", "mɛ = wait"],
          explanation: "You heard 'Ofainɛ mɛ' which means 'Please hold on' in Ga."
        },
        {
          id: 506,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Please hold on' in Ga?",
          options: [
            { id: 1, text: "Netwɔk lɛ ehiii" },
            { id: 2, text: "Ofainɛ mɛ" },
            { id: 3, text: "Hɛlo, namɔ wieɔ?" },
            { id: 4, text: "Maŋma shihilɛhe lɛ aha bo" }
          ],
          correctOptionId: 2,
          hints: ["Ofainɛ = please"],
          explanation: "Ofainɛ mɛ = Please hold on in Ga."
        }
      ]
    },

    {
      id: "5-3",
      type: "phrases",
      title: "Messages & Follow-ups",
      icon: "chatbubble-ellipses-outline",
      description: "Learn phrases for messages and follow-ups in Ga",
      words: ["Matswa bo ekoŋŋ", "Kɛ shɛɛ sane amaje mi", "Maŋma shihilɛhe lɛ aha bo"],
      vocabulary: [
        {
          id: 216,
          english: "I will call you back",
          native: "Matswa bo ekoŋŋ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/matswa_bo_ekoŋŋ.m4a")
        },
        {
          id: 220,
          english: "Send me a message",
          native: "Kɛ shɛɛ sane amaje mi",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/kɛ_shɛɛ_sane_amaje_mi.m4a")
        },
        {
          id: 222,
          english: "I will text you the address",
          native: "Maŋma shihilɛhe lɛ aha bo",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/maŋma_shihilɛhe_lɛ_aha_bo.m4a")
        }
      ],
      questions: [
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I will call you back' in Ga?",
          options: [
            { id: 1, text: "Matswa bo ekoŋŋ" },
            { id: 2, text: "Kɛ shɛɛ sane amaje mi" },
            { id: 3, text: "Maŋma shihilɛhe lɛ aha bo" },
            { id: 4, text: "Ofainɛ mɛ" }
          ],
          correctOptionId: 1,
          hints: ["Matswa = I will call", "ekoŋŋ = again"],
          explanation: "Matswa bo ekoŋŋ = I will call you back in Ga."
        },
        {
          id: 508,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/kɛ_shɛɛ_sane_amaje_mi.m4a"),
          options: [
            { id: 1, text: "I will call you back" },
            { id: 2, text: "Send me a message" },
            { id: 3, text: "I will text you the address" },
            { id: 4, text: "The network is bad" }
          ],
          correctOptionId: 2,
          hints: ["shɛɛ sane = message"],
          explanation: "You heard 'Kɛ shɛɛ sane amaje mi' which means 'Send me a message' in Ga."
        },
        {
          id: 509,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I will text you the address' in Ga?",
          options: [
            { id: 1, text: "Matswa bo ekoŋŋ" },
            { id: 2, text: "Kɛ shɛɛ sane amaje mi" },
            { id: 3, text: "Maŋma shihilɛhe lɛ aha bo" },
            { id: 4, text: "Oonu mi he lo?" }
          ],
          correctOptionId: 3,
          hints: ["Maŋma = I will write", "shihilɛhe = address"],
          explanation: "Maŋma shihilɛhe lɛ aha bo = I will text you the address in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-5",
    title: "Review: Phone Conversations",
    icon: "refresh-outline",
    description: "Review all the phone conversation vocabulary you've learned",
    questions: [
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Hello, who is speaking?' in Ga?",
        options: [
          { id: 1, text: "Hɛlo, namɔ wieɔ?" },
          { id: 2, text: "Oonu mi he lo?" },
          { id: 3, text: "Netwɔk lɛ ehiii" },
          { id: 4, text: "Ofainɛ mɛ" }
        ],
        correctOptionId: 1,
        hints: ["namɔ = who"],
        explanation: "Hɛlo, namɔ wieɔ? = Hello, who is speaking?"
      },
      {
        id: 511,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/netwɔk_lɛ_ehiii.m4a"),
        options: [
          { id: 1, text: "Can you hear me?" },
          { id: 2, text: "The network is bad" },
          { id: 3, text: "Please hold on" },
          { id: 4, text: "I will call you back" }
        ],
        correctOptionId: 2,
        hints: ["netwɔk = network", "ehiii = bad"],
        explanation: "You heard 'Netwɔk lɛ ehiii' which means 'The network is bad'."
      },
      {
        id: 512,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Can you hear me?' in Ga?",
        options: [
          { id: 1, text: "Hɛlo, namɔ wieɔ?" },
          { id: 2, text: "Oonu mi he lo?" },
          { id: 3, text: "Matswa bo ekoŋŋ" },
          { id: 4, text: "Ofainɛ mɛ" }
        ],
        correctOptionId: 2,
        hints: ["onu = hear"],
        explanation: "Oonu mi he lo? = Can you hear me?"
      },
      {
        id: 513,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter5/maŋma_shihilɛhe_lɛ_aha_bo.m4a"),
        options: [
          { id: 1, text: "I will call you back" },
          { id: 2, text: "Send me a message" },
          { id: 3, text: "I will text you the address" },
          { id: 4, text: "Please hold on" }
        ],
        correctOptionId: 3,
        hints: ["shihilɛhe = address"],
        explanation: "You heard 'Maŋma shihilɛhe lɛ aha bo' which means 'I will text you the address'."
      },
      {
        id: 514,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Please hold on' in Ga?",
        options: [
          { id: 1, text: "Netwɔk lɛ ehiii" },
          { id: 2, text: "Ofainɛ mɛ" },
          { id: 3, text: "Hɛlo, namɔ wieɔ?" },
          { id: 4, text: "Kɛ shɛɛ sane amaje mi" }
        ],
        correctOptionId: 2,
        hints: ["Ofainɛ = please"],
        explanation: "Ofainɛ mɛ = Please hold on."
      },
      {
        id: 515,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I will call you back' in Ga?",
        options: [
          { id: 1, text: "Matswa bo ekoŋŋ" },
          { id: 2, text: "Kɛ shɛɛ sane amaje mi" },
          { id: 3, text: "Maŋma shihilɛhe lɛ aha bo" },
          { id: 4, text: "Ofainɛ mɛ" }
        ],
        correctOptionId: 1,
        hints: ["ekoŋŋ = again"],
        explanation: "Matswa bo ekoŋŋ = I will call you back."
      },
      {
        id: 516,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Send me a message' in Ga?",
        options: [
          { id: 1, text: "Matswa bo ekoŋŋ" },
          { id: 2, text: "Kɛ shɛɛ sane amaje mi" },
          { id: 3, text: "Maŋma shihilɛhe lɛ aha bo" },
          { id: 4, text: "Oonu mi he lo?" }
        ],
        correctOptionId: 2,
        hints: ["shɛɛ sane = message"],
        explanation: "Kɛ shɛɛ sane amaje mi = Send me a message."
      }
    ]
  }
};