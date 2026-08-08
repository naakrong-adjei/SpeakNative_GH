// data/course_content/ewe/beginner/chapter7.js
export default {
  id: 7,
  title: "Directions",
  description: "Learn how to ask for and give directions in Ewe",
  icon: "navigate-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "7-1",
      type: "words",
      title: "Asking Directions",
      icon: "help-circle-outline",
      description: "Learn how to ask where places are in Ewe",
      words: ["Fika?", "Afi?", "Mɔ", "Ɖusime", "Ɖusime", "Ŋgɔ", "Megbe", "Yi"],
      vocabulary: [
        {
          id: 1,
          english: "Where is it?",
          native: "Fika?",
          pronunciation: "fee-kah"
          // audioUrl: "/audio/ewe/fika.mp3"
        },
        {
          id: 2,
          english: "Where? / Which place?",
          native: "Afi?",
          pronunciation: "ah-fee"
          // audioUrl: "/audio/ewe/afi.mp3"
        },
        {
          id: 3,
          english: "Road / Way / Path",
          native: "Mɔ",
          pronunciation: "moh"
          // audioUrl: "/audio/ewe/mɔ.mp3"
        },
        {
          id: 4,
          english: "Left",
          native: "Ɖusime",
          pronunciation: "doo-see-meh"
          // audioUrl: "/audio/ewe/ɖusime.mp3"
        },
        {
          id: 5,
          english: "Right",
          native: "Ɖusime",
          pronunciation: "doo-see-meh"
          // audioUrl: "/audio/ewe/ɖusime.mp3"
        },
        {
          id: 6,
          english: "Front / Ahead",
          native: "Ŋgɔ",
          pronunciation: "ng-goh"
          // audioUrl: "/audio/ewe/ŋgɔ.mp3"
        },
        {
          id: 7,
          english: "Back / Behind",
          native: "Megbe",
          pronunciation: "meh-gbeh"
          // audioUrl: "/audio/ewe/megbe.mp3"
        },
        {
          id: 8,
          english: "To go",
          native: "Yi",
          pronunciation: "yee"
          // audioUrl: "/audio/ewe/yi.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'Where is it?' in Ewe?",
          options: [
            { id: 1, text: "Fika?" },
            { id: 2, text: "Afi?" },
            { id: 3, text: "Mɔ" },
            { id: 4, text: "Ɖusime" }
          ],
          correctOptionId: 1,
          hints: ["Asking for a location", "Ends with 'ka?'"],
          explanation: "'Fika?' means 'Where is it?' in Ewe. It is used to ask for a location."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Front / Ahead' in Ewe?",
          options: [
            { id: 1, text: "Ɖusime" },
            { id: 2, text: "Ŋgɔ" },
            { id: 3, text: "Megbe" },
            { id: 4, text: "Afi" }
          ],
          correctOptionId: 2,
          hints: ["Opposite of back", "Starts with 'Ŋ'"],
          explanation: "'Ŋgɔ' means 'Front / Ahead' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Back / Behind' in Ewe?",
          options: [
            { id: 1, text: "Ɖusime" },
            { id: 2, text: "Ŋgɔ" },
            { id: 3, text: "Megbe" },
            { id: 4, text: "Afi" }
          ],
          correctOptionId: 3,
          hints: ["Opposite of front", "Starts with 'M'"],
          explanation: "'Megbe' means 'Back / Behind' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Fika?", right: "Where is it?" },
            { id: 2, left: "Mɔ", right: "Road / Way" },
            { id: 3, left: "Ŋgɔ", right: "Front / Ahead" },
            { id: 4, left: "Megbe", right: "Back / Behind" }
          ],
          hints: ["Fika? = where is it", "Mɔ = road", "Ŋgɔ = ahead"],
          explanation: "These are essential direction words in Ewe."
        }
      ]
    },

    {
      id: "7-2",
      type: "phrases",
      title: "Places in Town",
      icon: "business-outline",
      description: "Learn the Ewe names for common places in town",
      words: ["Sukuku", "Asitsatsa", "Dɔwɔƒe", "Kɔdzi", "Vosotɔme", "Mɔzɔmɔ", "Asitsatsa", "Kɔdzi ne kpɔ"],
      vocabulary: [
        {
          id: 9,
          english: "School",
          native: "Sukuku",
          pronunciation: "soo-koo-koo"
          // audioUrl: "/audio/ewe/sukuku.mp3"
        },
        {
          id: 10,
          english: "Market",
          native: "Asitsatsa",
          pronunciation: "ah-see-tsah-tsah"
          // audioUrl: "/audio/ewe/asitsatsa.mp3"
        },
        {
          id: 11,
          english: "Work / Office building",
          native: "Dɔwɔƒe",
          pronunciation: "doh-woh-feh"
          // audioUrl: "/audio/ewe/dɔwɔƒe.mp3"
        },
        {
          id: 12,
          english: "Hospital",
          native: "Kɔdzi",
          pronunciation: "koh-jee"
          // audioUrl: "/audio/ewe/kɔdzi.mp3"
        },
        {
          id: 13,
          english: "Church / Mosque",
          native: "Vosotɔme",
          pronunciation: "voh-soh-toh-meh"
          // audioUrl: "/audio/ewe/vosotɔme.mp3"
        },
        {
          id: 14,
          english: "Station / Stop",
          native: "Mɔzɔmɔ",
          pronunciation: "moh-zoh-moh"
          // audioUrl: "/audio/ewe/mɔzɔmɔ.mp3"
        },
        {
          id: 15,
          english: "Main road",
          native: "Mɔ wukple",
          pronunciation: "moh woo-kpleh"
          // audioUrl: "/audio/ewe/mɔ_wukple.mp3"
        },
        {
          id: 16,
          english: "Corner",
          native: "Neaflugbe",
          pronunciation: "neh-ah-floo-gbeh"
          // audioUrl: "/audio/ewe/neaflugbe.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'School' in Ewe?",
          options: [
            { id: 1, text: "Sukuku" },
            { id: 2, text: "Asitsatsa" },
            { id: 3, text: "Dɔwɔƒe" },
            { id: 4, text: "Vosotɔme" }
          ],
          correctOptionId: 1,
          hints: ["Where you learn", "Starts with 'Su'"],
          explanation: "'Sukuku' means 'School' in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Hospital' in Ewe?",
          options: [
            { id: 1, text: "Sukuku" },
            { id: 2, text: "Asitsatsa" },
            { id: 3, text: "Kɔdzi" },
            { id: 4, text: "Vosotɔme" }
          ],
          correctOptionId: 3,
          hints: ["Where sick people go", "Starts with 'K'"],
          explanation: "'Kɔdzi' means 'Hospital' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Church / Mosque' in Ewe?",
          options: [
            { id: 1, text: "Sukuku" },
            { id: 2, text: "Asitsatsa" },
            { id: 3, text: "Kɔdzi" },
            { id: 4, text: "Vosotɔme" }
          ],
          correctOptionId: 4,
          hints: ["Place of worship", "Starts with 'V'"],
          explanation: "'Vosotɔme' means 'Church / Mosque' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Sukuku", right: "School" },
            { id: 2, left: "Asitsatsa", right: "Market" },
            { id: 3, left: "Kɔdzi", right: "Hospital" },
            { id: 4, left: "Vosotɔme", right: "Church / Mosque" }
          ],
          hints: ["Sukuku = school", "Asitsatsa = market", "Kɔdzi = hospital"],
          explanation: "These are common places in town in Ewe."
        }
      ]
    },

    {
      id: "7-3",
      type: "simple_sentences",
      title: "Giving Directions",
      icon: "map-outline",
      description: "Learn how to give directions to others in Ewe",
      words: ["Yi Ɖusime", "Yi Ɖusime", "Yi Ŋgɔ", "Yi megbe", "Yi wuie", "Trɔ Ɖusime", "Ve", "Didi"],
      vocabulary: [
        {
          id: 17,
          english: "Go left",
          native: "Yi Ɖusime me",
          pronunciation: "yee doo-see-meh meh"
          // audioUrl: "/audio/ewe/yi_ɖusime_me.mp3"
        },
        {
          id: 18,
          english: "Go right",
          native: "Yi Ɖusime me",
          pronunciation: "yee doo-see-meh meh"
          // audioUrl: "/audio/ewe/yi_ɖusime_me.mp3"
        },
        {
          id: 19,
          english: "Go straight / ahead",
          native: "Yi Ŋgɔ",
          pronunciation: "yee ng-goh"
          // audioUrl: "/audio/ewe/yi_ŋgɔ.mp3"
        },
        {
          id: 20,
          english: "Go back",
          native: "Yi megbe",
          pronunciation: "yee meh-gbeh"
          // audioUrl: "/audio/ewe/yi_megbe.mp3"
        },
        {
          id: 21,
          english: "Continue / go on",
          native: "Yi kpuie",
          pronunciation: "yee kpoo-ee-eh"
          // audioUrl: "/audio/ewe/yi_kpuie.mp3"
        },
        {
          id: 22,
          english: "Turn left",
          native: "Trɔ Ɖusime",
          pronunciation: "troh doo-see-meh"
          // audioUrl: "/audio/ewe/trɔ_ɖusime.mp3"
        },
        {
          id: 23,
          english: "Near / Close by",
          native: "Ve",
          pronunciation: "veh"
          // audioUrl: "/audio/ewe/ve.mp3"
        },
        {
          id: 24,
          english: "Far",
          native: "Didi",
          pronunciation: "dee-dee"
          // audioUrl: "/audio/ewe/didi.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Go straight / ahead' in Ewe?",
          options: [
            { id: 1, text: "Yi Ɖusime me" },
            { id: 2, text: "Yi Ŋgɔ" },
            { id: 3, text: "Yi megbe" },
            { id: 4, text: "Trɔ Ɖusime" }
          ],
          correctOptionId: 2,
          hints: ["Ŋgɔ = ahead", "Yi = go"],
          explanation: "'Yi Ŋgɔ' means 'Go straight / ahead'. 'Ŋgɔ' means 'ahead'."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Go back' in Ewe?",
          options: [
            { id: 1, text: "Yi Ɖusime me" },
            { id: 2, text: "Yi Ŋgɔ" },
            { id: 3, text: "Yi megbe" },
            { id: 4, text: "Trɔ Ɖusime" }
          ],
          correctOptionId: 3,
          hints: ["megbe = back", "Yi = go"],
          explanation: "'Yi megbe' means 'Go back'. 'megbe' means 'back/behind'."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Near' in Ewe?",
          options: [
            { id: 1, text: "Ve" },
            { id: 2, text: "Didi" },
            { id: 3, text: "Mɔ" },
            { id: 4, text: "Fika" }
          ],
          correctOptionId: 1,
          hints: ["Opposite of far", "Short word"],
          explanation: "'Ve' means 'Near / Close by' in Ewe."
        },
        {
          id: 304,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Far' in Ewe?",
          options: [
            { id: 1, text: "Ve" },
            { id: 2, text: "Didi" },
            { id: 3, text: "Mɔ" },
            { id: 4, text: "Fika" }
          ],
          correctOptionId: 2,
          hints: ["Opposite of near", "Repeat sound"],
          explanation: "'Didi' means 'Far' in Ewe."
        },
        {
          id: 305,
          type: "matching",
          instruction: "Match each Ewe phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Yi Ŋgɔ", right: "Go straight / ahead" },
            { id: 2, left: "Yi megbe", right: "Go back" },
            { id: 3, left: "Trɔ Ɖusime", right: "Turn left" },
            { id: 4, left: "Ve", right: "Near" },
            { id: 5, left: "Didi", right: "Far" }
          ],
          hints: ["Yi = go", "Ŋgɔ = ahead", "Didi = far"],
          explanation: "These are essential phrases for giving directions in Ewe."
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
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'Where is it?' in Ewe?",
        options: [
          { id: 1, text: "Fika?" },
          { id: 2, text: "Afi?" },
          { id: 3, text: "Mɔ" },
          { id: 4, text: "Didi" }
        ],
        correctOptionId: 1,
        hints: ["Asking for a location"],
        explanation: "'Fika?' means 'Where is it?' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'School' in Ewe?",
        options: [
          { id: 1, text: "Sukuku" },
          { id: 2, text: "Asitsatsa" },
          { id: 3, text: "Kɔdzi" },
          { id: 4, text: "Vosotɔme" }
        ],
        correctOptionId: 1,
        hints: ["Where you learn"],
        explanation: "'Sukuku' means 'School' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Go straight / ahead' in Ewe?",
        options: [
          { id: 1, text: "Yi Ɖusime me" },
          { id: 2, text: "Yi Ŋgɔ" },
          { id: 3, text: "Yi megbe" },
          { id: 4, text: "Trɔ Ɖusime" }
        ],
        correctOptionId: 2,
        hints: ["Ŋgɔ = ahead"],
        explanation: "'Yi Ŋgɔ' means 'Go straight / ahead'."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Hospital' in Ewe?",
        options: [
          { id: 1, text: "Sukuku" },
          { id: 2, text: "Asitsatsa" },
          { id: 3, text: "Kɔdzi" },
          { id: 4, text: "Vosotɔme" }
        ],
        correctOptionId: 3,
        hints: ["Where sick people go"],
        explanation: "'Kɔdzi' means 'Hospital' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Ŋgɔ", right: "Ahead" },
          { id: 2, left: "Megbe", right: "Back" },
          { id: 3, left: "Sukuku", right: "School" },
          { id: 4, left: "Kɔdzi", right: "Hospital" },
          { id: 5, left: "Didi", right: "Far" }
        ],
        hints: ["Ŋgɔ = ahead", "Megbe = back", "Kɔdzi = hospital"],
        explanation: "These are key direction words from this chapter."
      }
    ]
  }
};

