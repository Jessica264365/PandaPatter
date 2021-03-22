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
  count: {
    type: String,
    trim: true,
    default: 0,
  },
});

const FlashCard = mongoose.model("FlashCard", FlashCardSchema);

module.exports = FlashCard;
