const express = require("express");
const userController = require("../controllers/userController");

const route = express.Router();

//Регистрация пользователя
route.post("/register", userController.register);
//Авторизация пользователя
route.post("/login", userController.login);
//Поиск пользователя по ID
route.get("/find/:id", userController.findById);

//Поиск всех пользователей
route.get("/findAll", userController.findAll);

// Экспорт маршрутизатора
module.exports = router;
