const express = require("express");
const teamController = require("../controllers/teamController");

const router = express.Router();

//Регистрация пользователя
router.post("/create", teamController.create);
//Авторизация пользователя
router.post("/delete", teamController.delete);
//Поиск пользователя по ID
router.get("/find/:id", teamController.findById);

//Добавление пользователя в команду
router.post("/add/:user", teamController.addUser);
//Удаление пользователя из команды
router.post("/add/:user", teamController.addUser);

//Поиск всех пользователей
router.get("/del/:user", teamController.findAll);

// Экспорт маршрутизатора
module.exports = router;
