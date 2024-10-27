const prisma = require("../models/prismaClient");

// Create a vote
exports.create = async (voteData) => {
  return await prisma.vote.create({
    data: voteData,
  });
};

// Find votes by voting session
exports.findByVotingId = async (votingId) => {
  return await prisma.vote.findMany({
    where: { votingId },
  });
};
