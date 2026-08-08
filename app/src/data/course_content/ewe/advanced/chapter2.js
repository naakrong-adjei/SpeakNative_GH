export default {
  id: 2,
  title: "Business & Work",
  description: "Learn advanced Ewe vocabulary for business, meetings, and professional life",
  icon: "briefcase-outline",
  totalXp: 30,
  difficulty: "Advanced",

  sections: [
    {
      id: "a2-1",
      type: "advanced_vocabulary",
      title: "The Office",
      icon: "business-outline",
      description: "Learn Ewe words for the office and workplace",
      words: ["Dɔwɔƒe", "Kɔmpany", "Dɔwɔla", "Dɔdzikpɔla", "Dɔ gbɔgblɔ", "Agba", "Taɖodzinu", "Numekukuɖo"],
      vocabulary: [
        { id: 1, english: "Office / Workplace", native: "Dɔwɔƒe", pronunciation: "doh-woh-feh" },
        { id: 2, english: "Company", native: "Kɔmpany", pronunciation: "kohm-pah-nyee" },
        { id: 3, english: "Worker / Employee", native: "Dɔwɔla", pronunciation: "doh-woh-lah" },
        { id: 4, english: "Manager / Boss", native: "Dɔdzikpɔla", pronunciation: "doh-jee-kpoh-lah" },
        { id: 5, english: "Job / Work", native: "Dɔ", pronunciation: "doh" },
        { id: 6, english: "Office desk", native: "Agba", pronunciation: "ah-gbah" },
        { id: 7, english: "Meeting room", native: "Taɖodzinu", pronunciation: "tah-doh-jee-noo" },
        { id: 8, english: "Document / File", native: "Numekukuɖo", pronunciation: "noo-meh-koo-koo-doh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Office / Workplace' in Ewe?", options: [{ id: 1, text: "Dɔwɔƒe" }, { id: 2, text: "Kɔmpany" }, { id: 3, text: "Dɔwɔla" }, { id: 4, text: "Agba" }], correctOptionId: 1, hints: ["Where you work"], explanation: "'Dɔwɔƒe' means 'Office / Workplace' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Manager / Boss' in Ewe?", options: [{ id: 1, text: "Dɔdzikpɔla" }, { id: 2, text: "Dɔwɔla" }, { id: 3, text: "Kɔmpany" }, { id: 4, text: "Taɖodzinu" }], correctOptionId: 1, hints: ["Supervises others"], explanation: "'Dɔdzikpɔla' means 'Manager / Boss' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Worker / Employee' in Ewe?", options: [{ id: 1, text: "Dɔwɔla" }, { id: 2, text: "Dɔdzikpɔla" }, { id: 3, text: "Dɔwɔƒe" }, { id: 4, text: "Agba" }], correctOptionId: 1, hints: ["Person who works"], explanation: "'Dɔwɔla' means 'Worker / Employee' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Dɔwɔƒe", right: "Office" }, { id: 2, left: "Dɔwɔla", right: "Worker" }, { id: 3, left: "Dɔdzikpɔla", right: "Manager" }, { id: 4, left: "Kɔmpany", right: "Company" }], hints: ["Dɔwɔƒe = office", "Dɔwɔla = worker"], explanation: "These are common office words in Ewe." }
      ]
    },

    {
      id: "a2-2",
      type: "expressions_idioms",
      title: "Meetings & Negotiation",
      icon: "people-outline",
      description: "Learn Ewe phrases for meetings and negotiation",
      words: ["Taɖoɖo", "Ðo nya", "Lɔ̃tɔ", "Dɔ wɔ", "Se", "Kpɔta", "Nugbɔ", "Dzinɔnɔ"],
      vocabulary: [
        { id: 9, english: "Meeting", native: "Taɖoɖo", pronunciation: "tah-doh-doh" },
        { id: 10, english: "To negotiate", native: "Ðo nya", pronunciation: "doh nyah" },
        { id: 11, english: "To agree", native: "Lɔ̃tɔ", pronunciation: "loh-toh" },
        { id: 12, english: "To work / do work", native: "Dɔ wɔ", pronunciation: "doh woh" },
        { id: 13, english: "To sign", native: "Se", pronunciation: "seh" },
        { id: 14, english: "Contract / Agreement", native: "Kpɔta", pronunciation: "kpoh-tah" },
        { id: 15, english: "Profit / Gain", native: "Nugbɔ", pronunciation: "noo-gboh" },
        { id: 16, english: "Investment", native: "Dzinɔnɔ", pronunciation: "jee-noh-noh" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Meeting' in Ewe?", options: [{ id: 1, text: "Taɖoɖo" }, { id: 2, text: "Ðo nya" }, { id: 3, text: "Kpɔta" }, { id: 4, text: "Nugbɔ" }], correctOptionId: 1, hints: ["People gather to discuss"], explanation: "'Taɖoɖo' means 'Meeting' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To sign' in Ewe?", options: [{ id: 1, text: "Se" }, { id: 2, text: "Lɔ̃tɔ" }, { id: 3, text: "Dɔ wɔ" }, { id: 4, text: "Taɖoɖo" }], correctOptionId: 1, hints: ["Sign a document"], explanation: "'Se' means 'To sign' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Profit / Gain' in Ewe?", options: [{ id: 1, text: "Nugbɔ" }, { id: 2, text: "Kpɔta" }, { id: 3, text: "Dzinɔnɔ" }, { id: 4, text: "Taɖoɖo" }], correctOptionId: 1, hints: ["Money earned"], explanation: "'Nugbɔ' means 'Profit / Gain' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Taɖoɖo", right: "Meeting" }, { id: 2, left: "Kpɔta", right: "Contract" }, { id: 3, left: "Nugbɔ", right: "Profit" }, { id: 4, left: "Se", right: "To sign" }], hints: ["Taɖoɖo = meeting", "Kpɔta = contract"], explanation: "These are meeting and negotiation words in Ewe." }
      ]
    },

    {
      id: "a2-3",
      type: "complex_sentences",
      title: "Professional Phrases",
      icon: "school-outline",
      description: "Learn professional Ewe phrases for the workplace",
      words: ["Dɔdasi", "Dɔwɔme", "Agbalẽ", "Ðo ŋgɔ", "Gbɔgblɔ", "Kafukafu", "Gbe dze", "Wɔ dɔ"],
      vocabulary: [
        { id: 17, english: "Career / Profession", native: "Dɔdasi", pronunciation: "doh-dah-see" },
        { id: 18, english: "Experience", native: "Dɔwɔme", pronunciation: "doh-woh-meh" },
        { id: 19, english: "Report", native: "Agbalẽ", pronunciation: "ah-gbah-len" },
        { id: 20, english: "To promote", native: "Ðo ŋgɔ", pronunciation: "doh ngoh" },
        { id: 21, english: "To succeed", native: "Gbɔgblɔ", pronunciation: "gboh-gbloh" },
        { id: 22, english: "Congratulations", native: "Kafukafu", pronunciation: "kah-foo-kah-foo" },
        { id: 23, english: "To be punctual", native: "Gbe dze", pronunciation: "gbeh jeh" },
        { id: 24, english: "To work hard", native: "Wɔ dɔ vevie", pronunciation: "woh doh veh-vee-eh" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Career / Profession' in Ewe?", options: [{ id: 1, text: "Dɔdasi" }, { id: 2, text: "Dɔwɔme" }, { id: 3, text: "Agbalẽ" }, { id: 4, text: "Kafukafu" }], correctOptionId: 1, hints: ["Your chosen work"], explanation: "'Dɔdasi' means 'Career / Profession' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Congratulations' in Ewe?", options: [{ id: 1, text: "Kafukafu" }, { id: 2, text: "Gbɔgblɔ" }, { id: 3, text: "Ðo ŋgɔ" }, { id: 4, text: "Agbalẽ" }], correctOptionId: 1, hints: ["Praise for success"], explanation: "'Kafukafu' means 'Congratulations' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To work hard' in Ewe?", options: [{ id: 1, text: "Wɔ dɔ vevie" }, { id: 2, text: "Gbe dze" }, { id: 3, text: "Ðo ŋgɔ" }, { id: 4, text: "Gbɔgblɔ" }], correctOptionId: 1, hints: ["Working with effort"], explanation: "'Wɔ dɔ vevie' means 'To work hard' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Dɔdasi", right: "Career" }, { id: 2, left: "Kafukafu", right: "Congratulations" }, { id: 3, left: "Agbalẽ", right: "Report" }, { id: 4, left: "Dɔwɔme", right: "Experience" }], hints: ["Dɔdasi = career", "Kafukafu = congratulations"], explanation: "These are professional phrases in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-adv-2",
    title: "Review: Business & Work",
    icon: "refresh-outline",
    description: "Review the business and work vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Office / Workplace' in Ewe?", options: [{ id: 1, text: "Dɔwɔƒe" }, { id: 2, text: "Kɔmpany" }, { id: 3, text: "Dɔwɔla" }, { id: 4, text: "Agba" }], correctOptionId: 1, hints: ["Where you work"], explanation: "'Dɔwɔƒe' means 'Office / Workplace' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Meeting' in Ewe?", options: [{ id: 1, text: "Taɖoɖo" }, { id: 2, text: "Ðo nya" }, { id: 3, text: "Kpɔta" }, { id: 4, text: "Nugbɔ" }], correctOptionId: 1, hints: ["People gather to discuss"], explanation: "'Taɖoɖo' means 'Meeting' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Manager / Boss' in Ewe?", options: [{ id: 1, text: "Dɔdzikpɔla" }, { id: 2, text: "Dɔwɔla" }, { id: 3, text: "Kɔmpany" }, { id: 4, text: "Taɖodzinu" }], correctOptionId: 1, hints: ["Supervises others"], explanation: "'Dɔdzikpɔla' means 'Manager / Boss' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Career / Profession' in Ewe?", options: [{ id: 1, text: "Dɔdasi" }, { id: 2, text: "Dɔwɔme" }, { id: 3, text: "Agbalẽ" }, { id: 4, text: "Kafukafu" }], correctOptionId: 1, hints: ["Your chosen work"], explanation: "'Dɔdasi' means 'Career / Profession' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Dɔwɔƒe", right: "Office" }, { id: 2, left: "Dɔwɔla", right: "Worker" }, { id: 3, left: "Taɖoɖo", right: "Meeting" }, { id: 4, left: "Kpɔta", right: "Contract" }, { id: 5, left: "Nugbɔ", right: "Profit" }], hints: ["Dɔwɔƒe = office", "Dɔwɔla = worker"], explanation: "These are key business words from this chapter." }
    ]
  }
};
