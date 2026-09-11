export default {
  id: 7,
  title: "Directions",
  description: "Learn how to ask for and give directions in Ga",
  icon: "navigate-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "7-1",
      type: "words",
      title: "Asking for Directions",
      icon: "help-circle-outline",
      description: "Learn how to ask for directions in Ga",
      words: ["Nɛgbɛ jara lɛ yɔɔ?", "Milaaje", "Te mafee tɛŋŋ ni mashɛ jɛmɛ?"],
      vocabulary: [
        {
          id: 86,
          english: "Where is the market?",
          native: "Nɛgbɛ jara lɛ yɔɔ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/ne_gbɛ_jara_lɛ_yɔɔ.m4a")
        },
        {
          id: 96,
          english: "I am lost",
          native: "Milaaje",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/milaaje.m4a")
        },
        {
          id: 97,
          english: "How do I get there?",
          native: "Te mafee tɛŋŋ ni mashɛ jɛmɛ?",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/te_mafee_tɛŋŋ_ni_mashɛ_jɛmɛ.m4a")
        }
      ],
      questions: [
        {
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'Where is the market?' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ jara lɛ yɔɔ?" },
            { id: 2, text: "Milaaje" },
            { id: 3, text: "Te mafee tɛŋŋ ni mashɛ jɛmɛ?" },
            { id: 4, text: "Ya trɔmɔɔ" }
          ],
          correctOptionId: 1,
          hints: ["Question about location", "jara = market"],
          explanation: "Nɛgbɛ jara lɛ yɔɔ? = Where is the market? in Ga."
        },
        {
          id: 702,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am lost' in Ga?",
          options: [
            { id: 1, text: "Nɛgbɛ jara lɛ yɔɔ?" },
            { id: 2, text: "Milaaje" },
            { id: 3, text: "Te mafee tɛŋŋ ni mashɛ jɛmɛ?" },
            { id: 4, text: "Ya trɔmɔɔ" }
          ],
          correctOptionId: 2,
          hints: ["Expression of being lost"],
          explanation: "Milaaje = I am lost in Ga."
        },
        {
          id: 703,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Te mafee tɛŋŋ ni mashɛ [_____]? (How do I get there?)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "jɛmɛ" },
            { id: "opt2", text: "tɛɛ" },
            { id: "opt3", text: "hiɛ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["jɛmɛ = there"],
          explanation: "Te mafee tɛŋŋ ni mashɛ jɛmɛ? = How do I get there? in Ga."
        }
      ]
    },

    {
      id: "7-2",
      type: "words",
      title: "Giving Directions",
      icon: "navigate-outline",
      description: "Learn how to give directions in Ga",
      words: ["Ya trɔmɔɔ", "Tsɔ ninejurɔ", "Tsɔ abɛku", "Nyiɛmɔ gbɛ nɛɛ nɔ"],
      vocabulary: [
        {
          id: 87,
          english: "Go straight",
          native: "Ya trɔmɔɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/ya_trɔmɔɔ.m4a")
        },
        {
          id: 88,
          english: "Turn right",
          native: "Tsɔ ninejurɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/tsɔ_ninejurɔ.m4a")
        },
        {
          id: 89,
          english: "Turn left",
          native: "Tsɔ abɛku",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/tsɔ_abɛku.m4a")
        },
        {
          id: 95,
          english: "Follow this road",
          native: "Nyiɛmɔ gbɛ nɛɛ nɔ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/nyiɛmɔ_gbɛ_nɛɛ_nɔ.m4a")
        }
      ],
      questions: [
        {
          id: 704,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Go straight' in Ga?",
          options: [
            { id: 1, text: "Ya trɔmɔɔ" },
            { id: 2, text: "Tsɔ ninejurɔ" },
            { id: 3, text: "Tsɔ abɛku" },
            { id: 4, text: "Nyiɛmɔ gbɛ nɛɛ nɔ" }
          ],
          correctOptionId: 1,
          hints: ["Ya = go", "trɔmɔɔ = straight"],
          explanation: "Ya trɔmɔɔ = Go straight in Ga."
        },
        {
          id: 705,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Turn right' in Ga?",
          options: [
            { id: 1, text: "Ya trɔmɔɔ" },
            { id: 2, text: "Tsɔ ninejurɔ" },
            { id: 3, text: "Tsɔ abɛku" },
            { id: 4, text: "Nyiɛmɔ gbɛ nɛɛ nɔ" }
          ],
          correctOptionId: 2,
          hints: ["Tsɔ = turn", "ninejurɔ = right"],
          explanation: "Tsɔ ninejurɔ = Turn right in Ga."
        },
        {
          id: 706,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Turn left' in Ga?",
          options: [
            { id: 1, text: "Ya trɔmɔɔ" },
            { id: 2, text: "Tsɔ ninejurɔ" },
            { id: 3, text: "Tsɔ abɛku" },
            { id: 4, text: "Nyiɛmɔ gbɛ nɛɛ nɔ" }
          ],
          correctOptionId: 3,
          hints: ["Tsɔ = turn", "abɛku = left"],
          explanation: "Tsɔ abɛku = Turn left in Ga."
        },
        {
          id: 707,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Follow this road' in Ga?",
          options: [
            { id: 1, text: "Ya trɔmɔɔ" },
            { id: 2, text: "Tsɔ ninejurɔ" },
            { id: 3, text: "Tsɔ abɛku" },
            { id: 4, text: "Nyiɛmɔ gbɛ nɛɛ nɔ" }
          ],
          correctOptionId: 4,
          hints: ["Nyiɛmɔ = follow", "gbɛ = road"],
          explanation: "Nyiɛmɔ gbɛ nɛɛ nɔ = Follow this road in Ga."
        },
        {
          id: 708,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Nyiɛmɔ gbɛ [_____] nɔ (Follow this road)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "nɛɛ" },
            { id: "opt2", text: "jɛmɛ" },
            { id: "opt3", text: "trɔmɔɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["nɛɛ = this"],
          explanation: "Nyiɛmɔ gbɛ nɛɛ nɔ = Follow this road in Ga."
        }
      ]
    },

    {
      id: "7-3",
      type: "words",
      title: "Distance & Location",
      icon: "map-outline",
      description: "Learn how to describe distance and location in Ga",
      words: ["Eyɛ shɔŋŋ", "Ebɛŋ kɛ", "Shia lɛ sɛɛ", "Sukuu lɛ hiɛ"],
      vocabulary: [
        {
          id: 90,
          english: "It is far",
          native: "Eyɛ shɔŋŋ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/eyɛ_shɔŋŋ.m4a")
        },
        {
          id: 91,
          english: "It is near",
          native: "Ebɛŋ kɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/ebɛŋ_kɛ.m4a")
        },
        {
          id: 93,
          english: "Behind the house",
          native: "Shia lɛ sɛɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/shia_lɛ_sɛɛ.m4a")
        },
        {
          id: 94,
          english: "In front of the school",
          native: "Sukuu lɛ hiɛ",
          audioUrl: require("../../../../assets/audio/ga/beginner/chapter7/sukuu_lɛ_hiɛ.m4a")
        }
      ],
      questions: [
        {
          id: 709,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'It is far' in Ga?",
          options: [
            { id: 1, text: "Eyɛ shɔŋŋ" },
            { id: 2, text: "Ebɛŋ kɛ" },
            { id: 3, text: "Shia lɛ sɛɛ" },
            { id: 4, text: "Sukuu lɛ hiɛ" }
          ],
          correctOptionId: 1,
          hints: ["eyɛ = it is", "shɔŋŋ = far"],
          explanation: "Eyɛ shɔŋŋ = It is far in Ga."
        },
        {
          id: 710,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'It is near' in Ga?",
          options: [
            { id: 1, text: "Eyɛ shɔŋŋ" },
            { id: 2, text: "Ebɛŋ kɛ" },
            { id: 3, text: "Shia lɛ sɛɛ" },
            { id: 4, text: "Sukuu lɛ hiɛ" }
          ],
          correctOptionId: 2,
          hints: ["ebɛŋ kɛ = near"],
          explanation: "Ebɛŋ kɛ = It is near in Ga."
        },
        {
          id: 711,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Behind the house' in Ga?",
          options: [
            { id: 1, text: "Eyɛ shɔŋŋ" },
            { id: 2, text: "Ebɛŋ kɛ" },
            { id: 3, text: "Shia lɛ sɛɛ" },
            { id: 4, text: "Sukuu lɛ hiɛ" }
          ],
          correctOptionId: 3,
          hints: ["shia = house", "sɛɛ = behind"],
          explanation: "Shia lɛ sɛɛ = Behind the house in Ga."
        },
        {
          id: 712,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'In front of the school' in Ga?",
          options: [
            { id: 1, text: "Eyɛ shɔŋŋ" },
            { id: 2, text: "Ebɛŋ kɛ" },
            { id: 3, text: "Shia lɛ sɛɛ" },
            { id: 4, text: "Sukuu lɛ hiɛ" }
          ],
          correctOptionId: 4,
          hints: ["sukuu = school", "hiɛ = in front of"],
          explanation: "Sukuu lɛ hiɛ = In front of the school in Ga."
        },
        {
          id: 713,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Shia lɛ [_____] (Behind the house)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "sɛɛ" },
            { id: "opt2", text: "hiɛ" },
            { id: "opt3", text: "nɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["sɛɛ = behind"],
          explanation: "Shia lɛ sɛɛ = Behind the house in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-7",
    title: "Review: Directions",
    icon: "refresh-outline",
    description: "Review all the direction and location vocabulary you've learned",
    questions: [
      {
        id: 717,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you ask 'Where is the market?' in Ga?",
        options: [
          { id: 1, text: "Nɛgbɛ jara lɛ yɔɔ?" },
          { id: 2, text: "Milaaje" },
          { id: 3, text: "Te mafee tɛŋŋ ni mashɛ jɛmɛ?" },
          { id: 4, text: "Ya trɔmɔɔ" }
        ],
        correctOptionId: 1,
        hints: ["Question about location"],
        explanation: "Nɛgbɛ jara lɛ yɔɔ? = Where is the market?"
      },
      {
        id: 718,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Turn right' in Ga?",
        options: [
          { id: 1, text: "Ya trɔmɔɔ" },
          { id: 2, text: "Tsɔ ninejurɔ" },
          { id: 3, text: "Tsɔ abɛku" },
          { id: 4, text: "Nyiɛmɔ gbɛ nɛɛ nɔ" }
        ],
        correctOptionId: 2,
        hints: ["Tsɔ = turn", "ninejurɔ = right"],
        explanation: "Tsɔ ninejurɔ = Turn right."
      },
      {
        id: 719,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Turn left' in Ga?",
        options: [
          { id: 1, text: "Ya trɔmɔɔ" },
          { id: 2, text: "Tsɔ ninejurɔ" },
          { id: 3, text: "Tsɔ abɛku" },
          { id: 4, text: "Nyiɛmɔ gbɛ nɛɛ nɔ" }
        ],
        correctOptionId: 3,
        hints: ["Tsɔ = turn", "abɛku = left"],
        explanation: "Tsɔ abɛku = Turn left."
      },
      {
        id: 720,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'It is near' in Ga?",
        options: [
          { id: 1, text: "Eyɛ shɔŋŋ" },
          { id: 2, text: "Ebɛŋ kɛ" },
          { id: 3, text: "Shia lɛ sɛɛ" },
          { id: 4, text: "Sukuu lɛ hiɛ" }
        ],
        correctOptionId: 2,
        hints: ["Opposite of far"],
        explanation: "Ebɛŋ kɛ = It is near."
      },
      {
        id: 721,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'In front of the school' in Ga?",
        options: [
          { id: 1, text: "Eyɛ shɔŋŋ" },
          { id: 2, text: "Ebɛŋ kɛ" },
          { id: 3, text: "Shia lɛ sɛɛ" },
          { id: 4, text: "Sukuu lɛ hiɛ" }
        ],
        correctOptionId: 4,
        hints: ["sukuu = school", "hiɛ = in front of"],
        explanation: "Sukuu lɛ hiɛ = In front of the school."
      },
      {
        id: 722,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Follow this road' in Ga?",
        options: [
          { id: 1, text: "Ya trɔmɔɔ" },
          { id: 2, text: "Tsɔ ninejurɔ" },
          { id: 3, text: "Tsɔ abɛku" },
          { id: 4, text: "Nyiɛmɔ gbɛ nɛɛ nɔ" }
        ],
        correctOptionId: 4,
        hints: ["Nyiɛmɔ = follow", "gbɛ = road"],
        explanation: "Nyiɛmɔ gbɛ nɛɛ nɔ = Follow this road."
      },
      {
        id: 723,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Milaaje (I am [_____])",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "lost" },
          { id: "opt2", text: "found" },
          { id: "opt3", text: "here" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["Expression of being lost"],
        explanation: "Milaaje = I am lost."
      },
      {
        id: 724,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Ebɛŋ [_____] (It is near)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "kɛ" },
          { id: "opt2", text: "nɔ" },
          { id: "opt3", text: "sɛɛ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["kɛ = near"],
        explanation: "Ebɛŋ kɛ = It is near."
      },
      {
        id: 725,
        type: "drag_drop",
        instruction: "Complete the Ga phrase by dragging the correct word.",
        sentence: "Ya [_____] (Go straight)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "trɔmɔɔ" },
          { id: "opt2", text: "sɛɛ" },
          { id: "opt3", text: "hiɛ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["trɔmɔɔ = straight"],
        explanation: "Ya trɔmɔɔ = Go straight."
      },
      {
        id: 726,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'How do I get there?' in Ga?",
        options: [
          { id: 1, text: "Nɛgbɛ jara lɛ yɔɔ?" },
          { id: 2, text: "Milaaje" },
          { id: 3, text: "Te mafee tɛŋŋ ni mashɛ jɛmɛ?" },
          { id: 4, text: "Ya trɔmɔɔ" }
        ],
        correctOptionId: 3,
        hints: ["Question about how to get somewhere"],
        explanation: "Te mafee tɛŋŋ ni mashɛ jɛmɛ? = How do I get there?"
      }
    ]
  }
};