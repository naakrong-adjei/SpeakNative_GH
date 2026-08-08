// data/course_content/ewe/beginner/chapter10.js
export default {
  id: 10,
  title: "Basic Conversations",
  description: "Learn essential Ewe phrases to hold basic everyday conversations",
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
      words: ["Aleke?", "Aleke wòle?", "Nukata?", "Afika wòle?", "Ɖeke nye wò ŋkɔ?", "Èfɔa?", "Efɔa?", "Nue nye esia?"],
      vocabulary: [
        {
          id: 1,
          english: "How? / What?",
          native: "Aleke?",
          pronunciation: "ah-leh-keh"
          // audioUrl: "/audio/ewe/aleke.mp3"
        },
        {
          id: 2,
          english: "How is it?",
          native: "Aleke wòle?",
          pronunciation: "ah-leh-keh woh-leh"
          // audioUrl: "/audio/ewe/aleke_wòle.mp3"
        },
        {
          id: 3,
          english: "Why?",
          native: "Nukata?",
          pronunciation: "noo-kah-tah"
          // audioUrl: "/audio/ewe/nukata.mp3"
        },
        {
          id: 4,
          english: "Where is it?",
          native: "Afika wòle?",
          pronunciation: "ah-fee-kah woh-leh"
          // audioUrl: "/audio/ewe/afika_wòle.mp3"
        },
        {
          id: 5,
          english: "What is your name?",
          native: "Ɖeke nye wò ŋkɔ?",
          pronunciation: "deh-keh nyeh woh ng-koh"
          // audioUrl: "/audio/ewe/ɉeke_nye_wò_ŋkɔ.mp3"
        },
        {
          id: 6,
          english: "Do you speak Ewe?",
          native: "Èfɔa?",
          pronunciation: "eh-foh-ah"
          // audioUrl: "/audio/ewe/èfɔa.mp3"
        },
        {
          id: 7,
          english: "How are you?",
          native: "Efɔa?",
          pronunciation: "eh-foh-ah"
          // audioUrl: "/audio/ewe/efɔa.mp3"
        },
        {
          id: 8,
          english: "What is this?",
          native: "Nue nye esia?",
          pronunciation: "noo-eh nyeh eh-see-ah"
          // audioUrl: "/audio/ewe/nue_nye_esia.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe question.",
          question: "How do you ask 'What is your name?' in Ewe?",
          options: [
            { id: 1, text: "Ɖeke nye wò ŋkɔ?" },
            { id: 2, text: "Efɔa?" },
            { id: 3, text: "Nukata?" },
            { id: 4, text: "Aleke?" }
          ],
          correctOptionId: 1,
          hints: ["ŋkɔ = name", "nye = is"],
          explanation: "'Ɖeke nye wò ŋkɔ?' asks 'What is your name?' in Ewe. 'ŋkɔ' means 'name'."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe question.",
          question: "How do you ask 'Why?' in Ewe?",
          options: [
            { id: 1, text: "Nukata?" },
            { id: 2, text: "Afika wòle?" },
            { id: 3, text: "Nue nye esia?" },
            { id: 4, text: "Efɔa?" }
          ],
          correctOptionId: 1,
          hints: ["Asking for a reason", "Contains 'nu' (thing)"],
          explanation: "'Nukata?' means 'Why?' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe question.",
          question: "How do you ask 'How are you?' in Ewe?",
          options: [
            { id: 1, text: "Efɔa?" },
            { id: 2, text: "Ɖeke nye wò ŋkɔ?" },
            { id: 3, text: "Nue nye esia?" },
            { id: 4, text: "Nukata?" }
          ],
          correctOptionId: 1,
          hints: ["Question about well-being", "Short phrase"],
          explanation: "'Efɔa?' means 'How are you?' in Ewe. It asks how you're doing."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe question to its English meaning.",
          pairs: [
            { id: 1, left: "Ɖeke nye wò ŋkɔ?", right: "What is your name?" },
            { id: 2, left: "Efɔa?", right: "How are you?" },
            { id: 3, left: "Nukata?", right: "Why?" },
            { id: 4, left: "Aleke?", right: "How? / What?" }
          ],
          hints: ["Ɖeke nye wò ŋkɔ? = what is your name", "Efɔa? = how are you", "Nukata? = why"],
          explanation: "These are common questions in Ewe."
        }
      ]
    },

    {
      id: "10-2",
      type: "phrases",
      title: "Expressing Feelings",
      icon: "heart-outline",
      description: "Learn how to express feelings and emotions in Ewe",
      words: ["Melɔ̃ wò", "Mekpɔa dzidzɔ", "Melɔ̃a", "Mele klalo", "Mekpɔa akpedada", "Manɔ", "Nye ŋkuwo", "Menyee"],
      vocabulary: [
        {
          id: 9,
          english: "I love you",
          native: "Melɔ̃ wò",
          pronunciation: "meh-loh woh"
          // audioUrl: "/audio/ewe/melɔ̃_wò.mp3"
        },
        {
          id: 10,
          english: "I am happy",
          native: "Mekpɔa dzidzɔ",
          pronunciation: "meh-kpoh-ah jee-joh"
          // audioUrl: "/audio/ewe/mekpɔa_dzidzɔ.mp3"
        },
        {
          id: 11,
          english: "I feel fine",
          native: "Melɔ̃a",
          pronunciation: "meh-loh-ah"
          // audioUrl: "/audio/ewe/melɔ̃a.mp3"
        },
        {
          id: 12,
          english: "I am tired",
          native: "Mele klalo",
          pronunciation: "meh-leh klah-loh"
          // audioUrl: "/audio/ewe/mele_klalo.mp3"
        },
        {
          id: 13,
          english: "I am grateful",
          native: "Mekpɔa akpedada",
          pronunciation: "meh-kpoh-ah ah-kpeh-dah-dah"
          // audioUrl: "/audio/ewe/mekpɔa_akpedada.mp3"
        },
        {
          id: 14,
          english: "I will / I can",
          native: "Manɔ",
          pronunciation: "mah-noh"
          // audioUrl: "/audio/ewe/manɔ.mp3"
        },
        {
          id: 15,
          english: "My eyes / my face",
          native: "Nye ŋkuwo",
          pronunciation: "nyeh ng-koo-woh"
          // audioUrl: "/audio/ewe/nye_ŋkuwo.mp3"
        },
        {
          id: 16,
          english: "I am (be)",
          native: "Menyee",
          pronunciation: "meh-nyeh-eh"
          // audioUrl: "/audio/ewe/menyee.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I love you' in Ewe?",
          options: [
            { id: 1, text: "Melɔ̃ wò" },
            { id: 2, text: "Mekpɔa dzidzɔ" },
            { id: 3, text: "Melɔ̃a" },
            { id: 4, text: "Mele klalo" }
          ],
          correctOptionId: 1,
          hints: ["Melɔ̃ = I love", "wò = you"],
          explanation: "'Melɔ̃ wò' means 'I love you'. 'lɔ̃' means 'love'."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am happy' in Ewe?",
          options: [
            { id: 1, text: "Melɔ̃ wò" },
            { id: 2, text: "Mekpɔa dzidzɔ" },
            { id: 3, text: "Melɔ̃a" },
            { id: 4, text: "Mele klalo" }
          ],
          correctOptionId: 2,
          hints: ["dzidzɔ = happiness"],
          explanation: "'Mekpɔa dzidzɔ' means 'I am happy'. 'dzidzɔ' means 'happiness/joy'."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am tired' in Ewe?",
          options: [
            { id: 1, text: "Melɔ̃ wò" },
            { id: 2, text: "Mekpɔa dzidzɔ" },
            { id: 3, text: "Melɔ̃a" },
            { id: 4, text: "Mele klalo" }
          ],
          correctOptionId: 4,
          hints: ["klalo = tired"],
          explanation: "'Mele klalo' means 'I am tired' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Melɔ̃ wò", right: "I love you" },
            { id: 2, left: "Mekpɔa dzidzɔ", right: "I am happy" },
            { id: 3, left: "Melɔ̃a", right: "I feel fine" },
            { id: 4, left: "Mele klalo", right: "I am tired" }
          ],
          hints: ["Melɔ̃ wò = I love you", "Mekpɔa dzidzɔ = I am happy", "Mele klalo = I am tired"],
          explanation: "These are useful phrases for expressing feelings in Ewe."
        }
      ]
    },

    {
      id: "10-3",
      type: "simple_sentences",
      title: "Putting It Together",
      icon: "chatbox-ellipses-outline",
      description: "Connect phrases to hold a short conversation in Ewe",
      words: ["Ɛ̃", "Ao", "Mese egɔme", "Nyemese egɔme", "Taflatse", "Akpe", "Wòe zɔ", "Dɔ agbe nyuie"],
      vocabulary: [
        {
          id: 17,
          english: "Yes",
          native: "Ɛ̃",
          pronunciation: "eh"
          // audioUrl: "/audio/ewe/ɛ̃.mp3"
        },
        {
          id: 18,
          english: "No",
          native: "Ao",
          pronunciation: "ah-oh"
          // audioUrl: "/audio/ewe/ao.mp3"
        },
        {
          id: 19,
          english: "I understand",
          native: "Mese egɔme",
          pronunciation: "meh-seh eh-goh-meh"
          // audioUrl: "/audio/ewe/mese_egɔme.mp3"
        },
        {
          id: 20,
          english: "I don't understand",
          native: "Nyemese egɔme",
          pronunciation: "nyeh-meh-seh eh-goh-meh"
          // audioUrl: "/audio/ewe/nyemese_egɔme.mp3"
        },
        {
          id: 21,
          english: "Please",
          native: "Taflatse",
          pronunciation: "ta-flat-seh"
          // audioUrl: "/audio/ewe/taflatse.mp3"
        },
        {
          id: 22,
          english: "Thank you",
          native: "Akpe",
          pronunciation: "ah-kpeh"
          // audioUrl: "/audio/ewe/akpe.mp3"
        },
        {
          id: 23,
          english: "You're welcome",
          native: "Wòe zɔ",
          pronunciation: "woh-eh zoh"
          // audioUrl: "/audio/ewe/wòe_zɔ.mp3"
        },
        {
          id: 24,
          english: "Good night",
          native: "Dɔ agbe nyuie",
          pronunciation: "doh ah-gbeh nyoo-ee-eh"
          // audioUrl: "/audio/ewe/dɔ_agbe_nyuie.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I don't understand' in Ewe?",
          options: [
            { id: 1, text: "Mese egɔme" },
            { id: 2, text: "Nyemese egɔme" },
            { id: 3, text: "Taflatse" },
            { id: 4, text: "Akpe" }
          ],
          correctOptionId: 2,
          hints: ["Negative of 'Mese egɔme'", "Adds 'Nye' at the start"],
          explanation: "'Nyemese egɔme' means 'I don't understand'. The 'Nye' makes it negative."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'You're welcome' in Ewe?",
          options: [
            { id: 1, text: "Wòe zɔ" },
            { id: 2, text: "Akpe" },
            { id: 3, text: "Taflatse" },
            { id: 4, text: "Ao" }
          ],
          correctOptionId: 1,
          hints: ["Response to 'thank you'", "Short phrase"],
          explanation: "'Wòe zɔ' means 'You're welcome' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Thank you' in Ewe?",
          options: [
            { id: 1, text: "Wòe zɔ" },
            { id: 2, text: "Akpe" },
            { id: 3, text: "Taflatse" },
            { id: 4, text: "Ao" }
          ],
          correctOptionId: 2,
          hints: ["Shows gratitude", "You learned this in chapter 1"],
          explanation: "'Akpe' means 'Thank you' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Ɛ̃", right: "Yes" },
            { id: 2, left: "Ao", right: "No" },
            { id: 3, left: "Mese egɔme", right: "I understand" },
            { id: 4, left: "Nyemese egɔme", right: "I don't understand" },
            { id: 5, left: "Akpe", right: "Thank you" }
          ],
          hints: ["Ɛ̃ = yes", "Ao = no", "Akpe = thank you"],
          explanation: "These are essential phrases for basic conversations in Ewe."
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
        instruction: "Select the correct Ewe question.",
        question: "How do you ask 'Why?' in Ewe?",
        options: [
          { id: 1, text: "Nukata?" },
          { id: 2, text: "Afika wòle?" },
          { id: 3, text: "Nue nye esia?" },
          { id: 4, text: "Efɔa?" }
        ],
        correctOptionId: 1,
        hints: ["Asking for a reason"],
        explanation: "'Nukata?' means 'Why?' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I love you' in Ewe?",
        options: [
          { id: 1, text: "Melɔ̃ wò" },
          { id: 2, text: "Mekpɔa dzidzɔ" },
          { id: 3, text: "Melɔ̃a" },
          { id: 4, text: "Mele klalo" }
        ],
        correctOptionId: 1,
        hints: ["Melɔ̃ = I love"],
        explanation: "'Melɔ̃ wò' means 'I love you' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am happy' in Ewe?",
        options: [
          { id: 1, text: "Melɔ̃ wò" },
          { id: 2, text: "Mekpɔa dzidzɔ" },
          { id: 3, text: "Melɔ̃a" },
          { id: 4, text: "Mele klalo" }
        ],
        correctOptionId: 2,
        hints: ["dzidzɔ = happiness"],
        explanation: "'Mekpɔa dzidzɔ' means 'I am happy' in Ewe."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I don't understand' in Ewe?",
        options: [
          { id: 1, text: "Mese egɔme" },
          { id: 2, text: "Nyemese egɔme" },
          { id: 3, text: "Taflatse" },
          { id: 4, text: "Akpe" }
        ],
        correctOptionId: 2,
        hints: ["Negative form"],
        explanation: "'Nyemese egɔme' means 'I don't understand' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe phrase to its English meaning.",
        pairs: [
          { id: 1, left: "Ɖeke nye wò ŋkɔ?", right: "What is your name?" },
          { id: 2, left: "Melɔ̃ wò", right: "I love you" },
          { id: 3, left: "Mese egɔme", right: "I understand" },
          { id: 4, left: "Akpe", right: "Thank you" },
          { id: 5, left: "Ao", right: "No" }
        ],
        hints: ["Ɖeke nye wò ŋkɔ? = what is your name", "Melɔ̃ wò = I love you", "Akpe = thank you"],
        explanation: "These are key phrases from this chapter."
      }
    ]
  }
};
