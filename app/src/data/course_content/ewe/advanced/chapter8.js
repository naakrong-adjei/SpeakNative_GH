export default {
  id: 8,
  title: "Debate & Opinion",
  description: "Learn advanced Ewe phrases for stating opinions, agreeing, and disagreeing",
  icon: "megaphone-outline",
  totalXp: 30,
  difficulty: "Advanced",

  sections: [
    {
      id: "a8-1",
      type: "advanced_vocabulary",
      title: "Stating Opinions",
      icon: "chatbubbles-outline",
      description: "Learn Ewe phrases to express your point of view",
      words: ["Nye susu", "Me kpɔe", "Nya", "Gblɔ", "Meɖui", "Ŋutsu", "Ðo", "Susu"],
      vocabulary: [
        { id: 1, english: "My opinion", native: "Nye susu", pronunciation: "nyeh soo-soo" },
        { id: 2, english: "I think / I believe", native: "Me kpɔe be", pronunciation: "meh kpoh-eh beh" },
        { id: 3, english: "In my view", native: "Le nye susu me", pronunciation: "leh nyeh soo-soo meh" },
        { id: 4, english: "To agree", native: "Lɔ̃tɔ", pronunciation: "loh-toh" },
        { id: 5, english: "Point of view", native: "Kpɔkplɔ", pronunciation: "kpoh-kploh" },
        { id: 6, english: "To believe", native: "Xɔ se", pronunciation: "xoh seh" },
        { id: 7, english: "Opinion", native: "Susu", pronunciation: "soo-soo" },
        { id: 8, english: "To express", native: "Ðo gbe", pronunciation: "doh gbeh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'My opinion' in Ewe?", options: [{ id: 1, text: "Nye susu" }, { id: 2, text: "Me kpɔe be" }, { id: 3, text: "Le nye susu me" }, { id: 4, text: "Kpɔkplɔ" }], correctOptionId: 1, hints: ["What you think"], explanation: "'Nye susu' means 'My opinion' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I think / I believe' in Ewe?", options: [{ id: 1, text: "Me kpɔe be" }, { id: 2, text: "Nye susu" }, { id: 3, text: "Le nye susu me" }, { id: 4, text: "Susu" }], correctOptionId: 1, hints: ["Giving your view"], explanation: "'Me kpɔe be' means 'I think / I believe' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Opinion' in Ewe?", options: [{ id: 1, text: "Susu" }, { id: 2, text: "Nye susu" }, { id: 3, text: "Kpɔkplɔ" }, { id: 4, text: "Ðo gbe" }], correctOptionId: 1, hints: ["Your viewpoint"], explanation: "'Susu' means 'Opinion' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe phrase to its English meaning.", pairs: [{ id: 1, left: "Nye susu", right: "My opinion" }, { id: 2, left: "Me kpɔe be", right: "I think" }, { id: 3, left: "Lɔ̃tɔ", right: "To agree" }, { id: 4, left: "Susu", right: "Opinion" }], hints: ["Nye susu = my opinion", "Me kpɔe be = I think"], explanation: "These are opinion phrases in Ewe." }
      ]
    },

    {
      id: "a8-2",
      type: "expressions_idioms",
      title: "Agreeing & Disagreeing",
      icon: "thumbs-up-outline",
      description: "Learn Ewe phrases to agree and disagree politely",
      words: ["Me lɔ̃tɔ", "Me lɔ̃tɔ o", "Ŋutɔ", "Nyateƒe", "Me kpɔe o", "Gake", "Me se nu", "Lɔ̃tɔ ŋutɔ"],
      vocabulary: [
        { id: 9, english: "I agree", native: "Me lɔ̃tɔ", pronunciation: "meh loh-toh" },
        { id: 10, english: "I disagree", native: "Me lɔ̃tɔ o", pronunciation: "meh loh-toh oh" },
        { id: 11, english: "That's true", native: "Nyateƒe", pronunciation: "nyah-teh-feh" },
        { id: 12, english: "I don't think so", native: "Me kpɔe o", pronunciation: "meh kpoh-eh oh" },
        { id: 13, english: "Exactly", native: "Ŋutɔ", pronunciation: "ngoo-toh" },
        { id: 14, english: "But still", native: "Gake hã", pronunciation: "gah-keh hah" },
        { id: 15, english: "I understand", native: "Me se nu", pronunciation: "meh seh noo" },
        { id: 16, english: "Completely agree", native: "Lɔ̃tɔ ŋutɔ", pronunciation: "loh-toh ngoo-toh" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I agree' in Ewe?", options: [{ id: 1, text: "Me lɔ̃tɔ" }, { id: 2, text: "Me lɔ̃tɔ o" }, { id: 3, text: "Me kpɔe o" }, { id: 4, text: "Nyateƒe" }], correctOptionId: 1, hints: ["Agreeing with someone"], explanation: "'Me lɔ̃tɔ' means 'I agree' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I disagree' in Ewe?", options: [{ id: 1, text: "Me lɔ̃tɔ o" }, { id: 2, text: "Me lɔ̃tɔ" }, { id: 3, text: "Nyateƒe" }, { id: 4, text: "Ŋutɔ" }], correctOptionId: 1, hints: ["Not agreeing"], explanation: "'Me lɔ̃tɔ o' means 'I disagree' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Exactly' in Ewe?", options: [{ id: 1, text: "Ŋutɔ" }, { id: 2, text: "Nyateƒe" }, { id: 3, text: "Gake hã" }, { id: 4, text: "Me se nu" }], correctOptionId: 1, hints: ["Precisely that"], explanation: "'Ŋutɔ' means 'Exactly' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe phrase to its English meaning.", pairs: [{ id: 1, left: "Me lɔ̃tɔ", right: "I agree" }, { id: 2, left: "Me lɔ̃tɔ o", right: "I disagree" }, { id: 3, left: "Nyateƒe", right: "That's true" }, { id: 4, left: "Ŋutɔ", right: "Exactly" }], hints: ["Me lɔ̃tɔ = I agree", "Me lɔ̃tɔ o = I disagree"], explanation: "These are agreeing and disagreeing phrases in Ewe." }
      ]
    },

    {
      id: "a8-3",
      type: "complex_sentences",
      title: "Persuasion",
      icon: "flame-outline",
      description: "Learn Ewe phrases to persuade and convince",
      words: ["Kpɔɖeŋu", "Ðo", "Wɔe", "Ɖo", "Se", "Gblɔ", "Lɔ̃", "Nya"],
      vocabulary: [
        { id: 17, english: "To persuade", native: "Kplɔ dzi", pronunciation: "kploh jee" },
        { id: 18, english: "To convince", native: "Ðo asi na", pronunciation: "doh ah-see nah" },
        { id: 19, english: "To suggest", native: "Ðo aɖaŋu", pronunciation: "doh ah-dah-ngoo" },
        { id: 20, english: "To support", native: "Kplɔ asi", pronunciation: "kploh ah-see" },
        { id: 21, english: "To recommend", native: "Ðo eŋu", pronunciation: "doh eh-ngoo" },
        { id: 22, english: "Argument", native: "Nya", pronunciation: "nyah" },
        { id: 23, english: "Reason", native: "Nusɔ", pronunciation: "noo-soh" },
        { id: 24, english: "To defend", native: "Kpɔ ta na", pronunciation: "kpoh tah nah" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To persuade' in Ewe?", options: [{ id: 1, text: "Kplɔ dzi" }, { id: 2, text: "Ðo asi na" }, { id: 3, text: "Ðo aɖaŋu" }, { id: 4, text: "Kplɔ asi" }], correctOptionId: 1, hints: ["Convince someone"], explanation: "'Kplɔ dzi' means 'To persuade' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To suggest' in Ewe?", options: [{ id: 1, text: "Ðo aɖaŋu" }, { id: 2, text: "Kplɔ dzi" }, { id: 3, text: "Ðo asi na" }, { id: 4, text: "Kplɔ asi" }], correctOptionId: 1, hints: ["Offer an idea"], explanation: "'Ðo aɖaŋu' means 'To suggest' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Argument' in Ewe?", options: [{ id: 1, text: "Nya" }, { id: 2, text: "Nusɔ" }, { id: 3, text: "Kplɔ dzi" }, { id: 4, text: "Ðo aɖaŋu" }], correctOptionId: 1, hints: ["A point in debate"], explanation: "'Nya' means 'Argument' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe phrase to its English meaning.", pairs: [{ id: 1, left: "Kplɔ dzi", right: "To persuade" }, { id: 2, left: "Ðo aɖaŋu", right: "To suggest" }, { id: 3, left: "Kplɔ asi", right: "To support" }, { id: 4, left: "Nya", right: "Argument" }], hints: ["Kplɔ dzi = to persuade", "Ðo aɖaŋu = to suggest"], explanation: "These are persuasion phrases in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-adv-8",
    title: "Review: Debate & Opinion",
    icon: "refresh-outline",
    description: "Review the debate and opinion vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'My opinion' in Ewe?", options: [{ id: 1, text: "Nye susu" }, { id: 2, text: "Me kpɔe be" }, { id: 3, text: "Le nye susu me" }, { id: 4, text: "Kpɔkplɔ" }], correctOptionId: 1, hints: ["What you think"], explanation: "'Nye susu' means 'My opinion' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'I agree' in Ewe?", options: [{ id: 1, text: "Me lɔ̃tɔ" }, { id: 2, text: "Me lɔ̃tɔ o" }, { id: 3, text: "Me kpɔe o" }, { id: 4, text: "Nyateƒe" }], correctOptionId: 1, hints: ["Agreeing with someone"], explanation: "'Me lɔ̃tɔ' means 'I agree' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To persuade' in Ewe?", options: [{ id: 1, text: "Kplɔ dzi" }, { id: 2, text: "Ðo asi na" }, { id: 3, text: "Ðo aɖaŋu" }, { id: 4, text: "Kplɔ asi" }], correctOptionId: 1, hints: ["Convince someone"], explanation: "'Kplɔ dzi' means 'To persuade' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Opinion' in Ewe?", options: [{ id: 1, text: "Susu" }, { id: 2, text: "Nye susu" }, { id: 3, text: "Kpɔkplɔ" }, { id: 4, text: "Ðo gbe" }], correctOptionId: 1, hints: ["Your viewpoint"], explanation: "'Susu' means 'Opinion' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe phrase to its English meaning.", pairs: [{ id: 1, left: "Nye susu", right: "My opinion" }, { id: 2, left: "Me lɔ̃tɔ", right: "I agree" }, { id: 3, left: "Me lɔ̃tɔ o", right: "I disagree" }, { id: 4, left: "Kplɔ dzi", right: "To persuade" }, { id: 5, left: "Nya", right: "Argument" }], hints: ["Nye susu = my opinion", "Me lɔ̃tɔ = I agree"], explanation: "These are key debate and opinion phrases from this chapter." }
    ]
  }
};
