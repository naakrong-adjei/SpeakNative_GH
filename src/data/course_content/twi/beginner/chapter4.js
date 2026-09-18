export default {
  id: 4,
  title: "Numbers & Time",
  description: "Learn numbers, time, and days in Twi",
  icon: "calculator-outline",
  totalXp: 25,
  difficulty: "Beginner",

  sections: [
    {
      id: "4-1",
      type: "words",
      title: "Numbers 1–5",
      icon: "calculator-outline",
      description: "Learn numbers one to five in Twi",
      words: ["Baako", "Mmienu", "Mmiɛnsa", "Enan", "Enum"],
      vocabulary: [
        {
          id: 91,
          english: "One",
          native: "Baako",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/baako.m4a")
        },
        {
          id: 92,
          english: "Two",
          native: "Mmienu",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/mmienu.m4a")
        },
        {
          id: 93,
          english: "Three",
          native: "Mmiɛnsa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/mmiɛnsa.m4a")
        },
        {
          id: 94,
          english: "Four",
          native: "Enan",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/enan.m4a")
        },
        {
          id: 95,
          english: "Five",
          native: "Enum",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/enum.m4a")
        }
      ],
      questions: [
        {
          id: 403,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Three' in Twi?",
          options: [
            { id: 4, text: "Enum" },
            { id: 1, text: "Baako" },
            { id: 3, text: "Mmiɛnsa" },
            { id: 2, text: "Mmienu" }
          ],
          correctOptionId: 3,
          hints: ["Comes after two"],
          explanation: "Mmiɛnsa = Three in Twi."
        },
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'One' in Twi?",
          options: [
            { id: 3, text: "Mmiɛnsa" },
            { id: 1, text: "Baako" },
            { id: 4, text: "Enan" },
            { id: 2, text: "Mmienu" }
          ],
          correctOptionId: 1,
          hints: ["The first number"],
          explanation: "Baako = One in Twi."
        },
        {
          id: 405,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Five' in Twi?",
          options: [
            { id: 2, text: "Mmiɛnsa" },
            { id: 4, text: "Enum" },
            { id: 1, text: "Baako" },
            { id: 3, text: "Enan" }
          ],
          correctOptionId: 4,
          hints: ["Comes after four"],
          explanation: "Enum = Five in Twi."
        },
        {
          id: 402,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/mmienu.m4a"),
          options: [
            { id: 4, text: "Four" },
            { id: 2, text: "Two" },
            { id: 1, text: "One" },
            { id: 3, text: "Three" }
          ],
          correctOptionId: 2,
          hints: ["Comes after one"],
          explanation: "You heard 'Mmienu' which means Two in Twi."
        },
        {
          id: 404,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/enan.m4a"),
          options: [
            { id: 1, text: "Two" },
            { id: 4, text: "Five" },
            { id: 3, text: "Four" },
            { id: 2, text: "Three" }
          ],
          correctOptionId: 3,
          hints: ["Comes after three"],
          explanation: "You heard 'Enan' which means Four in Twi."
        }
      ]
    },

    {
      id: "4-2",
      type: "words",
      title: "Numbers 6–10",
      icon: "calculator-outline",
      description: "Learn numbers six to ten in Twi",
      words: ["Nsia", "Nson", "Nwotwe", "Nkron", "Edu"],
      vocabulary: [
        {
          id: 96,
          english: "Six",
          native: "Nsia",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/nsia.m4a")
        },
        {
          id: 97,
          english: "Seven",
          native: "Nson",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/nson.m4a")
        },
        {
          id: 98,
          english: "Eight",
          native: "Nwotwe",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/nwotwe.m4a")
        },
        {
          id: 99,
          english: "Nine",
          native: "Nkron",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/nkron.m4a")
        },
        {
          id: 100,
          english: "Ten",
          native: "Edu",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/edu.m4a")
        }
      ],
      questions: [
        {
          id: 408,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Eight' in Twi?",
          options: [
            { id: 4, text: "Edu" },
            { id: 2, text: "Nson" },
            { id: 3, text: "Nwotwe" },
            { id: 1, text: "Nsia" }
          ],
          correctOptionId: 3,
          hints: ["Comes after seven"],
          explanation: "Nwotwe = Eight in Twi."
        },
        {
          id: 406,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Six' in Twi?",
          options: [
            { id: 2, text: "Nson" },
            { id: 4, text: "Nkron" },
            { id: 1, text: "Nsia" },
            { id: 3, text: "Nwotwe" }
          ],
          correctOptionId: 1,
          hints: ["Comes after five"],
          explanation: "Nsia = Six in Twi."
        },
        {
          id: 410,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Ten' in Twi?",
          options: [
            { id: 3, text: "Nkron" },
            { id: 1, text: "Nsia" },
            { id: 4, text: "Edu" },
            { id: 2, text: "Nwotwe" }
          ],
          correctOptionId: 4,
          hints: ["Comes after nine"],
          explanation: "Edu = Ten in Twi."
        },
        {
          id: 409,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/nkron.m4a"),
          options: [
            { id: 1, text: "Seven" },
            { id: 4, text: "Ten" },
            { id: 2, text: "Eight" },
            { id: 3, text: "Nine" }
          ],
          correctOptionId: 3,
          hints: ["Comes after eight"],
          explanation: "You heard 'Nkron' which means Nine in Twi."
        },
        {
          id: 407,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/nson.m4a"),
          options: [
            { id: 3, text: "Eight" },
            { id: 2, text: "Seven" },
            { id: 4, text: "Nine" },
            { id: 1, text: "Six" }
          ],
          correctOptionId: 2,
          hints: ["Comes after six"],
          explanation: "You heard 'Nson' which means Seven in Twi."
        }
      ]
    },

    {
      id: "4-3",
      type: "words",
      title: "Numbers 11–15",
      icon: "calculator-outline",
      description: "Learn numbers eleven to fifteen in Twi",
      words: ["Dubaako", "Dummienu", "Dummiɛnsa", "Dunnan", "Dunnum"],
      vocabulary: [
        {
          id: 101,
          english: "Eleven",
          native: "Dubaako",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/dubaako.m4a")
        },
        {
          id: 102,
          english: "Twelve",
          native: "Dummienu",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/dummienu.m4a")
        },
        {
          id: 103,
          english: "Thirteen",
          native: "Dummiɛnsa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/dummiɛnsa.m4a")
        },
        {
          id: 104,
          english: "Fourteen",
          native: "Dunnan",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/dunnan.m4a")
        },
        {
          id: 105,
          english: "Fifteen",
          native: "Dunnum",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/dunnum.m4a")
        }
      ],
      questions: [
        {
          id: 413,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Thirteen' in Twi?",
          options: [
            { id: 1, text: "Dubaako" },
            { id: 4, text: "Dunnum" },
            { id: 3, text: "Dummiɛnsa" },
            { id: 2, text: "Dummienu" }
          ],
          correctOptionId: 3,
          hints: ["Ten plus three"],
          explanation: "Dummiɛnsa = Thirteen in Twi."
        },
        {
          id: 411,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Eleven' in Twi?",
          options: [
            { id: 4, text: "Dunnan" },
            { id: 2, text: "Dummienu" },
            { id: 1, text: "Dubaako" },
            { id: 3, text: "Dummiɛnsa" }
          ],
          correctOptionId: 1,
          hints: ["Ten plus one"],
          explanation: "Dubaako = Eleven in Twi."
        },
        {
          id: 415,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Fifteen' in Twi?",
          options: [
            { id: 2, text: "Dummiɛnsa" },
            { id: 3, text: "Dunnan" },
            { id: 4, text: "Dunnum" },
            { id: 1, text: "Dubaako" }
          ],
          correctOptionId: 4,
          hints: ["Ten plus five"],
          explanation: "Dunnum = Fifteen in Twi."
        },
        {
          id: 414,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/dunnan.m4a"),
          options: [
            { id: 1, text: "Twelve" },
            { id: 4, text: "Fifteen" },
            { id: 2, text: "Thirteen" },
            { id: 3, text: "Fourteen" }
          ],
          correctOptionId: 3,
          hints: ["Ten plus four"],
          explanation: "You heard 'Dunnan' which means Fourteen in Twi."
        },
        {
          id: 412,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/dummienu.m4a"),
          options: [
            { id: 3, text: "Thirteen" },
            { id: 2, text: "Twelve" },
            { id: 4, text: "Fourteen" },
            { id: 1, text: "Eleven" }
          ],
          correctOptionId: 2,
          hints: ["Ten plus two"],
          explanation: "You heard 'Dummienu' which means Twelve in Twi."
        }
      ]
    },

    {
      id: "4-4",
      type: "words",
      title: "Numbers 20–50",
      icon: "calculator-outline",
      description: "Learn numbers twenty to fifty in Twi",
      words: ["Aduonu", "Aduasa", "Aduanan", "Aduonum"],
      vocabulary: [
        {
          id: 106,
          english: "Twenty",
          native: "Aduonu",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduonu.m4a")
        },
        {
          id: 107,
          english: "Thirty",
          native: "Aduasa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduasa.m4a")
        },
        {
          id: 108,
          english: "Forty",
          native: "Aduanan",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduanan.m4a")
        },
        {
          id: 109,
          english: "Fifty",
          native: "Aduonum",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduonum.m4a")
        }
      ],
      questions: [
        {
          id: 418,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Forty' in Twi?",
          options: [
            { id: 1, text: "Aduonu" },
            { id: 4, text: "Aduonum" },
            { id: 3, text: "Aduanan" },
            { id: 2, text: "Aduasa" }
          ],
          correctOptionId: 3,
          hints: ["Four tens"],
          explanation: "Aduanan = Forty in Twi."
        },
        {
          id: 416,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Twenty' in Twi?",
          options: [
            { id: 2, text: "Aduasa" },
            { id: 1, text: "Aduonu" },
            { id: 4, text: "Aduonum" },
            { id: 3, text: "Aduanan" }
          ],
          correctOptionId: 1,
          hints: ["Two tens"],
          explanation: "Aduonu = Twenty in Twi."
        },
        {
          id: 419,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduonum.m4a"),
          options: [
            { id: 2, text: "Thirty" },
            { id: 4, text: "Fifty" },
            { id: 1, text: "Twenty" },
            { id: 3, text: "Forty" }
          ],
          correctOptionId: 4,
          hints: ["Five tens"],
          explanation: "You heard 'Aduonum' which means Fifty in Twi."
        },
        {
          id: 417,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduasa.m4a"),
          options: [
            { id: 3, text: "Forty" },
            { id: 2, text: "Thirty" },
            { id: 4, text: "Fifty" },
            { id: 1, text: "Twenty" }
          ],
          correctOptionId: 2,
          hints: ["Three tens"],
          explanation: "You heard 'Aduasa' which means Thirty in Twi."
        },
        {
          id: 420,
          type: "drag_drop",
          instruction: "Complete the Twi number by dragging the correct word.",
          sentence: "Aduo[_____] (Fifty)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "num" },
            { id: "opt2", text: "nu" },
            { id: "opt3", text: "sa" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Aduonum = Fifty"],
          explanation: "Aduonum = Fifty in Twi."
        }
      ]
    },

    {
      id: "4-5",
      type: "words",
      title: "Numbers 60–100",
      icon: "calculator-outline",
      description: "Learn numbers sixty to one hundred in Twi",
      words: ["Aduosia", "Aduoson", "Aduowotwe", "Aduokron", "Ɔha"],
      vocabulary: [
        {
          id: 110,
          english: "Sixty",
          native: "Aduosia",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduosia.m4a")
        },
        {
          id: 111,
          english: "Seventy",
          native: "Aduoson",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduoson.m4a")
        },
        {
          id: 112,
          english: "Eighty",
          native: "Aduowotwe",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduowotwe.m4a")
        },
        {
          id: 113,
          english: "Ninety",
          native: "Aduokron",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduokron.m4a")
        },
        {
          id: 114,
          english: "One hundred",
          native: "Ɔha",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/ɔha.m4a")
        }
      ],
      questions: [
        {
          id: 423,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Eighty' in Twi?",
          options: [
            { id: 4, text: "Aduokron" },
            { id: 2, text: "Aduoson" },
            { id: 3, text: "Aduowotwe" },
            { id: 1, text: "Aduosia" }
          ],
          correctOptionId: 3,
          hints: ["Eight tens"],
          explanation: "Aduowotwe = Eighty in Twi."
        },
        {
          id: 421,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'Sixty' in Twi?",
          options: [
            { id: 2, text: "Aduoson" },
            { id: 4, text: "Aduokron" },
            { id: 1, text: "Aduosia" },
            { id: 3, text: "Aduowotwe" }
          ],
          correctOptionId: 1,
          hints: ["Six tens"],
          explanation: "Aduosia = Sixty in Twi."
        },
        {
          id: 425,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "What is 'One hundred' in Twi?",
          options: [
            { id: 3, text: "Aduokron" },
            { id: 1, text: "Aduosia" },
            { id: 4, text: "Ɔha" },
            { id: 2, text: "Aduowotwe" }
          ],
          correctOptionId: 4,
          hints: ["Ten tens"],
          explanation: "Ɔha = One hundred in Twi."
        },
        {
          id: 424,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduokron.m4a"),
          options: [
            { id: 1, text: "Sixty" },
            { id: 4, text: "Ninety" },
            { id: 2, text: "Seventy" },
            { id: 3, text: "Eighty" }
          ],
          correctOptionId: 4,
          hints: ["Nine tens"],
          explanation: "You heard 'Aduokron' which means Ninety in Twi."
        },
        {
          id: 422,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduoson.m4a"),
          options: [
            { id: 3, text: "Eighty" },
            { id: 2, text: "Seventy" },
            { id: 4, text: "Ninety" },
            { id: 1, text: "Sixty" }
          ],
          correctOptionId: 2,
          hints: ["Seven tens"],
          explanation: "You heard 'Aduoson' which means Seventy in Twi."
        }
      ]
    },

    {
      id: "4-6",
      type: "words",
      title: "Compound Numbers",
      icon: "extension-puzzle-outline",
      description: "Learn how to form compound numbers in Twi",
      words: [
        "Aduonum nson",
        "Aduosia mmienu",
        "Aduowotwe nwotwe",
        "Aduokron mmiɛnsa",
        "Ɔha ne aduasa"
      ],
      vocabulary: [
        {
          id: 115,
          english: "57",
          native: "Aduonum nson",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduonum_nson.m4a")
        },
        {
          id: 116,
          english: "62",
          native: "Aduosia mmienu",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduosia_mmienu.m4a")
        },
        {
          id: 117,
          english: "88",
          native: "Aduowotwe nwotwe",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduowotwe_nwotwe.m4a")
        },
        {
          id: 118,
          english: "93",
          native: "Aduokron mmiɛnsa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduokron_mmiɛnsa.m4a")
        },
        {
          id: 119,
          english: "130",
          native: "Ɔha ne aduasa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/ɔha_ne_aduasa.m4a")
        }
      ],
      questions: [
        {
          id: 428,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "How do you say '88' in Twi?",
          options: [
            { id: 4, text: "Ɔha ne aduasa" },
            { id: 2, text: "Aduosia mmienu" },
            { id: 3, text: "Aduowotwe nwotwe" },
            { id: 1, text: "Aduonum nson" }
          ],
          correctOptionId: 3,
          hints: ["Aduowotwe = eighty", "nwotwe = eight"],
          explanation: "Aduowotwe nwotwe = 88 in Twi."
        },
        {
          id: 426,
          type: "multiple_choice",
          instruction: "Select the correct Twi number.",
          question: "How do you say '57' in Twi?",
          options: [
            { id: 2, text: "Aduosia mmienu" },
            { id: 1, text: "Aduonum nson" },
            { id: 4, text: "Aduokron mmiɛnsa" },
            { id: 3, text: "Aduowotwe nwotwe" }
          ],
          correctOptionId: 1,
          hints: ["Aduonum = fifty", "nson = seven"],
          explanation: "Aduonum nson = 57 in Twi."
        },
        {
          id: 430,
          type: "drag_drop",
          instruction: "Complete the Twi number by dragging the correct word.",
          sentence: "Ɔha ne [_____] (130)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "aduasa" },
            { id: "opt2", text: "aduonu" },
            { id: "opt3", text: "aduanan" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["Ɔha = one hundred", "ne = and", "aduasa = thirty"],
          explanation: "Ɔha ne aduasa = 130 in Twi."
        },
        {
          id: 429,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduokron_mmiɛnsa.m4a"),
          options: [
            { id: 1, text: "57" },
            { id: 4, text: "93" },
            { id: 2, text: "62" },
            { id: 3, text: "88" }
          ],
          correctOptionId: 4,
          hints: ["Aduokron = ninety", "mmiɛnsa = three"],
          explanation: "You heard 'Aduokron mmiɛnsa' which means 93 in Twi."
        },
        {
          id: 427,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduosia_mmienu.m4a"),
          options: [
            { id: 3, text: "88" },
            { id: 2, text: "62" },
            { id: 4, text: "93" },
            { id: 1, text: "57" }
          ],
          correctOptionId: 2,
          hints: ["Aduosia = sixty", "mmienu = two"],
          explanation: "You heard 'Aduosia mmienu' which means 62 in Twi."
        }
      ]
    },

    {
      id: "4-7",
      type: "phrases",
      title: "Telling Time",
      icon: "time-outline",
      description: "Learn how to tell time in Twi",
      words: ["Abɔ sɛn?", "Abɔ nnɔn mmiɛnsa", "Anɔpa", "Anadwo"],
      vocabulary: [
        {
          id: 120,
          english: "What time is it?",
          native: "Abɔ sɛn?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/abɔ_sɛn.m4a")
        },
        {
          id: 121,
          english: "It is three o'clock",
          native: "Abɔ nnɔn mmiɛnsa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/abɔ_nnɔn_mmiɛnsa.m4a")
        },
        {
          id: 122,
          english: "In the morning",
          native: "Anɔpa",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/anɔpa.m4a")
        },
        {
          id: 123,
          english: "At night",
          native: "Anadwo",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/anadwo.m4a")
        }
      ],
      questions: [
        {
          id: 433,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you say 'In the morning' in Twi?",
          options: [
            { id: 4, text: "Anadwo" },
            { id: 1, text: "Abɔ sɛn?" },
            { id: 3, text: "Anɔpa" },
            { id: 2, text: "Abɔ nnɔn mmiɛnsa" }
          ],
          correctOptionId: 3,
          hints: ["Morning time"],
          explanation: "Anɔpa = In the morning in Twi."
        },
        {
          id: 431,
          type: "multiple_choice",
          instruction: "Select the correct Twi phrase.",
          question: "How do you ask 'What time is it?' in Twi?",
          options: [
            { id: 2, text: "Abɔ nnɔn mmiɛnsa" },
            { id: 1, text: "Abɔ sɛn?" },
            { id: 4, text: "Anadwo" },
            { id: 3, text: "Anɔpa" }
          ],
          correctOptionId: 1,
          hints: ["Question about time"],
          explanation: "Abɔ sɛn? = What time is it? in Twi."
        },
        {
          id: 435,
          type: "drag_drop",
          instruction: "Complete the Twi phrase by dragging the correct word.",
          sentence: "Abɔ nnɔn [_____] (It is three o'clock)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "mmiɛnsa" },
            { id: "opt2", text: "mmienu" },
            { id: "opt3", text: "baako" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["mmiɛnsa = three"],
          explanation: "Abɔ nnɔn mmiɛnsa = It is three o'clock in Twi."
        },
        {
          id: 434,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/anadwo.m4a"),
          options: [
            { id: 2, text: "It is three o'clock" },
            { id: 4, text: "At night" },
            { id: 1, text: "What time is it?" },
            { id: 3, text: "In the morning" }
          ],
          correctOptionId: 4,
          hints: ["Night time"],
          explanation: "You heard 'Anadwo' which means 'At night' in Twi."
        },
        {
          id: 432,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/abɔ_nnɔn_mmiɛnsa.m4a"),
          options: [
            { id: 3, text: "In the morning" },
            { id: 2, text: "It is three o'clock" },
            { id: 4, text: "At night" },
            { id: 1, text: "What time is it?" }
          ],
          correctOptionId: 2,
          hints: ["nnɔn mmiɛnsa = three o'clock"],
          explanation: "You heard 'Abɔ nnɔn mmiɛnsa' which means 'It is three o'clock' in Twi."
        }
      ]
    },

    {
      id: "4-8",
      type: "words",
      title: "Days & Relative Time",
      icon: "calendar-outline",
      description: "Learn relative time expressions in Twi",
      words: ["Ɛnnɛ", "Ɔkyena", "Ɛnora", "Nnawɔtwe a ɛdi hɔ"],
      vocabulary: [
        {
          id: 124,
          english: "Today",
          native: "Ɛnnɛ",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/ɛnnɛ.m4a")
        },
        {
          id: 125,
          english: "Tomorrow",
          native: "Ɔkyena",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/ɔkyena.m4a")
        },
        {
          id: 126,
          english: "Yesterday",
          native: "Ɛnora",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/ɛnora.m4a")
        },
        {
          id: 127,
          english: "Next week",
          native: "Nnawɔtwe a ɛdi hɔ",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/nnawɔtwe_a_ɛdi_hɔ.m4a")
        }
      ],
      questions: [
        {
          id: 438,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Yesterday' in Twi?",
          options: [
            { id: 4, text: "Nnawɔtwe a ɛdi hɔ" },
            { id: 2, text: "Ɔkyena" },
            { id: 3, text: "Ɛnora" },
            { id: 1, text: "Ɛnnɛ" }
          ],
          correctOptionId: 3,
          hints: ["The day before today"],
          explanation: "Ɛnora = Yesterday in Twi."
        },
        {
          id: 436,
          type: "multiple_choice",
          instruction: "Select the correct Twi word.",
          question: "What is 'Today' in Twi?",
          options: [
            { id: 2, text: "Ɔkyena" },
            { id: 1, text: "Ɛnnɛ" },
            { id: 4, text: "Nnawɔtwe a ɛdi hɔ" },
            { id: 3, text: "Ɛnora" }
          ],
          correctOptionId: 1,
          hints: ["The current day"],
          explanation: "Ɛnnɛ = Today in Twi."
        },
        {
          id: 439,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/nnawɔtwe_a_ɛdi_hɔ.m4a"),
          options: [
            { id: 3, text: "Yesterday" },
            { id: 4, text: "Next week" },
            { id: 1, text: "Today" },
            { id: 2, text: "Tomorrow" }
          ],
          correctOptionId: 4,
          hints: ["The week after this one"],
          explanation: "You heard 'Nnawɔtwe a ɛdi hɔ' which means Next week in Twi."
        },
        {
          id: 437,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/ɔkyena.m4a"),
          options: [
            { id: 3, text: "Yesterday" },
            { id: 2, text: "Tomorrow" },
            { id: 4, text: "Next week" },
            { id: 1, text: "Today" }
          ],
          correctOptionId: 2,
          hints: ["The day after today"],
          explanation: "You heard 'Ɔkyena' which means Tomorrow in Twi."
        }
      ]
    },

    {
      id: "4-9",
      type: "words",
      title: "Days of the Week",
      icon: "calendar-outline",
      description: "Learn the days of the week in Twi",
      words: [
        "Dwoada",
        "Benada",
        "Wukuada",
        "Yawoada",
        "Fida",
        "Memeneda",
        "Kwasiada"
      ],
      vocabulary: [
        {
          id: 128,
          english: "Monday",
          native: "Dwoada",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/dwoada.m4a")
        },
        {
          id: 129,
          english: "Tuesday",
          native: "Benada",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/benada.m4a")
        },
        {
          id: 130,
          english: "Wednesday",
          native: "Wukuada",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/wukuada.m4a")
        },
        {
          id: 131,
          english: "Thursday",
          native: "Yawoada",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/yawoada.m4a")
        },
        {
          id: 132,
          english: "Friday",
          native: "Fida",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/fiada.m4a")
        },
        {
          id: 133,
          english: "Saturday",
          native: "Memeneda",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/memeneda.m4a")
        },
        {
          id: 134,
          english: "Sunday",
          native: "Kwasiada",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/kwasiada.m4a")
        }
      ],
      questions: [
        {
          id: 442,
          type: "multiple_choice",
          instruction: "Select the correct Twi day.",
          question: "What is 'Wednesday' in Twi?",
          options: [
            { id: 4, text: "Fida" },
            { id: 2, text: "Benada" },
            { id: 3, text: "Wukuada" },
            { id: 1, text: "Dwoada" }
          ],
          correctOptionId: 3,
          hints: ["Third day of the week"],
          explanation: "Wukuada = Wednesday in Twi."
        },
        {
          id: 440,
          type: "multiple_choice",
          instruction: "Select the correct Twi day.",
          question: "What is 'Monday' in Twi?",
          options: [
            { id: 2, text: "Benada" },
            { id: 1, text: "Dwoada" },
            { id: 4, text: "Yawoada" },
            { id: 3, text: "Wukuada" }
          ],
          correctOptionId: 1,
          hints: ["First day of the week"],
          explanation: "Dwoada = Monday in Twi."
        },
        {
          id: 445,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What day did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/memeneda.m4a"),
          options: [
            { id: 1, text: "Thursday" },
            { id: 4, text: "Sunday" },
            { id: 3, text: "Saturday" },
            { id: 2, text: "Friday" }
          ],
          correctOptionId: 3,
          hints: ["Sixth day of the week"],
          explanation: "You heard 'Memeneda' which means Saturday in Twi."
        },
        {
          id: 443,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What day did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/yawoada.m4a"),
          options: [
            { id: 2, text: "Wednesday" },
            { id: 3, text: "Thursday" },
            { id: 4, text: "Friday" },
            { id: 1, text: "Tuesday" }
          ],
          correctOptionId: 3,
          hints: ["Fourth day of the week"],
          explanation: "You heard 'Yawoada' which means Thursday in Twi."
        },
        {
          id: 446,
          type: "multiple_choice",
          instruction: "Select the correct Twi day.",
          question: "What is 'Sunday' in Twi?",
          options: [
            { id: 3, text: "Memeneda" },
            { id: 1, text: "Dwoada" },
            { id: 4, text: "Kwasiada" },
            { id: 2, text: "Fida" }
          ],
          correctOptionId: 4,
          hints: ["Last day of the week"],
          explanation: "Kwasiada = Sunday in Twi."
        },
        {
          id: 441,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What day did you hear?",
          audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/benada.m4a"),
          options: [
            { id: 4, text: "Thursday" },
            { id: 2, text: "Tuesday" },
            { id: 1, text: "Monday" },
            { id: 3, text: "Wednesday" }
          ],
          correctOptionId: 2,
          hints: ["Second day of the week"],
          explanation: "You heard 'Benada' which means Tuesday in Twi."
        },
        {
          id: 444,
          type: "multiple_choice",
          instruction: "Select the correct Twi day.",
          question: "What is 'Friday' in Twi?",
          options: [
            { id: 1, text: "Dwoada" },
            { id: 4, text: "Memeneda" },
            { id: 3, text: "Fida" },
            { id: 2, text: "Wukuada" }
          ],
          correctOptionId: 3,
          hints: ["Fifth day of the week"],
          explanation: "Fida = Friday in Twi."
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
        id: 455,
        type: "multiple_choice",
        instruction: "Select the correct Twi number.",
        question: "How do you say '62' in Twi?",
        options: [
          { id: 3, text: "Aduowotwe nwotwe" },
          { id: 2, text: "Aduosia mmienu" },
          { id: 4, text: "Aduokron mmiɛnsa" },
          { id: 1, text: "Aduonum nson" }
        ],
        correctOptionId: 2,
        hints: ["Aduosia = sixty", "mmienu = two"],
        explanation: "Aduosia mmienu = 62."
      },
      {
        id: 447,
        type: "multiple_choice",
        instruction: "Select the correct Twi number.",
        question: "What is 'Three' in Twi?",
        options: [
          { id: 4, text: "Enan" },
          { id: 1, text: "Baako" },
          { id: 3, text: "Mmiɛnsa" },
          { id: 2, text: "Mmienu" }
        ],
        correctOptionId: 3,
        hints: ["Comes after two"],
        explanation: "Mmiɛnsa = Three."
      },
      {
        id: 453,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What day did you hear?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/kwasiada.m4a"),
        options: [
          { id: 4, text: "Monday" },
          { id: 2, text: "Saturday" },
          { id: 3, text: "Sunday" },
          { id: 1, text: "Friday" }
        ],
        correctOptionId: 3,
        hints: ["Last day of the week"],
        explanation: "You heard 'Kwasiada' which means Sunday."
      },
      {
        id: 460,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What number did you hear?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/aduanan.m4a"),
        options: [
          { id: 2, text: "Thirty" },
          { id: 3, text: "Forty" },
          { id: 1, text: "Twenty" },
          { id: 4, text: "Fifty" }
        ],
        correctOptionId: 3,
        hints: ["Four tens"],
        explanation: "You heard 'Aduanan' which means Forty."
      },
      {
        id: 449,
        type: "multiple_choice",
        instruction: "Select the correct Twi number.",
        question: "What is 'Twenty' in Twi?",
        options: [
          { id: 4, text: "Aduonum" },
          { id: 2, text: "Aduasa" },
          { id: 1, text: "Aduonu" },
          { id: 3, text: "Aduanan" }
        ],
        correctOptionId: 1,
        hints: ["Two tens"],
        explanation: "Aduonu = Twenty."
      },
      {
        id: 457,
        type: "multiple_choice",
        instruction: "Select the correct Twi number.",
        question: "What is 'Fifteen' in Twi?",
        options: [
          { id: 3, text: "Dunnan" },
          { id: 4, text: "Dunnum" },
          { id: 1, text: "Dubaako" },
          { id: 2, text: "Dummiɛnsa" }
        ],
        correctOptionId: 4,
        hints: ["Ten plus five"],
        explanation: "Dunnum = Fifteen."
      },
      {
        id: 451,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you ask 'What time is it?' in Twi?",
        options: [
          { id: 4, text: "Anadwo" },
          { id: 2, text: "Abɔ nnɔn mmiɛnsa" },
          { id: 1, text: "Abɔ sɛn?" },
          { id: 3, text: "Anɔpa" }
        ],
        correctOptionId: 1,
        hints: ["Question about time"],
        explanation: "Abɔ sɛn? = What time is it?"
      },
      {
        id: 458,
        type: "multiple_choice",
        instruction: "Select the correct Twi day.",
        question: "What is 'Saturday' in Twi?",
        options: [
          { id: 4, text: "Dwoada" },
          { id: 2, text: "Memeneda" },
          { id: 1, text: "Fida" },
          { id: 3, text: "Kwasiada" }
        ],
        correctOptionId: 2,
        hints: ["Sixth day of the week"],
        explanation: "Memeneda = Saturday."
      },
      {
        id: 448,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What number did you hear?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/nson.m4a"),
        options: [
          { id: 3, text: "Eight" },
          { id: 1, text: "Six" },
          { id: 4, text: "Nine" },
          { id: 2, text: "Seven" }
        ],
        correctOptionId: 2,
        hints: ["Comes after six"],
        explanation: "You heard 'Nson' which means Seven."
      },
      {
        id: 456,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Yesterday' in Twi?",
        options: [
          { id: 4, text: "Nnawɔtwe a ɛdi hɔ" },
          { id: 3, text: "Ɛnora" },
          { id: 1, text: "Ɛnnɛ" },
          { id: 2, text: "Ɔkyena" }
        ],
        correctOptionId: 3,
        hints: ["The day before today"],
        explanation: "Ɛnora = Yesterday."
      },
      {
        id: 450,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What number did you hear?",
        audioUrl: require("../../../../assets/audio/twi/beginner/chapter4/ɔha.m4a"),
        options: [
          { id: 2, text: "Eighty" },
          { id: 4, text: "One hundred" },
          { id: 1, text: "Sixty" },
          { id: 3, text: "Ninety" }
        ],
        correctOptionId: 4,
        hints: ["Ten tens"],
        explanation: "You heard 'Ɔha' which means One hundred."
      },
      {
        id: 454,
        type: "multiple_choice",
        instruction: "Select the correct Twi day.",
        question: "What is 'Wednesday' in Twi?",
        options: [
          { id: 2, text: "Benada" },
          { id: 4, text: "Yawoada" },
          { id: 3, text: "Wukuada" },
          { id: 1, text: "Dwoada" }
        ],
        correctOptionId: 3,
        hints: ["Third day of the week"],
        explanation: "Wukuada = Wednesday."
      },
      {
        id: 459,
        type: "multiple_choice",
        instruction: "Select the correct Twi phrase.",
        question: "How do you say 'In the morning' in Twi?",
        options: [
          { id: 2, text: "Abɔ nnɔn mmiɛnsa" },
          { id: 3, text: "Anɔpa" },
          { id: 4, text: "Anadwo" },
          { id: 1, text: "Abɔ sɛn?" }
        ],
        correctOptionId: 3,
        hints: ["Morning time"],
        explanation: "Anɔpa = In the morning."
      },
      {
        id: 452,
        type: "multiple_choice",
        instruction: "Select the correct Twi word.",
        question: "What is 'Tomorrow' in Twi?",
        options: [
          { id: 3, text: "Ɛnora" },
          { id: 1, text: "Ɛnnɛ" },
          { id: 4, text: "Nnawɔtwe a ɛdi hɔ" },
          { id: 2, text: "Ɔkyena" }
        ],
        correctOptionId: 2,
        hints: ["The day after today"],
        explanation: "Ɔkyena = Tomorrow."
      }
    ]
  }
};