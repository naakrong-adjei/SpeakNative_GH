export default {
  id: 23,
  title: "Public Speaking",
  description: "Learn public speaking and formal speech phrases in Ewe",
  icon: "mic-outline",
  totalXp: 10,
  difficulty: "Advanced",

  sections: [
    {
      id: "23-1",
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
          id: 2301,
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
          id: 2302,
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
          id: 2303,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Enye bubu be metsi tre ɖe [_____] (It is an honour to stand here)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "afia" },
            { id: "opt2", text: "afima" },
            { id: "opt3", text: "afisia" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["afia = here"],
          explanation: "Enye bubu be metsi tre ɖe afia = It is an honour to stand here in Ewe."
        }
      ]
    },

    {
      id: "23-2",
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
          id: 2304,
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
          id: 2305,
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
          id: 2306,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Mina madze egɔme to akpedada na mi [_____] (Let me begin by thanking you)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "me" },
            { id: "opt2", text: "nu" },
            { id: "opt3", text: "wo" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["me = in"],
          explanation: "Mina madze egɔme to akpedada na mi me = Let me begin by thanking you in Ewe."
        }
      ]
    },

    {
      id: "23-3",
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
        }
        // TODO: Add back "Thank you for your attention" when audio is ready
        // {
        //   id: 253,
        //   english: "Thank you for your attention",
        //   native: "Akpe na wò ɖotoɖoame",
        //   audioUrl: require("../../../../assets/audio/ewe/advanced/chapter3/akpe_na_wò_ɖotoɖoame.m4a")
        // }
      ],
      questions: [
        {
          id: 2307,
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
          id: 2308,
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
        }
      ]
    }
  ],

  review: {
    id: "review-23",
    title: "Review: Public Speaking",
    icon: "refresh-outline",
    description: "Review all the public speaking vocabulary you've learned",
    questions: [
      {
        id: 2309,
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
        id: 2310,
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
        id: 2311,
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
        id: 2312,
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
        id: 2313,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Allow me to explain' in Ewe?",
        options: [
          { id: 1, text: "Mina madze egɔme to akpedada na mi me" },
          { id: 2, text: "Na mɔnukpɔkpɔm maɖe eme" },
          { id: 3, text: "Le nuwuwua" },
          { id: 4, text: "Amedzro bubutɔwo, fiẽ na mi" }
        ],
        correctOptionId: 2,
        hints: ["mɔnukpɔkpɔm = permission"],
        explanation: "Na mɔnukpɔkpɔm maɖe eme = Allow me to explain."
      },
      {
        id: 2314,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Enye bubu be metsi tre ɖe [_____] (It is an honour to stand here)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "afia" },
          { id: "opt2", text: "afima" },
          { id: "opt3", text: "afisia" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["afia = here"],
        explanation: "Enye bubu be metsi tre ɖe afia = It is an honour to stand here."
      },
      {
        id: 2315,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Mina madze egɔme to akpedada na mi [_____] (Let me begin by thanking you)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "me" },
          { id: "opt2", text: "nu" },
          { id: "opt3", text: "wo" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["me = in"],
        explanation: "Mina madze egɔme to akpedada na mi me = Let me begin by thanking you."
      },
      {
        id: 2316,
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
        id: 2317,
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
        hints: ["nyɔnuwo = ladies"],
        explanation: "You heard 'Nyɔnuwo kple ŋutsuwo' which means 'Ladies and gentlemen'."
      },
      {
        id: 2318,
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
      }
    ]
  }
};