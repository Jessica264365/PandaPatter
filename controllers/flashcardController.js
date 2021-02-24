const db = require("../models");

// Defining methods for the flashcard controller
module.exports = {
  findAll: function (req, res) {
    db.FlashCard.findAll({ uid: req.uid })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByOutput: function (req, res) {
    db.FlashCard.find({ OutputLanguage: req.OutputLanguage })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.FlashCard.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
