const express = require("express");
const teamController = require("../controllers/teamController");

const router = express.Router();

//Регистрация пользователя
router.post("/team/create", teamController.create);
//Авторизация пользователя
router.post("/team/delete", teamController.delete);
//Поиск пользователя по ID
router.get("/teamfind/:id", teamController.findById);

//Добавление пользователя в команду
router.post("/teamadd/:user", teamController.addUser);
//Удаление пользователя из команды
router.post("/teamadd/:user", teamController.addUser);

//Поиск всех пользователей
router.get("/teamdel/:user", teamController.findAll);

// Экспорт маршрутизатора
module.exports = router;
