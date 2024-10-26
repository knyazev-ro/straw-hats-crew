const e = require("express");
const userService = require("../services/userService");

//Регистрация нового пользователя
exports.register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userService.register(userData);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Registration failed" });
  }
};

//Авторизация пользователя

exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const token = await userService.login(login, password);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Invalid credentials" });
  }
};

//Поиск пользователя по ID

exports.findById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await userService.findById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};

//Поиск всех пользователей
exports.findAll = async (req, res) => {
  try {
    const users = await userService.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
