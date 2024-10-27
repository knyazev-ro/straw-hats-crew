const postService = require("../services/postService");

exports.create = async (req, res) => {
  try {
    const post = await postService.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Post creation failed" });
  }
};

exports.update = async (req, res) => {
  try {
    const post = await postService.update(parseInt(req.params.id), req.body);
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Post update failed" });
  }
};

exports.delete = async (req, res) => {
  try {
    await postService.delete(parseInt(req.params.id));
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Post deletion failed" });
  }
};

exports.findById = async (req, res) => {
  try {
    const post = await postService.findById(parseInt(req.params.id));
    post
      ? res.status(200).json(post)
      : res.status(404).json({ error: "Post not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to find post" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const posts = await postService.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to find posts" });
  }
};
