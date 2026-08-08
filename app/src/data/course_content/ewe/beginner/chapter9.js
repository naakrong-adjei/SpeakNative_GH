// data/course_content/ewe/beginner/chapter9.js
export default {
  id: 9,
  title: "School & Work",
  description: "Learn words and phrases for school subjects and work in Ewe",
  icon: "school-outline",
  totalXp: 18,
  difficulty: "Beginner",

  sections: [
    {
      id: "9-1",
      type: "words",
      title: "School Subjects",
      icon: "book-outline",
      description: "Learn the Ewe names for school subjects",
      words: ["Nufiala", "Nusrɔ̃la", "Akɔntabubɔ", "Ɣleti ŋutinya", "Gbenyagbale", "Nusiwo ŋu wofe nya", "Nuŋɔŋlɔ", "Xlẽŋlẽ"],
      vocabulary: [
        {
          id: 1,
          english: "Teacher",
          native: "Nufiala",
          pronunciation: "noo-fee-ah-lah"
          // audioUrl: "/audio/ewe/nufiala.mp3"
        },
        {
          id: 2,
          english: "Student",
          native: "Nusrɔ̃la",
          pronunciation: "noo-sroh-lah"
          // audioUrl: "/audio/ewe/nusrɔ̃la.mp3"
        },
        {
          id: 3,
          english: "Mathematics",
          native: "Akɔntabubɔ",
          pronunciation: "ah-kohn-tah-boo-boh"
          // audioUrl: "/audio/ewe/akɔntabubɔ.mp3"
        },
        {
          id: 4,
          english: "History",
          native: "Ɣleti ŋutinya",
          pronunciation: "hleh-tee ngoo-teen-yah"
          // audioUrl: "/audio/ewe/ɣleti_ŋutinya.mp3"
        },
        {
          id: 5,
          english: "Science",
          native: "Gbenyagbale",
          pronunciation: "gbeh-nyah-gbah-leh"
          // audioUrl: "/audio/ewe/gbenyagbale.mp3"
        },
        {
          id: 6,
          english: "Art / Design",
          native: "Nusiwo ŋu wofe nya",
          pronunciation: "noo-see-woh ngoo woh-feh nyah"
          // audioUrl: "/audio/ewe/nusiwo_ŋu_wofe_nya.mp3"
        },
        {
          id: 7,
          english: "Writing / Essay",
          native: "Nuŋɔŋlɔ",
          pronunciation: "noo-ngoh-ngloh"
          // audioUrl: "/audio/ewe/nuŋɔŋlɔ.mp3"
        },
        {
          id: 8,
          english: "Reading",
          native: "Xlẽŋlẽ",
          pronunciation: "hl-eh-ngl-eh"
          // audioUrl: "/audio/ewe/xlẽŋlẽ.mp3"
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Teacher' in Ewe?",
          options: [
            { id: 1, text: "Nufiala" },
            { id: 2, text: "Nusrɔ̃la" },
            { id: 3, text: "Akɔntabubɔ" },
            { id: 4, text: "Nuŋɔŋlɔ" }
          ],
          correctOptionId: 1,
          hints: ["A person who teaches", "Starts with 'Nu'"],
          explanation: "'Nufiala' means 'Teacher' in Ewe."
        },
        {
          id: 102,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Student' in Ewe?",
          options: [
            { id: 1, text: "Nufiala" },
            { id: 2, text: "Nusrɔ̃la" },
            { id: 3, text: "Akɔntabubɔ" },
            { id: 4, text: "Nuŋɔŋlɔ" }
          ],
          correctOptionId: 2,
          hints: ["A person who learns", "Contains 'srɔ̃' (learn)"],
          explanation: "'Nusrɔ̃la' means 'Student' in Ewe."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Mathematics' in Ewe?",
          options: [
            { id: 1, text: "Akɔntabubɔ" },
            { id: 2, text: "Ɣleti ŋutinya" },
            { id: 3, text: "Gbenyagbale" },
            { id: 4, text: "Xlẽŋlẽ" }
          ],
          correctOptionId: 1,
          hints: ["Subject about numbers", "Starts with 'Ak'"],
          explanation: "'Akɔntabubɔ' means 'Mathematics' in Ewe."
        },
        {
          id: 104,
          type: "matching",
          instruction: "Match each Ewe word to its English meaning.",
          pairs: [
            { id: 1, left: "Nufiala", right: "Teacher" },
            { id: 2, left: "Nusrɔ̃la", right: "Student" },
            { id: 3, left: "Akɔntabubɔ", right: "Mathematics" },
            { id: 4, left: "Ɣleti ŋutinya", right: "History" },
            { id: 5, left: "Gbenyagbale", right: "Science" }
          ],
          hints: ["Nufiala = teacher", "Nusrɔ̃la = student", "Akɔntabubɔ = math"],
          explanation: "These are common school words in Ewe."
        }
      ]
    },

    {
      id: "9-2",
      type: "phrases",
      title: "Education Phrases",
      icon: "create-outline",
      description: "Learn useful phrases to talk about learning in Ewe",
      words: ["Mele xlẽm", "Mele dɔ wɔm", "Mese egɔme", "Nyemese egɔme", "Bia", "Ga gblɔ", "Etso", "Egbe"],
      vocabulary: [
        {
          id: 9,
          english: "I am reading",
          native: "Mele xlẽm",
          pronunciation: "meh-leh hl-ehm"
          // audioUrl: "/audio/ewe/mele_xlẽm.mp3"
        },
        {
          id: 10,
          english: "I am working",
          native: "Mele dɔ wɔm",
          pronunciation: "meh-leh doh wohm"
          // audioUrl: "/audio/ewe/mele_dɔ_wɔm.mp3"
        },
        {
          id: 11,
          english: "I understand",
          native: "Mese egɔme",
          pronunciation: "meh-seh eh-goh-meh"
          // audioUrl: "/audio/ewe/mese_egɔme.mp3"
        },
        {
          id: 12,
          english: "I don't understand",
          native: "Nyemese egɔme",
          pronunciation: "nyeh-meh-seh eh-goh-meh"
          // audioUrl: "/audio/ewe/nyemese_egɔme.mp3"
        },
        {
          id: 13,
          english: "To ask",
          native: "Bia",
          pronunciation: "bee-ah"
          // audioUrl: "/audio/ewe/bia.mp3"
        },
        {
          id: 14,
          english: "To repeat / answer",
          native: "Ga gblɔ",
          pronunciation: "gah gbloh"
          // audioUrl: "/audio/ewe/ga_gblɔ.mp3"
        },
        {
          id: 15,
          english: "Tomorrow / future",
          native: "Etso",
          pronunciation: "eh-tsoh"
          // audioUrl: "/audio/ewe/etso.mp3"
        },
        {
          id: 16,
          english: "Today",
          native: "Egbe",
          pronunciation: "eh-gbeh"
          // audioUrl: "/audio/ewe/egbe.mp3"
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I understand' in Ewe?",
          options: [
            { id: 1, text: "Mese egɔme" },
            { id: 2, text: "Nyemese egɔme" },
            { id: 3, text: "Mele xlẽm" },
            { id: 4, text: "Mele dɔ wɔm" }
          ],
          correctOptionId: 1,
          hints: ["Me = I", "se egɔme = understand"],
          explanation: "'Mese egɔme' means 'I understand'. 'se egɔme' means 'understand'."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I don't understand' in Ewe?",
          options: [
            { id: 1, text: "Mese egɔme" },
            { id: 2, text: "Nyemese egɔme" },
            { id: 3, text: "Mele xlẽm" },
            { id: 4, text: "Mele dɔ wɔm" }
          ],
          correctOptionId: 2,
          hints: ["Negative form of 'Mese egɔme'", "Adds 'Nye' at the start"],
          explanation: "'Nyemese egɔme' means 'I don't understand'. The 'Nye' makes it negative."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am reading' in Ewe?",
          options: [
            { id: 1, text: "Mese egɔme" },
            { id: 2, text: "Nyemese egɔme" },
            { id: 3, text: "Mele xlẽm" },
            { id: 4, text: "Mele dɔ wɔm" }
          ],
          correctOptionId: 3,
          hints: ["xlẽ = read", "Mele ...m = I am (in progress)"],
          explanation: "'Mele xlẽm' means 'I am reading'. 'xlẽ' means 'read'."
        },
        {
          id: 204,
          type: "matching",
          instruction: "Match each Ewe phrase to its English meaning.",
          pairs: [
            { id: 1, left: "Mese egɔme", right: "I understand" },
            { id: 2, left: "Nyemese egɔme", right: "I don't understand" },
            { id: 3, left: "Mele xlẽm", right: "I am reading" },
            { id: 4, left: "Mele dɔ wɔm", right: "I am working" }
          ],
          hints: ["Mese egɔme = I understand", "Nyemese egɔme = I don't understand", "Mele xlẽm = I am reading"],
          explanation: "These are useful phrases for learning in Ewe."
        }
      ]
    },

    {
      id: "9-3",
      type: "simple_sentences",
      title: "Work & Occupations",
      icon: "briefcase-outline",
      description: "Learn the Ewe names for common occupations",
      words: ["Ɖɔkta", "Nufiala", "Nyateƒe ame", "Agbledela", "Ɖɔlikpala", "Adzrala", "Ɖɔnunɔla", "Fledela"],
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
          english: "Teacher",
          native: "Nufiala",
          pronunciation: "noo-fee-ah-lah"
          // audioUrl: "/audio/ewe/nufiala.mp3"
        },
        {
          id: 19,
          english: "Pastor / Priest",
          native: "Nyateƒe ame",
          pronunciation: "nyah-teh-feh ah-meh"
          // audioUrl: "/audio/ewe/nyateƒe_ame.mp3"
        },
        {
          id: 20,
          english: "Farmer",
          native: "Agbledela",
          pronunciation: "ah-gbleh-deh-lah"
          // audioUrl: "/audio/ewe/agbledela.mp3"
        },
        {
          id: 21,
          english: "Driver / Guide",
          native: "Ɖɔlikpala",
          pronunciation: "doh-lee-kpah-lah"
          // audioUrl: "/audio/ewe/ɉɔlikpala.mp3"
        },
        {
          id: 22,
          english: "Trader / Seller",
          native: "Adzrala",
          pronunciation: "ah-jrah-lah"
          // audioUrl: "/audio/ewe/adzrala.mp3"
        },
        {
          id: 23,
          english: "Judge / Lawyer",
          native: "Ɖɔnunɔla",
          pronunciation: "doh-noo-noh-lah"
          // audioUrl: "/audio/ewe/ɉɔnunɔla.mp3"
        },
        {
          id: 24,
          english: "Buyer / Customer",
          native: "Fledela",
          pronunciation: "fleh-deh-lah"
          // audioUrl: "/audio/ewe/fledela.mp3"
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Doctor' in Ewe?",
          options: [
            { id: 1, text: "Ɖɔkta" },
            { id: 2, text: "Nyateƒe ame" },
            { id: 3, text: "Agbledela" },
            { id: 4, text: "Ɖɔnunɔla" }
          ],
          correctOptionId: 1,
          hints: ["Treats sick people", "Starts with 'Ɖɔ'"],
          explanation: "'Ɖɔkta' means 'Doctor' in Ewe."
        },
        {
          id: 302,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Farmer' in Ewe?",
          options: [
            { id: 1, text: "Ɖɔkta" },
            { id: 2, text: "Nyateƒe ame" },
            { id: 3, text: "Agbledela" },
            { id: 4, text: "Ɖɔnunɔla" }
          ],
          correctOptionId: 3,
          hints: ["Works on a farm", "Contains 'agble' (farm)"],
          explanation: "'Agbledela' means 'Farmer' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "How do you say 'Trader / Seller' in Ewe?",
          options: [
            { id: 1, text: "Adzrala" },
            { id: 2, text: "Ɖɔlikpala" },
            { id: 3, text: "Ɖɔnunɔla" },
            { id: 4, text: "Fledela" }
          ],
          correctOptionId: 1,
          hints: ["Sells goods", "Starts with 'Ad'"],
          explanation: "'Adzrala' means 'Trader / Seller' in Ewe."
        },
        {
          id: 304,
          type: "matching",
          instruction: "Match each Ewe occupation to its English meaning.",
          pairs: [
            { id: 1, left: "Ɖɔkta", right: "Doctor" },
            { id: 2, left: "Nufiala", right: "Teacher" },
            { id: 3, left: "Agbledela", right: "Farmer" },
            { id: 4, left: "Adzrala", right: "Trader / Seller" }
          ],
          hints: ["Ɖɔkta = doctor", "Nufiala = teacher", "Agbledela = farmer"],
          explanation: "These are common occupations in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-9",
    title: "Review: School & Work",
    icon: "refresh-outline",
    description: "Review the school, education, and occupation words you've learned",
    questions: [
      {
        id: 401,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Teacher' in Ewe?",
        options: [
          { id: 1, text: "Nufiala" },
          { id: 2, text: "Nusrɔ̃la" },
          { id: 3, text: "Akɔntabubɔ" },
          { id: 4, text: "Nuŋɔŋlɔ" }
        ],
        correctOptionId: 1,
        hints: ["A person who teaches"],
        explanation: "'Nufiala' means 'Teacher' in Ewe."
      },
      {
        id: 402,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I understand' in Ewe?",
        options: [
          { id: 1, text: "Mese egɔme" },
          { id: 2, text: "Nyemese egɔme" },
          { id: 3, text: "Mele xlẽm" },
          { id: 4, text: "Mele dɔ wɔm" }
        ],
        correctOptionId: 1,
        hints: ["se egɔme = understand"],
        explanation: "'Mese egɔme' means 'I understand' in Ewe."
      },
      {
        id: 403,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "How do you say 'Doctor' in Ewe?",
        options: [
          { id: 1, text: "Ɖɔkta" },
          { id: 2, text: "Nyateƒe ame" },
          { id: 3, text: "Agbledela" },
          { id: 4, text: "Ɖɔnunɔla" }
        ],
        correctOptionId: 1,
        hints: ["Treats sick people"],
        explanation: "'Ɖɔkta' means 'Doctor' in Ewe."
      },
      {
        id: 404,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am working' in Ewe?",
        options: [
          { id: 1, text: "Mele xlẽm" },
          { id: 2, text: "Mele dɔ wɔm" },
          { id: 3, text: "Mese egɔme" },
          { id: 4, text: "Nyemese egɔme" }
        ],
        correctOptionId: 2,
        hints: ["dɔ = work", "Mele ...m = I am"],
        explanation: "'Mele dɔ wɔm' means 'I am working' in Ewe."
      },
      {
        id: 405,
        type: "matching",
        instruction: "Match each Ewe word to its English meaning.",
        pairs: [
          { id: 1, left: "Nusrɔ̃la", right: "Student" },
          { id: 2, left: "Akɔntabubɔ", right: "Mathematics" },
          { id: 3, left: "Ɖɔkta", right: "Doctor" },
          { id: 4, left: "Agbledela", right: "Farmer" },
          { id: 5, left: "Nyemese egɔme", right: "I don't understand" }
        ],
        hints: ["Nusrɔ̃la = student", "Ɖɔkta = doctor", "Agbledela = farmer"],
        explanation: "These are key school and work words from this chapter."
      }
    ]
  }
};
