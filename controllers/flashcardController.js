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
    // db.FlashCard.findOneAndUpdate({_id: req.params.id}, { $set: { count: req.body.count }}, function(err){
    //   console.log("This is the mongo error: " + err)
    // })
    //   db.FlashCard.findOneAndUpdate(
    //     { _id: req.params.id },
    //     { $set: { count: req.body.count } },
    //     { new: true },
    //     { overwrite: true }
    //   )
    //     // db.FlashCard.findByIdAndUpdate(req.params.id, {new:true}, {
    //     //   $set: { count: req.body.count },
    //     // })

    //     .then((result) => res.json(result))
    //     .catch((err) => res.status(422).json(err));
  },
};
