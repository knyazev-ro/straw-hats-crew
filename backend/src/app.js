const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
const achievementRoutes = require("./routes/achievementRoutes");

const authMiddleware = require("./middlewares/authMiddleware");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger"); //регистрация входящих запросов

app.use(express.json());

app.use(logger);

app.use("/api/users", userRoutes);

//проверка входящего запроса на действительный токен JWT
app.use("/api/teams", authMiddleware, teamRoutes);
app.use("/api/achievements", authMiddleware, achievementRoutes);

app.use(errorHandler);

module.exports = app;
