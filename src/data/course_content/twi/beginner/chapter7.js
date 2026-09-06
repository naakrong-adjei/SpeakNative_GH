// data/course_content/twi/beginner/chapter7.js
export default {
  id: 7,
  title: "Directions",
  description: "Learn how to ask for and give directions in Twi",
  icon: "navigate-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "7-1",
      type: "vocabulary",
      title: "Asking Directions",
      icon: "help-circle-outline",
      description: "Learn how to ask where places are in Twi",
      words: ["Ɛwɔ he?", "ɛhe?", "ɔkwan", "benkum", "nifa", "anim", "akyi", "kɔ"],
      vocabulary: [
        {
          id: 1,
          english: "Where is it?",
          native: "Ɛwɔ he?",
          pronunciation: "eh-woh heh"
          // audioUrl: "/audio/twi/ewo_he.mp3"
        },
        {
          id: 2,
          english: "Where? / Which place?",
          native: "ɛhe?",
          pronunciation: "eh-heh"
          // audioUrl: "/audio/twi/ehe.mp3"
        },
        {
          id: 3,
          english: "Road / Way / Path",
          native: "ɔkwan",
          pronunciation: "oh-kwan"
          // audioUrl: "/audio/twi/okwan.mp3"
        },
        {
          id: 4,
          english: "Left",
          native: "benkum",
          pronunciation: "ben-koom"
          // audioUrl: "/audio/twi/benkum.mp3"
        },
        {
          id: 5,
          english: "Right",
          native: "nifa",
          pronunciation: "nee-fah"
          // audioUrl: "/audio/twi/nifa.mp3"
        },
        {
          id: 6,
          english: "Front / Ahead",
          native: "anim",
          pronunciation: "ah-neem"
          // audioUrl: "/audio/twi/anim.mp3"
        },
        {
          id: 7,
          english: "Back / Behind",
          native: "akyi",
          pronunciation: "ah-chee"
          // audioUrl: "/audio/twi/akyi.mp3"
        },
        {
          id: 8,
          english: "To go",
          native: "kɔ",
          pronunciation: "koh"
          // audioUrl: "/audio/twi/ko.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'Where is it?' in Twi?",
          options: [
            { id: 1, text: "Ɛwɔ he?" },
            { id: 2, text: "Ɛhe?" },
            { id: 3, text: "ɔkwan" },
            { id: 4, text: "benkum" }
          ],
          correctOptionId: 1,
          hints: ["Asking for a location", "Contains 'wɔ' (is at)"],
          explanation: "'Ɛwɔ he?' means 'Where is it?'. 'wɔ' means 'is at' and 'he' means 'where'."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Left' in Twi?",
          options: [
            { id: 1, text: "benkum" },
            { id: 2, text: "nifa" },
            { id: 3, text: "anim" },
            { id: 4, text: "akyi" }
          ],
          correctOptionId: 1,
          hints: ["Opposite of right", "Starts with 'b'"],
          explanation: "'benkum' means 'Left' in Twi."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Right' in Twi?",
          options: [
            { id: 1, text: "benkum" },
            { id: 2, text: "nifa" },
            { id: 3, text: "anim" },
            { id: 4, text: "akyi" }
          ],
          correctOptionId: 2,
          hints: ["Opposite of left", "Starts with 'n'"],
          explanation: "'nifa' means 'Right' in Twi."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Twi word to its English meaning.",
          pairs: [
            { id: 1, left: "benkum", right: "Left" },
            { id: 2, left: "nifa", right: "Right" },
            { id: 3, left: "anim", right: "Front / Ahead" },
            { id: 4, left: "akyi", right: "Back / Behind" },
            { id: 5, left: "ɔkwan", right: "Road / Way" }
          ],
          hints: ["benkum = left", "nifa = right", "ɔkwan = road"],
          explanation: "These are essential direction words in Twi."
        }
      ]
    },

    {
      id: "7-2",
      type: "vocabulary",
      title: "Places in Town",
      icon: "business-outline",
      description: "Learn the Twi names for common places in town",
      words: ["sukuu", "ɔdɔm", "aban", "ɔyarefo", "asɔre", "ɔtadeɛ", "kwan kɛseɛ", "ebutu"],
      vocabulary: [
        {
          id: 9,
          english: "School",
          native: "sukuu",
          pronunciation: "soo-koo"
          // audioUrl: "/audio/twi/sukuu.mp3"
        },
        {
          id: 10,
          english: "Market",
          native: "ɔdɔm",
          pronunciation: "oh-dohm"
          // audioUrl: "/audio/twi/odom.mp3"
        },
        {
          id: 11,
          english: "Government / Office building",
          native: "aban",
          pronunciation: "ah-bahn"
          // audioUrl: "/audio/twi/aban.mp3"
        },
        {
          id: 12,
          english: "Hospital",
          native: "ɔyarefo",
          pronunciation: "oh-yah-reh-foh"
          // audioUrl: "/audio/twi/oyarefo.mp3"
        },
        {
          id: 13,
          english: "Church / Mosque",
          native: "asɔre",
          pronunciation: "ah-soh-reh"
          // audioUrl: "/audio/twi/asore.mp3"
        },
        {
          id: 14,
          english: "Station / Stop",
          native: "ɔtadeɛ",
          pronunciation: "oh-tah-deh-eh"
          // audioUrl: "/audio/twi/otadee.mp3"
        },
        {
          id: 15,
          english: "Main road",
          native: "kwan kɛseɛ",
          pronunciation: "kwan keh-seh-eh"
          // audioUrl: "/audio/twi/kwan_kessee.mp3"
        },
        {
          id: 16,
          english: "Corner",
          native: "ebutu",
          pronunciation: "eh-boo-too"
          // audioUrl: "/audio/twi/ebutu.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'School' in Twi?",
          options: [
            { id: 1, text: "sukuu" },
            { id: 2, text: "ɔdɔm" },
            { id: 3, text: "aban" },
            { id: 4, text: "asɔre" }
          ],
          correctOptionId: 1,
          hints: ["Where you learn", "Starts with 's'"],
          explanation: "'sukuu' means 'School' in Twi."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Hospital' in Twi?",
          options: [
            { id: 1, text: "sukuu" },
            { id: 2, text: "ɔdɔm" },
            { id: 3, text: "ɔyarefo" },
            { id: 4, text: "asɔre" }
          ],
          correctOptionId: 3,
          hints: ["Where sick people go", "Starts with 'ɔy'"],
          explanation: "'ɔyarefo' means 'Hospital' in Twi."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Church / Mosque' in Twi?",
          options: [
            { id: 1, text: "sukuu" },
            { id: 2, text: "ɔdɔm" },
            { id: 3, text: "ɔyarefo" },
            { id: 4, text: "asɔre" }
          ],
          correctOptionId: 4,
          hints: ["Place of worship", "Starts with 'as'"],
          explanation: "'asɔre' means 'Church / Mosque' in Twi."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Twi word to its English meaning.",
          pairs: [
            { id: 1, left: "sukuu", right: "School" },
            { id: 2, left: "ɔdɔm", right: "Market" },
            { id: 3, left: "ɔyarefo", right: "Hospital" },
            { id: 4, left: "asɔre", right: "Church / Mosque" }
          ],
          hints: ["sukuu = school", "ɔdɔm = market", "ɔyarefo = hospital"],
          explanation: "These are common places in town in Twi."
        }
      ]
    },

    {
      id: "7-3",
      type: "vocabulary",
      title: "Giving Directions",
      icon: "map-outline",
      description: "Learn how to give directions to others in Twi",
      words: ["kɔ benkum", "kɔ nifa", "kɔ anim", "kɔ akyi", "kɔ so", "fa benkum", "bɛnom", "tweɛ"],
      vocabulary: [
        {
          id: 17,
          english: "Go left",
          native: "kɔ benkum",
          pronunciation: "koh ben-koom"
          // audioUrl: "/audio/twi/ko_benkum.mp3"
        },
        {
          id: 18,
          english: "Go right",
          native: "kɔ nifa",
          pronunciation: "koh nee-fah"
          // audioUrl: "/audio/twi/ko_nifa.mp3"
        },
        {
          id: 19,
          english: "Go straight / ahead",
          native: "kɔ anim",
          pronunciation: "koh ah-neem"
          // audioUrl: "/audio/twi/ko_anim.mp3"
        },
        {
          id: 20,
          english: "Go back",
          native: "kɔ akyi",
          pronunciation: "koh ah-chee"
          // audioUrl: "/audio/twi/ko_akyi.mp3"
        },
        {
          id: 21,
          english: "Continue / go on",
          native: "kɔ so",
          pronunciation: "koh soh"
          // audioUrl: "/audio/twi/ko_so.mp3"
        },
        {
          id: 22,
          english: "Turn left",
          native: "fa benkum",
          pronunciation: "fah ben-koom"
          // audioUrl: "/audio/twi/fa_benkum.mp3"
        },
        {
          id: 23,
          english: "Near / Close by",
          native: "bɛnom",
          pronunciation: "beh-nohm"
          // audioUrl: "/audio/twi/benom.mp3"
        },
        {
          id: 24,
          english: "Far",
          native: "tweɛ",
          pronunciation: "tweh"
          // audioUrl: "/audio/twi/twe.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Go straight / ahead' in Twi?",
          options: [
            { id: 1, text: "kɔ benkum" },
            { id: 2, text: "kɔ nifa" },
            { id: 3, text: "kɔ anim" },
            { id: 4, text: "kɔ akyi" }
          ],
          correctOptionId: 3,
          hints: ["anim = front/ahead", "kɔ = go"],
          explanation: "'kɔ anim' means 'Go straight / ahead'. 'anim' means 'front/ahead'."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Go left' in Twi?",
          options: [
            { id: 1, text: "kɔ benkum" },
            { id: 2, text: "kɔ nifa" },
            { id: 3, text: "kɔ anim" },
            { id: 4, text: "kɔ akyi" }
          ],
          correctOptionId: 1,
          hints: ["benkum = left", "kɔ = go"],
          explanation: "'kɔ benkum' means 'Go left'. 'benkum' means 'left'."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Near' in Twi?",
          options: [
            { id: 1, text: "bɛnom" },
            { id: 2, text: "tweɛ" },
            { id: 3, text: "ɔkwan" },
            { id: 4, text: "ebutu" }
          ],
          correctOptionId: 1,
          hints: ["Opposite of far", "Starts with 'b'"],
          explanation: "'bɛnom' means 'Near / Close by' in Twi."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "How do you say 'Far' in Twi?",
          options: [
            { id: 1, text: "bɛnom" },
            { id: 2, text: "tweɛ" },
            { id: 3, text: "ɔkwan" },
            { id: 4, text: "ebutu" }
          ],
          correctOptionId: 2,
          hints: ["Opposite of near", "Starts with 't'"],
          explanation: "'tweɛ' means 'Far' in Twi."
        },
        {
          id: 305,
          type: "matching",
          instruction: "Match each Twi phrase to its English meaning.",
          pairs: [
            { id: 1, left: "kɔ benkum", right: "Go left" },
            { id: 2, left: "kɔ nifa", right: "Go right" },
            { id: 3, left: "kɔ anim", right: "Go straight / ahead" },
            { id: 4, left: "kɔ akyi", right: "Go back" },
            { id: 5, left: "bɛnom", right: "Near" }
          ],
          hints: ["kɔ = go", "benkum = left", "nifa = right"],
          explanation: "These are essential phrases for giving directions in Twi."
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
        instruction: "Select the correct Twi word.",
        question: "How do you say 'Left' in Twi?",
        options: [
          { id: 1, text: "benkum" },
          { id: 2, text: "nifa" },
          { id: 3, text: "anim" },
          { id: 4, text: "akyi" }
        ],
        correctOptionId: 1,
        hints: ["Opposite of right"],
        explanation: "'benkum' means 'Left' in Twi."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'School' in Twi?",
        options: [
          { id: 1, text: "sukuu" },
          { id: 2, text: "ɔdɔm" },
          { id: 3, text: "ɔyarefo" },
          { id: 4, text: "asɔre" }
        ],
        correctOptionId: 1,
        hints: ["Where you learn"],
        explanation: "'sukuu' means 'School' in Twi."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Go straight / ahead' in Twi?",
        options: [
          { id: 1, text: "kɔ benkum" },
          { id: 2, text: "kɔ nifa" },
          { id: 3, text: "kɔ anim" },
          { id: 4, text: "kɔ akyi" }
        ],
        correctOptionId: 3,
        hints: ["anim = ahead"],
        explanation: "'kɔ anim' means 'Go straight / ahead'."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "How do you say 'Hospital' in Twi?",
        options: [
          { id: 1, text: "sukuu" },
          { id: 2, text: "ɔdɔm" },
          { id: 3, text: "ɔyarefo" },
          { id: 4, text: "asɔre" }
        ],
        correctOptionId: 3,
        hints: ["Where sick people go"],
        explanation: "'ɔyarefo' means 'Hospital' in Twi."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Twi word to its English meaning.",
        pairs: [
          { id: 1, left: "benkum", right: "Left" },
          { id: 2, left: "nifa", right: "Right" },
          { id: 3, left: "sukuu", right: "School" },
          { id: 4, left: "ɔyarefo", right: "Hospital" },
          { id: 5, left: "kɔ anim", right: "Go straight / ahead" }
        ],
        hints: ["benkum = left", "nifa = right", "kɔ anim = go ahead"],
        explanation: "These are key direction words from this chapter."
      }
    ]
  }
};
