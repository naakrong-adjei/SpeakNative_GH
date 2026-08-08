// data/course_content/ewe/intermediate/chapter3.js
export default {
  id: 3,
  title: "Weather & Seasons",
  description: "Learn to talk about the weather and seasons in Ewe",
  icon: "partly-sunny-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "3-1",
      type: "vocabulary",
      title: "Weather Words",
      icon: "partly-sunny-outline",
      description: "Learn the Ewe names for weather conditions",
      words: ["Yame", "Dzi", "Tsikpe", "Aɖe", "Fúfɔ", "Dzoxa", "Nyo", "Yame wɔ dɔ̃"],
      vocabulary: [
        {
          id: 1,
          english: "Weather",
          native: "Yame",
          pronunciation: "yah-meh"
          // audioUrl: "/audio/ewe/yame.mp3"
        },
        {
          id: 2,
          english: "Sun",
          native: "Dzi",
          pronunciation: "jee"
          // audioUrl: "/audio/ewe/dzi.mp3"
        },
        {
          id: 3,
          english: "Rain",
          native: "Tsikpe",
          pronunciation: "tsee-kpeh"
          // audioUrl: "/audio/ewe/tsikpe.mp3"
        },
        {
          id: 4,
          english: "Wind",
          native: "Aɖe",
          pronunciation: "ah-deh"
          // audioUrl: "/audio/ewe/aɖe.mp3"
        },
        {
          id: 5,
          english: "Cloud",
          native: "Fúfɔ",
          pronunciation: "foo-foh"
          // audioUrl: "/audio/ewe/fúfɔ.mp3"
        },
        {
          id: 6,
          english: "Thunder / Storm",
          native: "Dzoxa",
          pronunciation: "joh-hah"
          // audioUrl: "/audio/ewe/dzoxa.mp3"
        },
        {
          id: 7,
          english: "Good / Nice",
          native: "Nyo",
          pronunciation: "nyoh"
          // audioUrl: "/audio/ewe/nyo.mp3"
        },
        {
          id: 8,
          english: "It is raining",
          native: "Yame wɔ dzatse",
          pronunciation: "yah-meh woh jah-tseh"
          // audioUrl: "/audio/ewe/yame_wɔ_dzatse.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Rain' in Ewe?",
          options: [
            { id: 1, text: "Tsikpe" },
            { id: 2, text: "Dzi" },
            { id: 3, text: "Aɖe" },
            { id: 4, text: "Fúfɔ" }
          ],
          correctOptionId: 1,
          hints: ["Water from the sky", "Starts with 'Ts'"],
          explanation: "'Tsikpe' means 'Rain' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Weather' in Ewe?",
          options: [
            { id: 1, text: "Yame" },
            { id: 2, text: "Dzi" },
            { id: 3, text: "Tsikpe" },
            { id: 4, text: "Aɖe" }
          ],
          correctOptionId: 1,
          hints: ["The state of the sky", "Starts with 'Y'"],
          explanation: "'Yame' means 'Weather' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Sun' in Ewe?",
          options: [
            { id: 1, text: "Dzi" },
            { id: 2, text: "Tsikpe" },
            { id: 3, text: "Aɖe" },
            { id: 4, text: "Fúfɔ" }
          ],
          correctOptionId: 1,
          hints: ["Gives light and warmth", "Short word"],
          explanation: "'Dzi' means 'Sun' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe weather word to its English meaning.",
          pairs: [
            { id: 1, left: "Yame", right: "Weather" },
            { id: 2, left: "Dzi", right: "Sun" },
            { id: 3, left: "Tsikpe", right: "Rain" },
            { id: 4, left: "Aɖe", right: "Wind" }
          ],
          hints: ["Yame = weather", "Dzi = sun", "Tsikpe = rain"],
          explanation: "These are common weather words in Ewe."
        }
      ]
    },

    {
      id: "3-2",
      type: "useful_phrases",
      title: "Seasons",
      icon: "calendar-outline",
      description: "Learn the Ewe names for the seasons",
      words: ["Tsikedzidzime", "Kukua", "Ekpe", "Nuwuwu", "Domegbe", "Gleti", "Dumegbe", "Kleke"],
      vocabulary: [
        {
          id: 9,
          english: "Rainy season",
          native: "Tsikedzidzime",
          pronunciation: "tsee-keh-jee-jee-meh"
          // audioUrl: "/audio/ewe/tsikedzidzime.mp3"
        },
        {
          id: 10,
          english: "Dry season",
          native: "Kukua",
          pronunciation: "koo-koo-ah"
          // audioUrl: "/audio/ewe/kukua.mp3"
        },
        {
          id: 11,
          english: "Season / Time",
          native: "Ekpe",
          pronunciation: "eh-kpeh"
          // audioUrl: "/audio/ewe/ekpe.mp3"
        },
        {
          id: 12,
          english: "End / Harvest time",
          native: "Nuwuwu",
          pronunciation: "noo-woo-woo"
          // audioUrl: "/audio/ewe/nuwuwu.mp3"
        },
        {
          id: 13,
          english: "Middle / Mid-year",
          native: "Domegbe",
          pronunciation: "doh-meh-gbeh"
          // audioUrl: "/audio/ewe/domegbe.mp3"
        },
        {
          id: 14,
          english: "Moon / Month",
          native: "Gleti",
          pronunciation: "gleh-tee"
          // audioUrl: "/audio/ewe/gleti.mp3"
        },
        {
          id: 15,
          english: "Early / Beginning",
          native: "Dumegbe",
          pronunciation: "doo-meh-gbeh"
          // audioUrl: "/audio/ewe/dumegbe.mp3"
        },
        {
          id: 16,
          english: "Harmattan season",
          native: "Kleke",
          pronunciation: "kleh-keh"
          // audioUrl: "/audio/ewe/kleke.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Rainy season' in Ewe?",
          options: [
            { id: 1, text: "Tsikedzidzime" },
            { id: 2, text: "Kukua" },
            { id: 3, text: "Gleti" },
            { id: 4, text: "Nuwuwu" }
          ],
          correctOptionId: 1,
          hints: ["Season of rain", "Contains 'tsi' (rain)"],
          explanation: "'Tsikedzidzime' means 'Rainy season'. 'tsi' relates to rain."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Dry season' in Ewe?",
          options: [
            { id: 1, text: "Kukua" },
            { id: 2, text: "Tsikedzidzime" },
            { id: 3, text: "Gleti" },
            { id: 4, text: "Nuwuwu" }
          ],
          correctOptionId: 1,
          hints: ["Season without rain", "Starts with 'K'"],
          explanation: "'Kukua' means 'Dry season' in Ewe."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Moon / Month' in Ewe?",
          options: [
            { id: 1, text: "Gleti" },
            { id: 2, text: "Kukua" },
            { id: 3, text: "Tsikedzidzime" },
            { id: 4, text: "Ekpe" }
          ],
          correctOptionId: 1,
          hints: ["Unit of time / night sky", "Starts with 'Gl'"],
          explanation: "'Gleti' means 'Moon / Month' in Ewe."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe season word to its English meaning.",
          pairs: [
            { id: 1, left: "Tsikedzidzime", right: "Rainy season" },
            { id: 2, left: "Kukua", right: "Dry season" },
            { id: 3, left: "Gleti", right: "Moon / Month" },
            { id: 4, left: "Kleke", right: "Harmattan season" }
          ],
          hints: ["Tsikedzidzime = rainy season", "Kukua = dry season", "Gleti = month"],
          explanation: "These are season-related words in Ewe."
        }
      ]
    },

    {
      id: "3-3",
      type: "complete_sentences",
      title: "Describing Weather",
      icon: "thermometer-outline",
      description: "Learn phrases to describe the weather in Ewe",
      words: ["Yame nyo", "Yame vɛ", "Wɔ dzo", "Yame wɔ tsi", "Vɛ", "DɔkƆ", "DɔkƆ si", "Kleke le dzodzom"],
      vocabulary: [
        {
          id: 17,
          english: "The weather is good",
          native: "Yame nyo",
          pronunciation: "yah-meh nyoh"
          // audioUrl: "/audio/ewe/yame_nyo.mp3"
        },
        {
          id: 18,
          english: "The weather is bad",
          native: "Yame vɛ",
          pronunciation: "yah-meh veh"
          // audioUrl: "/audio/ewe/yame_vɛ.mp3"
        },
        {
          id: 19,
          english: "It is hot",
          native: "Wɔ dzo",
          pronunciation: "woh joh"
          // audioUrl: "/audio/ewe/wɔ_dzo.mp3"
        },
        {
          id: 20,
          english: "It is raining",
          native: "Yame wɔ tsi",
          pronunciation: "yah-meh woh tsee"
          // audioUrl: "/audio/ewe/yame_wɔ_tsi.mp3"
        },
        {
          id: 21,
          english: "It is cold",
          native: "Vɛ",
          pronunciation: "veh"
          // audioUrl: "/audio/ewe/vɛ.mp3"
        },
        {
          id: 22,
          english: "Cold / Cool",
          native: "DɔkƆ",
          pronunciation: "doh-koh"
          // audioUrl: "/audio/ewe/dɔkƆ.mp3"
        },
        {
          id: 23,
          english: "Dry",
          native: "DɔkƆ si",
          pronunciation: "doh-koh see"
          // audioUrl: "/audio/ewe/dɔkƆ_si.mp3"
        },
        {
          id: 24,
          english: "It is windy",
          native: "Aɖe le dzodzom",
          pronunciation: "ah-deh leh joh-johm"
          // audioUrl: "/audio/ewe/aɖe_le_dzodzom.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The weather is good' in Ewe?",
          options: [
            { id: 1, text: "Yame nyo" },
            { id: 2, text: "Yame vɛ" },
            { id: 3, text: "Wɔ dzo" },
            { id: 4, text: "Vɛ" }
          ],
          correctOptionId: 1,
          hints: ["nyo = good", "yame = weather"],
          explanation: "'Yame nyo' means 'The weather is good'. 'nyo' means 'good'."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'It is hot' in Ewe?",
          options: [
            { id: 1, text: "Wɔ dzo" },
            { id: 2, text: "Yame nyo" },
            { id: 3, text: "Vɛ" },
            { id: 4, text: "DɔkƆ" }
          ],
          correctOptionId: 1,
          hints: ["High temperature", "Contains 'dzo' (heat)"],
          explanation: "'Wɔ dzo' means 'It is hot'. 'dzo' relates to 'fire/heat'."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'It is cold' in Ewe?",
          options: [
            { id: 1, text: "Vɛ" },
            { id: 2, text: "Wɔ dzo" },
            { id: 3, text: "DɔkƆ si" },
            { id: 4, text: "Aɖe" }
          ],
          correctOptionId: 1,
          hints: ["Low temperature", "Short word"],
          explanation: "'Vɛ' means 'It is cold' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Yame nyo", right: "The weather is good" },
            { id: 2, left: "Wɔ dzo", right: "It is hot" },
            { id: 3, left: "Vɛ", right: "It is cold" },
            { id: 4, left: "Yame wɔ tsi", right: "It is raining" }
          ],
          hints: ["Yame nyo = weather is good", "Wɔ dzo = it is hot", "Vɛ = it is cold"],
          explanation: "These are helpful phrases for describing the weather in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-int-3",
    title: "Review: Weather & Seasons",
    icon: "refresh-outline",
    description: "Review the weather and season vocabulary you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Rain' in Ewe?",
        options: [
          { id: 1, text: "Tsikpe" },
          { id: 2, text: "Dzi" },
          { id: 3, text: "Aɖe" },
          { id: 4, text: "Fúfɔ" }
        ],
        correctOptionId: 1,
        hints: ["Water from the sky"],
        explanation: "'Tsikpe' means 'Rain' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Rainy season' in Ewe?",
        options: [
          { id: 1, text: "Tsikedzidzime" },
          { id: 2, text: "Kukua" },
          { id: 3, text: "Gleti" },
          { id: 4, text: "Nuwuwu" }
        ],
        correctOptionId: 1,
        hints: ["Season of rain"],
        explanation: "'Tsikedzidzime' means 'Rainy season' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'It is hot' in Ewe?",
        options: [
          { id: 1, text: "Wɔ dzo" },
          { id: 2, text: "Yame nyo" },
          { id: 3, text: "Vɛ" },
          { id: 4, text: "DɔkƆ" }
        ],
        correctOptionId: 1,
        hints: ["High temperature"],
        explanation: "'Wɔ dzo' means 'It is hot' in Ewe."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Weather' in Ewe?",
        options: [
          { id: 1, text: "Yame" },
          { id: 2, text: "Dzi" },
          { id: 3, text: "Tsikpe" },
          { id: 4, text: "Aɖe" }
        ],
        correctOptionId: 1,
        hints: ["The state of the sky"],
        explanation: "'Yame' means 'Weather' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Dzi", right: "Sun" },
          { id: 2, left: "Tsikpe", right: "Rain" },
          { id: 3, left: "Aɖe", right: "Wind" },
          { id: 4, left: "Yame nyo", right: "The weather is good" },
          { id: 5, left: "Vɛ", right: "It is cold" }
        ],
        hints: ["Dzi = sun", "Tsikpe = rain", "Aɖe = wind"],
        explanation: "These are key weather words from this chapter."
      }
    ]
  }
};
