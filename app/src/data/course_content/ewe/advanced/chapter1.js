export default {
  id: 1,
  title: "Complex Conversations",
  description: "Learn advanced Ewe phrases for discussions, clarifying, and emphasizing points",
  icon: "chatbubbles-outline",
  totalXp: 30,
  difficulty: "Advanced",

  sections: [
    {
      id: "a1-1",
      type: "advanced_vocabulary",
      title: "Discussion Phrases",
      icon: "chatbubbles-outline",
      description: "Start and guide deeper conversations in Ewe",
      words: ["Nya si mele", "Kpɔkplɔ", "Ðo nya", "Bia nya", "Tsɔe", "Gblɔ", "Se nya", "Kpɔ eŋu"],
      vocabulary: [
        { id: 1, english: "Discussion", native: "Kpɔkplɔ", pronunciation: "kpoh-kploh" },
        { id: 2, english: "To discuss", native: "Ðo nya", pronunciation: "doh nyah" },
        { id: 3, english: "To ask a question", native: "Bia nya", pronunciation: "bee-ah nyah" },
        { id: 4, english: "To explain", native: "Tsɔe", pronunciation: "tsuh-eh" },
        { id: 5, english: "To speak / say", native: "Gblɔ", pronunciation: "gbloh" },
        { id: 6, english: "To respond", native: "Se nya", pronunciation: "seh nyah" },
        { id: 7, english: "To answer", native: "Kpɔ eŋu", pronunciation: "kpoh eh-ngoo" },
        { id: 8, english: "Point / matter", native: "Nya", pronunciation: "nyah" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Discussion' in Ewe?", options: [{ id: 1, text: "Kpɔkplɔ" }, { id: 2, text: "Ðo nya" }, { id: 3, text: "Bia nya" }, { id: 4, text: "Gblɔ" }], correctOptionId: 1, hints: ["A talk about a topic"], explanation: "'Kpɔkplɔ' means 'Discussion' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To ask a question' in Ewe?", options: [{ id: 1, text: "Bia nya" }, { id: 2, text: "Ðo nya" }, { id: 3, text: "Kpɔkplɔ" }, { id: 4, text: "Se nya" }], correctOptionId: 1, hints: ["Seeking information"], explanation: "'Bia nya' means 'To ask a question' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To explain' in Ewe?", options: [{ id: 1, text: "Tsɔe" }, { id: 2, text: "Gblɔ" }, { id: 3, text: "Bia nya" }, { id: 4, text: "Kpɔ eŋu" }], correctOptionId: 1, hints: ["Make something clear"], explanation: "'Tsɔe' means 'To explain' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Kpɔkplɔ", right: "Discussion" }, { id: 2, left: "Bia nya", right: "To ask a question" }, { id: 3, left: "Tsɔe", right: "To explain" }, { id: 4, left: "Gblɔ", right: "To speak" }], hints: ["Kpɔkplɔ = discussion", "Bia nya = ask a question"], explanation: "These are useful discussion phrases in Ewe." }
      ]
    },

    {
      id: "a1-2",
      type: "expressions_idioms",
      title: "Clarifying Understanding",
      icon: "help-circle-outline",
      description: "Ask for and confirm clarification in Ewe",
      words: ["Nyateƒe", "Alẽke", "Nukata", "Me se o", "Ðo gɔme", "Gblɔe dometɔ", "Kpɔdze", "Nya la"],
      vocabulary: [
        { id: 9, english: "True / Indeed", native: "Nyateƒe", pronunciation: "nyah-teh-feh" },
        { id: 10, english: "How?", native: "Alẽke", pronunciation: "ah-len-keh" },
        { id: 11, english: "Why?", native: "Nukata", pronunciation: "noo-kah-tah" },
        { id: 12, english: "I don't understand", native: "Me se o", pronunciation: "meh seh oh" },
        { id: 13, english: "To understand", native: "Ðo gɔme", pronunciation: "doh goh-meh" },
        { id: 14, english: "Please repeat", native: "Gblɔe dometɔ", pronunciation: "gbloh-eh doh-meh-toh" },
        { id: 15, english: "Clear", native: "Kpɔdze", pronunciation: "kpoh-jeh" },
        { id: 16, english: "The matter / issue", native: "Nya la", pronunciation: "nyah lah" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I don't understand' in Ewe?", options: [{ id: 1, text: "Me se o" }, { id: 2, text: "Ðo gɔme" }, { id: 3, text: "Nyateƒe" }, { id: 4, text: "Kpɔdze" }], correctOptionId: 1, hints: ["Not understanding"], explanation: "'Me se o' means 'I don't understand' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Why?' in Ewe?", options: [{ id: 1, text: "Nukata" }, { id: 2, text: "Alẽke" }, { id: 3, text: "Nyateƒe" }, { id: 4, text: "Kpɔdze" }], correctOptionId: 1, hints: ["Asking a reason"], explanation: "'Nukata' means 'Why?' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'Please repeat' in Ewe?", options: [{ id: 1, text: "Gblɔe dometɔ" }, { id: 2, text: "Me se o" }, { id: 3, text: "Ðo gɔme" }, { id: 4, text: "Nya la" }], correctOptionId: 1, hints: ["Ask to say again"], explanation: "'Gblɔe dometɔ' means 'Please repeat' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe phrase to its English meaning.", pairs: [{ id: 1, left: "Me se o", right: "I don't understand" }, { id: 2, left: "Nukata", right: "Why?" }, { id: 3, left: "Alẽke", right: "How?" }, { id: 4, left: "Nyateƒe", right: "Indeed" }], hints: ["Me se o = I don't understand", "Nukata = why"], explanation: "These are clarifying phrases in Ewe." }
      ]
    },

    {
      id: "a1-3",
      type: "complex_sentences",
      title: "Emphasizing Points",
      icon: "megaphone-outline",
      description: "Emphasize and stress your points in Ewe",
      words: ["Veve", "Le nyateƒe me", "Ðe kɔkɔtɔ", "Gbɔ", "Dzidɔ", "Nya ta", "Kpɔɖeŋu", "Gbe ɖeka"],
      vocabulary: [
        { id: 17, english: "Important", native: "Veve", pronunciation: "veh-veh" },
        { id: 18, english: "In truth", native: "Le nyateƒe me", pronunciation: "leh nyah-teh-feh meh" },
        { id: 19, english: "Especially", native: "Ðe kɔkɔtɔ", pronunciation: "deh koh-koh-toh" },
        { id: 20, english: "More", native: "Gbɔ", pronunciation: "gboh" },
        { id: 21, english: "To emphasize", native: "Dzidɔ", pronunciation: "jee-doh" },
        { id: 22, english: "Main point", native: "Nya ta", pronunciation: "nyah tah" },
        { id: 23, english: "Therefore", native: "Kpɔɖeŋu", pronunciation: "kpoh-deh-ngoo" },
        { id: 24, english: "In short", native: "Gbe ɖeka", pronunciation: "gbeh deh-kah" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Important' in Ewe?", options: [{ id: 1, text: "Veve" }, { id: 2, text: "Home" }, { id: 3, text: "Gbɔ" }, { id: 4, text: "Dzidɔ" }], correctOptionId: 1, hints: ["Of high value"], explanation: "'Veve' means 'Important' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To emphasize' in Ewe?", options: [{ id: 1, text: "Dzidɔ" }, { id: 2, text: "Veve" }, { id: 3, text: "Gbɔ" }, { id: 4, text: "Nya ta" }], correctOptionId: 1, hints: ["Stress a point"], explanation: "'Dzidɔ' means 'To emphasize' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'Especially' in Ewe?", options: [{ id: 1, text: "Ðe kɔkɔtɔ" }, { id: 2, text: "Le nyateƒe me" }, { id: 3, text: "Gbe ɖeka" }, { id: 4, text: "Kpɔɖeŋu" }], correctOptionId: 1, hints: ["Particularly"], explanation: "'Ðe kɔkɔtɔ' means 'Especially' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Veve", right: "Important" }, { id: 2, left: "Dzidɔ", right: "To emphasize" }, { id: 3, left: "Le nyateƒe me", right: "In truth" }, { id: 4, left: "Gbe ɖeka", right: "In short" }], hints: ["Veve = important", "Dzidɔ = to emphasize"], explanation: "These are emphasizing words in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-adv-1",
    title: "Review: Complex Conversations",
    icon: "refresh-outline",
    description: "Review the complex conversation phrases you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Discussion' in Ewe?", options: [{ id: 1, text: "Kpɔkplɔ" }, { id: 2, text: "Ðo nya" }, { id: 3, text: "Bia nya" }, { id: 4, text: "Gblɔ" }], correctOptionId: 1, hints: ["A talk about a topic"], explanation: "'Kpɔkplɔ' means 'Discussion' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I don't understand' in Ewe?", options: [{ id: 1, text: "Me se o" }, { id: 2, text: "Ðo gɔme" }, { id: 3, text: "Nyateƒe" }, { id: 4, text: "Kpɔdze" }], correctOptionId: 1, hints: ["Not understanding"], explanation: "'Me se o' means 'I don't understand' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Important' in Ewe?", options: [{ id: 1, text: "Veve" }, { id: 2, text: "Home" }, { id: 3, text: "Gbɔ" }, { id: 4, text: "Dzidɔ" }], correctOptionId: 1, hints: ["Of high value"], explanation: "'Veve' means 'Important' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To ask a question' in Ewe?", options: [{ id: 1, text: "Bia nya" }, { id: 2, text: "Ðo nya" }, { id: 3, text: "Kpɔkplɔ" }, { id: 4, text: "Se nya" }], correctOptionId: 1, hints: ["Seeking information"], explanation: "'Bia nya' means 'To ask a question' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Kpɔkplɔ", right: "Discussion" }, { id: 2, left: "Bia nya", right: "To ask a question" }, { id: 3, left: "Me se o", right: "I don't understand" }, { id: 4, left: "Veve", right: "Important" }, { id: 5, left: "Dzidɔ", right: "To emphasize" }], hints: ["Kpɔkplɔ = discussion", "Bia nya = ask a question"], explanation: "These are key complex conversation phrases from this chapter." }
    ]
  }
};
