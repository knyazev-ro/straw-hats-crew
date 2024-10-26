const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
const achievementRoutes = require("./routes/achievementRoutes");
const cors = require("cors");

const authMiddleware = require("./middlewares/authMiddleware");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger"); //регистрация входящих запросов

app.use(express.json());

app.use(logger);

app.use("/api/users", userRoutes);

app.use(
  cors({
    origin: "http://localhost:3000", // Allow only localhost:3000
    methods: ["GET", "POST", "PUT", "DELETE"], // Define allowed methods
    credentials: false, // Allow cookies to be sent with requests
  })
);

//проверка входящего запроса на действительный токен JWT
app.use("/api/teams", authMiddleware, teamRoutes);
app.use("/api/achievements", authMiddleware, achievementRoutes);

app.use(errorHandler);

// module.exports = app;
// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
