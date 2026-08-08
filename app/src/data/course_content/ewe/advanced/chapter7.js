export default {
  id: 7,
  title: "Proverbs & Idioms",
  description: "Learn common Ewe proverbs, idioms, and wise sayings",
  icon: "bulb-outline",
  totalXp: 30,
  difficulty: "Advanced",

  sections: [
    {
      id: "a7-1",
      type: "advanced_vocabulary",
      title: "Common Proverbs",
      icon: "bulb-outline",
      description: "Learn well-known Ewe sayings and their meanings",
      words: ["Lolo", "Dzidzɔ", "Do", "Veledodo", "Nugbɔ", "Amegbarɔ", "Sesrɔ̃", "Nublanui"],
      vocabulary: [
        { id: 1, english: "Wisdom", native: "Nugbɔ", pronunciation: "noo-gboh" },
        { id: 2, english: "Patience", native: "Veledodo", pronunciation: "veh-leh-doh-doh" },
        { id: 3, english: "Knowledge", native: "Sesrɔ̃", pronunciation: "seh-sroh" },
        { id: 4, english: "Unity", native: "Dokuwɔwɔ", pronunciation: "doh-koo-woh-woh" },
        { id: 5, english: "Humble", native: "Nublanui", pronunciation: "noo-blah-noo-ee" },
        { id: 6, english: "Endurance", native: "Do", pronunciation: "doh" },
        { id: 7, english: "Courage", native: "Dziƒoƒo", pronunciation: "jee-foh-foh" },
        { id: 8, english: "Proverb", native: "Lolo", pronunciation: "loh-loh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Wisdom' in Ewe?", options: [{ id: 1, text: "Nugbɔ" }, { id: 2, text: "Veledodo" }, { id: 3, text: "Sesrɔ̃" }, { id: 4, text: "Lolo" }], correctOptionId: 1, hints: ["Deep understanding"], explanation: "'Nugbɔ' means 'Wisdom' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Patience' in Ewe?", options: [{ id: 1, text: "Veledodo" }, { id: 2, text: "Nugbɔ" }, { id: 3, text: "Dokuwɔwɔ" }, { id: 4, text: "Do" }], correctOptionId: 1, hints: ["Waiting calmly"], explanation: "'Veledodo' means 'Patience' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Unity' in Ewe?", options: [{ id: 1, text: "Dokuwɔwɔ" }, { id: 2, text: "Nugbɔ" }, { id: 3, text: "Veledodo" }, { id: 4, text: "Sesrɔ̃" }], correctOptionId: 1, hints: ["Being together"], explanation: "'Dokuwɔwɔ' means 'Unity' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Nugbɔ", right: "Wisdom" }, { id: 2, left: "Veledodo", right: "Patience" }, { id: 3, left: "Dokuwɔwɔ", right: "Unity" }, { id: 4, left: "Sesrɔ̃", right: "Knowledge" }], hints: ["Nugbɔ = wisdom", "Veledodo = patience"], explanation: "These are proverb-related words in Ewe." }
      ]
    },

    {
      id: "a7-2",
      type: "expressions_idioms",
      title: "Proverb Meanings",
      icon: "chatbox-ellipses-outline",
      description: "Learn the meanings behind common Ewe sayings",
      words: ["Nublanui", "Gbegbɔgblɔ", "Kpɔkplɔ", "Ŋutsu", "Nyɔnu", "Ame", "Dɔ", "Dzidzɔ"],
      vocabulary: [
        { id: 9, english: "Meaning", native: "Gɔmeɖeɖe", pronunciation: "goh-meh-deh-deh" },
        { id: 10, english: "Saying", native: "Gbegbɔgblɔ", pronunciation: "gbeh-gboh-gbloh" },
        { id: 11, english: "Lesson", native: "Sesrɔ̃", pronunciation: "seh-sroh" },
        { id: 12, english: "Advice", native: "Aɖaŋuɖoɖo", pronunciation: "ah-dah-ngoo-doh-doh" },
        { id: 13, english: "An elder", native: "Ame anyi", pronunciation: "ah-meh ah-nyee" },
        { id: 14, english: "Wisdom saying", native: "Nugbɔ gbe", pronunciation: "noo-gboh gbeh" },
        { id: 15, english: "To teach", native: "Fia", pronunciation: "fee-ah" },
        { id: 16, english: "To learn", native: "Sesrɔ̃", pronunciation: "seh-sroh" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Meaning' in Ewe?", options: [{ id: 1, text: "Gɔmeɖeɖe" }, { id: 2, text: "Gbegbɔgblɔ" }, { id: 3, text: "Aɖaŋuɖoɖo" }, { id: 4, text: "Nugbɔ gbe" }], correctOptionId: 1, hints: ["What it signifies"], explanation: "'Gɔmeɖeɖe' means 'Meaning' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Advice' in Ewe?", options: [{ id: 1, text: "Aɖaŋuɖoɖo" }, { id: 2, text: "Gɔmeɖeɖe" }, { id: 3, text: "Gbegbɔgblɔ" }, { id: 4, text: "Sesrɔ̃" }], correctOptionId: 1, hints: ["Guidance given"], explanation: "'Aɖaŋuɖoɖo' means 'Advice' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Saying' in Ewe?", options: [{ id: 1, text: "Gbegbɔgblɔ" }, { id: 2, text: "Gɔmeɖeɖe" }, { id: 3, text: "Aɖaŋuɖoɖo" }, { id: 4, text: "Fia" }], correctOptionId: 1, hints: ["A spoken phrase"], explanation: "'Gbegbɔgblɔ' means 'Saying' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Gɔmeɖeɖe", right: "Meaning" }, { id: 2, left: "Gbegbɔgblɔ", right: "Saying" }, { id: 3, left: "Aɖaŋuɖoɖo", right: "Advice" }, { id: 4, left: "Fia", right: "To teach" }], hints: ["Gɔmeɖeɖe = meaning", "Gbegbɔgblɔ = saying"], explanation: "These are proverb-related words in Ewe." }
      ]
    },

    {
      id: "a7-3",
      type: "complex_sentences",
      title: "Old Sayings",
      icon: "hourglass-outline",
      description: "Learn classic Ewe sayings passed down through generations",
      words: ["Ƒomegbe", "Aƒe", "Dzidzɔ", "Nugbɔ", "Lolo", "Amegbetɔ", "Gbe", "Nya"],
      vocabulary: [
        { id: 17, english: "Heritage", native: "Ƒomegbe", pronunciation: "foh-meh-gbeh" },
        { id: 18, english: "Ancestors", native: "ƒomegbe", pronunciation: "foh-meh-gbeh" },
        { id: 19, english: "Tradition", native: "ƒome", pronunciation: "foh-meh" },
        { id: 20, english: "Past", native: "Xoxoa", pronunciation: "xoh-xoh-ah" },
        { id: 21, english: "To remember", native: "Ðo ŋku", pronunciation: "doh ngoo" },
        { id: 22, english: "To forget", native: "Ɖo ŋku", pronunciation: "doh ngoo" },
        { id: 23, english: "Generation", native: "Dzidzime", pronunciation: "jee-jee-meh" },
        { id: 24, english: "Legacy", native: "Nugbɔ", pronunciation: "noo-gboh" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Heritage' in Ewe?", options: [{ id: 1, text: "Ƒomegbe" }, { id: 2, text: "Xoxoa" }, { id: 3, text: "Dzidzime" }, { id: 4, text: "Nugbɔ" }], correctOptionId: 1, hints: ["Passed-down culture"], explanation: "'Ƒomegbe' means 'Heritage' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Generation' in Ewe?", options: [{ id: 1, text: "Dzidzime" }, { id: 2, text: "Xoxoa" }, { id: 3, text: "Ƒomegbe" }, { id: 4, text: "Nugbɔ" }], correctOptionId: 1, hints: ["A group of ages"], explanation: "'Dzidzime' means 'Generation' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To remember' in Ewe?", options: [{ id: 1, text: "Ðo ŋku" }, { id: 2, text: "Xoxoa" }, { id: 3, text: "Dzidzime" }, { id: 4, text: "Nugbɔ" }], correctOptionId: 1, hints: ["Keep in mind"], explanation: "'Ðo ŋku' means 'To remember' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Ƒomegbe", right: "Heritage" }, { id: 2, left: "Dzidzime", right: "Generation" }, { id: 3, left: "Xoxoa", right: "Past" }, { id: 4, left: "Ðo ŋku", right: "To remember" }], hints: ["Ƒomegbe = heritage", "Dzidzime = generation"], explanation: "These are heritage words in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-adv-7",
    title: "Review: Proverbs & Idioms",
    icon: "refresh-outline",
    description: "Review the proverbs and idioms vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Wisdom' in Ewe?", options: [{ id: 1, text: "Nugbɔ" }, { id: 2, text: "Veledodo" }, { id: 3, text: "Sesrɔ̃" }, { id: 4, text: "Lolo" }], correctOptionId: 1, hints: ["Deep understanding"], explanation: "'Nugbɔ' means 'Wisdom' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Meaning' in Ewe?", options: [{ id: 1, text: "Gɔmeɖeɖe" }, { id: 2, text: "Gbegbɔgblɔ" }, { id: 3, text: "Aɖaŋuɖoɖo" }, { id: 4, text: "Nugbɔ gbe" }], correctOptionId: 1, hints: ["What it signifies"], explanation: "'Gɔmeɖeɖe' means 'Meaning' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Patience' in Ewe?", options: [{ id: 1, text: "Veledodo" }, { id: 2, text: "Nugbɔ" }, { id: 3, text: "Dokuwɔwɔ" }, { id: 4, text: "Do" }], correctOptionId: 1, hints: ["Waiting calmly"], explanation: "'Veledodo' means 'Patience' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Heritage' in Ewe?", options: [{ id: 1, text: "Ƒomegbe" }, { id: 2, text: "Xoxoa" }, { id: 3, text: "Dzidzime" }, { id: 4, text: "Nugbɔ" }], correctOptionId: 1, hints: ["Passed-down culture"], explanation: "'Ƒomegbe' means 'Heritage' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Nugbɔ", right: "Wisdom" }, { id: 2, left: "Veledodo", right: "Patience" }, { id: 3, left: "Gɔmeɖeɖe", right: "Meaning" }, { id: 4, left: "Dzidzime", right: "Generation" }, { id: 5, left: "Ƒomegbe", right: "Heritage" }], hints: ["Nugbɔ = wisdom", "Veledodo = patience"], explanation: "These are key proverb-related words from this chapter." }
    ]
  }
};
