const voteService = require("../services/voteService");

exports.create = async (req, res) => {
  try {
    const vote = await voteService.create(req.body);
    res.status(201).json(vote);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Vote creation failed" });
  }
};

exports.findByVotingId = async (req, res) => {
  try {
    const votes = await voteService.findByVotingId(
      parseInt(req.params.votingId)
    );
    res.status(200).json(votes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to find votes" });
  }
};
