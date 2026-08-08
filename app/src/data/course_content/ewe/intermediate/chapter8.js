export default {
  id: 8,
  title: "Emotions & Feelings",
  description: "Learn Ewe words and phrases to express emotions and feelings",
  icon: "happy-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "8-1",
      type: "vocabulary",
      title: "Positive Emotions",
      icon: "happy-outline",
      description: "Learn Ewe words for positive feelings",
      words: ["Dzidzo", "Veve nu", "Lolo", "Kpɔkpɔ", "Dzidzɔkpɔkpɔ", "Aɖaŋude", "Nye enu", "Dziʋuʋu"],
      vocabulary: [
        { id: 1, english: "Happy", native: "Dzidzo", pronunciation: "jee-joh" },
        { id: 2, english: "Joy", native: "Dzidzɔkpɔkpɔ", pronunciation: "jee-joh-kpoh-kpoh" },
        { id: 3, english: "Love", native: "Lolo", pronunciation: "loh-loh" },
        { id: 4, english: "Excited", native: "Veve nu", pronunciation: "veh-veh noo" },
        { id: 5, english: "Proud", native: "Kpɔkpɔ", pronunciation: "kpoh-kpoh" },
        { id: 6, english: "Grateful", native: "Aɖaŋude", pronunciation: "ah-dah-ngoo-deh" },
        { id: 7, english: "Glad / Pleased", native: "Dziʋuʋu", pronunciation: "jee-voo-voo" },
        { id: 8, english: "Peaceful", native: "Nye enu", pronunciation: "nyeh eh-noo" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Happy' in Ewe?", options: [{ id: 1, text: "Dzidzo" }, { id: 2, text: "Veve nu" }, { id: 3, text: "Kpɔkpɔ" }, { id: 4, text: "Lolo" }], correctOptionId: 1, hints: ["Feeling good"], explanation: "'Dzidzo' means 'Happy' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Love' in Ewe?", options: [{ id: 1, text: "Lolo" }, { id: 2, text: "Dzidzo" }, { id: 3, text: "Veve nu" }, { id: 4, text: "Dziʋuʋu" }], correctOptionId: 1, hints: ["Deep affection"], explanation: "'Lolo' means 'Love' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Excited' in Ewe?", options: [{ id: 1, text: "Veve nu" }, { id: 2, text: "Dzidzo" }, { id: 3, text: "Kpɔkpɔ" }, { id: 4, text: "Nye enu" }], correctOptionId: 1, hints: ["Anticipating something good"], explanation: "'Veve nu' means 'Excited' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe emotion to its English meaning.", pairs: [{ id: 1, left: "Dzidzo", right: "Happy" }, { id: 2, left: "Lolo", right: "Love" }, { id: 3, left: "Veve nu", right: "Excited" }, { id: 4, left: "Kpɔkpɔ", right: "Proud" }], hints: ["Dzidzo = happy", "Lolo = love"], explanation: "These are positive emotions in Ewe." }
      ]
    },

    {
      id: "8-2",
      type: "useful_phrases",
      title: "Negative Emotions",
      icon: "sad-outline",
      description: "Learn Ewe words for negative feelings",
      words: ["Vevi", "Dzi", "Nyaya", "Kla", "Ɖo", "Dzimeme", "Vɔvɔ̃", "Kakaɖedzi"],
      vocabulary: [
        { id: 9, english: "Sad", native: "Vevi", pronunciation: "veh-vee" },
        { id: 10, english: "Angry", native: "Dzi", pronunciation: "jee" },
        { id: 11, english: "Worried", native: "Nyaya", pronunciation: "nyah-yah" },
        { id: 12, english: "Tired", native: "Kla", pronunciation: "klah" },
        { id: 13, english: "Afraid / Scared", native: "Vɔvɔ̃", pronunciation: "voh-voh" },
        { id: 14, english: "Disappointed", native: "Dzimeme", pronunciation: "jee-meh-meh" },
        { id: 15, english: "Confused", native: "Kakaɖedzi", pronunciation: "kah-kah-deh-jee" },
        { id: 16, english: "Bored", native: "Ɖo", pronunciation: "doh" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Sad' in Ewe?", options: [{ id: 1, text: "Vevi" }, { id: 2, text: "Dzi" }, { id: 3, text: "Kla" }, { id: 4, text: "Vɔvɔ̃" }], correctOptionId: 1, hints: ["Feeling down"], explanation: "'Vevi' means 'Sad' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Angry' in Ewe?", options: [{ id: 1, text: "Dzi" }, { id: 2, text: "Vevi" }, { id: 3, text: "Nyaya" }, { id: 4, text: "Kla" }], correctOptionId: 1, hints: ["Strong displeasure"], explanation: "'Dzi' means 'Angry' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Afraid / Scared' in Ewe?", options: [{ id: 1, text: "Vɔvɔ̃" }, { id: 2, text: "Dzi" }, { id: 3, text: "Vevi" }, { id: 4, text: "Kakaɖedzi" }], correctOptionId: 1, hints: ["Feeling fear"], explanation: "'Vɔvɔ̃' means 'Afraid / Scared' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe emotion to its English meaning.", pairs: [{ id: 1, left: "Vevi", right: "Sad" }, { id: 2, left: "Dzi", right: "Angry" }, { id: 3, left: "Kla", right: "Tired" }, { id: 4, left: "Vɔvɔ̃", right: "Afraid" }], hints: ["Vevi = sad", "Dzi = angry"], explanation: "These are negative emotions in Ewe." }
      ]
    },

    {
      id: "8-3",
      type: "complete_sentences",
      title: "Expressing Feelings",
      icon: "chatbubble-ellipses-outline",
      description: "Learn Ewe phrases to express how you feel",
      words: ["Mele dzidzɔ", "Mele vevi", "Mele nyaya", "Mele kpɔkpɔ", "Mele lɔlɔ̃", "Mele akpɔ", "Mekpɔ dzidzɔ", "Mele vɔvɔ̃"],
      vocabulary: [
        { id: 17, english: "I am happy", native: "Mele dzidzɔ", pronunciation: "meh-leh jee-joh" },
        { id: 18, english: "I am sad", native: "Mele vevi", pronunciation: "meh-leh veh-vee" },
        { id: 19, english: "I am angry", native: "Mele dzi", pronunciation: "meh-leh jee" },
        { id: 20, english: "I am tired", native: "Mele kla", pronunciation: "meh-leh klah" },
        { id: 21, english: "I am afraid", native: "Mele vɔvɔ̃", pronunciation: "meh-leh voh-voh" },
        { id: 22, english: "I am excited", native: "Mele veve nu", pronunciation: "meh-leh veh-veh noo" },
        { id: 23, english: "I feel proud", native: "Mekpɔ kpɔkpɔ", pronunciation: "meh-kpoh kpoh-kpoh" },
        { id: 24, english: "I am grateful", native: "Mele aɖaŋude", pronunciation: "meh-leh ah-dah-ngoo-deh" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I am happy' in Ewe?", options: [{ id: 1, text: "Mele dzidzɔ" }, { id: 2, text: "Mele vevi" }, { id: 3, text: "Mele dzi" }, { id: 4, text: "Mele kla" }], correctOptionId: 1, hints: ["dzidzɔ = happy"], explanation: "'Mele dzidzɔ' means 'I am happy' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I am tired' in Ewe?", options: [{ id: 1, text: "Mele kla" }, { id: 2, text: "Mele dzidzɔ" }, { id: 3, text: "Mele vevi" }, { id: 4, text: "Mele vɔvɔ̃" }], correctOptionId: 1, hints: ["kla = tired"], explanation: "'Mele kla' means 'I am tired' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I am excited' in Ewe?", options: [{ id: 1, text: "Mele veve nu" }, { id: 2, text: "Mele kla" }, { id: 3, text: "Mele dzi" }, { id: 4, text: "Mele vevi" }], correctOptionId: 1, hints: ["veve nu = excited"], explanation: "'Mele veve nu' means 'I am excited' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe phrase to its English meaning.", pairs: [{ id: 1, left: "Mele dzidzɔ", right: "I am happy" }, { id: 2, left: "Mele vevi", right: "I am sad" }, { id: 3, left: "Mele kla", right: "I am tired" }, { id: 4, left: "Mele dzi", right: "I am angry" }], hints: ["Mele = I am"], explanation: "These are phrases to express feelings in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-int-8",
    title: "Review: Emotions & Feelings",
    icon: "refresh-outline",
    description: "Review the emotions and feelings vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Happy' in Ewe?", options: [{ id: 1, text: "Dzidzo" }, { id: 2, text: "Vevi" }, { id: 3, text: "Dzi" }, { id: 4, text: "Kla" }], correctOptionId: 1, hints: ["Feeling good"], explanation: "'Dzidzo' means 'Happy' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Sad' in Ewe?", options: [{ id: 1, text: "Vevi" }, { id: 2, text: "Dzidzo" }, { id: 3, text: "Lolo" }, { id: 4, text: "Kpɔkpɔ" }], correctOptionId: 1, hints: ["Feeling down"], explanation: "'Vevi' means 'Sad' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I am happy' in Ewe?", options: [{ id: 1, text: "Mele dzidzɔ" }, { id: 2, text: "Mele vevi" }, { id: 3, text: "Mele kla" }, { id: 4, text: "Mele dzi" }], correctOptionId: 1, hints: ["dzidzɔ = happy"], explanation: "'Mele dzidzɔ' means 'I am happy' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Angry' in Ewe?", options: [{ id: 1, text: "Dzi" }, { id: 2, text: "Vevi" }, { id: 3, text: "Kla" }, { id: 4, text: "Vɔvɔ̃" }], correctOptionId: 1, hints: ["Strong displeasure"], explanation: "'Dzi' means 'Angry' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Dzidzo", right: "Happy" }, { id: 2, left: "Vevi", right: "Sad" }, { id: 3, left: "Dzi", right: "Angry" }, { id: 4, left: "Lolo", right: "Love" }, { id: 5, left: "Kla", right: "Tired" }], hints: ["Dzidzo = happy", "Vevi = sad"], explanation: "These are key emotion words from this chapter." }
    ]
  }
};
