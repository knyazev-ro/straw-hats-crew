const express = require("express");
const achievementController = require("../controllers/achievementController");
const router = express.Router();

router.post("/", achievementController.create);
router.put("/:id", achievementController.update);
router.delete("/:id", achievementController.delete);
router.get("/:id", achievementController.findById);
router.get("/", achievementController.findAll);

// Routes for assigning and removing achievements for users
router.post("/:achievementId/assign", achievementController.assignToUser);
router.post("/:achievementId/remove", achievementController.removeFromUser);

module.exports = router;
