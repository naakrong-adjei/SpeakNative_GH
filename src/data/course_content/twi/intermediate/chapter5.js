export default {
  id: 5,
  title: "Phone Conversations",
  description: "Learn phone conversation vocabulary in Twi",
  icon: "call-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "5-1",
      type: "phrases",
      title: "Starting a Call",
      icon: "phone-outline",
      description: "Learn how to start a phone conversation in Twi",
      words: ["Hɛlo, hwan na ɔrekasa?", "Wote me nka?", "Mesrɛ wo twɛn"],
      vocabulary: [
        {
          id: 200,
          english: "Hello, who is speaking?",
          native: "Hɛlo, hwan na ɔrekasa?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/hɛlo_hwan_na_ɔrekasa.m4a")
        },
        {
          id: 201,
          english: "Can you hear me?",
          native: "Wote me nka?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/wote_me_nka.m4a")
        },
        {
          id: 202,
          english: "Please hold on",
          native: "Mesrɛ wo twɛn",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/mesrɛ_wo_twɛn.m4a")
        }
      ],
      questions: [
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Hello, who is speaking?' in Twi?",
          options: [
            { id: 1, text: "Hɛlo, hwan na ɔrekasa?" },
            { id: 2, text: "Wote me nka?" },
            { id: 3, text: "Mesrɛ wo twɛn" },
            { id: 4, text: "Netwɔk no nyɛ" }
          ],
          correctOptionId: 1,
          hints: ["hwan = who", "ɔrekasa = speaking"],
          explanation: "Hɛlo, hwan na ɔrekasa? = Hello, who is speaking? in Twi."
        },
        {
          id: 502,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/wote_me_nka.m4a"),
          options: [
            { id: 1, text: "Hello, who is speaking?" },
            { id: 2, text: "Can you hear me?" },
            { id: 3, text: "Please hold on" },
            { id: 4, text: "The network is bad" }
          ],
          correctOptionId: 2,
          hints: ["Wote = you hear", "me nka = me"],
          explanation: "You heard 'Wote me nka?' which means 'Can you hear me?' in Twi."
        },
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Please hold on' in Twi?",
          options: [
            { id: 1, text: "Hɛlo, hwan na ɔrekasa?" },
            { id: 2, text: "Wote me nka?" },
            { id: 3, text: "Mesrɛ wo twɛn" },
            { id: 4, text: "Ahoma no retwetwa si" }
          ],
          correctOptionId: 3,
          hints: ["Mesrɛ wo = please", "twɛn = wait"],
          explanation: "Mesrɛ wo twɛn = Please hold on in Twi."
        },
        {
          id: 504,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/mesrɛ_wo_twɛn.m4a"),
          options: [
            { id: 1, text: "Hello, who is speaking?" },
            { id: 2, text: "Can you hear me?" },
            { id: 3, text: "Please hold on" },
            { id: 4, text: "I will call you back" }
          ],
          correctOptionId: 3,
          hints: ["twɛn = wait"],
          explanation: "You heard 'Mesrɛ wo twɛn' which means 'Please hold on' in Twi."
        }
      ]
    },

    {
      id: "5-2",
      type: "phrases",
      title: "Network Problems",
      icon: "warning-outline",
      description: "Learn phrases for dealing with phone call problems in Twi",
      words: ["Netwɔk no nyɛ", "Ahoma no retwetwa si"],
      vocabulary: [
        {
          id: 203,
          english: "The network is bad",
          native: "Netwɔk no nyɛ",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/netwɔk_no_nyɛ.m4a")
        },
        {
          id: 204,
          english: "The line is breaking up",
          native: "Ahoma no retwetwa si",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/ahoma_no_retwetwa_si.m4a")
        }
      ],
      questions: [
        {
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The network is bad' in Twi?",
          options: [
            { id: 1, text: "Netwɔk no nyɛ" },
            { id: 2, text: "Ahoma no retwetwa si" },
            { id: 3, text: "Wote me nka?" },
            { id: 4, text: "Mɛsan afrɛ wo" }
          ],
          correctOptionId: 1,
          hints: ["netwɔk = network", "nyɛ = bad"],
          explanation: "Netwɔk no nyɛ = The network is bad in Twi."
        },
        {
          id: 506,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/ahoma_no_retwetwa_si.m4a"),
          options: [
            { id: 1, text: "The network is bad" },
            { id: 2, text: "The line is breaking up" },
            { id: 3, text: "Can you hear me?" },
            { id: 4, text: "Send me a message" }
          ],
          correctOptionId: 2,
          hints: ["ahoma = line", "retwetwa si = breaking up"],
          explanation: "You heard 'Ahoma no retwetwa si' which means 'The line is breaking up' in Twi."
        },
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The line is breaking up' in Twi?",
          options: [
            { id: 1, text: "Netwɔk no nyɛ" },
            { id: 2, text: "Ahoma no retwetwa si" },
            { id: 3, text: "Mesrɛ wo twɛn" },
            { id: 4, text: "Fa nkra brɛ me" }
          ],
          correctOptionId: 2,
          hints: ["ahoma = line"],
          explanation: "Ahoma no retwetwa si = The line is breaking up in Twi."
        },
        {
          id: 508,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/netwɔk_no_nyɛ.m4a"),
          options: [
            { id: 1, text: "The network is bad" },
            { id: 2, text: "The line is breaking up" },
            { id: 3, text: "Please hold on" },
            { id: 4, text: "I will call you back" }
          ],
          correctOptionId: 1,
          hints: ["nyɛ = bad"],
          explanation: "You heard 'Netwɔk no nyɛ' which means 'The network is bad' in Twi."
        }
      ]
    },

    {
      id: "5-3",
      type: "phrases",
      title: "Messages & Follow-up",
      icon: "chatbubble-ellipses-outline",
      description: "Learn phrases for messages and follow-ups in Twi",
      words: ["Mɛsan afrɛ wo", "Fa nkra brɛ me", "Mɛde beaeɛ no bɛ mane wo"],
      vocabulary: [
        {
          id: 205,
          english: "I will call you back",
          native: "Mɛsan afrɛ wo",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/mɛsan_afrɛ_wo.m4a")
        },
        {
          id: 206,
          english: "Send me a message",
          native: "Fa nkra brɛ me",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/fa_nkra_brɛ_me.m4a")
        },
        {
          id: 207,
          english: "I will text you the address",
          native: "Mɛde beaeɛ no bɛ mane wo",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/mɛde_beaeɛ_no_bɛ_mane_wo.m4a")
        }
      ],
      questions: [
        {
          id: 509,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I will call you back' in Twi?",
          options: [
            { id: 1, text: "Mɛsan afrɛ wo" },
            { id: 2, text: "Fa nkra brɛ me" },
            { id: 3, text: "Mɛde beaeɛ no bɛ mane wo" },
            { id: 4, text: "Netwɔk no nyɛ" }
          ],
          correctOptionId: 1,
          hints: ["Mɛsan = I will again", "afrɛ wo = call you"],
          explanation: "Mɛsan afrɛ wo = I will call you back in Twi."
        },
        {
          id: 510,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/fa_nkra_brɛ_me.m4a"),
          options: [
            { id: 1, text: "I will call you back" },
            { id: 2, text: "Send me a message" },
            { id: 3, text: "I will text you the address" },
            { id: 4, text: "Please hold on" }
          ],
          correctOptionId: 2,
          hints: ["nkra = message", "brɛ me = bring me"],
          explanation: "You heard 'Fa nkra brɛ me' which means 'Send me a message' in Twi."
        },
        {
          id: 511,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I will text you the address' in Twi?",
          options: [
            { id: 1, text: "Mɛsan afrɛ wo" },
            { id: 2, text: "Fa nkra brɛ me" },
            { id: 3, text: "Mɛde beaeɛ no bɛ mane wo" },
            { id: 4, text: "Ahoma no retwetwa si" }
          ],
          correctOptionId: 3,
          hints: ["beaeɛ = address", "mane wo = show you"],
          explanation: "Mɛde beaeɛ no bɛ mane wo = I will text you the address in Twi."
        },
        {
          id: 512,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/mɛsan_afrɛ_wo.m4a"),
          options: [
            { id: 1, text: "I will call you back" },
            { id: 2, text: "Send me a message" },
            { id: 3, text: "I will text you the address" },
            { id: 4, text: "The network is bad" }
          ],
          correctOptionId: 1,
          hints: ["Mɛsan = I will again"],
          explanation: "You heard 'Mɛsan afrɛ wo' which means 'I will call you back' in Twi."
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
        id: 513,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Hello, who is speaking?' in Twi?",
        options: [
          { id: 1, text: "Hɛlo, hwan na ɔrekasa?" },
          { id: 2, text: "Wote me nka?" },
          { id: 3, text: "Mesrɛ wo twɛn" },
          { id: 4, text: "Netwɔk no nyɛ" }
        ],
        correctOptionId: 1,
        hints: ["hwan = who"],
        explanation: "Hɛlo, hwan na ɔrekasa? = Hello, who is speaking?"
      },
      {
        id: 514,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/mɛde_beaeɛ_no_bɛ_mane_wo.m4a"),
        options: [
          { id: 1, text: "I will call you back" },
          { id: 2, text: "Send me a message" },
          { id: 3, text: "I will text you the address" },
          { id: 4, text: "Please hold on" }
        ],
        correctOptionId: 3,
        hints: ["beaeɛ = address"],
        explanation: "You heard 'Mɛde beaeɛ no bɛ mane wo' which means 'I will text you the address'."
      },
      {
        id: 515,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Can you hear me?' in Twi?",
        options: [
          { id: 1, text: "Hɛlo, hwan na ɔrekasa?" },
          { id: 2, text: "Wote me nka?" },
          { id: 3, text: "Mesrɛ wo twɛn" },
          { id: 4, text: "Mɛsan afrɛ wo" }
        ],
        correctOptionId: 2,
        hints: ["Wote = you hear"],
        explanation: "Wote me nka? = Can you hear me?"
      },
      {
        id: 516,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/fa_nkra_brɛ_me.m4a"),
        options: [
          { id: 1, text: "I will call you back" },
          { id: 2, text: "Send me a message" },
          { id: 3, text: "I will text you the address" },
          { id: 4, text: "The network is bad" }
        ],
        correctOptionId: 2,
        hints: ["nkra = message"],
        explanation: "You heard 'Fa nkra brɛ me' which means 'Send me a message'."
      },
      {
        id: 517,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Please hold on' in Twi?",
        options: [
          { id: 1, text: "Hɛlo, hwan na ɔrekasa?" },
          { id: 2, text: "Wote me nka?" },
          { id: 3, text: "Mesrɛ wo twɛn" },
          { id: 4, text: "Ahoma no retwetwa si" }
        ],
        correctOptionId: 3,
        hints: ["twɛn = wait"],
        explanation: "Mesrɛ wo twɛn = Please hold on."
      },
      {
        id: 518,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The network is bad' in Twi?",
        options: [
          { id: 1, text: "Netwɔk no nyɛ" },
          { id: 2, text: "Ahoma no retwetwa si" },
          { id: 3, text: "Wote me nka?" },
          { id: 4, text: "Mɛsan afrɛ wo" }
        ],
        correctOptionId: 1,
        hints: ["nyɛ = bad"],
        explanation: "Netwɔk no nyɛ = The network is bad."
      },
      {
        id: 519,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The line is breaking up' in Twi?",
        options: [
          { id: 1, text: "Netwɔk no nyɛ" },
          { id: 2, text: "Ahoma no retwetwa si" },
          { id: 3, text: "Mesrɛ wo twɛn" },
          { id: 4, text: "Fa nkra brɛ me" }
        ],
        correctOptionId: 2,
        hints: ["ahoma = line"],
        explanation: "Ahoma no retwetwa si = The line is breaking up."
      },
      {
        id: 520,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I will call you back' in Twi?",
        options: [
          { id: 1, text: "Mɛsan afrɛ wo" },
          { id: 2, text: "Fa nkra brɛ me" },
          { id: 3, text: "Mɛde beaeɛ no bɛ mane wo" },
          { id: 4, text: "Netwɔk no nyɛ" }
        ],
        correctOptionId: 1,
        hints: ["afrɛ wo = call you"],
        explanation: "Mɛsan afrɛ wo = I will call you back."
      },
      {
        id: 521,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Send me a message' in Twi?",
        options: [
          { id: 1, text: "Mɛsan afrɛ wo" },
          { id: 2, text: "Fa nkra brɛ me" },
          { id: 3, text: "Mɛde beaeɛ no bɛ mane wo" },
          { id: 4, text: "Mesrɛ wo twɛn" }
        ],
        correctOptionId: 2,
        hints: ["nkra = message"],
        explanation: "Fa nkra brɛ me = Send me a message."
      },
      {
        id: 522,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter5/wote_me_nka.m4a"),
        options: [
          { id: 1, text: "Hello, who is speaking?" },
          { id: 2, text: "Can you hear me?" },
          { id: 3, text: "Please hold on" },
          { id: 4, text: "The network is bad" }
        ],
        correctOptionId: 2,
        hints: ["Wote = you hear"],
        explanation: "You heard 'Wote me nka?' which means 'Can you hear me?'."
      }
    ]
  }
};