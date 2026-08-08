export default {
  id: 9,
  title: "Technology & Modern Life",
  description: "Learn Ewe words for devices, the internet, and modern daily life",
  icon: "phone-portrait-outline",
  totalXp: 25,
  difficulty: "Intermediate",

  sections: [
    {
      id: "9-1",
      type: "vocabulary",
      title: "Devices",
      icon: "phone-portrait-outline",
      description: "Learn Ewe names for common electronic devices",
      words: ["Telefonu", "Kɔmpyuta", "Televizɔn", "Paramɔn", "Vadio", "Numekugbe", "Dzidzɛ", "Aɖaŋumɔ̃"],
      vocabulary: [
        { id: 1, english: "Phone", native: "Telefonu", pronunciation: "teh-leh-foh-noo" },
        { id: 2, english: "Computer", native: "Kɔmpyuta", pronunciation: "kohm-pyoo-tah" },
        { id: 3, english: "Television", native: "Televizɔn", pronunciation: "teh-leh-vee-zon" },
        { id: 4, english: "Radio", native: "Paramɔn", pronunciation: "pah-rah-mon" },
        { id: 5, english: "Battery", native: "Dzidzɛ", pronunciation: "jee-jeh" },
        { id: 6, english: "Charger", native: "Aɖaŋumɔ̃", pronunciation: "ah-dah-ngoo-moh" },
        { id: 7, english: "Camera", native: "Numekugbe", pronunciation: "noo-meh-koo-gbeh" },
        { id: 8, english: "Screen", native: "Vadio", pronunciation: "vah-dee-oh" }
      ],
      questions: [
        { id: 101, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Phone' in Ewe?", options: [{ id: 1, text: "Telefonu" }, { id: 2, text: "Kɔmpyuta" }, { id: 3, text: "Televizɔn" }, { id: 4, text: "Vadio" }], correctOptionId: 1, hints: ["You call with it"], explanation: "'Telefonu' means 'Phone' in Ewe." },
        { id: 102, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Computer' in Ewe?", options: [{ id: 1, text: "Kɔmpyuta" }, { id: 2, text: "Telefonu" }, { id: 3, text: "Paramɔn" }, { id: 4, text: "Dzidzɛ" }], correctOptionId: 1, hints: ["You type on it"], explanation: "'Kɔmpyuta' means 'Computer' in Ewe." },
        { id: 103, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Charger' in Ewe?", options: [{ id: 1, text: "Aɖaŋumɔ̃" }, { id: 2, text: "Dzidzɛ" }, { id: 3, text: "Telefonu" }, { id: 4, text: "Numekugbe" }], correctOptionId: 1, hints: ["Powers your device"], explanation: "'Aɖaŋumɔ̃' means 'Charger' in Ewe." },
        { id: 104, type: "matching", instruction: "Match each Ewe device word to its English meaning.", pairs: [{ id: 1, left: "Telefonu", right: "Phone" }, { id: 2, left: "Kɔmpyuta", right: "Computer" }, { id: 3, left: "Televizɔn", right: "Television" }, { id: 4, left: "Paramɔn", right: "Radio" }], hints: ["Telefonu = phone", "Kɔmpyuta = computer"], explanation: "These are common device words in Ewe." }
      ]
    },

    {
      id: "9-2",
      type: "useful_phrases",
      title: "The Internet",
      icon: "globe-outline",
      description: "Learn Ewe words related to the internet and online life",
      words: ["Internet", "Wɛbsait", "Nuŋɔŋlɔ", "Nyadzɔdzɔ", "Zlɔ", "Ŋgɔyiyi", "Agbɔsɔsɔ", "Kuti"],
      vocabulary: [
        { id: 9, english: "Internet", native: "Internet", pronunciation: "in-ter-net" },
        { id: 10, english: "Website", native: "Wɛbsait", pronunciation: "web-saht" },
        { id: 11, english: "Message", native: "Nuŋɔŋlɔ", pronunciation: "noo-ngoh-ngloh" },
        { id: 12, english: "News", native: "Nyadzɔdzɔ", pronunciation: "nyah-joh-joh" },
        { id: 13, english: "To search", native: "Zlɔ", pronunciation: "zloh" },
        { id: 14, english: "To download", native: "Agbɔsɔsɔ", pronunciation: "ah-gboh-soh-soh" },
        { id: 15, english: "Email", native: "Kuti", pronunciation: "koo-tee" },
        { id: 16, english: "Social media", native: "Ŋgɔyiyi", pronunciation: "ngoh-yee-yee" }
      ],
      questions: [
        { id: 201, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Internet' in Ewe?", options: [{ id: 1, text: "Internet" }, { id: 2, text: "Wɛbsait" }, { id: 3, text: "Kuti" }, { id: 4, text: "Zlɔ" }], correctOptionId: 1, hints: ["Global network"], explanation: "'Internet' means 'Internet' in Ewe." },
        { id: 202, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Message' in Ewe?", options: [{ id: 1, text: "Nuŋɔŋlɔ" }, { id: 2, text: "Internet" }, { id: 3, text: "Nyadzɔdzɔ" }, { id: 4, text: "Agbɔsɔsɔ" }], correctOptionId: 1, hints: ["Text you send"], explanation: "'Nuŋɔŋlɔ' means 'Message' in Ewe." },
        { id: 203, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'To download' in Ewe?", options: [{ id: 1, text: "Agbɔsɔsɔ" }, { id: 2, text: "Zlɔ" }, { id: 3, text: "Kuti" }, { id: 4, text: "Ŋgɔyiyi" }], correctOptionId: 1, hints: ["Getting a file"], explanation: "'Agbɔsɔsɔ' means 'To download' in Ewe." },
        { id: 204, type: "matching", instruction: "Match each Ewe internet word to its English meaning.", pairs: [{ id: 1, left: "Internet", right: "Internet" }, { id: 2, left: "Wɛbsait", right: "Website" }, { id: 3, left: "Nuŋɔŋlɔ", right: "Message" }, { id: 4, left: "Nyadzɔdzɔ", right: "News" }], hints: ["Internet = internet", "Wɛbsait = website"], explanation: "These are common internet words in Ewe." }
      ]
    },

    {
      id: "9-3",
      type: "complete_sentences",
      title: "Modern Activities",
      icon: "flash-outline",
      description: "Learn Ewe phrases for modern everyday activities",
      words: ["Yome", "Lɔ̃ gbe", "Kpɔ nu", "Dzɔ ala", "Na nyadzɔ", "Kpɔ internet", "Doa", "Ziɖeɖe"],
      vocabulary: [
        { id: 17, english: "To call", native: "Yome", pronunciation: "yoh-meh" },
        { id: 18, english: "To send a message", native: "Doa nuŋɔŋlɔ", pronunciation: "doh-ah noo-ngoh-ngloh" },
        { id: 19, english: "To browse the internet", native: "Kpɔ internet", pronunciation: "kpoh in-ter-net" },
        { id: 20, english: "To take a photo", native: "Kpɔ nudzɔdzɔ", pronunciation: "kpoh noo-joh-joh" },
        { id: 21, english: "To watch", native: "Lɔ̃ gbe", pronunciation: "loh gbeh" },
        { id: 22, english: "To play a game", native: "Dzɔ ala", pronunciation: "joh ah-lah" },
        { id: 23, english: "To listen", native: "Doa toe", pronunciation: "doh-ah toh-eh" },
        { id: 24, english: "To press / tap", native: "Ziɖeɖe", pronunciation: "zee-deh-deh" }
      ],
      questions: [
        { id: 301, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To call' in Ewe?", options: [{ id: 1, text: "Yome" }, { id: 2, text: "Kpɔ internet" }, { id: 3, text: "Lɔ̃ gbe" }, { id: 4, text: "Dzɔ ala" }], correctOptionId: 1, hints: ["Using a phone"], explanation: "'Yome' means 'To call' in Ewe." },
        { id: 302, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To browse the internet' in Ewe?", options: [{ id: 1, text: "Kpɔ internet" }, { id: 2, text: "Yome" }, { id: 3, text: "Doa nuŋɔŋlɔ" }, { id: 4, text: "Kpɔ nudzɔdzɔ" }], correctOptionId: 1, hints: ["Surfing online"], explanation: "'Kpɔ internet' means 'To browse the internet' in Ewe." },
        { id: 303, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To take a photo' in Ewe?", options: [{ id: 1, text: "Kpɔ nudzɔdzɔ" }, { id: 2, text: "Kpɔ internet" }, { id: 3, text: "Yome" }, { id: 4, text: "Lɔ̃ gbe" }], correctOptionId: 1, hints: ["Using a camera"], explanation: "'Kpɔ nudzɔdzɔ' means 'To take a photo' in Ewe." },
        { id: 304, type: "matching", instruction: "Match each Ewe phrase to its English meaning.", pairs: [{ id: 1, left: "Yome", right: "To call" }, { id: 2, left: "Kpɔ internet", right: "To browse the internet" }, { id: 3, left: "Doa nuŋɔŋlɔ", right: "To send a message" }, { id: 4, left: "Kpɔ nudzɔdzɔ", right: "To take a photo" }], hints: ["Yome = to call", "Kpɔ internet = to browse"], explanation: "These are modern activities in Ewe." }
      ]
    }
  ],

  review: {
    id: "review-int-9",
    title: "Review: Technology & Modern Life",
    icon: "refresh-outline",
    description: "Review the technology and modern life vocabulary you've learned",
    questions: [
      { id: 401, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Phone' in Ewe?", options: [{ id: 1, text: "Telefonu" }, { id: 2, text: "Kɔmpyuta" }, { id: 3, text: "Televizɔn" }, { id: 4, text: "Vadio" }], correctOptionId: 1, hints: ["You call with it"], explanation: "'Telefonu' means 'Phone' in Ewe." },
      { id: 402, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Internet' in Ewe?", options: [{ id: 1, text: "Internet" }, { id: 2, text: "Wɛbsait" }, { id: 3, text: "Kuti" }, { id: 4, text: "Zlɔ" }], correctOptionId: 1, hints: ["Global network"], explanation: "'Internet' means 'Internet' in Ewe." },
      { id: 403, type: "multiple_choice", instruction: "Select the correct Ewe phrase.", question: "How do you say 'To browse the internet' in Ewe?", options: [{ id: 1, text: "Kpɔ internet" }, { id: 2, text: "Yome" }, { id: 3, text: "Doa nuŋɔŋlɔ" }, { id: 4, text: "Lɔ̃ gbe" }], correctOptionId: 1, hints: ["Surfing online"], explanation: "'Kpɔ internet' means 'To browse the internet' in Ewe." },
      { id: 404, type: "multiple_choice", instruction: "Select the correct Ewe word.", question: "How do you say 'Computer' in Ewe?", options: [{ id: 1, text: "Kɔmpyuta" }, { id: 2, text: "Telefonu" }, { id: 3, text: "Paramɔn" }, { id: 4, text: "Dzidzɛ" }], correctOptionId: 1, hints: ["You type on it"], explanation: "'Kɔmpyuta' means 'Computer' in Ewe." },
      { id: 405, type: "matching", instruction: "Match each Ewe word to its English meaning.", pairs: [{ id: 1, left: "Telefonu", right: "Phone" }, { id: 2, left: "Kɔmpyuta", right: "Computer" }, { id: 3, left: "Internet", right: "Internet" }, { id: 4, left: "Nuŋɔŋlɔ", right: "Message" }, { id: 5, left: "Kpɔ internet", right: "To browse the internet" }], hints: ["Telefonu = phone", "Kɔmpyuta = computer"], explanation: "These are key technology words from this chapter." }
    ]
  }
};
