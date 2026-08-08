// data/course_content/ewe/intermediate/chapter2.js
export default {
  id: 2,
  title: "Health & Body",
  description: "Learn to talk about your body, health, and visiting the doctor in Ewe",
  icon: "medkit-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "2-1",
      type: "vocabulary",
      title: "Body Parts",
      icon: "body-outline",
      description: "Learn the Ewe names for parts of the body",
      words: ["Ta", "Nku", "To", "Nu", "Abɔ", "Afɔ", "Dzi", "Axɔ"],
      vocabulary: [
        {
          id: 1,
          english: "Head",
          native: "Ta",
          pronunciation: "tah"
          // audioUrl: "/audio/ewe/ta.mp3"
        },
        {
          id: 2,
          english: "Eye",
          native: "Nku",
          pronunciation: "ng-koo"
          // audioUrl: "/audio/ewe/nku.mp3"
        },
        {
          id: 3,
          english: "Ear",
          native: "To",
          pronunciation: "toh"
          // audioUrl: "/audio/ewe/to.mp3"
        },
        {
          id: 4,
          english: "Mouth",
          native: "Nu",
          pronunciation: "noo"
          // audioUrl: "/audio/ewe/nu.mp3"
        },
        {
          id: 5,
          english: "Arm / Hand",
          native: "Abɔ",
          pronunciation: "ah-boh"
          // audioUrl: "/audio/ewe/abɔ.mp3"
        },
        {
          id: 6,
          english: "Leg / Foot",
          native: "Afɔ",
          pronunciation: "ah-foh"
          // audioUrl: "/audio/ewe/afɔ.mp3"
        },
        {
          id: 7,
          english: "Heart",
          native: "Dzi",
          pronunciation: "jee"
          // audioUrl: "/audio/ewe/dzi.mp3"
        },
        {
          id: 8,
          english: "Stomach / Belly",
          native: "Axɔ",
          pronunciation: "ah-hoh"
          // audioUrl: "/audio/ewe/axɔ.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Head' in Ewe?",
          options: [
            { id: 1, text: "Ta" },
            { id: 2, text: "Nku" },
            { id: 3, text: "To" },
            { id: 4, text: "Nu" }
          ],
          correctOptionId: 1,
          hints: ["Top of the body", "Short word"],
          explanation: "'Ta' means 'Head' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Heart' in Ewe?",
          options: [
            { id: 1, text: "Dzi" },
            { id: 2, text: "Axɔ" },
            { id: 3, text: "Abɔ" },
            { id: 4, text: "Afɔ" }
          ],
          correctOptionId: 1,
          hints: ["The organ that pumps blood", "Short word"],
          explanation: "'Dzi' means 'Heart' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Eye' in Ewe?",
          options: [
            { id: 1, text: "Nku" },
            { id: 2, text: "To" },
            { id: 3, text: "Nu" },
            { id: 4, text: "Ta" }
          ],
          correctOptionId: 1,
          hints: ["What you see with", "Starts with 'Nk'"],
          explanation: "'Nku' means 'Eye' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe body part to its English meaning.",
          pairs: [
            { id: 1, left: "Ta", right: "Head" },
            { id: 2, left: "Nku", right: "Eye" },
            { id: 3, left: "Abɔ", right: "Arm / Hand" },
            { id: 4, left: "Afɔ", right: "Leg / Foot" }
          ],
          hints: ["Ta = head", "Nku = eye", "Abɔ = arm"],
          explanation: "These are common body parts in Ewe."
        }
      ]
    },

    {
      id: "2-2",
      type: "useful_phrases",
      title: "Common Ailments",
      icon: "fitness-outline",
      description: "Learn Ewe words for common health problems",
      words: ["Dɔ lém", "Ta dɔ", "Axɔ dɔ", "Ame vea", "Dɔdɔ", "Aɖuɖu", "Dɔvɔnɔ", "Kpɔ"],
      vocabulary: [
        {
          id: 9,
          english: "To be sick",
          native: "Dɔ lém",
          pronunciation: "doh lehm"
          // audioUrl: "/audio/ewe/dɔ_lém.mp3"
        },
        {
          id: 10,
          english: "Headache",
          native: "Ta dɔ",
          pronunciation: "tah doh"
          // audioUrl: "/audio/ewe/ta_dɔ.mp3"
        },
        {
          id: 11,
          english: "Stomach ache",
          native: "Axɔ dɔ",
          pronunciation: "ah-hoh doh"
          // audioUrl: "/audio/ewe/axɔ_dɔ.mp3"
        },
        {
          id: 12,
          english: "To be in pain",
          native: "Ame vea",
          pronunciation: "ah-meh veh-ah"
          // audioUrl: "/audio/ewe/ame_vea.mp3"
        },
        {
          id: 13,
          english: "Fever",
          native: "Dɔdɔ",
          pronunciation: "doh-doh"
          // audioUrl: "/audio/ewe/dɔdɔ.mp3"
        },
        {
          id: 14,
          english: "Cough",
          native: "Aɖuɖu",
          pronunciation: "ah-doo-doo"
          // audioUrl: "/audio/ewe/aɖuɖu.mp3"
        },
        {
          id: 15,
          english: "To be tired / weak",
          native: "Dɔvɔnɔ",
          pronunciation: "doh-voh-noh"
          // audioUrl: "/audio/ewe/dɔvɔnɔ.mp3"
        },
        {
          id: 16,
          english: "To be well / healthy",
          native: "Kpɔ",
          pronunciation: "kpoh"
          // audioUrl: "/audio/ewe/kpɔ.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Headache' in Ewe?",
          options: [
            { id: 1, text: "Ta dɔ" },
            { id: 2, text: "Axɔ dɔ" },
            { id: 3, text: "Dɔdɔ" },
            { id: 4, text: "Aɖuɖu" }
          ],
          correctOptionId: 1,
          hints: ["Pain in the head", "Contains 'ta' (head)"],
          explanation: "'Ta dɔ' means 'Headache' in Ewe. 'Ta' means 'head'."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Fever' in Ewe?",
          options: [
            { id: 1, text: "Dɔdɔ" },
            { id: 2, text: "Aɖuɖu" },
            { id: 3, text: "Ta dɔ" },
            { id: 4, text: "Dɔvɔnɔ" }
          ],
          correctOptionId: 1,
          hints: ["High body temperature", "Repeated sound"],
          explanation: "'Dɔdɔ' means 'Fever' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'To be sick' in Ewe?",
          options: [
            { id: 1, text: "Dɔ lém" },
            { id: 2, text: "Ame vea" },
            { id: 3, text: "Kpɔ" },
            { id: 4, text: "Dɔdɔ" }
          ],
          correctOptionId: 1,
          hints: ["Literally 'sickness is holding me'", "Contains 'dɔ' (sickness)"],
          explanation: "'Dɔ lém' means 'To be sick'. 'dɔ' means 'sickness'."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe ailment to its English meaning.",
          pairs: [
            { id: 1, left: "Ta dɔ", right: "Headache" },
            { id: 2, left: "Axɔ dɔ", right: "Stomach ache" },
            { id: 3, left: "Dɔdɔ", right: "Fever" },
            { id: 4, left: "Aɖuɖu", right: "Cough" }
          ],
          hints: ["Ta dɔ = headache", "Axɔ dɔ = stomach ache", "Dɔdɔ = fever"],
          explanation: "These are common ailments in Ewe."
        }
      ]
    },

    {
      id: "2-3",
      type: "complete_sentences",
      title: "At the Doctor",
      icon: "medkit-outline",
      description: "Learn phrases for visiting the doctor in Ewe",
      words: ["Ɖɔkta", "Kɔdzi", "Ɖɔkta aɖakɛ", "Nyemelɔ̃a", "Ɖoɖo", "Mawu aɖu some", "Kpɔ nye", "Dɔ le yiyi"],
      vocabulary: [
        {
          id: 17,
          english: "Doctor",
          native: "Ɖɔkta",
          pronunciation: "doh-koh-tah"
          // audioUrl: "/audio/ewe/ɉɔkta.mp3"
        },
        {
          id: 18,
          english: "Hospital / Clinic",
          native: "Kɔdzi",
          pronunciation: "koh-jee"
          // audioUrl: "/audio/ewe/kɔdzi.mp3"
        },
        {
          id: 19,
          english: "Nurse",
          native: "Ɖɔkta aɖakɛ",
          pronunciation: "doh-koh-tah ah-dah-keh"
          // audioUrl: "/audio/ewe/ɉɔkta_aɖakɛ.mp3"
        },
        {
          id: 20,
          english: "I am not feeling well",
          native: "Nyemelɔ̃a",
          pronunciation: "nyeh-meh-loh-ah"
          // audioUrl: "/audio/ewe/nyemelɔ̃a.mp3"
        },
        {
          id: 21,
          english: "Medicine",
          native: "Ɖoɖo",
          pronunciation: "doh-doh"
          // audioUrl: "/audio/ewe/ɉoɖo.mp3"
        },
        {
          id: 22,
          english: "I need help",
          native: "Mawu aɖu some",
          pronunciation: "mah-woo ah-doo soh-meh"
          // audioUrl: "/audio/ewe/mawu_aɖu_some.mp3"
        },
        {
          id: 23,
          english: "To examine / check",
          native: "Kpɔ",
          pronunciation: "kpoh"
          // audioUrl: "/audio/ewe/kpɔ.mp3"
        },
        {
          id: 24,
          english: "To recover / heal",
          native: "Dɔ le yiyi",
          pronunciation: "doh leh yee-yee"
          // audioUrl: "/audio/ewe/dɔ_le_yiyi.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am not feeling well' in Ewe?",
          options: [
            { id: 1, text: "Nyemelɔ̃a" },
            { id: 2, text: "Mawu aɖu some" },
            { id: 3, text: "Dɔ le yiyi" },
            { id: 4, text: "Kpɔ" }
          ],
          correctOptionId: 1,
          hints: ["Negative of feeling well", "Starts with 'Nye'"],
          explanation: "'Nyemelɔ̃a' means 'I am not feeling well' in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I need help' in Ewe?",
          options: [
            { id: 1, text: "Mawu aɖu some" },
            { id: 2, text: "Nyemelɔ̃a" },
            { id: 3, text: "Dɔ le yiyi" },
            { id: 4, text: "Kpɔ" }
          ],
          correctOptionId: 1,
          hints: ["Asking for assistance", "Contains 'aɖu' (need)"],
          explanation: "'Mawu aɖu some' means 'I need help' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Medicine' in Ewe?",
          options: [
            { id: 1, text: "Ɖoɖo" },
            { id: 2, text: "Kɔdzi" },
            { id: 3, text: "Ɖɔkta" },
            { id: 4, text: "Kpɔ" }
          ],
          correctOptionId: 1,
          hints: ["What you take when sick", "Repeated sound"],
          explanation: "'Ɖoɖo' means 'Medicine' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Ɖɔkta", right: "Doctor" },
            { id: 2, left: "Kɔdzi", right: "Hospital" },
            { id: 3, left: "Ɖoɖo", right: "Medicine" },
            { id: 4, left: "Nyemelɔ̃a", right: "I am not feeling well" }
          ],
          hints: ["Ɖɔkta = doctor", "Kɔdzi = hospital", "Ɖoɖo = medicine"],
          explanation: "These are useful words for visiting the doctor in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-int-2",
    title: "Review: Health & Body",
    icon: "refresh-outline",
    description: "Review the body, ailment, and health vocabulary you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Head' in Ewe?",
        options: [
          { id: 1, text: "Ta" },
          { id: 2, text: "Nku" },
          { id: 3, text: "To" },
          { id: 4, text: "Nu" }
        ],
        correctOptionId: 1,
        hints: ["Top of the body"],
        explanation: "'Ta' means 'Head' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Headache' in Ewe?",
        options: [
          { id: 1, text: "Ta dɔ" },
          { id: 2, text: "Axɔ dɔ" },
          { id: 3, text: "Dɔdɔ" },
          { id: 4, text: "Aɖuɖu" }
        ],
        correctOptionId: 1,
        hints: ["Pain in the head"],
        explanation: "'Ta dɔ' means 'Headache' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Doctor' in Ewe?",
        options: [
          { id: 1, text: "Ɖɔkta" },
          { id: 2, text: "Kɔdzi" },
          { id: 3, text: "Ɖoɖo" },
          { id: 4, text: "Kpɔ" }
        ],
        correctOptionId: 1,
        hints: ["Treats sick people"],
        explanation: "'Ɖɔkta' means 'Doctor' in Ewe."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Medicine' in Ewe?",
        options: [
          { id: 1, text: "Ɖoɖo" },
          { id: 2, text: "Kɔdzi" },
          { id: 3, text: "Ta dɔ" },
          { id: 4, text: "Dɔdɔ" }
        ],
        correctOptionId: 1,
        hints: ["What you take when sick"],
        explanation: "'Ɖoɖo' means 'Medicine' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Nku", right: "Eye" },
          { id: 2, left: "Abɔ", right: "Arm / Hand" },
          { id: 3, left: "Ta dɔ", right: "Headache" },
          { id: 4, left: "Ɖɔkta", right: "Doctor" },
          { id: 5, left: "Nyemelɔ̃a", right: "I am not feeling well" }
        ],
        hints: ["Nku = eye", "Abɔ = arm", "Ta dɔ = headache"],
        explanation: "These are key health words from this chapter."
      }
    ]
  }
};
