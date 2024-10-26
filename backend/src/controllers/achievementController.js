const achievementService = require("../services/achievementService");

// Create a new achievement
exports.create = async (req, res) => {
  try {
    const achievementData = req.body;
    const achievement = await achievementService.create(achievementData);
    res.status(201).json(achievement);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create achievement" });
  }
};

// Update an existing achievement
exports.update = async (req, res) => {
  try {
    const achievementId = parseInt(req.params.id);
    const achievementData = req.body;
    const updatedAchievement = await achievementService.update(
      achievementId,
      achievementData
    );
    res.status(200).json(updatedAchievement);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to update achievement" });
  }
};

// Delete an achievement
exports.delete = async (req, res) => {
  try {
    const achievementId = parseInt(req.params.id);
    await achievementService.delete(achievementId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to delete achievement" });
  }
};

// Find an achievement by ID
exports.findById = async (req, res) => {
  try {
    const achievementId = parseInt(req.params.id);
    const achievement = await achievementService.findById(achievementId);
    if (achievement) {
      res.status(200).json(achievement);
    } else {
      res.status(404).json({ error: "Achievement not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Find all achievements
exports.findAll = async (req, res) => {
  try {
    const achievements = await achievementService.findAll();
    res.status(200).json(achievements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Assign an achievement to a user
exports.assignToUser = async (req, res) => {
  try {
    const achievementId = parseInt(req.params.achievementId);
    const { userId } = req.body;
    const updatedAchievement = await achievementService.assignToUser(
      achievementId,
      userId
    );
    res.status(200).json(updatedAchievement);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to assign achievement to user" });
  }
};

// Remove an achievement from a user
exports.removeFromUser = async (req, res) => {
  try {
    const achievementId = parseInt(req.params.achievementId);
    const { userId } = req.body;
    const updatedAchievement = await achievementService.removeFromUser(
      achievementId,
      userId
    );
    res.status(200).json(updatedAchievement);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to remove achievement from user" });
  }
};
