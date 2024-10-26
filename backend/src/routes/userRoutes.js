const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//Регистрация пользователя
router.post("/register", userController.register);
//Авторизация пользователя
router.post("/login", userController.login);
//Поиск пользователя по ID
router.get("/find/:id", userController.findById);

//Поиск всех пользователей
router.get("/findAll", userController.findAll);

// Экспорт маршрутизатора
module.exports = router;
