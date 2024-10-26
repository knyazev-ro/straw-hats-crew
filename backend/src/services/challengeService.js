const prisma = require("../models/prismaClient");

exports.create = async (challengeData) => {
  const challenge = await prisma.challenge.create({
    data: challengeData,
  });
  return challenge;
};

exports.update = async (id, challengeData) => {
  const updatedChallenge = await prisma.challenge.update({
    where: { id },
    data: challengeData,
  });
  return updatedChallenge;
};

exports.delete = async (id) => {
  await prisma.challenge.delete({
    where: { id },
  });
};

exports.findById = async (id) => {
  const challenge = await prisma.challenge.findUnique({
    where: { id },
    include: {
      teams: true,
      achivement: true,
      posts: true,
      voting: true,
    },
  });
  return challenge;
};

exports.findAll = async () => {
  const challenges = await prisma.challenge.findMany({
    include: {
      teams: true,
      achivement: true,
      posts: true,
      voting: true,
    },
  });
  return challenges;
};
