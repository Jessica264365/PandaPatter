const db = require("../models");

// Defining methods for the flashcard controller
module.exports = {
  findAll: function (req, res) {
    db.FlashCard.find({ uid: req.params.uid })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
        console.log(res.status);
      });
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
