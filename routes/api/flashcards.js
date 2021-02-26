const router = require("express").Router();
const flashcardController = require("../../controllers/flashcardController");

router.route("/:uid").get(flashcardController.findAll);

router.route("/").post(flashcardController.create);
router.route("/language/:language").get(flashcardController.findAllByLanguage);

module.exports = router;

// router.get("/flashcards",function(req,res){
//     db.FlashCard.find().then(function(results){
//         res.json(results)
//     })
// })

// router.post("/api/flashcards", function(req,res){
//     db.FlashCard.create(req.body).then(function(results){
//         res.json(results)
//     })
// })
