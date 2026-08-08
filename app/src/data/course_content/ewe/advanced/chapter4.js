export default {
  id: 4,
  title: "Science & Environment",
  description: "Learn advanced Ewe vocabulary for science, nature, and the environment",
  icon: "flask-outline",
  totalXp: 30,
  difficulty: "Advanced",

  sections: [
    {
      id: "a4-1",
      type: "advanced_vocabulary",
      title: "Science & Nature",
      icon: "flask-outline",
      description: "Learn Ewe words for science and the natural world",
      words: ["Sanya", "Nuhehe", "Anyigba", "Dzo", "Ya", "Tsi", "Kel", "Ame"],
      vocabulary: [
        { id: 1, english: "Science", native: "Sanya", pronunciation: "sah-nyah" },
        { id: 2, english: "Research", native: "Nuhehe", pronunciation: "noo-heh-heh" },
        { id: 3, english: "Earth", native: "Anyigba", pronunciation: "ah-nyee-gbah" },
        { id: 4, english: "Fire", native: "Dzo", pronunciation: "joh" },
        { id: 5, english: "Air / Wind", native: "Ya", pronunciation: "yah" },
        { id: 6, english: "Water", native: "Tsi", pronunciation: "tsee" },
        { id: 7, english: "Nature", native: "Nu si ŋu ame me le o", pronunciation: "noo see ngoo ah-meh meh leh oh" },
        { id: 8, english: "Energy", native: "Dzidzɛ", pronunciation: "jee-jeh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Science' in Ewe?", options: [{ id: 1, text: "Sanya" }, { id: 2, text: "Nuhehe" }, { id: 3, text: "Anyigba" }, { id: 4, text: "Dzidzɛ" }], correctOptionId: 1, hints: ["Study of nature"], explanation: "'Sanya' means 'Science' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Research' in Ewe?", options: [{ id: 1, text: "Nuhehe" }, { id: 2, text: "Sanya" }, { id: 3, text: "Dzo" }, { id: 4, text: "Ya" }], correctOptionId: 1, hints: ["Investigating a topic"], explanation: "'Nuhehe' means 'Research' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Energy' in Ewe?", options: [{ id: 1, text: "Dzidzɛ" }, { id: 2, text: "Sanya" }, { id: 3, text: "Anyigba" }, { id: 4, text: "Tsi" }], correctOptionId: 1, hints: ["Power to do things"], explanation: "'Dzidzɛ' means 'Energy' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Sanya", right: "Science" }, { id: 2, left: "Nuhehe", right: "Research" }, { id: 3, left: "Anyigba", right: "Earth" }, { id: 4, left: "Dzidzɛ", right: "Energy" }], hints: ["Sanya = science", "Nuhehe = research"], explanation: "These are science words in Ewe." }
      ]
    },

    {
      id: "a4-2",
      type: "expressions_idioms",
      title: "The Environment",
      icon: "leaf-outline",
      description: "Learn Ewe words about the environment and sustainability",
      words: ["Agbe", "Nu dzɔdzɔ", "Kpɔtsɔ", "Dodo", "Kpɔɖeŋu", "Gbe", "Ati", "Kplɔ̃"],
      vocabulary: [
        { id: 9, english: "Climate", native: "Yame nɔnɔme", pronunciation: "yah-meh noh-noh-meh" },
        { id: 10, english: "Environment", native: "Agbe", pronunciation: "ah-gbeh" },
        { id: 11, english: "Pollution", native: "Kpɔtsɔ", pronunciation: "kpoh-tsuh" },
        { id: 12, english: "To protect", native: "Kpɔ ta", pronunciation: "kpoh tah" },
        { id: 13, english: "To recycle", native: "Gbugbɔ wɔ", pronunciation: "gbuh-gboh woh" },
        { id: 14, english: "Forest", native: "Gbe", pronunciation: "gbeh" },
        { id: 15, english: "Tree", native: "Ati", pronunciation: "ah-tee" },
        { id: 16, english: "Sustainability", native: "Ga dzidzɔ", pronunciation: "gah jee-joh" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Environment' in Ewe?", options: [{ id: 1, text: "Agbe" }, { id: 2, text: "Kpɔtsɔ" }, { id: 3, text: "Yame nɔnɔme" }, { id: 4, text: "Ati" }], correctOptionId: 1, hints: ["World around us"], explanation: "'Agbe' means 'Environment' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Pollution' in Ewe?", options: [{ id: 1, text: "Kpɔtsɔ" }, { id: 2, text: "Agbe" }, { id: 3, text: "Gbe" }, { id: 4, text: "Kpɔ ta" }], correctOptionId: 1, hints: ["Dirtying nature"], explanation: "'Kpɔtsɔ' means 'Pollution' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To recycle' in Ewe?", options: [{ id: 1, text: "Gbugbɔ wɔ" }, { id: 2, text: "Kpɔ ta" }, { id: 3, text: "Agbe" }, { id: 4, text: "Kpɔtsɔ" }], correctOptionId: 1, hints: ["Reuse materials"], explanation: "'Gbugbɔ wɔ' means 'To recycle' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Agbe", right: "Environment" }, { id: 2, left: "Kpɔtsɔ", right: "Pollution" }, { id: 3, left: "Gbe", right: "Forest" }, { id: 4, left: "Ati", right: "Tree" }], hints: ["Agbe = environment", "Kpɔtsɔ = pollution"], explanation: "These are environment words in Ewe." }
      ]
    },

    {
      id: "a4-3",
      type: "complex_sentences",
      title: "Research & Discovery",
      icon: "search-outline",
      description: "Learn Ewe words for research and scientific discovery",
      words: ["Kpɔkplɔ", "Nu ka", "Ðo nya", "Kpɔɖeŋu", "Nya", "Gbegbɔgblɔ", "Kpɔkpɔ", "Ðoƒo"],
      vocabulary: [
        { id: 17, english: "Experiment", native: "Kpɔkplɔ", pronunciation: "kpoh-kploh" },
        { id: 18, english: "To discover", native: "Kpɔ nu", pronunciation: "kpoh noo" },
        { id: 19, english: "To prove", native: "Ðo bɔbɔ", pronunciation: "doh boh-boh" },
        { id: 20, english: "Theory", native: "Ðoƒo", pronunciation: "doh-foh" },
        { id: 21, english: "Hypothesis", native: "Nya kɔkɔe", pronunciation: "nyah koh-koh-eh" },
        { id: 22, english: "Result", native: "Kpɔkpɔ", pronunciation: "kpoh-kpoh" },
        { id: 23, english: "To analyze", native: "Ðo nu kpɔ", pronunciation: "doh noo kpoh" },
        { id: 24, english: "To measure", native: "Ðe nɔnɔme", pronunciation: "deh noh-noh-meh" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Experiment' in Ewe?", options: [{ id: 1, text: "Kpɔkplɔ" }, { id: 2, text: "Ðoƒo" }, { id: 3, text: "Kpɔkpɔ" }, { id: 4, text: "Nya kɔkɔe" }], correctOptionId: 1, hints: ["Scientific test"], explanation: "'Kpɔkplɔ' means 'Experiment' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To discover' in Ewe?", options: [{ id: 1, text: "Kpɔ nu" }, { id: 2, text: "Ðo bɔbɔ" }, { id: 3, text: "Ðe nɔnɔme" }, { id: 4, text: "Kpɔkpɔ" }], correctOptionId: 1, hints: ["Find something new"], explanation: "'Kpɔ nu' means 'To discover' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Result' in Ewe?", options: [{ id: 1, text: "Kpɔkpɔ" }, { id: 2, text: "Kpɔkplɔ" }, { id: 3, text: "Ðoƒo" }, { id: 4, text: "Nya kɔkɔe" }], correctOptionId: 1, hints: ["Outcome"], explanation: "'Kpɔkpɔ' means 'Result' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Kpɔkplɔ", right: "Experiment" }, { id: 2, left: "Kpɔ nu", right: "To discover" }, { id: 3, left: "Kpɔkpɔ", right: "Result" }, { id: 4, left: "Ðe nɔnɔme", right: "To measure" }], hints: ["Kpɔkplɔ = experiment", "Kpɔ nu = to discover"], explanation: "These are research words in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-adv-4",
    title: "Review: Science & Environment",
    icon: "refresh-outline",
    description: "Review the science and environment vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Science' in Ewe?", options: [{ id: 1, text: "Sanya" }, { id: 2, text: "Nuhehe" }, { id: 3, text: "Anyigba" }, { id: 4, text: "Dzidzɛ" }], correctOptionId: 1, hints: ["Study of nature"], explanation: "'Sanya' means 'Science' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Environment' in Ewe?", options: [{ id: 1, text: "Agbe" }, { id: 2, text: "Kpɔtsɔ" }, { id: 3, text: "Yame nɔnɔme" }, { id: 4, text: "Ati" }], correctOptionId: 1, hints: ["World around us"], explanation: "'Agbe' means 'Environment' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Experiment' in Ewe?", options: [{ id: 1, text: "Kpɔkplɔ" }, { id: 2, text: "Ðoƒo" }, { id: 3, text: "Kpɔkpɔ" }, { id: 4, text: "Nya kɔkɔe" }], correctOptionId: 1, hints: ["Scientific test"], explanation: "'Kpɔkplɔ' means 'Experiment' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Research' in Ewe?", options: [{ id: 1, text: "Nuhehe" }, { id: 2, text: "Sanya" }, { id: 3, text: "Dzo" }, { id: 4, text: "Ya" }], correctOptionId: 1, hints: ["Investigating a topic"], explanation: "'Nuhehe' means 'Research' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Sanya", right: "Science" }, { id: 2, left: "Nuhehe", right: "Research" }, { id: 3, left: "Agbe", right: "Environment" }, { id: 4, left: "Kpɔtsɔ", right: "Pollution" }, { id: 5, left: "Kpɔkplɔ", right: "Experiment" }], hints: ["Sanya = science", "Nuhehe = research"], explanation: "These are key science and environment words from this chapter." }
    ]
  }
};
