const mongoose = require("mongoose");

const FlashCardSchema = new mongoose.Schema({
  InputLanguage: {
    type: String,
    default: "",
  },
  OutputLanguage: {
    type: String,
    default: "",
  },
  Front: {
    type: String,
    trim: true,
    default: "",
  },
  Back: {
    type: String,
    trim: true,
    default: "",
  },
  uid: {
    type: String,
    trim: true,
    default: "",
  },
  // status: {
  //   type: String,
  //   default: "front",
  // },
});

const FlashCard = mongoose.model("FlashCard", FlashCardSchema);

module.exports = FlashCard;
