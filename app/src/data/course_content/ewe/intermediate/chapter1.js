// data/course_content/ewe/intermediate/chapter1.js
export default {
  id: 1,
  title: "Travel & Transport",
  description: "Learn to get around, use transport, and talk about travelling in Ewe",
  icon: "airplane-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "1-1",
      type: "vocabulary",
      title: "Getting Around",
      icon: "navigate-outline",
      description: "Essential words for moving around town in Ewe",
      words: ["Wɔzɔ", "Sɔlɔ̃tɔ", "Keke", "Sɔdɔ", "Motɔ", "Yata", "Mɔzɔ", "Kpaɖo"],
      vocabulary: [
        {
          id: 1,
          english: "To travel",
          native: "Wɔzɔ",
          pronunciation: "woh-zoh"
          // audioUrl: "/audio/ewe/wɔzɔ.mp3"
        },
        {
          id: 2,
          english: "Driver",
          native: "Sɔlɔ̃tɔ",
          pronunciation: "soh-loh-toh"
          // audioUrl: "/audio/ewe/sɔlɔ̃tɔ.mp3"
        },
        {
          id: 3,
          english: "Car",
          native: "Keke",
          pronunciation: "keh-keh"
          // audioUrl: "/audio/ewe/keke.mp3"
        },
        {
          id: 4,
          english: "Bus / Lorry",
          native: "Sɔdɔ",
          pronunciation: "soh-doh"
          // audioUrl: "/audio/ewe/sɔdɔ.mp3"
        },
        {
          id: 5,
          english: "Motor / Motorcycle",
          native: "Motɔ",
          pronunciation: "moh-toh"
          // audioUrl: "/audio/ewe/motɔ.mp3"
        },
        {
          id: 6,
          english: "Taxi",
          native: "Yata",
          pronunciation: "yah-tah"
          // audioUrl: "/audio/ewe/yata.mp3"
        },
        {
          id: 7,
          english: "Passenger",
          native: "Mɔzɔ",
          pronunciation: "moh-zoh"
          // audioUrl: "/audio/ewe/mɔzɔ.mp3"
        },
        {
          id: 8,
          english: "Road / Street",
          native: "Kpaɖo",
          pronunciation: "kpah-doh"
          // audioUrl: "/audio/ewe/kpaɖo.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Car' in Ewe?",
          options: [
            { id: 1, text: "Keke" },
            { id: 2, text: "Sɔdɔ" },
            { id: 3, text: "Motɔ" },
            { id: 4, text: "Yata" }
          ],
          correctOptionId: 1,
          hints: ["Common vehicle", "Repeated sound"],
          explanation: "'Keke' means 'Car' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Driver' in Ewe?",
          options: [
            { id: 1, text: "Sɔlɔ̃tɔ" },
            { id: 2, text: "Mɔzɔ" },
            { id: 3, text: "Kpaɖo" },
            { id: 4, text: "Wɔzɔ" }
          ],
          correctOptionId: 1,
          hints: ["Person who drives", "Ends with 'tɔ'"],
          explanation: "'Sɔlɔ̃tɔ' means 'Driver' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Taxi' in Ewe?",
          options: [
            { id: 1, text: "Keke" },
            { id: 2, text: "Sɔdɔ" },
            { id: 3, text: "Motɔ" },
            { id: 4, text: "Yata" }
          ],
          correctOptionId: 4,
          hints: ["A hired car", "Starts with 'Y'"],
          explanation: "'Yata' means 'Taxi' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe transport word to its English meaning.",
          pairs: [
            { id: 1, left: "Keke", right: "Car" },
            { id: 2, left: "Sɔdɔ", right: "Bus / Lorry" },
            { id: 3, left: "Motɔ", right: "Motorcycle" },
            { id: 4, left: "Yata", right: "Taxi" }
          ],
          hints: ["Keke = car", "Sɔdɔ = bus", "Motɔ = motorcycle"],
          explanation: "These are common forms of transport in Ewe."
        }
      ]
    },

    {
      id: "1-2",
      type: "useful_phrases",
      title: "At the Airport & Station",
      icon: "airplane-outline",
      description: "Learn words for travelling by air and train in Ewe",
      words: ["Daɖedzraɖuƒe", "Yameyame keke", "Dzi yiyi", "Sɔdɔ dɔa", "Tedzi", "Afɔtsɔ", "Dɔdokui", "Flehosu"],
      vocabulary: [
        {
          id: 9,
          english: "Airport",
          native: "Daɖedzraɖuƒe",
          pronunciation: "dah-deh-jrah-doh-feh"
          // audioUrl: "/audio/ewe/daɖedzraɖuƒe.mp3"
        },
        {
          id: 10,
          english: "Airplane",
          native: "Yameyame keke",
          pronunciation: "yah-meh-yah-meh keh-keh"
          // audioUrl: "/audio/ewe/yameyame_keke.mp3"
        },
        {
          id: 11,
          english: "To take off / fly",
          native: "Dzi yiyi",
          pronunciation: "jee yee-yee"
          // audioUrl: "/audio/ewe/dzi_yiyi.mp3"
        },
        {
          id: 12,
          english: "Bus station",
          native: "Sɔdɔ dɔa",
          pronunciation: "soh-doh doh-ah"
          // audioUrl: "/audio/ewe/sɔdɔ_dɔa.mp3"
        },
        {
          id: 13,
          english: "Ticket",
          native: "Tedzi",
          pronunciation: "teh-jee"
          // audioUrl: "/audio/ewe/tedzi.mp3"
        },
        {
          id: 14,
          english: "Passport",
          native: "Afɔtsɔ",
          pronunciation: "ah-foh-tsoh"
          // audioUrl: "/audio/ewe/afɔtsɔ.mp3"
        },
        {
          id: 15,
          english: "Luggage",
          native: "Dɔdokui",
          pronunciation: "doh-doh-koo-ee"
          // audioUrl: "/audio/ewe/dɔdokui.mp3"
        },
        {
          id: 16,
          english: "Boarding / Embark",
          native: "Flehosu",
          pronunciation: "fleh-hoh-soo"
          // audioUrl: "/audio/ewe/flehosu.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Airport' in Ewe?",
          options: [
            { id: 1, text: "Daɖedzraɖuƒe" },
            { id: 2, text: "Yameyame keke" },
            { id: 3, text: "Sɔdɔ dɔa" },
            { id: 4, text: "Flehosu" }
          ],
          correctOptionId: 1,
          hints: ["Where planes land", "Contains 'dzraɖu' (air)"],
          explanation: "'Daɖedzraɖuƒe' means 'Airport' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Ticket' in Ewe?",
          options: [
            { id: 1, text: "Tedzi" },
            { id: 2, text: "Afɔtsɔ" },
            { id: 3, text: "Dɔdokui" },
            { id: 4, text: "Flehosu" }
          ],
          correctOptionId: 1,
          hints: ["What you need to travel", "Starts with 'Te'"],
          explanation: "'Tedzi' means 'Ticket' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Passport' in Ewe?",
          options: [
            { id: 1, text: "Tedzi" },
            { id: 2, text: "Afɔtsɔ" },
            { id: 3, text: "Dɔdokui" },
            { id: 4, text: "Flehosu" }
          ],
          correctOptionId: 2,
          hints: ["Required for international travel", "Starts with 'Afɔ'"],
          explanation: "'Afɔtsɔ' means 'Passport' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe travel word to its English meaning.",
          pairs: [
            { id: 1, left: "Yameyame keke", right: "Airplane" },
            { id: 2, left: "Tedzi", right: "Ticket" },
            { id: 3, left: "Afɔtsɔ", right: "Passport" },
            { id: 4, left: "Dɔdokui", right: "Luggage" }
          ],
          hints: ["Yameyame keke = airplane", "Tedzi = ticket", "Afɔtsɔ = passport"],
          explanation: "These are essential travel words in Ewe."
        }
      ]
    },

    {
      id: "1-3",
      type: "complete_sentences",
      title: "Transportation Verbs",
      icon: "swap-horizontal-outline",
      description: "Learn Ewe verbs for travelling and using transport",
      words: ["Ɖo dɛ̃", "Kɔɖi le ɖewɔme", "Dzo", "Va", "Fle tedzi", "Sɔlɔ̃", "Te ɖe", "Kpɔ"],
      vocabulary: [
        {
          id: 17,
          english: "To get on / board",
          native: "Ɖo dɛ̃",
          pronunciation: "doh deh"
          // audioUrl: "/audio/ewe/ɉo_dɛ̃.mp3"
        },
        {
          id: 18,
          english: "To get off / alight",
          native: "Kɔɖi le ɖewɔme",
          pronunciation: "koh-dee leh deh-woh-meh"
          // audioUrl: "/audio/ewe/kɔɖi_le_ɖewɔme.mp3"
        },
        {
          id: 19,
          english: "To leave / depart",
          native: "Dzo",
          pronunciation: "joh"
          // audioUrl: "/audio/ewe/dzo.mp3"
        },
        {
          id: 20,
          english: "To arrive / come",
          native: "Va",
          pronunciation: "vah"
          // audioUrl: "/audio/ewe/va.mp3"
        },
        {
          id: 21,
          english: "To buy a ticket",
          native: "Fle tedzi",
          pronunciation: "fleh teh-jee"
          // audioUrl: "/audio/ewe/fle_tedzi.mp3"
        },
        {
          id: 22,
          english: "To drive",
          native: "Sɔlɔ̃",
          pronunciation: "soh-loh"
          // audioUrl: "/audio/ewe/sɔlɔ̃.mp3"
        },
        {
          id: 23,
          english: "To stop / park",
          native: "Te ɖe",
          pronunciation: "teh deh"
          // audioUrl: "/audio/ewe/te_ɖe.mp3"
        },
        {
          id: 24,
          english: "To see / meet",
          native: "Kpɔ",
          pronunciation: "kpoh"
          // audioUrl: "/audio/ewe/kpɔ.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'To buy a ticket' in Ewe?",
          options: [
            { id: 1, text: "Fle tedzi" },
            { id: 2, text: "Ɖo dɛ̃" },
            { id: 3, text: "Dzo" },
            { id: 4, text: "Sɔlɔ̃" }
          ],
          correctOptionId: 1,
          hints: ["Fle = buy", "tedzi = ticket"],
          explanation: "'Fle tedzi' means 'To buy a ticket'. 'Fle' means 'buy' and 'tedzi' means 'ticket'."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'To drive' in Ewe?",
          options: [
            { id: 1, text: "Sɔlɔ̃" },
            { id: 2, text: "Dzo" },
            { id: 3, text: "Va" },
            { id: 4, text: "Kpɔ" }
          ],
          correctOptionId: 1,
          hints: ["Operating a vehicle", "Contains 'sɔlɔ̃' (drive)"],
          explanation: "'Sɔlɔ̃' means 'To drive' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'To leave / depart' in Ewe?",
          options: [
            { id: 1, text: "Sɔlɔ̃" },
            { id: 2, text: "Dzo" },
            { id: 3, text: "Va" },
            { id: 4, text: "Kpɔ" }
          ],
          correctOptionId: 2,
          hints: ["Opposite of arrive", "Short word"],
          explanation: "'Dzo' means 'To leave / depart' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe verb to its English meaning.",
          pairs: [
            { id: 1, left: "Ɖo dɛ̃", right: "To board" },
            { id: 2, left: "Dzo", right: "To leave" },
            { id: 3, left: "Va", right: "To arrive" },
            { id: 4, left: "Sɔlɔ̃", right: "To drive" }
          ],
          hints: ["Dzo = to leave", "Va = to arrive", "Sɔlɔ̃ = to drive"],
          explanation: "These are key transport verbs in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-int-1",
    title: "Review: Travel & Transport",
    icon: "refresh-outline",
    description: "Review the travel and transport vocabulary you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Car' in Ewe?",
        options: [
          { id: 1, text: "Keke" },
          { id: 2, text: "Sɔdɔ" },
          { id: 3, text: "Motɔ" },
          { id: 4, text: "Yata" }
        ],
        correctOptionId: 1,
        hints: ["Common vehicle"],
        explanation: "'Keke' means 'Car' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Ticket' in Ewe?",
        options: [
          { id: 1, text: "Tedzi" },
          { id: 2, text: "Afɔtsɔ" },
          { id: 3, text: "Dɔdokui" },
          { id: 4, text: "Flehosu" }
        ],
        correctOptionId: 1,
        hints: ["What you need to travel"],
        explanation: "'Tedzi' means 'Ticket' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe verb.",
        question: "How do you say 'To drive' in Ewe?",
        options: [
          { id: 1, text: "Sɔlɔ̃" },
          { id: 2, text: "Dzo" },
          { id: 3, text: "Va" },
          { id: 4, text: "Kpɔ" }
        ],
        correctOptionId: 1,
        hints: ["Operating a vehicle"],
        explanation: "'Sɔlɔ̃' means 'To drive' in Ewe."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Taxi' in Ewe?",
        options: [
          { id: 1, text: "Keke" },
          { id: 2, text: "Sɔdɔ" },
          { id: 3, text: "Motɔ" },
          { id: 4, text: "Yata" }
        ],
        correctOptionId: 4,
        hints: ["A hired car"],
        explanation: "'Yata' means 'Taxi' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Keke", right: "Car" },
          { id: 2, left: "Sɔdɔ", right: "Bus / Lorry" },
          { id: 3, left: "Tedzi", right: "Ticket" },
          { id: 4, left: "Afɔtsɔ", right: "Passport" },
          { id: 5, left: "Dzo", right: "To leave" }
        ],
        hints: ["Keke = car", "Sɔdɔ = bus", "Tedzi = ticket"],
        explanation: "These are key travel words from this chapter."
      }
    ]
  }
};
