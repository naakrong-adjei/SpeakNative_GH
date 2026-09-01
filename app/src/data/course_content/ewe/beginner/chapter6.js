export default {
  id: 6,
  title: "Shopping",
  description: "Learn shopping and market vocabulary in Ewe",
  icon: "cart-outline",
  totalXp: 10,
  difficulty: "Beginner",

  sections: [
    {
      id: "6-1",
      type: "words",
      title: "Asking Prices",
      icon: "pricetag-outline",
      description: "Learn how to ask about prices in Ewe",
      words: ["Ho nenie?", "Exɔshi akpa", "Mexɔa shi oo"],
      vocabulary: [
        {
          id: 74,
          english: "How much is it?",
          native: "Ho nenie?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/ho_nenie.m4a")
        },
        {
          id: 75,
          english: "It is too expensive",
          native: "Exɔshi akpa",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/exɔshi_akpa.m4a")
        },
        {
          id: 84,
          english: "It is cheap",
          native: "Mexɔa shi oo",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/mexɔa_shi_oo.m4a")
        }
      ],
      questions: [
        {
          id: 601,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'How much is it?' in Ewe?",
          options: [
            { id: 1, text: "Ho nenie?" },
            { id: 2, text: "Exɔshi akpa" },
            { id: 3, text: "Mexɔa shi oo" },
            { id: 4, text: "Ɖe dzi" }
          ],
          correctOptionId: 1,
          hints: ["Question about price"],
          explanation: "Ho nenie? = How much is it? in Ewe."
        },
        {
          id: 602,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/exɔshi_akpa.m4a"),
          options: [
            { id: 1, text: "How much is it?" },
            { id: 2, text: "It is too expensive" },
            { id: 3, text: "It is cheap" },
            { id: 4, text: "Reduce the price" }
          ],
          correctOptionId: 2,
          hints: ["exɔ = expensive"],
          explanation: "You heard 'Exɔshi akpa' which means 'It is too expensive' in Ewe."
        },
        {
          id: 603,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "Mexɔa ___ oo (It is cheap)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "shi" },
            { id: "opt2", text: "ga" },
            { id: "opt3", text: "ho" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["shi = price"],
          explanation: "Mexɔa shi oo = It is cheap in Ewe."
        }
      ]
    },

    {
      id: "6-2",
      type: "words",
      title: "Bargaining",
      icon: "handshake-outline",
      description: "Learn how to bargain at the market in Ewe",
      words: ["Ɖe dzi", "Ga gbagba le ashiwòa?", "Fiam bubu"],
      vocabulary: [
        {
          id: 76,
          english: "Reduce the price",
          native: "Ɖe dzi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/de_dzi.m4a")
        },
        {
          id: 81,
          english: "Do you have change?",
          native: "Ga gbagba le ashiwòa?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/ga_gbagba_le_ashiwoa.m4a")
        },
        {
          id: 83,
          english: "Show me another one",
          native: "Fiam bubu",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/fiam_bubu.m4a")
        }
      ],
      questions: [
        {
          id: 604,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Reduce the price' in Ewe?",
          options: [
            { id: 1, text: "Ɖe dzi" },
            { id: 2, text: "Ga gbagba le ashiwòa?" },
            { id: 3, text: "Fiam bubu" },
            { id: 4, text: "Ho nenie?" }
          ],
          correctOptionId: 1,
          hints: ["Ɖe = reduce", "dzi = price"],
          explanation: "Ɖe dzi = Reduce the price in Ewe."
        },
        {
          id: 605,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/fiam_bubu.m4a"),
          options: [
            { id: 1, text: "Reduce the price" },
            { id: 2, text: "Do you have change?" },
            { id: 3, text: "Show me another one" },
            { id: 4, text: "How much is it?" }
          ],
          correctOptionId: 3,
          hints: ["fiam = show me", "bubu = another"],
          explanation: "You heard 'Fiam bubu' which means 'Show me another one' in Ewe."
        },
        {
          id: 606,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "Ga gbagba le ___? (Do you have change?)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "ashiwòa" },
            { id: "opt2", text: "ega" },
            { id: "opt3", text: "asi" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["ashiwòa = with you"],
          explanation: "Ga gbagba le ashiwòa? = Do you have change? in Ewe."
        }
      ]
    },

    {
      id: "6-3",
      type: "words",
      title: "Buying It",
      icon: "bag-outline",
      description: "Learn phrases for completing a purchase in Ewe",
      words: ["Medzi be maƒle ehia", "Maxɔe", "Ble nam"],
      vocabulary: [
        {
          id: 77,
          english: "I want to buy this",
          native: "Medzi be maƒle ehia",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/medzi_be_mafle_ehia.m4a")
        },
        {
          id: 82,
          english: "I will take it",
          native: "Maxɔe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/maxɔe.m4a")
        },
        {
          id: 85,
          english: "Wrap it for me",
          native: "Ble nam",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/ble_nam.m4a")
        }
      ],
      questions: [
        {
          id: 607,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I want to buy this' in Ewe?",
          options: [
            { id: 1, text: "Medzi be maƒle ehia" },
            { id: 2, text: "Maxɔe" },
            { id: 3, text: "Ble nam" },
            { id: 4, text: "Mele nu kpɔm ko" }
          ],
          correctOptionId: 1,
          hints: ["Medzi be = I want to", "maƒle = buy", "ehia = this"],
          explanation: "Medzi be maƒle ehia = I want to buy this in Ewe."
        },
        {
          id: 608,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/maxɔe.m4a"),
          options: [
            { id: 1, text: "I want to buy this" },
            { id: 2, text: "I will take it" },
            { id: 3, text: "Wrap it for me" },
            { id: 4, text: "I am just looking" }
          ],
          correctOptionId: 2,
          hints: ["maxɔ = I will take"],
          explanation: "You heard 'Maxɔe' which means 'I will take it' in Ewe."
        },
        {
          id: 609,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "___ nam (Wrap it for me)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Ble" },
            { id: "opt2", text: "Maxɔ" },
            { id: "opt3", text: "Fia" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["Ble = wrap"],
          explanation: "Ble nam = Wrap it for me in Ewe."
        }
      ]
    },

    {
      id: "6-4",
      type: "words",
      title: "Market Words",
      icon: "storefront-outline",
      description: "Learn essential market vocabulary in Ewe",
      words: ["Asi", "Ega", "Mele nu kpɔm ko"],
      vocabulary: [
        {
          id: 78,
          english: "Market",
          native: "Asi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/asi.m4a")
        },
        {
          id: 79,
          english: "Money",
          native: "Ega",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/ega.m4a")
        },
        {
          id: 80,
          english: "I am just looking",
          native: "Mele nu kpɔm ko",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/mele_nu_kpɔm_ko.m4a")
        }
      ],
      questions: [
        {
          id: 610,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Market' in Ewe?",
          options: [
            { id: 1, text: "Asi" },
            { id: 2, text: "Ega" },
            { id: 3, text: "Mele nu kpɔm ko" },
            { id: 4, text: "Ho nenie?" }
          ],
          correctOptionId: 1,
          hints: ["Where you buy things"],
          explanation: "Asi = Market in Ewe."
        },
        {
          id: 611,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What word did you hear?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/ega.m4a"),
          options: [
            { id: 1, text: "Market" },
            { id: 2, text: "Money" },
            { id: 3, text: "Change" },
            { id: 4, text: "Price" }
          ],
          correctOptionId: 2,
          hints: ["What you pay with"],
          explanation: "You heard 'Ega' which means Money in Ewe."
        },
        {
          id: 612,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "Mele nu ___ ko (I am just looking)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "kpɔm" },
            { id: "opt2", text: "ƒle" },
            { id: "opt3", text: "xɔ" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: ["kpɔm = looking"],
          explanation: "Mele nu kpɔm ko = I am just looking in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-6",
    title: "Review: Shopping",
    icon: "refresh-outline",
    description: "Review all the shopping and market vocabulary you've learned",
    questions: [
      {
        id: 613,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'How much is it?' in Ewe?",
        options: [
          { id: 1, text: "Ho nenie?" },
          { id: 2, text: "Exɔshi akpa" },
          { id: 3, text: "Mexɔa shi oo" },
          { id: 4, text: "Ɖe dzi" }
        ],
        correctOptionId: 1,
        hints: ["Question about price"],
        explanation: "Ho nenie? = How much is it?"
      },
      {
        id: 614,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/mexɔa_shi_oo.m4a"),
        options: [
          { id: 1, text: "It is too expensive" },
          { id: 2, text: "It is cheap" },
          { id: 3, text: "Reduce the price" },
          { id: 4, text: "How much is it?" }
        ],
        correctOptionId: 2,
        hints: ["shi = price"],
        explanation: "You heard 'Mexɔa shi oo' which means 'It is cheap'."
      },
      {
        id: 615,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Reduce the price' in Ewe?",
        options: [
          { id: 1, text: "Ɖe dzi" },
          { id: 2, text: "Ga gbagba le ashiwòa?" },
          { id: 3, text: "Fiam bubu" },
          { id: 4, text: "Ho nenie?" }
        ],
        correctOptionId: 1,
        hints: ["Ɖe = reduce"],
        explanation: "Ɖe dzi = Reduce the price."
      },
      {
        id: 616,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/ga_gbagba_le_ashiwoa.m4a"),
        options: [
          { id: 1, text: "Reduce the price" },
          { id: 2, text: "Do you have change?" },
          { id: 3, text: "Show me another one" },
          { id: 4, text: "How much is it?" }
        ],
        correctOptionId: 2,
        hints: ["ga = money", "gbagba = change"],
        explanation: "You heard 'Ga gbagba le ashiwòa?' which means 'Do you have change?'."
      },
      {
        id: 617,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I will take it' in Ewe?",
        options: [
          { id: 1, text: "Medzi be maƒle ehia" },
          { id: 2, text: "Maxɔe" },
          { id: 3, text: "Ble nam" },
          { id: 4, text: "Mele nu kpɔm ko" }
        ],
        correctOptionId: 2,
        hints: ["maxɔ = I will take"],
        explanation: "Maxɔe = I will take it."
      },
      {
        id: 618,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter6/medzi_be_mafle_ehia.m4a"),
        options: [
          { id: 1, text: "I will take it" },
          { id: 2, text: "I want to buy this" },
          { id: 3, text: "Wrap it for me" },
          { id: 4, text: "I am just looking" }
        ],
        correctOptionId: 2,
        hints: ["maƒle = buy", "ehia = this"],
        explanation: "You heard 'Medzi be maƒle ehia' which means 'I want to buy this'."
      },
      {
        id: 619,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Market' in Ewe?",
        options: [
          { id: 1, text: "Asi" },
          { id: 2, text: "Ega" },
          { id: 3, text: "Mele nu kpɔm ko" },
          { id: 4, text: "Ho nenie?" }
        ],
        correctOptionId: 1,
        hints: ["Where you buy things"],
        explanation: "Asi = Market."
      },
      {
        id: 620,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Money' in Ewe?",
        options: [
          { id: 1, text: "Asi" },
          { id: 2, text: "Ega" },
          { id: 3, text: "Mele nu kpɔm ko" },
          { id: 4, text: "Ho nenie?" }
        ],
        correctOptionId: 2,
        hints: ["What you pay with"],
        explanation: "Ega = Money in Ewe."
      },
      {
        id: 621,
        type: "drag_drop",
        instruction: "Complete the Ewe phrase by dragging the correct word.",
        question: "Exɔshi ___ (It is too expensive)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "akpa" },
          { id: "opt2", text: "bubu" },
          { id: "opt3", text: "kpɔm" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt1"
        },
        hints: ["akpa = too much"],
        explanation: "Exɔshi akpa = It is too expensive in Ewe."
      },
      {
        id: 622,
        type: "drag_drop",
        instruction: "Complete the Ewe phrase by dragging the correct word.",
        question: "Ga gbagba le ___? (Do you have change?)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "ashiwòa" },
          { id: "opt2", text: "ega" },
          { id: "opt3", text: "asi" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt1"
        },
        hints: ["ashiwòa = with you"],
        explanation: "Ga gbagba le ashiwòa? = Do you have change? in Ewe."
      }
    ]
  }
};