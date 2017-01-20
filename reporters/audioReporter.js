const beep = require("beepbeep");

const audioReporter = {
  jasmineStarted: (suiteInfo) => {
    console.log("Running with audio reporter");
  },
  specDone: (result) => {
    if (result.failedExpectations.length > 0) {
      beep();
    }
  },
};
module.exports = audioReporter;