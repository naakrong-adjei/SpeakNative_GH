export default {
  id: 1,
  title: "Complex Sentences",
  description: "Learn complex sentence structures in Ga",
  icon: "git-branch-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "1-1",
      type: "phrases",
      title: "Conditions & Consequences",
      icon: "git-branch-outline",
      description: "Learn how to express conditions and their consequences in Ga",
      words: ["Mile ŋkuɛ, miyaaa", "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ"],
      vocabulary: [
        {
          id: 233,
          english: "If I had known, I would not have gone",
          native: "Mile ŋkuɛ, miyaaa",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/mile_ŋkuɛ_miyaaa.m4a")
        },
        {
          id: 236,
          english: "Whoever comes first will be served",
          native: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/mɔ_fɛɛ_mɔ_ni_baa_klɛŋklɛŋ_lɛ_abaakwɛ_lɛ.m4a")
        }
      ],
      questions: [
        {
          id: 101,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'If I had known, I would not have gone' in Ga?",
          options: [
            { id: 1, text: "Mile ŋkuɛ, miyaaa" },
            { id: 2, text: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ" },
            { id: 3, text: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ" },
            { id: 4, text: "Nitsumɔ ni afee nyɛ lɛ" }
          ],
          correctOptionId: 1,
          hints: ["Mile ŋkuɛ = if I had known", "miyaaa = I would not have gone"],
          explanation: "Mile ŋkuɛ, miyaaa = If I had known, I would not have gone in Ga."
        },
        {
          id: 102,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/mɔ_fɛɛ_mɔ_ni_baa_klɛŋklɛŋ_lɛ_abaakwɛ_lɛ.m4a"),
          options: [
            { id: 1, text: "If I had known, I would not have gone" },
            { id: 2, text: "Whoever comes first will be served" },
            { id: 3, text: "Although it rained, we continued" },
            { id: 4, text: "The house that I built last year" }
          ],
          correctOptionId: 2,
          hints: ["klɛŋklɛŋ = first", "abaakwɛ = will be served"],
          explanation: "You heard 'Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ' which means 'Whoever comes first will be served' in Ga."
        },
        {
          id: 103,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Whoever comes first will be served' in Ga?",
          options: [
            { id: 1, text: "Mile ŋkuɛ, miyaaa" },
            { id: 2, text: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ" },
            { id: 3, text: "Jeee no pɛ, shi enɛ hu" },
            { id: 4, text: "Shia ni mi ma afi ni ho lɛ" }
          ],
          correctOptionId: 2,
          hints: ["klɛŋklɛŋ = first"],
          explanation: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ = Whoever comes first will be served in Ga."
        }
      ]
    },

    {
      id: "1-2",
      type: "phrases",
      title: "Contrast & Addition",
      icon: "link-outline",
      description: "Learn how to express contrast and addition in Ga",
      words: ["Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ", "Jeee no pɛ, shi enɛ hu"],
      vocabulary: [
        {
          id: 234,
          english: "Although it rained, we continued",
          native: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/eyɛ_mli_akɛ_nugbɔ_nɛ_moŋ_shi_wɔtsa_nɔ.m4a")
        },
        {
          id: 238,
          english: "Not only that, but also this",
          native: "Jeee no pɛ, shi enɛ hu",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/jeee_no_pɛ_shi_enɛ_hu.m4a")
        }
      ],
      questions: [
        {
          id: 104,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Although it rained, we continued' in Ga?",
          options: [
            { id: 1, text: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ" },
            { id: 2, text: "Jeee no pɛ, shi enɛ hu" },
            { id: 3, text: "Mile ŋkuɛ, miyaaa" },
            { id: 4, text: "Nitsumɔ ni afee nyɛ lɛ" }
          ],
          correctOptionId: 1,
          hints: ["nugbɔ = rain", "wɔtsa nɔ = we continued"],
          explanation: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ = Although it rained, we continued in Ga."
        },
        {
          id: 105,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/jeee_no_pɛ_shi_enɛ_hu.m4a"),
          options: [
            { id: 1, text: "Although it rained, we continued" },
            { id: 2, text: "Not only that, but also this" },
            { id: 3, text: "Whoever comes first will be served" },
            { id: 4, text: "The work that was done yesterday" }
          ],
          correctOptionId: 2,
          hints: ["Jeee no pɛ = not only that", "enɛ hu = also this"],
          explanation: "You heard 'Jeee no pɛ, shi enɛ hu' which means 'Not only that, but also this' in Ga."
        },
        {
          id: 106,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'Not only that, but also this' in Ga?",
          options: [
            { id: 1, text: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ" },
            { id: 2, text: "Jeee no pɛ, shi enɛ hu" },
            { id: 3, text: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ" },
            { id: 4, text: "Shia ni mi ma afi ni ho lɛ" }
          ],
          correctOptionId: 2,
          hints: ["enɛ hu = also this"],
          explanation: "Jeee no pɛ, shi enɛ hu = Not only that, but also this in Ga."
        }
      ]
    },

    {
      id: "1-3",
      type: "phrases",
      title: "Describing People & Things",
      icon: "brackets-outline",
      description: "Learn how to use relative clauses to describe people and things in Ga",
      words: ["Nitsumɔ ni afee nyɛ lɛ", "Shia ni mi ma afi ni ho lɛ"],
      vocabulary: [
        {
          id: 235,
          english: "The work that was done yesterday",
          native: "Nitsumɔ ni afee nyɛ lɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/nitsumɔ_ni_afee_nyɛ_lɛ.m4a")
        },
        {
          id: 237,
          english: "The house that I built last year",
          native: "Shia ni mi ma afi ni ho lɛ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/shia_ni_mi_ma_afi_ni_ho_lɛ.m4a")
        }
      ],
      questions: [
        {
          id: 107,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The work that was done yesterday' in Ga?",
          options: [
            { id: 1, text: "Nitsumɔ ni afee nyɛ lɛ" },
            { id: 2, text: "Shia ni mi ma afi ni ho lɛ" },
            { id: 3, text: "Mile ŋkuɛ, miyaaa" },
            { id: 4, text: "Jeee no pɛ, shi enɛ hu" }
          ],
          correctOptionId: 1,
          hints: ["nitsumɔ = work", "nyɛ = yesterday"],
          explanation: "Nitsumɔ ni afee nyɛ lɛ = The work that was done yesterday in Ga."
        },
        {
          id: 108,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/shia_ni_mi_ma_afi_ni_ho_lɛ.m4a"),
          options: [
            { id: 1, text: "The work that was done yesterday" },
            { id: 2, text: "The house that I built last year" },
            { id: 3, text: "Whoever comes first will be served" },
            { id: 4, text: "Although it rained, we continued" }
          ],
          correctOptionId: 2,
          hints: ["shia = house", "afi ni ho lɛ = last year"],
          explanation: "You heard 'Shia ni mi ma afi ni ho lɛ' which means 'The house that I built last year' in Ga."
        },
        {
          id: 109,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you say 'The house that I built last year' in Ga?",
          options: [
            { id: 1, text: "Nitsumɔ ni afee nyɛ lɛ" },
            { id: 2, text: "Shia ni mi ma afi ni ho lɛ" },
            { id: 3, text: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ" },
            { id: 4, text: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ" }
          ],
          correctOptionId: 2,
          hints: ["shia = house", "afi ni ho lɛ = last year"],
          explanation: "Shia ni mi ma afi ni ho lɛ = The house that I built last year in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-1",
    title: "Review: Complex Sentences",
    icon: "refresh-outline",
    description: "Review all the complex sentence structures you've learned",
    questions: [
      {
        id: 110,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'If I had known, I would not have gone' in Ga?",
        options: [
          { id: 1, text: "Mile ŋkuɛ, miyaaa" },
          { id: 2, text: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ" },
          { id: 3, text: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ" },
          { id: 4, text: "Jeee no pɛ, shi enɛ hu" }
        ],
        correctOptionId: 1,
        hints: ["Mile ŋkuɛ = if I had known"],
        explanation: "Mile ŋkuɛ, miyaaa = If I had known, I would not have gone."
      },
      {
        id: 111,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/eyɛ_mli_akɛ_nugbɔ_nɛ_moŋ_shi_wɔtsa_nɔ.m4a"),
        options: [
          { id: 1, text: "If I had known, I would not have gone" },
          { id: 2, text: "Whoever comes first will be served" },
          { id: 3, text: "Although it rained, we continued" },
          { id: 4, text: "The house that I built last year" }
        ],
        correctOptionId: 3,
        hints: ["nugbɔ = rain"],
        explanation: "You heard 'Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ' which means 'Although it rained, we continued'."
      },
      {
        id: 112,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Whoever comes first will be served' in Ga?",
        options: [
          { id: 1, text: "Mile ŋkuɛ, miyaaa" },
          { id: 2, text: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ" },
          { id: 3, text: "Jeee no pɛ, shi enɛ hu" },
          { id: 4, text: "Nitsumɔ ni afee nyɛ lɛ" }
        ],
        correctOptionId: 2,
        hints: ["klɛŋklɛŋ = first"],
        explanation: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ = Whoever comes first will be served."
      },
      {
        id: 113,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/nitsumɔ_ni_afee_nyɛ_lɛ.m4a"),
        options: [
          { id: 1, text: "The work that was done yesterday" },
          { id: 2, text: "The house that I built last year" },
          { id: 3, text: "Not only that, but also this" },
          { id: 4, text: "Whoever comes first will be served" }
        ],
        correctOptionId: 1,
        hints: ["nitsumɔ = work"],
        explanation: "You heard 'Nitsumɔ ni afee nyɛ lɛ' which means 'The work that was done yesterday'."
      },
      {
        id: 114,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Although it rained, we continued' in Ga?",
        options: [
          { id: 1, text: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ" },
          { id: 2, text: "Jeee no pɛ, shi enɛ hu" },
          { id: 3, text: "Mile ŋkuɛ, miyaaa" },
          { id: 4, text: "Shia ni mi ma afi ni ho lɛ" }
        ],
        correctOptionId: 1,
        hints: ["wɔtsa nɔ = we continued"],
        explanation: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ = Although it rained, we continued."
      },
      {
        id: 115,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'Not only that, but also this' in Ga?",
        options: [
          { id: 1, text: "Eyɛ mli akɛ nugbɔ nɛ moŋ, shi wɔtsa nɔ" },
          { id: 2, text: "Jeee no pɛ, shi enɛ hu" },
          { id: 3, text: "Mɔ fɛɛ mɔ ni baa klɛŋklɛŋ lɛ abaakwɛ lɛ" },
          { id: 4, text: "Nitsumɔ ni afee nyɛ lɛ" }
        ],
        correctOptionId: 2,
        hints: ["enɛ hu = also this"],
        explanation: "Jeee no pɛ, shi enɛ hu = Not only that, but also this."
      },
      {
        id: 116,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'The house that I built last year' in Ga?",
        options: [
          { id: 1, text: "Nitsumɔ ni afee nyɛ lɛ" },
          { id: 2, text: "Shia ni mi ma afi ni ho lɛ" },
          { id: 3, text: "Mile ŋkuɛ, miyaaa" },
          { id: 4, text: "Jeee no pɛ, shi enɛ hu" }
        ],
        correctOptionId: 2,
        hints: ["shia = house"],
        explanation: "Shia ni mi ma afi ni ho lɛ = The house that I built last year."
      },
      {
        id: 117,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter1/jeee_no_pɛ_shi_enɛ_hu.m4a"),
        options: [
          { id: 1, text: "Although it rained, we continued" },
          { id: 2, text: "Not only that, but also this" },
          { id: 3, text: "Whoever comes first will be served" },
          { id: 4, text: "The work that was done yesterday" }
        ],
        correctOptionId: 2,
        hints: ["enɛ hu = also this"],
        explanation: "You heard 'Jeee no pɛ, shi enɛ hu' which means 'Not only that, but also this'."
      }
    ]
  }
};