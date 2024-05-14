const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subTitle: [String],

  statisticTitle: String,
  statistic: [
    {
      title: String,
      number: String,
    },
  ],
  quote: String,

  testimonialTitle: String,
  testimonialSubTitle: String,
  testimonials: [
    {
      name: String,
      job: String,
      description: String,
      img: String,
    },
  ],
  certificatesTitle: {
    type: String,
  },
  certificates: [
    {
      title: String,
      img: String,
      year: Number,
      issuedBy: String,
    },
  ],
});
const home = mongoose.model("home", homeSchema);
module.exports = home;
