const challengeService = require("../services/challengeService");

// Create a new challenge
exports.create = async (req, res) => {
  try {
    const challengeData = req.body;
    const challenge = await challengeService.create(challengeData);
    res.status(201).json(challenge);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create challenge" });
  }
};

// Update an existing challenge
exports.update = async (req, res) => {
  try {
    const challengeId = parseInt(req.params.id);
    const challengeData = req.body;
    const updatedChallenge = await challengeService.update(
      challengeId,
      challengeData
    );
    res.status(200).json(updatedChallenge);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to update challenge" });
  }
};

// Delete a challenge
exports.delete = async (req, res) => {
  try {
    const challengeId = parseInt(req.params.id);
    await challengeService.delete(challengeId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to delete challenge" });
  }
};

// Find a challenge by ID
exports.findById = async (req, res) => {
  try {
    const challengeId = parseInt(req.params.id);
    const challenge = await challengeService.findById(challengeId);
    if (challenge) {
      res.status(200).json(challenge);
    } else {
      res.status(404).json({ error: "Challenge not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Find all challenges
exports.findAll = async (req, res) => {
  try {
    const challenges = await challengeService.findAll();
    res.status(200).json(challenges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
