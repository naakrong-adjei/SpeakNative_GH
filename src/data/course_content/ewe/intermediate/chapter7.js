export default {
  id: 17,
  title: "Social Life",
  description: "Learn how to make plans and socialize in Ewe",
  icon: "people-outline",
  totalXp: 10,
  difficulty: "Intermediate",

  sections: [
    {
      id: "17-1",
      type: "words",
      title: "Making Plans",
      icon: "calendar-outline",
      description: "Learn how to make plans with friends in Ewe",
      words: ["Mina míado go le Memleɖagbe", "Èva azãɖuƒea?", "Mava kɔ wò", "Kpe xɔ̃wòwo"],
      vocabulary: [
        {
          id: 204,
          english: "Let's meet on Saturday",
          native: "Mina míado go le Memleɖagbe",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míado_go_le_memleɖagbe.m4a")
        },
        {
          id: 205,
          english: "Are you coming to the party?",
          native: "Èva azãɖuƒea?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/èva_azãɖuƒea.m4a")
        },
        {
          id: 209,
          english: "I will pick you up",
          native: "Mava kɔ wò",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mava_kɔ_wò.m4a")
        },
        {
          id: 213,
          english: "Invite your friends",
          native: "Kpe xɔ̃wòwo",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/kpe_xɔ̃wòwo.m4a")
        }
      ],
      questions: [
        {
          id: 1701,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Let's meet on Saturday' in Ewe?",
          options: [
            { id: 1, text: "Mina míado go le Memleɖagbe" },
            { id: 2, text: "Èva azãɖuƒea?" },
            { id: 3, text: "Mava kɔ wò" },
            { id: 4, text: "Kpe xɔ̃wòwo" }
          ],
          correctOptionId: 1,
          hints: ["Mina = Let's", "Memleɖagbe = Saturday"],
          explanation: "Mina míado go le Memleɖagbe = Let's meet on Saturday in Ewe."
        },
        {
          id: 1702,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/èva_azãɖuƒea.m4a"),
          options: [
            { id: 1, text: "Let's meet on Saturday" },
            { id: 2, text: "Are you coming to the party?" },
            { id: 3, text: "I will pick you up" },
            { id: 4, text: "Invite your friends" }
          ],
          correctOptionId: 2,
          hints: ["èva = you are coming", "azãɖuƒe = party"],
          explanation: "You heard 'Èva azãɖuƒea?' which means 'Are you coming to the party?' in Ewe."
        },
        {
          id: 1703,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Mava [_____] wò (I will pick you up)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "kɔ" },
            { id: "opt2", text: "xɔ" },
            { id: "opt3", text: "yɔ" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["kɔ = pick up"],
          explanation: "Mava kɔ wò = I will pick you up in Ewe."
        }
      ]
    },

    {
      id: "17-2",
      type: "words",
      title: "Going Out Together",
      icon: "walk-outline",
      description: "Learn how to suggest going out together in Ewe",
      words: ["Mina míaƒome míayi", "Mina míaɖu ƒome", "Gaƒoƒo ka mee wòdzena egɔme?", "Hadzidzia vivi"],
      vocabulary: [
        {
          id: 207,
          english: "Let's go together",
          native: "Mina míaƒome míayi",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míaƒome_míayi.m4a")
        },
        {
          id: 208,
          english: "Let's eat together",
          native: "Mina míaɖu ƒome",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míaɖu_ƒome.m4a")
        },
        {
          id: 211,
          english: "What time does it start?",
          native: "Gaƒoƒo ka mee wòdzena egɔme?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/gaƒoƒo_ka_mee_wòdzena_egɔme.m4a")
        },
        {
          id: 210,
          english: "The music is nice",
          native: "Hadzidzia vivi",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/hadzidzia_vivi.m4a")
        }
      ],
      questions: [
        {
          id: 1704,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Let's go together' in Ewe?",
          options: [
            { id: 1, text: "Mina míaƒome míayi" },
            { id: 2, text: "Mina míaɖu ƒome" },
            { id: 3, text: "Gaƒoƒo ka mee wòdzena egɔme?" },
            { id: 4, text: "Hadzidzia vivi" }
          ],
          correctOptionId: 1,
          hints: ["Mina = Let's", "míaƒome = together"],
          explanation: "Mina míaƒome míayi = Let's go together in Ewe."
        },
        {
          id: 1705,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mina_míaɖu_ƒome.m4a"),
          options: [
            { id: 1, text: "Let's go together" },
            { id: 2, text: "Let's eat together" },
            { id: 3, text: "What time does it start?" },
            { id: 4, text: "The music is nice" }
          ],
          correctOptionId: 2,
          hints: ["míaɖu = let's eat", "ƒome = together"],
          explanation: "You heard 'Mina míaɖu ƒome' which means 'Let's eat together' in Ewe."
        },
        {
          id: 1706,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Gaƒoƒo ka mee wòdzena [_____]? (What time does it start?)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "egɔme" },
            { id: "opt2", text: "me" },
            { id: "opt3", text: "nu" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["egɔme = start"],
          explanation: "Gaƒoƒo ka mee wòdzena egɔme? = What time does it start? in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-17",
    title: "Review: Social Life",
    icon: "refresh-outline",
    description: "Review all the social life vocabulary you've learned",
    questions: [
      {
        id: 1707,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Let's meet on Saturday' in Ewe?",
        options: [
          { id: 1, text: "Mina míado go le Memleɖagbe" },
          { id: 2, text: "Èva azãɖuƒea?" },
          { id: 3, text: "Mava kɔ wò" },
          { id: 4, text: "Kpe xɔ̃wòwo" }
        ],
        correctOptionId: 1,
        hints: ["Memleɖagbe = Saturday"],
        explanation: "Mina míado go le Memleɖagbe = Let's meet on Saturday."
      },
      {
        id: 1708,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/mava_kɔ_wò.m4a"),
        options: [
          { id: 1, text: "Let's meet on Saturday" },
          { id: 2, text: "Are you coming to the party?" },
          { id: 3, text: "I will pick you up" },
          { id: 4, text: "Invite your friends" }
        ],
        correctOptionId: 3,
        hints: ["kɔ = pick up"],
        explanation: "You heard 'Mava kɔ wò' which means 'I will pick you up'."
      },
      {
        id: 1709,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Invite your friends' in Ewe?",
        options: [
          { id: 1, text: "Mina míado go le Memleɖagbe" },
          { id: 2, text: "Èva azãɖuƒea?" },
          { id: 3, text: "Mava kɔ wò" },
          { id: 4, text: "Kpe xɔ̃wòwo" }
        ],
        correctOptionId: 4,
        hints: ["xɔ̃wòwo = your friends"],
        explanation: "Kpe xɔ̃wòwo = Invite your friends."
      },
      {
        id: 1710,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/gaƒoƒo_ka_mee_wòdzena_egɔme.m4a"),
        options: [
          { id: 1, text: "Let's go together" },
          { id: 2, text: "Let's eat together" },
          { id: 3, text: "What time does it start?" },
          { id: 4, text: "The music is nice" }
        ],
        correctOptionId: 3,
        hints: ["egɔme = start"],
        explanation: "You heard 'Gaƒoƒo ka mee wòdzena egɔme?' which means 'What time does it start?'."
      },
      {
        id: 1711,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Let's go together' in Ewe?",
        options: [
          { id: 1, text: "Mina míaƒome míayi" },
          { id: 2, text: "Mina míaɖu ƒome" },
          { id: 3, text: "Gaƒoƒo ka mee wòdzena egɔme?" },
          { id: 4, text: "Hadzidzia vivi" }
        ],
        correctOptionId: 1,
        hints: ["míaƒome = together"],
        explanation: "Mina míaƒome míayi = Let's go together."
      },
      {
        id: 1712,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/intermediate/chapter7/hadzidzia_vivi.m4a"),
        options: [
          { id: 1, text: "Let's eat together" },
          { id: 2, text: "What time does it start?" },
          { id: 3, text: "The music is nice" },
          { id: 4, text: "Invite your friends" }
        ],
        correctOptionId: 3,
        hints: ["hadzidzia = music", "vivi = nice"],
        explanation: "You heard 'Hadzidzia vivi' which means 'The music is nice'."
      },
      {
        id: 1713,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Mava [_____] wò (I will pick you up)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "kɔ" },
          { id: "opt2", text: "xɔ" },
          { id: "opt3", text: "yɔ" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["kɔ = pick up"],
        explanation: "Mava kɔ wò = I will pick you up."
      },
      {
        id: 1714,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Gaƒoƒo ka mee wòdzena [_____]? (What time does it start?)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "egɔme" },
          { id: "opt2", text: "me" },
          { id: "opt3", text: "nu" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["egɔme = start"],
        explanation: "Gaƒoƒo ka mee wòdzena egɔme? = What time does it start?"
      },
      {
        id: 1715,
        type: "matching",
        instruction: "Match the Ewe social phrase with its English translation.",
        question: "Match each Ewe phrase to its correct meaning:",
        pairs: [
          { id: "pair1", left: "Mina míado go le Memleɖagbe", right: "I will pick you up" },
          { id: "pair2", left: "Mava kɔ wò", right: "Let's meet on Saturday" },
          { id: "pair3", left: "Mina míaɖu ƒome", right: "The music is nice" },
          { id: "pair4", left: "Hadzidzia vivi", right: "Let's eat together" }
        ],
        correctMatches: [
          { leftId: "pair1", rightId: "pair2" },
          { leftId: "pair2", rightId: "pair1" },
          { leftId: "pair3", rightId: "pair4" },
          { leftId: "pair4", rightId: "pair3" }
        ],
        hints: ["Match the social phrase to its meaning"],
        explanation: "These are common social life phrases in Ewe."
      }
    ]
  }
};