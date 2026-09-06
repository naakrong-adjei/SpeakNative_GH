export default {
  id: 4,
  title: "Numbers & Time",
  description: "Learn numbers, telling time, and days of the week in Ga",
  icon: "grid-outline",
  totalXp: 25,
  difficulty: "Beginner",

  sections: [
    {
      id: "4-1",
      type: "words",
      title: "Numbers 1-5",
      icon: "calculator-outline",
      description: "Learn numbers one to five in Ga",
      words: ["Ekome", "Enyɔ", "Etɛ", "Ejwɛ", "Enumɔ"],
      vocabulary: [
        {
          id: 44,
          english: "One",
          native: "Ekome",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/ekome.m4a")
        },
        {
          id: 45,
          english: "Two",
          native: "Enyɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/enyɔ.m4a")
        },
        {
          id: 46,
          english: "Three",
          native: "Etɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/etɛ.m4a")
        },
        {
          id: 52,
          english: "Four",
          native: "Ejwɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/ejwɛ.m4a")
        },
        {
          id: 53,
          english: "Five",
          native: "Enumɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/enumɔ.m4a")
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 3 in Ga?",
          options: [
            { id: 1, text: "Ekome" },
            { id: 2, text: "Enyɔ" },
            { id: 3, text: "Etɛ" },
            { id: 4, text: "Ejwɛ" }
          ],
          correctOptionId: 3,
          hints: ["Has an 'ɛ' sound"],
          explanation: "Etɛ = Three in Ga."
        },
        // {
        //   id: 402,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English number.",
        //   question: "What number did you hear?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/ekome.m4a"),
        //   options: [
        //     { id: 1, text: "1" },
        //     { id: 2, text: "2" },
        //     { id: 3, text: "3" },
        //     { id: 4, text: "4" }
        //   ],
        //   correctOptionId: 1,
        //   hints: ["The smallest number"],
        //   explanation: "You heard 'Ekome' which means One in Ga."
        // },
        {
          id: 403,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ga number.",
          sentence: "Ekome, Enyɔ, ___, Ejwɛ, Enumɔ",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Etɛ" },
            { id: "opt2", text: "Ekpaa" },
            { id: "opt3", text: "Nyɔŋma" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Three comes after two"],
          explanation: "Etɛ = Three. The pattern counts from one to five."
        }
      ]
    },

    {
      id: "4-2",
      type: "words",
      title: "Numbers 6-10",
      icon: "calculator-outline",
      description: "Learn numbers six to ten in Ga",
      words: ["Ekpaa", "Kpawo", "Kpaanyɔ", "Nɛɛhu", "Nyɔŋma"],
      vocabulary: [
        {
          id: 60,
          english: "Six",
          native: "Ekpaa",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/ekpaa.m4a")
        },
        {
          id: 61,
          english: "Seven",
          native: "Kpawo",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/kpawo.m4a")
        },
        {
          id: 62,
          english: "Eight",
          native: "Kpaanyɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/kpaanyɔ.m4a")
        },
        {
          id: 63,
          english: "Nine",
          native: "Nɛɛhu",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nɛɛhu.m4a")
        },
        {
          id: 47,
          english: "Ten",
          native: "Nyɔŋma",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋma.m4a")
        }
      ],
      questions: [
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 7 in Ga?",
          options: [
            { id: 1, text: "Ekpaa" },
            { id: 2, text: "Kpawo" },
            { id: 3, text: "Kpaanyɔ" },
            { id: 4, text: "Nɛɛhu" }
          ],
          correctOptionId: 2,
          hints: ["Has a 'wo' sound"],
          explanation: "Kpawo = Seven in Ga."
        },
        // {
        //   id: 405,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English number.",
        //   question: "What number did you hear?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋma.m4a"),
        //   options: [
        //     { id: 1, text: "8" },
        //     { id: 2, text: "9" },
        //     { id: 3, text: "10" },
        //     { id: 4, text: "11" }
        //   ],
        //   correctOptionId: 3,
        //   hints: ["Two digits"],
        //   explanation: "You heard 'Nyɔŋma' which means Ten in Ga."
        // },
        {
          id: 406,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ga number.",
          sentence: "Ekpaa, Kpawo, ___, Nɛɛhu",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Enumɔ" },
            { id: "opt2", text: "Kpaanyɔ" },
            { id: "opt3", text: "Nyɔŋma" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt2" },
          hints: ["Eight comes after seven"],
          explanation: "Kpaanyɔ = Eight. The pattern counts from six to nine."
        }
      ]
    },

    {
      id: "4-3",
      type: "words",
      title: "Numbers 11-15",
      icon: "calculator-outline",
      description: "Learn numbers eleven to fifteen in Ga",
      words: ["Nyɔŋma kɛ ekome", "Nyɔŋma kɛ enyɔ", "Nyɔŋma kɛ etɛ", "Nyɔŋma kɛ ejwɛ", "Nyɔŋma kɛ enumɔ"],
      vocabulary: [
        {
          id: 64,
          english: "Eleven",
          native: "Nyɔŋma kɛ ekome",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋma_kɛ_ekome.m4a")
        },
        {
          id: 65,
          english: "Twelve",
          native: "Nyɔŋma kɛ enyɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋma_kɛ_enyɔ.m4a")
        },
        {
          id: 66,
          english: "Thirteen",
          native: "Nyɔŋma kɛ etɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋma_kɛ_etɛ.m4a")
        },
        {
          id: 67,
          english: "Fourteen",
          native: "Nyɔŋma kɛ ejwɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋma_kɛ_ejwɛ.m4a")
        },
        {
          id: 68,
          english: "Fifteen",
          native: "Nyɔŋma kɛ enumɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋma_kɛ_enumɔ.m4a")
        }
      ],
      questions: [
        {
          id: 407,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 14 in Ga?",
          options: [
            { id: 1, text: "Nyɔŋma kɛ ekome" },
            { id: 2, text: "Nyɔŋma kɛ enyɔ" },
            { id: 3, text: "Nyɔŋma kɛ etɛ" },
            { id: 4, text: "Nyɔŋma kɛ ejwɛ" }
          ],
          correctOptionId: 4,
          hints: ["Nyɔŋma = ten", "ejwɛ = four"],
          explanation: "Nyɔŋma kɛ ejwɛ = Fourteen in Ga."
        },
        // {
        //   id: 408,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English number.",
        //   question: "What number did you hear?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋma_kɛ_enumɔ.m4a"),
        //   options: [
        //     { id: 1, text: "13" },
        //     { id: 2, text: "14" },
        //     { id: 3, text: "15" },
        //     { id: 4, text: "16" }
        //   ],
        //   correctOptionId: 3,
        //   hints: ["Nyɔŋma = ten", "enumɔ = five"],
        //   explanation: "You heard 'Nyɔŋma kɛ enumɔ' which means Fifteen in Ga."
        // },
        {
          id: 409,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ga number.",
          sentence: "Nyɔŋma kɛ ekome, Nyɔŋma kɛ enyɔ, ___, Nyɔŋma kɛ ejwɛ, Nyɔŋma kɛ enumɔ",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Nyɔŋma kɛ etɛ" },
            { id: "opt2", text: "Nyɔŋma kɛ ekpaa" },
            { id: "opt3", text: "Nyɔŋmai enyɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Thirteen comes after twelve"],
          explanation: "Nyɔŋma kɛ etɛ = Thirteen. The pattern counts from eleven to fifteen."
        }
      ]
    },

    {
      id: "4-4",
      type: "words",
      title: "Tens 20-50",
      icon: "calculator-outline",
      description: "Learn the tens from twenty to fifty in Ga",
      words: ["Nyɔŋmai enyɔ", "Nyɔŋmai etɛ", "Nyɔŋmai ejwɛ", "Nyɔŋmai enumɔ"],
      vocabulary: [
        {
          id: 54,
          english: "Twenty",
          native: "Nyɔŋmai enyɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_enyɔ.m4a")
        },
        {
          id: 74,
          english: "Thirty",
          native: "Nyɔŋmai etɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_etɛ.m4a")
        },
        {
          id: 75,
          english: "Forty",
          native: "Nyɔŋmai ejwɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_ejwɛ.m4a")
        },
        {
          id: 76,
          english: "Fifty",
          native: "Nyɔŋmai enumɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_enumɔ.m4a")
        }
      ],
      questions: [
        {
          id: 410,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 40 in Ga?",
          options: [
            { id: 1, text: "Nyɔŋmai enyɔ" },
            { id: 2, text: "Nyɔŋmai etɛ" },
            { id: 3, text: "Nyɔŋmai ejwɛ" },
            { id: 4, text: "Nyɔŋmai enumɔ" }
          ],
          correctOptionId: 3,
          hints: ["Four tens"],
          explanation: "Nyɔŋmai ejwɛ = Forty in Ga."
        },
        // {
        //   id: 411,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English number.",
        //   question: "What number did you hear?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_etɛ.m4a"),
        //   options: [
        //     { id: 1, text: "20" },
        //     { id: 2, text: "30" },
        //     { id: 3, text: "40" },
        //     { id: 4, text: "50" }
        //   ],
        //   correctOptionId: 2,
        //   hints: ["Three tens"],
        //   explanation: "You heard 'Nyɔŋmai etɛ' which means Thirty in Ga."
        // },
        {
          id: 412,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ga number.",
          sentence: "Nyɔŋmai enyɔ, Nyɔŋmai etɛ, ___, Nyɔŋmai enumɔ",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Nyɔŋmai ekpaa" },
            { id: "opt2", text: "Nyɔŋmai ejwɛ" },
            { id: "opt3", text: "Nyɔŋmai kpaanyɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt2" },
          hints: ["Forty comes after thirty"],
          explanation: "Nyɔŋmai ejwɛ = Forty. The pattern counts by tens."
        }
      ]
    },

    {
      id: "4-5",
      type: "words",
      title: "Tens 60-100",
      icon: "calculator-outline",
      description: "Learn the tens from sixty to one hundred in Ga",
      words: ["Nyɔŋmai ekpaa", "Nyɔŋmai kpawo", "Nyɔŋmai kpaanyɔ", "Nyɔŋmai nɛɛhu", "Oha"],
      vocabulary: [
        {
          id: 77,
          english: "Sixty",
          native: "Nyɔŋmai ekpaa",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_ekpaa.m4a")
        },
        {
          id: 78,
          english: "Seventy",
          native: "Nyɔŋmai kpawo",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_kpawo.m4a")
        },
        {
          id: 79,
          english: "Eighty",
          native: "Nyɔŋmai kpaanyɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_kpaanyɔ.m4a")
        },
        {
          id: 80,
          english: "Ninety",
          native: "Nyɔŋmai nɛɛhu",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_nɛɛhu.m4a")
        },
        {
          id: 55,
          english: "One hundred",
          native: "Oha",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/oha.m4a")
        }
      ],
      questions: [
        {
          id: 413,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 90 in Ga?",
          options: [
            { id: 1, text: "Nyɔŋmai ekpaa" },
            { id: 2, text: "Nyɔŋmai kpawo" },
            { id: 3, text: "Nyɔŋmai kpaanyɔ" },
            { id: 4, text: "Nyɔŋmai nɛɛhu" }
          ],
          correctOptionId: 4,
          hints: ["Nine tens"],
          explanation: "Nyɔŋmai nɛɛhu = Ninety in Ga."
        },
        // {
        //   id: 414,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English number.",
        //   question: "What number did you hear?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/oha.m4a"),
        //   options: [
        //     { id: 1, text: "50" },
        //     { id: 2, text: "75" },
        //     { id: 3, text: "90" },
        //     { id: 4, text: "100" }
        //   ],
        //   correctOptionId: 4,
        //   hints: ["Oha = hundred"],
        //   explanation: "You heard 'Oha' which means One hundred in Ga."
        // },
        {
          id: 415,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ga number.",
          sentence: "Nyɔŋmai ekpaa, Nyɔŋmai kpawo, ___, Nyɔŋmai nɛɛhu",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Nyɔŋmai ejwɛ" },
            { id: "opt2", text: "Nyɔŋmai enumɔ" },
            { id: "opt3", text: "Nyɔŋmai kpaanyɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt3" },
          hints: ["Eighty comes after seventy"],
          explanation: "Nyɔŋmai kpaanyɔ = Eighty. The pattern counts by tens."
        }
      ]
    },
    
    {
      id: "4-6",
      type: "words",
      title: "Compound Numbers",
      icon: "calculator-outline",
      description: "Learn compound numbers in Ga",
      words: ["Nyɔŋmai enumɔ kɛ ekome", "Nyɔŋmai enyɔ kɛ enyɔ", "Nyɔŋmai etɛ kɛ nɛɛhu", "Nyɔŋmai nɛɛhu kɛ kpaanyɔ", "Oha kɛ nyɔŋmai enumɔ"],
      vocabulary: [
        {
          id: 81,
          english: "Fifty-one",
          native: "Nyɔŋmai enumɔ kɛ ekome",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_enumɔ_kɛ_ekome.m4a")
        },
        {
          id: 82,
          english: "Twenty-two",
          native: "Nyɔŋmai enyɔ kɛ enyɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_enyɔ_kɛ_enyɔ.m4a")
        },
        {
          id: 83,
          english: "Thirty-nine",
          native: "Nyɔŋmai etɛ kɛ nɛɛhu",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_etɛ_kɛ_nɛɛhu.m4a")
        },
        {
          id: 84,
          english: "Ninety-eight",
          native: "Nyɔŋmai nɛɛhu kɛ kpaanyɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_nɛɛhu_kɛ_kpaanyɔ.m4a")
        },
        {
          id: 85,
          english: "One hundred and fifty",
          native: "Oha kɛ nyɔŋmai enumɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/oha_kɛ_nyɔŋmai_enumɔ.m4a")
        }
      ],
      questions: [
        // {
        //   id: 416,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English number.",
        //   question: "What number did you hear?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/oha_kɛ_nyɔŋmai_enumɔ.m4a"),
        //   options: [
        //     { id: 1, text: "50" },
        //     { id: 2, text: "100" },
        //     { id: 3, text: "150" },
        //     { id: 4, text: "200" }
        //   ],
        //   correctOptionId: 3,
        //   hints: ["Oha = one hundred", "nyɔŋmai enumɔ = fifty"],
        //   explanation: "You heard 'Oha kɛ nyɔŋmai enumɔ' which means One hundred and fifty in Ga."
        // },
        {
          id: 417,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct Ga number.",
          sentence: "Nyɔŋmai enyɔ kɛ [_____] (Twenty-two)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "enyɔ" },
            { id: "opt2", text: "etɛ" },
            { id: "opt3", text: "ejwɛ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Two = enyɔ"],
          explanation: "Nyɔŋmai enyɔ kɛ enyɔ = Twenty-two in Ga."
        },
        {
          id: 418,
          type: "multiple_choice",
          instruction: "Select the correct Ga number.",
          question: "What is 'Fifty-one' in Ga?",
          options: [
            { id: 1, text: "Nyɔŋmai enumɔ kɛ ekome" },
            { id: 2, text: "Nyɔŋmai enyɔ kɛ enyɔ" },
            { id: 3, text: "Nyɔŋmai etɛ kɛ nɛɛhu" },
            { id: 4, text: "Nyɔŋmai nɛɛhu kɛ kpaanyɔ" }
          ],
          correctOptionId: 1,
          hints: ["Fifty = nyɔŋmai enumɔ", "One = ekome"],
          explanation: "Nyɔŋmai enumɔ kɛ ekome = Fifty-one in Ga."
        }
      ]
    },

    {
      id: "4-7",
      type: "phrases",
      title: "Telling Time",
      icon: "time-outline",
      description: "Learn how to ask and tell the time in Ga",
      words: ["ŋmɛjii enyiɛ atswa?", "Atswa ŋmɛjii etɛ", "Leebi", "Shwane", "Gbɛkɛ", "Nyɔɔŋ"],
      vocabulary: [
        {
          id: 48,
          english: "What time is it?",
          native: "ŋmɛjii enyiɛ atswa?",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/ŋmɛjii_enyiɛ_atswa.m4a")
        },
        {
          id: 49,
          english: "It is three o'clock",
          native: "Atswa ŋmɛjii etɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/atswa_ŋmɛjii_etɛ.m4a")
        },
        {
          id: 56,
          english: "In the morning",
          native: "Leebi",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/leebi.m4a")
        },
        {
          id: 86,
          english: "In the afternoon",
          native: "Shwane",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/shwane.m4a")
        },
        {
          id: 87,
          english: "In the evening",
          native: "Gbɛkɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/gbɛkɛ.m4a")
        },
        {
          id: 57,
          english: "At night",
          native: "Nyɔɔŋ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔɔŋ.m4a")
        }
      ],
      questions: [
        {
          id: 419,
          type: "multiple_choice",
          instruction: "Select the correct Ga phrase.",
          question: "How do you ask 'What time is it?' in Ga?",
          options: [
            { id: 1, text: "ŋmɛjii enyiɛ atswa?" },
            { id: 2, text: "Atswa ŋmɛjii etɛ" },
            { id: 3, text: "Leebi" },
            { id: 4, text: "Nyɔɔŋ" }
          ],
          correctOptionId: 1,
          hints: ["Question about time"],
          explanation: "ŋmɛjii enyiɛ atswa? = What time is it? in Ga."
        },
        // {
        //   id: 420,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English translation.",
        //   question: "What did the speaker say?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/atswa_ŋmɛjii_etɛ.m4a"),
        //   options: [
        //     { id: 1, text: "What time is it?" },
        //     { id: 2, text: "It is three o'clock" },
        //     { id: 3, text: "In the morning" },
        //     { id: 4, text: "At night" }
        //   ],
        //   correctOptionId: 2,
        //   hints: ["Atswa = It is", "etɛ = three"],
        //   explanation: "You heard 'Atswa ŋmɛjii etɛ' which means 'It is three o'clock' in Ga."
        // },
        {
          id: 421,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "Atswa ŋmɛjii [_____] (It is three o'clock)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "etɛ" },
            { id: "opt2", text: "ejwɛ" },
            { id: "opt3", text: "enumɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["etɛ = three"],
          explanation: "Atswa ŋmɛjii etɛ = It is three o'clock in Ga."
        }
      ]
    },

    {
      id: "4-8",
      type: "words",
      title: "Days & Weeks",
      icon: "calendar-outline",
      description: "Learn the Ga words for days, weeks, today, tomorrow, and yesterday",
      words: ["Ŋmɛnɛ", "Wɔ", "Nyɛ", "Otsi ni baa lɛ", "nyɛsɛɛ otsi lɛ"],
      vocabulary: [
        {
          id: 50,
          english: "Today",
          native: "Ŋmɛnɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/ŋmɛnɛ.m4a")
        },
        {
          id: 51,
          english: "Tomorrow",
          native: "Wɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/wɔ.m4a")
        },
        {
          id: 58,
          english: "Yesterday",
          native: "Nyɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɛ.m4a")
        },
        {
          id: 59,
          english: "Next week",
          native: "Otsi ni baa lɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/otsi_ni_baa_lɛ.m4a")
        },
        {
          id: 88,
          english: "Last week",
          native: "nyɛsɛɛ otsi lɛ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɛsɛɛ_otsi_lɛ.m4a")
        }
      ],
      questions: [
        {
          id: 422,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Today' in Ga?",
          options: [
            { id: 1, text: "Ŋmɛnɛ" },
            { id: 2, text: "Wɔ" },
            { id: 3, text: "Nyɛ" },
            { id: 4, text: "Otsi ni baa lɛ" }
          ],
          correctOptionId: 1,
          hints: ["The current day"],
          explanation: "Ŋmɛnɛ = Today in Ga."
        },
        // {
        //   id: 423,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English translation.",
        //   question: "What did the speaker say?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/wɔ.m4a"),
        //   options: [
        //     { id: 1, text: "Today" },
        //     { id: 2, text: "Tomorrow" },
        //     { id: 3, text: "Yesterday" },
        //     { id: 4, text: "Next week" }
        //   ],
        //   correctOptionId: 2,
        //   hints: ["The day after today"],
        //   explanation: "You heard 'Wɔ' which means Tomorrow in Ga."
        // },
        {
          id: 424,
          type: "drag_drop",
          instruction: "Complete the Ga phrase by dragging the correct word.",
          sentence: "[_____] ni baa lɛ (Next week)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Otsi" },
            { id: "opt2", text: "Ŋmɛnɛ" },
            { id: "opt3", text: "Nyɛ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["otsi = week"],
          explanation: "Otsi ni baa lɛ = Next week in Ga."
        }
      ]
    },

    {
      id: "4-9",
      type: "words",
      title: "Days of the Week",
      icon: "calendar-outline",
      description: "Learn the seven days of the week in Ga",
      words: ["Ju", "Jufɔ", "Shɔ", "Soo", "Sohaa", "Hɔɔ", "Hɔgbaa"],
      vocabulary: [
        {
          id: 89,
          english: "Monday",
          native: "Ju",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/ju.m4a")
        },
        {
          id: 90,
          english: "Tuesday",
          native: "Jufɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/jufɔ.m4a")
        },
        {
          id: 91,
          english: "Wednesday",
          native: "Shɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/shɔ.m4a")
        },
        {
          id: 92,
          english: "Thursday",
          native: "Soo",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/soo.m4a")
        },
        {
          id: 93,
          english: "Friday",
          native: "Sohaa",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/sohaa.m4a")
        },
        {
          id: 94,
          english: "Saturday",
          native: "Hɔɔ",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/hɔɔ.m4a")
        },
        {
          id: 95,
          english: "Sunday",
          native: "Hɔgbaa",
          // audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/hɔgbaa.m4a")
        }
      ],
      questions: [
        {
          id: 425,
          type: "multiple_choice",
          instruction: "Select the correct Ga word.",
          question: "What is 'Monday' in Ga?",
          options: [
            { id: 1, text: "Ju" },
            { id: 2, text: "Jufɔ" },
            { id: 3, text: "Shɔ" },
            { id: 4, text: "Soo" }
          ],
          correctOptionId: 1,
          hints: ["The first day of the week"],
          explanation: "Ju = Monday in Ga."
        },
        // {
        //   id: 426,
        //   type: "listening_multiple_choice",
        //   instruction: "Listen to the audio and select the correct English translation.",
        //   question: "What day of the week did you hear?",
        //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/hɔɔ.m4a"),
        //   options: [
        //     { id: 1, text: "Monday" },
        //     { id: 2, text: "Wednesday" },
        //     { id: 3, text: "Friday" },
        //     { id: 4, text: "Saturday" }
        //   ],
        //   correctOptionId: 4,
        //   hints: ["The day before Sunday"],
        //   explanation: "You heard 'Hɔɔ' which means Saturday in Ga."
        // },
        {
          id: 427,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ga word.",
          sentence: "Ju, Jufɔ, Shɔ, ___, Sohaa, Hɔɔ, Hɔgbaa",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Soo" },
            { id: "opt2", text: "Sohaa" },
            { id: "opt3", text: "Hɔɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Thursday comes after Wednesday"],
          explanation: "Soo = Thursday. The pattern shows the days of the week in order."
        }
      ]
    }
  ],

  review: {
    id: "review-4",
    title: "Review: Numbers & Time",
    icon: "refresh-outline",
    description: "Review all the numbers, time, and days you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Ga number.",
        question: "What is 8 in Ga?",
        options: [
          { id: 1, text: "Ekpaa" },
          { id: 2, text: "Kpawo" },
          { id: 3, text: "Kpaanyɔ" },
          { id: 4, text: "Nɛɛhu" }
        ],
        correctOptionId: 3,
        hints: ["Comes after seven"],
        explanation: "Kpaanyɔ = Eight in Ga."
      },
      // {
      //   id: 502,
      //   type: "listening_multiple_choice",
      //   instruction: "Listen to the audio and select the correct English number.",
      //   question: "What number did you hear?",
      //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/ejwɛ.m4a"),
      //   options: [
      //     { id: 1, text: "2" },
      //     { id: 2, text: "3" },
      //     { id: 3, text: "4" },
      //     { id: 4, text: "5" }
      //   ],
      //   correctOptionId: 3,
      //   hints: ["Sounds like 'eh-jweh'"],
      //   explanation: "You heard 'Ejwɛ' which means Four in Ga."
      // },
      {
        id: 503,
        type: "drag_drop",
        instruction: "Complete the pattern by dragging the correct Ga number.",
        sentence: "Ekome, Enyɔ, ___, Ejwɛ, Enumɔ",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Etɛ" },
          { id: "opt2", text: "Ekpaa" },
          { id: "opt3", text: "Nyɔŋma" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["Three comes after two"],
        explanation: "Etɛ = Three."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ga number.",
        question: "What is 50 in Ga?",
        options: [
          { id: 1, text: "Nyɔŋmai enyɔ" },
          { id: 2, text: "Nyɔŋmai enumɔ" },
          { id: 3, text: "Nyɔŋmai ejwɛ" },
          { id: 4, text: "Nyɔŋmai etɛ" }
        ],
        correctOptionId: 2,
        hints: ["Five tens"],
        explanation: "Nyɔŋmai enumɔ = Fifty in Ga."
      },
      // {
      //   id: 505,
      //   type: "listening_multiple_choice",
      //   instruction: "Listen to the audio and select the correct English number.",
      //   question: "What number did you hear?",
      //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔŋmai_kpawo.m4a"),
      //   options: [
      //     { id: 1, text: "70" },
      //     { id: 2, text: "60" },
      //     { id: 3, text: "80" },
      //     { id: 4, text: "90" }
      //   ],
      //   correctOptionId: 1,
      //   hints: ["Seven tens"],
      //   explanation: "You heard 'Nyɔŋmai kpawo' which means Seventy in Ga."
      // },
      {
        id: 506,
        type: "drag_drop",
        instruction: "Complete the pattern by dragging the correct Ga number.",
        sentence: "Nyɔŋmai enyɔ, ___, Nyɔŋmai ejwɛ, Nyɔŋmai enumɔ",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Nyɔŋmai ekpaa" },
          { id: "opt2", text: "Nyɔŋmai etɛ" },
          { id: "opt3", text: "Nyɔŋmai kpaanyɔ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt2" },
        hints: ["Thirty comes after twenty"],
        explanation: "Nyɔŋmai etɛ = Thirty."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Ga phrase.",
        question: "How do you say 'It is three o'clock' in Ga?",
        options: [
          { id: 1, text: "ŋmɛjii enyiɛ atswa?" },
          { id: 2, text: "Atswa ŋmɛjii etɛ" },
          { id: 3, text: "Leebi" },
          { id: 4, text: "Nyɔɔŋ" }
        ],
        correctOptionId: 2,
        hints: ["Atswa = It is", "etɛ = three"],
        explanation: "Atswa ŋmɛjii etɛ = It is three o'clock."
      },
      // {
      //   id: 508,
      //   type: "listening_multiple_choice",
      //   instruction: "Listen to the audio and select the correct English translation.",
      //   question: "What did the speaker say?",
      //   audioUrl: require("../../../../assets/audio/ga/beginner/chapter4/nyɔɔŋ.m4a"),
      //   options: [
      //     { id: 1, text: "In the morning" },
      //     { id: 2, text: "At night" },
      //     { id: 3, text: "Today" },
      //     { id: 4, text: "Tomorrow" }
      //   ],
      //   correctOptionId: 2,
      //   hints: ["Nyɔɔŋ = night"],
      //   explanation: "You heard 'Nyɔɔŋ' which means At night."
      // },
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Tomorrow' in Ga?",
        options: [
          { id: 1, text: "Ŋmɛnɛ" },
          { id: 2, text: "Wɔ" },
          { id: 3, text: "Nyɛ" },
          { id: 4, text: "Otsi ni baa lɛ" }
        ],
        correctOptionId: 2,
        hints: ["The day after today"],
        explanation: "Wɔ = Tomorrow in Ga."
      },
      {
        id: 510,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Sunday' in Ga?",
        options: [
          { id: 1, text: "Ju" },
          { id: 2, text: "Hɔɔ" },
          { id: 3, text: "Sohaa" },
          { id: 4, text: "Hɔgbaa" }
        ],
        correctOptionId: 4,
        hints: ["The last day of the week"],
        explanation: "Hɔgbaa = Sunday in Ga."
      },
      {
        id: 511,
        type: "multiple_choice",
        instruction: "Select the correct Ga word.",
        question: "What is 'Saturday' in Ga?",
        options: [
          { id: 1, text: "Hɔɔ" },
          { id: 2, text: "Sohaa" },
          { id: 3, text: "Soo" },
          { id: 4, text: "Shɔ" }
        ],
        correctOptionId: 1,
        hints: ["The day before Sunday"],
        explanation: "Hɔɔ = Saturday in Ga."
      },
      {
        id: 512,
        type: "drag_drop",
        instruction: "Complete the pattern by dragging the correct Ga number.",
        sentence: "Nyɔŋma kɛ ekome, Nyɔŋma kɛ enyɔ, Nyɔŋma kɛ etɛ, ___, Nyɔŋma kɛ enumɔ",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Nyɔŋma kɛ ejwɛ" },
          { id: "opt2", text: "Nyɔŋma kɛ ekpaa" },
          { id: "opt3", text: "Nyɔŋmai enyɔ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["Fourteen comes after thirteen"],
        explanation: "Nyɔŋma kɛ ejwɛ = Fourteen."
      }
    ]
  }
};