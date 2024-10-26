const prisma = require("../models/prismaClient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Регистрация нового пользователя
exports.register = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await prisma.user.create({
    data: {
      ...userData,
      passwordHash: hashedPassword,
    },
  });
  return user;
};

//Авторизация пользователя
exports.login = async (login, password) => {
  const user = await prisma.user.findUnique({
    where: { login },
  });

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

//Поиск пользователя по ID

exports.findById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

//Поиск всех пользователей

exports.findAll = async () => {
  const users = await prisma.user.findMany();
  return users;
};
