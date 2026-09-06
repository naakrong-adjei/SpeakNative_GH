// data/course_content/ga/beginner/chapter7.js
export default {
  id: 7,
  title: "Directions",
  description: "Learn words and phrases for asking and giving directions in Ga",
  icon: "navigate-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "7-1",
      type: "words",
      title: "Direction Words",
      icon: "navigate-outline",
      description: "Learn common direction words in Ga",
      words: ["Naaŋ", "Numa", "Nyuishɔŋ", "Kpakpɔŋ", "Abɔ", "Ashia"],
      vocabulary: [
        {
          id: 1,
          english: "Left",
          native: "Naaŋ",
          pronunciation: "nah-ah-ng"
          // audioUrl: "/audio/ga/naaŋ.mp3"
        },
        {
          id: 2,
          english: "Right",
          native: "Numa",
          pronunciation: "noo-mah"
          // audioUrl: "/audio/ga/numa.mp3"
        },
        {
          id: 3,
          english: "North",
          native: "Nyuishɔŋ",
          pronunciation: "nyoo-shong"
          // audioUrl: "/audio/ga/nyuishɔŋ.mp3"
        },
        {
          id: 4,
          english: "Road / Street",
          native: "Kpakpɔŋ",
          pronunciation: "kpah-kpong"
          // audioUrl: "/audio/ga/kpakpɔŋ.mp3"
        },
        {
          id: 5,
          english: "Near",
          native: "Abɔ",
          pronunciation: "ah-boh"
          // audioUrl: "/audio/ga/abɔ.mp3"
        },
        {
          id: 6,
          english: "Far",
          native: "Ashia",
          pronunciation: "ah-shee-ah"
          // audioUrl: "/audio/ga/ashia.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Left' in Ga?",
          options: [
            { id: 1, text: "Naaŋ" },
            { id: 2, text: "Numa" },
            { id: 3, text: "Kpakpɔŋ" },
            { id: 4, text: "Abɔ" }
          ],
          correctOptionId: 1,
          hints: ["Opposite of right"],
          explanation: "'Naaŋ' means 'Left' in Ga."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Right' in Ga?",
          options: [
            { id: 1, text: "Naaŋ" },
            { id: 2, text: "Numa" },
            { id: 3, text: "Kpakpɔŋ" },
            { id: 4, text: "Ashia" }
          ],
          correctOptionId: 2,
          hints: ["Opposite of left"],
          explanation: "'Numa' means 'Right' in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Far' in Ga?",
          options: [
            { id: 1, text: "Abɔ" },
            { id: 2, text: "Ashia" },
            { id: 3, text: "Naaŋ" },
            { id: 4, text: "Numa" }
          ],
          correctOptionId: 2,
          hints: ["Not near"],
          explanation: "'Ashia' means 'Far' in Ga."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ga word to its English meaning.",
          pairs: [
            { id: 1, left: "Naaŋ", right: "Left" },
            { id: 2, left: "Numa", right: "Right" },
            { id: 3, left: "Abɔ", right: "Near" },
            { id: 4, left: "Ashia", right: "Far" }
          ],
          hints: ["Naaŋ = left", "Numa = right", "Abɔ = near"],
          explanation: "These are common direction words in Ga."
        }
      ]
    },

    {
      id: "7-2",
      type: "phrases",
      title: "Asking for Directions",
      icon: "navigate-outline",
      description: "Learn how to ask for directions in Ga",
      words: ["Te nyiɛ kɛya?", "Miitao kɛya...", "Naaŋ ni", "Numa ni"],
      vocabulary: [
        {
          id: 7,
          english: "Where is...?",
          native: "Te nyiɛ kɛya?",
          pronunciation: "teh nyee-eh keh-yah"
          // audioUrl: "/audio/ga/te_nyiɛ_kɛya.mp3"
        },
        {
          id: 8,
          english: "I want to go to...",
          native: "Miitao kɛya ...",
          pronunciation: "mee-tao keh-yah"
          // audioUrl: "/audio/ga/miitao_kɛya.mp3"
        },
        {
          id: 9,
          english: "Turn left",
          native: "Naaŋ ni",
          pronunciation: "nah-ah-ng nee"
          // audioUrl: "/audio/ga/naaŋ_ni.mp3"
        },
        {
          id: 10,
          english: "Turn right",
          native: "Numa ni",
          pronunciation: "noo-mah nee"
          // audioUrl: "/audio/ga/numa_ni.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'Where is...?' in Ga?",
          options: [
            { id: 1, text: "Te nyiɛ kɛya?" },
            { id: 2, text: "Miitao kɛya..." },
            { id: 3, text: "Naaŋ ni" },
            { id: 4, text: "Numa ni" }
          ],
          correctOptionId: 1,
          hints: ["Asking for location"],
          explanation: "'Te nyiɛ kɛya?' means 'Where is...?' in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I want to go to...' in Ga?",
          options: [
            { id: 1, text: "Te nyiɛ kɛya?" },
            { id: 2, text: "Miitao kɛya..." },
            { id: 3, text: "Naaŋ ni" },
            { id: 4, text: "Numa ni" }
          ],
          correctOptionId: 2,
          hints: ["Mi = I", "tao = want", "kɛya = to go"],
          explanation: "'Miitao kɛya...' means 'I want to go to...' in Ga."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Turn left' in Ga?",
          options: [
            { id: 1, text: "Te nyiɛ kɛya?" },
            { id: 2, text: "Miitao kɛya..." },
            { id: 3, text: "Naaŋ ni" },
            { id: 4, text: "Numa ni" }
          ],
          correctOptionId: 3,
          hints: ["naaŋ = left", "ni = turn toward"],
          explanation: "'Naaŋ ni' means 'Turn left' in Ga."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ga phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Te nyiɛ kɛya?", right: "Where is...?" },
            { id: 2, left: "Miitao kɛya", right: "I want to go" },
            { id: 3, left: "Naaŋ ni", right: "Turn left" },
            { id: 4, left: "Numa ni", right: "Turn right" }
          ],
          hints: ["naaŋ = left", "numa = right", "kɛya = to go"],
          explanation: "These are useful phrases for asking directions in Ga."
        },
        {
          id: 205,
          type: "listening_matching",
          instruction: "Listen to each Ga phrase and match it to its English meaning.",
          question: "Match each phrase you hear to its meaning.",
          pairs: [
            { id: "p1", native: "Naaŋ ni", audioUrl: "/audio/ga/naaŋ_ni.mp3", correctOptionId: "opt1" },
            { id: "p2", native: "Numa ni", audioUrl: "/audio/ga/numa_ni.mp3", correctOptionId: "opt2" }
          ],
          options: [
            { id: "opt1", text: "Turn left" },
            { id: "opt2", text: "Turn right" }
          ],
          correctDrops: [
            { pairId: "p1", optionId: "opt1" },
            { pairId: "p2", optionId: "opt2" }
          ],
          hints: ["naaŋ = left", "numa = right"],
          explanation: "These are direction phrases in Ga."
        }
      ]
    },

    {
      id: "7-3",
      type: "simple_sentences",
      title: "Giving Directions",
      icon: "chatbox-ellipses-outline",
      description: "Learn phrases for giving directions in Ga",
      words: ["Naaŋ ni kɛkɛ", "Numa ni kɛkɛ", "Nyɛi", "Kɛya nyiɛ"],
      vocabulary: [
        {
          id: 11,
          english: "Go left",
          native: "Naaŋ ni kɛkɛ",
          pronunciation: "nah-ah-ng nee keh-keh"
          // audioUrl: "/audio/ga/naaŋ_ni_kɛkɛ.mp3"
        },
        {
          id: 12,
          english: "Go right",
          native: "Numa ni kɛkɛ",
          pronunciation: "noo-mah nee keh-keh"
          // audioUrl: "/audio/ga/numa_ni_kɛkɛ.mp3"
        },
        {
          id: 13,
          english: "Go straight",
          native: "Nyɛi",
          pronunciation: "nyee-eh"
          // audioUrl: "/audio/ga/nyɛi.mp3"
        },
        {
          id: 14,
          english: "Walk / Travel",
          native: "Kɛya nyiɛ",
          pronunciation: "keh-yah nyee-eh"
          // audioUrl: "/audio/ga/kɛya_nyiɛ.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Go left' in Ga?",
          options: [
            { id: 1, text: "Naaŋ ni kɛkɛ" },
            { id: 2, text: "Numa ni kɛkɛ" },
            { id: 3, text: "Nyɛi" },
            { id: 4, text: "Kɛya nyiɛ" }
          ],
          correctOptionId: 1,
          hints: ["naaŋ = left", "kɛkɛ = go"],
          explanation: "'Naaŋ ni kɛkɛ' means 'Go left' in Ga."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Go straight' in Ga?",
          options: [
            { id: 1, text: "Naaŋ ni kɛkɛ" },
            { id: 2, text: "Numa ni kɛkɛ" },
            { id: 3, text: "Nyɛi" },
            { id: 4, text: "Kɛya nyiɛ" }
          ],
          correctOptionId: 3,
          hints: ["Continue forward"],
          explanation: "'Nyɛi' means 'Go straight' in Ga."
        },
        {
          id: 303,
          type: "drag_drop",
          instruction: "Complete the phrase 'Go right' by dragging the correct word.",
          sentence: "[_____] ni kɛkɛ",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Numa", meaning: "right" },
            { id: "opt2", text: "Naaŋ", meaning: "left" },
            { id: "opt3", text: "Nyɛi", meaning: "straight" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Means 'right'", "Followed by 'ni kɛkɛ'"],
          explanation: "Numa ni kɛkɛ = Go right. 'Numa' means 'right'."
        }
      ]
    }
  ],

  review: {
    id: "review-7",
    title: "Review: Directions",
    icon: "refresh-outline",
    description: "Review the direction words and phrases you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Left' in Ga?",
        options: [
          { id: 1, text: "Naaŋ" },
          { id: 2, text: "Numa" },
          { id: 3, text: "Kpakpɔŋ" },
          { id: 4, text: "Abɔ" }
        ],
        correctOptionId: 1,
        hints: ["Opposite of right"],
        explanation: "Naaŋ = Left."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "How do you say 'Right' in Ga?",
        options: [
          { id: 1, text: "Naaŋ" },
          { id: 2, text: "Numa" },
          { id: 3, text: "Kpakpɔŋ" },
          { id: 4, text: "Ashia" }
        ],
        correctOptionId: 2,
        hints: ["Opposite of left"],
        explanation: "Numa = Right."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Turn left' in Ga?",
        options: [
          { id: 1, text: "Te nyiɛ kɛya?" },
          { id: 2, text: "Miitao kɛya..." },
          { id: 3, text: "Naaŋ ni" },
          { id: 4, text: "Numa ni" }
        ],
        correctOptionId: 3,
        hints: ["naaŋ = left"],
        explanation: "Naaŋ ni = Turn left."
      },
      {
        id: 404,
        type: "matching",
        instruction: "Match each Ga word to its English meaning.",
        pairs: [
          { id: 1, left: "Naaŋ", right: "Left" },
          { id: 2, left: "Numa", right: "Right" },
          { id: 3, left: "Abɔ", right: "Near" },
          { id: 4, left: "Ashia", right: "Far" }
        ],
        hints: ["Naaŋ = left", "Numa = right"],
        explanation: "These are key direction words from this chapter."
      }
    ]
  }
};
