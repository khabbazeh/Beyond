const mongoose = require("mongoose");
const aboutSchema = new mongoose.Schema({
  Arabic: {
    title: {
      type: String,
      term: true,
    },
    companyBio: {
      title: {
        type: String,
        trim: true,
      },
      paragraph: {
        type: String,
        trim: true,
      },
    },
    whatWeDo: {
      title: {
        type: String,
        trim: true,
      },
      paragraph: {
        type: String,
        trim: true,
      },
    },
    ourVision: {
      title: {
        type: String,
        trim: true,
      },
      paragraph: {
        type: String,
        trim: true,
      },
    },
    ourMission: {
      title: {
        type: String,
        trim: true,
      },
      paragraph: {
        type: String,
        trim: true,
      },
    },
    ourGoals: {
      title: {
        type: String,
        trim: true,
      },
      paragraph: {
        type: String,
        trim: true,
      },
    },
    ourPromise: {
      title: {
        type: String,
        trim: true,
      },
      paragraph: {
        type: String,
        trim: true,
      },
    },
  },
});
const aboutUs = mongoose.model("aboutUs", aboutSchema);
module.exports = aboutUs;
