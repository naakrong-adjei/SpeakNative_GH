export default {
  id: 2,
  title: "Proverbs & Idioms",
  description: "Learn proverbs and idioms in Twi",
  icon: "bulb-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "2-1",
      type: "phrases",
      title: "Wisdom & Knowledge",
      icon: "brain-outline",
      description: "Learn proverbs about wisdom and knowledge in Twi",
      words: ["Nyansa nni ɔbaakofoɔ tirim", "Tikro nkɔ agyina", "Nsuwa nsuwa na ɛyɛ asubɔnten"],
      vocabulary: [
        {
          id: 243,
          english: "Wisdom is not in one person's head",
          native: "Nyansa nni ɔbaakofoɔ tirim",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/nyansa_nni_ɔbaakofoɔ_tirim.m4a")
        },
        {
          id: 244,
          english: "One head does not hold council",
          native: "Tikro nkɔ agyina",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/tikro_nkɔ_agyina.m4a")
        },
        {
          id: 245,
          english: "The river fills from small streams",
          native: "Nsuwa nsuwa na ɛyɛ asubɔnten",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/nsuwa_nsuwa_na_ɛyɛ_asubɔnten.m4a")
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Twi proverb.",
          question: "How do you say 'Wisdom is not in one person's head' in Twi?",
          options: [
            { id: 1, text: "Nyansa nni ɔbaakofoɔ tirim" },
            { id: 2, text: "Tikro nkɔ agyina" },
            { id: 3, text: "Nsuwa nsuwa na ɛyɛ asubɔnten" },
            { id: 4, text: "Nkakraa nkakraa na akokɔ de nom nsuo" }
          ],
          correctOptionId: 1,
          hints: ["nyansa = wisdom", "tirim = head"],
          explanation: "Nyansa nni ɔbaakofoɔ tirim = Wisdom is not in one person's head in Twi."
        },
        {
          id: 202,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/tikro_nkɔ_agyina.m4a"),
          options: [
            { id: 1, text: "Wisdom is not in one person's head" },
            { id: 2, text: "One head does not hold council" },
            { id: 3, text: "The river fills from small streams" },
            { id: 4, text: "No condition is permanent" }
          ],
          correctOptionId: 2,
          hints: ["tikro = one head", "agyina = council"],
          explanation: "You heard 'Tikro nkɔ agyina' which means 'One head does not hold council' in Twi."
        },
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Twi proverb.",
          question: "How do you say 'The river fills from small streams' in Twi?",
          options: [
            { id: 1, text: "Nyansa nni ɔbaakofoɔ tirim" },
            { id: 2, text: "Tikro nkɔ agyina" },
            { id: 3, text: "Nsuwa nsuwa na ɛyɛ asubɔnten" },
            { id: 4, text: "Tebea biara ntena hɔ daa" }
          ],
          correctOptionId: 3,
          hints: ["nsuwa = small stream", "asubɔnten = river"],
          explanation: "Nsuwa nsuwa na ɛyɛ asubɔnten = The river fills from small streams in Twi."
        }
      ]
    },

    {
      id: "2-2",
      type: "phrases",
      title: "Patience & Perseverance",
      icon: "hourglass-outline",
      description: "Learn proverbs about patience in Twi",
      words: ["Nkakraa nkakraa na akokɔ de nom nsuo", "Tebea biara ntena hɔ daa"],
      vocabulary: [
        {
          id: 246,
          english: "Slowly slowly catches the monkey",
          native: "Nkakraa nkakraa na akokɔ de nom nsuo",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/nkakraa_nkakraa_na_akokɔ_de_nom_nsuo.m4a")
        },
        {
          id: 247,
          english: "No condition is permanent",
          native: "Tebea biara ntena hɔ daa",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/tebea_biara_ntena_hɔ_daa.m4a")
        }
      ],
      questions: [
        {
          id: 204,
          type: "multiple_choice",
          instruction: "Select the correct Twi proverb.",
          question: "How do you say 'Slowly slowly catches the monkey' in Twi?",
          options: [
            { id: 1, text: "Nkakraa nkakraa na akokɔ de nom nsuo" },
            { id: 2, text: "Tebea biara ntena hɔ daa" },
            { id: 3, text: "Nyansa nni ɔbaakofoɔ tirim" },
            { id: 4, text: "Tikro nkɔ agyina" }
          ],
          correctOptionId: 1,
          hints: ["nkakraa = slowly"],
          explanation: "Nkakraa nkakraa na akokɔ de nom nsuo = Slowly slowly catches the monkey in Twi."
        },
        {
          id: 205,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/tebea_biara_ntena_hɔ_daa.m4a"),
          options: [
            { id: 1, text: "Slowly slowly catches the monkey" },
            { id: 2, text: "No condition is permanent" },
            { id: 3, text: "The river fills from small streams" },
            { id: 4, text: "One head does not hold council" }
          ],
          correctOptionId: 2,
          hints: ["tebea = condition", "daa = always"],
          explanation: "You heard 'Tebea biara ntena hɔ daa' which means 'No condition is permanent' in Twi."
        },
        {
          id: 206,
          type: "multiple_choice",
          instruction: "Select the correct Twi proverb.",
          question: "How do you say 'No condition is permanent' in Twi?",
          options: [
            { id: 1, text: "Nkakraa nkakraa na akokɔ de nom nsuo" },
            { id: 2, text: "Tebea biara ntena hɔ daa" },
            { id: 3, text: "Nsuwa nsuwa na ɛyɛ asubɔnten" },
            { id: 4, text: "Sɛ atwene bɔ sesa a, asa ne nso sesa" }
          ],
          correctOptionId: 2,
          hints: ["daa = always/permanent"],
          explanation: "Tebea biara ntena hɔ daa = No condition is permanent in Twi."
        },
        {
          id: 207,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/nkakraa_nkakraa_na_akokɔ_de_nom_nsuo.m4a"),
          options: [
            { id: 1, text: "Slowly slowly catches the monkey" },
            { id: 2, text: "No condition is permanent" },
            { id: 3, text: "Wisdom is not in one person's head" },
            { id: 4, text: "A child who washes his hands eats with elders" }
          ],
          correctOptionId: 1,
          hints: ["nkakraa = slowly"],
          explanation: "You heard 'Nkakraa nkakraa na akokɔ de nom nsuo' which means 'Slowly slowly catches the monkey' in Twi."
        }
      ]
    },

    {
      id: "2-3",
      type: "phrases",
      title: "Life Lessons",
      icon: "repeat-outline",
      description: "Learn proverbs about change and respect in Twi",
      words: ["Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi", "Sɛ atwene bɔ sesa a, asa ne nso sesa"],
      vocabulary: [
        {
          id: 248,
          english: "A child who washes his hands eats with elders",
          native: "Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/abofra_a_ɔhohoro_ne_nsa_yie_no_ne_mpanimfoɔ_na_edidi.m4a")
        },
        {
          id: 249,
          english: "When the drumbeat changes, the dance changes",
          native: "Sɛ atwene bɔ sesa a, asa ne nso sesa",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/sɛ_atwene_bɔ_sesa_a_asa_ne_nso_sesa.m4a")
        }
      ],
      questions: [
        {
          id: 208,
          type: "multiple_choice",
          instruction: "Select the correct Twi proverb.",
          question: "How do you say 'A child who washes his hands eats with elders' in Twi?",
          options: [
            { id: 1, text: "Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi" },
            { id: 2, text: "Sɛ atwene bɔ sesa a, asa ne nso sesa" },
            { id: 3, text: "Nkakraa nkakraa na akokɔ de nom nsuo" },
            { id: 4, text: "Tebea biara ntena hɔ daa" }
          ],
          correctOptionId: 1,
          hints: ["abofra = child", "mpanimfoɔ = elders"],
          explanation: "Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi = A child who washes his hands eats with elders in Twi."
        },
        {
          id: 209,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/sɛ_atwene_bɔ_sesa_a_asa_ne_nso_sesa.m4a"),
          options: [
            { id: 1, text: "A child who washes his hands eats with elders" },
            { id: 2, text: "When the drumbeat changes, the dance changes" },
            { id: 3, text: "The river fills from small streams" },
            { id: 4, text: "One head does not hold council" }
          ],
          correctOptionId: 2,
          hints: ["atwene = drum", "asa = dance"],
          explanation: "You heard 'Sɛ atwene bɔ sesa a, asa ne nso sesa' which means 'When the drumbeat changes, the dance changes' in Twi."
        },
        {
          id: 210,
          type: "multiple_choice",
          instruction: "Select the correct Twi proverb.",
          question: "How do you say 'When the drumbeat changes, the dance changes' in Twi?",
          options: [
            { id: 1, text: "Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi" },
            { id: 2, text: "Sɛ atwene bɔ sesa a, asa ne nso sesa" },
            { id: 3, text: "Nkakraa nkakraa na akokɔ de nom nsuo" },
            { id: 4, text: "Nyansa nni ɔbaakofoɔ tirim" }
          ],
          correctOptionId: 2,
          hints: ["atwene = drum", "sesa = change"],
          explanation: "Sɛ atwene bɔ sesa a, asa ne nso sesa = When the drumbeat changes, the dance changes in Twi."
        },
        {
          id: 211,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/abofra_a_ɔhohoro_ne_nsa_yie_no_ne_mpanimfoɔ_na_edidi.m4a"),
          options: [
            { id: 1, text: "A child who washes his hands eats with elders" },
            { id: 2, text: "When the drumbeat changes, the dance changes" },
            { id: 3, text: "No condition is permanent" },
            { id: 4, text: "Slowly slowly catches the monkey" }
          ],
          correctOptionId: 1,
          hints: ["abofra = child"],
          explanation: "You heard 'Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi' which means 'A child who washes his hands eats with elders' in Twi."
        }
      ]
    }
  ],

  review: {
    id: "review-2",
    title: "Review: Proverbs & Idioms",
    icon: "refresh-outline",
    description: "Review all the proverbs and idioms you've learned",
    questions: [
      {
        id: 212,
        type: "multiple_choice",
        instruction: "Select the correct Twi proverb.",
        question: "How do you say 'Wisdom is not in one person's head' in Twi?",
        options: [
          { id: 1, text: "Nyansa nni ɔbaakofoɔ tirim" },
          { id: 2, text: "Tikro nkɔ agyina" },
          { id: 3, text: "Nsuwa nsuwa na ɛyɛ asubɔnten" },
          { id: 4, text: "Tebea biara ntena hɔ daa" }
        ],
        correctOptionId: 1,
        hints: ["nyansa = wisdom"],
        explanation: "Nyansa nni ɔbaakofoɔ tirim = Wisdom is not in one person's head."
      },
      {
        id: 213,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/nsuwa_nsuwa_na_ɛyɛ_asubɔnten.m4a"),
        options: [
          { id: 1, text: "Wisdom is not in one person's head" },
          { id: 2, text: "One head does not hold council" },
          { id: 3, text: "The river fills from small streams" },
          { id: 4, text: "No condition is permanent" }
        ],
        correctOptionId: 3,
        hints: ["asubɔnten = river"],
        explanation: "You heard 'Nsuwa nsuwa na ɛyɛ asubɔnten' which means 'The river fills from small streams'."
      },
      {
        id: 214,
        type: "multiple_choice",
        instruction: "Select the correct Twi proverb.",
        question: "How do you say 'One head does not hold council' in Twi?",
        options: [
          { id: 1, text: "Nyansa nni ɔbaakofoɔ tirim" },
          { id: 2, text: "Tikro nkɔ agyina" },
          { id: 3, text: "Nsuwa nsuwa na ɛyɛ asubɔnten" },
          { id: 4, text: "Nkakraa nkakraa na akokɔ de nom nsuo" }
        ],
        correctOptionId: 2,
        hints: ["agyina = council"],
        explanation: "Tikro nkɔ agyina = One head does not hold council."
      },
      {
        id: 215,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/tebea_biara_ntena_hɔ_daa.m4a"),
        options: [
          { id: 1, text: "Slowly slowly catches the monkey" },
          { id: 2, text: "No condition is permanent" },
          { id: 3, text: "The river fills from small streams" },
          { id: 4, text: "A child who washes his hands eats with elders" }
        ],
        correctOptionId: 2,
        hints: ["daa = always"],
        explanation: "You heard 'Tebea biara ntena hɔ daa' which means 'No condition is permanent'."
      },
      {
        id: 216,
        type: "multiple_choice",
        instruction: "Select the correct Twi proverb.",
        question: "How do you say 'Slowly slowly catches the monkey' in Twi?",
        options: [
          { id: 1, text: "Nkakraa nkakraa na akokɔ de nom nsuo" },
          { id: 2, text: "Tebea biara ntena hɔ daa" },
          { id: 3, text: "Nyansa nni ɔbaakofoɔ tirim" },
          { id: 4, text: "Tikro nkɔ agyina" }
        ],
        correctOptionId: 1,
        hints: ["nkakraa = slowly"],
        explanation: "Nkakraa nkakraa na akokɔ de nom nsuo = Slowly slowly catches the monkey."
      },
      {
        id: 217,
        type: "multiple_choice",
        instruction: "Select the correct Twi proverb.",
        question: "How do you say 'No condition is permanent' in Twi?",
        options: [
          { id: 1, text: "Nkakraa nkakraa na akokɔ de nom nsuo" },
          { id: 2, text: "Tebea biara ntena hɔ daa" },
          { id: 3, text: "Nsuwa nsuwa na ɛyɛ asubɔnten" },
          { id: 4, text: "Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi" }
        ],
        correctOptionId: 2,
        hints: ["tebea = condition"],
        explanation: "Tebea biara ntena hɔ daa = No condition is permanent."
      },
      {
        id: 218,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/twi/advanced/chapter2/sɛ_atwene_bɔ_sesa_a_asa_ne_nso_sesa.m4a"),
        options: [
          { id: 1, text: "A child who washes his hands eats with elders" },
          { id: 2, text: "When the drumbeat changes, the dance changes" },
          { id: 3, text: "No condition is permanent" },
          { id: 4, text: "Wisdom is not in one person's head" }
        ],
        correctOptionId: 2,
        hints: ["atwene = drum"],
        explanation: "You heard 'Sɛ atwene bɔ sesa a, asa ne nso sesa' which means 'When the drumbeat changes, the dance changes'."
      },
      {
        id: 219,
        type: "multiple_choice",
        instruction: "Select the correct Twi proverb.",
        question: "How do you say 'A child who washes his hands eats with elders' in Twi?",
        options: [
          { id: 1, text: "Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi" },
          { id: 2, text: "Sɛ atwene bɔ sesa a, asa ne nso sesa" },
          { id: 3, text: "Nkakraa nkakraa na akokɔ de nom nsuo" },
          { id: 4, text: "Nyansa nni ɔbaakofoɔ tirim" }
        ],
        correctOptionId: 1,
        hints: ["mpanimfoɔ = elders"],
        explanation: "Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi = A child who washes his hands eats with elders."
      },
      {
        id: 220,
        type: "multiple_choice",
        instruction: "Select the correct Twi proverb.",
        question: "How do you say 'When the drumbeat changes, the dance changes' in Twi?",
        options: [
          { id: 1, text: "Abofra a ɔhohoro ne nsa yie no ne mpanimfoɔ na edidi" },
          { id: 2, text: "Sɛ atwene bɔ sesa a, asa ne nso sesa" },
          { id: 3, text: "Nkakraa nkakraa na akokɔ de nom nsuo" },
          { id: 4, text: "Tebea biara ntena hɔ daa" }
        ],
        correctOptionId: 2,
        hints: ["asa = dance"],
        explanation: "Sɛ atwene bɔ sesa a, asa ne nso sesa = When the drumbeat changes, the dance changes."
      }
    ]
  }
};