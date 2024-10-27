const express = require("express");
const achievementController = require("../controllers/achievementController");
const router = express.Router();

router.post("/achievements/create", achievementController.create);
router.put("/achievements/:id/update", achievementController.update);
router.delete("/achievements/:id/delete", achievementController.delete);
router.get("/achievements/:id/findById", achievementController.findById);
router.get("/achievements/findAll", achievementController.findAll);

// Routes for assigning and removing achievements for users
router.post("/:achievementId/assign", achievementController.assignToUser);
router.post("/:achievementId/remove", achievementController.removeFromUser);

module.exports = router;
