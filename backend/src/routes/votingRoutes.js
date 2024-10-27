const express = require("express");
const votingController = require("../controllers/votingController");
const router = express.Router();

router.post("/", votingController.create);
router.put("/:id", votingController.update);
router.post("/:id/close", votingController.closeVoting);

module.exports = router;
