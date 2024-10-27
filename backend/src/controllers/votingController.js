const votingService = require("../services/votingService");

exports.create = async (req, res) => {
  try {
    const voting = await votingService.create(req.body);
    res.status(201).json(voting);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Voting creation failed" });
  }
};

exports.update = async (req, res) => {
  try {
    const voting = await votingService.update(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json(voting);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Voting update failed" });
  }
};

exports.closeVoting = async (req, res) => {
  try {
    const voting = await votingService.closeVoting(parseInt(req.params.id));
    res.status(200).json(voting);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to close voting" });
  }
};
