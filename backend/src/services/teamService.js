const prisma = require("../models/prismaClient");

//Создание команды
exports.create = async (teamData) => {
  const team = await prisma.team.create({
    data: teamData,
  });
  return team;
};

//Удаление команды
exports.delete = async (id) => {
  await prisma.team.delete({
    where: { id },
  });
};
//Добавление участника
exports.addUser = async (teamId, userId) => {
  const updateTeam = await prisma.team.update({
    where: { id: teamId },
    data: {
      users: {
        connect: { id: userId },
      },
    },
  });
  return updateTeam;
};
//Удаление участника
exports.removeUser = async (teamId, userId) => {
  const updateTeam = await prisma.team.update({
    where: { id: teamId },
    data: {
      users: {
        disconnect: { id: userId },
      },
    },
  });
  return updateTeam;
};
//Поиск команды по ID

exports.findById = async (id) => {
  const team = await prisma.team.findUnique({
    where: { id },
    include: {
      users: true,
      lead: true,
    },
  });
  return team;
};
//Поиск всех

exports.findAll = async () => {
  const teams = await prisma.team.findMany({
    include: {
      users: true, // Optionally include users for each team
      lead: true,
    },
  });
  return teams;
};
