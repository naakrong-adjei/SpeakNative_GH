export default {
  id: 8,
  title: "Future & Past Tense",
  description: "Learn how to talk about the past and future in Ga",
  icon: "time-outline",
  totalXp: 15,
  difficulty: "Intermediate",

  sections: [
    {
      id: "8-1",
      type: "phrases",
      title: "Talking About the Past",
      icon: "time-outline",
      description: "Learn how to talk about past events in Ga",
      words: ["Mitee nyɛ", "Miye niyenii omo", "Wɔhi Ga"],
      vocabulary: [
        {
          id: 196,
          english: "I went yesterday",
          native: "Mitee nyɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/mitee_nyɛ.m4a")
        },
        {
          id: 197,
          english: "I have eaten already",
          native: "Miye niyenii omo",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/miye_niyenii_omo.m4a")
        },
        {
          id: 201,
          english: "We were living in Accra",
          native: "Wɔhi Ga",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/wɔhi_ga.m4a")
        }
      ],
      questions: [
        {
          id: 802,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/miye_niyenii_omo.m4a"),
          options: [
            { id: 1, text: "I will come tomorrow" },
            { id: 2, text: "I have eaten already" },
            { id: 3, text: "We were living in Accra" },
            { id: 4, text: "I went yesterday" }
          ],
          correctOptionId: 2,
          hints: ["omo = already"],
          explanation: "You heard 'Miye niyenii omo' which means 'I have eaten already' in Ga."
        },
        {
          id: 803,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'We were living in Accra' in Ga?",
          options: [
            { id: 1, text: "Miiya ni mayahe tsɔne" },
            { id: 2, text: "Miye niyenii omo" },
            { id: 3, text: "Wɔhi Ga" },
            { id: 4, text: "Mitee nyɛ" }
          ],
          correctOptionId: 3,
          hints: ["Wɔhi = we were living", "Ga = Accra"],
          explanation: "Wɔhi Ga = We were living in Accra in Ga."
        },
        {
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I went yesterday' in Ga?",
          options: [
            { id: 1, text: "Wɔhi Ga" },
            { id: 2, text: "Mitee nyɛ" },
            { id: 3, text: "Miye niyenii omo" },
            { id: 4, text: "Maba wɔ" }
          ],
          correctOptionId: 2,
          hints: ["nyɛ = yesterday"],
          explanation: "Mitee nyɛ = I went yesterday in Ga."
        }
      ]
    },

    {
      id: "8-2",
      type: "phrases",
      title: "Talking About the Future",
      icon: "calendar-outline",
      description: "Learn how to talk about future events in Ga",
      words: ["Maba wɔ", "Miiya ni mayahe tsɔne", "Amɛbagbe naa nyɔɔŋ ni baa lɛ"],
      vocabulary: [
        {
          id: 195,
          english: "I will come tomorrow",
          native: "Maba wɔ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/maba_wɔ.m4a")
        },
        {
          id: 199,
          english: "I am going to buy a car",
          native: "Miiya ni mayahe tsɔne",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/miiya_ni_mayahe_tsɔne.m4a")
        },
        {
          id: 202,
          english: "They will finish next month",
          native: "Amɛbagbe naa nyɔɔŋ ni baa lɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/amɛbagbe_naa_nyɔɔŋ_ni_baa_lɛ.m4a")
        }
      ],
      questions: [
        {
          id: 805,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/miiya_ni_mayahe_tsɔne.m4a"),
          options: [
            { id: 1, text: "They will finish next month" },
            { id: 2, text: "I am going to buy a car" },
            { id: 3, text: "I will come tomorrow" },
            { id: 4, text: "Had I known" }
          ],
          correctOptionId: 2,
          hints: ["tsɔne = car", "mayahe = I will buy"],
          explanation: "You heard 'Miiya ni mayahe tsɔne' which means 'I am going to buy a car' in Ga."
        },
        {
          id: 806,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'They will finish next month' in Ga?",
          options: [
            { id: 1, text: "Mitee nyɛ" },
            { id: 2, text: "Amɛbagbe naa nyɔɔŋ ni baa lɛ" },
            { id: 3, text: "Maba wɔ" },
            { id: 4, text: "Miiya ni mayahe tsɔne" }
          ],
          correctOptionId: 2,
          hints: ["nyɔɔŋ ni baa lɛ = next month"],
          explanation: "Amɛbagbe naa nyɔɔŋ ni baa lɛ = They will finish next month in Ga."
        },
        {
          id: 804,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'I will come tomorrow' in Ga?",
          options: [
            { id: 1, text: "Maba wɔ" },
            { id: 2, text: "Amɛbagbe naa nyɔɔŋ ni baa lɛ" },
            { id: 3, text: "Ebako" },
            { id: 4, text: "Miiya ni mayahe tsɔne" }
          ],
          correctOptionId: 1,
          hints: ["wɔ = tomorrow"],
          explanation: "Maba wɔ = I will come tomorrow in Ga."
        }
      ]
    },

    {
      id: "8-3",
      type: "phrases",
      title: "Not Yet & Regret",
      icon: "hourglass-outline",
      description: "Learn phrases for expressing 'not yet' and regret in Ga",
      words: ["Ebako", "Mile ŋkuɛ"],
      vocabulary: [
        {
          id: 200,
          english: "She has not come yet",
          native: "Ebako",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/ebako.m4a")
        },
        {
          id: 203,
          english: "Had I known",
          native: "Mile ŋkuɛ",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/mile_ŋkuɛ.m4a")
        }
      ],
      questions: [
        {
          id: 808,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/mile_ŋkuɛ.m4a"),
          options: [
            { id: 1, text: "Had I known" },
            { id: 2, text: "She has not come yet" },
            { id: 3, text: "I went yesterday" },
            { id: 4, text: "I will come tomorrow" }
          ],
          correctOptionId: 1,
          hints: ["Expression of regret"],
          explanation: "You heard 'Mile ŋkuɛ' which means 'Had I known' in Ga."
        },
        {
          id: 807,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'She has not come yet' in Ga?",
          options: [
            { id: 1, text: "Maba wɔ" },
            { id: 2, text: "Ebako" },
            { id: 3, text: "Mile ŋkuɛ" },
            { id: 4, text: "Wɔhi Ga" }
          ],
          correctOptionId: 2,
          hints: ["Expression of 'not yet'"],
          explanation: "Ebako = She has not come yet in Ga."
        },
        {
          id: 809,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Had I known' in Ga?",
          options: [
            { id: 1, text: "Wɔhi Ga" },
            { id: 2, text: "Ebako" },
            { id: 3, text: "Mile ŋkuɛ" },
            { id: 4, text: "Mitee nyɛ" }
          ],
          correctOptionId: 3,
          hints: ["Expression of regret"],
          explanation: "Mile ŋkuɛ = Had I known in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Future & Past Tense",
    icon: "refresh-outline",
    description: "Review all the future and past tense vocabulary you've learned",
    questions: [
      {
        id: 811,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/maba_wɔ.m4a"),
        options: [
          { id: 1, text: "I went yesterday" },
          { id: 2, text: "I will come tomorrow" },
          { id: 3, text: "I have eaten already" },
          { id: 4, text: "She has not come yet" }
        ],
        correctOptionId: 2,
        hints: ["wɔ = tomorrow"],
        explanation: "You heard 'Maba wɔ' which means 'I will come tomorrow'."
      },
      {
        id: 817,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Had I known' in Ga?",
        options: [
          { id: 1, text: "Mitee nyɛ" },
          { id: 2, text: "Ebako" },
          { id: 3, text: "Mile ŋkuɛ" },
          { id: 4, text: "Miiya ni mayahe tsɔne" }
        ],
        correctOptionId: 3,
        hints: ["Expression of regret"],
        explanation: "Mile ŋkuɛ = Had I known."
      },
      {
        id: 815,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I am going to buy a car' in Ga?",
        options: [
          { id: 1, text: "Miiya ni mayahe tsɔne" },
          { id: 2, text: "Amɛbagbe naa nyɔɔŋ ni baa lɛ" },
          { id: 3, text: "Maba wɔ" },
          { id: 4, text: "Ebako" }
        ],
        correctOptionId: 1,
        hints: ["tsɔne = car"],
        explanation: "Miiya ni mayahe tsɔne = I am going to buy a car."
      },
      {
        id: 813,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/intermediate/chapter8/amɛbagbe_naa_nyɔɔŋ_ni_baa_lɛ.m4a"),
        options: [
          { id: 1, text: "Had I known" },
          { id: 2, text: "I am going to buy a car" },
          { id: 3, text: "They will finish next month" },
          { id: 4, text: "I will come tomorrow" }
        ],
        correctOptionId: 3,
        hints: ["nyɔɔŋ ni baa lɛ = next month"],
        explanation: "You heard 'Amɛbagbe naa nyɔɔŋ ni baa lɛ' which means 'They will finish next month'."
      },
      {
        id: 814,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'We were living in Accra' in Ga?",
        options: [
          { id: 1, text: "Maba wɔ" },
          { id: 2, text: "Wɔhi Ga" },
          { id: 3, text: "Mitee nyɛ" },
          { id: 4, text: "Miye niyenii omo" }
        ],
        correctOptionId: 2,
        hints: ["Wɔhi = we were living"],
        explanation: "Wɔhi Ga = We were living in Accra."
      },
      {
        id: 816,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'She has not come yet' in Ga?",
        options: [
          { id: 1, text: "Mile ŋkuɛ" },
          { id: 2, text: "Maba wɔ" },
          { id: 3, text: "Ebako" },
          { id: 4, text: "Wɔhi Ga" }
        ],
        correctOptionId: 3,
        hints: ["Expression of 'not yet'"],
        explanation: "Ebako = She has not come yet."
      },
      {
        id: 812,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I have eaten already' in Ga?",
        options: [
          { id: 1, text: "Miye niyenii omo" },
          { id: 2, text: "Mitee nyɛ" },
          { id: 3, text: "Mile ŋkuɛ" },
          { id: 4, text: "Wɔhi Ga" }
        ],
        correctOptionId: 1,
        hints: ["omo = already"],
        explanation: "Miye niyenii omo = I have eaten already."
      },
      {
        id: 810,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'I went yesterday' in Ga?",
        options: [
          { id: 1, text: "Maba wɔ" },
          { id: 2, text: "Mitee nyɛ" },
          { id: 3, text: "Wɔhi Ga" },
          { id: 4, text: "Miye niyenii omo" }
        ],
        correctOptionId: 2,
        hints: ["nyɛ = yesterday"],
        explanation: "Mitee nyɛ = I went yesterday."
      }
    ]
  }
};