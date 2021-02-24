const router = require("express").Router();
const flashcardRoutes = require("./flashcards");

// Flashcard Routes
router.use("/api", flashcardRoutes);

module.exports = router;
