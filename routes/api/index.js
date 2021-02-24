const router = require("express").Router();
const flashcardRoutes = require("./flashcards");

// Flashcard Routes
router.use("/flashcards", flashcardRoutes);

module.exports = router;
