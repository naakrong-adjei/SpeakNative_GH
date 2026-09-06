export default {
  id: 12,
  title: "Health & Emergencies",
  description: "Learn health and emergency vocabulary in Ewe",
  icon: "medkit-outline",
  totalXp: 10,
  difficulty: "Intermediate",

  sections: [
    {
      id: "12-1",
      type: "words",
      title: "Feeling Unwell",
      icon: "thermometer-outline",
      description: "Learn how to describe health problems and symptoms in Ewe",
      words: ["Mele dɔ lém", "Nye ta nye vem", "Asrã le ŋunye", "Nye dɔme nye vem"],
      vocabulary: [
        {
          id: 145,
          english: "I am sick",
          native: "Mele dɔ lém",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/mele_dɔ_lém.m4a")
        },
        {
          id: 147,
          english: "My head hurts",
          native: "Nye ta nye vem",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/nye_ta_nye_vem.m4a")
        },
        {
          id: 150,
          english: "I have a fever",
          native: "Asrã le ŋunye",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/asrã_le_ŋunye.m4a")
        },
        {
          id: 154,
          english: "My stomach hurts",
          native: "Nye dɔme nye vem",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/nye_dɔme_nye_vem.m4a")
        }
      ],
      questions: [
        {
          id: 1201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am sick' in Ewe?",
          options: [
            { id: 1, text: "Mele dɔ lém" },
            { id: 2, text: "Nye ta nye vem" },
            { id: 3, text: "Asrã le ŋunye" },
            { id: 4, text: "Nye dɔme nye vem" }
          ],
          correctOptionId: 1,
          hints: ["Mele = I am", "dɔ = sickness"],
          explanation: "Mele dɔ lém = I am sick in Ewe."
        },
        {
          id: 1202,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/nye_ta_nye_vem.m4a"),
          options: [
            { id: 1, text: "I am sick" },
            { id: 2, text: "My head hurts" },
            { id: 3, text: "I have a fever" },
            { id: 4, text: "My stomach hurts" }
          ],
          correctOptionId: 2,
          hints: ["ta = head", "nye vem = hurts"],
          explanation: "You heard 'Nye ta nye vem' which means 'My head hurts' in Ewe."
        },
        {
          id: 1203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'My stomach hurts' in Ewe?",
          options: [
            { id: 1, text: "Mele dɔ lém" },
            { id: 2, text: "Nye ta nye vem" },
            { id: 3, text: "Asrã le ŋunye" },
            { id: 4, text: "Nye dɔme nye vem" }
          ],
          correctOptionId: 4,
          hints: ["dɔme = stomach", "nye vem = hurts"],
          explanation: "Nye dɔme nye vem = My stomach hurts in Ewe."
        }
      ]
    },

    {
      id: "12-2",
      type: "phrases",
      title: "Getting Help",
      icon: "alert-circle-outline",
      description: "Learn how to ask for help in emergencies in Ewe",
      words: ["Yɔ ɖɔkta", "Kpe ɖe ŋunye! Enye kpata", "Afika kɔdzi la le?", "Yɔ dɔnɔʋu"],
      vocabulary: [
        {
          id: 146,
          english: "Call a doctor",
          native: "Yɔ ɖɔkta",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/yɔ_ɖɔkta.m4a")
        },
        {
          id: 148,
          english: "Help! It is an emergency",
          native: "Kpe ɖe ŋunye! Enye kpata",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/kpe_ɖe_ŋunye_enye_kpata.m4a")
        },
        {
          id: 149,
          english: "Where is the hospital?",
          native: "Afika kɔdzi la le?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/afika_kɔdzi_la_le.m4a")
        },
        {
          id: 153,
          english: "Call an ambulance",
          native: "Yɔ dɔnɔʋu",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/yɔ_dɔnɔʋu.m4a")
        }
      ],
      questions: [
        {
          id: 1204,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Call a doctor' in Ewe?",
          options: [
            { id: 1, text: "Yɔ ɖɔkta" },
            { id: 2, text: "Kpe ɖe ŋunye! Enye kpata" },
            { id: 3, text: "Afika kɔdzi la le?" },
            { id: 4, text: "Yɔ dɔnɔʋu" }
          ],
          correctOptionId: 1,
          hints: ["yɔ = call", "ɖɔkta = doctor"],
          explanation: "Yɔ ɖɔkta = Call a doctor in Ewe."
        },
        {
          id: 1205,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/kpe_ɖe_ŋunye_enye_kpata.m4a"),
          options: [
            { id: 1, text: "Call a doctor" },
            { id: 2, text: "Help! It is an emergency" },
            { id: 3, text: "Where is the hospital?" },
            { id: 4, text: "Call an ambulance" }
          ],
          correctOptionId: 2,
          hints: ["kpata = emergency"],
          explanation: "You heard 'Kpe ɖe ŋunye! Enye kpata' which means 'Help! It is an emergency' in Ewe."
        },
        {
          id: 1206,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Call an ambulance' in Ewe?",
          options: [
            { id: 1, text: "Yɔ ɖɔkta" },
            { id: 2, text: "Kpe ɖe ŋunye! Enye kpata" },
            { id: 3, text: "Afika kɔdzi la le?" },
            { id: 4, text: "Yɔ dɔnɔʋu" }
          ],
          correctOptionId: 4,
          hints: ["dɔnɔʋu = ambulance"],
          explanation: "Yɔ dɔnɔʋu = Call an ambulance in Ewe."
        }
      ]
    },

    {
      id: "12-3",
      type: "phrases",
      title: "Medicine & Care",
      icon: "medkit-outline",
      description: "Learn how to talk about medicine and care in Ewe",
      words: ["Mehiã atsike", "No atsike hia dzi etɔ̃ gbe shia gbe", "Kpɔ nyuie"],
      vocabulary: [
        {
          id: 151,
          english: "I need medicine",
          native: "Mehiã atsike",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/mehiã_atsike.m4a")
        },
        {
          id: 152,
          english: "Take this drug three times a day",
          native: "No atsike hia dzi etɔ̃ gbe shia gbe",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/no_atsike_hia_dzi_etɔ̃_gbe_shia_gbe.m4a")
        },
        {
          id: 155,
          english: "Be careful",
          native: "Kpɔ nyuie",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/kpɔ_nyuie.m4a")
        }
      ],
      questions: [
        {
          id: 1207,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I need medicine' in Ewe?",
          options: [
            { id: 1, text: "Mehiã atsike" },
            { id: 2, text: "No atsike hia dzi etɔ̃ gbe shia gbe" },
            { id: 3, text: "Kpɔ nyuie" },
            { id: 4, text: "Mele dɔ lém" }
          ],
          correctOptionId: 1,
          hints: ["mehiã = I need", "atsike = medicine"],
          explanation: "Mehiã atsike = I need medicine in Ewe."
        },
        {
          id: 1208,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/no_atsike_hia_dzi_etɔ̃_gbe_shia_gbe.m4a"),
          options: [
            { id: 1, text: "I need medicine" },
            { id: 2, text: "Take this drug three times a day" },
            { id: 3, text: "Be careful" },
            { id: 4, text: "I am sick" }
          ],
          correctOptionId: 2,
          hints: ["zi etɔ̃ = three times", "gbe shia gbe = every day"],
          explanation: "You heard 'No atsike hia dzi etɔ̃ gbe shia gbe' which means 'Take this drug three times a day' in Ewe."
        },
        {
          id: 1209,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Be careful' in Ewe?",
          options: [
            { id: 1, text: "Mehiã atsike" },
            { id: 2, text: "No atsike hia dzi etɔ̃ gbe shia gbe" },
            { id: 3, text: "Kpɔ nyuie" },
            { id: 4, text: "Yɔ dɔnɔʋu" }
          ],
          correctOptionId: 3,
          hints: ["kpɔ = look/watch", "nyuie = well/carefully"],
          explanation: "Kpɔ nyuie = Be careful in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-12",
    title: "Review: Health & Emergencies",
    icon: "refresh-outline",
    description: "Review all the health and emergency vocabulary you've learned",
    questions: [
      {
        id: 1210,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am sick' in Ewe?",
        options: [
          { id: 1, text: "Mele dɔ lém" },
          { id: 2, text: "Nye ta nye vem" },
          { id: 3, text: "Asrã le ŋunye" },
          { id: 4, text: "Nye dɔme nye vem" }
        ],
        correctOptionId: 1,
        hints: ["dɔ = sickness"],
        explanation: "Mele dɔ lém = I am sick."
      },
      {
        id: 1211,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/asrã_le_ŋunye.m4a"),
        options: [
          { id: 1, text: "I am sick" },
          { id: 2, text: "My head hurts" },
          { id: 3, text: "I have a fever" },
          { id: 4, text: "My stomach hurts" }
        ],
        correctOptionId: 3,
        hints: ["asrã = fever"],
        explanation: "You heard 'Asrã le ŋunye' which means 'I have a fever'."
      },
      {
        id: 1212,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'My head hurts' in Ewe?",
        options: [
          { id: 1, text: "Mele dɔ lém" },
          { id: 2, text: "Nye ta nye vem" },
          { id: 3, text: "Asrã le ŋunye" },
          { id: 4, text: "Nye dɔme nye vem" }
        ],
        correctOptionId: 2,
        hints: ["ta = head"],
        explanation: "Nye ta nye vem = My head hurts."
      },
      {
        id: 1213,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Call a doctor' in Ewe?",
        options: [
          { id: 1, text: "Yɔ ɖɔkta" },
          { id: 2, text: "Kpe ɖe ŋunye! Enye kpata" },
          { id: 3, text: "Afika kɔdzi la le?" },
          { id: 4, text: "Yɔ dɔnɔʋu" }
        ],
        correctOptionId: 1,
        hints: ["yɔ = call"],
        explanation: "Yɔ ɖɔkta = Call a doctor."
      },
      {
        id: 1214,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/yɔ_dɔnɔʋu.m4a"),
        options: [
          { id: 1, text: "Call a doctor" },
          { id: 2, text: "Help! It is an emergency" },
          { id: 3, text: "Where is the hospital?" },
          { id: 4, text: "Call an ambulance" }
        ],
        correctOptionId: 4,
        hints: ["dɔnɔʋu = ambulance"],
        explanation: "You heard 'Yɔ dɔnɔʋu' which means 'Call an ambulance'."
      },
      {
        id: 1215,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Help! It is an emergency' in Ewe?",
        options: [
          { id: 1, text: "Yɔ ɖɔkta" },
          { id: 2, text: "Kpe ɖe ŋunye! Enye kpata" },
          { id: 3, text: "Afika kɔdzi la le?" },
          { id: 4, text: "Yɔ dɔnɔʋu" }
        ],
        correctOptionId: 2,
        hints: ["kpata = emergency"],
        explanation: "Kpe ɖe ŋunye! Enye kpata = Help! It is an emergency."
      },
      {
        id: 1216,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I need medicine' in Ewe?",
        options: [
          { id: 1, text: "Mehiã atsike" },
          { id: 2, text: "No atsike hia dzi etɔ̃ gbe shia gbe" },
          { id: 3, text: "Kpɔ nyuie" },
          { id: 4, text: "Mele dɔ lém" }
        ],
        correctOptionId: 1,
        hints: ["mehiã = I need"],
        explanation: "Mehiã atsike = I need medicine."
      },
      {
        id: 1217,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Be careful' in Ewe?",
        options: [
          { id: 1, text: "Mehiã atsike" },
          { id: 2, text: "No atsike hia dzi etɔ̃ gbe shia gbe" },
          { id: 3, text: "Kpɔ nyuie" },
          { id: 4, text: "Yɔ dɔnɔʋu" }
        ],
        correctOptionId: 3,
        hints: ["kpɔ = look"],
        explanation: "Kpɔ nyuie = Be careful."
      },
      {
        id: 1218,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Where is the hospital?' in Ewe?",
        options: [
          { id: 1, text: "Yɔ ɖɔkta" },
          { id: 2, text: "Kpe ɖe ŋunye! Enye kpata" },
          { id: 3, text: "Afika kɔdzi la le?" },
          { id: 4, text: "Yɔ dɔnɔʋu" }
        ],
        correctOptionId: 3,
        hints: ["kɔdzi = hospital"],
        explanation: "Afika kɔdzi la le? = Where is the hospital?"
      },
      {
        id: 1219,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter2/nye_dɔme_nye_vem.m4a"),
        options: [
          { id: 1, text: "I am sick" },
          { id: 2, text: "My head hurts" },
          { id: 3, text: "I have a fever" },
          { id: 4, text: "My stomach hurts" }
        ],
        correctOptionId: 4,
        hints: ["dɔme = stomach"],
        explanation: "You heard 'Nye dɔme nye vem' which means 'My stomach hurts'."
      }
    ]
  }
};