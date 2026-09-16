export default {
  id: 3,
  title: "Public Speaking",
  description: "Learn public speaking and formal speech phrases in Ewe",
  icon: "mic-outline",
  totalXp: 10,
  difficulty: "Advanced",

  sections: [
    {
      id: "3-1",
      type: "words",
      title: "Opening a Speech",
      icon: "mic-outline",
      description: "Learn how to open a speech or formal presentation in Ewe",
      words: ["Amedzro bubutɔwo, fiẽ na mi", "Nyɔnuwo kple ŋutsuwo", "Enye bubu be metsi tre ɖe afia"],
      vocabulary: [
        {
          id: 247,
          english: "Distinguished guests, good evening",
          native: "Amedzro bubutɔwo, fiẽ na mi",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/amedzro_bubutɔwo_fiẽ_na_mi.m4a")
        },
        {
          id: 250,
          english: "Ladies and gentlemen",
          native: "Nyɔnuwo kple ŋutsuwo",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/nyɔnuwo_kple_ŋutsuwo.m4a")
        },
        {
          id: 251,
          english: "It is an honour to stand here",
          native: "Enye bubu be metsi tre ɖe afia",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/enye_bubu_be_metsi_tre_ɖe_afia.m4a")
        }
      ],
      questions: [
        {
          id: 301,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Distinguished guests, good evening' in Ewe?",
          options: [
            { id: 1, text: "Amedzro bubutɔwo, fiẽ na mi" },
            { id: 2, text: "Nyɔnuwo kple ŋutsuwo" },
            { id: 3, text: "Enye bubu be metsi tre ɖe afia" },
            { id: 4, text: "Mina madze egɔme to akpedada na mi me" }
          ],
          correctOptionId: 1,
          hints: ["amedzro = guests", "bubutɔwo = distinguished"],
          explanation: "Amedzro bubutɔwo, fiẽ na mi = Distinguished guests, good evening in Ewe."
        },
        {
          id: 302,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/nyɔnuwo_kple_ŋutsuwo.m4a"),
          options: [
            { id: 1, text: "Distinguished guests, good evening" },
            { id: 2, text: "Ladies and gentlemen" },
            { id: 3, text: "It is an honour to stand here" },
            { id: 4, text: "Let me begin by thanking you" }
          ],
          correctOptionId: 2,
          hints: ["nyɔnuwo = ladies", "ŋutsuwo = gentlemen"],
          explanation: "You heard 'Nyɔnuwo kple ŋutsuwo' which means 'Ladies and gentlemen' in Ewe."
        },
        {
          id: 303,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'It is an honour to stand here' in Ewe?",
          options: [
            { id: 1, text: "Amedzro bubutɔwo, fiẽ na mi" },
            { id: 2, text: "Nyɔnuwo kple ŋutsuwo" },
            { id: 3, text: "Enye bubu be metsi tre ɖe afia" },
            { id: 4, text: "Le nuwuwua" }
          ],
          correctOptionId: 3,
          hints: ["bubu = honour"],
          explanation: "Enye bubu be metsi tre ɖe afia = It is an honour to stand here in Ewe."
        },
        {
          id: 304,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/amedzro_bubutɔwo_fiẽ_na_mi.m4a"),
          options: [
            { id: 1, text: "Distinguished guests, good evening" },
            { id: 2, text: "Ladies and gentlemen" },
            { id: 3, text: "It is an honour to stand here" },
            { id: 4, text: "In conclusion" }
          ],
          correctOptionId: 1,
          hints: ["amedzro = guests"],
          explanation: "You heard 'Amedzro bubutɔwo, fiẽ na mi' which means 'Distinguished guests, good evening' in Ewe."
        }
      ]
    },

    {
      id: "3-2",
      type: "words",
      title: "Delivering Your Point",
      icon: "megaphone-outline",
      description: "Learn how to deliver your key points in a speech in Ewe",
      words: ["Mina madze egɔme to akpedada na mi me", "Na mɔnukpɔkpɔm maɖe eme"],
      vocabulary: [
        {
          id: 248,
          english: "Let me begin by thanking you",
          native: "Mina madze egɔme to akpedada na mi me",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/mina_madze_egɔme_to_akpedada_na_mi_me.m4a")
        },
        {
          id: 252,
          english: "Allow me to explain",
          native: "Na mɔnukpɔkpɔm maɖe eme",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/na_mɔnukpɔkpɔm_maɖe_eme.m4a")
        }
      ],
      questions: [
        {
          id: 305,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Let me begin by thanking you' in Ewe?",
          options: [
            { id: 1, text: "Mina madze egɔme to akpedada na mi me" },
            { id: 2, text: "Na mɔnukpɔkpɔm maɖe eme" },
            { id: 3, text: "Le nuwuwua" },
            { id: 4, text: "Amedzro bubutɔwo, fiẽ na mi" }
          ],
          correctOptionId: 1,
          hints: ["madze egɔme = let me begin", "akpedada = thanking"],
          explanation: "Mina madze egɔme to akpedada na mi me = Let me begin by thanking you in Ewe."
        },
        {
          id: 306,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/na_mɔnukpɔkpɔm_maɖe_eme.m4a"),
          options: [
            { id: 1, text: "Let me begin by thanking you" },
            { id: 2, text: "Allow me to explain" },
            { id: 3, text: "In conclusion" },
            { id: 4, text: "Ladies and gentlemen" }
          ],
          correctOptionId: 2,
          hints: ["mɔnukpɔkpɔm = permission", "maɖe eme = I explain"],
          explanation: "You heard 'Na mɔnukpɔkpɔm maɖe eme' which means 'Allow me to explain' in Ewe."
        },
        {
          id: 307,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Allow me to explain' in Ewe?",
          options: [
            { id: 1, text: "Mina madze egɔme to akpedada na mi me" },
            { id: 2, text: "Na mɔnukpɔkpɔm maɖe eme" },
            { id: 3, text: "Le nuwuwua" },
            { id: 4, text: "Enye bubu be metsi tre ɖe afia" }
          ],
          correctOptionId: 2,
          hints: ["mɔnukpɔkpɔm = permission"],
          explanation: "Na mɔnukpɔkpɔm maɖe eme = Allow me to explain in Ewe."
        },
        {
          id: 308,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/mina_madze_egɔme_to_akpedada_na_mi_me.m4a"),
          options: [
            { id: 1, text: "Let me begin by thanking you" },
            { id: 2, text: "Allow me to explain" },
            { id: 3, text: "In conclusion" },
            { id: 4, text: "Ladies and gentlemen" }
          ],
          correctOptionId: 1,
          hints: ["akpedada = thanking"],
          explanation: "You heard 'Mina madze egɔme to akpedada na mi me' which means 'Let me begin by thanking you' in Ewe."
        }
      ]
    },

    {
      id: "3-3",
      type: "words",
      title: "Closing a Speech",
      icon: "checkmark-outline",
      description: "Learn how to close a speech or presentation in Ewe",
      words: ["Le nuwuwua"],
      vocabulary: [
        {
          id: 249,
          english: "In conclusion",
          native: "Le nuwuwua",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/le_nuwuwua.m4a")
        },
        {
          id: 253,
          english: "Thank you for your attention",
          native: "Akpe na wò ɖotoɖoame",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/akpe_na_wò_ɖotoɖoame.m4a")
        }
      ],
      questions: [
        {
          id: 309,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'In conclusion' in Ewe?",
          options: [
            { id: 1, text: "Le nuwuwua" },
            { id: 2, text: "Mina madze egɔme to akpedada na mi me" },
            { id: 3, text: "Na mɔnukpɔkpɔm maɖe eme" },
            { id: 4, text: "Amedzro bubutɔwo, fiẽ na mi" }
          ],
          correctOptionId: 1,
          hints: ["nuwuwua = conclusion"],
          explanation: "Le nuwuwua = In conclusion in Ewe."
        },
        {
          id: 310,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/le_nuwuwua.m4a"),
          options: [
            { id: 1, text: "Let me begin by thanking you" },
            { id: 2, text: "Allow me to explain" },
            { id: 3, text: "In conclusion" },
            { id: 4, text: "Ladies and gentlemen" }
          ],
          correctOptionId: 3,
          hints: ["nuwuwua = conclusion"],
          explanation: "You heard 'Le nuwuwua' which means 'In conclusion' in Ewe."
        },
        {
          id: 311,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Thank you for your attention' in Ewe?",
          options: [
            { id: 1, text: "Le nuwuwua" },
            { id: 2, text: "Akpe na wò ɖotoɖoame" },
            { id: 3, text: "Na mɔnukpɔkpɔm maɖe eme" },
            { id: 4, text: "Nyɔnuwo kple ŋutsuwo" }
          ],
          correctOptionId: 2,
          hints: ["akpe = thank you", "ɖotoɖoame = attention"],
          explanation: "Akpe na wò ɖotoɖoame = Thank you for your attention in Ewe."
        },
        {
          id: 312,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/akpe_na_wò_ɖotoɖoame.m4a"),
          options: [
            { id: 1, text: "In conclusion" },
            { id: 2, text: "Thank you for your attention" },
            { id: 3, text: "Let me begin by thanking you" },
            { id: 4, text: "Allow me to explain" }
          ],
          correctOptionId: 2,
          hints: ["ɖotoɖoame = attention"],
          explanation: "You heard 'Akpe na wò ɖotoɖoame' which means 'Thank you for your attention' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-3",
    title: "Review: Public Speaking",
    icon: "refresh-outline",
    description: "Review all the public speaking vocabulary you've learned",
    questions: [
      {
        id: 313,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Distinguished guests, good evening' in Ewe?",
        options: [
          { id: 1, text: "Amedzro bubutɔwo, fiẽ na mi" },
          { id: 2, text: "Nyɔnuwo kple ŋutsuwo" },
          { id: 3, text: "Enye bubu be metsi tre ɖe afia" },
          { id: 4, text: "Mina madze egɔme to akpedada na mi me" }
        ],
        correctOptionId: 1,
        hints: ["amedzro = guests"],
        explanation: "Amedzro bubutɔwo, fiẽ na mi = Distinguished guests, good evening."
      },
      {
        id: 314,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/enye_bubu_be_metsi_tre_ɖe_afia.m4a"),
        options: [
          { id: 1, text: "Distinguished guests, good evening" },
          { id: 2, text: "Ladies and gentlemen" },
          { id: 3, text: "It is an honour to stand here" },
          { id: 4, text: "Let me begin by thanking you" }
        ],
        correctOptionId: 3,
        hints: ["bubu = honour"],
        explanation: "You heard 'Enye bubu be metsi tre ɖe afia' which means 'It is an honour to stand here'."
      },
      {
        id: 315,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Ladies and gentlemen' in Ewe?",
        options: [
          { id: 1, text: "Amedzro bubutɔwo, fiẽ na mi" },
          { id: 2, text: "Nyɔnuwo kple ŋutsuwo" },
          { id: 3, text: "Enye bubu be metsi tre ɖe afia" },
          { id: 4, text: "Mina madze egɔme to akpedada na mi me" }
        ],
        correctOptionId: 2,
        hints: ["nyɔnuwo = ladies", "ŋutsuwo = gentlemen"],
        explanation: "Nyɔnuwo kple ŋutsuwo = Ladies and gentlemen."
      },
      {
        id: 316,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/na_mɔnukpɔkpɔm_maɖe_eme.m4a"),
        options: [
          { id: 1, text: "Let me begin by thanking you" },
          { id: 2, text: "Allow me to explain" },
          { id: 3, text: "In conclusion" },
          { id: 4, text: "Ladies and gentlemen" }
        ],
        correctOptionId: 2,
        hints: ["maɖe eme = I explain"],
        explanation: "You heard 'Na mɔnukpɔkpɔm maɖe eme' which means 'Allow me to explain'."
      },
      {
        id: 317,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'It is an honour to stand here' in Ewe?",
        options: [
          { id: 1, text: "Amedzro bubutɔwo, fiẽ na mi" },
          { id: 2, text: "Nyɔnuwo kple ŋutsuwo" },
          { id: 3, text: "Enye bubu be metsi tre ɖe afia" },
          { id: 4, text: "Mina madze egɔme to akpedada na mi me" }
        ],
        correctOptionId: 3,
        hints: ["bubu = honour"],
        explanation: "Enye bubu be metsi tre ɖe afia = It is an honour to stand here."
      },
      {
        id: 318,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Let me begin by thanking you' in Ewe?",
        options: [
          { id: 1, text: "Mina madze egɔme to akpedada na mi me" },
          { id: 2, text: "Na mɔnukpɔkpɔm maɖe eme" },
          { id: 3, text: "Le nuwuwua" },
          { id: 4, text: "Amedzro bubutɔwo, fiẽ na mi" }
        ],
        correctOptionId: 1,
        hints: ["akpedada = thanking"],
        explanation: "Mina madze egɔme to akpedada na mi me = Let me begin by thanking you."
      },
      {
        id: 319,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/mina_madze_egɔme_to_akpedada_na_mi_me.m4a"),
        options: [
          { id: 1, text: "Let me begin by thanking you" },
          { id: 2, text: "Allow me to explain" },
          { id: 3, text: "In conclusion" },
          { id: 4, text: "Ladies and gentlemen" }
        ],
        correctOptionId: 1,
        hints: ["akpedada = thanking"],
        explanation: "You heard 'Mina madze egɔme to akpedada na mi me' which means 'Let me begin by thanking you'."
      },
      {
        id: 320,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Allow me to explain' in Ewe?",
        options: [
          { id: 1, text: "Mina madze egɔme to akpedada na mi me" },
          { id: 2, text: "Na mɔnukpɔkpɔm maɖe eme" },
          { id: 3, text: "Le nuwuwua" },
          { id: 4, text: "Nyɔnuwo kple ŋutsuwo" }
        ],
        correctOptionId: 2,
        hints: ["mɔnukpɔkpɔm = permission"],
        explanation: "Na mɔnukpɔkpɔm maɖe eme = Allow me to explain."
      },
      {
        id: 321,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/le_nuwuwua.m4a"),
        options: [
          { id: 1, text: "Let me begin by thanking you" },
          { id: 2, text: "Allow me to explain" },
          { id: 3, text: "In conclusion" },
          { id: 4, text: "Ladies and gentlemen" }
        ],
        correctOptionId: 3,
        hints: ["nuwuwua = conclusion"],
        explanation: "You heard 'Le nuwuwua' which means 'In conclusion'."
      },
      {
        id: 322,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'In conclusion' in Ewe?",
        options: [
          { id: 1, text: "Le nuwuwua" },
          { id: 2, text: "Mina madze egɔme to akpedada na mi me" },
          { id: 3, text: "Na mɔnukpɔkpɔm maɖe eme" },
          { id: 4, text: "Amedzro bubutɔwo, fiẽ na mi" }
        ],
        correctOptionId: 1,
        hints: ["nuwuwua = conclusion"],
        explanation: "Le nuwuwua = In conclusion."
      },
      {
        id: 33,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Thank you for your attention' in Ewe?",
        options: [
          { id: 1, text: "Le nuwuwua" },
          { id: 2, text: "Akpe na wò ɖotoɖoame" },
          { id: 3, text: "Na mɔnukpɔkpɔm maɖe eme" },
          { id: 4, text: "Enye bubu be metsi tre ɖe afia" }
        ],
        correctOptionId: 2,
        hints: ["akpe = thank you"],
        explanation: "Akpe na wò ɖotoɖoame = Thank you for your attention."
      },
      {
        id: 324,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/akpe_na_wò_ɖotoɖoame.m4a"),
        options: [
          { id: 1, text: "In conclusion" },
          { id: 2, text: "Thank you for your attention" },
          { id: 3, text: "Let me begin by thanking you" },
          { id: 4, text: "Allow me to explain" }
        ],
        correctOptionId: 2,
        hints: ["ɖotoɖoame = attention"],
        explanation: "You heard 'Akpe na wò ɖotoɖoame' which means 'Thank you for your attention'."
      }
    ]
  }
};