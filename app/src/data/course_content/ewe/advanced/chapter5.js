export default {
  id: 5,
  title: "Literature & Expressions",
  description: "Learn advanced Ewe vocabulary for reading, writing, and storytelling",
  icon: "book-outline",
  totalXp: 30,
  difficulty: "Advanced",

  sections: [
    {
      id: "a5-1",
      type: "advanced_vocabulary",
      title: "Reading & Books",
      icon: "book-outline",
      description: "Learn Ewe words about books and reading",
      words: ["Agbalẽ", "Xlẽ", "Agbalẽdzrala", "Agbalẽme", "Lilo", "Nudzɔdzɔ", "Xexlẽdzesi", "Agbalẽ"],
      vocabulary: [
        { id: 1, english: "Book", native: "Agbalẽ", pronunciation: "ah-gbah-len" },
        { id: 2, english: "To read", native: "Xlẽ", pronunciation: "hlen" },
        { id: 3, english: "Story", native: "Lilo", pronunciation: "lee-loh" },
        { id: 4, english: "Chapter", native: "Agbalẽme", pronunciation: "ah-gbah-len-meh" },
        { id: 5, english: "Author / Writer", native: "Agbalẽŋlɔla", pronunciation: "ah-gbah-len-ngloh-lah" },
        { id: 6, english: "Page", native: "Agbalẽ ba", pronunciation: "ah-gbah-len bah" },
        { id: 7, english: "Poem", native: "Ha", pronunciation: "hah" },
        { id: 8, english: "Library", native: "Agbalẽdzesiƒe", pronunciation: "ah-gbah-len-jeh-see-feh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Book' in Ewe?", options: [{ id: 1, text: "Agbalẽ" }, { id: 2, text: "Xlẽ" }, { id: 3, text: "Lilo" }, { id: 4, text: "Ha" }], correctOptionId: 1, hints: ["You read it"], explanation: "'Agbalẽ' means 'Book' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To read' in Ewe?", options: [{ id: 1, text: "Xlẽ" }, { id: 2, text: "Agbalẽ" }, { id: 3, text: "Lilo" }, { id: 4, text: "Ha" }], correctOptionId: 1, hints: ["Reading a book"], explanation: "'Xlẽ' means 'To read' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Author / Writer' in Ewe?", options: [{ id: 1, text: "Agbalẽŋlɔla" }, { id: 2, text: "Agbalẽ" }, { id: 3, text: "Agbalẽdzrala" }, { id: 4, text: "Agbalẽme" }], correctOptionId: 1, hints: ["Writes books"], explanation: "'Agbalẽŋlɔla' means 'Author / Writer' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Agbalẽ", right: "Book" }, { id: 2, left: "Xlẽ", right: "To read" }, { id: 3, left: "Lilo", right: "Story" }, { id: 4, left: "Ha", right: "Poem" }], hints: ["Agbalẽ = book", "Xlẽ = to read"], explanation: "These are reading words in Ewe." }
      ]
    },

    {
      id: "a5-2",
      type: "expressions_idioms",
      title: "Writing & Speech",
      icon: "create-outline",
      description: "Learn Ewe words about writing and speaking",
      words: ["Ŋlɔ", "Nuŋlɔ", "Ŋlɔla", "Gbe", "Dzɔdzɔ", "Nya", "Gblɔ", "Ha"],
      vocabulary: [
        { id: 9, english: "To write", native: "Ŋlɔ", pronunciation: "ngloh" },
        { id: 10, english: "Writing / Text", native: "Nuŋlɔ", pronunciation: "noo-ngloh" },
        { id: 11, english: "Writer", native: "Ŋlɔla", pronunciation: "ngloh-lah" },
        { id: 12, english: "Speech", native: "Gbe", pronunciation: "gbeh" },
        { id: 13, english: "Word", native: "Nya", pronunciation: "nyah" },
        { id: 14, english: "Sentence", native: "Dzɔdzɔ", pronunciation: "joh-joh" },
        { id: 15, english: "Language", native: "Gbe", pronunciation: "gbeh" },
        { id: 16, english: "Essay", native: "Nugblɔ", pronunciation: "noo-gbloh" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To write' in Ewe?", options: [{ id: 1, text: "Ŋlɔ" }, { id: 2, text: "Nuŋlɔ" }, { id: 3, text: "Gbe" }, { id: 4, text: "Nya" }], correctOptionId: 1, hints: ["Put words down"], explanation: "'Ŋlɔ' means 'To write' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Speech' in Ewe?", options: [{ id: 1, text: "Gbe" }, { id: 2, text: "Ŋlɔ" }, { id: 3, text: "Nya" }, { id: 4, text: "Nuŋlɔ" }], correctOptionId: 1, hints: ["Talking publicly"], explanation: "'Gbe' means 'Speech' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Writer' in Ewe?", options: [{ id: 1, text: "Ŋlɔla" }, { id: 2, text: "Ŋlɔ" }, { id: 3, text: "Nuŋlɔ" }, { id: 4, text: "Dzɔdzɔ" }], correctOptionId: 1, hints: ["Person who writes"], explanation: "'Ŋlɔla' means 'Writer' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Ŋlɔ", right: "To write" }, { id: 2, left: "Gbe", right: "Speech" }, { id: 3, left: "Nya", right: "Word" }, { id: 4, left: "Ŋlɔla", right: "Writer" }], hints: ["Ŋlɔ = to write", "Gbe = speech"], explanation: "These are writing and speech words in Ewe." }
      ]
    },

    {
      id: "a5-3",
      type: "complex_sentences",
      title: "Storytelling",
      icon: "mic-outline",
      description: "Learn Ewe words for telling stories and folklore",
      words: ["Liloko", "Gbe", "Tɔƒetɔ", "Fome", "Nuyɔnu", "Ðo", "Nukua", "ƒome"],
      vocabulary: [
        { id: 17, english: "Folk tale", native: "Liloko", pronunciation: "lee-loh-koh" },
        { id: 18, english: "Legend", native: "Gbe ɖeka", pronunciation: "gbeh deh-kah" },
        { id: 19, english: "Tradition", native: "ƒomegbe", pronunciation: "foh-meh-gbeh" },
        { id: 20, english: "Culture", native: "Fome", pronunciation: "foh-meh" },
        { id: 21, english: "Tale / Story", native: "Nuyɔnu", pronunciation: "noo-yoh-noo" },
        { id: 22, english: "To narrate", native: "Ðo lilo", pronunciation: "doh lee-loh" },
        { id: 23, english: "Moral", native: "Nukua", pronunciation: "noo-koo-ah" },
        { id: 24, english: "Heritage", native: "ƒomegbe", pronunciation: "foh-meh-gbeh" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Folk tale' in Ewe?", options: [{ id: 1, text: "Liloko" }, { id: 2, text: "Fome" }, { id: 3, text: "Nuyɔnu" }, { id: 4, text: "Nukua" }], correctOptionId: 1, hints: ["Traditional story"], explanation: "'Liloko' means 'Folk tale' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Culture' in Ewe?", options: [{ id: 1, text: "Fome" }, { id: 2, text: "Liloko" }, { id: 3, text: "Nuyɔnu" }, { id: 4, text: "Nukua" }], correctOptionId: 1, hints: ["Way of life"], explanation: "'Fome' means 'Culture' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To narrate' in Ewe?", options: [{ id: 1, text: "Ðo lilo" }, { id: 2, text: "Fome" }, { id: 3, text: "Liloko" }, { id: 4, text: "Nukua" }], correctOptionId: 1, hints: ["Tell a story"], explanation: "'Ðo lilo' means 'To narrate' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Liloko", right: "Folk tale" }, { id: 2, left: "Fome", right: "Culture" }, { id: 3, left: "Ðo lilo", right: "To narrate" }, { id: 4, left: "Nukua", right: "Moral" }], hints: ["Liloko = folk tale", "Fome = culture"], explanation: "These are storytelling words in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-adv-5",
    title: "Review: Literature & Expressions",
    icon: "refresh-outline",
    description: "Review the literature and expression vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Book' in Ewe?", options: [{ id: 1, text: "Agbalẽ" }, { id: 2, text: "Xlẽ" }, { id: 3, text: "Lilo" }, { id: 4, text: "Ha" }], correctOptionId: 1, hints: ["You read it"], explanation: "'Agbalẽ' means 'Book' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To write' in Ewe?", options: [{ id: 1, text: "Ŋlɔ" }, { id: 2, text: "Nuŋlɔ" }, { id: 3, text: "Gbe" }, { id: 4, text: "Nya" }], correctOptionId: 1, hints: ["Put words down"], explanation: "'Ŋlɔ' means 'To write' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Folk tale' in Ewe?", options: [{ id: 1, text: "Liloko" }, { id: 2, text: "Fome" }, { id: 3, text: "Nuyɔnu" }, { id: 4, text: "Nukua" }], correctOptionId: 1, hints: ["Traditional story"], explanation: "'Liloko' means 'Folk tale' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To read' in Ewe?", options: [{ id: 1, text: "Xlẽ" }, { id: 2, text: "Agbalẽ" }, { id: 3, text: "Lilo" }, { id: 4, text: "Ha" }], correctOptionId: 1, hints: ["Reading a book"], explanation: "'Xlẽ' means 'To read' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Agbalẽ", right: "Book" }, { id: 2, left: "Xlẽ", right: "To read" }, { id: 3, left: "Ŋlɔ", right: "To write" }, { id: 4, left: "Liloko", right: "Folk tale" }, { id: 5, left: "Fome", right: "Culture" }], hints: ["Agbalẽ = book", "Xlẽ = to read"], explanation: "These are key literature words from this chapter." }
    ]
  }
};
