const prisma = require("../models/prismaClient");

// Create a voting session
exports.create = async (votingData) => {
  return await prisma.voting.create({
    data: votingData,
  });
};

// Update a voting session
exports.update = async (id, votingData) => {
  return await prisma.voting.update({
    where: { id },
    data: votingData,
  });
};

// Close voting session
exports.closeVoting = async (id) => {
  return await prisma.voting.update({
    where: { id },
    data: { status: "CLOSED" },
  });
};

// Find voting by challenge ID
exports.findByChallengeId = async (challengeId) => {
  return await prisma.voting.findUnique({
    where: { challengeId },
  });
};
