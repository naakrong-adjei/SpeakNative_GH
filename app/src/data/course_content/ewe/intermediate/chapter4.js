export default {
  id: 14,
  title: "Opinions & Emotions",
  description: "Learn how to express opinions and emotions in Ewe",
  icon: "chatbubbles-outline",
  totalXp: 11,
  difficulty: "Intermediate",

  sections: [
    {
      id: "14-1",
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
          id: 1401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am happy' in Ewe?",
          options: [
            { id: 1, text: "Dzi dzɔm" },
            { id: 2, text: "Nye dzi gbã" },
            { id: 3, text: "Nye dzi dzɔ ɖe ŋuwò" },
            { id: 4, text: "Mègatsi dzi o" }
          ],
          correctOptionId: 1,
          hints: ["dzi = heart", "dzɔm = is happy"],
          explanation: "Dzi dzɔm = I am happy in Ewe."
        },
        {
          id: 1402,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nye_dzi_gbã.m4a"),
          options: [
            { id: 1, text: "I am happy" },
            { id: 2, text: "I am sad" },
            { id: 3, text: "I am proud of you" },
            { id: 4, text: "Don't worry" }
          ],
          correctOptionId: 2,
          hints: ["gbã = broken/sad"],
          explanation: "You heard 'Nye dzi gbã' which means 'I am sad' in Ewe."
        },
        {
          id: 1403,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Don't worry' in Ewe?",
          options: [
            { id: 1, text: "Dzi dzɔm" },
            { id: 2, text: "Nye dzi gbã" },
            { id: 3, text: "Nye dzi dzɔ ɖe ŋuwò" },
            { id: 4, text: "Mègatsi dzi o" }
          ],
          correctOptionId: 4,
          hints: ["mègatsi = don't take", "dzi = heart"],
          explanation: "Mègatsi dzi o = Don't worry in Ewe."
        }
      ]
    },

    {
      id: "14-2",
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
          id: 1404,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am angry' in Ewe?",
          options: [
            { id: 1, text: "Me kpo dzi ku" },
            { id: 2, text: "Me vɔvɔ̃m" },
            { id: 3, text: "Ewɔ nuku nam" },
            { id: 4, text: "Dzi dzɔm" }
          ],
          correctOptionId: 1,
          hints: ["dzi = heart", "ku = dead/angry"],
          explanation: "Me kpo dzi ku = I am angry in Ewe."
        },
        {
          id: 1405,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/me_vɔvɔ̃m.m4a"),
          options: [
            { id: 1, text: "I am angry" },
            { id: 2, text: "I am afraid" },
            { id: 3, text: "I am surprised" },
            { id: 4, text: "I am happy" }
          ],
          correctOptionId: 2,
          hints: ["vɔvɔ̃ = fear"],
          explanation: "You heard 'Me vɔvɔ̃m' which means 'I am afraid' in Ewe."
        },
        {
          id: 1406,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Ewɔ nuku [_____] (I am surprised)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "nam" },
            { id: "opt2", text: "wò" },
            { id: "opt3", text: "nye" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["nam = for me"],
          explanation: "Ewɔ nuku nam = I am surprised in Ewe."
        }
      ]
    },

    {
      id: "14-3",
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
          id: 1407,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I think so' in Ewe?",
          options: [
            { id: 1, text: "Mesusu nenema" },
            { id: 2, text: "Nyemelɔ̃ ɖe edzi o" },
            { id: 3, text: "Le nye susu nu" },
            { id: 4, text: "Nyateƒee" }
          ],
          correctOptionId: 1,
          hints: ["mesusu = I think", "nenema = so"],
          explanation: "Mesusu nenema = I think so in Ewe."
        },
        {
          id: 1408,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nyemelɔ̃_ɖe_edzi_o.m4a"),
          options: [
            { id: 1, text: "I think so" },
            { id: 2, text: "I don't agree" },
            { id: 3, text: "In my opinion" },
            { id: 4, text: "That is true" }
          ],
          correctOptionId: 2,
          hints: ["nyemelɔ̃ = I don't like/agree"],
          explanation: "You heard 'Nyemelɔ̃ ɖe edzi o' which means 'I don't agree' in Ewe."
        },
        {
          id: 1409,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Le nye susu [_____] (In my opinion)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "nu" },
            { id: "opt2", text: "o" },
            { id: "opt3", text: "me" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["nu = in"],
          explanation: "Le nye susu nu = In my opinion in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-14",
    title: "Review: Opinions & Emotions",
    icon: "refresh-outline",
    description: "Review all the opinion and emotion vocabulary you've learned",
    questions: [
      {
        id: 1410,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am happy' in Ewe?",
        options: [
          { id: 1, text: "Dzi dzɔm" },
          { id: 2, text: "Nye dzi gbã" },
          { id: 3, text: "Me kpo dzi ku" },
          { id: 4, text: "Me vɔvɔ̃m" }
        ],
        correctOptionId: 1,
        hints: ["dzi = heart"],
        explanation: "Dzi dzɔm = I am happy."
      },
      {
        id: 1411,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nye_dzi_dzɔ_ɖe_ŋuwò.m4a"),
        options: [
          { id: 1, text: "I am happy" },
          { id: 2, text: "I am sad" },
          { id: 3, text: "I am proud of you" },
          { id: 4, text: "Don't worry" }
        ],
        correctOptionId: 3,
        hints: ["dzɔ ɖe ŋuwò = for you"],
        explanation: "You heard 'Nye dzi dzɔ ɖe ŋuwò' which means 'I am proud of you'."
      },
      {
        id: 1412,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am angry' in Ewe?",
        options: [
          { id: 1, text: "Me kpo dzi ku" },
          { id: 2, text: "Me vɔvɔ̃m" },
          { id: 3, text: "Ewɔ nuku nam" },
          { id: 4, text: "Dzi dzɔm" }
        ],
        correctOptionId: 1,
        hints: ["ku = dead"],
        explanation: "Me kpo dzi ku = I am angry."
      },
      {
        id: 1413,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/ewɔ_nuku_nam.m4a"),
        options: [
          { id: 1, text: "I am angry" },
          { id: 2, text: "I am afraid" },
          { id: 3, text: "I am surprised" },
          { id: 4, text: "I am happy" }
        ],
        correctOptionId: 3,
        hints: ["nuku = wonder"],
        explanation: "You heard 'Ewɔ nuku nam' which means 'I am surprised'."
      },
      {
        id: 1414,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I think so' in Ewe?",
        options: [
          { id: 1, text: "Mesusu nenema" },
          { id: 2, text: "Nyemelɔ̃ ɖe edzi o" },
          { id: 3, text: "Le nye susu nu" },
          { id: 4, text: "Nyateƒee" }
        ],
        correctOptionId: 1,
        hints: ["mesusu = I think"],
        explanation: "Mesusu nenema = I think so."
      },
      {
        id: 1415,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter4/nyateƒee.m4a"),
        options: [
          { id: 1, text: "I think so" },
          { id: 2, text: "I don't agree" },
          { id: 3, text: "In my opinion" },
          { id: 4, text: "That is true" }
        ],
        correctOptionId: 4,
        hints: ["nyateƒee = true"],
        explanation: "You heard 'Nyateƒee' which means 'That is true'."
      },
      {
        id: 1416,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'In my opinion' in Ewe?",
        options: [
          { id: 1, text: "Mesusu nenema" },
          { id: 2, text: "Nyemelɔ̃ ɖe edzi o" },
          { id: 3, text: "Le nye susu nu" },
          { id: 4, text: "Nyateƒee" }
        ],
        correctOptionId: 3,
        hints: ["susu = opinion"],
        explanation: "Le nye susu nu = In my opinion."
      },
      {
        id: 1417,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Don't worry' in Ewe?",
        options: [
          { id: 1, text: "Dzi dzɔm" },
          { id: 2, text: "Nye dzi gbã" },
          { id: 3, text: "Nye dzi dzɔ ɖe ŋuwò" },
          { id: 4, text: "Mègatsi dzi o" }
        ],
        correctOptionId: 4,
        hints: ["mègatsi = don't take"],
        explanation: "Mègatsi dzi o = Don't worry."
      },
      {
        id: 1418,
        type: "matching",
        instruction: "Match the Ewe emotion with its English translation.",
        question: "Match each Ewe phrase to its correct meaning:",
        pairs: [
          { id: "pair1", left: "Dzi dzɔm", right: "I am angry" },
          { id: "pair2", left: "Nye dzi gbã", right: "I am happy" },
          { id: "pair3", left: "Me kpo dzi ku", right: "I am afraid" },
          { id: "pair4", left: "Me vɔvɔ̃m", right: "I am sad" }
        ],
        correctMatches: [
          { leftId: "pair1", rightId: "pair2" },
          { leftId: "pair2", rightId: "pair4" },
          { leftId: "pair3", rightId: "pair1" },
          { leftId: "pair4", rightId: "pair3" }
        ],
        hints: ["Match the emotion to its meaning"],
        explanation: "These are common emotion phrases in Ewe."
      },
      {
        id: 1419,
        type: "matching",
        instruction: "Match the Ewe opinion phrase with its English translation.",
        question: "Match each Ewe phrase to its correct meaning:",
        pairs: [
          { id: "pair1", left: "Mesusu nenema", right: "In my opinion" },
          { id: "pair2", left: "Nyemelɔ̃ ɖe edzi o", right: "That is true" },
          { id: "pair3", left: "Le nye susu nu", right: "I don't agree" },
          { id: "pair4", left: "Nyateƒee", right: "I think so" }
        ],
        correctMatches: [
          { leftId: "pair1", rightId: "pair4" },
          { leftId: "pair2", rightId: "pair3" },
          { leftId: "pair3", rightId: "pair1" },
          { leftId: "pair4", rightId: "pair2" }
        ],
        hints: ["Match the opinion phrase to its meaning"],
        explanation: "These are common opinion phrases in Ewe."
      }
    ]
  }
};