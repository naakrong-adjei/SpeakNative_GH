export default {
  id: 5,
  title: "Phone Conversations",
  description: "Learn how to make and receive phone calls in Ewe",
  icon: "phone-portrait-outline",
  totalXp: 10,
  difficulty: "Intermediate",

  sections: [
    {
      id: "5-1",
      type: "words",
      title: "Starting a Call",
      icon: "call-outline",
      description: "Learn how to start a phone conversation in Ewe",
      words: ["Hlo, ame kae le nu ƒom?", "Ŋkɔ nye sem a?", "Meɖe kuku lala"],
      vocabulary: [
        {
          id: 214,
          english: "Hello, who is speaking?",
          native: "Hlo, ame kae le nu ƒom?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/hlo_ame_kae_le_nu_ƒom.m4a")
        },
        {
          id: 215,
          english: "Can you hear me?",
          native: "Ŋkɔ nye sem a?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/ŋkɔ_nye_sem_a.m4a")
        },
        {
          id: 218,
          english: "Please hold on",
          native: "Meɖe kuku lala",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/meɖe_kuku_lala.m4a")
        }
      ],
      questions: [
        {
          id: 503,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Please hold on' in Ewe?",
          options: [
            { id: 1, text: "Ŋkɔ nye sem a?" },
            { id: 2, text: "Meɖe kuku lala" },
            { id: 3, text: "Ɖo gbedasi ɖem" },
            { id: 4, text: "Hlo, ame kae le nu ƒom?" }
          ],
          correctOptionId: 2,
          hints: ["lala = hold/wait"],
          explanation: "Meɖe kuku lala = Please hold on in Ewe."
        },
        {
          id: 504,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/hlo_ame_kae_le_nu_ƒom.m4a"),
          options: [
            { id: 1, text: "The network is bad" },
            { id: 2, text: "Hello, who is speaking?" },
            { id: 3, text: "Please hold on" },
            { id: 4, text: "Can you hear me?" }
          ],
          correctOptionId: 2,
          hints: ["ame kae = who"],
          explanation: "You heard 'Hlo, ame kae le nu ƒom?' which means 'Hello, who is speaking?' in Ewe."
        },
        {
          id: 501,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Hello, who is speaking?' in Ewe?",
          options: [
            { id: 1, text: "Meɖe kuku lala" },
            { id: 2, text: "Me ga yɔ ge" },
            { id: 3, text: "Hlo, ame kae le nu ƒom?" },
            { id: 4, text: "Ŋkɔ nye sem a?" }
          ],
          correctOptionId: 3,
          hints: ["Hlo = Hello", "ame kae = who"],
          explanation: "Hlo, ame kae le nu ƒom? = Hello, who is speaking? in Ewe."
        },
        {
          id: 502,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/ŋkɔ_nye_sem_a.m4a"),
          options: [
            { id: 1, text: "Please hold on" },
            { id: 2, text: "I will call you back" },
            { id: 3, text: "Can you hear me?" },
            { id: 4, text: "Hello, who is speaking?" }
          ],
          correctOptionId: 3,
          hints: ["sem = hear"],
          explanation: "You heard 'Ŋkɔ nye sem a?' which means 'Can you hear me?' in Ewe."
        }
      ]
    },

    {
      id: "5-2",
      type: "words",
      title: "Network Problems",
      icon: "wifi-outline",
      description: "Learn how to describe phone and network problems in Ewe",
      words: ["Netwɔk la megblẽ", "Ka la le tsotsom", "Nye batri vɔ"],
      vocabulary: [
        {
          id: 217,
          english: "The network is bad",
          native: "Netwɔk la megblẽ",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/netwɔk_la_megblẽ.m4a")
        },
        {
          id: 219,
          english: "The line is breaking up",
          native: "Ka la le tsotsom",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/ka_la_le_tsotsom.m4a")
        },
        {
          id: 221,
          english: "My battery is low",
          native: "Nye batri vɔ",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/nye_batri_vɔ.m4a")
        }
      ],
      questions: [
        {
          id: 507,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'My battery is low' in Ewe?",
          options: [
            { id: 1, text: "Ka la le tsotsom" },
            { id: 2, text: "Me ga yɔ ge" },
            { id: 3, text: "Nye batri vɔ" },
            { id: 4, text: "Netwɔk la megblẽ" }
          ],
          correctOptionId: 3,
          hints: ["batri = battery", "vɔ = finished"],
          explanation: "Nye batri vɔ = My battery is low in Ewe."
        },
        {
          id: 505,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The network is bad' in Ewe?",
          options: [
            { id: 1, text: "Meɖe kuku lala" },
            { id: 2, text: "Netwɔk la megblẽ" },
            { id: 3, text: "Nye batri vɔ" },
            { id: 4, text: "Ka la le tsotsom" }
          ],
          correctOptionId: 2,
          hints: ["netwɔk = network", "megblẽ = is bad"],
          explanation: "Netwɔk la megblẽ = The network is bad in Ewe."
        },
        {
          id: 508,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/netwɔk_la_megblẽ.m4a"),
          options: [
            { id: 1, text: "My battery is low" },
            { id: 2, text: "The network is bad" },
            { id: 3, text: "Send me a message" },
            { id: 4, text: "The line is breaking up" }
          ],
          correctOptionId: 2,
          hints: ["megblẽ = is bad"],
          explanation: "You heard 'Netwɔk la megblẽ' which means 'The network is bad' in Ewe."
        },
        {
          id: 506,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/ka_la_le_tsotsom.m4a"),
          options: [
            { id: 1, text: "Please hold on" },
            { id: 2, text: "My battery is low" },
            { id: 3, text: "The line is breaking up" },
            { id: 4, text: "The network is bad" }
          ],
          correctOptionId: 3,
          hints: ["ka = line", "tsotsom = breaking"],
          explanation: "You heard 'Ka la le tsotsom' which means 'The line is breaking up' in Ewe."
        }
      ]
    },

    {
      id: "5-3",
      type: "words",
      title: "Messages & Follow-up",
      icon: "chatbubble-outline",
      description: "Learn how to send messages and follow up in Ewe",
      words: ["Me ga yɔ ge", "Ɖo gbedasi ɖem", "Maŋlɔ nɔƒea ɖo ɖe wò"],
      vocabulary: [
        {
          id: 216,
          english: "I will call you back",
          native: "Me ga yɔ ge",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/me_ga_yɔ_ge.m4a")
        },
        {
          id: 220,
          english: "Send me a message",
          native: "Ɖo gbedasi ɖem",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/ɖo_gbedasi_ɖem.m4a")
        },
        {
          id: 222,
          english: "I will text you the address",
          native: "Maŋlɔ nɔƒea ɖo ɖe wò",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/maŋlɔ_nɔƒea_ɖo_ɖe_wò.m4a")
        }
      ],
      questions: [
        {
          id: 511,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I will text you the address' in Ewe?",
          options: [
            { id: 1, text: "Netwɔk la megblẽ" },
            { id: 2, text: "Maŋlɔ nɔƒea ɖo ɖe wò" },
            { id: 3, text: "Me ga yɔ ge" },
            { id: 4, text: "Ɖo gbedasi ɖem" }
          ],
          correctOptionId: 2,
          hints: ["nɔƒea = the address"],
          explanation: "Maŋlɔ nɔƒea ɖo ɖe wò = I will text you the address in Ewe."
        },
        {
          id: 509,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I will call you back' in Ewe?",
          options: [
            { id: 1, text: "Ɖo gbedasi ɖem" },
            { id: 2, text: "Meɖe kuku lala" },
            { id: 3, text: "Me ga yɔ ge" },
            { id: 4, text: "Maŋlɔ nɔƒea ɖo ɖe wò" }
          ],
          correctOptionId: 3,
          hints: ["me = I", "ga yɔ = call again"],
          explanation: "Me ga yɔ ge = I will call you back in Ewe."
        },
        {
          id: 512,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/me_ga_yɔ_ge.m4a"),
          options: [
            { id: 1, text: "I will text you the address" },
            { id: 2, text: "My battery is low" },
            { id: 3, text: "I will call you back" },
            { id: 4, text: "Send me a message" }
          ],
          correctOptionId: 3,
          hints: ["ga yɔ = call again"],
          explanation: "You heard 'Me ga yɔ ge' which means 'I will call you back' in Ewe."
        },
        {
          id: 510,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/ɖo_gbedasi_ɖem.m4a"),
          options: [
            { id: 1, text: "Please hold on" },
            { id: 2, text: "Send me a message" },
            { id: 3, text: "I will call you back" },
            { id: 4, text: "I will text you the address" }
          ],
          correctOptionId: 2,
          hints: ["gbedasi = message", "ɖem = me"],
          explanation: "You heard 'Ɖo gbedasi ɖem' which means 'Send me a message' in Ewe."
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
        id: 519,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The line is breaking up' in Ewe?",
        options: [
          { id: 1, text: "Meɖe kuku lala" },
          { id: 2, text: "Ka la le tsotsom" },
          { id: 3, text: "Nye batri vɔ" },
          { id: 4, text: "Netwɔk la megblẽ" }
        ],
        correctOptionId: 2,
        hints: ["ka = line"],
        explanation: "Ka la le tsotsom = The line is breaking up."
      },
      {
        id: 513,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Hello, who is speaking?' in Ewe?",
        options: [
          { id: 1, text: "Me ga yɔ ge" },
          { id: 2, text: "Hlo, ame kae le nu ƒom?" },
          { id: 3, text: "Meɖe kuku lala" },
          { id: 4, text: "Ŋkɔ nye sem a?" }
        ],
        correctOptionId: 2,
        hints: ["ame kae = who"],
        explanation: "Hlo, ame kae le nu ƒom? = Hello, who is speaking?"
      },
      {
        id: 516,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/nye_batri_vɔ.m4a"),
        options: [
          { id: 1, text: "Please hold on" },
          { id: 2, text: "My battery is low" },
          { id: 3, text: "The line is breaking up" },
          { id: 4, text: "The network is bad" }
        ],
        correctOptionId: 2,
        hints: ["batri = battery", "vɔ = finished"],
        explanation: "You heard 'Nye batri vɔ' which means 'My battery is low'."
      },
      {
        id: 521,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Can you hear me?' in Ewe?",
        options: [
          { id: 1, text: "Nye batri vɔ" },
          { id: 2, text: "Meɖe kuku lala" },
          { id: 3, text: "Ŋkɔ nye sem a?" },
          { id: 4, text: "Hlo, ame kae le nu ƒom?" }
        ],
        correctOptionId: 3,
        hints: ["sem = hear"],
        explanation: "Ŋkɔ nye sem a? = Can you hear me?"
      },
      {
        id: 518,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/maŋlɔ_nɔƒea_ɖo_ɖe_wò.m4a"),
        options: [
          { id: 1, text: "Send me a message" },
          { id: 2, text: "Please hold on" },
          { id: 3, text: "I will text you the address" },
          { id: 4, text: "I will call you back" }
        ],
        correctOptionId: 3,
        hints: ["nɔƒea = the address"],
        explanation: "You heard 'Maŋlɔ nɔƒea ɖo ɖe wò' which means 'I will text you the address'."
      },
      {
        id: 514,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/meɖe_kuku_lala.m4a"),
        options: [
          { id: 1, text: "Can you hear me?" },
          { id: 2, text: "I will call you back" },
          { id: 3, text: "Please hold on" },
          { id: 4, text: "Hello, who is speaking?" }
        ],
        correctOptionId: 3,
        hints: ["lala = hold"],
        explanation: "You heard 'Meɖe kuku lala' which means 'Please hold on'."
      },
      {
        id: 515,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The network is bad' in Ewe?",
        options: [
          { id: 1, text: "Ka la le tsotsom" },
          { id: 2, text: "Netwɔk la megblẽ" },
          { id: 3, text: "Meɖe kuku lala" },
          { id: 4, text: "Nye batri vɔ" }
        ],
        correctOptionId: 2,
        hints: ["netwɔk = network"],
        explanation: "Netwɔk la megblẽ = The network is bad."
      },
      {
        id: 520,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Send me a message' in Ewe?",
        options: [
          { id: 1, text: "Netwɔk la megblẽ" },
          { id: 2, text: "Maŋlɔ nɔƒea ɖo ɖe wò" },
          { id: 3, text: "Ɖo gbedasi ɖem" },
          { id: 4, text: "Me ga yɔ ge" }
        ],
        correctOptionId: 3,
        hints: ["gbedasi = message"],
        explanation: "Ɖo gbedasi ɖem = Send me a message."
      },
      {
        id: 517,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I will call you back' in Ewe?",
        options: [
          { id: 1, text: "Maŋlɔ nɔƒea ɖo ɖe wò" },
          { id: 2, text: "Me ga yɔ ge" },
          { id: 3, text: "Ɖo gbedasi ɖem" },
          { id: 4, text: "Meɖe kuku lala" }
        ],
        correctOptionId: 2,
        hints: ["ga yɔ = call again"],
        explanation: "Me ga yɔ ge = I will call you back."
      },
      {
        id: 522,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter5/ka_la_le_tsotsom.m4a"),
        options: [
          { id: 1, text: "Send me a message" },
          { id: 2, text: "The network is bad" },
          { id: 3, text: "The line is breaking up" },
          { id: 4, text: "My battery is low" }
        ],
        correctOptionId: 3,
        hints: ["tsotsom = breaking"],
        explanation: "You heard 'Ka la le tsotsom' which means 'The line is breaking up'."
      }
    ]
  }
};