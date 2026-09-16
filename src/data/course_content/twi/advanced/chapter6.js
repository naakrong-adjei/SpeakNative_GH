export default {
  id: 6,
  title: "Public Speaking",
  description: "Learn public speaking vocabulary in Twi",
  icon: "mic-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "6-1",
      type: "phrases",
      title: "Opening a Speech",
      icon: "mic-outline",
      description: "Learn how to open a speech in Twi",
      words: ["Mmea ne mmarima", "Ɛyɛ animuonyam sɛ megyina ha"],
      vocabulary: [
        {
          id: 270,
          english: "Ladies and gentlemen",
          native: "Mmea ne mmarima",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/mmea_ne_mmarima.m4a")
        },
        {
          id: 271,
          english: "It is an honour to stand here",
          native: "Ɛyɛ animuonyam sɛ megyina ha",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/ɛyɛ_animuonyam_sɛ_megyina_ha.m4a")
        }
      ],
      questions: [
        {
          id: 601,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Ladies and gentlemen' in Twi?",
          options: [
            { id: 1, text: "Mmea ne mmarima" },
            { id: 2, text: "Ɛyɛ animuonyam sɛ megyina ha" },
            { id: 3, text: "Ma memfiri aseɛ nna mo ase" },
            { id: 4, text: "Nea etwa toɔ" }
          ],
          correctOptionId: 1,
          hints: ["mmea = ladies", "mmarima = gentlemen"],
          explanation: "Mmea ne mmarima = Ladies and gentlemen in Twi."
        },
        {
          id: 602,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/ɛyɛ_animuonyam_sɛ_megyina_ha.m4a"),
          options: [
            { id: 1, text: "Ladies and gentlemen" },
            { id: 2, text: "It is an honour to stand here" },
            { id: 3, text: "Let me begin by thanking you" },
            { id: 4, text: "In conclusion" }
          ],
          correctOptionId: 2,
          hints: ["animuonyam = honour"],
          explanation: "You heard 'Ɛyɛ animuonyam sɛ megyina ha' which means 'It is an honour to stand here' in Twi."
        },
        {
          id: 603,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'It is an honour to stand here' in Twi?",
          options: [
            { id: 1, text: "Mmea ne mmarima" },
            { id: 2, text: "Ɛyɛ animuonyam sɛ megyina ha" },
            { id: 3, text: "Ma me nkyerɛkyerɛ mu" },
            { id: 4, text: "Meda wo ase sɛ wo tie me" }
          ],
          correctOptionId: 2,
          hints: ["animuonyam = honour"],
          explanation: "Ɛyɛ animuonyam sɛ megyina ha = It is an honour to stand here in Twi."
        }
      ]
    },

    {
      id: "6-2",
      type: "phrases",
      title: "Delivering Your Point",
      icon: "megaphone-outline",
      description: "Learn phrases for delivering your point in Twi",
      words: ["Ma memfiri aseɛ nna mo ase", "Ma me nkyerɛkyerɛ mu"],
      vocabulary: [
        {
          id: 272,
          english: "Let me begin by thanking you",
          native: "Ma memfiri aseɛ nna mo ase",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/ma_memfiri_aseɛ_nna_mo_ase.m4a")
        },
        {
          id: 273,
          english: "Allow me to explain",
          native: "Ma me nkyerɛkyerɛ mu",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/ma_me_nkyerɛkyerɛ_mu.m4a")
        }
      ],
      questions: [
        {
          id: 604,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Let me begin by thanking you' in Twi?",
          options: [
            { id: 1, text: "Ma memfiri aseɛ nna mo ase" },
            { id: 2, text: "Ma me nkyerɛkyerɛ mu" },
            { id: 3, text: "Nea etwa toɔ" },
            { id: 4, text: "Mmea ne mmarima" }
          ],
          correctOptionId: 1,
          hints: ["memfiri aseɛ = let me begin", "nna mo ase = thanking you"],
          explanation: "Ma memfiri aseɛ nna mo ase = Let me begin by thanking you in Twi."
        },
        {
          id: 605,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/ma_me_nkyerɛkyerɛ_mu.m4a"),
          options: [
            { id: 1, text: "Let me begin by thanking you" },
            { id: 2, text: "Allow me to explain" },
            { id: 3, text: "In conclusion" },
            { id: 4, text: "It is an honour to stand here" }
          ],
          correctOptionId: 2,
          hints: ["nkyerɛkyerɛ mu = explain"],
          explanation: "You heard 'Ma me nkyerɛkyerɛ mu' which means 'Allow me to explain' in Twi."
        },
        {
          id: 606,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Allow me to explain' in Twi?",
          options: [
            { id: 1, text: "Ma memfiri aseɛ nna mo ase" },
            { id: 2, text: "Ma me nkyerɛkyerɛ mu" },
            { id: 3, text: "Nea etwa toɔ" },
            { id: 4, text: "Meda wo ase sɛ wo tie me" }
          ],
          correctOptionId: 2,
          hints: ["nkyerɛkyerɛ mu = explain"],
          explanation: "Ma me nkyerɛkyerɛ mu = Allow me to explain in Twi."
        }
      ]
    },

    {
      id: "6-3",
      type: "phrases",
      title: "Closing a Speech",
      icon: "checkmark-circle-outline",
      description: "Learn how to close a speech in Twi",
      words: ["Nea etwa toɔ", "Meda wo ase sɛ wo tie me"],
      vocabulary: [
        {
          id: 274,
          english: "In conclusion",
          native: "Nea etwa toɔ",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/nea_etwa_toɔ.m4a")
        },
        {
          id: 275,
          english: "Thank you for your attention",
          native: "Meda wo ase sɛ wo tie me",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/meda_wo_ase_sɛ_wo_tie_me.m4a")
        }
      ],
      questions: [
        {
          id: 607,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'In conclusion' in Twi?",
          options: [
            { id: 1, text: "Nea etwa toɔ" },
            { id: 2, text: "Meda wo ase sɛ wo tie me" },
            { id: 3, text: "Ma memfiri aseɛ nna mo ase" },
            { id: 4, text: "Ma me nkyerɛkyerɛ mu" }
          ],
          correctOptionId: 1,
          hints: ["etwa toɔ = conclusion"],
          explanation: "Nea etwa toɔ = In conclusion in Twi."
        },
        {
          id: 608,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/meda_wo_ase_sɛ_wo_tie_me.m4a"),
          options: [
            { id: 1, text: "In conclusion" },
            { id: 2, text: "Thank you for your attention" },
            { id: 3, text: "Let me begin by thanking you" },
            { id: 4, text: "Ladies and gentlemen" }
          ],
          correctOptionId: 2,
          hints: ["Meda wo ase = thank you", "tie me = attention"],
          explanation: "You heard 'Meda wo ase sɛ wo tie me' which means 'Thank you for your attention' in Twi."
        },
        {
          id: 609,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Thank you for your attention' in Twi?",
          options: [
            { id: 1, text: "Nea etwa toɔ" },
            { id: 2, text: "Meda wo ase sɛ wo tie me" },
            { id: 3, text: "Ɛyɛ animuonyam sɛ megyina ha" },
            { id: 4, text: "Ma memfiri aseɛ nna mo ase" }
          ],
          correctOptionId: 2,
          hints: ["Meda wo ase = thank you"],
          explanation: "Meda wo ase sɛ wo tie me = Thank you for your attention in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-6",
    title: "Review: Public Speaking",
    icon: "refresh-outline",
    description: "Review all the public speaking vocabulary you've learned",
    questions: [
      {
        id: 610,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Ladies and gentlemen' in Twi?",
        options: [
          { id: 1, text: "Mmea ne mmarima" },
          { id: 2, text: "Ɛyɛ animuonyam sɛ megyina ha" },
          { id: 3, text: "Ma memfiri aseɛ nna mo ase" },
          { id: 4, text: "Nea etwa toɔ" }
        ],
        correctOptionId: 1,
        hints: ["mmea = ladies"],
        explanation: "Mmea ne mmarima = Ladies and gentlemen."
      },
      {
        id: 611,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/nea_etwa_toɔ.m4a"),
        options: [
          { id: 1, text: "In conclusion" },
          { id: 2, text: "Thank you for your attention" },
          { id: 3, text: "Let me begin by thanking you" },
          { id: 4, text: "Allow me to explain" }
        ],
        correctOptionId: 1,
        hints: ["etwa toɔ = conclusion"],
        explanation: "You heard 'Nea etwa toɔ' which means 'In conclusion'."
      },
      {
        id: 612,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'It is an honour to stand here' in Twi?",
        options: [
          { id: 1, text: "Mmea ne mmarima" },
          { id: 2, text: "Ɛyɛ animuonyam sɛ megyina ha" },
          { id: 3, text: "Ma me nkyerɛkyerɛ mu" },
          { id: 4, text: "Meda wo ase sɛ wo tie me" }
        ],
        correctOptionId: 2,
        hints: ["animuonyam = honour"],
        explanation: "Ɛyɛ animuonyam sɛ megyina ha = It is an honour to stand here."
      },
      {
        id: 613,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter6/ma_me_nkyerɛkyerɛ_mu.m4a"),
        options: [
          { id: 1, text: "Let me begin by thanking you" },
          { id: 2, text: "Allow me to explain" },
          { id: 3, text: "In conclusion" },
          { id: 4, text: "Ladies and gentlemen" }
        ],
        correctOptionId: 2,
        hints: ["nkyerɛkyerɛ mu = explain"],
        explanation: "You heard 'Ma me nkyerɛkyerɛ mu' which means 'Allow me to explain'."
      },
      {
        id: 614,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Let me begin by thanking you' in Twi?",
        options: [
          { id: 1, text: "Ma memfiri aseɛ nna mo ase" },
          { id: 2, text: "Ma me nkyerɛkyerɛ mu" },
          { id: 3, text: "Nea etwa toɔ" },
          { id: 4, text: "Mmea ne mmarima" }
        ],
        correctOptionId: 1,
        hints: ["memfiri aseɛ = let me begin"],
        explanation: "Ma memfiri aseɛ nna mo ase = Let me begin by thanking you."
      },
      {
        id: 615,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Allow me to explain' in Twi?",
        options: [
          { id: 1, text: "Ma memfiri aseɛ nna mo ase" },
          { id: 2, text: "Ma me nkyerɛkyerɛ mu" },
          { id: 3, text: "Nea etwa toɔ" },
          { id: 4, text: "Meda wo ase sɛ wo tie me" }
        ],
        correctOptionId: 2,
        hints: ["nkyerɛkyerɛ mu = explain"],
        explanation: "Ma me nkyerɛkyerɛ mu = Allow me to explain."
      },
      {
        id: 616,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'In conclusion' in Twi?",
        options: [
          { id: 1, text: "Nea etwa toɔ" },
          { id: 2, text: "Meda wo ase sɛ wo tie me" },
          { id: 3, text: "Ma memfiri aseɛ nna mo ase" },
          { id: 4, text: "Ɛyɛ animuonyam sɛ megyina ha" }
        ],
        correctOptionId: 1,
        hints: ["etwa toɔ = conclusion"],
        explanation: "Nea etwa toɔ = In conclusion."
      },
      {
        id: 617,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Thank you for your attention' in Twi?",
        options: [
          { id: 1, text: "Nea etwa toɔ" },
          { id: 2, text: "Meda wo ase sɛ wo tie me" },
          { id: 3, text: "Ɛyɛ animuonyam sɛ megyina ha" },
          { id: 4, text: "Ma memfiri aseɛ nna mo ase" }
        ],
        correctOptionId: 2,
        hints: ["Meda wo ase = thank you"],
        explanation: "Meda wo ase sɛ wo tie me = Thank you for your attention."
      }
    ]
  }
};