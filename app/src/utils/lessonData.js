import eweAdvancedChapter1 from "../data/course_content/ewe/advanced/chapter1.js";
import eweAdvancedChapter2 from "../data/course_content/ewe/advanced/chapter2.js";
import eweAdvancedChapter3 from "../data/course_content/ewe/advanced/chapter3.js";
import eweAdvancedChapter4 from "../data/course_content/ewe/advanced/chapter4.js";
import eweAdvancedChapter5 from "../data/course_content/ewe/advanced/chapter5.js";
import eweAdvancedChapter6 from "../data/course_content/ewe/advanced/chapter6.js";
import eweAdvancedChapter7 from "../data/course_content/ewe/advanced/chapter7.js";
import eweAdvancedChapter8 from "../data/course_content/ewe/advanced/chapter8.js";
import eweBeginnerChapter1 from "../data/course_content/ewe/beginner/chapter1.js";
import eweBeginnerChapter10 from "../data/course_content/ewe/beginner/chapter10.js";
import eweBeginnerChapter2 from "../data/course_content/ewe/beginner/chapter2.js";
import eweBeginnerChapter3 from "../data/course_content/ewe/beginner/chapter3.js";
import eweBeginnerChapter4 from "../data/course_content/ewe/beginner/chapter4.js";
import eweBeginnerChapter5 from "../data/course_content/ewe/beginner/chapter5.js";
import eweBeginnerChapter6 from "../data/course_content/ewe/beginner/chapter6.js";
import eweBeginnerChapter7 from "../data/course_content/ewe/beginner/chapter7.js";
import eweBeginnerChapter8 from "../data/course_content/ewe/beginner/chapter8.js";
import eweBeginnerChapter9 from "../data/course_content/ewe/beginner/chapter9.js";
import eweIntermediateChapter1 from "../data/course_content/ewe/intermediate/chapter1.js";
import eweIntermediateChapter10 from "../data/course_content/ewe/intermediate/chapter10.js";
import eweIntermediateChapter2 from "../data/course_content/ewe/intermediate/chapter2.js";
import eweIntermediateChapter3 from "../data/course_content/ewe/intermediate/chapter3.js";
import eweIntermediateChapter4 from "../data/course_content/ewe/intermediate/chapter4.js";
import eweIntermediateChapter5 from "../data/course_content/ewe/intermediate/chapter5.js";
import eweIntermediateChapter6 from "../data/course_content/ewe/intermediate/chapter6.js";
import eweIntermediateChapter7 from "../data/course_content/ewe/intermediate/chapter7.js";
import eweIntermediateChapter8 from "../data/course_content/ewe/intermediate/chapter8.js";
import eweIntermediateChapter9 from "../data/course_content/ewe/intermediate/chapter9.js";
import twiBeginnerChapter1 from "../data/course_content/twi/beginner/chapter1.js";
import twiBeginnerChapter10 from "../data/course_content/twi/beginner/chapter10.js";
import twiBeginnerChapter2 from "../data/course_content/twi/beginner/chapter2.js";
import twiBeginnerChapter3 from "../data/course_content/twi/beginner/chapter3.js";
import twiBeginnerChapter4 from "../data/course_content/twi/beginner/chapter4.js";
import twiBeginnerChapter5 from "../data/course_content/twi/beginner/chapter5.js";
import twiBeginnerChapter6 from "../data/course_content/twi/beginner/chapter6.js";
import twiBeginnerChapter7 from "../data/course_content/twi/beginner/chapter7.js";
import twiBeginnerChapter8 from "../data/course_content/twi/beginner/chapter8.js";
import twiBeginnerChapter9 from "../data/course_content/twi/beginner/chapter9.js";

export const getLessonData = () => {
  try {
    return {
      "as-tw": {
        beginner: {
          chapter1: twiBeginnerChapter1,
          chapter2: twiBeginnerChapter2,
          chapter3: twiBeginnerChapter3,
          chapter4: twiBeginnerChapter4,
          chapter5: twiBeginnerChapter5,
          chapter6: twiBeginnerChapter6,
          chapter7: twiBeginnerChapter7,
          chapter8: twiBeginnerChapter8,
          chapter9: twiBeginnerChapter9,
          chapter10: twiBeginnerChapter10,
        },
        intermediate: {},
        advanced: {},
      },
      "ga": {
        beginner: {},
        intermediate: {},
        advanced: {},
      },
"ewe": {
        beginner: {
          chapter1: eweBeginnerChapter1,
          chapter2: eweBeginnerChapter2,
          chapter3: eweBeginnerChapter3,
          chapter4: eweBeginnerChapter4,
          chapter5: eweBeginnerChapter5,
          chapter6: eweBeginnerChapter6,
          chapter7: eweBeginnerChapter7,
          chapter8: eweBeginnerChapter8,
          chapter9: eweBeginnerChapter9,
          chapter10: eweBeginnerChapter10,
},
intermediate: {
          chapter1: eweIntermediateChapter1,
          chapter2: eweIntermediateChapter2,
          chapter3: eweIntermediateChapter3,
          chapter4: eweIntermediateChapter4,
          chapter5: eweIntermediateChapter5,
          chapter6: eweIntermediateChapter6,
          chapter7: eweIntermediateChapter7,
          chapter8: eweIntermediateChapter8,
          chapter9: eweIntermediateChapter9,
          chapter10: eweIntermediateChapter10,
        },
        advanced: {
          chapter1: eweAdvancedChapter1,
          chapter2: eweAdvancedChapter2,
          chapter3: eweAdvancedChapter3,
          chapter4: eweAdvancedChapter4,
          chapter5: eweAdvancedChapter5,
          chapter6: eweAdvancedChapter6,
          chapter7: eweAdvancedChapter7,
          chapter8: eweAdvancedChapter8,
        },
      },
    };
  } catch (error) {
    console.error("Error loading lesson data:", error);
    return {};
  }
};

export const getLanguageData = (language, level) => {
  try {
    const data = getLessonData();
    return data?.[language]?.[level] || {};
  } catch (error) {
    console.error("Error getting language data:", error);
    return {};
  }
};