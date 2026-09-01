export default {
  id: 4,
  title: "Numbers & Time",
  description: "Learn numbers, telling time, and days of the week in Ewe",
  icon: "hash-outline",
  totalXp: 25,
  difficulty: "Beginner",

  sections: [
    {
      id: "4-1",
      type: "words",
      title: "Numbers 1-5",
      icon: "hash-outline",
      description: "Learn numbers one to five in Ewe",
      words: ["Ɖeka", "Eve", "Etɔ̃", "Ene", "Atɔ̃"],
      vocabulary: [
        {
          id: 44,
          english: "One",
          native: "Ɖeka",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/deka.m4a")
        },
        {
          id: 45,
          english: "Two",
          native: "Eve",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/eve.m4a")
        },
        {
          id: 46,
          english: "Three",
          native: "Etɔ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/etɔ̃.m4a")
        },
        {
          id: 52,
          english: "Four",
          native: "Ene",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/ene.m4a")
        },
        {
          id: 53,
          english: "Five",
          native: "Atɔ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/atɔ̃.m4a")
        }
      ],
      questions: [
        {
          id: 401,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 3 in Ewe?",
          options: [
            { id: 1, text: "Ɖeka" },
            { id: 2, text: "Eve" },
            { id: 3, text: "Etɔ̃" },
            { id: 4, text: "Ene" }
          ],
          correctOptionId: 3,
          hints: [
            "Has a tilde (̃)"
          ],
          explanation: "Etɔ̃ = Three in Ewe."
        },
        {
          id: 402,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English number.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/deka.m4a"),
          options: [
            { id: 1, text: "1"},
            { id: 2,text: "2"},
            { id: 3,text: "3"},
            { id: 4,text: "4"}
          ],
          correctOptionId: 1,
          hints: [
            "The smallest number"
          ],
          explanation: "You heard 'Ɖeka' which means One in Ewe."
        },
        {
          id: 403,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ewe number.",
          question: "Ɖeka, Eve, Etɔ̃, Ene, ___",
          blankId: "blank1",
          items: [
            {id: "opt1", text: "Atɔ̃"},
            {id: "opt2", text: "Ade"},
            {id: "opt3", text: "Ewo"}
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: [
            "Five comes after four"
          ],
          explanation: "Atɔ̃ = Five. The pattern counts from one to five."
        }
      ]
    },

    {
      id: "4-2",
      type: "words",
      title: "Numbers 6-10",
      icon: "hash-outline",
      description: "Learn numbers six to ten in Ewe",
      words: [ "Ade", "Adre","Enyi", "Asieke", "Ewo" ],
      vocabulary: [
        {
          id: 60,
          english: "Six",
          native: "Ade",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/ade.m4a")
        },
        {
          id: 61,
          english: "Seven",
          native: "Adre",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/adre.m4a")
        },
        {
          id: 62,
          english: "Eight",
          native: "Enyi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/enyi.m4a")
        },
        {
          id: 63,
          english: "Nine",
          native: "Asieke",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/asieke.m4a")
        },
        {
          id: 47,
          english: "Ten",
          native: "Ewo",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/ewo.m4a")
        }
      ],
      questions: [
        {
          id: 404,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 7 in Ewe?",
          options: [
            { id: 1, text: "Ade"},
            { id: 2, text: "Adre"},
            { id: 3, text: "Enyi"},
            { id: 4, text: "Asieke"}
          ],
          correctOptionId: 2,
          hints: [
            "Has an 'r' sound"
          ],
          explanation: "Adre = Seven in Ewe."
        },
        {
          id: 405,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English number.",
          question: "What number did you hear?",
          audioUrl: "/audio/ewe/beginner/ewo.mp3",
          options: [
            { id: 1,text: "8"},
            { id: 2,text: "9"},
            { id: 3,text: "10"},
            {id: 4,text: "11"}
          ],
          correctOptionId: 3,
          hints: [
            "Two digits"
          ],
          explanation: "You heard 'Ewo' which means Ten in Ewe."
        },
        {
          id: 406,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ewe number.",
          question: "Ade, Adre, ___, Asieke",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Atɔ̃" },
            { id: "opt2", text: "Enyi" },
            { id: "opt3", text: "Ewo" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt2"
          },
          hints: [
            "Eight comes after seven"
          ],
          explanation: "Enyi = Eight. The pattern counts from six to nine."
        }
      ]
    },

    {
      id: "4-3",
      type: "words",
      title: "Numbers 11-15",
      icon: "hash-outline",
      description: "Learn numbers eleven to fifteen in Ewe",
      words: [ "Wuiɖeka", "Wui eve", "Wui etɔ̃", "Wui ene", "Wui atɔ̃" ],
      vocabulary: [
        {
          id: 64,
          english: "Eleven",
          native: "Wuiɖeka",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/wui_deka.m4a")
        },
        {
          id: 65,
          english: "Twelve",
          native: "Wui eve",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/wui_eve.m4a")
        },
        {
          id: 66,
          english: "Thirteen",
          native: "Wui etɔ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/wui_etɔ̃.m4a")
        },
        {
          id: 67,
          english: "Fourteen",
          native: "Wui ene",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/wui_ene.m4a")
        },
        {
          id: 68,
          english: "Fifteen",
          native: "Wui atɔ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/wui_atɔ̃.m4a")
        }
      ],
      questions: [
        {
          id: 407,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 14 in Ewe?",
          options: [
            { id: 1, text: "Wuiɖeka" },
            { id: 2, text: "Wui eve" },
            { id: 3, text: "Wui etɔ̃" },
            { id: 4,text: "Wui ene" }
          ],
          correctOptionId: 4,
          hints: [
            "Wui = ten",
            "ene = four"
          ],
          explanation: "Wui ene = Fourteen in Ewe."
        },
        {
          id: 408,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English number.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/wui_atɔ̃.m4a"),
          options: [
            { id: 1, text: "11"},
            { id: 2, text: "13" },
            { id: 3, text: "14" },
            { id: 4, text: "15" }
          ],
          correctOptionId: 4,
          hints: [
            "Wui = ten",
            "atɔ̃ = five"
          ],
          explanation: "You heard 'Wui atɔ̃' which means Fifteen in Ewe."
        },
        {
          id: 409,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ewe number.",
          question: "Wuiɖeka, Wui eve, ___, Wui ene, Wui atɔ̃",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Wui etɔ̃" },
            { id: "opt2", text: "Wui ade" },
            { id: "opt3", text: "Ewo" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: [
            "Thirteen comes after twelve"
          ],
          explanation: "Wui etɔ̃ = Thirteen. The pattern counts from eleven to fifteen."
        }
      ]
    },

    {
      id: "4-4",
      type: "words",
      title: "Tens 20-50",
      icon: "calculator-outline",
      description: "Learn the tens from twenty to fifty in Ewe",
      words: [ "Blaeve", "Blaetɔ̃", "Blaene", "Blaatɔ̃" ],
      vocabulary: [
        {
          id: 54,
          english: "Twenty",
          native: "Blaeve",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaeve.m4a")
        },
        {
          id: 74,
          english: "Thirty",
          native: "Blaetɔ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaetɔ̃.m4a")
        },
        {
          id: 75,
          english: "Forty",
          native: "Blaene",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaene.m4a")
        },
        {
          id: 76,
          english: "Fifty",
          native: "Blaatɔ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaatɔ̃.m4a")
          
        }
      ],
      questions: [
        {
          id: 410,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 40 in Ewe?",
          options: [
            { id: 1, text: "Blaeve" },
            { id: 2, text: "Blaetɔ̃" },
            { id: 3, text: "Blaene" },
            { id: 4, text: "Blaatɔ̃" }
          ],
          correctOptionId: 3,
          hints: [
            "Four tens",
            "Bla + ene"
          ],
          explanation: "Blaene = Forty in Ewe."
        },
        {
          id: 411,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English number.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaetɔ̃.m4a"),
          options: [
            { id: 1, text: "20" },
            { id: 2, text: "30" },
            { id: 3, text: "40" },
            { id: 4, text: "50" }
          ],
          correctOptionId: 2,
          hints: [
            "Three tens"
          ],
          explanation: "You heard 'Blaetɔ̃' which means Thirty in Ewe."
        }
      ]
    },

    {
      id: "4-5",
      type: "words",
      title: "Tens 60-100",
      icon: "calculator-outline",
      description: "Learn the tens from sixty to one hundred in Ewe",
      words: [ "Blaade", "Blaadre", "Blaenyi", "Blaasieke", "Alafa ɖeka" ],
      vocabulary: [
        {
          id: 77,
          english: "Sixty",
          native: "Blaade",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaade.m4a")
        },
        {
          id: 78,
          english: "Seventy",
          native: "Blaadre",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaadre.m4a")
        },
        {
          id: 79,
          english: "Eighty",
          native: "Blaenyi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaenyi.m4a")
        },
        {
          id: 80,
          english: "Ninety",
          native: "Blaasieke",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaasieke.m4a")
        },
        {
          id: 55,
          english: "One hundred",
          native: "Alafa ɖeka",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/alafa_deka.m4a")
        }
      ],
      questions: [
        {
          id: 412,
          type: "multiple_choice",
          instruction: "Select the correct Ewe number.",
          question: "What is 90 in Ewe?",
          options: [
            { id: 1,text: "Blaade" },
            { id: 2, text: "Blaadre" },
            { id: 3, text: "Blaenyi" },
            { id: 4, text: "Blaasieke" }
          ],
          correctOptionId: 4,
          hints: [
            "Nine tens",
            "Bla + asieke"
          ],
          explanation: "Blaasieke = Ninety in Ewe."
        },
        {
          id: 413,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English number.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/alafa_deka.m4a"),
          options: [
            { id: 1, text: "50" },
            { id: 2, text: "75" },
            { id: 3, text: "90" },
            { id: 4, text: "100" }
          ],
          correctOptionId: 4,
          hints: [
            "Alafa = hundred",
            "ɖeka = one"
          ],
          explanation: "You heard 'Alafa ɖeka' which means One hundred in Ewe."
        }
      ]
    },

    {
      id: "4-6",
      type: "words",
      title: "Compound Numbers 21-25",
      icon: "calculator-outline",
      description: "Learn how to form compound numbers from twenty-one to twenty-five in Ewe",
      words: [ "Blaeve vɔ ɖeka", "Blaeve vɔ eve", "Blaeve vɔ etɔ̃", "Blaeve vɔ ene", "Blaeve vɔ atɔ̃" ],
      vocabulary: [
        {
          id: 69,
          english: "Twenty-one",
          native: "Blaeve vɔ ɖeka",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaeve_vɔ_deka.m4a")
        },
        {
          id: 70,
          english: "Twenty-two",
          native: "Blaeve vɔ eve",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaeve_vɔ_eve.m4a")
        },
        {
          id: 71,
          english: "Twenty-three",
          native: "Blaeve vɔ etɔ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaeve_vɔ_etɔ̃.m4a")

        },
        {
          id: 72,
          english: "Twenty-four",
          native: "Blaeve vɔ ene",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaeve_vɔ_ene.m4a")
        },
        {
          id: 73,
          english: "Twenty-five",
          native: "Blaeve vɔ atɔ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaeve_vɔ_atɔ̃.m4a")
        }
      ],
      questions: [
        {
          id: 414,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English number.",
          question: "What number did you hear?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaeve_vɔ_ene.m4a"),
          options: [
            { id: 1, text: "21" },
            { id: 2, text: "22" },
            { id: 3, text: "23" },
            { id: 4, text: "24" }
          ],
          correctOptionId: 4,
          hints: [
            "Twenty = Blaeve",
            "Four = Ene"
          ],
          explanation: "You heard 'Blaeve vɔ ene' which means Twenty-four in Ewe."
        },
        {
          id: 415,
          type: "drag_drop",
          instruction: "Complete the pattern by dragging the correct Ewe number.",
          question: "Blaeve vɔ ɖeka, Blaeve vɔ eve, ___, Blaeve vɔ ene, Blaeve vɔ atɔ̃",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Blaeve vɔ etɔ̃" },
            { id: "opt2", text: "Blaeve vɔ ade" },
            { id: "opt3", text: "Blaetɔ̃" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt1"
          },
          hints: [
            "Twenty-three comes after twenty-two"
          ],
          explanation: "Blaeve vɔ etɔ̃ = Twenty-three. The pattern counts from twenty-one to twenty-five."
        }
      ]
    },

    {
      id: "4-7",
      type: "phrases",
      title: "Telling Time",
      icon: "clock-outline",
      description: "Learn how to ask and tell the time in Ewe",
      words: [ "Gaƒoƒo ka mee?", "Gaƒoƒo etɔ̃e", "Ŋdi", "Zã me" ],
      vocabulary: [
        {
          id: 48,
          english: "What time is it?",
          native: "Gaƒoƒo ka mee?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/gafofo_ka_mee.m4a")
        },
        {
          id: 49,
          english: "It is three o'clock",
          native: "Gaƒoƒo etɔ̃e",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/gafofo_etɔ̃e.m4a")
        },
        {
          id: 56,
          english: "In the morning",
          native: "Ŋdi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/ngdi.m4a")
        },
        {
          id: 57,
          english: "At night",
          native: "Zã me",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/zã_me.m4a")
        }
      ],
      questions: [
        {
          id: 416,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'What time is it?' in Ewe?",
          options: [
            { id: 1, text: "Gaƒoƒo ka mee?" },
            { id: 2, text: "Gaƒoƒo etɔ̃e" },
            { id: 3, text: "Ŋdi" },
            { id: 4, text: "Zã me" }
          ],
          correctOptionId: 1,
          hints: [
            "Question about time"
          ],
          explanation: "Gaƒoƒo ka mee? = What time is it?"
        },
        {
          id: 417,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "It's 3:00 = Gaƒoƒo _______",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "ka mee?" },
            { id: "opt2", text: "etɔ̃e" },
            { id: "opt3", text: "Ŋdi" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt2"
          },
          hints: [
            "etɔ̃ = three"
          ],
          explanation: "Gaƒoƒo etɔ̃e = It is three o'clock."
        }
      ]
    },

    {
      id: "4-8",
      type: "words",
      title: "Days & Weeks",
      icon: "calendar-outline",
      description: "Learn the Ewe words for today, tomorrow, yesterday and next week",
      words: [ "Egba", "Etsɔ", "Etsɔ si va yi","Kɔshiɖa si gbɔna"
      ],
      vocabulary: [
        {
          id: 50,
          english: "Today",
          native: "Egba",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/egba.m4a")
        },
        {
          id: 51,
          english: "Tomorrow",
          native: "Etsɔ",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/etsɔ.m4a")
        },
        {
          id: 58,
          english: "Yesterday",
          native: "Etsɔ si va yi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/etsɔ_si_va_yi.m4a")
        },
        {
          id: 59,
          english: "Next week",
          native: "Kɔshiɖa si gbɔna",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/kɔshia_si_gbɔna.m4a")
        }
      ],
      questions: [
        {
          id: 418,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Yesterday' in Ewe?",
          options: [
            { id: 1, text: "Egba" },
            { id: 2, text: "Etsɔ" },
            { id: 3, text: "Etsɔ si va yi" },
            { id: 4, text: "Kɔshiɖa si gbɔna" }
          ],
          correctOptionId: 3,
          hints: [
            "The day before today"
          ],
          explanation: "Etsɔ si va yi = Yesterday in Ewe."
        },
        {
          id: 419,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What does this Ewe word mean in English?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/etsɔ.m4a"),
          options: [
            { id: 1, text: "Today" },
            { id: 2, text: "Tomorrow" },
            { id: 3, text: "Yesterday" },
            { id: 4, text: "Next week" }
          ],
          correctOptionId: 2,
          hints: [
            "The day after today"
          ],
          explanation: "You heard 'Etsɔ' which means Tomorrow in Ewe."
        },
        {
          id: 420,
          type: "drag_drop",
          instruction: "Complete the Ewe phrase by dragging the correct word.",
          question: "_____ si va yi (Yesterday)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "Egba" },
            { id: "opt2", text: "Etsɔ" },
            { id: "opt3", text: "Kɔshiɖa" }
          ],
          correctDrop: {
            blankId: "blank1",
            itemId: "opt2"
          },
          hints: [
            "Yesterday = the day before today"
          ],
          explanation: "Etsɔ si va yi = Yesterday in Ewe."
        }
      ]
    },

    {
      id: "4-9",
      type: "words",
      title: "Days of the Week",
      icon: "calendar-outline",
      description: "Learn the seven days of the week in Ewe",
      words: [ "Dzoɖagbe", "Blãɖagbe", "Kuɖagbe", "Yawoɖagbe", "Fiɖagbe", "Memleɖagbe", "Kɔshiɖagbe" ],
      vocabulary: [
        {
          id: 81,
          english: "Monday",
          native: "Dzoɖagbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/dzodagbe.m4a")
        },
        {
          id: 82,
          english: "Tuesday",
          native: "Blãɖagbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/bladagbe.m4a")
        },
        {
          id: 83,
          english: "Wednesday",
          native: "Kuɖagbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/kudagbe.m4a")
        },
        {
          id: 84,
          english: "Thursday",
          native: "Yawoɖagbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/yawodagbe.m4a")
        },
        {
          id: 85,
          english: "Friday",
          native: "Fiɖagbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/fidagbe.m4a")
        },
        {
          id: 86,
          english: "Saturday",
          native: "Memleɖagbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/memledagbe.m4a")
        },
        {
          id: 87,
          english: "Sunday",
          native: "Kɔshiɖagbe",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/kɔshidagbe.m4a")
        }
      ],
      questions: [
        {
          id: 421,
          type: "multiple_choice",
          instruction: "Select the correct Ewe word.",
          question: "What is 'Monday' in Ewe?",
          options: [
            { id: 1, text: "Memleɖagbe" },
            { id: 2, text: "Kuɖagbe" },
            { id: 3, text: "Dzoɖagbe" },
            { id: 4, text: "Yawoɖagbe" }
          ],
          correctOptionId: 3,
          hints: [
            "The first day of the week"
          ],
          explanation: "Dzoɖagbe = Monday in Ewe."
        },
        {
          id: 422,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What day of the week did you hear?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/memledagbe.m4a"),
          options: [
            { id: 1, text: "Monday" },
            { id: 2, text: "Wednesday" },
            { id: 3, text: "Friday" },
            { id: 4, text: "Saturday" }
          ],
          correctOptionId: 4,
          hints: [
            "The day before Sunday"
          ],
          explanation: "You heard 'Memleɖagbe' which means Saturday in Ewe."
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
        instruction: "Select the correct Ewe number.",
        question: "What is 8 in Ewe?",
        options: [
          { id: 1, text: "Ade" },
          { id: 2, text: "Adre" },
          { id: 3, text: "Enyi" },
          { id: 4, text: "Asieke" }
        ],
        correctOptionId: 3,
        hints: [
          "Comes after seven"
        ],
        explanation: "Enyi = Eight in Ewe."
      },
      {
        id: 502,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English number.",
        question: "What number did you hear?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/ene.m4a"),
        options: [
          { id: 1, text: "2" },
          { id: 2, text: "3" },
          { id: 3, text: "4" },
          { id: 4, text: "5" }
        ],
        correctOptionId: 3,
        hints: [
          "Sounds like 'eh-neh'"
        ],
        explanation: "You heard 'Ene' which means Four in Ewe."
      },
      {
        id: 503,
        type: "drag_drop",
        instruction: "Complete the pattern by dragging the correct Ewe number.",
        question: "Ɖeka, Eve, ___, Ene, Atɔ̃",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Etɔ̃"},
          { id: "opt2", text: "Ade" },
          { id: "opt3", text: "Ewo" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt1"
        },
        hints: [
          "Three comes after two"
        ],
        explanation: "Etɔ̃ = Three."
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ewe number.",
        question: "What is 50 in Ewe?",
        options: [
          { id: 1, text: "Blaeve" },
          { id: 2, text: "Blaatɔ̃" },
          { id: 3, text: "Blaene" },
          { id: 4, text: "Blaetɔ̃" }
        ],
        correctOptionId: 2,
        hints: [
          "Five tens",
          "Bla + atɔ̃"
        ],
        explanation: "Blaatɔ̃ = Fifty in Ewe."
      },
      {
        id: 505,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English number.",
        question: "What number did you hear?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/blaadre.m4a"),
        options: [
          { id: 1, text: "70" },
          { id: 2, text: "60" },
          { id: 3, text: "80" },
          { id: 4, text: "90" }
        ],
        correctOptionId: 1,
        hints: [
          "Seven tens",
          "Bla + adre"
        ],
        explanation: "You heard 'Blaadre' which means Seventy in Ewe."
      },
      {
        id: 506,
        type: "drag_drop",
        instruction: "Complete the pattern by dragging the correct Ewe number.",
        question: "Blaeve, ___, Blaene, Blaatɔ̃",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Blaade" },
          { id: "opt2", text: "Blaetɔ̃" },
          { id: "opt3", text: "Blaenyi" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt2"
        },
        hints: [
          "Thirty comes after twenty"
        ],
        explanation: "Blaetɔ̃ = Thirty."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'It is three o'clock' in Ewe?",
        options: [
          { id: 1, text: "Gaƒoƒo ka mee?" },
          { id: 2, text: "Gaƒoƒo etɔ̃e" },
          { id: 3, text: "Ŋdi" },
          { id: 4, text: "Zã me" }
        ],
        correctOptionId: 2,
        hints: [
          "Gaƒoƒo = time",
          "etɔ̃ = three"
        ],
        explanation: "Gaƒoƒo etɔ̃e = It is three o'clock."
      },
      {
        id: 508,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What does this Ewe phrase mean in English?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/zã_me.m4a"),
        options: [
          { id: 1, text: "In the morning" },
          { id: 2, text: "At night" },
          { id: 3, text: "Today" },
          { id: 4, text: "Tomorrow" }
        ],
        correctOptionId: 2,
        hints: [
          "Zã = night"
        ],
        explanation: "You heard 'Zã me' which means At night."
      },
      {
        id: 509,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Tomorrow' in Ewe?",
        options: [
          { id: 1, text: "Egba" },
          { id: 2, text: "Etsɔ" },
          { id: 3, text: "Etsɔ si va yi" },
          { id: 4, text: "Kɔshiɖa si gbɔna" }
        ],
        correctOptionId: 2,
        hints: [
          "The day after today"
        ],
        explanation: "Etsɔ = Tomorrow in Ewe."
      },
      {
        id: 510,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What day of the week did you hear?",
        audioUrl: require("../../../../assets/audio/ewe/beginner/chapter4/kɔshidagbe.m4a"),
        options: [
          { id: 1, text: "Monday" },
          { id: 2, text: "Wednesday" },
          { id: 3, text: "Friday" },
          { id: 4, text: "Sunday" }
        ],
        correctOptionId: 4,
        hints: [
          "The last day of the week"
        ],
        explanation: "You heard 'Kɔshiɖagbe' which means Sunday in Ewe."
      },
      {
        id: 511,
        type: "multiple_choice",
        instruction: "Select the correct Ewe word.",
        question: "What is 'Saturday' in Ewe?",
        options: [
          { id: 1, text: "Fiɖagbe" },
          { id: 2, text: "Memleɖagbe" },
          { id: 3, text: "Kɔshiɖagbe" },
          { id: 4, text: "Kuɖagbe" }
        ],
        correctOptionId: 2,
        hints: [
          "The day before Sunday"
        ],
        explanation: "Memleɖagbe = Saturday in Ewe."
      },
      {
        id: 512,
        type: "drag_drop",
        instruction: "Complete the pattern by dragging the correct Ewe number.",
        question: "Wuiɖeka, Wui eve, Wui etɔ̃, ___ , Wui atɔ̃",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "Wui ene" },
          { id: "opt2", text: "Wui ade" },
          { id: "opt3", text: "Ewo" }
        ],
        correctDrop: {
          blankId: "blank1",
          itemId: "opt1"
        },
        hints: [
          "Fourteen comes after thirteen"
        ],
        explanation: "Wui ene = Fourteen."
      }
    ]
  }
};