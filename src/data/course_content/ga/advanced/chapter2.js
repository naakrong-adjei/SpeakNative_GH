export default {
  id: 2,
  title: "Wisdom & Proverbs",
  description: "Learn wisdom and proverbs in Ga",
  icon: "bulb-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "2-1",
      type: "phrases",
      title: "Wisdom & Knowledge",
      icon: "bulb-outline",
      description: "Learn proverbs about wisdom and knowledge in Ga",
      words: ["Nilee bɛ mɔ kome yitso mli", "Yitso kome mɔɔ kpeee ajina", "Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii"],
      vocabulary: [
        {
          id: 240,
          english: "Wisdom is not in one person's head",
          native: "Nilee bɛ mɔ kome yitso mli",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/nilee_bɛ_mɔ_kome_yitso_mli.m4a")
        },
        {
          id: 244,
          english: "One head does not hold council",
          native: "Yitso kome mɔɔ kpeee ajina",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/yitso_kome_mɔɔ_kpeee_ajina.m4a")
        },
        {
          id: 241,
          english: "A child who washes his hands eats with elders",
          native: "Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/gbekɛ_ni_fɔɔ_ede_lɛ_ekɛ_onukpai_yeɔ_nii.m4a")
        }
      ],
      questions: [
        {
          id: 202,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/yitso_kome_mɔɔ_kpeee_ajina.m4a"),
          options: [
            { id: 1, text: "No condition is permanent" },
            { id: 2, text: "One head does not hold council" },
            { id: 3, text: "A child who washes his hands eats with elders" },
            { id: 4, text: "Wisdom is not in one person's head" }
          ],
          correctOptionId: 2,
          hints: ["yitso kome = one head", "ajina = council"],
          explanation: "You heard 'Yitso kome mɔɔ kpeee ajina' which means 'One head does not hold council' in Ga."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ga proverb.",
          question: "How do you say 'A child who washes his hands eats with elders' in Ga?",
          options: [
            { id: 1, text: "Blɛoo blɛoo emɔɔ adina" },
            { id: 2, text: "Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii" },
            { id: 3, text: "Yitso kome mɔɔ kpeee ajina" },
            { id: 4, text: "Nilee bɛ mɔ kome yitso mli" }
          ],
          correctOptionId: 2,
          hints: ["gbekɛ = child", "onukpai = elders"],
          explanation: "Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii = A child who washes his hands eats with elders in Ga."
        },
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ga proverb.",
          question: "How do you say 'Wisdom is not in one person's head' in Ga?",
          options: [
            { id: 1, text: "Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii" },
            { id: 2, text: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ" },
            { id: 3, text: "Nilee bɛ mɔ kome yitso mli" },
            { id: 4, text: "Yitso kome mɔɔ kpeee ajina" }
          ],
          correctOptionId: 3,
          hints: ["nilee = wisdom", "yitso = head"],
          explanation: "Nilee bɛ mɔ kome yitso mli = Wisdom is not in one person's head in Ga."
        }
      ]
    },

    {
      id: "2-2",
      type: "phrases",
      title: "Patience & Progress",
      icon: "hourglass-outline",
      description: "Learn proverbs about patience and progress in Ga",
      words: ["Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ", "Blɛoo blɛoo emɔɔ adina"],
      vocabulary: [
        {
          id: 245,
          english: "The river fills from small streams",
          native: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/faa_yimɔɔ_kɛjɛɔ_nui_bibii_adɛŋ.m4a")
        },
        {
          id: 242,
          english: "Slowly slowly catches the monkey",
          native: "Blɛoo blɛoo emɔɔ adina",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/blɛoo_blɛoo_emɔɔ_adina.m4a")
        }
      ],
      questions: [
        {
          id: 205,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/blɛoo_blɛoo_emɔɔ_adina.m4a"),
          options: [
            { id: 1, text: "One head does not hold council" },
            { id: 2, text: "The river fills from small streams" },
            { id: 3, text: "Slowly slowly catches the monkey" },
            { id: 4, text: "No condition is permanent" }
          ],
          correctOptionId: 3,
          hints: ["blɛoo = slowly", "adina = monkey"],
          explanation: "You heard 'Blɛoo blɛoo emɔɔ adina' which means 'Slowly slowly catches the monkey' in Ga."
        },
        {
          id: 206,
          type: "multiple_choice",
          instruction: "Select the correct Ga proverb.",
          question: "How do you say 'Slowly slowly catches the monkey' in Ga?",
          options: [
            { id: 1, text: "Blɛoo blɛoo emɔɔ adina" },
            { id: 2, text: "Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii" },
            { id: 3, text: "Shihilɛ ko damɔɔɔ shi daa" },
            { id: 4, text: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ" }
          ],
          correctOptionId: 1,
          hints: ["blɛoo = slowly"],
          explanation: "Blɛoo blɛoo emɔɔ adina = Slowly slowly catches the monkey in Ga."
        },
        {
          id: 204,
          type: "multiple_choice",
          instruction: "Select the correct Ga proverb.",
          question: "How do you say 'The river fills from small streams' in Ga?",
          options: [
            { id: 1, text: "Blɛoo blɛoo emɔɔ adina" },
            { id: 2, text: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ" },
            { id: 3, text: "Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ" },
            { id: 4, text: "Nilee bɛ mɔ kome yitso mli" }
          ],
          correctOptionId: 2,
          hints: ["faa = river", "nui bibii = small streams"],
          explanation: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ = The river fills from small streams in Ga."
        }
      ]
    },

    {
      id: "2-3",
      type: "phrases",
      title: "Life Lessons",
      icon: "repeat-outline",
      description: "Learn proverbs about change and life in Ga",
      words: ["Shihilɛ ko damɔɔɔ shi daa", "Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ"],
      vocabulary: [
        {
          id: 246,
          english: "No condition is permanent",
          native: "Shihilɛ ko damɔɔɔ shi daa",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/shihilɛ_ko_damɔɔɔ_shi_daa.m4a")
        },
        {
          id: 243,
          english: "When the drumbeat changes, the dance changes",
          native: "Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/kɛji_obonu_gbɛɛmɔ_lɛ_tsake_lɛ_joo_lɛ_hu_tsakeɔ.m4a")
        }
      ],
      questions: [
        {
          id: 208,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/kɛji_obonu_gbɛɛmɔ_lɛ_tsake_lɛ_joo_lɛ_hu_tsakeɔ.m4a"),
          options: [
            { id: 1, text: "The river fills from small streams" },
            { id: 2, text: "When the drumbeat changes, the dance changes" },
            { id: 3, text: "No condition is permanent" },
            { id: 4, text: "Wisdom is not in one person's head" }
          ],
          correctOptionId: 2,
          hints: ["obonu = drum", "joo = dance"],
          explanation: "You heard 'Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ' which means 'When the drumbeat changes, the dance changes' in Ga."
        },
        {
          id: 209,
          type: "multiple_choice",
          instruction: "Select the correct Ga proverb.",
          question: "How do you say 'When the drumbeat changes, the dance changes' in Ga?",
          options: [
            { id: 1, text: "Blɛoo blɛoo emɔɔ adina" },
            { id: 2, text: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ" },
            { id: 3, text: "Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ" },
            { id: 4, text: "Shihilɛ ko damɔɔɔ shi daa" }
          ],
          correctOptionId: 3,
          hints: ["obonu = drum", "tsake = change"],
          explanation: "Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ = When the drumbeat changes, the dance changes in Ga."
        },
        {
          id: 207,
          type: "multiple_choice",
          instruction: "Select the correct Ga proverb.",
          question: "How do you say 'No condition is permanent' in Ga?",
          options: [
            { id: 1, text: "Shihilɛ ko damɔɔɔ shi daa" },
            { id: 2, text: "Nilee bɛ mɔ kome yitso mli" },
            { id: 3, text: "Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii" },
            { id: 4, text: "Blɛoo blɛoo emɔɔ adina" }
          ],
          correctOptionId: 1,
          hints: ["shihilɛ = condition", "daa = always/permanent"],
          explanation: "Shihilɛ ko damɔɔɔ shi daa = No condition is permanent in Ga."
        }
      ]
    }
  ],

  review: {
    id: "review-2",
    title: "Review: Wisdom & Proverbs",
    icon: "refresh-outline",
    description: "Review all the wisdom and proverbs you've learned",
    questions: [
      {
        id: 211,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/gbekɛ_ni_fɔɔ_ede_lɛ_ekɛ_onukpai_yeɔ_nii.m4a"),
        options: [
          { id: 1, text: "Wisdom is not in one person's head" },
          { id: 2, text: "No condition is permanent" },
          { id: 3, text: "A child who washes his hands eats with elders" },
          { id: 4, text: "One head does not hold council" }
        ],
        correctOptionId: 3,
        hints: ["onukpai = elders"],
        explanation: "You heard 'Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii' which means 'A child who washes his hands eats with elders'."
      },
      {
        id: 213,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/shihilɛ_ko_damɔɔɔ_shi_daa.m4a"),
        options: [
          { id: 1, text: "When the drumbeat changes, the dance changes" },
          { id: 2, text: "No condition is permanent" },
          { id: 3, text: "Slowly slowly catches the monkey" },
          { id: 4, text: "The river fills from small streams" }
        ],
        correctOptionId: 2,
        hints: ["shihilɛ = condition"],
        explanation: "You heard 'Shihilɛ ko damɔɔɔ shi daa' which means 'No condition is permanent'."
      },
      {
        id: 217,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ga/advanced/chapter2/blɛoo_blɛoo_emɔɔ_adina.m4a"),
        options: [
          { id: 1, text: "Slowly slowly catches the monkey" },
          { id: 2, text: "The river fills from small streams" },
          { id: 3, text: "No condition is permanent" },
          { id: 4, text: "One head does not hold council" }
        ],
        correctOptionId: 1,
        hints: ["adina = monkey"],
        explanation: "You heard 'Blɛoo blɛoo emɔɔ adina' which means 'Slowly slowly catches the monkey'."
      },
      {
        id: 215,
        type: "multiple_choice",
        instruction: "Select the correct Ga proverb.",
        question: "How do you say 'Slowly slowly catches the monkey' in Ga?",
        options: [
          { id: 1, text: "Shihilɛ ko damɔɔɔ shi daa" },
          { id: 2, text: "Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii" },
          { id: 3, text: "Blɛoo blɛoo emɔɔ adina" },
          { id: 4, text: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ" }
        ],
        correctOptionId: 3,
        hints: ["blɛoo = slowly"],
        explanation: "Blɛoo blɛoo emɔɔ adina = Slowly slowly catches the monkey."
      },
      {
        id: 216,
        type: "multiple_choice",
        instruction: "Select the correct Ga proverb.",
        question: "How do you say 'When the drumbeat changes, the dance changes' in Ga?",
        options: [
          { id: 1, text: "Yitso kome mɔɔ kpeee ajina" },
          { id: 2, text: "Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ" },
          { id: 3, text: "Blɛoo blɛoo emɔɔ adina" },
          { id: 4, text: "Shihilɛ ko damɔɔɔ shi daa" }
        ],
        correctOptionId: 2,
        hints: ["obonu = drum"],
        explanation: "Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ = When the drumbeat changes, the dance changes."
      },
      {
        id: 212,
        type: "multiple_choice",
        instruction: "Select the correct Ga proverb.",
        question: "How do you say 'One head does not hold council' in Ga?",
        options: [
          { id: 1, text: "Blɛoo blɛoo emɔɔ adina" },
          { id: 2, text: "Yitso kome mɔɔ kpeee ajina" },
          { id: 3, text: "Nilee bɛ mɔ kome yitso mli" },
          { id: 4, text: "Shihilɛ ko damɔɔɔ shi daa" }
        ],
        correctOptionId: 2,
        hints: ["ajina = council"],
        explanation: "Yitso kome mɔɔ kpeee ajina = One head does not hold council."
      },
      {
        id: 210,
        type: "multiple_choice",
        instruction: "Select the correct Ga proverb.",
        question: "How do you say 'Wisdom is not in one person's head' in Ga?",
        options: [
          { id: 1, text: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ" },
          { id: 2, text: "Nilee bɛ mɔ kome yitso mli" },
          { id: 3, text: "Gbekɛ ni fɔɔ ede lɛ, ekɛ onukpai yeɔ nii" },
          { id: 4, text: "Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ" }
        ],
        correctOptionId: 2,
        hints: ["nilee = wisdom"],
        explanation: "Nilee bɛ mɔ kome yitso mli = Wisdom is not in one person's head."
      },
      {
        id: 214,
        type: "multiple_choice",
        instruction: "Select the correct Ga proverb.",
        question: "How do you say 'The river fills from small streams' in Ga?",
        options: [
          { id: 1, text: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ" },
          { id: 2, text: "Kɛji obonu gbɛɛmɔ lɛ tsake lɛ, joo lɛ hu tsakeɔ" },
          { id: 3, text: "Blɛoo blɛoo emɔɔ adina" },
          { id: 4, text: "Nilee bɛ mɔ kome yitso mli" }
        ],
        correctOptionId: 1,
        hints: ["faa = river"],
        explanation: "Faa yimɔɔ kɛjɛɔ nui bibii adɛŋ = The river fills from small streams."
      }
    ]
  }
};