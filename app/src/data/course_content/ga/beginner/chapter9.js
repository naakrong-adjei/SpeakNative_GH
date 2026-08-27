// data/course_content/ga/beginner/chapter9.js
export default {
  id: 9,
  title: "School & Work",
  description: "Learn words and phrases for school and work in Ga",
  icon: "school-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "9-1",
      type: "words",
      title: "School Words",
      icon: "school-outline",
      description: "Learn common school words in Ga",
      words: ["Skul", "Klɛkliŋ", "Wolo", "Nuŋmɔ", "Kasa", "Tifimoɔ"],
      vocabulary: [
        {
          id: 1,
          english: "School",
          native: "Skul",
          pronunciation: "skool"
          // audioUrl: "/audio/ga/skul.mp3"
        },
        {
          id: 2,
          english: "Teacher",
          native: "Klɛkliŋ",
          pronunciation: "kleh-kleeng"
          // audioUrl: "/audio/ga/klɛkliŋ.mp3"
        },
        {
          id: 3,
          english: "Book",
          native: "Wolo",
          pronunciation: "woh-loh"
          // audioUrl: "/audio/ga/wolo.mp3"
        },
        {
          id: 4,
          english: "Read",
          native: "Nuŋmɔ",
          pronunciation: "noong-moh"
          // audioUrl: "/audio/ga/nuŋmɔ.mp3"
        },
        {
          id: 5,
          english: "Write",
          native: "Kasa",
          pronunciation: "kah-sah"
          // audioUrl: "/audio/ga/kasa.mp3"
        },
        {
          id: 6,
          english: "Learn",
          native: "Tifimoɔ",
          pronunciation: "tee-fee-moh-oh"
          // audioUrl: "/audio/ga/tifimoɔ.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'School' in Ga?",
          options: [
            { id: 1, text: "Skul" },
            { id: 2, text: "Klɛkliŋ" },
            { id: 3, text: "Wolo" },
            { id: 4, text: "Kasa" }
          ],
          correctOptionId: 1,
          hints: ["Where students go"],
          explanation: "'Skul' means 'School' in Ga."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Teacher' in Ga?",
          options: [
            { id: 1, text: "Skul" },
            { id: 2, text: "Klɛkliŋ" },
            { id: 3, text: "Wolo" },
            { id: 4, text: "Nuŋmɔ" }
          ],
          correctOptionId: 2,
          hints: ["Teaches in class"],
          explanation: "'Klɛkliŋ' means 'Teacher' in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Book' in Ga?",
          options: [
            { id: 1, text: "Skul" },
            { id: 2, text: "Klɛkliŋ" },
            { id: 3, text: "Wolo" },
            { id: 4, text: "Nuŋmɔ" }
          ],
          correctOptionId: 3,
          hints: ["You read it"],
          explanation: "'Wolo' means 'Book' in Ga."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ga word to its English meaning.",
          pairs: [
            { id: 1, left: "Skul", right: "School" },
            { id: 2, left: "Klɛkliŋ", right: "Teacher" },
            { id: 3, left: "Wolo", right: "Book" },
            { id: 4, left: "Nuŋmɔ", right: "Read" }
          ],
          hints: ["Skul = school", "Klɛkliŋ = teacher", "Wolo = book"],
          explanation: "These are common school words in Ga."
        }
      ]
    },

    {
      id: "9-2",
      type: "phrases",
      title: "Work Words",
      icon: "briefcase-outline",
      description: "Learn common work words in Ga",
      words: ["Nitsumɔ", "Mitaa", "Shishibaa", "Nitsumɔŋ", "Lɛ̃ɛ"],
      vocabulary: [
        {
          id: 7,
          english: "Work",
          native: "Nitsumɔ",
          pronunciation: "nee-tsu-moh"
          // audioUrl: "/audio/ga/nitsumɔ.mp3"
        },
        {
          id: 8,
          english: "I work",
          native: "Mitaa",
          pronunciation: "mee-tah"
          // audioUrl: "/audio/ga/mitaa.mp3"
        },
        {
          id: 9,
          english: "Office",
          native: "Shishibaa",
          pronunciation: "shee-shee-bah"
          // audioUrl: "/audio/ga/shishibaa.mp3"
        },
        {
          id: 10,
          english: "Place of work",
          native: "Nitsumɔŋ",
          pronunciation: "nee-tsu-mong"
          // audioUrl: "/audio/ga/nitsumɔŋ.mp3"
        },
        {
          id: 11,
          english: "Boss",
          native: "Lɛ̃ɛ",
          pronunciation: "leh-eh"
          // audioUrl: "/audio/ga/lɛ̃ɛ.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Work' in Ga?",
          options: [
            { id: 1, text: "Nitsumɔ" },
            { id: 2, text: "Mitaa" },
            { id: 3, text: "Shishibaa" },
            { id: 4, text: "Lɛ̃ɛ" }
          ],
          correctOptionId: 1,
          hints: ["What you do for a job"],
          explanation: "'Nitsumɔ' means 'Work' in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I work' in Ga?",
          options: [
            { id: 1, text: "Nitsumɔ" },
            { id: 2, text: "Mitaa" },
            { id: 3, text: "Shishibaa" },
            { id: 4, text: "Lɛ̃ɛ" }
          ],
          correctOptionId: 2,
          hints: ["Mi = I", "taa = work"],
          explanation: "'Mitaa' means 'I work' in Ga."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Office' in Ga?",
          options: [
            { id: 1, text: "Nitsumɔ" },
            { id: 2, text: "Mitaa" },
            { id: 3, text: "Shishibaa" },
            { id: 4, text: "Lɛ̃ɛ" }
          ],
          correctOptionId: 3,
          hints: ["Where you work"],
          explanation: "'Shishibaa' means 'Office' in Ga."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ga word to its English meaning.",
          pairs: [
            { id: 1, left: "Nitsumɔ", right: "Work" },
            { id: 2, left: "Mitaa", right: "I work" },
            { id: 3, left: "Shishibaa", right: "Office" },
            { id: 4, left: "Lɛ̃ɛ", right: "Boss" }
          ],
          hints: ["Nitsumɔ = work", "Shishibaa = office"],
          explanation: "These are common work words in Ga."
        },
        {
          id: 205,
          type: "listening_multiple_choice",
          instruction: "Listen to the Ga audio and select the correct English translation.",
          question: "What does this Ga word mean in English?",
          audioUrl: "/audio/ga/nitsumɔ.mp3",
          options: [
            { id: 1, text: "School" },
            { id: 2, text: "Work" },
            { id: 3, text: "Office" },
            { id: 4, text: "Boss" }
          ],
          correctOptionId: 2,
          hints: ["What you do for a job"],
          explanation: "You heard 'Nitsumɔ' which means 'Work' in Ga."
        }
      ]
    },

    {
      id: "9-3",
      type: "simple_sentences",
      title: "School & Work Phrases",
      icon: "chatbox-ellipses-outline",
      description: "Learn phrases about school and work in Ga",
      words: ["Mitaa skul", "Miitao nitsumɔ", "Mitao nawulɔ", "Miyɛ wolo"],
      vocabulary: [
        {
          id: 12,
          english: "I go to school",
          native: "Mitaa skul",
          pronunciation: "mee-tah skool"
          // audioUrl: "/audio/ga/mitaa_skul.mp3"
        },
        {
          id: 13,
          english: "I want a job",
          native: "Miitao nitsumɔ",
          pronunciation: "mee-tao nee-tsu-moh"
          // audioUrl: "/audio/ga/miitao_nitsumɔ.mp3"
        },
        {
          id: 14,
          english: "I want to learn",
          native: "Mitao nawulɔ",
          pronunciation: "mee-tao nah-woo-loh"
          // audioUrl: "/audio/ga/o_tao_nawulɔ.mp3"
        },
        {
          id: 15,
          english: "I have a book",
          native: "Miyɛ wolo",
          pronunciation: "mee-yeh woh-loh"
          // audioUrl: "/audio/ga/miyɛ_wolo.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I go to school' in Ga?",
          options: [
            { id: 1, text: "Mitaa skul" },
            { id: 2, text: "Miitao nitsumɔ" },
            { id: 3, text: "Mitao nawulɔ" },
            { id: 4, text: "Miyɛ wolo" }
          ],
          correctOptionId: 1,
          hints: ["skul = school", "Mitaa = I go"],
          explanation: "'Mitaa skul' means 'I go to school' in Ga."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I want a job' in Ga?",
          options: [
            { id: 1, text: "Mitaa skul" },
            { id: 2, text: "Miitao nitsumɔ" },
            { id: 3, text: "Mitao nawulɔ" },
            { id: 4, text: "Miyɛ wolo" }
          ],
          correctOptionId: 2,
          hints: ["nitsumɔ = work/job", "Miitao = I want"],
          explanation: "'Miitao nitsumɔ' means 'I want a job' in Ga."
        },
        {
          id: 303,
          type: "drag_drop",
          instruction: "Complete the phrase 'I have a book' by dragging the correct word.",
          sentence: "Miyɛ [_____]",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "wolo", meaning: "book" },
            { id: "opt2", text: "skul", meaning: "school" },
            { id: "opt3", text: "nii", meaning: "food" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Means 'book'", "Follows 'Miyɛ'"],
          explanation: "Miyɛ wolo = I have a book. 'Wolo' means 'book'."
        }
      ]
    }
  ],

  review: {
    id: "review-9",
    title: "Review: School & Work",
    icon: "refresh-outline",
    description: "Review the school and work words and phrases you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'School' in Ga?",
        options: [
          { id: 1, text: "Skul" },
          { id: 2, text: "Klɛkliŋ" },
          { id: 3, text: "Wolo" },
          { id: 4, text: "Kasa" }
        ],
        correctOptionId: 1,
        hints: ["Where students go"],
        explanation: "Skul = School."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Work' in Ga?",
        options: [
          { id: 1, text: "Nitsumɔ" },
          { id: 2, text: "Mitaa" },
          { id: 3, text: "Shishibaa" },
          { id: 4, text: "Lɛ̃ɛ" }
        ],
        correctOptionId: 1,
        hints: ["What you do for a job"],
        explanation: "Nitsumɔ = Work."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I go to school' in Ga?",
        options: [
          { id: 1, text: "Mitaa skul" },
          { id: 2, text: "Miitao nitsumɔ" },
          { id: 3, text: "Mitao nawulɔ" },
          { id: 4, text: "Miyɛ wolo" }
        ],
        correctOptionId: 1,
        hints: ["skul = school"],
        explanation: "Mitaa skul = I go to school."
      },
      {
        id: 404,
        type: "matching",
        instruction: "Match each Ga word to its English meaning.",
        pairs: [
          { id: 1, left: "Skul", right: "School" },
          { id: 2, left: "Klɛkliŋ", right: "Teacher" },
          { id: 3, left: "Wolo", right: "Book" },
          { id: 4, left: "Nitsumɔ", right: "Work" }
        ],
        hints: ["Skul = school", "Klɛkliŋ = teacher"],
        explanation: "These are key school and work words from this chapter."
      }
    ]
  }
};
