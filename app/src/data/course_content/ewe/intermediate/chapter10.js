export default {
  id: 10,
  title: "Verbs & Everyday Actions",
  description: "Learn common Ewe verbs and everyday action words",
  icon: "walk-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "10-1",
      type: "vocabulary",
      title: "Common Verbs",
      icon: "walk-outline",
      description: "Learn the most common Ewe action verbs",
      words: ["Du", "Nu", "No", "Zo", "Dzi", "Kpɔ", "Wɔ", "xɔ"],
      vocabulary: [
        { id: 1, english: "To go", native: "Yi", pronunciation: "yee" },
        { id: 2, english: "To come", native: "Va", pronunciation: "vah" },
        { id: 3, english: "To eat", native: "Du", pronunciation: "doo" },
        { id: 4, english: "To drink", native: "No", pronunciation: "noh" },
        { id: 5, english: "To see", native: "Kpɔ", pronunciation: "kpoh" },
        { id: 6, english: "To do / make", native: "Wɔ", pronunciation: "woh" },
        { id: 7, english: "To give", native: "Na", pronunciation: "nah" },
        { id: 8, english: "To receive / get", native: "Xɔ", pronunciation: "xoh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe verb.", question: "How do you say 'To go' in Ewe?", options: [{ id: 1, text: "Yi" }, { id: 2, text: "Va" }, { id: 3, text: "Du" }, { id: 4, text: "Wɔ" }], correctOptionId: 1, hints: ["Move away from here"], explanation: "'Yi' means 'To go' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe verb.", question: "How do you say 'To eat' in Ewe?", options: [{ id: 1, text: "Du" }, { id: 2, text: "No" }, { id: 3, text: "Kpɔ" }, { id: 4, text: "Na" }], correctOptionId: 1, hints: ["Consume food"], explanation: "'Du' means 'To eat' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe verb.", question: "How do you say 'To give' in Ewe?", options: [{ id: 1, text: "Na" }, { id: 2, text: "Xɔ" }, { id: 3, text: "Wɔ" }, { id: 4, text: "Va" }], correctOptionId: 1, hints: ["Hand something to someone"], explanation: "'Na' means 'To give' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe verb to its English meaning.", pairs: [{ id: 1, left: "Yi", right: "To go" }, { id: 2, left: "Va", right: "To come" }, { id: 3, left: "Du", right: "To eat" }, { id: 4, left: "No", right: "To drink" }], hints: ["Yi = to go", "Va = to come"], explanation: "These are common verbs in Ewe." }
      ]
    },

    {
      id: "10-2",
      type: "useful_phrases",
      title: "Action Words",
      icon: "body-outline",
      description: "Learn more Ewe verbs for physical actions",
      words: ["Zɔ", "Du yi", "Kpɔ", "Dɔ", "Lɔ̃", "Sa", "Dzi", "Kɔ"],
      vocabulary: [
        { id: 9, english: "To walk", native: "Zɔ", pronunciation: "joh" },
        { id: 10, english: "To run", native: "Du du", pronunciation: "doo doo" },
        { id: 11, english: "To sit", native: "Kpɔ kɔ", pronunciation: "kpoh koh" },
        { id: 12, english: "To stand", native: "Tso", pronunciation: "tsoh" },
        { id: 13, english: "To sleep", native: "Dɔ aɖaba", pronunciation: "doh ah-dah-bah" },
        { id: 14, english: "To read", native: "Lɔ̃ xlɛ̃", pronunciation: "loh hlen" },
        { id: 15, english: "To write", native: "Ŋlɔ", pronunciation: "ngloh" },
        { id: 16, english: "To speak / talk", native: "Fɔ", pronunciation: "foh" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe verb.", question: "How do you say 'To walk' in Ewe?", options: [{ id: 1, text: "Zɔ" }, { id: 2, text: "Du du" }, { id: 3, text: "Tso" }, { id: 4, text: "Fɔ" }], correctOptionId: 1, hints: ["Move on foot"], explanation: "'Zɔ' means 'To walk' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe verb.", question: "How do you say 'To read' in Ewe?", options: [{ id: 1, text: "Lɔ̃ xlɛ̃" }, { id: 2, text: "Ŋlɔ" }, { id: 3, text: "Kpɔ kɔ" }, { id: 4, text: "Tso" }], correctOptionId: 1, hints: ["Reading a book"], explanation: "'Lɔ̃ xlɛ̃' means 'To read' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe verb.", question: "How do you say 'To write' in Ewe?", options: [{ id: 1, text: "Ŋlɔ" }, { id: 2, text: "Lɔ̃ xlɛ̃" }, { id: 3, text: "Zɔ" }, { id: 4, text: "Fɔ" }], correctOptionId: 1, hints: ["Writing text"], explanation: "'Ŋlɔ' means 'To write' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe verb to its English meaning.", pairs: [{ id: 1, left: "Zɔ", right: "To walk" }, { id: 2, left: "Du du", right: "To run" }, { id: 3, left: "Lɔ̃ xlɛ̃", right: "To read" }, { id: 4, left: "Ŋlɔ", right: "To write" }], hints: ["Zɔ = to walk", "Du du = to run"], explanation: "These are common action verbs in Ewe." }
      ]
    },

    {
      id: "10-3",
      type: "complete_sentences",
      title: "Connecting Phrases",
      icon: "git-compare-outline",
      description: "Learn Ewe phrases to connect thoughts and actions",
      words: ["Ekema", "Ke", "Gake", "Alẽke", "Nenema", "Elabena", "Le nyateƒe me", "Tsɔ"],
      vocabulary: [
        { id: 17, english: "Then", native: "Ekema", pronunciation: "eh-keh-mah" },
        { id: 18, english: "But", native: "Gake", pronunciation: "gah-keh" },
        { id: 19, english: "And", native: "Kple", pronunciation: "kpleh" },
        { id: 20, english: "Because", native: "Elabena", pronunciation: "eh-lah-beh-nah" },
        { id: 21, english: "Or", native: "Alo", pronunciation: "ah-loh" },
        { id: 22, english: "So / Therefore", native: "Nenema", pronunciation: "neh-neh-mah" },
        { id: 23, english: "In truth / Indeed", native: "Le nyateƒe me", pronunciation: "leh nyah-teh-feh meh" },
        { id: 24, english: "Also / With", native: "Tsɔ", pronunciation: "tsuh" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Then' in Ewe?", options: [{ id: 1, text: "Ekema" }, { id: 2, text: "Gake" }, { id: 3, text: "Alo" }, { id: 4, text: "Kple" }], correctOptionId: 1, hints: ["Sequence word"], explanation: "'Ekema' means 'Then' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'But' in Ewe?", options: [{ id: 1, text: "Gake" }, { id: 2, text: "Ekema" }, { id: 3, text: "Nenema" }, { id: 4, text: "Elabena" }], correctOptionId: 1, hints: ["Contrast word"], explanation: "'Gake' means 'But' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Because' in Ewe?", options: [{ id: 1, text: "Elabena" }, { id: 2, text: "Gake" }, { id: 3, text: "Alo" }, { id: 4, text: "Kple" }], correctOptionId: 1, hints: ["Gives a reason"], explanation: "'Elabena' means 'Because' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe connecting word to its English meaning.", pairs: [{ id: 1, left: "Ekema", right: "Then" }, { id: 2, left: "Gake", right: "But" }, { id: 3, left: "Elabena", right: "Because" }, { id: 4, left: "Alo", right: "Or" }], hints: ["Ekema = then", "Gake = but"], explanation: "These are connecting words in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-int-10",
    title: "Review: Verbs & Everyday Actions",
    icon: "refresh-outline",
    description: "Review the verbs and everyday action words you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe verb.", question: "How do you say 'To go' in Ewe?", options: [{ id: 1, text: "Yi" }, { id: 2, text: "Va" }, { id: 3, text: "Du" }, { id: 4, text: "Wɔ" }], correctOptionId: 1, hints: ["Move away from here"], explanation: "'Yi' means 'To go' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe verb.", question: "How do you say 'To eat' in Ewe?", options: [{ id: 1, text: "Du" }, { id: 2, text: "No" }, { id: 3, text: "Kpɔ" }, { id: 4, text: "Na" }], correctOptionId: 1, hints: ["Consume food"], explanation: "'Du' means 'To eat' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Then' in Ewe?", options: [{ id: 1, text: "Ekema" }, { id: 2, text: "Gake" }, { id: 3, text: "Alo" }, { id: 4, text: "Kple" }], correctOptionId: 1, hints: ["Sequence word"], explanation: "'Ekema' means 'Then' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe verb.", question: "How do you say 'To walk' in Ewe?", options: [{ id: 1, text: "Zɔ" }, { id: 2, text: "Du du" }, { id: 3, text: "Tso" }, { id: 4, text: "Fɔ" }], correctOptionId: 1, hints: ["Move on foot"], explanation: "'Zɔ' means 'To walk' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Yi", right: "To go" }, { id: 2, left: "Du", right: "To eat" }, { id: 3, left: "Zɔ", right: "To walk" }, { id: 4, left: "Ekema", right: "Then" }, { id: 5, left: "Gake", right: "But" }], hints: ["Yi = to go", "Du = to eat"], explanation: "These are key verbs and connecting words from this chapter." }
    ]
  }
};
