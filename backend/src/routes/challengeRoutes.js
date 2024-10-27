const express = require("express");
const challengeController = require("../controllers/challengeController");
const router = express.Router();

router.post("/challenge/create", challengeController.create);
router.put("/challenge/:id/update", challengeController.update);
router.delete("/challenge/:id/delete", challengeController.delete);
router.get("/challenge/:id/posts", challengeController.findById);
router.get("/challenge/findAll", challengeController.findAll);

module.exports = router;
