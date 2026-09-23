export default {
  id: 3,
  title: "Deep Conversations",
  description: "Learn useful Twi phrases for discussing life, purpose, wisdom, and personal experiences",
  icon: "chatbubble-ellipses-outline",
  totalXp: 10,
  difficulty: "Advanced",

  sections: [
    {
      id: "3-1",
      type: "phrases",
      title: "Life & Purpose",
      icon: "compass-outline",
      description: "Learn Twi phrases for discussing life, purpose, and meaning",
      words: [
        "Ɛdeɛn na wogye di fa abrabɔ ho?",
        "Abrabɔ yɛ akwantuo",
        "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ?",
        "Obiara wɔ botaeɛ"
      ],
      vocabulary: [
        {
          id: 250,
          english: "What do you believe about life?",
          native: "Ɛdeɛn na wogye di fa abrabɔ ho?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/ɛdeɛn_na_wogye_di_fa_abrabɔ_ho.m4a")
        },
        {
          id: 251,
          english: "Life is a journey",
          native: "Abrabɔ yɛ akwantuo",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/abrabɔ_yɛ_akwantuo.m4a")
        },
        {
          id: 252,
          english: "What gives your life meaning?",
          native: "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/ɛdeɛn_na_ɛma_w_abrabɔ_nya_nteaseɛ.m4a")
        },
        {
          id: 253,
          english: "Everyone has a purpose",
          native: "Obiara wɔ botaeɛ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/obiara_wɔ_botaeɛ.m4a")
        }
      ],
      questions: [
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'What gives your life meaning?' in Twi?",
          options: [
            { id: 1, text: "Obiara wɔ botaeɛ" },
            { id: 2, text: "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ?" },
            { id: 3, text: "Abrabɔ yɛ akwantuo" },
            { id: 4, text: "Ɛdeɛn na wogye di fa abrabɔ ho?" }
          ],
          correctOptionId: 2,
          hints: ["nteaseɛ = meaning"],
          explanation: "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ? = What gives your life meaning? in Twi."
        },
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'What do you believe about life?' in Twi?",
          options: [
            { id: 1, text: "Abrabɔ yɛ akwantuo" },
            { id: 2, text: "Obiara wɔ botaeɛ" },
            { id: 3, text: "Ɛdeɛn na wogye di fa abrabɔ ho?" },
            { id: 4, text: "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ?" }
          ],
          correctOptionId: 3,
          hints: ["wogye di = you believe", "abrabɔ = life"],
          explanation: "Ɛdeɛn na wogye di fa abrabɔ ho? = What do you believe about life? in Twi."
        },
        {
          id: 304,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/obiara_wɔ_botaeɛ.m4a"),
          options: [
            { id: 1, text: "Life is a journey" },
            { id: 2, text: "Everyone has a purpose" },
            { id: 3, text: "What do you believe about life?" },
            { id: 4, text: "What gives your life meaning?" }
          ],
          correctOptionId: 2,
          hints: ["botaeɛ = purpose"],
          explanation: "You heard 'Obiara wɔ botaeɛ' which means 'Everyone has a purpose' in Twi."
        },
        {
          id: 302,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/abrabɔ_yɛ_akwantuo.m4a"),
          options: [
            { id: 1, text: "What gives your life meaning?" },
            { id: 2, text: "Everyone has a purpose" },
            { id: 3, text: "Life is a journey" },
            { id: 4, text: "What do you believe about life?" }
          ],
          correctOptionId: 3,
          hints: ["akwantuo = journey"],
          explanation: "You heard 'Abrabɔ yɛ akwantuo' which means 'Life is a journey' in Twi."
        }
      ]
    },

    {
      id: "3-2",
      type: "phrases",
      title: "Patience, Suffering & Time",
      icon: "hourglass-outline",
      description: "Learn Twi phrases about patience, difficult experiences, and healing over time",
      words: [
        "Abotarɛ siesie nneɛma pii",
        "Amanehunu kyerɛkyerɛ yɛn",
        "Berɛ sa yadeɛ"
      ],
      vocabulary: [
        {
          id: 254,
          english: "Patience solves many problems",
          native: "Abotarɛ siesie nneɛma pii",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/abotarɛ_siesie_nneɛma_pii.m4a")
        },
        {
          id: 255,
          english: "Suffering teaches us",
          native: "Amanehunu kyerɛkyerɛ yɛn",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/amannehunu_kyerɛkyerɛ_yɛn.m4a")
        },
        {
          id: 256,
          english: "Time heals",
          native: "Berɛ sa yadeɛ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/berɛ_sa_yadeɛ.m4a")
        }
      ],
      questions: [
        {
          id: 306,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/amannehunu_kyerɛkyerɛ_yɛn.m4a"),
          options: [
            { id: 1, text: "Time heals" },
            { id: 2, text: "Suffering teaches us" },
            { id: 3, text: "Everyone has a purpose" },
            { id: 4, text: "Patience solves many problems" }
          ],
          correctOptionId: 2,
          hints: ["amanehunu = suffering", "kyerɛkyerɛ = teaches"],
          explanation: "You heard 'Amanehunu kyerɛkyerɛ yɛn' which means 'Suffering teaches us' in Twi."
        },
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Time heals' in Twi?",
          options: [
            { id: 1, text: "Amanehunu kyerɛkyerɛ yɛn" },
            { id: 2, text: "Berɛ sa yadeɛ" },
            { id: 3, text: "Abotarɛ siesie nneɛma pii" },
            { id: 4, text: "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ?" }
          ],
          correctOptionId: 2,
          hints: ["berɛ = time", "sa = heals"],
          explanation: "Berɛ sa yadeɛ = Time heals in Twi."
        },
        {
          id: 305,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Patience solves many problems' in Twi?",
          options: [
            { id: 1, text: "Berɛ sa yadeɛ" },
            { id: 2, text: "Abrabɔ yɛ akwantuo" },
            { id: 3, text: "Abotarɛ siesie nneɛma pii" },
            { id: 4, text: "Amanehunu kyerɛkyerɛ yɛn" }
          ],
          correctOptionId: 3,
          hints: ["abotarɛ = patience", "siesie = solves"],
          explanation: "Abotarɛ siesie nneɛma pii = Patience solves many problems in Twi."
        },
        {
          id: 308,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/abotarɛ_siesie_nneɛma_pii.m4a"),
          options: [
            { id: 1, text: "What gives your life meaning?" },
            { id: 2, text: "Patience solves many problems" },
            { id: 3, text: "Suffering teaches us" },
            { id: 4, text: "Time heals" }
          ],
          correctOptionId: 2,
          hints: ["abotarɛ = patience"],
          explanation: "You heard 'Abotarɛ siesie nneɛma pii' which means 'Patience solves many problems' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-3",
    title: "Review: Deep Conversations",
    icon: "refresh-outline",
    description: "Review the Twi phrases you've learned for discussing life, purpose, patience, and personal experiences",
    questions: [
      {
        id: 315,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Patience solves many problems' in Twi?",
        options: [
          { id: 1, text: "Berɛ sa yadeɛ" },
          { id: 2, text: "Abotarɛ siesie nneɛma pii" },
          { id: 3, text: "Obiara wɔ botaeɛ" },
          { id: 4, text: "Amanehunu kyerɛkyerɛ yɛn" }
        ],
        correctOptionId: 2,
        hints: ["abotarɛ = patience"],
        explanation: "Abotarɛ siesie nneɛma pii = Patience solves many problems."
      },
      {
        id: 312,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/obiara_wɔ_botaeɛ.m4a"),
        options: [
          { id: 1, text: "What gives your life meaning?" },
          { id: 2, text: "Everyone has a purpose" },
          { id: 3, text: "Life is a journey" },
          { id: 4, text: "What do you believe about life?" }
        ],
        correctOptionId: 2,
        hints: ["botaeɛ = purpose"],
        explanation: "You heard 'Obiara wɔ botaeɛ' which means 'Everyone has a purpose'."
      },
      {
        id: 317,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Time heals' in Twi?",
        options: [
          { id: 1, text: "Berɛ sa yadeɛ" },
          { id: 2, text: "Abotarɛ siesie nneɛma pii" },
          { id: 3, text: "Amanehunu kyerɛkyerɛ yɛn" },
          { id: 4, text: "Abrabɔ yɛ akwantuo" }
        ],
        correctOptionId: 1,
        hints: ["berɛ = time"],
        explanation: "Berɛ sa yadeɛ = Time heals."
      },
      {
        id: 311,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Life is a journey' in Twi?",
        options: [
          { id: 1, text: "Obiara wɔ botaeɛ" },
          { id: 2, text: "Abrabɔ yɛ akwantuo" },
          { id: 3, text: "Ɛdeɛn na wogye di fa abrabɔ ho?" },
          { id: 4, text: "Berɛ sa yadeɛ" }
        ],
        correctOptionId: 2,
        hints: ["akwantuo = journey"],
        explanation: "Abrabɔ yɛ akwantuo = Life is a journey."
      },
      {
        id: 316,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Suffering teaches us' in Twi?",
        options: [
          { id: 1, text: "Obiara wɔ botaeɛ" },
          { id: 2, text: "Amanehunu kyerɛkyerɛ yɛn" },
          { id: 3, text: "Abotarɛ siesie nneɛma pii" },
          { id: 4, text: "Berɛ sa yadeɛ" }
        ],
        correctOptionId: 2,
        hints: ["amanehunu = suffering"],
        explanation: "Amanehunu kyerɛkyerɛ yɛn = Suffering teaches us."
      },
      {
        id: 309,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'What do you believe about life?' in Twi?",
        options: [
          { id: 1, text: "Abrabɔ yɛ akwantuo" },
          { id: 2, text: "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ?" },
          { id: 3, text: "Ɛdeɛn na wogye di fa abrabɔ ho?" },
          { id: 4, text: "Obiara wɔ botaeɛ" }
        ],
        correctOptionId: 3,
        hints: ["abrabɔ = life"],
        explanation: "Ɛdeɛn na wogye di fa abrabɔ ho? = What do you believe about life?"
      },
      {
        id: 314,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Everyone has a purpose' in Twi?",
        options: [
          { id: 1, text: "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ?" },
          { id: 2, text: "Obiara wɔ botaeɛ" },
          { id: 3, text: "Abrabɔ yɛ akwantuo" },
          { id: 4, text: "Ɛdeɛn na wogye di fa abrabɔ ho?" }
        ],
        correctOptionId: 2,
        hints: ["botaeɛ = purpose"],
        explanation: "Obiara wɔ botaeɛ = Everyone has a purpose."
      },
      {
        id: 310,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter3/berɛ_sa_yadeɛ.m4a"),
        options: [
          { id: 1, text: "Life is a journey" },
          { id: 2, text: "Time heals" },
          { id: 3, text: "Suffering teaches us" },
          { id: 4, text: "Patience solves many problems" }
        ],
        correctOptionId: 2,
        hints: ["berɛ = time"],
        explanation: "You heard 'Berɛ sa yadeɛ' which means 'Time heals'."
      },
      {
        id: 313,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'What gives your life meaning?' in Twi?",
        options: [
          { id: 1, text: "Ɛdeɛn na wogye di fa abrabɔ ho?" },
          { id: 2, text: "Obiara wɔ botaeɛ" },
          { id: 3, text: "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ?" },
          { id: 4, text: "Abrabɔ yɛ akwantuo" }
        ],
        correctOptionId: 3,
        hints: ["nteaseɛ = meaning"],
        explanation: "Ɛdeɛn na ɛma w'abrabɔ nya nteaseɛ? = What gives your life meaning?"
      }
    ]
  }
};