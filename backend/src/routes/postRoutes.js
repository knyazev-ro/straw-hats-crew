const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();

router.post("/post/create", postController.create);
router.put("/post/:id/update", postController.update);
router.delete("/post/:id/delete", postController.delete);
router.get("/post/:id/findById", postController.findById);
router.get("/post/findAll", postController.findAll);

module.exports = router;
