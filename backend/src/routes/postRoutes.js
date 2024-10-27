const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();

router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);
router.get("/:id", postController.findById);
router.get("/", postController.findAll);

module.exports = router;
