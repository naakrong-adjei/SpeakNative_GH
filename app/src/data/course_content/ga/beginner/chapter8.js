// data/course_content/ga/beginner/chapter8.js
export default {
  id: 8,
  title: "Daily Activities",
  description: "Learn words and phrases for daily activities and routines in Ga",
  icon: "sunny-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "8-1",
      type: "words",
      title: "Daily Actions",
      icon: "sunny-outline",
      description: "Learn common daily actions in Ga",
      words: ["Je", "Nii miɛ", "Nuu ye", "Hala", "Nɔ̃ɔ", "Tsu"],
      vocabulary: [
        {
          id: 1,
          english: "Wake up",
          native: "Je",
          pronunciation: "jeh"
          // audioUrl: "/audio/ga/je.mp3"
        },
        {
          id: 2,
          english: "Eat",
          native: "Nii miɛ",
          pronunciation: "nee mee-eh"
          // audioUrl: "/audio/ga/nii_miɛ.mp3"
        },
        {
          id: 3,
          english: "Drink",
          native: "Nuu ye",
          pronunciation: "noo yeh"
          // audioUrl: "/audio/ga/nuu_ye.mp3"
        },
        {
          id: 4,
          english: "Walk",
          native: "Hala",
          pronunciation: "hah-lah"
          // audioUrl: "/audio/ga/hala.mp3"
        },
        {
          id: 5,
          english: "Sleep",
          native: "Nɔ̃ɔ",
          pronunciation: "noh-oh"
          // audioUrl: "/audio/ga/nɔ̃ɔ.mp3"
        },
        {
          id: 6,
          english: "Work",
          native: "Tsu",
          pronunciation: "tsu"
          // audioUrl: "/audio/ga/tsu.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Wake up' in Ga?",
          options: [
            { id: 1, text: "Je" },
            { id: 2, text: "Hala" },
            { id: 3, text: "Nɔ̃ɔ" },
            { id: 4, text: "Tsu" }
          ],
          correctOptionId: 1,
          hints: ["What you do in the morning"],
          explanation: "'Je' means 'Wake up' in Ga."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Eat' in Ga?",
          options: [
            { id: 1, text: "Nii miɛ" },
            { id: 2, text: "Nuu ye" },
            { id: 3, text: "Nɔ̃ɔ" },
            { id: 4, text: "Tsu" }
          ],
          correctOptionId: 1,
          hints: ["You do this with food"],
          explanation: "'Nii miɛ' means 'Eat' in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "How do you say 'Sleep' in Ga?",
          options: [
            { id: 1, text: "Je" },
            { id: 2, text: "Hala" },
            { id: 3, text: "Nɔ̃ɔ" },
            { id: 4, text: "Tsu" }
          ],
          correctOptionId: 3,
          hints: ["You do this at night"],
          explanation: "'Nɔ̃ɔ' means 'Sleep' in Ga."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ga word to its English meaning.",
          pairs: [
            { id: 1, left: "Je", right: "Wake up" },
            { id: 2, left: "Hala", right: "Walk" },
            { id: 3, left: "Nɔ̃ɔ", right: "Sleep" },
            { id: 4, left: "Tsu", right: "Work" }
          ],
          hints: ["Je = wake up", "Hala = walk", "Nɔ̃ɔ = sleep"],
          explanation: "These are common daily actions in Ga."
        }
      ]
    },

    {
      id: "8-2",
      type: "phrases",
      title: "Daily Routine",
      icon: "time-outline",
      description: "Learn phrases to describe your daily routine in Ga",
      words: ["Miye gbɔkɛ", "Mitsaamo", "Mitsɔɔ", "Miye nii"],
      vocabulary: [
        {
          id: 7,
          english: "I wake up in the morning",
          native: "Miye gbɔkɛ",
          pronunciation: "mee-yeh gbo-keh"
          // audioUrl: "/audio/ga/miye_gbɔkɛ.mp3"
        },
        {
          id: 8,
          english: "I bathe",
          native: "Mitsaamo",
          pronunciation: "mee-tsah-moh"
          // audioUrl: "/audio/ga/mitsaamo.mp3"
        },
        {
          id: 9,
          english: "I dress",
          native: "Mitsɔɔ",
          pronunciation: "mee-tshoh-oh"
          // audioUrl: "/audio/ga/mitsɔɔ.mp3"
        },
        {
          id: 10,
          english: "I eat",
          native: "Miye nii",
          pronunciation: "mee-yeh nee"
          // audioUrl: "/audio/ga/miye_nii.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I wake up in the morning' in Ga?",
          options: [
            { id: 1, text: "Miye gbɔkɛ" },
            { id: 2, text: "Mitsaamo" },
            { id: 3, text: "Mitsɔɔ" },
            { id: 4, text: "Miye nii" }
          ],
          correctOptionId: 1,
          hints: ["gbɔkɛ = morning", "Miye = I wake"],
          explanation: "'Miye gbɔkɛ' means 'I wake up in the morning' in Ga."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I bathe' in Ga?",
          options: [
            { id: 1, text: "Miye gbɔkɛ" },
            { id: 2, text: "Mitsaamo" },
            { id: 3, text: "Mitsɔɔ" },
            { id: 4, text: "Miye nii" }
          ],
          correctOptionId: 2,
          hints: ["Mi = I", "tsaamo = bathe"],
          explanation: "'Mitsaamo' means 'I bathe' in Ga."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I eat' in Ga?",
          options: [
            { id: 1, text: "Miye gbɔkɛ" },
            { id: 2, text: "Mitsaamo" },
            { id: 3, text: "Mitsɔɔ" },
            { id: 4, text: "Miye nii" }
          ],
          correctOptionId: 4,
          hints: ["nii = food", "Miye = I eat"],
          explanation: "'Miye nii' means 'I eat' in Ga."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ga phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Miye gbɔkɛ", right: "I wake up in the morning" },
            { id: 2, left: "Mitsaamo", right: "I bathe" },
            { id: 3, left: "Mitsɔɔ", right: "I dress" },
            { id: 4, left: "Miye nii", right: "I eat" }
          ],
          hints: ["gbɔkɛ = morning", "tsaamo = bathe", "nii = food"],
          explanation: "These are phrases for your daily routine in Ga."
        },
        {
          id: 205,
          type: "listening_multiple_choice",
          instruction: "Listen to the Ga audio and select the correct English translation.",
          question: "What does this Ga phrase mean in English?",
          audioUrl: "/audio/ga/mitsaamo.mp3",
          options: [
            { id: 1, text: "I wake up" },
            { id: 2, text: "I bathe" },
            { id: 3, text: "I dress" },
            { id: 4, text: "I eat" }
          ],
          correctOptionId: 2,
          hints: ["tsaamo = bathe"],
          explanation: "You heard 'Mitsaamo' which means 'I bathe' in Ga."
        }
      ]
    },

    {
      id: "8-3",
      type: "simple_sentences",
      title: "At Home",
      icon: "home-outline",
      description: "Learn phrases for activities done at home in Ga",
      words: ["Miye shia", "Mibwaa", "Mihiɛ", "Miyo naawu"],
      vocabulary: [
        {
          id: 11,
          english: "I am at home",
          native: "Miye shia",
          pronunciation: "mee-yeh shee-ah"
          // audioUrl: "/audio/ga/miye_shia.mp3"
        },
        {
          id: 12,
          english: "I cook",
          native: "Mibwaa",
          pronunciation: "mee-bwah"
          // audioUrl: "/audio/ga/mibwaa.mp3"
        },
        {
          id: 13,
          english: "I clean",
          native: "Mihiɛ",
          pronunciation: "mee-hee-eh"
          // audioUrl: "/audio/ga/mihiɛ.mp3"
        },
        {
          id: 14,
          english: "I rest",
          native: "Miyo naawu",
          pronunciation: "mee-yoh nah-woo"
          // audioUrl: "/audio/ga/miyo_naawu.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I am at home' in Ga?",
          options: [
            { id: 1, text: "Miye shia" },
            { id: 2, text: "Mibwaa" },
            { id: 3, text: "Mihiɛ" },
            { id: 4, text: "Miyo naawu" }
          ],
          correctOptionId: 1,
          hints: ["shia = home", "Miye = I am"],
          explanation: "'Miye shia' means 'I am at home' in Ga."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I cook' in Ga?",
          options: [
            { id: 1, text: "Miye shia" },
            { id: 2, text: "Mibwaa" },
            { id: 3, text: "Mihiɛ" },
            { id: 4, text: "Miyo naawu" }
          ],
          correctOptionId: 2,
          hints: ["You do this with food"],
          explanation: "'Mibwaa' means 'I cook' in Ga."
        },
        {
          id: 303,
          type: "drag_drop",
          instruction: "Complete the phrase 'I rest' by dragging the correct word.",
          sentence: "Miyo [_____]",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "naawu", meaning: "rest" },
            { id: "opt2", text: "nii", meaning: "food" },
            { id: "opt3", text: "shia", meaning: "home" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Means 'rest'", "Follows 'Miyo'"],
          explanation: "Miyo naawu = I rest. 'Naawu' means 'rest'."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Daily Activities",
    icon: "refresh-outline",
    description: "Review the daily activity words and phrases you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "How do you say 'Wake up' in Ga?",
        options: [
          { id: 1, text: "Je" },
          { id: 2, text: "Hala" },
          { id: 3, text: "Nɔ̃ɔ" },
          { id: 4, text: "Tsu" }
        ],
        correctOptionId: 1,
        hints: ["What you do in the morning"],
        explanation: "Je = Wake up."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "How do you say 'Sleep' in Ga?",
        options: [
          { id: 1, text: "Je" },
          { id: 2, text: "Hala" },
          { id: 3, text: "Nɔ̃ɔ" },
          { id: 4, text: "Tsu" }
        ],
        correctOptionId: 3,
        hints: ["You do this at night"],
        explanation: "Nɔ̃ɔ = Sleep."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I cook' in Ga?",
        options: [
          { id: 1, text: "Miye shia" },
          { id: 2, text: "Mibwaa" },
          { id: 3, text: "Mihiɛ" },
          { id: 4, text: "Miyo naawu" }
        ],
        correctOptionId: 2,
        hints: ["You do this with food"],
        explanation: "Mibwaa = I cook."
      },
      {
        id: 404,
        type: "matching",
        instruction: "Match each Ga word to its English meaning.",
        pairs: [
          { id: 1, left: "Je", right: "Wake up" },
          { id: 2, left: "Hala", right: "Walk" },
          { id: 3, left: "Nɔ̃ɔ", right: "Sleep" },
          { id: 4, left: "Tsu", right: "Work" }
        ],
        hints: ["Je = wake up", "Hala = walk"],
        explanation: "These are key daily activity words from this chapter."
      }
    ]
  }
};
