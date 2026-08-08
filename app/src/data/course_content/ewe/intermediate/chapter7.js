export default {
  id: 7,
  title: "Nature & Animals",
  description: "Learn Ewe words for animals, plants, and the natural world",
  icon: "leaf-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "7-1",
      type: "vocabulary",
      title: "Animals",
      icon: "paw-outline",
      description: "Learn the Ewe names for common animals",
      words: ["Lolo", "Koklo", "Gbe", "Kploe", "Nyaxi", "Kpale", "Habo", "Kodoe"],
      vocabulary: [
        { id: 1, english: "Dog", native: "Avu", pronunciation: "ah-voo" },
        { id: 2, english: "Cat", native: "Dadi", pronunciation: "dah-dee" },
        { id: 3, english: "Cow", native: "Nyui", pronunciation: "nyoo-ee" },
        { id: 4, english: "Goat", native: "Gbe", pronunciation: "gbeh" },
        { id: 5, english: "Sheep", native: "Alo", pronunciation: "ah-loh" },
        { id: 6, english: "Chicken", native: "Koklo", pronunciation: "koh-kloh" },
        { id: 7, english: "Horse", native: "Kploe", pronunciation: "kploh-eh" },
        { id: 8, english: "Pig", native: "Kekle", pronunciation: "keh-kleh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Dog' in Ewe?", options: [{ id: 1, text: "Avu" }, { id: 2, text: "Dadi" }, { id: 3, text: "Nyui" }, { id: 4, text: "Gbe" }], correctOptionId: 1, hints: ["Man's best friend"], explanation: "'Avu' means 'Dog' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Cat' in Ewe?", options: [{ id: 1, text: "Dadi" }, { id: 2, text: "Avu" }, { id: 3, text: "Koklo" }, { id: 4, text: "Alo" }], correctOptionId: 1, hints: ["Says meow"], explanation: "'Dadi' means 'Cat' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Chicken' in Ewe?", options: [{ id: 1, text: "Koklo" }, { id: 2, text: "Kploe" }, { id: 3, text: "Gbe" }, { id: 4, text: "Nyui" }], correctOptionId: 1, hints: ["Lays eggs", "Farm bird"], explanation: "'Koklo' means 'Chicken' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe animal to its English meaning.", pairs: [{ id: 1, left: "Avu", right: "Dog" }, { id: 2, left: "Dadi", right: "Cat" }, { id: 3, left: "Nyui", right: "Cow" }, { id: 4, left: "Koklo", right: "Chicken" }], hints: ["Avu = dog", "Dadi = cat"], explanation: "These are common animals in Ewe." }
      ]
    },

    {
      id: "7-2",
      type: "useful_phrases",
      title: "Plants & Nature",
      icon: "leaf-outline",
      description: "Learn Ewe words for plants and the natural world",
      words: ["Ati", "Gbe", "Ake", "Tsi", "Anyigba", "Fufu", "Nusi", "Kel"],
      vocabulary: [
        { id: 9, english: "Tree", native: "Ati", pronunciation: "ah-tee" },
        { id: 10, english: "Leaf", native: "Gbe", pronunciation: "gbeh" },
        { id: 11, english: "Flower", native: "Ake", pronunciation: "ah-keh" },
        { id: 12, english: "Water", native: "Tsi", pronunciation: "tsee" },
        { id: 13, english: "Ground / Earth", native: "Anyigba", pronunciation: "ah-nyee-gbah" },
        { id: 14, english: "Grass", native: "Fufu", pronunciation: "foo-foo" },
        { id: 15, english: "Plant", native: "Nusi", pronunciation: "noo-see" },
        { id: 16, english: "Stone / Rock", native: "Kel", pronunciation: "kehl" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Tree' in Ewe?", options: [{ id: 1, text: "Ati" }, { id: 2, text: "Gbe" }, { id: 3, text: "Ake" }, { id: 4, text: "Tsi" }], correctOptionId: 1, hints: ["Tall, has branches"], explanation: "'Ati' means 'Tree' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Water' in Ewe?", options: [{ id: 1, text: "Tsi" }, { id: 2, text: "Ati" }, { id: 3, text: "Anyigba" }, { id: 4, text: "Kel" }], correctOptionId: 1, hints: ["You drink it"], explanation: "'Tsi' means 'Water' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Flower' in Ewe?", options: [{ id: 1, text: "Ake" }, { id: 2, text: "Gbe" }, { id: 3, text: "Fufu" }, { id: 4, text: "Nusi" }], correctOptionId: 1, hints: ["Colorful, blooms"], explanation: "'Ake' means 'Flower' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe nature word to its English meaning.", pairs: [{ id: 1, left: "Ati", right: "Tree" }, { id: 2, left: "Tsi", right: "Water" }, { id: 3, left: "Ake", right: "Flower" }, { id: 4, left: "Anyigba", right: "Earth" }], hints: ["Ati = tree", "Tsi = water"], explanation: "These are common nature words in Ewe." }
      ]
    },

    {
      id: "7-3",
      type: "complete_sentences",
      title: "In the Countryside",
      icon: "sunny-outline",
      description: "Learn Ewe words for the countryside and farm",
      words: ["Agble", "Agbleme", "Ha", "Agblevonu", "Nududu kple tsi", "Kpu", "Gbe", "Avo"],
      vocabulary: [
        { id: 17, english: "Farm", native: "Agble", pronunciation: "ah-gbleh" },
        { id: 18, english: "Field / Land", native: "Agbleme", pronunciation: "ah-gbleh-meh" },
        { id: 19, english: "Village", native: "Kpu", pronunciation: "kpoo" },
        { id: 20, english: "Forest", native: "Gbe", pronunciation: "gbeh" },
        { id: 21, english: "River", native: "Tɔsisi", pronunciation: "toh-see-see" },
        { id: 22, english: "Mountain / Hill", native: "Tɔ", pronunciation: "toh" },
        { id: 23, english: "Sky", native: "Avo", pronunciation: "ah-voh" },
        { id: 24, english: "Sun", native: "Ɣe", pronunciation: "geh" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Farm' in Ewe?", options: [{ id: 1, text: "Agble" }, { id: 2, text: "Kpu" }, { id: 3, text: "Tɔ" }, { id: 4, text: "Avo" }], correctOptionId: 1, hints: ["Where crops grow"], explanation: "'Agble' means 'Farm' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Village' in Ewe?", options: [{ id: 1, text: "Kpu" }, { id: 2, text: "Agbleme" }, { id: 3, text: "Gbe" }, { id: 4, text: "Tɔ" }], correctOptionId: 1, hints: ["Small settlement"], explanation: "'Kpu' means 'Village' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Sun' in Ewe?", options: [{ id: 1, text: "Ɣe" }, { id: 2, text: "Avo" }, { id: 3, text: "Tɔsisi" }, { id: 4, text: "Tɔ" }], correctOptionId: 1, hints: ["Shines in the sky"], explanation: "'Ɣe' means 'Sun' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe countryside word to its English meaning.", pairs: [{ id: 1, left: "Agble", right: "Farm" }, { id: 2, left: "Kpu", right: "Village" }, { id: 3, left: "Tɔ", right: "Mountain" }, { id: 4, left: "Ɣe", right: "Sun" }], hints: ["Agble = farm", "Kpu = village"], explanation: "These are countryside words in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-int-7",
    title: "Review: Nature & Animals",
    icon: "refresh-outline",
    description: "Review the animals, plants, and nature vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Dog' in Ewe?", options: [{ id: 1, text: "Avu" }, { id: 2, text: "Dadi" }, { id: 3, text: "Nyui" }, { id: 4, text: "Gbe" }], correctOptionId: 1, hints: ["Man's best friend"], explanation: "'Avu' means 'Dog' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Tree' in Ewe?", options: [{ id: 1, text: "Ati" }, { id: 2, text: "Gbe" }, { id: 3, text: "Ake" }, { id: 4, text: "Tsi" }], correctOptionId: 1, hints: ["Tall, has branches"], explanation: "'Ati' means 'Tree' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Farm' in Ewe?", options: [{ id: 1, text: "Agble" }, { id: 2, text: "Kpu" }, { id: 3, text: "Tɔ" }, { id: 4, text: "Avo" }], correctOptionId: 1, hints: ["Where crops grow"], explanation: "'Agble' means 'Farm' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Water' in Ewe?", options: [{ id: 1, text: "Tsi" }, { id: 2, text: "Ati" }, { id: 3, text: "Anyigba" }, { id: 4, text: "Kel" }], correctOptionId: 1, hints: ["You drink it"], explanation: "'Tsi' means 'Water' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Avu", right: "Dog" }, { id: 2, left: "Dadi", right: "Cat" }, { id: 3, left: "Ati", right: "Tree" }, { id: 4, left: "Tsi", right: "Water" }, { id: 5, left: "Agble", right: "Farm" }], hints: ["Avu = dog", "Ati = tree"], explanation: "These are key words from this chapter." }
    ]
  }
};
