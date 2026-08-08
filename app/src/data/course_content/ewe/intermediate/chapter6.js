export default {
  id: 6,
  title: "Home & Furniture",
  description: "Learn Ewe words for rooms, furniture, and household items",
  icon: "home-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "6-1",
      type: "vocabulary",
      title: "Rooms of the House",
      icon: "home-outline",
      description: "Learn the Ewe names for rooms in a house",
      words: ["Afe", "Dolofe", "Nududufe", "Dowofe", "Kpodzo", "Tsilefe", "Afe me", "Agbo"],
      vocabulary: [
        { id: 1, english: "House / Home", native: "Afe", pronunciation: "ah-feh" },
        { id: 2, english: "Bedroom", native: "Dolofe", pronunciation: "doh-loh-feh" },
        { id: 3, english: "Kitchen", native: "Nududufe", pronunciation: "noo-doo-doo-feh" },
        { id: 4, english: "Living room", native: "Dowofe", pronunciation: "doh-woh-feh" },
        { id: 5, english: "Bathroom", native: "Kpodzo", pronunciation: "kpoh-joh" },
        { id: 6, english: "Toilet", native: "Tsilefe", pronunciation: "tsee-leh-feh" },
        { id: 7, english: "Inside the house", native: "Afe me", pronunciation: "ah-feh meh" },
        { id: 8, english: "Outside / Yard", native: "Agbo", pronunciation: "ah-gboh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'House / Home' in Ewe?", options: [{ id: 1, text: "Afe" }, { id: 2, text: "Dolofe" }, { id: 3, text: "Nududufe" }, { id: 4, text: "Kpodzo" }], correctOptionId: 1, hints: ["Where you live"], explanation: "'Afe' means 'House / Home' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Kitchen' in Ewe?", options: [{ id: 1, text: "Nududufe" }, { id: 2, text: "Dolofe" }, { id: 3, text: "Dowofe" }, { id: 4, text: "Tsilefe" }], correctOptionId: 1, hints: ["Where you cook"], explanation: "'Nududufe' means 'Kitchen' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Bathroom' in Ewe?", options: [{ id: 1, text: "Kpodzo" }, { id: 2, text: "Tsilefe" }, { id: 3, text: "Agbo" }, { id: 4, text: "Afe me" }], correctOptionId: 1, hints: ["Where you wash"], explanation: "'Kpodzo' means 'Bathroom' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe room to its English meaning.", pairs: [{ id: 1, left: "Afe", right: "House / Home" }, { id: 2, left: "Dolofe", right: "Bedroom" }, { id: 3, left: "Nududufe", right: "Kitchen" }, { id: 4, left: "Kpodzo", right: "Bathroom" }], hints: ["Afe = house"], explanation: "These are common rooms in a house in Ewe." }
      ]
    },

    {
      id: "6-2",
      type: "useful_phrases",
      title: "Furniture & Items",
      icon: "bed-outline",
      description: "Learn the Ewe names for furniture and household items",
      words: ["Kplo", "Zikpui", "Adaba", "Ko", "Avu", "Fle", "Kplo", "Adaba"],
      vocabulary: [
        { id: 9, english: "Table", native: "Kplo", pronunciation: "kploh" },
        { id: 10, english: "Chair", native: "Zikpui", pronunciation: "zee-kpoo-ee" },
        { id: 11, english: "Bed", native: "Adaba", pronunciation: "ah-dah-bah" },
        { id: 12, english: "Door", native: "Ko", pronunciation: "koh" },
        { id: 13, english: "Window", native: "Avu", pronunciation: "ah-voo" },
        { id: 14, english: "Shelf / Cupboard", native: "Fle", pronunciation: "fleh" },
        { id: 15, english: "Lamp / Light", native: "Kplo", pronunciation: "kploh" },
        { id: 16, english: "Cushion / Pillow", native: "Adaba", pronunciation: "ah-dah-bah" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Table' in Ewe?", options: [{ id: 1, text: "Kplo" }, { id: 2, text: "Zikpui" }, { id: 3, text: "Adaba" }, { id: 4, text: "Ko" }], correctOptionId: 1, hints: ["You eat on it"], explanation: "'Kplo' means 'Table' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Chair' in Ewe?", options: [{ id: 1, text: "Zikpui" }, { id: 2, text: "Kplo" }, { id: 3, text: "Adaba" }, { id: 4, text: "Ko" }], correctOptionId: 1, hints: ["You sit on it"], explanation: "'Zikpui' means 'Chair' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Door' in Ewe?", options: [{ id: 1, text: "Ko" }, { id: 2, text: "Avu" }, { id: 3, text: "Fle" }, { id: 4, text: "Adaba" }], correctOptionId: 1, hints: ["You enter through it"], explanation: "'Ko' means 'Door' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe furniture word to its English meaning.", pairs: [{ id: 1, left: "Kplo", right: "Table" }, { id: 2, left: "Zikpui", right: "Chair" }, { id: 3, left: "Adaba", right: "Bed" }, { id: 4, left: "Ko", right: "Door" }], hints: ["Kplo = table"], explanation: "These are common furniture words in Ewe." }
      ]
    },

    {
      id: "6-3",
      type: "complete_sentences",
      title: "Household Chores",
      icon: "sparkles-outline",
      description: "Learn Ewe phrases for household chores",
      words: ["Zi afe", "Da nududu", "Tso nu le", "Nyala avu", "Ko afe", "Kpo tsi", "Do adaba", "Ko nu"],
      vocabulary: [
        { id: 17, english: "To clean the house", native: "Zi afe", pronunciation: "zee ah-feh" },
        { id: 18, english: "To cook food", native: "Da nududu", pronunciation: "dah noo-doo-doo" },
        { id: 19, english: "To wash dishes", native: "Tso nu le", pronunciation: "tsuh noo leh" },
        { id: 20, english: "To wash clothes", native: "Nyala avu", pronunciation: "nyah-lah ah-voo" },
        { id: 21, english: "To tidy the house", native: "Ko afe", pronunciation: "koh ah-feh" },
        { id: 22, english: "To fetch water", native: "Kpo tsi", pronunciation: "kpoh tsee" },
        { id: 23, english: "To make the bed", native: "Do adaba", pronunciation: "doh ah-dah-bah" },
        { id: 24, english: "To tidy up", native: "Ko nu", pronunciation: "koh noo" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To clean the house' in Ewe?", options: [{ id: 1, text: "Zi afe" }, { id: 2, text: "Da nududu" }, { id: 3, text: "Tso nu le" }, { id: 4, text: "Ko nu" }], correctOptionId: 1, hints: ["Zi = clean"], explanation: "'Zi afe' means 'To clean the house' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To make the bed' in Ewe?", options: [{ id: 1, text: "Do adaba" }, { id: 2, text: "Ko afe" }, { id: 3, text: "Kpo tsi" }, { id: 4, text: "Nyala avu" }], correctOptionId: 1, hints: ["adaba = bed"], explanation: "'Do adaba' means 'To make the bed' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To wash clothes' in Ewe?", options: [{ id: 1, text: "Nyala avu" }, { id: 2, text: "Tso nu le" }, { id: 3, text: "Kpo tsi" }, { id: 4, text: "Ko nu" }], correctOptionId: 1, hints: ["avu = clothes"], explanation: "'Nyala avu' means 'To wash clothes' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe chore to its English meaning.", pairs: [{ id: 1, left: "Zi afe", right: "To clean the house" }, { id: 2, left: "Da nududu", right: "To cook food" }, { id: 3, left: "Tso nu le", right: "To wash dishes" }, { id: 4, left: "Nyala avu", right: "To wash clothes" }], hints: ["Zi afe = clean"], explanation: "These are common household chores in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-int-6",
    title: "Review: Home & Furniture",
    icon: "refresh-outline",
    description: "Review the home, furniture, and chore vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'House / Home' in Ewe?", options: [{ id: 1, text: "Afe" }, { id: 2, text: "Dolofe" }, { id: 3, text: "Nududufe" }, { id: 4, text: "Kpodzo" }], correctOptionId: 1, hints: ["Where you live"], explanation: "'Afe' means 'House / Home' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Table' in Ewe?", options: [{ id: 1, text: "Kplo" }, { id: 2, text: "Zikpui" }, { id: 3, text: "Adaba" }, { id: 4, text: "Ko" }], correctOptionId: 1, hints: ["You eat on it"], explanation: "'Kplo' means 'Table' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To clean the house' in Ewe?", options: [{ id: 1, text: "Zi afe" }, { id: 2, text: "Da nududu" }, { id: 3, text: "Tso nu le" }, { id: 4, text: "Ko nu" }], correctOptionId: 1, hints: ["Zi = clean"], explanation: "'Zi afe' means 'To clean the house' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Kitchen' in Ewe?", options: [{ id: 1, text: "Nududufe" }, { id: 2, text: "Dolofe" }, { id: 3, text: "Dowofe" }, { id: 4, text: "Tsilefe" }], correctOptionId: 1, hints: ["Where you cook"], explanation: "'Nududufe' means 'Kitchen' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Afe", right: "House" }, { id: 2, left: "Kplo", right: "Table" }, { id: 3, left: "Zikpui", right: "Chair" }, { id: 4, left: "Adaba", right: "Bed" }, { id: 5, left: "Zi afe", right: "To clean the house" }], hints: ["Afe = house"], explanation: "These are key home and furniture words from this chapter." }
    ]
  }
};
