const express = require("express");
const voteController = require("../controllers/voteController");
const router = express.Router();

router.post("/", voteController.create);
router.get("/voting/:votingId", voteController.findByVotingId);

module.exports = router;
