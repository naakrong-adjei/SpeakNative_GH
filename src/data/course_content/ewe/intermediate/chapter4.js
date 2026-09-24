export default {
  id: 4,
  title: "Opinions & Emotions",
  description: "Learn how to express opinions and emotions in Ewe",
  icon: "chatbubbles-outline",
  totalXp: 12,
  difficulty: "Intermediate",

  sections: [
    {
      id: "4-1",
      type: "words",
      title: "Happy & Sad",
      icon: "happy-outline",
      description: "Learn how to express happiness, sadness, and related emotions in Ewe",
      words: ["Dzi dzɔm", "Nye dzi gbã", "Nye dzi dzɔ ɖe ŋuwò", "Mègatsi dzi o"],
      vocabulary: [
        {
          id: 184,
          english: "I am happy",
          native: "Dzi dzɔm",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/dzi_dzɔm.m4a")
        },
        {
          id: 185,
          english: "I am sad",
          native: "Nye dzi gbã",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nye_dzi_gbã.m4a")
        },
        {
          id: 193,
          english: "I am proud of you",
          native: "Nye dzi dzɔ ɖe ŋuwò",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nye_dzi_dzɔ_ɖe_ŋuwò.m4a")
        },
        {
          id: 194,
          english: "Don't worry",
          native: "Mègatsi dzi o",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/mègatsi_dzi_o.m4a")
        }
      ],
      questions: [
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am proud of you' in Ewe?",
          options: [
            { id: 1, text: "Mègatsi dzi o" },
            { id: 2, text: "Dzi dzɔm" },
            { id: 3, text: "Nye dzi dzɔ ɖe ŋuwò" },
            { id: 4, text: "Nye dzi gbã" }
          ],
          correctOptionId: 3,
          hints: ["dzɔ ɖe ŋuwò = for you"],
          explanation: "Nye dzi dzɔ ɖe ŋuwò = I am proud of you in Ewe."
        },
        {
          id: 402,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nye_dzi_gbã.m4a"),
          options: [
            { id: 1, text: "Don't worry" },
            { id: 2, text: "I am proud of you" },
            { id: 3, text: "I am happy" },
            { id: 4, text: "I am sad" }
          ],
          correctOptionId: 4,
          hints: ["gbã = broken/sad"],
          explanation: "You heard 'Nye dzi gbã' which means 'I am sad' in Ewe."
        },
        {
          id: 404,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/mègatsi_dzi_o.m4a"),
          options: [
            { id: 1, text: "I am sad" },
            { id: 2, text: "I am happy" },
            { id: 3, text: "Don't worry" },
            { id: 4, text: "I am proud of you" }
          ],
          correctOptionId: 3,
          hints: ["mègatsi = don't take"],
          explanation: "You heard 'Mègatsi dzi o' which means 'Don't worry' in Ewe."
        },
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am happy' in Ewe?",
          options: [
            { id: 1, text: "Nye dzi gbã" },
            { id: 2, text: "Dzi dzɔm" },
            { id: 3, text: "Mègatsi dzi o" },
            { id: 4, text: "Nye dzi dzɔ ɖe ŋuwò" }
          ],
          correctOptionId: 2,
          hints: ["dzi = heart", "dzɔm = is happy"],
          explanation: "Dzi dzɔm = I am happy in Ewe."
        }
      ]
    },

    {
      id: "4-2",
      type: "words",
      title: "Strong Feelings",
      icon: "flame-outline",
      description: "Learn how to express strong emotions in Ewe",
      words: ["Me kpo dzi ku", "Me vɔvɔ̃m", "Ewɔ nuku nam"],
      vocabulary: [
        {
          id: 188,
          english: "I am angry",
          native: "Me kpo dzi ku",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/me_kpo_dzi_ku.m4a")
        },
        {
          id: 189,
          english: "I am afraid",
          native: "Me vɔvɔ̃m",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/me_vɔvɔ̃m.m4a")
        },
        {
          id: 190,
          english: "I am surprised",
          native: "Ewɔ nuku nam",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/ewɔ_nuku_nam.m4a")
        }
      ],
      questions: [
        {
          id: 408,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/me_kpo_dzi_ku.m4a"),
          options: [
            { id: 1, text: "I am surprised" },
            { id: 2, text: "I am angry" },
            { id: 3, text: "I am sad" },
            { id: 4, text: "I am afraid" }
          ],
          correctOptionId: 2,
          hints: ["ku = dead"],
          explanation: "You heard 'Me kpo dzi ku' which means 'I am angry' in Ewe."
        },
        {
          id: 407,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am surprised' in Ewe?",
          options: [
            { id: 1, text: "Nye dzi gbã" },
            { id: 2, text: "Ewɔ nuku nam" },
            { id: 3, text: "Me kpo dzi ku" },
            { id: 4, text: "Me vɔvɔ̃m" }
          ],
          correctOptionId: 2,
          hints: ["nuku = wonder"],
          explanation: "Ewɔ nuku nam = I am surprised in Ewe."
        },
        {
          id: 406,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/me_vɔvɔ̃m.m4a"),
          options: [
            { id: 1, text: "I am happy" },
            { id: 2, text: "I am surprised" },
            { id: 3, text: "I am afraid" },
            { id: 4, text: "I am angry" }
          ],
          correctOptionId: 3,
          hints: ["vɔvɔ̃ = fear"],
          explanation: "You heard 'Me vɔvɔ̃m' which means 'I am afraid' in Ewe."
        },
        {
          id: 405,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am angry' in Ewe?",
          options: [
            { id: 1, text: "Me vɔvɔ̃m" },
            { id: 2, text: "Dzi dzɔm" },
            { id: 3, text: "Me kpo dzi ku" },
            { id: 4, text: "Ewɔ nuku nam" }
          ],
          correctOptionId: 3,
          hints: ["dzi = heart", "ku = dead/angry"],
          explanation: "Me kpo dzi ku = I am angry in Ewe."
        }
      ]
    },

    {
      id: "4-3",
      type: "words",
      title: "Giving Opinions",
      icon: "chatbox-outline",
      description: "Learn how to give opinions and express agreement in Ewe",
      words: ["Mesusu nenema", "Nyemelɔ̃ ɖe edzi o", "Le nye susu nu", "Nyateƒee"],
      vocabulary: [
        {
          id: 186,
          english: "I think so",
          native: "Mesusu nenema",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/mesusu_nenema.m4a")
        },
        {
          id: 187,
          english: "I don't agree",
          native: "Nyemelɔ̃ ɖe edzi o",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nyemelɔ̃_ɖe_edzi_o.m4a")
        },
        {
          id: 191,
          english: "In my opinion",
          native: "Le nye susu nu",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/le_nye_susu_nu.m4a")
        },
        {
          id: 192,
          english: "That is true",
          native: "Nyateƒee",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nyateƒee.m4a")
        }
      ],
      questions: [
        {
          id: 411,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'In my opinion' in Ewe?",
          options: [
            { id: 1, text: "Nyateƒee" },
            { id: 2, text: "Le nye susu nu" },
            { id: 3, text: "Mesusu nenema" },
            { id: 4, text: "Nyemelɔ̃ ɖe edzi o" }
          ],
          correctOptionId: 2,
          hints: ["susu = opinion"],
          explanation: "Le nye susu nu = In my opinion in Ewe."
        },
        {
          id: 412,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nyateƒee.m4a"),
          options: [
            { id: 1, text: "That is true" },
            { id: 2, text: "In my opinion" },
            { id: 3, text: "I think so" },
            { id: 4, text: "I don't agree" }
          ],
          correctOptionId: 1,
          hints: ["nyateƒee = true"],
          explanation: "You heard 'Nyateƒee' which means 'That is true' in Ewe."
        },
        {
          id: 409,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I think so' in Ewe?",
          options: [
            { id: 1, text: "Le nye susu nu" },
            { id: 2, text: "Nyemelɔ̃ ɖe edzi o" },
            { id: 3, text: "Nyateƒee" },
            { id: 4, text: "Mesusu nenema" }
          ],
          correctOptionId: 4,
          hints: ["mesusu = I think", "nenema = so"],
          explanation: "Mesusu nenema = I think so in Ewe."
        },
        {
          id: 410,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nyemelɔ̃_ɖe_edzi_o.m4a"),
          options: [
            { id: 1, text: "That is true" },
            { id: 2, text: "I don't agree" },
            { id: 3, text: "I think so" },
            { id: 4, text: "In my opinion" }
          ],
          correctOptionId: 2,
          hints: ["nyemelɔ̃ = I don't like/agree"],
          explanation: "You heard 'Nyemelɔ̃ ɖe edzi o' which means 'I don't agree' in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-4",
    title: "Review: Opinions & Emotions",
    icon: "refresh-outline",
    description: "Review the Ewe phrases you've learned for emotions, opinions, agreement, and reassurance",
    questions: [
      {
        id: 418,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/le_nye_susu_nu.m4a"),
        options: [
          { id: 1, text: "I don't agree" },
          { id: 2, text: "That is true" },
          { id: 3, text: "I think so" },
          { id: 4, text: "In my opinion" }
        ],
        correctOptionId: 4,
        hints: ["susu = opinion"],
        explanation: "You heard 'Le nye susu nu' which means 'In my opinion'."
      },
      {
        id: 420,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am sad' in Ewe?",
        options: [
          { id: 1, text: "Me vɔvɔ̃m" },
          { id: 2, text: "Dzi dzɔm" },
          { id: 3, text: "Nye dzi gbã" },
          { id: 4, text: "Me kpo dzi ku" }
        ],
        correctOptionId: 3,
        hints: ["gbã = broken/sad"],
        explanation: "Nye dzi gbã = I am sad."
      },
      {
        id: 414,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nye_dzi_dzɔ_ɖe_ŋuwò.m4a"),
        options: [
          { id: 1, text: "Don't worry" },
          { id: 2, text: "I am proud of you" },
          { id: 3, text: "I am happy" },
          { id: 4, text: "I am sad" }
        ],
        correctOptionId: 2,
        hints: ["dzɔ ɖe ŋuwò = for you"],
        explanation: "You heard 'Nye dzi dzɔ ɖe ŋuwò' which means 'I am proud of you'."
      },
      {
        id: 421,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am afraid' in Ewe?",
        options: [
          { id: 1, text: "Ewɔ nuku nam" },
          { id: 2, text: "Me vɔvɔ̃m" },
          { id: 3, text: "Me kpo dzi ku" },
          { id: 4, text: "Nye dzi gbã" }
        ],
        correctOptionId: 2,
        hints: ["vɔvɔ̃ = fear"],
        explanation: "Me vɔvɔ̃m = I am afraid."
      },
      {
        id: 417,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I think so' in Ewe?",
        options: [
          { id: 1, text: "Nyateƒee" },
          { id: 2, text: "Mesusu nenema" },
          { id: 3, text: "Le nye susu nu" },
          { id: 4, text: "Nyemelɔ̃ ɖe edzi o" }
        ],
        correctOptionId: 2,
        hints: ["mesusu = I think"],
        explanation: "Mesusu nenema = I think so."
      },
      {
        id: 419,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Don't worry' in Ewe?",
        options: [
          { id: 1, text: "Nye dzi dzɔ ɖe ŋuwò" },
          { id: 2, text: "Me kpo dzi ku" },
          { id: 3, text: "Mègatsi dzi o" },
          { id: 4, text: "Dzi dzɔm" }
        ],
        correctOptionId: 3,
        hints: ["mègatsi = don't take"],
        explanation: "Mègatsi dzi o = Don't worry."
      },
      {
        id: 416,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/ewɔ_nuku_nam.m4a"),
        options: [
          { id: 1, text: "I am afraid" },
          { id: 2, text: "I am happy" },
          { id: 3, text: "I am surprised" },
          { id: 4, text: "I am angry" }
        ],
        correctOptionId: 3,
        hints: ["nuku = wonder"],
        explanation: "You heard 'Ewɔ nuku nam' which means 'I am surprised'."
      },
      {
        id: 413,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am happy' in Ewe?",
        options: [
          { id: 1, text: "Nye dzi gbã" },
          { id: 2, text: "Dzi dzɔm" },
          { id: 3, text: "Me vɔvɔ̃m" },
          { id: 4, text: "Me kpo dzi ku" }
        ],
        correctOptionId: 2,
        hints: ["dzi = heart"],
        explanation: "Dzi dzɔm = I am happy."
      },
      {
        id: 415,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am angry' in Ewe?",
        options: [
          { id: 1, text: "Ewɔ nuku nam" },
          { id: 2, text: "Me vɔvɔ̃m" },
          { id: 3, text: "Me kpo dzi ku" },
          { id: 4, text: "Dzi dzɔm" }
        ],
        correctOptionId: 3,
        hints: ["ku = dead"],
        explanation: "Me kpo dzi ku = I am angry."
      },
      {
        id: 422,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/mesusu_nenema.m4a"),
        options: [
          { id: 1, text: "That is true" },
          { id: 2, text: "In my opinion" },
          { id: 3, text: "I don't agree" },
          { id: 4, text: "I think so" }
        ],
        correctOptionId: 4,
        hints: ["mesusu = I think"],
        explanation: "You heard 'Mesusu nenema' which means 'I think so'."
      }
    ]
  }
};