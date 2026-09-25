export default { 
  id: 3, 
  title: "Market Negotiation", 
  description: "Learn market negotiation phrases in Ga", 
  icon: "handshake-outline", 
  totalXp: 15, 
  difficulty: "Intermediate", 

  sections: [
    {
      id: "3-1", 
      type: "words", 
      title: "Opening Bargaining", 
      icon: "pricetag-outline", 
      description: "Learn how to start bargaining and ask for a better price in Ga", 
      words: ["Mɛni ji ojara naagbee?", "Obaanyɛ okɛ fioo afata he?", "Ba jara lɛ shi oha mi", "Mihe lɛ shika bibioo yɛ jɛi"],
      phrases: [
        {
          id: 156, 
          english: "What is your last price?", 
          native: "Mɛni ji ojara naagbee?", 
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter3/mɛni_ji_ojara_naagbee.m4a") 
        }, 
        { 
          id: 158, 
          english: "Can you add a little?", 
          native: "Obaanyɛ okɛ fioo afata he?", 
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter3/obaanyɛ_okɛ_fioo_afata_he.m4a") 
        }, 
        { 
          id: 160, 
          english: "Give me a discount", 
          native: "Ba jara lɛ shi oha mi", 
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter3/ba_jara_lɛ_shi_oha_mi.m4a") 
        }, 
        { 
          id: 163, 
          english: "I bought it cheaper there", 
          native: "Mihe lɛ shika bibioo yɛ jɛi", 
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter3/mihe_lɛ_shika_bibioo_yɛ_jɛi.m4a") 
        } 
      ], 
      questions: [ 
        { 
          id: 303, 
          type: "multiple_choice", 
          instruction: "Select the correct Ga phrase.", 
          question: "How do you say 'Give me a discount' in Ga?", 
          options: [ 
            { id: 1, text: "Hiɛmɔ sɛɛdamɔ" }, 
            { id: 2, text: "Ba jara lɛ shi oha mi" }, 
            { id: 3, text: "Mɛni ji ojara naagbee?" }, 
            { id: 4, text: "Obaanyɛ okɛ fioo afata he?" } 
          ], 
          correctOptionId: 2, 
          hints: ["Ba jara lɛ shi = reduce the price", "oha mi = give me"], 
          explanation: "Ba jara lɛ shi oha mi = Give me a discount in Ga." 
        }, 
        { 
          id: 301, 
          type: "multiple_choice", 
          instruction: "Select the correct Ga phrase.", 
          question: "How do you say 'What is your last price?' in Ga?", 
          options: [ 
            { id: 1, text: "Mihe lɛ shika bibioo yɛ jɛi" }, 
            { id: 2, text: "Mɛni ji ojara naagbee?" }, 
            { id: 3, text: "Ba jara lɛ shi oha mi" }, 
            { id: 4, text: "Obaanyɛ okɛ fioo afata he?" } 
          ], 
          correctOptionId: 2, 
          hints: ["ojara = your price", "naagbee = last/final"], 
          explanation: "Mɛni ji ojara naagbee? = What is your last price? in Ga." 
        }, 
        { 
          id: 304, 
          type: "multiple_choice", 
          instruction: "Select the correct Ga phrase.", 
          question: "How do you say 'I bought it cheaper there' in Ga?", 
          options: [ 
            { id: 1, text: "Obaanyɛ okɛ fioo afata he?" }, 
            { id: 2, text: "Mihe lɛ shika bibioo yɛ jɛi" }, 
            { id: 3, text: "Mɛni ji ojara naagbee?" }, 
            { id: 4, text: "Ba jara lɛ shi oha mi" } 
          ], 
          correctOptionId: 2, 
          hints: ["Mihe lɛ = I bought it", "shika bibioo = cheaper"], 
          explanation: "Mihe lɛ shika bibioo yɛ jɛi = I bought it cheaper there in Ga." 
        }, 
        { 
          id: 302, 
          type: "multiple_choice", 
          instruction: "Select the correct Ga phrase.", 
          question: "How do you say 'Can you add a little?' in Ga?", 
          options: [ 
            { id: 1, text: "Ba jara lɛ shi oha mi" }, 
            { id: 2, text: "Obaanyɛ okɛ fioo afata he?" }, 
            { id: 3, text: "Mibɛ shika pii" }, 
            { id: 4, text: "Mɛni ji ojara naagbee?" } 
          ], 
          correctOptionId: 2, 
          hints: ["fioo = a little", "afata he = add to it"], 
          explanation: "Obaanyɛ okɛ fioo afata he? = Can you add a little? in Ga." 
        } 
      ] 
    },

    { 
      id: "3-2", 
      type: "words", 
      title: "Making Offers & Paying", 
      icon: "cash-outline", 
      description: "Learn how to make offers and handle payment in Ga", 
      words: ["Mahe enyɔ", "Mibɛ shika pii", "Ehe tse lo?", "Kanemɔ shika lɛ", "Hiɛmɔ sɛɛdamɔ"], 
      phrases: [ 
        { 
          id: 157, 
          english: "I will buy two", 
          native: "Mahe enyɔ", 
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter3/mahe_enyɔ.m4a") 
        }, 
        { 
          id: 161, 
          english: "I don't have enough money", 
          native: "Mibɛ shika pii", 
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter3/mibɛ_shika_pii.m4a") 
        }, 
        { 
          id: 162, 
          english: "Is it fresh?", 
          native: "Ehe tse lo?", 
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter3/ehe_tse_lo.m4a") 
        }, 
        { 
          id: 164, 
          english: "Count the money", 
          native: "Kanemɔ shika lɛ", 
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter3/kanemɔ_shika_lɛ.m4a") 
        }, 
        { 
          id: 165, 
          english: "Keep the change", 
          native: "Hiɛmɔ sɛɛdamɔ", 
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter3/hiɛmɔ_sɛɛdamɔ.m4a") 
        } 
      ], 
      questions: [ 
        { 
          id: 308, 
          type: "multiple_choice", 
          instruction: "Select the correct Ga phrase.", 
          question: "How do you say 'Count the money' in Ga?", 
          options: [ 
            { id: 1, text: "Ehe tse lo?" }, 
            { id: 2, text: "Kanemɔ shika lɛ" }, 
            { id: 3, text: "Mahe enyɔ" }, 
            { id: 4, text: "Mibɛ shika pii" } 
          ], 
          correctOptionId: 2, 
          hints: ["Kanemɔ = count", "shika lɛ = the money"], 
          explanation: "Kanemɔ shika lɛ = Count the money in Ga." 
        }, 
        { 
          id: 305, 
          type: "multiple_choice", 
          instruction: "Select the correct Ga phrase.", 
          question: "How do you say 'I will buy two' in Ga?", 
          options: [ 
            { id: 1, text: "Ehe tse lo?" }, 
            { id: 2, text: "Hiɛmɔ sɛɛdamɔ" }, 
            { id: 3, text: "Mahe enyɔ" }, 
            { id: 4, text: "Mibɛ shika pii" } 
          ], 
          correctOptionId: 3, 
          hints: ["Mahe = I will buy", "enyɔ = two"], 
          explanation: "Mahe enyɔ = I will buy two in Ga." 
        }, 
        { 
          id: 309, 
          type: "multiple_choice", 
          instruction: "Select the correct Ga phrase.", 
          question: "How do you say 'Keep the change' in Ga?", 
          options: [ 
            { id: 1, text: "Mibɛ shika pii" }, 
            { id: 2, text: "Hiɛmɔ sɛɛdamɔ" }, 
            { id: 3, text: "Kanemɔ shika lɛ" }, 
            { id: 4, text: "Ehe tse lo?" } 
          ], 
          correctOptionId: 2, 
          hints: ["Hiɛmɔ = keep", "sɛɛdamɔ = change"], 
          explanation: "Hiɛmɔ sɛɛdamɔ = Keep the change in Ga." 
        }, 
        { 
          id: 307, 
          type: "multiple_choice", 
          instruction: "Select the correct Ga phrase.", 
          question: "How do you say 'Is it fresh?' in Ga?", 
          options: [ 
            { id: 1, text: "Kanemɔ shika lɛ" }, 
            { id: 2, text: "Mahe enyɔ" }, 
            { id: 3, text: "Ehe tse lo?" }, 
            { id: 4, text: "Mibɛ shika pii" } 
          ], 
          correctOptionId: 3, 
          hints: ["Ehe tse = it is fresh", "lo = question marker"], 
          explanation: "Ehe tse lo? = Is it fresh? in Ga." 
        }, 
        { 
          id: 306, 
          type: "multiple_choice", 
          instruction: "Select the correct Ga phrase.", 
          question: "How do you say 'I don't have enough money' in Ga?", 
          options: [ 
            { id: 1, text: "Hiɛmɔ sɛɛdamɔ" }, 
            { id: 2, text: "Mibɛ shika pii" }, 
            { id: 3, text: "Ehe tse lo?" }, 
            { id: 4, text: "Mahe enyɔ" } 
          ], 
          correctOptionId: 2, 
          hints: ["Mibɛ = I don't have", "shika pii = enough money"], 
          explanation: "Mibɛ shika pii = I don't have enough money in Ga." 
        } 
      ] 
    } 
  ], 
 
  review: { 
    id: "review-3", 
    title: "Review: Market Negotiation", 
    icon: "refresh-outline", 
    description: "Review all the market negotiation phrases you've learned", 
    questions: [ 
      { 
        id: 316, 
        type: "multiple_choice", 
        instruction: "Select the correct Ga phrase.", 
        question: "How do you say 'Is it fresh?' in Ga?", 
        options: [ 
          { id: 1, text: "Kanemɔ shika lɛ" }, 
          { id: 2, text: "Ehe tse lo?" }, 
          { id: 3, text: "Mahe enyɔ" }, 
          { id: 4, text: "Mibɛ shika pii" } 
        ], 
        correctOptionId: 2, 
        hints: ["Ehe tse = it is fresh"], 
        explanation: "Ehe tse lo? = Is it fresh?" 
      }, 
      { 
        id: 313, 
        type: "multiple_choice", 
        instruction: "Select the correct Ga phrase.", 
        question: "How do you say 'I bought it cheaper there' in Ga?", 
        options: [ 
          { id: 1, text: "Ba jara lɛ shi oha mi" }, 
          { id: 2, text: "Mihe lɛ shika bibioo yɛ jɛi" }, 
          { id: 3, text: "Obaanyɛ okɛ fioo afata he?" }, 
          { id: 4, text: "Mɛni ji ojara naagbee?" } 
        ], 
        correctOptionId: 2, 
        hints: ["Mihe lɛ = I bought it"], 
        explanation: "Mihe lɛ shika bibioo yɛ jɛi = I bought it cheaper there." 
      }, 
      { 
        id: 318, 
        type: "multiple_choice", 
        instruction: "Select the correct Ga phrase.", 
        question: "How do you say 'Keep the change' in Ga?", 
        options: [ 
          { id: 1, text: "Mibɛ shika pii" }, 
          { id: 2, text: "Hiɛmɔ sɛɛdamɔ" }, 
          { id: 3, text: "Kanemɔ shika lɛ" }, 
          { id: 4, text: "Ehe tse lo?" } 
        ], 
        correctOptionId: 2, 
        hints: ["sɛɛdamɔ = change"], 
        explanation: "Hiɛmɔ sɛɛdamɔ = Keep the change." 
      }, 
      { 
        id: 311, 
        type: "multiple_choice", 
        instruction: "Select the correct Ga phrase.", 
        question: "How do you say 'Can you add a little?' in Ga?", 
        options: [ 
          { id: 1, text: "Mibɛ shika pii" }, 
          { id: 2, text: "Obaanyɛ okɛ fioo afata he?" }, 
          { id: 3, text: "Ba jara lɛ shi oha mi" }, 
          { id: 4, text: "Mɛni ji ojara naagbee?" } 
        ], 
        correctOptionId: 2, 
        hints: ["fioo = a little"], 
        explanation: "Obaanyɛ okɛ fioo afata he? = Can you add a little?" 
      }, 
      { 
        id: 314, 
        type: "multiple_choice", 
        instruction: "Select the correct Ga phrase.", 
        question: "How do you say 'I will buy two' in Ga?", 
        options: [ 
          { id: 1, text: "Hiɛmɔ sɛɛdamɔ" }, 
          { id: 2, text: "Kanemɔ shika lɛ" }, 
          { id: 3, text: "Mahe enyɔ" }, 
          { id: 4, text: "Mibɛ shika pii" } 
        ], 
        correctOptionId: 3, 
        hints: ["Mahe = I will buy", "enyɔ = two"], 
        explanation: "Mahe enyɔ = I will buy two." 
      }, 
      { 
        id: 310, 
        type: "multiple_choice", 
        instruction: "Select the correct Ga phrase.", 
        question: "How do you say 'What is your last price?' in Ga?", 
        options: [ 
          { id: 1, text: "Obaanyɛ okɛ fioo afata he?" }, 
          { id: 2, text: "Mɛni ji ojara naagbee?" }, 
          { id: 3, text: "Mihe lɛ shika bibioo yɛ jɛi" }, 
          { id: 4, text: "Ba jara lɛ shi oha mi" } 
        ], 
        correctOptionId: 2, 
        hints: ["naagbee = last/final"], 
        explanation: "Mɛni ji ojara naagbee? = What is your last price?" 
      }, 
      { 
        id: 317, 
        type: "multiple_choice", 
        instruction: "Select the correct Ga phrase.", 
        question: "How do you say 'Count the money' in Ga?", 
        options: [ 
          { id: 1, text: "Mibɛ shika pii" }, 
          { id: 2, text: "Kanemɔ shika lɛ" }, 
          { id: 3, text: "Ehe tse lo?" }, 
          { id: 4, text: "Mahe enyɔ" } 
        ], 
        correctOptionId: 2, 
        hints: ["Kanemɔ = count"], 
        explanation: "Kanemɔ shika lɛ = Count the money." 
      }, 
      { 
        id: 315, 
        type: "multiple_choice", 
        instruction: "Select the correct Ga phrase.", 
        question: "How do you say 'I don't have enough money' in Ga?", 
        options: [ 
          { id: 1, text: "Ehe tse lo?" }, 
          { id: 2, text: "Mibɛ shika pii" }, 
          { id: 3, text: "Hiɛmɔ sɛɛdamɔ" }, 
          { id: 4, text: "Mahe enyɔ" } 
        ], 
        correctOptionId: 2, 
        hints: ["Mibɛ = I don't have"], 
        explanation: "Mibɛ shika pii = I don't have enough money." 
      }, 
      { 
        id: 33, 
        type: "multiple_choice", 
        instruction: "Select the correct Ga phrase.", 
        question: "How do you say 'Give me a discount' in Ga?", 
        options: [ 
          { id: 1, text: "Mɛni ji ojara naagbee?" }, 
          { id: 2, text: "Hiɛmɔ sɛɛdamɔ" }, 
          { id: 3, text: "Ba jara lɛ shi oha mi" }, 
          { id: 4, text: "Obaanyɛ okɛ fioo afata he?" } 
        ], 
        correctOptionId: 3, 
        hints: ["Ba jara lɛ shi = reduce the price"], 
        explanation: "Ba jara lɛ shi oha mi = Give me a discount." 
      } 
    ] 
  } 
};
