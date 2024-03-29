const db = require("../models");

// Defining methods for the flashcard controller
module.exports = {
  findAll: function (req, res) {
    db.FlashCard.find({ uid: req.params.uid })
      .then((result) => res.json(result))
      .catch((err) => {
        res.status(422).json(err);
        console.log(res.status);
      });
  },
  findAllByLanguage: function (req, res) {
    db.FlashCard.find({
      OutputLanguage: req.params.language,
      uid: req.params.uid,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
        console.log(res.status);
      });
  },
  findByOutput: function (req, res) {
    db.FlashCard.find({ OutputLanguage: req.OutputLanguage })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.FlashCard.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.FlashCard.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          count: req.body.count,
        },
      },
      { new: true, runValidators: true }
    )
      .then((results) => {
        res.json(results);
        console.log(results);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  remove: function (req, res) {
    db.FlashCard.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
