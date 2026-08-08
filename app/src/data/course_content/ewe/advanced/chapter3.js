export default {
  id: 3,
  title: "Politics & Society",
  description: "Learn advanced Ewe vocabulary for government, citizenship, and public life",
  icon: "shield-checkmark-outline",
  totalXp: 30,
  difficulty: "Advanced",

  sections: [
    {
      id: "a3-1",
      type: "advanced_vocabulary",
      title: "Government",
      icon: "business-outline",
      description: "Learn Ewe words for government and its institutions",
      words: ["Dukɔ", "Dukɔ si woɖo", "Fiazikpui", "Dukɔa ƒe dziɖuɖu", "Se", "Dukɔwo dome", "Nɔnɔme", "Dukɔa"],
      vocabulary: [
        { id: 1, english: "Government", native: "Dziɖuɖu", pronunciation: "jee-doo-doo" },
        { id: 2, english: "Country / Nation", native: "Dukɔ", pronunciation: "doo-koh" },
        { id: 3, english: "President", native: "Dukɔa ƒe dɔgbedzikpɔla", pronunciation: "doo-koh-ah feh doh-gbeh-jee-kpoh-lah" },
        { id: 4, english: "Law", native: "Se", pronunciation: "seh" },
        { id: 5, english: "Parliament", native: "Se dzikpɔƒe", pronunciation: "seh jee-kpoh-feh" },
        { id: 6, english: "Minister", native: "Dɔdzikpɔla", pronunciation: "doh-jee-kpoh-lah" },
        { id: 7, english: "Election", native: "Ðitiɖiɖi", pronunciation: "dee-tee-dee-dee" },
        { id: 8, english: "Vote", native: "Ðo gbe", pronunciation: "doh gbeh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Government' in Ewe?", options: [{ id: 1, text: "Dziɖuɖu" }, { id: 2, text: "Dukɔ" }, { id: 3, text: "Se" }, { id: 4, text: "Ðitiɖiɖi" }], correctOptionId: 1, hints: ["Runs the country"], explanation: "'Dziɖuɖu' means 'Government' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Law' in Ewe?", options: [{ id: 1, text: "Se" }, { id: 2, text: "Dukɔ" }, { id: 3, text: "Dziɖuɖu" }, { id: 4, text: "Ðitiɖiɖi" }], correctOptionId: 1, hints: ["Rules to follow"], explanation: "'Se' means 'Law' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Election' in Ewe?", options: [{ id: 1, text: "Ðitiɖiɖi" }, { id: 2, text: "Se" }, { id: 3, text: "Dukɔ" }, { id: 4, text: "Ðo gbe" }], correctOptionId: 1, hints: ["Choosing leaders"], explanation: "'Ðitiɖiɖi' means 'Election' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Dziɖuɖu", right: "Government" }, { id: 2, left: "Dukɔ", right: "Country" }, { id: 3, left: "Se", right: "Law" }, { id: 4, left: "Ðitiɖiɖi", right: "Election" }], hints: ["Dziɖuɖu = government", "Dukɔ = country"], explanation: "These are government words in Ewe." }
      ]
    },

    {
      id: "a3-2",
      type: "expressions_idioms",
      title: "Citizenship",
      icon: "people-outline",
      description: "Learn Ewe words about citizenship and rights",
      words: ["Dzinye", "Amegbetɔ", "Gbɔkpɔ", "Ðoɖoɖo", "Se", "Dukɔ", "Agbe", "Dodo"],
      vocabulary: [
        { id: 9, english: "Citizen", native: "Dukɔmenukila", pronunciation: "doo-koh-meh-noo-kee-lah" },
        { id: 10, english: "Person / Human", native: "Amegbetɔ", pronunciation: "ah-meh-gbeh-toh" },
        { id: 11, english: "Right / Freedom", native: "Ðoɖoɖo", pronunciation: "doh-doh-doh" },
        { id: 12, english: "Freedom", native: "Xɔse", pronunciation: "xoh-seh" },
        { id: 13, english: "Community", native: "Dukɔme", pronunciation: "doo-koh-meh" },
        { id: 14, english: "Society", native: "Amegbetɔwo", pronunciation: "ah-meh-gbeh-toh-woh" },
        { id: 15, english: "Responsibility", native: "Dodo", pronunciation: "doh-doh" },
        { id: 16, english: "Peace", native: "Ðoɖo", pronunciation: "doh-doh" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Citizen' in Ewe?", options: [{ id: 1, text: "Dukɔmenukila" }, { id: 2, text: "Amegbetɔ" }, { id: 3, text: "Ðoɖoɖo" }, { id: 4, text: "Xɔse" }], correctOptionId: 1, hints: ["Person of a country"], explanation: "'Dukɔmenukila' means 'Citizen' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Freedom' in Ewe?", options: [{ id: 1, text: "Xɔse" }, { id: 2, text: "Ðoɖoɖo" }, { id: 3, text: "Dukɔme" }, { id: 4, text: "Dodo" }], correctOptionId: 1, hints: ["Being free"], explanation: "'Xɔse' means 'Freedom' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Responsibility' in Ewe?", options: [{ id: 1, text: "Dodo" }, { id: 2, text: "Xɔse" }, { id: 3, text: "Dukɔmenukila" }, { id: 4, text: "Amegbetɔ" }], correctOptionId: 1, hints: ["Duty to do"], explanation: "'Dodo' means 'Responsibility' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Dukɔmenukila", right: "Citizen" }, { id: 2, left: "Xɔse", right: "Freedom" }, { id: 3, left: "Dukɔme", right: "Community" }, { id: 4, left: "Dodo", right: "Responsibility" }], hints: ["Dukɔmenukila = citizen", "Xɔse = freedom"], explanation: "These are citizenship words in Ewe." }
      ]
    },

    {
      id: "a3-3",
      type: "complex_sentences",
      title: "Public Life",
      icon: "megaphone-outline",
      description: "Learn Ewe words about public life and civic engagement",
      words: ["Nusiwo", "Dukɔa ƒe nyawo", "Gbe", "Ðo gbe", "Nya", "Dziɖuɖu", "Seselame", "Dɔwɔƒe"],
      vocabulary: [
        { id: 17, english: "News / Information", native: "Nyadzɔdzɔ", pronunciation: "nyah-joh-joh" },
        { id: 18, english: "Public affairs", native: "Dukɔa ƒe nyawo", pronunciation: "doo-koh-ah feh nyah-woh" },
        { id: 19, english: "To speak out", native: "Ðo gbe", pronunciation: "doh gbeh" },
        { id: 20, english: "Issue / Topic", native: "Nya", pronunciation: "nyah" },
        { id: 21, english: "Political party", native: "Dziɖuɖu habɔbɔ", pronunciation: "jee-doo-doo hah-boh-boh" },
        { id: 22, english: "Justice", native: "Seselame", pronunciation: "seh-seh-lah-meh" },
        { id: 23, english: "Order / Rule", native: "Dɔwɔƒe", pronunciation: "doh-woh-feh" },
        { id: 24, english: "To govern", native: "Dzi ɖu", pronunciation: "jee doo" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'News / Information' in Ewe?", options: [{ id: 1, text: "Nyadzɔdzɔ" }, { id: 2, text: "Nya" }, { id: 3, text: "Ðo gbe" }, { id: 4, text: "Seselame" }], correctOptionId: 1, hints: ["What's happening"], explanation: "'Nyadzɔdzɔ' means 'News / Information' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Justice' in Ewe?", options: [{ id: 1, text: "Seselame" }, { id: 2, text: "Nyadzɔdzɔ" }, { id: 3, text: "Nya" }, { id: 4, text: "Dɔwɔƒe" }], correctOptionId: 1, hints: ["Fairness"], explanation: "'Seselame' means 'Justice' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To speak out' in Ewe?", options: [{ id: 1, text: "Ðo gbe" }, { id: 2, text: "Dzi ɖu" }, { id: 3, text: "Nya" }, { id: 4, text: "Nyadzɔdzɔ" }], correctOptionId: 1, hints: ["Voice an opinion"], explanation: "'Ðo gbe' means 'To speak out' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Nyadzɔdzɔ", right: "News" }, { id: 2, left: "Ðo gbe", right: "To speak out" }, { id: 3, left: "Seselame", right: "Justice" }, { id: 4, left: "Nya", right: "Issue" }], hints: ["Nyadzɔdzɔ = news", "Ðo gbe = to speak out"], explanation: "These are public life words in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-adv-3",
    title: "Review: Politics & Society",
    icon: "refresh-outline",
    description: "Review the politics and society vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Government' in Ewe?", options: [{ id: 1, text: "Dziɖuɖu" }, { id: 2, text: "Dukɔ" }, { id: 3, text: "Se" }, { id: 4, text: "Ðitiɖiɖi" }], correctOptionId: 1, hints: ["Runs the country"], explanation: "'Dziɖuɖu' means 'Government' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Citizen' in Ewe?", options: [{ id: 1, text: "Dukɔmenukila" }, { id: 2, text: "Amegbetɔ" }, { id: 3, text: "Ðoɖoɖo" }, { id: 4, text: "Xɔse" }], correctOptionId: 1, hints: ["Person of a country"], explanation: "'Dukɔmenukila' means 'Citizen' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Law' in Ewe?", options: [{ id: 1, text: "Se" }, { id: 2, text: "Dukɔ" }, { id: 3, text: "Dziɖuɖu" }, { id: 4, text: "Ðitiɖiɖi" }], correctOptionId: 1, hints: ["Rules to follow"], explanation: "'Se' means 'Law' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'News / Information' in Ewe?", options: [{ id: 1, text: "Nyadzɔdzɔ" }, { id: 2, text: "Nya" }, { id: 3, text: "Ðo gbe" }, { id: 4, text: "Seselame" }], correctOptionId: 1, hints: ["What's happening"], explanation: "'Nyadzɔdzɔ' means 'News / Information' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Dziɖuɖu", right: "Government" }, { id: 2, left: "Dukɔ", right: "Country" }, { id: 3, left: "Se", right: "Law" }, { id: 4, left: "Dukɔmenukila", right: "Citizen" }, { id: 5, left: "Xɔse", right: "Freedom" }], hints: ["Dziɖuɖu = government", "Dukɔ = country"], explanation: "These are key politics and society words from this chapter." }
    ]
  }
};
