export default {
  id: 6,
  title: "Advanced Grammar",
  description: "Learn advanced Ewe grammar for time, location, and connecting ideas",
  icon: "git-merge-outline",
  totalXp: 30,
  difficulty: "Advanced",

  sections: [
    {
      id: "a6-1",
      type: "advanced_vocabulary",
      title: "Time Phrases",
      icon: "time-outline",
      description: "Learn advanced Ewe time expressions",
      words: ["Hafi", "Xoxoa", "Egbe", "Etso", "Tso", "Nyitsɔ", "Ɣleti", "Ƒe"],
      vocabulary: [
        { id: 1, english: "Before", native: "Hafi", pronunciation: "hah-fee" },
        { id: 2, english: "After", native: "Megbe", pronunciation: "meh-gbeh" },
        { id: 3, english: "Yesterday", native: "Etso", pronunciation: "eh-tsoh" },
        { id: 4, english: "Tomorrow", native: "Nyitsɔ", pronunciation: "nyee-tsoh" },
        { id: 5, english: "Today", native: "Egbe", pronunciation: "eh-gbeh" },
        { id: 6, english: "Previously", native: "Xoxoa", pronunciation: "xoh-xoh-ah" },
        { id: 7, english: "Month", native: "Ɣleti", pronunciation: "gleh-tee" },
        { id: 8, english: "Year", native: "Ƒe", pronunciation: "feh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Tomorrow' in Ewe?", options: [{ id: 1, text: "Nyitsɔ" }, { id: 2, text: "Etso" }, { id: 3, text: "Egbe" }, { id: 4, text: "Hafi" }], correctOptionId: 1, hints: ["The next day"], explanation: "'Nyitsɔ' means 'Tomorrow' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Yesterday' in Ewe?", options: [{ id: 1, text: "Etso" }, { id: 2, text: "Nyitsɔ" }, { id: 3, text: "Egbe" }, { id: 4, text: "Megbe" }], correctOptionId: 1, hints: ["The day before"], explanation: "'Etso' means 'Yesterday' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Year' in Ewe?", options: [{ id: 1, text: "Ƒe" }, { id: 2, text: "Ɣleti" }, { id: 3, text: "Egbe" }, { id: 4, text: "Hafi" }], correctOptionId: 1, hints: ["12 months"], explanation: "'Ƒe' means 'Year' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe time word to its English meaning.", pairs: [{ id: 1, left: "Egbe", right: "Today" }, { id: 2, left: "Etso", right: "Yesterday" }, { id: 3, left: "Nyitsɔ", right: "Tomorrow" }, { id: 4, left: "Ƒe", right: "Year" }], hints: ["Egbe = today", "Etso = yesterday"], explanation: "These are time phrases in Ewe." }
      ]
    },

    {
      id: "a6-2",
      type: "expressions_idioms",
      title: "Location Phrases",
      icon: "navigate-outline",
      description: "Learn advanced Ewe location expressions",
      words: ["Le anyi", "Le me", "Le ŋgɔ", "Le megbe", "Le dome", "Le afi adeke", "Le ƒome", "Le he"],
      vocabulary: [
        { id: 9, english: "On / Above", native: "Le ŋgɔ", pronunciation: "leh ngoh" },
        { id: 10, english: "In / Inside", native: "Le me", pronunciation: "leh meh" },
        { id: 11, english: "Under", native: "Le anyi", pronunciation: "leh ah-nyee" },
        { id: 12, english: "Behind", native: "Le megbe", pronunciation: "leh meh-gbeh" },
        { id: 13, english: "Between", native: "Le dome", pronunciation: "leh doh-meh" },
        { id: 14, english: "Near", native: "Le ƒome", pronunciation: "leh foh-meh" },
        { id: 15, english: "Far", native: "Le he", pronunciation: "leh heh" },
        { id: 16, english: "Nowhere", native: "Le afi adeke", pronunciation: "leh ah-fee ah-deh-keh" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'Under' in Ewe?", options: [{ id: 1, text: "Le anyi" }, { id: 2, text: "Le ŋgɔ" }, { id: 3, text: "Le me" }, { id: 4, text: "Le megbe" }], correctOptionId: 1, hints: ["Below something"], explanation: "'Le anyi' means 'Under' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'Behind' in Ewe?", options: [{ id: 1, text: "Le megbe" }, { id: 2, text: "Le ŋgɔ" }, { id: 3, text: "Le dome" }, { id: 4, text: "Le ƒome" }], correctOptionId: 1, hints: ["At the back"], explanation: "'Le megbe' means 'Behind' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'Near' in Ewe?", options: [{ id: 1, text: "Le ƒome" }, { id: 2, text: "Le he" }, { id: 3, text: "Le dome" }, { id: 4, text: "Le megbe" }], correctOptionId: 1, hints: ["Close by"], explanation: "'Le ƒome' means 'Near' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe location phrase to its English meaning.", pairs: [{ id: 1, left: "Le ŋgɔ", right: "Above" }, { id: 2, left: "Le me", right: "Inside" }, { id: 3, left: "Le anyi", right: "Under" }, { id: 4, left: "Le megbe", right: "Behind" }], hints: ["Le ŋgɔ = above", "Le me = inside"], explanation: "These are location phrases in Ewe." }
      ]
    },

    {
      id: "a6-3",
      type: "complex_sentences",
      title: "Connectors",
      icon: "link-outline",
      description: "Learn advanced Ewe connecting words",
      words: ["Gake", "Elabena", "Alo", "Nenema", "Tsɔ", "Kple", "Hafi", "Nɛkema"],
      vocabulary: [
        { id: 17, english: "But", native: "Gake", pronunciation: "gah-keh" },
        { id: 18, english: "Because", native: "Elabena", pronunciation: "eh-lah-beh-nah" },
        { id: 19, english: "Or", native: "Alo", pronunciation: "ah-loh" },
        { id: 20, english: "So / Thus", native: "Nenema", pronunciation: "neh-neh-mah" },
        { id: 21, english: "Also", native: "Kple", pronunciation: "kpleh" },
        { id: 22, english: "Then / So", native: "Nɛkema", pronunciation: "neh-keh-mah" },
        { id: 23, english: "Although", native: "Wòahafi", pronunciation: "woh-ah-hah-fee" },
        { id: 24, english: "However", native: "Gake hã", pronunciation: "gah-keh hah" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'But' in Ewe?", options: [{ id: 1, text: "Gake" }, { id: 2, text: "Elabena" }, { id: 3, text: "Alo" }, { id: 4, text: "Kple" }], correctOptionId: 1, hints: ["Contrast word"], explanation: "'Gake' means 'But' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Because' in Ewe?", options: [{ id: 1, text: "Elabena" }, { id: 2, text: "Gake" }, { id: 3, text: "Alo" }, { id: 4, text: "Nenema" }], correctOptionId: 1, hints: ["Gives a reason"], explanation: "'Elabena' means 'Because' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'However' in Ewe?", options: [{ id: 1, text: "Gake hã" }, { id: 2, text: "Elabena" }, { id: 3, text: "Nenema" }, { id: 4, text: "Kple" }], correctOptionId: 1, hints: ["Nevertheless"], explanation: "'Gake hã' means 'However' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe connector to its English meaning.", pairs: [{ id: 1, left: "Gake", right: "But" }, { id: 2, left: "Elabena", right: "Because" }, { id: 3, left: "Alo", right: "Or" }, { id: 4, left: "Nenema", right: "So / Thus" }], hints: ["Gake = but", "Elabena = because"], explanation: "These are connecting words in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-adv-6",
    title: "Review: Advanced Grammar",
    icon: "refresh-outline",
    description: "Review the advanced grammar topics you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Tomorrow' in Ewe?", options: [{ id: 1, text: "Nyitsɔ" }, { id: 2, text: "Etso" }, { id: 3, text: "Egbe" }, { id: 4, text: "Hafi" }], correctOptionId: 1, hints: ["The next day"], explanation: "'Nyitsɔ' means 'Tomorrow' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'Under' in Ewe?", options: [{ id: 1, text: "Le anyi" }, { id: 2, text: "Le ŋgɔ" }, { id: 3, text: "Le me" }, { id: 4, text: "Le megbe" }], correctOptionId: 1, hints: ["Below something"], explanation: "'Le anyi' means 'Under' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'But' in Ewe?", options: [{ id: 1, text: "Gake" }, { id: 2, text: "Elabena" }, { id: 3, text: "Alo" }, { id: 4, text: "Kple" }], correctOptionId: 1, hints: ["Contrast word"], explanation: "'Gake' means 'But' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Yesterday' in Ewe?", options: [{ id: 1, text: "Etso" }, { id: 2, text: "Nyitsɔ" }, { id: 3, text: "Egbe" }, { id: 4, text: "Megbe" }], correctOptionId: 1, hints: ["The day before"], explanation: "'Etso' means 'Yesterday' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Nyitsɔ", right: "Tomorrow" }, { id: 2, left: "Etso", right: "Yesterday" }, { id: 3, left: "Gake", right: "But" }, { id: 4, left: "Elabena", right: "Because" }, { id: 5, left: "Le anyi", right: "Under" }], hints: ["Nyitsɔ = tomorrow", "Etso = yesterday"], explanation: "These are key grammar words from this chapter." }
    ]
  }
};
