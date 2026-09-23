export default {
  id: 6,
  title: "Work & Business",
  description:
    "Learn useful Twi phrases for meetings, business growth, deals, and workplace communication",
  icon: "briefcase-outline",
  totalXp: 10,
  difficulty: "Intermediate",

  sections: [
    {
      id: "6-1",
      type: "phrases",
      title: "Meetings, Reports & Discussions",
      icon: "document-text-outline",
      description:
        "Learn Twi phrases for meetings, reports, and discussing business terms",
      words: [
        "Mewɔ nhyiam",
        "Fa amanneɛbɔ no brɛ me",
        "Momma yɛnsusu nhyehyɛeɛ no ho",
      ],
      vocabulary: [
        {
          id: 208,
          english: "I have a meeting",
          native: "Mewɔ nhyiam",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/mewɔ_nhyiam.m4a"),
        },
        {
          id: 209,
          english: "Send me the report",
          native: "Fa amanneɛbɔ no brɛ me",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/fa_amanneɛbɔ_no_brɛ_me.m4a"),
        },
        {
          id: 210,
          english: "Let us discuss the terms",
          native: "Momma yɛnsusu nhyehyɛeɛ no ho",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/momma_yɛnsusu_nhyehyɛeɛ_no_ho.m4a"),
        },
      ],
      questions: [
        {
          id: 603,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Let us discuss the terms' in Twi?",
          options: [
            { id: 1, text: "Fa amanneɛbɔ no brɛ me" },
            { id: 2, text: "Adwuma no rekɔ so" },
            { id: 3, text: "Mewɔ nhyiam" },
            { id: 4, text: "Momma yɛnsusu nhyehyɛeɛ no ho" },
          ],
          correctOptionId: 4,
          hints: ["yɛnsusu = let us discuss"],
          explanation:
            "Momma yɛnsusu nhyehyɛeɛ no ho = Let us discuss the terms in Twi.",
        },
        {
          id: 601,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'I have a meeting' in Twi?",
          options: [
            { id: 1, text: "Mewɔ nhyiam" },
            { id: 2, text: "Momma yɛnsusu nhyehyɛeɛ no ho" },
            { id: 3, text: "Fa amanneɛbɔ no brɛ me" },
            { id: 4, text: "Adwuma no rekɔ so" },
          ],
          correctOptionId: 1,
          hints: ["nhyiam = meeting"],
          explanation: "Mewɔ nhyiam = I have a meeting in Twi.",
        },
        {
          id: 604,
          type: "listening_multiple_choice",
          instruction:
            "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/momma_yɛnsusu_nhyehyɛeɛ_no_ho.m4a"),
          options: [
            { id: 1, text: "Send me the report" },
            { id: 2, text: "We need more customers" },
            { id: 3, text: "Let us discuss the terms" },
            { id: 4, text: "I have a meeting" },
          ],
          correctOptionId: 3,
          hints: ["nhyehyɛeɛ = terms/plans"],
          explanation:
            "You heard 'Momma yɛnsusu nhyehyɛeɛ no ho' which means 'Let us discuss the terms' in Twi.",
        },
        {
          id: 602,
          type: "listening_multiple_choice",
          instruction:
            "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/fa_amanneɛbɔ_no_brɛ_me.m4a"),
          options: [
            { id: 1, text: "Let us discuss the terms" },
            { id: 2, text: "Send me the report" },
            { id: 3, text: "I have a meeting" },
            { id: 4, text: "Sign the contract" },
          ],
          correctOptionId: 2,
          hints: ["amanneɛbɔ = report", "brɛ me = bring me"],
          explanation:
            "You heard 'Fa amanneɛbɔ no brɛ me' which means 'Send me the report' in Twi.",
        },
      ],
    },

    {
      id: "6-2",
      type: "phrases",
      title: "Growing the Business",
      icon: "trending-up-outline",
      description:
        "Learn Twi phrases for business growth, customers, and profits",
      words: [
        "Adwuma no rekɔ so",
        "Yɛhia adetɔfoɔ bebree",
        "Mfasoɔ no kɔɔ soro",
      ],
      vocabulary: [
        {
          id: 211,
          english: "The business is ongoing",
          native: "Adwuma no rekɔ so",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/adwuma_no_rekɔ_so.m4a"),
        },
        {
          id: 212,
          english: "We need more customers",
          native: "Yɛhia adetɔfoɔ bebree",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/yɛhia_adetɔfoɔ_bebree.m4a"),
        },
        {
          id: 213,
          english: "The profit increased",
          native: "Mfasoɔ no kɔɔ soro",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/mfasoɔ_no_kɔɔ_soro.m4a"),
        },
      ],
      questions: [
        {
          id: 607,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The profit increased' in Twi?",
          options: [
            { id: 1, text: "Mewɔ nhyiam" },
            { id: 2, text: "Mfasoɔ no kɔɔ soro" },
            { id: 3, text: "Adwuma no rekɔ so" },
            { id: 4, text: "Yɛhia adetɔfoɔ bebree" },
          ],
          correctOptionId: 2,
          hints: ["mfasoɔ = profit", "kɔɔ soro = increased"],
          explanation:
            "Mfasoɔ no kɔɔ soro = The profit increased in Twi.",
        },
        {
          id: 605,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'The business is ongoing' in Twi?",
          options: [
            { id: 1, text: "Yɛhia adetɔfoɔ bebree" },
            { id: 2, text: "Mfasoɔ no kɔɔ soro" },
            { id: 3, text: "Adwuma no rekɔ so" },
            { id: 4, text: "Yɛde nneɛma kɔ daa" },
          ],
          correctOptionId: 3,
          hints: ["adwuma = business", "rekɔ so = ongoing"],
          explanation:
            "Adwuma no rekɔ so = The business is ongoing in Twi.",
        },
        {
          id: 608,
          type: "listening_multiple_choice",
          instruction:
            "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/adwuma_no_rekɔ_so.m4a"),
          options: [
            { id: 1, text: "The profit increased" },
            { id: 2, text: "The business is ongoing" },
            { id: 3, text: "What is your budget?" },
            { id: 4, text: "We need more customers" },
          ],
          correctOptionId: 2,
          hints: ["rekɔ so = ongoing"],
          explanation:
            "You heard 'Adwuma no rekɔ so' which means 'The business is ongoing' in Twi.",
        },
        {
          id: 606,
          type: "listening_multiple_choice",
          instruction:
            "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/yɛhia_adetɔfoɔ_bebree.m4a"),
          options: [
            { id: 1, text: "We need more customers" },
            { id: 2, text: "The business is ongoing" },
            { id: 3, text: "The profit increased" },
            { id: 4, text: "Sign the contract" },
          ],
          correctOptionId: 1,
          hints: ["adetɔfoɔ = customers", "bebree = many"],
          explanation:
            "You heard 'Yɛhia adetɔfoɔ bebree' which means 'We need more customers' in Twi.",
        },
      ],
    },

    {
      id: "6-3",
      type: "phrases",
      title: "Business Deals & Terms",
      icon: "file-tray-full-outline",
      description:
        "Learn Twi phrases for discussing budgets, deliveries, and contracts",
      words: [
        "Wo sika botaeɛ ne sɛn?",
        "Yɛde nneɛma kɔ daa",
        "Sae kɔntragye no ase",
      ],
      vocabulary: [
        {
          id: 214,
          english: "What is your budget?",
          native: "Wo sika botaeɛ ne sɛn?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/wo_sika_botaeɛ_ne_sɛn.m4a"),
        },
        {
          id: 215,
          english: "We deliver goods daily",
          native: "Yɛde nneɛma kɔ daa",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/yɛde_nneɛma_kɔ_daa.m4a"),
        },
        {
          id: 216,
          english: "Sign the contract",
          native: "Sae kɔntragye no ase",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/sae_kɔntragye_no_ase.m4a"),
        },
      ],
      questions: [
        {
          id: 611,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'Sign the contract' in Twi?",
          options: [
            { id: 1, text: "Yɛde nneɛma kɔ daa" },
            { id: 2, text: "Mfasoɔ no kɔɔ soro" },
            { id: 3, text: "Wo sika botaeɛ ne sɛn?" },
            { id: 4, text: "Sae kɔntragye no ase" },
          ],
          correctOptionId: 4,
          hints: ["kɔntragye = contract", "ase = under/sign"],
          explanation:
            "Sae kɔntragye no ase = Sign the contract in Twi.",
        },
        {
          id: 609,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'What is your budget?' in Twi?",
          options: [
            { id: 1, text: "Wo sika botaeɛ ne sɛn?" },
            { id: 2, text: "Sae kɔntragye no ase" },
            { id: 3, text: "Yɛde nneɛma kɔ daa" },
            { id: 4, text: "Mewɔ nhyiam" },
          ],
          correctOptionId: 1,
          hints: ["sika botaeɛ = budget"],
          explanation:
            "Wo sika botaeɛ ne sɛn? = What is your budget? in Twi.",
        },
        {
          id: 612,
          type: "listening_multiple_choice",
          instruction:
            "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/wo_sika_botaeɛ_ne_sɛn.m4a"),
          options: [
            { id: 1, text: "Sign the contract" },
            { id: 2, text: "We need more customers" },
            { id: 3, text: "What is your budget?" },
            { id: 4, text: "We deliver goods daily" },
          ],
          correctOptionId: 3,
          hints: ["sika botaeɛ = budget"],
          explanation:
            "You heard 'Wo sika botaeɛ ne sɛn?' which means 'What is your budget?' in Twi.",
        },
        {
          id: 610,
          type: "listening_multiple_choice",
          instruction:
            "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/yɛde_nneɛma_kɔ_daa.m4a"),
          options: [
            { id: 1, text: "Send me the report" },
            { id: 2, text: "We deliver goods daily" },
            { id: 3, text: "What is your budget?" },
            { id: 4, text: "Sign the contract" },
          ],
          correctOptionId: 2,
          hints: ["nneɛma = goods", "daa = daily"],
          explanation:
            "You heard 'Yɛde nneɛma kɔ daa' which means 'We deliver goods daily' in Twi.",
        },
      ],
    },
  ],

  review: {
    id: "review-6",
    title: "Review: Work & Business",
    icon: "refresh-outline",
    description:
      "Review the Twi phrases you've learned for work and business",
    questions: [
      {
        id: 618,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'The business is ongoing' in Twi?",
        options: [
          { id: 1, text: "Yɛde nneɛma kɔ daa" },
          { id: 2, text: "Mfasoɔ no kɔɔ soro" },
          { id: 3, text: "Yɛhia adetɔfoɔ bebree" },
          { id: 4, text: "Adwuma no rekɔ so" },
        ],
        correctOptionId: 4,
        hints: ["adwuma = business"],
        explanation:
          "Adwuma no rekɔ so = The business is ongoing.",
      },
      {
        id: 614,
        type: "listening_multiple_choice",
        instruction:
          "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/sae_kɔntragye_no_ase.m4a"),
        options: [
          { id: 1, text: "I have a meeting" },
          { id: 2, text: "Sign the contract" },
          { id: 3, text: "What is your budget?" },
          { id: 4, text: "We deliver goods daily" },
        ],
        correctOptionId: 2,
        hints: ["kɔntragye = contract"],
        explanation:
          "You heard 'Sae kɔntragye no ase' which means 'Sign the contract'.",
      },
      {
        id: 621,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'We deliver goods daily' in Twi?",
        options: [
          { id: 1, text: "Mfasoɔ no kɔɔ soro" },
          { id: 2, text: "Sae kɔntragye no ase" },
          { id: 3, text: "Yɛde nneɛma kɔ daa" },
          { id: 4, text: "Wo sika botaeɛ ne sɛn?" },
        ],
        correctOptionId: 3,
        hints: ["daa = daily"],
        explanation:
          "Yɛde nneɛma kɔ daa = We deliver goods daily.",
      },
      {
        id: 615,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Send me the report' in Twi?",
        options: [
          { id: 1, text: "Mewɔ nhyiam" },
          { id: 2, text: "Mfasoɔ no kɔɔ soro" },
          { id: 3, text: "Adwuma no rekɔ so" },
          { id: 4, text: "Fa amanneɛbɔ no brɛ me" },
        ],
        correctOptionId: 4,
        hints: ["amanneɛbɔ = report"],
        explanation:
          "Fa amanneɛbɔ no brɛ me = Send me the report.",
      },
      {
        id: 619,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'We need more customers' in Twi?",
        options: [
          { id: 1, text: "Mewɔ nhyiam" },
          { id: 2, text: "Yɛhia adetɔfoɔ bebree" },
          { id: 3, text: "Adwuma no rekɔ so" },
          { id: 4, text: "Mfasoɔ no kɔɔ soro" },
        ],
        correctOptionId: 2,
        hints: ["adetɔfoɔ = customers"],
        explanation:
          "Yɛhia adetɔfoɔ bebree = We need more customers.",
      },
      {
        id: 617,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'Let us discuss the terms' in Twi?",
        options: [
          { id: 1, text: "Wo sika botaeɛ ne sɛn?" },
          { id: 2, text: "Mewɔ nhyiam" },
          { id: 3, text: "Momma yɛnsusu nhyehyɛeɛ no ho" },
          { id: 4, text: "Fa amanneɛbɔ no brɛ me" },
        ],
        correctOptionId: 3,
        hints: ["yɛnsusu = let us discuss"],
        explanation:
          "Momma yɛnsusu nhyehyɛeɛ no ho = Let us discuss the terms.",
      },
      {
        id: 622,
        type: "listening_multiple_choice",
        instruction:
          "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/mewɔ_nhyiam.m4a"),
        options: [
          { id: 1, text: "The business is ongoing" },
          { id: 2, text: "I have a meeting" },
          { id: 3, text: "Send me the report" },
          { id: 4, text: "Let us discuss the terms" },
        ],
        correctOptionId: 2,
        hints: ["nhyiam = meeting"],
        explanation:
          "You heard 'Mewɔ nhyiam' which means 'I have a meeting'.",
      },
      {
        id: 620,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'What is your budget?' in Twi?",
        options: [
          { id: 1, text: "Yɛde nneɛma kɔ daa" },
          { id: 2, text: "Sae kɔntragye no ase" },
          { id: 3, text: "Mewɔ nhyiam" },
          { id: 4, text: "Wo sika botaeɛ ne sɛn?" },
        ],
        correctOptionId: 4,
        hints: ["sika botaeɛ = budget"],
        explanation:
          "Wo sika botaeɛ ne sɛn? = What is your budget?",
      },
      {
        id: 616,
        type: "listening_multiple_choice",
        instruction:
          "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/intermediate/chapter6/mfasoɔ_no_kɔɔ_soro.m4a"),
        options: [
          { id: 1, text: "We need more customers" },
          { id: 2, text: "The profit increased" },
          { id: 3, text: "The business is ongoing" },
          { id: 4, text: "Sign the contract" },
        ],
        correctOptionId: 2,
        hints: ["mfasoɔ = profit"],
        explanation:
          "You heard 'Mfasoɔ no kɔɔ soro' which means 'The profit increased'.",
      },
      {
        id: 613,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'I have a meeting' in Twi?",
        options: [
          { id: 1, text: "Mewɔ nhyiam" },
          { id: 2, text: "Fa amanneɛbɔ no brɛ me" },
          { id: 3, text: "Adwuma no rekɔ so" },
          { id: 4, text: "Momma yɛnsusu nhyehyɛeɛ no ho" },
        ],
        correctOptionId: 1,
        hints: ["nhyiam = meeting"],
        explanation: "Mewɔ nhyiam = I have a meeting.",
      },
    ],
  },
};