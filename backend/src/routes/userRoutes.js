const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//Регистрация пользователя
router.post("/register", userController.register);
//Авторизация пользователя
router.post("/users/login", userController.login);
//Поиск пользователя по ID
router.get("/findUser/:id", userController.findById);

//Поиск всех пользователей
router.get("/findAllUser", userController.findAll);

// Экспорт маршрутизатора
module.exports = router;
