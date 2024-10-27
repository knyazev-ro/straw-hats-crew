const express = require("express");
const votingController = require("../controllers/votingController");
const router = express.Router();

router.post("/voting/create", votingController.create);
router.put("/voting/:id/update", votingController.update);
router.post("/voting/:id/close", votingController.closeVoting);

module.exports = router;
