const express = require("express");
const challengeController = require("../controllers/challengeController");
const router = express.Router();

router.post("/", challengeController.create);
router.put("/:id", challengeController.update);
router.delete("/:id", challengeController.delete);
router.get("/:id", challengeController.findById);
router.get("/", challengeController.findAll);

module.exports = router;
