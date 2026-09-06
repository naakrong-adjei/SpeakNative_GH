export default {
  id: 8,
  title: "Debate & Opinion",
  description: "Learn advanced Ewe phrases for stating opinions, agreeing, and disagreeing",
  icon: "megaphone-outline",
  totalXp: 15,
  difficulty: "Advanced",

  sections: [
    {
      id: "8-1",
      type: "words",
      title: "Disagreeing",
      icon: "close-circle-outline",
      description: "Learn how to express disagreement and contrary opinions in Ewe",
      words: ["Nyemelɔ̃ ɖe nya ma dzi o", "Le ema teƒe", "Mèse enya gɔme o", "Melɔ̃ ɖe edzi vie"],
      vocabulary: [
        {
          id: 275,
          english: "I disagree with that point",
          native: "Nyemelɔ̃ ɖe nya ma dzi o",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/nyemelɔ̃_ɖe_nya_ma_dzi_o.m4a")
        },
        {
          id: 276,
          english: "On the contrary",
          native: "Le ema teƒe",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/le_ema_teƒe.m4a")
        },
        {
          id: 279,
          english: "You have missed the point",
          native: "Mèse enya gɔme o",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/mèse_enya_gɔme_o.m4a")
        },
        {
          id: 280,
          english: "I agree to some extent",
          native: "Melɔ̃ ɖe edzi vie",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/melɔ̃_ɖe_edzi_vie.m4a")
        }
      ],
      questions: [
        {
          id: 801,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I disagree with that point' in Ewe?",
          options: [
            { id: 1, text: "Nyemelɔ̃ ɖe nya ma dzi o" },
            { id: 2, text: "Le ema teƒe" },
            { id: 3, text: "Mèse enya gɔme o" },
            { id: 4, text: "Melɔ̃ ɖe edzi vie" }
          ],
          correctOptionId: 1,
          hints: ["nyemelɔ̃ = I don't agree", "nya ma = that point"],
          explanation: "Nyemelɔ̃ ɖe nya ma dzi o = I disagree with that point in Ewe."
        },
        {
          id: 802,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/le_ema_teƒe.m4a"),
          options: [
            { id: 1, text: "I disagree with that point" },
            { id: 2, text: "On the contrary" },
            { id: 3, text: "You have missed the point" },
            { id: 4, text: "I agree to some extent" }
          ],
          correctOptionId: 2,
          hints: ["le ema teƒe = on the contrary"],
          explanation: "You heard 'Le ema teƒe' which means 'On the contrary' in Ewe."
        },
        {
          id: 803,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Mèse enya [_____] o (You have missed the point)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "gɔme" },
            { id: "opt2", text: "dzi" },
            { id: "opt3", text: "nu" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["gɔme = meaning/point"],
          explanation: "Mèse enya gɔme o = You have missed the point in Ewe."
        },
        {
          id: 804,
          type: "matching",
          instruction: "Match the Ewe disagreement phrase with its English translation.",
          question: "Match each Ewe phrase to its correct meaning:",
          pairs: [
            { id: "pair1", left: "Nyemelɔ̃ ɖe nya ma dzi o", right: "I agree to some extent" },
            { id: "pair2", left: "Le ema teƒe", right: "I disagree with that point" },
            { id: "pair3", left: "Mèse enya gɔme o", right: "On the contrary" },
            { id: "pair4", left: "Melɔ̃ ɖe edzi vie", right: "You have missed the point" }
          ],
          correctMatches: [
            { leftId: "pair1", rightId: "pair2" },
            { leftId: "pair2", rightId: "pair3" },
            { leftId: "pair3", rightId: "pair4" },
            { leftId: "pair4", rightId: "pair1" }
          ],
          hints: ["Match the disagreement phrase to its meaning"],
          explanation: "These are common disagreement phrases in Ewe."
        }
      ]
    },

    {
      id: "8-2",
      type: "words",
      title: "Making Your Case",
      icon: "chatbox-outline",
      description: "Learn how to present and support your arguments in Ewe",
      words: ["Ɖaseɖiɖia doa nye nya ŋu ŋusẽ", "Na maɖe nye nya me nyuie", "Afika wò ɖaseɖiɖi le?"],
      vocabulary: [
        {
          id: 277,
          english: "The evidence supports my claim",
          native: "Ɖaseɖiɖia doa nye nya ŋu ŋusẽ",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/ɉaseɖiɖia_doa_nye_nya_ŋu_ŋusẽ.m4a")
        },
        {
          id: 278,
          english: "Let me make my point clear",
          native: "Na maɖe nye nya me nyuie",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/na_maɖe_nye_nya_me_nyuie.m4a")
        },
        {
          id: 281,
          english: "Where is your proof?",
          native: "Afika wò ɖaseɖiɖi le?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/afika_wò_ɖaseɖiɖi_le.m4a")
        }
      ],
      questions: [
        {
          id: 805,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'The evidence supports my claim' in Ewe?",
          options: [
            { id: 1, text: "Ɖaseɖiɖia doa nye nya ŋu ŋusẽ" },
            { id: 2, text: "Na maɖe nye nya me nyuie" },
            { id: 3, text: "Afika wò ɖaseɖiɖi le?" },
            { id: 4, text: "Nyemelɔ̃ ɖe nya ma dzi o" }
          ],
          correctOptionId: 1,
          hints: ["ɖaseɖiɖia = evidence", "doa ŋu ŋusẽ = supports"],
          explanation: "Ɖaseɖiɖia doa nye nya ŋu ŋusẽ = The evidence supports my claim in Ewe."
        },
        {
          id: 806,
          type: "listening_multiple_choice",
          instruction: "Listen to the audio and select the correct English translation.",
          question: "What did the speaker say?",
          audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/na_maɖe_nye_nya_me_nyuie.m4a"),
          options: [
            { id: 1, text: "The evidence supports my claim" },
            { id: 2, text: "Let me make my point clear" },
            { id: 3, text: "Where is your proof?" },
            { id: 4, text: "On the contrary" }
          ],
          correctOptionId: 2,
          hints: ["na maɖe = let me make", "nyuie = clear"],
          explanation: "You heard 'Na maɖe nye nya me nyuie' which means 'Let me make my point clear' in Ewe."
        },
        {
          id: 807,
          type: "drag_drop",
          instruction: "Complete the phrase by dragging the correct word.",
          sentence: "Afika wò ɖaseɖiɖi [_____]? (Where is your proof?)",
          blankId: "blank1",
          items: [
            { id: "opt1", text: "le" },
            { id: "opt2", text: "me" },
            { id: "opt3", text: "nu" }
          ],
          correctDrop: { blankId: "blank1", itemId: "opt1" },
          hints: ["le = is at"],
          explanation: "Afika wò ɖaseɖiɖi le? = Where is your proof? in Ewe."
        },
        {
          id: 808,
          type: "matching",
          instruction: "Match the Ewe debate phrase with its English translation.",
          question: "Match each Ewe phrase to its correct meaning:",
          pairs: [
            { id: "pair1", left: "Ɖaseɖiɖia doa nye nya ŋu ŋusẽ", right: "Let me make my point clear" },
            { id: "pair2", left: "Na maɖe nye nya me nyuie", right: "Where is your proof?" },
            { id: "pair3", left: "Afika wò ɖaseɖiɖi le?", right: "The evidence supports my claim" }
          ],
          correctMatches: [
            { leftId: "pair1", rightId: "pair3" },
            { leftId: "pair2", rightId: "pair1" },
            { leftId: "pair3", rightId: "pair2" }
          ],
          hints: ["Match the debate phrase to its meaning"],
          explanation: "These are common debate phrases in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-8",
    title: "Review: Debate & Opinion",
    icon: "refresh-outline",
    description: "Review all the debate and opinion vocabulary you've learned",
    questions: [
      {
        id: 809,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I disagree with that point' in Ewe?",
        options: [
          { id: 1, text: "Nyemelɔ̃ ɖe nya ma dzi o" },
          { id: 2, text: "Le ema teƒe" },
          { id: 3, text: "Mèse enya gɔme o" },
          { id: 4, text: "Melɔ̃ ɖe edzi vie" }
        ],
        correctOptionId: 1,
        hints: ["nyemelɔ̃ = I don't agree"],
        explanation: "Nyemelɔ̃ ɖe nya ma dzi o = I disagree with that point."
      },
      {
        id: 810,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/melɔ̃_ɖe_edzi_vie.m4a"),
        options: [
          { id: 1, text: "I disagree with that point" },
          { id: 2, text: "On the contrary" },
          { id: 3, text: "You have missed the point" },
          { id: 4, text: "I agree to some extent" }
        ],
        correctOptionId: 4,
        hints: ["vie = a little"],
        explanation: "You heard 'Melɔ̃ ɖe edzi vie' which means 'I agree to some extent'."
      },
      {
        id: 811,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'On the contrary' in Ewe?",
        options: [
          { id: 1, text: "Nyemelɔ̃ ɖe nya ma dzi o" },
          { id: 2, text: "Le ema teƒe" },
          { id: 3, text: "Mèse enya gɔme o" },
          { id: 4, text: "Melɔ̃ ɖe edzi vie" }
        ],
        correctOptionId: 2,
        hints: ["teƒe = place/position"],
        explanation: "Le ema teƒe = On the contrary in Ewe."
      },
      {
        id: 812,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/mèse_enya_gɔme_o.m4a"),
        options: [
          { id: 1, text: "I disagree with that point" },
          { id: 2, text: "On the contrary" },
          { id: 3, text: "You have missed the point" },
          { id: 4, text: "I agree to some extent" }
        ],
        correctOptionId: 3,
        hints: ["gɔme = meaning"],
        explanation: "You heard 'Mèse enya gɔme o' which means 'You have missed the point'."
      },
      {
        id: 813,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'The evidence supports my claim' in Ewe?",
        options: [
          { id: 1, text: "Ɖaseɖiɖia doa nye nya ŋu ŋusẽ" },
          { id: 2, text: "Na maɖe nye nya me nyuie" },
          { id: 3, text: "Afika wò ɖaseɖiɖi le?" },
          { id: 4, text: "Nyemelɔ̃ ɖe nya ma dzi o" }
        ],
        correctOptionId: 1,
        hints: ["ɖaseɖiɖia = evidence"],
        explanation: "Ɖaseɖiɖia doa nye nya ŋu ŋusẽ = The evidence supports my claim."
      },
      {
        id: 814,
        type: "listening_multiple_choice",
        instruction: "Listen to the audio and select the correct English translation.",
        question: "What did the speaker say?",
        audioUrl: require("../../../../assets/audio/ewe/advanced/chapter8/afika_wò_ɖaseɖiɖi_le.m4a"),
        options: [
          { id: 1, text: "The evidence supports my claim" },
          { id: 2, text: "Let me make my point clear" },
          { id: 3, text: "Where is your proof?" },
          { id: 4, text: "On the contrary" }
        ],
        correctOptionId: 3,
        hints: ["afika = where"],
        explanation: "You heard 'Afika wò ɖaseɖiɖi le?' which means 'Where is your proof?'."
      },
      {
        id: 815,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Let me make my point clear' in Ewe?",
        options: [
          { id: 1, text: "Ɖaseɖiɖia doa nye nya ŋu ŋusẽ" },
          { id: 2, text: "Na maɖe nye nya me nyuie" },
          { id: 3, text: "Afika wò ɖaseɖiɖi le?" },
          { id: 4, text: "Le ema teƒe" }
        ],
        correctOptionId: 2,
        hints: ["na maɖe = let me make", "nyuie = clear"],
        explanation: "Na maɖe nye nya me nyuie = Let me make my point clear."
      },
      {
        id: 816,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Mèse enya [_____] o (You have missed the point)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "gɔme" },
          { id: "opt2", text: "dzi" },
          { id: "opt3", text: "nu" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["gɔme = meaning"],
        explanation: "Mèse enya gɔme o = You have missed the point."
      },
      {
        id: 817,
        type: "drag_drop",
        instruction: "Complete the phrase by dragging the correct word.",
        sentence: "Afika wò ɖaseɖiɖi [_____]? (Where is your proof?)",
        blankId: "blank1",
        items: [
          { id: "opt1", text: "le" },
          { id: "opt2", text: "me" },
          { id: "opt3", text: "nu" }
        ],
        correctDrop: { blankId: "blank1", itemId: "opt1" },
        hints: ["le = is at"],
        explanation: "Afika wò ɖaseɖiɖi le? = Where is your proof?"
      }
    ]
  }
};