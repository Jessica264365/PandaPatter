const router=require("express").Router()
const flashcardController = require("../../controllers/flashcardController")


// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);


router.get("/api/flashcards",function(req,res){
    db.FlashCard.find().then(function(results){
        res.json(results)
    })
})

router.post("/api/flashcards", function(req,res){
    db.FlashCard.create(req.body).then(function(results){
        res.json(results)
    })
})


module.exports=router