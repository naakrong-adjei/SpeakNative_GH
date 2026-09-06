export default {
  id: 24,
  title: "Festivals & Traditions",
  description: "Learn about Ghanaian festivals and traditions in Ewe",
  icon: "ribbon-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "24-1",
      type: "words",
      title: "Festivals & Chiefs",
      icon: "crown-outline",
      description: "Learn about festivals and chieftaincy in Ewe",
      words: ["Blema kɔnu ŋkekenyui", "Fia", "Fianyɔnu"],
      vocabulary: [
        {
          id: 166,
          english: "Traditional festival",
          native: "Blema kɔnu ŋkekenyui",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/blema_kɔnu_ŋkekenyui.m4a")
        },
        {
          id: 167,
          english: "Chief",
          native: "Fia",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/fia.m4a")
        },
        {
          id: 172,
          english: "Queen mother",
          native: "Fianyɔnu",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/fianyɔnu.m4a")
        }
      ],
      questions: [
        {
          id: 2401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Traditional festival' in Ewe?",
          options: [
            { id: 1, text: "Blema kɔnu ŋkekenyui" },
            { id: 2, text: "Fia" },
            { id: 3, text: "Fianyɔnu" },
            { id: 4, text: "Ŋkɔnana" }
          ],
          correctOptionId: 1,
          hints: ["Blema = traditional", "ŋkekenyui = festival"],
          explanation: "Blema kɔnu ŋkekenyui = Traditional festival in Ewe."
        },
        {
          id: 2402,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/fia.m4a"),
          options: [
            { id: 1, text: "Traditional festival" },
            { id: 2, text: "Chief" },
            { id: 3, text: "Queen mother" },
            { id: 4, text: "Naming ceremony" }
          ],
          correctOptionId: 2,
          hints: ["Fia = Chief"],
          explanation: "You heard 'Fia' which means 'Chief' in Ewe."
        },
        {
          id: 2403,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Fia[_____] (Queen mother)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "nyɔnu" },
            { id: "opt2", text: "ŋu" },
            { id: "opt3", text: "me" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["nyɔnu = female/woman"],
          explanation: "Fianyɔnu = Queen mother in Ewe."
        }
      ]
    },

    {
      id: "24-2",
      type: "words",
      title: "Ceremonies",
      icon: "drum-outline",
      description: "Learn about traditional ceremonies in Ewe",
      words: ["Ŋkɔnana", "Ʋuƒoƒo kple ɣeɖuɖu", "Ametsitsiwo ƒo tsi di"],
      vocabulary: [
        {
          id: 168,
          english: "Naming ceremony",
          native: "Ŋkɔnana",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/ŋkɔnana.m4a")
        },
        {
          id: 170,
          english: "Drumming and dancing",
          native: "Ʋuƒoƒo kple ɣeɖuɖu",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/ʋuƒoƒo_kple_ɣeɖuɖu.m4a")
        },
        {
          id: 174,
          english: "Elders pour libation",
          native: "Ametsitsiwo ƒo tsi di",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/ametsitsiwo_ƒo_tsi_di.m4a")
        }
      ],
      questions: [
        {
          id: 2404,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "What is 'Naming ceremony' in Ewe?",
          options: [
            { id: 1, text: "Ŋkɔnana" },
            { id: 2, text: "Ʋuƒoƒo kple ɣeɖuɖu" },
            { id: 3, text: "Ametsitsiwo ƒo tsi di" },
            { id: 4, text: "Kente avɔ" }
          ],
          correctOptionId: 1,
          hints: ["Ŋkɔ = name", "nana = giving"],
          explanation: "Ŋkɔnana = Naming ceremony in Ewe."
        },
        {
          id: 2405,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/ʋuƒoƒo_kple_ɣeɖuɖu.m4a"),
          options: [
            { id: 1, text: "Naming ceremony" },
            { id: 2, text: "Drumming and dancing" },
            { id: 3, text: "Elders pour libation" },
            { id: 4, text: "Traditional festival" }
          ],
          correctOptionId: 2,
          hints: ["ʋuƒoƒo = drumming", "ɣeɖuɖu = dancing"],
          explanation: "You heard 'Ʋuƒoƒo kple ɣeɖuɖu' which means 'Drumming and dancing' in Ewe."
        },
        {
          id: 2406,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Ametsitsiwo ƒo tsi [_____] (Elders pour libation)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "di" },
            { id: "opt2", text: "me" },
            { id: "opt3", text: "nu" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["di = pour"],
          explanation: "Ametsitsiwo ƒo tsi di = Elders pour libation in Ewe."
        }
      ]
    },

    {
      id: "24-3",
      type: "words",
      title: "Values & Dress",
      icon: "shirt-outline",
      description: "Learn about cultural values and traditional dress in Ewe",
      words: ["Míedea bubu mí ametsitsiwo ŋu", "Kente avɔ", "Míaƒe kɔnuwo le vevie"],
      vocabulary: [
        {
          id: 169,
          english: "We respect our elders",
          native: "Míedea bubu mí ametsitsiwo ŋu",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/míedea_bubu_mí_ametsitsiwo_ŋu.m4a")
        },
        {
          id: 171,
          english: "Kente cloth",
          native: "Kente avɔ",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/kente_avɔ.m4a")
        },
        {
          id: 173,
          english: "Our customs are important",
          native: "Míaƒe kɔnuwo le vevie",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/míaƒe_kɔnuwo_le_vevie.m4a")
        }
      ],
      questions: [
        {
          id: 2407,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'We respect our elders' in Ewe?",
          options: [
            { id: 1, text: "Míedea bubu mí ametsitsiwo ŋu" },
            { id: 2, text: "Kente avɔ" },
            { id: 3, text: "Míaƒe kɔnuwo le vevie" },
            { id: 4, text: "Blema kɔnu ŋkekenyui" }
          ],
          correctOptionId: 1,
          hints: ["bubu = respect", "ametsitsiwo = elders"],
          explanation: "Míedea bubu mí ametsitsiwo ŋu = We respect our elders in Ewe."
        },
        {
          id: 2408,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/kente_avɔ.m4a"),
          options: [
            { id: 1, text: "We respect our elders" },
            { id: 2, text: "Kente cloth" },
            { id: 3, text: "Our customs are important" },
            { id: 4, text: "Traditional festival" }
          ],
          correctOptionId: 2,
          hints: ["avɔ = cloth"],
          explanation: "You heard 'Kente avɔ' which means 'Kente cloth' in Ewe."
        },
        {
          id: 2409,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Míaƒe kɔnuwo le [_____] (Our customs are important)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "vevie" },
            { id: "opt2", text: "nyuie" },
            { id: "opt3", text: "gblẽ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["vevie = important"],
          explanation: "Míaƒe kɔnuwo le vevie = Our customs are important in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-24",
    title: "Review: Festivals & Traditions",
    icon: "refresh-outline",
    description: "Review all the festivals and traditions vocabulary you've learned",
    questions: [
      {
        id: 2410,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Chief' in Ewe?",
        options: [
          { id: 1, text: "Blema kɔnu ŋkekenyui" },
          { id: 2, text: "Fia" },
          { id: 3, text: "Fianyɔnu" },
          { id: 4, text: "Ŋkɔnana" }
        ],
        correctOptionId: 2,
        hints: ["Fia = Chief"],
        explanation: "Fia = Chief in Ewe."
      },
      {
        id: 2411,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/fianyɔnu.m4a"),
        options: [
          { id: 1, text: "Traditional festival" },
          { id: 2, text: "Chief" },
          { id: 3, text: "Queen mother" },
          { id: 4, text: "Kente cloth" }
        ],
        correctOptionId: 3,
        hints: ["Fia = chief", "nyɔnu = female"],
        explanation: "You heard 'Fianyɔnu' which means 'Queen mother' in Ewe."
      },
      {
        id: 2412,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "What is 'Drumming and dancing' in Ewe?",
        options: [
          { id: 1, text: "Ŋkɔnana" },
          { id: 2, text: "Ʋuƒoƒo kple ɣeɖuɖu" },
          { id: 3, text: "Ametsitsiwo ƒo tsi di" },
          { id: 4, text: "Kente avɔ" }
        ],
        correctOptionId: 2,
        hints: ["ʋuƒoƒo = drumming", "ɣeɖuɖu = dancing"],
        explanation: "Ʋuƒoƒo kple ɣeɖuɖu = Drumming and dancing."
      },
      {
        id: 2413,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/ametsitsiwo_ƒo_tsi_di.m4a"),
        options: [
          { id: 1, text: "Naming ceremony" },
          { id: 2, text: "Drumming and dancing" },
          { id: 3, text: "Elders pour libation" },
          { id: 4, text: "Traditional festival" }
        ],
        correctOptionId: 3,
        hints: ["ametsitsiwo = elders", "tsi = water"],
        explanation: "You heard 'Ametsitsiwo ƒo tsi di' which means 'Elders pour libation'."
      },
      {
        id: 2414,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Kente cloth' in Ewe?",
        options: [
          { id: 1, text: "Míedea bubu mí ametsitsiwo ŋu" },
          { id: 2, text: "Kente avɔ" },
          { id: 3, text: "Míaƒe kɔnuwo le vevie" },
          { id: 4, text: "Blema kɔnu ŋkekenyui" }
        ],
        correctOptionId: 2,
        hints: ["avɔ = cloth"],
        explanation: "Kente avɔ = Kente cloth."
      },
      {
        id: 2415,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter4/míedea_bubu_mí_ametsitsiwo_ŋu.m4a"),
        options: [
          { id: 1, text: "We respect our elders" },
          { id: 2, text: "Kente cloth" },
          { id: 3, text: "Our customs are important" },
          { id: 4, text: "Traditional festival" }
        ],
        correctOptionId: 1,
        hints: ["bubu = respect"],
        explanation: "You heard 'Míedea bubu mí ametsitsiwo ŋu' which means 'We respect our elders'."
      },
      {
        id: 2416,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Our customs are important' in Ewe?",
        options: [
          { id: 1, text: "Míedea bubu mí ametsitsiwo ŋu" },
          { id: 2, text: "Kente avɔ" },
          { id: 3, text: "Míaƒe kɔnuwo le vevie" },
          { id: 4, text: "Blema kɔnu ŋkekenyui" }
        ],
        correctOptionId: 3,
        hints: ["kɔnuwo = customs", "vevie = important"],
        explanation: "Míaƒe kɔnuwo le vevie = Our customs are important."
      },
      {
        id: 2417,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Ametsitsiwo ƒo tsi [_____] (Elders pour libation)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "di" },
          { id: "opt2", text: "me" },
          { id: "opt3", text: "nu" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["di = pour"],
        explanation: "Ametsitsiwo ƒo tsi di = Elders pour libation."
      },
      {
        id: 2418,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Míaƒe kɔnuwo le [_____] (Our customs are important)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "vevie" },
          { id: "opt2", text: "nyuie" },
          { id: "opt3", text: "gblẽ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["vevie = important"],
        explanation: "Míaƒe kɔnuwo le vevie = Our customs are important."
      },
      {
        id: 2419,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Traditional festival' in Ewe?",
        options: [
          { id: 1, text: "Blema kɔnu ŋkekenyui" },
          { id: 2, text: "Fia" },
          { id: 3, text: "Fianyɔnu" },
          { id: 4, text: "Ŋkɔnana" }
        ],
        correctOptionId: 1,
        hints: ["Blema = traditional", "ŋkekenyui = festival"],
        explanation: "Blema kɔnu ŋkekenyui = Traditional festival."
      }
    ]
  }
};