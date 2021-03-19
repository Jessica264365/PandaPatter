const router = require("express").Router();
const flashcardController = require("../../controllers/flashcardController");

router.route("/:uid").get(flashcardController.findAll);

router.route("/").post(flashcardController.create);
router
  .route("/language/:language/:uid")
  .get(flashcardController.findAllByLanguage);

router.route("/:id").put(flashcardController.update);

module.exports = router;
