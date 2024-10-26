const express = require("express");
const teamController = require("../controllers/teamController");

const route = express.Router();

//Регистрация пользователя
route.post("/create", teamController.create);
//Авторизация пользователя
route.post("/delete", teamController.delete);
//Поиск пользователя по ID
route.get("/find/:id", teamController.findById);

//Добавление пользователя в команду
route.post("/add/:user", teamController.addUser);
//Удаление пользователя из команды
route.post("/add/:user", teamController.addUser);

//Поиск всех пользователей
route.get("/del/:user", teamController.findAll);

// Экспорт маршрутизатора
module.exports = router;
