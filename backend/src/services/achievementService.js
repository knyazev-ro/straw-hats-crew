const prisma = require("../models/prismaClient");

// Create a new achievement
exports.create = async (achievementData) => {
  const achievement = await prisma.achievement.create({
    data: achievementData,
  });
  return achievement;
};

// Update an existing achievement
exports.update = async (id, achievementData) => {
  const updatedAchievement = await prisma.achievement.update({
    where: { id },
    data: achievementData,
  });
  return updatedAchievement;
};

// Delete an achievement
exports.delete = async (id) => {
  await prisma.achievement.delete({
    where: { id },
  });
};

// Get achievement by ID
exports.findById = async (id) => {
  const achievement = await prisma.achievement.findUnique({
    where: { id },
    include: { users: true, challenges: true }, // Include users and challenges associated with the achievement
  });
  return achievement;
};

// Get all achievements
exports.findAll = async () => {
  const achievements = await prisma.achievement.findMany({
    include: { users: true, challenges: true },
  });
  return achievements;
};

// Assign achievement to a user
exports.assignToUser = async (achievementId, userId) => {
  const achievement = await prisma.achievement.update({
    where: { id: achievementId },
    data: {
      users: {
        connect: { id: userId },
      },
    },
  });
  return achievement;
};

// Remove achievement from a user
exports.removeFromUser = async (achievementId, userId) => {
  const achievement = await prisma.achievement.update({
    where: { id: achievementId },
    data: {
      users: {
        disconnect: { id: userId },
      },
    },
  });
  return achievement;
};
