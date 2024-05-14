const mongoose = require("mongoose");
const validator = require("validator");
const contactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      validate: [validator.isAlpha, " Your name must only contain characters"],
      required: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Please enter a valid email"],
      required: true,
    },
    requestType: {
      type: String,
      enum: ["general question", "marketing", "graphic design"],
      default: "general question",
    },
    message: {
      type: String,
      trim: true,
      required: true,
    },
    IsSeen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const contectUs = mongoose.model("contectUs", contactUsSchema);
module.exports = contectUs;
