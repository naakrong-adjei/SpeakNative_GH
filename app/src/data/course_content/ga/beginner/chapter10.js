// data/course_content/ga/beginner/chapter10.js
export default {
  id: 10,
  title: "Basic Conversations",
  description: "Learn essential Ga phrases to hold basic everyday conversations",
  icon: "chatbubbles-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "10-1",
      type: "words",
      title: "Common Questions",
      icon: "help-circle-outline",
      description: "Learn common questions to ask in daily conversation",
      words: ["Te oteŋ?", "Mɛni?", "Mɛni hewɔ?", "Te oyɔɔ jɛ ni?", "Te atsuɔ okɔ̃ ni?", "Mɛni nɛɛ?", "Te oyɔɔ?"],
      vocabulary: [
        {
          id: 1,
          english: "How / What?",
          native: "Mɛni?",
          pronunciation: "meh-nee"
          // audioUrl: "/audio/ga/mɛni.mp3"
        },
        {
          id: 2,
          english: "How is it?",
          native: "Te oteŋ?",
          pronunciation: "teh oh-teh-ng"
          // audioUrl: "/audio/ga/te_oteng.mp3"
        },
        {
          id: 3,
          english: "Why?",
          native: "Mɛni hewɔ?",
          pronunciation: "meh-nee heh-woh"
          // audioUrl: "/audio/ga/mɛni_hewɔ.mp3"
        },
        {
          id: 4,
          english: "Where are you from?",
          native: "Te oyɔɔ jɛ ni?",
          pronunciation: "teh oh-yoh-oh jeh nee"
          // audioUrl: "/audio/ga/te_oyɔɔ_jɛ_ni.mp3"
        },
        {
          id: 5,
          english: "What is your name?",
          native: "Te atsuɔ okɔ̃ ni?",
          pronunciation: "teh at-soo-oh oh-koh-ng nee"
          // audioUrl: "/audio/ga/te_atsuo_okɔ̃_ni.mp3"
        },
        {
          id: 6,
          english: "What is this?",
          native: "Mɛni nɛɛ?",
          pronunciation: "meh-nee neh-eh"
          // audioUrl: "/audio/ga/mɛni_nɛɛ.mp3"
        },
        {
          id: 7,
          english: "How are you?",
          native: "Te oyɔɔ?",
          pronunciation: "teh oh-yoh-oh"
          // audioUrl: "/audio/ga/te_oyɔɔ.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga question.",
          question: "How do you ask 'What is your name?' in Ga?",
          options: [
            { id: 1, text: "Te atsuɔ okɔ̃ ni?" },
            { id: 2, text: "Mɛni?" },
            { id: 3, text: "Mɛni hewɔ?" },
            { id: 4, text: "Te oyɔɔ?" }
          ],
          correctOptionId: 1,
          hints: ["okɔ̃ = name", "ni? = what"],
          explanation: "'Te atsuɔ okɔ̃ ni?' asks 'What is your name?' in Ga. 'Okɔ̃' means 'name'."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga question.",
          question: "How do you ask 'Why?' in Ga?",
          options: [
            { id: 1, text: "Mɛni?" },
            { id: 2, text: "Mɛni hewɔ?" },
            { id: 3, text: "Te oyɔɔ jɛ ni?" },
            { id: 4, text: "Te oteŋ?" }
          ],
          correctOptionId: 2,
          hints: ["Asking for a reason", "Contains 'hewɔ' (because)"],
          explanation: "'Mɛni hewɔ?' means 'Why?' in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga question.",
          question: "How do you ask 'How are you?' in Ga?",
          options: [
            { id: 1, text: "Te oyɔɔ?" },
            { id: 2, text: "Te atsuɔ okɔ̃ ni?" },
            { id: 3, text: "Mɛni nɛɛ?" },
            { id: 4, text: "Mɛni hewɔ?" }
          ],
          correctOptionId: 1,
          hints: ["Question about well-being", "Short phrase"],
          explanation: "'Te oyɔɔ?' means 'How are you?' in Ga. It asks how you're doing."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ga question to its English meaning.",
          pairs: [
            { id: 1, left: "Te atsuɔ okɔ̃ ni?", right: "What is your name?" },
            { id: 2, left: "Te oteŋ?", right: "How are you?" },
            { id: 3, left: "Mɛni hewɔ?", right: "Why?" },
            { id: 4, left: "Mɛni?", right: "What?" }
          ],
          hints: ["Te atsuɔ okɔ̃ ni? = what is your name", "Te oteŋ? = how are you", "Mɛni hewɔ? = why"],
          explanation: "These are common questions in Ga."
        }
      ]
    },

    {
      id: "10-2",
      type: "phrases",
      title: "Expressing Feelings",
      icon: "heart-outline",
      description: "Learn how to express feelings and emotions in Ga",
      words: ["Misumɔɔ bo", "Miyɛ miishɛɛ", "Miyɛ feeŋ", "Nɔ̃ɔ miɔ mii", "Mishwɛ̃ɔma", "Mineɛ", "Miyɛ naawu"],
      vocabulary: [
        {
          id: 8,
          english: "I love you",
          native: "Misumɔɔ bo",
          pronunciation: "mee-soo-moh-oh boh"
          // audioUrl: "/audio/ga/misumɔɔ_bo.mp3"
        },
        {
          id: 9,
          english: "I am happy",
          native: "Miyɛ miishɛɛ",
          pronunciation: "mee-yeh mee-sheh-eh"
          // audioUrl: "/audio/ga/miyɛ_miishɛɛ.mp3"
        },
        {
          id: 10,
          english: "I feel fine",
          native: "Miyɛ feeŋ",
          pronunciation: "mee-yeh feh-ng"
          // audioUrl: "/audio/ga/miyɛ_feeŋ.mp3"
        },
        {
          id: 11,
          english: "I am tired",
          native: "Nɔ̃ɔ miɔ mii",
          pronunciation: "noh-oh mee-oh mee"
          // audioUrl: "/audio/ga/nɔ̃ɔ_miɔ_mii.mp3"
        },
        {
          id: 12,
          english: "I am grateful",
          native: "Mishwɛ̃ɔma",
          pronunciation: "mee-shweh-oh-mah"
          // audioUrl: "/audio/ga/mishwɛ̃ɔma.mp3"
        },
        {
          id: 13,
          english: "I am (be)",
          native: "Mineɛ",
          pronunciation: "mee-neh-eh"
          // audioUrl: "/audio/ga/mineɛ.mp3"
        },
        {
          id: 14,
          english: "I have rest",
          native: "Miyɛ naawu",
          pronunciation: "mee-yeh nah-woo"
          // audioUrl: "/audio/ga/miyɛ_naawu.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I love you' in Ga?",
          options: [
            { id: 1, text: "Misumɔɔ bo" },
            { id: 2, text: "Miyɛ miishɛɛ" },
            { id: 3, text: "Miyɛ feeŋ" },
            { id: 4, text: "Nɔ̃ɔ miɔ mii" }
          ],
          correctOptionId: 1,
          hints: ["Misumɔɔ = I love", "bo = you"],
          explanation: "'Misumɔɔ bo' means 'I love you'. 'sumɔɔ' means 'love'."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am happy' in Ga?",
          options: [
            { id: 1, text: "Misumɔɔ bo" },
            { id: 2, text: "Miyɛ miishɛɛ" },
            { id: 3, text: "Miyɛ feeŋ" },
            { id: 4, text: "Nɔ̃ɔ miɔ mii" }
          ],
          correctOptionId: 2,
          hints: ["miishɛɛ = happiness"],
          explanation: "'Miyɛ miishɛɛ' means 'I am happy'. 'Miishɛɛ' means 'happiness/joy'."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am tired' in Ga?",
          options: [
            { id: 1, text: "Misumɔɔ bo" },
            { id: 2, text: "Miyɛ miishɛɛ" },
            { id: 3, text: "Miyɛ feeŋ" },
            { id: 4, text: "Nɔ̃ɔ miɔ mii" }
          ],
          correctOptionId: 4,
          hints: ["Nɔ̃ɔ = sleep/tired"],
          explanation: "'Nɔ̃ɔ miɔ mii' means 'I am tired' in Ga."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ga phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Misumɔɔ bo", right: "I love you" },
            { id: 2, left: "Miyɛ miishɛɛ", right: "I am happy" },
            { id: 3, left: "Miyɛ feeŋ", right: "I feel fine" },
            { id: 4, left: "Nɔ̃ɔ miɔ mii", right: "I am tired" }
          ],
          hints: ["Misumɔɔ bo = I love you", "Miyɛ miishɛɛ = I am happy", "Nɔ̃ɔ miɔ mii = I am tired"],
          explanation: "These are useful phrases for expressing feelings in Ga."
        },
        {
          id: 205,
          type: "listening_multiple_choice",
          instruction: "Listen to the Ga audio and select the correct English translation.",
          question: "What does this Ga phrase mean in English?",
          audioUrl: "/audio/ga/misumɔɔ_bo.mp3",
          options: [
            { id: 1, text: "I am happy" },
            { id: 2, text: "I love you" },
            { id: 3, text: "I am tired" },
            { id: 4, text: "I feel fine" }
          ],
          correctOptionId: 2,
          hints: ["Misumɔɔ = I love"],
          explanation: "You heard 'Misumɔɔ bo' which means 'I love you' in Ga."
        }
      ]
    },

    {
      id: "10-3",
      type: "simple_sentences",
      title: "Putting It Together",
      icon: "chatbox-ellipses-outline",
      description: "Connect phrases to hold a short conversation in Ga",
      words: ["Nɔmma", "Dabi", "Minu shishi", "Minuu shishi", "Taafɛ", "Ɛɛftee", "Oyiwaladɔŋ", "Mbeduma"],
      vocabulary: [
        {
          id: 15,
          english: "Yes",
          native: "Nɔmma",
          pronunciation: "noh-mmah"
          // audioUrl: "/audio/ga/nɔmma.mp3"
        },
        {
          id: 16,
          english: "No",
          native: "Dabi",
          pronunciation: "dah-bee"
          // audioUrl: "/audio/ga/dabi.mp3"
        },
        {
          id: 17,
          english: "I understand",
          native: "Minu shishi",
          pronunciation: "mee-noo shee-shee"
          // audioUrl: "/audio/ga/minu_shishi.mp3"
        },
        {
          id: 18,
          english: "I don't understand",
          native: "Minuu shishi",
          pronunciation: "mee-noo shee-shee"
          // audioUrl: "/audio/ga/minuu_shishi.mp3"
        },
        {
          id: 19,
          english: "Please",
          native: "Taafɛ",
          pronunciation: "tah-ah-feh"
          // audioUrl: "/audio/ga/taafɛ.mp3"
        },
        {
          id: 20,
          english: "Thank you",
          native: "Ɛɛftee",
          pronunciation: "eh-eh-fteh"
          // audioUrl: "/audio/ga/ɛɛftee.mp3"
        },
        {
          id: 21,
          english: "You're welcome",
          native: "Oyiwaladɔŋ",
          pronunciation: "oh-yee-wah-lah-dong"
          // audioUrl: "/audio/ga/oyiwaladong.mp3"
        },
        {
          id: 22,
          english: "Good night",
          native: "Mbeduma",
          pronunciation: "mbeh-doo-mah"
          // audioUrl: "/audio/ga/mbeduma.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I don't understand' in Ga?",
          options: [
            { id: 1, text: "Minu shishi" },
            { id: 2, text: "Minuu shishi" },
            { id: 3, text: "Taafɛ" },
            { id: 4, text: "Ɛɛftee" }
          ],
          correctOptionId: 2,
          hints: ["Negative of 'Minu shishi'", "Adds 'nuu' at the start"],
          explanation: "'Minuu shishi' means 'I don't understand'. The double vowel makes it negative."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'You're welcome' in Ga?",
          options: [
            { id: 1, text: "Oyiwaladɔŋ" },
            { id: 2, text: "Ɛɛftee" },
            { id: 3, text: "Taafɛ" },
            { id: 4, text: "Dabi" }
          ],
          correctOptionId: 1,
          hints: ["Response to 'thank you'", "Longer phrase"],
          explanation: "'Oyiwaladɔŋ' means 'You're welcome' in Ga."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Thank you' in Ga?",
          options: [
            { id: 1, text: "Oyiwaladɔŋ" },
            { id: 2, text: "Ɛɛftee" },
            { id: 3, text: "Taafɛ" },
            { id: 4, text: "Dabi" }
          ],
          correctOptionId: 2,
          hints: ["Shows gratitude", "You learned this in chapter 1"],
          explanation: "'Ɛɛftee' means 'Thank you' in Ga."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ga phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Nɔmma", right: "Yes" },
            { id: 2, left: "Dabi", right: "No" },
            { id: 3, left: "Minu shishi", right: "I understand" },
            { id: 4, left: "Minuu shishi", right: "I don't understand" },
            { id: 5, left: "Ɛɛftee", right: "Thank you" }
          ],
          hints: ["Nɔmma = yes", "Dabi = no", "Ɛɛftee = thank you"],
          explanation: "These are essential phrases for basic conversations in Ga."
        },
        {
          id: 305,
          type: "listening_matching",
          instruction: "Listen to each Ga phrase and match it to its English meaning.",
          question: "Match each phrase you hear to its meaning.",
          pairs: [
            { id: "p1", native: "Minu shishi", audioUrl: "/audio/ga/minu_shishi.mp3", correctOptionId: "opt1" },
            { id: "p2", native: "Minuu shishi", audioUrl: "/audio/ga/minuu_shishi.mp3", correctOptionId: "opt2" }
          ],
          options: [
            { id: "opt1", text: "I understand" },
            { id: "opt2", text: "I don't understand" }
          ],
          correctDrops: [
            { pairId: "p1", optionId: "opt1" },
            { pairId: "p2", optionId: "opt2" }
          ],
          hints: ["Minu shishi = I understand", "Dabi = no"],
          explanation: "These are useful phrases for clarifying in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-10",
    title: "Review: Basic Conversations",
    icon: "refresh-outline",
    description: "Review the questions, feelings, and phrases you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ga question.",
        question: "How do you ask 'Why?' in Ga?",
        options: [
          { id: 1, text: "Mɛni hewɔ?" },
          { id: 2, text: "Mɛni?" },
          { id: 3, text: "Mɛni nɛɛ?" },
          { id: 4, text: "Te oteŋ?" }
        ],
        correctOptionId: 1,
        hints: ["Asking for a reason"],
        explanation: "'Mɛni hewɔ?' means 'Why?' in Ga."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I love you' in Ga?",
        options: [
          { id: 1, text: "Misumɔɔ bo" },
          { id: 2, text: "Miyɛ miishɛɛ" },
          { id: 3, text: "Miyɛ feeŋ" },
          { id: 4, text: "Nɔ̃ɔ miɔ mii" }
        ],
        correctOptionId: 1,
        hints: ["Misumɔɔ = I love"],
        explanation: "'Misumɔɔ bo' means 'I love you' in Ga."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am happy' in Ga?",
        options: [
          { id: 1, text: "Misumɔɔ bo" },
          { id: 2, text: "Miyɛ miishɛɛ" },
          { id: 3, text: "Miyɛ feeŋ" },
          { id: 4, text: "Nɔ̃ɔ miɔ mii" }
        ],
        correctOptionId: 2,
        hints: ["miishɛɛ = happiness"],
        explanation: "'Miyɛ miishɛɛ' means 'I am happy' in Ga."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I don't understand' in Ga?",
        options: [
          { id: 1, text: "Minu shishi" },
          { id: 2, text: "Minuu shishi" },
          { id: 3, text: "Taafɛ" },
          { id: 4, text: "Ɛɛftee" }
        ],
        correctOptionId: 2,
        hints: ["Negative form"],
        explanation: "'Minuu shishi' means 'I don't understand' in Ga."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ga phrase to its English meaning.",
        pairs: [
          { id: 1, left: "Te atsuɔ okɔ̃ ni?", right: "What is your name?" },
          { id: 2, left: "Misumɔɔ bo", right: "I love you" },
          { id: 3, left: "Minu shishi", right: "I understand" },
          { id: 4, left: "Ɛɛftee", right: "Thank you" },
          { id: 5, left: "Dabi", right: "No" }
        ],
        hints: ["Te atsuɔ okɔ̃ ni? = what is your name", "Misumɔɔ bo = I love you", "Ɛɛftee = thank you"],
        explanation: "These are key phrases from this chapter."
      }
    ]
  }
};
