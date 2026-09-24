export default {
  id: 7,
  title: "Social Life",
  description: "Learn how to make plans and socialize in Ewe",
  icon: "people-outline",
  totalXp: 10,
  difficulty: "Intermediate",

  sections: [
    {
      id: "7-1",
      type: "words",
      title: "Making Plans",
      icon: "calendar-outline",
      description: "Learn how to make plans with friends in Ewe",
      words: ["Mina míado go Memleɖagbe", "Èva azãɖuƒea?", "Mava kɔ wò", "Kpe xɔ̃wòwo"],
      vocabulary: [
        {
          id: 204,
          english: "Let's meet on Saturday",
          native: "Mina míado go Memleɖagbe",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míado_go_le_memleɖagbe.m4a")
        },
        {
          id: 205,
          english: "Are you coming to the party?",
          native: "Èva azãɖuƒea?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/èva_azãɖuƒea.m4a")
        },
        {
          id: 209,
          english: "I will pick you up",
          native: "Mava kɔ wò",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mava_kɔ_wò.m4a")
        },
        {
          id: 213,
          english: "Invite your friends",
          native: "Kpe xɔ̃wòwo",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/kpe_xɔ̃wòwo.m4a")
        }
      ],
      questions: [
        {
          id: 701,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Let's meet on Saturday' in Ewe?",
          options: [
            { id: 1, text: "Mina míado go Memleɖagbe" },
            { id: 2, text: "Èva azãɖuƒea?" },
            { id: 3, text: "Mava kɔ wò" },
            { id: 4, text: "Kpe xɔ̃wòwo" }
          ],
          correctOptionId: 1,
          hints: ["Mina = Let's", "Memleɖagbe = Saturday"],
          explanation: "Mina míado go Memleɖagbe = Let's meet on Saturday in Ewe."
        },
        {
          id: 702,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/èva_azãɖuƒea.m4a"),
          options: [
            { id: 1, text: "Let's meet on Saturday" },
            { id: 2, text: "Are you coming to the party?" },
            { id: 3, text: "I will pick you up" },
            { id: 4, text: "Invite your friends" }
          ],
          correctOptionId: 2,
          hints: ["èva = you are coming", "azãɖuƒe = party"],
          explanation: "You heard 'Èva azãɖuƒea?' which means 'Are you coming to the party?' in Ewe."
        },
        {
          id: 703,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I will pick you up' in Ewe?",
          options: [
            { id: 1, text: "Mina míado go Memleɖagbe" },
            { id: 2, text: "Èva azãɖuƒea?" },
            { id: 3, text: "Mava kɔ wò" },
            { id: 4, text: "Kpe xɔ̃wòwo" }
          ],
          correctOptionId: 3,
          hints: ["kɔ = pick up"],
          explanation: "Mava kɔ wò = I will pick you up in Ewe."
        },
        {
          id: 704,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/kpe_xɔ̃wòwo.m4a"),
          options: [
            { id: 1, text: "Let's meet on Saturday" },
            { id: 2, text: "Are you coming to the party?" },
            { id: 3, text: "I will pick you up" },
            { id: 4, text: "Invite your friends" }
          ],
          correctOptionId: 4,
          hints: ["xɔ̃wòwo = your friends"],
          explanation: "You heard 'Kpe xɔ̃wòwo' which means 'Invite your friends' in Ewe."
        }
      ]
    },

    {
      id: "7-2",
      type: "words",
      title: "Going Out Together",
      icon: "walk-outline",
      description: "Learn how to suggest going out together in Ewe",
      words: ["Mina míaƒome míayi", "Mina míaɖunua ƒome", "Gaƒoƒo kae me wòdzena egɔme?", "Hadzidzia vivi"],
      vocabulary: [
        {
          id: 207,
          english: "Let's go together",
          native: "Mina míaƒome míayi",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míaƒome_míayi.m4a")
        },
        {
          id: 208,
          english: "Let's eat together",
          native: "Mina míaɖunua ƒome",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míaɖu_ƒome.m4a")
        },
        {
          id: 211,
          english: "What time does it start?",
          native: "Gaƒoƒo kae me wòdzena egɔme?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/gaƒoƒo_ka_mee_wòdzena_egɔme.m4a")
        },
        {
          id: 210,
          english: "The music is nice",
          native: "Hadzidzia vivi",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/hadzidzia_vivi.m4a")
        }
      ],
      questions: [
        {
          id: 705,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Let's go together' in Ewe?",
          options: [
            { id: 1, text: "Mina míaƒome míayi" },
            { id: 2, text: "Mina míaɖunua ƒome" },
            { id: 3, text: "Gaƒoƒo kae me wòdzena egɔme?" },
            { id: 4, text: "Hadzidzia vivi" }
          ],
          correctOptionId: 1,
          hints: ["Mina = Let's", "míaƒome = together"],
          explanation: "Mina míaƒome míayi = Let's go together in Ewe."
        },
        {
          id: 706,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míaɖu_ƒome.m4a"),
          options: [
            { id: 1, text: "Let's go together" },
            { id: 2, text: "Let's eat together" },
            { id: 3, text: "What time does it start?" },
            { id: 4, text: "The music is nice" }
          ],
          correctOptionId: 2,
          hints: ["míaɖu = let's eat", "ƒome = together"],
          explanation: "You heard 'Mina míaɖunua ƒome' which means 'Let's eat together' in Ewe."
        },
        {
          id: 707,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'What time does it start?' in Ewe?",
          options: [
            { id: 1, text: "Mina míaƒome míayi" },
            { id: 2, text: "Mina míaɖunua ƒome" },
            { id: 3, text: "Gaƒoƒo kae me wòdzena egɔme?" },
            { id: 4, text: "Hadzidzia vivi" }
          ],
          correctOptionId: 3,
          hints: ["egɔme = start"],
          explanation: "Gaƒoƒo kae me wòdzena egɔme? = What time does it start? in Ewe."
        },
        {
          id: 708,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/hadzidzia_vivi.m4a"),
          options: [
            { id: 1, text: "Let's go together" },
            { id: 2, text: "Let's eat together" },
            { id: 3, text: "What time does it start?" },
            { id: 4, text: "The music is nice" }
          ],
          correctOptionId: 4,
          hints: ["hadzidzia = music", "vivi = nice"],
          explanation: "You heard 'Hadzidzia vivi' which means 'The music is nice' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-7",
    title: "Review: Social Life",
    icon: "refresh-outline",
    description: "Review all the social life vocabulary you've learned",
    questions: [
      {
        id: 709,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Let's meet on Saturday' in Ewe?",
        options: [
          { id: 1, text: "Mina míado go Memleɖagbe" },
          { id: 2, text: "Èva azãɖuƒea?" },
          { id: 3, text: "Mava kɔ wò" },
          { id: 4, text: "Kpe xɔ̃wòwo" }
        ],
        correctOptionId: 1,
        hints: ["Memleɖagbe = Saturday"],
        explanation: "Mina míado go Memleɖagbe = Let's meet on Saturday."
      },
      {
        id: 710,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mava_kɔ_wò.m4a"),
        options: [
          { id: 1, text: "Let's meet on Saturday" },
          { id: 2, text: "Are you coming to the party?" },
          { id: 3, text: "I will pick you up" },
          { id: 4, text: "Invite your friends" }
        ],
        correctOptionId: 3,
        hints: ["kɔ = pick up"],
        explanation: "You heard 'Mava kɔ wò' which means 'I will pick you up'."
      },
      {
        id: 711,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Invite your friends' in Ewe?",
        options: [
          { id: 1, text: "Mina míado go Memleɖagbe" },
          { id: 2, text: "Èva azãɖuƒea?" },
          { id: 3, text: "Mava kɔ wò" },
          { id: 4, text: "Kpe xɔ̃wòwo" }
        ],
        correctOptionId: 4,
        hints: ["xɔ̃wòwo = your friends"],
        explanation: "Kpe xɔ̃wòwo = Invite your friends."
      },
      {
        id: 712,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/gaƒoƒo_ka_mee_wòdzena_egɔme.m4a"),
        options: [
          { id: 1, text: "Let's go together" },
          { id: 2, text: "Let's eat together" },
          { id: 3, text: "What time does it start?" },
          { id: 4, text: "The music is nice" }
        ],
        correctOptionId: 3,
        hints: ["egɔme = start"],
        explanation: "You heard 'Gaƒoƒo kae me wòdzena egɔme?' which means 'What time does it start?'."
      },
      {
        id: 713,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Let's go together' in Ewe?",
        options: [
          { id: 1, text: "Mina míaƒome míayi" },
          { id: 2, text: "Mina míaɖunua ƒome" },
          { id: 3, text: "Gaƒoƒo kae me wòdzena egɔme?" },
          { id: 4, text: "Hadzidzia vivi" }
        ],
        correctOptionId: 1,
        hints: ["míaƒome = together"],
        explanation: "Mina míaƒome míayi = Let's go together."
      },
      {
        id: 714,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Are you coming to the party?' in Ewe?",
        options: [
          { id: 1, text: "Mina míado go Memleɖagbe" },
          { id: 2, text: "Èva azãɖuƒea?" },
          { id: 3, text: "Mava kɔ wò" },
          { id: 4, text: "Kpe xɔ̃wòwo" }
        ],
        correctOptionId: 2,
        hints: ["azãɖuƒe = party"],
        explanation: "Èva azãɖuƒea? = Are you coming to the party?"
      },
      {
        id: 715,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míaƒome_míayi.m4a"),
        options: [
          { id: 1, text: "Let's go together" },
          { id: 2, text: "Let's eat together" },
          { id: 3, text: "I will pick you up" },
          { id: 4, text: "The music is nice" }
        ],
        correctOptionId: 1,
        hints: ["míaƒome = together"],
        explanation: "You heard 'Mina míaƒome míayi' which means 'Let's go together'."
      },
      {
        id: 716,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Let's eat together' in Ewe?",
        options: [
          { id: 1, text: "Mina míaƒome míayi" },
          { id: 2, text: "Mina míaɖunua ƒome" },
          { id: 3, text: "Gaƒoƒo kae me wòdzena egɔme?" },
          { id: 4, text: "Hadzidzia vivi" }
        ],
        correctOptionId: 2,
        hints: ["míaɖu = let's eat"],
        explanation: "Mina míaɖunua ƒome = Let's eat together."
      },
      {
        id: 717,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míado_go_le_memleɖagbe.m4a"),
        options: [
          { id: 1, text: "Let's meet on Saturday" },
          { id: 2, text: "Are you coming to the party?" },
          { id: 3, text: "I will pick you up" },
          { id: 4, text: "Invite your friends" }
        ],
        correctOptionId: 1,
        hints: ["Memleɖagbe = Saturday"],
        explanation: "You heard 'Mina míado go Memleɖagbe' which means 'Let's meet on Saturday'."
      },
      {
        id: 718,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The music is nice' in Ewe?",
        options: [
          { id: 1, text: "Mina míaƒome míayi" },
          { id: 2, text: "Mina míaɖunua ƒome" },
          { id: 3, text: "Gaƒoƒo kae me wòdzena egɔme?" },
          { id: 4, text: "Hadzidzia vivi" }
        ],
        correctOptionId: 4,
        hints: ["hadzidzia = music"],
        explanation: "Hadzidzia vivi = The music is nice."
      }
    ]
  }
};