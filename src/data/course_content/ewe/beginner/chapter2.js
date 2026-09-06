export default {
  id: 2,
  title: "Introductions",
  description: "Learn how to introduce yourself and others in Ewe",
  icon: "person-add-outline",
  totalXp: 15,
  difficulty: "Beginner",

  sections: [
    {
      id: "2-1",
      type: "words",
      title: "Your Name",
      icon: "person-outline",
      description: "Learn how to ask and give your name in Ewe",
      words: ["Ŋkɔwò ɖe?", "Ŋkɔnye enye Ami", "Edo dzidzɔ nam be medo go wò"],
      vocabulary: [
        {
          id: 16,
          english: "What is your name?",
          native: "Ŋkɔwò ɖe?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/ŋkɔwò_ɖe.m4a")
        },
        {
          id: 17,
          english: "My name is Ama",
          native: "Ŋkɔnye enye Ami",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/ŋkɔnye_enye_ami.m4a")
        },
        {
          id: 20,
          english: "Nice to meet you",
          native: "Edo dzidzɔ nam be medo go wò",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/edo_dzidzɔ_nam_be_medo_go_wò.m4a")
        }
      ],
      questions: [
        {
          id: 201,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'What is your name?' in Ewe?",
          options: [
            { id: 1, text: "Ŋkɔwò ɖe?" },
            { id: 2, text: "Ŋkɔnye enye Ami" },
            { id: 3, text: "Edo dzidzɔ nam be medo go wò" },
            { id: 4, text: "Afika nètso?" }
          ],
          correctOptionId: 1,
          hints: ["Ŋkɔ = name", "wò = your"],
          explanation: "Ŋkɔwò ɖe? = What is your name? in Ewe."
        },
        {
          id: 202,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'Nice to meet you' in Ewe?",
          options: [
            { id: 1, text: "Ŋkɔwò ɖe?" },
            { id: 2, text: "Ŋkɔnye enye Ami" },
            { id: 3, text: "Edo dzidzɔ nam be medo go wò" },
            { id: 4, text: "Afika nèle?" }
          ],
          correctOptionId: 3,
          hints: ["Used when meeting someone for the first time"],
          explanation: "Edo dzidzɔ nam be medo go wò = Nice to meet you in Ewe."
        }
      ]
    },

    {
      id: "2-2",
      type: "words",
      title: "Where You're From",
      icon: "location-outline",
      description: "Learn how to ask and say where you're from in Ewe",
      words: ["Afika nètso?", "Metso Ghana", "Afika nèle?", "Mele Egɛ̃"],
      vocabulary: [
        {
          id: 18,
          english: "Where are you from?",
          native: "Afika nètso?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/afikae_nètso.m4a")
        },
        {
          id: 19,
          english: "I am from Ghana",
          native: "Metso Ghana",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/metso_ghana.m4a")
        },
        {
          id: 24,
          english: "Where do you live?",
          native: "Afika nèle?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/afika_nèle.m4a")
        },
        {
          id: 25,
          english: "I live in Accra",
          native: "Mele Egɛ̃",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/mele_ege.m4a")
        }
      ],
      questions: [
        {
          id: 203,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'Where are you from?' in Ewe?",
          options: [
            { id: 1, text: "Afika nèle?" },
            { id: 2, text: "Afika nètso?" },
            { id: 3, text: "Metso Ghana" },
            { id: 4, text: "Mele Egɛ̃" }
          ],
          correctOptionId: 2,
          hints: ["Afika = where", "nètso = you are from"],
          explanation: "Afika nètso? = Where are you from? in Ewe."
        },
        {
          id: 204,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am from Ghana' in Ewe?",
          options: [
            { id: 1, text: "Afika nètso?" },
            { id: 2, text: "Metso Ghana" },
            { id: 3, text: "Afika nèle?" },
            { id: 4, text: "Mele Egɛ̃" }
          ],
          correctOptionId: 2,
          hints: ["Metso = I am from"],
          explanation: "Metso Ghana = I am from Ghana in Ewe."
        },
        {
          id: 205,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I live in Accra' in Ewe?",
          options: [
            { id: 1, text: "Afika nètso?" },
            { id: 2, text: "Metso Ghana" },
            { id: 3, text: "Afika nèle?" },
            { id: 4, text: "Mele Egɛ̃" }
          ],
          correctOptionId: 4,
          hints: ["Mele = I live in"],
          explanation: "Mele Egɛ̃ = I live in Accra in Ewe."
        }
      ]
    },

    {
      id: "2-3",
      type: "words",
      title: "About You",
      icon: "id-card-outline",
      description: "Learn how to talk about yourself in Ewe",
      words: ["Ƒe nenie nèxɔ?", "Me xɔ Ƒe blaeve vɔ ve", "Menye sukuvi", "Nufiala menye", "Dɔ ka nèwɔna?", "Èɖe srɔ̃a?"],
      vocabulary: [
        {
          id: 21,
          english: "How old are you?",
          native: "Ƒe nenie nèxɔ?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/fe_nenie_nèxɔ.m4a")
        },
        {
          id: 100,
          english: "I am 22 years old",
          native: "Me xɔ Ƒe blaeve vɔ ve",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/me_xɔ_fe_blaeve_vɔ_ve.m4a")
        },
        {
          id: 22,
          english: "I am a student",
          native: "Menye sukuvi",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/menye_sukuvi.m4a")
        },
        {
          id: 101,
          english: "I am a teacher",
          native: "Nufiala menye",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/nufiala_menye.m4a")
        },
        {
          id: 26,
          english: "What work do you do?",
          native: "Dɔ ka nèwɔna?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/dɔ_ka_nèwɔna.m4a")
        },
        {
          id: 29,
          english: "Are you married?",
          native: "Èɖe srɔ̃a?",
          audioUrl: require("../../../../assets/audio/ewe/beginner/chapter2/èɖe_srɔ̃a.m4a")
        }
      ],
      questions: [
        {
          id: 206,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you ask 'How old are you?' in Ewe?",
          options: [
            { id: 1, text: "Dɔ ka nèwɔna?" },
            { id: 2, text: "Èɖe srɔ̃a?" },
            { id: 3, text: "Ƒe nenie nèxɔ?" },
            { id: 4, text: "Menye sukuvi" }
          ],
          correctOptionId: 3,
          hints: ["Ƒe = year", "nenie = how many"],
          explanation: "Ƒe nenie nèxɔ? = How old are you? in Ewe."
        },
        {
          id: 207,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am 22 years old' in Ewe?",
          options: [
            { id: 1, text: "Ƒe nenie nèxɔ?" },
            { id: 2, text: "Me xɔ Ƒe blaeve vɔ ve" },
            { id: 3, text: "Menye sukuvi" },
            { id: 4, text: "Èɖe srɔ̃a?" }
          ],
          correctOptionId: 2,
          hints: ["blaeve vɔ ve = 22"],
          explanation: "Me xɔ Ƒe blaeve vɔ ve = I am 22 years old in Ewe."
        },
        {
          id: 208,
          type: "multiple_choice",
          instruction: "Select the correct Ewe phrase.",
          question: "How do you say 'I am a teacher' in Ewe?",
          options: [
            { id: 1, text: "Menye sukuvi" },
            { id: 2, text: "Nufiala menye" },
            { id: 3, text: "Me xɔ Ƒe blaeve vɔ ve" },
            { id: 4, text: "Dɔ ka nèwɔna?" }
          ],
          correctOptionId: 2,
          hints: ["Nufiala = teacher", "menye = I am"],
          explanation: "Nufiala menye = I am a teacher in Ewe."
        }
      ]
    }
  ],

  review: {
    id: "review-2",
    title: "Review: Introductions",
    icon: "refresh-outline",
    description: "Review all the introduction vocabulary and phrases you've learned",
    questions: [
      {
        id: 501,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'What is your name?' in Ewe?",
        options: [
          { id: 1, text: "Ŋkɔwò ɖe?" },
          { id: 2, text: "Ŋkɔnye enye Ami" },
          { id: 3, text: "Afika nètso?" },
          { id: 4, text: "Afika nèle?" }
        ],
        correctOptionId: 1,
        hints: ["Ŋkɔ = name"],
        explanation: "Ŋkɔwò ɖe? = What is your name?"
      },
      {
        id: 502,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'My name is Ama' in Ewe?",
        options: [
          { id: 1, text: "Ŋkɔwò ɖe?" },
          { id: 2, text: "Ŋkɔnye enye Ami" },
          { id: 3, text: "Metso Ghana" },
          { id: 4, text: "Mele Egɛ̃" }
        ],
        correctOptionId: 2,
        hints: ["Ŋkɔnye = my name"],
        explanation: "Ŋkɔnye enye Ami = My name is Ama."
      },
      {
        id: 503,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'Where are you from?' in Ewe?",
        options: [
          { id: 1, text: "Afika nèle?" },
          { id: 2, text: "Afika nètso?" },
          { id: 3, text: "Metso Ghana" },
          { id: 4, text: "Mele Egɛ̃" }
        ],
        correctOptionId: 2,
        hints: ["Afika = where"],
        explanation: "Afika nètso? = Where are you from?"
      },
      {
        id: 504,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am from Ghana' in Ewe?",
        options: [
          { id: 1, text: "Metso Ghana" },
          { id: 2, text: "Mele Egɛ̃" },
          { id: 3, text: "Afika nètso?" },
          { id: 4, text: "Afika nèle?" }
        ],
        correctOptionId: 1,
        hints: ["Metso = I am from"],
        explanation: "Metso Ghana = I am from Ghana."
      },
      {
        id: 505,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you ask 'How old are you?' in Ewe?",
        options: [
          { id: 1, text: "Dɔ ka nèwɔna?" },
          { id: 2, text: "Èɖe srɔ̃a?" },
          { id: 3, text: "Ƒe nenie nèxɔ?" },
          { id: 4, text: "Menye sukuvi" }
        ],
        correctOptionId: 3,
        hints: ["Ƒe = year"],
        explanation: "Ƒe nenie nèxɔ? = How old are you?"
      },
      {
        id: 506,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am 22 years old' in Ewe?",
        options: [
          { id: 1, text: "Me xɔ Ƒe blaeve vɔ ve" },
          { id: 2, text: "Menye sukuvi" },
          { id: 3, text: "Medoa ʋegbé vie" },
          { id: 4, text: "Mele ʋegbé srɔ̃m" }
        ],
        correctOptionId: 1,
        hints: ["blaeve vɔ ve = 22"],
        explanation: "Me xɔ Ƒe blaeve vɔ ve = I am 22 years old."
      },
      {
        id: 507,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'I am a teacher' in Ewe?",
        options: [
          { id: 1, text: "Menye sukuvi" },
          { id: 2, text: "Nufiala menye" },
          { id: 3, text: "Medoa ʋegbé vie" },
          { id: 4, text: "Mele ʋegbé srɔ̃m" }
        ],
        correctOptionId: 2,
        hints: ["Nufiala = teacher"],
        explanation: "Nufiala menye = I am a teacher."
      },
      {
        id: 508,
        type: "multiple_choice",
        instruction: "Select the correct Ewe phrase.",
        question: "How do you say 'Nice to meet you' in Ewe?",
        options: [
          { id: 1, text: "Ŋkɔwò ɖe?" },
          { id: 2, text: "Ŋkɔnye enye Ami" },
          { id: 3, text: "Edo dzidzɔ nam be medo go wò" },
          { id: 4, text: "Afika nètso?" }
        ],
        correctOptionId: 3,
        hints: ["Used when meeting someone"],
        explanation: "Edo dzidzɔ nam be medo go wò = Nice to meet you."
      }
    ]
  }
};